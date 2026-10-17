# -*- coding: utf-8 -*-
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

# ==============================================================================
# CHƯƠNG 8: SEMINAR - SUPPORT VECTOR MACHINE (SVM) - NHÓM 25 (25 câu: 441 - 465)
# ==============================================================================
questions_ch8 = [
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
]

# ==============================================================================
# CHƯƠNG 9: SEMINAR - K-NEAREST NEIGHBORS (KNN) - NHÓM 09 (20 câu: 466 - 485)
# ==============================================================================
questions_ch9 = [
    {
        "id": 466,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Vì sao thuật toán K-Nearest Neighbors (KNN) được gọi là một thuật toán \"Học lười\" (Lazy Learner / Instance-based Learning)?",
        "options": [
            "Vì thuật toán không thể tính toán được ma trận hiệp phương sai",
            "Vì nó không có pha huấn luyện tham số tường minh; giai đoạn fit() chỉ đơn giản là lưu trữ toàn bộ dữ liệu train vào bộ nhớ và chỉ tính toán khi có truy vấn mới",
            "Vì thuật toán chỉ sử dụng duy nhất 1 luồng CPU",
            "Vì độ chính xác của nó luôn thấp hơn các thuật toán khác"
        ],
        "answer": 1,
        "explanation": "### 🎯 Bản chất Lazy Learner của KNN:\nKhác với các mô hình Eager Learners (như Hồi quy, Cây, Mạng nơ-ron) phải tốn thời gian học ra các trọng số $w$ hoặc cấu trúc cây trước khi dự đoán, KNN không học trước bất cứ phương trình nào. Giai đoạn training gần như tốn $0$ giây (chỉ nạp dữ liệu vào RAM); toàn bộ chi phí tính toán bị dồn vào **giai đoạn suy luận (Inference)** khi có điểm query mới cần tìm hàng xóm.",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 2-4"
    },
    {
        "id": 467,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Trong bài toán Phân loại KNN (`KNeighborsClassifier`), nhãn của điểm dữ liệu mới được quyết định dựa trên quy tắc nào?",
        "options": [
            "Lấy nhãn của điểm nằm xa nhất trong tập dữ liệu",
            "Biểu quyết theo đa số (Majority Vote) trong số K điểm lân cận gần nhất (hoặc biểu quyết có trọng số khoảng cách)",
            "Tính giá trị trung bình cộng của các nhãn lớp",
            "Lấy nhãn ngẫu nhiên từ 1 trong K lân cận"
        ],
        "answer": 1,
        "explanation": "### 🎯 Biểu quyết đa số trong KNN:\nTìm $K$ mẫu trong tập train có khoảng cách nhỏ nhất tới điểm query $x_q$. Nhãn lớp nào xuất hiện nhiều nhất trong $K$ mẫu này sẽ được gán cho $x_q$.",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 3, 6"
    },
    {
        "id": 468,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Trong bài toán Hồi quy KNN (`KNeighborsRegressor`), giá trị dự đoán cho một điểm mới được tính bằng cách nào?",
        "options": [
            "Lấy giá trị lớn nhất của K lân cận",
            "Tính giá trị trung bình cộng (hoặc trung bình có trọng số nghịch đảo khoảng cách) của các biến mục tiêu $y$ từ K lân cận gần nhất",
            "Giải hệ phương trình chuẩn OLS trên K lân cận",
            "Lấy giá trị của lân cận gần nhất duy nhất"
        ],
        "answer": 1,
        "explanation": "### 🎯 Hồi quy KNN:\n$$\\hat{y}(x_q) = \\frac{1}{K} \\sum_{i=1}^K y_i \\quad \\text{hoặc} \\quad \\hat{y}(x_q) = \\frac{\\sum w_i y_i}{\\sum w_i}$$\nGiá trị dự đoán là trung bình liên tục của các hàng xóm xung quanh.",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 10"
    },
    {
        "id": 469,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Khi thiết lập tham số `weights='distance'` trong Scikit-Learn `KNeighborsClassifier`, trọng số $w_i$ của từng lân cận được gán như thế nào?",
        "options": [
            "Tất cả các lân cận đều có trọng số bằng nhau là 1",
            "Tỷ lệ nghịch với khoảng cách: $w_i = \\frac{1}{d(x_q, x_i)}$ (lân cận càng ở gần điểm query thì tiếng nói biểu quyết càng có trọng lượng lớn)",
            "Tỷ lệ thuận với khoảng cách: lân cận càng ở xa thì trọng số càng cao",
            "Trọng số được khởi tạo ngẫu nhiên từ phân phối đều"
        ],
        "answer": 1,
        "explanation": "### 🎯 Tham số `weights='distance'`:\n* `weights='uniform'`: Mỗi lân cận có 1 phiếu biểu quyết ngang nhau.\n* `weights='distance'`: Lân cận ở cực gần sẽ có trọng số áp đảo, giúp giảm thiểu tác động tiêu cực của các lân cận nằm ở rìa ngoài cửa sổ $K$.",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 9-10"
    },
    {
        "id": 470,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Khi giá trị siêu tham số $K$ trong KNN được chọn quá nhỏ (ví dụ $K = 1$), mô hình có xu hướng gặp phải hiện tượng gì?",
        "options": [
            "Mô hình bị Underfitting do ranh giới quá trơn",
            "Mô hình bị Overfitting nặng: ranh giới quyết định trở nên cực kỳ phức tạp, uốn lượn quanh từng điểm nhiễu",
            "Mô hình không thể dự đoán được các điểm ngoại lai",
            "Chi phí tính toán ở giai đoạn dự đoán tiến về 0"
        ],
        "answer": 1,
        "explanation": "### 🎯 Tác động của siêu tham số $K$:\n* **$K = 1$:** Mỗi điểm train tạo thành một vùng ranh giới riêng (đa giác Voronoi), sai số tập train bằng đúng 0 (100% accuracy trên train set), cực kỳ nhạy cảm với nhiễu $\\implies$ **Overfitting**.\n* **$K$ quá lớn (tiến về $N$):** Ranh giới bị san phẳng, mô hình luôn dự đoán lớp chiếm đa số trong toàn bộ tập dữ liệu $\\implies$ **Underfitting**.",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 6, 9"
    },
    {
        "id": 471,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Khoảng cách Minkowski giữa hai điểm $x$ và $z$ trong không gian $D$ chiều có công thức tổng quát là:",
        "options": [
            "$D(x, z) = \\sum_{j=1}^D |x_j - z_j|$",
            "$D(x, z) = \\left( \\sum_{j=1}^D |x_j - z_j|^p \\right)^{1/p}$",
            "$D(x, z) = \\sqrt{\\sum_{j=1}^D (x_j - z_j)^2}$",
            "$D(x, z) = \\max_j |x_j - z_j|$"
        ],
        "answer": 1,
        "explanation": "### 🎯 Khoảng cách Minkowski:\n$$D(x, z) = \\left( \\sum_{j=1}^D |x_j - z_j|^p \\right)^{1/p}$$\n* Khi $p = 1$: Trở thành khoảng cách Manhattan ($L_1$).\n* Khi $p = 2$: Trở thành khoảng cách Euclidean ($L_2$).\n* Khi $p \\to \\infty$: Trở thành khoảng cách Chebyshev ($L_\\infty$).",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 16, 26"
    },
    {
        "id": 472,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Thuật toán tìm kiếm lân cận Brute Force trong KNN có độ phức tạp thời gian cho mỗi câu truy vấn (query) là bao nhiêu?",
        "options": [
            "$O(1)$",
            "$O(\\log N)$",
            "$O(N \\cdot D)$ với $N$ là số mẫu và $D$ là số chiều đặc trưng",
            "$O(D^3)$"
        ],
        "answer": 2,
        "explanation": "### 🎯 Độ phức tạp Brute Force:\nVới mỗi điểm truy vấn, Brute Force phải tính khoảng cách tới toàn bộ $N$ điểm trong cơ sở dữ liệu, mỗi phép tính khoảng cách tốn $O(D)$ phép nhân trừ $\\implies$ Tổng chi phí cho mỗi query là $O(N \\cdot D)$. Khi cơ sở dữ liệu có hàng triệu mẫu, phương pháp này trở nên quá chậm chạp.",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 11-12"
    },
    {
        "id": 473,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Cấu trúc dữ liệu Cây K-D (K-D Tree) phân chia không gian dữ liệu theo nguyên lý nào để tăng tốc tìm kiếm lân cận?",
        "options": [
            "Tạo các đường tròn lồng nhau đồng tâm",
            "Phân chia không gian đệ quy bằng các siêu phẳng trực giao xen kẽ lần lượt qua từng trục tọa độ (x, y, z...) tại điểm trung vị (median)",
            "Sử dụng phép chiếu ngẫu nhiên PCA",
            "Gom cụm dữ liệu bằng thuật toán K-Means"
        ],
        "answer": 1,
        "explanation": "### 🎯 Cấu trúc K-D Tree:\nK-D Tree (Bentley 1975) là cây nhị phân phân chia không gian: tầng 1 cắt theo trục $x$, tầng 2 cắt theo trục $y$, tầng 3 cắt theo trục $z$, rồi lại lặp lại trục $x$... Điểm chia tại mỗi nút là trung vị (median) của các điểm dọc theo trục đó. Nhờ đó, thời gian tìm kiếm trung bình giảm xuống còn $O(D \\log N)$.",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 13-14"
    },
    {
        "id": 474,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Hạn chế lớn nhất của cấu trúc dữ liệu K-D Tree khi số chiều đặc trưng $D$ tăng cao ($D > 20$) là gì?",
        "options": [
            "Bộ nhớ RAM bị tiêu tốn quá ít",
            "Hiện tượng lời nguyền số chiều khiến thuật toán phải quay lui (backtracking) kiểm tra gần như toàn bộ các nhánh cây, tốc độ suy thoái về ngang bằng Brute Force",
            "Cây K-D không thể lưu trữ được các giá trị số thực",
            "Cây chỉ hoạt động được khi dữ liệu có phân phối chuẩn"
        ],
        "answer": 1,
        "explanation": "### 🎯 Suy thoái của K-D Tree trong không gian nhiều chiều:\nKhi số chiều $D$ lớn ($D > 20$), khoảng cách từ điểm query tới các siêu phẳng biên phân chia nhỏ hơn khoảng cách tới lân cận hiện tại. Do đó, thuật toán buộc phải duyệt qua hầu hết các nhánh cây, khiến chi phí tìm kiếm tiệm cận $O(N \\cdot D)$, mất hoàn toàn ưu thế của cây nhị phân.",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 15"
    },
    {
        "id": 475,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Cấu trúc dữ liệu Ball Tree khắc phục nhược điểm của K-D Tree trong không gian nhiều chiều bằng cách nào?",
        "options": [
            "Phân hoạch không gian thành các siêu cầu (hyperspheres) lồng nhau có tâm $C$ và bán kính $R$, áp dụng bất đẳng thức tam giác để loại bỏ các nhánh cầu nằm xa",
            "Chuyển đổi dữ liệu sang dạng ảnh nhị phân",
            "Bỏ qua hoàn toàn việc tính khoảng cách hình học",
            "Tự động xóa bớt các thuộc tính thừa"
        ],
        "answer": 0,
        "explanation": "### 🎯 Ưu thế của Ball Tree:\nBall Tree bao bọc các điểm dữ liệu bên trong các quả siêu cầu (Balls). Dựa vào bất đẳng thức tam giác $|d(q, C) - d(x, C)| \\le d(q, x)$, nếu khoảng cách từ query $q$ tới tâm cầu $C$ trừ đi bán kính $R$ lớn hơn khoảng cách tới lân cận gần nhất hiện tại, toàn bộ quả cầu đó sẽ bị loại bỏ ngay lập tức mà không cần kiểm tra từng điểm bên trong!",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 15-16"
    },
    {
        "id": 476,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Sự khác biệt giữa `KNeighborsClassifier` và `RadiusNeighborsClassifier` trong Scikit-Learn là gì?",
        "options": [
            "`KNeighborsClassifier` cố định số lượng lân cận $K$; trong khi `RadiusNeighborsClassifier` tìm kiếm tất cả các lân cận nằm trong một bán kính cố định $r$",
            "`RadiusNeighborsClassifier` chỉ dùng cho bài toán hồi quy",
            "`RadiusNeighborsClassifier` không tính toán khoảng cách Euclidean",
            "`KNeighborsClassifier` là thuật toán phân cụm không giám sát"
        ],
        "answer": 0,
        "explanation": "### 🎯 KNN vs Radius-based Neighbors:\n* **K-Neighbors:** Cố định số lượng $K$. Ở vùng dữ liệu thưa, khoảng cách tới lân cận thứ $K$ có thể rất xa, dẫn đến việc lấy cả các điểm không liên quan.\n* **Radius-Neighbors:** Cố định bán kính $r$. Rất hữu ích khi mật độ dữ liệu không đồng đều; tuy nhiên nếu bán kính quá nhỏ, tại các vùng thưa có thể không có điểm nào rơi vào vòng tròn.",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 3, 20"
    },
    {
        "id": 477,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Lớp `NearestNeighbors` trong module `sklearn.neighbors` được sử dụng cho tác vụ nào?",
        "options": [
            "Phân loại có giám sát với nhãn chuỗi",
            "Tìm kiếm láng giềng gần nhất không giám sát (Unsupervised Nearest Neighbors Search), trả về ma trận chỉ số và khoảng cách",
            "Hồi quy phi tuyến tính bằng mạng nơ-ron",
            "Tối ưu hóa các siêu tham số bằng Grid Search"
        ],
        "answer": 1,
        "explanation": "### 🎯 `NearestNeighbors` (Học không giám sát):\n`NearestNeighbors` cung cấp giao diện thống nhất cho BallTree, KDTree và Brute Force để thực hiện truy vấn láng giềng mà **không cần nhãn $y$**. Hai phương thức cốt lõi là `.kneighbors()` (tìm K điểm gần nhất) và `.radius_neighbors()` (tìm các điểm trong bán kính $r$).",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 4-5"
    },
    {
        "id": 478,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Trong Scikit-Learn, tham số `leaf_size` trong KD-Tree hoặc Ball-Tree quy định điều gì?",
        "options": [
            "Số lượng lá tối đa trên toàn bộ cây",
            "Số lượng điểm tối đa chứa trong một nút lá; khi số điểm nhỏ hơn ngưỡng này, thuật toán sẽ chuyển sang tìm kiếm Brute Force cục bộ",
            "Độ sâu tối đa của cây",
            "Số lượng cây con được tạo ra song song"
        ],
        "answer": 1,
        "explanation": "### 🎯 Tham số `leaf_size`:\nQuy định số lượng mẫu tại đó việc phân chia nút dừng lại. Giá trị mặc định là 30. Nếu `leaf_size` nhỏ, cây sẽ rất sâu (tốn bộ nhớ dựng cây); nếu `leaf_size` quá lớn, việc tìm kiếm sẽ thoái hóa thành Brute Force.",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 17, 24"
    },
    {
        "id": 479,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Vì sao việc chuẩn hóa dữ liệu (StandardScaler hoặc MinMaxScaler) lại là bắt buộc đối với thuật toán KNN?",
        "options": [
            "Vì hàm mất mát của KNN không khả vi nếu chưa scale",
            "Vì KNN dựa trên khoảng cách số học; nếu không scale, đặc trưng có đơn vị đo lớn (như lương tính bằng triệu đồng) sẽ chi phối 100% khoảng cách và triệt tiêu ảnh hưởng của các đặc trưng khác (như số con: 1, 2)",
            "Vì nếu không scale, cây KD-Tree không thể sắp xếp được dữ liệu",
            "Vì thuật toán KNN chỉ chấp nhận các giá trị từ 0 đến 1"
        ],
        "answer": 1,
        "explanation": "### 🎯 Tầm quan trọng của Scaling trong KNN:\nKhoảng cách Euclidean $d = \\sqrt{(x_1 - z_1)^2 + (x_2 - z_2)^2}$. Nếu $x_1$ đo bằng đồng ($10^7$) và $x_2$ đo bằng tuổi ($10^1$), thì độ chênh lệch $(x_1 - z_1)^2 \\approx 10^{14}$ sẽ đè bẹp hoàn toàn $(x_2 - z_2)^2 \\approx 10^2$, khiến đặc trưng Tuổi hoàn toàn vô nghĩa!",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 7, 18"
    },
    {
        "id": 480,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Để tránh trường hợp hòa phiếu (Tie) trong bài toán phân loại nhị phân (2 lớp) dùng cơ chế biểu quyết đa số bằng nhau (`weights='uniform'`), người ta thường chọn giá trị $K$ như thế nào?",
        "options": [
            "Chọn $K$ là một số chẵn",
            "Chọn $K$ là một số lẻ (ví dụ $K = 3, 5, 7$)",
            "Chọn $K$ bằng đúng số lượng mẫu của lớp thiểu số",
            "Chọn $K = 0$"
        ],
        "answer": 1,
        "explanation": "### 🎯 Mẹo chọn $K$ lẻ trong phân loại nhị phân:\nNếu có 2 lớp và chọn $K$ chẵn (ví dụ $K = 4$), có thể xảy ra trường hợp 2 phiếu cho lớp A và 2 phiếu cho lớp B (hòa phiếu). Chọn $K$ lẻ (ví dụ $K = 5$) bảo đảm luôn có một lớp giành đa số phiếu tối thiểu (3 vs 2).",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 6"
    },
    {
        "id": 481,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Độ đo khoảng cách Cosine (Cosine Distance) giữa hai vector đặc trưng $u$ và $v$ được tính theo công thức nào?",
        "options": [
            "$D_C(u, v) = 1 - \\frac{u \\cdot v}{\\|u\\|_2 \\|v\\|_2}$",
            "$D_C(u, v) = \\frac{u \\cdot v}{\\|u\\|_2 + \\|v\\|_2}$",
            "$D_C(u, v) = \\|u - v\\|_2$",
            "$D_C(u, v) = \\sum |u_i - v_i|$"
        ],
        "answer": 0,
        "explanation": "### 🎯 Khoảng cách Cosine:\n$$D_C(u, v) = 1 - \\cos(u, v) = 1 - \\frac{u \\cdot v}{\\|u\\|_2 \\|v\\|_2}$$\nĐo góc lệch giữa 2 vector, rất phổ biến trong xử lý ngôn ngữ tự nhiên (NLP) và tìm kiếm tài liệu văn bản thưa.",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 26"
    },
    {
        "id": 482,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Trong Scikit-Learn, tham số `algorithm='auto'` trong `KNeighborsClassifier` hoạt động theo cơ chế nào?",
        "options": [
            "Luôn luôn dùng Brute Force cho mọi tập dữ liệu",
            "Tự động chọn giải thuật phù hợp nhất giữa 'ball_tree', 'kd_tree' hoặc 'brute' dựa trên kích thước dữ liệu, độ thưa và số chiều đặc trưng",
            "Tự động chuyển bài toán phân loại thành hồi quy",
            "Chạy ngẫu nhiên một trong ba thuật toán mỗi lần gọi"
        ],
        "answer": 1,
        "explanation": "### 🎯 Tham số `algorithm='auto'`:\nScikit-Learn sẽ tự động kiểm tra cấu trúc dữ liệu:\n* Dữ liệu thưa (Sparse matrix): Bắt buộc dùng `brute`.\n* Dữ liệu dày, số chiều $D$ nhỏ ($D \\le 20$): Dùng `kd_tree`.\n* Dữ liệu số chiều lớn hơn hoặc khoảng cách tùy biến: Dùng `ball_tree`.",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 23"
    },
    {
        "id": 483,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Thuật toán Nearest Centroid Classifier (Phân loại theo tâm lân cận) khác với KNN chuẩn ở điểm cốt lõi nào?",
        "options": [
            "Mỗi lớp được đại diện bằng một tâm trung bình (Centroid) duy nhất; khi dự đoán chỉ tính khoảng cách tới các tâm này thay vì lưu toàn bộ mẫu",
            "Chỉ tính khoảng cách theo trục tung",
            "Không thể phân loại được dữ liệu có nhiều hơn 2 lớp",
            "Là thuật toán hồi quy chứ không phải phân loại"
        ],
        "answer": 0,
        "explanation": "### 🎯 Nearest Centroid Classifier:\nTính vector trung bình của từng lớp trong pha huấn luyện: $\\mu_k = \\frac{1}{N_k} \\sum_{i \\in C_k} x_i$. Khi dự đoán, mẫu mới được gán cho lớp có tâm gần nhất. Mô hình này rất nhẹ về bộ nhớ và không phụ thuộc vào toàn bộ tập train.",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 28"
    },
    {
        "id": 484,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Mô hình Neighborhood Components Analysis (NCA) trong module `sklearn.neighbors` được sử dụng nhằm mục đích gì?",
        "options": [
            "Học một ma trận biến đổi tuyến tính để co giãn không gian sao cho độ chính xác phân loại của KNN đạt mức tối ưu nhất",
            "Loại bỏ các dòng dữ liệu bị trùng lặp",
            "Huấn luyện mạng nơ-ron sâu tự động",
            "Tạo cây quyết định ngẫu nhiên"
        ],
        "answer": 0,
        "explanation": "### 🎯 Neighborhood Components Analysis (NCA):\nNCA là một kỹ thuật học số liệu khoảng cách (Distance Metric Learning). Nó tìm một ma trận biến đổi $L$ kích thước $d \\times D$ để chiếu dữ liệu sang không gian mới $Lx$, sao cho các điểm cùng lớp nằm gần nhau hơn và các điểm khác lớp bị đẩy ra xa nhau.",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 29"
    },
    {
        "id": 485,
        "chapter": 9,
        "chapterTitle": "Chương 9: Seminar - K-Nearest Neighbors (KNN)",
        "question": "Ưu điểm lớn nhất của mô hình KNN so với các mô hình tuyến tính (như Logistic Regression hay Linear SVM) là gì?",
        "options": [
            "Thời gian dự đoán cực nhanh trên tập dữ liệu hàng tỷ mẫu",
            "Khả năng học các ranh giới quyết định phi tuyến có hình dạng cực kỳ phức tạp một cách tự nhiên mà không cần giả định trước dạng hàm toán học",
            "Bộ nhớ lưu trữ mô hình bằng 0",
            "Không bao giờ bị ảnh hưởng bởi giá trị ngoại lai (Outliers)"
        ],
        "answer": 1,
        "explanation": "### 🎯 Sức mạnh phi tham số của KNN:\nVì không bị gò bó trong một siêu phẳng tuyến tính $w^Tx + b = 0$, KNN có thể tạo ra các vùng biên quyết định uốn lượn, phân mảnh bất kỳ theo phân bố cục bộ của dữ liệu. Miễn là có đủ dữ liệu, KNN có thể xấp xỉ bất kỳ hàm mục tiêu nào.",
        "slideRef": "Seminar Nhóm 09 (KNN), Trang 9, 31"
    }
]

