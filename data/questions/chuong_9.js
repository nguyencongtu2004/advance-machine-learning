/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 9: SEMINAR - K-NEAREST NEIGHBORS (KNN)
   - Số lượng: 20 câu (ID 466 - 485)
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_9 = [
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
];
