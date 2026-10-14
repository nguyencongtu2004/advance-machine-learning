module.exports = {
  61: {
    question: "Hàm mất mát của mô hình Hồi quy tuyến tính theo phương pháp OLS (Ordinary Least Squares) là gì?",
    options: [
      "Tổng trị tuyệt đối sai số (MAE)",
      "Tổng bình phương sai số phần dư (SSE / RSS): $\\sum_{i=1}^n (y_i - \\hat{y}_i)^2$",
      "Binary Cross-Entropy Loss",
      "Hàm mất mát bản lề (Hinge Loss)"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Trong bài toán Hồi quy tuyến tính, ta muốn tìm đường thẳng $\\hat{y} = Xw$ khớp nhất với dữ liệu thực tế $y$. 
* **Phần dư (Residual):** $e_i = y_i - \\hat{y}_i$ là khoảng cách chênh lệch giữa giá trị thực tế và giá trị mô hình dự đoán.
* **Tại sao phải là "Bình phương tối thiểu" (Least Squares)?**
  1. **Tránh triệt tiêu sai số:** Nếu căn nhà thứ nhất đoán thiếu 2 tỷ ($e_1 = +2$), nhà thứ hai đoán thừa 2 tỷ ($e_2 = -2$), cộng đại số lại sẽ bằng $0 \\implies$ máy tính tưởng mô hình đoán hoàn hảo $100\\%$! Do đó phải bình phương để mọi sai số đều dương.
  2. **Quy luật phạt nặng sai số lớn:** Lệch 1 tỷ phạt $1^2 = 1$, nhưng lệch 4 tỷ phạt $4^2 = 16$ (phạt gấp 16 lần), ép mô hình không được phép đoán quá lệch ở bất kỳ mẫu nào.
  3. **Hàm toán học trơn mượt:** Parabol bậc hai có đạo hàm liên tục, cực kỳ dễ giải tích để tìm nghiệm cực tiểu.

### 📐 Biểu diễn dạng ma trận:
$$J(w) = \\|y - Xw\\|_2^2 = (y - Xw)^T(y - Xw) = y^Ty - 2w^TX^Ty + w^TX^TXw$$
* Chuẩn $L_2$ chính là khoảng cách Euclid/Pytago quen thuộc giữa vector nhãn thật $y$ và vector dự đoán $\\hat{y} = Xw$.`
  },

  62: {
    question: "Hệ phương trình chuẩn (Normal Equation) rút ra từ việc đặt gradient của hàm mất mát OLS bằng $0$ là gì?",
    options: [
      "$Xw = y$",
      "$X^T X w = X^T y$",
      "$X^T y w = X^T X$",
      "$(X^T X)^{-1} w = y$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Để tìm trọng số $w$ làm hàm mất mát $J(w) = y^Ty - 2w^TX^Ty + w^TX^TXw$ đạt giá trị nhỏ nhất, ta lấy đạo hàm (gradient) theo vector $w$ và cho bằng $0$:
$$\\nabla_w J(w) = -2X^Ty + 2X^TXw = 0$$
Chuyển vế đổi dấu và triệt tiêu hệ số 2:
$$X^T X w = X^T y$$
Phương trình này trong đại số tuyến tính được gọi là **Hệ phương trình chuẩn (Normal Equation)**.

> 💡 **Vì sao có chữ $T$ (chuyển vị) ở $X^T$?**  
> Vì ma trận đặc trưng $X$ có kích thước $(n \\times p)$ (với $n$ mẫu, $p$ đặc trưng). Ta không thể nhân trực tiếp $X$ với $y$ kích thước $(n \\times 1)$, mà bắt buộc phải chuyển vị thành $X^T$ kích thước $(p \\times n)$ để thực hiện phép nhân ma trận $(p \\times n) \\times (n \\times 1) \\to (p \\times 1)$ khớp với số chiều của vector trọng số $w$.`
  },

  63: {
    question: "Công thức nghiệm đóng giải tích (Closed-form solution) của hồi quy tuyến tính OLS là gì?",
    options: [
      "$w^* = X^T y (X^T X)^{-1}$",
      "$w^* = (X^T X)^{-1} X^T y$",
      "$w^* = (X X^T)^{-1} X y$",
      "$w^* = X (X^T X)^{-1} y$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Từ Hệ phương trình chuẩn:
$$X^T X w = X^T y$$
Khi ma trận vuông $(X^T X)$ kích thước $(p \\times p)$ khả nghịch (nghịch đảo được), ta nhân ma trận nghịch đảo $(X^T X)^{-1}$ vào **bên trái** cả hai vế:
$$(X^T X)^{-1} (X^T X) w = (X^T X)^{-1} X^T y$$
Vì $(X^T X)^{-1} (X^T X) = I$ (ma trận đơn vị), ta rút ra công thức nghiệm đóng kinh điển:
$$w^* = (X^T X)^{-1} X^T y$$

⚠️ **Bẫy trắc nghiệm:** Phép nhân ma trận **KHÔNG CÓ TÍNH CHẤT GIAO HOÁN** ($AB \\ne BA$), do đó $(X^T X)^{-1}$ bắt buộc phải đứng trước $X^T y$, viết ngược thành $X^Ty (X^TX)^{-1}$ là sai hoàn toàn về quy tắc nhân ma trận!`
  },

  64: {
    question: "Điều kiện BẮT BUỘC để nghiệm đóng giải tích của OLS $w^* = (X^T X)^{-1} X^T y$ tồn tại duy nhất là gì?",
    options: [
      "Ma trận $X^T X$ phải khả nghịch (các cột của $X$ độc lập tuyến tính, số mẫu $n \\ge$ số đặc trưng $p$)",
      "Số đặc trưng $p$ phải lớn hơn số mẫu $n$",
      "Tất cả các đặc trưng phải tuân theo phân phối chuẩn",
      "Hệ số chặn bias $w_0$ phải bằng $0$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Nghiệm đóng chỉ tồn tại khi ta tính được ma trận nghịch đảo $(X^TX)^{-1}$.
Ma trận vuông $(X^TX)$ kích thước $(p \\times p)$ **khả nghịch khi và chỉ khi**:
1. $\\det(X^TX) \\ne 0$ (định thức khác 0, ma trận không suy biến - non-singular).
2. Toàn bộ $p$ cột đặc trưng của $X$ phải **độc lập tuyến tính** (không có cột nào là tổ hợp tuyến tính của các cột khác, rank $(X) = p$).
3. **Số mẫu quan sát $n$ phải lớn hơn hoặc bằng số đặc trưng $p$ ($n \\ge p$)**.

### ⚠️ Bẫy thi kinh điển:
* Nếu $n < p$ (số đặc trưng nhiều hơn số dòng dữ liệu), ma trận $X^TX$ chắc chắn bị thiếu hạng (rank $< p$) và **không thể nghịch đảo**.
* Nếu xảy ra **Hiện tượng đa cộng tuyến hoàn hảo** (ví dụ cột diện tích $m^2$ và cột diện tích $cm^2$), hai cột tỷ lệ nhau $\\implies \\det(X^TX) = 0$, OLS bó tay.
* 👉 Giải pháp khi $X^TX$ suy biến: Dùng giả nghịch đảo Moore-Penrose $X^+$ hoặc chuyển sang **Hồi quy Ridge** $(X^TX + \\lambda I)^{-1}X^Ty$.`
  },

  65: {
    question: "Về mặt hình học, vector dự đoán $\\hat{y}^* = Xw^*$ trong nghiệm OLS có mối quan hệ gì với vector nhãn thật $y$?",
    options: [
      "$\\hat{y}^*$ song song với vector $y$",
      "$\\hat{y}^*$ là hình chiếu trực giao (Orthogonal Projection) của vector $y$ lên không gian cột $\\text{Col}(X)$",
      "$\\hat{y}^*$ luôn có độ dài lớn hơn vector $y$",
      "$\\hat{y}^*$ vuông góc với vector $y$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Hãy tưởng tượng không gian cột $\\text{Col}(X)$ (chứa tất cả các tổ hợp tuyến tính $Xw$ mà mô hình có thể tạo ra) giống như **Mặt bàn phẳng**.
* Vector nhãn thực tế $y$ là một điểm lơ lửng **trên không trung** (bên ngoài mặt phẳng).
* Mục tiêu của OLS là tìm một điểm $\\hat{y} = Xw$ nằm trên mặt bàn sao cho khoảng cách tới $y$ là **ngắn nhất có thể**.
* Khoảng cách từ một điểm trên không xuống một mặt phẳng ngắn nhất khi và chỉ khi nó là **ĐƯỜNG CHIẾU VUÔNG GÓC**!
* 👉 Do đó, $\\hat{y}^* = Xw^*$ chính là **hình chiếu trực giao (Orthogonal Projection)** của $y$ lên không gian con $\\text{Col}(X)$. Ma trận chiếu là $P = X(X^TX)^{-1}X^T$ (Hat Matrix).`
  },

  66: {
    question: "Tại điểm cực tiểu OLS, vector phần dư $e = y - Xw^*$ có tính chất hình học nào đối với các cột của ma trận $X$?",
    options: [
      "Vector phần dư trùng với cột thứ nhất của $X$",
      "Vector phần dư trực giao (vuông góc) với mọi cột của ma trận $X$: $X^T (y - Xw^*) = 0$",
      "Vector phần dư có độ dài bằng 0 trên mọi bài toán",
      "Vector phần dư tạo góc 45 độ với các cột của $X$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Vì vector dự đoán $\\hat{y}^* = Xw^*$ là hình chiếu vuông góc của $y$ lên mặt phẳng $\\text{Col}(X)$, đoạn nối giữa giá trị thật và hình chiếu chính là **vector sai số phần dư**:
$$e = y - \\hat{y}^* = y - Xw^*$$
* Theo định lý hình học không gian, đoạn thẳng nối điểm đến hình chiếu vuông góc phải **trực giao (vuông góc)** với toàn bộ mặt phẳng $\\text{Col}(X)$.
* Vuông góc với mặt phẳng nghĩa là vuông góc với từng cột vector đặc trưng tạo nên mặt phẳng đó.
* Tích vô hướng của hai vector vuông góc luôn bằng $0$:
$$X^T e = 0 \\iff X^T (y - Xw^*) = 0 \\iff X^Ty - X^TXw^* = 0 \\iff X^TXw^* = X^Ty$$
👉 Cả 2 con đường: **Đạo hàm vi phân** và **Hình chiếu trực giao** đều dẫn đến chính xác cùng một phương trình $X^TXw = X^Ty$!`
  },

  67: {
    question: "Khi giả định sai số ngẫu nhiên $\\epsilon$ tuân theo phân phối chuẩn $\\epsilon \\sim \\mathcal{N}(0, \\sigma^2)$, việc tối đa hóa hàm Log-Likelihood (MLE) tương đương với điều gì?",
    options: [
      "Tối đa hóa phương sai của sai số",
      "Tối thiểu hóa tổng bình phương phần dư trong OLS",
      "Tối thiểu hóa số lượng biến đặc trưng",
      "Tối đa hóa chuẩn L1 của trọng số"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Phương trình thực tế: $y = Xw + \\epsilon$, trong đó $\\epsilon \\sim \\mathcal{N}(0, \\sigma^2)$ là nhiễu ngẫu nhiên độc lập (i.i.d).
* Hàm hợp lý Likelihood biểu thị xác suất xuất hiện toàn bộ tập dữ liệu:
$$L(w) = \\prod_{i=1}^n \\frac{1}{\\sqrt{2\\pi\\sigma^2}} \\exp\\left(-\\frac{(y_i - w^Tx_i)^2}{2\\sigma^2}\\right)$$
* Lấy Log-Likelihood tự nhiên ($\\ln$):
$$\\ln L(w) = -\\frac{n}{2}\\ln(2\\pi\\sigma^2) - \\frac{1}{2\\sigma^2} \\sum_{i=1}^n (y_i - w^Tx_i)^2$$
* Vì đại lượng $-\\frac{1}{2\\sigma^2}$ mang dấu âm, muốn **CỰC ĐẠI HÓA $\\ln L(w)$ (MLE)** thì bắt buộc phải **CỰC TIỂU HÓA tổng $\\sum_{i=1}^n (y_i - w^Tx_i)^2$ (chính là OLS)**!

> 🏹 **Ví dụ Bắn cung:** Muốn xác suất bắn trúng là lớn nhất (MLE), thì khoảng cách sai số từ hồng tâm tới các mũi tên phải là nhỏ nhất (OLS).`
  },

  68: {
    question: "Hàm mục tiêu của Hồi quy Ridge (Ridge Regression) bổ sung hình phạt nào vào sai số dữ liệu?",
    options: [
      "Hình phạt chuẩn L1: $\\lambda \\sum |w_j|$",
      "Hình phạt chuẩn L2: $\\lambda \\|w\\|_2^2 = \\lambda \\sum w_j^2$",
      "Hình phạt hỗn hợp L1 và L2",
      "Hình phạt số lượng đặc trưng khác không"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Hồi quy Ridge ($L_2$ Regularization) bổ sung thêm thành phần phạt bằng **bình phương độ lớn chuẩn $L_2$** của các trọng số:
$$J_{\\text{Ridge}}(w) = \\|y - Xw\\|_2^2 + \\lambda \\|w\\|_2^2 = \\sum_{i=1}^n (y_i - w^Tx_i)^2 + \\lambda \\sum_{j=1}^p w_j^2$$
* Siêu tham số $\\lambda \\ge 0$ (hoặc $\\alpha$) đóng vai trò là "mức phạt".
* Triết lý: *"Phạt đứa nào to đầu!"* - Ngăn không cho bất kỳ trọng số $w_j$ nào bùng nổ quá lớn khi các đặc trưng bị đa cộng tuyến.
* Lưu ý quan trọng: Hệ số chặn bias $w_0$ thường **không bị phạt** vì nó chỉ định vị mức nền của dữ liệu.`
  },

  69: {
    question: "Công thức nghiệm đóng giải tích của Hồi quy Ridge là gì?",
    options: [
      "$w^* = (X^T X + \\lambda I)^{-1} X^T y$",
      "$w^* = (X^T X - \\lambda I)^{-1} X^T y$",
      "$w^* = (X^T X)^{-1} X^T y + \\lambda I$",
      "$w^* = (X^T X + \\lambda I) X^T y$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Đạo hàm hàm mục tiêu của Ridge:
$$\\nabla_w J_{\\text{Ridge}}(w) = -2X^Ty + 2X^TXw + 2\\lambda w = 0$$
$$\\iff (X^TX + \\lambda I) w = X^Ty$$
Nhân ma trận nghịch đảo $(X^TX + \\lambda I)^{-1}$ vào hai vế:
$$w^*_{\\text{Ridge}} = (X^T X + \\lambda I)^{-1} X^T y$$

> 🛡️ **Ưu điểm vượt trội của Ridge so với OLS:**  
> Ma trận $(X^TX + \\lambda I)$ (với $\\lambda > 0$) cộng thêm một lượng dương vào đường chéo chính, biến nó thành ma trận **luôn đối xứng xác định dương $\\implies$ LUÔN KHẢ NGHỊCH 100%**, kể cả khi dữ liệu bị đa cộng tuyến hoặc $n < p$!`
  },

  70: {
    question: "Đặc tính nào sau đây là của Hồi quy Ridge khi nói về các hệ số trọng số $w$?",
    options: [
      "Triệt tiêu hoàn toàn một số hệ số về đúng bằng 0 để loại bỏ biến",
      "Thu nhỏ (co cụm) các hệ số về gần 0 nhưng KHÔNG BAO GIỜ bằng 0 tuyệt đối",
      "Luôn làm tăng độ lớn của các hệ số so với OLS",
      "Biến đổi mô hình tuyến tính thành mô hình phi tuyến"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Hình phạt $L_2$ ($\\sum w_j^2$) có dạng hình cầu/đường tròn trơn mượt không có đỉnh nhọn trên các trục tọa độ.
* Vùng nghiệm tiếp xúc của hàm mất mát và hình phạt $L_2$ thường rơi vào phần thân đường cong tròn chứ không nằm trên trục tọa độ.
* Do đó, Ridge có đặc tính **Weight Decay (Co trọng số)**: Nó ép các trọng số nhỏ đi rất nhiều để kiểm soát phương sai (Variance), nhưng **không triệt tiêu trọng số nào về đúng bằng 0**.
* 👉 Vì thế, Ridge **KHÔNG CÓ KHẢ NĂNG tự động lựa chọn đặc trưng (Feature Selection)**. Cả $p$ biến ban đầu vẫn nằm lại trong mô hình.`
  },

  71: {
    question: "Khi siêu tham số $\\lambda$ trong Ridge Regression tăng lên rất lớn ($\\lambda \\to \\infty$), điều gì sẽ xảy ra với mô hình?",
    options: [
      "Các trọng số $w_j \\to 0$ (trừ bias), mô hình dự đoán đường thẳng nằm ngang và bị Underfitting",
      "Các trọng số $w_j \\to \\infty$, mô hình bị Overfitting nghiêm trọng",
      "Mô hình trở về trạng thái nghiệm OLS thông thường",
      "Phương sai (Variance) của mô hình tăng vọt lên vô cùng"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Xét công thức $w^*_{\\text{Ridge}} = (X^TX + \\lambda I)^{-1} X^Ty$:
* Khi $\\lambda = 0$: Hình phạt biến mất, mô hình trở về đúng chuẩn **OLS thông thường** (dễ bị Overfitting nếu dữ liệu phức tạp).
* Khi $\\lambda \\to \\infty$: Mức phạt nặng tới mức việc giữ trọng số $w_j \\ne 0$ khiến hàm mất mát bùng nổ. Để tối thiểu hóa, mô hình bắt buộc phải ép toàn bộ $w_j \\to 0$ ($j \\ge 1$).
* Khi đó $\\hat{y} = w_0$ (đường thẳng nằm ngang bằng giá trị trung bình $\\bar{y}$), mô hình trở nên quá đơn giản $\\implies$ **Underfitting (Độ chệch Bias rất cao, Phương sai Variance rất thấp)**.`
  },

  72: {
    question: "Hàm mục tiêu của Hồi quy Lasso (Lasso Regression) sử dụng hình phạt nào sau đây?",
    options: [
      "Hình phạt chuẩn L2: $\\lambda \\sum w_j^2$",
      "Hình phạt chuẩn L1: $\\lambda \\|w\\|_1 = \\lambda \\sum_{j=1}^p |w_j|$",
      "Hình phạt chuẩn vô cùng $L_\\infty$",
      "Hình phạt chuẩn Frobenius"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Hồi quy Lasso (Least Absolute Shrinkage and Selection Operator) bổ sung hình phạt **chuẩn $L_1$** (tổng giá trị tuyệt đối của các trọng số):
$$J_{\\text{Lasso}}(w) = \\|y - Xw\\|_2^2 + \\lambda \\|w\\|_1 = \\sum_{i=1}^n (y_i - w^Tx_i)^2 + \\lambda \\sum_{j=1}^p |w_j|$$
* Chuẩn $L_1$ đo khoảng cách Manhattan (khoảng cách đi theo bàn cờ thành phố).
* Cũng như Ridge, tham số $\\lambda \\ge 0$ kiểm soát cường độ điều chuẩn.`
  },

  73: {
    question: "Tại sao Hồi quy Lasso có khả năng tự động thực hiện Lựa chọn đặc trưng (Feature Selection)?",
    options: [
      "Vì nó loại bỏ ngẫu nhiên 50% số đặc trưng trước khi huấn luyện",
      "Về mặt hình học, vùng ràng buộc chuẩn L1 có dạng hình thoi/đa diện với các đỉnh nhọn nằm ngay trên các trục tọa độ, dễ tạo ra nghiệm thưa (Sparse Solution $w_j = 0$)",
      "Vì nó sử dụng ma trận nghịch đảo để tính toán",
      "Vì nó chỉ chấp nhận các biến có tương quan âm"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Hình học trực quan:** Trong không gian 2 chiều $(w_1, w_2)$:
  - Vùng ràng buộc của Ridge ($w_1^2 + w_2^2 \\le C$) là **Hình tròn**.
  - Vùng ràng buộc của Lasso ($|w_1| + |w_2| \\le C$) là **Hình thoi (Diamond)** với 4 đỉnh nhọn cắm thẳng vào các trục tọa độ $(w_1=0$ hoặc $w_2=0)$.
* Khi các đường đồng mức elip của sai số OLS mở rộng ra từ tâm, điểm tiếp xúc đầu tiên với hình thoi xác suất cực cao sẽ va trúng một trong các **đỉnh nhọn**!
* Tại đỉnh nhọn trên trục tọa độ, tọa độ của các chiều khác bị triệt tiêu về **đúng bằng 0 tuyệt đối** ($w_j = 0$).
* 👉 Việc trọng số $w_j = 0$ đồng nghĩa với việc biến đặc trưng $x_j$ bị gạt bỏ hoàn toàn khỏi mô hình $\\implies$ **Tự động lựa chọn đặc trưng (Sparse Model)**!`
  },

  74: {
    question: "Khẳng định nào sau đây là ĐÚNG khi so sánh về nghiệm đóng giữa Ridge và Lasso?",
    options: [
      "Cả Ridge và Lasso đều có nghiệm đóng giải tích dạng ma trận",
      "Ridge có nghiệm đóng giải tích $(X^TX + \\lambda I)^{-1}X^Ty$, trong khi Lasso KHÔNG CÓ nghiệm đóng giải tích vì hàm trị tuyệt đối không khả vi tại 0",
      "Lasso có nghiệm đóng giải tích, còn Ridge phải giải bằng lặp",
      "Không có mô hình nào giải được bằng giải tích"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Ridge ($L_2$):** Hàm mục tiêu $w^2$ khả vi (có đạo hàm) liên tục ở mọi nơi $\\implies$ Đặt gradient bằng 0 giải được nghiệm đóng tường minh $w^* = (X^TX + \\lambda I)^{-1}X^Ty$.
* **Lasso ($L_1$):** Hàm trị tuyệt đối $|w|$ có điểm gấp khúc hình chữ V gãy nhọn tại $w = 0$, tại đó **đạo hàm không tồn tại (không khả vi)**.
* Do đó, Lasso **không thể đặt đạo hàm bậc nhất bằng 0 để giải ra công thức đóng**!
* 👉 Để tìm nghiệm Lasso, người ta phải dùng các thuật toán tối ưu số học như **Coordinate Descent (Hạ tọa độ)** hoặc **Subgradient Descent (Hạ dưới đạo hàm)**.`
  },

  75: {
    question: "Mô hình Elastic Net kết hợp hai thành phần điều chuẩn nào?",
    options: [
      "Chuẩn L1 (Lasso) và Chuẩn L2 (Ridge)",
      "Chuẩn L2 và Hàm mất mát Hinge",
      "Chuẩn L1 và Entropy",
      "Chuẩn L0 và Chuẩn L2"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Elastic Net là sự kết hợp dung hòa điểm mạnh của cả **Ridge ($L_2$)** và **Lasso ($L_1$)**:
$$J_{\\text{ElasticNet}}(w) = \\|y - Xw\\|_2^2 + \\lambda_1 \\|w\\|_1 + \\lambda_2 \\|w\\|_2^2$$
Thường được viết theo tỷ lệ $r \\in [0, 1]$ (l1_ratio):
$$J(w) = \\text{Loss} + \\alpha \\left( r \\|w\\|_1 + \\frac{1-r}{2} \\|w\\|_2^2 \\right)$$

> 💡 **Vì sao cần Elastic Net?**  
> Khi một nhóm biến đặc trưng có tương quan rất cao với nhau, Lasso thường chỉ bốc ngẫu nhiên đúng 1 biến và vứt bỏ toàn bộ các biến còn lại. Elastic Net khắc phục nhược điểm này bằng cách vừa tạo ra nghiệm thưa (nhờ $L_1$), vừa giữ lại cả nhóm đặc trưng tương quan (nhờ hiệu ứng gom cụm của $L_2$).`
  },

  76: {
    question: "Hàm kích hoạt Sigmoid trong Logistic Regression có công thức và miền giá trị là gì?",
    options: [
      "$\\sigma(z) = \\frac{1}{1 + e^{-z}}$, miền giá trị $(0, 1)$",
      "$\\sigma(z) = \\frac{e^z - e^{-z}}{e^z + e^{-z}}$, miền giá trị $(-1, 1)$",
      "$\\sigma(z) = \\max(0, z)$, miền giá trị $[0, +\\infty)$",
      "$\\sigma(z) = \\frac{1}{1 + e^z}$, miền giá trị $(-\\infty, +\\infty)$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Hàm Sigmoid (Logistic Function) đóng vai trò là "chiếc máy nén thần kỳ":
$$\\sigma(z) = \\frac{1}{1 + e^{-z}} = \\frac{e^z}{1 + e^z}$$
* **Miền giá trị:** $(0, 1)$ - Phù hợp hoàn hảo để biểu diễn xác suất $P(y=1|x)$.
* **Đặc điểm hình học:** Đồ thị cong hình chữ S, nhận điểm đối xứng tại $(0, 0.5)$.
* Khi $z \\to +\\infty \\implies e^{-z} \\to 0 \\implies \\sigma(z) \\to 1$.
* Khi $z \\to -\\infty \\implies e^{-z} \\to +\\infty \\implies \\sigma(z) \\to 0$.
* Khi $z = 0 \\implies \\sigma(0) = \\frac{1}{1 + 1} = 0.5$ (ngưỡng phân loại mặc định).`
  },

  77: {
    question: "Trong Logistic Regression, tại giá trị điểm số $z = w^T x = 0$, xác suất dự đoán $P(y = 1|x)$ bằng bao nhiêu?",
    options: [
      "$0.0$",
      "$0.5$",
      "$1.0$",
      "Không xác định"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Thay trực tiếp $z = 0$ vào hàm Sigmoid:
$$\\sigma(0) = \\frac{1}{1 + e^{-0}} = \\frac{1}{1 + 1} = \\frac{1}{2} = 0.5$$
* Điểm $z = 0 \\iff w^Tx = 0$ chính là phương trình của **Biên quyết định (Decision Boundary)**.
* Tại đúng ranh giới phân chia, mô hình hoàn toàn phân vân 50/50 giữa 2 lớp.
* Nếu $w^Tx > 0 \\implies P > 0.5 \\implies$ Phán đoán lớp $1$.
* Nếu $w^Tx < 0 \\implies P < 0.5 \\implies$ Phán đoán lớp $0$.`
  },

  78: {
    question: "Tỷ số Odds trong bài toán phân loại nhị phân được định nghĩa như thế nào?",
    options: [
      "Tỷ số giữa xác suất biến cố xảy ra và xác suất biến cố không xảy ra: $\\text{Odds} = \\frac{p}{1 - p}$",
      "Tỷ số giữa xác suất biến cố xảy ra và tổng số mẫu: $\\text{Odds} = \\frac{p}{N}$",
      "Hiệu số giữa hai xác suất: $\\text{Odds} = p - (1 - p)$",
      "Tích của hai xác suất: $\\text{Odds} = p(1 - p)$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Giả sử bạn chơi cờ vua 10 ván: Thắng 8 ván, Thua 2 ván.
  - **Xác suất thắng ($p$):** Lấy số ván thắng chia cho **tổng số ván**: $p = \\frac{8}{10} = 0.8$ ($80\\%$).
  - **Tỷ số Odds:** Lấy số ván thắng chia thẳng cho **số ván thua**:
    $$\\text{Odds} = \\frac{\\text{Thắng}}{\\text{Thua}} = \\frac{8}{2} = 4 = \\frac{p}{1 - p}$$
* **Ý nghĩa:** *"Cứ mỗi 1 lần thua, bạn sẽ thắng được 4 lần!"* (Cơ hội thắng gấp 4 lần cơ hội thua).
* Miền giá trị của Odds: $[0, +\\infty)$. Khi $p = 0.5 \\implies \\text{Odds} = 1$ (kèo cân 50/50).`
  },

  79: {
    question: "Đại lượng nào sau đây trong Logistic Regression có mối quan hệ TUYẾN TÍNH với các biến đặc trưng $x$?",
    options: [
      "Xác suất $p$",
      "Tỷ số Odds",
      "Log-odds (Hàm Logit): $\\ln\\left(\\frac{p}{1 - p}\\right)$",
      "Bình phương xác suất $p^2$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Hãy nhìn vào miền giá trị của các đại lượng:
* Đường thẳng $w^Tx$: Chạy thoải mái từ $-\\infty$ đến $+\infty$.
* Xác suất $p$: Bị nhốt chặt trong đoạn $[0, 1]$ (phi tuyến).
* Tỷ số Odds: Chạy từ $[0, +\\infty)$ (vẫn thiếu phần âm).
* Lấy logarit tự nhiên của Odds: **Logit** chạy từ $-\\infty$ đến $+\infty$!

Lúc này, ta mới có thể đặt dấu bằng với đường thẳng tuyến tính:
$$\\text{Logit}(p) = \\ln\\left(\\frac{p}{1 - p}\\right) = w_0 + w_1 x_1 + \\dots + w_p x_p = w^Tx$$
👉 Do đó, **Log-odds (Logit)** chính là đại lượng có quan hệ tuyến tính trực tiếp với các đặc trưng $x$. Giải ngược phương trình này ra tìm $p$, ta thu được hàm Sigmoid $p = \\frac{1}{1 + e^{-w^Tx}}$!`
  },

  80: {
    question: "Hàm mất mát Binary Cross-Entropy (BCE Loss) cho 1 mẫu dữ liệu có dạng công thức là gì?",
    options: [
      "$L = - [y \\ln(p) + (1 - y) \\ln(1 - p)]$",
      "$L = [y \\ln(p) - (1 - y) \\ln(1 - p)]$",
      "$L = (y - p)^2$",
      "$L = - [y \\ln(1 - p) + (1 - y) \\ln(p)]$"
    ],
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Công thức Binary Cross-Entropy (Log Loss) cho 1 mẫu:
$$L = - \\Big[ y \\ln(p) + (1 - y) \\ln(1 - p) \\Big]$$

#### 1. Cơ chế "Công tắc đèn":
Vì nhãn thực tế $y$ chỉ nhận giá trị $1$ hoặc $0$:
* Khi $y = 1$ (mẫu dương): $(1 - y) = 0 \\implies$ Nhánh 2 tắt, chỉ còn $L = -\\ln(p)$.
* Khi $y = 0$ (mẫu âm): $y = 0 \\implies$ Nhánh 1 tắt, chỉ còn $L = -\\ln(1 - p)$.

#### 2. Quy luật phạt tiền cực nặng ($-\\ln$):
* Nếu $y = 1$, mô hình đoán đúng $p = 1 \\implies \\text{Loss} = -\\ln(1) = 0$ (không bị phạt).
* Nếu $y = 1$, nhưng mô hình đoán sai bét $p \\to 0 \\implies \\text{Loss} = -\\ln(0) \\to +\\infty$ (phạt vô hạn)!
* Nhờ hàm logarit, mô hình bị trừng phạt cực kỳ nặng nề khi nó "tự tin cao độ vào một dự đoán sai".`
  }
};
