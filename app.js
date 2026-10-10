/* ==============================================================================
   ỨNG DỤNG ÔN THI TRẮC NGHIỆM HỌC MÁY TIÊN TIẾN (UIT) - 21/10
   Logic toàn diện:
   - Chế độ Sáng / Tối (Light / Dark mode)
   - Lược bỏ icon emoji, thiết kế giao diện tinh gọn, chuyên nghiệp
   - Giải thích tức thì kèm tự động cuộn hiển thị
   - Thi thử 100 câu bấm giờ, Sổ tay câu sai, Flashcards & Phím tắt
============================================================================== */

(function () {
  'use strict';

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
    flashcardFlipped: false
  };

  // --- LOCAL STORAGE HELPERS ---
  const STORAGE_KEYS = {
    THEME: 'ml_exam_theme_v2',
    ANSWERS: 'ml_exam_user_answers_v2',
    WRONG: 'ml_exam_wrong_ids_v2',
    STARRED: 'ml_exam_starred_ids_v2',
    HISTORY: 'ml_exam_history_v2'
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
    } catch (e) {
      console.warn('Không thể đọc dữ liệu localStorage:', e);
    }
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
  function initApp() {
    if (window.QUESTION_BANK && Array.isArray(window.QUESTION_BANK)) {
      state.allQuestions = window.QUESTION_BANK;
    } else {
      console.error('Không tìm thấy dữ liệu QUESTION_BANK');
      state.allQuestions = [];
    }

    initTheme();
    loadStorage();
    setupEventListeners();
    updateGlobalStats();
    renderDashboardChapters();

    // Khởi tạo tab Luyện tập ban đầu
    setPracticeChapter('all');
    // Khởi tạo tab Flashcards
    setFlashcardChapter('all');
  }

  // --- CẬP NHẬT THỐNG KÊ TOÀN CỤC (HEADER & DASHBOARD) ---
  function updateGlobalStats() {
    const totalQ = state.allQuestions.length;
    const answeredCount = Object.keys(state.userAnswers).length;
    let correctCount = 0;

    Object.values(state.userAnswers).forEach(ans => {
      if (ans.isCorrect) correctCount++;
    });

    const percentDone = totalQ > 0 ? Math.round((answeredCount / totalQ) * 100) : 0;
    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

    // Header badge
    const globalStatEl = document.getElementById('global-progress-stat');
    if (globalStatEl) {
      globalStatEl.textContent = `${answeredCount}/${totalQ} (${percentDone}%)`;
    }

    // Tab badges
    const wrongBadge = document.getElementById('wrong-count-badge');
    if (wrongBadge) wrongBadge.textContent = state.wrongIds.size;

    const starredBadge = document.getElementById('starred-count-badge');
    if (starredBadge) starredBadge.textContent = state.starredIds.size;

    // Dashboard Banner
    const dashTotalEl = document.getElementById('dash-total-q');
    if (dashTotalEl) dashTotalEl.textContent = totalQ;

    const dashDoneEl = document.getElementById('dash-done-q');
    if (dashDoneEl) dashDoneEl.textContent = answeredCount;

    const dashAccEl = document.getElementById('dash-accuracy');
    if (dashAccEl) dashAccEl.textContent = `${accuracy}%`;

    const dashFillEl = document.getElementById('dashboard-progress-fill');
    if (dashFillEl) dashFillEl.style.width = `${percentDone}%`;
  }

  // --- TAB 1: RENDER DASHBOARD CHƯƠNG ---
  function renderDashboardChapters() {
    const container = document.getElementById('chapters-list-container');
    if (!container) return;

    container.innerHTML = '';

    CHAPTERS_INFO.forEach(ch => {
      const chQuestions = state.allQuestions.filter(q => q.chapter === ch.id);
      const chTotal = chQuestions.length;
      let chDone = 0;
      let chCorrect = 0;

      chQuestions.forEach(q => {
        if (state.userAnswers[q.id]) {
          chDone++;
          if (state.userAnswers[q.id].isCorrect) chCorrect++;
        }
      });

      const chPercent = chTotal > 0 ? Math.round((chDone / chTotal) * 100) : 0;

      const card = document.createElement('div');
      card.className = 'chapter-card';
      card.innerHTML = `
        <div>
          <div class="chapter-card-header">
            <span class="chapter-num">${ch.num}</span>
            <span class="chapter-badge-count">${ch.weight}</span>
          </div>
          <h3 class="chapter-title">${ch.title}</h3>
          <p class="chapter-desc">${ch.desc}</p>
        </div>
        <div class="chapter-progress">
          <div class="progress-track">
            <div class="progress-fill" style="width: ${chPercent}%;"></div>
          </div>
          <span>${chDone}/${chTotal} câu (${chPercent}%)</span>
        </div>
      `;

      card.addEventListener('click', () => {
        switchTab('practice');
        const select = document.getElementById('practice-chapter-select');
        if (select) {
          select.value = String(ch.id);
          setPracticeChapter(String(ch.id));
        }
      });

      container.appendChild(card);
    });
  }

  // --- TAB NAVIGATION ---
  function switchTab(tabId) {
    state.currentTab = tabId;

    // Update nav tab active classes
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.tab === tabId);
    });

    // Update tab-pane active classes
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.toggle('active', pane.id === `tab-${tabId}`);
    });

    // Specific triggers when switching
    if (tabId === 'dashboard') {
      renderDashboardChapters();
      updateGlobalStats();
    } else if (tabId === 'practice') {
      renderCurrentPracticeQuestion();
    } else if (tabId === 'wrong') {
      renderWrongQuestionsTab();
    } else if (tabId === 'starred') {
      renderStarredQuestionsTab();
    } else if (tabId === 'flashcards') {
      renderFlashcard();
    }
  }

  // ============================================================================
  // TAB 2: LUYỆN TẬP (GIẢI THÍCH TỨC THÌ SAU MỖI CÂU)
  // ============================================================================
  function setPracticeChapter(chValue) {
    state.practiceChapter = chValue;
    if (chValue === 'all') {
      state.practiceQuestions = [...state.allQuestions];
    } else {
      const chNum = parseInt(chValue, 10);
      state.practiceQuestions = state.allQuestions.filter(q => q.chapter === chNum);
    }
    state.practiceIndex = 0;
    renderPracticeGrid();
    renderCurrentPracticeQuestion();
  }

  function renderPracticeGrid() {
    const gridEl = document.getElementById('practice-questions-grid');
    if (!gridEl) return;

    gridEl.innerHTML = '';
    state.practiceQuestions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'grid-num-btn';
      btn.textContent = idx + 1;

      // Đánh dấu trạng thái làm bài
      if (state.userAnswers[q.id]) {
        btn.classList.add('answered');
        if (state.userAnswers[q.id].isCorrect) {
          btn.style.color = 'var(--success)';
          btn.style.borderColor = 'var(--success-border)';
        } else {
          btn.style.color = 'var(--error)';
          btn.style.borderColor = 'var(--error-border)';
        }
      }

      if (idx === state.practiceIndex) {
        btn.classList.add('current');
      }

      btn.addEventListener('click', () => {
        state.practiceIndex = idx;
        renderCurrentPracticeQuestion();
        document.getElementById('practice-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      gridEl.appendChild(btn);
    });
  }

  function renderCurrentPracticeQuestion() {
    const questions = state.practiceQuestions;
    if (!questions || questions.length === 0) return;

    if (state.practiceIndex < 0) state.practiceIndex = 0;
    if (state.practiceIndex >= questions.length) state.practiceIndex = questions.length - 1;

    const q = questions[state.practiceIndex];
    const totalQ = questions.length;

    // Cập nhật counter
    const counterEl = document.getElementById('practice-counter');
    if (counterEl) counterEl.textContent = `Câu ${state.practiceIndex + 1} / ${totalQ}`;

    const bottomCounterEl = document.getElementById('practice-bottom-counter');
    if (bottomCounterEl) bottomCounterEl.textContent = `Câu ${state.practiceIndex + 1} / ${totalQ}`;

    const prevBtn = document.getElementById('practice-btn-prev');
    const nextBtn = document.getElementById('practice-btn-next');
    if (prevBtn) {
      prevBtn.disabled = (state.practiceIndex === 0);
      prevBtn.style.opacity = (state.practiceIndex === 0) ? '0.4' : '1';
    }
    if (nextBtn) {
      nextBtn.textContent = (state.practiceIndex === totalQ - 1) ? 'Đã hết câu' : 'Câu tiếp theo →';
    }

    // Meta Badge & Slide Ref
    const qBadge = document.getElementById('practice-q-badge');
    if (qBadge) qBadge.textContent = `Chương ${q.chapter} • Câu #${q.id}`;

    const slideRefEl = document.getElementById('practice-slide-ref');
    if (slideRefEl) slideRefEl.textContent = q.slideRef || 'Giáo trình UIT';

    // Star Button
    const starBtn = document.getElementById('practice-star-btn');
    if (starBtn) {
      const isStarred = state.starredIds.has(q.id);
      starBtn.textContent = isStarred ? '★' : '☆';
      starBtn.classList.toggle('starred', isStarred);
    }

    // Question Text
    const qTextEl = document.getElementById('practice-q-text');
    if (qTextEl) qTextEl.textContent = q.question;

    // Render Options List
    const optionsContainer = document.getElementById('practice-options-list');
    if (!optionsContainer) return;
    optionsContainer.innerHTML = '';

    const prefixes = ['A', 'B', 'C', 'D'];
    const pastAnswer = state.userAnswers[q.id];

    q.options.forEach((optText, optIdx) => {
      const optBtn = document.createElement('button');
      optBtn.className = 'option-btn';

      const prefixSpan = document.createElement('span');
      prefixSpan.className = 'option-prefix';
      prefixSpan.textContent = prefixes[optIdx];

      const textSpan = document.createElement('span');
      textSpan.textContent = optText;

      optBtn.appendChild(prefixSpan);
      optBtn.appendChild(textSpan);

      // Nếu câu này đã làm trước đó
      if (pastAnswer !== undefined) {
        optBtn.classList.add('disabled');
        if (optIdx === q.answer) {
          optBtn.classList.add('correct');
        } else if (optIdx === pastAnswer.selected && !pastAnswer.isCorrect) {
          optBtn.classList.add('wrong');
        }
      } else {
        // Nếu chưa làm -> Bắt sự kiện chọn
        optBtn.addEventListener('click', () => {
          handleSelectPracticeAnswer(q, optIdx);
        });
      }

      optionsContainer.appendChild(optBtn);
    });

    // Cập nhật hộp giải thích
    const expCard = document.getElementById('practice-explanation-card');
    if (pastAnswer !== undefined) {
      showPracticeExplanation(q, pastAnswer.selected, pastAnswer.isCorrect, false);
    } else {
      if (expCard) expCard.classList.remove('active');
    }

    // Cập nhật lại grid active
    const gridButtons = document.querySelectorAll('#practice-questions-grid .grid-num-btn');
    gridButtons.forEach((btn, i) => {
      btn.classList.toggle('current', i === state.practiceIndex);
    });
  }

  // XỬ LÝ KHI NGƯỜI DÙNG CHỌN ĐÁP ÁN (GIẢI THÍCH NGAY LẬP TỨC)
  function handleSelectPracticeAnswer(q, selectedIdx) {
    const isCorrect = (selectedIdx === q.answer);

    // Lưu vào userAnswers
    state.userAnswers[q.id] = {
      selected: selectedIdx,
      isCorrect: isCorrect,
      timestamp: Date.now()
    };
    saveAnswers();

    // Nếu sai -> Lưu vào Sổ câu sai
    if (!isCorrect) {
      state.wrongIds.add(q.id);
      saveWrong();
    }

    updateGlobalStats();

    // Disable tất cả options và highlight
    const optionButtons = document.querySelectorAll('#practice-options-list .option-btn');
    optionButtons.forEach((btn, idx) => {
      btn.classList.add('disabled');
      if (idx === q.answer) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    // Hiển thị giải thích tức thì và tự động cuộn
    showPracticeExplanation(q, selectedIdx, isCorrect, true);

    renderPracticeGrid();
  }

  // HIỂN THỊ KHỐI GIẢI THÍCH CHI TIẾT
  function showPracticeExplanation(q, selectedIdx, isCorrect, shouldScroll) {
    const expCard = document.getElementById('practice-explanation-card');
    if (!expCard) return;

    const statusTag = document.getElementById('practice-status-tag');
    const slideTag = document.getElementById('practice-exp-slide-ref');
    const expText = document.getElementById('practice-exp-text');

    const prefixes = ['A', 'B', 'C', 'D'];

    if (isCorrect) {
      statusTag.className = 'status-tag correct';
      statusTag.innerHTML = `Chính xác! Bạn đã chọn đúng <strong>${prefixes[q.answer]}</strong>`;
    } else {
      statusTag.className = 'status-tag wrong';
      statusTag.innerHTML = `Chưa đúng! Đáp án đúng là <strong>${prefixes[q.answer]}. ${q.options[q.answer]}</strong>`;
    }

    if (slideTag) slideTag.textContent = q.slideRef || 'Slide bài giảng';
    if (expText) {
      expText.innerHTML = `
        <p style="margin-bottom: 0.5rem;">${q.explanation}</p>
        <div style="font-size: 0.85rem; color: var(--text-muted); border-top: 1px dashed var(--border-glass); padding-top: 0.5rem; margin-top: 0.5rem;">
          Gợi ý ôn thi: Nắm vững bản chất lý thuyết phần này để tránh bẫy các phương án nhiễu trong đề thi thật.
        </div>
      `;
    }

    expCard.classList.add('active');

    if (shouldScroll) {
      setTimeout(() => {
        expCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  }

  function toggleStarPracticeQuestion() {
    const q = state.practiceQuestions[state.practiceIndex];
    if (!q) return;

    if (state.starredIds.has(q.id)) {
      state.starredIds.delete(q.id);
    } else {
      state.starredIds.add(q.id);
    }
    saveStarred();
    updateGlobalStats();

    const starBtn = document.getElementById('practice-star-btn');
    if (starBtn) {
      const isStarred = state.starredIds.has(q.id);
      starBtn.textContent = isStarred ? '★' : '☆';
      starBtn.classList.toggle('starred', isStarred);
    }
  }

  // ============================================================================
  // TAB 3: THI THỬ 100 CÂU BẤM GIỜ (EXAM SIMULATION)
  // ============================================================================
  function startExam() {
    const timeSelect = document.getElementById('exam-time-select');
    const modeSelect = document.getElementById('exam-feedback-mode');

    const durationMinutes = timeSelect ? parseInt(timeSelect.value, 10) : 90;
    state.examTimeRemaining = durationMinutes * 60;
    state.examMode = modeSelect ? modeSelect.value : 'submit';

    // RÚT NGẪU NHIÊN 100 CÂU THEO TỶ LỆ CHUẨN 6 CHƯƠNG
    const distribution = { 1: 10, 2: 12, 3: 25, 4: 22, 5: 13, 6: 18 };
    let examPool = [];

    for (let chId = 1; chId <= 6; chId++) {
      const quota = distribution[chId];
      const chQuestions = state.allQuestions.filter(q => q.chapter === chId);
      const shuffled = [...chQuestions].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, quota);
      examPool = examPool.concat(selected);
    }

    state.examQuestions = examPool.sort(() => 0.5 - Math.random());
    state.examAnswers = {};
    state.examIndex = 0;
    state.examActive = true;

    document.getElementById('exam-start-screen')?.classList.add('hidden');
    document.getElementById('exam-result-screen')?.classList.add('hidden');
    document.getElementById('exam-active-screen')?.classList.remove('hidden');

    startExamTimer();
    renderExamQuestionGrid();
    renderCurrentExamQuestion();
  }

  function startExamTimer() {
    if (state.examTimerInterval) clearInterval(state.examTimerInterval);

    updateTimerDisplay();

    state.examTimerInterval = setInterval(() => {
      state.examTimeRemaining--;

      if (state.examTimeRemaining <= 0) {
        clearInterval(state.examTimerInterval);
        alert('Đã hết thời gian làm bài! Hệ thống tự động nộp bài thi của bạn.');
        submitExam();
        return;
      }

      updateTimerDisplay();
    }, 1000);
  }

  function updateTimerDisplay() {
    const timerEl = document.getElementById('exam-timer-display');
    if (!timerEl) return;

    const minutes = Math.floor(state.examTimeRemaining / 60);
    const seconds = state.examTimeRemaining % 60;
    const timeStr = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timerEl.textContent = timeStr;

    if (state.examTimeRemaining <= 600) {
      timerEl.style.color = 'var(--error)';
      timerEl.style.borderColor = 'var(--error)';
    } else {
      timerEl.style.color = 'var(--error)';
      timerEl.style.borderColor = 'rgba(239, 68, 68, 0.25)';
    }
  }

  function renderExamQuestionGrid() {
    const gridEl = document.getElementById('exam-question-grid');
    if (!gridEl) return;

    gridEl.innerHTML = '';
    state.examQuestions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'grid-num-btn';
      btn.textContent = idx + 1;

      if (state.examAnswers[idx] !== undefined) {
        btn.classList.add('answered');
      }

      if (idx === state.examIndex) {
        btn.classList.add('current');
      }

      btn.addEventListener('click', () => {
        state.examIndex = idx;
        renderCurrentExamQuestion();
      });

      gridEl.appendChild(btn);
    });

    const answeredCountEl = document.getElementById('exam-answered-count');
    if (answeredCountEl) {
      answeredCountEl.textContent = Object.keys(state.examAnswers).length;
    }
  }

  function renderCurrentExamQuestion() {
    const q = state.examQuestions[state.examIndex];
    if (!q) return;

    // Meta
    const badgeEl = document.getElementById('exam-q-badge');
    if (badgeEl) badgeEl.textContent = `Câu ${state.examIndex + 1} / 100`;

    const bottomExamCounter = document.getElementById('exam-bottom-counter');
    if (bottomExamCounter) bottomExamCounter.textContent = `Câu ${state.examIndex + 1} / 100`;

    const examPrevBtn = document.getElementById('exam-btn-prev');
    const examNextBtn = document.getElementById('exam-btn-next');
    if (examPrevBtn) {
      examPrevBtn.disabled = (state.examIndex === 0);
      examPrevBtn.style.opacity = (state.examIndex === 0) ? '0.4' : '1';
    }
    if (examNextBtn) {
      examNextBtn.textContent = (state.examIndex === 99) ? 'Câu cuối (Nộp bài)' : 'Câu tiếp theo →';
    }

    const chapterTag = document.getElementById('exam-chapter-tag');
    if (chapterTag) chapterTag.textContent = `Chương ${q.chapter}`;

    const starBtn = document.getElementById('exam-star-btn');
    if (starBtn) {
      const isStarred = state.starredIds.has(q.id);
      starBtn.textContent = isStarred ? '★' : '☆';
      starBtn.classList.toggle('starred', isStarred);
    }

    // Question
    const textEl = document.getElementById('exam-q-text');
    if (textEl) textEl.textContent = q.question;

    // Options
    const listEl = document.getElementById('exam-options-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    const prefixes = ['A', 'B', 'C', 'D'];
    const chosen = state.examAnswers[state.examIndex];

    const instantExpCard = document.getElementById('exam-instant-exp-card');
    if (instantExpCard) instantExpCard.classList.remove('active');

    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';

      const prefixSpan = document.createElement('span');
      prefixSpan.className = 'option-prefix';
      prefixSpan.textContent = prefixes[optIdx];

      const textSpan = document.createElement('span');
      textSpan.textContent = optText;

      btn.appendChild(prefixSpan);
      btn.appendChild(textSpan);

      if (chosen !== undefined) {
        if (state.examMode === 'instant') {
          btn.classList.add('disabled');
          if (optIdx === q.answer) btn.classList.add('correct');
          else if (optIdx === chosen && chosen !== q.answer) btn.classList.add('wrong');
        } else {
          if (optIdx === chosen) {
            btn.style.borderColor = 'var(--primary)';
            btn.style.background = 'rgba(2, 132, 199, 0.15)';
          }
        }
      }

      btn.addEventListener('click', () => {
        handleSelectExamAnswer(optIdx);
      });

      listEl.appendChild(btn);
    });

    if (chosen !== undefined && state.examMode === 'instant' && instantExpCard) {
      const isCorrect = (chosen === q.answer);
      const statusTag = document.getElementById('exam-status-tag');
      const slideTag = document.getElementById('exam-exp-slide-ref');
      const expText = document.getElementById('exam-exp-text');

      if (statusTag) {
        statusTag.className = isCorrect ? 'status-tag correct' : 'status-tag wrong';
        statusTag.textContent = isCorrect ? 'Chính xác!' : `Chưa đúng! Đáp án là ${prefixes[q.answer]}`;
      }
      if (slideTag) slideTag.textContent = q.slideRef || '';
      if (expText) expText.textContent = q.explanation;
      instantExpCard.classList.add('active');
    }

    const gridBtns = document.querySelectorAll('#exam-question-grid .grid-num-btn');
    gridBtns.forEach((b, i) => b.classList.toggle('current', i === state.examIndex));
  }

  function handleSelectExamAnswer(optIdx) {
    state.examAnswers[state.examIndex] = optIdx;

    const q = state.examQuestions[state.examIndex];
    const isCorrect = (optIdx === q.answer);
    state.userAnswers[q.id] = { selected: optIdx, isCorrect: isCorrect, timestamp: Date.now() };
    saveAnswers();

    if (!isCorrect) {
      state.wrongIds.add(q.id);
      saveWrong();
    }
    updateGlobalStats();

    renderExamQuestionGrid();
    renderCurrentExamQuestion();
  }

  function submitExam() {
    if (state.examTimerInterval) clearInterval(state.examTimerInterval);
    state.examActive = false;

    let correctCount = 0;
    const chapterStats = {
      1: { total: 0, correct: 0, title: "Chương 1: Tổng quan" },
      2: { total: 0, correct: 0, title: "Chương 2: Tiền xử lý & PCA" },
      3: { total: 0, correct: 0, title: "Chương 3: Tuyến tính & Đánh giá" },
      4: { total: 0, correct: 0, title: "Chương 4: Cây quyết định & Ensemble" },
      5: { total: 0, correct: 0, title: "Chương 5: Phân cụm" },
      6: { total: 0, correct: 0, title: "Chương 6: MLP & Backpropagation" }
    };

    state.examQuestions.forEach((q, idx) => {
      const chosen = state.examAnswers[idx];
      const isCorrect = (chosen === q.answer);

      if (chapterStats[q.chapter]) {
        chapterStats[q.chapter].total++;
        if (isCorrect) chapterStats[q.chapter].correct++;
      }

      if (isCorrect) {
        correctCount++;
      } else {
        state.wrongIds.add(q.id);
      }
    });

    saveWrong();
    updateGlobalStats();

    const score = ((correctCount / 100) * 10).toFixed(1);
    const wrongCount = 100 - correctCount;

    document.getElementById('exam-active-screen')?.classList.add('hidden');
    document.getElementById('exam-result-screen')?.classList.remove('hidden');

    const scoreValEl = document.getElementById('result-score-val');
    if (scoreValEl) scoreValEl.textContent = score;

    const correctCountEl = document.getElementById('result-correct-count');
    if (correctCountEl) correctCountEl.textContent = correctCount;

    const wrongCountEl = document.getElementById('result-wrong-count');
    if (wrongCountEl) wrongCountEl.textContent = wrongCount;

    const ratingTitleEl = document.getElementById('result-rating-title');
    const ratingDescEl = document.getElementById('result-rating-desc');

    if (score >= 8.5) {
      if (ratingTitleEl) ratingTitleEl.textContent = 'Xuất Sắc! Điểm Tuyệt Đối Trong Tầm Tay';
      if (ratingDescEl) ratingDescEl.textContent = `Bạn đã trả lời đúng ${correctCount}/100 câu! Kiến thức 6 chương của bạn rất vững vàng.`;
    } else if (score >= 7.0) {
      if (ratingTitleEl) ratingTitleEl.textContent = 'Rất Tốt! Đạt Mục Tiêu Điểm Giỏi';
      if (ratingDescEl) ratingDescEl.textContent = `Bạn đã trả lời đúng ${correctCount}/100 câu. Hãy củng cố thêm các câu sai trong Sổ tay câu sai nhé!`;
    } else if (score >= 5.0) {
      if (ratingTitleEl) ratingTitleEl.textContent = 'Đạt Yêu Cầu! Cần Rà Soát Kỹ Các Chương Trọng Tâm';
      if (ratingDescEl) ratingDescEl.textContent = `Bạn đúng ${correctCount}/100 câu. Đặc biệt chú ý ôn sâu Chương 3, 4, 6 để kéo điểm bứt phá.`;
    } else {
      if (ratingTitleEl) ratingTitleEl.textContent = 'Cần Nỗ Lực Ôn Lại Khẩn Trương';
      if (ratingDescEl) ratingDescEl.textContent = `Đạt ${correctCount}/100 câu. Hãy đọc lại các file Note tóm tắt và luyện riêng từng chương.`;
    }

    // Render Chapter Breakdown
    const breakdownContainer = document.getElementById('result-breakdown-container');
    if (breakdownContainer) {
      breakdownContainer.innerHTML = '';
      for (let chId = 1; chId <= 6; chId++) {
        const stat = chapterStats[chId];
        const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
        const color = pct >= 80 ? 'var(--success)' : (pct >= 50 ? 'var(--primary)' : 'var(--error)');

        const item = document.createElement('div');
        item.className = 'breakdown-item';
        item.innerHTML = `
          <div class="breakdown-label-row">
            <span><strong>${stat.title}</strong></span>
            <span>${stat.correct}/${stat.total} câu (${pct}%)</span>
          </div>
          <div class="breakdown-bar">
            <div class="breakdown-fill" style="width: ${pct}%; background: ${color};"></div>
          </div>
        `;
        breakdownContainer.appendChild(item);
      }
    }

    renderExamReviewList();
  }

  function renderExamReviewList(filterWrongOnly = false) {
    const container = document.getElementById('result-review-list');
    if (!container) return;

    container.innerHTML = '';
    const prefixes = ['A', 'B', 'C', 'D'];

    state.examQuestions.forEach((q, idx) => {
      const chosen = state.examAnswers[idx];
      const isCorrect = (chosen === q.answer);

      if (filterWrongOnly && isCorrect) return;

      const card = document.createElement('div');
      card.className = `review-card ${isCorrect ? 'is-correct' : 'is-wrong'}`;

      const userChoiceText = chosen !== undefined ? `${prefixes[chosen]}. ${q.options[chosen]}` : '<span style="color:var(--text-muted)">Chưa trả lời</span>';
      const correctChoiceText = `${prefixes[q.answer]}. ${q.options[q.answer]}`;

      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.75rem;">
          <div>
            <span class="q-badge">Câu #${idx + 1} • Chương ${q.chapter}</span>
            <span class="slide-tag" style="margin-left: 0.5rem;">${q.slideRef || 'Slide bài giảng'}</span>
          </div>
          <span style="font-weight: 700; color: ${isCorrect ? 'var(--success)' : 'var(--error)'};">
            ${isCorrect ? 'ĐÚNG' : 'SAI'}
          </span>
        </div>
        <div style="font-weight: 600; font-size: 1.05rem; margin-bottom: 1rem; color: var(--text-primary);">
          ${q.question}
        </div>
        <div style="font-size: 0.9rem; margin-bottom: 0.75rem;">
          <div>Bạn đã chọn: <strong style="color: ${isCorrect ? 'var(--success)' : 'var(--error)'}">${userChoiceText}</strong></div>
          ${!isCorrect ? `<div>Đáp án đúng: <strong style="color: var(--success)">${correctChoiceText}</strong></div>` : ''}
        </div>
        <div style="background: var(--bg-glass); border: 1px solid var(--border-glass); border-radius: var(--radius-sm); padding: 0.85rem; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5;">
          <strong>Giải thích chi tiết:</strong> ${q.explanation}
        </div>
      `;
      container.appendChild(card);
    });
  }

  // ============================================================================
  // TAB 4: SỔ TAY CÂU SAI (MISTAKES NOTEBOOK)
  // ============================================================================
  function renderWrongQuestionsTab() {
    const container = document.getElementById('wrong-questions-container');
    const emptyMsg = document.getElementById('wrong-empty-message');
    if (!container || !emptyMsg) return;

    const wrongList = state.allQuestions.filter(q => state.wrongIds.has(q.id));

    if (wrongList.length === 0) {
      emptyMsg.classList.remove('hidden');
      container.innerHTML = '';
      return;
    }

    emptyMsg.classList.add('hidden');
    container.innerHTML = '';

    const prefixes = ['A', 'B', 'C', 'D'];

    wrongList.forEach(q => {
      const card = document.createElement('div');
      card.className = 'question-card';
      card.id = `wrong-card-${q.id}`;

      const past = state.userAnswers[q.id];

      card.innerHTML = `
        <div class="question-meta">
          <div class="meta-left">
            <span class="q-badge">Chương ${q.chapter} • Câu #${q.id}</span>
            <span class="slide-tag">${q.slideRef || 'Giáo trình UIT'}</span>
          </div>
          <button class="quiz-back-btn btn-remove-wrong" data-qid="${q.id}" style="color: var(--success);" title="Xóa câu này khỏi sổ câu sai">
            Đã nắm vững
          </button>
        </div>
        <div class="question-text">${q.question}</div>
        <div class="options-list" id="wrong-options-${q.id}"></div>
        <div class="explanation-card active" style="margin-top: 1rem;">
          <div class="explanation-header">
            <span class="status-tag correct">Đáp án đúng: ${prefixes[q.answer]}. ${q.options[q.answer]}</span>
            <span class="slide-tag">${q.slideRef || ''}</span>
          </div>
          <div class="explanation-text">${q.explanation}</div>
        </div>
      `;

      const optContainer = card.querySelector(`#wrong-options-${q.id}`);
      q.options.forEach((optText, optIdx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (optIdx === q.answer) btn.classList.add('correct');
        else if (past && optIdx === past.selected && !past.isCorrect) btn.classList.add('wrong');

        btn.innerHTML = `<span class="option-prefix">${prefixes[optIdx]}</span><span>${optText}</span>`;
        optContainer.appendChild(btn);
      });

      card.querySelector('.btn-remove-wrong').addEventListener('click', () => {
        state.wrongIds.delete(q.id);
        saveWrong();
        updateGlobalStats();
        renderWrongQuestionsTab();
      });

      container.appendChild(card);
    });
  }

  // ============================================================================
  // TAB 5: CÂU ĐÃ ĐÁNH DẤU ⭐ (STARRED)
  // ============================================================================
  function renderStarredQuestionsTab() {
    const container = document.getElementById('starred-questions-container');
    const emptyMsg = document.getElementById('starred-empty-message');
    if (!container || !emptyMsg) return;

    const starredList = state.allQuestions.filter(q => state.starredIds.has(q.id));

    if (starredList.length === 0) {
      emptyMsg.classList.remove('hidden');
      container.innerHTML = '';
      return;
    }

    emptyMsg.classList.add('hidden');
    container.innerHTML = '';

    const prefixes = ['A', 'B', 'C', 'D'];

    starredList.forEach(q => {
      const card = document.createElement('div');
      card.className = 'question-card';

      card.innerHTML = `
        <div class="question-meta">
          <div class="meta-left">
            <span class="q-badge">Chương ${q.chapter} • Câu #${q.id}</span>
            <span class="slide-tag">${q.slideRef || 'Giáo trình UIT'}</span>
          </div>
          <button class="star-btn starred" data-qid="${q.id}" title="Bỏ đánh dấu">★</button>
        </div>
        <div class="question-text">${q.question}</div>
        <div class="options-list">
          ${q.options.map((opt, i) => `
            <div class="option-btn ${i === q.answer ? 'correct' : ''}">
              <span class="option-prefix">${prefixes[i]}</span>
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>
        <div class="explanation-card active" style="margin-top: 1rem;">
          <div class="explanation-header">
            <span class="status-tag correct">Phân tích & Giải thích:</span>
            <span class="slide-tag">${q.slideRef || ''}</span>
          </div>
          <div class="explanation-text">${q.explanation}</div>
        </div>
      `;

      card.querySelector('.star-btn').addEventListener('click', () => {
        state.starredIds.delete(q.id);
        saveStarred();
        updateGlobalStats();
        renderStarredQuestionsTab();
      });

      container.appendChild(card);
    });
  }

  // ============================================================================
  // TAB 6: FLASHCARDS FLIP MODE
  // ============================================================================
  function setFlashcardChapter(chVal) {
    state.flashcardChapter = chVal;
    if (chVal === 'all') {
      state.flashcardQuestions = [...state.allQuestions];
    } else {
      const cNum = parseInt(chVal, 10);
      state.flashcardQuestions = state.allQuestions.filter(q => q.chapter === cNum);
    }
    state.flashcardIndex = 0;
    state.flashcardFlipped = false;
    renderFlashcard();
  }

  function renderFlashcard() {
    const questions = state.flashcardQuestions;
    if (!questions || questions.length === 0) return;

    if (state.flashcardIndex < 0) state.flashcardIndex = 0;
    if (state.flashcardIndex >= questions.length) state.flashcardIndex = questions.length - 1;

    const q = questions[state.flashcardIndex];
    const total = questions.length;
    const prefixes = ['A', 'B', 'C', 'D'];

    const counterEl = document.getElementById('flashcard-counter');
    if (counterEl) counterEl.textContent = `Thẻ ${state.flashcardIndex + 1} / ${total}`;

    const badgeFront = document.getElementById('fc-badge-front');
    if (badgeFront) badgeFront.textContent = `Chương ${q.chapter} • Thẻ #${q.id}`;

    const qText = document.getElementById('fc-question-text');
    if (qText) qText.textContent = q.question;

    const ansText = document.getElementById('fc-answer-text');
    if (ansText) ansText.textContent = `${prefixes[q.answer]}. ${q.options[q.answer]}`;

    const expText = document.getElementById('fc-exp-text');
    if (expText) expText.textContent = q.explanation;

    const slideTag = document.getElementById('fc-slide-tag');
    if (slideTag) slideTag.textContent = q.slideRef || 'Giáo trình UIT';

    const cardEl = document.getElementById('active-flashcard');
    if (cardEl) {
      state.flashcardFlipped = false;
      cardEl.classList.remove('flipped');
    }
  }

  function flipFlashcard() {
    const cardEl = document.getElementById('active-flashcard');
    if (!cardEl) return;
    state.flashcardFlipped = !state.flashcardFlipped;
    cardEl.classList.toggle('flipped', state.flashcardFlipped);
  }

  // ============================================================================
  // EVENT LISTENERS & KEYBOARD SHORTCUTS
  // ============================================================================
  function setupEventListeners() {
    // Theme toggle
    document.getElementById('btn-theme-toggle')?.addEventListener('click', toggleTheme);

    // Nav tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        switchTab(tab.dataset.tab);
      });
    });

    // Reset button
    document.getElementById('btn-reset-data')?.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn đặt lại toàn bộ lịch sử và tiến độ học tập không?')) {
        localStorage.removeItem(STORAGE_KEYS.ANSWERS);
        localStorage.removeItem(STORAGE_KEYS.WRONG);
        localStorage.removeItem(STORAGE_KEYS.STARRED);
        localStorage.removeItem(STORAGE_KEYS.HISTORY);
        state.userAnswers = {};
        state.wrongIds.clear();
        state.starredIds.clear();
        state.examHistory = [];
        updateGlobalStats();
        renderDashboardChapters();
        renderPracticeGrid();
        renderCurrentPracticeQuestion();
        alert('Đã đặt lại dữ liệu thành công!');
      }
    });

    // Practice Chapter Select
    document.getElementById('practice-chapter-select')?.addEventListener('change', (e) => {
      setPracticeChapter(e.target.value);
    });

    // Grid Drawer Toggle
    const drawer = document.getElementById('practice-grid-drawer');
    document.getElementById('btn-toggle-grid-drawer')?.addEventListener('click', () => {
      drawer?.classList.toggle('hidden');
    });
    document.getElementById('btn-close-grid-drawer')?.addEventListener('click', () => {
      drawer?.classList.add('hidden');
    });

    // Practice Star Button
    document.getElementById('practice-star-btn')?.addEventListener('click', toggleStarPracticeQuestion);

    // Practice Prev/Next Buttons
    document.getElementById('practice-btn-prev')?.addEventListener('click', () => {
      if (state.practiceIndex > 0) {
        state.practiceIndex--;
        renderCurrentPracticeQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    document.getElementById('practice-btn-next')?.addEventListener('click', () => {
      if (state.practiceIndex < state.practiceQuestions.length - 1) {
        state.practiceIndex++;
        renderCurrentPracticeQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    // Exam Start Button
    document.getElementById('btn-start-exam')?.addEventListener('click', startExam);

    // Exam Nav Buttons
    document.getElementById('exam-btn-prev')?.addEventListener('click', () => {
      if (state.examIndex > 0) {
        state.examIndex--;
        renderCurrentExamQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    document.getElementById('exam-btn-next')?.addEventListener('click', () => {
      if (state.examIndex < 99) {
        state.examIndex++;
        renderCurrentExamQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    // Exam Submit Button
    document.getElementById('btn-submit-exam')?.addEventListener('click', () => {
      const answeredCount = Object.keys(state.examAnswers).length;
      if (answeredCount < 100) {
        if (!confirm(`Bạn mới trả lời ${answeredCount}/100 câu. Bạn có chắc muốn nộp bài sớm không?`)) {
          return;
        }
      } else {
        if (!confirm('Bạn có chắc chắn muốn nộp bài thi không?')) return;
      }
      submitExam();
    });

    // Exam Results Buttons
    document.getElementById('btn-retake-exam')?.addEventListener('click', () => {
      document.getElementById('exam-result-screen')?.classList.add('hidden');
      document.getElementById('exam-start-screen')?.classList.remove('hidden');
    });

    document.getElementById('btn-review-wrong-only')?.addEventListener('click', (e) => {
      const isFiltering = e.target.classList.toggle('active');
      e.target.textContent = isFiltering ? 'Xem lại tất cả 100 câu' : 'Lọc câu sai';
      renderExamReviewList(isFiltering);
    });

    // Mistakes Notebook Clear
    document.getElementById('btn-clear-wrong')?.addEventListener('click', () => {
      if (confirm('Xóa toàn bộ câu hỏi trong sổ câu sai?')) {
        state.wrongIds.clear();
        saveWrong();
        updateGlobalStats();
        renderWrongQuestionsTab();
      }
    });

    // Starred Clear
    document.getElementById('btn-clear-starred')?.addEventListener('click', () => {
      if (confirm('Bỏ đánh dấu tất cả các câu hỏi?')) {
        state.starredIds.clear();
        saveStarred();
        updateGlobalStats();
        renderStarredQuestionsTab();
      }
    });

    // Flashcards Select & Controls
    document.getElementById('flashcard-chapter-select')?.addEventListener('change', (e) => {
      setFlashcardChapter(e.target.value);
    });

    document.getElementById('active-flashcard')?.addEventListener('click', flipFlashcard);
    document.getElementById('fc-flip-btn')?.addEventListener('click', flipFlashcard);

    document.getElementById('fc-prev-btn')?.addEventListener('click', () => {
      if (state.flashcardIndex > 0) {
        state.flashcardIndex--;
        renderFlashcard();
      }
    });

    document.getElementById('fc-next-btn')?.addEventListener('click', () => {
      if (state.flashcardIndex < state.flashcardQuestions.length - 1) {
        state.flashcardIndex++;
        renderFlashcard();
      }
    });

    // PHÍM TẮT BÀN PHÍM
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (state.currentTab === 'practice') {
        const q = state.practiceQuestions[state.practiceIndex];
        if (!q) return;

        if (['1', 'a', 'A'].includes(e.key)) handleSelectPracticeAnswer(q, 0);
        else if (['2', 'b', 'B'].includes(e.key)) handleSelectPracticeAnswer(q, 1);
        else if (['3', 'c', 'C'].includes(e.key)) handleSelectPracticeAnswer(q, 2);
        else if (['4', 'd', 'D'].includes(e.key)) handleSelectPracticeAnswer(q, 3);
        else if (e.key === 'ArrowRight' || e.key === 'n' || e.key === 'N') {
          if (state.practiceIndex < state.practiceQuestions.length - 1) {
            state.practiceIndex++;
            renderCurrentPracticeQuestion();
          }
        } else if (e.key === 'ArrowLeft' || e.key === 'p' || e.key === 'P') {
          if (state.practiceIndex > 0) {
            state.practiceIndex--;
            renderCurrentPracticeQuestion();
          }
        } else if (e.key === 's' || e.key === 'S') {
          toggleStarPracticeQuestion();
        }
      } else if (state.currentTab === 'exam' && state.examActive) {
        if (['1', 'a', 'A'].includes(e.key)) handleSelectExamAnswer(0);
        else if (['2', 'b', 'B'].includes(e.key)) handleSelectExamAnswer(1);
        else if (['3', 'c', 'C'].includes(e.key)) handleSelectExamAnswer(2);
        else if (['4', 'd', 'D'].includes(e.key)) handleSelectExamAnswer(3);
        else if (e.key === 'ArrowRight') {
          if (state.examIndex < 99) {
            state.examIndex++;
            renderCurrentExamQuestion();
          }
        } else if (e.key === 'ArrowLeft') {
          if (state.examIndex > 0) {
            state.examIndex--;
            renderCurrentExamQuestion();
          }
        }
      } else if (state.currentTab === 'flashcards') {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          flipFlashcard();
        } else if (e.key === 'ArrowRight') {
          if (state.flashcardIndex < state.flashcardQuestions.length - 1) {
            state.flashcardIndex++;
            renderFlashcard();
          }
        } else if (e.key === 'ArrowLeft') {
          if (state.flashcardIndex > 0) {
            state.flashcardIndex--;
            renderFlashcard();
          }
        }
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initApp);
})();
