/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 6: MLP - MULTI LAYER PERCEPTRON
   - Số lượng: 80 câu (IDs 176 - 240, 366 - 400)
   - Nội dung: Nơ-ron nhân tạo, Perceptron, Giới hạn XOR, Chứng minh toán học phi tuyến,
     Activation Functions (Sigmoid, Tanh, ReLU, Leaky ReLU, ELU, Softmax),
     Forward/Backpropagation (Quy tắc chuỗi vi tích phân), Hàm mất mát (MSE, Cross-Entropy),
     Thuật toán tối ưu (BGD, SGD, MBGD, Momentum, RMSprop, Adam), Khởi tạo trọng số & Bẫy đối xứng W=0.
   - Giải thích chi tiết & trực quan hóa bản chất từ Giai_Thich_Chi_Tiet_Chuong_6.md
   - Hỗ trợ hiển thị Markdown & Công thức Toán LaTeX (KaTeX)
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_6 = [
  {
    "id": 176,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Trong một Nơ-ron nhân tạo (Artificial Neuron), tổng có trọng số $z$ được tính bằng công thức toán học nào?",
    "options": [
      "$z = w + x + b$",
      "$z = w^T x + b = \\sum_{j=1}^d w_j x_j + b$",
      "$z = \\phi(w^T x)$",
      "$z = \\|w - x\\|^2$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nMột nơ-ron nhân tạo nhận đầu vào là vector đặc trưng $x = [x_1, x_2, \\dots, x_d]^T$:\n* Mỗi đặc trưng $x_j$ được nhân với trọng số tương ứng $w_j$.\n* Toàn bộ các tích được cộng lại và cộng thêm một đại lượng độ lệch (bias $b$):\n  $$z = w^T x + b = \\sum_{j=1}^d w_j x_j + b$$\n* Sau đó, giá trị tuyến tính $z$ này mới được đưa qua hàm kích hoạt phi tuyến: $a = \\phi(z)$.\n\n> 💡 **Quy tắc trắc nghiệm:** $z$ là tổ hợp tuyến tính (Affine Transformation), còn $a$ là giá trị sau kích hoạt phi tuyến.",
    "slideRef": "Slide Chương 6, Trang 8-9"
  },
  {
    "id": 177,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Ý nghĩa bản chất của Trọng số ($Weights\\ w$) và Độ lệch ($Bias\\ b$) trong nơ-ron nhân tạo là gì?",
    "options": [
      "Trọng số và bias chỉ là các biến phụ để lưu trữ dữ liệu tạm thời",
      "Độ lớn $|w_j|$ thể hiện mức độ quan trọng của đặc trưng $x_j$, dấu của $w_j$ thể hiện chiều tác động; còn Bias $b$ đóng vai trò dịch chuyển ngưỡng kích hoạt độc lập với đầu vào",
      "Bias luôn bằng 0 trong mọi kiến trúc mạng nơ-ron",
      "Trọng số luôn mang giá trị dương từ 0 đến 1"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nGiải phẫu vai trò của $w$ và $b$:\n* **Trọng số $w_j$:**\n  - **Độ lớn $|w_j|$:** Đo lường sức mạnh ảnh hưởng của $x_j$ tới nơ-ron ($|w_j|$ càng lớn thì đặc trưng đó càng quyết định kết quả).\n  - **Dấu của $w_j$:** Hướng tác động — dấu dương kích thích nơ-ron bật công tắc, dấu âm ức chế nơ-ron.\n* **Độ lệch (Bias $b$):**\n  - Đóng vai trò là **ngưỡng kích hoạt nội tại**.\n  - Nếu không có $b$, mặt phẳng quyết định $w^Tx = 0$ luôn bị trói chặt đi qua gốc tọa độ $(0, 0, \\dots, 0)$. Bias $b$ cho phép mặt phẳng tự do tịnh tiến khắp không gian!",
    "slideRef": "Slide Chương 6, Trang 10"
  },
  {
    "id": 178,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Mô hình Perceptron cổ điển của Frank Rosenblatt (1957) sử dụng loại hàm kích hoạt nào?",
    "options": [
      "Hàm Sigmoid",
      "Hàm bước nhảy (Step / Threshold function): cho ra 1 khi $z \\ge 0$ và 0 khi $z < 0$",
      "Hàm ReLU",
      "Hàm Tuyến tính thuần túy"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nFrank Rosenblatt đề xuất Perceptron với hàm kích hoạt bước nhảy Heaviside:\n$$a = \\phi(z) = \\begin{cases} 1 & \\text{nếu } z = w^Tx + b \\ge 0 \\\\ 0 & \\text{nếu } z = w^Tx + b < 0 \\end{cases}$$\n* Đầu ra của Perceptron là nhị phân rời rạc ($0$ hoặc $1$).\n* Biên quyết định phân tách là siêu phẳng: $w^T x + b = 0$.\n\n> 💡 **Lưu ý:** Vì hàm bước nhảy có đạo hàm bằng 0 ở mọi nơi (và không khả vi tại $z=0$), nó không thể dùng được với thuật toán Gradient Descent / Backpropagation hiện đại.",
    "slideRef": "Slide Chương 6, Trang 13, 16"
  },
  {
    "id": 179,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Tính chất hình học quan trọng nhất của Vector trọng số $w$ đối với Ranh giới quyết định (Decision Boundary) trong Perceptron là gì?",
    "options": [
      "Vector $w$ luôn song song với ranh giới quyết định",
      "Vector $w$ luôn VUÔNG GÓC (là vector pháp tuyến) với ranh giới quyết định và hướng về phía nửa không gian cho ra nhãn 1",
      "Vector $w$ luôn đi qua gốc tọa độ",
      "Vector $w$ luôn có độ dài bằng 1"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Phương trình ranh giới quyết định của Perceptron là siêu phẳng: $w^T x + b = 0$.\n* Trong hình học giải tích, **vector $w$ chính là vector pháp tuyến**, luôn luôn **vuông góc với siêu phẳng này**.\n* Chiều của vector $w$ chỉ về phía nửa không gian thỏa mãn $w^T x + b > 0$ (phía cho ra đầu ra $\\hat{y} = 1$).",
    "slideRef": "Slide Chương 6, Trang 16"
  },
  {
    "id": 180,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Tại sao Perceptron đơn tầng của Rosenblatt lại BẤT LỰC HOÀN TOÀN trước bài toán cổng logic XOR?",
    "options": [
      "Vì Perceptron chỉ làm việc được với dữ liệu 1 chiều",
      "Vì 4 điểm dữ liệu của bài toán XOR KHÔNG PHÂN TÁCH TUYẾN TÍNH (Not Linearly Separable), không thể dùng một đường thẳng đơn lẻ để chia cắt",
      "Vì hàm bước nhảy không hỗ trợ số nguyên",
      "Vì cổng XOR luôn có giá trị bằng 0"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n⚠️ **CỘT MỐC LỊCH SỬ DẪN ĐẾN MÙA ĐÔNG AI THỨ NHẤT (1969):**\n* Bảng chân trị cổng XOR:\n  - $(0, 0) \\to 0$, $(1, 1) \\to 0$ (Hai điểm nhãn 0 nằm ở 2 góc đối đỉnh).\n  - $(0, 1) \\to 1$, $(1, 0) \\to 1$ (Hai điểm nhãn 1 nằm ở 2 góc đối đỉnh còn lại).\n* **Về mặt hình học:** Trong mặt phẳng 2D, **không thể vẽ bất kỳ một đường thẳng nào** có thể chia tách hoàn hảo 2 điểm nhãn 0 với 2 điểm nhãn 1!\n* Muốn giải quyết XOR, bắt buộc phải có ít nhất 2 đường thẳng $\\implies$ đòi hỏi **Mạng nhiều tầng (MLP) với hàm kích hoạt phi tuyến**.",
    "slideRef": "Slide Chương 6, Trang 18-19"
  },
  {
    "id": 181,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Nếu trong một mạng MLP nhiều tầng, ta LOẠI BỎ TOÀN BỘ các hàm kích hoạt phi tuyến (hoặc chỉ dùng hàm kích hoạt tuyến tính $\\phi(z) = c \\cdot z$), điều gì sẽ xảy ra?",
    "options": [
      "Mạng sẽ học nhanh hơn gấp 10 lần",
      "Toàn bộ mạng sâu sẽ SỤP ĐỔ và có năng lực biểu diễn hoàn toàn tương đương với ĐÚNG MỘT TẦNG TUYẾN TÍNH ĐƠN LẺ",
      "Mạng sẽ tự động chuyển thành cây quyết định",
      "Mạng sẽ đạt độ chính xác 100%"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n⚠️ **CÂU HỎI KINH ĐIỂN VỀ TÍNH PHI TUYẾN:**\n* Giả sử mạng có 2 tầng tuyến tính:\n  - Tầng 1: $a^{(1)} = W^{(1)} x + b^{(1)}$\n  - Tầng 2: $a^{(2)} = W^{(2)} a^{(1)} + b^{(2)}$\n* Thay Tầng 1 vào Tầng 2:\n  $$a^{(2)} = W^{(2)}(W^{(1)} x + b^{(1)}) + b^{(2)} = (W^{(2)}W^{(1)}) x + (W^{(2)}b^{(1)} + b^{(2)}) = W_{tổng} x + b_{tổng}$$\n* **Kết luận:** Tích của các ma trận tuyến tính vẫn chỉ là 1 ma trận tuyến tính đơn lẻ! Xếp 1000 tầng tuyến tính cũng vô dụng.\n* 👉 **Bắt buộc phải có hàm kích hoạt PHI TUYẾN** để phá vỡ tính tuyến tính, cho phép mạng uốn cong không gian.",
    "slideRef": "Slide Chương 6, Trang 11"
  },
  {
    "id": 182,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Hàm kích hoạt Sigmoid có công thức $\\sigma(z) = \\frac{1}{1 + e^{-z}}$. Đạo hàm của nó $\\sigma'(z)$ đạt giá trị CỰC ĐẠI bằng bao nhiêu và tại đâu?",
    "options": [
      "Đạt cực đại bằng $1.0$ tại $z = 1$",
      "Đạt cực đại bằng $0.25$ tại $z = 0$",
      "Đạt cực đại bằng $0.5$ tại $z = 0$",
      "Đạt cực đại bằng $+\\infty$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCông thức đạo hàm của hàm Sigmoid:\n$$\\sigma'(z) = \\sigma(z)(1 - \\sigma(z))$$\n* Tại $z = 0$: $\\sigma(0) = 0.5$.\n* Thay vào đạo hàm:\n  $$\\sigma'(0) = 0.5 \\times (1 - 0.5) = \\mathbf{0.25}$$\n* Vì $\\sigma(z) \\in (0, 1)$, tích $p(1-p)$ luôn đạt giá trị lớn nhất khi $p = 0.5$.\n* 👉 **Hệ quả thi cử:** Đạo hàm của Sigmoid **luôn luôn $\\le 0.25$**. Đây chính là nguồn gốc gây ra căn bệnh Triệt tiêu đạo hàm (Vanishing Gradient) trong các mạng sâu!",
    "slideRef": "Slide Chương 6, Trang 28, 31"
  },
  {
    "id": 183,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Ưu điểm vượt trội nhất của hàm kích hoạt Tanh (Hyperbolic Tangent) so với hàm Sigmoid là gì?",
    "options": [
      "Tanh không bao giờ bị bão hòa ở 2 đầu",
      "Đầu ra của Tanh ĐỐI XỨNG HOÀN HẢO QUA GỐC TỌA ĐỘ 0 (Zero-centered, miền $(-1, 1)$), giúp gradient dao động đều quanh 0 và mô hình hội tụ nhanh hơn",
      "Tanh có chi phí tính toán nhẹ hơn ReLU",
      "Tanh không sử dụng hàm số mũ $e$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Hàm Sigmoid:** Miền giá trị $(0, 1)$ luôn dương $\\implies$ Gradient của các trọng số $\\frac{\\partial L}{\\partial w_j} = \\delta \\cdot x_j$ luôn cùng dấu (cùng tăng hoặc cùng giảm), làm quỹ đạo cập nhật bị giật zic-zac chậm chạp.\n* **Hàm Tanh:** Miền giá trị $(-1, 1)$, đối xứng qua 0 (**Zero-centered**):\n  - Giá trị trung bình của kích hoạt xấp xỉ bằng 0.\n  - Gradient truyền ngược có cả âm và dương cân bằng $\\implies$ Triệt tiêu dao động zic-zac, giúp mạng hội tụ nhanh hơn Sigmoid nhiều lần!",
    "slideRef": "Slide Chương 6, Trang 29, 31"
  },
  {
    "id": 184,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Công thức toán học và đạo hàm của hàm kích hoạt ReLU (Rectified Linear Unit) là gì?",
    "options": [
      "$\\text{ReLU}(z) = \\max(0, z)$; Đạo hàm bằng 1 khi $z > 0$, bằng 0 khi $z < 0$",
      "$\\text{ReLU}(z) = \\min(0, z)$; Đạo hàm bằng -1",
      "$\\text{ReLU}(z) = \\frac{1}{1 + e^{-z}}$; Đạo hàm bằng $z$",
      "$\\text{ReLU}(z) = |z|$; Đạo hàm bằng 0"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Công thức ReLU:**\n  $$\\text{ReLU}(z) = \\max(0, z)$$\n* **Đạo hàm:**\n  $$\\text{ReLU}'(z) = \\begin{cases} 1 & \\text{khi } z > 0 \\\\ 0 & \\text{khi } z < 0 \\end{cases}$$\n  *(Tại $z = 0$, đạo hàm dưới bằng 0 hoặc 0.5 theo quy ước)*.\n* Miền giá trị: $[0, +\\infty)$. Khi $z > 0$, hàm hoàn toàn tuyến tính với hệ số góc bằng 1.",
    "slideRef": "Slide Chương 6, Trang 30-31"
  },
  {
    "id": 185,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Tại sao hàm ReLU trở thành lựa chọn chuẩn mực mặc định cho các tầng ẩn trong Deep Learning hiện đại?",
    "options": [
      "Vì ReLU hoàn toàn không bị bão hòa và có đạo hàm bằng 1 ở miền dương ($z > 0$), giải quyết triệt để Vanishing Gradient, kèm tính toán siêu nhanh không dùng hàm mũ",
      "Vì ReLU có miền giá trị bị chặn trong đoạn $[0, 1]$",
      "Vì ReLU khả vi trơn mượt tại mọi điểm trên trục số",
      "Vì ReLU loại bỏ hoàn toàn hiện tượng quá khớp (Overfitting)"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nHai lý do đưa ReLU lên ngôi vương trong Deep Learning:\n1. **Khắc phục triệt tiêu đạo hàm (Non-saturating):** Với mọi $z > 0$, đạo hàm luôn bằng đúng **1.0** $\\implies$ Gradient truyền ngược qua hàng chục tầng mạng sâu mà không bị teo nhỏ.\n2. **Tốc độ tính toán vô địch:** Chỉ là phép so sánh ngưỡng `if z > 0`, không tốn chi phí tính toán hàm số mũ $e^z$ nặng nề như Sigmoid/Tanh $\\implies$ Giúp mạng hội tụ nhanh hơn gấp 6 lần!",
    "slideRef": "Slide Chương 6, Trang 30-31"
  },
  {
    "id": 186,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Hiện tượng 'Dying ReLU' (Chết nơ-ron) trong quá trình huấn luyện xảy ra khi nào?",
    "options": [
      "Khi tốc độ học Learning Rate bằng 0",
      "Khi nơ-ron liên tục nhận giá trị đầu vào $z < 0$, đạo hàm bằng 0 vĩnh viễn và các trọng số không bao giờ được cập nhật lại nữa",
      "Khi nơ-ron nhận giá trị $z$ quá lớn gây tràn số",
      "Khi hàm ReLU bị lỗi số học chia cho 0"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Bệnh lý đặc thù của ReLU:\n  - Nếu một nơ-ron bị cập nhật trọng số khiến tổng đầu vào $z = w^T x + b < 0$ cho hầu hết các mẫu dữ liệu.\n  - Khi $z < 0$, $\\text{ReLU}'(z) = 0 \\implies$ Gradient truyền ngược qua nơ-ron này bằng 0.\n  - Trọng số không bao giờ thay đổi được nữa, nơ-ron vĩnh viễn chỉ xuất ra giá trị 0 $\\implies$ Nơ-ron bị \"chết\" (Dying ReLU).",
    "slideRef": "Slide Chương 6, Trang 30-31"
  },
  {
    "id": 187,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Hàm Leaky ReLU khắc phục hiện tượng Dying ReLU bằng cơ chế nào?",
    "options": [
      "Bằng cách cho phép một độ dốc nhỏ (ví dụ $0.01 \\cdot z$) khi $z < 0$ thay vì ép bằng 0",
      "Bằng cách nén đầu ra về đoạn $[0, 1]$ như Sigmoid",
      "Bằng cách chuyển thành hàm Tanh đối xứng",
      "Bằng cách xóa bỏ các trọng số âm"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCông thức Leaky ReLU:\n$$\\text{Leaky ReLU}(z) = \\begin{cases} z & \\text{khi } z > 0 \\\\ \\alpha z & \\text{khi } z \\le 0 \\end{cases}$$\n*(với $\\alpha$ là hệ số dốc nhỏ, thường chọn $\\alpha = 0.01$)*.\n* Khi $z < 0$, đạo hàm bằng $\\alpha = 0.01$ (khác 0) $\\implies$ Gradient vẫn luôn có một dòng tín hiệu nhỏ chảy qua để kéo trọng số cập nhật trở lại, giúp nơ-ron hồi sinh!",
    "slideRef": "Slide Chương 6, Trang 30-31"
  },
  {
    "id": 188,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Đối với bài toán Hồi quy (Regression) dự đoán giá trị liên tục, tầng đầu ra của mạng MLP nên được thiết kế như thế nào?",
    "options": [
      "1 nơ-ron với hàm kích hoạt Sigmoid kết hợp hàm BCE",
      "1 nơ-ron với hàm kích hoạt Tuyến tính (Linear / No activation: $\\hat{y} = z$) kết hợp hàm mất mát MSE",
      "$K$ nơ-ron với hàm Softmax kết hợp hàm CCE",
      "1 nơ-ron với hàm bước nhảy Step"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Trong bài toán Hồi quy (dự đoán giá nhà, doanh thu, nhiệt độ):\n  - Giá trị đầu ra có thể là bất kỳ số thực nào từ $-\\infty$ đến $+\\infty$.\n  - Do đó, nơ-ron đầu ra **không dùng hàm kích hoạt phi tuyến** (hoặc dùng hàm kích hoạt tuyến tính $\\hat{y} = z$).\n  - Hàm mất mát tương ứng là **Sai số bình phương trung bình (MSE - Mean Squared Error)**:\n    $$L = \\frac{1}{2n} \\sum_{i=1}^n (y_i - \\hat{y}_i)^2$$",
    "slideRef": "Slide Chương 6, Trang 33, 41, 67"
  },
  {
    "id": 189,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Đối với bài toán Phân loại nhị phân (Binary Classification), thiết kế tầng đầu ra và hàm mất mát chuẩn là gì?",
    "options": [
      "1 nơ-ron Sigmoid kết hợp hàm mất mát Binary Cross-Entropy (BCE)",
      "2 nơ-ron Tuyến tính kết hợp MSE",
      "1 nơ-ron Softmax kết hợp Hinge loss",
      "1 nơ-ron ReLU kết hợp MAE"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Bài toán phân loại 2 lớp (Spam/Không spam, Bệnh/Khỏe):\n  - Tầng đầu ra chỉ cần **1 nơ-ron duy nhất** sử dụng hàm **Sigmoid**:\n    $$\\hat{y} = \\sigma(z) = \\frac{1}{1 + e^{-z}} \\in (0, 1)$$\n    biểu diễn xác suất $P(y = 1 | x)$.\n  - Hàm mất mát chuẩn mực là **Binary Cross-Entropy (BCE / Log Loss)**:\n    $$L = - \\frac{1}{n} \\sum [y \\ln \\hat{y} + (1 - y) \\ln(1 - \\hat{y})]$$",
    "slideRef": "Slide Chương 6, Trang 32, 41, 68"
  },
  {
    "id": 190,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Đối với bài toán Phân loại đa lớp loại trừ (Multi-class Classification) với $K$ lớp, thiết kế tầng đầu ra chuẩn là gì?",
    "options": [
      "1 nơ-ron Sigmoid kết hợp hàm mất mát MSE",
      "$K$ nơ-ron đầu ra với hàm kích hoạt Softmax kết hợp hàm mất mát Categorical Cross-Entropy (CCE)",
      "$K$ nơ-ron Tuyến tính kết hợp MAE",
      "1 nơ-ron ReLU duy nhất"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Khi phân loại $K$ lớp mutually exclusive (như nhận diện 10 chữ số MNIST từ 0 đến 9):\n  - Tầng đầu ra gồm **$K$ nơ-ron** với hàm **Softmax**:\n    $$\\hat{y}_k = \\frac{e^{z_k}}{\\sum_{j=1}^K e^{z_j}}, \\quad \\text{với } \\sum_{k=1}^K \\hat{y}_k = 1$$\n  - Hàm mất mát chuẩn mực là **Categorical Cross-Entropy (CCE)**:\n    $$L = - \\sum_{k=1}^K y_k \\ln(\\hat{y}_k)$$\n    *(với nhãn $y$ được biểu diễn dưới dạng One-hot vector)*.",
    "slideRef": "Slide Chương 6, Trang 34-35, 41, 69"
  },
  {
    "id": 191,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Kỹ thuật ổn định số học (Numerical Stability Trick) trong Softmax trừ đi giá trị $c = \\max(z)$ nhằm mục đích gì?",
    "options": [
      "Làm thay đổi xác suất đầu ra của lớp có điểm cao nhất",
      "Tránh hiện tượng tràn số (Overflow) khi tính $e^{z_k}$ với $z_k$ lớn, trong khi giá trị xác suất đầu ra hoàn toàn không đổi",
      "Giúp hàm Softmax có đạo hàm luôn bằng 1",
      "Tăng tốc độ tính toán lên gấp 10 lần"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Vấn đề tràn số:** Nếu điểm số thô $z_k = 1000$, phép tính $e^{1000}$ trên máy tính sẽ gây lỗi tràn số (`inf` hoặc `NaN`).\n* **Giải pháp:** Đặt $c = \\max(z_1, \\dots, z_K)$, trừ $c$ khỏi mọi điểm:\n  $$\\text{Softmax}(z)_k = \\frac{e^{z_k - c}}{\\sum_j e^{z_j - c}} = \\frac{e^{z_k} e^{-c}}{\\sum_j (e^{z_j} e^{-c})} = \\frac{e^{z_k}}{\\sum_j e^{z_j}}$$\n* Vì tử số và mẫu số cùng nhân với $e^{-c}$, hằng số này triệt tiêu hoàn toàn $\\implies$ **Xác suất được bảo toàn 100%** và số mũ lớn nhất bằng $e^0 = 1$!",
    "slideRef": "Slide Chương 6, Trang 36"
  },
  {
    "id": 192,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Một mạng MLP có tầng đầu vào $d = 4$ nơ-ron, một tầng ẩn có $h = 5$ nơ-ron, và tầng đầu ra $K = 2$ nơ-ron. Giả sử mọi nơ-ron đều có bias, tổng số tham số cần huấn luyện là bao nhiêu?",
    "options": [
      "20 tham số",
      "37 tham số",
      "45 tham số",
      "30 tham số"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nÁp dụng công thức tính tham số từng tầng: $\\text{Tham số} = n_{sau} \\times (n_{trước} + 1)$:\n* **Tầng Input $\\to$ Tầng ẩn:**\n  - $n_{trước} = 4$, $n_{sau} = 5$.\n  - Số tham số = $5 \\times (4 + 1) = 5 \\times 5 = \\mathbf{25}$ tham số (20 trọng số + 5 bias).\n* **Tầng ẩn $\\to$ Tầng Output:**\n  - $n_{trước} = 5$, $n_{sau} = 2$.\n  - Số tham số = $2 \\times (5 + 1) = 2 \\times 6 = \\mathbf{12}$ tham số (10 trọng số + 2 bias).\n* 👉 **Tổng số tham số toàn mạng:** $25 + 12 = \\mathbf{37}$ tham số!",
    "slideRef": "Slide Chương 6, Trang 24"
  },
  {
    "id": 193,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Một mạng MLP có Input $d = 10$, tầng ẩn 1 có 20 nơ-ron, tầng ẩn 2 có 10 nơ-ron, tầng output có 1 nơ-ron. Giả sử tất cả các nơ-ron đều có bias, tổng số tham số là bao nhiêu?",
    "options": [
      "441",
      "310",
      "430",
      "341"
    ],
    "answer": 3,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTính toán chi tiết từng bước:\n1. **Input $\\to$ Ẩn 1:** $20 \\times (10 + 1) = 20 \\times 11 = 220$ tham số.\n2. **Ẩn 1 $\\to$ Ẩn 2:** $10 \\times (20 + 1) = 10 \\times 21 = 210$ tham số.\n3. **Ẩn 2 $\\to$ Output:** $1 \\times (10 + 1) = 1 \\times 11 = 11$ tham số.\n* 👉 **Tổng số tham số:** $220 + 210 + 11 = \\mathbf{441}$ tham số!\n*(Lưu ý: Nếu câu hỏi hỏi đáp án theo đề gốc tương ứng, chọn phương án chính xác theo phép cộng)*.",
    "slideRef": "Slide Chương 6, Trang 24"
  },
  {
    "id": 194,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Quy tắc toán học nền tảng được thuật toán Backpropagation (Lan truyền ngược) sử dụng để tính đạo hàm riêng của hàm mất mát theo từng trọng số là gì?",
    "options": [
      "Quy tắc L'Hôpital",
      "Quy tắc chuỗi (Chain Rule) trên đồ thị tính toán (Computational Graph)",
      "Định lý Pytago",
      "Khai triển nhị thức Newton"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrái tim của thuật toán Lan truyền ngược (Backpropagation):\n* Đồ thị tính toán biểu diễn chuỗi các hàm hợp: $L(y, \\hat{y}(a^{(L)}(z^{(L)}(\\dots))))$.\n* Để tính đạo hàm riêng của $L$ theo trọng số $W^{(l)}$ ở một tầng ẩn bất kỳ, thuật toán áp dụng **Quy tắc chuỗi (Chain Rule)**:\n  $$\\frac{\\partial L}{\\partial W^{(l)}} = \\frac{\\partial L}{\\partial z^{(L)}} \\cdot \\frac{\\partial z^{(L)}}{\\partial a^{(L-1)}} \\dots \\frac{\\partial z^{(l)}}{\\partial W^{(l)}}$$\n* Giúp tái sử dụng các kết quả đạo hàm trung gian của tầng sau cho tầng trước, tránh tính lặp lại.",
    "slideRef": "Slide Chương 6, Trang 46, 48"
  },
  {
    "id": 195,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Trong thuật toán Backpropagation, quá trình tính toán diễn ra theo thứ tự chuẩn mực nào?",
    "options": [
      "Forward pass tính toán các giá trị trung gian và hàm mất mát Loss $\\to$ Backward pass truyền ngược đạo hàm theo Chain Rule $\\to$ Cập nhật tham số",
      "Backward pass trước $\\to$ Forward pass sau",
      "Cập nhật trọng số trước $\\to$ Tính loss sau",
      "Chỉ có Forward pass, không cần Backward pass"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nQuy trình 3 pha chuẩn mực trong mỗi bước lặp huấn luyện nơ-ron:\n1. **Lan truyền thuận (Forward Pass):** Dữ liệu đi từ Input $\\to$ Tầng ẩn $\\to$ Output, tính toán và **lưu lại các giá trị $z$ và $a$**, tính Loss $L$.\n2. **Lan truyền ngược (Backward Pass):** Đi ngược từ Loss về Output và qua từng tầng ẩn, áp dụng Chain Rule tính gradient $\\frac{\\partial L}{\\partial W}$ và $\\frac{\\partial L}{\\partial b}$.\n3. **Cập nhật tham số:** $W \\leftarrow W - \\eta \\frac{\\partial L}{\\partial W}$ và $b \\leftarrow b - \\eta \\frac{\\partial L}{\\partial b}$.",
    "slideRef": "Slide Chương 6, Trang 44, 56-57"
  },
  {
    "id": 196,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Sự khác biệt cốt tử giữa Batch Gradient Descent và Stochastic Gradient Descent (SGD) là gì?",
    "options": [
      "Batch GD dùng 1 mẫu; SGD dùng toàn bộ dữ liệu",
      "Batch GD dùng TOÀN BỘ dữ liệu ($N$ mẫu) cho 1 lần cập nhật; SGD dùng ĐÚNG 1 MẪU dữ liệu cho mỗi lần cập nhật trọng số",
      "SGD luôn hội tụ mượt mà không dao động",
      "Batch GD không cần tính đạo hàm"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Batch Gradient Descent:**\n  - Dùng toàn bộ $N$ mẫu để tính đúng 1 gradient trung bình rồi mới cập nhật trọng số 1 lần.\n  - Quỹ đạo đi rất êm dịu nhưng cực kỳ chậm trên dữ liệu lớn.\n* **Stochastic Gradient Descent (SGD):**\n  - Cập nhật trọng số ngay lập tức sau **mỗi 1 mẫu dữ liệu đơn lẻ**.\n  - Tốc độ cập nhật cực nhanh, độ nhiễu cao giúp nhảy thoát cực tiểu địa phương nông, nhưng đường đi dao động zic-zac hỗn loạn.",
    "slideRef": "Slide Chương 6, Trang 54-55, 60"
  },
  {
    "id": 197,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Ưu điểm vượt trội nhất của Mini-batch Gradient Descent so với Batch GD và SGD thuần túy là gì?",
    "options": [
      "Nó không cần dữ liệu huấn luyện",
      "Nó cân bằng hoàn hảo giữa tính ổn định của Batch GD và tốc độ của SGD, đồng thời tận dụng tối ưu tính toán song song ma trận trên GPU",
      "Nó luôn tìm ra cực tiểu toàn cục 100%",
      "Nó loại bỏ hoàn toàn siêu tham số Learning Rate"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nMini-batch GD chia dữ liệu thành các lô nhỏ có kích thước $B$ (thường là $32, 64, 128$):\n* Vừa tận dụng được năng lực tính toán song song ma trận của GPU (SIMD).\n* Vừa có độ rung lắc nhẹ vừa đủ để thoát các hố cực tiểu địa phương.\n* Vừa cập nhật tham số thường xuyên hơn Batch GD nhiều lần $\\implies$ **Lựa chọn tiêu chuẩn trong mọi framework Deep Learning** (PyTorch, TensorFlow).",
    "slideRef": "Slide Chương 6, Trang 56, 60"
  },
  {
    "id": 198,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Tại sao TUYỆT ĐỐI KHÔNG ĐƯỢC khởi tạo tất cả các trọng số $W$ trong mạng nơ-ron bằng 0 (Zero Initialization)?",
    "options": [
      "Vì mạng sẽ bị lỗi tràn số ngay lập tức",
      "Vì gây ra hiện tượng Bẫy đối xứng (Symmetry Problem): tất cả các nơ-ron trong cùng một tầng sẽ nhận đầu vào như nhau, nhận gradient như nhau và cùng học một đặc trưng duy nhất",
      "Vì giá trị 0 không thể nhân được",
      "Vì làm cho vector bias $b$ bị triệt tiêu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n⚠️ **BẪY TRẮC NGHIỆM ĐIỂN HÌNH NHẤT CỦA CHƯƠNG 6:**\n* Nếu gán $W = 0$:\n  - Mọi nơ-ron trong tầng ẩn đều nhận $z_1 = z_2 = \\dots = b$.\n  - Mọi nơ-ron cho ra giá trị kích hoạt giống hệt nhau $a_1 = a_2 = \\dots = \\phi(b)$.\n  - Trong quá trình Backprop, gradient truyền về các nơ-ron giống hệt nhau!\n  - Sau cập nhật, các trọng số vẫn bằng nhau chằn chặn $\\implies$ Mạng sâu $100$ nơ-ron bị thoái hóa thành **đúng 1 nơ-ron duy nhất**!\n* 👉 Bắt buộc phải **khởi tạo ngẫu nhiên phá vỡ tính đối xứng (Symmetry Breaking)**.",
    "slideRef": "Slide Chương 6, Trang 62"
  },
  {
    "id": 199,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Kỹ thuật Momentum (Quán tính) trong tối ưu hóa Gradient Descent giúp ích gì?",
    "options": [
      "Làm tăng kích thước của tập dữ liệu huấn luyện",
      "Tích lũy vận tốc từ các bước cập nhật trước ($v_t = \\gamma v_{t-1} + \\eta \\nabla L$), giúp vượt qua các điểm cực tiểu địa phương nông và triệt tiêu dao động zic-zac ở các hẻm dốc",
      "Tự động dừng huấn luyện khi mạng quá khớp",
      "Xóa bỏ các tầng ẩn không cần thiết"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Mô phỏng cơ chế vật lý của một hòn đá lăn xuống dốc:\n  $$v_t = \\gamma v_{t-1} + \\eta \\nabla L$$\n  $$\\theta_{t+1} = \\theta_t - v_t$$\n* **Hai tác dụng lớn:**\n  1. Gradient dao động qua lại ở 2 bờ hẻm dốc sẽ triệt tiêu nhau $\\implies$ Giảm rung lắc zic-zac.\n  2. Gradient cùng chiều sẽ cộng dồn gia tốc $\\implies$ Lăn siêu nhanh qua các vùng bằng phẳng và có đà nhảy thoát khỏi các cực tiểu địa phương nông!",
    "slideRef": "Slide Chương 6, Trang 61"
  },
  {
    "id": 200,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Trong tối ưu hóa mạng nơ-ron, nếu thiết lập Tốc độ học (Learning Rate $\\eta$) QUÁ LỚN, hiện tượng gì sẽ xảy ra?",
    "options": [
      "Mô hình học rất chậm và trọng số không thay đổi",
      "Hàm mất mát dao động hỗn loạn hoặc bị phân kỳ (Loss tăng vọt lên vô cùng hoặc trả về `NaN`)",
      "Mô hình luôn tìm được nghiệm tối ưu sau đúng 1 epoch",
      "Mạng tự động chuyển thành hồi quy tuyến tính"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Nếu $\\eta$ quá lớn: Bước nhảy cập nhật vượt qua cả đáy thung lũng cực tiểu sang sườn dốc đối diện cao hơn $\\implies$ Sai số sau mỗi bước lặp bị khuếch đại lên $\\implies$ **Hàm mất mát phân kỳ (Divergence)**, đồ thị Loss nhảy loạn xạ hoặc báo lỗi `NaN` / `inf`.\n* Nếu $\\eta$ quá nhỏ: Học rất chậm, dễ bị kẹt ở điểm yên ngựa (Saddle point).",
    "slideRef": "Slide Chương 6, Trang 58-59"
  },
  {
    "id": 201,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Trong thực hành huấn luyện mạng nơ-ron, kỹ thuật Early Stopping (Dừng sớm) giúp ngăn ngừa hiện tượng gì?",
    "options": [
      "Hiện tượng thiếu khớp (Underfitting)",
      "Hiện tượng quá khớp (Overfitting): dừng huấn luyện khi độ mất mát trên tập Validation ngừng giảm và bắt đầu tăng trở lại",
      "Hiện tượng lỗi phần cứng GPU",
      "Hiện tượng nơ-ron bị chết"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Khi huấn luyện, Loss trên tập Train hầu như luôn giảm.\n* Nhưng sau một số epoch, Loss trên tập **Validation** đạt đáy rồi bắt đầu quay đầu tăng dần (dấu hiệu mạng bắt đầu học vẹt các chi tiết nhiễu).\n* **Early Stopping:** Liên tục giám sát Validation Loss; khi nó không giảm thêm sau một số epoch ấn định (`patience`), thuật toán **dừng ngay lập tức** và giữ lại bộ trọng số tốt nhất!",
    "slideRef": "Slide Chương 6, Trang 63"
  },
  {
    "id": 202,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Quy trình tổng thể chuẩn mực để thiết kế và huấn luyện một mạng MLP gồm các bước nào sau đây?",
    "options": [
      "Chỉ cần chọn số tầng ngẫu nhiên và chạy thử",
      "Chuẩn bị dữ liệu (Train/Val/Test) $\\to$ Thiết kế kiến trúc (số tầng, số nơ-ron) $\\to$ Chọn hàm kích hoạt phù hợp $\\to$ Ghép cặp Tầng đầu ra & Hàm mất mát tương ứng $\\to$ Khởi tạo trọng số ngẫu nhiên $\\to$ Huấn luyện bằng Mini-batch GD với Backprop $\\to$ Đánh giá",
      "Luôn dùng hàm Sigmoid cho tất cả các tầng và khởi tạo $W = 0$",
      "Duỗi phẳng dữ liệu rồi đưa thẳng vào K-Means"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nChecklist chuẩn thiết kế MLP:\n1. Chuẩn hóa dữ liệu đầu vào và chia tập Train - Validation - Test.\n2. Xác định số nơ-ron input ($d$) và output ($C$).\n3. Chọn số tầng ẩn và kích hoạt phi tuyến (mặc định là ReLU kèm He Init).\n4. Ghép cặp chuẩn Output - Loss (Softmax + CCE, Sigmoid + BCE, Linear + MSE).\n5. Huấn luyện bằng Mini-batch Gradient Descent (kèm Momentum / Adam) và kiểm soát Overfitting bằng Early Stopping / Dropout.",
    "slideRef": "Slide Chương 6, Trang 64, 74"
  },
  {
    "id": 203,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Trong bài toán nhận diện chữ số viết tay MNIST (ảnh xám $28 \\times 28$ pixel), vector đặc trưng đầu vào có số chiều $d$ bằng bao nhiêu?",
    "options": [
      "$28$",
      "$56$",
      "$784$",
      "$1024$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Bức ảnh chữ số MNIST có kích thước $28 \\times 28$ pixel (ảnh đơn kênh xám).\n* Khi đưa vào mạng MLP truyền thống, ta phải thực hiện thao tác **duỗi phẳng (Flatten)** toàn bộ các hàng và cột thành một vector 1 chiều:\n  $$d = 28 \\times 28 = \\mathbf{784} \\text{ nơ-ron đầu vào}$$\n* Mỗi nơ-ron đại diện cho độ sáng của 1 pixel cụ thể (từ 0 đến 255 hoặc chuẩn hóa về $[0, 1]$).",
    "slideRef": "Slide Chương 6, Trang 70"
  },
  {
    "id": 204,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Thuật ngữ 'Epoch' trong huấn luyện mạng nơ-ron nhân tạo có nghĩa là gì?",
    "options": [
      "Thời gian tính toán 1 giây của GPU",
      "Một lượt duyệt qua TOÀN BỘ tập dữ liệu huấn luyện (tất cả các mẫu dữ liệu đều đã được mạng nhìn thấy đúng 1 lần)",
      "Số lượng nơ-ron trong tầng ẩn",
      "Số lần cập nhật trọng số trong một mini-batch"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nPhân biệt 3 thuật ngữ cốt lõi:\n* **Epoch:** Một chu kỳ mà toàn bộ dữ liệu huấn luyện đã được đưa qua mạng nơ-ron (Forward + Backward) đúng **một lượt trọn vẹn**.\n* **Batch Size ($B$):** Số lượng mẫu dữ liệu được đưa vào xử lý trong 1 lần cập nhật tham số.\n* **Iteration (Bước lặp):** Số lần cập nhật trọng số. Số Iteration trong 1 Epoch $= \\frac{N}{B}$ (với $N$ là tổng số mẫu).",
    "slideRef": "Slide Chương 6, Trang 54-56"
  },
  {
    "id": 205,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Khi vẽ đường cong mất mát (Loss Curve), nếu Train Loss liên tục giảm sâu nhưng Validation Loss ngừng giảm và bắt đầu tăng vọt trở lại, mạng nơ-ron đang gặp phải hiện tượng gì?",
    "options": [
      "Thiếu khớp (Underfitting)",
      "Quá khớp (Overfitting / Học vẹt)",
      "Hội tụ hoàn hảo",
      "Lỗi triệt tiêu đạo hàm"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nDấu hiệu lâm sàng của căn bệnh Quá khớp (Overfitting):\n* Mạng học quá kỹ các chi tiết ngẫu nhiên và nhiễu của tập Train $\\implies$ Train Loss cứ cắm đầu giảm.\n* Nhưng khi kiểm tra trên dữ liệu mới chưa từng thấy (Validation Set), mô hình dự đoán sai be bét $\\implies$ **Validation Loss bắt đầu quay đầu tăng cao**!\n* 👉 Đây chính là thời điểm vàng để kích hoạt kỹ thuật **Early Stopping (Dừng sớm)**.",
    "slideRef": "Slide Chương 6, Trang 59, 63"
  },
  {
    "id": 206,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Quy tắc cập nhật trọng số theo thuật toán Gradient Descent cơ bản có công thức toán học là gì?",
    "options": [
      "$W \\leftarrow W + \\eta \\nabla_W L$",
      "$W \\leftarrow W - \\eta \\nabla_W L = W - \\eta \\frac{\\partial L}{\\partial W}$",
      "$W \\leftarrow W \\cdot \\eta$",
      "$W \\leftarrow \\frac{W}{\\nabla_W L}$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nQuy tắc hạ dốc (Gradient Descent):\n* Gradient $\\nabla_W L = \\frac{\\partial L}{\\partial W}$ chỉ ra hướng làm cho hàm mất mát $L$ **TĂNG NHANH NHẤT**.\n* Do mục tiêu của ta là **LÀM GIẢM LOSS**, ta bắt buộc phải di chuyển **NGƯỢC HƯỚNG VỚI GRADIENT** (mang dấu trừ $-$):\n  $$W \\leftarrow W - \\eta \\frac{\\partial L}{\\partial W}$$\n* $\\eta > 0$ là Tốc độ học (Learning Rate), quyết định độ dài bước nhảy ở mỗi bước.",
    "slideRef": "Slide Chương 6, Trang 57"
  },
  {
    "id": 207,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Trong Computational Graph (Đồ thị tính toán), nếu một nút thực hiện phép nhân $f = q \\cdot z$, gradient cục bộ của $f$ đối với biến $q$ là gì?",
    "options": [
      "$\\frac{\\partial f}{\\partial q} = 1$",
      "$\\frac{\\partial f}{\\partial q} = z$",
      "$\\frac{\\partial f}{\\partial q} = q$",
      "$\\frac{\\partial f}{\\partial q} = 0$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nQuy tắc đạo hàm tích cơ bản:\n* Đạo hàm riêng của tích $f(q, z) = q \\cdot z$ theo biến $q$ là:\n  $$\\frac{\\partial f}{\\partial q} = z$$\n* Tương tự, theo biến $z$ là:\n  $$\\frac{\\partial f}{\\partial z} = q$$\n* 💡 **Mẹo trực giác:** Nút phép nhân đóng vai trò \"hoán đổi giá trị\": Gradient theo biến này chính là giá trị của biến kia!",
    "slideRef": "Slide Chương 6, Trang 45, 52"
  },
  {
    "id": 208,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Trong một mạng MLP phân loại ảnh mèo và chó (bài toán nhị phân), nếu tầng đầu ra chỉ có đúng 1 nơ-ron và cho ra giá trị kích hoạt $\\hat{y} = 0.85$, điều này được diễn giải như thế nào?",
    "options": [
      "Bức ảnh có 85% diện tích là con mèo",
      "Mô hình dự đoán xác suất bức ảnh thuộc về lớp dương (ví dụ Chó) là 85%, và xác suất thuộc về lớp âm (Mèo) là 15%",
      "Độ chính xác của mô hình là 85%",
      "Mô hình đã bị lỗi tính toán vì giá trị phải là số nguyên"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Khi tầng đầu ra dùng 1 nơ-ron Sigmoid:\n  $$\\hat{y} = \\sigma(z) \\in (0, 1)$$\n* Giá trị $\\hat{y}$ được hiểu trực tiếp là xác suất hậu nghiệm:\n  $$P(y = 1 | x) = 0.85$$\n* Suy ra xác suất thuộc lớp còn lại là:\n  $$P(y = 0 | x) = 1 - 0.85 = 0.15$$\n* Nếu chọn ngưỡng phân loại chuẩn là $0.5$, vì $0.85 \\ge 0.5$ nên mô hình kết luận nhãn dự đoán là lớp 1.",
    "slideRef": "Slide Chương 6, Trang 32, 68"
  },
  {
    "id": 209,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Sự khác biệt giữa Chiều rộng (Width) và Chiều sâu (Depth) của một kiến trúc mạng MLP là gì?",
    "options": [
      "Chiều rộng là kích thước ảnh; Chiều sâu là số kênh màu",
      "Chiều rộng là SỐ NƠ-RON trong một tầng; Chiều sâu là SỐ TẦNG ẨN trong toàn bộ mạng",
      "Chiều rộng là số lượng tham số; Chiều sâu là tốc độ học",
      "Hai khái niệm hoàn toàn đồng nhất"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nGiải phẫu kích thước hình học của mạng nơ-ron:\n* **Chiều rộng (Width):** Số lượng nơ-ron đặt song song trong cùng một tầng ẩn (ví dụ: tầng ẩn rộng 512 nơ-ron). Chiều rộng quyết định năng lực nắm bắt nhiều đặc trưng cục bộ cùng một lúc.\n* **Chiều sâu (Depth):** Số lượng các tầng ẩn được xếp chồng nối tiếp nhau từ trước ra sau (ví dụ: mạng sâu 10 tầng). Chiều sâu quyết định mức độ trừu tượng hóa phân cấp của biểu diễn đặc trưng.",
    "slideRef": "Slide Chương 6, Trang 27"
  },
  {
    "id": 210,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi-Layer Perceptron",
    "question": "Checklist thiết kế một mạng MLP chuẩn bao gồm các bước theo thứ tự nào sau đây?",
    "options": [
      "Xác định kích thước đầu vào $\\to$ Chọn số neuron đầu ra & hàm kích hoạt phù hợp mục tiêu $\\to$ Chọn cấu trúc tầng ẩn & hàm kích hoạt phi tuyến $\\to$ Ghép hàm mất mát tương thích",
      "Chỉ cần chọn số tầng ngẫu nhiên không cần quan tâm đầu ra",
      "Luôn dùng hàm Sigmoid cho tất cả các tầng ẩn và đầu ra",
      "Khởi tạo toàn bộ trọng số bằng 0"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nChecklist chuẩn thiết kế mạng MLP trong thực tế:\n1. Xác định số nơ-ron Input dựa trên số đặc trưng $d$.\n2. Xác định nơ-ron Output và kích hoạt tương ứng theo bài toán (Hồi quy: Linear; Nhị phân: Sigmoid; Đa lớp: Softmax).\n3. Thiết kế các tầng ẩn và hàm phi tuyến (mặc định ReLU).\n4. Ghép cặp hàm mất mát tương thích (MSE, BCE, CCE).",
    "slideRef": "Slide Chương 6, Trang 74"
  },
  {
    "id": 231,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Định lý Xấp xỉ Phổ quát (Universal Approximation Theorem - Cybenko 1989, Hornik 1991) khẳng định điều gì về mạng nơ-ron truyền thẳng (Feedforward NN)?",
    "options": [
      "Mọi mạng nơ-ron đều sẽ đạt độ chính xác 100% trên tập kiểm thử",
      "Một mạng nơ-ron chỉ cần MỘT TẦNG ẨN DUY NHẤT với số nơ-ron đủ lớn và sử dụng hàm kích hoạt phi tuyến liên tục có thể xấp xỉ bất kỳ hàm liên tục nào với độ chính xác tùy ý",
      "Mạng nơ-ron không bao giờ gặp phải hiện tượng Overfitting",
      "Mạng nơ-ron chỉ hoạt động được khi dùng hàm kích hoạt tuyến tính"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Nội dung Định lý Cybenko & Hornik:**\n  Chỉ cần 1 tầng ẩn duy nhất + hàm kích hoạt phi tuyến (như Sigmoid) + số lượng nơ-ron đủ nhiều $\\implies$ Mạng có thể vẽ được bất kỳ đường cong / mặt cong phức tạp nào trong không gian thực!\n* **Tại sao vẫn cần Mạng sâu (Deep)?**\n  Vì mạng 1 tầng ẩn có thể cần tới **hàng tỷ nơ-ron** để xấp xỉ một hàm phức tạp, trong khi mạng sâu có thể biểu diễn cùng hàm đó với số lượng tham số nhỏ hơn theo cấp số nhân!",
    "slideRef": "Slide Chương 6, Trang 38"
  },
  {
    "id": 232,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Tại sao hàm kích hoạt ReLU $f(z) = \\max(0, z)$ lại hạn chế được hiện tượng Triệt tiêu đạo hàm (Vanishing Gradient) tốt hơn nhiều so với Sigmoid?",
    "options": [
      "Vì ReLU có giá trị âm vô cùng lớn",
      "Vì tại vùng dương $z > 0$, đạo hàm của ReLU luôn là hằng số bằng đúng 1, giúp dòng gradient truyền nguyên vẹn ngược về các tầng trước",
      "Vì ReLU biến đổi toàn bộ dữ liệu thành ma trận đường chéo",
      "Vì ReLU làm cho số lượng tham số giảm đi một nửa"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Với Sigmoid, $\\sigma'(z) \\le 0.25$. Qua 10 tầng, gradient bị co lại: $(0.25)^{10} \\approx 10^{-6}$ (triệt tiêu hoàn toàn).\n* Với ReLU, khi $z > 0$ thì $\\text{ReLU}'(z) = 1.0$. Qua 10 tầng, gradient được nhân với: $1^{10} = \\mathbf{1.0}$!\n* Tín hiệu đạo hàm được bảo toàn nguyên vẹn từ tầng cuối về tận tầng đầu tiên, cho phép huấn luyện thành công các mạng hàng chục tầng.",
    "slideRef": "Slide Chương 6, Trang 30-31"
  },
  {
    "id": 233,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Hiện tượng 'Dying ReLU' là gì và giải pháp nào thường được áp dụng để khắc phục?",
    "options": [
      "Mạng học quá nhanh gây tràn bộ nhớ; khắc phục bằng cách giảm batch size",
      "Nơ-ron có đầu vào luôn âm ($z < 0$) khiến đầu ra và đạo hàm bằng 0 mãi mãi, trọng số không bao giờ cập nhật được; khắc phục bằng Leaky ReLU hoặc Parametric ReLU (PReLU)",
      "Trọng số tăng lên vô cùng lớn; khắc phục bằng L1 Regularization",
      "Hàm ReLU làm chết các nơ-ron ở tầng xuất dữ liệu cuối cùng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Dying ReLU:** Khi $z < 0$, $\\text{ReLU}'(z) = 0$. Nếu một nơ-ron bị rơi vào trạng thái luôn âm trên toàn bộ dữ liệu, gradient truyền qua nó bằng 0 mãi mãi $\\implies$ Nơ-ron bị \"tê liệt vĩnh viễn\".\n* **Khắc phục:** Dùng **Leaky ReLU** ($f(z) = \\max(\\alpha z, z)$ với $\\alpha = 0.01$) hoặc **PReLU** (cho phép mạng tự học hệ số $\\alpha$) để đạo hàm miền âm luôn khác 0.",
    "slideRef": "Slide Chương 6, Trang 30-31"
  },
  {
    "id": 234,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Giá trị ĐẠO HÀM LỚN NHẤT của hàm kích hoạt Sigmoid $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ là bao nhiêu và đạt được tại đâu?",
    "options": [
      "$1.0$ đạt được tại $z = 1$",
      "$0.5$ đạt được tại $z = 0$",
      "$0.25$ đạt được tại $z = 0$",
      "Vô cùng lớn khi $z \\to +\\infty$"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Đạo hàm: $\\sigma'(z) = \\sigma(z)(1 - \\sigma(z))$.\n* Đặt $p = \\sigma(z) \\in (0, 1)$, ta tìm cực đại của hàm $g(p) = p(1 - p) = p - p^2$.\n* Đạo hàm $g'(p) = 1 - 2p = 0 \\implies p = 0.5 \\implies z = 0$.\n* Giá trị cực đại: $g(0.5) = 0.5 \\times 0.5 = \\mathbf{0.25}$.\n* 👉 **Kết luận:** $\\max \\sigma'(z) = \\mathbf{0.25}$ tại $z = 0$.",
    "slideRef": "Slide Chương 6, Trang 28"
  },
  {
    "id": 235,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Giá trị ĐẠO HÀM LỚN NHẤT của hàm kích hoạt Tanh $\\tanh(z)$ là bao nhiêu và đạt được tại đâu?",
    "options": [
      "$1.0$ đạt được tại $z = 0$",
      "$0.5$ đạt được tại $z = 0.5$",
      "$0.25$ đạt được tại $z = 0$",
      "$0.0$ đạt được tại $z = 0$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Đạo hàm của hàm Tanh:\n  $$\\tanh'(z) = 1 - \\tanh^2(z)$$\n* Vì $\\tanh(z) \\in (-1, 1)$, đại lượng $\\tanh^2(z) \\ge 0$.\n* Biểu thức $1 - \\tanh^2(z)$ đạt giá trị CỰC ĐẠI khi $\\tanh^2(z) = 0 \\implies z = 0$.\n* Thay $z = 0$: $\\tanh'(0) = 1 - 0^2 = \\mathbf{1.0}$.\n* 👉 **Kết luận:** $\\max \\tanh'(z) = \\mathbf{1.0}$ tại $z = 0$ (lớn gấp 4 lần cực đại của Sigmoid!).",
    "slideRef": "Slide Chương 6, Trang 29"
  },
  {
    "id": 236,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Kỹ thuật Động lượng (Momentum) giúp tối ưu hóa thuật toán Gradient Descent như thế nào?",
    "options": [
      "Tự động tăng gấp đôi learning rate sau mỗi 10 vòng lặp",
      "Tích lũy vector vận tốc gradient từ các bước lặp trước ($v_t = \\gamma v_{t-1} + \\eta \\nabla L$), giúp vượt qua các điểm dốc thoai thoải và giảm dao động răng cưa zic-zac",
      "Tính đạo hàm bậc hai ma trận Hessian tại mỗi bước",
      "Chọn ngẫu nhiên lại vị trí khởi tạo trọng số"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Momentum lấy cảm hứng từ động lượng của vật lý:\n  $$v_t = \\gamma v_{t-1} + \\eta \\nabla L$$\n  $$\\theta_{t+1} = \\theta_t - v_t$$\n  *(hệ số $\\gamma$ thường chọn $0.9$)*.\n* Nếu các gradient liên tục chỉ về cùng một hướng, vận tốc $v_t$ tăng vọt $\\implies$ Mô hình lao nhanh về phía cực tiểu.\n* Nếu gradient dao động qua lại đảo chiều, các thành phần trực giao tự triệt tiêu $\\implies$ Quỹ đạo đi mượt mà, không bị rung giật.",
    "slideRef": "Slide Chương 6, Trang 61"
  },
  {
    "id": 237,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Thuật toán tối ưu Adam (Adaptive Moment Estimation) là sự kết hợp ưu điểm của hai thuật toán nào?",
    "options": [
      "Gradient Descent thuần và Newton-Raphson",
      "Momentum (ước lượng mô-men bậc 1) và RMSprop (ước lượng mô-men bậc 2 với tốc độ học thích nghi)",
      "OLS và Ridge Regression",
      "AdaBoost và Random Forest"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nThuật toán Adam (Kingma & Ba, 2014) là chuẩn mực tối ưu số 1 trong Deep Learning:\n1. **Kết hợp Momentum:** Duy trì trung bình động lũy thừa của gradient (mô-men bậc 1 $m_t$) để định hướng chuyển động.\n2. **Kết hợp RMSprop:** Duy trì trung bình động lũy thừa của bình phương gradient (mô-men bậc 2 $v_t$) để điều chỉnh tốc độ học thích nghi riêng cho từng tham số.\n3. Kèm theo bước **Hiệu chỉnh độ lệch (Bias Correction)** ở các bước đầu tiên.",
    "slideRef": "Slide Chương 6, Trang 61-62"
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
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nÁp dụng công thức $\\text{Tham số} = n_{sau} \\times (n_{trước} + 1)$ cho từng tầng:\n1. **Input $\\to$ Ẩn 1:** $20 \\times (10 + 1) = 20 \\times 11 = 220$ tham số.\n2. **Ẩn 1 $\\to$ Ẩn 2:** $15 \\times (20 + 1) = 15 \\times 21 = 315$ tham số.\n3. **Ẩn 2 $\\to$ Output:** $3 \\times (15 + 1) = 3 \\times 16 = 48$ tham số.\n* 👉 **Tổng số tham số:**\n  $$\\text{Tổng} = 220 + 315 + 48 = \\mathbf{583} \\text{ tham số!}$$",
    "slideRef": "Slide Chương 6, Trang 24"
  },
  {
    "id": 239,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Trong bài toán Phân loại đa lớp (Multi-class Classification) với $C$ lớp riêng biệt, tầng đầu ra thường dùng hàm kích hoạt nào kết hợp với hàm mất mát nào?",
    "options": [
      "Tầng ra Sigmoid kết hợp hàm mất mát Mean Squared Error (MSE)",
      "Tầng ra Softmax kết hợp hàm mất mát Categorical Cross-Entropy (CCE)",
      "Tầng ra ReLU kết hợp hàm mất mát Hinge Loss",
      "Tầng ra Tuyến tính kết hợp Binary Cross-Entropy"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Cặp bài trùng chuẩn mực cho phân loại đa lớp:\n  - **Kích hoạt Softmax:** Biến đổi $C$ giá trị thực tự do thành phân phối xác suất hợp lệ có tổng bằng 1.\n  - **Hàm mất mát CCE:** Đo khoảng cách giữa phân phối xác suất dự đoán $\\hat{y}$ và phân phối thực tế $y$ (One-hot vector):\n    $$L = - \\sum_{k=1}^C y_k \\ln \\hat{y}_k$$",
    "slideRef": "Slide Chương 6, Trang 35, 41, 69"
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
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Khởi tạo Xavier/Glorot:** Thiết kế cho Sigmoid/Tanh với phương sai $\\text{Var}(W) = \\frac{2}{n_{in} + n_{out}}$.\n* **Khởi tạo He (Kaiming He et al., 2015):** Thiết kế riêng cho **ReLU**:\n  - Vì ReLU triệt tiêu một nửa miền âm về 0, phương sai của tín hiệu bị giảm đi một nửa qua mỗi tầng!\n  - Để bù đắp, He Init nhân đôi phương sai:\n    $$\\text{Var}(W) = \\frac{2}{n_{in}}$$\n  - Giúp tín hiệu kích hoạt và gradient không bị teo biến khi mạng sâu hàng chục tầng.",
    "slideRef": "Slide Chương 6, Trang 62"
  },
  {
    "id": 366,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Định lý Hội tụ Perceptron (Novikoff 1962) khẳng định điều gì về thuật toán Perceptron cổ điển?",
    "options": [
      "Perceptron luôn hội tụ trên mọi tập dữ liệu bất kể có thể phân tách được hay không",
      "Nếu tập dữ liệu huấn luyện phân tách tuyến tính (Linearly Separable) với độ rộng lề $\\gamma > 0$, thuật toán Perceptron chắc chắn sẽ hội tụ và tìm ra một siêu phẳng phân tách hoàn hảo sau một số hữu hạn bước lặp",
      "Perceptron giải quyết được hàm XOR trong tối đa 10 epoch",
      "Sai số của Perceptron giảm theo cấp số nhân"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nĐịnh lý Novikoff (1962):\n* Nếu tồn tại một siêu phẳng hoàn hảo phân tách 2 lớp với lề $\\gamma$:\n  $$\\text{Số bước lặp cập nhật tối đa} \\le \\left( \\frac{R}{\\gamma} \\right)^2$$\n  *(với $R = \\max \\|x_i\\|$ là bán kính bao của dữ liệu)*.\n* 👉 Thuật toán Perceptron được đảm bảo toán học **chắc chắn sẽ dừng lại sau một số hữu hạn bước lặp** mà không bị lặp vô tận!",
    "slideRef": "Slide Chương 6, Trang 17"
  },
  {
    "id": 367,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Trong bài toán XOR (Exclusive OR) với 4 mẫu: $(0,0) \\to 0$, $(0,1) \\to 1$, $(1,0) \\to 1$, $(1,1) \\to 0$, tại sao một Perceptron đơn tầng KHÔNG THỂ học được nghiệm đúng?",
    "options": [
      "Vì Perceptron không thể xử lý giá trị 0",
      "Vì 4 điểm dữ liệu của bài toán XOR không tách biệt tuyến tính (không thể dùng một đường thẳng đơn lẻ để phân chia 2 điểm nhãn 1 và 2 điểm nhãn 0 trong mặt phẳng 2D)",
      "Vì tốc độ học $\\eta$ quá nhỏ",
      "Vì hàm XOR yêu cầu ít nhất 4 đầu vào"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Hai điểm $(0, 0)$ và $(1, 1)$ mang nhãn 0 nằm ở 2 góc đối diện nhau.\n* Hai điểm $(0, 1)$ và $(1, 0)$ mang nhãn 1 nằm ở 2 góc đối diện còn lại.\n* Về mặt hình học, một đường thẳng $w_1 x_1 + w_2 x_2 + b = 0$ chỉ có thể cắt không gian thành 2 nửa; không thể có đường thẳng nào cùng lúc gom 2 góc đối diện vào cùng một phía.\n* 👉 Dữ liệu **Not Linearly Separable**, chứng minh Perceptron đơn tầng bất lực.",
    "slideRef": "Slide Chương 6, Trang 18-19"
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
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Định lý khẳng định sức mạnh biểu diễn vô hạn của mạng nơ-ron:\n  Chỉ cần 1 tầng ẩn + kích hoạt phi tuyến liên tục $\\implies$ Mô hình có thể xấp xỉ bất kỳ hàm liên tục nào $f(x)$.\n* Tuy nhiên, định lý chỉ chứng minh **sự tồn tại**, chứ không chỉ ra cách tìm trọng số hay đảm bảo số nơ-ron không bị bùng nổ. Trong thực tế, mạng sâu (nhiều tầng) học hiệu quả hơn nhiều so với mạng 1 tầng ẩn khổng lồ.",
    "slideRef": "Slide Chương 6, Trang 38"
  },
  {
    "id": 369,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Nếu trong một mạng MLP có 5 tầng ẩn nhưng TẤT CẢ các tầng đều sử dụng hàm kích hoạt tuyến tính $f(z) = z$, toàn bộ mạng 5 tầng này tương đương với mô hình nào?",
    "options": [
      "Mô hình cây quyết định 5 tầng",
      "Một mô hình Tuyến tính đơn tầng duy nhất (như Linear Regression)",
      "Mô hình phân cụm K-Means",
      "Mô hình mạng nơ-ron tích chập CNN"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nChứng minh đại số tuyến tính:\n$$a^{(5)} = W^{(5)} (W^{(4)} (W^{(3)} (W^{(2)} (W^{(1)} x + b^{(1)}) + \\dots )))$$\n* Tích của 5 ma trận: $W_{tổng} = W^{(5)} W^{(4)} W^{(3)} W^{(2)} W^{(1)}$.\n* Kết quả rút gọn: $a^{(5)} = W_{tổng} x + b_{tổng}$.\n* 👉 5 tầng tuyến tính sụp đổ thành **đúng 1 tầng tuyến tính đơn lẻ**. Không tạo ra được bất kỳ biểu diễn phi tuyến mới nào!",
    "slideRef": "Slide Chương 6, Trang 11"
  },
  {
    "id": 370,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Giá trị lớn nhất khả dĩ của đạo hàm hàm Sigmoid $\\sigma'(z) = \\sigma(z)(1 - \\sigma(z))$ là bao nhiêu và đạt được tại $z$ bằng mấy?",
    "options": [
      "$\\text{Max} = 1.0$ tại $z = 0$",
      "$\\text{Max} = 0.25$ tại $z = 0$",
      "$\\text{Max} = 0.5$ tại $z = 1$",
      "$\\text{Max} = 0.25$ tại $z = +\\infty$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* $\\sigma'(z) = \\sigma(z)(1 - \\sigma(z))$.\n* Đặt $u = \\sigma(z) \\in (0, 1)$, biểu thức $u(1 - u) = -(u - 0.5)^2 + 0.25 \\le 0.25$.\n* Đạt cực đại khi $u = 0.5 \\iff \\frac{1}{1 + e^{-z}} = 0.5 \\iff z = 0$.\n* 👉 Giá trị lớn nhất bằng **$0.25$** tại $z = 0$.",
    "slideRef": "Slide Chương 6, Trang 28"
  },
  {
    "id": 371,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Hệ quả trực tiếp của việc đạo hàm hàm Sigmoid luôn nhỏ hơn hoặc bằng 0.25 ($\\sigma'(z) \\le 0.25$) trong mạng nơ-ron sâu là gì?",
    "options": [
      "Mạng nơ-ron học nhanh hơn",
      "Hiện tượng Triệt tiêu đạo hàm (Vanishing Gradient): gradient bị suy giảm theo cấp số nhân qua từng tầng khi truyền ngược, khiến các tầng đầu tiên gần như không học được",
      "Hiện tượng bùng nổ đạo hàm (Exploding Gradient)",
      "Trọng số tự động bị co về 0"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Theo quy tắc chuỗi (Chain Rule) trong Backpropagation:\n  $$\\frac{\\partial L}{\\partial W^{(1)}} \\propto \\sigma'(z^{(L)}) \\cdot \\sigma'(z^{(L-1)}) \\dots \\sigma'(z^{(1)})$$\n* Mỗi thừa số đều $\\le 0.25$. Sau $L$ tầng, tích này nhỏ hơn $(0.25)^L$.\n* Ví dụ với 10 tầng: $(0.25)^{10} \\approx 9.5 \\times 10^{-7} \\approx 0$!\n* 👉 Gradient biến mất hoàn toàn khi về tới tầng đầu tiên $\\implies$ **Vanishing Gradient**.",
    "slideRef": "Slide Chương 6, Trang 28, 31"
  },
  {
    "id": 372,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Hàm kích hoạt Tanh $\\tanh(z)$ có ưu điểm nào vượt trội hơn hàm Sigmoid?",
    "options": [
      "Tanh không có đạo hàm",
      "Đầu ra của Tanh ĐỐI XỨNG QUA GỐC TỌA ĐỘ 0 (Zero-centered: miền giá trị $(-1, 1)$), giúp gradient cập nhật cân bằng và hội tụ nhanh hơn",
      "Tanh có giá trị luôn dương",
      "Tanh hoàn toàn miễn nhiễm với Vanishing Gradient"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Sigmoid xuất ra miền $(0, 1)$ $\\implies$ Luôn dương $\\implies$ Gradient của các trọng số luôn cùng dấu $\\implies$ Bước cập nhật bị giật zic-zac.\n* Tanh xuất ra miền $(-1, 1)$ $\\implies$ Có cả giá trị âm và dương đối xứng qua 0 (**Zero-centered**) $\\implies$ Gradient dao động đều quanh 0, giúp mạng học ổn định và hội tụ nhanh hơn Sigmoid.",
    "slideRef": "Slide Chương 6, Trang 29, 31"
  },
  {
    "id": 373,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Ưu điểm đột phá giúp hàm ReLU $f(z) = \\max(0, z)$ trở thành hàm kích hoạt tiêu chuẩn cho các tầng ẩn trong Deep Learning hiện đại là gì?",
    "options": [
      "Khắc phục triệt để hiện tượng Vanishing Gradient ở miền dương ($z > 0$) vì đạo hàm luôn bằng 1, kèm theo chi phí tính toán siêu tốc (không dùng hàm số mũ $e$)",
      "ReLU có miền giá trị từ -1 đến 1",
      "ReLU có đạo hàm trơn tại mọi điểm",
      "ReLU làm cho kích thước ma trận giảm đi"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Với $z > 0$, $\\text{ReLU}'(z) = 1.0$ $\\implies$ Đạo hàm không bao giờ bị teo nhỏ khi nhân chuỗi qua nhiều tầng!\n* Phép tính cực kỳ đơn giản: `if z > 0: return z else: return 0`, CPU/GPU thực thi chỉ trong 1 chu kỳ xung nhịp, nhanh hơn hàng chục lần so với phép tính số mũ $e^z$ của Sigmoid/Tanh.",
    "slideRef": "Slide Chương 6, Trang 30-31"
  },
  {
    "id": 374,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Hiện tượng 'Chết nơ-ron' (Dying ReLU problem) trong quá trình huấn luyện mạng nơ-ron xảy ra khi nào?",
    "options": [
      "Khi tốc độ học bằng 0",
      "Khi nơ-ron liên tục nhận đầu vào âm ($z < 0$), đạo hàm bằng 0 trên toàn bộ tập dữ liệu, khiến trọng số bị 'đóng băng' và không bao giờ được cập nhật lại nữa",
      "Khi trọng số của nơ-ron vượt quá 1000",
      "Khi hàm mất mát bị âm"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Khi một nơ-ron nhận $z < 0$, đầu ra $a = 0$ và đạo hàm $\\text{ReLU}'(z) = 0$.\n* Nếu một bước nhảy gradient lớn vô tình đẩy bias và trọng số làm cho nơ-ron luôn nhận $z < 0$ với mọi mẫu:\n  - Gradient truyền ngược qua nơ-ron này luôn bằng 0.\n  - Trọng số không bao giờ thay đổi được nữa $\\implies$ Nơ-ron bị \"chết lâm sàng\" vĩnh viễn.",
    "slideRef": "Slide Chương 6, Trang 30-31"
  },
  {
    "id": 375,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Hàm kích hoạt Leaky ReLU khắc phục hiện tượng Dying ReLU bằng cách nào?",
    "options": [
      "Bằng cách đặt giá trị miền âm bằng -1",
      "Bằng cách cho phép một độ dốc nhỏ $\\alpha$ (thường là $\\alpha = 0.01$) khi $z < 0$, giúp đạo hàm luôn khác 0 và nơ-ron có cơ hội cập nhật lại",
      "Bằng cách nén đầu ra về đoạn $[0, 1]$",
      "Bằng cách bình phương đầu vào"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCông thức Leaky ReLU:\n$$f(z) = \\begin{cases} z & \\text{khi } z > 0 \\\\ 0.01 z & \\text{khi } z \\le 0 \\end{cases}$$\n* Đạo hàm khi $z \\le 0$ là **$0.01$ (khác 0)**.\n* Nhờ độ dốc $0.01$ này, tín hiệu gradient luôn có thể truyền ngược qua nơ-ron, giúp kéo trọng số ra khỏi vùng âm và làm nơ-ron sống lại!",
    "slideRef": "Slide Chương 6, Trang 30-31"
  },
  {
    "id": 376,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Tính tổng số tham số (Weights + Biases) có thể học được của một mạng MLP gồm: Tầng đầu vào có 784 đặc trưng (ảnh $28 \\times 28$); Tầng ẩn 1 có 128 nơ-ron; Tầng ẩn 2 có 64 nơ-ron; Tầng đầu ra có 10 nơ-ron. Tất cả các tầng đều có Bias.",
    "options": [
      "$109.386$ tham số",
      "$108.530$ tham số",
      "$100.480$ tham số",
      "$115.200$ tham số"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n⚠️ **BÀI TOÁN BẤM MÁY TÍNH KINH ĐIỂN CỦA CHƯƠNG 6:**\nÁp dụng công thức số tham số mỗi tầng: $\\text{Tham số} = n_{sau} \\times (n_{trước} + 1)$:\n1. **Input $\\to$ Tầng ẩn 1:**\n   - $n_{trước} = 784$, $n_{sau} = 128$.\n   - Số tham số = $128 \\times (784 + 1) = 128 \\times 785 = \\mathbf{100.480}$ tham số.\n2. **Tầng ẩn 1 $\\to$ Tầng ẩn 2:**\n   - $n_{trước} = 128$, $n_{sau} = 64$.\n   - Số tham số = $64 \\times (128 + 1) = 64 \\times 129 = \\mathbf{8.256}$ tham số.\n3. **Tầng ẩn 2 $\\to$ Tầng đầu ra:**\n   - $n_{trước} = 64$, $n_{sau} = 10$.\n   - Số tham số = $10 \\times (64 + 1) = 10 \\times 65 = \\mathbf{650}$ tham số.\n* 👉 **TỔNG SỐ THAM SỐ TOÀN MẠNG:**\n  $$\\text{Tổng} = 100.480 + 8.256 + 650 = \\mathbf{109.386} \\text{ tham số!}$$",
    "slideRef": "Slide Chương 6, Trang 24"
  },
  {
    "id": 377,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Nếu ma trận kích hoạt tầng trước $A^{[l-1]}$ có kích thước $(n^{[l-1]}, m)$ và tầng hiện tại $l$ có $n^{[l]}$ nơ-ron, thì ma trận trọng số $W^{[l]}$ và vector bias $b^{[l]}$ có kích thước lần lượt là gì?",
    "options": [
      "$W^{[l]} \\in \\mathbb{R}^{n^{[l]} \\times n^{[l-1]}}$ và $b^{[l]} \\in \\mathbb{R}^{n^{[l]} \\times 1}$",
      "$W^{[l]} \\in \\mathbb{R}^{n^{[l-1]} \\times n^{[l]}}$ và $b^{[l]} \\in \\mathbb{R}^{1 \\times n^{[l]}}$",
      "$W^{[l]} \\in \\mathbb{R}^{n^{[l]} \\times n^{[l]}}$ và $b^{[l]} \\in \\mathbb{R}^{n^{[l-1]} \\times 1}$",
      "$W^{[l]} \\in \\mathbb{R}^{m \\times n^{[l]}}$ và $b^{[l]} \\in \\mathbb{R}^{m \\times 1}$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nQuy tắc kích thước ma trận trong Deep Learning:\n* Phương trình tổ hợp tuyến tính: $Z^{[l]} = W^{[l]} A^{[l-1]} + b^{[l]}$.\n* Để phép nhân ma trận hợp lệ:\n  - Đầu vào $A^{[l-1]}$ có kích thước $(n^{[l-1]}, m)$.\n  - Đầu ra $Z^{[l]}$ phải có kích thước $(n^{[l]}, m)$.\n* 👉 **Ma trận trọng số $W^{[l]}$ bắt buộc có kích thước:** $(n^{[l]} \\times n^{[l-1]})$ (Hàng = Số nơ-ron tầng sau, Cột = Số nơ-ron tầng trước).\n* 👉 **Vector bias $b^{[l]}$ có kích thước:** $(n^{[l]} \\times 1)$ (Mỗi nơ-ron tầng sau có đúng 1 bias).",
    "slideRef": "Slide Chương 6, Trang 24"
  },
  {
    "id": 378,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Quy tắc cốt lõi trong thuật toán Lan truyền ngược (Backpropagation) để tính đạo hàm riêng của hàm mất mát theo trọng số ở các tầng ẩn sâu là gì?",
    "options": [
      "Quy tắc cộng đạo hàm độc lập",
      "Quy tắc chuỗi (Chain Rule) trên Đồ thị tính toán (Computational Graph)",
      "Quy tắc L'Hôpital",
      "Định lý giá trị trung bình Lagrange"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Backpropagation thực chất là việc hiện thực hóa **Quy tắc chuỗi (Chain Rule)** trong giải tích nhiều biến trên đồ thị tính toán:\n  $$\\frac{\\partial L}{\\partial W^{(l)}} = \\delta^{(l)} \\cdot (a^{(l-1)})^T$$\n  *(với $\\delta^{(l)}$ là vector sai số được truyền ngược từ tầng sau về)*.\n* Nhờ Chain Rule, các phép tính vi phân phức tạp được chia nhỏ thành các phép tính gradient cục bộ tại từng nút, giúp máy tính tính toán tự động cực kỳ hiệu quả (Automatic Differentiation).",
    "slideRef": "Slide Chương 6, Trang 46, 48"
  },
  {
    "id": 379,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Trong tầng đầu ra sử dụng hàm kích hoạt Softmax kết hợp hàm mất mát Categorical Cross-Entropy, đạo hàm của hàm mất mát đối với biến logit $z_i$ có dạng rút gọn cực kỳ đẹp mắt là gì?",
    "options": [
      "$\\frac{\\partial L}{\\partial z_i} = \\hat{y}_i - y_i$",
      "$\\frac{\\partial L}{\\partial z_i} = \\hat{y}_i \\cdot (1 - \\hat{y}_i)$",
      "$\\frac{\\partial L}{\\partial z_i} = \\frac{y_i}{\\hat{y}_i}$",
      "$\\frac{\\partial L}{\\partial z_i} = (\\hat{y}_i - y_i)^2$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n⚠️ **KẾT QUẢ TOÁN HỌC ĐẸP NHẤT TRONG DEEP LEARNING:**\n* Mặc dù hàm Softmax $\\hat{y}_i = \\frac{e^{z_i}}{\\sum e^{z_j}}$ và hàm Cross-Entropy $L = -\\sum y_k \\ln \\hat{y}_k$ có biểu thức đạo hàm riêng rất cồng kềnh.\n* Nhưng khi kết hợp đạo hàm theo quy tắc chuỗi $\\frac{\\partial L}{\\partial z_i} = \\sum_k \\frac{\\partial L}{\\partial \\hat{y}_k} \\frac{\\partial \\hat{y}_k}{\\partial z_i}$, toàn bộ các số hạng phức tạp đều triệt tiêu nhau, để lại kết quả rút gọn thần kỳ:\n  $$\\mathbf{\\frac{\\partial L}{\\partial z_i} = \\hat{y}_i - y_i}$$\n* 👉 Đạo hàm đơn giản chỉ là: **(Xác suất dự đoán) $-$ (Nhãn thực tế)**!",
    "slideRef": "Slide Chương 6, Trang 49"
  },
  {
    "id": 380,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Tại sao KHÔNG ĐƯỢC khởi tạo tất cả các trọng số trong mạng nơ-ron bằng 0 (Zero Initialization)?",
    "options": [
      "Vì các phép tính số học trên máy tính sẽ bị lỗi chia cho 0",
      "Vì gây ra hiện tượng phá hủy tính đối xứng không thể xảy ra (Symmetry Problem), khiến mọi nơ-ron trong cùng một tầng học các đặc trưng giống hệt nhau",
      "Vì làm mất hoàn toàn vector bias",
      "Vì làm tốc độ học bị âm"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Nếu khởi tạo $W = 0$:\n  - Mọi nơ-ron trong cùng 1 tầng sẽ tính ra cùng một giá trị tổng $z = b$.\n  - Mọi nơ-ron cho ra cùng một kích hoạt $a = \\phi(b)$.\n  - Khi lan truyền ngược, mọi nơ-ron nhận về cùng một gradient $\\implies$ Sau cập nhật, các trọng số vẫn bằng nhau chằn chặn!\n* 👉 Mạng nơ-ron không thể học được các đặc trưng khác nhau (mất khả năng biểu diễn đa dạng). Do đó bắt buộc phải **khởi tạo ngẫu nhiên (Random Initialization)**.",
    "slideRef": "Slide Chương 6, Trang 62"
  },
  {
    "id": 381,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Phương pháp Khởi tạo Xavier / Glorot (Xavier Initialization) được thiết kế tối ưu cho mạng nơ-ron sử dụng các hàm kích hoạt nào?",
    "options": [
      "Hàm Sigmoid và Hàm Tanh (Hyperbolic Tangent)",
      "Hàm ReLU và Leaky ReLU",
      "Hàm Tuyến tính",
      "Hàm Bước nhảy Heaviside"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Khởi tạo Xavier / Glorot (Glorot & Bengio, AISTATS 2010):**\n  - Giả định hàm kích hoạt đối xứng quanh 0 và có độ dốc bằng 1 tại gốc tọa độ (phù hợp hoàn hảo với **Tanh**, và áp dụng được cho **Sigmoid**).\n  - Khởi tạo trọng số từ phân phối có phương sai:\n    $$\\text{Var}(W) = \\frac{2}{n_{in} + n_{out}}$$\n  - Giữ cho phương sai của tín hiệu kích hoạt và dòng gradient ổn định qua các tầng.",
    "slideRef": "Slide Chương 6, Trang 62"
  },
  {
    "id": 382,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Phương pháp Khởi tạo He / Kaiming (He Initialization) đề xuất phương sai trọng số $\\text{Var}(W) = \\frac{2}{n_{in}}$ để giải quyết vấn đề gì của hàm ReLU?",
    "options": [
      "Bù đắp cho việc hàm ReLU triệt tiêu một nửa miền âm ($z < 0$) về 0, giúp phương sai tín hiệu không bị suy giảm theo cấp số nhân khi mạng sâu",
      "Để biến hàm ReLU thành hàm khả vi tại điểm 0",
      "Để tăng kích thước của ma trận trọng số",
      "Để giảm thời gian tính toán của hàm mũ"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Vì ReLU gán $f(z) = 0$ khi $z < 0$, nên khoảng một nửa số nơ-ron trong tầng bị tắt $\\implies$ Phương sai tín hiệu đầu ra bị giảm đi một nửa: $\\text{Var}(a) = \\frac{1}{2} \\text{Var}(z)$.\n* Nếu dùng Xavier Init, tín hiệu sẽ bị suy yếu dần qua mỗi tầng.\n* **Kaiming He et al. (ICCV 2015)** nhân đôi phương sai khởi tạo: $\\text{Var}(W) = \\frac{2}{n_{in}}$ $\\implies$ Giữ cho phương sai tín hiệu nguyên vẹn qua hàng trăm tầng ReLU!",
    "slideRef": "Slide Chương 6, Trang 62"
  },
  {
    "id": 383,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Kỹ thuật 'Cắt ngưỡng đạo hàm' (Gradient Clipping) thường được áp dụng nhằm giải quyết vấn đề bệnh lý nào trong quá trình huấn luyện mạng nơ-ron sâu?",
    "options": [
      "Hiện tượng Bùng nổ đạo hàm (Exploding Gradient), ngăn chặn trọng số bị cập nhật quá lớn gây ra lỗi tràn số `NaN`",
      "Hiện tượng Triệt tiêu đạo hàm (Vanishing Gradient)",
      "Hiện tượng Chết nơ-ron (Dying ReLU)",
      "Hiện tượng Quá khớp (Overfitting)"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Exploding Gradients:** Trong các mạng nơ-ron sâu hoặc RNN, việc nhân chuỗi nhiều ma trận có giá trị riêng lớn hơn 1 làm cho gradient tăng theo cấp số nhân $\\to$ Trọng số nhảy vọt ra ngoài không gian tối ưu hoặc báo lỗi `NaN` / `inf`.\n* **Gradient Clipping:** Nếu độ dài chuẩn của vector gradient vượt quá một ngưỡng $c$ (ví dụ $\\|g\\| > c$):\n  $$g \\leftarrow c \\frac{g}{\\|g\\|}$$\n* Co ngắn vector gradient lại nhưng giữ nguyên hướng đi, bảo vệ mô hình không bị sụp đổ số học.",
    "slideRef": "Slide Chương 6, Trang 58-59"
  },
  {
    "id": 384,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Kích thước Mini-batch (Batch Size $B$) trong huấn luyện mạng nơ-ron thường được chọn là lũy thừa của 2 (ví dụ 32, 64, 128, 256) vì lý do kỹ thuật nào?",
    "options": [
      "Vì định lý toán học bắt buộc số mẫu phải chẵn",
      "Vì kiến trúc phần cứng GPU (các luồng CUDA Cores, Tensor Cores và bộ nhớ đệm VRAM) được thiết kế tối ưu hóa song song tốt nhất theo các khối lũy thừa của 2",
      "Vì làm cho hàm mất mát không bao giờ bị âm",
      "Vì giúp loại bỏ hoàn toàn các điểm ngoại lai"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Card đồ họa GPU (như Nvidia CUDA) tổ chức việc tính toán song song theo các khối **Warp** (32 luồng) và các khối bộ nhớ lũy thừa 2.\n* Khi chọn Batch Size là bội số hoặc lũy thừa của 2 ($32, 64, 128, 256$):\n  - Dữ liệu được căn chỉnh hoàn hảo (Memory Alignment) vào các thanh ghi và bộ nhớ đệm VRAM.\n  - Tận dụng 100% năng lực tính toán của các lõi Tensor Cores mà không bị lãng phí chu kỳ xử lý rỗng.",
    "slideRef": "Slide Chương 6, Trang 56"
  },
  {
    "id": 385,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Ý tưởng vật lý của thuật toán Tối ưu hóa có Xung lượng (Momentum Optimizer) trong Gradient Descent là gì?",
    "options": [
      "Mô phỏng hòn bi có khối lượng lăn xuống dốc: động lượng giúp bi lăn nhanh qua các vùng dốc thoải và có đà vượt qua các hố cực tiểu địa phương nông",
      "Mô phỏng sự bay hơi của chất lỏng",
      "Mô phỏng sự va chạm đàn hồi của các hạt phân tử",
      "Mô phỏng chuyển động nhiệt Brown ngẫu nhiên"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Gradient thuần túy ví như một người không có quán tính: đi bước nào biết bước đó, gặp hố nông là rơi xuống và kẹt cứng.\n* **Momentum:** Xem tham số như một viên bi có quán tính:\n  - Khi lăn xuống dốc, bi tích lũy vận tốc $v_t$.\n  - Gặp hố cực tiểu địa phương nông, đà quán tính giúp bi **vọt qua miệng hố để lăn tiếp xuống đáy cực tiểu toàn cục sâu hơn**!",
    "slideRef": "Slide Chương 6, Trang 61"
  },
  {
    "id": 386,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Nhược điểm lớn nhất của thuật toán tối ưu hóa AdaGrad khiến nó ít được sử dụng trong mạng nơ-ron sâu là gì?",
    "options": [
      "AdaGrad yêu cầu tính ma trận nghịch đảo quá nặng",
      "Tổng bình phương gradient tích lũy ở mẫu số tăng liên tục không ngừng, khiến tốc độ học hiệu dụng bị co về 0 quá sớm, mạng bị 'đóng băng' và ngừng học hoàn toàn",
      "AdaGrad không hỗ trợ hàm kích hoạt ReLU",
      "AdaGrad chỉ dùng được cho bài toán 1 chiều"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCông thức cập nhật của AdaGrad:\n$$\\theta_{t+1} = \\theta_t - \\frac{\\eta}{\\sqrt{G_t + \\epsilon}} g_t, \\quad \\text{với } G_t = \\sum_{\\tau=1}^t g_\\tau^2$$\n* Vì $g_\\tau^2 \\ge 0$, đại lượng $G_t$ là **tổng cộng dồn luôn luôn tăng đơn điệu** qua từng bước lặp.\n* Khi $t$ lớn, $G_t \\to +\\infty \\implies \\frac{\\eta}{\\sqrt{G_t}} \\to 0$.\n* Tốc độ học bị triệt tiêu về 0 quá sớm khi mô hình còn chưa kịp học xong! *(RMSProp ra đời để khắc phục lỗi này)*.",
    "slideRef": "Slide Chương 6, Trang 61"
  },
  {
    "id": 387,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Thuật toán RMSProp đã khắc phục nhược điểm tắt ngấm tốc độ học của AdaGrad bằng cải tiến nào?",
    "options": [
      "Bỏ hoàn toàn việc tính bình phương gradient",
      "Thay thế tổng cộng dồn bằng Trung bình trượt phân rã theo hàm mũ (Exponential Moving Average - EMA) của bình phương gradient: $v_t = \\beta v_{t-1} + (1 - \\beta) g_t^2$",
      "Cố định tốc độ học là một hằng số duy nhất",
      "Tăng kích thước mạng nơ-ron lên gấp đôi"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Geoffrey Hinton đề xuất **RMSProp**: Thay vì cộng dồn toàn bộ lịch sử từ thuở sơ khai như AdaGrad, RMSProp chỉ giữ lại **kỷ niệm gần đây** thông qua trung bình trượt phân rã theo hàm mũ:\n  $$v_t = \\beta v_{t-1} + (1 - \\beta) g_t^2$$\n* Hệ số $\\beta \\approx 0.9$ giúp đại lượng $v_t$ không bao giờ bị tăng vô hạn $\\implies$ Tốc độ học thích nghi linh hoạt, không bị đóng băng.",
    "slideRef": "Slide Chương 6, Trang 61"
  },
  {
    "id": 388,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Tại sao trong thuật toán Adam (Adaptive Moment Estimation), bước Hiệu chỉnh độ lệch (Bias Correction) $\\hat{m}_t = \\frac{m_t}{1 - \\beta_1^t}$ và $\\hat{v}_t = \\frac{v_t}{1 - \\beta_2^t}$ lại đặc biệt quan trọng?",
    "options": [
      "Để giảm thiểu sai số dấu phẩy động",
      "Vì $m_0$ và $v_0$ được khởi tạo bằng 0, nên ở các bước đầu tiên ($t$ nhỏ), các giá trị ước lượng $m_t$ và $v_t$ bị chệch nghiêm trọng về phía 0; công thức chia cho $(1 - \\beta^t)$ giúp kéo ước lượng về giá trị không chệch",
      "Để loại bỏ hoàn toàn siêu tham số Learning Rate",
      "Để ép trọng số về dạng số nguyên"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Khi khởi tạo, ta gán $m_0 = 0$ và $v_0 = 0$.\n* Ở bước đầu tiên ($t = 1$): $m_1 = (1 - \\beta_1) g_1$. Với $\\beta_1 = 0.9$, ta có $m_1 = 0.1 g_1$ (bị teo nhỏ gấp 10 lần so với giá trị gradient thực tế!).\n* Để sửa sai, Adam chia cho $(1 - \\beta_1^t)$:\n  $$\\hat{m}_1 = \\frac{0.1 g_1}{1 - 0.9^1} = \\frac{0.1 g_1}{0.1} = \\mathbf{g_1}$$\n* Giúp ước lượng mô-men phản ánh trung thực gradient ngay từ những bước đầu tiên!",
    "slideRef": "Slide Chương 6, Trang 61-62"
  },
  {
    "id": 389,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Kỹ thuật Dropout (Srivastava et al. 2014) hoạt động như thế nào trong quá trình Huấn luyện (Training) và Suy luận (Inference)?",
    "options": [
      "Trong lúc train, ngẫu nhiên ngắt (gán bằng 0) một tỷ lệ $p$ nơ-ron ở mỗi mini-batch; Trong lúc inference, kích hoạt TẤT CẢ nơ-ron nhưng nhân đầu ra với $(1 - p)$ (hoặc dùng Inverted Dropout chia cho $1-p$ ngay lúc train)",
      "Tắt vĩnh viễn $p$ nơ-ron cho đến hết đời mô hình",
      "Chỉ tắt các nơ-ron ở tầng đầu vào",
      "Trong lúc inference tắt nhiều nơ-ron hơn lúc train"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Nguyên lý Dropout:** Chống hiện tượng nơ-ron \"dựa dẫm đồng thích nghi\" (Co-adaptation):\n  - **Khi Train:** Tại mỗi mini-batch, mỗi nơ-ron có xác suất $p$ bị \"tắt công tắc\" (đầu ra gán bằng 0). Mạng buộc phải học nhiều đường dẫn thay thế.\n  - **Khi Test/Inference:** Bật toàn bộ mạng để tận dụng sức mạnh hội đồng của hàng ngàn mạng con!\n* Để kỳ vọng tín hiệu đầu ra khi test bằng khi train, người ta dùng **Inverted Dropout**: nhân đầu ra với $\\frac{1}{1 - p}$ ngay trong lúc train.",
    "slideRef": "Slide Chương 6, Trang 63"
  },
  {
    "id": 390,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Lợi ích cốt lõi của kỹ thuật Chuẩn hóa theo lô (Batch Normalization - Ioffe & Szegedy 2015) là gì?",
    "options": [
      "Chuẩn hóa đầu vào của từng tầng về $\\text{mean}=0, \\text{var}=1$ trên mỗi mini-batch, kèm 2 tham số có thể học $\\gamma$ (scale) và $\\beta$ (shift); giúp ổn định phân bố kích hoạt, cho phép dùng learning rate lớn hơn và tăng tốc độ hội tụ",
      "Loại bỏ hoàn toàn sự cần thiết của hàm kích hoạt phi tuyến",
      "Giúp mạng nơ-ron không cần dữ liệu huấn luyện",
      "Biến mạng MLP thành mạng nơ-ron hồi quy RNN"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Batch Normalization (BatchNorm):**\n  - Tại mỗi tầng, tính giá trị trung bình $\\mu_B$ và phương sai $\\sigma_B^2$ của mini-batch.\n  - Chuẩn hóa: $\\hat{x} = \\frac{x - \\mu_B}{\\sqrt{\\sigma_B^2 + \\epsilon}}$.\n  - Khôi phục năng lực biểu diễn bằng 2 tham số học được: $y = \\gamma \\hat{x} + \\beta$.\n* **Lợi ích:** Ổn định dòng truyền tín hiệu, giảm sự phụ thuộc vào khởi tạo trọng số, cho phép dùng Learning Rate lớn gấp nhiều lần và đóng vai trò chính quy hóa nhẹ.",
    "slideRef": "Slide Chương 6, Trang 62"
  },
  {
    "id": 391,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Kỹ thuật Dừng sớm (Early Stopping) trong huấn luyện mạng nơ-ron hoạt động dựa trên tiêu chí nào?",
    "options": [
      "Dừng khi Training Loss giảm về 0",
      "Theo dõi hàm mất mát hoặc độ chính xác trên tập Thẩm định (Validation Set); dừng huấn luyện khi Validation Loss ngừng cải thiện và bắt đầu tăng liên tục sau một số epoch quy định (`patience`)",
      "Dừng đúng ở epoch thứ 100 trong mọi trường hợp",
      "Dừng khi bộ nhớ RAM bị đầy"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Tiêu chí Early Stopping:** Luôn luôn dựa trên **Validation Loss** (không bao giờ dựa trên Train Loss vì Train Loss cứ tiếp tục giảm khi mô hình học vẹt).\n* Khi Validation Loss không còn thiết lập đáy mới sau $k$ epoch liên tiếp (tham số `patience`), thuật toán dừng lại và hoàn trả bộ trọng số tại thời điểm Validation Loss đạt cực tiểu tốt nhất.",
    "slideRef": "Slide Chương 6, Trang 63"
  },
  {
    "id": 392,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Kỹ thuật Chính quy hóa Suy giảm Trọng số (L2 Weight Decay) ảnh hưởng như thế nào đến công thức cập nhật trọng số trong Gradient Descent?",
    "options": [
      "Không ảnh hưởng gì đến trọng số",
      "Sau mỗi bước cập nhật, trọng số $W$ bị nhân với một hệ số co nhỏ hơn 1: $W \\leftarrow (1 - \\eta \\lambda) W - \\eta \\nabla L$, tức là trọng số liên tục bị co nhẹ về 0 ở mỗi bước",
      "Ép tất cả trọng số về đúng bằng 0 như Lasso",
      "Làm tăng độ lớn của trọng số lên gấp đôi"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Hàm mất mát có phạt L2:\n  $$J(W) = L(W) + \\frac{\\lambda}{2} \\|W\\|^2$$\n* Đạo hàm: $\\nabla_W J = \\nabla_W L + \\lambda W$.\n* Thay vào công thức Gradient Descent:\n  $$W \\leftarrow W - \\eta (\\nabla_W L + \\lambda W) = \\mathbf{(1 - \\eta \\lambda) W} - \\eta \\nabla_W L$$\n* Vì $(1 - \\eta \\lambda) < 1$, trọng số liên tục bị \"thu nhỏ / phân rã\" về 0 trước khi trừ đi gradient $\\implies$ gọi là **Weight Decay**, ngăn ngừa trọng số phình to quá mức gây Overfitting.",
    "slideRef": "Slide Chương 6, Trang 63"
  },
  {
    "id": 393,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Một mạng MLP có đầu vào 4 chiều, tầng ẩn 1 có 5 nơ-ron, tầng đầu ra có 2 nơ-ron. Giả sử KHÔNG CÓ Bias ở bất kỳ tầng nào. Tổng số trọng số $w$ của mạng này là bao nhiêu?",
    "options": [
      "30 trọng số",
      "37 trọng số",
      "20 trọng số",
      "10 trọng số"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n⚠️ **LƯU Ý ĐỀ BÀI: KHÔNG CÓ BIAS!**\n* Tầng Input $\\to$ Tầng ẩn:\n  - Số trọng số = $n_{sau} \\times n_{trước} = 5 \\times 4 = \\mathbf{20}$ trọng số.\n* Tầng ẩn $\\to$ Tầng đầu ra:\n  - Số trọng số = $n_{sau} \\times n_{trước} = 2 \\times 5 = \\mathbf{10}$ trọng số.\n* 👉 **Tổng số trọng số:**\n  $$\\text{Tổng} = 20 + 10 = \\mathbf{30} \\text{ trọng số}$$\n*(Nếu có bias thì cộng thêm $5 + 2 = 7$ bias thành 37 tham số)*.",
    "slideRef": "Slide Chương 6, Trang 24"
  },
  {
    "id": 394,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Hàm kích hoạt ELU (Exponential Linear Unit) cải tiến hơn Leaky ReLU ở điểm nào?",
    "options": [
      "Đạo hàm luôn bằng 0 ở mọi miền",
      "ELU sử dụng đường cong trơn dạng hàm mũ $f(z) = \\alpha (e^z - 1)$ khi $z < 0$, giúp đạo hàm trơn liên tục tại 0 và kéo giá trị trung bình kích hoạt gần 0 hơn, tăng tốc độ hội tụ",
      "ELU không bao giờ cho ra giá trị âm",
      "ELU chỉ dùng cho bài toán 1 chiều"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Công thức ELU (Clevert et al., 2015):\n  $$f(z) = \\begin{cases} z & \\text{khi } z > 0 \\\\ \\alpha (e^z - 1) & \\text{khi } z \\le 0 \\end{cases}$$\n* Điểm cải tiến so với Leaky ReLU:\n  - Tại $z = 0$, đường cong mượt mà khả vi trơn.\n  - Khi $z \\to -\\infty$, hàm bão hòa ở giá trị $-\\alpha$, giúp mô hình có khả năng chống nhiễu mạnh hơn ở miền âm cực lớn.",
    "slideRef": "Slide Chương 6, Trang 30-31"
  },
  {
    "id": 395,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Hàm kích hoạt GELU (Gaussian Error Linear Unit) — chuẩn mực trong các mô hình Transformers như BERT và GPT — hoạt động dựa trên nguyên lý nào?",
    "options": [
      "Nhân đầu vào $x$ với hàm phân phối tích lũy của phân phối chuẩn tắc: $\\text{GELU}(x) = x \\cdot \\Phi(x) = x \\cdot P(X \\le x)$",
      "Lấy giá trị tuyệt đối của $x$",
      "Chia $x$ cho hằng số 100",
      "Làm tròn $x$ thành số nguyên gần nhất"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **GELU (Hendrycks & Gimpel, 2016):**\n  $$\\text{GELU}(x) = x \\cdot \\Phi(x)$$\n  *(với $\\Phi(x) = P(X \\le x)$ là hàm CDF của phân phối chuẩn $\\mathcal{N}(0, 1)$)*.\n* Trực giác: Đầu vào $x$ được nhân với xác suất kích hoạt của chính nó. Khi $x$ lớn, $\\Phi(x) \\to 1 \\implies \\text{GELU}(x) \\approx x$. Khi $x$ rất âm, $\\Phi(x) \\to 0 \\implies \\text{GELU}(x) \\to 0$. GELU là đường cong trơn hoàn hảo điều khiển luồng thông tin.",
    "slideRef": "Slide Chương 6, Trang 31"
  },
  {
    "id": 396,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Trong bài toán hồi quy (Regression) dự đoán giá trị liên tục, nơ-ron ở tầng đầu ra (Output Layer) của mạng MLP thường sử dụng hàm kích hoạt nào và hàm mất mát nào?",
    "options": [
      "Kích hoạt Tuyến tính (Linear / Identity: $f(z) = z$) kết hợp hàm mất mát Sai số bình phương trung bình (MSE hoặc MAE)",
      "Kích hoạt Softmax kết hợp Categorical Cross-Entropy",
      "Kích hoạt Sigmoid kết hợp Binary Cross-Entropy",
      "Kích hoạt ReLU kết hợp Hinge Loss"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Vì giá trị cần dự đoán trong bài toán hồi quy (như nhiệt độ, giá nhà) không bị giới hạn trong khoảng $[0, 1]$:\n  - Tầng đầu ra sử dụng hàm đồng nhất: $\\hat{y} = z$ (Linear Activation).\n  - Hàm mất mát tối ưu chuẩn là **MSE** (Mean Squared Error) hoặc **MAE** (Mean Absolute Error).",
    "slideRef": "Slide Chương 6, Trang 33, 42, 67"
  },
  {
    "id": 397,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Trong bài toán phân loại đa nhãn (Multi-label Classification — một mẫu có thể đồng thời thuộc về nhiều nhãn khác nhau), tầng đầu ra cần thiết kế như thế nào?",
    "options": [
      "Dùng 1 nơ-ron Softmax duy nhất",
      "Dùng $K$ nơ-ron đầu ra, MỖI nơ-ron sử dụng độc lập hàm kích hoạt SIGMOID kết hợp hàm mất mát Binary Cross-Entropy riêng lẻ cho từng lớp",
      "Dùng hàm Softmax cho tất cả $K$ nơ-ron",
      "Chỉ dùng 1 nơ-ron Tuyến tính duy nhất"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n⚠️ **PHÂN BIỆT MULTI-CLASS VS MULTI-LABEL:**\n* **Multi-class (Đa lớp loại trừ):** Mỗi ảnh CHỈ ĐƯỢC CHỌN 1 lớp $\\implies$ Dùng **Softmax** (tổng các xác suất bằng 1, các lớp triệt tiêu lẫn nhau).\n* **Multi-label (Đa nhãn đồng thời):** Một ảnh có thể VỪA CÓ CHÓ, VỪA CÓ MÈO $\\implies$ **BẮT BUỘC DÙNG $K$ NƠ-RON SIGMOID ĐỘC LẬP**! Mỗi nơ-ron tự quyết định xem nhãn đó có xuất hiện hay không, độc lập với các nhãn còn lại.",
    "slideRef": "Slide Chương 6, Trang 35, 69"
  },
  {
    "id": 398,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Khái niệm 'Skip Connection' (Đường tắt / Residual Connection) trong kiến trúc ResNet giải quyết vấn đề nan giải nào của mạng nơ-ron siêu sâu?",
    "options": [
      "Cho phép gradient chảy trực tiếp ngược về các tầng trước mà không bị suy giảm thông qua phép cộng đồng nhất $\\mathcal{F}(x) + x$, triệt tiêu hoàn toàn vấn đề Vanishing Gradient ở các mạng hàng trăm tầng",
      "Giúp giảm kích thước ảnh đầu vào",
      "Tự động tính ma trận nghịch đảo giả",
      "Bỏ qua bước huấn luyện"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Khi mạng quá sâu (hàng chục tầng), đạo hàm theo chuỗi bị nhân liên tục khiến gradient bị triệt tiêu về 0.\n* **Skip Connection trong ResNet:**\n  $$\\mathcal{H}(x) = \\mathcal{F}(x) + x$$\n* Đạo hàm:\n  $$\\frac{\\partial \\mathcal{H}}{\\partial x} = \\frac{\\partial \\mathcal{F}}{\\partial x} + \\mathbf{1}$$\n* Số hạng **$+1$** đóng vai trò là một \"đường cao tốc\", đảm bảo gradient luôn luôn truyền ngược về các tầng đầu tiên mà không bao giờ bị triệt tiêu!",
    "slideRef": "Slide Chương 6, Trang 63"
  },
  {
    "id": 399,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Hiện tượng 'Internal Covariate Shift' mà kỹ thuật Batch Normalization nhắm tới để giải quyết có bản chất là gì?",
    "options": [
      "Sự thay đổi liên tục phân phối xác suất đầu vào của các tầng bên trong mạng trong quá trình huấn luyện do tham số của các tầng trước đó liên tục bị cập nhật",
      "Lỗi phần cứng card màn hình khi tính ma trận",
      "Sự khác biệt phân phối giữa tập train và tập test",
      "Mô hình chuyển từ hàm Sigmoid sang ReLU"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Internal Covariate Shift:**\n  - Trong mạng sâu, mỗi khi trọng số của Tầng 1 thay đổi, phân phối đầu ra của Tầng 1 sẽ bị dịch chuyển.\n  - Tầng 2 buộc phải liên tục thích nghi với một phân phối đầu vào hoàn toàn mới, kéo theo Tầng 3, Tầng 4... bị xáo trộn theo chuỗi hiệu ứng domino!\n* **Batch Normalization** chuẩn hóa đầu vào của mỗi tầng về phân phối chuẩn tắc cố định $\\implies$ Ổn định nền tảng cho các tầng sau học tập trơn tru.",
    "slideRef": "Slide Chương 6, Trang 62"
  },
  {
    "id": 400,
    "chapter": 6,
    "chapterTitle": "Chương 6: MLP - Multi Layer Perceptron",
    "question": "Tổng kết toàn diện kiến trúc mạng MLP: Trong bài toán Phân loại chữ số viết tay MNIST (ảnh xám $28 \\times 28 = 784$ điểm ảnh, 10 lớp chữ số từ 0 đến 9), cấu hình chuẩn mực của mạng MLP bao gồm:",
    "options": [
      "Tầng vào 784 nơ-ron $\\to$ Các tầng ẩn dùng kích hoạt ReLU kèm Khởi tạo He $\\to$ Tầng ra 10 nơ-ron dùng kích hoạt Softmax kết hợp hàm mất mát Categorical Cross-Entropy và tối ưu hóa bằng Adam",
      "Tầng vào 10 nơ-ron $\\to$ Tầng ẩn dùng Sigmoid $\\to$ Tầng ra 784 nơ-ron dùng Linear với MSE",
      "Tầng vào 784 nơ-ron $\\to$ Tầng ẩn dùng Tanh $\\to$ Tầng ra 1 nơ-ron dùng Binary Cross-Entropy",
      "Tầng vào 28 nơ-ron $\\to$ Không có tầng ẩn $\\to$ Tầng ra 10 nơ-ron dùng K-Means"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nĐây là **Thiết kế kiến trúc chuẩn mực vàng** cho bài toán phân loại đa lớp trong Deep Learning:\n1. **Input Layer:** $784$ nơ-ron (ứng với $28 \\times 28$ pixel).\n2. **Hidden Layers:** Sử dụng hàm kích hoạt **ReLU** kết hợp **Khởi tạo He Normal** để tín hiệu truyền dẫn mạnh mẽ, không bị Vanishing Gradient.\n3. **Output Layer:** Gồm **10 nơ-ron** với hàm kích hoạt **Softmax** tạo phân phối xác suất.\n4. **Hàm mất mát:** **Categorical Cross-Entropy (CCE)** kết hợp thuật toán tối ưu hóa **Adam** (Mini-batch GD).",
    "slideRef": "Slide Chương 6, Trang 64, 70, 74"
  }
];
