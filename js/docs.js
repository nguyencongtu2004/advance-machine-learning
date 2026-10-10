/* ==============================================================================
   MODULE: THEORY DOCS VIEWER (GHI CHÚ LÝ THUYẾT & TÀI LIỆU MARKDOWN)
   Hỗ trợ đọc Markdown offline/online, cuộn bảng di động, tìm kiếm highlight
============================================================================== */

  function initDocs() {
    if (!window.DOCS_MANIFEST || !Array.isArray(window.DOCS_MANIFEST) || window.DOCS_MANIFEST.length === 0) {
      return;
    }

    const selectEl = document.getElementById('docs-file-select');
    const listEl = document.getElementById('docs-files-list');
    const badgeEl = document.getElementById('docs-count-badge');

    if (badgeEl) badgeEl.textContent = `${window.DOCS_MANIFEST.length} bài`;

    if (selectEl) {
      selectEl.innerHTML = '';
      window.DOCS_MANIFEST.forEach(doc => {
        const opt = document.createElement('option');
        opt.value = doc.id;
        opt.textContent = `${doc.category}: ${doc.title}`;
        selectEl.appendChild(opt);
      });
      selectEl.addEventListener('change', (e) => {
        loadDoc(e.target.value);
      });
    }

    if (listEl) {
      listEl.innerHTML = '';
      window.DOCS_MANIFEST.forEach(doc => {
        const btn = document.createElement('button');
        btn.className = 'doc-file-btn';
        btn.dataset.id = doc.id;
        btn.innerHTML = `
          <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${doc.title}</span>
          ${doc.badge ? `<span class="doc-badge-tag">${doc.badge}</span>` : ''}
        `;
        btn.addEventListener('click', () => {
          loadDoc(doc.id);
        });
        listEl.appendChild(btn);
      });
    }

    // Gắn sự kiện tìm kiếm nội dung
    const searchInput = document.getElementById('docs-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        handleDocSearch(e.target.value.trim());
      });
    }

    state.docsLoaded = true;

    // Khôi phục tài liệu đã xem gần nhất hoặc mặc định là bài đầu tiên
    const savedDocId = localStorage.getItem(STORAGE_KEYS.DOCS_ACTIVE);
    const initialDoc = window.DOCS_MANIFEST.find(d => d.id === savedDocId) || window.DOCS_MANIFEST[0];
    if (initialDoc) {
      loadDoc(initialDoc.id);
    }
  }

  function ensureDocsLoaded() {
    if (!state.docsLoaded) {
      initDocs();
    }
  }

  async function loadDoc(docId) {
    if (!window.DOCS_MANIFEST) return;
    const doc = window.DOCS_MANIFEST.find(d => d.id === docId);
    if (!doc) return;

    state.docsActiveId = docId;
    localStorage.setItem(STORAGE_KEYS.DOCS_ACTIVE, docId);

    // Cập nhật giao diện select và sidebar list
    const selectEl = document.getElementById('docs-file-select');
    if (selectEl && selectEl.value !== docId) {
      selectEl.value = docId;
    }

    document.querySelectorAll('#docs-files-list .doc-file-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.id === docId);
    });

    // Cập nhật header tài liệu
    const metaBadge = document.getElementById('doc-meta-badge');
    if (metaBadge) metaBadge.textContent = doc.category || 'Tài liệu';

    const filenameTag = document.getElementById('doc-filename-tag');
    if (filenameTag) filenameTag.textContent = doc.filename;

    const activeTitle = document.getElementById('doc-active-title');
    if (activeTitle) activeTitle.textContent = doc.title;

    // Reset ô tìm kiếm khi đổi file
    const searchInput = document.getElementById('docs-search-input');
    const searchStatus = document.getElementById('docs-search-status');
    if (searchInput) searchInput.value = '';
    if (searchStatus) searchStatus.classList.add('hidden');

    const contentBody = document.getElementById('docs-content-body');
    if (contentBody) {
      contentBody.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Đang tải nội dung tài liệu...</div>';
    }

    // Đọc nội dung Markdown: Ưu tiên fetch từ thư mục docs/ để lấy nội dung mới nhất
    let mdText = '';
    try {
      const resp = await fetch('docs/' + encodeURIComponent(doc.filename));
      if (resp.ok) {
        mdText = await resp.text();
      }
    } catch (e) {
      // Khi mở offline file:// hoặc mạng lỗi -> dùng dữ liệu nhúng sẵn trong data_docs.js
    }

    if (!mdText && window.DOCS_CONTENT && window.DOCS_CONTENT[doc.filename]) {
      mdText = window.DOCS_CONTENT[doc.filename];
    }

    if (!mdText) {
      if (contentBody) contentBody.innerHTML = '<div style="padding: 2rem; color: var(--error);">Không thể tải nội dung tài liệu này.</div>';
      return;
    }

    state.docsCurrentMarkdown = mdText;

    // Render Markdown qua thư viện marked
    renderMarkdownContent(mdText);
  }

  function renderMarkdownContent(mdText) {
    const contentBody = document.getElementById('docs-content-body');
    if (!contentBody) return;

    let html = '';
    const hasMarked = typeof marked !== 'undefined' && typeof marked.parse === 'function';
    const hasKatex = typeof katex !== 'undefined' && typeof katex.renderToString === 'function';

    if (hasMarked) {
      try {
        const displayMath = [];
        const inlineMath = [];

        // 1. Tách và bảo vệ khối công thức toán học lớn ($$...$$)
        let cleanText = mdText.replace(/\$\$([\s\S]*?)\$\$/g, (match, formula) => {
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
        html = marked.parse(cleanText, {
          gfm: true,
          breaks: true
        });

        // 4. Render công thức Toán học chuẩn LaTeX qua KaTeX
        html = html.replace(/@@KATEX_DISPLAY_(\d+)@@/g, (match, idx) => {
          const formula = displayMath[parseInt(idx, 10)] || '';
          if (hasKatex) {
            try {
              return katex.renderToString(formula, { displayMode: true, throwOnError: false, strict: false });
            } catch (e) {
              return `<div class="katex-display-raw">$$${escapeHtml(formula)}$$</div>`;
            }
          }
          return `<div class="katex-display-raw">$$${escapeHtml(formula)}$$</div>`;
        });

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

      } catch (e) {
        console.error('Lỗi parse marked/katex:', e);
        html = `<pre style="white-space: pre-wrap;">${escapeHtml(mdText)}</pre>`;
      }
    } else {
      html = `<pre style="white-space: pre-wrap;">${escapeHtml(mdText)}</pre>`;
    }

    contentBody.innerHTML = html;

    // Bao bọc tất cả thẻ <table> bằng .table-scroll-wrapper để cuộn ngang mượt mà trên mobile
    contentBody.querySelectorAll('table').forEach(table => {
      if (!table.parentElement.classList.contains('table-scroll-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-scroll-wrapper';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });
  }

  function handleDocSearch(query) {
    const contentBody = document.getElementById('docs-content-body');
    const statusEl = document.getElementById('docs-search-status');
    if (!contentBody || !state.docsCurrentMarkdown) return;

    if (!query) {
      renderMarkdownContent(state.docsCurrentMarkdown);
      if (statusEl) statusEl.classList.add('hidden');
      return;
    }

    // Render lại bản gốc trước
    renderMarkdownContent(state.docsCurrentMarkdown);

    // Tìm và highlight các đoạn khớp
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    let matchCount = 0;

    function highlightTextNodes(node) {
      if (node.nodeType === 3) {
        const val = node.nodeValue;
        if (regex.test(val)) {
          const span = document.createElement('span');
          span.innerHTML = val.replace(regex, (m) => {
            matchCount++;
            return `<mark class="docs-highlight">${m}</mark>`;
          });
          node.parentNode.replaceChild(span, node);
        }
      } else if (node.nodeType === 1 && !['SCRIPT', 'STYLE'].includes(node.tagName)) {
        Array.from(node.childNodes).forEach(child => highlightTextNodes(child));
      }
    }

    highlightTextNodes(contentBody);

    if (statusEl) {
      statusEl.textContent = `${matchCount} kết quả`;
      statusEl.classList.remove('hidden');
    }

    // Tự động cuộn tới kết quả đầu tiên
    const firstMark = contentBody.querySelector('mark.docs-highlight');
    if (firstMark) {
      firstMark.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

