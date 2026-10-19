const fs = require('fs');
const path = require('path');

// Tự động xác định thư mục gốc web/ dù chạy từ scripts/ hay từ web/
const rootDir = fs.existsSync(path.join(__dirname, 'docs'))
  ? __dirname
  : path.join(__dirname, '..');

const docsDir = path.join(rootDir, 'docs');
const dataDir = path.join(rootDir, 'data');
const outputFile = path.join(dataDir, 'data_docs.js');

if (!fs.existsSync(docsDir)) {
  console.error('Lỗi: Thư mục docs không tồn tại tại:', docsDir);
  process.exit(1);
}

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Sắp xếp thứ tự danh mục tài liệu trực quan:
// 1. Kế hoạch & Sổ tay
// 2. Các bản Note tóm tắt (Chương 1 đến 7)
// 3. Các bản Giải thích chi tiết chuyên sâu (Chương 1 đến 7)
function getFileSortPriority(filename) {
  if (filename.startsWith('00_')) return 10;
  if (filename.includes('So_Tay')) return 20;
  
  const noteMatch = filename.match(/^0*(\d+)_Note/i);
  if (noteMatch) return 100 + parseInt(noteMatch[1], 10);
  
  const gMatch = filename.match(/Giai_Thich_Chi_Tiet_Chuong_(\d+)/i);
  if (gMatch) return 200 + parseInt(gMatch[1], 10);

  return 300;
}

const files = fs.readdirSync(docsDir)
  .filter(f => f.endsWith('.md'))
  .sort((a, b) => getFileSortPriority(a) - getFileSortPriority(b));

const manifest = [];
const contents = {};

// Bản đồ tên tóm tắt cho từng chương
const CHAPTER_SHORT_NAMES = {
  1: 'Tổng quan Học máy',
  2: 'Tiền xử lý & PCA',
  3: 'Tuyến tính & Đánh giá',
  4: 'Cây quyết định & Ensemble',
  5: 'Bài toán Phân cụm',
  6: 'MLP & Lan truyền ngược',
  7: 'CNN Mạng tích chập'
};

files.forEach((filename) => {
  const filePath = path.join(docsDir, filename);
  const text = fs.readFileSync(filePath, 'utf-8');
  
  // Trích xuất full title từ dòng tiêu đề cấp 1 (# ...) đầu tiên
  let fullTitle = filename.replace(/\.md$/, '').replace(/^\d+[_]/, '').replace(/_/g, ' ');
  const lines = text.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('# ')) {
      fullTitle = trimmed.replace(/^#\s+/, '').replace(/\*\*|\*/g, '').trim();
      break;
    }
  }

  let title = fullTitle;
  let category = 'Ghi chú';
  let badge = '';
  let badgeClass = '';

  if (filename.includes('00_')) {
    title = '🎯 Lộ trình & Kế hoạch ôn tập 100 câu';
    category = 'Kế hoạch';
    badge = 'Lộ trình';
    badgeClass = 'badge-lotrinh';
  } else if (filename.includes('So_Tay')) {
    title = '📝 Sổ tay công thức & 30+ Bẫy thi';
    category = 'Sổ tay';
    badge = 'Tổng hợp';
    badgeClass = 'badge-tonghop';
  } else if (filename.includes('Giai_Thich_Chi_Tiet')) {
    const match = filename.match(/Chuong_(\d+)/i);
    const chNum = match ? parseInt(match[1], 10) : 0;
    const chName = CHAPTER_SHORT_NAMES[chNum] || `Chương ${chNum}`;
    title = `🧠 Chi tiết Ch${chNum}: ${chName}`;
    category = `Giải thích Ch${chNum}`;
    badge = 'Chuyên sâu';
    badgeClass = 'badge-chuyensau';
  } else {
    const match = filename.match(/Chuong_(\d+)/i);
    const chNum = match ? parseInt(match[1], 10) : 0;
    const chName = CHAPTER_SHORT_NAMES[chNum] || `Chương ${chNum}`;
    title = `${getChapterIcon(chNum)} Note Ch${chNum}: ${chName}`;
    category = `Chương ${chNum}`;
    if ([3, 4, 6, 7].includes(chNum)) {
      badge = 'Trọng tâm';
      badgeClass = 'badge-trongtam';
    }
  }

  const id = filename.replace(/\.md$/, '').toLowerCase();
  manifest.push({
    id,
    filename,
    title,
    fullTitle,
    category,
    badge,
    badgeClass
  });

  contents[filename] = text;
});

function getChapterIcon(chNum) {
  const icons = { 1: '📘', 2: '📗', 3: '📕', 4: '📙', 5: '📓', 6: '🗂️', 7: '📸' };
  return icons[chNum] || '📄';
}

const outputCode = `/* ==============================================================================
   TẬP HỢP TÀI LIỆU VÀ GHI CHÚ ÔN THI (TỰ ĐỘNG TẠO TỪ THƯ MỤC docs/)
   Bao gồm: Kế hoạch, Sổ tay công thức, 7 Bản Note tóm tắt & 7 Bản Giải thích chi tiết chuyên sâu.
   Để thêm / sửa file: Chỉ cần chỉnh sửa các file .md trong thư mục docs/
   và chạy: node scripts/build_docs.js
============================================================================== */

window.DOCS_MANIFEST = ${JSON.stringify(manifest, null, 2)};

window.DOCS_CONTENT = ${JSON.stringify(contents)};
`;

fs.writeFileSync(outputFile, outputCode, 'utf-8');
const rootOutputFile = path.join(rootDir, 'data_docs.js');
if (fs.existsSync(rootOutputFile)) {
  fs.writeFileSync(rootOutputFile, outputCode, 'utf-8');
}
console.log(`Đã tạo thành công ${path.relative(rootDir, outputFile)} với ${manifest.length} tài liệu!`);
