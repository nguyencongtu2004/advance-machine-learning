/* ==============================================================================
   MODULE: NOTEBOOK (SỔ TAY CÂU SAI & ĐÁNH DẤU SAO)
============================================================================== */

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
        <div class="question-text">${renderMarkdownInline(q.question)}</div>
        <div class="options-list" id="wrong-options-${q.id}"></div>
        <div class="explanation-card active" style="margin-top: 1rem;">
          <div class="explanation-header">
            <span class="status-tag correct">Đáp án đúng: <strong>${prefixes[q.answer]}.</strong> <span>${renderMarkdownInline(q.options[q.answer])}</span></span>
            <span class="slide-tag">${q.slideRef || ''}</span>
          </div>
          <div class="explanation-text"><div class="exp-markdown-body">${renderMarkdownBlock(q.explanation)}</div></div>
        </div>
      `;

      const optContainer = card.querySelector(`#wrong-options-${q.id}`);
      q.options.forEach((optText, optIdx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (optIdx === q.answer) btn.classList.add('correct');
        else if (past && optIdx === past.selected && !past.isCorrect) btn.classList.add('wrong');

        btn.innerHTML = `<span class="option-prefix">${prefixes[optIdx]}</span><span class="option-text">${renderMarkdownInline(optText)}</span>`;
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
        <div class="question-text">${renderMarkdownInline(q.question)}</div>
        <div class="options-list">
          ${q.options.map((opt, i) => `
            <div class="option-btn ${i === q.answer ? 'correct' : ''}">
              <span class="option-prefix">${prefixes[i]}</span>
              <span class="option-text">${renderMarkdownInline(opt)}</span>
            </div>
          `).join('')}
        </div>
        <div class="explanation-card active" style="margin-top: 1rem;">
          <div class="explanation-header">
            <span class="status-tag correct">Phân tích & Giải thích chi tiết:</span>
            <span class="slide-tag">${q.slideRef || ''}</span>
          </div>
          <div class="explanation-text"><div class="exp-markdown-body">${renderMarkdownBlock(q.explanation)}</div></div>
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
