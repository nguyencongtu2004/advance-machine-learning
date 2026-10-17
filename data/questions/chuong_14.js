/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - Chương 14: Seminar - Nâng cao Tuyến tính & Phân rã SVD/QR
   - Số lượng: 15 câu (Đã chuẩn hóa đáp án số & phân bổ đều A/B/C/D)
============================================================================== */

window.QUESTIONS_CHUONG_14 = [
  {
    "id": 576,
    "chapter": 14,
    "question": "Nghiệm giải tích phương trình pháp tuyến (Normal Equations) của hồi quy tuyến tính bình phương cực tiểu OLS là gì?",
    "options": [
      "$\\hat{w} = (X X^T)^{-1} X y$",
      "$\\hat{w} = (X^T X)^{-1} X^T y$",
      "$\\hat{w} = X^T (X X^T) y$",
      "$\\hat{w} = (X^T y)^{-1} X^T X$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nĐể tìm nghiệm tối thiểu hóa hàm mất mát bình phương tổng sai số $L(w) = \\|y - Xw\\|^2$, ta đạo hàm theo $w$ và cho bằng $0$: $-2 X^T (y - Xw) = 0 \\iff X^T X w = X^T y \\implies \\hat{w} = (X^T X)^{-1} X^T y$ khi $X^T X$ khả nghịch.",
    "chapterTitle": "Chương 14: Seminar - Nâng cao Tuyến tính & Phân rã SVD/QR",
    "slideRef": "Seminar Nhóm 08 (Linear Models)"
  },
  {
    "id": 577,
    "chapter": 14,
    "question": "Khi ma trận thiết kế $X$ xảy ra hiện tượng đa cộng tuyến hoàn hảo (multicollinearity), điều gì xảy ra với ma trận hiệp phương sai $X^T X$?",
    "options": [
      "$X^T X$ trở thành ma trận đường chéo đơn vị",
      "Các giá trị riêng (eigenvalues) của $X^T X$ đều tiến tới vô cùng",
      "$X^T X$ trở nên suy biến (singular), định thức bằng 0 và không tồn tại ma trận nghịch đảo thông thường $(X^T X)^{-1}$",
      "Sai số huấn luyện $R^2$ lập tức giảm về 0"
    ],
    "answer": 2,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nĐa cộng tuyến hoàn hảo khiến các cột của $X$ phụ thuộc tuyến tính, hạng ma trận rank($X$) < $p$, dẫn đến ma trận vuông $X^T X$ bị suy biến (không đủ hạng, định thức det = 0), không thể nghịch đảo trực tiếp.",
    "chapterTitle": "Chương 14: Seminar - Nâng cao Tuyến tính & Phân rã SVD/QR",
    "slideRef": "Seminar Nhóm 08 (Linear Models)"
  },
  {
    "id": 578,
    "chapter": 14,
    "question": "Số điều kiện (Condition Number $\\kappa(X)$) của ma trận đo lường điều gì trong bài toán giải hệ phương trình tuyến tính?",
    "options": [
      "Độ nhạy của nghiệm hồi quy đối với những biến thiên hoặc nhiễu nhỏ trong dữ liệu đầu vào ($X$ hoặc $y$)",
      "Số lượng giá trị khuyết tật (missing values) trong ma trận $X$",
      "Tỉ số giữa số lượng hàng và số lượng cột của $X$",
      "Tỉ lệ mẫu dương so với mẫu âm trong bài toán phân loại"
    ],
    "answer": 0,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nSố điều kiện $\\kappa(A) = \\|A\\| \\|A^{-1}\\| = \\sigma_{max} / \\sigma_{min}$. Nếu $\\kappa(A)$ rất lớn (ill-conditioned), ma trận gần suy biến và một thay đổi cực nhỏ ở đầu vào cũng làm nghiệm biến đổi khổng lồ, gây mất ổn định số học.",
    "chapterTitle": "Chương 14: Seminar - Nâng cao Tuyến tính & Phân rã SVD/QR",
    "slideRef": "Seminar Nhóm 08 (Linear Models)"
  },
  {
    "id": 579,
    "chapter": 14,
    "question": "Trong thực tế cài đặt thư viện (`scipy.linalg.lstsq` được Scikit-Learn `LinearRegression` gọi bên dưới), giải pháp số học nào được sử dụng thay vì nghịch đảo trực tiếp $(X^T X)^{-1}$?",
    "options": [
      "Phương pháp nhân ma trận Strassen",
      "Thuật toán quy hoạch nguyên (Integer Linear Programming)",
      "Giải thuật di truyền (Genetic Algorithm)",
      "Phân rã giá trị suy biến SVD (Singular Value Decomposition) hoặc phân rã QR"
    ],
    "answer": 3,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nTính trực tiếp $(X^T X)^{-1}$ làm bình phương số điều kiện (từ $\\kappa(X)$ lên $\\kappa(X)^2$), gây tổn thất chính xác số học nghiêm trọng. Các thư viện đại số tuyến tính chuẩn sử dụng SVD (tính giả nghịch đảo Moore-Penrose $X^+$) hoặc phân rã QR để đảm bảo tính ổn định số học cao nhất.",
    "chapterTitle": "Chương 14: Seminar - Nâng cao Tuyến tính & Phân rã SVD/QR",
    "slideRef": "Seminar Nhóm 08 (Linear Models)"
  },
  {
    "id": 580,
    "chapter": 14,
    "question": "Với phân tích giá trị suy biến $X = U \\Sigma V^T$, ma trận giả nghịch đảo Moore-Penrose $X^+$ được tính như thế nào?",
    "options": [
      "$X^+ = U \\Sigma^{-1} V$",
      "$X^+ = (U^T V) \\Sigma$",
      "$X^+ = V \\Sigma^+ U^T$, trong đó $\\Sigma^+$ được tạo bằng cách lấy nghịch đảo các giá trị kỳ dị khác 0",
      "$X^+ = V^T \\Sigma^+ U$"
    ],
    "answer": 2,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nTừ $X = U \\Sigma V^T$, ma trận giả nghịch đảo là $X^+ = V \\Sigma^+ U^T$. Nghiệm bình phương cực tiểu ổn định nhất luôn là $\\hat{w} = X^+ y$.",
    "chapterTitle": "Chương 14: Seminar - Nâng cao Tuyến tính & Phân rã SVD/QR",
    "slideRef": "Seminar Nhóm 08 (Linear Models)"
  },
  {
    "id": 581,
    "chapter": 14,
    "question": "Hồi quy Ridge (Tikhonov Regularization) giải quyết triệt để vấn đề ma trận suy biến bằng cách thêm số hạng nào vào ma trận cần nghịch đảo?",
    "options": [
      "Nhân ma trận với hệ số tỉ lệ $\\alpha$",
      "Thêm ma trận đường chéo $\\alpha I$, chuyển thành $(X^T X + \\alpha I)^{-1}$",
      "Trừ đi ma trận đơn vị $(X^T X - \\alpha I)^{-1}$",
      "Thay thế các phần tử ngoại đường chéo bằng 0"
    ],
    "answer": 1,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nCông thức nghiệm Ridge là $\\hat{w}_{ridge} = (X^T X + \\alpha I)^{-1} X^T y$. Vì $X^T X$ là ma trận nửa xác định dương (bán xác định dương), khi cộng thêm $\\alpha I$ (với $\\alpha > 0$), ma trận trở thành xác định dương nghiêm ngặt (strictly positive definite), đảm bảo luôn luôn khả nghịch.",
    "chapterTitle": "Chương 14: Seminar - Nâng cao Tuyến tính & Phân rã SVD/QR",
    "slideRef": "Seminar Nhóm 08 (Linear Models)"
  },
  {
    "id": 582,
    "chapter": 14,
    "question": "Vì sao hàm mất mát của Lasso ($L_1$ regularization) không thể giải bằng phương trình đạo hàm giải tích đóng như Ridge?",
    "options": [
      "Vì hàm chuẩn $L_1$ ($\\|w\\|_1 = \\sum |w_j|$) không khả vi tại điểm gốc tọa độ $w_j = 0$",
      "Vì Lasso có vô số nghiệm địa phương không hội tụ",
      "Vì Lasso yêu cầu số mẫu phải nhỏ hơn số đặc trưng",
      "Vì ma trận đạo hàm bậc hai Hessian của Lasso luôn bằng 0"
    ],
    "answer": 0,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nHàm giá trị tuyệt đối $|w|$ có góc nhọn tại 0 và không có đạo hàm tại đó (chỉ có dưới đạo hàm - subgradient). Do đó không thể triệt tiêu gradient bậc nhất để giải nghiệm đóng, mà phải dùng thuật toán số như Coordinate Descent hoặc LARS.",
    "chapterTitle": "Chương 14: Seminar - Nâng cao Tuyến tính & Phân rã SVD/QR",
    "slideRef": "Seminar Nhóm 08 (Linear Models)"
  },
  {
    "id": 583,
    "chapter": 14,
    "question": "Thuật toán tối ưu hóa mặc định được Scikit-Learn sử dụng để huấn luyện mô hình `Lasso` là gì?",
    "options": [
      "Adam Optimizer",
      "L-BFGS-B",
      "Đạo hàm ngẫu nhiên phân rã QR",
      "Tọa độ giảm dần (Coordinate Descent)"
    ],
    "answer": 3,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nScikit-Learn sử dụng thuật toán Coordinate Descent (hạ tọa độ theo từng biến riêng lẻ với toán tử ngưỡng mềm soft-thresholding) để giải bài toán tối ưu Lasso lồi.",
    "chapterTitle": "Chương 14: Seminar - Nâng cao Tuyến tính & Phân rã SVD/QR",
    "slideRef": "Seminar Nhóm 08 (Linear Models)"
  },
  {
    "id": 584,
    "chapter": 14,
    "question": "Thuật toán LARS (Least Angle Regression) trong thư viện hồi quy tuyến tính có ưu điểm nổi bật nào khi tìm toàn bộ đường nghiệm Lasso (Lasso path)?",
    "options": [
      "Tự động xử lý biến dạng chuỗi văn bản không cần nhúng",
      "Xây dựng toàn bộ nghiệm thưa hiệu quả với chi phí tính toán tương đương một lần chạy OLS thông thường",
      "Luôn luôn chọn tất cả đặc trưng cùng lúc mà không làm triệt tiêu hệ số nào",
      "Khử hoàn toàn hiện tượng overfitting mà không cần tập validation"
    ],
    "answer": 1,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nLARS di chuyển theo hướng phân giác đều (equiangular) tạo bởi các đặc trưng tương quan nhất với phần dư. Khi kết hợp với điều kiện Lasso, nó sinh ra toàn bộ lộ trình nghiệm (regularization path) của Lasso một cách cực kỳ nhanh chóng.",
    "chapterTitle": "Chương 14: Seminar - Nâng cao Tuyến tính & Phân rã SVD/QR",
    "slideRef": "Seminar Nhóm 08 (Linear Models)"
  },
  {
    "id": 585,
    "chapter": 14,
    "question": "Mô hình `MultiTaskLasso` trong Scikit-Learn giải quyết bài toán hồi quy đa mục tiêu bằng cách ràng buộc đặc trưng nào?",
    "options": [
      "Sử dụng chuẩn hỗn hợp $L_{2,1}$ để chọn chung cùng một tập các đặc trưng hữu ích cho tất cả các nhiệm vụ đầu ra (joint feature selection)",
      "Huấn luyện các mô hình Lasso độc lập trên từng biến mục tiêu",
      "Ghép nối tất cả biến mục tiêu thành một chuỗi duy nhất",
      "Sử dụng mạng nơ-ron hồi quy với hàm kích hoạt softmax"
    ],
    "answer": 0,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\n`MultiTaskLasso` áp dụng chuẩn hỗn hợp Frobenius/L21 norm lên ma trận trọng số $W$. Nó ép nguyên cả một hàng của ma trận $W$ về 0, nghĩa là nếu một đặc trưng bị loại thì sẽ bị loại đồng thời trên tất cả các biến mục tiêu đầu ra.",
    "chapterTitle": "Chương 14: Seminar - Nâng cao Tuyến tính & Phân rã SVD/QR",
    "slideRef": "Seminar Nhóm 08 (Linear Models)"
  },
  {
    "id": 586,
    "chapter": 14,
    "question": "Trong mô hình `ElasticNet`, tham số `l1_ratio` đại diện cho điều gì?",
    "options": [
      "Tỉ lệ giữa kích thước tập huấn luyện và kiểm tra",
      "Tỉ số giữa learning rate và số lượng epoch",
      "Tỉ lệ cân bằng giữa số hạng phạt L1 (Lasso) và L2 (Ridge) trong hàm mất mát",
      "Ngưỡng cắt tỉa cây quyết định"
    ],
    "answer": 2,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nHàm phạt của ElasticNet là $\\alpha \\cdot [\\text{l1\\_ratio} \\|w\\|_1 + \\frac{1 - \\text{l1\\_ratio}}{2} \\|w\\|_2^2]$. Khi `l1_ratio=1` mô hình trở thành thuần Lasso, khi `l1_ratio=0` mô hình trở thành thuần Ridge.",
    "chapterTitle": "Chương 14: Seminar - Nâng cao Tuyến tính & Phân rã SVD/QR",
    "slideRef": "Seminar Nhóm 08 (Linear Models)"
  },
  {
    "id": 587,
    "chapter": 14,
    "question": "Hồi quy Huber (`HuberRegressor`) trong các biến thể tuyến tính giải quyết nhược điểm nào của hồi quy OLS chuẩn?",
    "options": [
      "Giảm số chiều dữ liệu tự động mà không cần chuẩn hóa",
      "Tự động tính toán ma trận tương quan giữa các nhãn",
      "Huấn luyện nhanh hơn OLS trên dữ liệu nhỏ",
      "Rất mạnh mẽ chống lại nhiễu ngoại lai (robust to outliers) nhờ chuyển từ hàm mất mát bậc 2 sang bậc 1 tuyến tính khi sai số vượt quá ngưỡng $\\epsilon$"
    ],
    "answer": 3,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nOLS sử dụng sai số bình phương nên các điểm ngoại lai bị phạt theo hàm bậc hai cực lớn, kéo lệch đường hồi quy. Huber loss dùng sai số bậc hai cho phần dư nhỏ ($|e| \\le \\epsilon$) và sai số bậc nhất tuyến tính cho phần dư lớn, giúp mô hình miễn nhiễm với nhiễu ngoại lai.",
    "chapterTitle": "Chương 14: Seminar - Nâng cao Tuyến tính & Phân rã SVD/QR",
    "slideRef": "Seminar Nhóm 08 (Linear Models)"
  },
  {
    "id": 588,
    "chapter": 14,
    "question": "Phân rã QR của ma trận thiết kế $X = Q R$ có cấu trúc hai ma trận $Q$ và $R$ như thế nào?",
    "options": [
      "$Q$ là ma trận trực giao ($Q^T Q = I$) và $R$ là ma trận tam giác trên khả nghịch",
      "$Q$ là ma trận đường chéo và $R$ là ma trận đối xứng",
      "$Q$ là ma trận ngẫu nhiên và $R$ là ma trận nghịch đảo của $X$",
      "Cả $Q$ và $R$ đều là ma trận đơn vị"
    ],
    "answer": 0,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nPhân rã QR tách $X$ thành ma trận trực giao $Q$ ($Q^T Q = I$) và ma trận tam giác trên $R$. Khi đó hệ phương trình bình phương cực tiểu trở thành $R w = Q^T y$, giải cực kỳ nhanh và ổn định bằng phép thế ngược (back substitution).",
    "chapterTitle": "Chương 14: Seminar - Nâng cao Tuyến tính & Phân rã SVD/QR",
    "slideRef": "Seminar Nhóm 08 (Linear Models)"
  },
  {
    "id": 589,
    "chapter": 14,
    "question": "Tham số `fit_intercept=False` trong `LinearRegression` nên được sử dụng trong tình huống nào?",
    "options": [
      "Khi ma trận $X$ có nhiều biến phân loại dạng One-Hot",
      "Khi số chiều $p$ lớn hơn số quan sát $n$",
      "Khi dữ liệu $X$ và $y$ đã được trừ trung bình (centered/standardized) hoặc bài toán bắt buộc đường hồi quy phải đi qua gốc tọa độ $(0, 0)$",
      "Khi huấn luyện mô hình trên GPU"
    ],
    "answer": 2,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nNếu dữ liệu đã được trừ trung bình (mean-centered) thì hệ số chặn bias bằng 0. Nếu đặt `fit_intercept=False`, mô hình không thêm cột hệ số tự do $w_0$ và đường hồi quy bắt buộc đi qua gốc tọa độ.",
    "chapterTitle": "Chương 14: Seminar - Nâng cao Tuyến tính & Phân rã SVD/QR",
    "slideRef": "Seminar Nhóm 08 (Linear Models)"
  },
  {
    "id": 590,
    "chapter": 14,
    "question": "Vì sao việc chuẩn hóa đặc trưng (Feature Scaling) lại đặc biệt bắt buộc đối với Ridge và Lasso nhưng không làm thay đổi nghiệm dự đoán của OLS thuần túy (về mặt toán học)?",
    "options": [
      "Vì OLS không thể hội tụ nếu dữ liệu chưa chuẩn hóa",
      "Vì số hạng phạt chuẩn $\\|w\\|_1$ và $\\|w\\|_2^2$ phạt công bằng mọi trọng số; nếu đặc trưng có thang đo lớn, trọng số tự nhiên của nó sẽ nhỏ và ít bị phạt hơn đặc trưng có thang đo nhỏ",
      "Vì Lasso chỉ chấp nhận đầu vào trong khoảng $[0, 1]$",
      "Vì chuẩn hóa làm ma trận $X^T X$ trở thành ma trận đơn vị"
    ],
    "answer": 1,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nTrong OLS, việc đổi đơn vị (thang đo) của đặc trưng chỉ làm hệ số $w_j$ tỉ lệ nghịch lại mà không đổi hàm mất mát. Nhưng trong Regularization, $\\lambda \\sum w_j^2$ phạt mọi $w$ ngang nhau, nên đặc trưng có đơn vị nhỏ (giá trị số lớn $\\to$ trọng số $w$ bé) sẽ né được án phạt, còn đặc trưng đơn vị lớn (trọng số $w$ to) bị phạt oan. Do đó chuẩn hóa là tiên quyết.",
    "chapterTitle": "Chương 14: Seminar - Nâng cao Tuyến tính & Phân rã SVD/QR",
    "slideRef": "Seminar Nhóm 08 (Linear Models)"
  }
];