# ==============================================================================
# CHƯƠNG 10: SEMINAR - TRANSFORMER & ATTENTION - NHÓM 11 (25 câu: 486 - 510)
# ==============================================================================
questions_ch10 = [
    {
        "id": 486,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Động lực lịch sử lớn nhất thúc đẩy sự ra đời của kiến trúc Transformer (\"Attention Is All You Need\", 2017) thay thế cho RNN/LSTM là gì?",
        "options": [
            "RNN tiêu tốn quá ít bộ nhớ GPU",
            "RNN xử lý tuần tự từng bước thời gian nên không thể song song hóa quá trình huấn luyện, đồng thời khó duy trì mối quan hệ phụ thuộc ngữ cảnh rất dài",
            "RNN chỉ xử lý được hình ảnh chứ không xử lý được văn bản",
            "LSTM không có hàm kích hoạt phi tuyến"
        ],
        "answer": 1,
        "explanation": "### 🎯 Động lực ra đời Transformer:\n* **Tính tuần tự của RNN/LSTM:** Muốn tính bước $t$ bắt buộc phải đợi bước $t-1$ tính xong $\\implies$ không tận dụng được sức mạnh tính toán song song của GPU.\n* **Điểm nghẽn ngữ cảnh:** Vector trạng thái ẩn cố định phải nén thông tin qua hàng trăm bước $\\implies$ suy hao thông tin phụ thuộc xa.\nTransformer loại bỏ hoàn toàn tính tuần tự, xử lý toàn bộ các từ cùng lúc nhờ cơ chế Self-Attention.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 3-5"
    },
    {
        "id": 487,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Công thức chuẩn xác của cơ chế chú ý tích vô hướng có tỷ lệ (Scaled Dot-Product Attention) là gì?",
        "options": [
            "$\\text{Attention}(Q, K, V) = \\text{softmax}(QK^T) V$",
            "$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right) V$",
            "$\\text{Attention}(Q, K, V) = \\frac{\\text{softmax}(QV)}{K^T}$",
            "$\\text{Attention}(Q, K, V) = \\sigma(W_q Q + W_k K) V$"
        ],
        "answer": 1,
        "explanation": "### 🎯 Scaled Dot-Product Attention:\n$$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right) V$$\n* $Q$ (Query): Vector truy vấn.\n* $K$ (Key): Vector khóa (để đối chiếu tương đồng với Query).\n* $V$ (Value): Vector giá trị thông tin.\n* $d_k$: Số chiều của vector Key.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 9, Notebook Section 9"
    },
    {
        "id": 488,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Tại sao trong công thức Scaled Dot-Product Attention, tích vô hướng $QK^T$ lại bắt buộc phải chia cho hệ số tỷ lệ $\\sqrt{d_k}$?",
        "options": [
            "Để chuyển đổi vector thành ma trận vuông",
            "Khi chiều $d_k$ lớn, tích vô hướng $QK^T$ có độ lớn rất lớn đẩy hàm Softmax vào vùng bão hòa có gradient cực nhỏ (triệt tiêu đạo hàm); chia cho $\\sqrt{d_k}$ giúp giữ phương sai ổn định quanh 1",
            "Để bảo đảm tổng các phần tử bằng 0",
            "Để giảm số lượng tham số cần học của mạng"
        ],
        "answer": 1,
        "explanation": "### 🎯 Vai trò sống còn của $\\sqrt{d_k}$:\nGiả sử các thành phần của $Q$ và $K$ là các biến ngẫu nhiên độc lập có trung bình 0 và phương sai 1. Tích vô hướng $q \\cdot k = \\sum_{i=1}^{d_k} q_i k_i$ sẽ có kỳ vọng bằng 0 nhưng **phương sai bằng $d_k$**. Khi $d_k$ lớn (ví dụ 64 hoặc 512), giá trị tích vô hướng rất lớn khiến Softmax bị bão hòa (tiến sát 1 hoặc 0), gradient bị triệt tiêu khiến mạng không học được.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 10, Notebook Section 9"
    },
    {
        "id": 489,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Cơ chế Chú ý Đa đầu (Multi-Head Attention) mang lại lợi ích đột phá nào so với việc chỉ sử dụng một đầu chú ý duy nhất?",
        "options": [
            "Tăng gấp đôi tốc độ xử lý trên CPU",
            "Cho phép mô hình đồng thời chú ý đến thông tin từ các không gian biểu diễn con khác nhau ở các vị trí khác nhau (ví dụ một đầu bắt quan hệ ngữ pháp, một đầu bắt quan hệ ngữ nghĩa)",
            "Tự động dịch văn bản sang nhiều ngôn ngữ cùng lúc",
            "Loại bỏ hoàn toàn sự cần thiết của hàm mất mát Cross-Entropy"
        ],
        "answer": 1,
        "explanation": "### 🎯 Multi-Head Attention:\nThay vì chỉ tính một ma trận attention duy nhất, Multi-Head chiếu $Q, K, V$ qua $h$ bộ ma trận trọng số độc lập để tạo ra $h$ đầu tính song song:\n$$\\text{MultiHead}(Q, K, V) = \\text{Concat}(\\text{head}_1, \\dots, \\text{head}_h) W^O$$\nĐiều này cho phép mạng cùng lúc nhìn câu dưới nhiều góc độ khác nhau (chủ ngữ - vị ngữ, đại từ - danh từ thay thế...).",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 11, Notebook Section 10"
    },
    {
        "id": 490,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Vì sao kiến trúc Transformer bắt buộc phải bổ sung Mã hóa Vị trí (Positional Encoding) vào vector nhúng từ (Token Embedding)?",
        "options": [
            "Vì Transformer không thể phân biệt được chữ hoa và chữ thường",
            "Vì các phép toán Self-Attention hoàn toàn bất biến đối với thứ tự vị trí; nếu không có Positional Encoding, câu đảo từ lộn xộn sẽ cho ra kết quả biểu diễn y hệt nhau",
            "Vì hàm Softmax đòi hỏi dữ liệu phải có tính tuần hoàn",
            "Để nén độ dài câu văn về một hằng số cố định"
        ],
        "answer": 1,
        "explanation": "### 🎯 Bản chất của Positional Encoding:\nKhác với RNN xử lý tuần tự từng từ một, phép nhân ma trận Self-Attention xử lý tất cả các từ trong câu cùng một lúc. Do đó, câu \"Tôi cắn con chó\" và \"Con chó cắn tôi\" nếu không có mã hóa vị trí sẽ sinh ra ma trận biểu diễn y hệt nhau! Positional Encoding đưa thông tin thứ tự trước sau vào mạng.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 7, Notebook Section 7"
    },
    {
        "id": 491,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Hàm số nào được tác giả Vaswani et al. sử dụng để tạo ra vector Positional Encoding dạng sin/cosin trong Transformer gốc?",
        "options": [
            "Hàm bước nhảy Heaviside",
            "$PE_{(pos, 2i)} = \\sin\\left(\\frac{pos}{10000^{2i/d_{\\text{model}}}}\\right)$ và $PE_{(pos, 2i+1)} = \\cos\\left(\\frac{pos}{10000^{2i/d_{\\text{model}}}}\\right)$",
            "Hàm Sigmoid đối xứng",
            "Hàm đa thức bậc ba Lagrange"
        ],
        "answer": 1,
        "explanation": "### 🎯 Công thức Sinusoidal Positional Encoding:\nSử dụng các bước sóng sin và cosin có tần số khác nhau từ $2\\pi$ đến $10000 \\cdot 2\\pi$. Nhờ tính chất lượng giác, vị trí tương đối $pos + k$ có thể biểu diễn tuyến tính qua $pos$, giúp mô hình dễ dàng học cách chú ý đến khoảng cách tương đối giữa các từ.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 8, Notebook Section 7"
    },
    {
        "id": 492,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Mặt nạ nhân quả (Causal Mask / Look-ahead Mask) trong khối Decoder của Transformer có nhiệm vụ gì?",
        "options": [
            "Bỏ qua các từ đồng nghĩa trong câu",
            "Gán giá trị $-\\infty$ vào các vị trí tương lai trong ma trận attention để ngăn Decoder \"nhìn trộm\" các từ phía sau khi huấn luyện tự hồi quy",
            "Tự động phát hiện lỗi chính tả",
            "Xóa bỏ các token `<pad>` trong câu nguồn"
        ],
        "answer": 1,
        "explanation": "### 🎯 Causal Mask (Look-ahead Mask):\nKhi sinh từ tiếp theo (Autoregressive), tại bước $t$, Decoder chỉ được phép nhìn các từ từ $1$ đến $t$. Trong quá trình huấn luyện song song, Causal Mask đặt một ma trận tam giác trên chứa $-\\infty$. Khi qua hàm Softmax, $e^{-\\infty} = 0$, triệt tiêu hoàn toàn sự chú ý tới các từ tương lai.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 14, Notebook Section 8.2"
    },
    {
        "id": 493,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Mặt nạ đệm (Padding Mask) trong Transformer được sử dụng nhằm mục đích gì?",
        "options": [
            "Đệm thêm số 0 vào 4 cạnh của ảnh",
            "Che giấu các token đệm `<pad>` để chúng không tham gia tính toán và không nhận trọng số chú ý trong hàm Softmax",
            "Ngăn chặn việc tràn bộ nhớ khi câu quá ngắn",
            "Mã hóa các ký tự đặc biệt"
        ],
        "answer": 1,
        "explanation": "### 🎯 Padding Mask:\nKhi huấn luyện theo Batch, các câu có độ dài ngắn khác nhau được thêm các token `<pad>` cho bằng nhau. Padding Mask gán giá trị $-\\infty$ tại các vị trí `<pad>` để Softmax gán xác suất bằng 0, bảo đảm mô hình không lãng phí sự chú ý vào các ký tự vô nghĩa này.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Notebook Section 8.1"
    },
    {
        "id": 494,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Trong tầng Cross-Attention của khối Decoder, các vector Query ($Q$), Key ($K$) và Value ($V$) được lấy từ đâu?",
        "options": [
            "$Q, K, V$ đều được lấy từ đầu ra của Decoder trước đó",
            "$Q$ lấy từ Decoder; còn $K$ và $V$ lấy từ đầu ra cuối cùng của Encoder",
            "$Q$ và $K$ lấy từ Encoder; còn $V$ lấy từ Decoder",
            "$Q, K, V$ đều được lấy trực tiếp từ bảng từ điển Embedding"
        ],
        "answer": 1,
        "explanation": "### 🎯 Cơ chế Cross-Attention (Decoder-Encoder Attention):\n* **Query ($Q$):** Đến từ tầng Decoder bên dưới (đại diện cho những gì câu đích tiếng Việt đang cần tìm).\n* **Key ($K$) & Value ($V$):** Đến từ đầu ra của Encoder (đại diện cho toàn bộ thông tin câu nguồn tiếng Anh).\nNhờ đó, Decoder có thể tra cứu thông tin ngữ nghĩa từ câu nguồn để dịch chính xác từ tiếp theo.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 15, Notebook Section 12"
    },
    {
        "id": 495,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Kỹ thuật Chuẩn hóa tầng (Layer Normalization - LayerNorm) trong Transformer khác với Chuẩn hóa theo lô (Batch Normalization - BatchNorm) ở điểm mấu chốt nào?",
        "options": [
            "BatchNorm tính trung bình trên từng mẫu riêng lẻ; LayerNorm tính trung bình trên cả mini-batch",
            "LayerNorm chuẩn hóa các đặc trưng trên từng mẫu độc lập (không phụ thuộc vào kích thước batch), cực kỳ ổn định cho dữ liệu chuỗi có độ dài thay đổi",
            "LayerNorm không có tham số học được",
            "BatchNorm chỉ dùng được cho văn bản, LayerNorm chỉ dùng cho hình ảnh"
        ],
        "answer": 1,
        "explanation": "### 🎯 LayerNorm vs BatchNorm:\n* **BatchNorm:** Tính trung bình và phương sai dọc theo chiều batch size $\\implies$ phụ thuộc vào các mẫu khác trong batch, không phù hợp với chuỗi có độ dài khác nhau.\n* **LayerNorm:** Chuẩn hóa ngang qua tất cả các đặc trưng kích hoạt của **chính mẫu đó tại mỗi bước thời gian**, hoàn toàn độc lập với kích thước batch.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 12, Notebook Section 11"
    },
    {
        "id": 496,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Mạng truyền thẳng theo vị trí (Position-wise Feed-Forward Network - FFN) trong mỗi khối Transformer gồm cấu trúc nào?",
        "options": [
            "Hai phép biến đổi tuyến tính xen kẽ một hàm kích hoạt phi tuyến (như ReLU): $\\text{FFN}(x) = \\max(0, xW_1 + b_1)W_2 + b_2$",
            "Một mạng tích chập 3D",
            "Một tầng hồi quy Logistic duy nhất",
            "Chuỗi 5 lớp Max Pooling"
        ],
        "answer": 0,
        "explanation": "### 🎯 Khối Feed-Forward (FFN):\nMỗi block Attention được tiếp nối bởi một mạng FFN đơn giản gồm 2 lớp tuyến tính: lớp 1 mở rộng số chiều (thường từ $d_{\\text{model}} = 512$ lên $d_{ff} = 2048$), áp dụng ReLU, sau đó lớp 2 nén chiều trở lại $512$.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 12, Notebook Section 11"
    },
    {
        "id": 497,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Độ phức tạp tính toán thời gian của cơ chế Self-Attention chuẩn đối với một chuỗi đầu vào có độ dài $N$ là bao nhiêu?",
        "options": [
            "Tuyến tính $O(N)$",
            "Bậc hai $O(N^2)$",
            "Logarit $O(\\log N)$",
            "Hằng số $O(1)$"
        ],
        "answer": 1,
        "explanation": "### 🎯 Điểm nghẽn bậc 2 của Transformer:\nPhép nhân $QK^T$ tạo ra một ma trận trọng số chú ý kích thước $N \\times N$ (mỗi từ phải đối chiếu với tất cả $N$ từ còn lại trong câu). Chi phí tính toán và bộ nhớ đều tỷ lệ thuận với $O(N^2)$, gây khó khăn khi xử lý văn bản siêu dài (hàng chục ngàn từ).",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 18"
    },
    {
        "id": 498,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Phương pháp sinh từ tham lam (Greedy Decoding) trong giai đoạn suy luận (Inference) của Transformer hoạt động như thế nào?",
        "options": [
            "Chọn ngẫu nhiên một từ trong từ điển theo phân phối đều",
            "Tại mỗi bước sinh, chọn từ có xác suất dự đoán cao nhất từ hàm Softmax ở đầu ra",
            "Tìm kiếm tất cả các câu khả dĩ rồi chọn câu dài nhất",
            "Dịch ngược câu tiếng Việt về lại tiếng Anh để so sánh"
        ],
        "answer": 1,
        "explanation": "### 🎯 Greedy Decoding:\nỞ mỗi bước suy luận, mô hình lấy $\\arg\\max$ của phân phối xác suất Softmax làm từ dự đoán, sau đó nối từ này vào chuỗi đầu vào của Decoder để tiếp tục dự đoán từ kế tiếp cho đến khi gặp token kết thúc `<eos>`.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Notebook Section 18"
    },
    {
        "id": 499,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Chiến lược huấn luyện ép buộc giáo viên (Teacher Forcing) trong Transformer có đặc điểm gì?",
        "options": [
            "Người dạy học ngồi chấm điểm trực tiếp từng bước",
            "Tại mỗi bước thời gian của Decoder trong lúc training, mô hình luôn được nạp từ mục tiêu đúng thực tế (Ground Truth) của bước trước làm đầu vào, thay vì nạp từ do chính nó vừa dự đoán sai",
            "Đóng băng toàn bộ trọng số của Encoder",
            "Chỉ tính gradient trên các câu có độ dài chẵn"
        ],
        "answer": 1,
        "explanation": "### 🎯 Teacher Forcing:\nGiúp quá trình huấn luyện nhanh và ổn định hơn. Nếu để mô hình tự nạp từ dự đoán sai ở bước 1 vào bước 2, lỗi sai sẽ bị khuếch đại theo dây chuyền (Exposure Bias). Teacher Forcing sửa sai ngay lập tức bằng cách luôn đưa đáp án đúng làm đầu vào bước kế tiếp.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Notebook Section 16"
    },
    {
        "id": 500,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Sự kết hợp giữa Kết nối tắt phần dư (Residual Connection) và Chuẩn hóa tầng trong Transformer thường được ký hiệu là gì?",
        "options": [
            "$\\text{Softmax}(\\text{Dropout}(x))$",
            "$\\text{LayerNorm}(x + \\text{Sublayer}(x))$",
            "$\\text{BatchNorm}(x \\cdot W)$",
            "$\\text{ReLU}(x - \\mu)$"
        ],
        "answer": 1,
        "explanation": "### 🎯 Cấu trúc Add & Norm:\nMỗi tầng con (Sublayer) trong khối Encoder và Decoder đều được bao quanh bởi một kết nối phần dư và theo sau là chuẩn hóa tầng:\n$$\\text{Output} = \\text{LayerNorm}(x + \\text{Sublayer}(x))$$\nGiúp gradient lan truyền dễ dàng qua hàng chục tầng Transformer sâu mà không bị suy hao.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 12, Notebook Section 11"
    },
    {
        "id": 501,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Nếu một mô hình Transformer có kích thước vector ẩn $d_{\\text{model}} = 512$ và sử dụng $h = 8$ đầu chú ý (Attention Heads), thì kích thước không gian chiếu của mỗi đầu $d_k$ bằng bao nhiêu?",
        "options": [
            "8",
            "64",
            "256",
            "512"
        ],
        "answer": 1,
        "explanation": "### 🎯 Công thức phân bổ chiều Multi-Head:\n$$d_k = d_v = \\frac{d_{\\text{model}}}{h} = \\frac{512}{8} = 64$$\nNhờ chia nhỏ $d_{\\text{model}}$ thành $h$ phần, tổng chi phí tính toán của $h$ đầu Multi-Head tương đương với một đầu duy nhất có kích thước $d_{\\text{model}}$.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 11, Notebook Section 10"
    },
    {
        "id": 502,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Mô hình BERT (Devlin et al., 2018) chỉ sử dụng thành phần nào của kiến trúc Transformer gốc?",
        "options": [
            "Chỉ sử dụng Decoder",
            "Chỉ sử dụng Encoder (với cơ chế Self-Attention hai chiều không che mặt nạ nhân quả)",
            "Chỉ sử dụng lớp Positional Encoding",
            "Sử dụng đầy đủ cả Encoder và Decoder"
        ],
        "answer": 1,
        "explanation": "### 🎯 Các nhánh tiến hóa của Transformer:\n* **Chỉ dùng Encoder (Autoencoding):** **BERT, RoBERTa** — phù hợp cho hiểu văn bản, phân loại, NER (nhìn được ngữ cảnh 2 chiều).\n* **Chỉ dùng Decoder (Autoregressive):** **GPT, LLaMA** — phù hợp cho sinh văn bản tiếp nối (dùng Causal Mask).\n* **Đầy đủ Encoder - Decoder:** **T5, BART, Transformer gốc** — phù hợp cho dịch máy, tóm tắt văn bản.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 22"
    },
    {
        "id": 503,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Dòng mô hình GPT (Generative Pre-trained Transformer) của OpenAI được xây dựng dựa trên thành phần nào của kiến trúc Transformer?",
        "options": [
            "Chỉ dùng các khối Decoder xếp chồng với Causal Mask (Mặt nạ nhân quả)",
            "Chỉ dùng các khối Encoder xếp chồng",
            "Chỉ dùng mạng nơ-ron tích chập 1D",
            "Chỉ dùng mạng hồi quy GRU"
        ],
        "answer": 0,
        "explanation": "### 🎯 Kiến trúc Decoder-only của GPT:\nGPT loại bỏ khối Encoder và tầng Cross-Attention, chỉ sử dụng chuỗi các tầng **Masked Decoder** xếp chồng liên tiếp để thực hiện bài toán mô hình hóa ngôn ngữ tự hồi quy (Next-token prediction).",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 22"
    },
    {
        "id": 504,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Thuật toán Beam Search trong giải mã văn bản vượt trội hơn Greedy Decoding ở điểm nào?",
        "options": [
            "Beam Search chạy nhanh hơn gấp 10 lần",
            "Thay vì chỉ giữ lại 1 từ tốt nhất ở mỗi bước, Beam Search duy trì một chùm gồm $B$ giả thuyết có xác suất tích lũy cao nhất, giúp tránh rơi vào các ngõ cụt tối ưu cục bộ",
            "Beam Search không cần dùng đến từ điển Vocabulary",
            "Beam Search chỉ dịch các từ danh từ"
        ],
        "answer": 1,
        "explanation": "### 🎯 Thuật toán Beam Search:\nGreedy search có thể chọn một từ có xác suất cao ở bước 1 nhưng dẫn đến toàn bộ các bước sau có xác suất cực thấp. Beam Search duy trì $B$ chuỗi ứng viên (Beam width) song song, tìm kiếm bao quát hơn không gian câu để cho ra bản dịch tự nhiên và chính xác hơn.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Notebook Section 18"
    },
    {
        "id": 505,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Trong ma trận Attention $A = \\text{softmax}(QK^T / \\sqrt{d_k})$, phần tử tại dòng $i$ và cột $j$ biểu thị điều gì?",
        "options": [
            "Khoảng cách địa lý giữa từ $i$ và từ $j$",
            "Mức độ quan trọng (trọng số chú ý) mà từ thứ $i$ dành cho từ thứ $j$ khi tổng hợp thông tin ngữ cảnh",
            "Số lần từ $i$ xuất hiện trước từ $j$",
            "Xác suất từ $j$ bị xóa khỏi câu"
        ],
        "answer": 1,
        "explanation": "### 🎯 Ý nghĩa của Attention Weight:\nTrọng số $A_{i,j}$ cho biết khi nơ-ron đang xây dựng biểu diễn cho token thứ $i$, nó cần \"chú ý\" (tập trung) bao nhiêu phần trăm thông tin vào token thứ $j$. Tổng các phần tử trên mỗi hàng luôn bằng 1.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 9, Notebook Section 20-21"
    },
    {
        "id": 506,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Quá trình chuyển đổi từ từ ngữ dạng chữ thành các chỉ số số nguyên trước khi nạp vào mạng Transformer được gọi là gì?",
        "options": [
            "Tokenization và Numericalization",
            "Continuous Wavelet Transform",
            "Principal Component Projection",
            "Data Augmentation"
        ],
        "answer": 0,
        "explanation": "### 🎯 Pipeline tiền xử lý văn bản:\n1. **Tokenization:** Tách câu thành các mảnh từ nhỏ (token) như BPE, WordPiece.\n2. **Numericalization:** Ánh xạ từng token thành chỉ số ID nguyên trong từ điển (Vocabulary).\n3. **Embedding:** Tra cứu ID trong bảng ma trận để biến thành vector số thực $d$-chiều.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Notebook Section 3-4"
    },
    {
        "id": 507,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Kích thước ma trận trọng số chiếu $W^Q, W^K, W^V$ trong một tầng Transformer chuẩn với kích thước mô hình $d_{\\text{model}}$ là bao nhiêu?",
        "options": [
            "$d_{\\text{model}} \\times d_k$",
            "$N \\times N$",
            "$d_{\\text{model}} \\times d_{\\text{model}}$",
            "$1 \\times d_{\\text{model}}$"
        ],
        "answer": 2,
        "explanation": "### 🎯 Ma trận chiếu Attention:\nĐể chiếu vector đầu vào $x \\in \\mathbb{R}^{d_{\\text{model}}}$ thành $Q, K, V$, mạng nhân với các ma trận tham số học được có kích thước $d_{\\text{model}} \\times d_{\\text{model}}$ (hoặc $d_{\\text{model}} \\times d_k$ cho từng head riêng lẻ).",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 11, Notebook Section 22"
    },
    {
        "id": 508,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Token đặc biệt nào thường được thêm vào đầu chuỗi trong các mô hình như BERT để phục vụ cho các tác vụ phân loại câu?",
        "options": [
            "`<pad>`",
            "`[CLS]`",
            "`[SEP]`",
            "`<eos>`"
        ],
        "answer": 1,
        "explanation": "### 🎯 Token `[CLS]` (Classification):`\nTrong kiến trúc BERT, token `[CLS]` luôn được đặt ở đầu câu. Sau khi đi qua các tầng Transformer, vector biểu diễn tương ứng của `[CLS]` sẽ tổng hợp toàn bộ ngữ cảnh của cả câu và được đưa vào bộ phân loại để gán nhãn (ví dụ phân loại cảm xúc tích cực/tiêu cực).",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 22"
    },
    {
        "id": 509,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Hàm mất mát tiêu chuẩn được sử dụng để huấn luyện mô hình Transformer dịch máy hoặc sinh ngôn ngữ là gì?",
        "options": [
            "Mean Squared Error (MSE)",
            "Cross-Entropy Loss (với kỹ thuật Label Smoothing và bỏ qua nhãn `<pad>`)",
            "Hinge Loss",
            "Contrastive Loss"
        ],
        "answer": 1,
        "explanation": "### 🎯 Hàm mất mát trong Transformer:\nMô hình dự đoán phân phối xác suất trên toàn bộ từ điển (Vocabulary) tại mỗi bước, do đó hàm mất mát chuẩn là **Cross-Entropy Loss**. Các vị trí token `<pad>` được bỏ qua (ignore_index) để không tính lỗi.",
        "slideRef": "Seminar Nhóm 11 (Transformer), Notebook Section 15"
    },
    {
        "id": 510,
        "chapter": 10,
        "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
        "question": "Mô hình Vision Transformer (ViT - Dosovitskiy et al., 2020) áp dụng kiến trúc Transformer vào xử lý hình ảnh bằng cách nào?",
        "options": [
            "Coi mỗi điểm pixel là một nơ-ron riêng biệt",
            "Cắt bức ảnh thành các mảnh vuông nhỏ (Patches, ví dụ 16x16 pixel), trải phẳng mỗi mảnh thành vector và coi chúng tương tự như các token từ trong câu",
            "Sử dụng các bộ lọc tích chập thay cho cơ chế Attention",
            "Chỉ áp dụng Transformer lên phần âm thanh của video"
        ],
        "answer": 1,
        "explanation": "### 🎯 Vision Transformer (ViT):\nViT chia bức ảnh $224 \\times 224$ thành lưới các patch vuông $16 \\times 16$ (tổng cộng có $14 \\times 14 = 196$ patches). Mỗi patch được chiếu tuyến tính thành một vector embedding, cộng thêm Positional Encoding và đưa vào Transformer Encoder y hệt như một chuỗi văn bản!",
        "slideRef": "Seminar Nhóm 11 (Transformer), Slide 24"
    }
]

def save_chapter(ch_num, q_list, title, filename):
    out_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'questions', filename)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    content = f"""/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - {title.upper()}
   - Số lượng: {len(q_list)} câu (ID {q_list[0]['id']} - {q_list[-1]['id']})
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_{ch_num} = {json.dumps(q_list, ensure_ascii=False, indent=2)};
"""
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Đã tạo {filename}: {len(q_list)} câu (Chương {ch_num})")

save_chapter(8, questions_ch8, "Chương 8: Seminar - Support Vector Machine (SVM)", "chuong_8.js")
save_chapter(9, questions_ch9, "Chương 9: Seminar - K-Nearest Neighbors (KNN)", "chuong_9.js")
save_chapter(10, questions_ch10, "Chương 10: Seminar - Transformer & Attention", "chuong_10.js")
