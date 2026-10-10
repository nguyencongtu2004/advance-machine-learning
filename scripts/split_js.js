const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const appJsPath = path.join(rootDir, 'app.js');
const jsDir = path.join(rootDir, 'js');

if (!fs.existsSync(jsDir)) {
  fs.mkdirSync(jsDir, { recursive: true });
}

const lines = fs.readFileSync(appJsPath, 'utf-8').split(/\r?\n/);
const getLines = (start, end) => lines.slice(start - 1, end).join('\n');

// 1. state.js (lines 13 to 232 + escapeHtml from 1465 to 1467)
const stateCode = `/* ==============================================================================
   MODULE: STATE & STORAGE MANAGEMENT
   Chứa thông tin chương, trạng thái toàn cục (state), localStorage & Dark/Light Theme
============================================================================== */

${getLines(13, 232)}

${getLines(1465, 1467)}
`;
fs.writeFileSync(path.join(jsDir, 'state.js'), stateCode, 'utf-8');

// 2. practice.js (lines 391 to 668)
const practiceCode = `/* ==============================================================================
   MODULE: PRACTICE QUIZ (LUYỆN TẬP THEO CHƯƠNG)
   Hiển thị câu hỏi, chọn đáp án, giải thích tức thì, đánh dấu sao, lưu vị trí
============================================================================== */

${getLines(391, 668)}
`;
fs.writeFileSync(path.join(jsDir, 'practice.js'), practiceCode, 'utf-8');

// 3. exam.js (lines 669 to 1034)
const examCode = `/* ==============================================================================
   MODULE: EXAM SIMULATOR (THI THỬ 100 CÂU BẤM GIỜ)
   Bộ đếm giờ, rút 100 câu ngẫu nhiên theo tỷ lệ, bảng câu hỏi, chấm điểm, xem lại
============================================================================== */

${getLines(669, 1034)}
`;
fs.writeFileSync(path.join(jsDir, 'exam.js'), examCode, 'utf-8');

// 4. notebook.js (lines 1035 to 1167)
const notebookCode = `/* ==============================================================================
   MODULE: NOTEBOOK (SỔ TAY CÂU SAI & ĐÁNH DẤU SAO)
============================================================================== */

${getLines(1035, 1167)}
`;
fs.writeFileSync(path.join(jsDir, 'notebook.js'), notebookCode, 'utf-8');

// 5. flashcards.js (lines 1168 to 1254)
const flashcardsCode = `/* ==============================================================================
   MODULE: FLASHCARDS 3D (LẬT THẺ GHI NHỚ)
============================================================================== */

${getLines(1168, 1254)}
`;
fs.writeFileSync(path.join(jsDir, 'flashcards.js'), flashcardsCode, 'utf-8');

// 6. docs.js (lines 1255 to 1464)
const docsCode = `/* ==============================================================================
   MODULE: THEORY DOCS VIEWER (GHI CHÚ LÝ THUYẾT & TÀI LIỆU MARKDOWN)
   Hỗ trợ đọc Markdown offline/online, cuộn bảng di động, tìm kiếm highlight
============================================================================== */

${getLines(1255, 1464)}
`;
fs.writeFileSync(path.join(jsDir, 'docs.js'), docsCode, 'utf-8');

// 7. shortcuts.js (lines 1469 to 1487)
const shortcutsCode = `/* ==============================================================================
   MODULE: SHORTCUTS & HELP MODAL (BẢNG PHÍM TẮT & TRỢ GIÚP)
============================================================================== */

${getLines(1469, 1487)}
`;
fs.writeFileSync(path.join(jsDir, 'shortcuts.js'), shortcutsCode, 'utf-8');

// 8. app.js (Dashboard stats, chapter list, routing switchTab, event listeners, initApp)
const appCode = `/* ==============================================================================
   MODULE: APPLICATION BOOTSTRAP & ROUTING
   Điều hướng Tabs, thống kê tổng thể, lắng nghe sự kiện, khởi chạy app
============================================================================== */

${getLines(233, 390)}

${getLines(1488, 1750)}
`;
fs.writeFileSync(path.join(jsDir, 'app.js'), appCode, 'utf-8');

console.log('Successfully generated modular JS in js/ !');
