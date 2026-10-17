/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 8: SEMINAR - SUPPORT VECTOR MACHINE (SVM)
   - Số lượng: 25 câu (ID 441 - 465)
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_8 = [
  {
    "id": 441,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Nguyên lý cốt lõi nào giúp Support Vector Machine (SVM) tìm ra siêu phẳng phân loại tối ưu giữa nhiều đường phân chia khả dĩ?",
    "options": [
      "Nguyên lý cực tiểu hóa tổng bình phương phần dư (OLS)",
      "Nguyên lý cực đại hóa khoảng cách lề (Maximum-Margin Principle) - chọn siêu phẳng có khoảng cách tới các điểm gần nhất ở cả hai phía là lớn nhất",
      "Nguyên lý cực đại hóa hàm hợp lý cực đại (MLE)",
      "Nguyên lý tăng giảm độ dốc ngẫu nhiên (SGD)"
    ],
    "answer": 1,
    "explanation": "### 🎯 Nguyên lý Maximum-Margin:\nVới dữ liệu phân tách tuyến tính, có vô số siêu phẳng có thể phân chia đúng tập train. SVM giải quyết vấn đề ranh giới (Boundary Problem) bằng cách chọn siêu phẳng tạo ra **độ rộng lề (Margin - \"con đường\") rộng nhất**. Siêu phẳng có lề lớn nhất sẽ có rủi ro tổng quát hóa (Generalization Error) thấp nhất trên dữ liệu mới.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 5-6"
  },
  {
    "id": 442,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Trong mô hình SVM, khái niệm \"Support Vectors\" (Các vectơ hỗ trợ) dùng để chỉ các điểm dữ liệu nào?",
    "options": [
      "Tất cả các điểm dữ liệu nằm trong tập kiểm thử (Test Set)",
      "Các điểm dữ liệu nằm gần siêu phẳng nhất, nằm trên đường biên lề (hoặc phạm lề) và trực tiếp định hình vị trí siêu phẳng phân loại",
      "Trọng tâm (Centroid) trung bình của mỗi lớp đối tượng",
      "Các điểm dữ liệu bị gán nhãn sai trong quá trình gán nhãn"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất của Support Vectors:\nChỉ các điểm dữ liệu nằm sát lề (trên siêu phẳng $w^Tx + b = \\pm 1$) hoặc các điểm vi phạm lề mới tham gia trực tiếp vào việc xác định nghiệm $w$ và $b$. Mọi điểm dữ liệu khác nằm an toàn ngoài lề dù dịch chuyển hay xóa bỏ hoàn toàn cũng **không làm thay đổi siêu phẳng quyết định** của SVM!",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 9"
  },
  {
    "id": 443,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Khoảng cách lề (Margin) giữa hai siêu phẳng biên $w^Tx + b = 1$ và $w^Tx + b = -1$ trong bài toán Hard-Margin SVM bằng bao nhiêu?",
    "options": [
      "$\\frac{1}{\\|w\\|}$",
      "$\\frac{2}{\\|w\\|}$",
      "$\\frac{1}{2}\\|w\\|^2$",
      "$\\frac{\\|w\\|}{2}$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Công thức độ rộng lề SVM:\nKhoảng cách hình học từ gốc tới mặt phẳng $w^Tx + b = 1$ là $\\frac{1 - b}{\\|w\\|}$ và tới mặt phẳng $w^Tx + b = -1$ là $\\frac{-1 - b}{\\|w\\|}$. Khoảng cách giữa 2 mặt phẳng này là:\n$$\\text{Margin} = \\frac{2}{\\|w\\|}$$\nDo đó, cực đại hóa Margin tương đương với **cực tiểu hóa $\\frac{1}{2}\\|w\\|^2$**.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 8, 39"
  },
  {
    "id": 444,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Điểm khác biệt căn bản giữa Hard-Margin SVM và Soft-Margin SVM là gì?",
    "options": [
      "Hard-Margin dùng hàm kích hoạt phi tuyến, Soft-Margin dùng hàm tuyến tính",
      "Hard-Margin yêu cầu dữ liệu phải phân tách tuyến tính tuyệt đối 100% không cho phép lỗi; Soft-Margin đưa vào các biến bù lỏng (slack variables $\\xi_i$) để dung nạp một số điểm lấn lề hoặc phân loại sai",
      "Hard-Margin chỉ chạy được trên CPU, Soft-Margin chạy được trên GPU",
      "Hard-Margin là học không giám sát, Soft-Margin là học có giám sát"
    ],
    "answer": 1,
    "explanation": "### 🎯 Hard-Margin vs Soft-Margin:\n* **Hard-Margin:** Ép mọi mẫu thỏa mãn $y_i(w^Tx_i + b) \\ge 1$. Cực kỳ nhạy cảm với ngoại lai (outliers) và vô nghiệm nếu dữ liệu không phân tách tuyến tính hoàn hảo.\n* **Soft-Margin (Cortes & Vapnik 1995):** Thêm biến bù lỏng $\\xi_i \\ge 0$: $y_i(w^Tx_i + b) \\ge 1 - \\xi_i$, cho phép mô hình chấp nhận một lượng lỗi nhất định để có đường biên rộng và khái quát hơn.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 11"
  },
  {
    "id": 445,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Trong Soft-Margin SVM, siêu tham số điều chuẩn $C$ đóng vai trò gì?",
    "options": [
      "Số lượng cây quyết định trong mô hình",
      "Hệ số phạt vi phạm lề: $C$ càng lớn thì phạt càng nặng lỗi vi phạm, lề càng hẹp và dễ Overfitting; $C$ nhỏ thì lề rộng hơn và chấp nhận nhiều vi phạm hơn",
      "Bán kính của siêu cầu trong thuật toán Ball Tree",
      "Tốc độ học (Learning Rate) của mạng nơ-ron"
    ],
    "answer": 1,
    "explanation": "### 🎯 Siêu tham số phạt $C$:\nHàm mục tiêu: $\\min \\frac{1}{2}\\|w\\|^2 + C \\sum_{i=1}^n \\xi_i$.\n* **$C$ lớn (tiến về Hard-Margin):** Phạt cực nặng các điểm vi phạm $\\implies$ cố gắng phân loại đúng từng mẫu $\\implies$ Lề hẹp, dễ bị **Overfitting**.\n* **$C$ nhỏ (Soft-Margin mạnh):** Ít quan tâm đến từng điểm vi phạm $\\implies$ Ưu tiên tối đa hóa độ rộng lề $\\implies$ Lề rộng, tăng tính tổng quát, nhưng nếu quá nhỏ sẽ bị **Underfitting**.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 12"
  },
  {
    "id": 446,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "\"Kernel Trick\" (Bí quyết hạt nhân) trong SVM cho phép mô hình làm được điều gì mà không làm bùng nổ chi phí tính toán?",
    "options": [
      "Tự động điền dữ liệu khuyết bằng trung vị",
      "Ánh xạ ngầm định các mẫu dữ liệu vào không gian nhiều chiều hơn để phân tách tuyến tính, thông qua việc tính tích vô hướng $K(x, z) = \\langle \\phi(x), \\phi(z) \\rangle$ mà không cần tính toán tọa độ chiếu cụ thể $\\phi(x)$",
      "Tự động loại bỏ các thuộc tính bị đa cộng tuyến",
      "Chuyển đổi bài toán phân loại thành bài toán phân cụm"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất kỳ diệu của Kernel Trick:\nKhi dữ liệu gốc phi tuyến không thể phân tách bằng đường thẳng trong không gian 2D, ta có thể chiếu lên không gian 3D hoặc vô hạn chiều để phân tách phẳng. Thay vì phải tính vector biến đổi khổng lồ $\\phi(x)$, Kernel Trick sử dụng hàm nhân $K(x, z)$ tính trực tiếp độ tương đồng ngay trong không gian gốc $\\implies$ Chi phí tính toán cực thấp!",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 14"
  },
  {
    "id": 447,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Hàm nhân RBF (Radial Basis Function / Gaussian Kernel) trong Scikit-Learn có công thức toán học là gì?",
    "options": [
      "$K(x, x') = \\langle x, x' \\rangle$",
      "$K(x, x') = (\\gamma \\langle x, x' \\rangle + r)^d$",
      "$K(x, x') = \\exp(-\\gamma \\|x - x'\\|^2)$ với $\\gamma > 0$",
      "$K(x, x') = \\tanh(\\gamma \\langle x, x' \\rangle + r)$"
    ],
    "answer": 2,
    "explanation": "### 🎯 Công thức RBF Kernel:\n$$K(x, x') = \\exp(-\\gamma \\|x - x'\\|^2)$$\nĐây là hàm nhân phổ biến và mạnh mẽ nhất trong SVM, ánh xạ dữ liệu vào một không gian đặc trưng vô hạn chiều (Hilbert space) dựa trên khoảng cách bình phương Euclidean giữa 2 điểm.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 15-16"
  },
  {
    "id": 448,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Trong hàm nhân RBF của SVM, siêu tham số $\\gamma$ (gamma) kiểm soát điều gì và tác động thế nào đến ranh giới quyết định?",
    "options": [
      "Kiểm soát số lớp đầu ra",
      "Kiểm soát bán kính ảnh hưởng của từng mẫu Support Vector: $\\gamma$ lớn làm quả chuông Gaussian hẹp $\\implies$ ranh giới uốn lượn sát từng điểm, dễ Overfitting; $\\gamma$ nhỏ làm quả chuông phẳng rộng $\\implies$ ranh giới trơn, phẳng",
      "Kiểm soát tốc độ suy giảm của gradient",
      "Kiểm soát số lượng cây lặp trong mô hình"
    ],
    "answer": 1,
    "explanation": "### 🎯 Siêu tham số $\\gamma$ (Gamma) trong RBF:\n* **$\\gamma$ lớn:** Bán kính ảnh hưởng rất hẹp, chỉ các điểm cực gần mới tương đồng $\\implies$ Ranh giới quyết định co cụm quanh từng mẫu huấn luyện $\\implies$ Nguy cơ cao bị **Overfitting**.\n* **$\\gamma$ nhỏ:** Bán kính ảnh hưởng rất rộng $\\implies$ Ranh giới trơn phẳng mượt mà, nhưng nếu quá nhỏ sẽ làm ranh giới gần như đường thẳng $\\implies$ **Underfitting**.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 16-17"
  },
  {
    "id": 449,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Để xử lý bài toán phân loại đa lớp ($K > 2$ lớp), lớp `SVC` trong thư viện Scikit-Learn mặc định sử dụng chiến lược nào ở tầng huấn luyện nội bộ?",
    "options": [
      "One-vs-Rest (OvR) với đúng $K$ bộ phân loại",
      "One-vs-One (OvO) với $\\frac{K(K-1)}{2}$ bộ phân loại nhị phân độc lập",
      "Hàm kích hoạt Softmax đa thức",
      "Thuật toán cây bao trùm tối thiểu Prim"
    ],
    "answer": 1,
    "explanation": "### 🎯 Cơ chế đa lớp trong Scikit-Learn `SVC`:\n`SVC` (dựa trên thư viện libsvm) **luôn luôn huấn luyện nội bộ theo chiến lược One-vs-One (OvO)**:\n$$\\text{Số mô hình} = \\frac{K(K-1)}{2}$$\nVí dụ với bài toán Iris ($K = 3$ lớp), `SVC` huấn luyện $\\frac{3 \\times 2}{2} = 3$ bộ phân loại nhị phân (Lớp 0 vs 1, Lớp 0 vs 2, Lớp 1 vs 2).",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 21, 34"
  },
  {
    "id": 450,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Điểm khác biệt kỹ thuật then chốt giữa `LinearSVC` và `SVC(kernel='linear')` trong Scikit-Learn là gì?",
    "options": [
      "`LinearSVC` hỗ trợ kernel RBF, còn `SVC(kernel='linear')` thì không",
      "`LinearSVC` dựa trên thư viện liblinear, mặc định dùng One-vs-Rest (OvR), tối ưu hóa hàm mất mát bình phương bản lề (squared hinge loss) và có tốc độ mở rộng tốt hơn nhiều trên dữ liệu lớn",
      "`LinearSVC` chỉ chạy được trên CPU 32-bit",
      "Hai class này hoàn toàn đồng nhất 100% về mặt thuật toán và cài đặt"
    ],
    "answer": 1,
    "explanation": "### 🎯 So sánh `LinearSVC` vs `SVC(kernel='linear')`:\n* `SVC(kernel='linear')`: Dựa trên libsvm, huấn luyện One-vs-One, độ phức tạp khoảng $O(n^2)$ đến $O(n^3)$, chậm khi số mẫu lớn.\n* `LinearSVC`: Dựa trên liblinear, dùng One-vs-Rest, tối ưu hóa trực tiếp hàm mục tiêu tuyến tính (thường dùng Squared Hinge Loss), chạy cực kỳ nhanh trên tập dữ liệu hàng triệu dòng hoặc văn bản thưa.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 20, 37"
  },
  {
    "id": 451,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Mô hình hồi quy bằng máy vectơ hỗ trợ (Support Vector Regression - SVR) sử dụng cơ chế dải ống nào để kiểm soát sai số?",
    "options": [
      "Dải phân vị IQR",
      "Dải ống không nhạy sai số $\\epsilon$ ($\\epsilon$-insensitive tube): các sai số dự đoán nằm trong phạm vi $\\pm \\epsilon$ so với giá trị thực sẽ có hàm mất mát bằng 0",
      "Dải độ lệch chuẩn $3\\sigma$",
      "Dải khoảng cách Mahalanobis"
    ],
    "answer": 1,
    "explanation": "### 🎯 $\\epsilon$-Insensitive Tube trong SVR:\nKhác với OLS luôn phạt mọi sai số $y - \\hat{y}$, SVR định nghĩa một vùng an toàn có độ rộng $\\pm \\epsilon$ quanh đường hồi quy. Bất kỳ mẫu nào rơi vào bên trong ống này đều được xem là dự đoán hoàn hảo (loss $= 0$). Chỉ các mẫu nằm ngoài ống mới bị phạt tỷ lệ tuyến tính với khoảng cách vi phạm.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 26-27, 41"
  },
  {
    "id": 452,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Lớp `OneClassSVM` trong thư viện Scikit-Learn thường được ứng dụng cho bài toán nào?",
    "options": [
      "Hồi quy đa biến số",
      "Phát hiện điểm bất thường, ngoại lai hoặc dữ liệu mới lạ (Novelty & Outlier Detection) trên tập dữ liệu không nhãn",
      "Phân loại hình ảnh chữ số viết tay",
      "Phân tích cú pháp văn bản ngữ pháp"
    ],
    "answer": 1,
    "explanation": "### 🎯 Ứng dụng của OneClassSVM:\n`OneClassSVM` (Schölkopf et al.) học một ranh giới bao quanh vùng tập trung đa số của dữ liệu bình thường trong không gian đặc trưng. Bất kỳ mẫu mới nào rơi ra ngoài ranh giới này sẽ bị gắn nhãn là điểm dị biệt / bất thường (Anomaly/Outlier).",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 29"
  },
  {
    "id": 453,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Mô hình SVM nguyên bản chỉ cho điểm khoảng cách hình học (`decision_function`). Muốn có xác suất dự đoán `predict_proba()` trong Scikit-Learn `SVC`, kỹ thuật nào được sử dụng?",
    "options": [
      "Hàm kích hoạt Tanh trực tiếp",
      "Kỹ thuật hiệu chuẩn Platt Scaling (fit hàm Logistic Sigmoid trên điểm số thông qua Cross-Validation 5-fold) khi thiết lập `probability=True`",
      "Chia đều xác suất cho tất cả các lớp",
      "Chuẩn hóa Min-Max điểm số về đoạn [0, 1]"
    ],
    "answer": 1,
    "explanation": "### 🎯 Platt Scaling trong SVM:\nSVM không sinh ra xác suất tự nhiên như Logistic Regression. Khi đặt `probability=True`, `SVC` chạy phương pháp Platt Scaling: huấn luyện một hàm Sigmoid $P(y=1|f) = \\frac{1}{1 + \\exp(A f + B)}$ trên điểm khoảng cách $f(x)$ bằng 5-fold cross-validation. Thao tác này làm tăng thời gian huấn luyện đáng kể.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 22, 36"
  },
  {
    "id": 454,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Khi làm việc với dữ liệu mất cân bằng lớp nghiêm trọng (Imbalanced Data), tham số nào trong `SVC` giúp tự động tăng trọng số phạt cho các lớp thiểu số?",
    "options": [
      "`kernel='poly'`",
      "`class_weight='balanced'`",
      "`shrinking=False`",
      "`decision_function_shape='ovo'`"
    ],
    "answer": 1,
    "explanation": "### 🎯 Tham số `class_weight='balanced'`:\nTự động điều chỉnh hệ số phạt $C$ tỷ lệ nghịch với tần suất xuất hiện của từng lớp:\n$$C_k = C \\times \\frac{n_{\\text{samples}}}{n_{\\text{classes}} \\times n_k}$$\nNhờ đó, việc đoán sai một mẫu thuộc lớp hiếm sẽ bị phạt nặng hơn nhiều, giúp đường biên không bị lớp đa số chèn ép.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 23-25"
  },
  {
    "id": 455,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Vì sao việc chuẩn hóa thang đo dữ liệu (Feature Scaling như `StandardScaler`) lại là bước BẮT BUỘC trước khi huấn luyện mô hình SVM?",
    "options": [
      "Vì SVM không chấp nhận các giá trị số âm",
      "Vì hàm mục tiêu của SVM tính khoảng cách hình học Euclidean trong không gian; nếu không chuẩn hóa, các đặc trưng có thang đo lớn sẽ chi phối hoàn toàn khoảng cách lề và hàm nhân RBF",
      "Vì chuẩn hóa giúp giảm số lượng mẫu dữ liệu",
      "Vì thư viện Scikit-Learn sẽ báo lỗi cú pháp nếu dữ liệu chưa scale"
    ],
    "answer": 1,
    "explanation": "### 🎯 Tầm quan trọng của Scaling trong SVM:\nKhoảng cách lề $\\frac{2}{\\|w\\|}$ và hàm nhân RBF $\\exp(-\\gamma \\|x - x'\\|^2)$ đều dựa trên khoảng cách hình học. Nếu thuộc tính Thu nhập ($10^7$) không chuẩn hóa trong khi thuộc tính Tuổi ($10^1$), thì độ lệch của Thu nhập sẽ lấn át 99.99% khoảng cách, làm thuộc tính Tuổi hoàn toàn bị bỏ qua!",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 30, 38"
  },
  {
    "id": 456,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Trong bài toán quy hoạch đối ngẫu (Dual Formulation) của SVM, điều kiện KKT (Karush-Kuhn-Tucker) chỉ ra rằng một mẫu $x_i$ chỉ có nhân tử Lagrange $\\alpha_i > 0$ khi nào?",
    "options": [
      "Khi mẫu đó có giá trị đặc trưng lớn hơn 100",
      "Khi mẫu đó nằm đúng trên đường biên lề hoặc vi phạm lề (chính là Support Vector)",
      "Khi mẫu đó nằm sâu bên trong vùng phân loại an toàn",
      "Khi mẫu đó là tâm cụm của dữ liệu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Điều kiện bù KKT (Complementary Slackness):\n$$\\alpha_i [y_i(w^Tx_i + b) - 1 + \\xi_i] = 0$$\n* Với các điểm nằm an toàn ngoài lề ($y_i(w^Tx_i + b) > 1$): bắt buộc $\\alpha_i = 0$.\n* Chỉ các điểm nằm sát biên hoặc vi phạm lề mới có $\\alpha_i > 0$. Vectơ trọng số $w$ chỉ được tổng hợp từ các điểm có $\\alpha_i > 0$: $w = \\sum_{i \\in SV} \\alpha_i y_i x_i$.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 39"
  },
  {
    "id": 457,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Khi số lượng thuộc tính đặc trưng ($p$) lớn hơn rất nhiều so với số lượng mẫu ($n$) (ví dụ: dữ liệu biểu hiện gen vi sinh $p = 10.000, n = 50$), lựa chọn kernel nào cho SVM thường là phù hợp và tối ưu nhất?",
    "options": [
      "RBF Kernel với $\\gamma$ cực lớn",
      "Linear Kernel (Nhân tuyến tính)",
      "Polynomial Kernel bậc 10",
      "Sigmoid Kernel"
    ],
    "answer": 1,
    "explanation": "### 🎯 Quy tắc chọn Kernel trong SVM:\nKhi số chiều $p \\gg n$ (không gian đã có số chiều cực cao), dữ liệu vốn dĩ đã có xác suất rất cao để phân tách tuyến tính được mà không cần phải ánh xạ lên không gian cao hơn nữa. Dùng **Linear Kernel** vừa tránh Overfitting vừa tính toán cực nhanh.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 30"
  },
  {
    "id": 458,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Nếu mô hình SVM sử dụng RBF Kernel đang bị hiện tượng Quá khớp (Overfitting), hai hành động điều chỉnh siêu tham số nào sau đây là chuẩn xác nhất?",
    "options": [
      "Tăng cả $C$ và tăng cả $\\gamma$",
      "Giảm $C$ (tăng độ rộng lề) và giảm $\\gamma$ (làm mượt đường biên quả chuông)",
      "Chuyển sang Polynomial Kernel bậc cao hơn",
      "Tắt hoàn toàn việc chuẩn hóa dữ liệu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Trị bệnh Overfitting trong SVM:\n* **Giảm $C$:** Giảm mức phạt lỗi vi phạm, chấp nhận đường lề rộng rãi hơn.\n* **Giảm $\\gamma$:** Mở rộng bán kính tác động của từng Support Vector, làm đường biên quyết định bớt uốn éo theo từng điểm nhiễu, trở nên phẳng và trơn hơn.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 17"
  },
  {
    "id": 459,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Trong bài toán phân loại đa lớp có $K = 5$ lớp, nếu dùng `SVC` (One-vs-One), tổng số bộ phân loại nhị phân cần huấn luyện là bao nhiêu?",
    "options": [
      "5 bộ phân loại",
      "10 bộ phân loại",
      "20 bộ phân loại",
      "25 bộ phân loại"
    ],
    "answer": 1,
    "explanation": "### 🎯 Công thức số bộ phân loại OvO:\n$$\\text{Số mô hình} = \\frac{K(K - 1)}{2} = \\frac{5 \\times 4}{2} = 10 \\text{ bộ phân loại}.$$",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 21, 34"
  },
  {
    "id": 460,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Hàm mất mát gốc mà mô hình Tuyến tính SVM (Linear SVM) tối thiểu hóa có tên gọi là gì?",
    "options": [
      "Mean Squared Error (MSE)",
      "Hinge Loss (Hàm mất mát bản lề): $\\max(0, 1 - y \\cdot f(x))$",
      "Cross-Entropy Loss",
      "Huber Loss"
    ],
    "answer": 1,
    "explanation": "### 🎯 Hinge Loss:\n$$L(y, f(x)) = \\max(0, 1 - y \\cdot f(x))$$\n* Nếu $y \\cdot f(x) \\ge 1$: Điểm nằm đúng phía và ngoài lề $\\implies$ Loss $= 0$.\n* Nếu $y \\cdot f(x) < 1$: Điểm vi phạm lề hoặc đoán sai $\\implies$ Loss tăng tuyến tính với độ vi phạm.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 39-40"
  },
  {
    "id": 461,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Thuộc tính `support_vectors_` trong đối tượng `SVC` đã fit của Scikit-Learn lưu trữ thông tin gì?",
    "options": [
      "Các hệ số hồi quy góc của tất cả các đặc trưng",
      "Tọa độ của chính các điểm dữ liệu trong tập train đóng vai trò là Support Vectors",
      "Xác suất dự đoán của tập test",
      "Chỉ số hàng của các mẫu bị xóa bỏ"
    ],
    "answer": 1,
    "explanation": "### 🎯 Thuộc tính của Scikit-Learn `SVC`:\n* `support_vectors_`: Ma trận chứa tọa độ các điểm Support Vectors.\n* `support_`: Mảng chứa chỉ số dòng (index) của các Support Vectors trong tập train gốc.\n* `n_support_`: Số lượng Support Vectors của từng lớp.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 10, 35"
  },
  {
    "id": 462,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Mô hình `NuSVC` trong Scikit-Learn khác với `SVC` chuẩn ở điểm nào?",
    "options": [
      "`NuSVC` sử dụng tham số $\\nu \\in (0, 1]$ kiểm soát cận trên của tỷ lệ lỗi huấn luyện và cận dưới của tỷ lệ số lượng Support Vectors thay cho tham số $C$",
      "`NuSVC` là mô hình học không giám sát",
      "`NuSVC` không hỗ trợ kernel RBF",
      "`NuSVC` chỉ áp dụng cho bài toán hồi quy"
    ],
    "answer": 0,
    "explanation": "### 🎯 Tham số $\\nu$ trong NuSVC:\nTham số $\\nu$ (nu) trực quan hơn tham số $C$: nó đại diện cho cận trên của tỷ lệ vi phạm lề (margin errors) và cận dưới của tỷ lệ các mẫu trở thành Support Vectors.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 20, 40"
  },
  {
    "id": 463,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Khi sử dụng Ma trận Gram tính trước (Precomputed Kernel) trong Scikit-Learn `SVC(kernel='precomputed')`, kích thước của ma trận đầu vào nạp vào hàm `fit(K, y)` bắt buộc phải là bao nhiêu?",
    "options": [
      "$n_{\\text{samples}} \\times n_{\\text{features}}$",
      "$n_{\\text{samples}} \\times n_{\\text{samples}}$",
      "$n_{\\text{features}} \\times n_{\\text{features}}$",
      "$1 \\times n_{\\text{samples}}$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Ma trận Gram (Precomputed Kernel):\nMa trận Gram chứa tích vô hướng hoặc độ tương đồng giữa mọi cặp mẫu trong tập dữ liệu: $K_{i,j} = K(x_i, x_j)$. Do đó, nó bắt buộc phải là ma trận vuông đối xứng kích thước $n \\times n$.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 42"
  },
  {
    "id": 464,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Độ phức tạp tính toán thời gian huấn luyện của thuật toán SVM chuẩn (dựa trên giải thuật SMO / libsvm) tỷ lệ với kích thước tập dữ liệu $n$ xấp xỉ ở mức nào?",
    "options": [
      "Tuyến tính $O(n)$",
      "Khoảng $O(n^2)$ đến $O(n^3)$",
      "Hằng số $O(1)$",
      "Độ phức tạp logarit $O(\\log n)$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Độ phức tạp tính toán của SVM:\nThuật toán giải bài toán quy hoạch toàn phương của SVM chuẩn có độ phức tạp khoảng giữa $O(n^2)$ và $O(n^3)$ tùy thuộc vào dung lượng bộ đệm cache. Vì vậy, khi tập dữ liệu có hơn 100.000 dòng, SVM với kernel phi tuyến sẽ chạy rất chậm.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 30, 38"
  },
  {
    "id": 465,
    "chapter": 8,
    "chapterTitle": "Chương 8: Seminar - Support Vector Machine (SVM)",
    "question": "Kỹ thuật co rút (\"Shrinking\") được bật mặc định (`shrinking=True`) trong Scikit-Learn `SVC` nhằm mục đích gì?",
    "options": [
      "Giảm số chiều đặc trưng của dữ liệu xuống 2 chiều",
      "Tạm thời loại bỏ các biến không bị ràng buộc đã tối ưu trong quá trình giải bài toán quy hoạch SMO để tăng tốc độ huấn luyện",
      "Nén kích thước bộ nhớ RAM tiêu thụ",
      "Tự động làm nhỏ kích thước các bức ảnh đầu vào"
    ],
    "answer": 1,
    "explanation": "### 🎯 Kỹ thuật Shrinking trong libsvm:\nTrong quá trình lặp tối ưu hóa SMO, nhiều biến $\\alpha_i$ nhanh chóng đạt giá trị $0$ hoặc $C$ và giữ nguyên. Heuristic Shrinking tạm thời loại bớt các biến này khỏi các vòng lặp kiểm tra tiếp theo, giúp giảm đáng kể thời gian hội tụ mà không làm giảm độ chính xác.",
    "slideRef": "Seminar Nhóm 25 (SVM), Trang 38"
  }
];
