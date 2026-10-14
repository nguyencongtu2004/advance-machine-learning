module.exports = {
  211: {
    question: "Nếu ma trận hiệp phương sai $X^T X$ không khả nghịch (singular/suy biến do hiện tượng đa cộng tuyến hoàn hảo hoặc $n < p$), nghiệm của bài toán Hồi quy tuyến tính có thể giải quyết bằng cách nào?",
    options: [
      "Sử dụng Ma trận giả nghịch đảo Moore-Penrose $X^+$ hoặc bổ sung thành phần chính quy hóa Ridge Regression $(X^TX + \\lambda I)^{-1}$",
      "Bắt buộc xóa bỏ toàn bộ dữ liệu và thu thập lại",
      "Chuyển sang dùng hàm mất mát MAE để giải bằng nghiệm đóng",
      "Tăng số lượng đặc trưng $p$ lên nhiều hơn nữa"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Khi ma trận $X^TX$ không khả nghịch (định thức $\\det(X^TX) = 0$), phương trình chuẩn $X^TXw = X^Ty$ có **vô số nghiệm** (hệ thiếu điều kiện). Ta có 2 giải pháp toán học kinh điển:

1. **Ma trận Giả nghịch đảo Moore-Penrose ($X^+$):** Dùng kỹ thuật Phân tích giá trị suy biến (SVD: $X = U\\Sigma V^T$) để tính $X^+ = V\\Sigma^+ U^T$. Nghiệm $w^* = X^+ y$ là nghiệm có **chuẩn $L_2$ nhỏ nhất** trong vô số nghiệm khả dĩ.
2. **Hồi quy Ridge ($L_2$ Regularization):** Cộng thêm một lượng dương $\\lambda I$ vào đường chéo chính:
   $$w^* = (X^T X + \\lambda I)^{-1} X^T y$$
   Bảo đảm $(X^TX + \\lambda I)$ luôn đối xứng xác định dương và **luôn nghịch đảo được $100\\%$**!`
  },

  212: {
    question: "Khi áp dụng hàm cơ sở phi tuyến $\\phi(x)$ (như hồi quy đa thức bậc cao $y = w_0 + w_1 x + w_2 x^2 + \\dots$), tại sao mô hình này vẫn được gọi là 'Hồi quy Tuyến tính'?",
    options: [
      "Vì hàm mục tiêu TUYẾN TÍNH theo các tham số trọng số $w$, dù nó phi tuyến đối với biến đầu vào $x$",
      "Vì đồ thị biểu diễn luôn là một đường thẳng trong không gian 2D",
      "Vì sai số chỉ tăng theo hàm tuyến tính",
      "Vì nó chỉ áp dụng được cho dữ liệu tuyến tính hoàn hảo"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Trong thuật ngữ Học máy, tính chất **"Tuyến tính" (Linearity)** của mô hình hồi quy được định nghĩa theo **CÁC THAM SỐ CẦN HỌC $w$**, chứ KHÔNG PHẢI theo biến đầu vào $x$!
* Phương trình:
  $$y = w_0 + w_1 x + w_2 x^2 + w_3 \\sin(x)$$
* Nếu ta đặt các biến phụ: $z_1 = x, z_2 = x^2, z_3 = \\sin(x)$, phương trình trở thành:
  $$y = w_0 + w_1 z_1 + w_2 z_2 + w_3 z_3 = w^T z$$
* Đạo hàm theo từng $w_j$ là $\\frac{\\partial y}{\\partial w_j} = z_j$ (bậc nhất, tuyến tính độc lập).
* 👉 Vì mối quan hệ giữa dự đoán $\\hat{y}$ và các tham số $w$ là tuyến tính bậc nhất, bài toán tối ưu vẫn giữ nguyên dạng lồi bậc hai và giải được bằng nghiệm đóng OLS quen thuộc!`
  },

  213: {
    question: "Dưới giả định thống kê nào thì nghiệm Cực đại hóa hợp lý (Maximum Likelihood Estimation - MLE) trong hồi quy hoàn toàn tương đương với nghiệm Bình phương tối thiểu (OLS)?",
    options: [
      "Nhiễu $\\epsilon$ là các biến ngẫu nhiên độc lập cùng tuân theo phân phối chuẩn Gaussian $\\epsilon_i \\sim \\mathcal{N}(0, \\sigma^2)$",
      "Nhiễu $\\epsilon$ tuân theo phân phối đều (Uniform Distribution)",
      "Nhiễu $\\epsilon$ tuân theo phân phối Laplace",
      "Dữ liệu đầu vào $x$ tuân theo phân phối Bernoulli"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Ronald Fisher (tiếp cận thống kê) và Carl Friedrich Gauss (tiếp cận hình học) đi theo hai con đường khác nhau nhưng hội tụ tại cùng một nghiệm nhờ giả định phân phối chuẩn:
* Giả sử nhiễu ngẫu nhiên $\\epsilon_i = y_i - w^Tx_i$ độc lập và có phân phối chuẩn $\\mathcal{N}(0, \\sigma^2)$.
* Hàm mật độ xác suất của 1 mẫu:
  $$p(y_i|x_i; w) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} \\exp\\left( -\\frac{(y_i - w^Tx_i)^2}{2\\sigma^2} \\right)$$
* Khi nhân toàn bộ $n$ xác suất độc lập lại và lấy $\\ln$ (Log-Likelihood), ta có:
  $$\\ln L(w) = -\\frac{n}{2}\\ln(2\\pi\\sigma^2) - \\frac{1}{2\\sigma^2} \\sum_{i=1}^n (y_i - w^Tx_i)^2$$
* Muốn $\\ln L(w)$ lớn nhất thì đại lượng $\\sum(y_i - w^Tx_i)^2$ bắt buộc phải bé nhất $\\implies$ **Chính là hàm mất mát OLS**!`
  },

  214: {
    question: "Xét theo ý nghĩa hình học của Hồi quy tuyến tính OLS, vector dự đoán $\\hat{y} = X w_{\\text{OLS}}$ đại diện cho yếu tố nào?",
    options: [
      "Hình chiếu trực giao của vector nhãn thật $y$ lên không gian cột $\\text{Col}(X)$",
      "Vector tiếp tuyến với đường cong dữ liệu",
      "Vector trực giao với không gian cột $\\text{Col}(X)$",
      "Trọng tâm của ma trận dữ liệu đầu vào"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Không gian cột $\\text{Col}(X) = \\{Xw \\mid w \\in \\mathbb{R}^p\\}$ là không gian con đa chiều (mặt phẳng siêu phẳng) chứa toàn bộ các giá trị dự đoán mà mô hình có thể tạo ra.
* Vector nhãn thực tế $y \\in \\mathbb{R}^n$ thường nằm bên ngoài không gian này (vì có nhiễu ngẫu nhiên).
* Nghiệm OLS tối thiểu hóa khoảng cách Euclid $\\|y - \\hat{y}\\|_2$.
* Trong hình học không gian, khoảng cách từ một điểm bên ngoài đến một không gian con đạt giá trị nhỏ nhất tại **Hình chiếu trực giao (Orthogonal Projection)** của điểm đó lên không gian con.
* 👉 Ma trận biến đổi $P = X(X^TX)^{-1}X^T$ chính là **Ma trận chiếu trực giao (Projection Matrix)** đưa $y \\to \\hat{y}$.`
  },

  215: {
    question: "Độ phức tạp tính toán khi tìm nghiệm đóng OLS bằng công thức $w^* = (X^T X)^{-1} X^T y$ với $n$ mẫu và $p$ đặc trưng xấp xỉ là bao nhiêu?",
    options: [
      "$\\mathcal{O}(p^3 + n p^2)$",
      "$\\mathcal{O}(n^3 + p)$",
      "$\\mathcal{O}(n \\log n)$",
      "$\\mathcal{O}(p)$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Các bước tính toán nghiệm đóng OLS:
1. **Phép nhân $X^T X$:** Nhân ma trận $(p \\times n)$ với $(n \\times p)$ tốn **$\\mathcal{O}(n p^2)$** phép tính.
2. **Phép nghịch đảo ma trận $(X^TX)^{-1}$:** Ma trận vuông $(p \\times p)$ có độ phức tạp nghịch đảo bằng khử Gauss là **$\\mathcal{O}(p^3)$**.
3. **Phép nhân với $X^T y$:** Tốn **$\\mathcal{O}(n p + p^2)$**.
* 👉 Tổng độ phức tạp là: **$\\mathcal{O}(p^3 + n p^2)$**.

⚠️ **Ý nghĩa thực tế:** Khi số đặc trưng $p$ rất lớn (ví dụ $p = 100.000$ trong xử lý văn bản, gen di truyền), $p^3 = 10^{15}$ phép tính sẽ làm máy tính treo cứng hoặc tràn RAM! Lúc đó người ta **không dùng nghiệm đóng mà chuyển sang dùng Gradient Descent**!`
  },

  216: {
    question: "Khi nào ta NÊN ưu tiên sử dụng Elastic Net thay vì dùng riêng biệt Lasso ($L_1$)?",
    options: [
      "Khi số lượng đặc trưng $p$ lớn hơn nhiều so với số lượng mẫu $n$ ($p \\gg n$) hoặc khi có các nhóm đặc trưng tương quan rất mạnh với nhau",
      "Khi tất cả các đặc trưng đều hoàn toàn độc lập với nhau",
      "Khi bài toán chỉ có duy nhất 1 biến đặc trưng",
      "Khi muốn tăng tốc độ tính toán gấp 10 lần so với OLS"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Lasso ($L_1$) có 2 điểm yếu chí mạng trong thực tế:
1. **Giới hạn khi $p > n$:** Trong bài toán số chiều lớn (ví dụ $p = 10.000$ gen nhưng chỉ có $n = 100$ bệnh nhân), thuật toán Lasso chỉ có thể chọn tối đa $n$ đặc trưng rồi dừng lại, bỏ sót $p - n$ đặc trưng còn lại.
2. **Vấn đề nhóm biến tương quan (Collinear Groups):** Nếu có một nhóm 5 biến tương quan mạnh với nhau (ví dụ các chỉ số huyết áp khác nhau), Lasso thường chỉ chọn vu vơ đúng 1 biến và ép 4 biến còn lại về 0, làm mất thông tin tổng thể.

👉 **Elastic Net cứu nguy:** Nhờ thành phần $L_2$ cộng thêm, nó vừa chọn được đặc trưng thưa (nhờ $L_1$), vừa kích hoạt **hiệu ứng nhóm (Grouping Effect)** để giữ lại toàn bộ cụm đặc trưng tương quan!`
  },

  217: {
    question: "Trong Hồi quy Logistic, đạo hàm của hàm mất mát Binary Cross-Entropy theo vector trọng số $w$ có dạng biểu thức là gì?",
    options: [
      "$\\nabla_w J(w) = X^T (\\hat{y} - y) = X^T (\\sigma(Xw) - y)$",
      "$\\nabla_w J(w) = -2 X^T (y - Xw)$",
      "$\\nabla_w J(w) = X^T y \\ln(\\hat{y})$",
      "$\\nabla_w J(w) = (X^TX)^{-1} (\\hat{y} - y)$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Áp dụng quy tắc chuỗi vi phân (Chain Rule):
1. Đạo hàm của hàm mất mát BCE theo xác suất dự đoán $p_i = \\sigma(z_i)$:
   $$\\frac{\\partial L_i}{\\partial p_i} = -\\frac{y_i}{p_i} + \\frac{1 - y_i}{1 - p_i} = \\frac{p_i - y_i}{p_i(1 - p_i)}$$
2. Đạo hàm của hàm Sigmoid theo điểm số $z_i = w^Tx_i$:
   $$\\frac{\\partial p_i}{\\partial z_i} = p_i (1 - p_i)$$
3. Đạo hàm của $z_i$ theo trọng số $w$:
   $$\\frac{\\partial z_i}{\\partial w} = x_i$$
4. Nhân chuỗi lại: đại lượng $p_i(1 - p_i)$ ở tử và mẫu **triệt tiêu hoàn hảo cho nhau**!
   $$\\nabla_w J(w) = \\sum_{i=1}^n (p_i - y_i) x_i = X^T (\\hat{y} - y)$$
👉 Biểu thức gradient của Logistic Regression có dạng giống hệt như Hồi quy tuyến tính: $X^T(\\hat{y} - y)$, chỉ khác là $\\hat{y} = \\sigma(Xw)$ thay vì $Xw$!`
  },

  218: {
    question: "Trong bài toán phân lớp đa lớp có mất cân bằng dữ liệu, nhận định nào sau đây là CHÍNH XÁC khi so sánh Macro-F1 và Micro-F1?",
    options: [
      "Macro-F1 phản ánh trung thực hiệu năng trên các lớp thiểu số hơn Micro-F1, vì nó tính F1 riêng từng lớp rồi chia đều trọng số",
      "Micro-F1 luôn phản ánh lớp thiểu số tốt hơn",
      "Macro-F1 luôn bằng Accuracy",
      "Micro-F1 không phụ thuộc vào lớp đa số"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Micro-F1:** Gom toàn bộ các ca đoán đúng sai trên toàn bộ dữ liệu lại tính một lần. Trong phân loại đa lớp thông thường, Micro-F1 **chính bằng Accuracy**. Do đó, nó bị các lớp chiếm số đông chi phối hoàn toàn.
* **Macro-F1:** Tính F1-score độc lập cho từng lớp:
  $$\\text{Macro-F1} = \\frac{F_{1,\\text{Lớp 1}} + F_{1,\\text{Lớp 2}} + \\dots + F_{1,\\text{Lớp } K}}{K}$$
  Mỗi lớp đều được chia đều tỷ lệ $\\frac{1}{K}$. Nếu mô hình làm hỏng lớp hiếm, điểm số của lớp đó rớt về 0 sẽ kéo tụt Macro-F1 xuống ngay lập tức.
* 👉 Vì thế, **Macro-F1 là thước đo chuẩn mực nhất để phát hiện xem mô hình có đối xử tệ với lớp thiểu số hay không**.`
  },

  219: {
    question: "Một mô hình chẩn đoán bệnh ung thư dự đoán TẤT CẢ bệnh nhân đều 'Không ung thư' (lớp Âm tính). Khi đó chỉ số Recall đối với lớp ung thư bằng bao nhiêu?",
    options: [
      "Recall = 0.0",
      "Recall = 1.0",
      "Recall = 0.5",
      "Không xác định được"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Vì mô hình đoán tất cả đều là âm tính, nên số ca ung thư mà nó tìm ra được là: **$TP = 0$**.
* Toàn bộ bệnh nhân ung thư thật đều bị bỏ sót: **$FN = \\text{Tổng số ca bệnh}$**.
* Áp dụng công thức tính Recall:
  $$\\text{Recall} = \\frac{TP}{TP + FN} = \\frac{0}{0 + FN} = 0.0 \\quad (0\\%!)$$
* 👉 Dù Accuracy của mô hình này có thể đạt $99.9\\%$, nhưng điểm **Recall = 0%** đã vạch trần bản chất vô dụng và nguy hiểm của nó trong y tế!`
  },

  220: {
    question: "Điểm biểu diễn một mô hình phân loại HOÀN HẢO (Perfect Classifier) trên không gian ROC Curve có tọa độ là bao nhiêu?",
    options: [
      "$(FPR = 0, TPR = 1)$ - Góc trên bên trái",
      "$(FPR = 1, TPR = 1)$ - Góc trên bên phải",
      "$(FPR = 0, TPR = 0)$ - Gốc tọa độ",
      "$(FPR = 0.5, TPR = 0.5)$ - Chính giữa đồ thị"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Đồ thị ROC (Receiver Operating Characteristic):
* **Trục hoành (Trục X):** $FPR = \\frac{FP}{FP + TN}$ (Tỷ lệ báo động nhầm).
* **Trục tung (Trục Y):** $TPR = \\text{Recall} = \\frac{TP}{TP + FN}$ (Tỷ lệ bắt đúng ca bệnh).

#### 🏆 Mô hình HOÀN HẢO tuyệt đối:
* Không báo nhầm ca nào: $FP = 0 \\implies FPR = 0$ (nằm sát mép trái).
* Bắt đúng $100\\%$ không bỏ sót ai: $FN = 0 \\implies TPR = 1$ (nằm sát mép trên cùng).
* 👉 Tọa độ lý tưởng là **$(0, 1)$ ở góc trên bên trái**! Diện tích dưới đường cong của mô hình này đạt giá trị cực đại: $\\text{AUC} = 1.0$.`
  }
};
