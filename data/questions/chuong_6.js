/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 6: MLP - MULTI LAYER PERCEPTRON
   - Số lượng: 80 câu
   - Nội dung: Perceptron, MLP, Activation Functions (Sigmoid, Tanh, ReLU, Softmax), Forward/Backpropagation, Loss functions, Optimizers (SGD, Adam)
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_6 = [
  {
    "id": 176,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Trong một Nơ-ron nhân tạo (Artificial Neuron), tổng có trọng số z được tính bằng công thức nào?",
    "options": [
      "z = w * x",
      "z = w^T x + b = Σ (w_j * x_j) + b",
      "z = σ(w^T x)",
      "z = max(0, w^T x)"
    ],
    "answer": 1,
    "explanation": "Tổng có trọng số z là tổ hợp tuyến tính của các đầu vào nhân với trọng số tương ứng cộng thêm bias: z = w^T x + b.",
    "slideRef": "Slide Chương 6, Trang 6, 8"
  },
  {
    "id": 177,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Hệ số Bias b trong nơ-ron nhân tạo đóng vai trò gì?",
    "options": [
      "Nhân tỷ lệ với đầu vào x_1",
      "Bổ sung một mức dịch chuyển độc lập với đầu vào, quyết định vị trí kích hoạt của nơ-ron",
      "Làm triệt tiêu đạo hàm trong lan truyền ngược",
      "Quy định số lượng tầng ẩn trong mạng"
    ],
    "answer": 1,
    "explanation": "Bias b cho phép nơ-ron dịch chuyển biên kích hoạt sang trái hoặc phải một cách độc lập với giá trị đầu vào (tương tự hệ số chặn w_0).",
    "slideRef": "Slide Chương 6, Trang 7, 10"
  },
  {
    "id": 178,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Mô hình Perceptron của Rosenblatt (1957) sử dụng hàm kích hoạt nào?",
    "options": [
      "Hàm Sigmoid",
      "Hàm bước nhảy (Step / Threshold Function)",
      "Hàm ReLU",
      "Hàm Tuyến tính"
    ],
    "answer": 1,
    "explanation": "Perceptron nguyên thủy dùng hàm bước nhảy: a = 1 nếu z >= 0, ngược lại a = 0.",
    "slideRef": "Slide Chương 6, Trang 13, 15"
  },
  {
    "id": 179,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Giới hạn lịch sử nổi tiếng của mô hình Perceptron đơn tầng do Minsky & Papert chứng minh năm 1969 là gì?",
    "options": [
      "Không thể tính toán được phép cộng số học",
      "Chỉ phân tách được các bài toán phân tách tuyến tính; bất lực hoàn toàn với bài toán logic XOR",
      "Không thể huấn luyện bằng máy tính",
      "Chỉ nhận được đầu vào là số nguyên"
    ],
    "answer": 1,
    "explanation": "Perceptron chỉ tạo được biên quyết định phẳng tuyến tính, do đó không thể phân loại được các mẫu của cổng XOR vốn không phân tách tuyến tính.",
    "slideRef": "Slide Chương 6, Trang 18-19"
  },
  {
    "id": 180,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Điều gì sẽ xảy ra nếu ta loại bỏ tất cả các hàm kích hoạt phi tuyến trong một mạng MLP có 10 tầng ẩn (hoặc dùng hàm kích hoạt tuyến tính f(z) = c*z)?",
    "options": [
      "Mạng sẽ học được các hàm phi tuyến phức tạp hơn",
      "Toàn bộ mạng 10 tầng sẽ sụp đổ tương đương với đúng một tầng tuyến tính đơn lẻ",
      "Mạng sẽ bị lỗi chia cho 0",
      "Thời gian huấn luyện tăng lên gấp 100 lần"
    ],
    "answer": 1,
    "explanation": "Tích của các ma trận biến đổi tuyến tính qua nhiều tầng vẫn chỉ là một phép biến đổi tuyến tính đơn lẻ: W_2(W_1 x + b_1) + b_2 = W' x + b'.",
    "slideRef": "Slide Chương 6, Trang 11, 21"
  },
  {
    "id": 181,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Hàm kích hoạt Sigmoid có miền giá trị và đạo hàm cực đại bằng bao nhiêu?",
    "options": [
      "Miền (-1, 1), đạo hàm cực đại bằng 1.0",
      "Miền (0, 1), đạo hàm cực đại bằng 0.25 (tại z = 0)",
      "Miền [0, +∞), đạo hàm cực đại bằng 0.5",
      "Miền (-∞, +∞), đạo hàm cực đại bằng 0"
    ],
    "answer": 1,
    "explanation": "Sigmoid σ(z) = 1 / (1 + e^-z) có miền (0, 1). Đạo hàm σ'(z) = σ(z)(1 - σ(z)) đạt cực đại tại z = 0 với giá trị 0.5 * 0.5 = 0.25.",
    "slideRef": "Slide Chương 6, Trang 28, 31"
  },
  {
    "id": 182,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Hiện tượng Triệt tiêu đạo hàm (Vanishing Gradient) khi dùng hàm Sigmoid trong mạng nơ-ron sâu xảy ra do nguyên nhân nào?",
    "options": [
      "Vì đạo hàm của Sigmoid luôn lớn hơn 10",
      "Vì khi |z| lớn, Sigmoid bị bão hòa ở 0 hoặc 1, đạo hàm tiến về 0; việc nhân chuỗi nhiều đạo hàm nhỏ qua các tầng làm gradient ở các tầng đầu triệt tiêu về 0",
      "Vì Sigmoid có điểm nhọn không khả vi",
      "Vì hàm Sigmoid tính toán quá nhanh"
    ],
    "answer": 1,
    "explanation": "Khi nhân chuỗi các giá trị đạo hàm <= 0.25 qua nhiều tầng, gradient truyền ngược về tầng đầu giảm theo hàm mũ về sát 0, khiến các tầng đầu ngừng học.",
    "slideRef": "Slide Chương 6, Trang 28, 31"
  },
  {
    "id": 183,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Ưu điểm lớn của hàm Tanh so với hàm Sigmoid là gì?",
    "options": [
      "Tanh không bao giờ bị bão hòa",
      "Đầu ra của Tanh đối xứng hoàn hảo qua gốc tọa độ 0 (Zero-centered, miền [-1, 1]) giúp gradient dao động đều quanh 0 và hội tụ nhanh hơn",
      "Tanh có công thức đơn giản hơn ReLU",
      "Tanh không sử dụng hàm số mũ e"
    ],
    "answer": 1,
    "explanation": "Hàm Tanh có miền (-1, 1) đối xứng quanh 0 (zero-centered), khắc phục được nhược điểm luôn dương của Sigmoid.",
    "slideRef": "Slide Chương 6, Trang 29, 31"
  },
  {
    "id": 184,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Công thức và đạo hàm của hàm kích hoạt ReLU (Rectified Linear Unit) là gì?",
    "options": [
      "ReLU(z) = max(0, z); Đạo hàm bằng 1 khi z > 0, bằng 0 khi z < 0",
      "ReLU(z) = min(0, z); Đạo hàm bằng -1",
      "ReLU(z) = 1 / (1 + e^-z); Đạo hàm bằng z",
      "ReLU(z) = |z|; Đạo hàm bằng 0"
    ],
    "answer": 0,
    "explanation": "ReLU(z) = max(0, z). Với z > 0, đạo hàm luôn bằng đúng 1; với z < 0, đạo hàm bằng 0.",
    "slideRef": "Slide Chương 6, Trang 30-31"
  },
  {
    "id": 185,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Tại sao hàm ReLU trở thành lựa chọn chuẩn mực hàng đầu cho các tầng ẩn trong Deep Learning hiện đại?",
    "options": [
      "Vì ReLU hoàn toàn không bị bão hòa và có đạo hàm bằng 1 ở miền dương (z > 0), giải quyết triệt để Vanishing Gradient, kèm tính toán siêu nhanh",
      "Vì ReLU có miền giá trị bị chặn trong [0, 1]",
      "Vì ReLU trơn mượt khả vi tại mọi điểm",
      "Vì ReLU loại bỏ hoàn toàn hiện tượng quá khớp"
    ],
    "answer": 0,
    "explanation": "ReLU tính toán cực nhanh (chỉ so sánh max) và giữ nguyên gradient bằng 1 khi z > 0, cho phép huấn luyện mạng sâu hàng chục, hàng trăm tầng.",
    "slideRef": "Slide Chương 6, Trang 30-31"
  },
  {
    "id": 186,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Hiện tượng 'Dying ReLU' (Chết nơ-ron) xảy ra khi nào?",
    "options": [
      "Khi tốc độ học learning rate bằng 0",
      "Khi nơ-ron liên tục nhận giá trị đầu vào z < 0, đạo hàm bằng 0 vĩnh viễn và các trọng số không bao giờ được cập nhật lại nữa",
      "Khi nơ-ron nhận giá trị z quá lớn",
      "Khi hàm ReLU bị tràn số"
    ],
    "answer": 1,
    "explanation": "Nếu nơ-ron rơi vào trạng thái z < 0 trên hầu hết dữ liệu, gradient bằng 0 khiến trọng số không được cập nhật, nơ-ron trở nên vô dụng vĩnh viễn.",
    "slideRef": "Slide Chương 6, Trang 31"
  },
  {
    "id": 187,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Hàm Leaky ReLU khắc phục hiện tượng Dying ReLU bằng cơ chế nào?",
    "options": [
      "Bằng cách cho phép một độ dốc nhỏ (ví dụ 0.01 * z) khi z < 0 thay vì bằng đúng 0",
      "Bằng cách nén đầu ra về đoạn [0, 1]",
      "Bằng cách chuyển thành hàm Tanh",
      "Bằng cách xóa bỏ trọng số âm"
    ],
    "answer": 0,
    "explanation": "Leaky ReLU định nghĩa f(z) = max(α*z, z) với α ≈ 0.01, đảm bảo luôn có một gradient nhỏ truyền ngược lại khi z < 0.",
    "slideRef": "Slide Chương 6, Trang 31"
  },
  {
    "id": 188,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Đối với bài toán Hồi quy (Regression) dự đoán giá trị liên tục, tầng đầu ra của mạng MLP nên được thiết kế như thế nào?",
    "options": [
      "1 nơ-ron với hàm kích hoạt Sigmoid",
      "1 nơ-ron với hàm kích hoạt Tuyến tính (Linear / No activation) kết hợp hàm mất mát MSE",
      "K nơ-ron với hàm Softmax",
      "1 nơ-ron với hàm bước nhảy Step"
    ],
    "answer": 1,
    "explanation": "Bài toán hồi quy cần dự đoán giá trị số thực không bị giới hạn miền, do đó nơ-ron đầu ra dùng kích hoạt tuyến tính kết hợp hàm mất mát MSE.",
    "slideRef": "Slide Chương 6, Trang 33, 41, 67"
  },
  {
    "id": 189,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Đối với bài toán Phân loại nhị phân (Binary Classification), thiết kế tầng đầu ra và hàm mất mát chuẩn là gì?",
    "options": [
      "1 nơ-ron Sigmoid kết hợp hàm mất mát Binary Cross-Entropy (BCE)",
      "2 nơ-ron Linear kết hợp MSE",
      "1 nơ-ron Softmax kết hợp Hinge loss",
      "1 nơ-ron ReLU kết hợp MAE"
    ],
    "answer": 0,
    "explanation": "Phân loại nhị phân dùng 1 nơ-ron Sigmoid đưa ra xác suất p ∈ (0, 1), kết hợp hàm mất mát Binary Cross-Entropy.",
    "slideRef": "Slide Chương 6, Trang 32, 41, 68"
  },
  {
    "id": 190,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Đối với bài toán Phân loại đa lớp (Multi-class Classification) với K lớp loại trừ lẫn nhau, thiết kế tầng đầu ra chuẩn là gì?",
    "options": [
      "1 nơ-ron Sigmoid kết hợp MSE",
      "K nơ-ron đầu ra với hàm kích hoạt Softmax kết hợp hàm mất mát Categorical Cross-Entropy",
      "K nơ-ron Linear kết hợp MAE",
      "1 nơ-ron ReLU"
    ],
    "answer": 1,
    "explanation": "Phân loại đa lớp dùng K nơ-ron Softmax để tạo phân phối xác suất trên K lớp, kết hợp hàm mất mát Categorical Cross-Entropy.",
    "slideRef": "Slide Chương 6, Trang 34-35, 41, 69"
  },
  {
    "id": 191,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Kỹ thuật ổn định số học (Numerical Stability) trong Softmax trừ đi giá trị c = max(z) nhằm mục đích gì?",
    "options": [
      "Làm thay đổi xác suất của lớp chiến thắng",
      "Tránh hiện tượng tràn số (Overflow) khi tính e^(z_k) với z_k lớn, trong khi giá trị xác suất đầu ra không hề bị thay đổi",
      "Giúp hàm Softmax có đạo hàm bằng 1",
      "Tăng tốc độ tính toán gấp 10 lần"
    ],
    "answer": 1,
    "explanation": "Trừ max(z) giữ cho số mũ luôn <= 0 (e^(z - max) <= 1), triệt tiêu nguy cơ tràn số máy tính mà giá trị phân số xác suất vẫn giữ nguyên.",
    "slideRef": "Slide Chương 6, Trang 36"
  },
  {
    "id": 192,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Một mạng MLP có tầng đầu vào d = 4 nơ-ron, một tầng ẩn có h = 5 nơ-ron, và tầng đầu ra K = 2 nơ-ron. Giả sử mọi nơ-ron đều có bias, tổng số tham số cần huấn luyện là bao nhiêu?",
    "options": [
      "20 tham số",
      "37 tham số",
      "45 tham số",
      "30 tham số"
    ],
    "answer": 1,
    "explanation": "Tầng 1 (Input -> Ẩn): 5 * (4 + 1) = 25 tham số; Tầng 2 (Ẩn -> Output): 2 * (5 + 1) = 12 tham số. Tổng cộng: 25 + 12 = 37 tham số.",
    "slideRef": "Slide Chương 6, Trang 24"
  },
  {
    "id": 193,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Một mạng MLP có Input d = 10, tầng ẩn 1 có 20 nơ-ron, tầng ẩn 2 có 10 nơ-ron, tầng output có 1 nơ-ron. Tổng số trọng số W và bias b là bao nhiêu?",
    "options": [
      "441",
      "310",
      "430",
      "341"
    ],
    "answer": 3,
    "explanation": "Tầng 1: 20 * (10 + 1) = 220; Tầng 2: 10 * (20 + 1) = 210; Tầng 3: 1 * (10 + 1) = 11. Tổng = 220 + 210 + 11 = 441 tham số. (Nếu tính W+b: 20*10+20 + 10*20+10 + 1*10+1 = 441).",
    "slideRef": "Slide Chương 6, Trang 24"
  },
  {
    "id": 194,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Quy tắc toán học nền tảng được thuật toán Backpropagation (Lan truyền ngược) sử dụng để tính đạo hàm riêng của hàm mất mát theo từng trọng số là gì?",
    "options": [
      "Quy tắc L'Hôpital",
      "Quy tắc chuỗi (Chain Rule) trên đồ thị tính toán",
      "Định lý Pytago",
      "Khai triển nhị thức Newton"
    ],
    "answer": 1,
    "explanation": "Backpropagation áp dụng Quy tắc chuỗi (Chain Rule) để tính đạo hàm hàm hợp ngược từ tầng ra về các tầng ẩn và tầng vào.",
    "slideRef": "Slide Chương 6, Trang 46, 48"
  },
  {
    "id": 195,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Trong thuật toán Backpropagation, quá trình tính toán diễn ra theo thứ tự nào?",
    "options": [
      "Forward pass tính loss -> Backward pass truyền ngược đạo hàm theo Chain Rule -> Cập nhật trọng số",
      "Backward pass trước -> Forward pass sau",
      "Cập nhật trọng số trước -> Tính loss sau",
      "Chỉ có Forward pass, không cần Backward pass"
    ],
    "answer": 0,
    "explanation": "Thứ tự chuẩn: Lan truyền thuận (Forward) để ra dự đoán và loss -> Lan truyền ngược (Backward) để tính gradient -> Cập nhật tham số theo Gradient Descent.",
    "slideRef": "Slide Chương 6, Trang 44, 56"
  },
  {
    "id": 196,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Sự khác biệt giữa Batch Gradient Descent và Stochastic Gradient Descent (SGD) là gì?",
    "options": [
      "Batch GD dùng 1 mẫu; SGD dùng toàn bộ dữ liệu",
      "Batch GD dùng TOÀN BỘ dữ liệu cho 1 lần cập nhật; SGD dùng ĐÚNG 1 MẪU dữ liệu cho mỗi lần cập nhật",
      "SGD luôn hội tụ mượt mà hơn Batch GD",
      "Batch GD không cần tính đạo hàm"
    ],
    "answer": 1,
    "explanation": "Batch GD tính gradient trên toàn bộ N mẫu rồi mới cập nhật 1 bước; SGD cập nhật tham số ngay sau từng mẫu dữ liệu đơn lẻ.",
    "slideRef": "Slide Chương 6, Trang 54-55, 60"
  },
  {
    "id": 197,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Ưu điểm lớn nhất của Mini-batch Gradient Descent so với Batch GD và SGD là gì?",
    "options": [
      "Nó không cần dữ liệu huấn luyện",
      "Nó cân bằng hoàn hảo giữa tính ổn định của Batch GD và tốc độ của SGD, đồng thời tận dụng tối ưu tính toán song song ma trận trên GPU",
      "Nó luôn tìm ra cực tiểu toàn cục 100%",
      "Nó loại bỏ hoàn toàn siêu tham số learning rate"
    ],
    "answer": 1,
    "explanation": "Mini-batch (batch size 32, 64, 128...) là chuẩn mực thực tế: ổn định hơn SGD, nhanh hơn Batch GD và tối ưu hóa phần cứng GPU.",
    "slideRef": "Slide Chương 6, Trang 56, 60"
  },
  {
    "id": 198,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Tại sao KHÔNG ĐƯỢC khởi tạo tất cả các trọng số W trong mạng nơ-ron bằng 0?",
    "options": [
      "Vì mạng sẽ bị tràn số",
      "Vì gây ra hiện tượng đối xứng (Symmetry Problem): tất cả các nơ-ron trong cùng một tầng sẽ nhận gradient giống hệt nhau và học cùng một đặc trưng",
      "Vì giá trị 0 không thể nhân được",
      "Vì làm cho bias b bị mất đi"
    ],
    "answer": 1,
    "explanation": "Nếu khởi tạo W = 0, mọi nơ-ron trong tầng ẩn đều có đầu ra như nhau và nhận gradient y hệt nhau, mạng sâu không thể học các đặc trưng đa dạng.",
    "slideRef": "Slide Chương 6, Trang 62"
  },
  {
    "id": 199,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Kỹ thuật Momentum (Quán tính) trong tối ưu hóa Gradient Descent giúp ích gì?",
    "options": [
      "Làm tăng kích thước của tập dữ liệu",
      "Tích lũy vận tốc từ các bước cập nhật trước, giúp vượt qua các điểm cực tiểu địa phương nông và giảm dao động zic-zac ở các hẻm dốc",
      "Tự động dừng huấn luyện khi mạng quá khớp",
      "Xóa bỏ các tầng ẩn không cần thiết"
    ],
    "answer": 1,
    "explanation": "Momentum bổ sung quán tính vào bước đi, giúp viên bi lăn nhanh qua các vùng bằng phẳng và giảm rung lắc trên các địa hình dốc hẹp.",
    "slideRef": "Slide Chương 6, Trang 61"
  },
  {
    "id": 200,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Trong tối ưu hóa mạng nơ-ron, nếu đặt Tốc độ học (Learning Rate η) QUÁ LỚN, hiện tượng gì sẽ xảy ra?",
    "options": [
      "Mô hình học rất chậm và không bao giờ thay đổi trọng số",
      "Hàm mất mát dao động hỗn loạn hoặc phân kỳ (Loss tăng vọt lên vô cùng)",
      "Mô hình luôn tìm được nghiệm tối ưu sau đúng 1 epoch",
      "Mạng tự động chuyển thành hồi quy tuyến tính"
    ],
    "answer": 1,
    "explanation": "Learning rate quá lớn làm các bước nhảy vượt qua đáy cực tiểu, khiến giá trị loss dao động dữ dội hoặc vọt lên vô cùng (phân kỳ).",
    "slideRef": "Slide Chương 6, Trang 58-59"
  },
  {
    "id": 201,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Kỹ thuật Early Stopping (Dừng sớm) quyết định thời điểm dừng huấn luyện dựa trên tiêu chí nào?",
    "options": [
      "Khi đạt đúng 1000 epoch",
      "Khi hàm mất mát trên tập Validation bắt đầu tăng trở lại (dấu hiệu của Overfitting) dù Train Loss vẫn tiếp tục giảm",
      "Khi toàn bộ trọng số W bằng 0",
      "Khi tập dữ liệu kiểm thử đạt độ chính xác 100%"
    ],
    "answer": 1,
    "explanation": "Early stopping theo dõi Validation Loss; khi điểm validation ngừng cải thiện và bắt đầu tăng (dấu hiệu bắt đầu học vẹt), quá trình training dừng lại.",
    "slideRef": "Slide Chương 6, Trang 63"
  },
  {
    "id": 202,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Định lý Xấp xỉ Phổ quát (Universal Approximation Theorem) khẳng định điều gì về mạng MLP?",
    "options": [
      "Một mạng nơ-ron truyền thẳng chỉ cần 1 tầng ẩn với số nơ-ron đủ lớn và hàm kích hoạt phi tuyến có thể xấp xỉ bất kỳ hàm liên tục nào",
      "Mọi mạng nơ-ron đều có độ chính xác 100% trên mọi bài toán",
      "Mạng nơ-ron sâu không bao giờ bị Overfitting",
      "Mạng nơ-ron chỉ xấp xỉ được các hàm tuyến tính"
    ],
    "answer": 0,
    "explanation": "Định lý chứng minh rằng mạng MLP với ít nhất 1 tầng ẩn phi tuyến có năng lực xấp xỉ phổ quát bất kỳ hàm số liên tục nào với độ chính xác tùy ý.",
    "slideRef": "Slide Chương 6, Trang 38"
  },
  {
    "id": 203,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Trong bài toán nhận diện chữ số viết tay MNIST (ảnh 28x28 pixel, 10 chữ số từ 0 đến 9), kích thước vector đầu vào d và số nơ-ron đầu ra K lần lượt là bao nhiêu?",
    "options": [
      "d = 28, K = 1",
      "d = 784, K = 10",
      "d = 100, K = 10",
      "d = 784, K = 1"
    ],
    "answer": 1,
    "explanation": "Ảnh 28 x 28 pixel được trải phẳng thành vector đầu vào d = 784; bài toán nhận diện 10 chữ số có K = 10 nơ-ron đầu ra Softmax.",
    "slideRef": "Slide Chương 6, Trang 70"
  },
  {
    "id": 204,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Thuật ngữ 'Epoch' trong huấn luyện mạng nơ-ron nghĩa là gì?",
    "options": [
      "Một lần cập nhật trọng số sau một mẫu đơn lẻ",
      "Một lượt duyệt qua TOÀN BỘ tập dữ liệu huấn luyện (Training Set)",
      "Thời gian 1 giây máy tính chạy",
      "Số lượng tầng ẩn trong mạng"
    ],
    "answer": 1,
    "explanation": "Một Epoch là một chu kỳ hoàn chỉnh mà trong đó toàn bộ dữ liệu huấn luyện đã được đưa qua mạng (forward và backward) đúng một lần.",
    "slideRef": "Slide Chương 6, Trang 54, 56"
  },
  {
    "id": 205,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Khi vẽ đường cong mất mát (Loss Curve), nếu Train Loss liên tục giảm trong khi Validation Loss tách ra và tăng vọt, đây là triệu chứng của hiện tượng gì?",
    "options": [
      "Underfitting",
      "Overfitting (Quá khớp)",
      "Learning rate quá nhỏ",
      "Dying ReLU"
    ],
    "answer": 1,
    "explanation": "Đường biểu diễn Train loss tiếp tục đi xuống nhưng Validation loss ngóc đầu đi lên là chỉ dấu kinh điển của việc mô hình bị Overfitting.",
    "slideRef": "Slide Chương 6, Trang 59, 63"
  },
  {
    "id": 206,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Quy tắc cập nhật trọng số theo Gradient Descent cơ bản với tốc độ học η là gì?",
    "options": [
      "W_mới = W_cũ + η * ∇L",
      "W_mới = W_cũ - η * ∇L",
      "W_mới = W_cũ / (η * ∇L)",
      "W_mới = η * (W_cũ - ∇L)"
    ],
    "answer": 1,
    "explanation": "Gradient chỉ hướng tăng nhanh nhất của hàm mất mát, do đó để tối thiểu hóa loss ta phải đi ngược chiều gradient: W_mới = W_cũ - η * ∇L.",
    "slideRef": "Slide Chương 6, Trang 57"
  },
  {
    "id": 207,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Trong Computational Graph (Đồ thị tính toán), nếu f = q * z với q = x + y, đạo hàm riêng ∂f/∂x được tính theo Chain Rule như thế nào?",
    "options": [
      "∂f/∂x = (∂f/∂q) * (∂q/∂x) = z * 1 = z",
      "∂f/∂x = x * y",
      "∂f/∂x = q + z",
      "∂f/∂x = 0"
    ],
    "answer": 0,
    "explanation": "Áp dụng quy tắc chuỗi: ∂f/∂x = (∂f/∂q) * (∂q/∂x). Với ∂f/∂q = z và ∂q/∂x = 1, kết quả là z * 1 = z.",
    "slideRef": "Slide Chương 6, Trang 45, 52"
  },
  {
    "id": 208,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Trong một mạng MLP phân loại ảnh mèo và chó (nhị phân), nếu nơ-ron đầu ra đưa ra xác suất p = 0.85, nhãn dự đoán theo ngưỡng chuẩn 0.5 là gì?",
    "options": [
      "Lớp 0 (Chó)",
      "Lớp 1 (Mèo)",
      "Không xác định được",
      "Cả hai lớp cùng lúc"
    ],
    "answer": 1,
    "explanation": "Vì p = 0.85 >= 0.5, mô hình sẽ phân loại mẫu vào lớp Dương tính (Lớp 1).",
    "slideRef": "Slide Chương 6, Trang 68"
  },
  {
    "id": 209,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Sự khác biệt giữa Chiều rộng (Width) và Chiều sâu (Depth) của mạng MLP là gì?",
    "options": [
      "Chiều rộng là số lượng tầng; Chiều sâu là số nơ-ron mỗi tầng",
      "Chiều rộng là số nơ-ron trong một tầng ẩn; Chiều sâu là số lượng tầng biến đổi có tham số trong mạng",
      "Chiều rộng đo bằng pixel; Chiều sâu đo bằng giây",
      "Hai khái niệm hoàn toàn như nhau"
    ],
    "answer": 1,
    "explanation": "Width là số lượng nơ-ron trong một tầng (học nhiều đặc trưng song song); Depth là số lượng tầng ẩn liên tiếp (học phân cấp trừu tượng từ thấp đến cao).",
    "slideRef": "Slide Chương 6, Trang 27"
  },
  {
    "id": 210,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Checklist thiết kế một mạng MLP chuẩn bao gồm các bước nào sau đây?",
    "options": [
      "Xác định kích thước đầu vào -> Chọn số neuron đầu ra & hàm kích hoạt phù hợp mục tiêu -> Chọn cấu trúc tầng ẩn & hàm kích hoạt phi tuyến -> Ghép hàm mất mát tương thích",
      "Chỉ cần chọn số tầng ngẫu nhiên không cần quan tâm đầu ra",
      "Luôn dùng hàm Sigmoid cho tất cả các tầng ẩn và đầu ra",
      "Khởi tạo toàn bộ trọng số bằng 0"
    ],
    "answer": 0,
    "explanation": "Thiết kế MLP bắt đầu từ việc xác định kích thước đầu vào, loại bài toán để chọn đầu ra & hàm loss, chọn cấu trúc tầng ẩn và khởi tạo tham số ngẫu nhiên.",
    "slideRef": "Slide Chương 6, Trang 74"
  },
  {
    "id": 231,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Định lý Xấp xỉ Phổ quát (Universal Approximation Theorem) khẳng định điều gì về mạng nơ-ron truyền thẳng (Feedforward NN)?",
    "options": [
      "Mọi mạng nơ-ron đều sẽ đạt độ chính xác 100% trên tập kiểm thử",
      "Một mạng nơ-ron chỉ cần một lớp ẩn duy nhất với số nơ-ron hữu hạn và hàm kích hoạt phi tuyến có thể xấp xỉ bất kỳ hàm liên tục nào",
      "Mạng nơ-ron không bao giờ gặp phải hiện tượng Overfitting",
      "Mạng nơ-ron chỉ hoạt động được khi dùng hàm kích hoạt tuyến tính"
    ],
    "answer": 1,
    "explanation": "Cybenko (1989) và Hornik (1991) đã chứng minh rằng một mạng nơ-ron truyền thẳng chỉ cần 1 tầng ẩn với đủ số lượng nơ-ron và hàm kích hoạt phi tuyến (như Sigmoid) có khả năng xấp xỉ bất kỳ hàm liên tục nào trên tập compact với độ chính xác tùy ý.",
    "slideRef": "Slide Chương 6, Trang 18-20"
  },
  {
    "id": 232,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Tại sao hàm kích hoạt ReLU f(z) = max(0, z) lại hạn chế được hiện tượng Triệt tiêu đạo hàm (Vanishing Gradient) tốt hơn nhiều so với Sigmoid?",
    "options": [
      "Vì ReLU có giá trị âm vô cùng lớn",
      "Vì tại vùng dương z > 0, đạo hàm của ReLU luôn là hằng số bằng 1, giúp dòng gradient truyền nguyên vẹn ngược về các tầng trước",
      "Vì ReLU biến đổi toàn bộ dữ liệu thành ma trận đường chéo",
      "Vì ReLU làm cho số lượng tham số giảm đi một nửa"
    ],
    "answer": 1,
    "explanation": "Với Sigmoid, đạo hàm tối đa chỉ là 0.25 (và tiến về 0 ở hai phía bão hòa), nhân liên tiếp qua nhiều tầng sẽ khiến gradient triệt tiêu về 0. Với ReLU, khi z > 0 thì dReLU/dz = 1, đạo hàm không bị co nhỏ khi lan truyền qua nhiều lớp sâu.",
    "slideRef": "Slide Chương 6, Trang 28-30"
  },
  {
    "id": 233,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Hiện tượng 'Dying ReLU' là gì và giải pháp nào thường được áp dụng để khắc phục?",
    "options": [
      "Mạng học quá nhanh gây tràn bộ nhớ; khắc phục bằng cách giảm batch size",
      "Nơ-ron có đầu vào luôn âm khiến đầu ra và đạo hàm bằng 0 mãi mãi, trọng số không bao giờ cập nhật được; khắc phục bằng Leaky ReLU hoặc Parametric ReLU",
      "Trọng số tăng lên vô cùng lớn; khắc phục bằng L1 Regularization",
      "Hàm ReLU làm chết các nơ-ron ở tầng xuất dữ liệu cuối cùng"
    ],
    "answer": 1,
    "explanation": "Nếu một nơ-ron rơi vào vùng z < 0, đầu ra = 0 và gradient = 0, nơ-ron đó bị 'chết' không thể cập nhật. Leaky ReLU giải quyết bằng cách gán hệ số dốc nhỏ alpha (ví dụ 0.01) cho vùng âm: f(z) = z nếu z >= 0 và alpha * z nếu z < 0.",
    "slideRef": "Slide Chương 6, Trang 31-33"
  },
  {
    "id": 234,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Giá trị ĐẠO HÀM LỚN NHẤT của hàm kích hoạt Sigmoid sigma(z) = 1 / (1 + exp(-z)) là bao nhiêu và đạt được tại đâu?",
    "options": [
      "1.0 đạt được tại z = 1",
      "0.5 đạt được tại z = 0",
      "0.25 đạt được tại z = 0",
      "Vô cùng lớn khi z tiến ra vô cùng"
    ],
    "answer": 2,
    "explanation": "Đạo hàm của Sigmoid là sigma'(z) = sigma(z) * (1 - sigma(z)). Vì sigma(z) nằm trong khoảng (0, 1), tích này đạt cực đại khi sigma(z) = 0.5 (tức tại z = 0). Giá trị cực đại là 0.5 * (1 - 0.5) = 0.25.",
    "slideRef": "Slide Chương 6, Trang 24-25"
  },
  {
    "id": 235,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Giá trị ĐẠO HÀM LỚN NHẤT của hàm kích hoạt Tanh tanh(z) là bao nhiêu và đạt được tại đâu?",
    "options": [
      "1.0 đạt được tại z = 0",
      "0.5 đạt được tại z = 0.5",
      "0.25 đạt được tại z = 0",
      "0.0 đạt được tại z = 0"
    ],
    "answer": 0,
    "explanation": "Đạo hàm của Tanh là tanh'(z) = 1 - tanh^2(z). Vì tanh(0) = 0 nên đạo hàm tại z = 0 đạt cực đại bằng 1 - 0^2 = 1.0. Do đó gradient của Tanh mạnh gấp 4 lần so với Sigmoid (1.0 so với 0.25) tại điểm gốc.",
    "slideRef": "Slide Chương 6, Trang 26-27"
  },
  {
    "id": 236,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Kỹ thuật Động lượng (Momentum) giúp tối ưu hóa thuật toán Gradient Descent như thế nào?",
    "options": [
      "Tự động tăng gấp đôi learning rate sau mỗi 10 vòng lặp",
      "Tích lũy véc-tơ vận tốc gradient từ các bước lặp trước (như hòn bi lăn dốc) giúp vượt qua các điểm dốc thoai thoải và giảm dao động răng cưa",
      "Tính đạo hàm bậc hai ma trận Hessian tại mỗi bước",
      "Chọn ngẫu nhiên lại vị trí khởi tạo trọng số"
    ],
    "answer": 1,
    "explanation": "Momentum cập nhật v_t = gamma * v_{t-1} + lr * grad. Bằng cách cộng dồn hướng di chuyển trong quá khứ, momentum giúp triệt tiêu dao động theo phương thẳng đứng và đẩy nhanh tốc độ hội tụ theo phương ngang về đáy hàm mất mát.",
    "slideRef": "Slide Chương 6, Trang 52-54"
  },
  {
    "id": 237,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Thuật toán tối ưu Adam (Adaptive Moment Estimation) là sự kết hợp ưu điểm của hai thuật toán nào?",
    "options": [
      "Gradient Descent thuần và Newton-Raphson",
      "Momentum (ước lượng mô-men bậc 1) và RMSprop (ước lượng mô-men bậc 2 với learning rate thích nghi)",
      "OLS và Ridge Regression",
      "AdaBoost và Random Forest"
    ],
    "answer": 1,
    "explanation": "Adam tính toán cả trung bình trượt của gradient (first moment m_t - như Momentum) và trung bình trượt của bình phương gradient (second moment v_t - như RMSProp), đồng thời có bước hiệu chỉnh độ lệch (bias-correction) ở các bước đầu.",
    "slideRef": "Slide Chương 6, Trang 56-59"
  },
  {
    "id": 238,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Tính tổng số tham số có thể học (weights + biases) của mạng MLP sau: Đầu vào có 10 nơ-ron; Lớp ẩn 1 có 20 nơ-ron; Lớp ẩn 2 có 15 nơ-ron; Lớp đầu ra có 3 nơ-ron. Tất cả các lớp đều có bias.",
    "options": [
      "350 tham số",
      "583 tham số",
      "48 tham số",
      "625 tham số"
    ],
    "answer": 1,
    "explanation": "Tầng ẩn 1: 10 * 20 weights + 20 biases = 220. Tầng ẩn 2: 20 * 15 weights + 15 biases = 315. Tầng đầu ra: 15 * 3 weights + 3 biases = 48. Tổng cộng: 220 + 315 + 48 = 583 tham số.",
    "slideRef": "Slide Chương 6, Trang 15-17"
  },
  {
    "id": 239,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Trong bài toán Phân loại đa lớp (Multi-class Classification) với C lớp riêng biệt, tầng đầu ra thường dùng hàm kích hoạt nào kết hợp với hàm mất mát nào?",
    "options": [
      "Tầng ra Sigmoid kết hợp hàm mất mát Mean Squared Error (MSE)",
      "Tầng ra Softmax kết hợp hàm mất mát Categorical Cross-Entropy",
      "Tầng ra ReLU kết hợp hàm mất mát Hinge Loss",
      "Tầng ra Tuyến tính kết hợp Binary Cross-Entropy"
    ],
    "answer": 1,
    "explanation": "Softmax chuẩn hóa các giá trị logit z_i thành phân phối xác suất có tổng bằng 1. Kết hợp với hàm mất mát Categorical Cross-Entropy J = - sum(y_i * log(p_i)) là tiêu chuẩn vàng cho phân loại đa lớp.",
    "slideRef": "Slide Chương 6, Trang 40-42"
  },
  {
    "id": 240,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Kỹ thuật Khởi tạo trọng số He (He Initialization / Kaiming Init) được đề xuất tối ưu hóa đặc biệt cho mạng sử dụng hàm kích hoạt nào?",
    "options": [
      "Hàm Sigmoid và Tanh",
      "Hàm ReLU và các biến thể của ReLU (Leaky ReLU)",
      "Hàm Tuyến tính thuần túy",
      "Hàm Phân bước Heaviside"
    ],
    "answer": 1,
    "explanation": "Khởi tạo Xavier/Glorot giả định hàm kích hoạt đối xứng quanh 0 (như Tanh). Với hàm ReLU triệt tiêu một nửa giá trị âm, Kaiming He (2015) đề xuất phương sai trọng số Var(W) = 2 / n_in giúp giữ cho phương sai của tín hiệu không bị giảm sút qua các tầng mạng sâu.",
    "slideRef": "Slide Chương 6, Trang 62-64"
  },
  {
    "id": 366,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Định lý Hội tụ Perceptron (Novikoff 1962) khẳng định điều gì về thuật toán Perceptron cổ điển?",
    "options": [
      "Perceptron luôn hội tụ trên mọi tập dữ liệu bất kể có thể phân tách được hay không",
      "Nếu tập dữ liệu huấn luyện phân tách tuyến tính (Linearly Separable) với độ rộng lề γ > 0, thuật toán Perceptron chắc chắn sẽ hội tụ và tìm ra một siêu phẳng phân tách hoàn hảo sau một số hữu hạn bước lặp",
      "Perceptron giải quyết được hàm XOR trong tối đa 10 epoch",
      "Sai số của Perceptron giảm theo cấp số nhân"
    ],
    "answer": 1,
    "explanation": "Định lý Novikoff chứng minh số lần cập nhật lỗi của Perceptron bị chặn trên bởi (R / γ)^2 (với R là bán kính khối cầu chứa dữ liệu và γ là lề phân tách), đảm bảo thuật toán chắc chắn hội tụ nếu dữ liệu tách biệt tuyến tính.",
    "slideRef": "Slide Chương 6, Trang 7-9"
  },
  {
    "id": 367,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Trong bài toán XOR (Exclusive OR) với 4 mẫu: (0,0)->0, (0,1)->1, (1,0)->1, (1,1)->0, tại sao một Perceptron đơn tầng KHÔNG THỂ học được nghiệm đúng?",
    "options": [
      "Vì Perceptron không thể xử lý giá trị 0",
      "Vì 4 điểm dữ liệu của bài toán XOR không tách biệt tuyến tính (không thể dùng một đường thẳng đơn lẻ để phân chia 2 điểm nhãn 1 và 2 điểm nhãn 0 trong mặt phẳng 2D)",
      "Vì tốc độ học η quá nhỏ",
      "Vì hàm XOR yêu cầu ít nhất 4 đầu vào"
    ],
    "answer": 1,
    "explanation": "Về mặt hình học, hai điểm nhãn 1 nằm trên đường chéo (0,1) và (1,0), hai điểm nhãn 0 nằm trên đường chéo (0,0) và (1,1). Bất kỳ một đường thẳng nào chia mặt phẳng làm đôi cũng chỉ bắt được tối đa 3 điểm đúng, không thể tách biệt hoàn toàn 4 điểm này.",
    "slideRef": "Slide Chương 6, Trang 10-12"
  },
  {
    "id": 368,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Định lý Xấp xỉ Phổ quát (Universal Approximation Theorem - Cybenko 1989, Hornik 1991) phát biểu rằng:",
    "options": [
      "Mọi bài toán học máy đều có thể giải quyết bằng 1 nơ-ron duy nhất",
      "Một mạng nơ-ron truyền thẳng (Feedforward) chỉ cần chứa MỘT tầng ẩn với số lượng nơ-ron đủ lớn và sử dụng hàm kích hoạt phi tuyến có thể xấp xỉ bất kỳ hàm liên tục nào trên tập compact với độ chính xác tùy ý",
      "Mạng nơ-ron sâu luôn luôn vượt trội hơn cây quyết định",
      "Tất cả các mạng nơ-ron đều tránh được hiện tượng quá khớp"
    ],
    "answer": 1,
    "explanation": "Định lý chứng minh rằng mạng MLP với 1 tầng ẩn phi tuyến là một bộ xấp xỉ vạn năng (Universal Approximator). Tuy nhiên định lý không chỉ ra cần bao nhiêu nơ-ron và làm sao học được trọng số tối ưu (đó là lý do kiến trúc sâu Deep Networks thực tế hiệu quả hơn nhiều).",
    "slideRef": "Slide Chương 6, Trang 14-16"
  },
  {
    "id": 369,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Nếu trong một mạng MLP có 5 tầng ẩn nhưng TẤT CẢ các tầng đều sử dụng hàm kích hoạt tuyến tính f(z) = z, toàn bộ mạng 5 tầng này tương đương với mô hình nào?",
    "options": [
      "Mô hình cây quyết định 5 tầng",
      "Một mô hình Tuyến tính đơn tầng duy nhất (như Linear Regression)",
      "Mô hình phân cụm K-Means",
      "Mô hình mạng nơ-ron tích chập CNN"
    ],
    "answer": 1,
    "explanation": "Tổ hợp của các hàm tuyến tính vẫn là một hàm tuyến tính: W5*(W4*(W3*(W2*(W1*x + b1) + b2)...)) = W_total * x + b_total. Việc xếp chồng bao nhiêu tầng tuyến tính cũng hoàn toàn vô nghĩa vì không tạo thêm bất kỳ khả năng học phi tuyến nào.",
    "slideRef": "Slide Chương 6, Trang 18-20"
  },
  {
    "id": 370,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Giá trị lớn nhất khả dĩ của đạo hàm hàm Sigmoid σ'(z) = σ(z)(1 - σ(z)) là bao nhiêu và đạt được tại z bằng mấy?",
    "options": [
      "Max = 1.0 tại z = 0",
      "Max = 0.25 tại z = 0",
      "Max = 0.5 tại z = 1",
      "Max = 0.25 tại z = +∞"
    ],
    "answer": 1,
    "explanation": "Tại z = 0, σ(0) = 0.5. Đạo hàm đạt giá trị cực đại: σ'(0) = 0.5 * (1 - 0.5) = 0.25. Với mọi giá trị z khác, đạo hàm đều nhỏ hơn 0.25 và tiến nhanh về 0 khi |z| lớn.",
    "slideRef": "Slide Chương 6, Trang 23-25"
  },
  {
    "id": 371,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Hệ quả trực tiếp của việc đạo hàm hàm Sigmoid luôn nhỏ hơn hoặc bằng 0.25 (σ'(z) <= 0.25) trong mạng nơ-ron sâu là gì?",
    "options": [
      "Gây ra hiện tượng Bùng nổ đạo hàm (Exploding Gradient)",
      "Gây ra hiện tượng Triệt tiêu đạo hàm (Vanishing Gradient) nghiêm trọng: qua mỗi tầng lan truyền ngược, gradient bị co lại ít nhất 4 lần, khiến gradient ở các tầng đầu gần như bằng 0 và không thể học được",
      "Làm tốc độ huấn luyện nhanh gấp 4 lần",
      "Trọng số w bị ép về đúng 0 như Lasso"
    ],
    "answer": 1,
    "explanation": "Theo quy tắc chuỗi, gradient lan truyền qua L tầng sẽ bị nhân với tích các đạo hàm: (0.25)^L. Chỉ cần qua 5 tầng, gradient đã bị suy giảm hơn 1000 lần (0.25^5 ≈ 0.00097), làm tê liệt việc học ở các tầng đầu.",
    "slideRef": "Slide Chương 6, Trang 25-27"
  },
  {
    "id": 372,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Hàm kích hoạt Tanh tanh(z) có ưu điểm nào vượt trội hơn hàm Sigmoid?",
    "options": [
      "Tanh không bao giờ bị bão hòa đạo hàm ở hai đầu",
      "Tanh có miền giá trị (-1, 1) và đối xứng qua gốc tọa độ (Zero-centered), giúp giá trị kích hoạt đầu ra có trung bình xấp xỉ 0, làm cho hướng cập nhật gradient ổn định hơn mà không bị dao động zíc-zắc",
      "Tanh có tốc độ tính toán nhanh hơn ReLU",
      "Tanh chỉ dùng cho bài toán phân loại đa lớp"
    ],
    "answer": 1,
    "explanation": "Sigmoid có đầu ra luôn dương (0, 1) nên gradient theo trọng số luôn cùng dấu (cùng dương hoặc cùng âm), gây ra cập nhật zíc-zắc chậm chạp. Tanh giải quyết việc này vì Zero-centered (đối xứng quanh 0), dù nó vẫn bị Vanishing gradient khi |z| lớn.",
    "slideRef": "Slide Chương 6, Trang 28-30"
  },
  {
    "id": 373,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Ưu điểm đột phá giúp hàm ReLU f(z) = max(0, z) trở thành hàm kích hoạt tiêu chuẩn cho các tầng ẩn trong Deep Learning hiện đại là gì?",
    "options": [
      "Đạo hàm luôn bằng 1 trên toàn bộ miền z > 0, hoàn toàn xóa bỏ hiện tượng Triệt tiêu đạo hàm ở miền dương, đồng thời phép tính cực kỳ đơn giản và nhanh chóng",
      "ReLU có dạng cong trơn khả vi tại mọi điểm trên trục số thực",
      "ReLU có miền giá trị bị chặn trong khoảng [-1, 1]",
      "ReLU giúp giảm số lượng nơ-ron của mạng"
    ],
    "answer": 0,
    "explanation": "Với z > 0, đạo hàm của ReLU luôn bằng đúng 1 (không bị suy giảm như 0.25 của Sigmoid), cho phép tín hiệu gradient truyền qua hàng chục tầng mạng sâu mà không bị tắt. Phép tính max(0, z) cũng chỉ tốn 1 phép so sánh phần cứng siêu tốc.",
    "slideRef": "Slide Chương 6, Trang 32-34"
  },
  {
    "id": 374,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Hiện tượng 'Chết nơ-ron' (Dying ReLU problem) trong quá trình huấn luyện mạng nơ-ron xảy ra khi nào?",
    "options": [
      "Khi nơ-ron nhận giá trị đầu vào quá lớn làm tràn bộ nhớ",
      "Khi trọng số cập nhật khiến tổng đầu vào z = w^T x + b bị âm đối với MỌI mẫu dữ liệu trong tập train; khi đó kích hoạt bằng 0 và đạo hàm bằng 0 vĩnh viễn, nơ-ron ngừng học hoàn toàn",
      "Khi tốc độ học η được đặt quá nhỏ",
      "Khi sử dụng thuật toán tối ưu hóa Adam"
    ],
    "answer": 1,
    "explanation": "Khi z <= 0, đạo hàm của ReLU bằng 0. Nếu một bước nhảy gradient lớn khiến trọng số làm cho z < 0 cho toàn bộ tập dữ liệu, gradient qua nơ-ron đó sẽ luôn là 0 ở các epoch sau, nơ-ron 'chết lâm sàng' và không bao giờ phục hồi được.",
    "slideRef": "Slide Chương 6, Trang 34-36"
  },
  {
    "id": 375,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Hàm kích hoạt Leaky ReLU khắc phục hiện tượng Dying ReLU bằng cách nào?",
    "options": [
      "Chuyển toàn bộ giá trị âm thành dương",
      "Cho phép một hệ số góc nhỏ (thường α = 0.01) ở miền âm: f(z) = z nếu z > 0, và f(z) = α * z nếu z <= 0, đảm bảo đạo hàm ở miền âm luôn bằng α > 0",
      "Sử dụng hàm Softmax ở mỗi nơ-ron",
      "Cắt tỉa nơ-ron bị chết khỏi mạng"
    ],
    "answer": 1,
    "explanation": "Với Leaky ReLU, khi z <= 0 thì đạo hàm vẫn giữ giá trị 0.01 (thay vì 0 tuyệt đối). Điều này cho phép gradient nhỏ tiếp tục chảy qua nơ-ron, giúp nó có cơ hội cập nhật trọng số và 'sống lại'.",
    "slideRef": "Slide Chương 6, Trang 36-37"
  },
  {
    "id": 376,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Tính tổng số tham số (Weights + Biases) có thể học được của một mạng MLP gồm: Tầng đầu vào có 784 đặc trưng (ảnh 28x28); Tầng ẩn 1 có 128 nơ-ron; Tầng ẩn 2 có 64 nơ-ron; Tầng đầu ra có 10 nơ-ron. Tất cả các tầng đều có Bias.",
    "options": [
      "109,386 tham số",
      "108,544 tham số",
      "109,194 tham số",
      "100,000 tham số"
    ],
    "answer": 0,
    "explanation": "Tầng ẩn 1: 784 * 128 + 128 = 100,352 + 128 = 100,480. Tầng ẩn 2: 128 * 64 + 64 = 8,192 + 64 = 8,256. Tầng đầu ra: 64 * 10 + 10 = 640 + 10 = 650. Tổng cộng: 100,480 + 8,256 + 650 = 109,386 tham số.",
    "slideRef": "Slide Chương 6, Trang 16-17"
  },
  {
    "id": 377,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Nếu ma trận kích hoạt tầng trước A^[l-1] có kích thước (n^[l-1], m) và tầng hiện tại l có n^[l] nơ-ron, thì ma trận trọng số W^[l] và vector bias b^[l] có kích thước lần lượt là gì?",
    "options": [
      "W^[l] có kích thước (n^[l], n^[l-1]); b^[l] có kích thước (n^[l], 1)",
      "W^[l] có kích thước (n^[l-1], n^[l]); b^[l] có kích thước (1, n^[l])",
      "W^[l] có kích thước (n^[l], m); b^[l] có kích thước (m, 1)",
      "W^[l] có kích thước (n^[l], n^[l]); b^[l] có kích thước (n^[l], n^[l])"
    ],
    "answer": 0,
    "explanation": "Theo quy ước chuẩn của Andrew Ng và lý thuyết Deep Learning: Z^[l] = W^[l] * A^[l-1] + b^[l]. Để nhân được với A^[l-1] (n^[l-1] x m) cho ra Z^[l] (n^[l] x m), W^[l] bắt buộc phải có kích thước (n^[l], n^[l-1]) và b^[l] có kích thước (n^[l], 1).",
    "slideRef": "Slide Chương 6, Trang 19-21"
  },
  {
    "id": 378,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Quy tắc cốt lõi trong thuật toán Lan truyền ngược (Backpropagation) để tính đạo hàm riêng của hàm mất mát theo trọng số ở các tầng ẩn sâu là gì?",
    "options": [
      "Quy tắc L'Hopital",
      "Quy tắc Chuỗi (Chain Rule) trong giải tích vi phân nhiều biến",
      "Quy tắc Cramer giải hệ phương trình",
      "Định lý Bayes"
    ],
    "answer": 1,
    "explanation": "Backpropagation áp dụng Quy tắc Chuỗi (Chain Rule) để tính đạo hàm dL/dw_ij bằng cách nhân liên tiếp các đạo hàm cục bộ từ tầng ra ngược về tầng ẩn: dL/dw = (dL/da) * (da/dz) * (dz/dw).",
    "slideRef": "Slide Chương 6, Trang 43-45"
  },
  {
    "id": 379,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Trong tầng đầu ra sử dụng hàm kích hoạt Softmax kết hợp hàm mất mát Categorical Cross-Entropy, đạo hàm của hàm mất mát đối với biến logit z_i có dạng rút gọn cực kỳ đẹp mắt là gì?",
    "options": [
      "dL / dz_i = y_hat_i - y_i",
      "dL / dz_i = y_hat_i * y_i",
      "dL / dz_i = (y_hat_i - y_i)^2",
      "dL / dz_i = 1 / (y_hat_i - y_i)"
    ],
    "answer": 0,
    "explanation": "Khi kết hợp Softmax với Categorical Cross-Entropy (tương tự như Sigmoid với Binary Cross-Entropy), các thành phần phức tạp triệt tiêu nhau hoàn hảo, cho ra gradient: dL/dz_i = y_hat_i - y_i (chính là hiệu số giữa xác suất dự đoán và nhãn thật one-hot).",
    "slideRef": "Slide Chương 6, Trang 46-48"
  },
  {
    "id": 380,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Tại sao KHÔNG ĐƯỢC khởi tạo tất cả các trọng số trong mạng nơ-ron bằng 0 (Zero Initialization)?",
    "options": [
      "Vì làm máy tính bị chia cho 0",
      "Vì gây ra lỗi Phá vỡ tính đối xứng (Symmetry Breaking Failure): tất cả các nơ-ron trong cùng một tầng ẩn sẽ nhận cùng một tín hiệu đầu vào, cho ra cùng một kích hoạt và cùng một gradient, khiến chúng học hoàn toàn giống hệt nhau như 1 nơ-ron duy nhất",
      "Vì hàm ReLU không tính được số 0",
      "Vì làm hàm mất mát biến thành số âm"
    ],
    "answer": 1,
    "explanation": "Nếu khởi tạo mọi w = 0, tất cả nơ-ron trong tầng ẩn đều đối xứng hoàn toàn. Dù huấn luyện bao nhiêu epoch, chúng cũng cập nhật y hệt nhau, mạng sâu nhiều nơ-ron bị thoái hóa tương đương với một mạng chỉ có đúng 1 nơ-ron trên mỗi tầng.",
    "slideRef": "Slide Chương 6, Trang 60-62"
  },
  {
    "id": 381,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Phương pháp Khởi tạo Xavier / Glorot (Xavier Initialization) được thiết kế tối ưu cho mạng nơ-ron sử dụng các hàm kích hoạt nào?",
    "options": [
      "Hàm Sigmoid và Tanh (các hàm có tính đối xứng quanh 0 hoặc bão hòa 2 đầu)",
      "Hàm ReLU và Leaky ReLU",
      "Hàm Heaviside",
      "Chỉ dùng cho hồi quy tuyến tính"
    ],
    "answer": 0,
    "explanation": "Xavier Glorot (2010) thiết kế phương sai trọng số Var(W) = 2 / (n_in + n_out) dựa trên giả định hàm kích hoạt là tuyến tính hoặc đối xứng quanh 0 (như Tanh), giúp giữ cho phương sai kích hoạt và phương sai gradient không đổi qua các tầng.",
    "slideRef": "Slide Chương 6, Trang 61-63"
  },
  {
    "id": 382,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Phương pháp Khởi tạo He / Kaiming (He Initialization) đề xuất phương sai trọng số Var(W) = 2 / n_in để giải quyết vấn đề gì của hàm ReLU?",
    "options": [
      "Vì ReLU triệt tiêu một nửa giá trị kích hoạt (miền z < 0 bị đưa về 0), khiến phương sai của tín hiệu bị giảm đi một nửa qua mỗi tầng; do đó cần nhân đôi phương sai khởi tạo (2 / n_in) để bù trừ",
      "Để nơ-ron không bao giờ bị âm",
      "Để tăng tốc độ tính toán ma trận",
      "Để ép tất cả bias về 0"
    ],
    "answer": 0,
    "explanation": "Kaiming He (2015) chỉ ra rằng do ReLU gọt bỏ 50% tín hiệu âm, phương sai đầu ra của tầng bị giảm đi 1/2. Để giữ phương sai tín hiệu ổn định qua các tầng sâu, công thức He nhân hệ số 2 vào tử số: Var(W) = 2 / n_in.",
    "slideRef": "Slide Chương 6, Trang 63-65"
  },
  {
    "id": 383,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Kỹ thuật 'Cắt ngưỡng đạo hàm' (Gradient Clipping) thường được áp dụng nhằm giải quyết vấn đề bệnh lý nào trong quá trình huấn luyện mạng nơ-ron sâu?",
    "options": [
      "Bùng nổ đạo hàm (Exploding Gradient), ngăn chặn gradient tăng vọt quá lớn làm trọng số bị NaN / vô cùng",
      "Triệt tiêu đạo hàm (Vanishing Gradient)",
      "Quá khớp trên tập kiểm thử",
      "Chết nơ-ron ReLU"
    ],
    "answer": 0,
    "explanation": "Gradient Clipping giới hạn độ lớn chuẩn của gradient (||g|| <= threshold). Nếu ||g|| vượt ngưỡng, nó được chuẩn hóa tỉ lệ co lại: g <- g * (threshold / ||g||). Kỹ thuật này ngăn chặn hiện tượng Exploding Gradient phá hỏng trọng số mô hình.",
    "slideRef": "Slide Chương 6, Trang 66-67"
  },
  {
    "id": 384,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Kích thước Mini-batch (Batch Size B) trong huấn luyện mạng nơ-ron thường được chọn là lũy thừa của 2 (ví dụ 32, 64, 128, 256) vì lý do kỹ thuật nào?",
    "options": [
      "Vì thuật toán Gradient Descent bắt buộc batch size phải là số chẵn",
      "Vì kiến trúc phần cứng của GPU và bộ nhớ chia sẻ được thiết kế tối ưu hóa song song tốt nhất khi dữ liệu có kích thước là bội số lũy thừa của 2 (SIMD / CUDA cores)",
      "Vì giúp hàm mất mát đạt giá trị 0 nhanh hơn",
      "Vì quy định của ngôn ngữ Python"
    ],
    "answer": 1,
    "explanation": "Các kiến trúc GPU (như NVIDIA Tensor Cores) có các luồng tính toán warp 32 threads. Kích thước lũy thừa của 2 giúp tận dụng 100% dung lượng phần cứng song song, tránh lãng phí chu kỳ xử lý.",
    "slideRef": "Slide Chương 6, Trang 50-52"
  },
  {
    "id": 385,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Ý tưởng vật lý của thuật toán Tối ưu hóa có Xung lượng (Momentum Optimizer) trong Gradient Descent là gì?",
    "options": [
      "Mỗi bước cập nhật trọng số nhớ lại một phần hướng di chuyển của các bước trước đó (như một hòn bi có quán tính lăn xuống dốc), giúp vượt qua các điểm yên ngựa (saddle points) và triệt tiêu dao động ngang ở thung lũng hẹp",
      "Giảm tốc độ học sau mỗi 10 vòng lặp",
      "Xóa ngẫu nhiên một nửa gradient",
      "Đổi dấu trọng số khi gặp dốc"
    ],
    "answer": 0,
    "explanation": "Công thức Momentum: v_t = γ * v_{t-1} + η * g_t, w = w - v_t. Vận tốc v_t tích lũy động lượng từ quá khứ, giúp mô hình lướt nhanh dọc theo rãnh dốc chính và triệt tiêu dao động dích dắc qua lại hai bên thành dốc.",
    "slideRef": "Slide Chương 6, Trang 53-55"
  },
  {
    "id": 386,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Nhược điểm lớn nhất của thuật toán tối ưu hóa AdaGrad khiến nó ít được sử dụng trong mạng nơ-ron sâu là gì?",
    "options": [
      "AdaGrad đòi hỏi tính ma trận Hessian bậc 2",
      "Đại lượng tích lũy bình phương gradient G_t = sum(g_k^2) liên tục tăng qua mọi bước lặp, khiến tốc độ học hiệu dụng η / sqrt(G_t + ε) giảm đơn điệu về 0 quá sớm làm mạng ngừng học trước khi đến cực tiểu",
      "AdaGrad không hỗ trợ Mini-batch",
      "AdaGrad luôn làm mô hình phân kỳ"
    ],
    "answer": 1,
    "explanation": "Vì G_t cộng dồn bình phương gradient từ đầu epoch đến cuối, mẫu số tăng liên tục không bao giờ giảm. Tốc độ học bị thu nhỏ dần cho đến khi tắt ngấm (Learning rate vanishes), khiến mạng bị kẹt lại.",
    "slideRef": "Slide Chương 6, Trang 55-57"
  },
  {
    "id": 387,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Thuật toán RMSProp đã khắc phục nhược điểm tắt ngấm tốc độ học của AdaGrad bằng cải tiến nào?",
    "options": [
      "Bỏ hoàn toàn việc tính bình phương gradient",
      "Thay thế tổng cộng dồn bằng Trung bình trượt có trọng số phân rã theo hàm mũ (Exponential Moving Average - EMA) của bình phương gradient: v_t = β * v_{t-1} + (1 - β) * g_t^2",
      "Cố định tốc độ học là hằng số",
      "Tăng kích thước mạng nơ-ron lên gấp đôi"
    ],
    "answer": 1,
    "explanation": "RMSProp chỉ lưu giữ lịch sử bình phương gradient trong một khoảng thời gian gần đây nhờ hệ số suy giảm β (thường 0.9). Nhờ đó mẫu số không bị phình to vô hạn, tốc độ học thích nghi linh hoạt tăng giảm theo độ dốc cục bộ.",
    "slideRef": "Slide Chương 6, Trang 56-58"
  },
  {
    "id": 388,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Tại sao trong thuật toán Adam (Adaptive Moment Estimation), bước Hiệu chỉnh độ lệch (Bias Correction) m_hat_t = m_t / (1 - β1^t) và v_hat_t = v_t / (1 - β2^t) lại đặc biệt quan trọng?",
    "options": [
      "Để giảm thiểu sai số dấu phẩy động",
      "Vì m_0 và v_0 được khởi tạo bằng 0, nên ở các bước đầu tiên (t nhỏ), các giá trị ước lượng m_t và v_t bị chệch nghiêm trọng về phía 0; công thức chia cho (1 - β^t) giúp kéo ước lượng về giá trị không chệch",
      "Để loại bỏ hoàn toàn siêu tham số learning rate",
      "Để ép trọng số về dạng số nguyên"
    ],
    "answer": 1,
    "explanation": "Khi khởi tạo m_0 = 0, ở t=1: m_1 = (1 - 0.9) * g_1 = 0.1 * g_1 (bị bé hơn thực tế 10 lần!). Nhờ hiệu chỉnh: m_hat_1 = (0.1 * g_1) / (1 - 0.9^1) = 0.1 * g_1 / 0.1 = g_1, giúp mô hình có bước nhảy chuẩn xác ngay từ bước đầu tiên.",
    "slideRef": "Slide Chương 6, Trang 58-60"
  },
  {
    "id": 389,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Kỹ thuật Dropout (Srivastava et al. 2014) hoạt động như thế nào trong quá trình Huấn luyện (Training) và Suy luận (Inference)?",
    "options": [
      "Trong lúc train, ngẫu nhiên tắt (gán bằng 0) một tỷ lệ p nơ-ron ở mỗi mini-batch; Trong lúc inference (test), bật TẤT CẢ nơ-ron nhưng nhân đầu ra với (1 - p) (hoặc dùng Inverted Dropout chia cho 1-p ngay lúc train)",
      "Tắt vĩnh viễn p nơ-ron cho đến hết đời mô hình",
      "Chỉ tắt các nơ-ron ở tầng đầu vào",
      "Trong lúc inference tắt nhiều nơ-ron hơn lúc train"
    ],
    "answer": 0,
    "explanation": "Dropout ngăn chặn các nơ-ron phụ thuộc cùng thích nghi (Co-adaptation). Mỗi bước train, một tập con nơ-ron ngẫu nhiên bị tắt đi, buộc mạng phải học các biểu diễn bền bỉ. Khi suy luận, bật 100% nơ-ron để tận dụng sức mạnh ensemble của toàn bộ mạng.",
    "slideRef": "Slide Chương 6, Trang 68-70"
  },
  {
    "id": 390,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Lợi ích cốt lõi của kỹ thuật Chuẩn hóa theo lô (Batch Normalization - Ioffe & Szegedy 2015) là gì?",
    "options": [
      "Chuẩn hóa đầu vào của từng tầng về mean=0, var=1 trên mỗi mini-batch, kèm 2 tham số có thể học γ (scale) và β (shift); giúp ổn định phân bố kích hoạt, cho phép dùng learning rate lớn hơn nhiều và đẩy nhanh tốc độ hội tụ",
      "Loại bỏ hoàn toàn sự cần thiết của hàm kích hoạt phi tuyến",
      "Giúp mạng nơ-ron không cần dữ liệu huấn luyện",
      "Biến mạng MLP thành mạng nơ-ron hồi quy RNN"
    ],
    "answer": 0,
    "explanation": "Batch Normalization giải quyết hiện tượng Trôi dạt hiệp biến nội tại (Internal Covariate Shift). Bằng cách chuẩn hóa từng mini-batch và học 2 tham số scale γ và shift β, BatchNorm giúp bề mặt tối ưu hóa trơn tru hơn nhiều, cho phép hội tụ nhanh gấp nhiều lần.",
    "slideRef": "Slide Chương 6, Trang 71-73"
  },
  {
    "id": 391,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Kỹ thuật Dừng sớm (Early Stopping) trong huấn luyện mạng nơ-ron hoạt động dựa trên tiêu chí nào?",
    "options": [
      "Dừng khi Training Loss giảm về 0",
      "Theo dõi hàm mất mát hoặc độ chính xác trên tập Thẩm định (Validation Set); dừng huấn luyện khi Validation Loss ngừng cải thiện và bắt đầu tăng liên tục sau một số epoch quy định (patience)",
      "Dừng đúng ở epoch thứ 100 trong mọi trường hợp",
      "Dừng khi máy tính bị nóng"
    ],
    "answer": 1,
    "explanation": "Khi mô hình bắt đầu Overfitting, Training Loss tiếp tục giảm nhưng Validation Loss bắt đầu quay đầu tăng lên. Early Stopping ngắt quá trình train đúng thời điểm mô hình đạt đỉnh phong độ trên Validation set và lưu lại trọng số tốt nhất đó.",
    "slideRef": "Slide Chương 6, Trang 74-75"
  },
  {
    "id": 392,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Kỹ thuật Chính quy hóa Suy giảm Trọng số (L2 Weight Decay) ảnh hưởng như thế nào đến công thức cập nhật trọng số trong Gradient Descent?",
    "options": [
      "Không ảnh hưởng gì đến trọng số",
      "Sau mỗi bước cập nhật, trọng số w bị nhân với một hệ số co (1 - η * λ / m) < 1 trước khi trừ đi gradient; tức là trọng số liên tục bị co nhẹ về 0 ở mỗi bước",
      "Ép tất cả trọng số w_i về đúng bằng 0 như Lasso",
      "Làm tăng độ lớn trọng số w lên gấp đôi"
    ],
    "answer": 1,
    "explanation": "Đạo hàm của hàm mất mát có L2: dJ/dw = dJ_0/dw + (λ/m)*w. Bước cập nhật: w <- w - η * [ dJ_0/dw + (λ/m)*w ] = w * (1 - η*λ/m) - η * dJ_0/dw. Do (1 - η*λ/m) < 1, trọng số bị suy giảm (decay) dần về 0, ngăn cản việc trọng số phình to quá mức.",
    "slideRef": "Slide Chương 6, Trang 67-68"
  },
  {
    "id": 393,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Một mạng MLP có đầu vào 4 chiều, tầng ẩn 1 có 5 nơ-ron, tầng đầu ra có 2 nơ-ron. Giả sử KHÔNG CÓ Bias ở bất kỳ tầng nào. Tổng số trọng số w của mạng này là bao nhiêu?",
    "options": [
      "30 trọng số",
      "37 trọng số",
      "20 trọng số",
      "10 trọng số"
    ],
    "answer": 0,
    "explanation": "Tầng ẩn 1: 4 * 5 = 20 trọng số. Tầng đầu ra: 5 * 2 = 10 trọng số. Vì bài toán giả thiết KHÔNG CÓ bias nên tổng số tham số đúng bằng 20 + 10 = 30 trọng số.",
    "slideRef": "Slide Chương 6, Trang 16-17"
  },
  {
    "id": 394,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Hàm kích hoạt ELU (Exponential Linear Unit) cải tiến hơn Leaky ReLU ở điểm nào?",
    "options": [
      "Đạo hàm luôn bằng 0 ở mọi miền",
      "ELU sử dụng đường cong trơn dạng hàm mũ f(z) = α * (e^z - 1) khi z < 0, giúp đạo hàm trơn liên tục tại 0 và giá trị trung bình kích hoạt gần 0 hơn, tăng tốc độ hội tụ",
      "ELU không bao giờ cho ra giá trị âm",
      "ELU chỉ dùng cho bài toán 1 chiều"
    ],
    "answer": 1,
    "explanation": "Khác với khúc cua gãy góc của Leaky ReLU, ELU có đường cong mượt mà tiệm cận -α khi z -> -∞. Đường cong trơn này giúp gradient biến thiên mượt mà và chống ồn tốt hơn.",
    "slideRef": "Slide Chương 6, Trang 37-38"
  },
  {
    "id": 395,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Hàm kích hoạt GELU (Gaussian Error Linear Unit) - được sử dụng làm chuẩn mực trong các mô hình Transformers như BERT và GPT - hoạt động dựa trên nguyên lý nào?",
    "options": [
      "Nhân đầu vào x với hàm phân phối tích lũy của phân phối chuẩn tắc: GELU(x) = x * Φ(x)",
      "Lấy giá trị tuyệt đối của x",
      "Chia x cho 100",
      "Làm tròn x thành số nguyên"
    ],
    "answer": 0,
    "explanation": "GELU cân nhắc xác suất một nơ-ron được 'giữ lại' dựa trên phân phối chuẩn: x * P(X <= x) = x * Φ(x). Nó tạo ra một phiên bản mượt mà của ReLU và đã chứng minh hiệu quả vượt trội trong hầu hết các mô hình ngôn ngữ lớn hiện đại.",
    "slideRef": "Slide Chương 6, Trang 38-39"
  },
  {
    "id": 396,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Trong bài toán hồi quy (Regression) dự đoán giá trị liên tục, nơ-ron ở tầng đầu ra (Output Layer) của mạng MLP thường sử dụng hàm kích hoạt nào và hàm mất mát nào?",
    "options": [
      "Kích hoạt Tuyến tính (Linear / Identity: f(z) = z) kết hợp hàm mất mát Sai số bình phương trung bình (MSE hoặc MAE)",
      "Kích hoạt Softmax kết hợp Categorical Cross-Entropy",
      "Kích hoạt Sigmoid kết hợp Binary Cross-Entropy",
      "Kích hoạt ReLU kết hợp Hinge Loss"
    ],
    "answer": 0,
    "explanation": "Trong bài toán hồi quy, biến mục tiêu y có thể nhận bất kỳ giá trị số thực nào (-∞, +∞). Do đó tầng ra bắt buộc phải dùng hàm kích hoạt tuyến tính f(z) = z (không chặn miền giá trị) kết hợp hàm mất mát MSE hoặc MAE.",
    "slideRef": "Slide Chương 6, Trang 40-42"
  },
  {
    "id": 397,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Trong bài toán phân loại đa nhãn (Multi-label Classification - một mẫu có thể đồng thời thuộc về nhiều lớp khác nhau), tầng đầu ra cần thiết kế như thế nào?",
    "options": [
      "Dùng 1 nơ-ron Softmax duy nhất",
      "Dùng K nơ-ron đầu ra, MỖI nơ-ron sử dụng độc lập hàm kích hoạt SIGMOID kết hợp hàm mất mát Binary Cross-Entropy riêng lẻ cho từng lớp",
      "Dùng hàm Softmax cho tất cả K nơ-ron",
      "Chỉ dùng 1 nơ-ron Tuyến tính"
    ],
    "answer": 1,
    "explanation": "Softmax ép tổng xác suất các lớp bằng 1 (chỉ chọn đúng 1 lớp - mutually exclusive). Trong Multi-label (ví dụ: ảnh vừa có chó vừa có mèo), mỗi nhãn là một bài toán nhị phân độc lập 'có hay không', do đó mỗi đầu ra phải dùng Sigmoid riêng rẽ.",
    "slideRef": "Slide Chương 6, Trang 42-43"
  },
  {
    "id": 398,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Khái niệm 'Skip Connection' (Đường tắt / Residual Connection) trong kiến trúc ResNet giải quyết vấn đề nan giải nào của mạng nơ-ron siêu sâu?",
    "options": [
      "Cho phép gradient chảy trực tiếp ngược về các tầng trước mà không bị suy giảm thông qua phép cộng đồng nhất F(x) + x, triệt tiêu hoàn toàn vấn đề Vanishing Gradient ở các mạng hàng trăm tầng",
      "Giúp giảm kích thước ảnh đầu vào",
      "Tự động tính ma trận nghịch đảo giả",
      "Bỏ qua bước huấn luyện"
    ],
    "answer": 0,
    "explanation": "Với kết nối cộng dồn F(x) + x, đạo hàm theo x là d/dx [F(x) + x] = dF/dx + 1. Thành phần '+ 1' đảm bảo gradient luôn có một đường cao tốc trực tiếp chảy ngược về các tầng đầu với độ lớn ít nhất bằng 1, giúp huấn luyện thành công các mạng sâu hàng trăm tầng.",
    "slideRef": "Slide Chương 6, Trang 76-78"
  },
  {
    "id": 399,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Hiện tượng 'Internal Covariate Shift' mà kỹ thuật Batch Normalization nhắm tới để giải quyết có bản chất là gì?",
    "options": [
      "Sự thay đổi liên tục phân phối xác suất đầu vào của các tầng bên trong mạng trong quá trình huấn luyện do tham số của các tầng trước đó liên tục bị cập nhật",
      "Lỗi phần cứng card màn hình khi tính ma trận",
      "Sự khác biệt giữa tập train và tập test",
      "Mô hình chuyển từ hàm Sigmoid sang ReLU"
    ],
    "answer": 0,
    "explanation": "Internal Covariate Shift là hiện tượng khi các tầng trước thay đổi trọng số, phân bố đầu vào của các tầng sau bị dịch chuyển liên tục, buộc các tầng sau phải liên tục thích nghi lại từ đầu. Batch Normalization giữ cho phân bố đầu vào của từng tầng ổn định quanh mean=0, var=1.",
    "slideRef": "Slide Chương 6, Trang 71-72"
  },
  {
    "id": 400,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Tổng kết toàn diện kiến trúc mạng MLP: Trong bài toán Phân loại chữ số viết tay MNIST (ảnh xám 28x28 = 784 điểm ảnh, 10 lớp chữ số từ 0 đến 9), cấu hình chuẩn mực của mạng MLP bao gồm:",
    "options": [
      "Tầng vào 784 nơ-ron -> Các tầng ẩn dùng kích hoạt ReLU kèm Khởi tạo He -> Tầng ra 10 nơ-ron dùng kích hoạt Softmax kết hợp hàm mất mát Categorical Cross-Entropy và tối ưu hóa bằng Adam",
      "Tầng vào 10 nơ-ron -> Tầng ẩn dùng Sigmoid -> Tầng ra 784 nơ-ron dùng Linear với MSE",
      "Tầng vào 784 nơ-ron -> Tầng ẩn dùng Tanh -> Tầng ra 1 nơ-ron dùng Binary Cross-Entropy",
      "Tầng vào 28 nơ-ron -> Không có tầng ẩn -> Tầng ra 10 nơ-ron dùng K-Means"
    ],
    "answer": 0,
    "explanation": "Đây là thiết kế kiến trúc chuẩn mực vàng: Đầu vào làm phẳng 28x28 = 784; Tầng ẩn dùng ReLU + He Normal để truyền dẫn tín hiệu tối ưu; Tầng ra 10 nơ-ron tương ứng 10 chữ số dùng Softmax + Categorical Cross-Entropy cho phân loại đa lớp; Tối ưu hóa bằng Adam để hội tụ nhanh và ổn định nhất.",
    "slideRef": "Slide Chương 6, Trang 79-80"
  }
];

// Tự động gộp vào ngân hàng câu hỏi chung
if (!window.QUESTION_BANK) {
  window.QUESTION_BANK = [];
}
window.QUESTION_BANK.push(...window.QUESTIONS_CHUONG_6);
