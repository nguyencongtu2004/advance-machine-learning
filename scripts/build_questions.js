const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Tự động xác định thư mục web/ dù chạy từ web/ hay từ scripts/
const rootDir = fs.existsSync(path.join(__dirname, 'data'))
  ? __dirname
  : path.join(__dirname, '..');

const questionsDir = path.join(rootDir, 'data', 'questions');
const outputFile = path.join(rootDir, 'data', 'data_questions.js');
const rootOutputFile = path.join(rootDir, 'data_questions.js');

if (!fs.existsSync(questionsDir)) {
  console.error('Lỗi: Thư mục câu hỏi không tồn tại tại:', questionsDir);
  process.exit(1);
}

console.log('Đang đọc các file câu hỏi từ:', path.relative(rootDir, questionsDir));

const files = fs.readdirSync(questionsDir)
  .filter(f => f.startsWith('chuong_') && f.endsWith('.js'))
  .sort((a, b) => {
    const numA = parseInt(a.replace(/\D/g, ''), 10);
    const numB = parseInt(b.replace(/\D/g, ''), 10);
    return numA - numB;
  });

if (files.length === 0) {
  console.error('Lỗi: Không tìm thấy file câu hỏi nào trong', questionsDir);
  process.exit(1);
}

let aggregatedQuestions = [];
const chapterStats = [];

files.forEach(filename => {
  const filePath = path.join(questionsDir, filename);
  const code = fs.readFileSync(filePath, 'utf-8');
  const context = { window: {} };
  try {
    vm.runInNewContext(code, context);
  } catch (err) {
    console.error(`Lỗi cú pháp trong file ${filename}:`, err);
    process.exit(1);
  }

  // Lấy danh sách câu hỏi của chương
  const chNum = parseInt(filename.replace(/\D/g, ''), 10);
  const chQuestions = context.window[`QUESTIONS_CHUONG_${chNum}`] || context.window.QUESTION_BANK;

  if (!Array.isArray(chQuestions) || chQuestions.length === 0) {
    console.error(`Cảnh báo: Không đọc được câu hỏi trong ${filename}`);
    return;
  }

  // Chuẩn hóa câu hỏi: answer số 0-3, dọn sạch prefix A. B. C. D. ở options nếu có
  chQuestions.forEach(q => {
    if (typeof q.answer === 'string') {
      const map = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, '0': 0, '1': 1, '2': 2, '3': 3 };
      const trimmed = q.answer.trim().toUpperCase();
      if (map[trimmed] !== undefined) {
        q.answer = map[trimmed];
      }
    }
    if (Array.isArray(q.options)) {
      q.options = q.options.map(opt => String(opt).replace(/^[A-D][.)]\s*/, '').trim());
    }
  });

  chapterStats.push({ filename, count: chQuestions.length, chapter: chNum });
  aggregatedQuestions.push(...chQuestions);
});

// Sắp xếp câu hỏi theo id nếu cần hoặc giữ nguyên theo thứ tự chương
console.log('Thống kê câu hỏi nạp được:');
chapterStats.forEach(st => {
  console.log(` - ${st.filename}: ${st.count} câu (Chương ${st.chapter})`);
});
console.log(`=> Tổng cộng: ${aggregatedQuestions.length} câu hỏi.`);

// Kiểm tra trùng lặp ID
const idMap = new Set();
let duplicates = 0;
aggregatedQuestions.forEach(q => {
  if (idMap.has(q.id)) {
    console.error(`Cảnh báo ID trùng: ${q.id}`);
    duplicates++;
  }
  idMap.add(q.id);
});

if (duplicates > 0) {
  console.error(`Cảnh báo: Có ${duplicates} ID câu hỏi bị trùng!`);
}

const bundledCode = `/* ==============================================================================
   NGÂN HÀNG 400 CÂU HỎI TRẮC NGHIỆM HỌC MÁY TIÊN TIẾN & ỨNG DỤNG (UIT)
   (File tổng hợp tự động từ data/questions/chuong_1.js -> chuong_6.js)
   Để thêm / sửa câu hỏi: Chỉnh sửa các file trong thư mục data/questions/
   và chạy: node scripts/build_questions.js
============================================================================== */

window.QUESTION_BANK = ${JSON.stringify(aggregatedQuestions, null, 2)};
`;

fs.writeFileSync(outputFile, bundledCode, 'utf-8');
console.log(`✓ Đã cập nhật thành công: ${path.relative(rootDir, outputFile)}`);

if (fs.existsSync(rootOutputFile)) {
  fs.writeFileSync(rootOutputFile, bundledCode, 'utf-8');
  console.log(`✓ Đã đồng bộ root: ${path.relative(rootDir, rootOutputFile)}`);
}

console.log('Hoàn tất build ngân hàng câu hỏi!');
