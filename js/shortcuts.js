/* ==============================================================================
   MODULE: SHORTCUTS & HELP MODAL (BẢNG PHÍM TẮT & TRỢ GIÚP)
============================================================================== */

  // ============================================================================
  // CỬA SỔ TRỢ GIÚP & PHÍM TẮT (HELP MODAL)
  // ============================================================================
  function openHelpModal() {
    const modal = document.getElementById('help-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeHelpModal() {
    const modal = document.getElementById('help-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden', 'true');
    }
  }

