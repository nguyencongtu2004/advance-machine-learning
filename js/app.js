/* ==============================================================================
   MODULE: APPLICATION BOOTSTRAP & ROUTING
   Điều hướng Tabs, thống kê tổng thể, lắng nghe sự kiện, khởi chạy app
============================================================================== */

  function getCombinedQuestionBank() {
    if (Array.isArray(window.QUESTION_BANK) && window.QUESTION_BANK.length > 0) {
      return window.QUESTION_BANK;
    }
    const combined = [
      ...(window.QUESTIONS_CHUONG_1 || []),
      ...(window.QUESTIONS_CHUONG_2 || []),
      ...(window.QUESTIONS_CHUONG_3 || []),
      ...(window.QUESTIONS_CHUONG_4 || []),
      ...(window.QUESTIONS_CHUONG_5 || []),
      ...(window.QUESTIONS_CHUONG_6 || []),
      ...(window.QUESTIONS_CHUONG_7 || []),
      ...(window.QUESTIONS_CHUONG_8 || []),
      ...(window.QUESTIONS_CHUONG_9 || []),
      ...(window.QUESTIONS_CHUONG_10 || []),
      ...(window.QUESTIONS_CHUONG_11 || []),
      ...(window.QUESTIONS_CHUONG_12 || []),
      ...(window.QUESTIONS_CHUONG_13 || []),
      ...(window.QUESTIONS_CHUONG_14 || []),
      ...(window.QUESTIONS_CHUONG_15 || [])
    ];
    if (combined.length > 0) {
      window.QUESTION_BANK = combined;
      return combined;
    }
    return [];
  }

  function initApp() {
    state.allQuestions = getCombinedQuestionBank();
    if (state.allQuestions.length === 0) {
      console.error('Không tìm thấy dữ liệu QUESTION_BANK từ các file chương');
    }

    initTheme();
    loadStorage();
    setupEventListeners();
    updateGlobalStats();
    renderDashboardChapters();

    // Khởi tạo tab Luyện tập ban đầu từ vị trí và chương đã lưu
    const savedChapter = (state.practicePositions && state.practicePositions.currentChapter) || 'all';
    const select = document.getElementById('practice-chapter-select');
    if (select) select.value = savedChapter;
    setPracticeChapter(savedChapter);

    // Khởi tạo tab Flashcards ban đầu từ vị trí và chương đã lưu
    const savedFcChapter = (state.flashcardPositions && state.flashcardPositions.currentChapter) || 'all';
    const fcSelect = document.getElementById('flashcard-chapter-select');
    if (fcSelect) fcSelect.value = savedFcChapter;
    setFlashcardChapter(savedFcChapter);

    // Khởi tạo tab Ghi chú lý thuyết
    initDocs();
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
      if (!state.allQuestions || state.allQuestions.length === 0) {
        state.allQuestions = getCombinedQuestionBank();
      }
      if (!state.practiceQuestions || state.practiceQuestions.length === 0) {
        const savedChapter = (state.practicePositions && state.practicePositions.currentChapter) || 'all';
        setPracticeChapter(savedChapter);
      } else {
        renderCurrentPracticeQuestion();
      }
    } else if (tabId === 'wrong') {
      renderWrongQuestionsTab();
    } else if (tabId === 'starred') {
      renderStarredQuestionsTab();
    } else if (tabId === 'flashcards') {
      renderFlashcard();
    } else if (tabId === 'docs') {
      ensureDocsLoaded();
    }
  }

  // ============================================================================
  // TAB 2: LUYỆN TẬP (GIẢI THÍCH TỨC THÌ SAU MỖI CÂU)
  // ============================================================================

  // ============================================================================
  // EVENT LISTENERS & KEYBOARD SHORTCUTS
  // ============================================================================
  function setupEventListeners() {
    // Theme toggle
    document.getElementById('btn-theme-toggle')?.addEventListener('click', toggleTheme);

    // Help modal buttons
    document.getElementById('btn-open-help')?.addEventListener('click', openHelpModal);
    document.getElementById('btn-close-help')?.addEventListener('click', closeHelpModal);
    document.getElementById('btn-close-help-footer')?.addEventListener('click', closeHelpModal);

    // Click backdrop to close
    document.getElementById('help-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'help-modal') {
        closeHelpModal();
      }
    });

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
        localStorage.removeItem(STORAGE_KEYS.PRACTICE_POS);
        localStorage.removeItem(STORAGE_KEYS.FLASHCARD_POS);
        localStorage.removeItem(STORAGE_KEYS.DOCS_ACTIVE);
        state.userAnswers = {};
        state.wrongIds.clear();
        state.starredIds.clear();
        state.examHistory = [];
        state.practicePositions = { currentChapter: 'all', indices: { 'all': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 } };
        state.flashcardPositions = { currentChapter: 'all', indices: { 'all': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 } };
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
        savePracticePosition();
        renderCurrentPracticeQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    document.getElementById('practice-btn-next')?.addEventListener('click', () => {
      if (state.practiceIndex < state.practiceQuestions.length - 1) {
        state.practiceIndex++;
        savePracticePosition();
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
        saveFlashcardPosition();
        renderFlashcard();
      }
    });

    document.getElementById('fc-next-btn')?.addEventListener('click', () => {
      if (state.flashcardIndex < state.flashcardQuestions.length - 1) {
        state.flashcardIndex++;
        saveFlashcardPosition();
        renderFlashcard();
      }
    });

    // PHÍM TẮT BÀN PHÍM
    window.addEventListener('keydown', (e) => {
      // Đóng modal khi bấm Escape
      if (e.key === 'Escape') {
        const modal = document.getElementById('help-modal');
        if (modal && !modal.classList.contains('hidden')) {
          closeHelpModal();
          return;
        }
      }

      // Bật/tắt modal trợ giúp khi bấm '?'
      if (e.key === '?' || (e.key === '/' && e.shiftKey)) {
        if (!['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) {
          e.preventDefault();
          const modal = document.getElementById('help-modal');
          if (modal && !modal.classList.contains('hidden')) {
            closeHelpModal();
          } else {
            openHelpModal();
          }
          return;
        }
      }

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
            savePracticePosition();
            renderCurrentPracticeQuestion();
          }
        } else if (e.key === 'ArrowLeft' || e.key === 'p' || e.key === 'P') {
          if (state.practiceIndex > 0) {
            state.practiceIndex--;
            savePracticePosition();
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
        } else if (e.key === 'ArrowRight' || e.key === 'n' || e.key === 'N') {
          if (state.flashcardIndex < state.flashcardQuestions.length - 1) {
            state.flashcardIndex++;
            saveFlashcardPosition();
            renderFlashcard();
          }
        } else if (e.key === 'ArrowLeft' || e.key === 'p' || e.key === 'P') {
          if (state.flashcardIndex > 0) {
            state.flashcardIndex--;
            saveFlashcardPosition();
            renderFlashcard();
          }
        }
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initApp);
