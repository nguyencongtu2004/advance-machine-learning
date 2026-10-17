/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 4: CÂY QUYẾT ĐỊNH VÀ ENSEMBLE LEARNING
   - Số lượng: 80 câu
   - Nội dung: Decision Tree (Entropy, Information Gain ID3, Gini CART, Pruning),
     Bagging, Random Forest, Boosting (AdaBoost, Gradient Boosting, XGBoost, LightGBM), Stacking
   - Giải thích chi tiết & trực quan hóa bản chất từ Giai_Thich_Chi_Tiet_Chuong_4.md
   - Hỗ trợ hiển thị Markdown & Công thức Toán LaTeX (KaTeX)
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_4 = [
  {
    "id": 106,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Trong Cây quyết định (Decision Tree), nút lá (Leaf Node) của cây phân loại đại diện cho điều gì?",
    "options": [
      "Điều kiện kiểm tra trên một đặc trưng",
      "Nhãn lớp được dự đoán (hoặc tỷ lệ phân bố lớp)",
      "Tập toàn bộ dữ liệu ban đầu",
      "Giá trị Entropy của thuộc tính"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCây quyết định (Decision Tree) là một cấu trúc phân cấp hình cây lộn ngược (Gốc ở trên, Lá ở dưới):\n* **Nút gốc (Root Node):** Nút trên cùng, chứa toàn bộ tập dữ liệu huấn luyện và thực hiện phép kiểm tra điều kiện đầu tiên.\n* **Nút trong (Internal Node):** Kiểm tra điều kiện trên một đặc trưng ($x_j \\le t$ hoặc $x_j == \\text{Giá trị}$).\n* **Nhánh (Branch):** Đại diện cho một kết quả kiểm tra logic (Đúng/Sai hoặc các danh mục).\n* **Nút lá (Leaf Node):** Là điểm dừng cuối cùng của đường đi suy diễn.\n  - Trong **Cây phân loại (Classification Tree):** Nút lá lưu **nhãn lớp dự đoán** (lớp chiếm đa số trong lá đó) hoặc phân phối xác suất dự đoán của các lớp.\n  - Trong **Cây hồi quy (Regression Tree):** Nút lá lưu **giá trị trung bình cộng** $\\bar{y}$ của các mẫu rơi vào lá.\n\n> 💡 **Quy tắc trắc nghiệm:** Nút lá không còn điều kiện phân nhánh nào nữa, nó chính là câu trả lời / kết luận cuối cùng của mô hình.",
    "slideRef": "Slide Chương 4, Trang 8, 17"
  },
  {
    "id": 107,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Ranh giới quyết định của Cây quyết định trong không gian đặc trưng có dạng hình học nào?",
    "options": [
      "Các siêu phẳng nghiêng góc bất kỳ",
      "Các đường gấp khúc trực giao (song song với các trục tọa độ)",
      "Các đường tròn đồng tâm",
      "Các mặt cầu đa chiều"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Khác với Logistic Regression hay SVM tạo ra các đường thẳng hoặc mặt phẳng nghiêng chéo góc tự do trong không gian ($w^Tx + b = 0$):\n* Tại mỗi nút phân chia, Cây quyết định **chỉ kiểm tra duy nhất một đặc trưng** tại một thời điểm (ví dụ: $x_1 \\le 3.5$ hoặc $x_2 > 10$).\n* Về mặt hình học, mỗi phép kiểm tra này tương ứng với một lát cắt **vuông góc với trục tọa độ của đặc trưng đó**.\n* Khi kết hợp nhiều lát cắt liên tiếp từ gốc xuống lá, ranh giới quyết định (Decision Boundary) tạo thành **các đường gấp khúc trực giao**, chia không gian thành các **siêu hộp chữ nhật song song với các trục tọa độ (Axis-aligned Hyper-rectangles)**.\n\n### ⚠️ Bẫy thi kinh điển:\nRanh giới của Cây quyết định chuẩn **không bao giờ là đường chéo nghiêng mượt mà**, mà luôn luôn có dạng bậc thang gấp khúc vuông góc!",
    "slideRef": "Slide Chương 4, Trang 12-13, 57"
  },
  {
    "id": 108,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Ưu điểm ĐẶC TRƯNG lớn nhất của Cây quyết định so với các mô hình tuyến tính hay mạng nơ-ron là gì?",
    "options": [
      "Không bao giờ bị Overfitting",
      "Hoàn toàn không đòi hỏi chuẩn hóa thang đo dữ liệu (Normalization/Standardization)",
      "Có công thức nghiệm đóng giải tích trực tiếp",
      "Luôn có độ chính xác cao hơn mọi mô hình khác"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nĐây là một trong những câu hỏi **hay ra thi nhất** về Cây quyết định:\n* Trong các mô hình tuyến tính (OLS, Logistic, SVM) hay Mạng nơ-ron, khoảng cách số học cực kỳ quan trọng. Nếu một biến đo bằng \"triệu đồng\" ($10^6$) và một biến đo bằng \"số con\" ($1, 2$), biến tiền bạc sẽ lấn át hoàn toàn $\\implies$ Bắt buộc phải chuẩn hóa (StandardScaler / MinMaxScaler).\n* Ngược lại, **Cây quyết định hoàn toàn KHÔNG CẦN chuẩn hóa dữ liệu (Scale Invariant)**:\n  - Để tìm điểm chia cắt tối ưu, cây chỉ sắp xếp các giá trị của từng đặc trưng theo thứ tự tăng dần.\n  - Phép biến đổi đơn điệu (nhân với $1.000.000$, cộng $500$, lấy $\\log$) **hoàn toàn không làm thay đổi thứ tự tương quan** giữa các mẫu!\n  - Điểm cắt trước khi nhân nằm ở vị trí nào thì sau khi nhân nó vẫn chia các mẫu dữ liệu thành 2 nửa y hệt như vậy!\n\n> 💡 **Chốt lại:** Cây quyết định miễn nhiễm với thang đo dữ liệu và xử lý mượt mà cả biến liên tục lẫn biến danh mục.",
    "slideRef": "Slide Chương 4, Trang 56"
  },
  {
    "id": 109,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Trong bài toán phân loại nhị phân (2 lớp), độ hỗn tạp Entropy H(S) đạt giá trị CỰC ĐẠI bằng bao nhiêu và tại phân bố nào?",
    "options": [
      "H(S) = 0 khi hai lớp cân bằng 50% - 50%",
      "H(S) = 1.0 khi hai lớp cân bằng 50% - 50% (p_1 = p_2 = 0.5)",
      "H(S) = 0.5 khi một lớp chiếm 100%",
      "H(S) = +∞"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCông thức Shannon Entropy:\n$$H(S) = - \\sum_{k=1}^C p_k \\log_2(p_k)$$\nVới bài toán 2 lớp ($C = 2$):\n* Khi hai lớp cân bằng tuyệt đối ($p_1 = 0.5, p_2 = 0.5$): Mức độ hỗn loạn / khó đoán đạt đỉnh cao nhất (như tung đồng xu).\n$$H(S) = - (0.5 \\log_2 0.5 + 0.5 \\log_2 0.5) = - [0.5 \\times (-1) + 0.5 \\times (-1)] = \\mathbf{1.0\\text{ bit}}$$\n* Đồ thị Entropy có hình quả chuông úp đối xứng qua $p = 0.5$, đạt đỉnh $H_{\\max} = 1.0$ và chạm đáy $H_{\\min} = 0$ tại hai đầu $p=0$ và $p=1$.\n\n### ⚠️ Bẫy trắc nghiệm:\n* Cực đại của **Entropy** là **$1.0$**.\n* Cực đại của **Gini Impurity** (bài toán 2 lớp) chỉ là **$0.5$**! Đừng nhầm lẫn giữa hai độ đo này.",
    "slideRef": "Slide Chương 4, Trang 18, 20"
  },
  {
    "id": 110,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Khi một nút trong cây quyết định hoàn toàn thuần khiết (100% mẫu đều thuộc về cùng một lớp duy nhất), giá trị Entropy H(S) bằng bao nhiêu?",
    "options": [
      "1.0",
      "0.0",
      "0.5",
      "-1.0"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Thuần khiết 100% (Pure Node):** Tất cả các mẫu trong nút đều thuộc về cùng một lớp (ví dụ lớp 1 có $p_1 = 1$, lớp 2 có $p_2 = 0$).\n* Khi đó:\n  $$H(S) = - (1 \\log_2 1 + 0 \\log_2 0) = - (1 \\times 0 + 0) = \\mathbf{0.0}$$\n* **Ý nghĩa thực tế:** Bạn thò tay vào hộp bi chỉ toàn màu đỏ, chắc chắn 100% bốc trúng bi đỏ $\\implies$ Hệ thống không còn chút bất định hay hỗn loạn nào $\\implies$ Entropy bằng 0!\n* Khi một nút đạt Entropy = 0, thuật toán sẽ dừng phân chia và biến nút đó thành **Nút lá (Leaf Node)**.",
    "slideRef": "Slide Chương 4, Trang 20"
  },
  {
    "id": 111,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Công thức tính Information Gain IG(S, A) của thuộc tính A trong thuật toán ID3 là gì?",
    "options": [
      "IG(S, A) = H(S) + H(S|A)",
      "IG(S, A) = H(S) - H(S|A)",
      "IG(S, A) = H(S|A) - H(S)",
      "IG(S, A) = H(S) * H(S|A)"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nInformation Gain (Độ lợi thông tin) đo lường: **\"Sau khi chia dữ liệu theo thuộc tính A, độ hỗn loạn giảm được bao nhiêu?\"**\n$$IG(S, A) = H(S) - H(S|A)$$\n* $H(S)$: Độ hỗn loạn (Entropy) của nút cha ban đầu trước khi chia.\n* $H(S|A)$: Entropy trung bình có trọng số của các nút con sau khi chia:\n  $$H(S|A) = \\sum_{v \\in Values(A)} \\frac{|S_v|}{|S|} H(S_v)$$\n* **Nguyên tắc chọn:** Thuộc tính nào làm cho $H(S|A)$ nhỏ nhất $\\implies$ mang lại **$IG$ LỚN NHẤT** sẽ được chọn để phân nhánh!",
    "slideRef": "Slide Chương 4, Trang 21"
  },
  {
    "id": 112,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Trong bài toán phân loại 2 lớp cân bằng (p_1 = p_2 = 0.5), chỉ số Gini Impurity của nút bằng bao nhiêu?",
    "options": [
      "1.0",
      "0.5",
      "0.0",
      "0.25"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCông thức tính độ vẩn đục Gini (Gini Impurity):\n$$Gini(S) = 1 - \\sum_{k=1}^C p_k^2$$\nVới bài toán 2 lớp cân bằng ($p_1 = 0.5, p_2 = 0.5$):\n$$Gini(S) = 1 - (0.5^2 + 0.5^2) = 1 - (0.25 + 0.25) = 1 - 0.5 = \\mathbf{0.5}$$\n* Đây là giá trị hỗn tạp cực đại của chỉ số Gini đối với bài toán phân loại nhị phân.\n* Khác với Entropy đạt cực đại bằng $1.0$, Gini đạt cực đại tại **$0.5$**.",
    "slideRef": "Slide Chương 4, Trang 22-23"
  },
  {
    "id": 113,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Khi nút hoàn toàn thuần khiết (chỉ chứa duy nhất một lớp), chỉ số Gini Impurity bằng bao nhiêu?",
    "options": [
      "1.0",
      "0.0",
      "0.5",
      "-0.5"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nKhi tất cả các mẫu trong nút đều thuộc về một lớp duy nhất ($p_1 = 1$, các lớp khác $p_k = 0$):\n$$Gini(S) = 1 - \\sum p_k^2 = 1 - (1^2 + 0^2 + \\dots) = 1 - 1 = \\mathbf{0.0}$$\n* **Ý nghĩa xác suất:** Gini Impurity đo xác suất phân loại sai một mẫu nếu ta gán nhãn ngẫu nhiên theo phân bố lớp trong nút. Khi toàn bộ mẫu là lớp 1, xác suất đoán sai bằng 0.\n* Cả **Entropy** và **Gini** đều bằng **$0.0$** khi nút hoàn toàn thuần khiết.",
    "slideRef": "Slide Chương 4, Trang 23, 25"
  },
  {
    "id": 114,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Sự khác biệt chính giữa thuật toán ID3 và thuật toán CART trong xây dựng cây quyết định là gì?",
    "options": [
      "ID3 dùng Gini; CART dùng Entropy",
      "ID3 dùng Information Gain (Entropy) và có thể chia nhiều nhánh; CART dùng Gini Impurity và luôn thực hiện chia nhị phân (Binary split)",
      "ID3 hỗ trợ cả hồi quy; CART chỉ hỗ trợ phân loại",
      "ID3 huấn luyện song song; CART huấn luyện tuần tự"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nBảng đối chiếu \"sống còn\" giữa ID3 và CART:\n* **ID3 (Iterative Dichotomiser 3 - Quinlan):**\n  - Tiêu chí chia: **Information Gain** (dựa trên Entropy Shannon).\n  - Kiểu chia: **Đa nhánh (Multi-way split)** theo các giá trị danh mục (ví dụ Outlook chia thành 3 nhánh Sunny, Overcast, Rain).\n  - Bài toán: Ban đầu chỉ hỗ trợ phân loại.\n* **CART (Classification and Regression Trees - Breiman):**\n  - Tiêu chí chia: **Gini Impurity** cho phân loại, Giảm phương sai (Variance Reduction) cho hồi quy.\n  - Kiểu chia: **Luôn luôn chia nhị phân (Binary split - đúng 2 nhánh Trái/Phải)**.\n  - Tốc độ: Nhanh hơn ID3 vì không cần tính hàm $\\log_2$. Thư viện Scikit-learn mặc định dùng CART!",
    "slideRef": "Slide Chương 4, Trang 26"
  },
  {
    "id": 115,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Trong Cây hồi quy (Regression Tree), giá trị dự đoán tại một nút lá được xác định như thế nào?",
    "options": [
      "Lớp chiếm đa số trong lá",
      "Giá trị trung bình cộng của biến mục tiêu y của các mẫu nằm trong nút lá đó",
      "Giá trị lớn nhất của biến mục tiêu",
      "Tổng các phần dư"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Trong bài toán Hồi quy, nhãn mục tiêu $y$ là biến số liên tục (ví dụ: Giá nhà, Nhiệt độ, Doanh thu).\n* Khi một mẫu dữ liệu mới rơi vào một nút lá cụ thể $S_{\\text{lá}}$, mô hình không thể \"bỏ phiếu lớp\" như phân loại.\n* Giá trị dự đoán tối ưu cực tiểu hóa sai số bình phương $MSE$ chính là **Giá trị trung bình cộng (Mean)** của tất cả các mẫu rơi vào lá đó:\n  $$\\hat{y} = \\bar{y} = \\frac{1}{|S_{\\text{lá}}|} \\sum_{i \\in S_{\\text{lá}}} y_i$$",
    "slideRef": "Slide Chương 4, Trang 29-30"
  },
  {
    "id": 116,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Trong ví dụ bài toán chơi Golf ở slide bài giảng, thuộc tính nào có Information Gain lớn nhất và được chọn làm nút gốc?",
    "options": [
      "Temperature (Nhiệt độ)",
      "Humidity (Độ ẩm)",
      "Outlook (Thời tiết tổng quan)",
      "Wind (Gió)"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong bài toán Golf kinh điển (14 mẫu: 9 Play = Yes, 5 Play = No):\n* Entropy nút gốc: $H(S) \\approx 0.940$.\n* Tính Information Gain cho 4 thuộc tính ứng viên:\n  - $IG(S, \\text{Outlook}) \\approx \\mathbf{0.247}$ (Cao nhất)\n  - $IG(S, \\text{Humidity}) \\approx 0.151$\n  - $IG(S, \\text{Wind}) \\approx 0.048$\n  - $IG(S, \\text{Temperature}) \\approx 0.029$ (Thấp nhất)\n👉 Do có $IG$ lớn nhất, thuộc tính **Outlook** thắng cuộc và được chọn làm **Nút gốc (Root Node)**!",
    "slideRef": "Slide Chương 4, Trang 35-36"
  },
  {
    "id": 117,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Nhược điểm cố hữu lớn nhất của một Cây quyết định đơn lẻ phát triển sâu là gì?",
    "options": [
      "Bias rất cao và không học được dữ liệu",
      "Variance rất cao, cực kỳ dễ bị quá khớp (Overfitting) và bất ổn định với biến động nhỏ của dữ liệu",
      "Không thể giải thích được các luật",
      "Thời gian dự đoán cực kỳ chậm"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nMột Cây quyết định đơn lẻ có 2 nhược điểm chí mạng:\n1. **Variance rất cao (Overfitting nghiêm trọng):** Cây mọc càng sâu thì ranh giới quyết định càng vụn vặt, học vẹt cả nhiễu trong tập Train $\\implies$ Train $100\\%$ nhưng Test rất kém.\n2. **Tính bất ổn định (Instability):** Thuật toán mang tính chất tham lam (Greedy). Chỉ cần thay đổi nhẹ một vài mẫu dữ liệu, đặc trưng chọn ở nút gốc có thể bị thay đổi, kéo theo toàn bộ cấu trúc cây bên dưới bị đảo lộn hoàn toàn!\n👉 Để khắc phục nhược điểm này, người ta phát minh ra **Ensemble Learning (Random Forest)**.",
    "slideRef": "Slide Chương 4, Trang 47, 54-55"
  },
  {
    "id": 118,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Kỹ thuật Tiền cắt tỉa (Pre-pruning) kiểm soát sự phát triển của cây bằng cách nào?",
    "options": [
      "Phát triển cây tối đa rồi cắt bớt nhánh sau",
      "Dừng sớm quá trình phân nhánh dựa trên các điều kiện chặn (như max_depth, min_samples_split, min_samples_leaf)",
      "Xóa bỏ các đặc trưng trước khi huấn luyện",
      "Thay đổi hàm mất mát sang MSE"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nKỹ thuật cắt tỉa (Pruning) gồm 2 phương pháp:\n* **Tiền cắt tỉa (Pre-pruning / Dừng sớm - Early Stopping):** Can thiệp trong quá trình cây đang mọc. Nếu vi phạm một trong các điều kiện chặn thì không cho chia tiếp:\n  - `max_depth`: Giới hạn độ sâu tối đa của cây.\n  - `min_samples_split`: Số mẫu tối thiểu tại một nút để được phép chia tiếp.\n  - `min_samples_leaf`: Số mẫu tối thiểu bắt buộc phải có trong nút lá.\n* **Hậu cắt tỉa (Post-pruning):** Cho cây mọc tối đa (Overfitting), sau đó dùng Cost-Complexity Pruning để tỉa bớt các cành vô dụng từ dưới lên.",
    "slideRef": "Slide Chương 4, Trang 49"
  },
  {
    "id": 119,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Trong đánh đổi Bias - Variance của Cây quyết định, cây NÔNG và cây SÂU có đặc tính như thế nào?",
    "options": [
      "Cây nông có Bias thấp, Variance cao; Cây sâu có Bias cao, Variance thấp",
      "Cây nông có Bias cao, Variance thấp; Cây sâu có Bias thấp, Variance cao",
      "Cả hai đều có Variance bằng 0",
      "Độ sâu không ảnh hưởng đến Bias và Variance"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Cây NÔNG (Shallow tree / Decision Stump):** Mô hình quá đơn giản, không học hết các mối quan hệ phức tạp trong dữ liệu $\\implies$ **Bias cao (Underfitting)**, nhưng dự đoán rất ổn định giữa các tập dữ liệu khác nhau $\\implies$ **Variance thấp**.\n* **Cây SÂU (Deep tree):** Mô hình cực kỳ phức tạp, cố gắng chia nhỏ dữ liệu để khớp từng điểm $\\implies$ **Bias rất thấp**, nhưng cực kỳ nhạy cảm với dữ liệu $\\implies$ **Variance rất cao (Overfitting)**.",
    "slideRef": "Slide Chương 4, Trang 54"
  },
  {
    "id": 120,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Ba điều kiện cần thiết để một mô hình kết hợp Ensemble Learning mang lại hiệu quả vượt trội là gì?",
    "options": [
      "Mô hình phải dùng GPU, dữ liệu phải chuẩn hóa, số cây phải là số chẵn",
      "Mô hình cơ sở tốt hơn đoán ngẫu nhiên (> 50%), các mô hình có tính đa dạng (sai số độc lập), và quy tắc kết hợp phù hợp",
      "Tất cả các mô hình cơ sở phải giống hệt nhau về thuật toán và trọng số",
      "Tập dữ liệu phải có số chiều lớn hơn 1000"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nĐể \"Hội đồng\" thông thái hơn từng cá nhân, theo lý thuyết toán học (Định lý bồi thẩm đoàn Condorcet), bắt buộc phải có 3 điều kiện:\n1. **Từng mô hình cơ sở phải tốt hơn đoán ngẫu nhiên:** Độ chính xác $Accuracy > 50\\%$. (Nếu kết hợp những mô hình đoán tệ hơn tung đồng xu thì hội đồng sẽ càng tệ hại).\n2. **Tính đa dạng (Diversity) — QUAN TRỌNG NHẤT:** Các mô hình phải mắc các sai lầm khác nhau (sai số độc lập, không đồng pha). Nếu mọi mô hình đều sai cùng lúc thì bỏ phiếu vô nghĩa.\n3. **Quy tắc kết hợp phù hợp:** Bỏ phiếu đa số cho phân loại hoặc lấy trung bình cho hồi quy.",
    "slideRef": "Slide Chương 4, Trang 63"
  },
  {
    "id": 121,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Trong Voting Classifier, sự khác biệt giữa Hard Voting và Soft Voting là gì?",
    "options": [
      "Hard Voting lấy trung bình xác suất; Soft Voting bỏ phiếu theo nhãn đa số",
      "Hard Voting bỏ phiếu đa số theo nhãn cứng; Soft Voting lấy trung bình cộng xác suất dự đoán của từng lớp giữa các mô hình",
      "Hard Voting chỉ dùng cho hồi quy; Soft Voting chỉ dùng cho phân loại",
      "Hard Voting đòi hỏi số lượng mô hình chẵn"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Hard Voting (Bỏ phiếu cứng):** Đếm theo số đông nhãn lớp. (Mô hình 1 phán A, Mô hình 2 phán A, Mô hình 3 phán B $\\to$ Lớp A thắng vì có 2/3 phiếu).\n* **Soft Voting (Bỏ phiếu mềm):** Lấy **trung bình cộng xác suất** mà các mô hình gán cho từng lớp, rồi chọn lớp có xác suất trung bình cao nhất.\n* ⚠️ **So sánh thi cử:** **Soft Voting thường vượt trội hơn Hard Voting** vì nó tận dụng được thông tin về **độ tự tin (Confidence)** của từng mô hình, tránh việc các phiếu phân vân (51%) lấn át một phiếu rất tự tin (99%).",
    "slideRef": "Slide Chương 4, Trang 71-73"
  },
  {
    "id": 122,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Kỹ thuật Lấy mẫu Bootstrap (Bootstrap Sampling) trong Bagging được thực hiện như thế nào?",
    "options": [
      "Lấy mẫu ngẫu nhiên không hoàn lại",
      "Từ tập dữ liệu n quan sát ban đầu, rút ngẫu nhiên n lần CÓ HOÀN LẠI (with replacement)",
      "Chia dữ liệu thành các fold cố định không giao nhau",
      "Chỉ lấy 50% dữ liệu đầu tiên"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Bootstrap Sampling** là kỹ thuật lấy mẫu thống kê:\n  - Cho tập dữ liệu gốc gồm $n$ mẫu.\n  - Ta rút ngẫu nhiên $n$ lần **CÓ HOÀN LẠI (with replacement)** để tạo ra một tập dữ liệu con cũng có đúng $n$ mẫu.\n* Do có hoàn lại:\n  - Một mẫu có thể được chọn nhiều lần (trùng lặp).\n  - Một số mẫu sẽ không bao giờ được bốc trúng (gọi là tập Out-Of-Bag).",
    "slideRef": "Slide Chương 4, Trang 76"
  },
  {
    "id": 123,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Nguyên lý cốt lõi của phương pháp Bagging (Bootstrap Aggregating) là gì?",
    "options": [
      "Huấn luyện tuần tự để sửa sai cho mô hình trước",
      "Huấn luyện SONG SONG nhiều mô hình độc lập trên các mẫu bootstrap khác nhau rồi tổng hợp kết quả (bỏ phiếu hoặc trung bình)",
      "Tăng trọng số cho các mẫu bị đoán sai",
      "Khớp cây vào gradient của hàm mất mát"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTên gọi **BAGGING** là viết tắt của **B**ootstrap **AGG**regat**ING**:\n1. **Bootstrap:** Tạo ra $B$ tập dữ liệu con bằng cách lấy mẫu có hoàn lại từ tập gốc.\n2. **Huấn luyện Song song (Parallel):** Huấn luyện $B$ mô hình độc lập (thường là các cây quyết định sâu) trên $B$ tập dữ liệu này.\n3. **Aggregating (Tổng hợp):** Gom dự đoán của cả $B$ mô hình lại bằng cách **Bỏ phiếu đa số** (cho phân loại) hoặc **Lấy trung bình cộng** (cho hồi quy).",
    "slideRef": "Slide Chương 4, Trang 75, 77-79"
  },
  {
    "id": 124,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Mục tiêu chính của phương pháp Bagging là tác động lên thành phần nào trong đánh đổi Bias - Variance?",
    "options": [
      "Làm giảm Bias của mô hình",
      "Làm giảm Variance của mô hình (chống quá khớp)",
      "Làm tăng Variance để mô hình phức tạp hơn",
      "Không thay đổi cả Bias lẫn Variance"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong lý thuyết xác suất thống kê:\n* Giả sử ta có $B$ biến ngẫu nhiên độc lập cùng phân phối, mỗi biến có phương sai là $\\sigma^2$. Khi ta lấy trung bình cộng của chúng, phương sai của trung bình cộng sẽ giảm xuống còn:\n  $$\\text{Var}(\\bar{X}) = \\frac{\\sigma^2}{B}$$\n* Áp dụng vào Machine Learning:\n  - Từng cây quyết định sâu có **Variance rất cao (Overfitting)**.\n  - Bagging gom nhiều cây sâu lại và lấy trung bình $\\implies$ **TRIỆT TIÊU PHƯƠNG SAI $\\implies$ GIẢM VARIANCE MẠNH MẼ!**\n  - Trong khi đó, Bias của Bagging xấp xỉ bằng Bias của từng cây đơn lẻ (vốn dĩ đã thấp).",
    "slideRef": "Slide Chương 4, Trang 80, 84"
  },
  {
    "id": 125,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Trong quá trình lấy mẫu Bootstrap kích thước n từ n phần tử, tỷ lệ các mẫu Out-Of-Bag (OOB) không được chọn xấp xỉ bằng bao nhiêu khi n lớn?",
    "options": [
      "50%",
      "36.8% (khoảng 1/e)",
      "10%",
      "63.2%"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Chứng minh toán học:\nXét 1 mẫu dữ liệu cụ thể trong tập $n$ phần tử:\n1. Xác suất để mẫu đó **không được chọn** trong 1 lần rút thăm là:\n   $$1 - \\frac{1}{n}$$\n2. Vì ta rút thăm $n$ lần độc lập có hoàn lại, xác suất để mẫu đó **không bao giờ được chọn trong cả $n$ lần** là:\n   $$P(\\text{không chọn}) = \\left(1 - \\frac{1}{n}\\right)^n$$\n3. Trong giải tích toán học, khi $n \\to \\infty$:\n   $$\\lim_{n \\to \\infty} \\left(1 - \\frac{1}{n}\\right)^n = \\frac{1}{e} \\approx \\mathbf{0.368 = 36.8\\%}$$\n* Như vậy, khoảng **$36.8\\%$** dữ liệu không hề tham gia huấn luyện cây đó, gọi là tập **Out-Of-Bag (OOB)**!\n* Ngược lại, tỷ lệ mẫu được chọn tham gia huấn luyện xấp xỉ $1 - 36.8\\% = 63.2\\%$.",
    "slideRef": "Slide Chương 4, Trang 81"
  },
  {
    "id": 126,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Tập mẫu Out-Of-Bag (OOB) trong Bagging được sử dụng để làm gì?",
    "options": [
      "Huấn luyện thêm một cây mới",
      "Đánh giá kiểm định chất lượng mô hình mà không cần tốn thêm tập validation riêng",
      "Làm sạch dữ liệu ngoại lai",
      "Tính toán trọng số alpha"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong Bagging và Random Forest:\n* Mỗi cây chỉ được huấn luyện trên khoảng $63.2\\%$ dữ liệu từ mẫu Bootstrap. Khoảng $36.8\\%$ số mẫu còn lại hoàn toàn \"vô hình\" đối với cây đó (tập Out-Of-Bag - OOB).\n* **Ứng dụng đột phá:** Ta lấy chính các mẫu OOB này đưa vào cây tương ứng để dự đoán và tính toán sai số (gọi là **OOB Error / OOB Score**).\n* **Lợi ích to lớn:**\n  1. Đóng vai trò như một tập **Validation tự nhiên được tích hợp sẵn**.\n  2. Kỹ sư ML không cần phải cắt bớt một phần dữ liệu quý giá để làm tập Validation riêng, và cũng không cần tốn chi phí chạy K-Fold Cross-Validation!",
    "slideRef": "Slide Chương 4, Trang 82, 93"
  },
  {
    "id": 127,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Random Forest bổ sung thêm nguồn ngẫu nhiên nào so với phương pháp Bagging thông thường?",
    "options": [
      "Ngẫu nhiên hàm mất mát",
      "Lấy mẫu ngẫu nhiên một tập con đặc trưng (Feature Subsampling) tại mỗi nút phân nhánh",
      "Ngẫu nhiên tốc độ học learning rate",
      "Ngẫu nhiên số lượng lớp dự đoán"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nNếu Bagging chỉ ngẫu nhiên hóa **dòng dữ liệu** (lấy mẫu Bootstrap), thì Random Forest bổ sung thêm tầng ngẫu nhiên thứ hai trên **cột đặc trưng**:\n* **Kỹ thuật Lấy mẫu đặc trưng ngẫu nhiên (Feature Subsampling):**\n  - Tại **MỖI NÚT PHÂN CHIA** của từng cây, thuật toán **không duyệt qua toàn bộ $p$ đặc trưng**, mà chỉ chọn ngẫu nhiên một tập con gồm $m$ đặc trưng ($m < p$).\n  - Thuật toán chỉ tìm điểm cắt tối ưu trên tập con $m$ đặc trưng này.\n* **Quy tắc ngón tay cái chuẩn (Rule of Thumb):**\n  - Với bài toán Phân loại: $m = \\sqrt{p}$.\n  - Với bài toán Hồi quy: $m = \\frac{p}{3}$.",
    "slideRef": "Slide Chương 4, Trang 85-88"
  },
  {
    "id": 128,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Tại sao việc lấy mẫu ngẫu nhiên đặc trưng tại mỗi nút lại giúp Random Forest vượt trội hơn Bagging cây thông thường?",
    "options": [
      "Vì nó giúp cây phát triển sâu hơn",
      "Vì nó ngăn các đặc trưng quá mạnh luôn thống trị ở nút gốc, làm giảm sự tương quan giữa các cây và tăng tính đa dạng cho cả rừng",
      "Vì nó giúp loại bỏ hoàn toàn các đặc trưng nhiễu",
      "Vì nó biến bài toán thành học không giám sát"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Hạn chế của Bagging chuẩn:** Nếu trong tập dữ liệu có 1 hoặc vài đặc trưng quá mạnh (Predictive power áp đảo), thì hầu như mọi cây trong Bagging đều sẽ chọn đặc trưng đó làm Nút gốc $\\implies$ Hàng trăm cây có cấu trúc na ná nhau $\\implies$ Các cây bị **tương quan cao (Highly Correlated)**.\n* Khi các mô hình bị tương quan cao, việc lấy trung bình cộng không giúp giảm nhiều phương sai (giống như hỏi ý kiến của 100 người nhưng cả 100 người đều cùng chung một góc nhìn).\n* **Giải pháp của Random Forest:** Bằng cách ngẫu nhiên chỉ cho chọn $m = \\sqrt{p}$ đặc trưng tại mỗi nút, các cây bị ép phải thử nghiệm các đặc trưng yếu hơn $\\implies$ Giải trừ sự tương quan (**Decorrelate the trees**) $\\implies$ Rừng trở nên cực kỳ phong phú và đa dạng $\\implies$ **Giảm Variance tối đa!**",
    "slideRef": "Slide Chương 4, Trang 88"
  },
  {
    "id": 129,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Thuật toán Extra Trees (Extremely Randomized Trees) khác Random Forest ở điểm nào?",
    "options": [
      "Extra Trees huấn luyện tuần tự",
      "Extra Trees ngẫu nhiên hóa cả các ngưỡng phân nhánh ứng viên thay vì tìm ngưỡng tối ưu",
      "Extra Trees chỉ dùng đúng 1 cây duy nhất",
      "Extra Trees không dùng cho bài toán phân loại"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Random Forest:** Chọn ngẫu nhiên $m$ đặc trưng, nhưng trên mỗi đặc trưng được chọn, nó vẫn dùng thuật toán tìm ngưỡng cắt $t$ tối ưu nhất (làm sạch Gini nhất).\n* **Extra Trees (Extremely Randomized Trees):** Đẩy tính ngẫu nhiên lên mức tối đa!\n  - Không đi tìm ngưỡng cắt tối ưu nữa, mà **chọn ngẫu nhiên luôn ngưỡng cắt $t$** cho từng đặc trưng ứng viên!\n  - Sau đó chỉ so sánh giữa các ngưỡng ngẫu nhiên này để chọn cái tốt nhất.\n* **Hệ quả:**\n  1. Tốc độ huấn luyện **nhanh hơn Random Forest rất nhiều** (bỏ qua bước quét tìm điểm cắt tốn CPU).\n  2. Tăng tính ngẫu nhiên giúp giảm thêm một chút Variance, nhưng có thể tăng nhẹ Bias.",
    "slideRef": "Slide Chương 4, Trang 94-95"
  },
  {
    "id": 130,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Sự khác biệt căn bản về cách thức huấn luyện giữa Bagging và Boosting là gì?",
    "options": [
      "Bagging huấn luyện tuần tự; Boosting huấn luyện song song",
      "Bagging huấn luyện SONG SONG độc lập; Boosting huấn luyện TUẦN TỰ theo chuỗi, mô hình sau sửa sai cho mô hình trước",
      "Bagging chỉ dùng cho hồi quy; Boosting chỉ dùng cho phân loại",
      "Bagging dùng mạng nơ-ron; Boosting dùng hồi quy tuyến tính"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nĐây là câu hỏi cốt lõi phân biệt 2 nhánh lớn của Ensemble:\n* **BAGGING:**\n  - Cách thức: **Song song (Parallel)**.\n  - Các cây hoàn toàn độc lập với nhau, có thể phân tán chạy trên nhiều nhân CPU/GPU cùng một lúc.\n* **BOOSTING:**\n  - Cách thức: **Tuần tự theo chuỗi (Sequential)**.\n  - Cây thứ $k$ bắt buộc phải chờ cây thứ $k-1$ huấn luyện xong để biết cây trước đoán sai ở đâu, từ đó tập trung học để sửa chữa sai lầm! Không thể huấn luyện song song các cây trong Boosting.",
    "slideRef": "Slide Chương 4, Trang 96-97"
  },
  {
    "id": 131,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Mục tiêu cốt lõi của phương pháp Boosting là tác động lên thành phần nào trong đánh đổi Bias - Variance?",
    "options": [
      "Làm giảm Variance của mô hình",
      "Làm giảm Bias của mô hình (biến các bộ học yếu thành bộ học mạnh)",
      "Làm tăng Bias để mô hình đơn giản hơn",
      "Không thay đổi cả hai"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Mô hình cơ sở trong Boosting thường là các **bộ học rất yếu (Weak Learners)**, ví dụ như Cây 1 tầng (Decision Stump). Mô hình yếu thì dự đoán rất đơn giản $\\implies$ **Bias rất cao**.\n* Bằng cách xâu chuỗi tuần tự hàng trăm bộ học yếu, mỗi bộ học gánh vác việc sửa một phần lỗi của hệ thống, Boosting biến một tập hợp các mô hình yếu thành một **mô hình tổng thể cực mạnh (Strong Learner)**.\n* 👉 **Mục tiêu chính của Boosting là GIẢM BIAS!** (Ngược lại với Bagging tập trung giảm Variance).",
    "slideRef": "Slide Chương 4, Trang 99, 114"
  },
  {
    "id": 132,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Mô hình cơ sở (Weak Learner) thường được sử dụng trong Boosting là gì?",
    "options": [
      "Mạng nơ-ron sâu 100 tầng",
      "Cây quyết định rất nông (thường là cây 1 tầng / Decision Stump)",
      "Mô hình Random Forest hoàn chỉnh",
      "Hồi quy Ridge với λ cực lớn"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Trong Boosting, ta **không dùng cây sâu phức tạp** (vì cây sâu có High Variance, xâu chuỗi lại sẽ bị quá khớp bùng nổ).\n* Ngược lại, Boosting sử dụng các **cây quyết định rất nông**, kinh điển nhất là **Decision Stump (Gốc cây / Cây 1 tầng)**:\n  - Cây chỉ gồm đúng 1 nút kiểm tra ở trên và chẻ ra 2 nút lá ở dưới.\n  - Mỗi Decision Stump chỉ cần dự đoán tốt hơn đoán ngẫu nhiên một chút (ví dụ $Accuracy > 50\\%$).\n  - Hàng trăm Decision Stump kết hợp lại sẽ tạo ra biên phân loại phi tuyến cực kỳ phức tạp và chính xác.",
    "slideRef": "Slide Chương 4, Trang 99, 114"
  },
  {
    "id": 133,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Trong thuật toán AdaBoost, trọng số của các mẫu dữ liệu được cập nhật như thế nào sau mỗi vòng lặp?",
    "options": [
      "Mọi mẫu đều giữ nguyên trọng số ban đầu 1/m",
      "Mẫu bị dự đoán SAI sẽ bị TĂNG TRỌNG SỐ; mẫu đoán ĐÚNG sẽ giữ nguyên hoặc giảm trọng số",
      "Mẫu bị đoán sai sẽ bị xóa khỏi tập dữ liệu",
      "Trọng số của mẫu đoán sai bị gán về 0"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCơ chế \"thưởng phạt\" tâm lý trong AdaBoost (Adaptive Boosting):\n* Ban đầu, tất cả $m$ mẫu đều có trọng số bình đẳng: $w_i = \\frac{1}{m}$.\n* Ở mỗi vòng lặp:\n  - Mẫu nào được mô hình hiện tại đoán **ĐÚNG** $\\to$ Giảm trọng số (vì dễ rồi, không cần tốn tài nguyên bận tâm nữa).\n  - Mẫu nào bị mô hình đoán **SAI** $\\to$ **BỊ TĂNG TRỌNG SỐ LÊN RẤT MẠNH**!\n* Sang vòng tiếp theo, cây mới được huấn luyện trên phân bố trọng số mới, buộc nó phải dồn toàn bộ sự chú ý để **ưu tiên phân loại đúng các mẫu khó bị đoán sai ở vòng trước**.",
    "slideRef": "Slide Chương 4, Trang 100, 105"
  },
  {
    "id": 134,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Trong AdaBoost, trọng số đóng góp của một mô hình (alpha_j) vào quyết định cuối cùng phụ thuộc vào điều gì?",
    "options": [
      "Độ sâu của cây mô hình đó",
      "Tỷ lệ sai số có trọng số r_j của mô hình (mô hình có sai số càng thấp thì trọng số alpha càng lớn)",
      "Số lượng mẫu trong tập huấn luyện",
      "Thời gian huấn luyện mô hình đó"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCông thức tính trọng số đóng góp $\\alpha_j$ của mô hình thứ $j$ trong AdaBoost:\n$$\\alpha_j = \\frac{1}{2} \\ln\\left(\\frac{1 - r_j}{r_j}\\right)$$\n*(Trong đó $r_j$ là tỷ lệ sai số có trọng số của mô hình $j$)*.\n* **Ý nghĩa:**\n  - Nếu mô hình đoán rất giỏi ($r_j$ rất nhỏ, ví dụ $0.01$) $\\implies \\frac{1 - r_j}{r_j}$ rất lớn $\\implies \\alpha_j$ là số dương rất lớn $\\implies$ Tiếng nói của mô hình này trong hội đồng rất có trọng lượng!\n  - Nếu mô hình chỉ đoán ngang ngửa tung đồng xu ($r_j = 0.5$) $\\implies \\alpha_j = \\frac{1}{2}\\ln(1) = 0 \\implies$ Không có tiếng nói nào.\n  - Nếu mô hình đoán tệ hơn ngẫu nhiên ($r_j > 0.5$) $\\implies \\alpha_j < 0$ (phủ quyết ý kiến).",
    "slideRef": "Slide Chương 4, Trang 104"
  },
  {
    "id": 135,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Điểm khác biệt CỐT LÕI giữa Gradient Boosting và AdaBoost là gì?",
    "options": [
      "AdaBoost dùng cây; Gradient Boosting dùng hồi quy tuyến tính",
      "Thay vì thay đổi trọng số của mẫu như AdaBoost, Gradient Boosting huấn luyện mỗi cây mới để khớp vào phần dư (Pseudo-residuals / Âm gradient của hàm mất mát)",
      "Gradient Boosting huấn luyện song song; AdaBoost tuần tự",
      "Gradient Boosting không dùng siêu tham số"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **AdaBoost:** Sửa sai bằng cách **điều chỉnh trọng số của mẫu dữ liệu** (phạt mẫu sai bằng cách tăng trọng số).\n* **Gradient Boosting:** Không đổi trọng số mẫu. Thay vào đó, nó dùng toán giải tích:\n  - Mỗi cây mới $h_k(x)$ được giao nhiệm vụ **học cách dự đoán trực tiếp PHẦN DƯ SAI SỐ (Pseudo-residuals)** của mô hình hiện tại:\n    $$r_{ik} = - \\left[ \\frac{\\partial L(y_i, F(x_i))}{\\partial F(x_i)} \\right]$$\n  - Phần dư âm gradient chính là hướng giảm sai số nhanh nhất của hàm mất mát. Cây mới bù đắp phần còn thiếu mà các cây trước chưa dự đoán được.",
    "slideRef": "Slide Chương 4, Trang 107, 110"
  },
  {
    "id": 136,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Mô hình cộng dồn trong Gradient Boosting có dạng biểu thức nào sau đây?",
    "options": [
      "F_k(x) = F_{k-1}(x) * h_k(x)",
      "F_k(x) = F_{k-1}(x) + η * h_k(x)",
      "F_k(x) = (F_{k-1}(x) + h_k(x)) / 2",
      "F_k(x) = F_0(x) - h_k(x)"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nGradient Boosting xây dựng mô hình theo phương pháp **cộng dồn từng bước (Additive Model)**:\n$$F_k(x) = F_{k-1}(x) + \\eta \\cdot h_k(x)$$\n* $F_{k-1}(x)$: Dự đoán của toàn bộ chuỗi mô hình ở bước trước đó.\n* $h_k(x)$: Cây mới vừa được huấn luyện để sửa phần dư sai số.\n* $\\eta$ (hoặc $\\nu$): Tốc độ học (Learning Rate / Shrinkage), giúp thu nhỏ đóng góp của mỗi cây mới để mô hình học từ tốn, tránh Overfitting.",
    "slideRef": "Slide Chương 4, Trang 109, 111"
  },
  {
    "id": 137,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Vai trò của tham số Tốc độ học (Learning Rate η / Shrinkage) trong Gradient Boosting là gì?",
    "options": [
      "Quyết định số lượng thuộc tính được lấy mẫu",
      "Điều khiển mức độ đóng góp của từng cây mới; learning rate nhỏ giúp chuỗi học thận trọng và tránh Overfitting nhưng cần nhiều cây hơn",
      "Xác định độ sâu tối đa của cây",
      "Quy định số lượng fold trong cross validation"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Tham số $\\eta$ (thường chọn trong khoảng $0.01 - 0.1$) đóng vai trò như một **khoản chiết khấu (Shrinkage)**:\n  - Nếu $\\eta = 1$: Cây mới sửa sai $100\\%$ phần dư ngay lập tức $\\implies$ Mô hình học rất nhanh nhưng cực kỳ dễ bị quá khớp (Overfitting).\n  - Khi $\\eta$ nhỏ (ví dụ $0.05$): Mỗi cây mới chỉ được phép đóng góp $5\\%$ công sức $\\implies$ Chuỗi mô hình phải học từ tốn qua hàng trăm bước $\\implies$ Khả năng tổng quát hóa trên tập Test tốt hơn rất nhiều.\n* **Đánh đổi:** $\\eta$ càng nhỏ thì đòi hỏi số lượng cây (`n_estimators`) phải càng nhiều và thời gian huấn luyện lâu hơn.",
    "slideRef": "Slide Chương 4, Trang 112"
  },
  {
    "id": 138,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Hai thư viện Gradient Boosting hiện đại, hiệu năng cao được nhắc đến trong đề cương bài giảng là gì?",
    "options": [
      "Scikit-learn và Weka",
      "XGBoost và LightGBM",
      "TensorFlow và PyTorch",
      "Pandas và NumPy"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **XGBoost (Extreme Gradient Boosting):** Nâng cấp Gradient Boosting bằng cách dùng khai triển Taylor bậc 2 của hàm mất mát, tối ưu hóa bộ nhớ đệm (Cache-aware) và tích hợp sẵn Regularization phạt độ phức tạp cây.\n* **LightGBM (do Microsoft phát triển):** Tối ưu hóa tốc độ xử lý dữ liệu lớn bằng kỹ thuật chia nhóm Histogram và phát triển cây theo chiều sâu lá (**Leaf-wise**), giúp giảm sai số nhanh hơn so với kiểu chia tầng truyền thống (Level-wise).",
    "slideRef": "Slide Chương 4, Trang 113"
  },
  {
    "id": 139,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Nhược điểm lớn của phương pháp Boosting so với Bagging khi dữ liệu có nhiều ngoại lai (Outliers) và nhiễu là gì?",
    "options": [
      "Boosting chạy quá nhanh",
      "Boosting rất nhạy cảm với nhiễu vì có xu hướng gán trọng số ngày càng lớn cho các mẫu nhiễu khó học, dẫn đến Overfitting trên nhiễu",
      "Boosting không thể xử lý dữ liệu lớn",
      "Boosting luôn có Variance cao hơn Bagging"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nĐây là **bẫy trắc nghiệm kinh điển** về tính nhạy cảm với nhiễu:\n* Trong **Bagging (Random Forest)**: Mỗi cây lấy mẫu Bootstrap độc lập, một vài điểm nhiễu chỉ rơi vào một số cây và bị triệt tiêu khi lấy trung bình $\\implies$ **Rất bền vững, ít bị ảnh hưởng bởi Outliers/Nhiễu**.\n* Trong **Boosting (AdaBoost, Gradient Boosting)**:\n  - Bản chất của Boosting là \"thấy chỗ nào sai thì tập trung dồn lực sửa chỗ đó\".\n  - Một điểm dữ liệu nhiễu/ngoại lai là cực kỳ khó dự đoán đúng $\\implies$ Nó liên tục bị dự đoán sai qua các vòng.\n  - AdaBoost sẽ liên tục **nhân trọng số của điểm nhiễu này lên cực đại**, hoặc Gradient Boosting sẽ cố gò các cây sau khớp vào phần dư của điểm nhiễu này $\\implies$ Toàn bộ mô hình bị \"dắt mũi\" chạy theo nhiễu $\\implies$ **Overfitting nặng nề!**",
    "slideRef": "Slide Chương 4, Trang 114"
  },
  {
    "id": 140,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Khi xây dựng cây phân loại CART cho biến số liên tục, điểm chia ngưỡng x_j <= t được xác định như thế nào?",
    "options": [
      "Lấy ngẫu nhiên một số bất kỳ",
      "Thử các ngưỡng ứng viên nằm giữa các giá trị quan sát và chọn ngưỡng t tạo ra độ vẩn đục Gini sau chia là nhỏ nhất",
      "Luôn luôn lấy giá trị trung bình cộng của biến đó",
      "Lấy giá trị lớn nhất của biến"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nĐể tìm điểm chia $x_j \\le t$ cho thuộc tính liên tục trong CART:\n1. Sắp xếp tất cả các giá trị phân biệt của đặc trưng $x_j$ trong tập dữ liệu theo thứ tự tăng dần.\n2. Tạo ra các ngưỡng ứng viên $t$ bằng **trung điểm giữa hai giá trị liên tiếp**: $t_i = \\frac{x_{(i)} + x_{(i+1)}}{2}$.\n3. Với mỗi ngưỡng ứng viên $t$, chia dữ liệu thành 2 nửa (Trái: $x_j \\le t$ và Phải: $x_j > t$) và tính chỉ số $Gini_{\\text{split}}$.\n4. Chọn ngưỡng $t^*$ nào tạo ra **$Gini_{\\text{split}}$ nhỏ nhất** (thuần khiết nhất)!",
    "slideRef": "Slide Chương 4, Trang 27"
  },
  {
    "id": 141,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Trong phân loại bằng Random Forest, nhãn dự đoán cuối cùng của toàn bộ rừng được tổng hợp bằng cách nào?",
    "options": [
      "Lấy nhãn của cây đầu tiên được tạo ra",
      "Biểu quyết theo đa số (Majority Voting) hoặc trung bình cộng xác suất các cây",
      "Lấy giá trị trung vị của các cây",
      "Nhân các xác suất lại với nhau"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong Random Forest cho bài toán phân loại:\n* Mỗi cây trong rừng sẽ đưa ra dự đoán nhãn lớp của riêng nó (hoặc phân phối xác suất dự đoán).\n* Dự đoán cuối cùng của toàn bộ rừng được tổng hợp bằng:\n  1. **Biểu quyết theo đa số (Majority / Hard Voting):** Lớp nào nhận được nhiều phiếu bầu nhất từ các cây sẽ là nhãn dự đoán chung.\n  2. **Soft Voting (Trung bình xác suất):** Lấy trung bình cộng xác suất dự đoán của từng lớp trên toàn bộ các cây rồi chọn lớp có xác suất cao nhất.",
    "slideRef": "Slide Chương 4, Trang 91"
  },
  {
    "id": 142,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Tại sao Cây quyết định đơn lẻ thường được gọi là 'Non-parametric model'?",
    "options": [
      "Vì nó không có siêu tham số",
      "Vì số lượng tham số cấu trúc của nó không cố định trước mà tăng lên linh hoạt theo dữ liệu huấn luyện",
      "Vì nó không tính toán được trên máy tính",
      "Vì nó không sử dụng hàm mất mát"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong thống kê học:\n* **Mô hình tham số (Parametric):** Có số lượng tham số cố định từ đầu, không phụ thuộc vào kích thước dữ liệu (ví dụ Hồi quy tuyến tính có đúng $p+1$ trọng số $w$, dù bạn có 100 hay 1 triệu dòng thì số lượng $w$ vẫn y nguyên).\n* **Mô hình phi tham số (Non-parametric):** Số lượng tham số (số nút, số nhánh, độ sâu) **không được định sẵn**, mà tự do phình to hoặc thu nhỏ theo kích thước và độ phức tạp của tập dữ liệu huấn luyện. Càng nhiều dữ liệu, cây càng có thể mọc nhiều nút hơn.",
    "slideRef": "Slide Chương 4, Trang 56"
  },
  {
    "id": 143,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Kỹ thuật Hậu cắt tỉa (Post-pruning) thường sử dụng tập dữ liệu nào để quyết định xem có nên cắt bỏ một nhánh hay không?",
    "options": [
      "Training set",
      "Validation set",
      "Test set",
      "Tập OOB"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Nếu dùng chính tập Training set để đánh giá việc cắt tỉa thì thuật toán sẽ **không bao giờ cắt bất kỳ nhánh nào**, vì trên tập Train, cây càng sâu thì độ chính xác càng cao ($100\\%$).\n* Do đó, bắt buộc phải dùng **Validation set (Tập kiểm định độc lập)**:\n  - Thử nghiệm cắt bỏ một nhánh con từ dưới lên.\n  - Nếu sau khi cắt bỏ nhánh đó mà độ chính xác trên tập Validation **không đổi hoặc tăng lên** (chứng tỏ nhánh đó chỉ học vẹt dữ liệu nhiễu), thuật toán sẽ chính thức chặt bỏ nhánh đó!",
    "slideRef": "Slide Chương 4, Trang 52-53"
  },
  {
    "id": 144,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Mô hình nào sau đây vừa có tính năng giải thích trực quan bằng luật Nếu-Thì, vừa không đòi hỏi chuẩn hóa thang đo dữ liệu?",
    "options": [
      "Logistic Regression",
      "Multi-Layer Perceptron",
      "Decision Tree",
      "K-Means Clustering"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Tính năng giải thích trực quan bằng luật If - Then:** Mỗi nhánh đi từ nút gốc đến nút lá tương đương với một mệnh đề logic (ví dụ `NẾU Tuổi > 30 VÀ Thu nhập > 20tr THÌ Mua xe = YES`).\n* **Không đòi hỏi chuẩn hóa dữ liệu:** Do thuật toán chỉ so sánh thứ tự lớn hơn / nhỏ hơn của từng đặc trưng độc lập.\n* Trong 4 phương án, chỉ có **Cây quyết định (Decision Tree)** thỏa mãn đồng thời cả hai ưu điểm tuyệt vời này.",
    "slideRef": "Slide Chương 4, Trang 56"
  },
  {
    "id": 145,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "So sánh tổng thể giữa Cây quyết định đơn lẻ và Rừng ngẫu nhiên (Random Forest):",
    "options": [
      "Cây đơn dễ giải thích hơn nhưng độ chính xác và ổn định kém hơn; Random Forest chính xác và ổn định hơn nhiều nhưng khó diễn giải hơn",
      "Cây đơn luôn có độ chính xác cao hơn Random Forest",
      "Random Forest có thời gian huấn luyện nhanh hơn cây đơn",
      "Không có sự khác biệt nào giữa hai mô hình"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nSự đánh đổi kinh điển giữa Cây đơn và Random Forest:\n* **Cây quyết định đơn lẻ (Single Tree):**\n  - **Ưu điểm:** Tính diễn giải cực cao (**White-box**), dễ vẽ sơ đồ giải thích cho khách hàng/sếp hiểu.\n  - **Nhược điểm:** Độ chính xác không cao, rất dễ bị Overfitting, cực kỳ bất ổn định (High Variance).\n* **Random Forest (Rừng ngẫu nhiên):**\n  - **Ưu điểm:** Độ chính xác vượt trội, chống Overfitting cực tốt, rất ổn định (Low Variance).\n  - **Nhược điểm:** Trở thành mô hình \"Hộp đen\" (**Black-box**), rất khó giải thích lý do cụ thể vì quyết định được tổng hợp từ hàng trăm cây khác nhau.",
    "slideRef": "Slide Chương 4, Trang 67, 114"
  },
  {
    "id": 221,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Nhược điểm lớn nhất của chỉ số Information Gain chuẩn trong thuật toán ID3 là gì?",
    "options": [
      "Không thể tính toán được với dữ liệu dạng chuỗi",
      "Có xu hướng thiên vị (bias) chọn các thuộc tính có quá nhiều giá trị phân biệt (ví dụ: Số CCCD, ID sinh viên)",
      "Luôn tạo ra cây có độ sâu chỉ bằng 1",
      "Không bao giờ hội tụ khi huấn luyện"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Hiện tượng thiên vị đặc trưng phân mảnh (High Cardinality Bias):**\n  - Giả sử trong tập dữ liệu có thuộc tính `Mã sinh viên` hoặc `Số CCCD` (mỗi dòng là một giá trị duy nhất).\n  - Nếu thuật toán ID3 chọn thuộc tính này, nó sẽ chẻ ra $N$ nhánh con, mỗi nhánh con chỉ chứa đúng 1 sinh viên!\n  - Lúc này, mỗi nhánh con hoàn toàn thuần khiết $100\\%$ ($H(S_v) = 0$).\n  - Khi đó, Entropy sau chia $H(S|A) = 0 \\implies IG(S, A) = H(S) - 0 = H(S)$ đạt giá trị **CỰC ĐẠI TUYỆT ĐỐI**!\n* Thuật toán tưởng đây là thuộc tính hoàn hảo nhất và chọn làm nút gốc, nhưng trên thực tế cây này chỉ học vẹt mã số, hoàn toàn vô dụng trên dữ liệu mới!\n* 👉 **Giải pháp:** C4.5 ra đời dùng **Gain Ratio** để phạt các thuộc tính chia ra quá nhiều nhánh vụn vặt.",
    "slideRef": "Slide Chương 4, Trang 33-35"
  },
  {
    "id": 222,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Trong thuật toán Cây quyết định, điều nào sau đây KHÔNG phải là một điều kiện dừng hợp lệ khi mở rộng nút?",
    "options": [
      "Tất cả các mẫu tại nút đều thuộc về cùng một lớp nhãn duy nhất",
      "Độ sâu của cây đạt đến giới hạn max_depth quy định",
      "Số lượng mẫu tại nút nhỏ hơn ngưỡng min_samples_split",
      "Độ đo Information Gain của thuộc tính tốt nhất đạt giá trị cực đại bằng 100"
    ],
    "answer": 3,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCác điều kiện dừng hợp lệ để một nút trở thành nút lá:\n1. **Nút đã thuần khiết:** Tất cả các mẫu đều cùng 1 lớp (Entropy = 0, Gini = 0).\n2. **Hết thuộc tính để chia** hoặc tất cả các mẫu đều có giá trị thuộc tính giống hệt nhau.\n3. **Chạm giới hạn tiền cắt tỉa:** Độ sâu đạt `max_depth`, hoặc số mẫu nhỏ hơn `min_samples_split`.\n\n### ⚠️ Vì sao phương án 4 là SAI (Bẫy thi)?\n* Công thức Information Gain: $IG(S, A) = H(S) - H(S|A)$.\n* Vì $H(S)$ với 2 lớp chỉ tối đa bằng $1.0$ (với $C$ lớp tối đa bằng $\\log_2 C$), nên $IG$ **không bao giờ có thể đạt tới giá trị 100**! Con số 100 là hoàn toàn vô lý về mặt toán học.",
    "slideRef": "Slide Chương 4, Trang 38-40"
  },
  {
    "id": 223,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Sự khác biệt cốt lõi giữa kỹ thuật Cắt tỉa trước (Pre-pruning) và Cắt tỉa sau (Post-pruning) trong Cây quyết định là gì?",
    "options": [
      "Pre-pruning dừng sớm quá trình phát triển cây dựa trên ngưỡng; Post-pruning cho cây mọc hoàn chỉnh rồi mới tỉa bớt các nhánh phụ dựa trên tập validation",
      "Pre-pruning chỉ dùng cho bài toán Hồi quy, còn Post-pruning chỉ dùng cho Phân loại",
      "Pre-pruning làm tăng overfitting, còn Post-pruning làm tăng underfitting",
      "Pre-pruning loại bỏ thuộc tính đầu vào trước khi huấn luyện"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Pre-pruning (Cắt tỉa trước / Dừng sớm):** Giống như việc \"uốn cây cảnh từ bé\". Trong lúc cây đang mọc, nếu gặp điều kiện chặn (`max_depth`, `min_samples_split`, `min_samples_leaf`), thuật toán lập tức **chặn không cho mọc tiếp**.\n  - *Ưu điểm:* Huấn luyện nhanh, tốn ít bộ nhớ.\n  - *Nhược điểm:* Dễ bị dừng non (Early stopping) do không nhìn thấy những phép phân chia tiềm năng ở các tầng sâu hơn.\n* **Post-pruning (Cắt tỉa sau):** Giống như \"để cây mọc tự do sum suê rồi vác kéo đi tỉa cành\". Cho cây phát triển tối đa đến khi Overfitting, sau đó dựa vào **tập Validation** để tỉa dần các nhánh không mang lại lợi ích.\n  - *Ưu điểm:* Tìm ra cấu trúc cây tối ưu hơn.\n  - *Nhược điểm:* Tốn thời gian huấn luyện cây đầy đủ ban đầu.",
    "slideRef": "Slide Chương 4, Trang 42-45"
  },
  {
    "id": 224,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Để xử lý thuộc tính dạng liên tục (Continuous Attribute) trong cây CART/C4.5, thuật toán thực hiện như thế nào?",
    "options": [
      "Bắt buộc người dùng phải gán nhãn thủ công từng khoảng",
      "Sắp xếp các giá trị thuộc tính tăng dần, thử nghiệm các ngưỡng cắt là trung điểm giữa 2 giá trị kề cận và chọn ngưỡng tối ưu độ đo",
      "Lấy giá trị trung bình cộng của toàn bộ cột làm ngưỡng duy nhất",
      "Bỏ qua thuộc tính liên tục và chỉ dùng thuộc tính phân loại"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nQuy trình biến đổi thuộc tính liên tục thành phép chia nhị phân:\n1. Lấy toàn bộ giá trị của đặc trưng đó trong tập dữ liệu và sắp xếp theo thứ tự tăng dần: $x_{(1)} < x_{(2)} < \\dots < x_{(N)}$.\n2. Tạo ra các ngưỡng chia ứng viên là **trung điểm của hai giá trị kề nhau**:\n   $$t_i = \\frac{x_{(i)} + x_{(i+1)}}{2}$$\n3. Với mỗi ngưỡng $t_i$, dữ liệu được tách thành hai nhóm ($x \\le t_i$ và $x > t_i$).\n4. Tính độ đo (Information Gain hoặc Gini) cho từng ngưỡng và chọn ngưỡng $t^*$ nào đem lại độ thuần khiết cao nhất.",
    "slideRef": "Slide Chương 4, Trang 48-50"
  },
  {
    "id": 225,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Trong thuật toán Rừng ngẫu nhiên (Random Forest) cho bài toán PHÂN LỚP (Classification) có d thuộc tính, số thuộc tính m được lấy mẫu ngẫu nhiên tại mỗi nút thường được khuyến nghị là:",
    "options": [
      "m = d (lấy toàn bộ thuộc tính)",
      "m = sqrt(d) (căn bậc hai của d)",
      "m = d / 2",
      "m = log2(d) + 10"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nQuy tắc thực nghiệm kinh điển của Leo Breiman khi thiết kế Random Forest:\n* Với bài toán **Phân loại (Classification)** có $d$ đặc trưng:\n  $$m = \\lfloor\\sqrt{d}\\rfloor$$\n* *Ví dụ:* Nếu dữ liệu có $d = 100$ đặc trưng, tại mỗi nút phân chia, thuật toán chỉ rút ngẫu nhiên $m = \\sqrt{100} = 10$ đặc trưng để tìm điểm chia tốt nhất.\n* Trong thư viện Scikit-learn: Tham số này được gọi là `max_features='sqrt'` (mặc định cho `RandomForestClassifier`).",
    "slideRef": "Slide Chương 4, Trang 68-70"
  },
  {
    "id": 226,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Trong thuật toán Rừng ngẫu nhiên (Random Forest) cho bài toán HỒI QUY (Regression) có d thuộc tính, số thuộc tính m được khuyến nghị chọn tại mỗi nút là:",
    "options": [
      "m = d / 3",
      "m = sqrt(d)",
      "m = d - 1",
      "m = 1"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Khác với bài toán phân loại dùng $\\sqrt{d}$:\n* Với bài toán **Hồi quy (Regression)** có $d$ đặc trưng, giá trị lý thuyết và thực nghiệm tối ưu thường được khuyến nghị là:\n  $$m = \\left\\lfloor\\frac{d}{3}\\right\\rfloor$$\n* *Ví dụ:* Nếu bài toán dự đoán giá nhà có $d = 30$ đặc trưng, tại mỗi nút của mỗi cây hồi quy, ta lấy ngẫu nhiên $m = 30 / 3 = 10$ đặc trưng để tìm điểm chia cực tiểu hóa phương sai.",
    "slideRef": "Slide Chương 4, Trang 71"
  },
  {
    "id": 227,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Ước lượng lỗi ngoài túi Out-of-Bag (OOB Error) trong Random Forest mang lại lợi ích nổi bật nào?",
    "options": [
      "Loại bỏ hoàn toàn bước huấn luyện cây",
      "Đánh giá khách quan chất lượng mô hình trên dữ liệu chưa thấy mà không cần tách tập Validation hoặc chạy Cross-Validation",
      "Tăng gấp đôi tốc độ dự đoán thời gian thực",
      "Làm giảm số lượng cây trong rừng xuống còn 1 cây"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Vì mỗi cây trong Random Forest được huấn luyện trên một mẫu Bootstrap khác nhau, nên với mỗi mẫu dữ liệu $x_i$, sẽ có khoảng $36.8\\%$ số cây trong rừng **chưa từng nhìn thấy $x_i$ trong lúc huấn luyện**.\n* Để dự đoán cho $x_i$, ta chỉ cho các cây mà $x_i$ là mẫu OOB bỏ phiếu.\n* **Lợi ích thực tiễn:**\n  - Cho ra ước lượng sai số khách quan không chệch (Unbiased estimate), chính xác tương đương với K-Fold Cross-Validation.\n  - Tiết kiệm $100\\%$ tài nguyên tính toán vì không phải chạy lại mô hình $K$ lần như K-Fold!",
    "slideRef": "Slide Chương 4, Trang 74-76"
  },
  {
    "id": 228,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Trong thuật toán AdaBoost, trọng số đóng góp alpha_m của một mô hình cơ sở vào quyết định cuối cùng phụ thuộc vào điều gì?",
    "options": [
      "Thời gian mà mô hình đó mất để huấn luyện",
      "Tỷ lệ lỗi epsilon_m của mô hình: lỗi càng nhỏ thì alpha_m càng lớn",
      "Số lượng nút lá của cây cơ sở",
      "Thứ tự xuất hiện ngẫu nhiên trong vòng lặp"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong AdaBoost, các mô hình cơ sở không có quyền biểu quyết ngang nhau:\n$$\\alpha_m = \\frac{1}{2} \\ln\\left(\\frac{1 - \\epsilon_m}{\\epsilon_m}\\right)$$\n* $\\epsilon_m$ là tỷ lệ sai số có trọng số của mô hình cơ sở thứ $m$.\n* **Mối quan hệ:**\n  - Khi $\\epsilon_m \\to 0$ (mô hình dự đoán gần như hoàn hảo) $\\implies \\alpha_m \\to +\\infty$ (tiếng nói cực lớn).\n  - Khi $\\epsilon_m = 0.5$ (đoán ngang ngửa đoán mò) $\\implies \\alpha_m = 0$ (bị tước quyền bỏ phiếu).\n  - Khi $\\epsilon_m > 0.5$ (đoán sai nhiều hơn đúng) $\\implies \\alpha_m < 0$ (bị đảo ngược dự đoán).",
    "slideRef": "Slide Chương 4, Trang 88-92"
  },
  {
    "id": 229,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Khái niệm 'Weak Learner' (Bộ học yếu) thường dùng trong Boosting (như AdaBoost) có nghĩa là gì?",
    "options": [
      "Mô hình có độ chính xác luôn luôn bằng 0%",
      "Mô hình dự đoán chỉ cần tốt hơn đoán ngẫu nhiên một chút (ví dụ: độ chính xác > 50% trong phân loại nhị phân)",
      "Mô hình chỉ được huấn luyện trên 1 mẫu dữ liệu duy nhất",
      "Mô hình có thời gian suy luận quá chậm"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Bộ học yếu (Weak Learner):** Là mô hình có khả năng dự đoán chỉ cần **nhỉnh hơn đoán ngẫu nhiên một chút** ($Accuracy > 50\\%$ trong bài toán nhị phân, tức $\\epsilon < 0.5$).\n* Không cần mô hình phải phức tạp hay chính xác cao. Ví dụ kinh điển là một Decision Stump (Cây quyết định 1 tầng chỉ kiểm tra 1 điều kiện duy nhất).\n* Định lý nền tảng của Schapire (1990) đã chứng minh rằng: **Bất kỳ thuật toán học yếu nào cũng có thể được nâng cấp (Boost) thành một bộ học mạnh (Strong Learner)** có độ chính xác tùy ý bằng cách kết hợp tuần tự!",
    "slideRef": "Slide Chương 4, Trang 82-84"
  },
  {
    "id": 230,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Ensemble Learning",
    "question": "Điểm khác biệt căn bản giữa thuật toán AdaBoost và Gradient Boosting (GBDT) là gì?",
    "options": [
      "AdaBoost dùng cho Hồi quy, còn GBDT chỉ dùng cho Phân cụm",
      "AdaBoost thay đổi trọng số phân phối của các mẫu khó; còn GBDT huấn luyện cây mới để khớp trực tiếp với phần dư (residual/gradient âm) của các cây trước",
      "AdaBoost huấn luyện các cây song song độc lập, còn GBDT huấn luyện tuần tự",
      "AdaBoost chỉ dùng được với mạng nơ-ron sâu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nMặc dù đều thuộc họ Boosting tuần tự:\n* **AdaBoost:** Tác động vào **DỮ LIỆU** bằng cách thay đổi trọng số của mẫu (mẫu đoán sai bị tăng trọng số để mô hình sau tập trung học).\n* **Gradient Boosting (GBDT):** Tác động vào **HÀM MẤT MÁT** bằng giải tích:\n  - Giữ nguyên trọng số mẫu.\n  - Tính toán độ lệch giữa nhãn thật và dự đoán hiện tại $\\implies$ Phần dư (Residuals / Âm gradient).\n  - Cây mới được huấn luyện để **dự đoán chính xác phần dư này**, sau đó cộng dồn vào mô hình tổng thể: $F_m(x) = F_{m-1}(x) + \\eta h_m(x)$.",
    "slideRef": "Slide Chương 4, Trang 98-102"
  },
  {
    "id": 316,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Cho một tập dữ liệu nhị phân S gồm 16 mẫu, trong đó có 8 mẫu Dương (+) và 8 mẫu Âm (-). Giá trị Entropy H(S) của tập dữ liệu này bằng bao nhiêu?",
    "options": [
      "0.0",
      "0.5",
      "1.0",
      "2.0"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Tính toán chi tiết:\nTập dữ liệu có $N = 16$ mẫu:\n* Tỷ lệ mẫu Dương: $p_+ = \\frac{8}{16} = 0.5$.\n* Tỷ lệ mẫu Âm: $p_- = \\frac{8}{16} = 0.5$.\n\nÁp dụng công thức Shannon Entropy:\n$$H(S) = - \\left[ p_+ \\log_2(p_+) + p_- \\log_2(p_-) \\right]$$\n$$H(S) = - \\left[ 0.5 \\log_2(0.5) + 0.5 \\log_2(0.5) \\right]$$\nVì $\\log_2(0.5) = \\log_2(2^{-1}) = -1$:\n$$H(S) = - [0.5 \\times (-1) + 0.5 \\times (-1)] = - [-0.5 - 0.5] = \\mathbf{1.0\\text{ bit}}$$\n\n> 💡 **Mẹo thi cử:** Cứ thấy bài toán 2 lớp mà số mẫu 2 bên bằng nhau (50% - 50%), khoanh ngay **Entropy = 1.0** không cần bấm máy tính!",
    "slideRef": "Slide Chương 4, Trang 14-16"
  },
  {
    "id": 317,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Cho một tập dữ liệu S gồm 10 mẫu thuộc 2 lớp: 9 mẫu Dương và 1 mẫu Âm. Giá trị Gini Impurity của tập S theo thuật toán CART bằng bao nhiêu?",
    "options": [
      "0.18",
      "0.09",
      "0.45",
      "0.81"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Tính toán chi tiết:\nTập dữ liệu có $N = 10$ mẫu:\n* Tỷ lệ mẫu Dương: $p_+ = \\frac{9}{10} = 0.9$.\n* Tỷ lệ mẫu Âm: $p_- = \\frac{1}{10} = 0.1$.\n\nÁp dụng công thức Gini Impurity của thuật toán CART:\n$$Gini(S) = 1 - \\sum_{k=1}^C p_k^2 = 1 - \\left( p_+^2 + p_-^2 \\right)$$\n$$Gini(S) = 1 - (0.9^2 + 0.1^2) = 1 - (0.81 + 0.01) = 1 - 0.82 = \\mathbf{0.18}$$\n\n* Kết quả là **$0.18$** (độ vẩn đục rất thấp vì nút gần như thuần khiết, 90% là mẫu Dương).",
    "slideRef": "Slide Chương 4, Trang 26-28"
  },
  {
    "id": 318,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Giá trị cực đại khả dĩ của độ đo Gini Impurity đối với bài toán phân loại nhị phân (2 lớp) là bao nhiêu và đạt được khi nào?",
    "options": [
      "1.0, khi tất cả các mẫu thuộc cùng một lớp",
      "0.5, khi hai lớp có số lượng mẫu bằng nhau (p1 = p2 = 0.5)",
      "0.25, khi hai lớp có số lượng mẫu bằng nhau",
      "0.0, khi tập dữ liệu bị rỗng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nHàm Gini Impurity với 2 lớp ($p_2 = 1 - p_1$):\n$$Gini(p_1) = 1 - [p_1^2 + (1 - p_1)^2] = 2p_1(1 - p_1)$$\n* Đạo hàm: $Gini'(p_1) = 2 - 4p_1 = 0 \\iff p_1 = 0.5$.\n* Giá trị cực đại:\n  $$Gini_{\\max} = 2 \\times 0.5 \\times (1 - 0.5) = \\mathbf{0.5}$$\n* Đạt được khi hai lớp có tỷ lệ ngang nhau $50\\% - 50\\%$.\n\n⚠️ **Phân biệt cực đại:**\n* Bài toán 2 lớp: $\\text{Entropy}_{\\max} = \\mathbf{1.0}$; $\\text{Gini}_{\\max} = \\mathbf{0.5}$.",
    "slideRef": "Slide Chương 4, Trang 27"
  },
  {
    "id": 319,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Nhược điểm chí mạng của tiêu chuẩn Thông tin Thu được (Information Gain) trong thuật toán ID3 là gì?",
    "options": [
      "Không thể tính toán được ma trận hiệp phương sai",
      "Có xu hướng thiên vị (ưu tiên cao) các thuộc tính có số lượng giá trị phân biệt lớn (như ID khách hàng, Số CMND, Ngày sinh), dẫn đến cây chia thành hàng trăm nhánh con vô nghĩa",
      "Luôn luôn chia nhị phân",
      "Chỉ áp dụng được cho bài toán hồi quy"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Bản chất của Information Gain:** $IG(S, A) = H(S) - H(S|A)$.\n* Khi thuộc tính $A$ có số lượng giá trị phân biệt bằng đúng số dòng dữ liệu (như `Số CMND` hay `ID giao dịch`):\n  - Mỗi nhánh con $S_v$ chỉ chứa đúng 1 mẫu.\n  - Một mẫu thì thuần khiết $100\\% \\implies H(S_v) = 0 \\implies H(S|A) = 0$.\n  - Khi đó $IG(S, A) = H(S) - 0 = H(S)$ đạt giá trị lớn nhất tuyệt đối!\n* **Hậu quả:** Thuật toán luôn chọn thuộc tính ID này làm nút gốc, tạo ra một cây cực kỳ phân mảnh, học vẹt dữ liệu cũ nhưng dự đoán sai hoàn toàn trên dữ liệu mới!",
    "slideRef": "Slide Chương 4, Trang 20-22"
  },
  {
    "id": 320,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Thuật toán C4.5 của Ross Quinlan đã giải quyết vấn đề thiên vị thuộc tính nhiều giá trị của ID3 bằng cách nào?",
    "options": [
      "Thay thế bằng thuật toán Gradient Descent",
      "Sử dụng Tỷ số Thu được (Gain Ratio = Information Gain / Split Information), trong đó Split Information đóng vai trò như một khoản phạt dựa trên số lượng và kích thước nhánh phân chia",
      "Chuyển toàn bộ dữ liệu thành dạng số thực bằng PCA",
      "Bắt buộc cây chỉ được có tối đa 2 tầng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nĐể trừng phạt các thuộc tính có quá nhiều giá trị rời rạc, thuật toán **C4.5** cải tiến công thức thành **Gain Ratio (Tỷ số độ lợi)**:\n$$\\text{Gain Ratio}(S, A) = \\frac{IG(S, A)}{\\text{SplitInfo}(S, A)}$$\n* Trong đó, **Split Information** đo độ hỗn loạn của chính việc chia nhánh:\n  $$\\text{SplitInfo}(S, A) = - \\sum_{v=1}^K \\frac{|S_v|}{|S|} \\log_2\\left( \\frac{|S_v|}{|S|} \\right)$$\n* Nếu một thuộc tính bị bẻ vụn ra thành hàng trăm nhánh con li ti, mẫu số $\\text{SplitInfo}$ sẽ cực kỳ lớn $\\implies$ làm cho **Gain Ratio bị kéo tụt xuống**!\n* Nhờ vậy, C4.5 tránh được việc chọn các thuộc tính ID vô nghĩa.",
    "slideRef": "Slide Chương 4, Trang 22-24"
  },
  {
    "id": 321,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Trong Cây hồi quy (Regression Tree) của thuật toán CART, giá trị dự đoán tại một nút lá và tiêu chuẩn để chọn điểm chia nhánh lần lượt là gì?",
    "options": [
      "Dự đoán bằng Mode của lá; Tiêu chuẩn chia là Information Gain",
      "Dự đoán bằng Giá trị trung bình (Mean) của các mẫu tại nút lá; Tiêu chuẩn chia là Cực tiểu hóa Tổng bình phương sai số (MSE hay Variance Reduction)",
      "Dự đoán bằng Trung vị (Median); Tiêu chuẩn chia là Gini Impurity",
      "Dự đoán bằng phương trình siêu phẳng OLS"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong Cây hồi quy (Regression Tree):\n1. **Giá trị dự đoán tại nút lá:** Không phải nhãn lớp mà là giá trị liên tục, được tính bằng **Trung bình cộng (Mean)** $\\hat{y} = \\bar{y}$ của các mẫu trong lá đó.\n2. **Tiêu chuẩn chọn điểm chia nhánh:** Không dùng Entropy hay Gini (vốn chỉ áp dụng cho biến nhãn rời rạc). Thay vào đó, nó tìm điểm chia làm **giảm phương sai nhiều nhất (Variance Reduction)**, tương đương với việc **cực tiểu hóa Tổng bình phương sai số phần dư (RSS / MSE)** của hai nhánh con:\n   $$RSS_{\\text{split}} = \\sum_{i \\in \\text{Trái}} (y_i - \\bar{y}_{\\text{Trái}})^2 + \\sum_{i \\in \\text{Phải}} (y_i - \\bar{y}_{\\text{Phải}})^2$$",
    "slideRef": "Slide Chương 4, Trang 31-33"
  },
  {
    "id": 322,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Kỹ thuật 'Tỉa cây trước' (Pre-pruning / Dừng sớm) trong Cây quyết định thường sử dụng các điều kiện dừng nào sau đây?",
    "options": [
      "Độ sâu tối đa (max_depth), Số mẫu tối thiểu để phân chia nút (min_samples_split), Số mẫu tối thiểu tại nút lá (min_samples_leaf)",
      "Số vòng lặp Epoch trong Gradient Descent",
      "Hệ số phạt L1 trong hàm mất mát Lasso",
      "Số lượng cụm K trong thuật toán K-Means"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCác siêu tham số Pre-pruning phổ biến nhất trong Scikit-learn (`DecisionTreeClassifier`):\n* `max_depth`: Khống chế độ sâu tối đa của cây (chặn không cho mọc quá sâu).\n* `min_samples_split`: Số lượng mẫu tối thiểu bắt buộc phải có tại một nút trong để được phép tiếp tục chia nhánh (ví dụ: nút chỉ còn 3 mẫu thì cấm chia).\n* `min_samples_leaf`: Số lượng mẫu tối thiểu bắt buộc phải có trong mỗi nút lá (ngăn chặn lá chỉ chứa 1 mẫu cá biệt).\n* `max_leaf_nodes`: Số lượng nút lá tối đa cho phép trong cây.",
    "slideRef": "Slide Chương 4, Trang 35-37"
  },
  {
    "id": 323,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Trong kỹ thuật 'Tỉa cây sau' (Post-pruning) bằng thuật toán Cost-Complexity Pruning, hàm mục tiêu cần cực tiểu hóa là R_α(T) = R(T) + α * |T|. Trong đó |T| biểu thị đại lượng nào?",
    "options": [
      "Thời gian tính toán của cây tính bằng mili-giây",
      "Số lượng nút lá (Leaf nodes) của cây T",
      "Số lượng đặc trưng đầu vào của dữ liệu",
      "Tổng số mẫu trong tập huấn luyện"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nThuật toán Cost-Complexity Pruning (tương tự như Regularization):\n$$R_\\alpha(T) = R(T) + \\alpha |T|$$\n* $R(T)$: Sai số huấn luyện (hoặc độ vẩn đục) của toàn bộ cây $T$.\n* $|T|$: **Số lượng nút lá (Number of terminal/leaf nodes)** của cây $T$ $\\implies$ Đại diện cho độ cồng kềnh, phức tạp của cây!\n* $\\alpha$ (`ccp_alpha`): Siêu tham số điều khiển mức phạt độ phức tạp.\n  - Khi $\\alpha = 0$: Không phạt gì cả $\\implies$ Giữ nguyên cây gốc to nhất (Full tree).\n  - Khi $\\alpha$ càng lớn: Phạt cây cồng kềnh càng nặng $\\implies$ Buộc cây phải bị tỉa bớt các nhánh lá để thu nhỏ kích thước $|T|$.",
    "slideRef": "Slide Chương 4, Trang 38-40"
  },
  {
    "id": 324,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Định lý Bồi thẩm đoàn Condorcet (Condorcet's Jury Theorem) giải thích nền tảng lý thuyết của Ensemble Learning như thế nào?",
    "options": [
      "Nếu mỗi thành viên có xác suất quyết định đúng p > 0.5 và đưa ra quyết định độc lập với nhau, thì xác suất để biểu quyết đa số đưa ra quyết định đúng sẽ tiệm cận 1 (100%) khi số lượng thành viên tăng lên",
      "Một chuyên gia giỏi luôn đưa ra quyết định tốt hơn một nhóm người",
      "Sai số của tập hợp mô hình luôn bằng trung bình cộng sai số của từng mô hình",
      "Các mô hình bắt buộc phải có trọng số bằng nhau"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nĐịnh lý Bồi thẩm đoàn Condorcet (1785):\n* Giả sử một bồi thẩm đoàn gồm $M$ người độc lập cần đưa ra phán quyết Đúng/Sai.\n* Nếu mỗi cá nhân có xác suất đoán đúng $p > 0.5$ (tốt hơn tung đồng xu ngẫu nhiên):\n* Thì khi kích thước bồi thẩm đoàn $M$ càng tăng lên, **xác suất để phán quyết của số đông (đa số phiếu) là chính xác sẽ tiến dần về $1$ ($100\\%$)**!\n* 👉 Đây chính là nền tảng toán học chứng minh vì sao gom nhiều mô hình cơ sở yếu (Weak learners) lại có thể tạo thành một mô hình tập hợp siêu mạnh (Strong learner)!",
    "slideRef": "Slide Chương 4, Trang 43-45"
  },
  {
    "id": 325,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Kỹ thuật Lấy mẫu có hoàn lại (Bootstrap Sampling) trong phương pháp Bagging có bản chất là gì?",
    "options": [
      "Lấy ngẫu nhiên N mẫu từ tập gốc N mẫu, mỗi khi một mẫu được rút ra thì lại bỏ ngược nó vào túi để có thể được rút tiếp ở các lần sau",
      "Chia tập dữ liệu thành 10 phần bằng nhau không trùng lặp",
      "Loại bỏ vĩnh viễn các mẫu có giá trị ngoại lai",
      "Chỉ lấy mẫu từ các quan sát có nhãn dương"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Kỹ thuật **Bootstrap** (Efron, 1979):\n  - Cho tập dữ liệu gốc gồm $N$ mẫu.\n  - Ta tiến hành bốc thăm ngẫu nhiên $N$ lần.\n  - Sau mỗi lần rút được 1 mẫu, ta ghi lại thông tin rồi **bỏ ngược mẫu đó lại vào túi (Sampling with replacement)**.\n* Vì có hoàn lại, xác suất mỗi mẫu được chọn ở mỗi lượt bốc luôn giữ nguyên là $\\frac{1}{N}$.\n* Một mẫu có thể xuất hiện nhiều lần trong tập con Bootstrap mới, trong khi một số mẫu khác không bao giờ được bốc trúng.",
    "slideRef": "Slide Chương 4, Trang 47-49"
  },
  {
    "id": 326,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Xác suất để một mẫu dữ liệu cụ thể KHÔNG ĐƯỢC CHỌN vào một tập mẫu con Bootstrap có kích thước N (mẫu ngoài túi Out-of-Bag - OOB) khi N tiến đến vô cùng xấp xỉ bằng bao nhiêu?",
    "options": [
      "50.0%",
      "36.8% (1/e)",
      "63.2% (1 - 1/e)",
      "25.0%"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Chứng minh toán học:\n* Trong 1 lần rút mẫu ngẫu nhiên từ $N$ phần tử, xác suất để 1 mẫu cụ thể **không được chọn** là:\n  $$p_1 = 1 - \\frac{1}{N}$$\n* Khi rút $N$ lần độc lập có hoàn lại, xác suất để mẫu đó **không bao giờ được chọn trong cả $N$ lần** là:\n  $$P(\\text{không chọn}) = \\left(1 - \\frac{1}{N}\\right)^N$$\n* Theo định nghĩa giới hạn của số $e$ trong giải tích toán học:\n  $$\\lim_{N \\to \\infty} \\left(1 - \\frac{1}{N}\\right)^N = e^{-1} = \\frac{1}{e} \\approx \\mathbf{0.367879... \\approx 36.8\\%}$$\n* $\\implies$ Khoảng **$36.8\\%$** số mẫu của tập gốc sẽ không xuất hiện trong tập Bootstrap (gọi là tập Out-of-Bag). Tỷ lệ mẫu được chọn xấp xỉ $1 - 36.8\\% = 63.2\\%$.",
    "slideRef": "Slide Chương 4, Trang 49-51"
  },
  {
    "id": 327,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Đánh giá Out-of-Bag (OOB Evaluation) trong Random Forest mang lại lợi ích thực tiễn to lớn nào cho kỹ sư ML?",
    "options": [
      "Giúp huấn luyện mô hình nhanh hơn trên GPU",
      "Đóng vai trò như một tập kiểm định chéo (Cross-Validation) tự nhiên tích hợp sẵn miễn phí, cho phép đánh giá hiệu năng mô hình mà không cần tốn công chia tập Validation độc lập",
      "Tự động điền các giá trị thiếu trong tập dữ liệu",
      "Chuyển mô hình từ phân loại sang hồi quy"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Đối với mỗi cây trong rừng, có $\\approx 36.8\\%$ mẫu dữ liệu mà cây đó chưa từng nhìn thấy trong tập huấn luyện (các mẫu OOB của cây đó).\n* Để tính điểm OOB cho toàn bộ rừng:\n  - Với mỗi mẫu dữ liệu $x_i$, ta chỉ cho các cây mà $x_i$ **nằm ngoài túi OOB** tham gia dự đoán cho $x_i$.\n  - Sau đó tổng hợp lại và tính độ chính xác toàn cục.\n* **Lợi ích to lớn:** Đóng vai trò như một tập kiểm định chéo (Cross-Validation) hoàn toàn miễn phí, độc lập khách quan mà **không cần phải cắt xén dữ liệu để tạo Validation set riêng**!",
    "slideRef": "Slide Chương 4, Trang 51-52"
  },
  {
    "id": 328,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Điểm cải tiến cốt lõi của Random Forest so với Bagging thông thường (Cây Bagged) là gì?",
    "options": [
      "Random Forest sử dụng ít cây hơn Bagging",
      "Tại mỗi lần phân nhánh của mỗi cây, Random Forest chỉ chọn ngẫu nhiên một tập con m đặc trưng (thường m = sqrt(d)) từ tổng số d đặc trưng để tìm điểm chia tốt nhất, giúp làm giảm độ tương quan (Decorrelate) giữa các cây",
      "Random Forest bắt buộc phải huấn luyện tuần tự từng cây một",
      "Random Forest chỉ áp dụng cho dữ liệu văn bản"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Hạn chế của Bagging thuần túy:** Nếu có 1 đặc trưng cực mạnh (ví dụ `Thu nhập` trong bài toán tín dụng), thì hầu như $100\\%$ các cây trong Bagging đều chọn `Thu nhập` làm Nút gốc $\\implies$ Các cây trông rất giống nhau (tương quan cao). Khi các cây bị tương quan, hiệu quả giảm Variance của phép lấy trung bình bị triệt tiêu!\n* **Tuyệt chiêu của Random Forest:** Tại **mỗi nút của mỗi cây**, thuật toán chỉ bốc ngẫu nhiên một tập con $m$ đặc trưng (thường $m = \\sqrt{d}$) để tìm điểm chia.\n* **Tác dụng:** Ép các cây phải tìm các góc nhìn khác nhau, giải trừ tương quan giữa các cây (**Decorrelating the trees**), giúp rừng đa dạng tối đa và hạ Variance xuống mức thấp nhất!",
    "slideRef": "Slide Chương 4, Trang 54-56"
  },
  {
    "id": 329,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Quy tắc kinh nghiệm tiêu chuẩn (Rule of Thumb) để chọn số lượng đặc trưng m tại mỗi phân nhánh trong Random Forest cho bài toán Phân loại và Hồi quy lần lượt là gì?",
    "options": [
      "Phân loại: m = sqrt(d); Hồi quy: m = d / 3",
      "Phân loại: m = d / 3; Hồi quy: m = sqrt(d)",
      "Cả hai bài toán đều chọn m = d",
      "Phân loại: m = log2(d); Hồi quy: m = d / 2"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nQuy tắc thực nghiệm kinh điển do Leo Breiman đề xuất:\n* **Bài toán Phân loại (Classification):**\n  $$m = \\lfloor\\sqrt{d}\\rfloor$$\n  *(Ví dụ $d = 64$ đặc trưng thì lấy $m = \\sqrt{64} = 8$)*.\n* **Bài toán Hồi quy (Regression):**\n  $$m = \\left\\lfloor\\frac{d}{3}\\right\\rfloor$$\n  *(Ví dụ $d = 30$ đặc trưng thì lấy $m = 30 / 3 = 10$)*.",
    "slideRef": "Slide Chương 4, Trang 56"
  },
  {
    "id": 330,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Hai phương pháp phổ biến để đo lường Độ quan trọng của đặc trưng (Feature Importance) trong Random Forest là gì?",
    "options": [
      "Mean Decrease Impurity (MDI / Gini Importance) và Permutation Importance (Mean Decrease Accuracy - MDA)",
      "Tính đạo hàm cấp hai Hessian và chuẩn L2",
      "Đo góc quay của vector riêng PCA",
      "Tính hệ số tương quan Pearson với biến mục tiêu"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nRandom Forest cung cấp 2 cơ chế đo độ quan trọng của đặc trưng rất nổi tiếng:\n1. **Mean Decrease Impurity (MDI / Gini Importance):** Tính tổng mức độ làm giảm Gini (hoặc Entropy/MSE) của một đặc trưng trên tất cả các nút phân chia của toàn bộ các cây trong rừng. Đặc trưng nào làm giảm độ hỗn loạn càng nhiều thì càng quan trọng.\n2. **Permutation Importance (Mean Decrease Accuracy - MDA):** Xáo trộn ngẫu nhiên (shuffle) giá trị của một đặc trưng trên tập kiểm thử/OOB, rồi đo xem độ chính xác của mô hình bị sụt giảm bao nhiêu. Nếu xáo trộn biến đó mà độ chính xác tụt dốc thảm hại, chứng tỏ biến đó cực kỳ quan trọng!",
    "slideRef": "Slide Chương 4, Trang 58-60"
  },
  {
    "id": 331,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Trong thuật toán AdaBoost (Adaptive Boosting), các mô hình cơ sở (Base Learners) thường được chọn là cấu trúc nào?",
    "options": [
      "Các mạng nơ-ron sâu 50 tầng",
      "Cây quyết định cực nông chỉ có đúng 1 nút phân nhánh (Decision Stump / Cây 1 tầng)",
      "Mô hình hồi quy đa thức bậc 10",
      "Thuật toán K-Means với K = 10"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Trong AdaBoost, mô hình cơ sở kinh điển nhất là **Decision Stump (Gốc cây / Cây 1 tầng)**:\n  - Cây có độ sâu đúng bằng 1 (`max_depth=1`).\n  - Chỉ có 1 nút kiểm tra duy nhất trên 1 đặc trưng, chia ra đúng 2 nút lá.\n* Mặc dù từng Decision Stump dự đoán rất yếu (High Bias), nhưng khi kết hợp tuần tự hàng trăm cây với cơ chế cập nhật trọng số mẫu, AdaBoost tạo ra một mô hình phân loại cực mạnh với đường ranh giới phi tuyến tinh vi.",
    "slideRef": "Slide Chương 4, Trang 63-65"
  },
  {
    "id": 332,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Trong thuật toán AdaBoost phân loại nhị phân (y in {-1, +1}), công thức tính trọng số tín nhiệm α_m của mô hình cơ sở h_m dựa trên tỷ lệ lỗi có trọng số ε_m là gì?",
    "options": [
      "α_m = (1/2) * ln((1 - ε_m) / ε_m)",
      "α_m = ε_m / (1 - ε_m)",
      "α_m = 1 - ε_m",
      "α_m = ln(ε_m)"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCông thức tính trọng số của bộ học yếu thứ $m$ trong AdaBoost:\n$$\\alpha_m = \\frac{1}{2} \\ln\\left( \\frac{1 - \\epsilon_m}{\\epsilon_m} \\right)$$\n* $\\epsilon_m$: Tỷ lệ sai số có trọng số của mô hình thứ $m$ trên tập huấn luyện ($0 \\le \\epsilon_m \\le 1$).\n* **Ý nghĩa:**\n  - Khi mô hình dự đoán chuẩn xác (ví dụ $\\epsilon_m = 0.01$) $\\implies \\frac{1 - \\epsilon_m}{\\epsilon_m} = 99 \\implies \\alpha_m \\approx 2.3$ (được trao quyền biểu quyết rất lớn).\n  - Khi mô hình chỉ đạt độ chính xác $50\\%$ (đoán mò $\\epsilon_m = 0.5$) $\\implies \\alpha_m = \\frac{1}{2} \\ln(1) = 0$ (không có tiếng nói).",
    "slideRef": "Slide Chương 4, Trang 65-67"
  },
  {
    "id": 333,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Sau mỗi vòng lặp trong AdaBoost, trọng số phân phối của các mẫu dữ liệu được cập nhật theo nguyên tắc nào?",
    "options": [
      "Tất cả các mẫu đều nhận trọng số bằng 1/N",
      "Các mẫu bị mô hình hiện tại đoán SAI sẽ được TĂNG trọng số; các mẫu đoán ĐÚNG sẽ bị GIẢM trọng số tương đối, buộc mô hình tiếp theo phải tập trung giải quyết các ca khó",
      "Các mẫu đoán sai bị xóa bỏ khỏi tập dữ liệu",
      "Chỉ tăng trọng số cho các mẫu nằm ở biên"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCông thức cập nhật trọng số mẫu trong AdaBoost:\n$$w_i^{(m+1)} = w_i^{(m)} \\cdot \\exp\\left( - \\alpha_m y_i h_m(x_i) \\right)$$\n* Nếu mẫu được đoán **ĐÚNG** ($y_i h_m(x_i) = +1$):\n  $$w_i \\leftarrow w_i \\cdot e^{-\\alpha_m} \\implies \\text{Trọng số GIẢM đi!}$$\n* Nếu mẫu bị đoán **SAI** ($y_i h_m(x_i) = -1$):\n  $$w_i \\leftarrow w_i \\cdot e^{+\\alpha_m} \\implies \\text{Trọng số TĂNG LÊN MẠNH MẼ!}$$\n* Sau đó, toàn bộ trọng số được chuẩn hóa để có tổng bằng 1. Cây tiếp theo sẽ tập trung nguồn lực học các mẫu khó này.",
    "slideRef": "Slide Chương 4, Trang 67-69"
  },
  {
    "id": 334,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Ý tưởng cốt lõi của Gradient Boosting Decision Tree (GBDT) khác với AdaBoost ở điểm nào?",
    "options": [
      "GBDT sử dụng song song các cây thay vì tuần tự",
      "Thay vì điều chỉnh trọng số mẫu, GBDT huấn luyện cây mới trực tiếp trên Phần dư âm (Residuals / Pseudo-residuals là đối số của gradient hàm mất mát) của mô hình trước đó để tối ưu hóa bất kỳ hàm mất mát khả vi nào",
      "GBDT không có siêu tham số tốc độ học",
      "GBDT chỉ dùng hàm mất mát Gini"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **AdaBoost:** Điều chỉnh phân bố xác suất bằng cách thay đổi trọng số của từng điểm dữ liệu.\n* **Gradient Boosting (GBDT):** Giữ nguyên trọng số mẫu, áp dụng phương pháp hạ độ dốc (Gradient Descent) trong không gian hàm:\n  - Với bất kỳ hàm mất mát khả vi nào $L(y, \\hat{y})$ (như MSE, Cross-Entropy, Huber), âm gradient:\n    $$r_{im} = - \\left[ \\frac{\\partial L(y_i, F(x_i))}{\\partial F(x_i)} \\right]_{F = F_{m-1}}$$\n    chính là **Phần dư giả định (Pseudo-residuals)**.\n  - Cây mới $h_m(x)$ được huấn luyện để **dự đoán chính xác phần dư $r_{im}$ này**, giúp mô hình tổng thể bước một bước theo hướng dốc nhất để giảm mất mát!",
    "slideRef": "Slide Chương 4, Trang 72-74"
  },
  {
    "id": 335,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Vai trò của siêu tham số Tốc độ học (Learning Rate η, hay Shrinkage) trong Gradient Boosting là gì?",
    "options": [
      "Xác định số lượng cây tối đa",
      "Thu nhỏ đóng góp của mỗi cây mới: F_m(x) = F_{m-1}(x) + η * h_m(x), giúp làm chậm quá trình học để mô hình không bị quá khớp và tổng quát hóa tốt hơn",
      "Tăng kích thước bộ nhớ RAM",
      "Quy định số lượng đặc trưng tại nút lá"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCông thức cập nhật của Gradient Boosting:\n$$F_m(x) = F_{m-1}(x) + \\mathbf{\\eta} \\cdot h_m(x)$$\n* Siêu tham số $\\eta \\in (0, 1]$ được gọi là **Learning Rate** hoặc **Shrinkage factor**:\n  - Nó thu nhỏ quy mô đóng góp của mỗi cây sửa sai mới.\n  - Khi $\\eta$ nhỏ (ví dụ $0.05$ hoặc $0.1$), mô hình học từng bước nhỏ thận trọng $\\implies$ Giúp tránh hiện tượng quá khớp (Overfitting) và tăng cường khả năng tổng quát hóa trên tập Test.\n  - Đánh đổi: Cần tăng số lượng cây (`n_estimators`) để mô hình đạt độ hội tụ.",
    "slideRef": "Slide Chương 4, Trang 75-76"
  },
  {
    "id": 336,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Thư viện LightGBM nổi tiếng với chiến lược phát triển cây nào giúp nó chạy nhanh vượt trội và tiết kiệm bộ nhớ hơn so với cách chia tầng truyền thống?",
    "options": [
      "Level-wise (Theo từng độ sâu đồng đều trên toàn cây)",
      "Leaf-wise (Phát triển theo nút lá có mức giảm tổn thất lớn nhất)",
      "Random-wise (Chọn ngẫu nhiên nút lá để tách)",
      "Linear-wise (Chỉ phát triển theo một đường thẳng)"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nHai chiến lược phát triển cây kinh điển:\n* **Level-wise (Theo tầng / Độ sâu - dùng trong XGBoost truyền thống):** Chia đều tất cả các nút ở cùng một tầng trước khi chuyển sang tầng tiếp theo. Cách này cân bằng cây nhưng tốn thời gian tính toán cho những nút lá không mang lại nhiều lợi ích.\n* **Leaf-wise (Theo lá - dùng trong LightGBM):** Tại mỗi bước, thuật toán chỉ chọn **duy nhất một nút lá nào có mức giảm sai số (Loss reduction) lớn nhất** để tiếp tục phân nhánh, bất kể độ sâu của nó.\n  - *Ưu điểm:* Giảm sai số nhanh hơn nhiều, tốc độ huấn luyện siêu tốc và tiết kiệm RAM.\n  - *Lưu ý:* Khi dữ liệu nhỏ, Leaf-wise dễ bị Overfitting nên cần khống chế `max_depth` và `num_leaves`.",
    "slideRef": "Slide Chương 4, Trang 78-79"
  },
  {
    "id": 337,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Kỹ thuật Xếp chồng mô hình (Stacking / Stacked Generalization) hoạt động dựa trên cơ chế nào?",
    "options": [
      "Lấy trung bình cộng đơn giản xác suất của các mô hình",
      "Huấn luyện nhiều mô hình cơ sở khác loại (Base-models), sau đó sử dụng dự đoán đầu ra của các mô hình này làm đặc trưng đầu vào để huấn luyện một mô hình tổng hợp cấp cao (Meta-learner / Blender)",
      "Xếp chồng các tầng nơ-ron liên tiếp nhau",
      "Chạy thuật toán PCA trước khi train Random Forest"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nKiến trúc của Stacking (Xếp chồng mô hình):\n```\n  Dữ liệu gốc ──► [ Mô hình SVM ]    ──► Dự đoán 1 ─┐\n              ──► [ Random Forest ] ──► Dự đoán 2 ─┼──► [ META-LEARNER ] ──► KẾT QUẢ CUỐI\n              ──► [ XGBoost ]       ──► Dự đoán 3 ─┘    (Hồi quy/Logistic)\n```\n* **Tầng 1 (Base-models):** Huấn luyện nhiều mô hình khác biệt nhau về bản chất thuật toán (ví dụ SVM, Random Forest, XGBoost, KNN).\n* **Tầng 2 (Meta-learner / Blender):** Dùng các giá trị dự đoán của Tầng 1 làm các đặc trưng đầu vào ($x_{\\text{meta}} = [\\hat{y}_1, \\hat{y}_2, \\hat{y}_3]$) để huấn luyện một mô hình cấp cao (thường là Logistic Regression hoặc Ridge) học cách gộp tối ưu nhất.",
    "slideRef": "Slide Chương 4, Trang 81-83"
  },
  {
    "id": 338,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Để tránh Rò rỉ dữ liệu (Data Leakage) khi tạo tập đặc trưng huấn luyện cho Meta-learner trong Stacking, kỹ thuật bắt buộc phải áp dụng là gì?",
    "options": [
      "Chuẩn hóa dữ liệu Min-Max",
      "Dự đoán ngoài mẫu thông qua K-Fold Cross-Validation (Out-of-Fold predictions) trên tập huấn luyện",
      "Tăng số lượng cây trong rừng lên 1000 cây",
      "Bỏ hoàn toàn nhãn y khỏi tập train"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Nguy cơ Rò rỉ dữ liệu (Data Leakage) trong Stacking:**\n  - Nếu bạn dùng các Base-model đã được huấn luyện trên toàn bộ tập Train để dự đoán lại chính tập Train đó, các dự đoán này sẽ \"quá lạc quan\" (bị overfitted).\n  - Meta-learner khi học trên các dự đoán overfitted này sẽ bị sai lệch nghiêm trọng khi áp dụng vào tập Test thực tế!\n* **Giải pháp bắt buộc: Out-of-Fold (OOF) Predictions:**\n  - Chia tập Train thành $K$ phần (ví dụ $K=5$).\n  - Huấn luyện Base-model trên 4 phần, rồi dự đoán cho phần thứ 5 còn lại.\n  - Lặp lại cho cả 5 phần để thu được vector dự đoán ngoài mẫu (Out-of-Fold).\n  - Nhờ vậy, Meta-learner chỉ học trên những dự đoán khách quan chưa từng thấy của các mô hình cơ sở!",
    "slideRef": "Slide Chương 4, Trang 83-84"
  },
  {
    "id": 339,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "So sánh giữa Bagging và Boosting, khẳng định nào sau đây là HOÀN TOÀN CHÍNH XÁC?",
    "options": [
      "Bagging giúp giảm Độ chệch (Bias); Boosting giúp giảm Phương sai (Variance)",
      "Bagging huấn luyện các mô hình song song độc lập và chủ yếu giúp giảm Phương sai (Variance); Boosting huấn luyện các mô hình tuần tự nối tiếp và chủ yếu giúp giảm Độ chệch (Bias)",
      "Bagging nhạy cảm với nhiễu hơn Boosting",
      "Cả Bagging và Boosting đều yêu cầu các mô hình cơ sở phải là mô hình tuyến tính"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Bảng tổng kết sống còn:\nBảng đối chiếu cốt lõi giữa Bagging và Boosting:\n* **BAGGING (Random Forest):**\n  - Cơ chế: **Song song (Parallel)**, các cây độc lập.\n  - Cây cơ sở: Cây sâu, phức tạp (High Variance, Low Bias).\n  - Mục tiêu cốt lõi: **GIẢM VARIANCE** (chữa bệnh Overfitting).\n  - Nhiễu: Rất ổn định, ít bị ảnh hưởng bởi nhiễu.\n* **BOOSTING (AdaBoost, Gradient Boosting):**\n  - Cơ chế: **Tuần tự (Sequential)**, cây sau sửa sai cho cây trước.\n  - Cây cơ sở: Cây rất nông (Decision Stumps - High Bias, Low Variance).\n  - Mục tiêu cốt lõi: **GIẢM BIAS** (tăng độ chính xác từ mô hình yếu).\n  - Nhiễu: Rất nhạy cảm với nhiễu.",
    "slideRef": "Slide Chương 4, Trang 85-86"
  },
  {
    "id": 340,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Tại sao Boosting lại nhạy cảm với các mẫu ngoại lai (Outliers) và dữ liệu có nhiễu cao hơn nhiều so với Bagging (Random Forest)?",
    "options": [
      "Vì Boosting không có hàm mất mát",
      "Vì cơ chế Boosting liên tục tăng trọng số mẫu hoặc cố gắng dự đoán phần dư của các mẫu bị đoán sai; các điểm ngoại lai/nhiễu sẽ liên tục bị đoán sai và nhận trọng số cực lớn, cuốn toàn bộ các cây sau chạy theo khớp vào nhiễu",
      "Vì Random Forest sử dụng ma trận nghịch đảo giả",
      "Vì AdaBoost chỉ chạy được trên dữ liệu 1 chiều"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Điểm ngoại lai (Outlier) hoặc nhãn bị gán sai (Nhiễu) là những điểm dữ liệu cực kỳ dị biệt và gần như không thể học đúng bằng các quy luật tổng quát.\n* Trong **AdaBoost**: Điểm nhiễu này sẽ liên tục bị đoán sai qua từng vòng $\\implies$ Thuật toán liên tục nhân trọng số của nó lên gấp nhiều lần $\\implies$ Sau vài vòng, điểm nhiễu chiếm tới $50\\%$ tổng trọng số của cả tập dữ liệu! Cây tiếp theo bị ép phải bẻ cong toàn bộ ranh giới để khớp đúng điểm nhiễu này.\n* Trong **Gradient Boosting**: Điểm nhiễu tạo ra phần dư sai số (Residual) khổng lồ $\\implies$ Gradient tại đó cực lớn, kéo lệch hướng tối ưu của toàn bộ chuỗi mô hình.\n* 👉 Do đó, Boosting cực kỳ nhạy cảm với Outliers, trong khi Random Forest (lấy trung bình độc lập) thì rất trơ và bền bỉ trước nhiễu.",
    "slideRef": "Slide Chương 4, Trang 86"
  },
  {
    "id": 341,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Cho một tập dữ liệu có 3 lớp (A, B, C) với phân bố xác suất tại một nút là: p(A) = 0.5, p(B) = 0.3, p(C) = 0.2. Giá trị Gini Impurity tại nút này là bao nhiêu?",
    "options": [
      "0.38",
      "0.62",
      "0.48",
      "0.50"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Tính toán chi tiết:\nCông thức tính Gini Impurity tổng quát cho $C$ lớp:\n$$Gini(S) = 1 - \\sum_{k=1}^C p_k^2$$\nThay các xác suất vào:\n* $p(A) = 0.5 \\implies p(A)^2 = 0.25$\n* $p(B) = 0.3 \\implies p(B)^2 = 0.09$\n* $p(C) = 0.2 \\implies p(C)^2 = 0.04$\n\nTính tổng các bình phương:\n$$\\sum p_k^2 = 0.25 + 0.09 + 0.04 = 0.38$$\n\nTính giá trị Gini:\n$$Gini(S) = 1 - 0.38 = \\mathbf{0.62}$$\n\n⚠️ **Lưu ý thi trắc nghiệm:** Rất nhiều bạn tính ra $0.38$ rồi vội vàng khoanh luôn đáp án $0.38$. Hãy nhớ công thức Gini bắt đầu bằng **$1 -$ (Tổng bình phương)**! Do đó đáp án đúng phải là $1 - 0.38 = \\mathbf{0.62}$.",
    "slideRef": "Slide Chương 4, Trang 27-29"
  },
  {
    "id": 342,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Một thuộc tính liên tục X có 4 giá trị sắp xếp tăng dần trong tập dữ liệu là: [10, 20, 30, 40]. Trong thuật toán CART, có bao nhiêu ngưỡng cắt (thresholds) ứng viên sẽ được xem xét để tìm điểm phân nhánh tối ưu?",
    "options": [
      "2 ngưỡng",
      "3 ngưỡng (lần lượt là: 15, 25, 35)",
      "4 ngưỡng",
      "Vô số ngưỡng vì là biến liên tục"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong thuật toán CART:\n* Nếu một đặc trưng liên tục có $K$ giá trị phân biệt được sắp xếp tăng dần: $x_{(1)} < x_{(2)} < \\dots < x_{(K)}$, thì số lượng ngưỡng cắt phân hoạch nhị phân ứng viên luôn luôn là **$K - 1$ ngưỡng**, tương ứng với các trung điểm giữa 2 giá trị liên tiếp:\n  $$t_i = \\frac{x_{(i)} + x_{(i+1)}}{2}$$\n* Cụ thể với 4 giá trị $[10, 20, 30, 40]$:\n  - Ngưỡng 1: $t_1 = \\frac{10 + 20}{2} = 15$\n  - Ngưỡng 2: $t_2 = \\frac{20 + 30}{2} = 25$\n  - Ngưỡng 3: $t_3 = \\frac{30 + 40}{2} = 35$\n👉 Tổng cộng có đúng **3 ngưỡng cắt ứng viên**.",
    "slideRef": "Slide Chương 4, Trang 30-31"
  },
  {
    "id": 343,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Khi tăng số lượng cây (n_estimators) trong mô hình Random Forest từ 100 cây lên 1000 cây, hiện tượng gì sẽ xảy ra?",
    "options": [
      "Mô hình chắc chắn sẽ bị Overfitting nặng do số cây quá nhiều",
      "Mô hình không bị Overfitting; sai số kiểm thử sẽ hội tụ về một giới hạn tiệm cận ổn định, nhưng chi phí tính toán và thời gian huấn luyện sẽ tăng lên tương ứng",
      "Độ chệch (Bias) của mô hình giảm về 0",
      "Tất cả các cây sẽ biến thành cây 1 tầng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Đây là một tính chất cực kỳ đặc biệt của **Random Forest**:\n  - Theo Định luật số lớn (Law of Large Numbers), khi số lượng cây $B \\to \\infty$, sai số khái quát hóa của Random Forest sẽ **hội tụ về một hằng số giới hạn tiệm cận**.\n  - **Random Forest KHÔNG BỊ OVERFITTING khi tăng số lượng cây!** Thêm cây chỉ làm cho việc lấy trung bình mượt mà và ổn định hơn.\n* **Hạn chế duy nhất:** Khi tăng từ 100 lên 1000 cây, thời gian huấn luyện và dung lượng bộ nhớ tăng gấp 10 lần, trong khi độ chính xác chỉ tăng rất nhẹ hoặc đi ngang. Do đó, thường chọn $100 - 300$ cây là điểm cân bằng thực tiễn.",
    "slideRef": "Slide Chương 4, Trang 57"
  },
  {
    "id": 344,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Ngược lại, nếu ta tăng quá mức số lượng vòng lặp (số cây n_estimators) trong Gradient Boosting mà không có cơ chế dừng sớm (Early Stopping), nguy cơ lớn nhất là gì?",
    "options": [
      "Mô hình bị Underfitting",
      "Mô hình có nguy cơ cao bị Overfitting vì các cây sau sẽ tiếp tục cố gắng khớp vào cả phần dư ngẫu nhiên và nhiễu trong dữ liệu",
      "Mô hình tự động xóa bỏ các đặc trưng quan trọng",
      "Hàm mất mát bị phân kỳ vô hạn"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrái ngược hoàn toàn với Random Forest:\n* **Gradient Boosting CỰC KỲ DỄ BỊ OVERFITTING KHI TĂNG QUÁ NHIỀU CÂY (`n_estimators`)!**\n* **Lý do:**\n  - Ở những vòng đầu, các cây học những quy luật lớn của dữ liệu.\n  - Càng về các vòng sau, phần dư còn lại chủ yếu là **nhiễu ngẫu nhiên (Random noise)**.\n  - Nếu cứ tiếp tục thêm cây mà không kiểm soát, các cây sau sẽ khớp hoàn hảo vào từng điểm nhiễu $\\implies$ Sai số trên tập Test bắt đầu tăng vọt trở lại!\n* 👉 **Giải pháp sống còn:** Luôn phải sử dụng cơ chế **Dừng sớm (Early Stopping)**: Nếu sau một số vòng liên tiếp (ví dụ 10-20 vòng) mà sai số trên tập Validation không giảm nữa thì lập tức dừng huấn luyện.",
    "slideRef": "Slide Chương 4, Trang 76-77"
  },
  {
    "id": 345,
    "chapter": 4,
    "chapterTitle": "Chương 4: Cây quyết định và Học kết hợp",
    "question": "Đặc điểm nào của thuật toán Cây quyết định (Decision Tree) khiến nó được xếp vào nhóm 'Mô hình hộp trắng' (White-box Models)?",
    "options": [
      "Nó chỉ xử lý được các điểm ảnh màu trắng",
      "Cấu trúc cây có tính trực quan cao, có thể chuyển đổi trực tiếp thành tập hợp các quy tắc IF-THEN rõ ràng, giúp con người dễ dàng giải thích và kiểm chứng lý do ra quyết định",
      "Nó không có hàm mất mát",
      "Mọi tham số của cây đều bằng 0"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong lĩnh vực Trí tuệ nhân tạo có thể giải thích (Explainable AI - XAI):\n* **Mô hình Hộp đen (Black-box Models):** Như Mạng nơ-ron sâu (Deep Neural Networks), Random Forest, Gradient Boosting. Dù dự đoán rất chính xác nhưng con người không thể hiểu nổi tại sao mô hình lại đưa ra quyết định đó (hàng triệu phép tính ma trận phức tạp).\n* **Mô hình Hộp trắng (White-box Models):** Điển hình là **Cây quyết định (Decision Tree)**:\n  - Cấu trúc cây hoàn toàn minh bạch.\n  - Mọi đường đi từ gốc đến lá đều có thể viết lại thành câu văn logic đời thường: `NẾU Tuổi > 30 VÀ Thu nhập > 20 triệu THÌ Duyệt vay vốn`.\n  - Giúp chuyên gia, bác sĩ, thanh tra ngân hàng dễ dàng kiểm chứng và tin tưởng phán quyết của mô hình.",
    "slideRef": "Slide Chương 4, Trang 41-42"
  }
];

// Tự động gộp vào ngân hàng câu hỏi chung
if (!window.QUESTION_BANK) {
  window.QUESTION_BANK = [];
}
window.QUESTION_BANK.push(...window.QUESTIONS_CHUONG_4);
