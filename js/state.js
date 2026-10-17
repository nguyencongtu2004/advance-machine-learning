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
    },
    {
      id: 7,
      num: "CHƯƠNG 7",
      title: "Mạng tích chập (CNN)",
      desc: "Convolution 2D, Feature Maps, Stride & Padding (Valid vs Same), Pooling (Max vs Average), Flatten & Fully Connected, Công thức kích thước đầu ra [(W - F + 2P)/S] + 1, Đếm tham số bộ lọc CNN, Trực quan hóa đặc trưng.",
      total: 40,
      weight: "Trọng tâm bài giảng (40 câu)"
    },
    {
      id: 8,
      num: "CHƯƠNG 8",
      title: "Seminar: Support Vector Machine (SVM)",
      desc: "Định đề Siêu phẳng lề cực đại (Max Margin Hyperplane), Vector hỗ trợ (Support Vectors), Hàm mất mát Hinge Loss, Siêu tham số C (Hard vs Soft Margin), Kernel Trick (Linear, Polynomial, RBF/Gaussian, Sigmoid), Điều kiện KKT.",
      total: 25,
      weight: "Seminar Nhóm 25 (25 câu)"
    },
    {
      id: 9,
      num: "CHƯƠNG 9",
      title: "Seminar: K-Nearest Neighbors (KNN)",
      desc: "Thuật toán học lười (Lazy Learner / Instance-based), Khoảng cách Minkowski, Euclidean, Manhattan, Cosine; Lựa chọn k & Hiện tượng Lời nguyền số chiều (Curse of Dimensionality), Cấu trúc cây KD-Tree & Ball Tree.",
      total: 20,
      weight: "Seminar Nhóm 09 (20 câu)"
    },
    {
      id: 10,
      num: "CHƯƠNG 10",
      title: "Seminar: Transformer & Attention",
      desc: "Cơ chế Self-Attention ma trận Q, K, V; Scaled Dot-Product Attention (chia căn d_k), Multi-Head Attention song song hóa, Mã hóa vị trí Positional Encoding (Sin-Cos), LayerNorm, Residual Connections, Khắc phục nghẽn cổ chai RNN.",
      total: 25,
      weight: "Seminar Nhóm 11 (25 câu)"
    },
    {
      id: 11,
      num: "CHƯƠNG 11",
      title: "Seminar: RNN, LSTM & Mamba SSM",
      desc: "Mạng hồi quy RNN & Lan truyền ngược qua thời gian BPTT, Triệt tiêu/Bùng nổ Gradient; Cổng tế bào LSTM (Forget, Input, Output gate, Cell State); Cổng GRU (Reset, Update); Kiến trúc Mamba SSM (Selective State Space Model, O(N) thời gian tuyến tính).",
      total: 30,
      weight: "Seminar Nhóm 17 (30 câu)"
    },
    {
      id: 12,
      num: "CHƯƠNG 12",
      title: "Seminar: ECOC & Multi-label/output",
      desc: "Mã sửa lỗi đầu ra ECOC (Error-Correcting Output Codes), Khoảng cách Hamming, Ma trận nhị phân (One-vs-All, All-Pairs) & ma trận tam phân; Phân loại Đa nhãn (Multi-label) vs Đa đầu ra (Multi-output), Binary Relevance, Classifier Chains.",
      total: 20,
      weight: "Seminar Nhóm 06 (20 câu)"
    },
    {
      id: 13,
      num: "CHƯƠNG 13",
      title: "Seminar: Nâng cao Cây quyết định Scikit-Learn",
      desc: "Bản chất xấp xỉ hằng số từng đoạn, Scikit-learn Criterion (squared_error, friedman_mse), Splitter best vs random, Minimal Cost-Complexity Pruning (ccp_alpha, path), Đặc trưng quan trọng (MDI Gini Importance), Giới hạn ngoại suy & độ nhạy phép quay.",
      total: 15,
      weight: "Seminar Nhóm 02 (15 câu)"
    },
    {
      id: 14,
      num: "CHƯƠNG 14",
      title: "Seminar: Nâng cao Tuyến tính & Phân rã SVD/QR",
      desc: "Phương trình pháp tuyến OLS, Hiện tượng đa cộng tuyến & Số điều kiện ma trận ill-conditioned, Phân rã QR & SVD tính giả nghịch đảo Moore-Penrose, Đảm bảo khả nghịch nghiêm ngặt của Ridge (X^T X + alpha I), Lasso Coordinate Descent & LARS, MultiTaskLasso.",
      total: 15,
      weight: "Seminar Nhóm 08 (15 câu)"
    },
    {
      id: 15,
      num: "CHƯƠNG 15",
      title: "Seminar: Nâng cao Ensemble & Stacking",
      desc: "Định lý Bồi thẩm đoàn Condorcet (xác suất tiệm cận 1), Bagging vs Pasting, Mẫu Out-of-Bag (36.8% và OOB Score), Extremely Randomized Trees (Extra-Trees), AdaBoost cập nhật trọng số exp, Gradient Boosting khớp phần dư âm, Stacking Level-0/1 K-Fold out-of-fold.",
      total: 15,
      weight: "Seminar Nhóm 12 (15 câu)"
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
      indices: { 'all': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0 }
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
      indices: { 'all': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0 }
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
    if (typeof str !== 'string') return String(str || '');
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ==============================================================================
     HELPER: RENDER MARKDOWN & KATEX LATEX MATH (DÙNG CHUNG CHO TOÀN BỘ ỨNG DỤNG)
  ============================================================================== */

  function renderMarkdownBlock(text) {
    if (!text) return '';
    const hasMarked = typeof marked !== 'undefined' && typeof marked.parse === 'function';
    const hasKatex = typeof katex !== 'undefined' && typeof katex.renderToString === 'function';

    if (!hasMarked) {
      return `<div class="md-block-raw" style="white-space: pre-wrap;">${escapeHtml(text)}</div>`;
    }

    try {
      const displayMath = [];
      const inlineMath = [];

      // 1. Tách và bảo vệ khối công thức toán học lớn ($$...$$)
      let cleanText = String(text).replace(/\$\$([\s\S]*?)\$\$/g, (match, formula) => {
        const idx = displayMath.length;
        displayMath.push(formula.trim());
        return `@@KATEX_DISPLAY_${idx}@@`;
      });

      // 2. Tách và bảo vệ công thức toán học nội dòng ($...$)
      cleanText = cleanText.replace(/\$([^\$\n]+?)\$/g, (match, formula) => {
        const idx = inlineMath.length;
        inlineMath.push(formula.trim());
        return `@@KATEX_INLINE_${idx}@@`;
      });

      // 3. Render Markdown chuẩn
      let html = marked.parse(cleanText, {
        gfm: true,
        breaks: true
      });

      // 4. Render KaTeX display
      html = html.replace(/@@KATEX_DISPLAY_(\d+)@@/g, (match, idx) => {
        const formula = displayMath[parseInt(idx, 10)] || '';
        if (hasKatex) {
          try {
            return `<div class="katex-display-wrapper">${katex.renderToString(formula, { displayMode: true, throwOnError: false, strict: false })}</div>`;
          } catch (e) {
            return `<div class="katex-display-raw">$$${escapeHtml(formula)}$$</div>`;
          }
        }
        return `<div class="katex-display-raw">$$${escapeHtml(formula)}$$</div>`;
      });

      // 5. Render KaTeX inline
      html = html.replace(/@@KATEX_INLINE_(\d+)@@/g, (match, idx) => {
        const formula = inlineMath[parseInt(idx, 10)] || '';
        if (hasKatex) {
          try {
            return katex.renderToString(formula, { displayMode: false, throwOnError: false, strict: false });
          } catch (e) {
            return `<span class="katex-inline-raw">$${escapeHtml(formula)}$</span>`;
          }
        }
        return `<span class="katex-inline-raw">$${escapeHtml(formula)}$</span>`;
      });

      return html;
    } catch (err) {
      console.error('Lỗi render Markdown Block:', err);
      return `<div style="white-space: pre-wrap;">${escapeHtml(text)}</div>`;
    }
  }

  function renderMarkdownInline(text) {
    if (!text) return '';
    const hasMarked = typeof marked !== 'undefined';
    const hasKatex = typeof katex !== 'undefined' && typeof katex.renderToString === 'function';

    try {
      const inlineMath = [];

      // Tách và bảo vệ công thức toán học nội dòng ($...$)
      let cleanText = String(text).replace(/\$([^\$\n]+?)\$/g, (match, formula) => {
        const idx = inlineMath.length;
        inlineMath.push(formula.trim());
        return `@@KATEX_INLINE_${idx}@@`;
      });

      let html = cleanText;
      if (hasMarked && typeof marked.parseInline === 'function') {
        html = marked.parseInline(cleanText);
      } else {
        html = escapeHtml(cleanText);
      }

      // Render KaTeX inline
      html = html.replace(/@@KATEX_INLINE_(\d+)@@/g, (match, idx) => {
        const formula = inlineMath[parseInt(idx, 10)] || '';
        if (hasKatex) {
          try {
            return katex.renderToString(formula, { displayMode: false, throwOnError: false, strict: false });
          } catch (e) {
            return `<span class="katex-inline-raw">$${escapeHtml(formula)}$</span>`;
          }
        }
        return `<span class="katex-inline-raw">$${escapeHtml(formula)}$</span>`;
      });

      return html;
    } catch (err) {
      console.error('Lỗi render Markdown Inline:', err);
      return escapeHtml(String(text));
    }
  }
