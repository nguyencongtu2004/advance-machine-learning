const fs = require('fs');
const path = require('path');

const ch1Path = path.join(__dirname, '../data/questions/chuong_1.js');
const p1 = require('./ch1_upgrades/part1.js');
const p2 = require('./ch1_upgrades/part2.js');

const allUpgrades = { ...p1, ...p2 };

global.window = {};
require(ch1Path);
const questions = window.QUESTIONS_CHUONG_1;

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
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 1: TỔNG QUAN VỀ HỌC MÁY
   - Số lượng: 50 câu
   - Nội dung: Định nghĩa Mitchell & Samuel, phân loại học máy (Supervised, Unsupervised, Reinforcement), Train/Val/Test, Overfitting/Underfitting, K-Fold CV
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_1 = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync(ch1Path, fileContent, 'utf8');
console.log(`Đã nâng cấp thành công ${updatedCount}/${questions.length} câu hỏi Chương 1.`);
