const fs = require('fs');
const path = require('path');
const vm = require('vm');

const webDir = path.join(__dirname, '..');
const dataDir = path.join(webDir, 'data');
const questionsDir = path.join(dataDir, 'questions');
const sourceFile = path.join(dataDir, 'data_questions.js');

if (!fs.existsSync(questionsDir)) {
  fs.mkdirSync(questionsDir, { recursive: true });
}

// Đọc ngân hàng câu hỏi gốc
const sourceCode = fs.readFileSync(sourceFile, 'utf-8');
const context = { window: {} };
vm.runInNewContext(sourceCode, context);
const questionBank = context.window.QUESTION_BANK;

if (!Array.isArray(questionBank)) {
  console.error('Lỗi: Không tìm thấy QUESTION_BANK hợp lệ!');
  process.exit(1);
}

console.log(`Đang xử lý ${questionBank.length} câu hỏi...`);

const CHAPTER_METADATA = [
  {
    num: 1,
    title: 'Chương 1: Tổng quan về Học máy',
    desc: 'Định nghĩa Mitchell & Samuel, phân loại học máy (Supervised, Unsupervised, Reinforcement), Train/Val/Test, Overfitting/Underfitting, K-Fold CV'
  },
  {
    num: 2,
    title: 'Chương 2: Tiền xử lý dữ liệu và Giảm chiều',
    desc: 'Xử lý missing value, chuẩn hóa Min-Max/Z-score, mã hóa One-Hot, phát hiện nhiễu IQR/3-Sigma, Giảm chiều dữ liệu PCA & EVR'
  },
  {
    num: 3,
    title: 'Chương 3: Các mô hình học máy cơ bản và Đánh giá',
    desc: 'Hồi quy tuyến tính OLS, Ridge L2, Lasso L1, Logistic Regression, Confusion Matrix, Precision, Recall, F1, ROC-AUC, PR curve'
  },
  {
    num: 4,
    title: 'Chương 4: Cây quyết định và Học kết hợp',
    desc: 'Decision Tree (Entropy, Information Gain ID3, Gini CART, Pruning), Bagging, Random Forest, Boosting (AdaBoost, Gradient Boosting)'
  },
  {
    num: 5,
    title: 'Chương 5: Bài toán Phân cụm',
    desc: 'K-Means, K-Means++, WCSS, Elbow method, Silhouette score, Gaussian Mixture Models (GMM), DBSCAN (Core, Border, Noise)'
  },
  {
    num: 6,
    title: 'Chương 6: MLP - Multi Layer Perceptron',
    desc: 'Perceptron, MLP, Activation Functions (Sigmoid, Tanh, ReLU, Softmax), Forward/Backpropagation, Loss functions, Optimizers (SGD, Adam)'
  }
];

CHAPTER_METADATA.forEach(meta => {
  const chQuestions = questionBank.filter(q => q.chapter === meta.num);
  const outputFile = path.join(questionsDir, `chuong_${meta.num}.js`);
  
  const fileHeader = `/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - ${meta.title.toUpperCase()}
   - Số lượng: ${chQuestions.length} câu
   - Nội dung: ${meta.desc}
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_${meta.num} = ${JSON.stringify(chQuestions, null, 2)};

// Tự động gộp vào ngân hàng câu hỏi chung
if (!window.QUESTION_BANK) {
  window.QUESTION_BANK = [];
}
window.QUESTION_BANK.push(...window.QUESTIONS_CHUONG_${meta.num});
`;

  fs.writeFileSync(outputFile, fileHeader, 'utf-8');
  console.log(`✓ Đã tạo ${path.relative(webDir, outputFile)} (${chQuestions.length} câu)`);
});

console.log('\nTách câu hỏi thành công vào thư mục data/questions/!');
