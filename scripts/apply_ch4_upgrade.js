const fs = require('fs');
const path = require('path');
const vm = require('vm');

const webDir = path.join(__dirname, '..');
const ch4File = path.join(webDir, 'data', 'questions', 'chuong_4.js');

// 1. Đọc dữ liệu hiện tại của chuong_4.js
const code = fs.readFileSync(ch4File, 'utf-8');
const context = { window: {} };
vm.runInNewContext(code, context);
const currentQuestions = context.window.QUESTIONS_CHUONG_4;

if (!Array.isArray(currentQuestions) || currentQuestions.length !== 80) {
  console.error(`Lỗi: Số lượng câu hỏi hiện tại không phải là 80 (tìm thấy ${currentQuestions?.length})`);
  process.exit(1);
}

// 2. Nạp dữ liệu nâng cấp từ 4 phần
const p1 = require('./ch4_upgrades/part1');
const p2 = require('./ch4_upgrades/part2');
const p3 = require('./ch4_upgrades/part3');
const p4 = require('./ch4_upgrades/part4');
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
    answer: up.answer !== undefined ? up.answer : q.answer,
    explanation: up.explanation || q.explanation,
    slideRef: up.slideRef || q.slideRef
  };
});

console.log(`Đã cập nhật thành công ${updatedCount}/80 câu hỏi Chương 4.`);

// 3. Ghi lại vào chuong_4.js
const fileContent = `/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 4: CÂY QUYẾT ĐỊNH VÀ ENSEMBLE LEARNING
   - Số lượng: 80 câu
   - Nội dung: Decision Tree (Entropy, Information Gain ID3, Gini CART, Pruning),
     Bagging, Random Forest, Boosting (AdaBoost, Gradient Boosting, XGBoost, LightGBM), Stacking
   - Giải thích chi tiết & trực quan hóa bản chất từ Giai_Thich_Chi_Tiet_Chuong_4.md
   - Hỗ trợ hiển thị Markdown & Công thức Toán LaTeX (KaTeX)
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_4 = ${JSON.stringify(updatedQuestions, null, 2)};

// Tự động gộp vào ngân hàng câu hỏi chung
if (!window.QUESTION_BANK) {
  window.QUESTION_BANK = [];
}
window.QUESTION_BANK.push(...window.QUESTIONS_CHUONG_4);
`;

fs.writeFileSync(ch4File, fileContent, 'utf-8');
console.log(`✓ Đã ghi đè thành công: ${path.relative(webDir, ch4File)}`);
