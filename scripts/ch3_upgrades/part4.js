module.exports = {
  281: {
    question: "Hàm mất mát Tổng bình phương phần dư (Residual Sum of Squares - RSS) trong hồi quy tuyến tính được viết dưới dạng chuẩn ma trận là gì?",
    options: [
      "$RSS = \\|y - Xw\\|_2^2 = (y - Xw)^T (y - Xw)$",
      "$RSS = \\|y - Xw\\|_1$",
      "$RSS = y^T X w$",
      "$RSS = (X^T y)^2$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Trong đại số ma trận, vector sai số phần dư là:
$$e = y - \\hat{y} = y - Xw$$
* Bình phương chuẩn Euclid ($L_2$ Norm) của vector $e$ chính là tích vô hướng của $e$ với chính nó:
  $$\\|e\\|_2^2 = e^T e = (y - Xw)^T (y - Xw) = \\sum_{i=1}^n (y_i - w^Tx_i)^2$$
* Phá ngoặc đại số ma trận:
  $$J(w) = y^Ty - y^TXw - w^TX^Ty + w^TX^TXw$$
* Vì $y^TXw$ là một đại lượng vô hướng (scalar $1 \\times 1$), nên nó bằng chính chuyển vị của nó $(y^TXw)^T = w^TX^Ty$.
* Do đó:
  $$J(w) = y^Ty - 2w^TX^Ty + w^TX^TXw$$`
  },

  282: {
    question: "Khi giải phương trình đạo hàm cấp một của hàm mất mát OLS theo vector $w$, ta thu được hệ phương trình nào?",
    options: [
      "Hệ phương trình chuẩn: $X^T X w = X^T y$",
      "Hệ phương trình Laplace: $X w = y$",
      "Hệ phương trình Poisson: $X^T y w = I$",
      "Hệ phương trình thuần nhất: $X^T X w = 0$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Lấy vi phân ma trận của hàm mất mát $J(w) = y^Ty - 2w^TX^Ty + w^TX^TXw$:
1. Đạo hàm của $-2w^T (X^Ty)$ theo $w$ bằng: $-2X^Ty$.
2. Đạo hàm của dạng toàn phương $w^T (X^TX) w$ theo $w$ bằng: $2X^TXw$.
3. Đặt gradient tổng bằng 0 để tìm điểm dừng cực tiểu:
   $$\\nabla_w J(w) = -2X^Ty + 2X^TXw = 0 \\iff X^TXw = X^Ty$$
* Đây chính là **Hệ phương trình chuẩn (Normal Equation)**.`
  },

  283: {
    question: "Khi số lượng đặc trưng $p$ lớn hơn nhiều so với số lượng mẫu quan sát $n$ ($p > n$), điều gì sẽ xảy ra với ma trận $X^T X$ trong OLS?",
    options: [
      "Ma trận $X^T X$ có kích thước $(p \\times p)$ nhưng hạng tối đa chỉ bằng $n < p$, do đó nó bị suy biến (singular), $\\det(X^TX) = 0$ và không khả nghịch",
      "Ma trận $X^T X$ luôn khả nghịch và có nghiệm duy nhất",
      "Nghiệm OLS tự động trở thành nghiệm Lasso",
      "Không thể nhân ma trận $X$ với chính nó"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Ma trận $X$ có kích thước $(n \\times p)$. Theo định lý đại số tuyến tính:
  $$\\text{rank}(X^TX) = \\text{rank}(X) \\le \\min(n, p)$$
* Khi $p > n$, hạng của ma trận $(p \\times p)$ tối đa chỉ có thể là $n$.
* Một ma trận vuông kích thước $p$ mà chỉ có hạng $n < p$ thì **bị thiếu hạng (Rank-deficient)** $\\implies$ định thức $\\det(X^TX) = 0$.
* Ma trận có định thức bằng 0 là **ma trận suy biến (Singular Matrix)**, không tồn tại ma trận nghịch đảo $(X^TX)^{-1}$.
* 👉 Phương trình có **vô số nghiệm**, OLS thuần túy bó tay. Cần dùng **Ridge Regression** để khắc phục!`
  },

  284: {
    question: "Trong Hồi quy Ridge ($L_2$ Regularization), tại sao ma trận $(X^T X + \\lambda I)$ với $\\lambda > 0$ LUÔN LUÔN KHẢ NGHỊCH?",
    options: [
      "Vì $X^T X$ là ma trận nửa xác định dương (các trị riêng $\\mu_i \\ge 0$), khi cộng thêm $\\lambda I$ thì mọi trị riêng trở thành $(\\mu_i + \\lambda) \\ge \\lambda > 0$, biến nó thành ma trận xác định dương và $\\det > 0$",
      "Vì ma trận đơn vị $I$ làm mất tính đối xứng của ma trận",
      "Vì nó biến đổi tất cả các phần tử thành số âm",
      "Vì kích thước ma trận giảm đi một nửa"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Chứng minh toán học trực quan:
1. Ma trận $X^TX$ luôn đối xứng và **nửa xác định dương (Positive Semi-Definite)**. Điều này nghĩa là tất cả các trị riêng (eigenvalues) $\\mu_i$ của nó đều không âm: $\\mu_i \\ge 0$.
2. Khi cộng thêm $\\lambda I$ (với $\\lambda > 0$), theo tính chất của đại số tuyến tính, mọi trị riêng đều được tịnh tiến thêm một lượng $\\lambda$:
   $$\\text{Trị riêng mới} = \\mu_i + \\lambda \\ge \\lambda > 0$$
3. Định thức của một ma trận bằng tích tất cả các trị riêng của nó:
   $$\\det(X^TX + \\lambda I) = \\prod_{i=1}^p (\\mu_i + \\lambda) > 0$$
4. Vì định thức luôn dương nghiêm ngặt, ma trận **hoàn toàn không thể suy biến** $\\implies$ **LUÔN KHẢ NGHỊCH 100% trong mọi trường hợp!**`
  },

  285: {
    question: "Trong hồi quy Ridge, điều gì xảy ra với các hệ số trọng số $w$ khi hệ số điều chuẩn $\\lambda$ tiến dần về $0$ ($\\lambda \\to 0$)?",
    options: [
      "Nghiệm $w_{\\text{Ridge}}$ tiệm cận dần về nghiệm OLS thông thường $w_{\\text{OLS}}$",
      "Tất cả các trọng số đều biến thành 0",
      "Tất cả các trọng số đều bùng nổ ra vô cùng",
      "Mô hình biến thành cây quyết định"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Xét công thức nghiệm đóng của Ridge:
$$w^*_{\\text{Ridge}} = (X^T X + \\lambda I)^{-1} X^T y$$
* Khi $\\lambda \\to 0$, đại lượng $\\lambda I \\to 0$. Biểu thức trở thành:
  $$\\lim_{\\lambda \\to 0} w^*_{\\text{Ridge}} = (X^T X)^{-1} X^T y = w^*_{\\text{OLS}}$$
* **Ý nghĩa:** $\\lambda$ là chiếc van điều tiết.
  - Vặn $\\lambda = 0$: Mở toang van, mô hình tự do khớp dữ liệu tối đa (giống OLS).
  - Vặn $\\lambda$ càng lớn: Siết chặt van, ép các trọng số teo nhỏ dần để chống Overfitting.`
  },

  286: {
    question: "Về mặt hình học, tại sao Lasso ($L_1$) có khả năng ép các hệ số trọng số $w$ về đúng bằng $0$ tuyệt đối, còn Ridge ($L_2$) thì không?",
    options: [
      "Vùng ràng buộc của chuẩn $L_1$ có dạng hình thoi đa diện với các góc nhọn nằm ngay trên các trục tọa độ, khiến các đường đồng mức sai số dễ tiếp xúc tại đúng các đỉnh này",
      "Vì chuẩn $L_1$ có đạo hàm lớn hơn chuẩn $L_2$",
      "Vì chuẩn $L_2$ chỉ áp dụng được cho số dương",
      "Vì Lasso chia dữ liệu thành các góc phần tư độc lập"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Hãy tưởng tượng bạn thổi một quả bóng bầu dục (đường đồng mức elip của hàm mất mát OLS) phình to dần từ điểm tối ưu $w_{\\text{OLS}}$:
  - **Ridge ($L_2$):** Quả bóng elip va chạm với **vùng ràng buộc hình tròn** $w_1^2 + w_2^2 \\le C$. Vì đường tròn trơn láng không có góc cạnh, điểm tiếp xúc hầu như luôn nằm trên cung tròn (nơi cả $w_1 \\ne 0$ và $w_2 \\ne 0$).
  - **Lasso ($L_1$):** Quả bóng elip va chạm với **vùng ràng buộc hình thoi** $|w_1| + |w_2| \\le C$. Do các góc nhọn chĩa thẳng ra ngoài theo các trục tọa độ, quả bóng elip xác suất cực cao sẽ đụng trúng **đúng đỉnh nhọn** trước tiên!
* Tại đỉnh nhọn trên trục $w_1$, tọa độ $w_2$ **bằng đúng số 0 tuyệt đối**!
* 👉 Đó là lý do tại sao Lasso tạo ra **nghiệm thưa (Sparsity)**, loại bỏ triệt để các biến dư thừa.`
  },

  287: {
    question: "Tại sao Hồi quy Lasso KHÔNG CÓ nghiệm đóng giải tích (Closed-form analytical solution)?",
    options: [
      "Vì hàm trị tuyệt đối $|w_j|$ có điểm gãy góc tại $0$, tại đó đạo hàm không tồn tại (không khả vi), không thể đặt đạo hàm bằng 0 để giải bằng ma trận",
      "Vì ma trận của Lasso luôn có số hàng bằng số cột",
      "Vì nó có quá nhiều nghiệm đóng cùng lúc",
      "Vì Lasso bắt buộc phải chia dữ liệu thành 3 tập"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Hàm mục tiêu của Lasso chứa số hạng $\\sum |w_j|$.
* Hàm số $f(x) = |x|$ có đồ thị hình chữ V gãy nhọn tại gốc tọa độ $x = 0$.
* Tại điểm $x = 0$, đạo hàm bên trái bằng $-1$, đạo hàm bên phải bằng $+1$ $\\implies$ **Hàm số không khả vi (không có đạo hàm thông thường) tại điểm 0**.
* Vì không thể lấy đạo hàm toàn phần và giải phương trình đại số tuyến tính như OLS hay Ridge, ta bắt buộc phải dùng các thuật toán lặp số học như **Coordinate Descent (Hạ tọa độ dựa trên hàm Soft-thresholding)**.`
  },

  288: {
    question: "Hồi quy Elastic Net giải quyết nhược điểm nào của Hồi quy Lasso khi tập dữ liệu có các đặc trưng có độ tương quan rất cao (Collinear Features)?",
    options: [
      "Khắc phục việc Lasso chỉ chọn ngẫu nhiên 1 biến trong nhóm tương quan rồi loại bỏ các biến còn lại, bằng cách giữ lại cả nhóm đặc trưng nhờ thành phần $L_2$",
      "Tăng thời gian huấn luyện lên gấp đôi",
      "Ép tất cả các hệ số phải bằng nhau",
      "Tự động sinh thêm dữ liệu nhân tạo"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Giả sử dự đoán giá xe hơi có 3 biến: Dung tích xi lanh, Công suất động cơ mã lực, và Lượng tiêu thụ xăng (cả 3 biến này tương quan cực kỳ chặt chẽ với nhau).
* **Vấn đề của Lasso:** Do tính chất hình thoi sắc nhọn, nó sẽ bốc đại đúng 1 biến và triệt tiêu 2 biến còn lại về 0, gây mất mát góc nhìn đa chiều của dữ liệu.
* **Elastic Net:** Kết hợp hình phạt convex nghiêm ngặt của $L_2$:
  $$J(w) = \\text{Loss} + \\lambda_1 \\|w\\|_1 + \\lambda_2 \\|w\\|_2^2$$
  Thành phần $L_2$ tạo ra **Hiệu ứng gom cụm (Grouping Effect)**, ép các biến có tương quan cao phải có trọng số gần bằng nhau và được giữ lại cùng nhau trong mô hình!`
  },

  289: {
    question: "Trong Hồi quy Logistic, đại lượng Tỷ số khả dĩ (Odds) được định nghĩa như thế nào đối với xác suất $p$?",
    options: [
      "$\\text{Odds} = \\frac{p}{1 - p}$",
      "$\\text{Odds} = \\frac{1 - p}{p}$",
      "$\\text{Odds} = \\ln(p)$",
      "$\\text{Odds} = p(1 - p)$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Odds là tỷ số giữa **xác suất biến cố xảy ra ($p$)** chia cho **xác suất biến cố không xảy ra ($1 - p$)**:
  $$\\text{Odds} = \\frac{P(y=1)}{P(y=0)} = \\frac{p}{1 - p}$$
* Ví dụ: Dự báo ngày mai mưa với xác suất $p = 0.75$ ($75\\%$):
  $$\\text{Odds} = \\frac{0.75}{1 - 0.75} = \\frac{0.75}{0.25} = 3$$
  Nghĩa là: Khả năng có mưa **gấp 3 lần** khả năng không mưa!`
  },

  290: {
    question: "Hàm Log-odds (Logit) biểu diễn mối quan hệ giữa biến đầu vào $x$ và xác suất $p$ trong Logistic Regression bằng công thức nào?",
    options: [
      "$\\ln\\left(\\frac{p}{1 - p}\\right) = w^T x = w_0 + w_1 x_1 + \\dots + w_p x_p$",
      "$\\frac{p}{1 - p} = w^T x$",
      "$\\ln(p) = w^T x$",
      "$p = w^T x$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Hàm Logit là logarit tự nhiên của Odds:
$$\\text{Logit}(p) = \\ln(\\text{Odds}) = \\ln\\left(\\frac{p}{1 - p}\\right)$$
* Trong mô hình Logistic Regression, hàm Logit chính là **cầu nối biến đổi** biến mục tiêu xác suất phi tuyến thành một biểu thức tuyến tính theo các đặc trưng:
  $$\\ln\\left(\\frac{p}{1 - p}\\right) = w_0 + w_1 x_1 + \\dots + w_p x_p = w^Tx$$
* Khi mũ hóa $e$ cả 2 vế và giải phương trình tìm $p$, ta thu được hàm Sigmoid:
  $$p = \\frac{1}{1 + e^{-w^Tx}}$$`
  },

  291: {
    question: "Đạo hàm bậc nhất của hàm kích hoạt Sigmoid $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ theo biến $z$ có dạng rút gọn cực đẹp là gì?",
    options: [
      "$\\sigma'(z) = \\sigma(z) (1 - \\sigma(z))$",
      "$\\sigma'(z) = \\sigma(z)^2$",
      "$\\sigma'(z) = 1 - \\sigma(z)$",
      "$\\sigma'(z) = e^{-z} \\sigma(z)$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Chứng minh vi phân:
$$\\sigma(z) = (1 + e^{-z})^{-1}$$
$$\\sigma'(z) = - (1 + e^{-z})^{-2} \\cdot (-e^{-z}) = \\frac{e^{-z}}{(1 + e^{-z})^2}$$
Tách thành tích 2 phân số:
$$\\sigma'(z) = \\frac{1}{1 + e^{-z}} \\cdot \\frac{e^{-z}}{1 + e^{-z}} = \\sigma(z) \\cdot \\left( \\frac{1 + e^{-z} - 1}{1 + e^{-z}} \\right) = \\sigma(z) (1 - \\sigma(z))$$

> 💡 **Ý nghĩa thực tế:** Máy tính tính đạo hàm của Sigmoid cực kỳ nhanh! Sau khi đã tính xong giá trị $\\sigma(z)$ ở bước Forward, ở bước Backward chỉ việc lấy phép nhân $\\sigma(1 - \\sigma)$ mà không cần tính lại hàm mũ tốn kém!`
  },

  292: {
    question: "Tại sao trong Hồi quy Logistic, ta sử dụng hàm mất mát Binary Cross-Entropy thay vì dùng sai số bình phương MSE?",
    options: [
      "Vì khi kết hợp với hàm phi tuyến Sigmoid, MSE tạo ra hàm mất mát không lồi (Non-convex) có rất nhiều điểm cực tiểu cục bộ (Local Minima), trong khi BCE tạo ra hàm lồi (Convex) có nghiệm tối ưu toàn cục duy nhất",
      "Vì MSE không tính toán được khi xác suất nhỏ hơn 0.5",
      "Vì BCE luôn cho kết quả bằng 0",
      "Vì MSE chỉ dùng cho ma trận đường chéo"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Nếu dùng MSE:** $J(w) = \\frac{1}{2n}\\sum (y_i - \\sigma(w^Tx_i))^2$.
  - Do hàm Sigmoid uốn lượn hình chữ S, hàm MSE theo $w$ sẽ có bề mặt lồi lõm mấp mô (Non-convex) với **rất nhiều hố bẫy cực tiểu cục bộ (Local Minima)** và vùng yên ngựa bằng phẳng (Gradient vanishing). Thuật toán Gradient Descent sẽ bị mắc kẹt và không tìm được nghiệm tốt.
* **Nếu dùng BCE (Log Loss):**
  - Hàm logarit triệt tiêu hoàn toàn hàm mũ của Sigmoid khi tính đạo hàm, làm cho hàm mất mát trở thành **hàm lồi hoàn hảo (Convex Surface hình lòng chảo)**.
  - Mọi điểm cực tiểu đều chính là **Cực tiểu toàn cục (Global Minimum)**, đảm bảo thuật toán luôn hội tụ về nghiệm tối ưu!`
  },

  293: {
    question: "Công thức gradient của hàm mất mát Binary Cross-Entropy $J(w)$ theo vector trọng số $w$ là gì?",
    options: [
      "$\\nabla_w J(w) = \\sum_{i=1}^n (\\sigma(w^T x_i) - y_i) x_i = X^T (\\hat{y} - y)$",
      "$\\nabla_w J(w) = \\sum_{i=1}^n (\\sigma(w^T x_i) - y_i)^2$",
      "$\\nabla_w J(w) = X^T y \\sigma(Xw)$",
      "$\\nabla_w J(w) = (X^TX)^{-1} (\\hat{y} - y)$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Đạo hàm chuỗi của BCE:
$$\\nabla_w J(w) = \\sum_{i=1}^n (\\hat{y}_i - y_i) x_i = X^T (\\hat{y} - y)$$
* Trong đó $\\hat{y}_i = \\sigma(w^Tx_i)$ là xác suất dự đoán của mô hình.
* **Công thức cập nhật trọng số trong Gradient Descent:**
  $$w \\leftarrow w - \\eta \\nabla_w J(w) = w - \\eta X^T (\\hat{y} - y)$$
* Cực kỳ trực quan: Nếu dự đoán đúng $(\\hat{y} \\approx y)$, sai số bằng 0 $\\implies$ không cập nhật. Nếu đoán lệch càng lớn, trọng số được điều chỉnh càng mạnh theo hướng ngược lại.`
  },

  294: {
    question: "Khi áp dụng Hồi quy Softmax cho bài toán phân loại $K$ lớp ($K \\ge 3$), xác suất một mẫu $x$ thuộc về lớp $k$ được tính bằng công thức nào?",
    options: [
      "$P(y = k | x) = \\frac{e^{w_k^T x}}{\\sum_{j=1}^K e^{w_j^T x}}$",
      "$P(y = k | x) = \\frac{w_k^T x}{\\sum_{j=1}^K w_j^T x}$",
      "$P(y = k | x) = \\frac{1}{1 + e^{-w_k^T x}}$",
      "$P(y = k | x) = \\ln(w_k^T x)$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Mô hình Softmax (Multinomial Logistic Regression):
$$P(y = k | x) = \\frac{e^{z_k}}{\\sum_{j=1}^K e^{z_j}} = \\frac{e^{w_k^T x}}{\\sum_{j=1}^K e^{w_j^T x}}$$
* Mỗi lớp $k$ có một vector trọng số $w_k$ riêng biệt.
* Hàm mũ $e^{w_k^Tx}$ bảo đảm các điểm số luôn dương.
* Chia cho tổng $\\sum e^{w_j^Tx}$ ở mẫu số bảo đảm quy tắc tiên đề xác suất:
  $$\\sum_{k=1}^K P(y = k | x) = 1.0$$`
  },

  295: {
    question: "Cho ma trận nhầm lẫn trên tập kiểm thử gồm 100 bệnh nhân: Thực tế có 20 người mắc bệnh (Dương) và 80 người khỏe mạnh (Âm). Kết quả mô hình: $TP = 18, FN = 2, FP = 8, TN = 72$. Độ đo Precision của mô hình là bao nhiêu?",
    options: [
      "$0.6923$ (xấp xỉ $69.23\\%$)",
      "$0.9000$ ($90\\%$)",
      "$0.9000$ ($72\\%$)",
      "$0.8500$ ($85\\%$)"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Áp dụng công thức Precision:
$$\\text{Precision} = \\frac{TP}{TP + FP}$$
* $TP = 18$ (bệnh nhân mắc bệnh được mô hình phát hiện đúng).
* $FP = 8$ (người khỏe mạnh bị mô hình báo nhầm là mắc bệnh).
* Tổng số ca mô hình báo động mắc bệnh: $TP + FP = 18 + 8 = 26$.
$$\\text{Precision} = \\frac{18}{26} \\approx 0.6923 \\quad (69.23\\%)$$`
  },

  296: {
    question: "Với ma trận nhầm lẫn ở câu trước ($TP = 18, FN = 2, FP = 8, TN = 72$), độ đo Recall (Độ nhạy) của mô hình là bao nhiêu?",
    options: [
      "$0.9000$ ($90\\%$)",
      "$0.6923$ ($69.23\\%$)",
      "$0.8000$ ($80\\%$)",
      "$0.9500$ ($95\\%$)"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Áp dụng công thức Recall:
$$\\text{Recall} = \\frac{TP}{TP + FN}$$
* $TP = 18$ (bắt đúng bệnh nhân ung thư).
* $FN = 2$ (bỏ sót 2 bệnh nhân ung thư).
* Tổng số bệnh nhân ung thư thực tế ngoài đời: $TP + FN = 18 + 2 = 20$.
$$\\text{Recall} = \\frac{18}{20} = 0.9000 \\quad (90.0\\%)$$
👉 Mô hình đã quét sạch và phát hiện được $90\\%$ tổng số ca bệnh.`
  },

  297: {
    question: "Với mô hình có $\\text{Precision} = 0.6923$ và $\\text{Recall} = 0.9000$, điểm số $F_1$-score xấp xỉ bằng bao nhiêu?",
    options: [
      "$0.7826$ (xấp xỉ $78.3\\%$)",
      "$0.7961$ (Trung bình cộng)",
      "$0.6230$",
      "$0.8500$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Công thức Trung bình điều hòa $F_1$-Score:
$$F_1 = 2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}}$$
Thay số:
$$F_1 = 2 \\cdot \\frac{0.6923 \\times 0.9000}{0.6923 + 0.9000} = 2 \\cdot \\frac{0.62307}{1.5923} \\approx 0.7826 \\quad (78.26\\%)$$
* Chú ý: Nếu lấy trung bình cộng thông thường $\\frac{0.6923 + 0.9}{2} \\approx 0.7961$ là sai công thức $F_1$!`
  },

  298: {
    question: "Độ đặc hiệu (Specificity hay True Negative Rate - TNR) đo lường điều gì trong bài toán y tế?",
    options: [
      "Tỷ lệ những người thực sự khỏe mạnh được mô hình xác nhận chính xác là Âm tính: $\\text{TNR} = \\frac{TN}{TN + FP}$",
      "Tỷ lệ những người bị bệnh được phát hiện",
      "Tổng số ca đoán đúng trên toàn bộ mẫu",
      "Tỷ lệ người khỏe bị báo nhầm là có bệnh"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
$$\\text{Specificity} = \\text{TNR} = \\frac{TN}{TN + FP}$$
* Mẫu số $(TN + FP)$ là **toàn bộ những người THỰC TẾ KHỎE MẠNH (Âm tính)** ngoài đời.
* Tử số $TN$ là số người khỏe mạnh được mô hình kết luận là Khỏe mạnh.
* **Ý nghĩa:** Specificity đo lường khả năng **bảo vệ và nhận diện đúng người không có bệnh**, tránh gây hoang mang lo lắng không cần thiết cho người khỏe mạnh.`
  },

  299: {
    question: "Tỷ lệ dương tính giả (False Positive Rate - FPR) có quan hệ như thế nào với Độ đặc hiệu (Specificity)?",
    options: [
      "$\\text{FPR} = 1 - \\text{Specificity} = \\frac{FP}{FP + TN}$",
      "$\\text{FPR} = 1 + \\text{Specificity}$",
      "$\\text{FPR} = \\frac{1}{\\text{Specificity}}$",
      "$\\text{FPR} = \\text{Specificity} \\times \\text{Recall}$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Trong toàn bộ nhóm người khỏe mạnh ngoài đời $(FP + TN)$:
* Có người được xác nhận khỏe mạnh đúng ($TN$): Chiếm tỷ lệ Specificity $= \\frac{TN}{FP + TN}$.
* Có người bị báo nhầm là mắc bệnh ($FP$): Chiếm tỷ lệ $\\text{FPR} = \\frac{FP}{FP + TN}$.
* Vì hai nhóm này bù trừ hoàn hảo cho nhau trong tập người khỏe mạnh:
  $$\\text{FPR} + \\text{Specificity} = \\frac{FP + TN}{FP + TN} = 1.0$$
  $$\\implies \\text{FPR} = 1 - \\text{Specificity}$$`
  },

  300: {
    question: "Hai trục tọa độ của Đường cong Đặc trưng Hoạt động của Bộ thu (ROC Curve) biểu diễn hai đại lượng nào?",
    options: [
      "Trục tung (Y) là True Positive Rate (TPR / Recall), Trục hoành (X) là False Positive Rate (FPR)",
      "Trục tung là Precision, Trục hoành là Recall",
      "Trục tung là Accuracy, Trục hoành là Số lượng đặc trưng",
      "Trục tung là Loss, Trục hoành là Epochs"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Đường cong ROC vẽ đồ thị hiệu năng phân loại tại **tất cả các ngưỡng quyết định (Threshold)** từ 0 đến 1:
* **Trục tung (Y):** $TPR = \\text{Recall} = \\frac{TP}{TP + FN}$ (Tỷ lệ bắt đúng ca bệnh). Càng cao càng tốt.
* **Trục hoành (X):** $FPR = 1 - \\text{Specificity} = \\frac{FP}{FP + TN}$ (Tỷ lệ báo động nhầm người khỏe). Càng thấp càng tốt.
* Đường cong lý tưởng sẽ phồng mạnh lên góc trên bên trái.`
  },

  301: {
    question: "Một bộ phân loại nhị phân ngẫu nhiên thuần túy (Random Guessing như tung đồng xu may rủi) sẽ có diện tích dưới đường cong ROC (ROC-AUC) bằng bao nhiêu?",
    options: [
      "$\\text{AUC} = 0.5$ (đường chéo nối từ $(0,0)$ đến $(1,1)$)",
      "$\\text{AUC} = 1.0$",
      "$\\text{AUC} = 0.0$",
      "$\\text{AUC} = -1.0$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Khi tung đồng xu may rủi 50/50, tỷ lệ bắt đúng ca bệnh ($TPR$) luôn bằng đúng tỷ lệ báo động nhầm ($FPR$):
  $$TPR = FPR$$
* Đồ thị của nó là **đường chéo 45 độ** nối từ gốc tọa độ $(0, 0)$ lên góc $(1, 1)$.
* Diện tích tam giác dưới đường chéo này chiếm đúng một nửa hình vuông đơn vị:
  $$\\text{AUC} = \\frac{1}{2} \\times 1 \\times 1 = 0.5$$
* 👉 Nếu mô hình máy học của bạn có $\\text{AUC} \\approx 0.5$, nghĩa là nó học hành chẳng ra gì, chỉ tương đương với trò tung đồng xu hên xui!`
  },

  302: {
    question: "Tọa độ điểm lý tưởng hoàn hảo không có bất kỳ sai số nào trên không gian ROC Curve là điểm nào?",
    options: [
      "$(0, 1)$",
      "$(1, 1)$",
      "$(0, 0)$",
      "$(0.5, 0.5)$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Mô hình hoàn hảo không bao giờ mắc lỗi:
* Báo động nhầm $FP = 0 \\implies FPR = 0$ (nằm trên trục tung $X = 0$).
* Bắt đúng $100\\%$ không bỏ sót $FN = 0 \\implies TPR = 1.0$ (nằm ở đỉnh cao nhất $Y = 1.0$).
* 👉 Giao điểm là **$(X=0, Y=1)$ ở góc trên cùng bên trái** của đồ thị ROC.
* Đường cong của mô hình hoàn hảo sẽ đi thẳng đứng từ $(0,0) \\to (0,1)$ rồi đi ngang sang $(1,1)$, bao trùm $100\\%$ diện tích $\\implies \\text{AUC} = 1.0$.`
  },

  303: {
    question: "Khi tập dữ liệu cực kỳ mất cân bằng (Severe Class Imbalance, ví dụ bài toán phát hiện giao dịch gian lận chiếm $0.01\\%$), đồ thị nào phản ánh trung thực hiệu năng mô hình hơn ROC Curve?",
    options: [
      "Đường cong Precision-Recall (PR Curve và PR-AUC)",
      "Đường cong ROC thông thường",
      "Biểu đồ phân tán Scatter Plot",
      "Biểu đồ Pareto"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
#### ⚠️ Điểm yếu của ROC Curve trên dữ liệu cực kỳ lệch lớp:
* Mẫu số của $FPR$ là $(TN + FP)$. Vì số lượng mẫu âm tính ($TN$) quá khổng lồ (hàng triệu giao dịch bình thường), nên dù mô hình có báo nhầm $FP = 100$ lần, mẫu số quá lớn vẫn làm cho $FPR \\approx 0$ $\\implies$ **Đường ROC vẫn cong đẹp ảo và AUC vẫn $> 0.95$!**
* **Cứu cánh PR Curve (Precision vs Recall):**
  - Cả Precision và Recall đều tập trung trực tiếp vào **Lớp Dương tính thiểu số ($TP$)**.
  - $FP$ được so sánh trực tiếp với $TP$ chứ không bị $TN$ nuốt chửng.
  - 👉 Khi dữ liệu cực kỳ mất cân bằng, **PR-AUC là thước đo phản ánh trung thực bản chất mô hình**.`
  },

  304: {
    question: "Trong đánh giá phân loại đa lớp, sự khác biệt giữa Macro-Averaged F1 và Weighted-Averaged F1 là gì?",
    options: [
      "Macro-F1 gán trọng số ngang nhau cho mọi lớp bất kể số lượng mẫu, còn Weighted-F1 gán trọng số cho từng lớp theo tỷ lệ số lượng mẫu thực tế của lớp đó",
      "Macro-F1 chỉ áp dụng cho 2 lớp",
      "Weighted-F1 luôn nhỏ hơn Macro-F1",
      "Hai chỉ số hoàn toàn giống nhau"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Macro-F1 (Bình đẳng tuyệt đối):**
  $$\\text{Macro-F1} = \\frac{1}{K} \\sum_{k=1}^K F_{1, k}$$
  Mỗi lớp có trọng số đúng $\\frac{1}{K}$. Lớp có 10 mẫu cũng quan trọng ngang lớp có 10.000 mẫu.
* **Weighted-F1 (Có trọng số theo quy mô):**
  $$\\text{Weighted-F1} = \\sum_{k=1}^K \\frac{n_k}{N} F_{1, k}$$
  Lớp đông dân chiếm tỷ trọng lớn trong điểm số. Thích hợp khi bạn chấp nhận lớp nhiều mẫu quan trọng hơn lớp ít mẫu.`
  },

  305: {
    question: "Hệ số xác định $R^2$ (R-squared) trong bài toán hồi quy được tính bằng công thức nào?",
    options: [
      "$R^2 = 1 - \\frac{SS_{\\text{res}}}{SS_{\\text{tot}}} = 1 - \\frac{\\sum (y_i - \\hat{y}_i)^2}{\\sum (y_i - \\bar{y})^2}$",
      "$R^2 = \\frac{SS_{\\text{res}}}{SS_{\\text{tot}}}$",
      "$R^2 = 1 - \\frac{\\sum |y_i - \\hat{y}_i|}{\\sum |y_i - \\bar{y}|}$",
      "$R^2 = \\frac{\\sum (\\hat{y}_i - \\bar{y})^2}{\\sum (y_i - \\hat{y}_i)^2}$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* $SS_{\\text{res}} = \\sum_{i=1}^n (y_i - \\hat{y}_i)^2$: Tổng bình phương sai số phần dư của mô hình của bạn.
* $SS_{\\text{tot}} = \\sum_{i=1}^n (y_i - \\bar{y})^2$: Tổng bình phương biến thiên của dữ liệu quanh giá trị trung bình $\\bar{y}$.
* Phân số $\\frac{SS_{\\text{res}}}{SS_{\\text{tot}}}$ là tỷ lệ sai số chưa giải thích được.
* Lấy $1$ trừ đi phân số này cho ta **tỷ lệ phương sai của $y$ đã được mô hình giải thích thành công**.`
  },

  306: {
    question: "Hệ số $R^2$ có thể nhận giá trị âm ($R^2 < 0$) hay không? Khi nào điều này xảy ra?",
    options: [
      "Có thể âm, xảy ra khi mô hình dự đoán tệ hại đến mức sai số của nó còn lớn hơn cả sai số khi dự đoán bằng giá trị trung bình $\\bar{y}$ ($SS_{\\text{res}} > SS_{\\text{tot}}$)",
      "Không bao giờ âm vì nó là bình phương",
      "Chỉ âm khi dữ liệu có chứa số âm",
      "Chỉ âm trong bài toán phân loại"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
⚠️ **Cạm bẫy trắc nghiệm kinh điển:** Nhiều người thấy chữ có số mũ 2 ($R^2$) liền tưởng nó luôn dương $\\ge 0$. **ĐÓ LÀ SAI LẦM!**
* Hãy nhìn vào công thức: $R^2 = 1 - \\frac{SS_{\\text{res}}}{SS_{\\text{tot}}}$.
* Nếu bạn dùng một mô hình dự đoán tồi tệ (hoặc đánh giá trên tập Test mà mô hình bị Overfitting nặng):
  $$SS_{\\text{res}} > SS_{\\text{tot}} \\implies \\frac{SS_{\\text{res}}}{SS_{\\text{tot}}} > 1 \\implies R^2 < 0!$$
* **Ý nghĩa:** $R^2 < 0$ là một lời cảnh báo nghiêm khắc: *"Mô hình của bạn còn tệ hơn cả một người lười biếng chỉ biết lấy trung bình cộng $\\bar{y}$ phán bừa!"*`
  },

  307: {
    question: "Tại sao chỉ số $R^2$ Hiệu chỉnh (Adjusted $R^2$) lại được ưa chuộng hơn $R^2$ thông thường trong hồi quy tuyến tính bội?",
    options: [
      "Vì nó áp dụng cơ chế phạt đối với việc thêm các biến đặc trưng vô dụng vào mô hình, giúp ngăn chặn hiện tượng Overfitting",
      "Vì nó luôn đạt giá trị bằng 1.0",
      "Vì nó có thể tính toán mà không cần dữ liệu nhãn",
      "Vì nó chuyển đổi biến định tính thành biến định lượng"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
$$\\text{Adjusted } R^2 = 1 - (1 - R^2) \\frac{n - 1}{n - p - 1}$$
* Khi thêm một biến mới $x_{new}$:
  - $R^2$ luôn có khuynh hướng tăng giả tạo do tối ưu toán học trên tập Train.
  - Nhưng trong công thức Adjusted $R^2$, số lượng biến $p$ tăng làm mẫu số $(n - p - 1)$ giảm $\\to$ nhân hệ số phạt lớn hơn.
  - Nếu biến mới không giúp giảm sai số $SS_{\\text{res}}$ một cách đáng kể, **Adjusted $R^2$ sẽ giảm ngay lập tức**!
* 👉 Nó đóng vai trò như chiếc phanh hãm giúp người kỹ sư biết khi nào nên dừng lại không thêm biến rác.`
  },

  308: {
    question: "Khi đánh giá bài toán hồi quy, trường hợp nào ta NÊN sử dụng Sai số tuyệt đối trung bình (MAE) thay cho RMSE?",
    options: [
      "Khi dữ liệu thực tế chứa nhiều điểm ngoại lai (Outliers) và ta không muốn các sai số cá biệt này bị phóng đại quá mức làm sai lệch đánh giá tổng thể",
      "Khi cần tính đạo hàm liên tục",
      "Khi bài toán yêu cầu phạt thật nặng các sai số lớn",
      "Khi tất cả các sai số đều nhỏ hơn 1"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **RMSE** dùng bình phương sai số: Lệch 10 đơn vị phạt $10^2 = 100$. Nếu tập dữ liệu có một vài mẫu bị nhập nhầm số liệu (ngoại lai), RMSE sẽ tăng vọt và biến tướng, khiến mô hình bị đánh giá là rất tệ dù nó dự đoán tốt trên $99\\%$ các mẫu còn lại.
* **MAE** đo trực tiếp độ lệch tuyến tính: Lệch 10 chỉ tính là 10. Nó không phóng đại các điểm dị biệt.
* 👉 Do đó, khi dữ liệu nhiều nhiễu ngoại lai không thể lọc bỏ, **MAE là thước đo trung thực và bền vững nhất**.`
  },

  309: {
    question: "Một kỹ sư xây dựng hệ thống phát hiện giao dịch rửa tiền. Nếu hệ thống bỏ sót một vụ rửa tiền (False Negative), ngân hàng sẽ bị phạt hàng triệu USD. Kỹ sư này cần tối ưu hóa độ đo nào?",
    options: [
      "Recall (Độ nhạy), nhằm giảm thiểu tối đa các ca bỏ sót (False Negative)",
      "Precision",
      "Specificity",
      "Accuracy"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Bài toán an ninh, gian lận, rửa tiền: Bỏ sót ($FN$) là thảm họa bị phạt tiền khủng khiếp hoặc vi phạm pháp luật quốc tế.
* Báo nhầm ($FP$): Nhân viên ngân hàng chỉ cần gọi điện cho khách hàng xác nhận lại trong 2 phút.
* Vì hậu quả của $FN$ nặng nề hơn hàng ngàn lần so với $FP$, mục tiêu số 1 bắt buộc là **tối đa hóa Recall**!`
  },

  310: {
    question: "Ngược lại, trong bài toán gợi ý video YouTube hoặc gắn cờ Spam tự động, nếu hệ thống gắn nhầm cờ vi phạm cho một video hợp lệ (False Positive), người sáng tạo nội dung sẽ kiện và bỏ nền tảng. Hệ thống này cần ưu tiên độ đo nào?",
    options: [
      "Precision, nhằm bảo đảm những nội dung bị gắn cờ chắc chắn là vi phạm thực sự",
      "Recall",
      "MAE",
      "Log-Likelihood"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Khi chi phí của việc Báo nhầm (False Positive - $FP$) quá đắt: mất khách hàng, mất đối tác, gây trải nghiệm người dùng tệ hại.
* Hệ thống cần phương châm: *"Thà bỏ sót một vài video vi phạm để xét duyệt thủ công, còn hơn là cấm nhầm một kênh YouTube triệu subs hợp pháp!"*
* Vì cần hạn chế tối đa $FP$, **Precision là chỉ số sống còn cần tối ưu hóa**.`
  },

  311: {
    question: "Giả sử một mô hình Logistic Regression dự đoán xác suất khách hàng mua hàng là $p = 0.8$. Giá trị Tỷ số khả dĩ (Odds) tương ứng là bao nhiêu?",
    options: [
      "$4.0$",
      "$0.2$",
      "$0.8$",
      "$2.5$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Áp dụng công thức Tỷ số Odds:
$$\\text{Odds} = \\frac{p}{1 - p}$$
Thay $p = 0.8$:
$$\\text{Odds} = \\frac{0.8}{1 - 0.8} = \\frac{0.8}{0.2} = 4.0$$
* **Ý nghĩa:** Khả năng khách hàng quyết định mua hàng **gấp 4 lần** khả năng khách hàng không mua!`
  },

  312: {
    question: "Hiện tượng 'Rò rỉ dữ liệu qua biến đặc trưng' (Target Leakage via features) xảy ra trong trường hợp nào sau đây?",
    options: [
      "Một biến đặc trưng đưa vào huấn luyện lại chứa thông tin chỉ có thể biết được SAU KHI biến cố mục tiêu đã xảy ra",
      "Có quá ít biến đặc trưng trong tập dữ liệu",
      "Tất cả các biến đặc trưng đều có phân phối chuẩn",
      "Mô hình được huấn luyện bằng GPU"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
#### ⚠️ Ví dụ kinh điển về Target Leakage:
* Bạn xây dựng mô hình dự đoán: *"Bệnh nhân bị viêm phổi có phải nhập viện điều trị nội trú hay không ($y \\in \\{0, 1\\}$)"*.
* Trong dữ liệu có cột: \`so_ngay_uong_thuoc_tai_giuong_benh\`.
* Biến này **chỉ tồn tại sau khi bệnh nhân ĐÃ NHẬP VIỆN RỒI**!
* Khi đưa biến này vào train, mô hình đạt Accuracy $100\\%$ rất dễ dàng (vì cứ có số ngày nằm viện $> 0$ là nhập viện).
* Nhưng khi triển khai tại phòng khám đón tiếp bệnh nhân mới, biến này chưa hề có $\\implies$ Mô hình sụp đổ hoàn toàn!`
  },

  313: {
    question: "Trong Hồi quy Ridge, nếu ta chuẩn hóa ma trận đặc trưng $X$ sao cho $X^T X = I$ (các đặc trưng trực chuẩn hoàn toàn), nghiệm $w^*_{\\text{Ridge}}$ có quan hệ gì với nghiệm $w^*_{\\text{OLS}}$?",
    options: [
      "$w^*_{\\text{Ridge}} = \\frac{1}{1 + \\lambda} w^*_{\\text{OLS}}$ (thu nhỏ tuyến tính theo một tỷ lệ cố định)",
      "$w^*_{\\text{Ridge}} = (1 + \\lambda) w^*_{\\text{OLS}}$",
      "$w^*_{\\text{Ridge}} = w^*_{\\text{OLS}} - \\lambda$",
      "$w^*_{\\text{Ridge}} = w^*_{\\text{OLS}}$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Xét công thức nghiệm đóng của Ridge:
$$w^*_{\\text{Ridge}} = (X^TX + \\lambda I)^{-1} X^Ty$$
* Khi các cột của $X$ trực chuẩn ($X^TX = I$):
  $$(X^TX + \\lambda I) = I + \\lambda I = (1 + \\lambda) I$$
* Nghịch đảo của một ma trận nhân với số vô hướng:
  $$((1 + \\lambda) I)^{-1} = \\frac{1}{1 + \\lambda} I$$
* Thay vào công thức:
  $$w^*_{\\text{Ridge}} = \\frac{1}{1 + \\lambda} I X^Ty = \\frac{1}{1 + \\lambda} (X^TX)^{-1} X^Ty = \\frac{1}{1 + \\lambda} w^*_{\\text{OLS}}$$
* 👉 Khi các đặc trưng trực giao độc lập, Hồi quy Ridge có tác dụng **co nhỏ đồng đều tất cả các trọng số theo đúng tỷ số $\\frac{1}{1 + \\lambda}$**!`
  },

  314: {
    question: "Thuật toán Coordinate Descent giải bài toán tối ưu hóa của Lasso bằng cách nào?",
    options: [
      "Tối ưu hóa từng trọng số $w_j$ một lần trong khi cố định tất cả các trọng số còn lại, lặp qua tất cả các tọa độ cho đến khi hội tụ",
      "Tính nghịch đảo của toàn bộ ma trận dữ liệu",
      "Lấy tích phân của hàm mật độ xác suất",
      "Thực hiện phép xoay ma trận ngẫu nhiên"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Vì Lasso ($L_1$) không có nghiệm đóng và không khả vi tại 0 trên không gian nhiều chiều, thuật toán **Coordinate Descent (Hạ theo từng tọa độ)** giải quyết bài toán bằng chiến thuật "chia để trị":
  1. Cố định $p - 1$ trọng số còn lại như các hằng số.
  2. Lúc này hàm mất mát chỉ còn là hàm 1 biến theo duy nhất $w_j$.
  3. Bài toán 1 biến này có nghiệm giải tích chính xác thông qua toán tử **Soft-Thresholding Operator**:
     $$S(z, \\lambda) = \\text{sign}(z) \\max(0, |z| - \\lambda)$$
  4. Lần lượt cập nhật $w_1, w_2, \\dots, w_p$ rồi quay lại vòng mới cho tới khi toàn bộ vector trọng số không đổi nữa.
* Thuật toán này cực kỳ ổn định và chạy rất nhanh với dữ liệu thưa.`
  },

  315: {
    question: "Khẳng định nào sau đây về Hồi quy Logistic là HOÀN TOÀN CHÍNH XÁC?",
    options: [
      "Logistic Regression là một bộ phân loại TUYẾN TÍNH (Linear Classifier) vì biên quyết định phân chia các lớp là một siêu phẳng $w^Tx = 0$, mặc dù đầu ra xác suất được biến đổi phi tuyến qua hàm Sigmoid",
      "Logistic Regression là một mô hình phi tuyến có biên quyết định hình đa giác",
      "Logistic Regression chỉ phân loại được dữ liệu 1 chiều",
      "Logistic Regression không cần học trọng số $w$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Rất nhiều sinh viên nhầm lẫn: Thấy hàm Sigmoid $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ uốn lượn cong cong thì vội vàng kết luận Logistic Regression là "mô hình phân loại phi tuyến". **ĐÓ LÀ BẪY THI!**
* **Bản chất thực sự:**
  - Ranh giới để phân chia giữa việc phán đoán nhãn $1$ và nhãn $0$ là phương trình:
    $$P(y=1|x) = 0.5 \\iff \\sigma(w^Tx) = 0.5 \\iff w^Tx = w_0 + w_1x_1 + \\dots + w_px_p = 0$$
  - Phương trình $w^Tx = 0$ biểu diễn **một đường thẳng hoặc một siêu phẳng hoàn toàn phẳng (tuyến tính)** trong không gian đặc trưng.
  - Mô hình chỉ có khả năng phân tách tốt các tập dữ liệu có thể tách biệt tuyến tính (Linearly Separable).
* 👉 Do đó, theo định nghĩa toán học chuẩn, **Logistic Regression là một mô hình Phân loại Tuyến tính (Linear Classifier)**!`
  }
};
