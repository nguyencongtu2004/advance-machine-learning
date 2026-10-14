const fs = require('fs');
const path = require('path');
const vm = require('vm');

const webDir = path.join(__dirname, '..');
const ch3File = path.join(webDir, 'data', 'questions', 'chuong_3.js');

// 1. Đọc dữ liệu hiện tại của chuong_3.js
const code = fs.readFileSync(ch3File, 'utf-8');
const context = { window: {} };
vm.runInNewContext(code, context);
const currentQuestions = context.window.QUESTIONS_CHUONG_3;

if (!Array.isArray(currentQuestions) || currentQuestions.length !== 90) {
  console.error(`Lỗi: Số lượng câu hỏi hiện tại không phải là 90 (tìm thấy ${currentQuestions?.length})`);
  process.exit(1);
}

// 2. Nạp dữ liệu nâng cấp từ 4 phần
const p1 = require('./ch3_upgrades/part1');
const p2 = require('./ch3_upgrades/part2');
const p3 = require('./ch3_upgrades/part3');
const p4 = require('./ch3_upgrades/part4');
const upgrades = { ...p1, ...p2, ...p3, ...p4 };

console.log(`Đã nạp ${Object.keys(upgrades).length} câu hỏi được nâng cấp chi tiết.`);

let updatedCount = 0;
const updatedQuestions = currentQuestions.map(q => {
  const up = upgrades[q.id];
  if (!up) {
    console.warn(`Cảnh báo: Câu #${q.id} không có dữ liệu nâng cấp!`);
    return q;
  }

  updatedCount++;
  return {
    ...q,
    question: up.question || q.question,
    options: up.options || q.options,
    explanation: up.explanation || q.explanation
  };
});

console.log(`Đã cập nhật thành công ${updatedCount}/90 câu hỏi Chương 3.`);

// 3. Ghi lại vào chuong_3.js
const fileContent = `/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 3: CÁC MÔ HÌNH HỌC MÁY CƠ BẢN VÀ ĐÁNH GIÁ
   - Số lượng: 90 câu
   - Nội dung: Hồi quy tuyến tính OLS, Ridge L2, Lasso L1, Logistic Regression, Confusion Matrix, Precision, Recall, F1, ROC-AUC, PR curve
   - Giải thích chi tiết & trực quan hóa bản chất từ Giai_Thich_Chi_Tiet_Chuong_3.md
   - Hỗ trợ hiển thị Markdown & Công thức Toán LaTeX (KaTeX)
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_3 = ${JSON.stringify(updatedQuestions, null, 2)};

// Tự động gộp vào ngân hàng câu hỏi chung
if (!window.QUESTION_BANK) {
  window.QUESTION_BANK = [];
}
window.QUESTION_BANK.push(...window.QUESTIONS_CHUONG_3);
`;

fs.writeFileSync(ch3File, fileContent, 'utf-8');
console.log(`✓ Đã ghi đè thành công: ${path.relative(webDir, ch3File)}`);
