module.exports = {
  81: {
    question: "Tại sao bài toán tối ưu Logistic Regression không có nghiệm đóng giải tích giống như Hồi quy tuyến tính OLS?",
    options: [
      "Vì hàm Sigmoid là hàm phi tuyến phức tạp khiến đạo hàm của hàm mất mát BCE phi tuyến theo trọng số $w$, không thể giải phương trình $\\nabla J(w) = 0$ bằng đại số tuyến tính",
      "Vì số lượng mẫu luôn lớn hơn số lượng đặc trưng",
      "Vì ma trận $X^TX$ không bao giờ khả nghịch trong bài toán phân loại",
      "Vì hàm mất mát BCE không có đạo hàm"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Trong Hồi quy tuyến tính OLS, đạo hàm $\\nabla_w J(w) = -2X^Ty + 2X^TXw = 0$ là một **phương trình bậc nhất tuyến tính** theo $w$, giải bằng đại số ma trận cực kỳ đơn giản.

Nhưng trong Hồi quy Logistic:
$$\\nabla_w J(w) = \\sum_{i=1}^n (\\sigma(w^Tx_i) - y_i) x_i = 0$$
* Sự hiện diện của hàm mũ trong $\\sigma(z) = \\frac{1}{1 + e^{-w^Tx}}$ làm cho hệ phương trình trở thành **phi tuyến tính siêu việt (Transcendental Non-linear System)**.
* Không thể dùng phép nhân ma trận để "rút" $w$ ra một vế độc lập được.
* 👉 Tuy nhiên, hàm mất mát BCE là một **hàm lồi (Convex Function)** có duy nhất 1 điểm cực tiểu toàn cục. Ta giải bằng các phương pháp tối ưu xấp xỉ lặp như **Gradient Descent (Hạ độ dốc)** hoặc **Newton-Raphson (IRLS)**.`
  },

  82: {
    question: "Nếu ta tăng ngưỡng quyết định (Decision Threshold) trong Logistic Regression từ $0.5$ lên $0.8$, điều gì sẽ xảy ra với Precision và Recall?",
    options: [
      "Precision tăng lên, Recall giảm xuống",
      "Precision giảm xuống, Recall tăng lên",
      "Cả Precision và Recall đều tăng",
      "Cả Precision và Recall đều giảm"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Ngưỡng $0.5$:** Xác suất chỉ cần $\\ge 0.5$ là đã phán đoán lớp Dương tính ($y=1$).
* **Tăng ngưỡng lên $0.8$:** Mô hình trở nên **cực kỳ thận trọng**. Chỉ những ca có xác suất chắc nịch $\\ge 80\\%$ mô hình mới dám báo Dương tính:
  1. Số ca bị báo nhầm ($FP$) giảm mạnh $\\implies$ **Precision ($\\frac{TP}{TP + FP}$) tăng vọt** (độ tin cậy của lời báo cao hơn).
  2. Nhưng vì quá khắt khe, mô hình sẽ bỏ sót nhiều ca bệnh nhẹ có xác suất $0.6 - 0.7$ ($FN$ tăng) $\\implies$ **Recall ($\\frac{TP}{TP + FN}$) bị sụt giảm**.
* 👉 Đây chính là bản chất của **Đánh đổi Precision-Recall (Precision-Recall Trade-off)**.`
  },

  83: {
    question: "Hàm Softmax được sử dụng trong bài toán nào sau đây?",
    options: [
      "Hồi quy đa thức đơn biến",
      "Phân loại đa lớp loại trừ lẫn nhau (Multi-class Classification, $K \\ge 3$)",
      "Giảm chiều dữ liệu không giám sát",
      "Tìm kiếm ngoại lai trong cụm"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Khi bài toán có $K \\ge 3$ lớp nhãn loại trừ lẫn nhau (ví dụ: Chó, Mèo, Chim):
Hàm Softmax là phiên bản mở rộng nhiều chiều của hàm Sigmoid:
$$P(y = k | x) = \\frac{e^{z_k}}{\\sum_{j=1}^K e^{z_j}} = \\frac{e^{w_k^Tx}}{\\sum_{j=1}^K e^{w_j^Tx}}$$
* **Đặc tính chuẩn hóa:**
  1. $e^{z_k} > 0$ biến mọi điểm số $z_k$ thành số dương.
  2. Chia cho tổng mẫu số $\\sum e^{z_j}$ giúp **tổng xác suất của tất cả $K$ lớp luôn bằng đúng $1.0$ ($100\\%$)**.
  3. Giá trị của mỗi lớp luôn nằm chặt chẽ trong khoảng $(0, 1)$.`
  },

  84: {
    question: "Độ đo sai số MAE (Mean Absolute Error) có đặc điểm nổi bật nào so với MSE và RMSE?",
    options: [
      "Kháng nhiễu tốt hơn với các điểm dữ liệu ngoại lai (Robust to Outliers) vì không bình phương sai số",
      "Phạt cực kỳ nặng các sai số lớn",
      "Luôn có giá trị lớn hơn MSE trên mọi tập dữ liệu",
      "Có đạo hàm trơn liên tục tại điểm 0"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
$$MAE = \\frac{1}{n} \\sum_{i=1}^n |y_i - \\hat{y}_i|$$
* **So sánh độ nhạy với ngoại lai:**
  - Nếu sai số lệch 10 đơn vị: MAE chỉ cộng thêm $10$. Nhưng MSE cộng thêm $10^2 = 100$ (gấp 100 lần)!
  - Do đó, nếu dữ liệu có nhiều điểm ngoại lai (nhiễu cực đoan), MSE và RMSE sẽ bị các điểm này kéo lệch đi rất nhiều.
  - Ngược lại, MAE đối xử công bằng với mọi sai số theo tỷ lệ tuyến tính, do đó **rất bền vững (Robust) trước dữ liệu ngoại lai**.`
  },

  85: {
    question: "Độ đo RMSE (Root Mean Squared Error) được định nghĩa là gì và có ưu điểm gì so với MSE?",
    options: [
      "RMSE là căn bậc hai của MSE: $\\sqrt{\\frac{1}{n}\\sum (y_i - \\hat{y}_i)^2}$, có cùng đơn vị đo với biến mục tiêu $y$",
      "RMSE là nghịch đảo của MSE",
      "RMSE là trung bình của trị tuyệt đối",
      "RMSE luôn không có đơn vị tính"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
$$RMSE = \\sqrt{MSE} = \\sqrt{\\frac{1}{n} \\sum_{i=1}^n (y_i - \\hat{y}_i)^2}$$
* **Ưu điểm lớn nhất của RMSE so với MSE:**
  - Giả sử biến mục tiêu $y$ đo giá nhà bằng **triệu đồng**: Đơn vị của MSE sẽ bị bình phương thành **(triệu đồng)$^2$** (rất vô nghĩa, không thể giải thích cho khách hàng hay sếp).
  - Bằng cách lấy căn bậc hai, RMSE đưa đơn vị sai số quay trở về đúng **triệu đồng** (cùng đơn vị đo lường ban đầu với $y$), giúp con người dễ dàng hình dung mô hình đang đoán lệch trung bình bao nhiêu tiền.`
  },

  86: {
    question: "Hệ số xác định $R^2$ (R-squared) trong bài toán hồi quy biểu thị điều gì?",
    options: [
      "Tỷ lệ phần trăm phương sai của biến mục tiêu $y$ được giải thích bởi các biến đặc trưng trong mô hình",
      "Sai số tuyệt đối trung bình của mô hình",
      "Tỷ lệ các điểm dữ liệu nằm chính xác trên đường hồi quy",
      "Xác suất để mô hình đoán đúng 100%"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
$$R^2 = 1 - \\frac{SS_{\\text{res}}}{SS_{\\text{tot}}} = 1 - \\frac{\\sum (y_i - \\hat{y}_i)^2}{\\sum (y_i - \\bar{y}_i)^2}$$
* **So tài với "Mô hình người lười" $\\bar{y}$:**
  - $SS_{\\text{tot}}$ là sai số khi bạn dùng một mô hình ngớ ngẩn: Luôn luôn đoán giá nhà bằng giá trị trung bình $\\bar{y}$.
  - $SS_{\\text{res}}$ là sai số thực tế của mô hình thông minh của bạn.
* **Ý nghĩa:** $R^2 = 0.85$ nghĩa là mô hình của bạn đã **giải thích được $85\\%$ sự biến thiên** của giá nhà, chỉ còn $15\\%$ là do nhiễu hoặc các yếu tố chưa thu thập.`
  },

  87: {
    question: "Tại sao người ta sử dụng Adjusted $R^2$ ($R^2$ hiệu chỉnh) thay vì $R^2$ khi đánh giá mô hình hồi quy đa biến?",
    options: [
      "Vì $R^2$ thông thường luôn có xu hướng tăng hoặc giữ nguyên khi thêm bất kỳ biến nào vào mô hình (kể cả biến rác vô nghĩa), trong khi Adjusted $R^2$ có cơ chế phạt số lượng biến",
      "Vì Adjusted $R^2$ luôn có giá trị lớn hơn $R^2$",
      "Vì $R^2$ không tính toán được khi số mẫu $n > 1000$",
      "Vì Adjusted $R^2$ chuyển đổi bài toán hồi quy thành phân loại"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
$$\\text{Adjusted } R^2 = 1 - (1 - R^2) \\frac{n - 1}{n - p - 1}$$
(trong đó $n$ là số mẫu, $p$ là số biến đặc trưng).

#### ⚠️ Cạm bẫy của $R^2$ thông thường:
* Cứ nhét thêm một biến mới vào mô hình (cho dù là biến tung đồng xu vô dụng), $R^2$ **chắc chắn sẽ tăng lên hoặc ít nhất giữ nguyên**, không bao giờ giảm!
* Điều này dễ dụ người xây dựng mô hình nhồi nhét hàng trăm biến rác gây Overfitting.
* **Cứu cánh Adjusted $R^2$:** Mẫu số $(n - p - 1)$ sẽ giảm đi khi $p$ tăng $\\implies$ Nếu biến mới đưa vào không đóng góp đủ nhiều để bù đắp cho "hình phạt tăng $p$", thì **Adjusted $R^2$ sẽ lập tức bị kéo giảm xuống**!`
  },

  88: {
    question: "Trong Ma trận nhầm lẫn (Confusion Matrix), định nghĩa của False Positive (FP - Dương tính giả / Sai lầm loại I) là gì?",
    options: [
      "Thực tế là Âm tính ($y = 0$), nhưng mô hình dự đoán nhầm thành Dương tính ($\\hat{y} = 1$)",
      "Thực tế là Dương tính ($y = 1$), nhưng mô hình dự đoán nhầm thành Âm tính ($\\hat{y} = 0$)",
      "Thực tế là Dương tính và mô hình đoán đúng Dương tính",
      "Thực tế là Âm tính và mô hình đoán đúng Âm tính"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Bảng ma trận nhầm lẫn $2 \\times 2$:
* Chữ thứ nhất (True/False): Mô hình đoán **ĐÚNG** hay **SAI**?
* Chữ thứ hai (Positive/Negative): Mô hình đã **DỰ ĐOÁN LÀ GÌ**?

* 👉 **False Positive (FP - Sai lầm loại I):**
  - Mô hình phán: *"Positive!"* (Báo động dương tính).
  - Nhưng kết quả kiểm tra lại là: **False** (Đoán sai rồi!).
  - $\\implies$ **Thực tế mẫu là ÂM TÍNH ($y=0$), nhưng mô hình lại báo nhầm thành DƯƠNG TÍNH ($\\hat{y}=1$)**!
  - *Ví dụ:* Thư bình thường quan trọng bị lọc nhầm vào hòm Spam; hoặc người khỏe mạnh bị máy báo nhầm là ung thư.`
  },

  89: {
    question: "Tại sao độ đo Accuracy (Độ chính xác) có thể gây ngộ nhận nguy hiểm trên tập dữ liệu mất cân bằng nghiêm trọng (Imbalanced Data)?",
    options: [
      "Vì nó không thể tính toán được với ma trận nhầm lẫn",
      "Vì một mô hình tầm thường chỉ cần luôn luôn dự đoán lớp đa số là đã đạt điểm Accuracy rất cao, dù bỏ sót toàn bộ lớp thiểu số quan trọng",
      "Vì Accuracy luôn có giá trị âm",
      "Vì nó chỉ áp dụng được cho bài toán hồi quy"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
$$Accuracy = \\frac{TP + TN}{TP + TN + FP + FN}$$

#### ⚠️ Cú lừa thế kỷ của Accuracy:
Giả sử có $10.000$ người đi tầm soát ung thư, trong đó chỉ có $10$ người thực sự bị bệnh ($0.1\\%$), còn $9.990$ người khỏe mạnh ($99.9\\%$).
* Một mô hình "ngớ ngẩn" không học gì cả, luôn phán một câu duy nhất: *"Tất cả mọi người đều KHỎE MẠNH ($y=0$)"*.
* Kết quả chấm điểm:
  $$Accuracy = \\frac{9.990}{10.000} = 99.9\\%!$$
* 👉 Điểm số $99.9\\%$ nhìn qua tưởng siêu việt, nhưng trên thực tế mô hình này **hoàn toàn vô dụng và giết người**, vì nó bỏ sót $100\\%$ ($10$ bệnh nhân ung thư) về nhà chờ chết!
* **Quy tắc thi cử:** Dữ liệu mất cân bằng $\\implies$ Tuyệt đối không tin Accuracy, phải dùng **Precision, Recall, F1-Score, PR-AUC**!`
  },

  90: {
    question: "Công thức tính Precision (Độ chuẩn xác / Độ chính xác của lời báo) là gì?",
    options: [
      "$\\text{Precision} = \\frac{TP}{TP + FP}$",
      "$\\text{Precision} = \\frac{TP}{TP + FN}$",
      "$\\text{Precision} = \\frac{TN}{TN + FP}$",
      "$\\text{Precision} = \\frac{TP + TN}{P + N}$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
$$\\text{Precision} = \\frac{TP}{TP + FP}$$
* **Mẫu số $(TP + FP)$:** Tổng số ca mà mô hình **tuyên bố là Dương tính**.
* **Tử số $TP$:** Số ca mô hình **báo đúng**.
* **Ý nghĩa thực tế:** *"Trong tất cả các trường hợp mô hình BÁO DƯƠNG TÍNH, có bao nhiêu phần trăm là ĐÚNG THỰC SỰ?"*
* Precision đo lường **độ tin cậy của lời báo động**. Càng ít báo động nhầm ($FP \\to 0$), Precision càng tiến gần tới $1.0$ ($100\\%$).`
  },

  91: {
    question: "Công thức tính Recall (Độ nhạy - Sensitivity / Tỷ lệ bao phủ) là gì?",
    options: [
      "$\\text{Recall} = \\frac{TP}{TP + FN}$",
      "$\\text{Recall} = \\frac{TP}{TP + FP}$",
      "$\\text{Recall} = \\frac{TN}{TN + FP}$",
      "$\\text{Recall} = \\frac{FN}{TP + FN}$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
$$\\text{Recall} = \\frac{TP}{TP + FN}$$
* **Mẫu số $(TP + FN)$:** Tổng số ca **THỰC TẾ LÀ DƯƠNG TÍNH NGOÀI ĐỜI** (gồm cả ca bắt được $TP$ và ca bị bỏ sót $FN$).
* **Tử số $TP$:** Số ca mô hình **tìm ra được**.
* **Ý nghĩa thực tế:** *"Trong tất cả các bệnh nhân thực sự bị bệnh, mô hình đã QUÉT SẠCH VÀ BẮT ĐƯỢC bao nhiêu phần trăm?"*
* Càng ít bỏ sót ($FN \\to 0$), Recall càng cao.`
  },

  92: {
    question: "Trong bài toán phát hiện bệnh ung thư hiểm nghèo hoặc phát hiện bom mìn, độ đo nào BẮT BUỘC phải được ưu tiên tối đa?",
    options: [
      "Recall (Độ nhạy), vì chi phí của việc bỏ sót (False Negative) là thảm họa chết người",
      "Precision, vì không được phép báo nhầm",
      "Specificity, để bảo vệ người khỏe",
      "Accuracy, vì cần độ chính xác tổng quát"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Hậu quả của việc Bỏ sót (False Negative - $FN$):** Bệnh nhân ung thư giai đoạn đầu bị báo là khỏe mạnh $\\implies$ không chữa trị và tử vong; hoặc quả bom mìn bị bỏ sót $\\implies$ phát nổ gây thương vong.
* **Hậu quả của Báo nhầm (False Positive - $FP$):** Người khỏe bị nghi ngờ nhầm $\\implies$ đi làm xét nghiệm máu/sinh thiết lần 2 để kiểm tra lại.
* 👉 **Quy tắc:** Thà bắt nhầm một người khỏe đi kiểm tra lại ($FP$), còn hơn là bỏ sót một bệnh nhân ung thư về nhà chờ chết ($FN$)!
* Vì cần triệt tiêu $FN$ đến mức tối thiểu, ta **bắt buộc phải tối đa hóa Recall**!`
  },

  93: {
    question: "Trong bài toán xây dựng bộ lọc thư rác đưa vào Inbox (Spam Filter), độ đo nào cần được ưu tiên hơn?",
    options: [
      "Precision, vì tránh việc đưa nhầm thư quan trọng của người dùng vào mục Spam (False Positive)",
      "Recall, vì phải bắt bằng hết mọi bức thư rác",
      "Mean Squared Error",
      "Inertia"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Quy ước:** Lớp Dương tính = Thư rác (Spam); Lớp Âm tính = Thư quan trọng bình thường (Ham).
* **Nếu bị False Positive ($FP$):** Thư báo trúng tuyển đại học, vé máy bay hay hợp đồng triệu đô của sếp bị quăng nhầm vào hòm rác và người dùng không đọc được $\\implies$ **Hậu quả cực kỳ tai hại!**
* **Nếu bị False Negative ($FN$):** Một vài bức thư quảng cáo rác lọt vào hòm thư chính $\\implies$ Người dùng chỉ mất 1 giây bấm nút xóa (chấp nhận được).
* 👉 Thà để lọt một vài bức thư rác ($FN$), còn hơn vứt nhầm thư quan trọng ($FP$). Do đó, **bắt buộc ưu tiên tối đa Precision**!`
  },

  94: {
    question: "Độ đo $F_1$-Score là sự kết hợp của Precision và Recall theo dạng trung bình nào?",
    options: [
      "Trung bình điều hòa (Harmonic Mean): $F_1 = 2 \\cdot \\frac{P \\cdot R}{P + R}$",
      "Trung bình cộng (Arithmetic Mean): $F_1 = \\frac{P + R}{2}$",
      "Trung bình nhân (Geometric Mean): $F_1 = \\sqrt{P \\cdot R}$",
      "Trung bình trọng số bậc hai"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
$$F_1 = 2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}} = \\frac{2TP}{2TP + FP + FN}$$

#### 🤔 Tại sao không dùng Trung bình cộng $\\frac{P + R}{2}$?
Giả sử một mô hình cực đoan: $\\text{Precision} = 100\\%$, nhưng $\\text{Recall} = 0\\%$ (chỉ dám đoán đúng 1 ca chắc chắn, bỏ sót toàn bộ):
* Nếu dùng trung bình cộng: $\\frac{100\\% + 0\\%}{2} = 50\\%$ (cho ra một con số "nhìn vẫn ổn", che giấu đi sự thật là mô hình đã hỏng hoàn toàn 1 bên!).
* Nếu dùng trung bình điều hòa:
  $$F_1 = 2 \\cdot \\frac{100 \\times 0}{100 + 0} = 0\\%!$$
* 👉 **Triết lý:** Trung bình điều hòa bị kéo sập về con số nhỏ hơn. Nó trừng phạt cực nặng sự mất cân đối. **Chỉ khi CẢ HAI chỉ số Precision và Recall đều cao thì $F_1$ mới có thể cao được!**`
  },

  95: {
    question: "Cho kết quả phân loại: $TP = 80$, $FP = 20$, $FN = 20$, $TN = 80$. Độ đo Precision và Recall lần lượt là bao nhiêu?",
    options: [
      "$\\text{Precision} = 0.8$, $\\text{Recall} = 0.8$",
      "$\\text{Precision} = 0.5$, $\\text{Recall} = 0.5$",
      "$\\text{Precision} = 0.8$, $\\text{Recall} = 0.2$",
      "$\\text{Precision} = 0.2$, $\\text{Recall} = 0.8$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Áp dụng trực tiếp 2 công thức:
1. **Precision:**
   $$\\text{Precision} = \\frac{TP}{TP + FP} = \\frac{80}{80 + 20} = \\frac{80}{100} = 0.8 \\quad (80\\%)$$
2. **Recall:**
   $$\\text{Recall} = \\frac{TP}{TP + FN} = \\frac{80}{80 + 20} = \\frac{80}{100} = 0.8 \\quad (80\\%)$$
3. **$F_1$-Score tương ứng:**
   $$F_1 = 2 \\cdot \\frac{0.8 \\times 0.8}{0.8 + 0.8} = 0.8$$`
  },

  96: {
    question: "Trong bài toán phân loại đa lớp, sự khác biệt giữa Macro-average và Micro-average là gì?",
    options: [
      "Macro-average tính độ đo riêng cho từng lớp rồi lấy trung bình cộng (đối xử bình đẳng mọi lớp), trong khi Micro-average gộp chung toàn bộ mẫu lại tính (bị chi phối bởi lớp đa số)",
      "Micro-average chỉ tính trên tập Test nhỏ, còn Macro-average tính trên toàn bộ dữ liệu",
      "Macro-average luôn lớn hơn Micro-average",
      "Hai cách tính luôn cho ra kết quả hoàn toàn bằng nhau"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Giả sử nhận diện 3 loài vật: **Chó ($1000$ mẫu), Mèo ($900$ mẫu), Gà rừng ($10$ mẫu - lớp cực hiếm)**.
* **Macro-Average ("Công bằng xã hội"):**
  $$P_{\\text{Macro}} = \\frac{P_{\\text{Chó}} + P_{\\text{Mèo}} + P_{\\text{Gà}}}{3}$$
  Mỗi lớp có trọng số ngang nhau ($1/3$), không phân biệt giàu nghèo dữ liệu. Dùng khi bạn rất quan tâm đến **hiệu năng trên lớp thiểu số**.
* **Micro-Average ("Đa số thắng thiểu số"):**
  Gộp chung tổng $TP, FP$ của cả 3 lớp lại tính 1 lần. Vì Chó và Mèo quá đông ($1900/1910$ mẫu), chúng sẽ thao túng toàn bộ điểm số. Dù mô hình có đoán sai toàn bộ $10$ con gà, Micro-Average vẫn có thể đạt $> 95\\%$!`
  },

  97: {
    question: "Kỹ thuật Stratified Split (Chia phân tầng) mang lại lợi ích gì khi chia tập dữ liệu Train/Test?",
    options: [
      "Bảo toàn tỷ lệ phần trăm giữa các lớp nhãn ở cả tập Train và tập Test giống hệt như tập dữ liệu gốc ban đầu",
      "Tăng số lượng mẫu lên gấp đôi",
      "Loại bỏ hoàn toàn hiện tượng ngoại lai",
      "Tự động chuẩn hóa các đặc trưng về khoảng [0, 1]"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Nguy cơ của bốc ngẫu nhiên (Random Split):** Với dữ liệu $95\\%$ bình thường và $5\\%$ lừa đảo, việc bốc ngẫu nhiên có thể khiến tập Test xui xẻo không dính một ca lừa đảo nào $\\to$ tập Test trở nên vô dụng.
* **Stratified Split (Chia phân tầng):** Bắt buộc phải chia dữ liệu sao cho **tỷ lệ các lớp được giữ nguyên vẹn**:
  - Tập gốc: $95\\%$ bình thường, $5\\%$ lừa đảo.
  - Tập Train: Đúng $95\\% - 5\\%$.
  - Tập Test: Đúng $95\\% - 5\\%$.
* 👉 **Bắt buộc sử dụng** khi huấn luyện và đánh giá trên các tập dữ liệu mất cân bằng (Imbalanced Data).`
  },

  98: {
    question: "Trong K-Fold Cross-Validation với $K = 5$, quá trình đánh giá diễn ra như thế nào?",
    options: [
      "Chia dữ liệu thành 5 phần bằng nhau, lặp lại 5 lần, mỗi lần lấy 4 phần để huấn luyện và 1 phần làm kiểm thử; kết quả là trung bình của 5 lần",
      "Huấn luyện 5 mô hình khác nhau trên cùng một tập dữ liệu",
      "Nhân đôi dữ liệu lên 5 lần",
      "Chỉ sử dụng 20% dữ liệu để huấn luyện và 80% để kiểm thử"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
1. Dữ liệu được chia ngẫu nhiên thành $K = 5$ tập con (folds) có kích thước xấp xỉ bằng nhau.
2. Quy trình lặp $5$ vòng độc lập:
   - **Vòng 1:** Dùng Folds [2, 3, 4, 5] để Train $\\to$ Đánh giá trên Fold [1] (Test).
   - **Vòng 2:** Dùng Folds [1, 3, 4, 5] để Train $\\to$ Đánh giá trên Fold [2] (Test).
   - ...
   - **Vòng 5:** Dùng Folds [1, 2, 3, 4] để Train $\\to$ Đánh giá trên Fold [5] (Test).
3. **Kết quả cuối cùng:** Lấy điểm trung bình cộng của cả 5 lần.
* **Ưu điểm vượt trội:** Mọi mẫu dữ liệu đều được làm bài kiểm tra đúng 1 lần và được dùng để học 4 lần, loại bỏ hoàn toàn yếu tố may rủi khi chia tập.`
  },

  99: {
    question: "Trường hợp nào sau đây là một ví dụ ĐIỂN HÌNH của hiện tượng Data Leakage (Rò rỉ dữ liệu)?",
    options: [
      "Tính toán giá trị trung bình $\\mu$ và độ lệch chuẩn $\\sigma$ trên TOÀN BỘ dữ liệu trước khi chia thành tập Train và Test",
      "Chia tập Train và Test trước rồi chỉ fit scaler trên tập Train",
      "Sử dụng K-Fold Cross-Validation trên tập Train",
      "Đánh giá mô hình trên một tập Test độc lập chưa từng thấy"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
**Data Leakage (Rò rỉ dữ liệu)** là hiện tượng thông tin từ tập Kiểm thử (tương lai) bị **"lọt" vào quá trình huấn luyện của tập Train**.

#### ⚠️ Phân tích lỗi sai kinh điển:
* Nếu bạn tính $\\mu$ và $\\sigma$ trên toàn bộ $100\\%$ dữ liệu trước khi chia tách, thì các con số $\\mu, \\sigma$ đó đã **chứa sẵn thông tin phân phối của tập Test** rồi!
* Mô hình khi học trên Train vô tình "biết trước đề thi", dẫn đến điểm số Validation/Test cao ảo, nhưng khi mang ra chạy thực tế ngoài đời sẽ thất bại thảm hại!
* ✅ **Quy trình chuẩn mực:** Bắt buộc **Chia dữ liệu Train/Test trước**, chỉ dùng tập Train để tính tham số (\`fit\`), sau đó dùng đúng tham số đó để biến đổi (\`transform\`) cho cả Train và Test!`
  },

  100: {
    question: "Leave-One-Out Cross-Validation (LOO) là trường hợp đặc biệt của K-Fold khi giá trị $K$ bằng bao nhiêu?",
    options: [
      "$K = n$ (với $n$ là tổng số mẫu dữ liệu)",
      "$K = 1$",
      "$K = n / 2$",
      "$K = 10$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Leave-One-Out (LOO) là trường hợp cực đoan nhất của K-Fold khi chọn **$K = n$ (bằng đúng số lượng mẫu)**:
* Nếu bạn có $n = 100$ mẫu:
  - Vòng 1: Lấy 99 mẫu để học, kiểm tra trên **đúng 1 mẫu duy nhất**.
  - Vòng 2: Lấy 99 mẫu khác để học, kiểm tra trên mẫu thứ 2.
  - Lặp lại đúng $100$ lần!
* **Ưu điểm:** Tận dụng tối đa dữ liệu huấn luyện, không có yếu tố ngẫu nhiên.
* **Nhược điểm chí mạng:** Chi phí tính toán cực kỳ đắt đỏ vì phải huấn luyện lại mô hình $n$ lần (không khả thi với dữ liệu lớn hàng chục ngàn mẫu).`
  },

  101: {
    question: "Khi nào ta nên sử dụng Repeated Hold-Out thay vì một lần Hold-Out duy nhất?",
    options: [
      "Khi tập dữ liệu tương đối nhỏ và ta muốn giảm thiểu phương sai của phép ước lượng hiệu năng bằng cách lặp lại nhiều lần phân chia ngẫu nhiên",
      "Khi tập dữ liệu có hàng tỷ mẫu",
      "Khi mô hình không có tham số",
      "Khi muốn tăng tốc độ huấn luyện mô hình"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Nếu tập dữ liệu nhỏ và chỉ chia Train/Test 1 lần duy nhất (Hold-Out thông thường), điểm số phụ thuộc rất lớn vào "may rủi" (lỡ tập Test bốc trúng toàn ca quá dễ hoặc quá khó).
* **Repeated Hold-Out (Hold-Out lặp lại nhiều lần):** Lặp lại việc chia ngẫu nhiên Train/Test nhiều lần (ví dụ 10-20 lần), mỗi lần huấn luyện và đánh giá độc lập, sau đó lấy trung bình cộng.
* Cách này giúp **giảm phương sai (độ bất định)** của phép đánh giá và cho con số tin cậy hơn nhiều.`
  },

  102: {
    question: "Biên quyết định (Decision Boundary) của mô hình Logistic Regression chuẩn có dạng hình học là gì?",
    options: [
      "Một đường thẳng (2D) hoặc siêu phẳng (nhiều chiều) tuyến tính: $w^T x = 0$",
      "Một đường cong parabol phi tuyến",
      "Một hình tròn khép kín",
      "Tập hợp các điểm rời rạc ngẫu nhiên"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Ngưỡng phân loại mặc định là $P = \\sigma(w^Tx) = 0.5$.
Mà $\\sigma(z) = 0.5$ khi và chỉ khi:
$$z = w^Tx = w_0 + w_1 x_1 + \\dots + w_p x_p = 0$$
* Phương trình $w^Tx = 0$ là phương trình của **một đường thẳng** trong không gian 2D, **một mặt phẳng** trong không gian 3D, hoặc **một siêu phẳng (Hyperplane)** trong không gian $p$ chiều!
* Do đó, dù hàm Sigmoid là phi tuyến, nhưng **Biên quyết định của Logistic Regression thuần túy luôn là một ranh giới TUYẾN TÍNH**.`
  },

  103: {
    question: "Để so sánh hiệu năng của nhiều mô hình khác nhau một cách công bằng (Fair Comparison), quy tắc bắt buộc là gì?",
    options: [
      "Đánh giá tất cả các mô hình trên CÙNG MỘT tập kiểm thử (Test Set) độc lập cố định, hoặc sử dụng cùng một cấu hình chia K-Fold",
      "Cho mỗi mô hình tự chọn tập dữ liệu kiểm thử riêng",
      "Chỉ so sánh điểm số trên tập huấn luyện (Train Score)",
      "So sánh thời gian cài đặt thư viện của các mô hình"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Giống như kỳ thi tốt nghiệp: Tất cả thí sinh (các mô hình) bắt buộc phải **làm chung một đề thi trong cùng một điều kiện phòng thi** thì mới phân định được ai giỏi hơn ai!
* Nếu mô hình A thi đề dễ (tập test dễ), mô hình B thi đề khó, việc so sánh điểm số là hoàn toàn khập khiễng và vô nghĩa.
* 👉 **Quy tắc vàng:** Luôn giữ cố định một tập Test Set độc lập (hoặc dùng chung \`random_state\` khi chia K-Fold) để chấm điểm tất cả các mô hình.`
  },

  104: {
    question: "Khi bài toán phân loại đa lớp có các lớp không loại trừ lẫn nhau (Multi-label Classification, một mẫu có thể vừa là 'Áo sơ mi' vừa là 'Màu xanh'), giải pháp phù hợp là gì?",
    options: [
      "Huấn luyện $K$ mô hình Logistic Regression nhị phân độc lập, mỗi mô hình dùng hàm Sigmoid và hàm mất mát Binary Cross-Entropy riêng",
      "Sử dụng duy nhất hàm Softmax",
      "Chuyển bài toán thành hồi quy OLS",
      "Bắt buộc chọn 1 nhãn duy nhất"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Multi-class (Đa lớp độc quyền):** Nhãn loại trừ lẫn nhau (ví dụ: Chó HOẶC Mèo HOẶC Gà) $\\implies$ Dùng **Softmax** vì tổng xác suất bị ép bằng 1.
* **Multi-label (Đa nhãn đồng thời):** Một bức ảnh có thể VỪA có chó, VỪA có mèo, VỪA có người. Các thuộc tính này độc lập với nhau!
* 👉 **Giải pháp:** Tách thành $K$ bài toán phân loại nhị phân độc lập:
  - Mô hình 1 (Sigmoid): Có chó không? (Yes/No)
  - Mô hình 2 (Sigmoid): Có mèo không? (Yes/No)
  - Mô hình 3 (Sigmoid): Có người không? (Yes/No)
  Mỗi mô hình sử dụng hàm Sigmoid và BCE Loss riêng.`
  },

  105: {
    question: "Hiện tượng Overfitting trong hồi quy tuyến tính thường thể hiện qua đặc điểm nào của các trọng số $w$?",
    options: [
      "Các hệ số trọng số $w$ có độ lớn cực kỳ lớn (bùng nổ) và trái dấu nhau giữa các đặc trưng có tương quan cao",
      "Tất cả các trọng số $w$ đều bằng đúng 0",
      "Các hệ số trọng số $w$ có độ lớn rất nhỏ gần 0",
      "Hệ số chặn bias luôn mang giá trị âm"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Khi mô hình cố gắng khớp từng chấm dữ liệu nhiễu trong tập Train, đường hồi quy bị uốn éo dữ dội.
* Trong đại số tuyến tính, điều này khiến các trọng số $w$ bị **thổi phồng độ lớn (bùng nổ)**, ví dụ $w_1 = +50.000$ và $w_2 = -49.990$.
* Khi gặp dữ liệu mới ngoài đời chỉ cần lệch một chút xíu, các trọng số khổng lồ này sẽ khuếch đại sai số lên hàng triệu lần!
* 👉 Đó là lý do vì sao các kỹ thuật **Regularization (Ridge, Lasso)** sinh ra để "phạt độ lớn của trọng số", ép chúng không được phép bùng nổ, từ đó ngăn chặn hữu hiệu Overfitting.`
  }
};
