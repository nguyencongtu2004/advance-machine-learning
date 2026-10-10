/* ==============================================================================
   MODULE: FLASHCARDS 3D (LẬT THẺ GHI NHỚ)
============================================================================== */

  function setFlashcardChapter(chVal, targetIndex) {
    state.flashcardChapter = chVal;
    if (chVal === 'all') {
      state.flashcardQuestions = [...state.allQuestions];
    } else {
      const cNum = parseInt(chVal, 10);
      state.flashcardQuestions = state.allQuestions.filter(q => q.chapter === cNum);
    }

    if (typeof targetIndex === 'number' && targetIndex >= 0 && targetIndex < state.flashcardQuestions.length) {
      state.flashcardIndex = targetIndex;
    } else if (state.flashcardPositions && state.flashcardPositions.indices && typeof state.flashcardPositions.indices[chVal] === 'number') {
      const savedIdx = state.flashcardPositions.indices[chVal];
      state.flashcardIndex = (savedIdx >= 0 && savedIdx < state.flashcardQuestions.length) ? savedIdx : 0;
    } else {
      state.flashcardIndex = 0;
    }

    const select = document.getElementById('flashcard-chapter-select');
    if (select && select.value !== chVal) {
      select.value = chVal;
    }

    state.flashcardFlipped = false;
    saveFlashcardPosition();
    renderFlashcard();
  }

  function renderFlashcard() {
    const questions = state.flashcardQuestions;
    if (!questions || questions.length === 0) return;

    if (state.flashcardIndex < 0) state.flashcardIndex = 0;
    if (state.flashcardIndex >= questions.length) state.flashcardIndex = questions.length - 1;

    saveFlashcardPosition();

    const q = questions[state.flashcardIndex];
    const total = questions.length;
    const prefixes = ['A', 'B', 'C', 'D'];

    const counterEl = document.getElementById('flashcard-counter');
    if (counterEl) counterEl.textContent = `Thẻ ${state.flashcardIndex + 1} / ${total}`;

    const prevBtn = document.getElementById('fc-prev-btn');
    const nextBtn = document.getElementById('fc-next-btn');
    if (prevBtn) {
      prevBtn.disabled = (state.flashcardIndex === 0);
      prevBtn.style.opacity = (state.flashcardIndex === 0) ? '0.4' : '1';
    }
    if (nextBtn) {
      nextBtn.disabled = (state.flashcardIndex === total - 1);
      nextBtn.style.opacity = (state.flashcardIndex === total - 1) ? '0.4' : '1';
    }

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
  // TAB 7: GHI CHÚ LÝ THUYẾT & TÀI LIỆU MARKDOWN (DYNAMIC & NON-HARDCODED)
  // ============================================================================
