const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');
const outputFile = path.join(__dirname, 'data_docs.js');

if (!fs.existsSync(docsDir)) {
  console.error('Thư mục docs không tồn tại!');
  process.exit(1);
}

const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md')).sort();

const manifest = [];
const contents = {};

files.forEach((filename, idx) => {
  const filePath = path.join(docsDir, filename);
  const text = fs.readFileSync(filePath, 'utf-8');
  
  // Trích xuất tiêu đề từ dòng tiêu đề cấp 1 (# ...) đầu tiên
  let title = filename.replace(/\.md$/, '').replace(/^\d+[_]/, '').replace(/_/g, ' ');
  const lines = text.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('# ')) {
      title = trimmed.replace(/^#\s+/, '').replace(/\*\*|\*/g, '').trim();
      break;
    }
  }

  // Phân loại nhãn chương
  let category = 'Ghi chú';
  let badge = '';
  if (filename.includes('00_')) {
    category = 'Kế hoạch';
    badge = 'Lộ trình';
  } else if (filename.includes('07_')) {
    category = 'Sổ tay';
    badge = 'Tổng hợp';
  } else {
    const match = filename.match(/Chuong_(\d+)/i);
    if (match) {
      category = `Chương ${match[1]}`;
      if (['3', '4', '6'].includes(match[1])) {
        badge = 'Trọng tâm';
      }
    }
  }

  const id = filename.replace(/\.md$/, '').toLowerCase();
  manifest.push({
    id,
    filename,
    title,
    category,
    badge
  });

  contents[filename] = text;
});

const outputCode = `/* ==============================================================================
   TẬP HỢP TÀI LIỆU VÀ GHI CHÚ ÔN THI (TỰ ĐỘNG TẠO TỪ THƯ MỤC docs/)
   Để thêm / sửa file: Chỉ cần chỉnh sửa các file .md trong thư mục docs/
   và chạy lại: node build_docs.js (hoặc web sẽ tự động fetch file từ docs/)
============================================================================== */

window.DOCS_MANIFEST = ${JSON.stringify(manifest, null, 2)};

window.DOCS_CONTENT = ${JSON.stringify(contents)};
`;

fs.writeFileSync(outputFile, outputCode, 'utf-8');
console.log(`Đã tạo thành công data_docs.js với ${manifest.length} tài liệu!`);
