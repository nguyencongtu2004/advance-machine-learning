module.exports = {
  106: {
    question: "Trong Cây quyết định (Decision Tree), nút lá (Leaf Node) của cây phân loại đại diện cho điều gì?",
    options: [
      "Điều kiện kiểm tra trên một đặc trưng",
      "Nhãn lớp được dự đoán (hoặc tỷ lệ phân bố lớp)",
      "Tập toàn bộ dữ liệu ban đầu",
      "Giá trị Entropy của thuộc tính"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Cây quyết định (Decision Tree) là một cấu trúc phân cấp hình cây lộn ngược (Gốc ở trên, Lá ở dưới):
* **Nút gốc (Root Node):** Nút trên cùng, chứa toàn bộ tập dữ liệu huấn luyện và thực hiện phép kiểm tra điều kiện đầu tiên.
* **Nút trong (Internal Node):** Kiểm tra điều kiện trên một đặc trưng ($x_j \\le t$ hoặc $x_j == \\text{Giá trị}$).
* **Nhánh (Branch):** Đại diện cho một kết quả kiểm tra logic (Đúng/Sai hoặc các danh mục).
* **Nút lá (Leaf Node):** Là điểm dừng cuối cùng của đường đi suy diễn.
  - Trong **Cây phân loại (Classification Tree):** Nút lá lưu **nhãn lớp dự đoán** (lớp chiếm đa số trong lá đó) hoặc phân phối xác suất dự đoán của các lớp.
  - Trong **Cây hồi quy (Regression Tree):** Nút lá lưu **giá trị trung bình cộng** $\\bar{y}$ của các mẫu rơi vào lá.

> 💡 **Quy tắc trắc nghiệm:** Nút lá không còn điều kiện phân nhánh nào nữa, nó chính là câu trả lời / kết luận cuối cùng của mô hình.`,
    slideRef: "Slide Chương 4, Trang 8, 17"
  },

  107: {
    question: "Ranh giới quyết định của Cây quyết định trong không gian đặc trưng có dạng hình học nào?",
    options: [
      "Các siêu phẳng nghiêng góc bất kỳ",
      "Các đường gấp khúc trực giao (song song với các trục tọa độ)",
      "Các đường tròn đồng tâm",
      "Các mặt cầu đa chiều"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Khác với Logistic Regression hay SVM tạo ra các đường thẳng hoặc mặt phẳng nghiêng chéo góc tự do trong không gian ($w^Tx + b = 0$):
* Tại mỗi nút phân chia, Cây quyết định **chỉ kiểm tra duy nhất một đặc trưng** tại một thời điểm (ví dụ: $x_1 \\le 3.5$ hoặc $x_2 > 10$).
* Về mặt hình học, mỗi phép kiểm tra này tương ứng với một lát cắt **vuông góc với trục tọa độ của đặc trưng đó**.
* Khi kết hợp nhiều lát cắt liên tiếp từ gốc xuống lá, ranh giới quyết định (Decision Boundary) tạo thành **các đường gấp khúc trực giao**, chia không gian thành các **siêu hộp chữ nhật song song với các trục tọa độ (Axis-aligned Hyper-rectangles)**.

### ⚠️ Bẫy thi kinh điển:
Ranh giới của Cây quyết định chuẩn **không bao giờ là đường chéo nghiêng mượt mà**, mà luôn luôn có dạng bậc thang gấp khúc vuông góc!`,
    slideRef: "Slide Chương 4, Trang 12-13, 57"
  },

  108: {
    question: "Ưu điểm ĐẶC TRƯNG lớn nhất của Cây quyết định so với các mô hình tuyến tính hay mạng nơ-ron là gì?",
    options: [
      "Không bao giờ bị Overfitting",
      "Hoàn toàn không đòi hỏi chuẩn hóa thang đo dữ liệu (Normalization/Standardization)",
      "Có công thức nghiệm đóng giải tích trực tiếp",
      "Luôn có độ chính xác cao hơn mọi mô hình khác"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Đây là một trong những câu hỏi **hay ra thi nhất** về Cây quyết định:
* Trong các mô hình tuyến tính (OLS, Logistic, SVM) hay Mạng nơ-ron, khoảng cách số học cực kỳ quan trọng. Nếu một biến đo bằng "triệu đồng" ($10^6$) và một biến đo bằng "số con" ($1, 2$), biến tiền bạc sẽ lấn át hoàn toàn $\\implies$ Bắt buộc phải chuẩn hóa (StandardScaler / MinMaxScaler).
* Ngược lại, **Cây quyết định hoàn toàn KHÔNG CẦN chuẩn hóa dữ liệu (Scale Invariant)**:
  - Để tìm điểm chia cắt tối ưu, cây chỉ sắp xếp các giá trị của từng đặc trưng theo thứ tự tăng dần.
  - Phép biến đổi đơn điệu (nhân với $1.000.000$, cộng $500$, lấy $\\log$) **hoàn toàn không làm thay đổi thứ tự tương quan** giữa các mẫu!
  - Điểm cắt trước khi nhân nằm ở vị trí nào thì sau khi nhân nó vẫn chia các mẫu dữ liệu thành 2 nửa y hệt như vậy!

> 💡 **Chốt lại:** Cây quyết định miễn nhiễm với thang đo dữ liệu và xử lý mượt mà cả biến liên tục lẫn biến danh mục.`,
    slideRef: "Slide Chương 4, Trang 56"
  },

  109: {
    question: "Trong bài toán phân loại nhị phân (2 lớp), độ hỗn tạp Entropy H(S) đạt giá trị CỰC ĐẠI bằng bao nhiêu và tại phân bố nào?",
    options: [
      "H(S) = 0 khi hai lớp cân bằng 50% - 50%",
      "H(S) = 1.0 khi hai lớp cân bằng 50% - 50% (p_1 = p_2 = 0.5)",
      "H(S) = 0.5 khi một lớp chiếm 100%",
      "H(S) = +∞"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Công thức Shannon Entropy:
$$H(S) = - \\sum_{k=1}^C p_k \\log_2(p_k)$$
Với bài toán 2 lớp ($C = 2$):
* Khi hai lớp cân bằng tuyệt đối ($p_1 = 0.5, p_2 = 0.5$): Mức độ hỗn loạn / khó đoán đạt đỉnh cao nhất (như tung đồng xu).
$$H(S) = - (0.5 \\log_2 0.5 + 0.5 \\log_2 0.5) = - [0.5 \\times (-1) + 0.5 \\times (-1)] = \\mathbf{1.0\\text{ bit}}$$
* Đồ thị Entropy có hình quả chuông úp đối xứng qua $p = 0.5$, đạt đỉnh $H_{\\max} = 1.0$ và chạm đáy $H_{\\min} = 0$ tại hai đầu $p=0$ và $p=1$.

### ⚠️ Bẫy trắc nghiệm:
* Cực đại của **Entropy** là **$1.0$**.
* Cực đại của **Gini Impurity** (bài toán 2 lớp) chỉ là **$0.5$**! Đừng nhầm lẫn giữa hai độ đo này.`,
    slideRef: "Slide Chương 4, Trang 18, 20"
  },

  110: {
    question: "Khi một nút trong cây quyết định hoàn toàn thuần khiết (100% mẫu đều thuộc về cùng một lớp duy nhất), giá trị Entropy H(S) bằng bao nhiêu?",
    options: [
      "1.0",
      "0.0",
      "0.5",
      "-1.0"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Thuần khiết 100% (Pure Node):** Tất cả các mẫu trong nút đều thuộc về cùng một lớp (ví dụ lớp 1 có $p_1 = 1$, lớp 2 có $p_2 = 0$).
* Khi đó:
  $$H(S) = - (1 \\log_2 1 + 0 \\log_2 0) = - (1 \\times 0 + 0) = \\mathbf{0.0}$$
* **Ý nghĩa thực tế:** Bạn thò tay vào hộp bi chỉ toàn màu đỏ, chắc chắn 100% bốc trúng bi đỏ $\\implies$ Hệ thống không còn chút bất định hay hỗn loạn nào $\\implies$ Entropy bằng 0!
* Khi một nút đạt Entropy = 0, thuật toán sẽ dừng phân chia và biến nút đó thành **Nút lá (Leaf Node)**.`,
    slideRef: "Slide Chương 4, Trang 20"
  },

  111: {
    question: "Công thức tính Information Gain IG(S, A) của thuộc tính A trong thuật toán ID3 là gì?",
    options: [
      "IG(S, A) = H(S) + H(S|A)",
      "IG(S, A) = H(S) - H(S|A)",
      "IG(S, A) = H(S|A) - H(S)",
      "IG(S, A) = H(S) * H(S|A)"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Information Gain (Độ lợi thông tin) đo lường: **"Sau khi chia dữ liệu theo thuộc tính A, độ hỗn loạn giảm được bao nhiêu?"**
$$IG(S, A) = H(S) - H(S|A)$$
* $H(S)$: Độ hỗn loạn (Entropy) của nút cha ban đầu trước khi chia.
* $H(S|A)$: Entropy trung bình có trọng số của các nút con sau khi chia:
  $$H(S|A) = \\sum_{v \\in Values(A)} \\frac{|S_v|}{|S|} H(S_v)$$
* **Nguyên tắc chọn:** Thuộc tính nào làm cho $H(S|A)$ nhỏ nhất $\\implies$ mang lại **$IG$ LỚN NHẤT** sẽ được chọn để phân nhánh!`,
    slideRef: "Slide Chương 4, Trang 21"
  },

  112: {
    question: "Trong bài toán phân loại 2 lớp cân bằng (p_1 = p_2 = 0.5), chỉ số Gini Impurity của nút bằng bao nhiêu?",
    options: [
      "1.0",
      "0.5",
      "0.0",
      "0.25"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Công thức tính độ vẩn đục Gini (Gini Impurity):
$$Gini(S) = 1 - \\sum_{k=1}^C p_k^2$$
Với bài toán 2 lớp cân bằng ($p_1 = 0.5, p_2 = 0.5$):
$$Gini(S) = 1 - (0.5^2 + 0.5^2) = 1 - (0.25 + 0.25) = 1 - 0.5 = \\mathbf{0.5}$$
* Đây là giá trị hỗn tạp cực đại của chỉ số Gini đối với bài toán phân loại nhị phân.
* Khác với Entropy đạt cực đại bằng $1.0$, Gini đạt cực đại tại **$0.5$**.`,
    slideRef: "Slide Chương 4, Trang 22-23"
  },

  113: {
    question: "Khi nút hoàn toàn thuần khiết (chỉ chứa duy nhất một lớp), chỉ số Gini Impurity bằng bao nhiêu?",
    options: [
      "1.0",
      "0.0",
      "0.5",
      "-0.5"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Khi tất cả các mẫu trong nút đều thuộc về một lớp duy nhất ($p_1 = 1$, các lớp khác $p_k = 0$):
$$Gini(S) = 1 - \\sum p_k^2 = 1 - (1^2 + 0^2 + \\dots) = 1 - 1 = \\mathbf{0.0}$$
* **Ý nghĩa xác suất:** Gini Impurity đo xác suất phân loại sai một mẫu nếu ta gán nhãn ngẫu nhiên theo phân bố lớp trong nút. Khi toàn bộ mẫu là lớp 1, xác suất đoán sai bằng 0.
* Cả **Entropy** và **Gini** đều bằng **$0.0$** khi nút hoàn toàn thuần khiết.`,
    slideRef: "Slide Chương 4, Trang 23, 25"
  },

  114: {
    question: "Sự khác biệt chính giữa thuật toán ID3 và thuật toán CART trong xây dựng cây quyết định là gì?",
    options: [
      "ID3 dùng Gini; CART dùng Entropy",
      "ID3 dùng Information Gain (Entropy) và có thể chia nhiều nhánh; CART dùng Gini Impurity và luôn thực hiện chia nhị phân (Binary split)",
      "ID3 hỗ trợ cả hồi quy; CART chỉ hỗ trợ phân loại",
      "ID3 huấn luyện song song; CART huấn luyện tuần tự"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Bảng đối chiếu "sống còn" giữa ID3 và CART:
* **ID3 (Iterative Dichotomiser 3 - Quinlan):**
  - Tiêu chí chia: **Information Gain** (dựa trên Entropy Shannon).
  - Kiểu chia: **Đa nhánh (Multi-way split)** theo các giá trị danh mục (ví dụ Outlook chia thành 3 nhánh Sunny, Overcast, Rain).
  - Bài toán: Ban đầu chỉ hỗ trợ phân loại.
* **CART (Classification and Regression Trees - Breiman):**
  - Tiêu chí chia: **Gini Impurity** cho phân loại, Giảm phương sai (Variance Reduction) cho hồi quy.
  - Kiểu chia: **Luôn luôn chia nhị phân (Binary split - đúng 2 nhánh Trái/Phải)**.
  - Tốc độ: Nhanh hơn ID3 vì không cần tính hàm $\\log_2$. Thư viện Scikit-learn mặc định dùng CART!`,
    slideRef: "Slide Chương 4, Trang 26"
  },

  115: {
    question: "Trong Cây hồi quy (Regression Tree), giá trị dự đoán tại một nút lá được xác định như thế nào?",
    options: [
      "Lớp chiếm đa số trong lá",
      "Giá trị trung bình cộng của biến mục tiêu y của các mẫu nằm trong nút lá đó",
      "Giá trị lớn nhất của biến mục tiêu",
      "Tổng các phần dư"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Trong bài toán Hồi quy, nhãn mục tiêu $y$ là biến số liên tục (ví dụ: Giá nhà, Nhiệt độ, Doanh thu).
* Khi một mẫu dữ liệu mới rơi vào một nút lá cụ thể $S_{\\text{lá}}$, mô hình không thể "bỏ phiếu lớp" như phân loại.
* Giá trị dự đoán tối ưu cực tiểu hóa sai số bình phương $MSE$ chính là **Giá trị trung bình cộng (Mean)** của tất cả các mẫu rơi vào lá đó:
  $$\\hat{y} = \\bar{y} = \\frac{1}{|S_{\\text{lá}}|} \\sum_{i \\in S_{\\text{lá}}} y_i$$`,
    slideRef: "Slide Chương 4, Trang 29-30"
  },

  116: {
    question: "Trong ví dụ bài toán chơi Golf ở slide bài giảng, thuộc tính nào có Information Gain lớn nhất và được chọn làm nút gốc?",
    options: [
      "Temperature (Nhiệt độ)",
      "Humidity (Độ ẩm)",
      "Outlook (Thời tiết tổng quan)",
      "Wind (Gió)"
    ],
    answer: 2,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Trong bài toán Golf kinh điển (14 mẫu: 9 Play = Yes, 5 Play = No):
* Entropy nút gốc: $H(S) \\approx 0.940$.
* Tính Information Gain cho 4 thuộc tính ứng viên:
  - $IG(S, \\text{Outlook}) \\approx \\mathbf{0.247}$ (Cao nhất)
  - $IG(S, \\text{Humidity}) \\approx 0.151$
  - $IG(S, \\text{Wind}) \\approx 0.048$
  - $IG(S, \\text{Temperature}) \\approx 0.029$ (Thấp nhất)
👉 Do có $IG$ lớn nhất, thuộc tính **Outlook** thắng cuộc và được chọn làm **Nút gốc (Root Node)**!`,
    slideRef: "Slide Chương 4, Trang 35-36"
  },

  117: {
    question: "Nhược điểm cố hữu lớn nhất của một Cây quyết định đơn lẻ phát triển sâu là gì?",
    options: [
      "Bias rất cao và không học được dữ liệu",
      "Variance rất cao, cực kỳ dễ bị quá khớp (Overfitting) và bất ổn định với biến động nhỏ của dữ liệu",
      "Không thể giải thích được các luật",
      "Thời gian dự đoán cực kỳ chậm"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Một Cây quyết định đơn lẻ có 2 nhược điểm chí mạng:
1. **Variance rất cao (Overfitting nghiêm trọng):** Cây mọc càng sâu thì ranh giới quyết định càng vụn vặt, học vẹt cả nhiễu trong tập Train $\\implies$ Train $100\\%$ nhưng Test rất kém.
2. **Tính bất ổn định (Instability):** Thuật toán mang tính chất tham lam (Greedy). Chỉ cần thay đổi nhẹ một vài mẫu dữ liệu, đặc trưng chọn ở nút gốc có thể bị thay đổi, kéo theo toàn bộ cấu trúc cây bên dưới bị đảo lộn hoàn toàn!
👉 Để khắc phục nhược điểm này, người ta phát minh ra **Ensemble Learning (Random Forest)**.`,
    slideRef: "Slide Chương 4, Trang 47, 54-55"
  },

  118: {
    question: "Kỹ thuật Tiền cắt tỉa (Pre-pruning) kiểm soát sự phát triển của cây bằng cách nào?",
    options: [
      "Phát triển cây tối đa rồi cắt bớt nhánh sau",
      "Dừng sớm quá trình phân nhánh dựa trên các điều kiện chặn (như max_depth, min_samples_split, min_samples_leaf)",
      "Xóa bỏ các đặc trưng trước khi huấn luyện",
      "Thay đổi hàm mất mát sang MSE"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Kỹ thuật cắt tỉa (Pruning) gồm 2 phương pháp:
* **Tiền cắt tỉa (Pre-pruning / Dừng sớm - Early Stopping):** Can thiệp trong quá trình cây đang mọc. Nếu vi phạm một trong các điều kiện chặn thì không cho chia tiếp:
  - \`max_depth\`: Giới hạn độ sâu tối đa của cây.
  - \`min_samples_split\`: Số mẫu tối thiểu tại một nút để được phép chia tiếp.
  - \`min_samples_leaf\`: Số mẫu tối thiểu bắt buộc phải có trong nút lá.
* **Hậu cắt tỉa (Post-pruning):** Cho cây mọc tối đa (Overfitting), sau đó dùng Cost-Complexity Pruning để tỉa bớt các cành vô dụng từ dưới lên.`,
    slideRef: "Slide Chương 4, Trang 49"
  },

  119: {
    question: "Trong đánh đổi Bias - Variance của Cây quyết định, cây NÔNG và cây SÂU có đặc tính như thế nào?",
    options: [
      "Cây nông có Bias thấp, Variance cao; Cây sâu có Bias cao, Variance thấp",
      "Cây nông có Bias cao, Variance thấp; Cây sâu có Bias thấp, Variance cao",
      "Cả hai đều có Variance bằng 0",
      "Độ sâu không ảnh hưởng đến Bias và Variance"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Cây NÔNG (Shallow tree / Decision Stump):** Mô hình quá đơn giản, không học hết các mối quan hệ phức tạp trong dữ liệu $\\implies$ **Bias cao (Underfitting)**, nhưng dự đoán rất ổn định giữa các tập dữ liệu khác nhau $\\implies$ **Variance thấp**.
* **Cây SÂU (Deep tree):** Mô hình cực kỳ phức tạp, cố gắng chia nhỏ dữ liệu để khớp từng điểm $\\implies$ **Bias rất thấp**, nhưng cực kỳ nhạy cảm với dữ liệu $\\implies$ **Variance rất cao (Overfitting)**.`,
    slideRef: "Slide Chương 4, Trang 54"
  },

  120: {
    question: "Ba điều kiện cần thiết để một mô hình kết hợp Ensemble Learning mang lại hiệu quả vượt trội là gì?",
    options: [
      "Mô hình phải dùng GPU, dữ liệu phải chuẩn hóa, số cây phải là số chẵn",
      "Mô hình cơ sở tốt hơn đoán ngẫu nhiên (> 50%), các mô hình có tính đa dạng (sai số độc lập), và quy tắc kết hợp phù hợp",
      "Tất cả các mô hình cơ sở phải giống hệt nhau về thuật toán và trọng số",
      "Tập dữ liệu phải có số chiều lớn hơn 1000"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Để "Hội đồng" thông thái hơn từng cá nhân, theo lý thuyết toán học (Định lý bồi thẩm đoàn Condorcet), bắt buộc phải có 3 điều kiện:
1. **Từng mô hình cơ sở phải tốt hơn đoán ngẫu nhiên:** Độ chính xác $Accuracy > 50\\%$. (Nếu kết hợp những mô hình đoán tệ hơn tung đồng xu thì hội đồng sẽ càng tệ hại).
2. **Tính đa dạng (Diversity) — QUAN TRỌNG NHẤT:** Các mô hình phải mắc các sai lầm khác nhau (sai số độc lập, không đồng pha). Nếu mọi mô hình đều sai cùng lúc thì bỏ phiếu vô nghĩa.
3. **Quy tắc kết hợp phù hợp:** Bỏ phiếu đa số cho phân loại hoặc lấy trung bình cho hồi quy.`,
    slideRef: "Slide Chương 4, Trang 63"
  },

  121: {
    question: "Trong Voting Classifier, sự khác biệt giữa Hard Voting và Soft Voting là gì?",
    options: [
      "Hard Voting lấy trung bình xác suất; Soft Voting bỏ phiếu theo nhãn đa số",
      "Hard Voting bỏ phiếu đa số theo nhãn cứng; Soft Voting lấy trung bình cộng xác suất dự đoán của từng lớp giữa các mô hình",
      "Hard Voting chỉ dùng cho hồi quy; Soft Voting chỉ dùng cho phân loại",
      "Hard Voting đòi hỏi số lượng mô hình chẵn"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Hard Voting (Bỏ phiếu cứng):** Đếm theo số đông nhãn lớp. (Mô hình 1 phán A, Mô hình 2 phán A, Mô hình 3 phán B $\\to$ Lớp A thắng vì có 2/3 phiếu).
* **Soft Voting (Bỏ phiếu mềm):** Lấy **trung bình cộng xác suất** mà các mô hình gán cho từng lớp, rồi chọn lớp có xác suất trung bình cao nhất.
* ⚠️ **So sánh thi cử:** **Soft Voting thường vượt trội hơn Hard Voting** vì nó tận dụng được thông tin về **độ tự tin (Confidence)** của từng mô hình, tránh việc các phiếu phân vân (51%) lấn át một phiếu rất tự tin (99%).`,
    slideRef: "Slide Chương 4, Trang 71-73"
  },

  122: {
    question: "Kỹ thuật Lấy mẫu Bootstrap (Bootstrap Sampling) trong Bagging được thực hiện như thế nào?",
    options: [
      "Lấy mẫu ngẫu nhiên không hoàn lại",
      "Từ tập dữ liệu n quan sát ban đầu, rút ngẫu nhiên n lần CÓ HOÀN LẠI (with replacement)",
      "Chia dữ liệu thành các fold cố định không giao nhau",
      "Chỉ lấy 50% dữ liệu đầu tiên"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Bootstrap Sampling** là kỹ thuật lấy mẫu thống kê:
  - Cho tập dữ liệu gốc gồm $n$ mẫu.
  - Ta rút ngẫu nhiên $n$ lần **CÓ HOÀN LẠI (with replacement)** để tạo ra một tập dữ liệu con cũng có đúng $n$ mẫu.
* Do có hoàn lại:
  - Một mẫu có thể được chọn nhiều lần (trùng lặp).
  - Một số mẫu sẽ không bao giờ được bốc trúng (gọi là tập Out-Of-Bag).`,
    slideRef: "Slide Chương 4, Trang 76"
  },

  123: {
    question: "Nguyên lý cốt lõi của phương pháp Bagging (Bootstrap Aggregating) là gì?",
    options: [
      "Huấn luyện tuần tự để sửa sai cho mô hình trước",
      "Huấn luyện SONG SONG nhiều mô hình độc lập trên các mẫu bootstrap khác nhau rồi tổng hợp kết quả (bỏ phiếu hoặc trung bình)",
      "Tăng trọng số cho các mẫu bị đoán sai",
      "Khớp cây vào gradient của hàm mất mát"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Tên gọi **BAGGING** là viết tắt của **B**ootstrap **AGG**regat**ING**:
1. **Bootstrap:** Tạo ra $B$ tập dữ liệu con bằng cách lấy mẫu có hoàn lại từ tập gốc.
2. **Huấn luyện Song song (Parallel):** Huấn luyện $B$ mô hình độc lập (thường là các cây quyết định sâu) trên $B$ tập dữ liệu này.
3. **Aggregating (Tổng hợp):** Gom dự đoán của cả $B$ mô hình lại bằng cách **Bỏ phiếu đa số** (cho phân loại) hoặc **Lấy trung bình cộng** (cho hồi quy).`,
    slideRef: "Slide Chương 4, Trang 75, 77-79"
  },

  124: {
    question: "Mục tiêu chính của phương pháp Bagging là tác động lên thành phần nào trong đánh đổi Bias - Variance?",
    options: [
      "Làm giảm Bias của mô hình",
      "Làm giảm Variance của mô hình (chống quá khớp)",
      "Làm tăng Variance để mô hình phức tạp hơn",
      "Không thay đổi cả Bias lẫn Variance"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Trong lý thuyết xác suất thống kê:
* Giả sử ta có $B$ biến ngẫu nhiên độc lập cùng phân phối, mỗi biến có phương sai là $\\sigma^2$. Khi ta lấy trung bình cộng của chúng, phương sai của trung bình cộng sẽ giảm xuống còn:
  $$\\text{Var}(\\bar{X}) = \\frac{\\sigma^2}{B}$$
* Áp dụng vào Machine Learning:
  - Từng cây quyết định sâu có **Variance rất cao (Overfitting)**.
  - Bagging gom nhiều cây sâu lại và lấy trung bình $\\implies$ **TRIỆT TIÊU PHƯƠNG SAI $\\implies$ GIẢM VARIANCE MẠNH MẼ!**
  - Trong khi đó, Bias của Bagging xấp xỉ bằng Bias của từng cây đơn lẻ (vốn dĩ đã thấp).`,
    slideRef: "Slide Chương 4, Trang 80, 84"
  },

  125: {
    question: "Trong quá trình lấy mẫu Bootstrap kích thước n từ n phần tử, tỷ lệ các mẫu Out-Of-Bag (OOB) không được chọn xấp xỉ bằng bao nhiêu khi n lớn?",
    options: [
      "50%",
      "36.8% (khoảng 1/e)",
      "10%",
      "63.2%"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Chứng minh toán học:
Xét 1 mẫu dữ liệu cụ thể trong tập $n$ phần tử:
1. Xác suất để mẫu đó **không được chọn** trong 1 lần rút thăm là:
   $$1 - \\frac{1}{n}$$
2. Vì ta rút thăm $n$ lần độc lập có hoàn lại, xác suất để mẫu đó **không bao giờ được chọn trong cả $n$ lần** là:
   $$P(\\text{không chọn}) = \\left(1 - \\frac{1}{n}\\right)^n$$
3. Trong giải tích toán học, khi $n \\to \\infty$:
   $$\\lim_{n \\to \\infty} \\left(1 - \\frac{1}{n}\\right)^n = \\frac{1}{e} \\approx \\mathbf{0.368 = 36.8\\%}$$
* Như vậy, khoảng **$36.8\\%$** dữ liệu không hề tham gia huấn luyện cây đó, gọi là tập **Out-Of-Bag (OOB)**!
* Ngược lại, tỷ lệ mẫu được chọn tham gia huấn luyện xấp xỉ $1 - 36.8\\% = 63.2\\%$.`,
    slideRef: "Slide Chương 4, Trang 81"
  }
};
