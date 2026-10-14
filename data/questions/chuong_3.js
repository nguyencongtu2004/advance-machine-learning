/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 3: CÁC MÔ HÌNH TUYẾN TÍNH & ĐÁNH GIÁ MÔ HÌNH
   - Số lượng: 90 câu
   - Nội dung: Hồi quy tuyến tính OLS, Ridge (L2), Lasso (L1), Elastic Net,
     Logistic Regression, Softmax Regression, Ma trận nhầm lẫn (Confusion Matrix),
     Metrics (Accuracy, Precision, Recall, F1, Specificity, ROC-AUC, PR-AUC, MSE, RMSE, MAE, R2),
     K-Fold, Stratified K-Fold, LOOCV, Data Leakage
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_3 = [
  {
    "id": 61,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hàm mất mát của mô hình Hồi quy tuyến tính theo phương pháp OLS (Ordinary Least Squares) là gì?",
    "options": [
      "Tổng trị tuyệt đối sai số (MAE)",
      "Tổng bình phương sai số phần dư (SSE / RSS): $\\sum_{i=1}^n (y_i - \\hat{y}_i)^2$",
      "Binary Cross-Entropy Loss",
      "Hàm mất mát bản lề (Hinge Loss)"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong bài toán Hồi quy tuyến tính, ta muốn tìm đường thẳng $\\hat{y} = Xw$ khớp nhất với dữ liệu thực tế $y$. \n* **Phần dư (Residual):** $e_i = y_i - \\hat{y}_i$ là khoảng cách chênh lệch giữa giá trị thực tế và giá trị mô hình dự đoán.\n* **Tại sao phải là \"Bình phương tối thiểu\" (Least Squares)?**\n  1. **Tránh triệt tiêu sai số:** Nếu căn nhà thứ nhất đoán thiếu 2 tỷ ($e_1 = +2$), nhà thứ hai đoán thừa 2 tỷ ($e_2 = -2$), cộng đại số lại sẽ bằng $0 \\implies$ máy tính tưởng mô hình đoán hoàn hảo $100\\%$! Do đó phải bình phương để mọi sai số đều dương.\n  2. **Quy luật phạt nặng sai số lớn:** Lệch 1 tỷ phạt $1^2 = 1$, nhưng lệch 4 tỷ phạt $4^2 = 16$ (phạt gấp 16 lần), ép mô hình không được phép đoán quá lệch ở bất kỳ mẫu nào.\n  3. **Hàm toán học trơn mượt:** Parabol bậc hai có đạo hàm liên tục, cực kỳ dễ giải tích để tìm nghiệm cực tiểu.\n\n### 📐 Biểu diễn dạng ma trận:\n$$J(w) = \\|y - Xw\\|_2^2 = (y - Xw)^T(y - Xw) = y^Ty - 2w^TX^Ty + w^TX^TXw$$\n* Chuẩn $L_2$ chính là khoảng cách Euclid/Pytago quen thuộc giữa vector nhãn thật $y$ và vector dự đoán $\\hat{y} = Xw$.",
    "slideRef": "Slide Chương 3, Trang 18-20"
  },
  {
    "id": 62,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hệ phương trình chuẩn (Normal Equation) rút ra từ việc đặt gradient của hàm mất mát OLS bằng $0$ là gì?",
    "options": [
      "$Xw = y$",
      "$X^T X w = X^T y$",
      "$X^T y w = X^T X$",
      "$(X^T X)^{-1} w = y$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nĐể tìm trọng số $w$ làm hàm mất mát $J(w) = y^Ty - 2w^TX^Ty + w^TX^TXw$ đạt giá trị nhỏ nhất, ta lấy đạo hàm (gradient) theo vector $w$ và cho bằng $0$:\n$$\\nabla_w J(w) = -2X^Ty + 2X^TXw = 0$$\nChuyển vế đổi dấu và triệt tiêu hệ số 2:\n$$X^T X w = X^T y$$\nPhương trình này trong đại số tuyến tính được gọi là **Hệ phương trình chuẩn (Normal Equation)**.\n\n> 💡 **Vì sao có chữ $T$ (chuyển vị) ở $X^T$?**  \n> Vì ma trận đặc trưng $X$ có kích thước $(n \\times p)$ (với $n$ mẫu, $p$ đặc trưng). Ta không thể nhân trực tiếp $X$ với $y$ kích thước $(n \\times 1)$, mà bắt buộc phải chuyển vị thành $X^T$ kích thước $(p \\times n)$ để thực hiện phép nhân ma trận $(p \\times n) \\times (n \\times 1) \\to (p \\times 1)$ khớp với số chiều của vector trọng số $w$.",
    "slideRef": "Slide Chương 3, Trang 22-23"
  },
  {
    "id": 63,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Công thức nghiệm đóng giải tích (Closed-form solution) của hồi quy tuyến tính OLS là gì?",
    "options": [
      "$w^* = X^T y (X^T X)^{-1}$",
      "$w^* = (X^T X)^{-1} X^T y$",
      "$w^* = (X X^T)^{-1} X y$",
      "$w^* = X (X^T X)^{-1} y$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTừ Hệ phương trình chuẩn:\n$$X^T X w = X^T y$$\nKhi ma trận vuông $(X^T X)$ kích thước $(p \\times p)$ khả nghịch (nghịch đảo được), ta nhân ma trận nghịch đảo $(X^T X)^{-1}$ vào **bên trái** cả hai vế:\n$$(X^T X)^{-1} (X^T X) w = (X^T X)^{-1} X^T y$$\nVì $(X^T X)^{-1} (X^T X) = I$ (ma trận đơn vị), ta rút ra công thức nghiệm đóng kinh điển:\n$$w^* = (X^T X)^{-1} X^T y$$\n\n⚠️ **Bẫy trắc nghiệm:** Phép nhân ma trận **KHÔNG CÓ TÍNH CHẤT GIAO HOÁN** ($AB \\ne BA$), do đó $(X^T X)^{-1}$ bắt buộc phải đứng trước $X^T y$, viết ngược thành $X^Ty (X^TX)^{-1}$ là sai hoàn toàn về quy tắc nhân ma trận!",
    "slideRef": "Slide Chương 3, Trang 24"
  },
  {
    "id": 64,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Điều kiện BẮT BUỘC để nghiệm đóng giải tích của OLS $w^* = (X^T X)^{-1} X^T y$ tồn tại duy nhất là gì?",
    "options": [
      "Ma trận $X^T X$ phải khả nghịch (các cột của $X$ độc lập tuyến tính, số mẫu $n \\ge$ số đặc trưng $p$)",
      "Số đặc trưng $p$ phải lớn hơn số mẫu $n$",
      "Tất cả các đặc trưng phải tuân theo phân phối chuẩn",
      "Hệ số chặn bias $w_0$ phải bằng $0$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nNghiệm đóng chỉ tồn tại khi ta tính được ma trận nghịch đảo $(X^TX)^{-1}$.\nMa trận vuông $(X^TX)$ kích thước $(p \\times p)$ **khả nghịch khi và chỉ khi**:\n1. $\\det(X^TX) \\ne 0$ (định thức khác 0, ma trận không suy biến - non-singular).\n2. Toàn bộ $p$ cột đặc trưng của $X$ phải **độc lập tuyến tính** (không có cột nào là tổ hợp tuyến tính của các cột khác, rank $(X) = p$).\n3. **Số mẫu quan sát $n$ phải lớn hơn hoặc bằng số đặc trưng $p$ ($n \\ge p$)**.\n\n### ⚠️ Bẫy thi kinh điển:\n* Nếu $n < p$ (số đặc trưng nhiều hơn số dòng dữ liệu), ma trận $X^TX$ chắc chắn bị thiếu hạng (rank $< p$) và **không thể nghịch đảo**.\n* Nếu xảy ra **Hiện tượng đa cộng tuyến hoàn hảo** (ví dụ cột diện tích $m^2$ và cột diện tích $cm^2$), hai cột tỷ lệ nhau $\\implies \\det(X^TX) = 0$, OLS bó tay.\n* 👉 Giải pháp khi $X^TX$ suy biến: Dùng giả nghịch đảo Moore-Penrose $X^+$ hoặc chuyển sang **Hồi quy Ridge** $(X^TX + \\lambda I)^{-1}X^Ty$.",
    "slideRef": "Slide Chương 3, Trang 25, 40"
  },
  {
    "id": 65,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Về mặt hình học, vector dự đoán $\\hat{y}^* = Xw^*$ trong nghiệm OLS có mối quan hệ gì với vector nhãn thật $y$?",
    "options": [
      "$\\hat{y}^*$ song song với vector $y$",
      "$\\hat{y}^*$ là hình chiếu trực giao (Orthogonal Projection) của vector $y$ lên không gian cột $\\text{Col}(X)$",
      "$\\hat{y}^*$ luôn có độ dài lớn hơn vector $y$",
      "$\\hat{y}^*$ vuông góc với vector $y$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Hãy tưởng tượng không gian cột $\\text{Col}(X)$ (chứa tất cả các tổ hợp tuyến tính $Xw$ mà mô hình có thể tạo ra) giống như **Mặt bàn phẳng**.\n* Vector nhãn thực tế $y$ là một điểm lơ lửng **trên không trung** (bên ngoài mặt phẳng).\n* Mục tiêu của OLS là tìm một điểm $\\hat{y} = Xw$ nằm trên mặt bàn sao cho khoảng cách tới $y$ là **ngắn nhất có thể**.\n* Khoảng cách từ một điểm trên không xuống một mặt phẳng ngắn nhất khi và chỉ khi nó là **ĐƯỜNG CHIẾU VUÔNG GÓC**!\n* 👉 Do đó, $\\hat{y}^* = Xw^*$ chính là **hình chiếu trực giao (Orthogonal Projection)** của $y$ lên không gian con $\\text{Col}(X)$. Ma trận chiếu là $P = X(X^TX)^{-1}X^T$ (Hat Matrix).",
    "slideRef": "Slide Chương 3, Trang 26"
  },
  {
    "id": 66,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Tại điểm cực tiểu OLS, vector phần dư $e = y - Xw^*$ có tính chất hình học nào đối với các cột của ma trận $X$?",
    "options": [
      "Vector phần dư trùng với cột thứ nhất của $X$",
      "Vector phần dư trực giao (vuông góc) với mọi cột của ma trận $X$: $X^T (y - Xw^*) = 0$",
      "Vector phần dư có độ dài bằng 0 trên mọi bài toán",
      "Vector phần dư tạo góc 45 độ với các cột của $X$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nVì vector dự đoán $\\hat{y}^* = Xw^*$ là hình chiếu vuông góc của $y$ lên mặt phẳng $\\text{Col}(X)$, đoạn nối giữa giá trị thật và hình chiếu chính là **vector sai số phần dư**:\n$$e = y - \\hat{y}^* = y - Xw^*$$\n* Theo định lý hình học không gian, đoạn thẳng nối điểm đến hình chiếu vuông góc phải **trực giao (vuông góc)** với toàn bộ mặt phẳng $\\text{Col}(X)$.\n* Vuông góc với mặt phẳng nghĩa là vuông góc với từng cột vector đặc trưng tạo nên mặt phẳng đó.\n* Tích vô hướng của hai vector vuông góc luôn bằng $0$:\n$$X^T e = 0 \\iff X^T (y - Xw^*) = 0 \\iff X^Ty - X^TXw^* = 0 \\iff X^TXw^* = X^Ty$$\n👉 Cả 2 con đường: **Đạo hàm vi phân** và **Hình chiếu trực giao** đều dẫn đến chính xác cùng một phương trình $X^TXw = X^Ty$!",
    "slideRef": "Slide Chương 3, Trang 27"
  },
  {
    "id": 67,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Khi giả định sai số ngẫu nhiên $\\epsilon$ tuân theo phân phối chuẩn $\\epsilon \\sim \\mathcal{N}(0, \\sigma^2)$, việc tối đa hóa hàm Log-Likelihood (MLE) tương đương với điều gì?",
    "options": [
      "Tối đa hóa phương sai của sai số",
      "Tối thiểu hóa tổng bình phương phần dư trong OLS",
      "Tối thiểu hóa số lượng biến đặc trưng",
      "Tối đa hóa chuẩn L1 của trọng số"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nPhương trình thực tế: $y = Xw + \\epsilon$, trong đó $\\epsilon \\sim \\mathcal{N}(0, \\sigma^2)$ là nhiễu ngẫu nhiên độc lập (i.i.d).\n* Hàm hợp lý Likelihood biểu thị xác suất xuất hiện toàn bộ tập dữ liệu:\n$$L(w) = \\prod_{i=1}^n \\frac{1}{\\sqrt{2\\pi\\sigma^2}} \\exp\\left(-\\frac{(y_i - w^Tx_i)^2}{2\\sigma^2}\\right)$$\n* Lấy Log-Likelihood tự nhiên ($\\ln$):\n$$\\ln L(w) = -\\frac{n}{2}\\ln(2\\pi\\sigma^2) - \\frac{1}{2\\sigma^2} \\sum_{i=1}^n (y_i - w^Tx_i)^2$$\n* Vì đại lượng $-\\frac{1}{2\\sigma^2}$ mang dấu âm, muốn **CỰC ĐẠI HÓA $\\ln L(w)$ (MLE)** thì bắt buộc phải **CỰC TIỂU HÓA tổng $\\sum_{i=1}^n (y_i - w^Tx_i)^2$ (chính là OLS)**!\n\n> 🏹 **Ví dụ Bắn cung:** Muốn xác suất bắn trúng là lớn nhất (MLE), thì khoảng cách sai số từ hồng tâm tới các mũi tên phải là nhỏ nhất (OLS).",
    "slideRef": "Slide Chương 3, Trang 37-38"
  },
  {
    "id": 68,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hàm mục tiêu của Hồi quy Ridge (Ridge Regression) bổ sung hình phạt nào vào sai số dữ liệu?",
    "options": [
      "Hình phạt chuẩn L1: $\\lambda \\sum |w_j|$",
      "Hình phạt chuẩn L2: $\\lambda \\|w\\|_2^2 = \\lambda \\sum w_j^2$",
      "Hình phạt hỗn hợp L1 và L2",
      "Hình phạt số lượng đặc trưng khác không"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nHồi quy Ridge ($L_2$ Regularization) bổ sung thêm thành phần phạt bằng **bình phương độ lớn chuẩn $L_2$** của các trọng số:\n$$J_{\\text{Ridge}}(w) = \\|y - Xw\\|_2^2 + \\lambda \\|w\\|_2^2 = \\sum_{i=1}^n (y_i - w^Tx_i)^2 + \\lambda \\sum_{j=1}^p w_j^2$$\n* Siêu tham số $\\lambda \\ge 0$ (hoặc $\\alpha$) đóng vai trò là \"mức phạt\".\n* Triết lý: *\"Phạt đứa nào to đầu!\"* - Ngăn không cho bất kỳ trọng số $w_j$ nào bùng nổ quá lớn khi các đặc trưng bị đa cộng tuyến.\n* Lưu ý quan trọng: Hệ số chặn bias $w_0$ thường **không bị phạt** vì nó chỉ định vị mức nền của dữ liệu.",
    "slideRef": "Slide Chương 3, Trang 45-46"
  },
  {
    "id": 69,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Công thức nghiệm đóng giải tích của Hồi quy Ridge là gì?",
    "options": [
      "$w^* = (X^T X + \\lambda I)^{-1} X^T y$",
      "$w^* = (X^T X - \\lambda I)^{-1} X^T y$",
      "$w^* = (X^T X)^{-1} X^T y + \\lambda I$",
      "$w^* = (X^T X + \\lambda I) X^T y$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nĐạo hàm hàm mục tiêu của Ridge:\n$$\\nabla_w J_{\\text{Ridge}}(w) = -2X^Ty + 2X^TXw + 2\\lambda w = 0$$\n$$\\iff (X^TX + \\lambda I) w = X^Ty$$\nNhân ma trận nghịch đảo $(X^TX + \\lambda I)^{-1}$ vào hai vế:\n$$w^*_{\\text{Ridge}} = (X^T X + \\lambda I)^{-1} X^T y$$\n\n> 🛡️ **Ưu điểm vượt trội của Ridge so với OLS:**  \n> Ma trận $(X^TX + \\lambda I)$ (với $\\lambda > 0$) cộng thêm một lượng dương vào đường chéo chính, biến nó thành ma trận **luôn đối xứng xác định dương $\\implies$ LUÔN KHẢ NGHỊCH 100%**, kể cả khi dữ liệu bị đa cộng tuyến hoặc $n < p$!",
    "slideRef": "Slide Chương 3, Trang 47"
  },
  {
    "id": 70,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Đặc tính nào sau đây là của Hồi quy Ridge khi nói về các hệ số trọng số $w$?",
    "options": [
      "Triệt tiêu hoàn toàn một số hệ số về đúng bằng 0 để loại bỏ biến",
      "Thu nhỏ (co cụm) các hệ số về gần 0 nhưng KHÔNG BAO GIỜ bằng 0 tuyệt đối",
      "Luôn làm tăng độ lớn của các hệ số so với OLS",
      "Biến đổi mô hình tuyến tính thành mô hình phi tuyến"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Hình phạt $L_2$ ($\\sum w_j^2$) có dạng hình cầu/đường tròn trơn mượt không có đỉnh nhọn trên các trục tọa độ.\n* Vùng nghiệm tiếp xúc của hàm mất mát và hình phạt $L_2$ thường rơi vào phần thân đường cong tròn chứ không nằm trên trục tọa độ.\n* Do đó, Ridge có đặc tính **Weight Decay (Co trọng số)**: Nó ép các trọng số nhỏ đi rất nhiều để kiểm soát phương sai (Variance), nhưng **không triệt tiêu trọng số nào về đúng bằng 0**.\n* 👉 Vì thế, Ridge **KHÔNG CÓ KHẢ NĂNG tự động lựa chọn đặc trưng (Feature Selection)**. Cả $p$ biến ban đầu vẫn nằm lại trong mô hình.",
    "slideRef": "Slide Chương 3, Trang 47, 57"
  },
  {
    "id": 71,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Khi siêu tham số $\\lambda$ trong Ridge Regression tăng lên rất lớn ($\\lambda \\to \\infty$), điều gì sẽ xảy ra với mô hình?",
    "options": [
      "Các trọng số $w_j \\to 0$ (trừ bias), mô hình dự đoán đường thẳng nằm ngang và bị Underfitting",
      "Các trọng số $w_j \\to \\infty$, mô hình bị Overfitting nghiêm trọng",
      "Mô hình trở về trạng thái nghiệm OLS thông thường",
      "Phương sai (Variance) của mô hình tăng vọt lên vô cùng"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nXét công thức $w^*_{\\text{Ridge}} = (X^TX + \\lambda I)^{-1} X^Ty$:\n* Khi $\\lambda = 0$: Hình phạt biến mất, mô hình trở về đúng chuẩn **OLS thông thường** (dễ bị Overfitting nếu dữ liệu phức tạp).\n* Khi $\\lambda \\to \\infty$: Mức phạt nặng tới mức việc giữ trọng số $w_j \\ne 0$ khiến hàm mất mát bùng nổ. Để tối thiểu hóa, mô hình bắt buộc phải ép toàn bộ $w_j \\to 0$ ($j \\ge 1$).\n* Khi đó $\\hat{y} = w_0$ (đường thẳng nằm ngang bằng giá trị trung bình $\\bar{y}$), mô hình trở nên quá đơn giản $\\implies$ **Underfitting (Độ chệch Bias rất cao, Phương sai Variance rất thấp)**.",
    "slideRef": "Slide Chương 3, Trang 45, 48"
  },
  {
    "id": 72,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hàm mục tiêu của Hồi quy Lasso (Lasso Regression) sử dụng hình phạt nào sau đây?",
    "options": [
      "Hình phạt chuẩn L2: $\\lambda \\sum w_j^2$",
      "Hình phạt chuẩn L1: $\\lambda \\|w\\|_1 = \\lambda \\sum_{j=1}^p |w_j|$",
      "Hình phạt chuẩn vô cùng $L_\\infty$",
      "Hình phạt chuẩn Frobenius"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nHồi quy Lasso (Least Absolute Shrinkage and Selection Operator) bổ sung hình phạt **chuẩn $L_1$** (tổng giá trị tuyệt đối của các trọng số):\n$$J_{\\text{Lasso}}(w) = \\|y - Xw\\|_2^2 + \\lambda \\|w\\|_1 = \\sum_{i=1}^n (y_i - w^Tx_i)^2 + \\lambda \\sum_{j=1}^p |w_j|$$\n* Chuẩn $L_1$ đo khoảng cách Manhattan (khoảng cách đi theo bàn cờ thành phố).\n* Cũng như Ridge, tham số $\\lambda \\ge 0$ kiểm soát cường độ điều chuẩn.",
    "slideRef": "Slide Chương 3, Trang 51-52"
  },
  {
    "id": 73,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Tại sao Hồi quy Lasso có khả năng tự động thực hiện Lựa chọn đặc trưng (Feature Selection)?",
    "options": [
      "Vì nó loại bỏ ngẫu nhiên 50% số đặc trưng trước khi huấn luyện",
      "Về mặt hình học, vùng ràng buộc chuẩn L1 có dạng hình thoi/đa diện với các đỉnh nhọn nằm ngay trên các trục tọa độ, dễ tạo ra nghiệm thưa (Sparse Solution $w_j = 0$)",
      "Vì nó sử dụng ma trận nghịch đảo để tính toán",
      "Vì nó chỉ chấp nhận các biến có tương quan âm"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Hình học trực quan:** Trong không gian 2 chiều $(w_1, w_2)$:\n  - Vùng ràng buộc của Ridge ($w_1^2 + w_2^2 \\le C$) là **Hình tròn**.\n  - Vùng ràng buộc của Lasso ($|w_1| + |w_2| \\le C$) là **Hình thoi (Diamond)** với 4 đỉnh nhọn cắm thẳng vào các trục tọa độ $(w_1=0$ hoặc $w_2=0)$.\n* Khi các đường đồng mức elip của sai số OLS mở rộng ra từ tâm, điểm tiếp xúc đầu tiên với hình thoi xác suất cực cao sẽ va trúng một trong các **đỉnh nhọn**!\n* Tại đỉnh nhọn trên trục tọa độ, tọa độ của các chiều khác bị triệt tiêu về **đúng bằng 0 tuyệt đối** ($w_j = 0$).\n* 👉 Việc trọng số $w_j = 0$ đồng nghĩa với việc biến đặc trưng $x_j$ bị gạt bỏ hoàn toàn khỏi mô hình $\\implies$ **Tự động lựa chọn đặc trưng (Sparse Model)**!",
    "slideRef": "Slide Chương 3, Trang 51, 53-54"
  },
  {
    "id": 74,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Khẳng định nào sau đây là ĐÚNG khi so sánh về nghiệm đóng giữa Ridge và Lasso?",
    "options": [
      "Cả Ridge và Lasso đều có nghiệm đóng giải tích dạng ma trận",
      "Ridge có nghiệm đóng giải tích $(X^TX + \\lambda I)^{-1}X^Ty$, trong khi Lasso KHÔNG CÓ nghiệm đóng giải tích vì hàm trị tuyệt đối không khả vi tại 0",
      "Lasso có nghiệm đóng giải tích, còn Ridge phải giải bằng lặp",
      "Không có mô hình nào giải được bằng giải tích"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Ridge ($L_2$):** Hàm mục tiêu $w^2$ khả vi (có đạo hàm) liên tục ở mọi nơi $\\implies$ Đặt gradient bằng 0 giải được nghiệm đóng tường minh $w^* = (X^TX + \\lambda I)^{-1}X^Ty$.\n* **Lasso ($L_1$):** Hàm trị tuyệt đối $|w|$ có điểm gấp khúc hình chữ V gãy nhọn tại $w = 0$, tại đó **đạo hàm không tồn tại (không khả vi)**.\n* Do đó, Lasso **không thể đặt đạo hàm bậc nhất bằng 0 để giải ra công thức đóng**!\n* 👉 Để tìm nghiệm Lasso, người ta phải dùng các thuật toán tối ưu số học như **Coordinate Descent (Hạ tọa độ)** hoặc **Subgradient Descent (Hạ dưới đạo hàm)**.",
    "slideRef": "Slide Chương 3, Trang 52, 57"
  },
  {
    "id": 75,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Mô hình Elastic Net kết hợp hai thành phần điều chuẩn nào?",
    "options": [
      "Chuẩn L1 (Lasso) và Chuẩn L2 (Ridge)",
      "Chuẩn L2 và Hàm mất mát Hinge",
      "Chuẩn L1 và Entropy",
      "Chuẩn L0 và Chuẩn L2"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nElastic Net là sự kết hợp dung hòa điểm mạnh của cả **Ridge ($L_2$)** và **Lasso ($L_1$)**:\n$$J_{\\text{ElasticNet}}(w) = \\|y - Xw\\|_2^2 + \\lambda_1 \\|w\\|_1 + \\lambda_2 \\|w\\|_2^2$$\nThường được viết theo tỷ lệ $r \\in [0, 1]$ (l1_ratio):\n$$J(w) = \\text{Loss} + \\alpha \\left( r \\|w\\|_1 + \\frac{1-r}{2} \\|w\\|_2^2 \\right)$$\n\n> 💡 **Vì sao cần Elastic Net?**  \n> Khi một nhóm biến đặc trưng có tương quan rất cao với nhau, Lasso thường chỉ bốc ngẫu nhiên đúng 1 biến và vứt bỏ toàn bộ các biến còn lại. Elastic Net khắc phục nhược điểm này bằng cách vừa tạo ra nghiệm thưa (nhờ $L_1$), vừa giữ lại cả nhóm đặc trưng tương quan (nhờ hiệu ứng gom cụm của $L_2$).",
    "slideRef": "Slide Chương 3, Trang 55-56"
  },
  {
    "id": 76,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hàm kích hoạt Sigmoid trong Logistic Regression có công thức và miền giá trị là gì?",
    "options": [
      "$\\sigma(z) = \\frac{1}{1 + e^{-z}}$, miền giá trị $(0, 1)$",
      "$\\sigma(z) = \\frac{e^z - e^{-z}}{e^z + e^{-z}}$, miền giá trị $(-1, 1)$",
      "$\\sigma(z) = \\max(0, z)$, miền giá trị $[0, +\\infty)$",
      "$\\sigma(z) = \\frac{1}{1 + e^z}$, miền giá trị $(-\\infty, +\\infty)$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nHàm Sigmoid (Logistic Function) đóng vai trò là \"chiếc máy nén thần kỳ\":\n$$\\sigma(z) = \\frac{1}{1 + e^{-z}} = \\frac{e^z}{1 + e^z}$$\n* **Miền giá trị:** $(0, 1)$ - Phù hợp hoàn hảo để biểu diễn xác suất $P(y=1|x)$.\n* **Đặc điểm hình học:** Đồ thị cong hình chữ S, nhận điểm đối xứng tại $(0, 0.5)$.\n* Khi $z \\to +\\infty \\implies e^{-z} \\to 0 \\implies \\sigma(z) \\to 1$.\n* Khi $z \\to -\\infty \\implies e^{-z} \\to +\\infty \\implies \\sigma(z) \\to 0$.\n* Khi $z = 0 \\implies \\sigma(0) = \\frac{1}{1 + 1} = 0.5$ (ngưỡng phân loại mặc định).",
    "slideRef": "Slide Chương 3, Trang 60-61"
  },
  {
    "id": 77,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Trong Logistic Regression, tại giá trị điểm số $z = w^T x = 0$, xác suất dự đoán $P(y = 1|x)$ bằng bao nhiêu?",
    "options": [
      "$0.0$",
      "$0.5$",
      "$1.0$",
      "Không xác định"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nThay trực tiếp $z = 0$ vào hàm Sigmoid:\n$$\\sigma(0) = \\frac{1}{1 + e^{-0}} = \\frac{1}{1 + 1} = \\frac{1}{2} = 0.5$$\n* Điểm $z = 0 \\iff w^Tx = 0$ chính là phương trình của **Biên quyết định (Decision Boundary)**.\n* Tại đúng ranh giới phân chia, mô hình hoàn toàn phân vân 50/50 giữa 2 lớp.\n* Nếu $w^Tx > 0 \\implies P > 0.5 \\implies$ Phán đoán lớp $1$.\n* Nếu $w^Tx < 0 \\implies P < 0.5 \\implies$ Phán đoán lớp $0$.",
    "slideRef": "Slide Chương 3, Trang 61"
  },
  {
    "id": 78,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Tỷ số Odds trong bài toán phân loại nhị phân được định nghĩa như thế nào?",
    "options": [
      "Tỷ số giữa xác suất biến cố xảy ra và xác suất biến cố không xảy ra: $\\text{Odds} = \\frac{p}{1 - p}$",
      "Tỷ số giữa xác suất biến cố xảy ra và tổng số mẫu: $\\text{Odds} = \\frac{p}{N}$",
      "Hiệu số giữa hai xác suất: $\\text{Odds} = p - (1 - p)$",
      "Tích của hai xác suất: $\\text{Odds} = p(1 - p)$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Giả sử bạn chơi cờ vua 10 ván: Thắng 8 ván, Thua 2 ván.\n  - **Xác suất thắng ($p$):** Lấy số ván thắng chia cho **tổng số ván**: $p = \\frac{8}{10} = 0.8$ ($80\\%$).\n  - **Tỷ số Odds:** Lấy số ván thắng chia thẳng cho **số ván thua**:\n    $$\\text{Odds} = \\frac{\\text{Thắng}}{\\text{Thua}} = \\frac{8}{2} = 4 = \\frac{p}{1 - p}$$\n* **Ý nghĩa:** *\"Cứ mỗi 1 lần thua, bạn sẽ thắng được 4 lần!\"* (Cơ hội thắng gấp 4 lần cơ hội thua).\n* Miền giá trị của Odds: $[0, +\\infty)$. Khi $p = 0.5 \\implies \\text{Odds} = 1$ (kèo cân 50/50).",
    "slideRef": "Slide Chương 3, Trang 62"
  },
  {
    "id": 79,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Đại lượng nào sau đây trong Logistic Regression có mối quan hệ TUYẾN TÍNH với các biến đặc trưng $x$?",
    "options": [
      "Xác suất $p$",
      "Tỷ số Odds",
      "Log-odds (Hàm Logit): $\\ln\\left(\\frac{p}{1 - p}\\right)$",
      "Bình phương xác suất $p^2$"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nHãy nhìn vào miền giá trị của các đại lượng:\n* Đường thẳng $w^Tx$: Chạy thoải mái từ $-\\infty$ đến $+infty$.\n* Xác suất $p$: Bị nhốt chặt trong đoạn $[0, 1]$ (phi tuyến).\n* Tỷ số Odds: Chạy từ $[0, +\\infty)$ (vẫn thiếu phần âm).\n* Lấy logarit tự nhiên của Odds: **Logit** chạy từ $-\\infty$ đến $+infty$!\n\nLúc này, ta mới có thể đặt dấu bằng với đường thẳng tuyến tính:\n$$\\text{Logit}(p) = \\ln\\left(\\frac{p}{1 - p}\\right) = w_0 + w_1 x_1 + \\dots + w_p x_p = w^Tx$$\n👉 Do đó, **Log-odds (Logit)** chính là đại lượng có quan hệ tuyến tính trực tiếp với các đặc trưng $x$. Giải ngược phương trình này ra tìm $p$, ta thu được hàm Sigmoid $p = \\frac{1}{1 + e^{-w^Tx}}$!",
    "slideRef": "Slide Chương 3, Trang 63"
  },
  {
    "id": 80,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hàm mất mát Binary Cross-Entropy (BCE Loss) cho 1 mẫu dữ liệu có dạng công thức là gì?",
    "options": [
      "$L = - [y \\ln(p) + (1 - y) \\ln(1 - p)]$",
      "$L = [y \\ln(p) - (1 - y) \\ln(1 - p)]$",
      "$L = (y - p)^2$",
      "$L = - [y \\ln(1 - p) + (1 - y) \\ln(p)]$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCông thức Binary Cross-Entropy (Log Loss) cho 1 mẫu:\n$$L = - \\Big[ y \\ln(p) + (1 - y) \\ln(1 - p) \\Big]$$\n\n#### 1. Cơ chế \"Công tắc đèn\":\nVì nhãn thực tế $y$ chỉ nhận giá trị $1$ hoặc $0$:\n* Khi $y = 1$ (mẫu dương): $(1 - y) = 0 \\implies$ Nhánh 2 tắt, chỉ còn $L = -\\ln(p)$.\n* Khi $y = 0$ (mẫu âm): $y = 0 \\implies$ Nhánh 1 tắt, chỉ còn $L = -\\ln(1 - p)$.\n\n#### 2. Quy luật phạt tiền cực nặng ($-\\ln$):\n* Nếu $y = 1$, mô hình đoán đúng $p = 1 \\implies \\text{Loss} = -\\ln(1) = 0$ (không bị phạt).\n* Nếu $y = 1$, nhưng mô hình đoán sai bét $p \\to 0 \\implies \\text{Loss} = -\\ln(0) \\to +\\infty$ (phạt vô hạn)!\n* Nhờ hàm logarit, mô hình bị trừng phạt cực kỳ nặng nề khi nó \"tự tin cao độ vào một dự đoán sai\".",
    "slideRef": "Slide Chương 3, Trang 69-70"
  },
  {
    "id": 81,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Tại sao bài toán tối ưu Logistic Regression không có nghiệm đóng giải tích giống như Hồi quy tuyến tính OLS?",
    "options": [
      "Vì hàm Sigmoid là hàm phi tuyến phức tạp khiến đạo hàm của hàm mất mát BCE phi tuyến theo trọng số $w$, không thể giải phương trình $\\nabla J(w) = 0$ bằng đại số tuyến tính",
      "Vì số lượng mẫu luôn lớn hơn số lượng đặc trưng",
      "Vì ma trận $X^TX$ không bao giờ khả nghịch trong bài toán phân loại",
      "Vì hàm mất mát BCE không có đạo hàm"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong Hồi quy tuyến tính OLS, đạo hàm $\\nabla_w J(w) = -2X^Ty + 2X^TXw = 0$ là một **phương trình bậc nhất tuyến tính** theo $w$, giải bằng đại số ma trận cực kỳ đơn giản.\n\nNhưng trong Hồi quy Logistic:\n$$\\nabla_w J(w) = \\sum_{i=1}^n (\\sigma(w^Tx_i) - y_i) x_i = 0$$\n* Sự hiện diện của hàm mũ trong $\\sigma(z) = \\frac{1}{1 + e^{-w^Tx}}$ làm cho hệ phương trình trở thành **phi tuyến tính siêu việt (Transcendental Non-linear System)**.\n* Không thể dùng phép nhân ma trận để \"rút\" $w$ ra một vế độc lập được.\n* 👉 Tuy nhiên, hàm mất mát BCE là một **hàm lồi (Convex Function)** có duy nhất 1 điểm cực tiểu toàn cục. Ta giải bằng các phương pháp tối ưu xấp xỉ lặp như **Gradient Descent (Hạ độ dốc)** hoặc **Newton-Raphson (IRLS)**.",
    "slideRef": "Slide Chương 3, Trang 71"
  },
  {
    "id": 82,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Nếu ta tăng ngưỡng quyết định (Decision Threshold) trong Logistic Regression từ $0.5$ lên $0.8$, điều gì sẽ xảy ra với Precision và Recall?",
    "options": [
      "Precision tăng lên, Recall giảm xuống",
      "Precision giảm xuống, Recall tăng lên",
      "Cả Precision và Recall đều tăng",
      "Cả Precision và Recall đều giảm"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Ngưỡng $0.5$:** Xác suất chỉ cần $\\ge 0.5$ là đã phán đoán lớp Dương tính ($y=1$).\n* **Tăng ngưỡng lên $0.8$:** Mô hình trở nên **cực kỳ thận trọng**. Chỉ những ca có xác suất chắc nịch $\\ge 80\\%$ mô hình mới dám báo Dương tính:\n  1. Số ca bị báo nhầm ($FP$) giảm mạnh $\\implies$ **Precision ($\\frac{TP}{TP + FP}$) tăng vọt** (độ tin cậy của lời báo cao hơn).\n  2. Nhưng vì quá khắt khe, mô hình sẽ bỏ sót nhiều ca bệnh nhẹ có xác suất $0.6 - 0.7$ ($FN$ tăng) $\\implies$ **Recall ($\\frac{TP}{TP + FN}$) bị sụt giảm**.\n* 👉 Đây chính là bản chất của **Đánh đổi Precision-Recall (Precision-Recall Trade-off)**.",
    "slideRef": "Slide Chương 3, Trang 77"
  },
  {
    "id": 83,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hàm Softmax được sử dụng trong bài toán nào sau đây?",
    "options": [
      "Hồi quy đa thức đơn biến",
      "Phân loại đa lớp loại trừ lẫn nhau (Multi-class Classification, $K \\ge 3$)",
      "Giảm chiều dữ liệu không giám sát",
      "Tìm kiếm ngoại lai trong cụm"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nKhi bài toán có $K \\ge 3$ lớp nhãn loại trừ lẫn nhau (ví dụ: Chó, Mèo, Chim):\nHàm Softmax là phiên bản mở rộng nhiều chiều của hàm Sigmoid:\n$$P(y = k | x) = \\frac{e^{z_k}}{\\sum_{j=1}^K e^{z_j}} = \\frac{e^{w_k^Tx}}{\\sum_{j=1}^K e^{w_j^Tx}}$$\n* **Đặc tính chuẩn hóa:**\n  1. $e^{z_k} > 0$ biến mọi điểm số $z_k$ thành số dương.\n  2. Chia cho tổng mẫu số $\\sum e^{z_j}$ giúp **tổng xác suất của tất cả $K$ lớp luôn bằng đúng $1.0$ ($100\\%$)**.\n  3. Giá trị của mỗi lớp luôn nằm chặt chẽ trong khoảng $(0, 1)$.",
    "slideRef": "Slide Chương 3, Trang 80-81"
  },
  {
    "id": 84,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Độ đo sai số MAE (Mean Absolute Error) có đặc điểm nổi bật nào so với MSE và RMSE?",
    "options": [
      "Kháng nhiễu tốt hơn với các điểm dữ liệu ngoại lai (Robust to Outliers) vì không bình phương sai số",
      "Phạt cực kỳ nặng các sai số lớn",
      "Luôn có giá trị lớn hơn MSE trên mọi tập dữ liệu",
      "Có đạo hàm trơn liên tục tại điểm 0"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n$$MAE = \\frac{1}{n} \\sum_{i=1}^n |y_i - \\hat{y}_i|$$\n* **So sánh độ nhạy với ngoại lai:**\n  - Nếu sai số lệch 10 đơn vị: MAE chỉ cộng thêm $10$. Nhưng MSE cộng thêm $10^2 = 100$ (gấp 100 lần)!\n  - Do đó, nếu dữ liệu có nhiều điểm ngoại lai (nhiễu cực đoan), MSE và RMSE sẽ bị các điểm này kéo lệch đi rất nhiều.\n  - Ngược lại, MAE đối xử công bằng với mọi sai số theo tỷ lệ tuyến tính, do đó **rất bền vững (Robust) trước dữ liệu ngoại lai**.",
    "slideRef": "Slide Chương 3, Trang 87, 90, 94"
  },
  {
    "id": 85,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Độ đo RMSE (Root Mean Squared Error) được định nghĩa là gì và có ưu điểm gì so với MSE?",
    "options": [
      "RMSE là căn bậc hai của MSE: $\\sqrt{\\frac{1}{n}\\sum (y_i - \\hat{y}_i)^2}$, có cùng đơn vị đo với biến mục tiêu $y$",
      "RMSE là nghịch đảo của MSE",
      "RMSE là trung bình của trị tuyệt đối",
      "RMSE luôn không có đơn vị tính"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n$$RMSE = \\sqrt{MSE} = \\sqrt{\\frac{1}{n} \\sum_{i=1}^n (y_i - \\hat{y}_i)^2}$$\n* **Ưu điểm lớn nhất của RMSE so với MSE:**\n  - Giả sử biến mục tiêu $y$ đo giá nhà bằng **triệu đồng**: Đơn vị của MSE sẽ bị bình phương thành **(triệu đồng)$^2$** (rất vô nghĩa, không thể giải thích cho khách hàng hay sếp).\n  - Bằng cách lấy căn bậc hai, RMSE đưa đơn vị sai số quay trở về đúng **triệu đồng** (cùng đơn vị đo lường ban đầu với $y$), giúp con người dễ dàng hình dung mô hình đang đoán lệch trung bình bao nhiêu tiền.",
    "slideRef": "Slide Chương 3, Trang 89, 94"
  },
  {
    "id": 86,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hệ số xác định $R^2$ (R-squared) trong bài toán hồi quy biểu thị điều gì?",
    "options": [
      "Tỷ lệ phần trăm phương sai của biến mục tiêu $y$ được giải thích bởi các biến đặc trưng trong mô hình",
      "Sai số tuyệt đối trung bình của mô hình",
      "Tỷ lệ các điểm dữ liệu nằm chính xác trên đường hồi quy",
      "Xác suất để mô hình đoán đúng 100%"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n$$R^2 = 1 - \\frac{SS_{\\text{res}}}{SS_{\\text{tot}}} = 1 - \\frac{\\sum (y_i - \\hat{y}_i)^2}{\\sum (y_i - \\bar{y}_i)^2}$$\n* **So tài với \"Mô hình người lười\" $\\bar{y}$:**\n  - $SS_{\\text{tot}}$ là sai số khi bạn dùng một mô hình ngớ ngẩn: Luôn luôn đoán giá nhà bằng giá trị trung bình $\\bar{y}$.\n  - $SS_{\\text{res}}$ là sai số thực tế của mô hình thông minh của bạn.\n* **Ý nghĩa:** $R^2 = 0.85$ nghĩa là mô hình của bạn đã **giải thích được $85\\%$ sự biến thiên** của giá nhà, chỉ còn $15\\%$ là do nhiễu hoặc các yếu tố chưa thu thập.",
    "slideRef": "Slide Chương 3, Trang 92, 94"
  },
  {
    "id": 87,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Tại sao người ta sử dụng Adjusted $R^2$ ($R^2$ hiệu chỉnh) thay vì $R^2$ khi đánh giá mô hình hồi quy đa biến?",
    "options": [
      "Vì $R^2$ thông thường luôn có xu hướng tăng hoặc giữ nguyên khi thêm bất kỳ biến nào vào mô hình (kể cả biến rác vô nghĩa), trong khi Adjusted $R^2$ có cơ chế phạt số lượng biến",
      "Vì Adjusted $R^2$ luôn có giá trị lớn hơn $R^2$",
      "Vì $R^2$ không tính toán được khi số mẫu $n > 1000$",
      "Vì Adjusted $R^2$ chuyển đổi bài toán hồi quy thành phân loại"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n$$\\text{Adjusted } R^2 = 1 - (1 - R^2) \\frac{n - 1}{n - p - 1}$$\n(trong đó $n$ là số mẫu, $p$ là số biến đặc trưng).\n\n#### ⚠️ Cạm bẫy của $R^2$ thông thường:\n* Cứ nhét thêm một biến mới vào mô hình (cho dù là biến tung đồng xu vô dụng), $R^2$ **chắc chắn sẽ tăng lên hoặc ít nhất giữ nguyên**, không bao giờ giảm!\n* Điều này dễ dụ người xây dựng mô hình nhồi nhét hàng trăm biến rác gây Overfitting.\n* **Cứu cánh Adjusted $R^2$:** Mẫu số $(n - p - 1)$ sẽ giảm đi khi $p$ tăng $\\implies$ Nếu biến mới đưa vào không đóng góp đủ nhiều để bù đắp cho \"hình phạt tăng $p$\", thì **Adjusted $R^2$ sẽ lập tức bị kéo giảm xuống**!",
    "slideRef": "Slide Chương 3, Trang 93"
  },
  {
    "id": 88,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Trong Ma trận nhầm lẫn (Confusion Matrix), định nghĩa của False Positive (FP - Dương tính giả / Sai lầm loại I) là gì?",
    "options": [
      "Thực tế là Âm tính ($y = 0$), nhưng mô hình dự đoán nhầm thành Dương tính ($\\hat{y} = 1$)",
      "Thực tế là Dương tính ($y = 1$), nhưng mô hình dự đoán nhầm thành Âm tính ($\\hat{y} = 0$)",
      "Thực tế là Dương tính và mô hình đoán đúng Dương tính",
      "Thực tế là Âm tính và mô hình đoán đúng Âm tính"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nBảng ma trận nhầm lẫn $2 \\times 2$:\n* Chữ thứ nhất (True/False): Mô hình đoán **ĐÚNG** hay **SAI**?\n* Chữ thứ hai (Positive/Negative): Mô hình đã **DỰ ĐOÁN LÀ GÌ**?\n\n* 👉 **False Positive (FP - Sai lầm loại I):**\n  - Mô hình phán: *\"Positive!\"* (Báo động dương tính).\n  - Nhưng kết quả kiểm tra lại là: **False** (Đoán sai rồi!).\n  - $\\implies$ **Thực tế mẫu là ÂM TÍNH ($y=0$), nhưng mô hình lại báo nhầm thành DƯƠNG TÍNH ($\\hat{y}=1$)**!\n  - *Ví dụ:* Thư bình thường quan trọng bị lọc nhầm vào hòm Spam; hoặc người khỏe mạnh bị máy báo nhầm là ung thư.",
    "slideRef": "Slide Chương 3, Trang 95"
  },
  {
    "id": 89,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Tại sao độ đo Accuracy (Độ chính xác) có thể gây ngộ nhận nguy hiểm trên tập dữ liệu mất cân bằng nghiêm trọng (Imbalanced Data)?",
    "options": [
      "Vì nó không thể tính toán được với ma trận nhầm lẫn",
      "Vì một mô hình tầm thường chỉ cần luôn luôn dự đoán lớp đa số là đã đạt điểm Accuracy rất cao, dù bỏ sót toàn bộ lớp thiểu số quan trọng",
      "Vì Accuracy luôn có giá trị âm",
      "Vì nó chỉ áp dụng được cho bài toán hồi quy"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n$$Accuracy = \\frac{TP + TN}{TP + TN + FP + FN}$$\n\n#### ⚠️ Cú lừa thế kỷ của Accuracy:\nGiả sử có $10.000$ người đi tầm soát ung thư, trong đó chỉ có $10$ người thực sự bị bệnh ($0.1\\%$), còn $9.990$ người khỏe mạnh ($99.9\\%$).\n* Một mô hình \"ngớ ngẩn\" không học gì cả, luôn phán một câu duy nhất: *\"Tất cả mọi người đều KHỎE MẠNH ($y=0$)\"*.\n* Kết quả chấm điểm:\n  $$Accuracy = \\frac{9.990}{10.000} = 99.9\\%!$$\n* 👉 Điểm số $99.9\\%$ nhìn qua tưởng siêu việt, nhưng trên thực tế mô hình này **hoàn toàn vô dụng và giết người**, vì nó bỏ sót $100\\%$ ($10$ bệnh nhân ung thư) về nhà chờ chết!\n* **Quy tắc thi cử:** Dữ liệu mất cân bằng $\\implies$ Tuyệt đối không tin Accuracy, phải dùng **Precision, Recall, F1-Score, PR-AUC**!",
    "slideRef": "Slide Chương 3, Trang 96, 101"
  },
  {
    "id": 90,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Công thức tính Precision (Độ chuẩn xác / Độ chính xác của lời báo) là gì?",
    "options": [
      "$\\text{Precision} = \\frac{TP}{TP + FP}$",
      "$\\text{Precision} = \\frac{TP}{TP + FN}$",
      "$\\text{Precision} = \\frac{TN}{TN + FP}$",
      "$\\text{Precision} = \\frac{TP + TN}{P + N}$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n$$\\text{Precision} = \\frac{TP}{TP + FP}$$\n* **Mẫu số $(TP + FP)$:** Tổng số ca mà mô hình **tuyên bố là Dương tính**.\n* **Tử số $TP$:** Số ca mô hình **báo đúng**.\n* **Ý nghĩa thực tế:** *\"Trong tất cả các trường hợp mô hình BÁO DƯƠNG TÍNH, có bao nhiêu phần trăm là ĐÚNG THỰC SỰ?\"*\n* Precision đo lường **độ tin cậy của lời báo động**. Càng ít báo động nhầm ($FP \\to 0$), Precision càng tiến gần tới $1.0$ ($100\\%$).",
    "slideRef": "Slide Chương 3, Trang 97"
  },
  {
    "id": 91,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Công thức tính Recall (Độ nhạy - Sensitivity / Tỷ lệ bao phủ) là gì?",
    "options": [
      "$\\text{Recall} = \\frac{TP}{TP + FN}$",
      "$\\text{Recall} = \\frac{TP}{TP + FP}$",
      "$\\text{Recall} = \\frac{TN}{TN + FP}$",
      "$\\text{Recall} = \\frac{FN}{TP + FN}$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n$$\\text{Recall} = \\frac{TP}{TP + FN}$$\n* **Mẫu số $(TP + FN)$:** Tổng số ca **THỰC TẾ LÀ DƯƠNG TÍNH NGOÀI ĐỜI** (gồm cả ca bắt được $TP$ và ca bị bỏ sót $FN$).\n* **Tử số $TP$:** Số ca mô hình **tìm ra được**.\n* **Ý nghĩa thực tế:** *\"Trong tất cả các bệnh nhân thực sự bị bệnh, mô hình đã QUÉT SẠCH VÀ BẮT ĐƯỢC bao nhiêu phần trăm?\"*\n* Càng ít bỏ sót ($FN \\to 0$), Recall càng cao.",
    "slideRef": "Slide Chương 3, Trang 98"
  },
  {
    "id": 92,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Trong bài toán phát hiện bệnh ung thư hiểm nghèo hoặc phát hiện bom mìn, độ đo nào BẮT BUỘC phải được ưu tiên tối đa?",
    "options": [
      "Recall (Độ nhạy), vì chi phí của việc bỏ sót (False Negative) là thảm họa chết người",
      "Precision, vì không được phép báo nhầm",
      "Specificity, để bảo vệ người khỏe",
      "Accuracy, vì cần độ chính xác tổng quát"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Hậu quả của việc Bỏ sót (False Negative - $FN$):** Bệnh nhân ung thư giai đoạn đầu bị báo là khỏe mạnh $\\implies$ không chữa trị và tử vong; hoặc quả bom mìn bị bỏ sót $\\implies$ phát nổ gây thương vong.\n* **Hậu quả của Báo nhầm (False Positive - $FP$):** Người khỏe bị nghi ngờ nhầm $\\implies$ đi làm xét nghiệm máu/sinh thiết lần 2 để kiểm tra lại.\n* 👉 **Quy tắc:** Thà bắt nhầm một người khỏe đi kiểm tra lại ($FP$), còn hơn là bỏ sót một bệnh nhân ung thư về nhà chờ chết ($FN$)!\n* Vì cần triệt tiêu $FN$ đến mức tối thiểu, ta **bắt buộc phải tối đa hóa Recall**!",
    "slideRef": "Slide Chương 3, Trang 98, 101"
  },
  {
    "id": 93,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Trong bài toán xây dựng bộ lọc thư rác đưa vào Inbox (Spam Filter), độ đo nào cần được ưu tiên hơn?",
    "options": [
      "Precision, vì tránh việc đưa nhầm thư quan trọng của người dùng vào mục Spam (False Positive)",
      "Recall, vì phải bắt bằng hết mọi bức thư rác",
      "Mean Squared Error",
      "Inertia"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Quy ước:** Lớp Dương tính = Thư rác (Spam); Lớp Âm tính = Thư quan trọng bình thường (Ham).\n* **Nếu bị False Positive ($FP$):** Thư báo trúng tuyển đại học, vé máy bay hay hợp đồng triệu đô của sếp bị quăng nhầm vào hòm rác và người dùng không đọc được $\\implies$ **Hậu quả cực kỳ tai hại!**\n* **Nếu bị False Negative ($FN$):** Một vài bức thư quảng cáo rác lọt vào hòm thư chính $\\implies$ Người dùng chỉ mất 1 giây bấm nút xóa (chấp nhận được).\n* 👉 Thà để lọt một vài bức thư rác ($FN$), còn hơn vứt nhầm thư quan trọng ($FP$). Do đó, **bắt buộc ưu tiên tối đa Precision**!",
    "slideRef": "Slide Chương 3, Trang 97, 101"
  },
  {
    "id": 94,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Độ đo $F_1$-Score là sự kết hợp của Precision và Recall theo dạng trung bình nào?",
    "options": [
      "Trung bình điều hòa (Harmonic Mean): $F_1 = 2 \\cdot \\frac{P \\cdot R}{P + R}$",
      "Trung bình cộng (Arithmetic Mean): $F_1 = \\frac{P + R}{2}$",
      "Trung bình nhân (Geometric Mean): $F_1 = \\sqrt{P \\cdot R}$",
      "Trung bình trọng số bậc hai"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n$$F_1 = 2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}} = \\frac{2TP}{2TP + FP + FN}$$\n\n#### 🤔 Tại sao không dùng Trung bình cộng $\\frac{P + R}{2}$?\nGiả sử một mô hình cực đoan: $\\text{Precision} = 100\\%$, nhưng $\\text{Recall} = 0\\%$ (chỉ dám đoán đúng 1 ca chắc chắn, bỏ sót toàn bộ):\n* Nếu dùng trung bình cộng: $\\frac{100\\% + 0\\%}{2} = 50\\%$ (cho ra một con số \"nhìn vẫn ổn\", che giấu đi sự thật là mô hình đã hỏng hoàn toàn 1 bên!).\n* Nếu dùng trung bình điều hòa:\n  $$F_1 = 2 \\cdot \\frac{100 \\times 0}{100 + 0} = 0\\%!$$\n* 👉 **Triết lý:** Trung bình điều hòa bị kéo sập về con số nhỏ hơn. Nó trừng phạt cực nặng sự mất cân đối. **Chỉ khi CẢ HAI chỉ số Precision và Recall đều cao thì $F_1$ mới có thể cao được!**",
    "slideRef": "Slide Chương 3, Trang 99"
  },
  {
    "id": 95,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Cho kết quả phân loại: $TP = 80$, $FP = 20$, $FN = 20$, $TN = 80$. Độ đo Precision và Recall lần lượt là bao nhiêu?",
    "options": [
      "$\\text{Precision} = 0.8$, $\\text{Recall} = 0.8$",
      "$\\text{Precision} = 0.5$, $\\text{Recall} = 0.5$",
      "$\\text{Precision} = 0.8$, $\\text{Recall} = 0.2$",
      "$\\text{Precision} = 0.2$, $\\text{Recall} = 0.8$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nÁp dụng trực tiếp 2 công thức:\n1. **Precision:**\n   $$\\text{Precision} = \\frac{TP}{TP + FP} = \\frac{80}{80 + 20} = \\frac{80}{100} = 0.8 \\quad (80\\%)$$\n2. **Recall:**\n   $$\\text{Recall} = \\frac{TP}{TP + FN} = \\frac{80}{80 + 20} = \\frac{80}{100} = 0.8 \\quad (80\\%)$$\n3. **$F_1$-Score tương ứng:**\n   $$F_1 = 2 \\cdot \\frac{0.8 \\times 0.8}{0.8 + 0.8} = 0.8$$",
    "slideRef": "Slide Chương 3, Trang 97-98"
  },
  {
    "id": 96,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Trong bài toán phân loại đa lớp, sự khác biệt giữa Macro-average và Micro-average là gì?",
    "options": [
      "Macro-average tính độ đo riêng cho từng lớp rồi lấy trung bình cộng (đối xử bình đẳng mọi lớp), trong khi Micro-average gộp chung toàn bộ mẫu lại tính (bị chi phối bởi lớp đa số)",
      "Micro-average chỉ tính trên tập Test nhỏ, còn Macro-average tính trên toàn bộ dữ liệu",
      "Macro-average luôn lớn hơn Micro-average",
      "Hai cách tính luôn cho ra kết quả hoàn toàn bằng nhau"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nGiả sử nhận diện 3 loài vật: **Chó ($1000$ mẫu), Mèo ($900$ mẫu), Gà rừng ($10$ mẫu - lớp cực hiếm)**.\n* **Macro-Average (\"Công bằng xã hội\"):**\n  $$P_{\\text{Macro}} = \\frac{P_{\\text{Chó}} + P_{\\text{Mèo}} + P_{\\text{Gà}}}{3}$$\n  Mỗi lớp có trọng số ngang nhau ($1/3$), không phân biệt giàu nghèo dữ liệu. Dùng khi bạn rất quan tâm đến **hiệu năng trên lớp thiểu số**.\n* **Micro-Average (\"Đa số thắng thiểu số\"):**\n  Gộp chung tổng $TP, FP$ của cả 3 lớp lại tính 1 lần. Vì Chó và Mèo quá đông ($1900/1910$ mẫu), chúng sẽ thao túng toàn bộ điểm số. Dù mô hình có đoán sai toàn bộ $10$ con gà, Micro-Average vẫn có thể đạt $> 95\\%$!",
    "slideRef": "Slide Chương 3, Trang 100"
  },
  {
    "id": 97,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Kỹ thuật Stratified Split (Chia phân tầng) mang lại lợi ích gì khi chia tập dữ liệu Train/Test?",
    "options": [
      "Bảo toàn tỷ lệ phần trăm giữa các lớp nhãn ở cả tập Train và tập Test giống hệt như tập dữ liệu gốc ban đầu",
      "Tăng số lượng mẫu lên gấp đôi",
      "Loại bỏ hoàn toàn hiện tượng ngoại lai",
      "Tự động chuẩn hóa các đặc trưng về khoảng [0, 1]"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Nguy cơ của bốc ngẫu nhiên (Random Split):** Với dữ liệu $95\\%$ bình thường và $5\\%$ lừa đảo, việc bốc ngẫu nhiên có thể khiến tập Test xui xẻo không dính một ca lừa đảo nào $\\to$ tập Test trở nên vô dụng.\n* **Stratified Split (Chia phân tầng):** Bắt buộc phải chia dữ liệu sao cho **tỷ lệ các lớp được giữ nguyên vẹn**:\n  - Tập gốc: $95\\%$ bình thường, $5\\%$ lừa đảo.\n  - Tập Train: Đúng $95\\% - 5\\%$.\n  - Tập Test: Đúng $95\\% - 5\\%$.\n* 👉 **Bắt buộc sử dụng** khi huấn luyện và đánh giá trên các tập dữ liệu mất cân bằng (Imbalanced Data).",
    "slideRef": "Slide Chương 3, Trang 103"
  },
  {
    "id": 98,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Trong K-Fold Cross-Validation với $K = 5$, quá trình đánh giá diễn ra như thế nào?",
    "options": [
      "Chia dữ liệu thành 5 phần bằng nhau, lặp lại 5 lần, mỗi lần lấy 4 phần để huấn luyện và 1 phần làm kiểm thử; kết quả là trung bình của 5 lần",
      "Huấn luyện 5 mô hình khác nhau trên cùng một tập dữ liệu",
      "Nhân đôi dữ liệu lên 5 lần",
      "Chỉ sử dụng 20% dữ liệu để huấn luyện và 80% để kiểm thử"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n1. Dữ liệu được chia ngẫu nhiên thành $K = 5$ tập con (folds) có kích thước xấp xỉ bằng nhau.\n2. Quy trình lặp $5$ vòng độc lập:\n   - **Vòng 1:** Dùng Folds [2, 3, 4, 5] để Train $\\to$ Đánh giá trên Fold [1] (Test).\n   - **Vòng 2:** Dùng Folds [1, 3, 4, 5] để Train $\\to$ Đánh giá trên Fold [2] (Test).\n   - ...\n   - **Vòng 5:** Dùng Folds [1, 2, 3, 4] để Train $\\to$ Đánh giá trên Fold [5] (Test).\n3. **Kết quả cuối cùng:** Lấy điểm trung bình cộng của cả 5 lần.\n* **Ưu điểm vượt trội:** Mọi mẫu dữ liệu đều được làm bài kiểm tra đúng 1 lần và được dùng để học 4 lần, loại bỏ hoàn toàn yếu tố may rủi khi chia tập.",
    "slideRef": "Slide Chương 3, Trang 105"
  },
  {
    "id": 99,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Trường hợp nào sau đây là một ví dụ ĐIỂN HÌNH của hiện tượng Data Leakage (Rò rỉ dữ liệu)?",
    "options": [
      "Tính toán giá trị trung bình $\\mu$ và độ lệch chuẩn $\\sigma$ trên TOÀN BỘ dữ liệu trước khi chia thành tập Train và Test",
      "Chia tập Train và Test trước rồi chỉ fit scaler trên tập Train",
      "Sử dụng K-Fold Cross-Validation trên tập Train",
      "Đánh giá mô hình trên một tập Test độc lập chưa từng thấy"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n**Data Leakage (Rò rỉ dữ liệu)** là hiện tượng thông tin từ tập Kiểm thử (tương lai) bị **\"lọt\" vào quá trình huấn luyện của tập Train**.\n\n#### ⚠️ Phân tích lỗi sai kinh điển:\n* Nếu bạn tính $\\mu$ và $\\sigma$ trên toàn bộ $100\\%$ dữ liệu trước khi chia tách, thì các con số $\\mu, \\sigma$ đó đã **chứa sẵn thông tin phân phối của tập Test** rồi!\n* Mô hình khi học trên Train vô tình \"biết trước đề thi\", dẫn đến điểm số Validation/Test cao ảo, nhưng khi mang ra chạy thực tế ngoài đời sẽ thất bại thảm hại!\n* ✅ **Quy trình chuẩn mực:** Bắt buộc **Chia dữ liệu Train/Test trước**, chỉ dùng tập Train để tính tham số (`fit`), sau đó dùng đúng tham số đó để biến đổi (`transform`) cho cả Train và Test!",
    "slideRef": "Slide Chương 3, Trang 111"
  },
  {
    "id": 100,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Leave-One-Out Cross-Validation (LOO) là trường hợp đặc biệt của K-Fold khi giá trị $K$ bằng bao nhiêu?",
    "options": [
      "$K = n$ (với $n$ là tổng số mẫu dữ liệu)",
      "$K = 1$",
      "$K = n / 2$",
      "$K = 10$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nLeave-One-Out (LOO) là trường hợp cực đoan nhất của K-Fold khi chọn **$K = n$ (bằng đúng số lượng mẫu)**:\n* Nếu bạn có $n = 100$ mẫu:\n  - Vòng 1: Lấy 99 mẫu để học, kiểm tra trên **đúng 1 mẫu duy nhất**.\n  - Vòng 2: Lấy 99 mẫu khác để học, kiểm tra trên mẫu thứ 2.\n  - Lặp lại đúng $100$ lần!\n* **Ưu điểm:** Tận dụng tối đa dữ liệu huấn luyện, không có yếu tố ngẫu nhiên.\n* **Nhược điểm chí mạng:** Chi phí tính toán cực kỳ đắt đỏ vì phải huấn luyện lại mô hình $n$ lần (không khả thi với dữ liệu lớn hàng chục ngàn mẫu).",
    "slideRef": "Slide Chương 3, Trang 106"
  },
  {
    "id": 101,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Khi nào ta nên sử dụng Repeated Hold-Out thay vì một lần Hold-Out duy nhất?",
    "options": [
      "Khi tập dữ liệu tương đối nhỏ và ta muốn giảm thiểu phương sai của phép ước lượng hiệu năng bằng cách lặp lại nhiều lần phân chia ngẫu nhiên",
      "Khi tập dữ liệu có hàng tỷ mẫu",
      "Khi mô hình không có tham số",
      "Khi muốn tăng tốc độ huấn luyện mô hình"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Nếu tập dữ liệu nhỏ và chỉ chia Train/Test 1 lần duy nhất (Hold-Out thông thường), điểm số phụ thuộc rất lớn vào \"may rủi\" (lỡ tập Test bốc trúng toàn ca quá dễ hoặc quá khó).\n* **Repeated Hold-Out (Hold-Out lặp lại nhiều lần):** Lặp lại việc chia ngẫu nhiên Train/Test nhiều lần (ví dụ 10-20 lần), mỗi lần huấn luyện và đánh giá độc lập, sau đó lấy trung bình cộng.\n* Cách này giúp **giảm phương sai (độ bất định)** của phép đánh giá và cho con số tin cậy hơn nhiều.",
    "slideRef": "Slide Chương 3, Trang 104"
  },
  {
    "id": 102,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Biên quyết định (Decision Boundary) của mô hình Logistic Regression chuẩn có dạng hình học là gì?",
    "options": [
      "Một đường thẳng (2D) hoặc siêu phẳng (nhiều chiều) tuyến tính: $w^T x = 0$",
      "Một đường cong parabol phi tuyến",
      "Một hình tròn khép kín",
      "Tập hợp các điểm rời rạc ngẫu nhiên"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nNgưỡng phân loại mặc định là $P = \\sigma(w^Tx) = 0.5$.\nMà $\\sigma(z) = 0.5$ khi và chỉ khi:\n$$z = w^Tx = w_0 + w_1 x_1 + \\dots + w_p x_p = 0$$\n* Phương trình $w^Tx = 0$ là phương trình của **một đường thẳng** trong không gian 2D, **một mặt phẳng** trong không gian 3D, hoặc **một siêu phẳng (Hyperplane)** trong không gian $p$ chiều!\n* Do đó, dù hàm Sigmoid là phi tuyến, nhưng **Biên quyết định của Logistic Regression thuần túy luôn là một ranh giới TUYẾN TÍNH**.",
    "slideRef": "Slide Chương 3, Trang 74, 77"
  },
  {
    "id": 103,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Để so sánh hiệu năng của nhiều mô hình khác nhau một cách công bằng (Fair Comparison), quy tắc bắt buộc là gì?",
    "options": [
      "Đánh giá tất cả các mô hình trên CÙNG MỘT tập kiểm thử (Test Set) độc lập cố định, hoặc sử dụng cùng một cấu hình chia K-Fold",
      "Cho mỗi mô hình tự chọn tập dữ liệu kiểm thử riêng",
      "Chỉ so sánh điểm số trên tập huấn luyện (Train Score)",
      "So sánh thời gian cài đặt thư viện của các mô hình"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Giống như kỳ thi tốt nghiệp: Tất cả thí sinh (các mô hình) bắt buộc phải **làm chung một đề thi trong cùng một điều kiện phòng thi** thì mới phân định được ai giỏi hơn ai!\n* Nếu mô hình A thi đề dễ (tập test dễ), mô hình B thi đề khó, việc so sánh điểm số là hoàn toàn khập khiễng và vô nghĩa.\n* 👉 **Quy tắc vàng:** Luôn giữ cố định một tập Test Set độc lập (hoặc dùng chung `random_state` khi chia K-Fold) để chấm điểm tất cả các mô hình.",
    "slideRef": "Slide Chương 3, Trang 110"
  },
  {
    "id": 104,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Khi bài toán phân loại đa lớp có các lớp không loại trừ lẫn nhau (Multi-label Classification, một mẫu có thể vừa là 'Áo sơ mi' vừa là 'Màu xanh'), giải pháp phù hợp là gì?",
    "options": [
      "Huấn luyện $K$ mô hình Logistic Regression nhị phân độc lập, mỗi mô hình dùng hàm Sigmoid và hàm mất mát Binary Cross-Entropy riêng",
      "Sử dụng duy nhất hàm Softmax",
      "Chuyển bài toán thành hồi quy OLS",
      "Bắt buộc chọn 1 nhãn duy nhất"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Multi-class (Đa lớp độc quyền):** Nhãn loại trừ lẫn nhau (ví dụ: Chó HOẶC Mèo HOẶC Gà) $\\implies$ Dùng **Softmax** vì tổng xác suất bị ép bằng 1.\n* **Multi-label (Đa nhãn đồng thời):** Một bức ảnh có thể VỪA có chó, VỪA có mèo, VỪA có người. Các thuộc tính này độc lập với nhau!\n* 👉 **Giải pháp:** Tách thành $K$ bài toán phân loại nhị phân độc lập:\n  - Mô hình 1 (Sigmoid): Có chó không? (Yes/No)\n  - Mô hình 2 (Sigmoid): Có mèo không? (Yes/No)\n  - Mô hình 3 (Sigmoid): Có người không? (Yes/No)\n  Mỗi mô hình sử dụng hàm Sigmoid và BCE Loss riêng.",
    "slideRef": "Slide Chương 3, Trang 80"
  },
  {
    "id": 105,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hiện tượng Overfitting trong hồi quy tuyến tính thường thể hiện qua đặc điểm nào của các trọng số $w$?",
    "options": [
      "Các hệ số trọng số $w$ có độ lớn cực kỳ lớn (bùng nổ) và trái dấu nhau giữa các đặc trưng có tương quan cao",
      "Tất cả các trọng số $w$ đều bằng đúng 0",
      "Các hệ số trọng số $w$ có độ lớn rất nhỏ gần 0",
      "Hệ số chặn bias luôn mang giá trị âm"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nKhi mô hình cố gắng khớp từng chấm dữ liệu nhiễu trong tập Train, đường hồi quy bị uốn éo dữ dội.\n* Trong đại số tuyến tính, điều này khiến các trọng số $w$ bị **thổi phồng độ lớn (bùng nổ)**, ví dụ $w_1 = +50.000$ và $w_2 = -49.990$.\n* Khi gặp dữ liệu mới ngoài đời chỉ cần lệch một chút xíu, các trọng số khổng lồ này sẽ khuếch đại sai số lên hàng triệu lần!\n* 👉 Đó là lý do vì sao các kỹ thuật **Regularization (Ridge, Lasso)** sinh ra để \"phạt độ lớn của trọng số\", ép chúng không được phép bùng nổ, từ đó ngăn chặn hữu hiệu Overfitting.",
    "slideRef": "Slide Chương 3, Trang 41, 49"
  },
  {
    "id": 211,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Nếu ma trận hiệp phương sai $X^T X$ không khả nghịch (singular/suy biến do hiện tượng đa cộng tuyến hoàn hảo hoặc $n < p$), nghiệm của bài toán Hồi quy tuyến tính có thể giải quyết bằng cách nào?",
    "options": [
      "Sử dụng Ma trận giả nghịch đảo Moore-Penrose $X^+$ hoặc bổ sung thành phần chính quy hóa Ridge Regression $(X^TX + \\lambda I)^{-1}$",
      "Bắt buộc xóa bỏ toàn bộ dữ liệu và thu thập lại",
      "Chuyển sang dùng hàm mất mát MAE để giải bằng nghiệm đóng",
      "Tăng số lượng đặc trưng $p$ lên nhiều hơn nữa"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nKhi ma trận $X^TX$ không khả nghịch (định thức $\\det(X^TX) = 0$), phương trình chuẩn $X^TXw = X^Ty$ có **vô số nghiệm** (hệ thiếu điều kiện). Ta có 2 giải pháp toán học kinh điển:\n\n1. **Ma trận Giả nghịch đảo Moore-Penrose ($X^+$):** Dùng kỹ thuật Phân tích giá trị suy biến (SVD: $X = U\\Sigma V^T$) để tính $X^+ = V\\Sigma^+ U^T$. Nghiệm $w^* = X^+ y$ là nghiệm có **chuẩn $L_2$ nhỏ nhất** trong vô số nghiệm khả dĩ.\n2. **Hồi quy Ridge ($L_2$ Regularization):** Cộng thêm một lượng dương $\\lambda I$ vào đường chéo chính:\n   $$w^* = (X^T X + \\lambda I)^{-1} X^T y$$\n   Bảo đảm $(X^TX + \\lambda I)$ luôn đối xứng xác định dương và **luôn nghịch đảo được $100\\%$**!",
    "slideRef": "Slide Chương 3, Trang 19-21, 46"
  },
  {
    "id": 212,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Khi áp dụng hàm cơ sở phi tuyến $\\phi(x)$ (như hồi quy đa thức bậc cao $y = w_0 + w_1 x + w_2 x^2 + \\dots$), tại sao mô hình này vẫn được gọi là 'Hồi quy Tuyến tính'?",
    "options": [
      "Vì hàm mục tiêu TUYẾN TÍNH theo các tham số trọng số $w$, dù nó phi tuyến đối với biến đầu vào $x$",
      "Vì đồ thị biểu diễn luôn là một đường thẳng trong không gian 2D",
      "Vì sai số chỉ tăng theo hàm tuyến tính",
      "Vì nó chỉ áp dụng được cho dữ liệu tuyến tính hoàn hảo"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong thuật ngữ Học máy, tính chất **\"Tuyến tính\" (Linearity)** của mô hình hồi quy được định nghĩa theo **CÁC THAM SỐ CẦN HỌC $w$**, chứ KHÔNG PHẢI theo biến đầu vào $x$!\n* Phương trình:\n  $$y = w_0 + w_1 x + w_2 x^2 + w_3 \\sin(x)$$\n* Nếu ta đặt các biến phụ: $z_1 = x, z_2 = x^2, z_3 = \\sin(x)$, phương trình trở thành:\n  $$y = w_0 + w_1 z_1 + w_2 z_2 + w_3 z_3 = w^T z$$\n* Đạo hàm theo từng $w_j$ là $\\frac{\\partial y}{\\partial w_j} = z_j$ (bậc nhất, tuyến tính độc lập).\n* 👉 Vì mối quan hệ giữa dự đoán $\\hat{y}$ và các tham số $w$ là tuyến tính bậc nhất, bài toán tối ưu vẫn giữ nguyên dạng lồi bậc hai và giải được bằng nghiệm đóng OLS quen thuộc!",
    "slideRef": "Slide Chương 3, Trang 24-25"
  },
  {
    "id": 213,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Dưới giả định thống kê nào thì nghiệm Cực đại hóa hợp lý (Maximum Likelihood Estimation - MLE) trong hồi quy hoàn toàn tương đương với nghiệm Bình phương tối thiểu (OLS)?",
    "options": [
      "Nhiễu $\\epsilon$ là các biến ngẫu nhiên độc lập cùng tuân theo phân phối chuẩn Gaussian $\\epsilon_i \\sim \\mathcal{N}(0, \\sigma^2)$",
      "Nhiễu $\\epsilon$ tuân theo phân phối đều (Uniform Distribution)",
      "Nhiễu $\\epsilon$ tuân theo phân phối Laplace",
      "Dữ liệu đầu vào $x$ tuân theo phân phối Bernoulli"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nRonald Fisher (tiếp cận thống kê) và Carl Friedrich Gauss (tiếp cận hình học) đi theo hai con đường khác nhau nhưng hội tụ tại cùng một nghiệm nhờ giả định phân phối chuẩn:\n* Giả sử nhiễu ngẫu nhiên $\\epsilon_i = y_i - w^Tx_i$ độc lập và có phân phối chuẩn $\\mathcal{N}(0, \\sigma^2)$.\n* Hàm mật độ xác suất của 1 mẫu:\n  $$p(y_i|x_i; w) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} \\exp\\left( -\\frac{(y_i - w^Tx_i)^2}{2\\sigma^2} \\right)$$\n* Khi nhân toàn bộ $n$ xác suất độc lập lại và lấy $\\ln$ (Log-Likelihood), ta có:\n  $$\\ln L(w) = -\\frac{n}{2}\\ln(2\\pi\\sigma^2) - \\frac{1}{2\\sigma^2} \\sum_{i=1}^n (y_i - w^Tx_i)^2$$\n* Muốn $\\ln L(w)$ lớn nhất thì đại lượng $\\sum(y_i - w^Tx_i)^2$ bắt buộc phải bé nhất $\\implies$ **Chính là hàm mất mát OLS**!",
    "slideRef": "Slide Chương 3, Trang 26-28"
  },
  {
    "id": 214,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Xét theo ý nghĩa hình học của Hồi quy tuyến tính OLS, vector dự đoán $\\hat{y} = X w_{\\text{OLS}}$ đại diện cho yếu tố nào?",
    "options": [
      "Hình chiếu trực giao của vector nhãn thật $y$ lên không gian cột $\\text{Col}(X)$",
      "Vector tiếp tuyến với đường cong dữ liệu",
      "Vector trực giao với không gian cột $\\text{Col}(X)$",
      "Trọng tâm của ma trận dữ liệu đầu vào"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Không gian cột $\\text{Col}(X) = \\{Xw \\mid w \\in \\mathbb{R}^p\\}$ là không gian con đa chiều (mặt phẳng siêu phẳng) chứa toàn bộ các giá trị dự đoán mà mô hình có thể tạo ra.\n* Vector nhãn thực tế $y \\in \\mathbb{R}^n$ thường nằm bên ngoài không gian này (vì có nhiễu ngẫu nhiên).\n* Nghiệm OLS tối thiểu hóa khoảng cách Euclid $\\|y - \\hat{y}\\|_2$.\n* Trong hình học không gian, khoảng cách từ một điểm bên ngoài đến một không gian con đạt giá trị nhỏ nhất tại **Hình chiếu trực giao (Orthogonal Projection)** của điểm đó lên không gian con.\n* 👉 Ma trận biến đổi $P = X(X^TX)^{-1}X^T$ chính là **Ma trận chiếu trực giao (Projection Matrix)** đưa $y \\to \\hat{y}$.",
    "slideRef": "Slide Chương 3, Trang 29-30"
  },
  {
    "id": 215,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Độ phức tạp tính toán khi tìm nghiệm đóng OLS bằng công thức $w^* = (X^T X)^{-1} X^T y$ với $n$ mẫu và $p$ đặc trưng xấp xỉ là bao nhiêu?",
    "options": [
      "$\\mathcal{O}(p^3 + n p^2)$",
      "$\\mathcal{O}(n^3 + p)$",
      "$\\mathcal{O}(n \\log n)$",
      "$\\mathcal{O}(p)$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCác bước tính toán nghiệm đóng OLS:\n1. **Phép nhân $X^T X$:** Nhân ma trận $(p \\times n)$ với $(n \\times p)$ tốn **$\\mathcal{O}(n p^2)$** phép tính.\n2. **Phép nghịch đảo ma trận $(X^TX)^{-1}$:** Ma trận vuông $(p \\times p)$ có độ phức tạp nghịch đảo bằng khử Gauss là **$\\mathcal{O}(p^3)$**.\n3. **Phép nhân với $X^T y$:** Tốn **$\\mathcal{O}(n p + p^2)$**.\n* 👉 Tổng độ phức tạp là: **$\\mathcal{O}(p^3 + n p^2)$**.\n\n⚠️ **Ý nghĩa thực tế:** Khi số đặc trưng $p$ rất lớn (ví dụ $p = 100.000$ trong xử lý văn bản, gen di truyền), $p^3 = 10^{15}$ phép tính sẽ làm máy tính treo cứng hoặc tràn RAM! Lúc đó người ta **không dùng nghiệm đóng mà chuyển sang dùng Gradient Descent**!",
    "slideRef": "Slide Chương 3, Trang 31"
  },
  {
    "id": 216,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Khi nào ta NÊN ưu tiên sử dụng Elastic Net thay vì dùng riêng biệt Lasso ($L_1$)?",
    "options": [
      "Khi số lượng đặc trưng $p$ lớn hơn nhiều so với số lượng mẫu $n$ ($p \\gg n$) hoặc khi có các nhóm đặc trưng tương quan rất mạnh với nhau",
      "Khi tất cả các đặc trưng đều hoàn toàn độc lập với nhau",
      "Khi bài toán chỉ có duy nhất 1 biến đặc trưng",
      "Khi muốn tăng tốc độ tính toán gấp 10 lần so với OLS"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nLasso ($L_1$) có 2 điểm yếu chí mạng trong thực tế:\n1. **Giới hạn khi $p > n$:** Trong bài toán số chiều lớn (ví dụ $p = 10.000$ gen nhưng chỉ có $n = 100$ bệnh nhân), thuật toán Lasso chỉ có thể chọn tối đa $n$ đặc trưng rồi dừng lại, bỏ sót $p - n$ đặc trưng còn lại.\n2. **Vấn đề nhóm biến tương quan (Collinear Groups):** Nếu có một nhóm 5 biến tương quan mạnh với nhau (ví dụ các chỉ số huyết áp khác nhau), Lasso thường chỉ chọn vu vơ đúng 1 biến và ép 4 biến còn lại về 0, làm mất thông tin tổng thể.\n\n👉 **Elastic Net cứu nguy:** Nhờ thành phần $L_2$ cộng thêm, nó vừa chọn được đặc trưng thưa (nhờ $L_1$), vừa kích hoạt **hiệu ứng nhóm (Grouping Effect)** để giữ lại toàn bộ cụm đặc trưng tương quan!",
    "slideRef": "Slide Chương 3, Trang 49-51"
  },
  {
    "id": 217,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Trong Hồi quy Logistic, đạo hàm của hàm mất mát Binary Cross-Entropy theo vector trọng số $w$ có dạng biểu thức là gì?",
    "options": [
      "$\\nabla_w J(w) = X^T (\\hat{y} - y) = X^T (\\sigma(Xw) - y)$",
      "$\\nabla_w J(w) = -2 X^T (y - Xw)$",
      "$\\nabla_w J(w) = X^T y \\ln(\\hat{y})$",
      "$\\nabla_w J(w) = (X^TX)^{-1} (\\hat{y} - y)$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nÁp dụng quy tắc chuỗi vi phân (Chain Rule):\n1. Đạo hàm của hàm mất mát BCE theo xác suất dự đoán $p_i = \\sigma(z_i)$:\n   $$\\frac{\\partial L_i}{\\partial p_i} = -\\frac{y_i}{p_i} + \\frac{1 - y_i}{1 - p_i} = \\frac{p_i - y_i}{p_i(1 - p_i)}$$\n2. Đạo hàm của hàm Sigmoid theo điểm số $z_i = w^Tx_i$:\n   $$\\frac{\\partial p_i}{\\partial z_i} = p_i (1 - p_i)$$\n3. Đạo hàm của $z_i$ theo trọng số $w$:\n   $$\\frac{\\partial z_i}{\\partial w} = x_i$$\n4. Nhân chuỗi lại: đại lượng $p_i(1 - p_i)$ ở tử và mẫu **triệt tiêu hoàn hảo cho nhau**!\n   $$\\nabla_w J(w) = \\sum_{i=1}^n (p_i - y_i) x_i = X^T (\\hat{y} - y)$$\n👉 Biểu thức gradient của Logistic Regression có dạng giống hệt như Hồi quy tuyến tính: $X^T(\\hat{y} - y)$, chỉ khác là $\\hat{y} = \\sigma(Xw)$ thay vì $Xw$!",
    "slideRef": "Slide Chương 3, Trang 62-65"
  },
  {
    "id": 218,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Trong bài toán phân lớp đa lớp có mất cân bằng dữ liệu, nhận định nào sau đây là CHÍNH XÁC khi so sánh Macro-F1 và Micro-F1?",
    "options": [
      "Macro-F1 phản ánh trung thực hiệu năng trên các lớp thiểu số hơn Micro-F1, vì nó tính F1 riêng từng lớp rồi chia đều trọng số",
      "Micro-F1 luôn phản ánh lớp thiểu số tốt hơn",
      "Macro-F1 luôn bằng Accuracy",
      "Micro-F1 không phụ thuộc vào lớp đa số"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Micro-F1:** Gom toàn bộ các ca đoán đúng sai trên toàn bộ dữ liệu lại tính một lần. Trong phân loại đa lớp thông thường, Micro-F1 **chính bằng Accuracy**. Do đó, nó bị các lớp chiếm số đông chi phối hoàn toàn.\n* **Macro-F1:** Tính F1-score độc lập cho từng lớp:\n  $$\\text{Macro-F1} = \\frac{F_{1,\\text{Lớp 1}} + F_{1,\\text{Lớp 2}} + \\dots + F_{1,\\text{Lớp } K}}{K}$$\n  Mỗi lớp đều được chia đều tỷ lệ $\\frac{1}{K}$. Nếu mô hình làm hỏng lớp hiếm, điểm số của lớp đó rớt về 0 sẽ kéo tụt Macro-F1 xuống ngay lập tức.\n* 👉 Vì thế, **Macro-F1 là thước đo chuẩn mực nhất để phát hiện xem mô hình có đối xử tệ với lớp thiểu số hay không**.",
    "slideRef": "Slide Chương 3, Trang 89-92"
  },
  {
    "id": 219,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Một mô hình chẩn đoán bệnh ung thư dự đoán TẤT CẢ bệnh nhân đều 'Không ung thư' (lớp Âm tính). Khi đó chỉ số Recall đối với lớp ung thư bằng bao nhiêu?",
    "options": [
      "Recall = 0.0",
      "Recall = 1.0",
      "Recall = 0.5",
      "Không xác định được"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Vì mô hình đoán tất cả đều là âm tính, nên số ca ung thư mà nó tìm ra được là: **$TP = 0$**.\n* Toàn bộ bệnh nhân ung thư thật đều bị bỏ sót: **$FN = \\text{Tổng số ca bệnh}$**.\n* Áp dụng công thức tính Recall:\n  $$\\text{Recall} = \\frac{TP}{TP + FN} = \\frac{0}{0 + FN} = 0.0 \\quad (0\\%!)$$\n* 👉 Dù Accuracy của mô hình này có thể đạt $99.9\\%$, nhưng điểm **Recall = 0%** đã vạch trần bản chất vô dụng và nguy hiểm của nó trong y tế!",
    "slideRef": "Slide Chương 3, Trang 84-86"
  },
  {
    "id": 220,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Điểm biểu diễn một mô hình phân loại HOÀN HẢO (Perfect Classifier) trên không gian ROC Curve có tọa độ là bao nhiêu?",
    "options": [
      "$(FPR = 0, TPR = 1)$ - Góc trên bên trái",
      "$(FPR = 1, TPR = 1)$ - Góc trên bên phải",
      "$(FPR = 0, TPR = 0)$ - Gốc tọa độ",
      "$(FPR = 0.5, TPR = 0.5)$ - Chính giữa đồ thị"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nĐồ thị ROC (Receiver Operating Characteristic):\n* **Trục hoành (Trục X):** $FPR = \\frac{FP}{FP + TN}$ (Tỷ lệ báo động nhầm).\n* **Trục tung (Trục Y):** $TPR = \\text{Recall} = \\frac{TP}{TP + FN}$ (Tỷ lệ bắt đúng ca bệnh).\n\n#### 🏆 Mô hình HOÀN HẢO tuyệt đối:\n* Không báo nhầm ca nào: $FP = 0 \\implies FPR = 0$ (nằm sát mép trái).\n* Bắt đúng $100\\%$ không bỏ sót ai: $FN = 0 \\implies TPR = 1$ (nằm sát mép trên cùng).\n* 👉 Tọa độ lý tưởng là **$(0, 1)$ ở góc trên bên trái**! Diện tích dưới đường cong của mô hình này đạt giá trị cực đại: $\\text{AUC} = 1.0$.",
    "slideRef": "Slide Chương 3, Trang 96-98"
  },
  {
    "id": 281,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Hàm mất mát Tổng bình phương phần dư (Residual Sum of Squares - RSS) trong hồi quy tuyến tính được viết dưới dạng chuẩn ma trận là gì?",
    "options": [
      "$RSS = \\|y - Xw\\|_2^2 = (y - Xw)^T (y - Xw)$",
      "$RSS = \\|y - Xw\\|_1$",
      "$RSS = y^T X w$",
      "$RSS = (X^T y)^2$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong đại số ma trận, vector sai số phần dư là:\n$$e = y - \\hat{y} = y - Xw$$\n* Bình phương chuẩn Euclid ($L_2$ Norm) của vector $e$ chính là tích vô hướng của $e$ với chính nó:\n  $$\\|e\\|_2^2 = e^T e = (y - Xw)^T (y - Xw) = \\sum_{i=1}^n (y_i - w^Tx_i)^2$$\n* Phá ngoặc đại số ma trận:\n  $$J(w) = y^Ty - y^TXw - w^TX^Ty + w^TX^TXw$$\n* Vì $y^TXw$ là một đại lượng vô hướng (scalar $1 \\times 1$), nên nó bằng chính chuyển vị của nó $(y^TXw)^T = w^TX^Ty$.\n* Do đó:\n  $$J(w) = y^Ty - 2w^TX^Ty + w^TX^TXw$$",
    "slideRef": "Slide Chương 3, Trang 12-14"
  },
  {
    "id": 282,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Khi giải phương trình đạo hàm cấp một của hàm mất mát OLS theo vector $w$, ta thu được hệ phương trình nào?",
    "options": [
      "Hệ phương trình chuẩn: $X^T X w = X^T y$",
      "Hệ phương trình Laplace: $X w = y$",
      "Hệ phương trình Poisson: $X^T y w = I$",
      "Hệ phương trình thuần nhất: $X^T X w = 0$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nLấy vi phân ma trận của hàm mất mát $J(w) = y^Ty - 2w^TX^Ty + w^TX^TXw$:\n1. Đạo hàm của $-2w^T (X^Ty)$ theo $w$ bằng: $-2X^Ty$.\n2. Đạo hàm của dạng toàn phương $w^T (X^TX) w$ theo $w$ bằng: $2X^TXw$.\n3. Đặt gradient tổng bằng 0 để tìm điểm dừng cực tiểu:\n   $$\\nabla_w J(w) = -2X^Ty + 2X^TXw = 0 \\iff X^TXw = X^Ty$$\n* Đây chính là **Hệ phương trình chuẩn (Normal Equation)**.",
    "slideRef": "Slide Chương 3, Trang 15-16"
  },
  {
    "id": 283,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Khi số lượng đặc trưng $p$ lớn hơn nhiều so với số lượng mẫu quan sát $n$ ($p > n$), điều gì sẽ xảy ra với ma trận $X^T X$ trong OLS?",
    "options": [
      "Ma trận $X^T X$ có kích thước $(p \\times p)$ nhưng hạng tối đa chỉ bằng $n < p$, do đó nó bị suy biến (singular), $\\det(X^TX) = 0$ và không khả nghịch",
      "Ma trận $X^T X$ luôn khả nghịch và có nghiệm duy nhất",
      "Nghiệm OLS tự động trở thành nghiệm Lasso",
      "Không thể nhân ma trận $X$ với chính nó"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Ma trận $X$ có kích thước $(n \\times p)$. Theo định lý đại số tuyến tính:\n  $$\\text{rank}(X^TX) = \\text{rank}(X) \\le \\min(n, p)$$\n* Khi $p > n$, hạng của ma trận $(p \\times p)$ tối đa chỉ có thể là $n$.\n* Một ma trận vuông kích thước $p$ mà chỉ có hạng $n < p$ thì **bị thiếu hạng (Rank-deficient)** $\\implies$ định thức $\\det(X^TX) = 0$.\n* Ma trận có định thức bằng 0 là **ma trận suy biến (Singular Matrix)**, không tồn tại ma trận nghịch đảo $(X^TX)^{-1}$.\n* 👉 Phương trình có **vô số nghiệm**, OLS thuần túy bó tay. Cần dùng **Ridge Regression** để khắc phục!",
    "slideRef": "Slide Chương 3, Trang 18-20"
  },
  {
    "id": 284,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Trong Hồi quy Ridge ($L_2$ Regularization), tại sao ma trận $(X^T X + \\lambda I)$ với $\\lambda > 0$ LUÔN LUÔN KHẢ NGHỊCH?",
    "options": [
      "Vì $X^T X$ là ma trận nửa xác định dương (các trị riêng $\\mu_i \\ge 0$), khi cộng thêm $\\lambda I$ thì mọi trị riêng trở thành $(\\mu_i + \\lambda) \\ge \\lambda > 0$, biến nó thành ma trận xác định dương và $\\det > 0$",
      "Vì ma trận đơn vị $I$ làm mất tính đối xứng của ma trận",
      "Vì nó biến đổi tất cả các phần tử thành số âm",
      "Vì kích thước ma trận giảm đi một nửa"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nChứng minh toán học trực quan:\n1. Ma trận $X^TX$ luôn đối xứng và **nửa xác định dương (Positive Semi-Definite)**. Điều này nghĩa là tất cả các trị riêng (eigenvalues) $\\mu_i$ của nó đều không âm: $\\mu_i \\ge 0$.\n2. Khi cộng thêm $\\lambda I$ (với $\\lambda > 0$), theo tính chất của đại số tuyến tính, mọi trị riêng đều được tịnh tiến thêm một lượng $\\lambda$:\n   $$\\text{Trị riêng mới} = \\mu_i + \\lambda \\ge \\lambda > 0$$\n3. Định thức của một ma trận bằng tích tất cả các trị riêng của nó:\n   $$\\det(X^TX + \\lambda I) = \\prod_{i=1}^p (\\mu_i + \\lambda) > 0$$\n4. Vì định thức luôn dương nghiêm ngặt, ma trận **hoàn toàn không thể suy biến** $\\implies$ **LUÔN KHẢ NGHỊCH 100% trong mọi trường hợp!**",
    "slideRef": "Slide Chương 3, Trang 23-25"
  },
  {
    "id": 285,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Trong hồi quy Ridge, điều gì xảy ra với các hệ số trọng số $w$ khi hệ số điều chuẩn $\\lambda$ tiến dần về $0$ ($\\lambda \\to 0$)?",
    "options": [
      "Nghiệm $w_{\\text{Ridge}}$ tiệm cận dần về nghiệm OLS thông thường $w_{\\text{OLS}}$",
      "Tất cả các trọng số đều biến thành 0",
      "Tất cả các trọng số đều bùng nổ ra vô cùng",
      "Mô hình biến thành cây quyết định"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nXét công thức nghiệm đóng của Ridge:\n$$w^*_{\\text{Ridge}} = (X^T X + \\lambda I)^{-1} X^T y$$\n* Khi $\\lambda \\to 0$, đại lượng $\\lambda I \\to 0$. Biểu thức trở thành:\n  $$\\lim_{\\lambda \\to 0} w^*_{\\text{Ridge}} = (X^T X)^{-1} X^T y = w^*_{\\text{OLS}}$$\n* **Ý nghĩa:** $\\lambda$ là chiếc van điều tiết.\n  - Vặn $\\lambda = 0$: Mở toang van, mô hình tự do khớp dữ liệu tối đa (giống OLS).\n  - Vặn $\\lambda$ càng lớn: Siết chặt van, ép các trọng số teo nhỏ dần để chống Overfitting.",
    "slideRef": "Slide Chương 3, Trang 26-28"
  },
  {
    "id": 286,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Về mặt hình học, tại sao Lasso ($L_1$) có khả năng ép các hệ số trọng số $w$ về đúng bằng $0$ tuyệt đối, còn Ridge ($L_2$) thì không?",
    "options": [
      "Vùng ràng buộc của chuẩn $L_1$ có dạng hình thoi đa diện với các góc nhọn nằm ngay trên các trục tọa độ, khiến các đường đồng mức sai số dễ tiếp xúc tại đúng các đỉnh này",
      "Vì chuẩn $L_1$ có đạo hàm lớn hơn chuẩn $L_2$",
      "Vì chuẩn $L_2$ chỉ áp dụng được cho số dương",
      "Vì Lasso chia dữ liệu thành các góc phần tư độc lập"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Hãy tưởng tượng bạn thổi một quả bóng bầu dục (đường đồng mức elip của hàm mất mát OLS) phình to dần từ điểm tối ưu $w_{\\text{OLS}}$:\n  - **Ridge ($L_2$):** Quả bóng elip va chạm với **vùng ràng buộc hình tròn** $w_1^2 + w_2^2 \\le C$. Vì đường tròn trơn láng không có góc cạnh, điểm tiếp xúc hầu như luôn nằm trên cung tròn (nơi cả $w_1 \\ne 0$ và $w_2 \\ne 0$).\n  - **Lasso ($L_1$):** Quả bóng elip va chạm với **vùng ràng buộc hình thoi** $|w_1| + |w_2| \\le C$. Do các góc nhọn chĩa thẳng ra ngoài theo các trục tọa độ, quả bóng elip xác suất cực cao sẽ đụng trúng **đúng đỉnh nhọn** trước tiên!\n* Tại đỉnh nhọn trên trục $w_1$, tọa độ $w_2$ **bằng đúng số 0 tuyệt đối**!\n* 👉 Đó là lý do tại sao Lasso tạo ra **nghiệm thưa (Sparsity)**, loại bỏ triệt để các biến dư thừa.",
    "slideRef": "Slide Chương 3, Trang 31-33"
  },
  {
    "id": 287,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Tại sao Hồi quy Lasso KHÔNG CÓ nghiệm đóng giải tích (Closed-form analytical solution)?",
    "options": [
      "Vì hàm trị tuyệt đối $|w_j|$ có điểm gãy góc tại $0$, tại đó đạo hàm không tồn tại (không khả vi), không thể đặt đạo hàm bằng 0 để giải bằng ma trận",
      "Vì ma trận của Lasso luôn có số hàng bằng số cột",
      "Vì nó có quá nhiều nghiệm đóng cùng lúc",
      "Vì Lasso bắt buộc phải chia dữ liệu thành 3 tập"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Hàm mục tiêu của Lasso chứa số hạng $\\sum |w_j|$.\n* Hàm số $f(x) = |x|$ có đồ thị hình chữ V gãy nhọn tại gốc tọa độ $x = 0$.\n* Tại điểm $x = 0$, đạo hàm bên trái bằng $-1$, đạo hàm bên phải bằng $+1$ $\\implies$ **Hàm số không khả vi (không có đạo hàm thông thường) tại điểm 0**.\n* Vì không thể lấy đạo hàm toàn phần và giải phương trình đại số tuyến tính như OLS hay Ridge, ta bắt buộc phải dùng các thuật toán lặp số học như **Coordinate Descent (Hạ tọa độ dựa trên hàm Soft-thresholding)**.",
    "slideRef": "Slide Chương 3, Trang 32-34"
  },
  {
    "id": 288,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Hồi quy Elastic Net giải quyết nhược điểm nào của Hồi quy Lasso khi tập dữ liệu có các đặc trưng có độ tương quan rất cao (Collinear Features)?",
    "options": [
      "Khắc phục việc Lasso chỉ chọn ngẫu nhiên 1 biến trong nhóm tương quan rồi loại bỏ các biến còn lại, bằng cách giữ lại cả nhóm đặc trưng nhờ thành phần $L_2$",
      "Tăng thời gian huấn luyện lên gấp đôi",
      "Ép tất cả các hệ số phải bằng nhau",
      "Tự động sinh thêm dữ liệu nhân tạo"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Giả sử dự đoán giá xe hơi có 3 biến: Dung tích xi lanh, Công suất động cơ mã lực, và Lượng tiêu thụ xăng (cả 3 biến này tương quan cực kỳ chặt chẽ với nhau).\n* **Vấn đề của Lasso:** Do tính chất hình thoi sắc nhọn, nó sẽ bốc đại đúng 1 biến và triệt tiêu 2 biến còn lại về 0, gây mất mát góc nhìn đa chiều của dữ liệu.\n* **Elastic Net:** Kết hợp hình phạt convex nghiêm ngặt của $L_2$:\n  $$J(w) = \\text{Loss} + \\lambda_1 \\|w\\|_1 + \\lambda_2 \\|w\\|_2^2$$\n  Thành phần $L_2$ tạo ra **Hiệu ứng gom cụm (Grouping Effect)**, ép các biến có tương quan cao phải có trọng số gần bằng nhau và được giữ lại cùng nhau trong mô hình!",
    "slideRef": "Slide Chương 3, Trang 35-37"
  },
  {
    "id": 289,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Trong Hồi quy Logistic, đại lượng Tỷ số khả dĩ (Odds) được định nghĩa như thế nào đối với xác suất $p$?",
    "options": [
      "$\\text{Odds} = \\frac{p}{1 - p}$",
      "$\\text{Odds} = \\frac{1 - p}{p}$",
      "$\\text{Odds} = \\ln(p)$",
      "$\\text{Odds} = p(1 - p)$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Odds là tỷ số giữa **xác suất biến cố xảy ra ($p$)** chia cho **xác suất biến cố không xảy ra ($1 - p$)**:\n  $$\\text{Odds} = \\frac{P(y=1)}{P(y=0)} = \\frac{p}{1 - p}$$\n* Ví dụ: Dự báo ngày mai mưa với xác suất $p = 0.75$ ($75\\%$):\n  $$\\text{Odds} = \\frac{0.75}{1 - 0.75} = \\frac{0.75}{0.25} = 3$$\n  Nghĩa là: Khả năng có mưa **gấp 3 lần** khả năng không mưa!",
    "slideRef": "Slide Chương 3, Trang 40-42"
  },
  {
    "id": 290,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Hàm Log-odds (Logit) biểu diễn mối quan hệ giữa biến đầu vào $x$ và xác suất $p$ trong Logistic Regression bằng công thức nào?",
    "options": [
      "$\\ln\\left(\\frac{p}{1 - p}\\right) = w^T x = w_0 + w_1 x_1 + \\dots + w_p x_p$",
      "$\\frac{p}{1 - p} = w^T x$",
      "$\\ln(p) = w^T x$",
      "$p = w^T x$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nHàm Logit là logarit tự nhiên của Odds:\n$$\\text{Logit}(p) = \\ln(\\text{Odds}) = \\ln\\left(\\frac{p}{1 - p}\\right)$$\n* Trong mô hình Logistic Regression, hàm Logit chính là **cầu nối biến đổi** biến mục tiêu xác suất phi tuyến thành một biểu thức tuyến tính theo các đặc trưng:\n  $$\\ln\\left(\\frac{p}{1 - p}\\right) = w_0 + w_1 x_1 + \\dots + w_p x_p = w^Tx$$\n* Khi mũ hóa $e$ cả 2 vế và giải phương trình tìm $p$, ta thu được hàm Sigmoid:\n  $$p = \\frac{1}{1 + e^{-w^Tx}}$$",
    "slideRef": "Slide Chương 3, Trang 41-43"
  },
  {
    "id": 291,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Đạo hàm bậc nhất của hàm kích hoạt Sigmoid $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ theo biến $z$ có dạng rút gọn cực đẹp là gì?",
    "options": [
      "$\\sigma'(z) = \\sigma(z) (1 - \\sigma(z))$",
      "$\\sigma'(z) = \\sigma(z)^2$",
      "$\\sigma'(z) = 1 - \\sigma(z)$",
      "$\\sigma'(z) = e^{-z} \\sigma(z)$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nChứng minh vi phân:\n$$\\sigma(z) = (1 + e^{-z})^{-1}$$\n$$\\sigma'(z) = - (1 + e^{-z})^{-2} \\cdot (-e^{-z}) = \\frac{e^{-z}}{(1 + e^{-z})^2}$$\nTách thành tích 2 phân số:\n$$\\sigma'(z) = \\frac{1}{1 + e^{-z}} \\cdot \\frac{e^{-z}}{1 + e^{-z}} = \\sigma(z) \\cdot \\left( \\frac{1 + e^{-z} - 1}{1 + e^{-z}} \\right) = \\sigma(z) (1 - \\sigma(z))$$\n\n> 💡 **Ý nghĩa thực tế:** Máy tính tính đạo hàm của Sigmoid cực kỳ nhanh! Sau khi đã tính xong giá trị $\\sigma(z)$ ở bước Forward, ở bước Backward chỉ việc lấy phép nhân $\\sigma(1 - \\sigma)$ mà không cần tính lại hàm mũ tốn kém!",
    "slideRef": "Slide Chương 3, Trang 43-44"
  },
  {
    "id": 292,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Tại sao trong Hồi quy Logistic, ta sử dụng hàm mất mát Binary Cross-Entropy thay vì dùng sai số bình phương MSE?",
    "options": [
      "Vì khi kết hợp với hàm phi tuyến Sigmoid, MSE tạo ra hàm mất mát không lồi (Non-convex) có rất nhiều điểm cực tiểu cục bộ (Local Minima), trong khi BCE tạo ra hàm lồi (Convex) có nghiệm tối ưu toàn cục duy nhất",
      "Vì MSE không tính toán được khi xác suất nhỏ hơn 0.5",
      "Vì BCE luôn cho kết quả bằng 0",
      "Vì MSE chỉ dùng cho ma trận đường chéo"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Nếu dùng MSE:** $J(w) = \\frac{1}{2n}\\sum (y_i - \\sigma(w^Tx_i))^2$.\n  - Do hàm Sigmoid uốn lượn hình chữ S, hàm MSE theo $w$ sẽ có bề mặt lồi lõm mấp mô (Non-convex) với **rất nhiều hố bẫy cực tiểu cục bộ (Local Minima)** và vùng yên ngựa bằng phẳng (Gradient vanishing). Thuật toán Gradient Descent sẽ bị mắc kẹt và không tìm được nghiệm tốt.\n* **Nếu dùng BCE (Log Loss):**\n  - Hàm logarit triệt tiêu hoàn toàn hàm mũ của Sigmoid khi tính đạo hàm, làm cho hàm mất mát trở thành **hàm lồi hoàn hảo (Convex Surface hình lòng chảo)**.\n  - Mọi điểm cực tiểu đều chính là **Cực tiểu toàn cục (Global Minimum)**, đảm bảo thuật toán luôn hội tụ về nghiệm tối ưu!",
    "slideRef": "Slide Chương 3, Trang 45-47"
  },
  {
    "id": 293,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Công thức gradient của hàm mất mát Binary Cross-Entropy $J(w)$ theo vector trọng số $w$ là gì?",
    "options": [
      "$\\nabla_w J(w) = \\sum_{i=1}^n (\\sigma(w^T x_i) - y_i) x_i = X^T (\\hat{y} - y)$",
      "$\\nabla_w J(w) = \\sum_{i=1}^n (\\sigma(w^T x_i) - y_i)^2$",
      "$\\nabla_w J(w) = X^T y \\sigma(Xw)$",
      "$\\nabla_w J(w) = (X^TX)^{-1} (\\hat{y} - y)$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nĐạo hàm chuỗi của BCE:\n$$\\nabla_w J(w) = \\sum_{i=1}^n (\\hat{y}_i - y_i) x_i = X^T (\\hat{y} - y)$$\n* Trong đó $\\hat{y}_i = \\sigma(w^Tx_i)$ là xác suất dự đoán của mô hình.\n* **Công thức cập nhật trọng số trong Gradient Descent:**\n  $$w \\leftarrow w - \\eta \\nabla_w J(w) = w - \\eta X^T (\\hat{y} - y)$$\n* Cực kỳ trực quan: Nếu dự đoán đúng $(\\hat{y} \\approx y)$, sai số bằng 0 $\\implies$ không cập nhật. Nếu đoán lệch càng lớn, trọng số được điều chỉnh càng mạnh theo hướng ngược lại.",
    "slideRef": "Slide Chương 3, Trang 47-49"
  },
  {
    "id": 294,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Khi áp dụng Hồi quy Softmax cho bài toán phân loại $K$ lớp ($K \\ge 3$), xác suất một mẫu $x$ thuộc về lớp $k$ được tính bằng công thức nào?",
    "options": [
      "$P(y = k | x) = \\frac{e^{w_k^T x}}{\\sum_{j=1}^K e^{w_j^T x}}$",
      "$P(y = k | x) = \\frac{w_k^T x}{\\sum_{j=1}^K w_j^T x}$",
      "$P(y = k | x) = \\frac{1}{1 + e^{-w_k^T x}}$",
      "$P(y = k | x) = \\ln(w_k^T x)$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nMô hình Softmax (Multinomial Logistic Regression):\n$$P(y = k | x) = \\frac{e^{z_k}}{\\sum_{j=1}^K e^{z_j}} = \\frac{e^{w_k^T x}}{\\sum_{j=1}^K e^{w_j^T x}}$$\n* Mỗi lớp $k$ có một vector trọng số $w_k$ riêng biệt.\n* Hàm mũ $e^{w_k^Tx}$ bảo đảm các điểm số luôn dương.\n* Chia cho tổng $\\sum e^{w_j^Tx}$ ở mẫu số bảo đảm quy tắc tiên đề xác suất:\n  $$\\sum_{k=1}^K P(y = k | x) = 1.0$$",
    "slideRef": "Slide Chương 3, Trang 52-54"
  },
  {
    "id": 295,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Cho ma trận nhầm lẫn trên tập kiểm thử gồm 100 bệnh nhân: Thực tế có 20 người mắc bệnh (Dương) và 80 người khỏe mạnh (Âm). Kết quả mô hình: $TP = 18, FN = 2, FP = 8, TN = 72$. Độ đo Precision của mô hình là bao nhiêu?",
    "options": [
      "$0.6923$ (xấp xỉ $69.23\\%$)",
      "$0.9000$ ($90\\%$)",
      "$0.9000$ ($72\\%$)",
      "$0.8500$ ($85\\%$)"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nÁp dụng công thức Precision:\n$$\\text{Precision} = \\frac{TP}{TP + FP}$$\n* $TP = 18$ (bệnh nhân mắc bệnh được mô hình phát hiện đúng).\n* $FP = 8$ (người khỏe mạnh bị mô hình báo nhầm là mắc bệnh).\n* Tổng số ca mô hình báo động mắc bệnh: $TP + FP = 18 + 8 = 26$.\n$$\\text{Precision} = \\frac{18}{26} \\approx 0.6923 \\quad (69.23\\%)$$",
    "slideRef": "Slide Chương 3, Trang 62-64"
  },
  {
    "id": 296,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Với ma trận nhầm lẫn ở câu trước ($TP = 18, FN = 2, FP = 8, TN = 72$), độ đo Recall (Độ nhạy) của mô hình là bao nhiêu?",
    "options": [
      "$0.9000$ ($90\\%$)",
      "$0.6923$ ($69.23\\%$)",
      "$0.8000$ ($80\\%$)",
      "$0.9500$ ($95\\%$)"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nÁp dụng công thức Recall:\n$$\\text{Recall} = \\frac{TP}{TP + FN}$$\n* $TP = 18$ (bắt đúng bệnh nhân ung thư).\n* $FN = 2$ (bỏ sót 2 bệnh nhân ung thư).\n* Tổng số bệnh nhân ung thư thực tế ngoài đời: $TP + FN = 18 + 2 = 20$.\n$$\\text{Recall} = \\frac{18}{20} = 0.9000 \\quad (90.0\\%)$$\n👉 Mô hình đã quét sạch và phát hiện được $90\\%$ tổng số ca bệnh.",
    "slideRef": "Slide Chương 3, Trang 62-64"
  },
  {
    "id": 297,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Với mô hình có $\\text{Precision} = 0.6923$ và $\\text{Recall} = 0.9000$, điểm số $F_1$-score xấp xỉ bằng bao nhiêu?",
    "options": [
      "$0.7826$ (xấp xỉ $78.3\\%$)",
      "$0.7961$ (Trung bình cộng)",
      "$0.6230$",
      "$0.8500$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCông thức Trung bình điều hòa $F_1$-Score:\n$$F_1 = 2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}}$$\nThay số:\n$$F_1 = 2 \\cdot \\frac{0.6923 \\times 0.9000}{0.6923 + 0.9000} = 2 \\cdot \\frac{0.62307}{1.5923} \\approx 0.7826 \\quad (78.26\\%)$$\n* Chú ý: Nếu lấy trung bình cộng thông thường $\\frac{0.6923 + 0.9}{2} \\approx 0.7961$ là sai công thức $F_1$!",
    "slideRef": "Slide Chương 3, Trang 64-65"
  },
  {
    "id": 298,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Độ đặc hiệu (Specificity hay True Negative Rate - TNR) đo lường điều gì trong bài toán y tế?",
    "options": [
      "Tỷ lệ những người thực sự khỏe mạnh được mô hình xác nhận chính xác là Âm tính: $\\text{TNR} = \\frac{TN}{TN + FP}$",
      "Tỷ lệ những người bị bệnh được phát hiện",
      "Tổng số ca đoán đúng trên toàn bộ mẫu",
      "Tỷ lệ người khỏe bị báo nhầm là có bệnh"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n$$\\text{Specificity} = \\text{TNR} = \\frac{TN}{TN + FP}$$\n* Mẫu số $(TN + FP)$ là **toàn bộ những người THỰC TẾ KHỎE MẠNH (Âm tính)** ngoài đời.\n* Tử số $TN$ là số người khỏe mạnh được mô hình kết luận là Khỏe mạnh.\n* **Ý nghĩa:** Specificity đo lường khả năng **bảo vệ và nhận diện đúng người không có bệnh**, tránh gây hoang mang lo lắng không cần thiết cho người khỏe mạnh.",
    "slideRef": "Slide Chương 3, Trang 63-64"
  },
  {
    "id": 299,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Tỷ lệ dương tính giả (False Positive Rate - FPR) có quan hệ như thế nào với Độ đặc hiệu (Specificity)?",
    "options": [
      "$\\text{FPR} = 1 - \\text{Specificity} = \\frac{FP}{FP + TN}$",
      "$\\text{FPR} = 1 + \\text{Specificity}$",
      "$\\text{FPR} = \\frac{1}{\\text{Specificity}}$",
      "$\\text{FPR} = \\text{Specificity} \\times \\text{Recall}$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong toàn bộ nhóm người khỏe mạnh ngoài đời $(FP + TN)$:\n* Có người được xác nhận khỏe mạnh đúng ($TN$): Chiếm tỷ lệ Specificity $= \\frac{TN}{FP + TN}$.\n* Có người bị báo nhầm là mắc bệnh ($FP$): Chiếm tỷ lệ $\\text{FPR} = \\frac{FP}{FP + TN}$.\n* Vì hai nhóm này bù trừ hoàn hảo cho nhau trong tập người khỏe mạnh:\n  $$\\text{FPR} + \\text{Specificity} = \\frac{FP + TN}{FP + TN} = 1.0$$\n  $$\\implies \\text{FPR} = 1 - \\text{Specificity}$$",
    "slideRef": "Slide Chương 3, Trang 66-67"
  },
  {
    "id": 300,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Hai trục tọa độ của Đường cong Đặc trưng Hoạt động của Bộ thu (ROC Curve) biểu diễn hai đại lượng nào?",
    "options": [
      "Trục tung (Y) là True Positive Rate (TPR / Recall), Trục hoành (X) là False Positive Rate (FPR)",
      "Trục tung là Precision, Trục hoành là Recall",
      "Trục tung là Accuracy, Trục hoành là Số lượng đặc trưng",
      "Trục tung là Loss, Trục hoành là Epochs"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nĐường cong ROC vẽ đồ thị hiệu năng phân loại tại **tất cả các ngưỡng quyết định (Threshold)** từ 0 đến 1:\n* **Trục tung (Y):** $TPR = \\text{Recall} = \\frac{TP}{TP + FN}$ (Tỷ lệ bắt đúng ca bệnh). Càng cao càng tốt.\n* **Trục hoành (X):** $FPR = 1 - \\text{Specificity} = \\frac{FP}{FP + TN}$ (Tỷ lệ báo động nhầm người khỏe). Càng thấp càng tốt.\n* Đường cong lý tưởng sẽ phồng mạnh lên góc trên bên trái.",
    "slideRef": "Slide Chương 3, Trang 66-68"
  },
  {
    "id": 301,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Một bộ phân loại nhị phân ngẫu nhiên thuần túy (Random Guessing như tung đồng xu may rủi) sẽ có diện tích dưới đường cong ROC (ROC-AUC) bằng bao nhiêu?",
    "options": [
      "$\\text{AUC} = 0.5$ (đường chéo nối từ $(0,0)$ đến $(1,1)$)",
      "$\\text{AUC} = 1.0$",
      "$\\text{AUC} = 0.0$",
      "$\\text{AUC} = -1.0$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Khi tung đồng xu may rủi 50/50, tỷ lệ bắt đúng ca bệnh ($TPR$) luôn bằng đúng tỷ lệ báo động nhầm ($FPR$):\n  $$TPR = FPR$$\n* Đồ thị của nó là **đường chéo 45 độ** nối từ gốc tọa độ $(0, 0)$ lên góc $(1, 1)$.\n* Diện tích tam giác dưới đường chéo này chiếm đúng một nửa hình vuông đơn vị:\n  $$\\text{AUC} = \\frac{1}{2} \\times 1 \\times 1 = 0.5$$\n* 👉 Nếu mô hình máy học của bạn có $\\text{AUC} \\approx 0.5$, nghĩa là nó học hành chẳng ra gì, chỉ tương đương với trò tung đồng xu hên xui!",
    "slideRef": "Slide Chương 3, Trang 68"
  },
  {
    "id": 302,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Tọa độ điểm lý tưởng hoàn hảo không có bất kỳ sai số nào trên không gian ROC Curve là điểm nào?",
    "options": [
      "$(0, 1)$",
      "$(1, 1)$",
      "$(0, 0)$",
      "$(0.5, 0.5)$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nMô hình hoàn hảo không bao giờ mắc lỗi:\n* Báo động nhầm $FP = 0 \\implies FPR = 0$ (nằm trên trục tung $X = 0$).\n* Bắt đúng $100\\%$ không bỏ sót $FN = 0 \\implies TPR = 1.0$ (nằm ở đỉnh cao nhất $Y = 1.0$).\n* 👉 Giao điểm là **$(X=0, Y=1)$ ở góc trên cùng bên trái** của đồ thị ROC.\n* Đường cong của mô hình hoàn hảo sẽ đi thẳng đứng từ $(0,0) \\to (0,1)$ rồi đi ngang sang $(1,1)$, bao trùm $100\\%$ diện tích $\\implies \\text{AUC} = 1.0$.",
    "slideRef": "Slide Chương 3, Trang 67"
  },
  {
    "id": 303,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Khi tập dữ liệu cực kỳ mất cân bằng (Severe Class Imbalance, ví dụ bài toán phát hiện giao dịch gian lận chiếm $0.01\\%$), đồ thị nào phản ánh trung thực hiệu năng mô hình hơn ROC Curve?",
    "options": [
      "Đường cong Precision-Recall (PR Curve và PR-AUC)",
      "Đường cong ROC thông thường",
      "Biểu đồ phân tán Scatter Plot",
      "Biểu đồ Pareto"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n#### ⚠️ Điểm yếu của ROC Curve trên dữ liệu cực kỳ lệch lớp:\n* Mẫu số của $FPR$ là $(TN + FP)$. Vì số lượng mẫu âm tính ($TN$) quá khổng lồ (hàng triệu giao dịch bình thường), nên dù mô hình có báo nhầm $FP = 100$ lần, mẫu số quá lớn vẫn làm cho $FPR \\approx 0$ $\\implies$ **Đường ROC vẫn cong đẹp ảo và AUC vẫn $> 0.95$!**\n* **Cứu cánh PR Curve (Precision vs Recall):**\n  - Cả Precision và Recall đều tập trung trực tiếp vào **Lớp Dương tính thiểu số ($TP$)**.\n  - $FP$ được so sánh trực tiếp với $TP$ chứ không bị $TN$ nuốt chửng.\n  - 👉 Khi dữ liệu cực kỳ mất cân bằng, **PR-AUC là thước đo phản ánh trung thực bản chất mô hình**.",
    "slideRef": "Slide Chương 3, Trang 69-70"
  },
  {
    "id": 304,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Trong đánh giá phân loại đa lớp, sự khác biệt giữa Macro-Averaged F1 và Weighted-Averaged F1 là gì?",
    "options": [
      "Macro-F1 gán trọng số ngang nhau cho mọi lớp bất kể số lượng mẫu, còn Weighted-F1 gán trọng số cho từng lớp theo tỷ lệ số lượng mẫu thực tế của lớp đó",
      "Macro-F1 chỉ áp dụng cho 2 lớp",
      "Weighted-F1 luôn nhỏ hơn Macro-F1",
      "Hai chỉ số hoàn toàn giống nhau"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Macro-F1 (Bình đẳng tuyệt đối):**\n  $$\\text{Macro-F1} = \\frac{1}{K} \\sum_{k=1}^K F_{1, k}$$\n  Mỗi lớp có trọng số đúng $\\frac{1}{K}$. Lớp có 10 mẫu cũng quan trọng ngang lớp có 10.000 mẫu.\n* **Weighted-F1 (Có trọng số theo quy mô):**\n  $$\\text{Weighted-F1} = \\sum_{k=1}^K \\frac{n_k}{N} F_{1, k}$$\n  Lớp đông dân chiếm tỷ trọng lớn trong điểm số. Thích hợp khi bạn chấp nhận lớp nhiều mẫu quan trọng hơn lớp ít mẫu.",
    "slideRef": "Slide Chương 3, Trang 71-72"
  },
  {
    "id": 305,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Hệ số xác định $R^2$ (R-squared) trong bài toán hồi quy được tính bằng công thức nào?",
    "options": [
      "$R^2 = 1 - \\frac{SS_{\\text{res}}}{SS_{\\text{tot}}} = 1 - \\frac{\\sum (y_i - \\hat{y}_i)^2}{\\sum (y_i - \\bar{y})^2}$",
      "$R^2 = \\frac{SS_{\\text{res}}}{SS_{\\text{tot}}}$",
      "$R^2 = 1 - \\frac{\\sum |y_i - \\hat{y}_i|}{\\sum |y_i - \\bar{y}|}$",
      "$R^2 = \\frac{\\sum (\\hat{y}_i - \\bar{y})^2}{\\sum (y_i - \\hat{y}_i)^2}$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* $SS_{\\text{res}} = \\sum_{i=1}^n (y_i - \\hat{y}_i)^2$: Tổng bình phương sai số phần dư của mô hình của bạn.\n* $SS_{\\text{tot}} = \\sum_{i=1}^n (y_i - \\bar{y})^2$: Tổng bình phương biến thiên của dữ liệu quanh giá trị trung bình $\\bar{y}$.\n* Phân số $\\frac{SS_{\\text{res}}}{SS_{\\text{tot}}}$ là tỷ lệ sai số chưa giải thích được.\n* Lấy $1$ trừ đi phân số này cho ta **tỷ lệ phương sai của $y$ đã được mô hình giải thích thành công**.",
    "slideRef": "Slide Chương 3, Trang 73-75"
  },
  {
    "id": 306,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Hệ số $R^2$ có thể nhận giá trị âm ($R^2 < 0$) hay không? Khi nào điều này xảy ra?",
    "options": [
      "Có thể âm, xảy ra khi mô hình dự đoán tệ hại đến mức sai số của nó còn lớn hơn cả sai số khi dự đoán bằng giá trị trung bình $\\bar{y}$ ($SS_{\\text{res}} > SS_{\\text{tot}}$)",
      "Không bao giờ âm vì nó là bình phương",
      "Chỉ âm khi dữ liệu có chứa số âm",
      "Chỉ âm trong bài toán phân loại"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n⚠️ **Cạm bẫy trắc nghiệm kinh điển:** Nhiều người thấy chữ có số mũ 2 ($R^2$) liền tưởng nó luôn dương $\\ge 0$. **ĐÓ LÀ SAI LẦM!**\n* Hãy nhìn vào công thức: $R^2 = 1 - \\frac{SS_{\\text{res}}}{SS_{\\text{tot}}}$.\n* Nếu bạn dùng một mô hình dự đoán tồi tệ (hoặc đánh giá trên tập Test mà mô hình bị Overfitting nặng):\n  $$SS_{\\text{res}} > SS_{\\text{tot}} \\implies \\frac{SS_{\\text{res}}}{SS_{\\text{tot}}} > 1 \\implies R^2 < 0!$$\n* **Ý nghĩa:** $R^2 < 0$ là một lời cảnh báo nghiêm khắc: *\"Mô hình của bạn còn tệ hơn cả một người lười biếng chỉ biết lấy trung bình cộng $\\bar{y}$ phán bừa!\"*",
    "slideRef": "Slide Chương 3, Trang 74"
  },
  {
    "id": 307,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Tại sao chỉ số $R^2$ Hiệu chỉnh (Adjusted $R^2$) lại được ưa chuộng hơn $R^2$ thông thường trong hồi quy tuyến tính bội?",
    "options": [
      "Vì nó áp dụng cơ chế phạt đối với việc thêm các biến đặc trưng vô dụng vào mô hình, giúp ngăn chặn hiện tượng Overfitting",
      "Vì nó luôn đạt giá trị bằng 1.0",
      "Vì nó có thể tính toán mà không cần dữ liệu nhãn",
      "Vì nó chuyển đổi biến định tính thành biến định lượng"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n$$\\text{Adjusted } R^2 = 1 - (1 - R^2) \\frac{n - 1}{n - p - 1}$$\n* Khi thêm một biến mới $x_{new}$:\n  - $R^2$ luôn có khuynh hướng tăng giả tạo do tối ưu toán học trên tập Train.\n  - Nhưng trong công thức Adjusted $R^2$, số lượng biến $p$ tăng làm mẫu số $(n - p - 1)$ giảm $\\to$ nhân hệ số phạt lớn hơn.\n  - Nếu biến mới không giúp giảm sai số $SS_{\\text{res}}$ một cách đáng kể, **Adjusted $R^2$ sẽ giảm ngay lập tức**!\n* 👉 Nó đóng vai trò như chiếc phanh hãm giúp người kỹ sư biết khi nào nên dừng lại không thêm biến rác.",
    "slideRef": "Slide Chương 3, Trang 75-76"
  },
  {
    "id": 308,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Khi đánh giá bài toán hồi quy, trường hợp nào ta NÊN sử dụng Sai số tuyệt đối trung bình (MAE) thay cho RMSE?",
    "options": [
      "Khi dữ liệu thực tế chứa nhiều điểm ngoại lai (Outliers) và ta không muốn các sai số cá biệt này bị phóng đại quá mức làm sai lệch đánh giá tổng thể",
      "Khi cần tính đạo hàm liên tục",
      "Khi bài toán yêu cầu phạt thật nặng các sai số lớn",
      "Khi tất cả các sai số đều nhỏ hơn 1"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **RMSE** dùng bình phương sai số: Lệch 10 đơn vị phạt $10^2 = 100$. Nếu tập dữ liệu có một vài mẫu bị nhập nhầm số liệu (ngoại lai), RMSE sẽ tăng vọt và biến tướng, khiến mô hình bị đánh giá là rất tệ dù nó dự đoán tốt trên $99\\%$ các mẫu còn lại.\n* **MAE** đo trực tiếp độ lệch tuyến tính: Lệch 10 chỉ tính là 10. Nó không phóng đại các điểm dị biệt.\n* 👉 Do đó, khi dữ liệu nhiều nhiễu ngoại lai không thể lọc bỏ, **MAE là thước đo trung thực và bền vững nhất**.",
    "slideRef": "Slide Chương 3, Trang 77-78"
  },
  {
    "id": 309,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Một kỹ sư xây dựng hệ thống phát hiện giao dịch rửa tiền. Nếu hệ thống bỏ sót một vụ rửa tiền (False Negative), ngân hàng sẽ bị phạt hàng triệu USD. Kỹ sư này cần tối ưu hóa độ đo nào?",
    "options": [
      "Recall (Độ nhạy), nhằm giảm thiểu tối đa các ca bỏ sót (False Negative)",
      "Precision",
      "Specificity",
      "Accuracy"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Bài toán an ninh, gian lận, rửa tiền: Bỏ sót ($FN$) là thảm họa bị phạt tiền khủng khiếp hoặc vi phạm pháp luật quốc tế.\n* Báo nhầm ($FP$): Nhân viên ngân hàng chỉ cần gọi điện cho khách hàng xác nhận lại trong 2 phút.\n* Vì hậu quả của $FN$ nặng nề hơn hàng ngàn lần so với $FP$, mục tiêu số 1 bắt buộc là **tối đa hóa Recall**!",
    "slideRef": "Slide Chương 3, Trang 63-65"
  },
  {
    "id": 310,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Ngược lại, trong bài toán gợi ý video YouTube hoặc gắn cờ Spam tự động, nếu hệ thống gắn nhầm cờ vi phạm cho một video hợp lệ (False Positive), người sáng tạo nội dung sẽ kiện và bỏ nền tảng. Hệ thống này cần ưu tiên độ đo nào?",
    "options": [
      "Precision, nhằm bảo đảm những nội dung bị gắn cờ chắc chắn là vi phạm thực sự",
      "Recall",
      "MAE",
      "Log-Likelihood"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Khi chi phí của việc Báo nhầm (False Positive - $FP$) quá đắt: mất khách hàng, mất đối tác, gây trải nghiệm người dùng tệ hại.\n* Hệ thống cần phương châm: *\"Thà bỏ sót một vài video vi phạm để xét duyệt thủ công, còn hơn là cấm nhầm một kênh YouTube triệu subs hợp pháp!\"*\n* Vì cần hạn chế tối đa $FP$, **Precision là chỉ số sống còn cần tối ưu hóa**.",
    "slideRef": "Slide Chương 3, Trang 63-65"
  },
  {
    "id": 311,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Giả sử một mô hình Logistic Regression dự đoán xác suất khách hàng mua hàng là $p = 0.8$. Giá trị Tỷ số khả dĩ (Odds) tương ứng là bao nhiêu?",
    "options": [
      "$4.0$",
      "$0.2$",
      "$0.8$",
      "$2.5$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nÁp dụng công thức Tỷ số Odds:\n$$\\text{Odds} = \\frac{p}{1 - p}$$\nThay $p = 0.8$:\n$$\\text{Odds} = \\frac{0.8}{1 - 0.8} = \\frac{0.8}{0.2} = 4.0$$\n* **Ý nghĩa:** Khả năng khách hàng quyết định mua hàng **gấp 4 lần** khả năng khách hàng không mua!",
    "slideRef": "Slide Chương 3, Trang 40-41"
  },
  {
    "id": 312,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Hiện tượng 'Rò rỉ dữ liệu qua biến đặc trưng' (Target Leakage via features) xảy ra trong trường hợp nào sau đây?",
    "options": [
      "Một biến đặc trưng đưa vào huấn luyện lại chứa thông tin chỉ có thể biết được SAU KHI biến cố mục tiêu đã xảy ra",
      "Có quá ít biến đặc trưng trong tập dữ liệu",
      "Tất cả các biến đặc trưng đều có phân phối chuẩn",
      "Mô hình được huấn luyện bằng GPU"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n#### ⚠️ Ví dụ kinh điển về Target Leakage:\n* Bạn xây dựng mô hình dự đoán: *\"Bệnh nhân bị viêm phổi có phải nhập viện điều trị nội trú hay không ($y \\in \\{0, 1\\}$)\"*.\n* Trong dữ liệu có cột: `so_ngay_uong_thuoc_tai_giuong_benh`.\n* Biến này **chỉ tồn tại sau khi bệnh nhân ĐÃ NHẬP VIỆN RỒI**!\n* Khi đưa biến này vào train, mô hình đạt Accuracy $100\\%$ rất dễ dàng (vì cứ có số ngày nằm viện $> 0$ là nhập viện).\n* Nhưng khi triển khai tại phòng khám đón tiếp bệnh nhân mới, biến này chưa hề có $\\implies$ Mô hình sụp đổ hoàn toàn!",
    "slideRef": "Slide Chương 3, Trang 79-80"
  },
  {
    "id": 313,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Trong Hồi quy Ridge, nếu ta chuẩn hóa ma trận đặc trưng $X$ sao cho $X^T X = I$ (các đặc trưng trực chuẩn hoàn toàn), nghiệm $w^*_{\\text{Ridge}}$ có quan hệ gì với nghiệm $w^*_{\\text{OLS}}$?",
    "options": [
      "$w^*_{\\text{Ridge}} = \\frac{1}{1 + \\lambda} w^*_{\\text{OLS}}$ (thu nhỏ tuyến tính theo một tỷ lệ cố định)",
      "$w^*_{\\text{Ridge}} = (1 + \\lambda) w^*_{\\text{OLS}}$",
      "$w^*_{\\text{Ridge}} = w^*_{\\text{OLS}} - \\lambda$",
      "$w^*_{\\text{Ridge}} = w^*_{\\text{OLS}}$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nXét công thức nghiệm đóng của Ridge:\n$$w^*_{\\text{Ridge}} = (X^TX + \\lambda I)^{-1} X^Ty$$\n* Khi các cột của $X$ trực chuẩn ($X^TX = I$):\n  $$(X^TX + \\lambda I) = I + \\lambda I = (1 + \\lambda) I$$\n* Nghịch đảo của một ma trận nhân với số vô hướng:\n  $$((1 + \\lambda) I)^{-1} = \\frac{1}{1 + \\lambda} I$$\n* Thay vào công thức:\n  $$w^*_{\\text{Ridge}} = \\frac{1}{1 + \\lambda} I X^Ty = \\frac{1}{1 + \\lambda} (X^TX)^{-1} X^Ty = \\frac{1}{1 + \\lambda} w^*_{\\text{OLS}}$$\n* 👉 Khi các đặc trưng trực giao độc lập, Hồi quy Ridge có tác dụng **co nhỏ đồng đều tất cả các trọng số theo đúng tỷ số $\\frac{1}{1 + \\lambda}$**!",
    "slideRef": "Slide Chương 3, Trang 25-27"
  },
  {
    "id": 314,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Thuật toán Coordinate Descent giải bài toán tối ưu hóa của Lasso bằng cách nào?",
    "options": [
      "Tối ưu hóa từng trọng số $w_j$ một lần trong khi cố định tất cả các trọng số còn lại, lặp qua tất cả các tọa độ cho đến khi hội tụ",
      "Tính nghịch đảo của toàn bộ ma trận dữ liệu",
      "Lấy tích phân của hàm mật độ xác suất",
      "Thực hiện phép xoay ma trận ngẫu nhiên"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Vì Lasso ($L_1$) không có nghiệm đóng và không khả vi tại 0 trên không gian nhiều chiều, thuật toán **Coordinate Descent (Hạ theo từng tọa độ)** giải quyết bài toán bằng chiến thuật \"chia để trị\":\n  1. Cố định $p - 1$ trọng số còn lại như các hằng số.\n  2. Lúc này hàm mất mát chỉ còn là hàm 1 biến theo duy nhất $w_j$.\n  3. Bài toán 1 biến này có nghiệm giải tích chính xác thông qua toán tử **Soft-Thresholding Operator**:\n     $$S(z, \\lambda) = \\text{sign}(z) \\max(0, |z| - \\lambda)$$\n  4. Lần lượt cập nhật $w_1, w_2, \\dots, w_p$ rồi quay lại vòng mới cho tới khi toàn bộ vector trọng số không đổi nữa.\n* Thuật toán này cực kỳ ổn định và chạy rất nhanh với dữ liệu thưa.",
    "slideRef": "Slide Chương 3, Trang 33-35"
  },
  {
    "id": 315,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình học máy cơ bản và Đánh giá",
    "question": "Khẳng định nào sau đây về Hồi quy Logistic là HOÀN TOÀN CHÍNH XÁC?",
    "options": [
      "Logistic Regression là một bộ phân loại TUYẾN TÍNH (Linear Classifier) vì biên quyết định phân chia các lớp là một siêu phẳng $w^Tx = 0$, mặc dù đầu ra xác suất được biến đổi phi tuyến qua hàm Sigmoid",
      "Logistic Regression là một mô hình phi tuyến có biên quyết định hình đa giác",
      "Logistic Regression chỉ phân loại được dữ liệu 1 chiều",
      "Logistic Regression không cần học trọng số $w$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Rất nhiều sinh viên nhầm lẫn: Thấy hàm Sigmoid $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ uốn lượn cong cong thì vội vàng kết luận Logistic Regression là \"mô hình phân loại phi tuyến\". **ĐÓ LÀ BẪY THI!**\n* **Bản chất thực sự:**\n  - Ranh giới để phân chia giữa việc phán đoán nhãn $1$ và nhãn $0$ là phương trình:\n    $$P(y=1|x) = 0.5 \\iff \\sigma(w^Tx) = 0.5 \\iff w^Tx = w_0 + w_1x_1 + \\dots + w_px_p = 0$$\n  - Phương trình $w^Tx = 0$ biểu diễn **một đường thẳng hoặc một siêu phẳng hoàn toàn phẳng (tuyến tính)** trong không gian đặc trưng.\n  - Mô hình chỉ có khả năng phân tách tốt các tập dữ liệu có thể tách biệt tuyến tính (Linearly Separable).\n* 👉 Do đó, theo định nghĩa toán học chuẩn, **Logistic Regression là một mô hình Phân loại Tuyến tính (Linear Classifier)**!",
    "slideRef": "Slide Chương 3, Trang 43-45"
  }
];
