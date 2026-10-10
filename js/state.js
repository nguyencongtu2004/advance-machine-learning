/* ==============================================================================
   MODULE: STATE & STORAGE MANAGEMENT
   Chứa thông tin chương, trạng thái toàn cục (state), localStorage & Dark/Light Theme
============================================================================== */

  // --- THÔNG TIN 6 CHƯƠNG ---
  const CHAPTERS_INFO = [
    {
      id: 1,
      num: "CHƯƠNG 1",
      title: "Tổng quan về Học máy",
      desc: "Định nghĩa Arthur Samuel & Tom Mitchell (T-E-P), Phân loại Học có giám sát, Không giám sát, Bán giám sát, Tăng cường; Phân chia Train/Validation/Test, K-Fold CV.",
      total: 50,
      weight: "10 câu trong đề thi"
    },
    {
      id: 2,
      num: "CHƯƠNG 2",
      title: "Tiền xử lý & PCA",
      desc: "Xử lý dữ liệu khuyết (Imputation, Indicator), Ngoại lai (IQR, Z-score 3-sigma), Chuẩn hóa Min-Max Scaling vs Standard Scaler, Giảm chiều dữ liệu PCA 7 bước & EVR.",
      total: 50,
      weight: "12 câu trong đề thi"
    },
    {
      id: 3,
      num: "CHƯƠNG 3",
      title: "Tuyến tính & Đánh giá",
      desc: "Hồi quy OLS nghiệm đóng, Hiện tượng đa cộng tuyến & giả nghịch đảo, Chính quy hóa L2 Ridge & L1 Lasso & Elastic Net, Logistic Regression, Confusion Matrix, Precision, Recall, F1, ROC-AUC.",
      total: 90,
      weight: "TRỌNG TÂM (25 câu trong đề)"
    },
    {
      id: 4,
      num: "CHƯƠNG 4",
      title: "Cây quyết định & Ensemble",
      desc: "Entropy, Information Gain (ID3), Gain Ratio (C4.5), Gini Index (CART), Cắt tỉa Pre/Post-pruning, Bagging, Random Forest OOB & m=sqrt(d), AdaBoost cập nhật trọng số, Gradient Boosting (GBDT) dự đoán phần dư.",
      total: 80,
      weight: "TRỌNG TÂM (22 câu trong đề)"
    },
    {
      id: 5,
      num: "CHƯƠNG 5",
      title: "Bài toán Phân cụm",
      desc: "K-Means cực tiểu WCSS, Khởi tạo K-Means++ theo khoảng cách D(x)^2, Phương pháp Elbow, Hệ số Silhouette s(i) [-1, 1], Mô hình hỗn hợp Gauss (GMM) & thuật toán EM, DBSCAN (Eps, MinPts, Core, Border, Noise).",
      total: 50,
      weight: "13 câu trong đề thi"
    },
    {
      id: 6,
      num: "CHƯƠNG 6",
      title: "MLP & Backpropagation",
      desc: "Perceptron giới hạn XOR, Hàm kích hoạt Sigmoid, Tanh, ReLU, Leaky ReLU, Softmax; Vấn đề Triệt tiêu đạo hàm, Quy tắc chuỗi Lan truyền ngược, Gradient Descent (BGD, SGD, Mini-batch), Momentum, Adam, Đếm tham số mạng.",
      total: 80,
      weight: "TRỌNG TÂM (18 câu trong đề)"
    }
  ];

  // --- TRẠNG THÁI TOÀN BỘ ỨNG DỤNG ---
  const state = {
    allQuestions: [],
    theme: 'dark',

    // Lưu trữ trong localStorage
    userAnswers: {},     // { [qId]: { selected: number, isCorrect: boolean, timestamp: number } }
    wrongIds: new Set(), // Set<number>
    starredIds: new Set(),// Set<number>
    examHistory: [],

    // Navigation & View State
    currentTab: 'dashboard',

    // Practice Tab
    practiceChapter: 'all',
    practiceQuestions: [],
    practiceIndex: 0,
    practiceAnsweredThisTurn: false, // Kiểm tra đã chọn đáp án ở lượt xem hiện tại chưa
    practicePositions: {
      currentChapter: 'all',
      indices: { 'all': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 }
    },

    // Exam Tab
    examActive: false,
    examQuestions: [],
    examAnswers: {},     // { [index 0..99]: selectedOption }
    examIndex: 0,
    examTimeRemaining: 5400, // seconds
    examTimerInterval: null,
    examMode: 'submit',  // 'submit' hoặc 'instant'

    // Flashcard Tab
    flashcardChapter: 'all',
    flashcardQuestions: [],
    flashcardIndex: 0,
    flashcardFlipped: false,
    flashcardPositions: {
      currentChapter: 'all',
      indices: { 'all': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 }
    },

    // Docs Tab
    docsLoaded: false,
    docsActiveId: null,
    docsCurrentMarkdown: ''
  };

  // --- LOCAL STORAGE HELPERS ---
  const STORAGE_KEYS = {
    THEME: 'ml_exam_theme_v2',
    ANSWERS: 'ml_exam_user_answers_v2',
    WRONG: 'ml_exam_wrong_ids_v2',
    STARRED: 'ml_exam_starred_ids_v2',
    HISTORY: 'ml_exam_history_v2',
    PRACTICE_POS: 'ml_exam_practice_pos_v2',
    FLASHCARD_POS: 'ml_exam_flashcard_pos_v2',
    DOCS_ACTIVE: 'ml_exam_doc_active_v2'
  };

  function loadStorage() {
    try {
      const savedAnswers = localStorage.getItem(STORAGE_KEYS.ANSWERS);
      if (savedAnswers) state.userAnswers = JSON.parse(savedAnswers);

      const savedWrong = localStorage.getItem(STORAGE_KEYS.WRONG);
      if (savedWrong) state.wrongIds = new Set(JSON.parse(savedWrong));

      const savedStarred = localStorage.getItem(STORAGE_KEYS.STARRED);
      if (savedStarred) state.starredIds = new Set(JSON.parse(savedStarred));

      const savedHistory = localStorage.getItem(STORAGE_KEYS.HISTORY);
      if (savedHistory) state.examHistory = JSON.parse(savedHistory);

      const savedPos = localStorage.getItem(STORAGE_KEYS.PRACTICE_POS);
      if (savedPos) {
        try {
          const parsed = JSON.parse(savedPos);
          if (parsed.currentChapter) state.practicePositions.currentChapter = parsed.currentChapter;
          if (parsed.indices) state.practicePositions.indices = { ...state.practicePositions.indices, ...parsed.indices };
        } catch (e) { console.warn('Lỗi đọc practice pos:', e); }
      }

      const savedFcPos = localStorage.getItem(STORAGE_KEYS.FLASHCARD_POS);
      if (savedFcPos) {
        try {
          const parsedFc = JSON.parse(savedFcPos);
          if (parsedFc.currentChapter) state.flashcardPositions.currentChapter = parsedFc.currentChapter;
          if (parsedFc.indices) state.flashcardPositions.indices = { ...state.flashcardPositions.indices, ...parsedFc.indices };
        } catch (e) { console.warn('Lỗi đọc flashcard pos:', e); }
      }
    } catch (e) {
      console.warn('Không thể đọc dữ liệu localStorage:', e);
    }
  }

  function saveFlashcardPosition() {
    try {
      if (!state.flashcardPositions) {
        state.flashcardPositions = { currentChapter: 'all', indices: {} };
      }
      state.flashcardPositions.currentChapter = state.flashcardChapter;
      if (!state.flashcardPositions.indices) state.flashcardPositions.indices = {};
      state.flashcardPositions.indices[state.flashcardChapter] = state.flashcardIndex;
      localStorage.setItem(STORAGE_KEYS.FLASHCARD_POS, JSON.stringify(state.flashcardPositions));
    } catch (e) { console.error(e); }
  }

  function savePracticePosition() {
    try {
      if (!state.practicePositions) {
        state.practicePositions = { currentChapter: 'all', indices: {} };
      }
      state.practicePositions.currentChapter = state.practiceChapter;
      state.practicePositions.indices[state.practiceChapter] = state.practiceIndex;
      localStorage.setItem(STORAGE_KEYS.PRACTICE_POS, JSON.stringify(state.practicePositions));
    } catch (e) { console.error(e); }
  }

  function saveAnswers() {
    try {
      localStorage.setItem(STORAGE_KEYS.ANSWERS, JSON.stringify(state.userAnswers));
    } catch (e) { console.error(e); }
  }

  function saveWrong() {
    try {
      localStorage.setItem(STORAGE_KEYS.WRONG, JSON.stringify(Array.from(state.wrongIds)));
    } catch (e) { console.error(e); }
  }

  function saveStarred() {
    try {
      localStorage.setItem(STORAGE_KEYS.STARRED, JSON.stringify(Array.from(state.starredIds)));
    } catch (e) { console.error(e); }
  }

  // --- QUẢN LÝ GIAO DIỆN SÁNG / TỐI (THEME) ---
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
    applyTheme(saved);
  }

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    const iconEl = document.getElementById('theme-icon');
    const labelEl = document.getElementById('theme-label');
    const metaThemeColor = document.getElementById('meta-theme-color');
    if (theme === 'light') {
      if (iconEl) iconEl.textContent = '🌙';
      if (labelEl) labelEl.textContent = 'Tối';
      if (metaThemeColor) metaThemeColor.setAttribute('content', '#f8fafc');
    } else {
      if (iconEl) iconEl.textContent = '☀️';
      if (labelEl) labelEl.textContent = 'Sáng';
      if (metaThemeColor) metaThemeColor.setAttribute('content', '#0b0f19');
    }
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }

  function toggleTheme() {
    const nextTheme = (state.theme === 'light') ? 'dark' : 'light';
    applyTheme(nextTheme);
  }

  // --- KHỞI TẠO DỮ LIỆU ---

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
