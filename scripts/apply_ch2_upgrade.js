const fs = require('fs');
const path = require('path');

const ch2Path = path.join(__dirname, '../data/questions/chuong_2.js');
const p1 = require('./ch2_upgrades/part1.js');
const p2 = require('./ch2_upgrades/part2.js');

const allUpgrades = { ...p1, ...p2 };

global.window = {};
require(ch2Path);
const questions = window.QUESTIONS_CHUONG_2;

let updatedCount = 0;
questions.forEach(q => {
  const up = allUpgrades[q.id];
  if (up) {
    if (up.question) q.question = up.question;
    if (up.options) q.options = up.options;
    if (up.answer !== undefined) q.answer = up.answer;
    if (up.explanation) q.explanation = up.explanation;
    updatedCount++;
  }
});

const fileContent = `/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 2: TIỀN XỬ LÝ VÀ BIỂU DIỄN DỮ LIỆU
   - Số lượng: 50 câu
   - Nội dung: 4 chiều chất lượng dữ liệu, Sampling Bias, Missing data (Xóa/Điền Mean/Median),
     Outliers (Tukey, Winsorization), Chuẩn hóa (Min-Max, Z-score, RobustScaler),
     Mã hóa (Label, One-Hot, Target), Feature Engineering (Selection vs Extraction),
     Lời nguyền số chiều (Curse of Dimensionality), PCA (7 bước tính toán, EVR, Trực giao, Tái tạo)
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_2 = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync(ch2Path, fileContent, 'utf8');
console.log(`Đã nâng cấp thành công ${updatedCount}/${questions.length} câu hỏi Chương 2.`);
