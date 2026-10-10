/* ==============================================================================
   MODULE: PRACTICE QUIZ (LUYỆN TẬP THEO CHƯƠNG)
   Hiển thị câu hỏi, chọn đáp án, giải thích tức thì, đánh dấu sao, lưu vị trí
============================================================================== */

  function setPracticeChapter(chValue, targetIndex) {
    state.practiceChapter = chValue;
    if (chValue === 'all') {
      state.practiceQuestions = [...state.allQuestions];
    } else {
      const chNum = parseInt(chValue, 10);
      state.practiceQuestions = state.allQuestions.filter(q => q.chapter === chNum);
    }

    // Khôi phục câu hỏi đang làm của chương này
    if (typeof targetIndex === 'number' && targetIndex >= 0 && targetIndex < state.practiceQuestions.length) {
      state.practiceIndex = targetIndex;
    } else if (state.practicePositions && state.practicePositions.indices && typeof state.practicePositions.indices[chValue] === 'number') {
      const savedIdx = state.practicePositions.indices[chValue];
      state.practiceIndex = (savedIdx >= 0 && savedIdx < state.practiceQuestions.length) ? savedIdx : 0;
    } else {
      state.practiceIndex = 0;
    }

    const select = document.getElementById('practice-chapter-select');
    if (select && select.value !== chValue) {
      select.value = chValue;
    }

    savePracticePosition();
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
        savePracticePosition();
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

    // Reset cờ lượt chọn hiện tại khi sang câu mới hoặc quay lại câu cũ
    state.practiceAnsweredThisTurn = false;
    savePracticePosition();

    const q = questions[state.practiceIndex];
    const totalQ = questions.length;

    // Cập nhật counter
    const counterEl = document.getElementById('practice-counter');
    if (counterEl) counterEl.textContent = `Câu ${state.practiceIndex + 1} / ${totalQ}`;

    const bottomCounterEl = document.getElementById('practice-bottom-counter');
    if (bottomCounterEl) {
      bottomCounterEl.innerHTML = `<span class="counter-full">Câu ${state.practiceIndex + 1} / ${totalQ}</span><span class="counter-short">${state.practiceIndex + 1}/${totalQ}</span>`;
    }

    const prevBtn = document.getElementById('practice-btn-prev');
    const nextBtn = document.getElementById('practice-btn-next');
    if (prevBtn) {
      prevBtn.disabled = (state.practiceIndex === 0);
      prevBtn.style.opacity = (state.practiceIndex === 0) ? '0.4' : '1';
      prevBtn.innerHTML = '<span class="nav-text-full">← Câu trước</span><span class="nav-text-short">← Trước</span>';
    }
    if (nextBtn) {
      if (state.practiceIndex === totalQ - 1) {
        nextBtn.innerHTML = '<span class="nav-text-full">Đã hết câu ✓</span><span class="nav-text-short">Hết câu ✓</span>';
      } else {
        nextBtn.innerHTML = '<span class="nav-text-full">Câu tiếp theo →</span><span class="nav-text-short">Tiếp theo →</span>';
      }
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

    // Luôn hiển thị các nút đáp án sẵn sàng để người dùng thử sức lại khi vào/quay lại câu hỏi
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

      // Bắt sự kiện chọn đáp án
      optBtn.addEventListener('click', () => {
        handleSelectPracticeAnswer(q, optIdx);
      });

      optionsContainer.appendChild(optBtn);
    });

    // Ẩn hộp giải thích khi bắt đầu xem câu hỏi (chỉ hiện khi người dùng chọn đáp án ở lượt này)
    const expCard = document.getElementById('practice-explanation-card');
    if (expCard) expCard.classList.remove('active');

    // Cập nhật lại grid active
    const gridButtons = document.querySelectorAll('#practice-questions-grid .grid-num-btn');
    gridButtons.forEach((btn, i) => {
      btn.classList.toggle('current', i === state.practiceIndex);
    });
  }

  // XỬ LÝ KHI NGƯỜI DÙNG CHỌN ĐÁP ÁN (GIẢI THÍCH NGAY LẬP TỨC)
  function handleSelectPracticeAnswer(q, selectedIdx) {
    // Chặn người dùng đổi đáp án nếu đã chọn trong lượt xem này
    if (state.practiceAnsweredThisTurn) return;
    state.practiceAnsweredThisTurn = true;

    const isCorrect = (selectedIdx === q.answer);

    // Cập nhật lại userAnswers để lưu tiến trình
    state.userAnswers[q.id] = {
      selected: selectedIdx,
      isCorrect: isCorrect,
      timestamp: Date.now()
    };
    saveAnswers();

    // Cập nhật Sổ câu sai: nếu trả lời đúng thì xóa khỏi sổ sai (nếu từng sai), nếu sai thì thêm vào
    if (isCorrect) {
      if (state.wrongIds.has(q.id)) {
        state.wrongIds.delete(q.id);
        saveWrong();
      }
    } else {
      state.wrongIds.add(q.id);
      saveWrong();
    }

    updateGlobalStats();

    // Khóa tất cả options ngay lập tức để không thể đổi đáp án và highlight màu
    const optionButtons = document.querySelectorAll('#practice-options-list .option-btn');
    optionButtons.forEach((btn, idx) => {
      btn.classList.add('disabled');
      btn.style.pointerEvents = 'none';
      if (idx === q.answer) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    // Hiển thị giải thích tức thì (cuộn mượt dịu nhẹ, không che khuất câu hỏi)
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
        const rect = expCard.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Chỉ cuộn nhẹ nhàng nếu phần đáy của hộp giải thích bị tràn xuống dưới màn hình
        if (rect.bottom > windowHeight - 70) {
          const scrollDistance = Math.min(rect.bottom - (windowHeight - 80), 220);
          window.scrollBy({ top: scrollDistance, behavior: 'smooth' });
        }
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
