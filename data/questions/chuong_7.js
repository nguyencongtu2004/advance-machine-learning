/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 7: MẠNG TÍCH CHẬP (CNN)
   - Số lượng: 40 câu (ID 401 - 440)
   - Nội dung: Động lực CNN, Local Connectivity & Weight Sharing, Conv, Stride, Padding, 
     Công thức Output Size, ReLU, Pooling, Flatten, Softmax, 5 Kiến trúc kinh điển 
     (LeNet-5, AlexNet, VGGNet, GoogLeNet, ResNet), 4 bài toán thị giác máy tính & ứng dụng.
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_7 = [
  {
    "id": 401,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Vì sao mạng nơ-ron kết nối đầy đủ (Fully Connected / MLP) gặp khó khăn lớn khi xử lý dữ liệu hình ảnh có kích thước lớn?",
    "options": [
      "MLP không thể tính toán được các hàm kích hoạt phi tuyến",
      "Bùng nổ số lượng tham số kết nối, làm mất cấu trúc không gian 2D/3D và cực kỳ dễ bị Overfitting",
      "MLP bắt buộc số lượng mẫu huấn luyện phải lớn hơn số chiều của ảnh",
      "MLP chỉ hoạt động được với ảnh thang độ xám (grayscale) 1 kênh màu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nMạng nơ-ron truyền thống (Fully Connected / MLP) bộc lộ 3 nhược điểm chí tử khi xử lý ảnh:\n1. **Bùng nổ tham số:** Mỗi pixel phải nối với mọi nơ-ron ở tầng ẩn. Một bức ảnh nhỏ $64 \\times 64 \\times 3$ nối với tầng ẩn 1.000 nơ-ron đã ngốn hơn 12 triệu tham số!\n2. **Mất thông tin không gian:** Buộc phải dàn phẳng (flatten) ảnh thành vector 1D, xé rời mối quan hệ lân cận giữa các pixel (như mắt, mũi, miệng).\n3. **Dễ Overfitting:** Tham số quá nhiều khiến mô hình học vẹt nhiễu thay vì đặc trưng tổng quát.",
    "slideRef": "Slide Chương 7, Trang 9"
  },
  {
    "id": 402,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Một ảnh màu kích thước $64 \\times 64 \\times 3$ được kết nối đầy đủ (Fully Connected) với một tầng ẩn gồm $1.000$ nơ-ron. Bỏ qua trọng số bias, số lượng tham số trọng số giữa 2 tầng này xấp xỉ là bao nhiêu?",
    "options": [
      "Khoảng 192.000 tham số",
      "Khoảng 1,2 triệu tham số",
      "Hơn 12 triệu tham số ($12.288.000$)",
      "Hơn 64 triệu tham số"
    ],
    "answer": 2,
    "explanation": "### 🎯 Công thức tính nhanh:\n* Số pixel đầu vào: $64 \\times 64 \\times 3 = 12.288$ pixel.\n* Số nơ-ron tầng ẩn: $1.000$.\n* Số lượng trọng số $W = 12.288 \\times 1.000 = 12.288.000$ (hơn 12 triệu tham số).\nĐây chính là minh chứng rõ ràng nhất cho hiện tượng **Bùng nổ tham số (Parameter Explosion)** của mạng MLP khi xử lý ảnh.",
    "slideRef": "Slide Chương 7, Trang 9"
  },
  {
    "id": 403,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Hai cơ chế cốt lõi nào giúp Mạng tích chập (CNN) giải quyết triệt để vấn đề bùng nổ tham số của MLP?",
    "options": [
      "Lan truyền ngược (Backpropagation) và Tối ưu hóa Adam",
      "Kết nối cục bộ (Local Connectivity) và Chia sẻ trọng số (Weight Sharing)",
      "Chính quy hóa L1 Lasso và Cắt tỉa cây (Pruning)",
      "Phân tích thành phần chính (PCA) và Chuẩn hóa Z-score"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan:\nCNN giải quyết bài toán xử lý ảnh nhờ 2 nguyên lý thiên tài:\n1. **Kết nối cục bộ (Local Connectivity):** Mỗi nơ-ron chỉ kết nối với một vùng nhỏ lân cận của ảnh (gọi là *Vùng nhận cảm - Receptive Field*) thay vì nối toàn bộ ảnh.\n2. **Chia sẻ trọng số (Weight Sharing):** Cùng một bộ lọc (filter/kernel) được trượt trên khắp bức ảnh để tìm kiếm đặc trưng. Nhờ đó, số lượng tham số giảm đi hàng nghìn lần!",
    "slideRef": "Slide Chương 7, Trang 10"
  },
  {
    "id": 404,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Quy tắc bắt buộc về chiều sâu (depth) của bộ lọc (Filter / Kernel) trong tầng Convolution là gì?",
    "options": [
      "Chiều sâu của bộ lọc luôn bằng 1",
      "Chiều sâu của bộ lọc phải bằng số lượng lớp phân loại ở đầu ra",
      "Chiều sâu của bộ lọc phải luôn khớp hoàn toàn với chiều sâu của khối dữ liệu đầu vào",
      "Chiều sâu của bộ lọc có thể tự do lựa chọn tùy ý người lập trình"
    ],
    "answer": 2,
    "explanation": "### 🎯 Quy tắc chiều sâu (Depth Rule) - Bẫy thi kinh điển:\n> **Chiều sâu của bộ lọc (filter depth) LUÔN PHẢI BẰNG chiều sâu của khối dữ liệu đầu vào!**\n* Ví dụ: Ảnh màu RGB có 3 kênh màu (độ sâu $= 3$), thì mỗi bộ lọc kích thước $3 \\times 3$ thực chất phải có kích thước là $3 \\times 3 \\times 3$.\n* Nếu đầu vào là một khối feature map có 64 kênh, thì bộ lọc $5 \\times 5$ phải có kích thước thực tế là $5 \\times 5 \\times 64$.",
    "slideRef": "Slide Chương 7, Trang 13-14"
  },
  {
    "id": 405,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Tại mỗi vị trí bộ lọc dừng lại trên khối dữ liệu đầu vào, phép toán nào được thực hiện để tạo ra một giá trị trên bản đồ kích hoạt (Activation map)?",
    "options": [
      "Tính nghịch đảo ma trận giữa bộ lọc và vùng dữ liệu",
      "Phép nhân từng phần tử (element-wise), cộng tổng tất cả lại rồi cộng thêm một giá trị bias",
      "Tính khoảng cách Euclidean giữa bộ lọc và vùng dữ liệu",
      "Lấy giá trị lớn nhất của bộ lọc nhân với giá trị nhỏ nhất của vùng ảnh"
    ],
    "answer": 1,
    "explanation": "### 🎯 Cơ chế tích chập:\n1. Thực hiện phép nhân từng phần tử tương ứng (element-wise multiplication) giữa các trọng số trong bộ lọc và các giá trị pixel trong vùng nhận cảm.\n2. Cộng tổng (summation) tất cả các tích đó lại.\n3. Cộng thêm một hệ số chệch bias $b$.\n$$\\text{Giá trị output} = \\sum_{i,j,c} W_{i,j,c} \\cdot X_{i,j,c} + b$$\nKết quả thu được là một giá trị vô hướng duy nhất tại tọa độ đó trên feature map.",
    "slideRef": "Slide Chương 7, Trang 14"
  },
  {
    "id": 406,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Số lượng bản đồ đặc trưng (Feature Maps / Activation Maps) ở đầu ra của một tầng Convolution được quyết định bởi yếu tố nào?",
    "options": [
      "Kích thước bước nhảy (Stride)",
      "Độ rộng của viền đệm (Padding)",
      "Số lượng bộ lọc (filters) độc lập được sử dụng tại tầng đó",
      "Số kênh màu của ảnh đầu vào ban đầu"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan:\n* Mỗi bộ lọc (filter) độc lập sẽ trích xuất một loại đặc trưng riêng biệt (ví dụ filter 1 bắt cạnh ngang, filter 2 bắt góc, filter 3 bắt kết cấu tròn...).\n* Mỗi filter khi trượt hết ảnh sẽ sinh ra đúng **1 bản đồ kích hoạt (feature map) 2D**.\n* Do đó, nếu tầng Conv sử dụng $K$ bộ lọc độc lập, đầu ra sẽ là một khối tensor gồm đúng $K$ bản đồ đặc trưng xếp chồng lên nhau (chiều sâu mới $= K$).",
    "slideRef": "Slide Chương 7, Trang 13-14"
  },
  {
    "id": 407,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Công thức chuẩn xác để tính kích thước không gian đầu ra ($Output$) sau khi thực hiện phép tích chập trên ảnh kích thước $N \\times N$ với bộ lọc $F \\times F$, độ rộng padding $P$ và bước nhảy $S$ (Stride) là gì?",
    "options": [
      "$\\text{Output} = \\frac{N - F}{S} + P$",
      "$\\text{Output} = \\lfloor\\frac{N + 2P - F}{S}\\rfloor + 1$",
      "$\\text{Output} = \\frac{N + P - F}{2S} + 1$",
      "$\\text{Output} = (N + 2P - F) \\times S + 1$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Công thức vàng CNN:\n$$\\text{Output Size} = \\left\\lfloor \\frac{N + 2P - F}{S} \\right\\rfloor + 1$$\n* $N$: Kích thước cạnh đầu vào (chiều rộng hoặc chiều cao).\n* $P$: Độ rộng Padding (đệm viền mỗi bên).\n* $F$: Kích thước cạnh bộ lọc (Filter size).\n* $S$: Bước nhảy (Stride).",
    "slideRef": "Slide Chương 7, Trang 15"
  },
  {
    "id": 408,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Cho ảnh đầu vào kích thước $32 \\times 32$, áp dụng bộ lọc $5 \\times 5$, bước nhảy $Stride = 1$ và không dùng padding ($P = 0$). Kích thước không gian của bản đồ đặc trưng đầu ra là bao nhiêu?",
    "options": [
      "$27 \\times 27$",
      "$28 \\times 28$",
      "$30 \\times 30$",
      "$32 \\times 32$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bấm máy tính nhanh:\nÁp dụng công thức:\n$$\\text{Output} = \\frac{N + 2P - F}{S} + 1 = \\frac{32 + 2(0) - 5}{1} + 1 = 27 + 1 = 28$$\nVậy kích thước đầu ra là $28 \\times 28$.",
    "slideRef": "Slide Chương 7, Trang 15"
  },
  {
    "id": 409,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Kỹ thuật đệm viền bằng các số 0 (Zero-Padding) trong tầng Convolution mang lại hai lợi ích quan trọng nhất nào?",
    "options": [
      "Làm tăng tốc độ hội tụ của gradient và chống tràn số",
      "Bảo toàn kích thước không gian của dữ liệu và tránh mất mát thông tin ở các vùng rìa ảnh",
      "Tự động chuẩn hóa trung bình về 0 và phương sai về 1",
      "Giảm số lượng tham số trọng số cần huấn luyện trong bộ lọc"
    ],
    "answer": 1,
    "explanation": "### 🎯 Hai vai trò sống còn của Padding:\n1. **Bảo toàn kích thước:** Nếu không có padding, qua mỗi tầng Conv kích thước ảnh sẽ bị teo nhỏ dần, khiến mạng không thể xếp chồng nhiều tầng sâu.\n2. **Tránh mất thông tin vùng rìa:** Các pixel ở góc chỉ được filter quét qua 1 lần duy nhất, trong khi pixel ở giữa được quét nhiều lần. Padding giúp các pixel viền được tham gia tính toán đầy đủ hơn.",
    "slideRef": "Slide Chương 7, Trang 15"
  },
  {
    "id": 410,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Để bảo toàn nguyên vẹn kích thước không gian đầu ra bằng đúng đầu vào ($Output = N$) khi sử dụng bước nhảy $Stride = 1$ với bộ lọc kích thước $7 \\times 7$, ta cần đệm viền (Padding $P$) bằng bao nhiêu?",
    "options": [
      "$P = 1$",
      "$P = 2$",
      "$P = 3$",
      "$P = 4$"
    ],
    "answer": 2,
    "explanation": "### 🎯 Công thức Same Padding ($S = 1$):\n$$P = \\frac{F - 1}{2}$$\nVới bộ lọc $F = 7$:\n$$P = \\frac{7 - 1}{2} = 3$$\n* Thử lại: $\\text{Output} = \\frac{N + 2(3) - 7}{1} + 1 = N - 1 + 1 = N$ (kích thước được bảo toàn hoàn hảo).",
    "slideRef": "Slide Chương 7, Trang 15"
  },
  {
    "id": 411,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Vì sao hàm kích hoạt ReLU ($f(x) = \\max(0, x)$) trở thành lựa chọn mặc định trong các mạng CNN hiện đại thay cho Sigmoid hay Tanh?",
    "options": [
      "Vì ReLU có miền giá trị bị chặn chặt chẽ trong khoảng [-1, 1]",
      "Vì tính toán cực kỳ đơn giản, đạo hàm miền dương luôn bằng 1 giúp chống triệt tiêu đạo hàm, và thực tế giúp mạng hội tụ nhanh hơn khoảng 6 lần",
      "Vì ReLU đối xứng hoàn hảo qua gốc tọa độ (zero-centered)",
      "Vì ReLU có đạo hàm liên tục trơn tru tại mọi điểm bao gồm cả x = 0"
    ],
    "answer": 1,
    "explanation": "### 🎯 Ưu điểm vượt trội của ReLU trong CNN:\n* **Tính toán siêu nhanh:** Chỉ là phép so sánh logic `max(0, x)`.\n* **Hội tụ nhanh gấp ~6 lần:** Đã được kiểm chứng thực nghiệm từ mô hình AlexNet (2012).\n* **Không bị bão hòa ở miền dương ($x > 0$):** Đạo hàm luôn bằng 1, giúp dòng gradient lan truyền ngược xuyên suốt các tầng sâu mà không bị suy hao như Sigmoid (đạo hàm tối đa chỉ 0.25).",
    "slideRef": "Slide Chương 7, Trang 18-20"
  },
  {
    "id": 412,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Nhược điểm lớn nhất của Sigmoid và Tanh khi đặt trong các mạng nơ-ron tích chập nhiều tầng là gì?",
    "options": [
      "Chi phí tính toán quá rẻ làm giảm độ chính xác của mạng",
      "Hiện tượng bão hòa gradient: khi đầu vào có trị tuyệt đối lớn, đạo hàm tiến sát về 0 khiến các trọng số tầng trước gần như không được cập nhật",
      "Không thể phân loại được các bài toán nhị phân",
      "Làm tăng kích thước không gian của bản đồ đặc trưng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bệnh lý bão hòa Gradient:\nKhi $|x|$ lớn (rất âm hoặc rất dương), đường cong của Sigmoid và Tanh trở nên nằm ngang phẳng lì $\\implies$ gradient $\\approx 0$. Khi áp dụng quy tắc chuỗi trong lan truyền ngược, việc nhân dồn các số $\\approx 0$ khiến gradient truyền về các tầng tích chập ban đầu bị tiêu biến hoàn toàn (Vanishing Gradient).",
    "slideRef": "Slide Chương 7, Trang 20"
  },
  {
    "id": 413,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Lớp Gộp (Pooling Layer) đóng vai trò gì trong kiến trúc CNN?",
    "options": [
      "Tăng số kênh của khối dữ liệu để học thêm nhiều đặc trưng mới",
      "Giảm kích thước không gian (chiều rộng và chiều cao) của dữ liệu, giảm khối lượng tính toán và dung lượng bộ nhớ",
      "Cập nhật các trọng số học được thông qua giải thuật tối ưu hóa Adam",
      "Chuyển đổi các giá trị số thực thành phân phối xác suất tổng bằng 1"
    ],
    "answer": 1,
    "explanation": "### 🎯 Vai trò của Pooling Layer:\nPooling là thao tác giảm mẫu không gian (Spatial Downsampling):\n* Giảm độ phân giải không gian của feature map $\\implies$ giảm mạnh số phép tính và bộ nhớ RAM/GPU cho các tầng phía sau.\n* Giảm thiểu nguy cơ Overfitting do giảm số lượng kích hoạt.",
    "slideRef": "Slide Chương 7, Trang 21"
  },
  {
    "id": 414,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Lớp Pooling (ví dụ Max Pooling $2 \\times 2$) có bao nhiêu tham số học được (trọng số $W$ và bias $b$) cần huấn luyện?",
    "options": [
      "4 tham số trọng số và 1 bias cho mỗi cửa sổ",
      "Bằng số lượng kênh của khối dữ liệu đầu vào",
      "Hoàn toàn không có tham số học được (0 tham số)",
      "Tùy thuộc vào kích thước bước nhảy Stride"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bẫy thi kinh điển về Pooling:\n> **Lớp Pooling KHÔNG HỀ CÓ THAM SỐ HỌC ĐƯỢC (Parameter-free)!**\nNó chỉ là một hàm toán học định sẵn (như lấy giá trị lớn nhất trong cửa sổ hoặc lấy trung bình cộng). Không có trọng số $W$ hay độ lệch $b$ nào cần tối ưu hóa hay cập nhật trong quá trình huấn luyện.",
    "slideRef": "Slide Chương 7, Trang 21"
  },
  {
    "id": 415,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Lớp Pooling tác động như thế nào đến chiều sâu (số kênh màu / số feature maps) của khối dữ liệu đi qua nó?",
    "options": [
      "Gộp tất cả các kênh lại thành 1 kênh duy nhất",
      "Giảm một nửa số lượng kênh",
      "Giữ nguyên hoàn toàn chiều sâu (hoạt động độc lập trên từng kênh riêng biệt)",
      "Tăng gấp đôi số lượng kênh"
    ],
    "answer": 2,
    "explanation": "### 🎯 Tính chất độc lập kênh của Pooling:\nLớp Pooling thực hiện tính toán độc lập trên **từng bản đồ đặc trưng (activation map)** riêng rẽ. Nếu đầu vào có kích thước $H \\times W \\times D$, thì sau khi qua Max Pooling $2 \\times 2$ (stride 2), đầu ra sẽ có kích thước là $\\frac{H}{2} \\times \\frac{W}{2} \\times D$. Chiều sâu $D$ được giữ nguyên vẹn!",
    "slideRef": "Slide Chương 7, Trang 21"
  },
  {
    "id": 416,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Tính chất hình học quan trọng nào mà lớp Max Pooling mang lại cho mô hình CNN?",
    "options": [
      "Tính bất biến đối với các phép quay 180 độ",
      "Tính bất biến đối với các thay đổi nhỏ như tịnh tiến (translation invariance) hoặc biến dạng nhỏ của đối tượng",
      "Khả năng phục hồi lại ảnh gốc ban đầu với độ phân giải cao",
      "Tính trực giao hoàn toàn giữa các đặc trưng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Tính bất biến tịnh tiến (Translation Invariance):\nMax Pooling chỉ quan tâm đến việc *\"đặc trưng đó có xuất hiện trong vùng quan sát hay không\"* (thể hiện qua giá trị kích hoạt cực đại), chứ không quan tâm đặc trưng đó lệch sang trái hay sang phải 1 vài pixel. Nhờ đó, vật thể hơi dịch chuyển hay méo nhẹ thì đầu ra sau Max Pooling vẫn giữ nguyên giá trị lớn nhất.",
    "slideRef": "Slide Chương 7, Trang 21"
  },
  {
    "id": 417,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Thao tác làm phẳng (Flattening) trong mạng CNN có nhiệm vụ gì?",
    "options": [
      "Làm phẳng ảnh bằng cách xóa toàn bộ các kênh màu",
      "Chuyển đổi khối tensor đặc trưng 3 chiều $(H \\times W \\times D)$ thành vector 1 chiều có độ dài $H \\cdot W \\cdot D$",
      "Chuẩn hóa các giá trị pixel về đoạn [0, 1]",
      "Ép các giá trị âm trong ma trận về số 0"
    ],
    "answer": 1,
    "explanation": "### 🎯 Vai trò của Flattening:\nSau chuỗi các tầng Conv và Pooling, dữ liệu đang ở dạng khối không gian 3 chiều $(H \\times W \\times D)$. Tầng kết nối đầy đủ (Fully Connected) chỉ nhận đầu vào là vector 1 chiều. Do đó, thao tác Flattening sẽ trải phẳng toàn bộ các phần tử thành một vector 1D duy nhất có độ dài $H \\times W \\times D$.",
    "slideRef": "Slide Chương 7, Trang 23"
  },
  {
    "id": 418,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Hàm kích hoạt Softmax thường được đặt ở đâu trong kiến trúc CNN và giữ vai trò gì?",
    "options": [
      "Xen kẽ giữa các tầng tích chập để giảm số chiều không gian",
      "Đặt tại lớp cuối cùng (Output layer) để chuyển đổi các giá trị số thực thành phân phối xác suất các lớp đối tượng (tổng bằng 1)",
      "Đặt ngay sau tầng Input để chuẩn hóa giá trị pixel ảnh",
      "Đặt trong khối Pooling để tính trung bình động"
    ],
    "answer": 1,
    "explanation": "### 🎯 Hàm Softmax ở tầng Output:\nSoftmax nhận vector điểm số (logits) từ lớp Fully Connected cuối cùng và tính:\n$$P(y = k | x) = \\frac{e^{z_k}}{\\sum_{j=1}^C e^{z_j}}$$\nBiến đổi các điểm số thành xác suất hợp lệ (mỗi giá trị $\\in [0, 1]$ và tổng bằng $1$). Lớp nào có xác suất cao nhất sẽ được chọn làm nhãn dự đoán của ảnh.",
    "slideRef": "Slide Chương 7, Trang 24"
  },
  {
    "id": 419,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Kiến trúc CNN kinh điển nào được Yann LeCun đề xuất năm 1998 để nhận dạng chữ số viết tay trên các tấm séc ngân hàng và mã bưu điện?",
    "options": [
      "AlexNet",
      "VGG-16",
      "LeNet-5",
      "ResNet-50"
    ],
    "answer": 2,
    "explanation": "### 🎯 LeNet-5 (1998) - Tiên phong lịch sử:\nLeNet-5 do Yann LeCun thiết kế năm 1998 là cột mốc lịch sử đầu tiên áp dụng thành công thuật toán Lan truyền ngược (Backpropagation) trên mạng tích chập để giải quyết bài toán thực tế: nhận dạng chữ số viết tay trên séc ngân hàng (AT&T Labs).",
    "slideRef": "Slide Chương 7, Trang 27"
  },
  {
    "id": 420,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Cấu trúc cơ bản của mạng LeNet-5 (1998) gồm tổng cộng bao nhiêu lớp?",
    "options": [
      "5 lớp",
      "7 lớp (không tính tầng input)",
      "16 lớp",
      "22 lớp"
    ],
    "answer": 1,
    "explanation": "### 🎯 Cấu trúc LeNet-5:\nMạng gồm 7 lớp học được/tính toán (chuỗi `[Conv + Average Pooling]` lặp lại 2 lần, theo sau bởi các lớp Fully Connected và lớp đầu ra 10 chữ số $0-9$). Chữ số '5' trong tên gọi đại diện cho 5 tầng có trọng số chính.",
    "slideRef": "Slide Chương 7, Trang 27-28"
  },
  {
    "id": 421,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Sự kiện lịch sử nào vào năm 2012 đã đánh dấu bước ngoặt bùng nổ của Học sâu (Deep Learning) trên toàn cầu?",
    "options": [
      "Fukushima công bố mô hình Neocognitron",
      "Yann LeCun giới thiệu tập dữ liệu MNIST",
      "AlexNet vô địch áp đảo cuộc thi nhận diện ảnh quy mô lớn ImageNet (ILSVRC 2012)",
      "Google DeepMind đánh bại nhà vô địch cờ vây thế giới"
    ],
    "answer": 2,
    "explanation": "### 🎯 AlexNet và Cột mốc 2012:\nNăm 2012, mạng AlexNet (Alex Krizhevsky, Ilya Sutskever, Geoffrey Hinton) đã vô địch cuộc thi ILSVRC 2012 với mức giảm sai số kỷ lục, bỏ xa tất cả các phương pháp thị giác máy tính truyền thống hàng chục phần trăm, chính thức mở ra kỷ nguyên Deep Learning hiện đại.",
    "slideRef": "Slide Chương 7, Trang 7, 29"
  },
  {
    "id": 422,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Mô hình AlexNet (2012) gồm bao nhiêu lớp và có khoảng bao nhiêu tham số?",
    "options": [
      "7 lớp và khoảng 60.000 tham số",
      "8 lớp (5 Conv + 3 FC) và khoảng 60 triệu tham số",
      "16 lớp và khoảng 138 triệu tham số",
      "152 lớp và khoảng 25 triệu tham số"
    ],
    "answer": 1,
    "explanation": "### 🎯 Thông số AlexNet:\nAlexNet gồm 8 lớp học được (5 lớp Convolutional và 3 lớp Fully Connected), chứa khoảng 60 triệu tham số (gấp 1.000 lần so với LeNet-5).",
    "slideRef": "Slide Chương 7, Trang 29"
  },
  {
    "id": 423,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Ba cải tiến công nghệ then chốt nào đã giúp AlexNet (2012) tạo nên bước đột phá vượt bậc?",
    "options": [
      "Sử dụng Batch Normalization, Skip Connection và Adam Optimizer",
      "Sử dụng hàm kích hoạt ReLU, kỹ thuật Dropout chống Overfitting và huấn luyện song song trên GPU",
      "Sử dụng Average Pooling, hàm Sigmoid và giải thuật SVD",
      "Sử dụng khối Inception, tích chập 1x1 và Global Average Pooling"
    ],
    "answer": 1,
    "explanation": "### 🎯 3 Vũ khí tối thượng của AlexNet:\n1. **ReLU:** Giúp mạng hội tụ nhanh hơn 6 lần so với Sigmoid/Tanh.\n2. **Dropout:** Đặt ở các tầng FC để ngắt ngẫu nhiên nơ-ron, ngăn chặn mạng học vẹt (chống Overfitting hiệu quả với 60 triệu tham số).\n3. **Huấn luyện trên 2 GPU song song:** Khắc phục giới hạn phần cứng tính toán thời bấy giờ.",
    "slideRef": "Slide Chương 7, Trang 30"
  },
  {
    "id": 424,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Triết lý thiết kế cốt lõi làm nên sức mạnh và sự đơn giản của kiến trúc VGGNet (2014) là gì?",
    "options": [
      "Chỉ sử dụng các bộ lọc có kích thước rất lớn như 11x11 để nhìn toàn cảnh",
      "Thay thế các bộ lọc lớn bằng chuỗi các bộ lọc rất nhỏ 3x3 xếp chồng liên tiếp nhau",
      "Loại bỏ hoàn toàn các lớp Pooling để giữ nguyên độ phân giải",
      "Chỉ sử dụng 1 tầng tích chập duy nhất kết hợp với mạng MLP cực sâu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Triết lý VGGNet:\nThay vì dùng các filter to kềnh càng ($7 \\times 7$ hay $11 \\times 11$), VGGNet chỉ dùng **DUY NHẤT các bộ lọc nhỏ $3 \\times 3$ (stride 1, pad 1)** xếp chồng liên tiếp, xen kẽ Max Pooling $2 \\times 2$ (stride 2).",
    "slideRef": "Slide Chương 7, Trang 31"
  },
  {
    "id": 425,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Tại sao việc xếp chồng 3 lớp tích chập $3 \\times 3$ liên tiếp lại vượt trội hơn hẳn so với việc sử dụng một lớp tích chập $7 \\times 7$ đơn lẻ trong VGGNet?",
    "options": [
      "Vì 3 lớp 3x3 có kích thước không gian đầu ra lớn gấp 3 lần",
      "Cùng vùng nhận cảm tương đương (7x7), nhưng có nhiều tầng phi tuyến hơn (3 hàm ReLU) và tiết kiệm gần 45% số lượng tham số",
      "Vì 3 lớp 3x3 giúp giảm độ sâu của mạng xuống thấp hơn",
      "Vì 3 lớp 3x3 không cần dùng đến bước nhảy Stride"
    ],
    "answer": 1,
    "explanation": "### 🎯 So sánh toán học đỉnh cao giữa 3 lớp 3x3 vs 1 lớp 7x7:\n1. **Vùng nhận cảm tương đương:** 3 lớp $3 \\times 3$ xếp chồng bao phủ đúng 1 vùng ảnh $7 \\times 7$.\n2. **Tăng tính phi tuyến:** 3 lớp có 3 hàm ReLU xen kẽ, giúp biểu diễn đặc trưng phức tạp hơn nhiều so với chỉ 1 hàm ReLU của lớp $7 \\times 7$.\n3. **Tiết kiệm tham số:** Giả sử $C$ kênh vào và ra: 1 lớp $7 \\times 7$ tốn $7^2 C^2 = 49 C^2$ tham số; trong khi 3 lớp $3 \\times 3$ chỉ tốn $3 \\times (3^2 C^2) = 27 C^2$ tham số (giảm gần 45% trọng số!).",
    "slideRef": "Slide Chương 7, Trang 32"
  },
  {
    "id": 426,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Điểm đột phá nhất trong cấu trúc của khối \"Inception\" trong mạng GoogLeNet (2014) là gì?",
    "options": [
      "Chỉ tính toán tuần tự từng tầng một cách nghiêm ngặt",
      "Thực hiện song song đồng thời các phép tích chập 1x1, 3x3, 5x5 và Max Pooling 3x3 trong cùng một lớp rồi ghép kết quả lại",
      "Loại bỏ hoàn toàn hàm kích hoạt ReLU để giữ tính tuyến tính",
      "Nhân đôi số lượng kết nối Fully Connected để tăng độ phức tạp"
    ],
    "answer": 1,
    "explanation": "### 🎯 Khối Inception đa quy mô (Multi-scale):\nThay vì phân vân nên chọn kernel $1 \\times 1$, $3 \\times 3$ hay $5 \\times 5$, GoogLeNet chạy **song song cả 4 nhánh** (Conv $1 \\times 1$, Conv $3 \\times 3$, Conv $5 \\times 5$ và Max Pooling $3 \\times 3$) để nắm bắt thông tin ở nhiều thang đo khác nhau trong cùng 1 tầng, sau đó nối kết quả (concatenate) theo chiều kênh.",
    "slideRef": "Slide Chương 7, Trang 33"
  },
  {
    "id": 427,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Lớp tích chập $1 \\times 1$ (1x1 Convolution) đóng vai trò \"Nút cổ chai\" (Bottleneck) trong GoogLeNet và ResNet nhằm mục đích chính là gì?",
    "options": [
      "Thu nhỏ chiều rộng và chiều cao của ảnh đi một nửa",
      "Giảm số chiều sâu kênh (Channel dimensionality reduction) trước các phép tính tích chập tốn kém, giúp giảm mạnh khối lượng tính toán",
      "Thay thế hoàn toàn chức năng của lớp Softmax",
      "Đảo ngược thứ tự các kênh màu của dữ liệu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Vũ khí 1x1 Conv (Bottleneck):\nTích chập $1 \\times 1$ giữ nguyên chiều rộng và chiều cao $(H, W)$, nhưng cho phép **nén số lượng kênh màu từ lớn về nhỏ** (ví dụ từ 256 kênh xuống còn 64 kênh) trước khi đi vào các bộ lọc $3 \\times 3$ và $5 \\times 5$ nặng nề. Nhờ đó, số lượng phép tính trong khối Inception giảm từ 854 triệu xuống chỉ còn 353 triệu phép tính!",
    "slideRef": "Slide Chương 7, Trang 34"
  },
  {
    "id": 428,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Để loại bỏ nguy cơ Overfitting và giảm mạnh hàng chục triệu tham số ở các lớp Fully Connected cuối mạng, GoogLeNet đã sử dụng kỹ thuật gì?",
    "options": [
      "Lớp Gộp trung bình toàn cục (Global Average Pooling - GAP)",
      "Chính quy hóa L1 Lasso ép trọng số về 0",
      "Kỹ thuật lấy mẫu lặp lại Bootstrap",
      "Xóa bỏ hoàn toàn lớp Softmax"
    ],
    "answer": 0,
    "explanation": "### 🎯 Đột phá Global Average Pooling (GAP):\nThay vì dùng các lớp FC dày đặc chứa hàng triệu tham số dễ gây overfit ở đuôi mạng, GoogLeNet tính giá trị trung bình trên toàn bộ từng feature map $H \\times W$ để ra đúng 1 con số cho mỗi kênh. Nhờ đó, GoogLeNet có độ sâu tới 22 lớp nhưng chỉ có ~5 triệu tham số (ít hơn AlexNet 12 lần).",
    "slideRef": "Slide Chương 7, Trang 34"
  },
  {
    "id": 429,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Kiến trúc ResNet (2015) của Kaiming He đã đạt thành tích lịch sử nào tại cuộc thi ILSVRC 2015?",
    "options": [
      "Đạt tốc độ xử lý 1.000 khung hình/giây trên điện thoại",
      "Vô địch với tỷ lệ lỗi Top-5 chỉ 3.57%, lần đầu tiên vượt qua độ chính xác của con người (~5.1%)",
      "Mô hình hoàn toàn không có tham số cần học",
      "Chạy được trên dữ liệu âm thanh mà không cần chuyển đổi sóng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Cột mốc lịch sử của ResNet:\nResNet (152 lớp) đã vô địch áp đảo ILSVRC 2015 với sai số Top-5 chỉ $3.57\\%$, chính thức đánh bại ngưỡng nhận thức của mắt người (khoảng $5.1\\%$) trong bài toán nhận diện và phân loại hình ảnh.",
    "slideRef": "Slide Chương 7, Trang 36"
  },
  {
    "id": 430,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Hiện tượng suy biến (Degradation Problem) xảy ra khi xây dựng các mạng CNN rất sâu trước thời điểm ResNet ra đời là gì?",
    "options": [
      "Mô hình bị Overfitting nặng khiến train error bằng 0 nhưng test error rất cao",
      "Khi tăng độ sâu của mạng (ví dụ từ 20 lên 56 lớp), sai số trên cả tập huấn luyện (Train error) lẫn tập kiểm thử đều tăng cao hơn do việc tối ưu hóa gặp khó khăn",
      "Bộ nhớ GPU bị tràn khiến mạng tự động ngắt kết nối",
      "Các bộ lọc tích chập tự động đồng nhất về giá trị 0"
    ],
    "answer": 1,
    "explanation": "### 🎯 Suy biến (Degradation) KHÔNG PHẢI là Overfitting - Bẫy thi kinh điển:\n* Nếu là Overfitting thì sai số tập Train phải cực thấp (Loss $\\approx 0$).\n* Nhưng trong hiện tượng suy biến, **cả sai số Train lẫn sai số Test đều tăng cao**! Điều này chứng minh rằng mạng sâu hơn lại khó tối ưu hóa hơn so với mạng nông.",
    "slideRef": "Slide Chương 7, Trang 36"
  },
  {
    "id": 431,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Giải pháp cốt lõi mang tính cách mạng của kiến trúc ResNet để giải quyết hiện tượng suy biến mạng sâu là gì?",
    "options": [
      "Áp dụng thuật toán di truyền để tìm siêu tham số",
      "Sử dụng kết nối tắt (Skip / Shortcut Connection) để học biểu diễn phần dư: $\\mathcal{H}(x) = \\mathcal{F}(x) + x$",
      "Thay toàn bộ các lớp tích chập bằng các lớp hồi quy tuyến tính OLS",
      "Tăng kích thước bộ lọc lên 15x15 để tăng độ bao phủ"
    ],
    "answer": 1,
    "explanation": "### 🎯 Cơ chế Skip Connection (Học phần dư):\nCho phép tín hiệu đầu vào $x$ nhảy cóc qua một vài lớp trung gian và cộng trực tiếp vào đầu ra: $\\mathcal{H}(x) = \\mathcal{F}(x) + x$.\n* Thay vì ép các lớp phải học toàn bộ ánh xạ $\\mathcal{H}(x)$, chúng chỉ cần học phần chênh lệch dư $\\mathcal{F}(x) = \\mathcal{H}(x) - x$.\n* Về mặt toán học, gradient khi truyền ngược luôn có thành phần $+1$: $\\frac{\\partial \\mathcal{E}}{\\partial x} = \\frac{\\partial \\mathcal{E}}{\\partial \\mathcal{H}} (\\frac{\\partial \\mathcal{F}}{\\partial x} + 1)$, tạo ra đường cao tốc cho gradient không bao giờ bị triệt tiêu!",
    "slideRef": "Slide Chương 7, Trang 36-37"
  },
  {
    "id": 432,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Khối nút cổ chai (Bottleneck Design) được sử dụng trong các phiên bản sâu của ResNet (ResNet-50, 101, 152) gồm chuỗi 3 lớp tích chập nào?",
    "options": [
      "Conv 3x3 -> Conv 3x3 -> Conv 3x3",
      "Conv 1x1 (giảm chiều kênh) -> Conv 3x3 -> Conv 1x1 (phục hồi chiều kênh)",
      "Conv 5x5 -> Conv 3x3 -> Conv 1x1",
      "Conv 7x7 -> MaxPool 2x2 -> Conv 1x1"
    ],
    "answer": 1,
    "explanation": "### 🎯 Khối Bottleneck trong ResNet-50+:\n1. **Conv 1x1:** Giảm độ sâu kênh (ví dụ từ 256 xuống 64).\n2. **Conv 3x3:** Xử lý tích chập trên không gian đã thu nhỏ số kênh.\n3. **Conv 1x1:** Phục hồi (tăng) số kênh trở lại (ví dụ từ 64 lên 256) trước khi cộng skip connection $x$.\nThiết kế này giúp giảm khối lượng tính toán khổng lồ để có thể huấn luyện mạng sâu tới 152 lớp.",
    "slideRef": "Slide Chương 7, Trang 37"
  },
  {
    "id": 433,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Sự khác biệt căn bản giữa bài toán Định vị đối tượng (Object Localization) và bài toán Phát hiện đối tượng (Object Detection) là gì?",
    "options": [
      "Định vị chỉ làm việc với ảnh đen trắng, Phát hiện làm việc với ảnh màu",
      "Định vị chỉ xác định vị trí của duy nhất một đối tượng trong ảnh; Phát hiện xác định vị trí và phân loại nhiều đối tượng khác nhau đồng thời",
      "Định vị sử dụng mạng MLP, Phát hiện sử dụng mạng CNN",
      "Định vị cho kết quả chính xác hơn Phát hiện đối tượng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Phân biệt các bài toán thị giác máy tính:\n* **Phân loại (Classification):** Xác định ảnh chứa đối tượng gì (1 nhãn cho toàn ảnh).\n* **Định vị (Localization):** Xác định vị trí của **1 đối tượng duy nhất** bằng khung bao (Bounding Box).\n* **Phát hiện đối tượng (Object Detection):** Đồng thời tìm khung bao và định danh cho **nhiều đối tượng khác nhau** xuất hiện trong cùng 1 bức ảnh.",
    "slideRef": "Slide Chương 7, Trang 42"
  },
  {
    "id": 434,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Nhóm thuật toán phát hiện đối tượng Hai giai đoạn (Two-stage detectors) như R-CNN, Faster R-CNN hoạt động theo nguyên lý nào?",
    "options": [
      "Dự đoán trực tiếp vị trí hộp và nhãn lớp trong 1 lần quét duy nhất",
      "Đề xuất các vùng tiềm năng (Region Proposals) trước, sau đó mới phân loại và tinh chỉnh khung bao cho từng vùng",
      "Sử dụng thuật toán K-Means để gom cụm các pixel lân cận",
      "Chỉ dựa vào sự thay đổi độ sáng của ảnh qua thời gian"
    ],
    "answer": 1,
    "explanation": "### 🎯 Two-stage vs One-stage Detectors:\n* **Two-stage (R-CNN, Fast R-CNN, Faster R-CNN):** Giai đoạn 1 sinh ra các vùng nghi ngờ có đối tượng (Proposals); Giai đoạn 2 đưa từng vùng qua CNN để phân loại và nắn chỉnh tọa độ hộp. Ưu điểm: Độ chính xác rất cao; Nhược điểm: Xử lý chậm.\n* **One-stage (YOLO, SSD):** Dự đoán thẳng trên lưới ô trong 1 lần duyệt, đạt tốc độ thời gian thực.",
    "slideRef": "Slide Chương 7, Trang 42, 44"
  },
  {
    "id": 435,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Thuật toán phát hiện đối tượng nào sau đây thuộc nhóm Một giai đoạn (One-stage detector), nổi tiếng với khả năng xử lý thời gian thực (Real-time)?",
    "options": [
      "R-CNN",
      "Faster R-CNN",
      "YOLO (You Only Look Once)",
      "LeNet-5"
    ],
    "answer": 2,
    "explanation": "### 🎯 YOLO (You Only Look Once):\nYOLO và SSD là đại diện tiêu biểu của nhóm One-stage detector. Thay vì đề xuất vùng qua 2 bước, YOLO coi bài toán phát hiện đối tượng là một bài toán hồi quy duy nhất, dự đoán trực tiếp tọa độ hộp và xác suất lớp trên toàn bộ bức ảnh trong một lần chạy mạng duy nhất, đạt tốc độ hàng chục đến hàng trăm FPS.",
    "slideRef": "Slide Chương 7, Trang 42, 44"
  },
  {
    "id": 436,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Trong hệ thống tìm kiếm và truy vấn ảnh tương đồng (Image Retrieval / Google Photos), CNN được ứng dụng theo cơ chế nào?",
    "options": [
      "Tìm kiếm dựa trên việc khớp từng pixel ảnh thô",
      "Trích xuất các vector đặc trưng (feature vectors / embeddings) từ tầng sâu của CNN và so sánh độ tương đồng góc giữa các vector",
      "Dùng thuật toán sắp xếp từ điển trên tên file ảnh",
      "Chuyển đổi toàn bộ ảnh thành các file mã nguồn nhị phân"
    ],
    "answer": 1,
    "explanation": "### 🎯 Truy vấn ảnh theo nội dung (CBIR):\nThay vì tìm theo từ khóa văn bản thủ công, hệ thống nạp ảnh vào CNN để lấy ra **vector đặc trưng (embedding)** ở tầng gần cuối (trước tầng Softmax). Hai bức ảnh có nội dung tương đồng (như cùng là bãi biển hay con chó) sẽ có các vector nằm rất gần nhau trong không gian biểu diễn (tính bằng khoảng cách Cosine hoặc Euclidean).",
    "slideRef": "Slide Chương 7, Trang 41"
  },
  {
    "id": 437,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Ứng dụng nào sau đây trong máy ảnh số và điện thoại thông minh là minh chứng tiêu biểu cho khả năng phân tích biểu cảm và trạng thái của CNN?",
    "options": [
      "Tính năng tự động zoom quang học",
      "Tính năng Smile Shutter (tự động nhận diện nụ cười để chụp ảnh)",
      "Tính năng điều chỉnh độ nhạy sáng ISO thủ công",
      "Tính năng đo dung lượng pin còn lại"
    ],
    "answer": 1,
    "explanation": "### 🎯 Phân tích biểu cảm khuôn mặt:\nCông nghệ **Smile Shutter** trên máy ảnh kỹ thuật số (Sony, Canon) và smartphone sử dụng mô hình CNN để phát hiện khuôn mặt và nhận diện trạng thái cơ mặt khi người chụp cười, từ đó tự động kích hoạt màn trập chụp ảnh mà không cần bấm nút.",
    "slideRef": "Slide Chương 7, Trang 47-48"
  },
  {
    "id": 438,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Ví dụ lịch sử nổi tiếng nào trong slide bài giảng minh chứng cho độ chính xác cực cao của công nghệ nhận dạng mống mắt (Iris Recognition) bằng thị giác máy tính?",
    "options": [
      "Nhận dạng danh tính bức họa nàng Mona Lisa",
      "Xác định chính xác danh tính \"Cô gái Afghanistan\" của tạp chí National Geographic sau nhiều thập kỷ",
      "Phân biệt cặp song sinh giống hệt nhau tại lễ hội hoa",
      "Nhận diện các loài chim quý hiếm ở rừng rậm Amazon"
    ],
    "answer": 1,
    "explanation": "### 🎯 Vụ án nhận dạng mống mắt kinh điển:\nBức ảnh bức chân dung nổi tiếng \"Cô gái Afghanistan\" (Sharbat Gula) chụp năm 1984. Sau 17 năm (năm 2002), các nhà khoa học đã sử dụng công nghệ nhận dạng mống mắt (Iris Recognition) của John Daugman để đối chiếu cấu trúc mống mắt của người phụ nữ trưởng thành và khẳng định chắc chắn 100% đó chính là cô bé trong bức ảnh năm xưa.",
    "slideRef": "Slide Chương 7, Trang 48"
  },
  {
    "id": 439,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Trong công nghệ xe tự hành (Autonomous Vehicles), CNN đóng vai trò nòng cốt trong việc xử lý các tác vụ nào?",
    "options": [
      "Chỉ dùng để bật tắt hệ thống điều hòa trên xe",
      "Nhận diện làn đường thông qua phân đoạn ảnh và phát hiện, theo dõi người đi bộ, phương tiện xung quanh theo thời gian thực",
      "Đo lượng nhiên liệu tiêu thụ của động cơ đốt trong",
      "Tự động tính cước phí bảo hiểm định kỳ cho xe"
    ],
    "answer": 1,
    "explanation": "### 🎯 CNN trong xe tự hành:\nXe tự hành (Tesla, Waymo) sử dụng chuỗi camera xung quanh kết hợp các mạng CNN thời gian thực để:\n1. Phân đoạn ngữ nghĩa làn đường, vạch kẻ đường, vỉa hè.\n2. Phát hiện và theo dõi khung bao (Bounding Box) của các vật cản: xe hơi, xe máy, người đi bộ, biển báo giao thông để đưa ra quyết định đánh lái hoặc phanh gấp an toàn.",
    "slideRef": "Slide Chương 7, Trang 50"
  },
  {
    "id": 440,
    "chapter": 7,
    "chapterTitle": "Chương 7: Mạng tích chập (CNN)",
    "question": "Thiết bị giải trí và tương tác người - máy nào của Microsoft được nhắc đến trong slide như một ứng dụng tiêu biểu của mạng tích chập trong việc hiểu cấu trúc không gian và nhận diện cử chỉ cơ thể?",
    "options": [
      "Microsoft Surface Pro",
      "Microsoft HoloLens 2",
      "Microsoft Kinect",
      "Microsoft Xbox Controller không dây"
    ],
    "answer": 2,
    "explanation": "### 🎯 Microsoft Kinect:\nMicrosoft Kinect sử dụng camera chiều sâu (depth camera) kết hợp các mô hình tích chập để phân tích khung xương (skeleton tracking), tái tạo tư thế 3D và nhận diện cử chỉ chuyển động cơ thể của người chơi theo thời gian thực mà không cần người dùng phải cầm tay cầm điều khiển.",
    "slideRef": "Slide Chương 7, Trang 52"
  }
];
