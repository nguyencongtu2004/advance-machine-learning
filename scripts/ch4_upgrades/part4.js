module.exports = {
  326: {
    question: "Xác suất để một mẫu dữ liệu cụ thể KHÔNG ĐƯỢC CHỌN vào một tập mẫu con Bootstrap có kích thước N (mẫu ngoài túi Out-of-Bag - OOB) khi N tiến đến vô cùng xấp xỉ bằng bao nhiêu?",
    options: [
      "50.0%",
      "36.8% (1/e)",
      "63.2% (1 - 1/e)",
      "25.0%"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Chứng minh toán học:
* Trong 1 lần rút mẫu ngẫu nhiên từ $N$ phần tử, xác suất để 1 mẫu cụ thể **không được chọn** là:
  $$p_1 = 1 - \\frac{1}{N}$$
* Khi rút $N$ lần độc lập có hoàn lại, xác suất để mẫu đó **không bao giờ được chọn trong cả $N$ lần** là:
  $$P(\\text{không chọn}) = \\left(1 - \\frac{1}{N}\\right)^N$$
* Theo định nghĩa giới hạn của số $e$ trong giải tích toán học:
  $$\\lim_{N \\to \\infty} \\left(1 - \\frac{1}{N}\\right)^N = e^{-1} = \\frac{1}{e} \\approx \\mathbf{0.367879... \\approx 36.8\\%}$$
* $\\implies$ Khoảng **$36.8\\%$** số mẫu của tập gốc sẽ không xuất hiện trong tập Bootstrap (gọi là tập Out-of-Bag). Tỷ lệ mẫu được chọn xấp xỉ $1 - 36.8\\% = 63.2\\%$.`,
    slideRef: "Slide Chương 4, Trang 49-51"
  },

  327: {
    question: "Đánh giá Out-of-Bag (OOB Evaluation) trong Random Forest mang lại lợi ích thực tiễn to lớn nào cho kỹ sư ML?",
    options: [
      "Giúp huấn luyện mô hình nhanh hơn trên GPU",
      "Đóng vai trò như một tập kiểm định chéo (Cross-Validation) tự nhiên tích hợp sẵn miễn phí, cho phép đánh giá hiệu năng mô hình mà không cần tốn công chia tập Validation độc lập",
      "Tự động điền các giá trị thiếu trong tập dữ liệu",
      "Chuyển mô hình từ phân loại sang hồi quy"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Đối với mỗi cây trong rừng, có $\\approx 36.8\\%$ mẫu dữ liệu mà cây đó chưa từng nhìn thấy trong tập huấn luyện (các mẫu OOB của cây đó).
* Để tính điểm OOB cho toàn bộ rừng:
  - Với mỗi mẫu dữ liệu $x_i$, ta chỉ cho các cây mà $x_i$ **nằm ngoài túi OOB** tham gia dự đoán cho $x_i$.
  - Sau đó tổng hợp lại và tính độ chính xác toàn cục.
* **Lợi ích to lớn:** Đóng vai trò như một tập kiểm định chéo (Cross-Validation) hoàn toàn miễn phí, độc lập khách quan mà **không cần phải cắt xén dữ liệu để tạo Validation set riêng**!`,
    slideRef: "Slide Chương 4, Trang 51-52"
  },

  328: {
    question: "Điểm cải tiến cốt lõi của Random Forest so với Bagging thông thường (Cây Bagged) là gì?",
    options: [
      "Random Forest sử dụng ít cây hơn Bagging",
      "Tại mỗi lần phân nhánh của mỗi cây, Random Forest chỉ chọn ngẫu nhiên một tập con m đặc trưng (thường m = sqrt(d)) từ tổng số d đặc trưng để tìm điểm chia tốt nhất, giúp làm giảm độ tương quan (Decorrelate) giữa các cây",
      "Random Forest bắt buộc phải huấn luyện tuần tự từng cây một",
      "Random Forest chỉ áp dụng cho dữ liệu văn bản"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Hạn chế của Bagging thuần túy:** Nếu có 1 đặc trưng cực mạnh (ví dụ \`Thu nhập\` trong bài toán tín dụng), thì hầu như $100\\%$ các cây trong Bagging đều chọn \`Thu nhập\` làm Nút gốc $\\implies$ Các cây trông rất giống nhau (tương quan cao). Khi các cây bị tương quan, hiệu quả giảm Variance của phép lấy trung bình bị triệt tiêu!
* **Tuyệt chiêu của Random Forest:** Tại **mỗi nút của mỗi cây**, thuật toán chỉ bốc ngẫu nhiên một tập con $m$ đặc trưng (thường $m = \\sqrt{d}$) để tìm điểm chia.
* **Tác dụng:** Ép các cây phải tìm các góc nhìn khác nhau, giải trừ tương quan giữa các cây (**Decorrelating the trees**), giúp rừng đa dạng tối đa và hạ Variance xuống mức thấp nhất!`,
    slideRef: "Slide Chương 4, Trang 54-56"
  },

  329: {
    question: "Quy tắc kinh nghiệm tiêu chuẩn (Rule of Thumb) để chọn số lượng đặc trưng m tại mỗi phân nhánh trong Random Forest cho bài toán Phân loại và Hồi quy lần lượt là gì?",
    options: [
      "Phân loại: m = sqrt(d); Hồi quy: m = d / 3",
      "Phân loại: m = d / 3; Hồi quy: m = sqrt(d)",
      "Cả hai bài toán đều chọn m = d",
      "Phân loại: m = log2(d); Hồi quy: m = d / 2"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Quy tắc thực nghiệm kinh điển do Leo Breiman đề xuất:
* **Bài toán Phân loại (Classification):**
  $$m = \\lfloor\\sqrt{d}\\rfloor$$
  *(Ví dụ $d = 64$ đặc trưng thì lấy $m = \\sqrt{64} = 8$)*.
* **Bài toán Hồi quy (Regression):**
  $$m = \\left\\lfloor\\frac{d}{3}\\right\\rfloor$$
  *(Ví dụ $d = 30$ đặc trưng thì lấy $m = 30 / 3 = 10$)*.`,
    slideRef: "Slide Chương 4, Trang 56"
  },

  330: {
    question: "Hai phương pháp phổ biến để đo lường Độ quan trọng của đặc trưng (Feature Importance) trong Random Forest là gì?",
    options: [
      "Mean Decrease Impurity (MDI / Gini Importance) và Permutation Importance (Mean Decrease Accuracy - MDA)",
      "Tính đạo hàm cấp hai Hessian và chuẩn L2",
      "Đo góc quay của vector riêng PCA",
      "Tính hệ số tương quan Pearson với biến mục tiêu"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Random Forest cung cấp 2 cơ chế đo độ quan trọng của đặc trưng rất nổi tiếng:
1. **Mean Decrease Impurity (MDI / Gini Importance):** Tính tổng mức độ làm giảm Gini (hoặc Entropy/MSE) của một đặc trưng trên tất cả các nút phân chia của toàn bộ các cây trong rừng. Đặc trưng nào làm giảm độ hỗn loạn càng nhiều thì càng quan trọng.
2. **Permutation Importance (Mean Decrease Accuracy - MDA):** Xáo trộn ngẫu nhiên (shuffle) giá trị của một đặc trưng trên tập kiểm thử/OOB, rồi đo xem độ chính xác của mô hình bị sụt giảm bao nhiêu. Nếu xáo trộn biến đó mà độ chính xác tụt dốc thảm hại, chứng tỏ biến đó cực kỳ quan trọng!`,
    slideRef: "Slide Chương 4, Trang 58-60"
  },

  331: {
    question: "Trong thuật toán AdaBoost (Adaptive Boosting), các mô hình cơ sở (Base Learners) thường được chọn là cấu trúc nào?",
    options: [
      "Các mạng nơ-ron sâu 50 tầng",
      "Cây quyết định cực nông chỉ có đúng 1 nút phân nhánh (Decision Stump / Cây 1 tầng)",
      "Mô hình hồi quy đa thức bậc 10",
      "Thuật toán K-Means với K = 10"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Trong AdaBoost, mô hình cơ sở kinh điển nhất là **Decision Stump (Gốc cây / Cây 1 tầng)**:
  - Cây có độ sâu đúng bằng 1 (\`max_depth=1\`).
  - Chỉ có 1 nút kiểm tra duy nhất trên 1 đặc trưng, chia ra đúng 2 nút lá.
* Mặc dù từng Decision Stump dự đoán rất yếu (High Bias), nhưng khi kết hợp tuần tự hàng trăm cây với cơ chế cập nhật trọng số mẫu, AdaBoost tạo ra một mô hình phân loại cực mạnh với đường ranh giới phi tuyến tinh vi.`,
    slideRef: "Slide Chương 4, Trang 63-65"
  },

  332: {
    question: "Trong thuật toán AdaBoost phân loại nhị phân (y in {-1, +1}), công thức tính trọng số tín nhiệm α_m của mô hình cơ sở h_m dựa trên tỷ lệ lỗi có trọng số ε_m là gì?",
    options: [
      "α_m = (1/2) * ln((1 - ε_m) / ε_m)",
      "α_m = ε_m / (1 - ε_m)",
      "α_m = 1 - ε_m",
      "α_m = ln(ε_m)"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Công thức tính trọng số của bộ học yếu thứ $m$ trong AdaBoost:
$$\\alpha_m = \\frac{1}{2} \\ln\\left( \\frac{1 - \\epsilon_m}{\\epsilon_m} \\right)$$
* $\\epsilon_m$: Tỷ lệ sai số có trọng số của mô hình thứ $m$ trên tập huấn luyện ($0 \\le \\epsilon_m \\le 1$).
* **Ý nghĩa:**
  - Khi mô hình dự đoán chuẩn xác (ví dụ $\\epsilon_m = 0.01$) $\\implies \\frac{1 - \\epsilon_m}{\\epsilon_m} = 99 \\implies \\alpha_m \\approx 2.3$ (được trao quyền biểu quyết rất lớn).
  - Khi mô hình chỉ đạt độ chính xác $50\\%$ (đoán mò $\\epsilon_m = 0.5$) $\\implies \\alpha_m = \\frac{1}{2} \\ln(1) = 0$ (không có tiếng nói).`,
    slideRef: "Slide Chương 4, Trang 65-67"
  },

  333: {
    question: "Sau mỗi vòng lặp trong AdaBoost, trọng số phân phối của các mẫu dữ liệu được cập nhật theo nguyên tắc nào?",
    options: [
      "Tất cả các mẫu đều nhận trọng số bằng 1/N",
      "Các mẫu bị mô hình hiện tại đoán SAI sẽ được TĂNG trọng số; các mẫu đoán ĐÚNG sẽ bị GIẢM trọng số tương đối, buộc mô hình tiếp theo phải tập trung giải quyết các ca khó",
      "Các mẫu đoán sai bị xóa bỏ khỏi tập dữ liệu",
      "Chỉ tăng trọng số cho các mẫu nằm ở biên"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Công thức cập nhật trọng số mẫu trong AdaBoost:
$$w_i^{(m+1)} = w_i^{(m)} \\cdot \\exp\\left( - \\alpha_m y_i h_m(x_i) \\right)$$
* Nếu mẫu được đoán **ĐÚNG** ($y_i h_m(x_i) = +1$):
  $$w_i \\leftarrow w_i \\cdot e^{-\\alpha_m} \\implies \\text{Trọng số GIẢM đi!}$$
* Nếu mẫu bị đoán **SAI** ($y_i h_m(x_i) = -1$):
  $$w_i \\leftarrow w_i \\cdot e^{+\\alpha_m} \\implies \\text{Trọng số TĂNG LÊN MẠNH MẼ!}$$
* Sau đó, toàn bộ trọng số được chuẩn hóa để có tổng bằng 1. Cây tiếp theo sẽ tập trung nguồn lực học các mẫu khó này.`,
    slideRef: "Slide Chương 4, Trang 67-69"
  },

  334: {
    question: "Ý tưởng cốt lõi của Gradient Boosting Decision Tree (GBDT) khác với AdaBoost ở điểm nào?",
    options: [
      "GBDT sử dụng song song các cây thay vì tuần tự",
      "Thay vì điều chỉnh trọng số mẫu, GBDT huấn luyện cây mới trực tiếp trên Phần dư âm (Residuals / Pseudo-residuals là đối số của gradient hàm mất mát) của mô hình trước đó để tối ưu hóa bất kỳ hàm mất mát khả vi nào",
      "GBDT không có siêu tham số tốc độ học",
      "GBDT chỉ dùng hàm mất mát Gini"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **AdaBoost:** Điều chỉnh phân bố xác suất bằng cách thay đổi trọng số của từng điểm dữ liệu.
* **Gradient Boosting (GBDT):** Giữ nguyên trọng số mẫu, áp dụng phương pháp hạ độ dốc (Gradient Descent) trong không gian hàm:
  - Với bất kỳ hàm mất mát khả vi nào $L(y, \\hat{y})$ (như MSE, Cross-Entropy, Huber), âm gradient:
    $$r_{im} = - \\left[ \\frac{\\partial L(y_i, F(x_i))}{\\partial F(x_i)} \\right]_{F = F_{m-1}}$$
    chính là **Phần dư giả định (Pseudo-residuals)**.
  - Cây mới $h_m(x)$ được huấn luyện để **dự đoán chính xác phần dư $r_{im}$ này**, giúp mô hình tổng thể bước một bước theo hướng dốc nhất để giảm mất mát!`,
    slideRef: "Slide Chương 4, Trang 72-74"
  },

  335: {
    question: "Vai trò của siêu tham số Tốc độ học (Learning Rate η, hay Shrinkage) trong Gradient Boosting là gì?",
    options: [
      "Xác định số lượng cây tối đa",
      "Thu nhỏ đóng góp của mỗi cây mới: F_m(x) = F_{m-1}(x) + η * h_m(x), giúp làm chậm quá trình học để mô hình không bị quá khớp và tổng quát hóa tốt hơn",
      "Tăng kích thước bộ nhớ RAM",
      "Quy định số lượng đặc trưng tại nút lá"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Công thức cập nhật của Gradient Boosting:
$$F_m(x) = F_{m-1}(x) + \\mathbf{\\eta} \\cdot h_m(x)$$
* Siêu tham số $\\eta \\in (0, 1]$ được gọi là **Learning Rate** hoặc **Shrinkage factor**:
  - Nó thu nhỏ quy mô đóng góp của mỗi cây sửa sai mới.
  - Khi $\\eta$ nhỏ (ví dụ $0.05$ hoặc $0.1$), mô hình học từng bước nhỏ thận trọng $\\implies$ Giúp tránh hiện tượng quá khớp (Overfitting) và tăng cường khả năng tổng quát hóa trên tập Test.
  - Đánh đổi: Cần tăng số lượng cây (\`n_estimators\`) để mô hình đạt độ hội tụ.`,
    slideRef: "Slide Chương 4, Trang 75-76"
  },

  336: {
    question: "Thư viện LightGBM nổi tiếng với chiến lược phát triển cây nào giúp nó chạy nhanh vượt trội và tiết kiệm bộ nhớ hơn so với cách chia tầng truyền thống?",
    options: [
      "Level-wise (Theo từng độ sâu đồng đều trên toàn cây)",
      "Leaf-wise (Phát triển theo nút lá có mức giảm tổn thất lớn nhất)",
      "Random-wise (Chọn ngẫu nhiên nút lá để tách)",
      "Linear-wise (Chỉ phát triển theo một đường thẳng)"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Hai chiến lược phát triển cây kinh điển:
* **Level-wise (Theo tầng / Độ sâu - dùng trong XGBoost truyền thống):** Chia đều tất cả các nút ở cùng một tầng trước khi chuyển sang tầng tiếp theo. Cách này cân bằng cây nhưng tốn thời gian tính toán cho những nút lá không mang lại nhiều lợi ích.
* **Leaf-wise (Theo lá - dùng trong LightGBM):** Tại mỗi bước, thuật toán chỉ chọn **duy nhất một nút lá nào có mức giảm sai số (Loss reduction) lớn nhất** để tiếp tục phân nhánh, bất kể độ sâu của nó.
  - *Ưu điểm:* Giảm sai số nhanh hơn nhiều, tốc độ huấn luyện siêu tốc và tiết kiệm RAM.
  - *Lưu ý:* Khi dữ liệu nhỏ, Leaf-wise dễ bị Overfitting nên cần khống chế \`max_depth\` và \`num_leaves\`.`,
    slideRef: "Slide Chương 4, Trang 78-79"
  },

  337: {
    question: "Kỹ thuật Xếp chồng mô hình (Stacking / Stacked Generalization) hoạt động dựa trên cơ chế nào?",
    options: [
      "Lấy trung bình cộng đơn giản xác suất của các mô hình",
      "Huấn luyện nhiều mô hình cơ sở khác loại (Base-models), sau đó sử dụng dự đoán đầu ra của các mô hình này làm đặc trưng đầu vào để huấn luyện một mô hình tổng hợp cấp cao (Meta-learner / Blender)",
      "Xếp chồng các tầng nơ-ron liên tiếp nhau",
      "Chạy thuật toán PCA trước khi train Random Forest"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Kiến trúc của Stacking (Xếp chồng mô hình):
\`\`\`
  Dữ liệu gốc ──► [ Mô hình SVM ]    ──► Dự đoán 1 ─┐
              ──► [ Random Forest ] ──► Dự đoán 2 ─┼──► [ META-LEARNER ] ──► KẾT QUẢ CUỐI
              ──► [ XGBoost ]       ──► Dự đoán 3 ─┘    (Hồi quy/Logistic)
\`\`\`
* **Tầng 1 (Base-models):** Huấn luyện nhiều mô hình khác biệt nhau về bản chất thuật toán (ví dụ SVM, Random Forest, XGBoost, KNN).
* **Tầng 2 (Meta-learner / Blender):** Dùng các giá trị dự đoán của Tầng 1 làm các đặc trưng đầu vào ($x_{\\text{meta}} = [\\hat{y}_1, \\hat{y}_2, \\hat{y}_3]$) để huấn luyện một mô hình cấp cao (thường là Logistic Regression hoặc Ridge) học cách gộp tối ưu nhất.`,
    slideRef: "Slide Chương 4, Trang 81-83"
  },

  338: {
    question: "Để tránh Rò rỉ dữ liệu (Data Leakage) khi tạo tập đặc trưng huấn luyện cho Meta-learner trong Stacking, kỹ thuật bắt buộc phải áp dụng là gì?",
    options: [
      "Chuẩn hóa dữ liệu Min-Max",
      "Dự đoán ngoài mẫu thông qua K-Fold Cross-Validation (Out-of-Fold predictions) trên tập huấn luyện",
      "Tăng số lượng cây trong rừng lên 1000 cây",
      "Bỏ hoàn toàn nhãn y khỏi tập train"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Nguy cơ Rò rỉ dữ liệu (Data Leakage) trong Stacking:**
  - Nếu bạn dùng các Base-model đã được huấn luyện trên toàn bộ tập Train để dự đoán lại chính tập Train đó, các dự đoán này sẽ "quá lạc quan" (bị overfitted).
  - Meta-learner khi học trên các dự đoán overfitted này sẽ bị sai lệch nghiêm trọng khi áp dụng vào tập Test thực tế!
* **Giải pháp bắt buộc: Out-of-Fold (OOF) Predictions:**
  - Chia tập Train thành $K$ phần (ví dụ $K=5$).
  - Huấn luyện Base-model trên 4 phần, rồi dự đoán cho phần thứ 5 còn lại.
  - Lặp lại cho cả 5 phần để thu được vector dự đoán ngoài mẫu (Out-of-Fold).
  - Nhờ vậy, Meta-learner chỉ học trên những dự đoán khách quan chưa từng thấy của các mô hình cơ sở!`,
    slideRef: "Slide Chương 4, Trang 83-84"
  },

  339: {
    question: "So sánh giữa Bagging và Boosting, khẳng định nào sau đây là HOÀN TOÀN CHÍNH XÁC?",
    options: [
      "Bagging giúp giảm Độ chệch (Bias); Boosting giúp giảm Phương sai (Variance)",
      "Bagging huấn luyện các mô hình song song độc lập và chủ yếu giúp giảm Phương sai (Variance); Boosting huấn luyện các mô hình tuần tự nối tiếp và chủ yếu giúp giảm Độ chệch (Bias)",
      "Bagging nhạy cảm với nhiễu hơn Boosting",
      "Cả Bagging và Boosting đều yêu cầu các mô hình cơ sở phải là mô hình tuyến tính"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Bảng tổng kết sống còn:
Bảng đối chiếu cốt lõi giữa Bagging và Boosting:
* **BAGGING (Random Forest):**
  - Cơ chế: **Song song (Parallel)**, các cây độc lập.
  - Cây cơ sở: Cây sâu, phức tạp (High Variance, Low Bias).
  - Mục tiêu cốt lõi: **GIẢM VARIANCE** (chữa bệnh Overfitting).
  - Nhiễu: Rất ổn định, ít bị ảnh hưởng bởi nhiễu.
* **BOOSTING (AdaBoost, Gradient Boosting):**
  - Cơ chế: **Tuần tự (Sequential)**, cây sau sửa sai cho cây trước.
  - Cây cơ sở: Cây rất nông (Decision Stumps - High Bias, Low Variance).
  - Mục tiêu cốt lõi: **GIẢM BIAS** (tăng độ chính xác từ mô hình yếu).
  - Nhiễu: Rất nhạy cảm với nhiễu.`,
    slideRef: "Slide Chương 4, Trang 85-86"
  },

  340: {
    question: "Tại sao Boosting lại nhạy cảm với các mẫu ngoại lai (Outliers) và dữ liệu có nhiễu cao hơn nhiều so với Bagging (Random Forest)?",
    options: [
      "Vì Boosting không có hàm mất mát",
      "Vì cơ chế Boosting liên tục tăng trọng số mẫu hoặc cố gắng dự đoán phần dư của các mẫu bị đoán sai; các điểm ngoại lai/nhiễu sẽ liên tục bị đoán sai và nhận trọng số cực lớn, cuốn toàn bộ các cây sau chạy theo khớp vào nhiễu",
      "Vì Random Forest sử dụng ma trận nghịch đảo giả",
      "Vì AdaBoost chỉ chạy được trên dữ liệu 1 chiều"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Điểm ngoại lai (Outlier) hoặc nhãn bị gán sai (Nhiễu) là những điểm dữ liệu cực kỳ dị biệt và gần như không thể học đúng bằng các quy luật tổng quát.
* Trong **AdaBoost**: Điểm nhiễu này sẽ liên tục bị đoán sai qua từng vòng $\\implies$ Thuật toán liên tục nhân trọng số của nó lên gấp nhiều lần $\\implies$ Sau vài vòng, điểm nhiễu chiếm tới $50\\%$ tổng trọng số của cả tập dữ liệu! Cây tiếp theo bị ép phải bẻ cong toàn bộ ranh giới để khớp đúng điểm nhiễu này.
* Trong **Gradient Boosting**: Điểm nhiễu tạo ra phần dư sai số (Residual) khổng lồ $\\implies$ Gradient tại đó cực lớn, kéo lệch hướng tối ưu của toàn bộ chuỗi mô hình.
* 👉 Do đó, Boosting cực kỳ nhạy cảm với Outliers, trong khi Random Forest (lấy trung bình độc lập) thì rất trơ và bền bỉ trước nhiễu.`,
    slideRef: "Slide Chương 4, Trang 86"
  },

  341: {
    question: "Cho một tập dữ liệu có 3 lớp (A, B, C) với phân bố xác suất tại một nút là: p(A) = 0.5, p(B) = 0.3, p(C) = 0.2. Giá trị Gini Impurity tại nút này là bao nhiêu?",
    options: [
      "0.38",
      "0.62",
      "0.48",
      "0.50"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Tính toán chi tiết:
Công thức tính Gini Impurity tổng quát cho $C$ lớp:
$$Gini(S) = 1 - \\sum_{k=1}^C p_k^2$$
Thay các xác suất vào:
* $p(A) = 0.5 \\implies p(A)^2 = 0.25$
* $p(B) = 0.3 \\implies p(B)^2 = 0.09$
* $p(C) = 0.2 \\implies p(C)^2 = 0.04$

Tính tổng các bình phương:
$$\\sum p_k^2 = 0.25 + 0.09 + 0.04 = 0.38$$

Tính giá trị Gini:
$$Gini(S) = 1 - 0.38 = \\mathbf{0.62}$$

⚠️ **Lưu ý thi trắc nghiệm:** Rất nhiều bạn tính ra $0.38$ rồi vội vàng khoanh luôn đáp án $0.38$. Hãy nhớ công thức Gini bắt đầu bằng **$1 -$ (Tổng bình phương)**! Do đó đáp án đúng phải là $1 - 0.38 = \\mathbf{0.62}$.`,
    slideRef: "Slide Chương 4, Trang 27-29"
  },

  342: {
    question: "Một thuộc tính liên tục X có 4 giá trị sắp xếp tăng dần trong tập dữ liệu là: [10, 20, 30, 40]. Trong thuật toán CART, có bao nhiêu ngưỡng cắt (thresholds) ứng viên sẽ được xem xét để tìm điểm phân nhánh tối ưu?",
    options: [
      "2 ngưỡng",
      "3 ngưỡng (lần lượt là: 15, 25, 35)",
      "4 ngưỡng",
      "Vô số ngưỡng vì là biến liên tục"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Trong thuật toán CART:
* Nếu một đặc trưng liên tục có $K$ giá trị phân biệt được sắp xếp tăng dần: $x_{(1)} < x_{(2)} < \\dots < x_{(K)}$, thì số lượng ngưỡng cắt phân hoạch nhị phân ứng viên luôn luôn là **$K - 1$ ngưỡng**, tương ứng với các trung điểm giữa 2 giá trị liên tiếp:
  $$t_i = \\frac{x_{(i)} + x_{(i+1)}}{2}$$
* Cụ thể với 4 giá trị $[10, 20, 30, 40]$:
  - Ngưỡng 1: $t_1 = \\frac{10 + 20}{2} = 15$
  - Ngưỡng 2: $t_2 = \\frac{20 + 30}{2} = 25$
  - Ngưỡng 3: $t_3 = \\frac{30 + 40}{2} = 35$
👉 Tổng cộng có đúng **3 ngưỡng cắt ứng viên**.`,
    slideRef: "Slide Chương 4, Trang 30-31"
  },

  343: {
    question: "Khi tăng số lượng cây (n_estimators) trong mô hình Random Forest từ 100 cây lên 1000 cây, hiện tượng gì sẽ xảy ra?",
    options: [
      "Mô hình chắc chắn sẽ bị Overfitting nặng do số cây quá nhiều",
      "Mô hình không bị Overfitting; sai số kiểm thử sẽ hội tụ về một giới hạn tiệm cận ổn định, nhưng chi phí tính toán và thời gian huấn luyện sẽ tăng lên tương ứng",
      "Độ chệch (Bias) của mô hình giảm về 0",
      "Tất cả các cây sẽ biến thành cây 1 tầng"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Đây là một tính chất cực kỳ đặc biệt của **Random Forest**:
  - Theo Định luật số lớn (Law of Large Numbers), khi số lượng cây $B \\to \\infty$, sai số khái quát hóa của Random Forest sẽ **hội tụ về một hằng số giới hạn tiệm cận**.
  - **Random Forest KHÔNG BỊ OVERFITTING khi tăng số lượng cây!** Thêm cây chỉ làm cho việc lấy trung bình mượt mà và ổn định hơn.
* **Hạn chế duy nhất:** Khi tăng từ 100 lên 1000 cây, thời gian huấn luyện và dung lượng bộ nhớ tăng gấp 10 lần, trong khi độ chính xác chỉ tăng rất nhẹ hoặc đi ngang. Do đó, thường chọn $100 - 300$ cây là điểm cân bằng thực tiễn.`,
    slideRef: "Slide Chương 4, Trang 57"
  },

  344: {
    question: "Ngược lại, nếu ta tăng quá mức số lượng vòng lặp (số cây n_estimators) trong Gradient Boosting mà không có cơ chế dừng sớm (Early Stopping), nguy cơ lớn nhất là gì?",
    options: [
      "Mô hình bị Underfitting",
      "Mô hình có nguy cơ cao bị Overfitting vì các cây sau sẽ tiếp tục cố gắng khớp vào cả phần dư ngẫu nhiên và nhiễu trong dữ liệu",
      "Mô hình tự động xóa bỏ các đặc trưng quan trọng",
      "Hàm mất mát bị phân kỳ vô hạn"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Trái ngược hoàn toàn với Random Forest:
* **Gradient Boosting CỰC KỲ DỄ BỊ OVERFITTING KHI TĂNG QUÁ NHIỀU CÂY (\`n_estimators\`)!**
* **Lý do:**
  - Ở những vòng đầu, các cây học những quy luật lớn của dữ liệu.
  - Càng về các vòng sau, phần dư còn lại chủ yếu là **nhiễu ngẫu nhiên (Random noise)**.
  - Nếu cứ tiếp tục thêm cây mà không kiểm soát, các cây sau sẽ khớp hoàn hảo vào từng điểm nhiễu $\\implies$ Sai số trên tập Test bắt đầu tăng vọt trở lại!
* 👉 **Giải pháp sống còn:** Luôn phải sử dụng cơ chế **Dừng sớm (Early Stopping)**: Nếu sau một số vòng liên tiếp (ví dụ 10-20 vòng) mà sai số trên tập Validation không giảm nữa thì lập tức dừng huấn luyện.`,
    slideRef: "Slide Chương 4, Trang 76-77"
  },

  345: {
    question: "Đặc điểm nào của thuật toán Cây quyết định (Decision Tree) khiến nó được xếp vào nhóm 'Mô hình hộp trắng' (White-box Models)?",
    options: [
      "Nó chỉ xử lý được các điểm ảnh màu trắng",
      "Cấu trúc cây có tính trực quan cao, có thể chuyển đổi trực tiếp thành tập hợp các quy tắc IF-THEN rõ ràng, giúp con người dễ dàng giải thích và kiểm chứng lý do ra quyết định",
      "Nó không có hàm mất mát",
      "Mọi tham số của cây đều bằng 0"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Trong lĩnh vực Trí tuệ nhân tạo có thể giải thích (Explainable AI - XAI):
* **Mô hình Hộp đen (Black-box Models):** Như Mạng nơ-ron sâu (Deep Neural Networks), Random Forest, Gradient Boosting. Dù dự đoán rất chính xác nhưng con người không thể hiểu nổi tại sao mô hình lại đưa ra quyết định đó (hàng triệu phép tính ma trận phức tạp).
* **Mô hình Hộp trắng (White-box Models):** Điển hình là **Cây quyết định (Decision Tree)**:
  - Cấu trúc cây hoàn toàn minh bạch.
  - Mọi đường đi từ gốc đến lá đều có thể viết lại thành câu văn logic đời thường: \`NẾU Tuổi > 30 VÀ Thu nhập > 20 triệu THÌ Duyệt vay vốn\`.
  - Giúp chuyên gia, bác sĩ, thanh tra ngân hàng dễ dàng kiểm chứng và tin tưởng phán quyết của mô hình.`,
    slideRef: "Slide Chương 4, Trang 41-42"
  }
};
