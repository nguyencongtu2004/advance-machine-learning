/* ==============================================================================
   MODULE: EXAM SIMULATOR (THI THỬ 100 CÂU BẤM GIỜ)
   Bộ đếm giờ, rút 100 câu ngẫu nhiên theo tỷ lệ, bảng câu hỏi, chấm điểm, xem lại
============================================================================== */

  function startExam() {
    const timeSelect = document.getElementById('exam-time-select');
    const modeSelect = document.getElementById('exam-feedback-mode');

    const durationMinutes = timeSelect ? parseInt(timeSelect.value, 10) : 90;
    state.examTimeRemaining = durationMinutes * 60;
    state.examMode = modeSelect ? modeSelect.value : 'submit';

    // RÚT NGẪU NHIÊN 100 CÂU THEO TỶ LỆ CHUẨN 15 CHƯƠNG (80 CÂU CHÍNH + 20 CÂU SEMINAR)
    const distribution = {
      1: 6,   // Ch1: Tổng quan (6 câu)
      2: 8,   // Ch2: Tiền xử lý & PCA (8 câu)
      3: 18,  // Ch3: Tuyến tính & Đánh giá (18 câu - TRỌNG TÂM)
      4: 16,  // Ch4: Cây quyết định & Ensemble (16 câu - TRỌNG TÂM)
      5: 10,  // Ch5: Phân cụm (10 câu)
      6: 11,  // Ch6: MLP & Backpropagation (11 câu - TRỌNG TÂM)
      7: 11,  // Ch7: CNN Mạng tích chập (11 câu - TRỌNG TÂM)
      8: 3,   // Ch8 Seminar: SVM (3 câu)
      9: 2,   // Ch9 Seminar: KNN (2 câu)
      10: 3,  // Ch10 Seminar: Transformer & Attention (3 câu)
      11: 3,  // Ch11 Seminar: RNN, LSTM & Mamba SSM (3 câu)
      12: 2,  // Ch12 Seminar: ECOC & Multi-label/output (2 câu)
      13: 2,  // Ch13 Seminar: Cây quyết định nâng cao (2 câu)
      14: 2,  // Ch14 Seminar: Tuyến tính & SVD/QR (2 câu)
      15: 3   // Ch15 Seminar: Ensemble & Stacking (3 câu)
    };
    let examPool = [];

    for (let chId = 1; chId <= 15; chId++) {
      const quota = distribution[chId] || 0;
      if (quota <= 0) continue;
      const chQuestions = state.allQuestions.filter(q => q.chapter === chId);
      const shuffled = [...chQuestions].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, quota);
      examPool = examPool.concat(selected);
    }

    // Đảm bảo đúng 100 câu nếu có bất kỳ sai lệch nào
    if (examPool.length < 100) {
      const usedIds = new Set(examPool.map(q => q.id));
      const remainingQuestions = state.allQuestions.filter(q => !usedIds.has(q.id));
      const shuffledRemaining = remainingQuestions.sort(() => 0.5 - Math.random());
      const extraNeeded = 100 - examPool.length;
      examPool = examPool.concat(shuffledRemaining.slice(0, extraNeeded));
    } else if (examPool.length > 100) {
      examPool = examPool.slice(0, 100);
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
    if (bottomExamCounter) {
      bottomExamCounter.innerHTML = `<span class="counter-full">Câu ${state.examIndex + 1} / 100</span><span class="counter-short">${state.examIndex + 1}/100</span>`;
    }

    const examPrevBtn = document.getElementById('exam-btn-prev');
    const examNextBtn = document.getElementById('exam-btn-next');
    if (examPrevBtn) {
      examPrevBtn.disabled = (state.examIndex === 0);
      examPrevBtn.style.opacity = (state.examIndex === 0) ? '0.4' : '1';
      examPrevBtn.innerHTML = '<span class="nav-text-full">← Câu trước</span><span class="nav-text-short">← Trước</span>';
    }
    if (examNextBtn) {
      if (state.examIndex === 99) {
        examNextBtn.innerHTML = '<span class="nav-text-full">Câu cuối (Nộp bài)</span><span class="nav-text-short">Nộp bài</span>';
      } else {
        examNextBtn.innerHTML = '<span class="nav-text-full">Câu tiếp theo →</span><span class="nav-text-short">Tiếp theo →</span>';
      }
    }

    const chapterTag = document.getElementById('exam-chapter-tag');
    if (chapterTag) chapterTag.textContent = `Chương ${q.chapter}`;

    const starBtn = document.getElementById('exam-star-btn');
    if (starBtn) {
      const isStarred = state.starredIds.has(q.id);
      starBtn.textContent = isStarred ? '★' : '☆';
      starBtn.classList.toggle('starred', isStarred);
    }

    // Question (Render Markdown + KaTeX LaTeX)
    const textEl = document.getElementById('exam-q-text');
    if (textEl) textEl.innerHTML = renderMarkdownInline(q.question);

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
      textSpan.className = 'option-text';
      textSpan.innerHTML = renderMarkdownInline(optText);

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
        statusTag.innerHTML = isCorrect ? 'Chính xác!' : `Chưa đúng! Đáp án đúng là <strong>${prefixes[q.answer]}.</strong> <span>${renderMarkdownInline(q.options[q.answer])}</span>`;
      }
      if (slideTag) slideTag.textContent = q.slideRef || '';
      if (expText) {
        expText.innerHTML = `<div class="exp-markdown-body">${renderMarkdownBlock(q.explanation)}</div>`;
      }
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
    const chapterStats = {};
    if (typeof CHAPTERS_INFO !== 'undefined') {
      CHAPTERS_INFO.forEach(ch => {
        chapterStats[ch.id] = { total: 0, correct: 0, title: `${ch.num}: ${ch.title}` };
      });
    }

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
      if (ratingDescEl) ratingDescEl.textContent = `Bạn đã trả lời đúng ${correctCount}/100 câu! Kiến thức toàn diện 15 chương (gồm 7 chương chính & 8 chuyên đề Seminar) của bạn rất vững vàng.`;
    } else if (score >= 7.0) {
      if (ratingTitleEl) ratingTitleEl.textContent = 'Rất Tốt! Đạt Mục Tiêu Điểm Giỏi';
      if (ratingDescEl) ratingDescEl.textContent = `Bạn đã trả lời đúng ${correctCount}/100 câu. Hãy củng cố thêm các câu sai trong Sổ tay câu sai nhé!`;
    } else if (score >= 5.0) {
      if (ratingTitleEl) ratingTitleEl.textContent = 'Đạt Yêu Cầu! Cần Rà Soát Kỹ Các Chương Trọng Tâm';
      if (ratingDescEl) ratingDescEl.textContent = `Bạn đúng ${correctCount}/100 câu. Đặc biệt chú ý ôn sâu các chương trọng tâm (Chương 3, 4, 6, 7) để bứt phá điểm số.`;
    } else {
      if (ratingTitleEl) ratingTitleEl.textContent = 'Cần Nỗ Lực Ôn Lại Khẩn Trương';
      if (ratingDescEl) ratingDescEl.textContent = `Đạt ${correctCount}/100 câu. Hãy đọc lại các file Note tóm tắt và luyện riêng từng chương.`;
    }

    // Render Chapter Breakdown
    const breakdownContainer = document.getElementById('result-breakdown-container');
    if (breakdownContainer) {
      breakdownContainer.innerHTML = '';
      Object.keys(chapterStats).forEach(chId => {
        const stat = chapterStats[chId];
        if (!stat || stat.total === 0) return;
        const pct = Math.round((stat.correct / stat.total) * 100);
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
      });
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

      const userChoiceText = chosen !== undefined ? `<strong>${prefixes[chosen]}.</strong> <span>${renderMarkdownInline(q.options[chosen])}</span>` : '<span style="color:var(--text-muted)">Chưa trả lời</span>';
      const correctChoiceText = `<strong>${prefixes[q.answer]}.</strong> <span>${renderMarkdownInline(q.options[q.answer])}</span>`;

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
          ${renderMarkdownInline(q.question)}
        </div>
        <div style="font-size: 0.9rem; margin-bottom: 0.75rem;">
          <div style="margin-bottom: 0.35rem;">Bạn đã chọn: <span style="color: ${isCorrect ? 'var(--success)' : 'var(--error)'}">${userChoiceText}</span></div>
          ${!isCorrect ? `<div>Đáp án đúng: <span style="color: var(--success)">${correctChoiceText}</span></div>` : ''}
        </div>
        <div style="background: var(--bg-glass); border: 1px solid var(--border-glass); border-radius: var(--radius-sm); padding: 0.85rem; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5;">
          <div style="font-weight: 700; margin-bottom: 0.4rem; color: var(--text-primary);">💡 Giải thích chi tiết:</div>
          <div class="exp-markdown-body">${renderMarkdownBlock(q.explanation)}</div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // ============================================================================
  // TAB 4: SỔ TAY CÂU SAI (MISTAKES NOTEBOOK)
  // ============================================================================
