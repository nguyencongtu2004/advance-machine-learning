/* ==============================================================================
   NGÂN HÀNG 400 CÂU HỎI TRẮC NGHIỆM HỌC MÁY TIÊN TIẾN & ỨNG DỤNG (UIT)
   (File tổng hợp tự động từ data/questions/chuong_1.js -> chuong_6.js)
   Để thêm / sửa câu hỏi: Chỉnh sửa các file trong thư mục data/questions/
   và chạy: node scripts/build_questions.js
============================================================================== */

window.QUESTION_BANK = [
  {
    "id": 1,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Theo định nghĩa của Arthur Samuel (1959), Machine Learning là gì?",
    "options": [
      "Khả năng của máy tính thực hiện các phép tính số học tốc độ cao",
      "Khả năng học hỏi của máy tính mà không cần được lập trình một cách tường minh cho từng trường hợp",
      "Hệ thống các quy tắc logic if-else do con người định nghĩa sẵn",
      "Khả năng bắt chước hoàn hảo cấu trúc sinh học của não người"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nArthur Samuel (1959) — người tiên phong viết chương trình máy tính chơi cờ đam tự học — đã đưa ra định nghĩa kinh điển đầu tiên:\n> *\"Machine Learning là lĩnh vực nghiên cứu mang lại cho máy tính khả năng học tập mà không cần được lập trình một cách tường minh (without being explicitly programmed) cho từng trường hợp cụ thể.\"*\n\n* **Lập trình truyền thống (Rule-based):**\n  $$\\text{Dữ liệu đầu vào} + \\text{Luật chơi viết tay (Code if-else)} \\implies \\text{Kết quả đầu ra}$$\n* **Học máy (Machine Learning):**\n  $$\\text{Dữ liệu đầu vào} + \\text{Đáp án thực tế} \\implies \\text{Máy tự rút ra Quy luật (Model)!}$$\n\n💡 **Ví dụ đời thường:** Thay vì ngồi gõ tay hàng triệu dòng `if-else` quy định màu lông, độ dài tai để phân biệt chó và mèo, ta chỉ việc ném cho máy $100.000$ bức ảnh kèm nhãn. Máy tính sẽ tự động tinh chỉnh các trọng số để tự nhận diện đặc trưng.",
    "slideRef": "Slide Chương 1, Trang 40"
  },
  {
    "id": 2,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Trong định nghĩa kinh điển của Tom Mitchell (1997) về Machine Learning, bộ ba yếu tố cấu thành là gì?",
    "options": [
      "Training, Validation, Test",
      "Task ($T$), Experience ($E$), Performance ($P$)",
      "Precision ($P$), Recall ($R$), F1-score ($F$)",
      "Data ($D$), Model ($M$), Loss ($L$)"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTom Mitchell (1997) đã chuẩn hóa định nghĩa học máy bằng bộ ba toán học chặt chẽ $(T, E, P)$:\n> *\"Một chương trình máy tính được gọi là học từ kinh nghiệm **$E$** (Experience) đối với tác vụ **$T$** (Task) và thước đo hiệu năng **$P$** (Performance), nếu hiệu năng ở tác vụ $T$, đo bằng $P$, được cải thiện dần theo kinh nghiệm $E$.\"*\n\n* **$T$ (Task - Tác vụ):** Công việc cụ thể cần giải quyết (Ví dụ: Nhận diện chữ viết tay, phân loại email).\n* **$E$ (Experience - Kinh nghiệm):** Dữ liệu lịch sử tích lũy từ quá khứ dùng để huấn luyện.\n* **$P$ (Performance - Hiệu năng):** Thước đo định lượng để chấm điểm mức độ hoàn thành bài toán (Ví dụ: Accuracy $\\%$, MSE, F1-score).",
    "slideRef": "Slide Chương 1, Trang 40-41"
  },
  {
    "id": 3,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Trong bài toán xây dựng bộ lọc thư rác (Spam Filtering), yếu tố nào sau đây đóng vai trò là Kinh nghiệm $E$ (Experience)?",
    "options": [
      "Việc phân loại email mới thành spam hay thư thường",
      "Tập các email cũ trong quá khứ đã được con người gán nhãn sẵn",
      "Tỷ lệ email được phân loại chính xác",
      "Tốc độ xử lý của máy chủ mail"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nÁp dụng bộ ba $(T, E, P)$ của Tom Mitchell vào bài toán Bộ lọc thư rác (Spam Filter):\n* **Tác vụ $T$ (Task):** Phân loại một email mới gửi đến là Thư rác (Spam) hay Thư hợp lệ (Ham).\n* **Kinh nghiệm $E$ (Experience):** **Tập dữ liệu hàng ngàn email cũ trong quá khứ** đã được người dùng hoặc chuyên gia gán nhãn sẵn (\"Spam\" / \"Không Spam\").\n* **Hiệu năng $P$ (Performance):** Tỷ lệ phần trăm phân loại chính xác (Accuracy) hoặc số lượng thư quan trọng bị chặn nhầm.",
    "slideRef": "Slide Chương 1, Trang 42"
  },
  {
    "id": 4,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Mối quan hệ bao hàm đúng nhất giữa Trí tuệ nhân tạo (AI), Học máy (ML) và Học sâu (DL) là gì?",
    "options": [
      "$\\text{AI} \\subset \\text{ML} \\subset \\text{DL}$",
      "$\\text{DL} \\subset \\text{ML} \\subset \\text{AI}$",
      "$\\text{ML} \\subset \\text{AI} \\subset \\text{DL}$",
      "DL và ML là hai nhánh độc lập cùng thuộc AI"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nMối quan hệ giữa 3 khái niệm giống như **chiếc hộp búp bê Nga lồng vào nhau**:\n$$\\text{DL (Học sâu)} \\subset \\text{ML (Học máy)} \\subset \\text{AI (Trí tuệ nhân tạo)}$$\n\n1. **AI (Trí tuệ nhân tạo - Vòng tròn ngoài cùng):** Khái niệm rộng nhất bao gồm mọi hệ thống mô phỏng hành vi thông minh của con người (bao gồm cả các hệ chuyên gia viết tay $100.000$ lệnh `if-else`).\n2. **ML (Học máy - Vòng tròn giữa):** Tập con của AI, nơi máy tính tự học quy luật từ dữ liệu thay vì con người code sẵn luật.\n3. **DL (Học sâu - Vòng tròn trong cùng):** Tập con của ML, sử dụng các mạng nơ-ron nhân tạo nhiều tầng ẩn (Deep Neural Networks) có khả năng tự động trích xuất các tầng đặc trưng phức tạp từ dữ liệu thô.",
    "slideRef": "Slide Chương 1, Trang 5, 39"
  },
  {
    "id": 5,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Thuật toán Backpropagation (Lan truyền ngược) nền tảng cho việc huấn luyện mạng nơ-ron nhiều tầng được mô tả vào năm nào và bởi ai?",
    "options": [
      "1950 bởi Alan Turing",
      "1951 bởi Marvin Minsky",
      "1969 bởi Arthur Bryson và Yu-Chi Ho",
      "2006 bởi Fei-Fei Li"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Năm 1969:** Hai nhà khoa học **Arthur Bryson và Yu-Chi Ho** đã mô tả toán học thuật toán **Lan truyền ngược (Backpropagation)** dựa trên quy tắc đạo hàm chuỗi (Chain Rule) cho các hệ thống điều khiển tối ưu.\n* Sau này (1986), Geoffrey Hinton, David Rumelhart và Ronald Williams đã phổ biến ứng dụng Backpropagation vào việc huấn luyện mạng nơ-ron nhân tạo nhiều tầng, giải quyết bài toán tính gradient cho các tầng ẩn.",
    "slideRef": "Slide Chương 1, Trang 8"
  },
  {
    "id": 6,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Dự án cơ sở dữ liệu hình ảnh quy mô lớn ImageNet thúc đẩy kỷ nguyên Deep Learning bùng nổ được khởi động bởi ai và vào năm nào?",
    "options": [
      "Andrew Ng (2009)",
      "Fei-Fei Li (Lý Phi Phi - 2006)",
      "Alan Turing (1950)",
      "Geoffrey Hinton (1986)"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Năm 2006:** Giáo sư **Fei-Fei Li (Lý Phi Phi)** tại Đại học Stanford đã khởi xướng dự án **ImageNet** — tập dữ liệu hình ảnh khổng lồ với hơn 14 triệu bức ảnh được gán nhãn thủ công qua Amazon Mechanical Turk.\n* ImageNet đóng vai trò là \"nhiên liệu dữ liệu\" mang tính bước ngoặt. Đến năm 2012, mô hình Deep CNN AlexNet đã vô địch cuộc thi ImageNet Challenge, chính thức mở ra kỷ nguyên bùng nổ của Deep Learning trên toàn thế giới.",
    "slideRef": "Slide Chương 1, Trang 9"
  },
  {
    "id": 7,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Đặc điểm cốt lõi của Học có giám sát (Supervised Learning) là gì?",
    "options": [
      "Dữ liệu đầu vào chỉ có các đặc trưng $X$, hoàn toàn không có nhãn $y$",
      "Dữ liệu đầu vào đi kèm nhãn mục tiêu (Ground Truth $y$) đã biết trước",
      "Hệ thống học qua việc tương tác thử-sai với môi trường và nhận phần thưởng",
      "Hệ thống tự động gom các điểm tương đồng vào cụm tự nhiên"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Học có giám sát (Supervised Learning):** Dữ liệu huấn luyện gồm các cặp đầy đủ:\n  $$\\mathcal{D} = \\{(x_1, y_1), (x_2, y_2), \\dots, (x_n, y_n)\\}$$\n  Trong đó $x_i$ là vector đặc trưng đầu vào, và $y_i$ là nhãn đúng thực tế (**Ground Truth**).\n* **Hình ảnh ẩn dụ:** Giống như một học sinh giải bài tập khi **phía sau sách có sẵn đáp án chi tiết**. Mỗi khi học sinh làm bài ra kết quả $\\hat{y}$, học sinh lật trang sau so sánh với đáp án $y$ để biết mình đúng hay sai, từ đó rút kinh nghiệm chỉnh lại cách giải.",
    "slideRef": "Slide Chương 1, Trang 12, 69"
  },
  {
    "id": 8,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Bài toán dự đoán giá nhà dựa trên diện tích, vị trí và số phòng ngủ thuộc loại bài toán nào?",
    "options": [
      "Phân loại (Classification)",
      "Hồi quy (Regression)",
      "Phân cụm (Clustering)",
      "Học tăng cường (Reinforcement Learning)"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong Học có giám sát, ta phân biệt dựa vào bản chất của biến mục tiêu $y$:\n* **Hồi quy (Regression):** Biến mục tiêu $y$ là **số thực liên tục** ($y \\in \\mathbb{R}$). Ví dụ: Giá nhà ($2.5$ tỷ, $3.12$ tỷ), nhiệt độ thời tiết, doanh thu, cân nặng.\n* **Phân loại (Classification):** Biến mục tiêu $y$ là **rời rạc, định tính** ($y \\in \\{0, 1\\}$ hoặc các nhãn phân loại). Ví dụ: Đậu/Rớt, Chó/Mèo.\n👉 Do giá nhà là một đại lượng liên tục không bị giới hạn trong vài nhãn rời rạc, đây là bài toán **Hồi quy (Regression)**.",
    "slideRef": "Slide Chương 1, Trang 24, 48"
  },
  {
    "id": 9,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Bài toán phát hiện giao dịch gian lận thẻ tín dụng (Gian lận / Không gian lận) thuộc loại bài toán nào?",
    "options": [
      "Hồi quy đa biến",
      "Phân loại nhị phân (Binary Classification)",
      "Phân cụm không giám sát",
      "Giảm chiều dữ liệu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Biến mục tiêu $y$ của bài toán chỉ nhận 1 trong 2 giá trị rời rạc:\n  $$y \\in \\{0, 1\\} \\quad (0: \\text{Hợp lệ}, 1: \\text{Gian lận})$$\n* Do đầu ra chỉ có đúng 2 lớp (classes), đây là bài toán **Phân loại nhị phân (Binary Classification)** thuộc phương pháp Học có giám sát.",
    "slideRef": "Slide Chương 1, Trang 23, 48"
  },
  {
    "id": 10,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Học không giám sát (Unsupervised Learning) thường được sử dụng cho mục đích nào sau đây?",
    "options": [
      "Dự đoán nhãn rời rạc cho ảnh y tế",
      "Dự đoán giá cổ phiếu trong tương lai",
      "Khám phá cấu trúc ẩn, gom nhóm dữ liệu tự nhiên (Phân cụm) hoặc giảm chiều",
      "Tối đa hóa điểm số phần thưởng trong trò chơi điện tử"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Học không giám sát (Unsupervised Learning):** Tập dữ liệu chỉ có các đặc trưng đầu vào $X$, **hoàn toàn không có nhãn $y$ nào cả**:\n  $$\\mathcal{D} = \\{x_1, x_2, \\dots, x_n\\}$$\n* **Nhiệm vụ chính:**\n  1. **Phân cụm (Clustering):** Gom các điểm dữ liệu có tính chất tương đồng vào cùng nhóm (K-Means, DBSCAN) để phân khúc khách hàng.\n  2. **Giảm số chiều (Dimensionality Reduction):** Nén dữ liệu từ nhiều chiều xuống ít chiều hơn mà vẫn giữ được thông tin quan trọng nhất (PCA, t-SNE).\n  3. **Phát hiện bất thường (Anomaly Detection):** Tìm các mẫu nằm tách biệt kỳ lạ so với đa số.",
    "slideRef": "Slide Chương 1, Trang 13, 70"
  },
  {
    "id": 11,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Học bán giám sát (Semi-Supervised Learning) kết hợp dữ liệu như thế nào?",
    "options": [
      "Chỉ dùng dữ liệu có nhãn do chuyên gia tạo",
      "Dùng lượng nhỏ dữ liệu có nhãn kết hợp với lượng lớn dữ liệu chưa có nhãn",
      "Không dùng dữ liệu nào, chỉ học từ phần thưởng",
      "Dùng dữ liệu từ hai bài toán hoàn toàn không liên quan"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Thực tế cuộc sống:** Thu thập dữ liệu thô (ảnh cào trên mạng, đoạn ghi âm thoại) rất rẻ và nhiều vô kể ($0$ đồng). Nhưng thuê chuyên gia y tế hoặc kỹ sư ngồi soi và **gán nhãn chính xác (Labeling)** từng ảnh X-quang thì tốn kém hàng tỷ đồng và rất chậm.\n* **Học bán giám sát (Semi-Supervised Learning):** Kết hợp một **lượng nhỏ dữ liệu đã gán nhãn** với một **lượng cực lớn dữ liệu chưa gán nhãn**, giúp mô hình học được cấu trúc phân bố tổng thể của dữ liệu mà không tốn chi phí gán nhãn khổng lồ.",
    "slideRef": "Slide Chương 1, Trang 14"
  },
  {
    "id": 12,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Trong Học tăng cường (Reinforcement Learning), tác tử (Agent) học hành vi dựa trên cơ chế nào?",
    "options": [
      "So sánh dự đoán với nhãn ground truth có sẵn",
      "Tối ưu hóa phần thưởng (Reward / Penalty) nhận được từ môi trường qua quá trình thử và sai",
      "Tính khoảng cách Euclidean giữa các điểm dữ liệu",
      "Phân tách không gian bằng siêu phẳng OLS"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong **Học tăng cường (Reinforcement Learning - RL)**:\n* Không có tập dữ liệu tĩnh với nhãn đúng/sai cho trước.\n* Một **Tác tử (Agent)** tương tác liên tục với một **Môi trường (Environment)** bằng các Hành động ($a$).\n* Môi trường phản hồi lại bằng Trạng thái mới ($s$) và một tín hiệu **Phần thưởng ($r$ - Reward) hoặc Phạt (Penalty)**.\n* 💡 **Ví dụ huấn luyện cún con:** Cún ngồi xuống khi nghe lệnh $\\to$ thưởng xúc xích ($+1$); cún cắn giày dép $\\to$ bị mắng ($-1$). Tác tử học theo cơ chế **thử và sai (Trial and Error)** để tìm ra chiến lược (Policy $\\pi$) tối đa hóa tổng điểm thưởng tích lũy.",
    "slideRef": "Slide Chương 1, Trang 15, 71"
  },
  {
    "id": 13,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Hình thức Fine-tuning trong AI có nghĩa là gì?",
    "options": [
      "Huấn luyện mô hình từ đầu với trọng số ngẫu nhiên",
      "Huấn luyện mô hình trên tập dữ liệu tổng quát cực lớn",
      "Tiếp tục huấn luyện mô hình đã pre-train trên một tập dữ liệu nhỏ chuyên biệt của tác vụ cụ thể",
      "Xóa bỏ toàn bộ trọng số của mô hình cũ để huấn luyện lại"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Pre-training:** Huấn luyện mô hình nền tảng khổng lồ trên kho dữ liệu tổng quát (ví dụ: cho mô hình ngôn ngữ đọc toàn bộ Internet để hiểu tiếng Việt, ngữ pháp, tri thức phổ thông).\n* **Fine-tuning (Tinh chỉnh):** Lấy mô hình đã pre-train ở trên và **tiếp tục huấn luyện với tốc độ học nhỏ (learning rate nhỏ)** trên một tập dữ liệu chuyên ngành hẹp (như văn bản hồ sơ bệnh án hoặc luật pháp).\n* Nhờ có tri thức nền tảng sẵn, quá trình Fine-tuning diễn ra rất nhanh, tốn ít tài nguyên và chỉ cần lượng dữ liệu nhỏ.",
    "slideRef": "Slide Chương 1, Trang 31"
  },
  {
    "id": 14,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Khái niệm Transfer Learning (Học chuyển giao) mô tả điều gì?",
    "options": [
      "Chuyển đổi dữ liệu từ dạng chữ sang dạng số",
      "Tái sử dụng một mô hình đã học từ một tác vụ nguồn sang giải quyết một tác vụ đích có liên quan",
      "Chuyển tham số của mô hình sang siêu tham số",
      "Chuyển dữ liệu từ tập Train sang tập Test"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Transfer Learning (Học chuyển giao):** Là chiến lược tái sử dụng các tri thức/trọng số mà mô hình đã học được từ một bài toán nguồn ($Task_A$) để áp dụng sang một bài toán đích mới ($Task_B$).\n* 💡 **Ví dụ thực tế:** Một người đã biết đi xe đạp thì khi học đi xe máy sẽ tiếp thu nhanh hơn nhiều so với người chưa từng đi xe hai bánh, vì họ đã có sẵn tri thức về phản xạ thăng bằng và đánh lái. Tương tự, mô hình thị giác học nhận diện triệu vật thể trên ImageNet có thể chuyển giao các bộ lọc trích xuất cạnh, góc để soi ảnh tế bào ung thư.",
    "slideRef": "Slide Chương 1, Trang 32"
  },
  {
    "id": 15,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Sự khác biệt căn bản giữa Tham số (Parameters) và Siêu tham số (Hyperparameters) là gì?",
    "options": [
      "Tham số do con người đặt trước; Siêu tham số do mô hình tự học",
      "Tham số do mô hình tự học từ dữ liệu train; Siêu tham số do con người thiết lập trước để điều khiển cấu trúc và huấn luyện",
      "Tham số chỉ có trong hồi quy; Siêu tham số chỉ có trong phân loại",
      "Cả hai đều do mô hình tự học nhưng siêu tham số có giá trị lớn hơn"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết (⚠️ TRỌNG TÂM THI 100%):\n| Tiêu chí | Tham số (Parameters) | Siêu tham số (Hyperparameters) |\n| :--- | :--- | :--- |\n| **Nguồn gốc** | **Mô hình tự động học từ tập Train** qua thuật toán tối ưu. | **Kỹ sư con người phải tự chọn trước** khi bấm nút train. |\n| **Bản chất** | Quyết định công thức dự đoán cụ thể của mô hình. | Điều khiển cấu trúc và thuật toán học của mô hình. |\n| **Ví dụ** | Trọng số $w$ và bias $b$ trong $y = wx + b$. | Tốc độ học $\\eta$, hệ số phạt $\\lambda$, số cụm $K$, độ sâu cây `max_depth`. |\n| **Tập dữ liệu dùng** | Tinh chỉnh trên **Training Set**. | So sánh và chọn lựa trên **Validation Set**. |",
    "slideRef": "Slide Chương 1, Trang 53-55"
  },
  {
    "id": 16,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Đại lượng nào sau đây là một Siêu tham số (Hyperparameter)?",
    "options": [
      "Trọng số kết nối $w$ giữa các nơ-ron",
      "Hệ số chặn bias $b$ của hàm tuyến tính",
      "Độ sâu tối đa của cây quyết định (`max_depth`)",
      "Sai số phần dư trên từng mẫu $e_i = y_i - \\hat{y}_i$"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Độ sâu tối đa của cây (`max_depth`):** Là nút điều khiển cấu trúc do người lập trình ấn định trước khi xây dựng cây quyết định $\\implies$ Đây là **Siêu tham số (Hyperparameter)**.\n* Các đại lượng khác:\n  * Trọng số $w$ và bias $b$: Do giải thuật toán học tự học từ dữ liệu $\\implies$ **Tham số (Parameter)**.\n  * Sai số $e_i$: Là kết quả tính toán đầu ra, không phải tham số mô hình.",
    "slideRef": "Slide Chương 1, Trang 54"
  },
  {
    "id": 17,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Tập dữ liệu nào sau đây được sử dụng để so sánh các mô hình và lựa chọn Siêu tham số?",
    "options": [
      "Training set",
      "Validation set",
      "Test set",
      "Toàn bộ dataset gộp chung"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Training set:** Dùng để cập nhật **tham số nội tại** ($w, b$).\n* **Validation set (Tập thẩm định - 'Thi thử'):** Dùng để thử nghiệm các giá trị **siêu tham số khác nhau** (chọn độ sâu cây = 3 hay 5, chọn $\\lambda = 0.01$ hay $0.1$) và so sánh các thuật toán để chọn ra mô hình tốt nhất.\n* **Test set (Tập kiểm thử - 'Thi thật'):** Giữ kín tuyệt đối, chỉ đem ra chấm điểm một lần duy nhất ở bước cuối cùng.",
    "slideRef": "Slide Chương 1, Trang 57, 59"
  },
  {
    "id": 18,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Vai trò duy nhất của Tập kiểm thử (Test set) là gì?",
    "options": [
      "Huấn luyện tham số $w$ và bias $b$",
      "Chọn độ sâu của cây quyết định",
      "Đánh giá khách quan cuối cùng về khả năng tổng quát hóa trên dữ liệu chưa từng thấy",
      "Làm sạch dữ liệu bị nhiễu"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Tập Test Set** đóng vai trò giống như **Đề thi tốt nghiệp THPT Quốc gia thật**:\n  * Nó tuyệt đối không được dùng để huấn luyện trọng số.\n  * Nó cũng không được dùng để chọn siêu tham số hay lựa chọn mô hình.\n  * Nhiệm vụ duy nhất là cung cấp **đánh giá độc lập, khách quan không thiên vị (Unbiased Evaluation)** về khả năng tổng quát hóa của mô hình trước khi bàn giao đưa vào vận hành thực tế.",
    "slideRef": "Slide Chương 1, Trang 58-59"
  },
  {
    "id": 19,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Khả năng tổng quát hóa (Generalization) của một mô hình học máy nghĩa là gì?",
    "options": [
      "Mô hình đạt độ chính xác 100% trên tập Training set",
      "Mô hình có khả năng dự đoán chính xác trên các quan sát mới chưa từng gặp lúc huấn luyện",
      "Mô hình có số lượng tham số lớn nhất có thể",
      "Mô hình có thời gian huấn luyện nhanh nhất"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Khả năng tổng quát hóa (Generalization Ability):** Là tiêu chuẩn vàng tối thượng của Học máy: Khả năng mô hình dự đoán chính xác trên **dữ liệu mới toanh ngoài thực tế** mà nó chưa từng được nhìn thấy trong quá trình huấn luyện.\n* Một mô hình học thuộc lòng $100\\%$ tập Train nhưng ra ngoài đời đoán sai be bét thì hoàn toàn vô giá trị.",
    "slideRef": "Slide Chương 1, Trang 60"
  },
  {
    "id": 20,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Hiện tượng Overfitting (Quá khớp) xảy ra khi nào?",
    "options": [
      "Mô hình có sai số cao trên cả tập Train lẫn tập Test",
      "Mô hình quá phức tạp, học thuộc cả nhiễu của tập Train; sai số Train rất thấp nhưng sai số Test rất cao",
      "Mô hình quá đơn giản, không học được quy luật dữ liệu",
      "Mô hình có thời gian chạy quá lâu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Overfitting (Quá khớp - Bệnh 'Học vẹt'):**\n  * **Đặc trưng nhận diện:** Sai số trên tập huấn luyện cực thấp ($Train\\_Error \\approx 0$), nhưng sai số trên dữ liệu mới lại cực kỳ cao ($Test\\_Error \\gg 0$).\n  * **Bản chất:** Mô hình có độ phức tạp quá cao (bậc đa thức quá lớn, mạng quá nhiều tầng) nên nó khớp từng điểm dữ liệu, học vẹt luôn cả các điểm nhiễu và ngoại lai cá biệt, làm mất đi tính tổng quát hóa.",
    "slideRef": "Slide Chương 1, Trang 61"
  },
  {
    "id": 21,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Hiện tượng Underfitting (Thiếu khớp) thể hiện qua dấu hiệu nào sau đây?",
    "options": [
      "Sai số tập Train cực thấp nhưng sai số Test rất cao",
      "Sai số cao trên cả tập huấn luyện (Train) lẫn tập kiểm thử (Test)",
      "Mô hình có quá nhiều tham số phức tạp",
      "Mô hình dự đoán đúng 100% mọi mẫu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Underfitting (Thiếu khớp - Bệnh 'Ngây thơ'):**\n  * **Đặc trưng nhận diện:** Sai số rất cao trên **CẢ HAI tập Train và Test** ($Train\\_Error$ cao, $Test\\_Error$ cũng cao).\n  * **Bản chất (High Bias):** Mô hình quá đơn giản (ví dụ dùng đường thẳng bậc 1 để xấp xỉ một đường cong parabol phức tạp) hoặc thiếu đặc trưng quan trọng, khiến mô hình thậm chí còn không học nổi quy luật cơ bản của tập Train.",
    "slideRef": "Slide Chương 1, Trang 61"
  },
  {
    "id": 22,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Sự khác biệt giữa Hàm mất mát (Loss Function) và Thước đo đánh giá (Evaluation Metric) là gì?",
    "options": [
      "Loss và Metric hoàn toàn giống nhau, chỉ khác tên gọi",
      "Loss bắt buộc phải khả vi để thuật toán tối ưu cập nhật trọng số; Metric dùng cho con người theo dõi mục tiêu nghiệp vụ và không cần khả vi",
      "Metric dùng để tối ưu gradient descent; Loss dùng để vẽ biểu đồ",
      "Loss không cần có đạo hàm; Metric bắt buộc phải có đạo hàm"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Loss Function (Hàm mất mát):**\n  * Phục vụ cho **thuật toán tối ưu của máy tính** (Gradient Descent).\n  * **Bắt buộc phải KHẢ VI (có đạo hàm liên tục, trơn)** để tính toán đạo hàm dốc cập nhật trọng số (MSE, BCE Loss).\n* **Evaluation Metric (Thước đo đánh giá):**\n  * Phục vụ cho **kỹ sư và doanh nghiệp** hiểu hiệu quả bài toán.\n  * **Không cần khả vi** (Accuracy, Precision, Recall, F1-score).\n* 💡 **Tại sao không lấy Accuracy làm hàm mất mát?** Vì Accuracy là hàm bậc thang gián đoạn (đoán trúng thì 1, lệch 1 chút thành 0), đạo hàm của nó bằng 0 ở khắp nơi nên Gradient Descent không thể cập nhật được!",
    "slideRef": "Slide Chương 1, Trang 51-52"
  },
  {
    "id": 23,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Trong quy trình dự án Machine Learning chuẩn, bước nào sau đây phải thực hiện TRƯỚC bước huấn luyện mô hình?",
    "options": [
      "Triển khai mô hình vào sản xuất (Deployment)",
      "Theo dõi suy giảm hiệu năng (Monitoring)",
      "Thu thập, làm sạch và chuẩn bị dữ liệu (Data Preprocessing)",
      "Báo cáo sai số cuối cùng trên Test set"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nQuy trình chuẩn 6 bước của một dự án Học máy:\n1. **Hiểu bài toán kinh doanh (Business Understanding)**\n2. **Định nghĩa bài toán học máy (ML Problem Framing)**\n3. **Thu thập & Khám phá dữ liệu (Data Collection & EDA)**\n4. **Tiền xử lý & Chuẩn bị dữ liệu (Data Preprocessing & Feature Engineering)**\n5. **Huấn luyện & Đánh giá mô hình (Model Training & Evaluation)**\n6. **Triển khai & Giám sát (Deployment & Monitoring)**\n👉 Bước **Tiền xử lý dữ liệu** bắt buộc phải hoàn thành trước khi đưa dữ liệu vào thuật toán huấn luyện.",
    "slideRef": "Slide Chương 1, Trang 62-68"
  },
  {
    "id": 24,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Phương pháp nào sau đây giúp giảm bớt nguy cơ Overfitting cho mô hình?",
    "options": [
      "Thêm nhiều đặc trưng không liên quan vào mô hình",
      "Tăng độ sâu của cây quyết định lên tối đa",
      "Thu thập thêm dữ liệu huấn luyện hoặc áp dụng Regularization ($L_1, L_2$)",
      "Bỏ qua tập Validation"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nĐể chữa căn bệnh **Overfitting (Quá khớp)**, ta áp dụng các biện pháp:\n1. **Bổ sung thêm nhiều dữ liệu huấn luyện:** Khi thấy hàng triệu ví dụ phong phú, mô hình khó có thể học vẹt từng trường hợp cụ thể.\n2. **Chính quy hóa (Regularization $L_1, L_2$):** Phạt các trọng số có độ lớn quá cao, ép mô hình giữ cấu trúc đơn giản, mượt mà.\n3. **Giảm độ phức tạp mô hình:** Cắt tỉa cây (Pruning), giảm số tầng nơ-ron, dùng Dropout.\n4. **Chọn lọc đặc trưng (Feature Selection):** Loại bỏ các biến nhiễu vô nghĩa.",
    "slideRef": "Slide Chương 1, Trang 61"
  },
  {
    "id": 25,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Một giáo sư định nghĩa AI là 'xây dựng các tác tử hành động để đạt kết quả tốt nhất có thể'. Góc nhìn này thuộc nhóm nào?",
    "options": [
      "Suy nghĩ như con người (Thinking Humanly)",
      "Suy nghĩ hợp lý (Thinking Rationally)",
      "Hành động như con người (Acting Humanly)",
      "Hành động hợp lý (Acting Rationally)"
    ],
    "answer": 3,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nBốn góc nhìn kinh điển về định nghĩa Trí tuệ nhân tạo (AI):\n* **Hành động hợp lý (Acting Rationally - Rational Agent):** Tập trung vào việc tạo ra các tác tử (agent) luôn đưa ra hành động tối ưu để tối đa hóa kết quả kỳ vọng dựa trên thông tin hiện có.\n* **Hành động như con người (Acting Humanly):** Vượt qua phép thử Turing (Turing Test).\n* **Suy nghĩ như con người (Thinking Humanly):** Mô phỏng các quá trình nhận thức tâm lý não bộ người.\n* **Suy nghĩ hợp lý (Thinking Rationally):** Dựa trên logic hình thức toán học chuẩn mực.",
    "slideRef": "Slide Chương 1, Trang 6"
  },
  {
    "id": 26,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Tại sao việc chỉ viết luật thủ công (Rule-based) lại thất bại trong bài toán nhận diện giọng nói hoặc phân loại ảnh?",
    "options": [
      "Vì máy tính không thể thực thi lệnh if-else",
      "Vì số lượng luật cần viết quá khổng lồ, phức tạp và không thể bao quát hết biến thể thực tế",
      "Vì luật viết tay chạy quá nhanh",
      "Vì lập trình thủ công đòi hỏi GPU đắt tiền"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Một bức ảnh chỉ $256 \\times 256$ pixel đã chứa tới $65.536$ số nguyên. Cùng là một con mèo, nhưng góc nghiêng, ánh sáng, màu lông, tư thế nằm/chạy tạo ra vô số tổ hợp pixel khác biệt.\n* Con người không thể nào ngồi viết hàng triệu triệu nhánh `if-else` thủ công để bao quát hết mọi biến thể thực tế của tự nhiên. Đây chính là lý do Học máy (Machine Learning) ra đời: để máy tính tự động tìm quy luật từ dữ liệu lớn.",
    "slideRef": "Slide Chương 1, Trang 36-38"
  },
  {
    "id": 27,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Dữ liệu Ground Truth mang ý nghĩa gì trong bài toán học có giám sát?",
    "options": [
      "Kết quả do mô hình Machine Learning dự đoán",
      "Kết quả đúng thực tế đã biết trước của quan sát",
      "Sai số giữa dự đoán và nhãn",
      "Tập các siêu tham số được chọn"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Ground Truth ($y$ - Chân lý mặt đất):** Là giá trị thực tế đúng đắn, khách quan của mẫu dữ liệu được kiểm chứng ngoài đời thực (Ví dụ: Giá bán thực tế của căn nhà được công chứng là $5$ tỷ; hoặc kết quả sinh thiết xác nhận khối u là Lành tính).\n* Ground Truth được dùng làm thước đo chuẩn để đối chiếu với giá trị do mô hình phán đoán (Prediction $\\hat{y}$) nhằm tính sai số và cải thiện tham số.",
    "slideRef": "Slide Chương 1, Trang 50"
  },
  {
    "id": 28,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Để đánh giá khả năng tổng quát hóa của mô hình một cách khách quan nhất, quy tắc nào bắt buộc phải tuân thủ?",
    "options": [
      "Dùng chính Training set để đánh giá hiệu năng cuối cùng",
      "Không để thông tin từ tập Validation hoặc Test rò rỉ vào quá trình học tham số (Chống Data Leakage)",
      "Huấn luyện mô hình trên cả 3 tập Train, Validation và Test cùng lúc",
      "Chọn siêu tham số trực tiếp trên Test set"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Quy tắc vàng:** Tuyệt đối giữ cho tập **Validation Set** và **Test Set** hoàn toàn độc lập với quá trình huấn luyện tham số của mô hình.\n* **Hiểm họa Data Leakage (Rò rỉ dữ liệu):** Nếu mô hình vô tình được nhìn thấy thông tin của tập Test (ví dụ tính toán chuẩn hóa mean/std gộp chung cả tập Test trước khi chia dữ liệu), kết quả đánh giá sẽ bị lạc quan giả tạo: điểm thi thử đạt $10$ nhưng khi đưa ra môi trường thực tế sẽ thất bại thảm hại.",
    "slideRef": "Slide Chương 1, Trang 59"
  },
  {
    "id": 29,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Một mô hình dịch tự động từ tiếng Anh sang tiếng Việt thuộc lĩnh vực ứng dụng nào của AI?",
    "options": [
      "Thị giác máy tính (Computer Vision)",
      "Xử lý ngôn ngữ tự nhiên (Natural Language Processing - NLP)",
      "Hệ thống gợi ý (Recommender System)",
      "Phân cụm không gian"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Dịch máy (Machine Translation):** Là bài toán kinh điển thuộc lĩnh vực **Xử lý ngôn ngữ tự nhiên (Natural Language Processing - NLP)**.\n* Bài toán này biến đổi chuỗi từ ngữ trong ngôn ngữ nguồn sang chuỗi từ ngữ tương đương trong ngôn ngữ đích (Sequence-to-Sequence), hiện nay sử dụng chủ yếu kiến trúc Transformer.",
    "slideRef": "Slide Chương 1, Trang 17"
  },
  {
    "id": 30,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Bài toán phân chia ảnh chụp cắt lớp y tế thành các vùng mô bệnh và mô lành thuộc loại bài toán nào?",
    "options": [
      "Hồi quy đa biến",
      "Phân đoạn hình ảnh (Image Segmentation)",
      "Phân cụm văn bản",
      "Học tăng cường"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Phân đoạn hình ảnh (Image Segmentation):** Là tác vụ phân loại mức độ pixel (Pixel-level Classification), gán mỗi pixel trong bức ảnh vào một lớp đối tượng cụ thể (ví dụ: pixel nào thuộc về khối u, pixel nào thuộc về mô lành).\n* Đây là tác vụ thị giác máy tính cao cấp hơn Phân loại ảnh (Image Classification) và Nhận diện vật thể (Object Detection).",
    "slideRef": "Slide Chương 1, Trang 26"
  },
  {
    "id": 241,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Trong phép thử Turing (Turing Test) do Alan Turing đề xuất năm 1950, tiêu chí để một cỗ máy được coi là có 'trí tuệ' là gì?",
    "options": [
      "Máy tính có khả năng tính toán các phép toán siêu việt nhanh hơn con người 1000 lần",
      "Một người phỏng vấn giao tiếp gián tiếp qua văn bản không thể phân biệt được đối tượng đang trò chuyện là máy hay là người thật",
      "Máy tính có thể tự học cách sửa chữa các vi mạch phần cứng của chính nó",
      "Cỗ máy bắt chước hoàn hảo cấu trúc mạng nơ-ron sinh học của não khỉ"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Năm 1950:** Nhà toán học huyền thoại **Alan Turing** xuất bản bài báo *\"Computing Machinery and Intelligence\"* và đề xuất trò chơi bắt chước (**Imitation Game / Turing Test**).\n* **Luật chơi:** Một giám khảo con người (Judge) ngồi trong phòng kín và trò chuyện qua màn hình văn bản với 2 đối tượng ẩn danh: một con người thật và một cỗ máy tính.\n* **Tiêu chí vượt qua:** Nếu vị giám khảo **hoàn toàn không thể phân biệt được** đối tượng nào là con người, đối tượng nào là máy tính sau các cuộc đối thoại tự nhiên, cỗ máy được xem là đã thể hiện hành vi thông minh tương đương con người (**Acting Humanly**).",
    "slideRef": "Slide Chương 1, Trang 6-7"
  },
  {
    "id": 242,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Thí nghiệm tư duy 'Phòng tiếng Trung' (Chinese Room) của triết gia John Searle (1980) được đưa ra nhằm phản bác luận điểm nào?",
    "options": [
      "Việc một chương trình chỉ thao tác cú pháp theo luật hình thức vượt qua Turing Test đồng nghĩa với việc cỗ máy thực sự 'hiểu' và có ý thức nhận thức (AI mạnh / Strong AI)",
      "Mạng nơ-ron nhân tạo không thể học được dữ liệu chuỗi văn bản",
      "Ngôn ngữ tiếng Trung là ngôn ngữ khó nhất đối với các thuật toán AI",
      "Máy tính không thể dịch tự động giữa các ngôn ngữ tự nhiên"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Thí nghiệm tư duy Phòng tiếng Trung:** Giả sử một người hoàn toàn không biết một chữ tiếng Trung nào bị nhốt trong phòng kín. Người này nhận được các ký tự tiếng Trung từ ngoài khe cửa đưa vào, sau đó tra cứu một cuốn sách luật tiếng Anh hướng dẫn: *\"Nếu thấy biểu tượng A, hãy viết lại biểu tượng B\"*. Người bên ngoài nhận được biểu tượng B và tưởng rằng người bên trong rất giỏi tiếng Trung!\n* **Kết luận của Searle (Phản bác Strong AI):** Cỗ máy chỉ đang thực hiện các thao tác cú pháp hình thức (**Syntax manipulation**) dựa trên quy tắc, chứ hoàn toàn **không hề có ý thức, ngữ nghĩa hay sự thấu hiểu thực sự (Semantics / Understanding)** bên trong.",
    "slideRef": "Slide Chương 1, Trang 6"
  },
  {
    "id": 243,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Mô hình mạng nơ-ron nhân tạo phần cứng đầu tiên trên thế giới mang tên SNARC (1951) được chế tạo bởi ai?",
    "options": [
      "John von Neumann và Alan Turing",
      "Marvin Minsky và Dean Edmonds",
      "Arthur Samuel và Frank Rosenblatt",
      "Geoffrey Hinton và Yann LeCun"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Năm 1951:** Khi còn là sinh viên tại Đại học Princeton, **Marvin Minsky** (sau này là một trong những cha đẻ sáng lập ngành AI) cùng với **Dean Edmonds** đã chế tạo cỗ máy **SNARC** (Stochastic Neural Analog Reinforcement Calculator).\n* Cỗ máy này gồm 40 tế bào nơ-ron phần cứng sử dụng các bóng đèn chân không và động cơ con quay hồi chuyển, mô phỏng mạng nơ-ron học cách tìm đường đi qua mê cung của một chú chuột ảo.",
    "slideRef": "Slide Chương 1, Trang 7"
  },
  {
    "id": 244,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Trong bài toán xây dựng hệ thống xe tự hành (Self-Driving Car), yếu tố nào sau đây đóng vai trò là Thước đo hiệu năng $P$ (Performance) theo định nghĩa của Tom Mitchell?",
    "options": [
      "Dữ liệu video từ camera và cảm biến LiDAR được ghi lại trong hàng triệu km chạy thử",
      "Tác vụ điều khiển vô-lăng, chân ga và phanh xe an toàn trên đường",
      "Số km di chuyển trung bình giữa hai lần xảy ra sự cố cần tài xế can thiệp (Disengagement rate)",
      "Tốc độ tính toán của bộ vi xử lý GPU trên xe"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nPhân tích bộ ba $(T, E, P)$ của Tom Mitchell cho **Xe tự lái**:\n* **Tác vụ $T$ (Task):** Điều khiển xe di chuyển an toàn trên đường phố (đưa ra quyết định đánh lái, phanh, tăng tốc, giữ làn).\n* **Kinh nghiệm $E$ (Experience):** Hàng triệu gigabyte dữ liệu hình ảnh, lidar, cảm biến thu được từ các tài xế người lái trước đó.\n* **Hiệu năng $P$ (Performance):** **Số km di chuyển trung bình giữa hai lần xảy ra sự cố cần tài xế can thiệp** (Disengagement rate) và tỷ lệ tai nạn $= 0$.",
    "slideRef": "Slide Chương 1, Trang 41-42"
  },
  {
    "id": 245,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Học tự giám sát (Self-Supervised Learning) - nền tảng huấn luyện tiền đề cho các mô hình ngôn ngữ lớn (LLM như GPT, BERT) - hoạt động theo nguyên lý nào?",
    "options": [
      "Thuê hàng triệu chuyên gia thủ công gán nhãn từng câu chữ trên Internet",
      "Tự động tạo ra nhãn giám sát từ chính cấu trúc bên trong dữ liệu thô (ví dụ: giấu một từ để bắt mô hình dự đoán từ bị khuyết)",
      "Không cần dùng hàm mất mát, chỉ dựa vào luật ngẫu nhiên",
      "Kết hợp giữa thuật toán K-Means và Hồi quy tuyến tính"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Self-Supervised Learning (Học tự giám sát):** Là chìa khóa mang lại sự bùng nổ của các mô hình nền tảng (Foundation Models như BERT, GPT).\n* **Nguyên lý:** Thay vì con người ngồi gán nhãn thủ công tốn kém:\n  * Mô hình tự động **che giấu một phần dữ liệu** (Masked Language Modeling: *\"Mặt trời mọc ở hướng [MASK]\"* $\\implies$ bắt máy đoán chữ *\"Đông\"*).\n  * Hoặc bắt mô hình **dự đoán token tiếp theo** (Next Token Prediction: *\"Hôm nay trời nhiều...\"* $\\implies$ đoán *\"mây\"*).\n* Bằng cách này, mô hình có thể \"tự học\" từ hàng nghìn tỷ từ trên Internet mà **không tốn một đồng chi phí gán nhãn**!",
    "slideRef": "Slide Chương 1, Trang 11-13"
  },
  {
    "id": 246,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Định lý 'Không có bữa trưa miễn phí' (No Free Lunch Theorem) của Wolpert và Macready (1997) khẳng định điều gì?",
    "options": [
      "Các mô hình AI luôn luôn phải tiêu tốn tài nguyên điện toán lớn",
      "Không có thuật toán học máy nào là tối ưu tuyệt đối trên mọi bài toán khả dĩ; hiệu năng vượt trội trên bài toán này phải đánh đổi bằng hiệu năng kém trên bài toán khác",
      "Mọi bài toán phân loại đều có thể giải quyết hoàn hảo bằng Mạng nơ-ron sâu",
      "Muốn đạt độ chính xác cao bắt buộc phải trả phí bản quyền cho thuật toán"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **No Free Lunch Theorem (NFL Theorem):** Khi lấy trung bình trên **toàn bộ mọi phân phối bài toán có thể có trong vũ trụ**, mọi thuật toán học máy đều có hiệu năng ngang ngửa nhau (thậm chí ngang với việc đoán mò ngẫu nhiên!).\n* 💡 **Ý nghĩa thực tiễn sống còn cho kỹ sư:**\n  * **Không tồn tại một thuật toán thần thánh nào** luôn thắng trong mọi cuộc thi hay dự án.\n  * Một thuật toán (như XGBoost hay Deep Learning) hoạt động cực tốt trên bài toán phân loại ảnh nhưng có thể thua một cây quyết định đơn giản trên tập dữ liệu bảng nhỏ.\n  * Do đó, kỹ sư bắt buộc phải thử nghiệm nhiều mô hình khác nhau và thấu hiểu bài toán cụ thể chứ không áp đặt mù quáng một thuật toán duy nhất.",
    "slideRef": "Slide Chương 1, Trang 36-38"
  },
  {
    "id": 247,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Khái niệm 'Định kiến quy nạp' (Inductive Bias) của một thuật toán học máy đề cập đến điều gì?",
    "options": [
      "Sự phân biệt đối xử mang tính kỳ thị xã hội trong dữ liệu huấn luyện",
      "Tập hợp các giả định tiên nghiệm mà mô hình áp đặt lên không gian hàm để dự đoán nhãn cho các điểm dữ liệu mới chưa từng thấy",
      "Lỗi phần cứng của card đồ họa khi tính toán dấu phẩy động",
      "Độ lệch chuẩn giữa giá trị trung bình của tập Train và tập Test"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Inductive Bias (Định kiến quy nạp):** Nếu không có bất kỳ giả định ban đầu nào, một tập điểm dữ liệu hữu hạn có thể được khớp bởi vô số hàm số toán học khác nhau. Để chọn ra một nghiệm, thuật toán bắt buộc phải mang sẵn những **giả định ngầm**:\n  * *Hồi quy tuyến tính (Linear Regression):* Giả định mối quan hệ giữa $X$ và $y$ là **tuyến tính phẳng** ($y = Xw$).\n  * *KNN:* Giả định các điểm nằm **gần nhau trong không gian thì có nhãn giống nhau**.\n  * *CNN (Convolutional Neural Networks):* Giả định tính **bất biến tịnh tiến cục bộ** của hình ảnh (mắt mèo nằm ở góc nào thì vẫn là mắt mèo).",
    "slideRef": "Slide Chương 1, Trang 43-45"
  },
  {
    "id": 248,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Sự khác biệt căn bản giữa Học theo lô (Batch / Offline Learning) và Học trực tuyến (Online / Incremental Learning) là gì?",
    "options": [
      "Batch Learning học bằng CPU; Online Learning bắt buộc học bằng GPU",
      "Batch Learning yêu cầu toàn bộ dữ liệu có sẵn và huấn luyện lại từ đầu khi có dữ liệu mới; Online Learning cập nhật mô hình liên tục theo từng mẫu/mini-batch khi dữ liệu mới liên tục đổ về",
      "Batch Learning chỉ dùng cho bài toán phân loại; Online Learning chỉ dùng cho hồi quy",
      "Batch Learning không có hàm mất mát; Online Learning có hàm mất mát"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Batch Learning (Học ngoại tuyến / Theo lô):** Cần nạp toàn bộ dataset vào bộ nhớ. Khi có thêm dữ liệu mới, mô hình phải gom tất cả lại và **huấn luyện lại từ đầu (train from scratch)**. Thích hợp khi hệ thống có tài nguyên dồi dào và dữ liệu ít thay đổi.\n* **Online Learning (Học tăng cường / Trực tuyến):** Mô hình được cập nhật tức thì theo luồng dữ liệu (Streaming data), từng mẫu hoặc từng mini-batch một, rồi loại bỏ mẫu cũ ngay. Phù hợp tuyệt vời cho các hệ thống như phát hiện lừa đảo thẻ, định giá chứng khoán real-time hoặc thiết bị biên (IoT) có bộ nhớ cực nhỏ.",
    "slideRef": "Slide Chương 1, Trang 28-30"
  },
  {
    "id": 249,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Hiện tượng 'Trôi dạt khái niệm' (Concept Drift) trong các hệ thống học máy thực tế mô tả điều gì?",
    "options": [
      "Sự gia tăng đột biến của tốc độ phần cứng máy tính theo định luật Moore",
      "Sự thay đổi bản chất của mối quan hệ thống kê giữa đặc trưng đầu vào và nhãn mục tiêu $P(y|X)$ theo thời gian trong môi trường thực tế",
      "Việc mô hình học quá nhanh dẫn đến gradient bị phát nổ",
      "Sự dịch chuyển của gốc tọa độ ma trận trong thuật toán PCA"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Concept Drift (Trôi dạt khái niệm):** Trong thực tế sản xuất (Production), mối quan hệ giữa đầu vào $X$ và nhãn $y$ không bất biến mà **thay đổi theo thời gian**:\n  $$P_t(y|X) \\ne P_{t+\\Delta t}(y|X)$$\n* 💡 **Ví dụ kinh điển:**\n  * Trước đại dịch Covid, từ khóa *\"khẩu trang, cồn 90 độ\"* trên trang thương mại điện tử chỉ có lượng tìm kiếm bình thường. Khi dịch bùng phát, hành vi mua sắm của người tiêu dùng thay đổi $180^\\circ$.\n  * Kẻ lừa đảo thẻ tín dụng liên tục thay đổi thủ đoạn mới tinh vi hơn để né bộ lọc AI cũ.\n* Vì vậy, hệ thống MLOps bắt buộc phải liên tục giám sát (**Monitoring**) để phát hiện Concept Drift và tự động kích hoạt huấn luyện lại (Retraining).",
    "slideRef": "Slide Chương 1, Trang 67-68"
  },
  {
    "id": 250,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Mô hình tham số (Parametric Model) và Mô hình phi tham số (Non-parametric Model) khác nhau căn bản ở điểm nào?",
    "options": [
      "Mô hình tham số có số lượng tham số cố định không phụ thuộc vào kích thước dữ liệu huấn luyện; Mô hình phi tham số có số tham số tăng theo độ lớn của tập dữ liệu",
      "Mô hình tham số hoàn toàn không có trọng số; Mô hình phi tham số có vô số trọng số",
      "Mô hình tham số chỉ chạy trên dữ liệu số thực; Mô hình phi tham số chỉ chạy trên văn bản",
      "Mô hình tham số không thể bị Overfitting; Mô hình phi tham số luôn luôn bị Underfitting"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Mô hình tham số (Parametric Models):** Giả định trước dạng toán học của hàm mục tiêu (ví dụ đường thẳng $y = w_0 + w_1 x_1 + \\dots$). Số lượng tham số là **CỐ ĐỊNH** (ví dụ $p+1$ tham số) bất kể bạn nạp $100$ dòng hay $10$ triệu dòng dữ liệu.\n  * *Ví dụ:* Linear Regression, Logistic Regression, Linear SVM.\n  * *Ưu điểm:* Học nhanh, ít tốn bộ nhớ, nhưng có thể bị High Bias nếu dạng hàm thực tế phi tuyến.\n* **Mô hình phi tham số (Non-parametric Models):** Không đóng khung trước số lượng tham số cố định, độ phức tạp của mô hình **tự do mở rộng tỷ lệ thuận theo kích thước dữ liệu**.\n  * *Ví dụ:* K-Nearest Neighbors (lưu lại toàn bộ dữ liệu train), Cây quyết định (Decision Trees có thể nở sâu theo dữ liệu).",
    "slideRef": "Slide Chương 1, Trang 44-46"
  },
  {
    "id": 251,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Trong kỹ thuật Stratified K-Fold Cross-Validation, từ 'Stratified' (Phân tầng) mang ý nghĩa kỹ thuật gì?",
    "options": [
      "Dữ liệu được chia thành các tầng dựa theo số lượng dòng code của thuật toán",
      "Tỷ lệ phân bố của các nhãn mục tiêu (Class distribution) trong mỗi Fold con được đảm bảo giữ nguyên tỷ lệ giống hệt như trong toàn bộ tập dữ liệu gốc",
      "Dữ liệu được sắp xếp tăng dần theo giá trị trung bình của các đặc trưng",
      "Mỗi Fold con chỉ chứa các mẫu dữ liệu của đúng một lớp duy nhất"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Bối cảnh (Dữ liệu mất cân bằng - Imbalanced Data):** Giả sử bài toán phát hiện tế bào ung thư chỉ có $2\\%$ mẫu dương tính (mắc bệnh) và $98\\%$ mẫu âm tính (khỏe mạnh).\n* Nếu chia ngẫu nhiên thông thường (Standard K-Fold), rất có thể một Fold nào đó tình cờ **chẳng có một ca ung thư nào** ($0\\%$)! Khi lấy Fold đó làm Test thì việc đánh giá hoàn toàn sai lệch.\n* **Stratified K-Fold (Phân tầng):** Đảm bảo rằng **ở mỗi Fold con**, tỷ lệ giữa bệnh nhân ung thư và người khỏe mạnh **luôn giữ đúng $2\\% : 98\\%$ y hệt như tập dữ liệu gốc**, giúp việc thẩm định công bằng và đáng tin cậy.",
    "slideRef": "Slide Chương 1, Trang 58-60"
  },
  {
    "id": 252,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Khi nào bắt buộc phải dùng kỹ thuật TimeSeriesSplit thay vì chia ngẫu nhiên K-Fold thông thường?",
    "options": [
      "Khi dữ liệu có kích thước vượt quá 1 triệu dòng",
      "Khi dữ liệu có tính chất chuỗi thời gian (Time-series) phụ thuộc vào thứ tự thời gian (như giá cổ phiếu, dự báo thời tiết, nhu cầu năng lượng)",
      "Khi dữ liệu có chứa thuộc tính dạng chuỗi ký tự (String)",
      "Khi muốn tăng tốc độ tính toán của thuật toán lên gấp 10 lần"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Quy luật bất biến của thời gian:** Trong thực tế, bạn chỉ có thể dùng dữ liệu quá khứ để đoán tương lai, **tuyệt đối không thể dùng dữ liệu ngày mai để đoán ngày hôm qua**!\n* Nếu dùng K-Fold ngẫu nhiên cho bài toán giá cổ phiếu, thuật toán sẽ lấy dữ liệu ngày thứ Tư làm tập Train để dự đoán giá ngày thứ Ba $\\implies$ Mô hình bị **Rò rỉ tương lai (Lookahead bias / Data Leakage)**, cho kết quả ảo tưởng!\n* **TimeSeriesSplit (Walk-forward Validation):** Luôn đảm bảo tập Train đi trước tập Test theo trục thời gian:\n  * Fold 1: Train $[1..T]$, Test $[T+1]$\n  * Fold 2: Train $[1..T+1]$, Test $[T+2]$\n  * ...",
    "slideRef": "Slide Chương 1, Trang 59-60"
  },
  {
    "id": 253,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Khoảng cách tổng quát hóa (Generalization Gap) của một mô hình học máy được định nghĩa như thế nào?",
    "options": [
      "Hiệu số giữa thời gian chạy trên GPU và CPU",
      "Khoảng cách chênh lệch giữa sai số trên tập kiểm thử và sai số trên tập huấn luyện: $Gap = Error_{test} - Error_{train}$",
      "Thời gian cần thiết để huấn luyện mô hình từ đầu đến khi hội tụ",
      "Độ lệch chuẩn giữa ma trận hiệp phương sai và ma trận đơn vị"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n$$Generalization\\_Gap = Error_{test} - Error_{train}$$\n* **Ý nghĩa:** Đo lường mức độ mô hình hoạt động kém hơn khi bước ra dữ liệu mới so với lúc làm bài tập về nhà.\n* **Chẩn đoán bệnh:**\n  * Nếu $Gap \\approx 0$ và cả 2 sai số đều thấp: Mô hình lý tưởng (**Good fit**).\n  * Nếu $Gap \\gg 0$ (sai số train cực nhỏ, nhưng sai số test rất lớn): Mô hình bị **Overfitting (Quá khớp)** nghiêm trọng!\n  * Nếu $Gap$ nhỏ nhưng cả 2 sai số đều rất cao: Mô hình bị **Underfitting (Thiếu khớp)**.",
    "slideRef": "Slide Chương 1, Trang 60-61"
  },
  {
    "id": 254,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Tại sao việc liên tục điều chỉnh siêu tham số trực tiếp trên tập Test Set (thay vì Validation Set) lại là một sai lầm nghiêm trọng?",
    "options": [
      "Vì tập Test Set thường có kích thước quá nhỏ không đủ để tính toán Loss",
      "Vì dẫn đến hiện tượng Rò rỉ thông tin (Data Leakage) khiến đánh giá hiệu năng bị thiên vị lạc quan giả tạo và mô hình bị overfit vào tập Test",
      "Vì thuật toán Gradient Descent không thể chạy được trên tập Test",
      "Vì làm thay đổi vĩnh viễn dữ liệu gốc trong cơ sở dữ liệu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Hiểm họa 'Overfitting vào tập Test':** Mỗi lần bạn thử một siêu tham số và nhìn vào điểm số của tập Test để quyết định chọn giá trị tốt nhất, bạn đã vô tình **đưa thông tin của tập Test vào quá trình ra quyết định của con người**.\n* Sau vài chục lần tinh chỉnh như vậy, tập Test không còn là bài thi khách quan nữa. Điểm số báo cáo trên Test set sẽ bị **Thiên vị lạc quan giả tạo (Optimism Bias)**, dẫn đến việc mô hình tưởng chừng đạt $99\\%$ nhưng khi deploy ra production gặp khách hàng thật sẽ thất bại thê thảm.",
    "slideRef": "Slide Chương 1, Trang 57-58"
  },
  {
    "id": 255,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Biện pháp nào sau đây KHÔNG GIÚP khắc phục hiện tượng Thiếu khớp (Underfitting)?",
    "options": [
      "Bổ sung thêm các đặc trưng mới hoặc tạo các đặc trưng đa thức",
      "Sử dụng mô hình có cấu trúc phức tạp hơn (tăng độ sâu của cây, tăng số tầng nơ-ron)",
      "Tăng mạnh cường độ phạt chính quy hóa (tăng hệ số $\\lambda$)",
      "Giảm bớt mức độ phạt chính quy hóa (regularization)"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Bản chất Underfitting (High Bias):** Mô hình đang quá yếu, quá ngây thơ, không học nổi quy luật dữ liệu.\n* **Tác động của Regularization (Hệ số $\\lambda$):** $\\lambda$ có tác dụng **kìm hãm, ép mô hình đơn giản lại** để chống học vẹt.\n* 👉 Do đó, nếu mô hình đã ngây thơ mà ta lại **tăng mạnh $\\lambda$**, ta đang tiếp tục bóp nghẹt mô hình, làm cho nó càng thêm đơn giản và khiến bệnh **Underfitting trầm trọng hơn nữa**!",
    "slideRef": "Slide Chương 1, Trang 60-61"
  },
  {
    "id": 256,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Trong học tăng cường (Reinforcement Learning), 'Chính sách' (Policy, ký hiệu $\\pi$) biểu thị điều gì?",
    "options": [
      "Bộ luật pháp lý quy định quyền riêng tư dữ liệu người dùng",
      "Hàm hoặc chiến lược ánh xạ từ Trạng thái ($s$) sang Hành động ($a$) mà tác tử sẽ thực hiện: $\\pi(a|s)$",
      "Tổng phần thưởng tích lũy nhận được ở cuối mỗi màn chơi",
      "Thuật toán tối ưu hóa Gradient Descent áp dụng cho hàm mất mát"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Chính sách (Policy $\\pi$):** Được xem là \"bộ não\" hoặc \"kim chỉ nam chiến lược\" của Agent:\n  $$\\pi(a|s) = P(A_t = a \\mid S_t = s)$$\n* Nó quy định: Khi tác tử đang đứng ở Trạng thái $s$ (State), nó nên chọn Hành động $a$ (Action) nào để có xác suất nhận được tổng điểm thưởng tích lũy trong tương lai là lớn nhất.\n* Mục tiêu tối thượng của các thuật toán Học tăng cường (như Q-Learning, PPO, DQN) là tìm ra **Chính sách tối ưu $\\pi^*$**.",
    "slideRef": "Slide Chương 1, Trang 14-15"
  },
  {
    "id": 257,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Trong bài toán nhận diện cảm xúc giọng nói, phát biểu nào sau đây xác định đúng bộ ba $T-E-P$?",
    "options": [
      "T: Tập các file ghi âm giọng nói; E: Tỷ lệ nhận diện đúng; P: Gán nhãn vui/buồn/giận dữ",
      "T: Phân loại đoạn ghi âm vào các trạng thái cảm xúc; E: Tập dữ liệu âm thanh giọng nói đã được gán nhãn trước; P: Độ chính xác phân loại F1-score",
      "T: Tốc độ xử lý của CPU; E: Tần số âm thanh Hz; P: Số người tham gia thu âm",
      "T: Thuật toán MLP; E: Hàm kích hoạt Softmax; P: Hàm mất mát Cross-Entropy"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nPhân tích bộ ba $(T, E, P)$ của Tom Mitchell cho bài toán Nhận diện cảm xúc giọng nói:\n* **$T$ (Task - Việc cần làm):** Nhận một file ghi âm giọng nói mới và phân loại xem người nói đang Vui, Buồn, Giận dữ hay Bình thường.\n* **$E$ (Experience - Dữ liệu quá khứ):** Tập hợp hàng nghìn file ghi âm trước đây đã có chuyên gia nghe và dán nhãn cảm xúc sẵn.\n* **$P$ (Performance - Thước đo chấm điểm):** Chỉ số F1-score, Precision hoặc Accuracy đo tỷ lệ nhận diện cảm xúc chính xác.",
    "slideRef": "Slide Chương 1, Trang 41-42"
  },
  {
    "id": 258,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Đặc trưng nào sau đây của mạng nơ-ron Perceptron do Frank Rosenblatt phát minh năm 1957 là nguyên nhân chính dẫn đến sự suy tàn của mạng nơ-ron lần thứ nhất (AI Winter)?",
    "options": [
      "Chi phí tính toán quá đắt đỏ khiến máy tính thời đó không chạy nổi",
      "Bản chất chỉ tạo ra ranh giới quyết định tuyến tính phẳng, hoàn toàn bất lực trước các bài toán phân tách phi tuyến như hàm logic XOR",
      "Thuật toán không thể lưu trữ trọng số trên đĩa từ",
      "Perceptron yêu cầu tất cả đầu vào phải là số thực liên tục"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Năm 1957:** Frank Rosenblatt phát minh ra **Perceptron** đơn tầng và tuyên bố nó sẽ sớm biết suy nghĩ như con người.\n* **Cú sốc năm 1969:** Hai nhà khoa học Marvin Minsky và Seymour Papert xuất bản cuốn sách kinh điển *\"Perceptrons\"*, chứng minh toán học chặt chẽ rằng một nơ-ron Perceptron đơn tầng chỉ có thể vạch ra một đường thẳng hoặc siêu phẳng tuyến tính, **hoàn toàn bất lực không thể phân loại được hàm logic XOR** (một bài toán phi tuyến tính vô cùng đơn giản).\n* Cuốn sách này đã khiến các cơ quan tài trợ cắt sạch ngân sách nghiên cứu mạng nơ-ron, đẩy ngành AI bước vào thời kỳ **Mùa đông AI thứ nhất (AI Winter)** kéo dài suốt hơn một thập kỷ.",
    "slideRef": "Slide Chương 1, Trang 7-8"
  },
  {
    "id": 259,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Công việc chính của bước 'Triển khai và Giám sát' (Deployment & Monitoring) trong quy trình 6 bước Machine Learning là gì?",
    "options": [
      "Viết báo cáo tiểu luận và nộp mã nguồn cho giảng viên",
      "Đóng gói mô hình thành dịch vụ API/phần mềm phục vụ người dùng thực tế và liên tục theo dõi độ trễ, sai số, trôi dạt dữ liệu trong môi trường production",
      "Thực hiện phân tích thành phần chính PCA trên toàn bộ tập dữ liệu",
      "Lập trình thêm các câu lệnh if-else để ghi đè kết quả mô hình"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Một mô hình dù đạt độ chính xác $99\\%$ trong phòng thí nghiệm (Jupyter Notebook) nhưng nếu không được đưa vào thực tế thì chỉ là con số trên giấy.\n* **Deployment (Triển khai):** Đóng gói mô hình thành REST API / Docker Container hoặc nhúng trực tiếp vào ứng dụng web/mobile để xử lý dữ liệu của người dùng thật.\n* **Monitoring (Giám sát):** Thiết lập hệ thống telemetry theo dõi độ trễ (latency), tỷ lệ lỗi, và đặc biệt là giám sát hiện tượng suy giảm độ chính xác do **Data Drift** và **Concept Drift** để kịp thời kích hoạt tái huấn luyện (Retrain).",
    "slideRef": "Slide Chương 1, Trang 67-68"
  },
  {
    "id": 260,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Đặc điểm nào sau đây KHÔNG PHẢI là một ưu điểm của việc sử dụng K-Fold Cross-Validation so với phân chia Train/Test đơn lẻ?",
    "options": [
      "Đánh giá độ ổn định và giảm thiểu phương sai của phép ước lượng hiệu năng",
      "Tận dụng tối đa toàn bộ dữ liệu vì mọi mẫu đều có cơ hội xuất hiện trong tập kiểm thử đúng 1 lần",
      "Thời gian tính toán và huấn luyện mô hình giảm đi K lần so với train một mô hình duy nhất",
      "Phát hiện xem mô hình có bị quá nhạy cảm với việc chọn mẫu dữ liệu cụ thể hay không"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Bản chất của K-Fold Cross-Validation:** Dữ liệu được chia thành $K$ phần bằng nhau. Thuật toán phải **huấn luyện mô hình $K$ lần độc lập**, mỗi lần dùng $K-1$ phần để train và $1$ phần còn lại để test.\n* 👉 Do đó, **thời gian tính toán và chi phí phần cứng sẽ TĂNG LÊN gấp $K$ lần** (chứ không hề giảm đi). Đây chính là nhược điểm đánh đổi lớn nhất của K-Fold để đổi lấy sự đánh giá khách quan, tin cậy và không phụ thuộc vào may rủi của một lần chia tập duy nhất.",
    "slideRef": "Slide Chương 1, Trang 58-60"
  },
  {
    "id": 31,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Bốn chiều chất lượng dữ liệu cốt lõi trong bước Thu thập và Tiền xử lý dữ liệu bao gồm những yếu tố nào?",
    "options": [
      "Tính đầy đủ (Completeness), Tính đồng nhất (Consistency), Tính toàn vẹn (Integrity), Tính kịp thời (Timeliness)",
      "Độ chính xác (Accuracy), Độ nhạy (Recall), F1-score, Ma trận nhầm lẫn",
      "Số lượng dòng, Số lượng cột, Dung lượng file, Định dạng file",
      "Tốc độ mạng, Bộ nhớ RAM, Card đồ họa GPU, Dung lượng ổ cứng SSD"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nBốn chiều kích thước đo lường chất lượng dữ liệu chuẩn mực:\n1. **Tính đầy đủ (Completeness):** Mức độ dữ liệu có bị khuyết thiếu (Missing values) hay không. Bị thiếu quá nhiều sẽ làm mất tín hiệu dự đoán quan trọng.\n2. **Tính đồng nhất (Consistency):** Dữ liệu không mâu thuẫn định dạng hay đơn vị đo (ví dụ: dòng này ghi $1.75m$, dòng kia lại ghi $175cm$; cột ngày tháng lẫn lộn `DD/MM/YYYY` và `MM/DD/YYYY`).\n3. **Tính toàn vẹn / Hợp lệ (Integrity / Validity):** Tuân thủ logic thực tế (tuổi không thể là số âm $-5$; điểm thi đại học thang 10 không thể là $15/10$).\n4. **Tính kịp thời (Timeliness):** Dữ liệu phản ánh đúng thời điểm hiện tại. Dùng thói quen mua sắm năm 2010 để đoán nhu cầu năm 2026 sẽ bị sai lệch nghiêm trọng.",
    "slideRef": "Slide Chương 2, Trang 18-21"
  },
  {
    "id": 32,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Hiện tượng 'Sai lệch lấy mẫu' (Sampling Bias) xảy ra khi nào?",
    "options": [
      "Khi kích thước tập dữ liệu quá lớn khiến máy tính bị tràn RAM",
      "Khi phương pháp lấy mẫu khiến một số nhóm đối tượng bị chọn quá nhiều trong khi nhóm khác bị bỏ sót, làm mất tính đại diện của tổng thể",
      "Khi tất cả các biến đặc trưng đều có phân phối chuẩn",
      "Khi nhãn mục tiêu là số thực liên tục thay vì biến rời rạc"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Sampling Bias (Sai lệch lấy mẫu):** Xảy ra khi tập dữ liệu con (Sample) được thu thập **không đại diện trung thực cho toàn bộ dân số (Population)**.\n* 💡 **Ví dụ đời thường:** Bạn làm khảo sát *\"Thu nhập trung bình của người dân TP.HCM\"* nhưng lại cử nhân viên ra phát phiếu ở sảnh trung tâm thương mại cao cấp Quận 1 vào 2h chiều ngày làm việc:\n  * Người tham gia chủ yếu là giới nhà giàu, người rảnh rỗi hoặc du khách.\n  * Toàn bộ giới công nhân, sinh viên, viên chức văn phòng vắng mặt.\n  * Kết quả thu được trung bình 80 triệu/tháng $implies$ Dữ liệu bị thiên lệch nặng nề, đem kết quả này đi huấn luyện mô hình sẽ cho ra những phán đoán sai lệch nghiêm trọng!",
    "slideRef": "Slide Chương 2, Trang 9-11"
  },
  {
    "id": 33,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Khi một thuộc tính (cột) trong bảng dữ liệu bị thiếu giá trị (Missing data) lên tới hơn $60\\% - 70\\%$, biện pháp xử lý chuẩn mực nhất là gì?",
    "options": [
      "Bắt buộc xóa toàn bộ tập dữ liệu và hủy bỏ dự án",
      "Điền bằng giá trị trung bình cộng (Mean) của các mẫu còn lại",
      "Loại bỏ thuộc tính (cột) đó khỏi tập dữ liệu huấn luyện (Feature Deletion)",
      "Nhân đôi tất cả các giá trị của các cột khác"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nBa chiến lược xử lý dữ liệu khuyết thiếu:\n* **Xóa dòng (Row Deletion):** Chỉ nên dùng khi số lượng dòng thiếu **rất ít ($< 3\\% - 5\\%$)** và dữ liệu thiếu hoàn toàn ngẫu nhiên.\n* **Điền thay thế (Imputation):** Áp dụng khi cột bị thiếu ở mức vừa phải ($< 30\\% - 40\\%$) bằng Mean, Median hoặc Mode.\n* **Xóa cột (Feature Deletion):** Khi một cột bị **khuyết quá nặng (trên $60\\% - 70\\%$)**, thông tin thực tế còn lại quá ít, việc cố tình điền vào sẽ tự tạo ra dữ liệu giả mạo (nhiễu nhân tạo). Cách an toàn nhất là loại bỏ hoàn toàn thuộc tính này.",
    "slideRef": "Slide Chương 2, Trang 25"
  },
  {
    "id": 34,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Trong một cột dữ liệu số bị lệch phân phối mạnh (Skewed) hoặc chứa nhiều giá trị ngoại lai cực đoan (Outliers), ta nên điền dữ liệu khuyết bằng đại lượng nào?",
    "options": [
      "Giá trị trung bình cộng (Mean)",
      "Giá trị trung vị (Median)",
      "Giá trị lớn nhất (Maximum)",
      "Số 0 trong mọi trường hợp"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết (⚠️ BẪY THI KINH ĐIỂN):\n* 💼 **Ví dụ phòng kế toán:** 5 nhân viên lương $10, 11, 12, 12, 13$ triệu; có 1 Tổng giám đốc ngồi nhờ lương $\\mathbf{500}$ triệu.\n  * $\\text{Mean} = \\frac{10+11+12+12+13+500}{6} = 93$ triệu! $\\implies$ Vô lý hết sức, không có nhân viên nào lương 93 triệu cả.\n  * $\\text{Median} = 12$ triệu! $\\implies$ Phản ánh cực kỳ trung thực mức lương phổ biến của nhân viên.\n* 🏆 **Quy tắc thi:**\n  * Phân phối chuẩn, đối xứng, không ngoại lai $\\implies$ Điền **Mean**.\n  * Bị lệch hoặc có **Ngoại lai (Outliers)** $implies$ Bắt buộc điền **Median (Trung vị)**!",
    "slideRef": "Slide Chương 2, Trang 26"
  },
  {
    "id": 35,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Sự khác biệt căn bản giữa Nhiễu (Noise) và Điểm ngoại biên (Outliers) là gì?",
    "options": [
      "Nhiễu luôn là số nguyên, ngoại biên luôn là số thực",
      "Nhiễu là các sai số đo lường ngẫu nhiên vô nghĩa; Ngoại biên là các quan sát thực tế khác biệt lớn nhưng có thể mang tín hiệu vô cùng quan trọng",
      "Nhiễu chỉ có trong ảnh, ngoại biên chỉ có trong bảng số",
      "Cả hai đều là lỗi và bắt buộc phải xóa bỏ ngay lập tức"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Nhiễu (Noise):** Là lỗi kỹ thuật, sai số phần cứng ngẫu nhiên (ví dụ nhiệt kế chập chờn nhảy vọt lên $90^\\circ C$ trong 1 giây rồi hạ về $30^\\circ C$). Nhiễu là rác, cần loại bỏ hoặc làm mịn.\n* **Ngoại biên (Outliers):** Là các sự kiện khác biệt thực sự xảy ra ngoài đời.\n* ⚠️ **Lưu ý trắc nghiệm:** Không phải ngoại lai nào cũng nên xóa! Trong bài toán **Phát hiện gian lận thẻ tín dụng**, các giao dịch bình thường chiếm $99.99\\%$. Chính những cú quẹt thẻ \"ngoại biên\" dị biệt bất thường lại là **mục tiêu quý giá nhất** mà mô hình cần bắt được!",
    "slideRef": "Slide Chương 2, Trang 28"
  },
  {
    "id": 36,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Phương pháp Chuẩn hóa Min-Max (Min-Max Normalization) co toàn bộ giá trị của một thuộc tính về khoảng đóng tiêu chuẩn nào?",
    "options": [
      "$[-1, 1]$",
      "$[0, 1]$",
      "$(-\\infty, +\\infty)$",
      "$[0, 100]$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCông thức Chuẩn hóa Min-Max:\n$$x' = \\frac{x - x_{\\min}}{x_{\\max} - x_{\\min}}$$\n* Khi $x = x_{\\min} \\implies x' = 0$.\n* Khi $x = x_{\\max} \\implies x' = 1$.\n* Toàn bộ miền giá trị của biến được ánh xạ tuyến tính về khoảng đóng **$[0, 1]$**.",
    "slideRef": "Slide Chương 2, Trang 33"
  },
  {
    "id": 37,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Nhược điểm chí mạng lớn nhất của phương pháp Chuẩn hóa Min-Max là gì?",
    "options": [
      "Thời gian tính toán quá lâu",
      "Không thể áp dụng được cho số dương",
      "Cực kỳ nhạy cảm với các giá trị ngoại lai cực đoan (Outliers)",
      "Làm thay đổi số lượng cột của bảng dữ liệu"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Hiểm họa Outliers đối với Min-Max:** Công thức phụ thuộc trực tiếp vào $x_{\\min}$ và $x_{\\max}$.\n* Nếu tập dữ liệu tuổi từ $20$ đến $60$, tự nhiên có một cụ già nhập nhầm thành $1000$ tuổi ($x_{\\max} = 1000$):\n  * Tất cả các bạn trẻ $20 - 60$ tuổi sẽ bị ép dồn hết thành một nhúm $0.02, 0.03, 0.04$ sát số $0$!\n  * Khoảng cách giữa các mẫu bình thường bị triệt tiêu hoàn toàn, khiến mô hình mất sạch khả năng phân biệt.",
    "slideRef": "Slide Chương 2, Trang 33, 36"
  },
  {
    "id": 38,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Sau khi áp dụng phương pháp Chuẩn hóa Z-score (Standardization), thuộc tính mới sẽ có phân phối với kỳ vọng và độ lệch chuẩn bằng bao nhiêu?",
    "options": [
      "Trung bình bằng 1 và độ lệch chuẩn bằng 0",
      "Trung bình $\\mu = 0$ và độ lệch chuẩn $\\sigma = 1$ (phương sai $\\sigma^2 = 1$)",
      "Trung bình bằng 0.5 và phương sai bằng 0.25",
      "Miền giá trị luôn bị chặn cứng trong $[0, 1]$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCông thức Chuẩn hóa Z-score (Standardization):\n$$z = \\frac{x - \\mu}{\\sigma}$$\n* Đại lượng $z$ đo lường: Điểm dữ liệu $x$ đang cách giá trị trung bình $\\mu$ một khoảng bằng bao nhiêu lần độ lệch chuẩn $\\sigma$.\n* Sau khi chuẩn hóa, biến mới luôn có **kỳ vọng trung bình bằng $0$** và **độ lệch chuẩn (phương sai) bằng $1$**.",
    "slideRef": "Slide Chương 2, Trang 35-36"
  },
  {
    "id": 39,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Một thuộc tính có $x_{\\min} = 10$ và $x_{\\max} = 50$. Áp dụng Chuẩn hóa Min-Max, giá trị $x = 30$ sẽ được chuyển đổi thành bao nhiêu?",
    "options": [
      "$0.25$",
      "$0.50$",
      "$0.75$",
      "$0.40$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nÁp dụng công thức Min-Max:\n$$x' = \\frac{x - x_{\\min}}{x_{\\max} - x_{\\min}} = \\frac{30 - 10}{50 - 10} = \\frac{20}{40} = 0.50$$",
    "slideRef": "Slide Chương 2, Trang 33"
  },
  {
    "id": 40,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Một phân phối điểm thi có trung bình $\\mu = 40$ và độ lệch chuẩn $\\sigma = 5$. Điểm số $x = 55$ sau khi chuẩn hóa Z-score sẽ nhận giá trị $z$ bằng bao nhiêu?",
    "options": [
      "$1.5$",
      "$2.0$",
      "$3.0$",
      "$-3.0$"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nÁp dụng công thức Z-score:\n$$z = \\frac{x - \\mu}{\\sigma} = \\frac{55 - 40}{5} = \\frac{15}{5} = +3.0$$\n* Ý nghĩa: Học sinh này đạt mức điểm cao hơn điểm trung bình của cả lớp đúng 3 lần độ lệch chuẩn.",
    "slideRef": "Slide Chương 2, Trang 35"
  },
  {
    "id": 41,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Nguy cơ lớn nhất khi sử dụng Label Encoding cho biến danh mục không có thứ bậc (như Màu sắc: Đỏ, Xanh, Vàng) là gì?",
    "options": [
      "Làm tăng số lượng cột lên gấp đôi",
      "Vô tình tạo ra một quan hệ thứ tự và khoảng cách số học giả tạo giữa các danh mục ($2 > 1 > 0$)",
      "Làm mất mát toàn bộ dữ liệu số thực",
      "Khiến mô hình không thể hội tụ bằng Gradient Descent"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Nếu mã hóa: `Đỏ = 0, Xanh = 1, Vàng = 2`.\n* Máy tính sẽ ngầm hiểu: $\\text{Vàng} > \\text{Xanh} > \\text{Đỏ}$, và thậm chí $\\text{Đỏ} (0) + \\text{Vàng} (2) = 2 \\times \\text{Xanh} (1)$!\n* Điều này phi lý về mặt logic. Do đó, **Label Encoding chỉ được dùng cho biến có thứ tự tự nhiên** (như Trình độ học vấn: Cấp 1, Cấp 2, Cấp 3, Đại học; hoặc Size áo: S, M, L, XL).",
    "slideRef": "Slide Chương 2, Trang 37"
  },
  {
    "id": 42,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Kỹ thuật One-Hot Encoding biến đổi một thuộc tính có $K$ giá trị danh mục khác nhau thành cấu trúc như thế nào?",
    "options": [
      "Một cột duy nhất chứa các số nguyên từ $0$ đến $K-1$",
      "$K$ cột nhị phân riêng biệt ($0$ hoặc $1$), trong đó tại mỗi dòng chỉ có duy nhất 1 cột nhận giá trị $1$",
      "$K^2$ cột ma trận chuyển vị",
      "Một vector số thực liên tục có độ dài bằng $K/2$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Với $K$ trạng thái danh mục (ví dụ Hà Nội, Đà Nẵng, TP.HCM $\\to K = 3$), One-Hot Encoding sinh ra $3$ cột mới:\n  * Hà Nội: `[1, 0, 0]`\n  * Đà Nẵng: `[0, 1, 0]`\n  * TP.HCM: `[0, 0, 1]`\n* Các vector này trực giao và có khoảng cách đối xứng bình đẳng, không áp đặt thứ tự giả.",
    "slideRef": "Slide Chương 2, Trang 38"
  },
  {
    "id": 43,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Sự khác biệt căn bản giữa Lựa chọn đặc trưng (Feature Selection) và Rút trích đặc trưng (Feature Extraction) là gì?",
    "options": [
      "Selection tạo ra các đặc trưng hoàn toàn mới; Extraction giữ nguyên các biến cũ",
      "Feature Selection chỉ giữ lại hoặc loại bỏ tập con các biến ban đầu; Feature Extraction dùng phép biến đổi toán học để tạo ra không gian đặc trưng mới có số chiều thấp hơn",
      "Selection chỉ dùng cho hồi quy; Extraction chỉ dùng cho phân loại",
      "Cả hai hoàn toàn giống nhau chỉ khác tên gọi"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n| Tiêu chí | Feature Selection (Lựa chọn) | Feature Extraction (Rút trích) |\n| :--- | :--- | :--- |\n| **Bản chất** | **\"Sàng lọc & Giữ lại\"** | **\"Nhào nặn & Tạo mới\"** |\n| **Biến mới** | **KHÔNG tạo biến mới**, giữ nguyên ý nghĩa vật lý ban đầu. | **CÓ tạo ra các biến mới** (tổ hợp toán học từ các biến cũ). |\n| **Ví dụ** | Lasso ($L_1$), Lọc tương quan Pearson, RFE. | **PCA**, t-SNE, LDA. |",
    "slideRef": "Slide Chương 2, Trang 42-43"
  },
  {
    "id": 44,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Hiện tượng 'Lời nguyền số chiều' (Curse of Dimensionality) dẫn đến hệ quả tiêu cực nào sau đây?",
    "options": [
      "Không gian trở nên cực kỳ thưa thớt (Sparse), khoảng cách giữa các cặp điểm đều trở nên xấp xỉ bằng nhau khiến các thuật toán dựa vào khoảng cách (KNN, K-Means) bị vô hiệu hóa",
      "Dung lượng bộ nhớ giảm đi đáng kể",
      "Mô hình không bao giờ bị Overfitting",
      "Thời gian tính toán của mô hình giảm về 0"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nKhi số chiều $p$ tăng vọt lên hàng trăm, hàng nghìn chiều:\n1. **Thể tích không gian tăng theo cấp số nhân:** Dữ liệu trở nên cực kỳ thưa thớt như vài hạt cát giữa vũ trụ mênh mông.\n2. **Khoảng cách Euclidean bị bão hòa:** Khoảng cách giữa 2 điểm bất kỳ đều to như nhau, khiến KNN hoặc K-Means không thể phân biệt được điểm nào gần, điểm nào xa.\n3. **Mô hình bị Overfitting nặng:** Đòi hỏi số lượng dữ liệu lớn khủng khiếp để lấp đầy không gian.",
    "slideRef": "Slide Chương 2, Trang 50"
  },
  {
    "id": 45,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Thuật toán Phân tích Thành phần Chính (PCA - Principal Component Analysis) thuộc nhóm phương pháp học nào?",
    "options": [
      "Học có giám sát (Supervised Learning)",
      "Học không giám sát (Unsupervised Learning)",
      "Học bán giám sát (Semi-Supervised Learning)",
      "Học tăng cường (Reinforcement Learning)"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **PCA là Học không giám sát (Unsupervised Learning):**\n  * PCA **HOÀN TOÀN KHÔNG BIẾT VÀ KHÔNG SỬ DỤNG NHÃN $y$**!\n  * Nó chỉ nhìn vào cấu trúc hình học và sự phân tán của ma trận đặc trưng đầu vào $X$ để tìm các trục chiếu trực giao tối ưu.",
    "slideRef": "Slide Chương 2, Trang 53"
  },
  {
    "id": 46,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Mục tiêu tối ưu hóa hình học cốt lõi của thuật toán PCA khi chiếu dữ liệu sang không gian mới là gì?",
    "options": [
      "Tối thiểu hóa khoảng cách giữa các tâm cụm",
      "Bảo toàn tối đa phương sai (Variance) của dữ liệu, đồng thời triệt tiêu hoàn toàn tương quan giữa các trục mới (hiệp phương sai = 0)",
      "Tối đa hóa số lượng mẫu dữ liệu",
      "Ép tất cả các điểm dữ liệu nằm trên một đường tròn"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nHai mục tiêu tối thượng của PCA:\n1. **Bảo toàn phương sai tối đa (Maximize Variance):** Hướng nào mà các điểm dữ liệu tản mát rộng nhất thì chứa nhiều thông tin nhất $implies$ Chọn làm Thành phần chính 1 (PC1).\n2. **Triệt tiêu tương quan:** Các thành phần chính tiếp theo (PC2, PC3...) bắt buộc phải **vuông góc (trực giao)** với các thành phần trước đó, loại bỏ hoàn toàn thông tin dư thừa lặp lại giữa các biến.",
    "slideRef": "Slide Chương 2, Trang 53, 59"
  },
  {
    "id": 47,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Bước tiền xử lý nào BẮT BUỘC phải thực hiện đầu tiên trong quy trình PCA trước khi tính ma trận hiệp phương sai?",
    "options": [
      "Chuẩn hóa Min-Max về khoảng $[0, 1]$",
      "Tâm hóa dữ liệu (Data Centering) bằng cách lấy từng điểm trừ đi vector trung bình: $X_{centered} = X - \\bar{x}$",
      "Mã hóa One-Hot toàn bộ bảng",
      "Chia tập dữ liệu thành 10 Folds"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Tâm hóa dữ liệu (Zero-centering):**\n  $$X_{centered} = X - \\bar{x}$$\n* Thao tác này giúp **dời toàn bộ đám mây dữ liệu về gốc tọa độ $(0, 0)$** mà không làm thay đổi hình dáng hay khoảng cách tương đối giữa các điểm.\n* Nếu không tâm hóa, công thức tính hiệp phương sai $\\Sigma = \\frac{1}{n-1} X^TX$ sẽ bị sai lệch hoàn toàn.",
    "slideRef": "Slide Chương 2, Trang 55, 60, 64"
  },
  {
    "id": 48,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Trong ma trận hiệp phương sai (Covariance Matrix $\\Sigma$) của dữ liệu đã tâm hóa, các phần tử nằm trên đường chéo chính biểu diễn đại lượng nào?",
    "options": [
      "Mức độ tương quan giữa các cặp đặc trưng khác nhau",
      "Phương sai (Variance) của từng đặc trưng riêng lẻ",
      "Nghịch đảo của các giá trị trung bình",
      "Tổng sai số bình phương phần dư"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nMa trận hiệp phương sai $\\Sigma$ kích thước $(p \\times p)$:\n* **Đường chéo chính (vị trí $(j, j)$):** Là $\\text{Cov}(x_j, x_j) = \\text{Var}(x_j)$ — **Phương sai của thuộc tính thứ $j$**.\n* **Các phần tử ngoài đường chéo (vị trí $(j, k)$ với $j \\ne k$):** Là $\\text{Cov}(x_j, x_k)$ — **Hiệp phương sai giữa hai thuộc tính $j$ và $k$**.",
    "slideRef": "Slide Chương 2, Trang 56"
  },
  {
    "id": 49,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Trong bài toán PCA, Vector riêng (Eigenvector) và Trị riêng (Eigenvalue) của ma trận hiệp phương sai mang ý nghĩa hình học gì?",
    "options": [
      "Eigenvector chỉ độ lớn; Eigenvalue chỉ hướng",
      "Eigenvector xác định HƯỚNG của trục thành phần chính mới; Eigenvalue biểu thị ĐỘ LỚN PHƯƠNG SAI (lượng thông tin) dọc theo hướng đó",
      "Cả hai đều biểu thị số lượng mẫu của tập train",
      "Eigenvector là ma trận nghịch đảo của Eigenvalue"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nPhương trình đặc trưng: $\\Sigma v = \\lambda v$\n* **Vector riêng ($v$):** Là vector đơn vị định hình **HƯỚNG của trục tọa độ mới**.\n* **Trị riêng ($\\lambda$):** Là một số thực đo lường **ĐỘ LỚN PHƯƠNG SAI** của dữ liệu khi chiếu lên trục đó. Trị riêng càng lớn thì trục đó càng giữ lại nhiều thông tin quý giá!",
    "slideRef": "Slide Chương 2, Trang 57-59"
  },
  {
    "id": 50,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Sau khi tìm được các Trị riêng (Eigenvalues) và Vector riêng (Eigenvectors), bước tiếp theo trong quy trình PCA là gì?",
    "options": [
      "Sắp xếp các Trị riêng theo thứ tự GIẢM DẦN ($\\lambda_1 \\ge \\lambda_2 \\ge \\dots \\ge \\lambda_p$) cùng các Vector riêng tương ứng",
      "Tính đạo hàm bậc hai của ma trận hiệp phương sai",
      "Xóa bỏ tất cả các Trị riêng có giá trị dương",
      "Đổi dấu toàn bộ các phần tử của vector riêng"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Vì mục tiêu của ta là giữ lại các hướng có phương sai lớn nhất:\n  * Ta xếp: $\\lambda_1 \\ge \\lambda_2 \\ge \\dots \\ge \\lambda_p \\ge 0$.\n  * Vector $v_1$ tương ứng với $\\lambda_1$ lớn nhất chính là **Thành phần chính 1 (PC1)**.\n  * Vector $v_2$ tương ứng với $\\lambda_2$ lớn nhì chính là **Thành phần chính 2 (PC2)**.",
    "slideRef": "Slide Chương 2, Trang 61, 65"
  },
  {
    "id": 51,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Tỷ lệ phương sai giải thích (Explained Variance Ratio - EVR) của thành phần chính thứ $k$ được tính bằng công thức nào?",
    "options": [
      "$\\text{EVR}_k = \\lambda_k \\times \\sum_{j=1}^p \\lambda_j$",
      "$\\text{EVR}_k = \\frac{\\lambda_k}{\\sum_{j=1}^p \\lambda_j}$",
      "$\\text{EVR}_k = \\frac{\\sum_{j=1}^p \\lambda_j}{\\lambda_k}$",
      "$\\text{EVR}_k = \\sqrt{\\lambda_k}$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n$$\\text{EVR}_k = \\frac{\\lambda_k}{\\sum_{j=1}^p \\lambda_j}$$\n* **Ý nghĩa:** Cho biết thành phần chính thứ $k$ **nắm giữ bao nhiêu phần trăm thông tin (phương sai)** của toàn bộ bộ dữ liệu gốc $p$ chiều.",
    "slideRef": "Slide Chương 2, Trang 67"
  },
  {
    "id": 52,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Một tập dữ liệu 3 chiều có các trị riêng tính được là $\\lambda_1 = 6.0, \\lambda_2 = 3.0, \\lambda_3 = 1.0$. Tỷ lệ phương sai giải thích của Thành phần chính 1 (PC1) là bao nhiêu?",
    "options": [
      "$30\\%$",
      "$60\\%$",
      "$90\\%$",
      "$10\\%$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Tổng các trị riêng:\n  $$\\sum_{j=1}^3 \\lambda_j = 6.0 + 3.0 + 1.0 = 10.0$$\n* Tỷ lệ phương sai giải thích của PC1:\n  $$\\text{EVR}_1 = \\frac{6.0}{10.0} = 0.6 = 60\\%$$",
    "slideRef": "Slide Chương 2, Trang 67"
  },
  {
    "id": 53,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Tổng tỷ lệ phương sai giải thích (EVR) của toàn bộ $p$ thành phần chính luôn luôn bằng bao nhiêu?",
    "options": [
      "Bằng $0$",
      "Phụ thuộc vào số lượng mẫu $n$",
      "Luôn luôn bằng đúng $1.0$ (tức $100\\%$)",
      "Bằng giá trị trung bình $\\mu$"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nVì tử số là từng trị riêng và mẫu số là tổng của tất cả các trị riêng:\n$$\\sum_{k=1}^p \\text{EVR}_k = \\frac{\\sum_{k=1}^p \\lambda_k}{\\sum_{j=1}^p \\lambda_j} = 1.0 \\quad (100\\%)$$\n* Toàn bộ $p$ thành phần chính cộng lại luôn bảo toàn $100\\%$ phương sai của không gian gốc.",
    "slideRef": "Slide Chương 2, Trang 67"
  },
  {
    "id": 54,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Các thành phần chính (Principal Components) do thuật toán PCA tạo ra có mối quan hệ hình học và thống kê nào sau đây?",
    "options": [
      "Chúng song song với nhau và có tương quan bằng 1",
      "Chúng trực giao (vuông góc) đôi một và có hiệp phương sai bằng 0 (triệt tiêu hoàn toàn tương quan tuyến tính)",
      "Chúng cắt nhau tại góc 45 độ",
      "Chúng luôn có độ dài bằng nhau và bằng vô cùng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Trực giao đôi một (Orthogonal):** $v_i^T v_j = 0$ với mọi $i \\ne j$.\n* **Triệt tiêu tương quan:** Ma trận hiệp phương sai của dữ liệu trong không gian mới là ma trận đường chéo, nghĩa là mọi thành phần chính đều độc lập tuyến tính với nhau, loại bỏ hoàn toàn hiện tượng đa cộng tuyến.",
    "slideRef": "Slide Chương 2, Trang 54, 61"
  },
  {
    "id": 55,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Dữ liệu dạng văn bản thô (Text) thường được biểu diễn thành các vector số học thông qua những kỹ thuật nào?",
    "options": [
      "Chỉ dùng Min-Max Normalization",
      "Túi từ (Bag-of-Words), TF-IDF hoặc Word Embeddings (Word2Vec, BERT embeddings)",
      "Lập trình hướng đối tượng OOP",
      "Giải thuật Dijkstra"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nMáy tính không thể trực tiếp thực hiện phép toán trên ký tự văn bản:\n* **Bag-of-Words (BoW):** Đếm tần số xuất hiện của từng từ vựng trong văn bản.\n* **TF-IDF:** Cân nhắc trọng số từ vựng (từ xuất hiện nhiều trong câu nhưng hiếm trong kho tài liệu thì mang ý nghĩa quan trọng).\n* **Word Embeddings (Word2Vec, FastText, Transformer):** Ánh xạ từ ngữ vào không gian vector nhiều chiều phản ánh ngữ nghĩa học.",
    "slideRef": "Slide Chương 2, Trang 45"
  },
  {
    "id": 56,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Kỹ thuật Rời rạc hóa (Binning / Discretization) thực hiện thao tác biến đổi nào trên dữ liệu?",
    "options": [
      "Gom các giá trị số liên tục thành các khoảng/nhóm danh mục (ví dụ Tuổi liên tục gom thành nhóm Trẻ, Trung niên, Già)",
      "Xóa bỏ các cột có chứa số 0",
      "Chuyển đổi văn bản thành chữ in hoa",
      "Sắp xếp bảng dữ liệu theo thứ tự bảng chữ cái"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Binning (Rời rạc hóa / Chia thùng):**\n  * Chia một biến số thực liên tục thành các khoảng giá trị rời rạc.\n  * 💡 **Ví dụ:** Cột Tuổi từ $0 - 100$ được chia thành: Nhóm $[0 - 18)$ (Trẻ em), $[18 - 60)$ (Trưởng thành), $[60 - 100]$ (Người cao tuổi).\n  * Giúp giảm độ nhạy với ngoại lai và cho phép mô hình học các phi tuyến đơn giản.",
    "slideRef": "Slide Chương 2, Trang 39"
  },
  {
    "id": 57,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Khi thu thập dữ liệu bằng kỹ thuật Crawling & Scraping trên mạng Internet, thách thức tiền xử lý lớn nhất là gì?",
    "options": [
      "Dữ liệu luôn luôn có sẵn định dạng số hoàn hảo",
      "Dữ liệu bán cấu trúc lẫn nhiều tạp chất (thẻ HTML, quảng cáo rác, văn bản trùng lặp và thiếu cấu trúc chuẩn mực)",
      "Không thể lưu trữ được vào file văn bản",
      "Tất cả các trang web đều dùng cùng một chuẩn schema"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Dữ liệu cào web (Web Scraping) là dữ liệu thô bán cấu trúc:\n  * Trộn lẫn mã JavaScript, thẻ HTML (`<div>`, `<span>`), banner quảng cáo, menu điều hướng.\n  * Đòi hỏi quy trình bóc tách (Parsing), làm sạch (Regex cleaning), loại bỏ trùng lặp (Deduplication) cực kỳ công phu trước khi có thể huấn luyện mô hình.",
    "slideRef": "Slide Chương 2, Trang 15"
  },
  {
    "id": 58,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Phép chiếu PCA từ không gian 2 chiều xuống không gian 1 chiều thực hiện ánh xạ các điểm dữ liệu như thế nào?",
    "options": [
      "Gán tất cả các điểm về gốc tọa độ $(0, 0)$",
      "Chiếu vuông góc (trực giao) từng điểm dữ liệu đã tâm hóa lên đường thẳng thành phần chính 1 (PC1)",
      "Xóa bỏ ngẫu nhiên 50% số điểm dữ liệu",
      "Uốn cong không gian thành hình xoắn ốc"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Khi giảm chiều từ 2D xuống 1D:\n  * PCA tìm đường thẳng tốt nhất (PC1) sao cho tổng khoảng cách bình phương từ các điểm đến đường thẳng là nhỏ nhất (tương đương với phương sai các hình chiếu là lớn nhất).\n  * Mỗi điểm dữ liệu $x_i$ được **chiếu trực giao (vuông góc)** lên đường thẳng PC1, tọa độ mới là khoảng cách có hướng từ gốc tọa độ đến hình chiếu.",
    "slideRef": "Slide Chương 2, Trang 62, 66"
  },
  {
    "id": 59,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Đặc trưng dư thừa (Redundant Feature) được định nghĩa là gì trong quá trình Feature Engineering?",
    "options": [
      "Đặc trưng chứa toàn bộ giá trị rỗng NaN",
      "Đặc trưng lặp lại thông tin đã có ở một hoặc nhiều đặc trưng khác (có tương quan tuyến tính rất cao với các biến khác)",
      "Đặc trưng có giá trị phương sai cực lớn",
      "Đặc trưng là nhãn mục tiêu cần dự đoán"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Đặc trưng dư thừa:** Ví dụ bảng dữ liệu có cả 2 cột:\n  * Cột 1: *Năm sinh*\n  * Cột 2: *Tuổi* (với $\\text{Tuổi} = 2026 - \\text{Năm sinh}$)\n* Cột Tuổi hoàn toàn không mang lại thêm bất kỳ thông tin mới nào cho mô hình! Nó gây ra hiện tượng **Đa cộng tuyến hoàn hảo**, làm phình to ma trận và khiến các thuật toán hồi quy bị bất ổn.",
    "slideRef": "Slide Chương 2, Trang 41, 47"
  },
  {
    "id": 60,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Tiêu chí nào sau đây thường được dùng phổ biến nhất để lựa chọn số chiều $K$ cần giữ lại trong thuật toán PCA?",
    "options": [
      "Chọn $K$ sao cho tổng tỷ lệ phương sai giải thích tích lũy (Cumulative EVR) đạt một ngưỡng mong muốn (thường từ $85\\% - 95\\%$), hoặc dùng đồ thị Scree Plot (phương pháp Elbow)",
      "Luôn luôn chọn $K = 1$ trong mọi bài toán",
      "Chọn $K$ bằng đúng số chiều ban đầu $p$",
      "Chọn $K$ bằng số lượng mẫu $n$"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nHai phương pháp chuẩn mực để chọn số chiều $K$:\n1. **Ngưỡng phương sai tích lũy:** Cộng dồn tỷ lệ phương sai $\\sum_{k=1}^K \\text{EVR}_k \\ge 90\\%$ (hoặc $95\\%$). Nén giảm được số chiều tối đa mà vẫn giữ lại được $90\\%$ tinh hoa thông tin gốc.\n2. **Phương pháp Điểm uốn (Elbow / Scree Plot):** Vẽ biểu đồ trị riêng giảm dần. Chọn điểm mà đồ thị bắt đầu gãy khúc nằm ngang (phần phương sai còn lại chỉ là nhiễu không đáng kể).",
    "slideRef": "Slide Chương 2, Trang 67"
  },
  {
    "id": 261,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Trong 4 chiều chất lượng dữ liệu, chiều nào phản ánh việc dữ liệu tuân thủ cùng một quy chuẩn, định dạng và đơn vị đo lường thống nhất trên toàn bộ hệ thống?",
    "options": [
      "Tính đầy đủ (Completeness)",
      "Tính nhất quán / đồng nhất (Consistency)",
      "Tính kịp thời (Timeliness)",
      "Tính khả chuyển (Portability)"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Tính đồng nhất / nhất quán (Consistency):** Đảm bảo không có sự mâu thuẫn nội tại về mặt biểu diễn hoặc quy ước trong cùng một tập dữ liệu:\n  * Chiều cao: Người ghi mét ($1.72m$), người ghi centimet ($172cm$).\n  * Ngày tháng: Cột ghi `YYYY-MM-DD`, cột ghi `DD/MM/YYYY`.\n  * Tiền tệ: Người ghi USD, người ghi VNĐ.\n* Chuẩn hóa tính đồng nhất là nhiệm vụ sống còn đầu tiên của bước làm sạch dữ liệu.",
    "slideRef": "Slide Chương 2, Trang 7-10"
  },
  {
    "id": 262,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Cơ chế dữ liệu khuyết Missing Completely at Random (MCAR - Khuyết hoàn toàn ngẫu nhiên) có đặc điểm cốt lõi nào sau đây?",
    "options": [
      "Dữ liệu chỉ bị khuyết đối với những người có thu nhập cao",
      "Xác suất dữ liệu bị thiếu phụ thuộc vào một biến quan sát khác trong bảng",
      "Xác suất bị thiếu của một ô dữ liệu là hoàn toàn ngẫu nhiên, độc lập với cả giá trị của chính nó lẫn mọi biến số khác trong tập dữ liệu",
      "Dữ liệu bị thiếu do thuật toán tự động xóa bỏ"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nBa cơ chế dữ liệu khuyết thiếu theo lý thuyết của Rubin (1976):\n1. **MCAR (Missing Completely at Random):** Thiếu hoàn toàn ngẫu nhiên (ví dụ: gió thổi bay mất một tờ phiếu khảo sát, hoặc một gói tin mạng bị rơi ngẫu nhiên). Việc xóa các dòng MCAR không làm thiên lệch phân phối mẫu.\n2. **MAR (Missing at Random):** Khuyết có điều kiện (ví dụ: phụ nữ ít khai báo cân nặng hơn nam giới, nhưng sau khi kiểm soát biến giới tính thì tính chất thiếu là ngẫu nhiên).\n3. **MNAR (Missing Not at Random):** Khuyết không ngẫu nhiên (ví dụ: những người trốn thuế hoặc có thu nhập cực khủng luôn cố tình bỏ trống ô kê khai tài sản).",
    "slideRef": "Slide Chương 2, Trang 14-16"
  },
  {
    "id": 263,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Khi dữ liệu bị khuyết thuộc dạng Missing Not at Random (MNAR, ví dụ người thu nhập cực cao cố tình giấu thu nhập), cách xử lý nào sau đây là thông minh và giữ được tín hiệu dự đoán tốt nhất?",
    "options": [
      "Bắt buộc xóa bỏ tất cả các dòng bị khuyết đó",
      "Điền giá trị trung bình cộng Mean rồi coi như không có chuyện gì",
      "Điền giá trị thay thế (như Median) kết hợp TẠO THÊM MỘT CỘT CỜ NHỊ PHÂN MỚI (Missing Indicator Flag: $1$ nếu bị thiếu, $0$ nếu có sẵn) để mô hình học được tín hiệu ẩn",
      "Gán tất cả các ô thiếu thành số âm vô cùng"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Tín hiệu trong sự vắng mặt:** Khi dữ liệu là MNAR, **chính hành vi bỏ trống ô dữ liệu đã là một đặc trưng quý giá** (người bỏ trống ô thu nhập có xác suất là đại gia giàu có cao hơn người bình thường).\n* Nếu chỉ điền Median đơn thuần, ta đã xóa sạch dấu vết này.\n* **Kỹ thuật Missing Indicator:** Tạo cột cờ `is_income_missing`:\n  * Ô nào có sẵn số: điền bình thường, cờ $= 0$.\n  * Ô nào bị thiếu: điền Median vào ô thu nhập, đồng thời bật cờ $= 1$.\n  * Mô hình học máy sẽ sử dụng cột cờ này như một đặc trưng phân loại quan trọng!",
    "slideRef": "Slide Chương 2, Trang 16-18"
  },
  {
    "id": 264,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Trong phương pháp phát hiện ngoại lai bằng Quy tắc Hàng rào Tukey (Boxplot), ngưỡng xác định 'Ngoại lai cực đoan' (Extreme Outliers) nằm ngoài khoảng nào sau đây?",
    "options": [
      "$[Q_1 - 1.5 \\times \\text{IQR}, Q_3 + 1.5 \\times \\text{IQR}]$",
      "$[Q_1 - 3.0 \\times \\text{IQR}, Q_3 + 3.0 \\times \\text{IQR}]$",
      "$[\\mu - 2\\sigma, \\mu + 2\\sigma]$",
      "$[x_{\\min}, x_{\\max}]$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nVới khoảng tứ phân vị $\\text{IQR} = Q_3 - Q_1$:\n* **Hàng rào trong (Ngoại lai nhẹ / Mild Outliers):** Nằm ngoài khoảng:\n  $$[Q_1 - 1.5 \\times \\text{IQR}, \\quad Q_3 + 1.5 \\times \\text{IQR}]$$\n* **Hàng rào ngoài (Ngoại lai cực đoan / Extreme Outliers):** Nằm ngoài khoảng:\n  $$[Q_1 - 3.0 \\times \\text{IQR}, \\quad Q_3 + 3.0 \\times \\text{IQR}]$$",
    "slideRef": "Slide Chương 2, Trang 23-25"
  },
  {
    "id": 265,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Kỹ thuật Winsorization xử lý các giá trị ngoại lai (Outliers) theo cơ chế biến đổi nào?",
    "options": [
      "Xóa bỏ hoàn toàn các dòng dữ liệu có chứa ngoại lai",
      "Thay thế các giá trị vượt ngưỡng bằng giá trị của phân vị giới hạn xác định (ví dụ co các giá trị nhỏ hơn phân vị 1% về phân vị 1%, và lớn hơn phân vị 99% về phân vị 99%)",
      "Lấy logarit tự nhiên của toàn bộ cột",
      "Nhân tất cả các ngoại lai với số 0"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Winsorization (Cắt ngọn / Co cụm phân vị):** Thay vì xóa bỏ mẫu làm giảm kích thước dữ liệu quý giá:\n  * Ta ấn định ngưỡng phân vị trên (ví dụ $99\\%$) và ngưỡng phân vị dưới (ví dụ $1\\%$).\n  * Mọi giá trị lớn hơn mốc $99\\%$ được ép co về bằng đúng giá trị mốc $99\\%$.\n  * Mọi giá trị nhỏ hơn mốc $1\\%$ được ép co về bằng đúng mốc $1\\%$.\n* Cách làm này giúp \"thuần hóa\" các điểm ngoại lai điên rồ mà vẫn giữ nguyên số lượng quan sát của tập dữ liệu.",
    "slideRef": "Slide Chương 2, Trang 26"
  },
  {
    "id": 266,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Hiện tượng 'Bẫy biến giả' (Dummy Variable Trap) xảy ra khi nào trong quá trình mã hóa One-Hot Encoding?",
    "options": [
      "Khi một biến danh mục có $K$ trạng thái nhưng ta lại tạo đủ cả $K$ cột nhị phân trong mô hình có chứa hệ số chặn bias ($w_0$), gây ra hiện tượng Đa cộng tuyến hoàn hảo (Multicollinearity)",
      "Khi mã hóa chữ hoa thành chữ thường",
      "Khi số lượng danh mục vượt quá 1000",
      "Khi sử dụng GPU để train mạng nơ-ron"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Dummy Variable Trap (Bẫy biến giả):**\n  * Giả sử biến Giới tính có 2 trạng thái: Nam và Nữ. Nếu ta tạo đủ 2 cột `Is_Nam` và `Is_Nu`:\n    $$\\text{Is\\_Nam} + \\text{Is\\_Nu} = 1$$\n  * Tổng 2 cột này luôn bằng $1$, trùng khớp hoàn hảo với cột bias hệ số chặn $x_0 = 1$!\n  * Ma trận $X^T X$ sẽ bị suy biến (không khả nghịch), khiến việc giải nghiệm OLS bị sụp đổ!\n* 🛡️ **Giải pháp:** Với biến có $K$ danh mục, ta **chỉ tạo $K-1$ cột biến giả** (ví dụ tham số `drop='first'` trong Scikit-learn), danh mục còn lại được làm mốc tham chiếu cơ sở (Base category).",
    "slideRef": "Slide Chương 2, Trang 34-36"
  },
  {
    "id": 267,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Khi áp dụng Target Encoding (Mean Encoding) cho biến danh mục có độ lực lượng cao (nhiều nhóm), nguy cơ tiềm ẩn lớn nhất là gì?",
    "options": [
      "Làm bảng dữ liệu phình to thêm hàng nghìn cột",
      "Bị rò rỉ dữ liệu mục tiêu (Target Leakage) dẫn đến Overfitting nghiêm trọng, đặc biệt ở các nhóm danh mục có quá ít mẫu",
      "Khiến tất cả các giá trị biến thành số nguyên",
      "Mất mát toàn bộ thông tin nhãn lớp"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Target Encoding:** Thay mỗi danh mục bằng giá trị trung bình của nhãn mục tiêu $y$ thuộc danh mục đó.\n* ⚠️ **Nguy cơ Overfitting & Target Leakage:** Nếu một danh mục hiếm chỉ xuất hiện duy nhất 1 lần trong tập Train với nhãn $y = 1$, mô hình sẽ gán cho danh mục đó giá trị $1.0$. Khi học, mô hình sẽ coi danh mục này là dự đoán $100\\%$ chính xác $\\implies$ Học vẹt!\n* Khắc phục: Phải dùng K-Fold Target Encoding và kỹ thuật làm mịn (Smoothing / Regularization).",
    "slideRef": "Slide Chương 2, Trang 37-38"
  },
  {
    "id": 268,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Bộ chuẩn hóa RobustScaler trong thư viện Scikit-learn sử dụng các đại lượng thống kê nào để chuẩn hóa đặc trưng nhằm chống lại sự ảnh hưởng của ngoại lai?",
    "options": [
      "Giá trị nhỏ nhất $x_{\\min}$ và lớn nhất $x_{\\max}$",
      "Giá trị trung bình cộng $\\mu$ và phương sai $\\sigma^2$",
      "Trung vị (Median) và Khoảng tứ phân vị (Interquartile Range - $\\text{IQR} = Q_3 - Q_1$)",
      "Độ dốc gradient và hệ số học learning rate"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCông thức của RobustScaler:\n$$x_{robust} = \\frac{x - \\text{Median}}{\\text{IQR}} = \\frac{x - Q_2}{Q_3 - Q_1}$$\n* Thay vì trừ Mean và chia Standard Deviation (vốn rất dễ bị méo mó bởi ngoại lai), RobustScaler sử dụng **Median** và **IQR** — hai đại lượng thống kê phi tham số có tính kháng cự ngoại lai (Robust) tuyệt đối.",
    "slideRef": "Slide Chương 2, Trang 43-45"
  },
  {
    "id": 269,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Cho thuộc tính $x$ có $x_{\\min} = 20$ và $x_{\\max} = 100$. Khi chuẩn hóa $x$ về đoạn $[-1, 1]$, giá trị $x = 60$ sẽ trở thành bao nhiêu?",
    "options": [
      "$-0.5$",
      "$0.0$",
      "$0.5$",
      "$1.0$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCông thức chuẩn hóa về khoảng tùy ý $[a, b]$:\n$$x' = a + \\frac{x - x_{\\min}}{x_{\\max} - x_{\\min}} (b - a)$$\nVới $[a, b] = [-1, 1]$:\n* Bước 1: Chuẩn hóa về $[0, 1]$:\n  $$x_{std} = \\frac{60 - 20}{100 - 20} = \\frac{40}{80} = 0.5$$\n* Bước 2: Ánh xạ sang $[-1, 1]$:\n  $$x' = -1 + 0.5 \\times (1 - (-1)) = -1 + 0.5 \\times 2 = 0.0$$",
    "slideRef": "Slide Chương 2, Trang 41-42"
  },
  {
    "id": 270,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Cho một tập dữ liệu có giá trị trung bình $\\mu = 50$ và độ lệch chuẩn $\\sigma = 10$. Điểm số $x = 75$ có giá trị chuẩn hóa Z-score là bao nhiêu?",
    "options": [
      "$1.5$",
      "$2.0$",
      "$2.5$",
      "$3.0$"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nÁp dụng công thức Z-score:\n$$z = \\frac{x - \\mu}{\\sigma} = \\frac{75 - 50}{10} = \\frac{25}{10} = 2.5$$",
    "slideRef": "Slide Chương 2, Trang 42-44"
  },
  {
    "id": 271,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Thuật toán học máy nào sau đây KHÔNG BỊ ẢNH HƯỞNG bởi thang đo của các đặc trưng (không bắt buộc phải chuẩn hóa Scale dữ liệu)?",
    "options": [
      "K-Nearest Neighbors (KNN)",
      "Phân tích Thành phần Chính (PCA)",
      "Hồi quy Tuyến tính có điều chuẩn Ridge ($L_2$)",
      "Cây quyết định (Decision Tree) và Rừng ngẫu nhiên (Random Forest)"
    ],
    "answer": 3,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Các thuật toán nhạy cảm với thang đo (BẮT BUỘC SCALE):**\n  * KNN, K-Means: Tính khoảng cách Euclidean.\n  * PCA: Tìm hướng có phương sai lớn nhất (cột nào đơn vị to phương sai sẽ giả vờ to).\n  * Ridge / Lasso: Phạt độ lớn trọng số $\\lambda w^2$.\n  * Gradient Descent trong Mạng nơ-ron: Bề mặt loss bị méo dạng elip dẹp nếu không scale.\n* **Cây quyết định (Decision Trees) & Mô hình Ensemble (Random Forest, XGBoost):**\n  * Phân nhánh tại mỗi nút chỉ dựa trên quy tắc so sánh ngưỡng đơn biến: *\"Nếu $x_j \\le \\theta$ thì rẽ trái\"*.\n  * Việc nhân thêm một số dương vào $x_j$ không hề làm thay đổi thứ tự tương quan, do đó **Cây quyết định hoàn toàn bất biến trước thang đo**!",
    "slideRef": "Slide Chương 2, Trang 40"
  },
  {
    "id": 272,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Khái niệm 'Lời nguyền số chiều' (Curse of Dimensionality) đề cập đến hiện tượng nào sau đây?",
    "options": [
      "Máy tính bị hỏng khi lưu file CSV quá 100MB",
      "Khi số chiều $p$ tăng cao, thể tích không gian tăng theo hàm mũ khiến mật độ dữ liệu trở nên cực kỳ thưa thớt, khoảng cách giữa các điểm trở nên vô nghĩa và nguy cơ Overfitting tăng vọt",
      "Dữ liệu bị thiếu quá nhiều dòng",
      "Thời gian tính toán của mô hình luôn luôn giảm dần"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Khi số chiều tăng từ 1D lên 100D, thể tích khối cầu nội tiếp trong hình lập phương tiệm cận dần về $0$.\n* Hầu hết thể tích không gian nằm tập trung ở các \"góc nhọn\" xa xôi của hình lập phương.\n* Mọi điểm dữ liệu đều trở thành các điểm cô lập nằm cách xa nhau xấp xỉ bằng nhau $\\implies$ Khiến các thuật toán dựa vào khoảng cách bị mất hoàn toàn khả năng phân biệt.",
    "slideRef": "Slide Chương 2, Trang 48-50"
  },
  {
    "id": 273,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Mục tiêu tối ưu hóa hình học cốt lõi của Thuật toán Phân tích Thành phần Chính (PCA) là gì?",
    "options": [
      "Tìm trục chiếu sao cho các lớp dữ liệu tách xa nhau nhất",
      "Tìm hệ trục tọa độ mới trực giao sao cho dữ liệu chiếu lên có phương sai cực đại (Maximize Variance), tương đương với việc giảm thiểu tối đa sai số tái tạo bình phương (Minimize Reconstruction Error)",
      "Tối đa hóa số lượng đặc trưng",
      "Tối thiểu hóa ma trận nghịch đảo giả"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nHai mặt của cùng một đồng xu trong PCA:\n1. **Góc nhìn Tối đa hóa phương sai (Variance Maximization):** Hướng có phương sai lớn nhất giữ lại nhiều sự biến thiên thông tin nhất của dữ liệu.\n2. **Góc nhìn Tối thiểu hóa sai số tái tạo (Reconstruction Error Minimization):** Tìm không gian con $K$ chiều sao cho khoảng cách vuông góc từ các điểm gốc đến hình chiếu của chúng là nhỏ nhất.",
    "slideRef": "Slide Chương 2, Trang 51-55"
  },
  {
    "id": 274,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Trước khi thực hiện phân rã ma trận để tìm các thành phần chính trong PCA, thao tác tiền xử lý nào là BẮT BUỘC?",
    "options": [
      "Mã hóa One-Hot toàn bộ dữ liệu",
      "Trừ đi giá trị trung bình của từng đặc trưng (Data Centering / Zero-centered) để dời gốc tọa độ về trung tâm đám mây dữ liệu",
      "Xóa bỏ tất cả các giá trị nhỏ hơn 0",
      "Chia tập dữ liệu thành 3 phần Train, Val và Test"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n$$X_{centered} = X - \\bar{X}$$\n* Nếu không trừ vector trung bình $\\bar{X}$, hướng thành phần chính thứ nhất (PC1) sẽ bị kéo lệch về phía vector nối từ gốc tọa độ $(0, 0)$ đến trọng tâm dữ liệu thay vì bám theo hướng phân tán tự nhiên của dữ liệu!",
    "slideRef": "Slide Chương 2, Trang 53"
  },
  {
    "id": 275,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Một ma trận hiệp phương sai của tập dữ liệu 4 chiều có 4 trị riêng: $\\lambda_1 = 5.0, \\lambda_2 = 3.0, \\lambda_3 = 1.5, \\lambda_4 = 0.5$. Tỷ lệ phương sai giải thích tích lũy nếu ta chọn giữ lại $K = 2$ thành phần chính đầu tiên là bao nhiêu?",
    "options": [
      "$50\\%$",
      "$70\\%$",
      "$80\\%$",
      "$95\\%$"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Tổng toàn bộ các trị riêng:\n  $$\\sum_{j=1}^4 \\lambda_j = 5.0 + 3.0 + 1.5 + 0.5 = 10.0$$\n* Phương sai do 2 thành phần chính đầu tiên nắm giữ:\n  $$\\lambda_1 + \\lambda_2 = 5.0 + 3.0 = 8.0$$\n* Tỷ lệ phương sai tích lũy:\n  $$\\text{Cumulative EVR}_2 = \\frac{8.0}{10.0} = 0.8 = 80\\%$$\n* Nén dữ liệu từ 4 chiều xuống 2 chiều vẫn bảo toàn được $80\\%$ lượng thông tin gốc!",
    "slideRef": "Slide Chương 2, Trang 58-60"
  },
  {
    "id": 276,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Tính chất quan trọng nào sau đây là ĐÚNG đối với các vector thành phần chính (Eigenvectors của ma trận hiệp phương sai) trong PCA?",
    "options": [
      "Chúng song song với các trục tọa độ ban đầu",
      "Chúng là một hệ vector trực chuẩn (Orthonormal): Đôi một vuông góc với nhau ($v_i^T v_j = 0$) và có độ dài chuẩn hóa bằng đúng 1 ($\\|v_i\\| = 1$)",
      "Chúng luôn có các phần tử mang giá trị dương",
      "Chúng có số lượng luôn lớn hơn số dòng của tập dữ liệu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Ma trận hiệp phương sai $\\Sigma$ là ma trận thực đối xứng $\\implies$ Theo định lý quang phổ (Spectral Theorem), các vector riêng luôn trực giao đôi một và có thể chuẩn hóa độ dài bằng 1:\n  $$v_i^T v_j = \\begin{cases} 1 & \\text{khi } i = j \\\\ 0 & \\text{khi } i \\ne j \\end{cases}$$\n* Điều này đảm bảo hệ trục tọa độ mới là một hệ trục Đề-các vuông góc chuẩn tắc.",
    "slideRef": "Slide Chương 2, Trang 54-56"
  },
  {
    "id": 277,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Để tái tạo lại xấp xỉ dữ liệu ban đầu $X_{approx}$ kích thước $(n \\times p)$ từ ma trận tọa độ nén $Z$ kích thước $(n \\times K)$ và ma trận chiếu $W$ kích thước $(p \\times K)$, ta dùng công thức nào?",
    "options": [
      "$X_{approx} = Z W$",
      "$X_{approx} = Z W^T + \\bar{x}$ (với $\\bar{x}$ là vector trung bình ban đầu)",
      "$X_{approx} = (Z^T Z)^{-1} W$",
      "$X_{approx} = W Z^T$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Chiều xuôi (Nén dữ liệu từ $p$ chiều về $K$ chiều):**\n  $$Z = X_{centered} W = (X - \\bar{x}) W$$\n* **Chiều ngược (Tái tạo xấp xỉ từ $K$ chiều về $p$ chiều):**\n  Do các cột của $W$ là trực chuẩn ($W^T W = I$), ta nhân $W^T$ vào bên phải:\n  $$X_{centered\\_approx} = Z W^T$$\n  Cộng lại vector trung bình $\\bar{x}$ đã trừ lúc ban đầu:\n  $$X_{approx} = Z W^T + \\bar{x}$$",
    "slideRef": "Slide Chương 2, Trang 61-62"
  },
  {
    "id": 278,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Điểm khác biệt căn bản giữa Phân tích Thành phần Chính (PCA) và Phân tích Biệt thức Tuyến tính (LDA - Linear Discriminant Analysis) là gì?",
    "options": [
      "PCA là phương pháp Học không giám sát (không dùng nhãn $y$, chỉ tối đa hóa phương sai tổng thể); còn LDA là phương pháp Học có giám sát (sử dụng nhãn $y$ để tối đa hóa sự phân tách giữa các lớp)",
      "PCA chỉ dùng cho ảnh; LDA chỉ dùng cho văn bản",
      "PCA làm tăng số chiều; LDA làm giảm số chiều",
      "PCA không dùng đại số tuyến tính; LDA dùng ma trận"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n| Tiêu chí | PCA (Unsupervised) | LDA (Supervised) |\n| :--- | :--- | :--- |\n| **Sử dụng nhãn $y$?** | **KHÔNG** (Học không giám sát). | **CÓ** (Học có giám sát). |\n| **Mục tiêu tối ưu** | Tối đa hóa phương sai dữ liệu tổng quát (tìm hướng tản mát rộng nhất). | Tối đa hóa khoảng cách giữa các tâm lớp, đồng thời tối thiểu hóa phương sai nội tại trong mỗi lớp (tìm hướng phân biệt lớp rõ ràng nhất). |",
    "slideRef": "Slide Chương 2, Trang 63-65"
  },
  {
    "id": 279,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Một nhược điểm lớn khi sử dụng PCA để giảm chiều dữ liệu trong các dự án nghiệp vụ kinh doanh là gì?",
    "options": [
      "Mô hình luôn luôn chạy chậm hơn",
      "Mất đi ý nghĩa vật lý trực quan ban đầu của các biến đặc trưng (mỗi thành phần chính mới là tổ hợp tuyến tính phức tạp của nhiều biến cũ)",
      "Không thể tái tạo lại ảnh nén",
      "Số lượng mẫu dữ liệu bị giảm đi một nửa"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Cái giá phải trả của PCA (Trade-off):**\n  * Trước khi dùng PCA: Cột là *Diện tích*, *Số phòng ngủ*, *Khoảng cách tới bệnh viện* $implies$ Giám đốc kinh doanh đọc là hiểu ngay.\n  * Sau khi dùng PCA: Biến thành $PC_1 = 0.54 \\times \\text{Diện tích} - 0.32 \\times \\text{Số phòng} + 0.12 \\times \\text{Khoảng cách}$ $implies$ Mất đi khả năng giải thích trực quan (Loss of Interpretability) đối với khách hàng và nghiệp vụ.",
    "slideRef": "Slide Chương 2, Trang 65-66"
  },
  {
    "id": 280,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Phát biểu nào sau đây về Thứ tự Tiền xử lý chuẩn mực trong Pipeline Machine Learning để tránh hiện tượng Rò rỉ dữ liệu (Data Leakage) là ĐÚNG?",
    "options": [
      "Tính toán chuẩn hóa Scaler trên TOÀN BỘ dữ liệu trước, sau đó mới chia train_test_split",
      "Thực hiện chia train_test_split ĐẦU TIÊN; sau đó chỉ học các thông số thống kê (Mean, Std, Min, Max, Imputer) trên tập TRAIN (bằng lệnh `.fit()`), rồi mới áp dụng chuyển đổi (`.transform()`) sang cả tập Train và tập Test",
      "Học thông số Scaler trên tập Test rồi chuyển sang tập Train",
      "Bỏ qua bước chuẩn hóa dữ liệu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* ⚠️ **Nguyên tắc vàng chống Data Leakage:**\n  1. Phải chia dữ liệu thành **Train Set và Test Set trước tiên**.\n  2. Các bước tiền xử lý (Imputer điền giá trị thiếu, Scaler chuẩn hóa Z-score/Min-Max):\n     * Chỉ được gọi hàm `.fit()` (học $\\mu, \\sigma, x_{\\min}, x_{\\max}$) **DUY NHẤT TRÊN TẬP TRAIN**.\n     * Sau đó dùng chính các thông số đã học này để gọi `.transform()` cho cả tập Train và tập Test.\n  3. Tuyệt đối không để tập Train \"nhìn trộm\" giá trị trung bình hay phân phối của tập Test!",
    "slideRef": "Slide Chương 2, Trang 67-68"
  },
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
  },
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
  },
  {
    "id": 146,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Bài toán phân cụm (Clustering) thuộc loại phương pháp học máy nào?",
    "options": [
      "Học có giám sát (Supervised Learning)",
      "Học không giám sát (Unsupervised Learning)",
      "Học tăng cường (Reinforcement Learning)",
      "Học bán giám sát"
    ],
    "answer": 1,
    "explanation": "Phân cụm là phương pháp học không giám sát điển hình, phân nhóm dữ liệu chỉ dựa trên đặc trưng mà không hề có nhãn mục tiêu.",
    "slideRef": "Slide Chương 5, Trang 4"
  },
  {
    "id": 147,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Đầu vào của thuật toán K-Means gồm những gì?",
    "options": [
      "Tập dữ liệu và nhãn lớp thực tế",
      "Tập n điểm dữ liệu và số lượng cụm K được ấn định trước",
      "Chỉ cần tập dữ liệu, không cần biết số cụm",
      "Bán kính Eps và số điểm tối thiểu MinPts"
    ],
    "answer": 1,
    "explanation": "K-Means bắt buộc người dùng phải cung cấp dữ liệu số và số lượng cụm K cần phân chia ngay từ đầu.",
    "slideRef": "Slide Chương 5, Trang 10"
  },
  {
    "id": 148,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hàm mục tiêu WCSS (Within-Cluster Sum of Squares) mà K-Means cần tối thiểu hóa là gì?",
    "options": [
      "Tổng khoảng cách giữa các tâm cụm",
      "Tổng bình phương khoảng cách từ mỗi điểm dữ liệu đến tâm cụm tương ứng của nó: Σ Σ ||x - μ_k||^2",
      "Số lượng điểm nhiễu trong dữ liệu",
      "Hệ số Silhouette trung bình"
    ],
    "answer": 1,
    "explanation": "K-Means tối thiểu hóa tổng bình phương khoảng cách từ các điểm tới tâm cụm của chúng: J = Σ_k Σ_{x ∈ C_k} ||x - μ_k||^2.",
    "slideRef": "Slide Chương 5, Trang 12"
  },
  {
    "id": 149,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hai bước luân phiên trong chu trình lặp của thuật toán K-Means (Lloyd's Algorithm) là gì?",
    "options": [
      "Bước khởi tạo và Bước chuẩn hóa",
      "Bước gán cụm (Assignment) và Bước cập nhật tâm cụm (Update)",
      "Bước chọn đặc trưng và Bước giảm chiều",
      "Bước tính đạo hàm và Bước cập nhật learning rate"
    ],
    "answer": 1,
    "explanation": "K-Means luân phiên giữa: 1. Gán mỗi điểm vào tâm gần nó nhất; 2. Tính lại tâm cụm bằng trung bình cộng tọa độ các điểm vừa gán.",
    "slideRef": "Slide Chương 5, Trang 13-15"
  },
  {
    "id": 150,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Tại sao việc chuẩn hóa thang đo dữ liệu (Scaling) là BẮT BUỘC trước khi áp dụng K-Means?",
    "options": [
      "Vì K-Means chỉ nhận dữ liệu trong khoảng [0, 1]",
      "Vì K-Means sử dụng khoảng cách Euclidean; đặc trưng có thang đo lớn sẽ chi phối hoàn toàn khoảng cách và làm sai lệch việc gán cụm",
      "Vì K-Means không thể chạy trên biến số thực",
      "Vì chuẩn hóa giúp giảm số lượng cụm K"
    ],
    "answer": 1,
    "explanation": "Khoảng cách Euclidean rất nhạy cảm với độ lớn thang đo; biến có giá trị hàng triệu sẽ lấn át hoàn toàn biến có giá trị hàng chục.",
    "slideRef": "Slide Chương 5, Trang 11"
  },
  {
    "id": 151,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trong không gian 2 chiều, ranh giới phân chia giữa các cụm tạo bởi thuật toán K-Means có dạng gì?",
    "options": [
      "Các đường cong elip",
      "Các đường phân hoạch Voronoi (đường trung trực thẳng giữa các cặp tâm cụm)",
      "Các đường tròn bao quanh từng điểm",
      "Hình đa giác bất kỳ tự do"
    ],
    "answer": 1,
    "explanation": "Mỗi điểm được gán về tâm gần nhất tạo ra các vùng Voronoi với ranh giới phân chia là các đoạn thẳng/siêu phẳng trung trực tuyến tính.",
    "slideRef": "Slide Chương 5, Trang 18, 22"
  },
  {
    "id": 152,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trường hợp dữ liệu nào sau đây khiến thuật toán K-Means thất bại trong việc phân cụm đúng?",
    "options": [
      "Các cụm có dạng hình cầu lồi tách biệt rõ ràng",
      "Các cụm có hình dạng cong phức tạp (như 2 dải hình trăng khuyết lồng nhau, hoặc vòng tròn đồng tâm)",
      "Các cụm có kích thước và mật độ tương đồng",
      "Dữ liệu 2 chiều đã chuẩn hóa"
    ],
    "answer": 1,
    "explanation": "K-Means tạo ranh giới phẳng Voronoi nên chỉ gom được các cụm hình cầu/lồi (convex), bất lực với các cụm hình cong phi lồi.",
    "slideRef": "Slide Chương 5, Trang 24"
  },
  {
    "id": 153,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Mục đích chính của thuật toán K-Means++ so với K-Means truyền thống là gì?",
    "options": [
      "Thay đổi hàm khoảng cách từ Euclidean sang Manhattan",
      "Cải thiện khâu khởi tạo tâm ban đầu, giúp các tâm phân tán đều khắp dữ liệu và giảm nguy cơ kẹt ở cực tiểu địa phương xấu",
      "Tự động tìm ra số cụm K tối ưu",
      "Loại bỏ hoàn toàn các điểm ngoại lai"
    ],
    "answer": 1,
    "explanation": "K-Means++ khởi tạo các tâm ban đầu cách xa nhau dựa trên xác suất tỷ lệ với bình phương khoảng cách, giúp hội tụ nhanh và nghiệm ổn định.",
    "slideRef": "Slide Chương 5, Trang 25, 29"
  },
  {
    "id": 154,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trong thuật toán K-Means++, xác suất một điểm x được chọn làm tâm tiếp theo tỷ lệ thuận với đại lượng nào?",
    "options": [
      "Nghịch đảo khoảng cách đến tâm gần nhất",
      "Bình phương khoảng cách D(x)^2 từ điểm đó đến tâm gần nhất đã chọn",
      "Khoảng cách đến gốc tọa độ",
      "Số lượng láng giềng xung quanh x"
    ],
    "answer": 1,
    "explanation": "P(x) = D(x)^2 / Σ D(x')^2. Điểm nào càng nằm xa các tâm đã chọn thì xác suất được chọn làm tâm mới càng cao.",
    "slideRef": "Slide Chương 5, Trang 27-28"
  },
  {
    "id": 155,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Phương pháp Elbow (Khuỷu tay) dùng để xác định đại lượng nào trong bài toán phân cụm?",
    "options": [
      "Xác định bán kính Eps",
      "Lựa chọn số lượng cụm K hợp lý dựa trên điểm gập khúc của đồ thị WCSS",
      "Xác định điểm ngoại lai",
      "Chọn kích thước lô trong Mini-batch"
    ],
    "answer": 1,
    "explanation": "Đồ thị WCSS theo K có dạng cánh tay gập; điểm gập khúc (elbow) là nơi sau đó WCSS giảm chậm lại, thường là số cụm K tốt nhất.",
    "slideRef": "Slide Chương 5, Trang 35"
  },
  {
    "id": 156,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hệ số Silhouette s(i) của một điểm dữ liệu i có miền giá trị nằm trong khoảng nào?",
    "options": [
      "[0, 1]",
      "[-1, 1]",
      "[0, +∞)",
      "(-∞, +∞)"
    ],
    "answer": 1,
    "explanation": "Hệ số Silhouette luôn nằm trong đoạn chuẩn [-1, 1], đo lường mức độ phù hợp của điểm dữ liệu đối với cụm của nó.",
    "slideRef": "Slide Chương 5, Trang 32-33"
  },
  {
    "id": 157,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trong công thức Silhouette s(i) = (b(i) - a(i)) / max(a(i), b(i)), đại lượng a(i) biểu thị điều gì?",
    "options": [
      "Khoảng cách từ điểm i đến gốc tọa độ",
      "Khoảng cách trung bình từ điểm i đến tất cả các điểm khác TRONG CÙNG CỤM của nó (Độ chặt nội cụm)",
      "Khoảng cách trung bình từ điểm i đến cụm lân cận gần nhất",
      "Khoảng cách giữa hai tâm cụm"
    ],
    "answer": 1,
    "explanation": "a(i) đo độ chặt chẽ nội cụm: khoảng cách trung bình từ i đến các điểm cùng cụm (a(i) càng nhỏ thì cụm càng đậm đặc).",
    "slideRef": "Slide Chương 5, Trang 32"
  },
  {
    "id": 158,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Một điểm dữ liệu i có hệ số Silhouette s(i) nhận giá trị ÂM (s(i) < 0) mang ý nghĩa gì?",
    "options": [
      "Điểm i nằm rất gần tâm cụm của nó",
      "Điểm i nằm sát ranh giới giữa 2 cụm",
      "Điểm i đã bị gán nhầm cụm (khoảng cách đến cụm láng giềng nhỏ hơn khoảng cách đến cụm của chính nó)",
      "Điểm i là một Core point"
    ],
    "answer": 2,
    "explanation": "Khi s(i) < 0 tức là b(i) < a(i), nghĩa là điểm đó gần cụm bên cạnh hơn cụm hiện tại, dấu hiệu rõ ràng của việc bị gán nhầm cụm.",
    "slideRef": "Slide Chương 5, Trang 33"
  },
  {
    "id": 159,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Giá trị Silhouette trung bình của toàn bộ dữ liệu tiến rất gần về +1 biểu thị điều gì?",
    "options": [
      "Kết quả phân cụm rất tồi tệ, các cụm dính vào nhau",
      "Kết quả phân cụm xuất sắc: các điểm nằm rất chặt chẽ trong cụm của mình và các cụm phân tách rất xa nhau",
      "Dữ liệu có quá nhiều điểm nhiễu",
      "Mô hình đang bị Underfitting"
    ],
    "answer": 1,
    "explanation": "Silhouette gần +1 chứng tỏ các cụm đặc quánh nội bộ và tách biệt rõ rệt với nhau ngoài biên, chất lượng phân cụm tối ưu.",
    "slideRef": "Slide Chương 5, Trang 33"
  },
  {
    "id": 160,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Mô hình Gaussian Mixture Model (GMM) tiếp cận bài toán phân cụm theo góc nhìn nào?",
    "options": [
      "Góc nhìn tâm cụm hình học cứng",
      "Góc nhìn xác suất: dữ liệu là sự pha trộn của K phân phối chuẩn nhiều chiều và thực hiện phân cụm mềm (Soft Clustering)",
      "Góc nhìn mật độ lân cận bán kính Eps",
      "Góc nhìn đồ thị phân nhánh"
    ],
    "answer": 1,
    "explanation": "GMM mô hình hóa cụm bằng các phân phối Gaussian; mỗi điểm thuộc về các cụm theo một phân phối xác suất mềm thay vì gán nhãn cứng.",
    "slideRef": "Slide Chương 5, Trang 39, 44"
  },
  {
    "id": 161,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Ưu thế hình học của GMM so với K-Means là gì?",
    "options": [
      "GMM chỉ tạo ra các cụm hình cầu",
      "Nhờ ma trận hiệp phương sai Σ, các cụm trong GMM có thể mang hình elip xoay các hướng khác nhau với kích thước và độ lệch bất kỳ",
      "GMM luôn chạy nhanh hơn K-Means",
      "GMM không cần dữ liệu dạng số"
    ],
    "answer": 1,
    "explanation": "Ma trận hiệp phương sai cho phép GMM mô tả các cụm hình elip đa chiều có xu hướng tương quan và độ dẹt khác nhau.",
    "slideRef": "Slide Chương 5, Trang 41, 48"
  },
  {
    "id": 162,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Thuật toán EM (Expectation - Maximization) trong GMM gồm hai bước nào?",
    "options": [
      "E-step: tính trách nhiệm/xác suất mềm γ_ij; M-step: cập nhật lại các tham số (π, μ, Σ) từ các trọng số đó",
      "E-step: cập nhật tâm; M-step: gán nhãn cứng",
      "E-step: chuẩn hóa Z-score; M-step: tính PCA",
      "E-step: tìm trị riêng; M-step: chiếu không gian"
    ],
    "answer": 0,
    "explanation": "E-step ước lượng xác suất mềm mỗi điểm thuộc từng thành phần; M-step cập nhật tỷ trọng π, tâm μ và ma trận hiệp phương sai Σ.",
    "slideRef": "Slide Chương 5, Trang 46-47"
  },
  {
    "id": 163,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hai tiêu chuẩn thông tin nào thường được dùng để chọn số lượng thành phần K tối ưu trong mô hình GMM?",
    "options": [
      "Elbow và Silhouette",
      "AIC (Akaike Information Criterion) và BIC (Bayesian Information Criterion)",
      "Precision và Recall",
      "MAE và MSE"
    ],
    "answer": 1,
    "explanation": "Người ta so sánh các mô hình GMM với số thành phần K khác nhau bằng tiêu chuẩn AIC và BIC (chọn mô hình có AIC/BIC thấp hơn).",
    "slideRef": "Slide Chương 5, Trang 49"
  },
  {
    "id": 164,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Đặc tính NỔI BẬT NHẤT của thuật toán phân cụm DBSCAN so với K-Means là gì?",
    "options": [
      "DBSCAN chạy nhanh hơn K-Means trên mọi bài toán",
      "DBSCAN hoàn toàn KHÔNG CẦN người dùng ấn định trước số lượng cụm K",
      "DBSCAN luôn tìm ra các cụm hình cầu lồi",
      "DBSCAN chỉ áp dụng được cho dữ liệu 1 chiều"
    ],
    "answer": 1,
    "explanation": "DBSCAN phân cụm dựa trên mật độ thực tế của không gian, tự động xác định số lượng cụm K mà không cần người dùng nhập trước.",
    "slideRef": "Slide Chương 5, Trang 51, 60"
  },
  {
    "id": 165,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hai siêu tham số cốt lõi của thuật toán DBSCAN là gì?",
    "options": [
      "Số cụm K và số vòng lặp tối đa",
      "Bán kính lân cận Eps (ε) và Số điểm tối thiểu trong lân cận MinPts",
      "Tốc độ học η và hệ số co shrinkage",
      "Số thành phần K và ma trận hiệp phương sai Σ"
    ],
    "answer": 1,
    "explanation": "DBSCAN được định nghĩa bởi 2 siêu tham số: Bán kính lân cận Eps và số lượng điểm tối thiểu MinPts trong bán kính đó.",
    "slideRef": "Slide Chương 5, Trang 52"
  },
  {
    "id": 166,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trong DBSCAN, một điểm được định nghĩa là Điểm lõi (Core Point) khi thỏa mãn điều kiện nào?",
    "options": [
      "Vùng lân cận bán kính Eps của nó chứa ít nhất MinPts điểm (tính cả chính nó)",
      "Nó có khoảng cách gần nhất đến gốc tọa độ",
      "Nó có ít hơn MinPts điểm trong bán kính Eps nhưng gần một điểm khác",
      "Nó nằm cô lập không có láng giềng nào"
    ],
    "answer": 0,
    "explanation": "Core Point là điểm có mật độ dày đặc: số lượng điểm nằm trong hình cầu bán kính Eps quanh nó đạt tối thiểu MinPts (bao gồm cả nó).",
    "slideRef": "Slide Chương 5, Trang 53"
  },
  {
    "id": 167,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trong DBSCAN, Điểm biên (Border Point) có đặc điểm gì?",
    "options": [
      "Có số láng giềng trong bán kính Eps lớn hơn MinPts",
      "Có ít hơn MinPts điểm trong bán kính Eps của mình, nhưng nằm trong vùng lân cận Eps của một Core Point",
      "Bị cô lập hoàn toàn và bị gán nhãn là ngoại lai",
      "Tự mình có thể khởi tạo một cụm mới"
    ],
    "answer": 1,
    "explanation": "Border Point không đủ dày để làm Core Point, nhưng nằm sát cạnh một Core Point nên được kết nạp vào rìa của cụm đó.",
    "slideRef": "Slide Chương 5, Trang 53, 55"
  },
  {
    "id": 168,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Điểm nhiễu (Noise Point) trong DBSCAN được định nghĩa là gì?",
    "options": [
      "Điểm có giá trị âm",
      "Điểm không phải Core Point cũng không phải Border Point (bị cô lập ở vùng mật độ thấp)",
      "Điểm có hệ số Silhouette bằng 1",
      "Điểm nằm tại tâm của cụm"
    ],
    "answer": 1,
    "explanation": "Những điểm nằm ở vùng thưa thớt, không thỏa mãn điều kiện Core và không chạm vùng Eps của Core nào sẽ bị DBSCAN gắn nhãn là nhiễu (Noise / Outlier).",
    "slideRef": "Slide Chương 5, Trang 53, 60"
  },
  {
    "id": 169,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Khả năng vượt trội của DBSCAN so với K-Means thể hiện rõ nhất ở bài toán nào?",
    "options": [
      "Phân cụm các điểm hình cầu kích thước bằng nhau",
      "Phân cụm dữ liệu có hình dạng bất kỳ phức tạp (như 2 dải hình trăng khuyết) và tự động lọc bỏ điểm nhiễu",
      "Phân cụm dữ liệu có mật độ chênh lệch quá lớn giữa các vùng",
      "Dự đoán giá nhà đất"
    ],
    "answer": 1,
    "explanation": "DBSCAN xuất sắc trong việc lần theo các dải mật độ liên thông hình dạng bất kỳ và tự động tách biệt các điểm nhiễu ra ngoài.",
    "slideRef": "Slide Chương 5, Trang 56, 60"
  },
  {
    "id": 170,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Nếu ta chọn tham số Eps trong DBSCAN quá nhỏ (quá khắt khe), hiện tượng gì sẽ xảy ra?",
    "options": [
      "Tất cả các điểm bị gom vào đúng một cụm duy nhất",
      "Nhiều điểm không đủ láng giềng, cụm thực bị vỡ vụn và số lượng điểm bị coi là Noise tăng vọt",
      "Thời gian chạy tăng lên gấp 10 lần",
      "DBSCAN chuyển thành thuật toán K-Means"
    ],
    "answer": 1,
    "explanation": "Eps quá nhỏ khiến bán kính tìm kiếm quá hẹp, rất ít điểm đạt chuẩn Core Point, dẫn đến cụm bị vỡ thành nhiều mảnh nhỏ và nhiều điểm bị coi là nhiễu.",
    "slideRef": "Slide Chương 5, Trang 57"
  },
  {
    "id": 171,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hạn chế lớn nhất của thuật toán DBSCAN là gì?",
    "options": [
      "Không thể xử lý được điểm nhiễu",
      "Khó chọn được một cặp tham số Eps và MinPts chung khi các cụm trong dữ liệu có mật độ chênh lệch nhau quá lớn",
      "Bắt buộc phải biết trước số lượng cụm K",
      "Chỉ tìm được cụm hình cầu"
    ],
    "answer": 1,
    "explanation": "Vì DBSCAN dùng ngưỡng mật độ toàn cục cố định, nếu tập dữ liệu có cụm rất đặc và cụm rất thưa thì không thể tìm được một cặp (Eps, MinPts) phù hợp cho cả hai.",
    "slideRef": "Slide Chương 5, Trang 61"
  },
  {
    "id": 172,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Phương pháp Deep Clustering (như DEC - Deep Embedding Clustering) kết hợp những thành phần nào?",
    "options": [
      "Mạng nơ-ron sâu (như Autoencoder) để học không gian biểu diễn ẩn z, sau đó thực hiện phân cụm trên không gian này",
      "Cây quyết định kết hợp với hồi quy tuyến tính",
      "Phân cụm K-Means kết hợp với lọc thư rác",
      "DBSCAN chạy trên ảnh thô không qua xử lý"
    ],
    "answer": 0,
    "explanation": "Deep Clustering dùng mạng nơ-ron để ánh xạ dữ liệu phức tạp nhiều chiều vào không gian ẩn (latent space) có ngữ nghĩa tốt hơn trước khi phân cụm.",
    "slideRef": "Slide Chương 5, Trang 63, 65"
  },
  {
    "id": 173,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Thuật toán Mini-Batch K-Means được thiết kế nhằm mục đích gì?",
    "options": [
      "Tăng độ chính xác phân cụm lên 100%",
      "Tiết kiệm bộ nhớ RAM và thời gian tính toán trên tập dữ liệu cực lớn bằng cách cập nhật tâm theo từng lô nhỏ",
      "Loại bỏ yêu cầu số cụm K",
      "Phân cụm dữ liệu phi lồi"
    ],
    "answer": 1,
    "explanation": "Mini-Batch K-Means cập nhật tâm cụm xấp xỉ theo từng batch nhỏ ngẫu nhiên, giảm thiểu đáng kể chi phí bộ nhớ và thời gian đọc dữ liệu.",
    "slideRef": "Slide Chương 5, Trang 30"
  },
  {
    "id": 174,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Khi nào ta nên ưu tiên chọn GMM thay vì K-Means?",
    "options": [
      "Khi cần một thuật toán phân cụm đơn giản, nhanh nhất có thể",
      "Khi các cụm có mức độ chồng lấn lên nhau và việc ước lượng xác suất mềm thành viên mang lại giá trị nghiệp vụ",
      "Khi dữ liệu có hình 2 dải trăng khuyết",
      "Khi không biết số lượng cụm K"
    ],
    "answer": 1,
    "explanation": "GMM phù hợp khi ranh giới giữa các cụm không tuyệt đối, cụm có dạng elip và ta cần biết độ chắc chắn/xác suất thuộc về từng cụm.",
    "slideRef": "Slide Chương 5, Trang 70"
  },
  {
    "id": 175,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Khi nào ta nên ưu tiên chọn DBSCAN thay vì K-Means hay GMM?",
    "options": [
      "Khi dữ liệu có phân phối chuẩn đồng đều",
      "Khi dữ liệu chứa nhiều ngoại lai/nhiễu, các cụm có hình dạng uốn lượn bất kỳ và chưa biết trước số cụm K",
      "Khi cần chạy thuật toán trên không gian 10.000 chiều",
      "Khi cần phân cụm mềm dạng xác suất"
    ],
    "answer": 1,
    "explanation": "DBSCAN là lựa chọn số 1 khi dữ liệu có hình dạng tự do, có nhiễu rải rác và không có thông tin tiên nghiệm về số lượng cụm.",
    "slideRef": "Slide Chương 5, Trang 70"
  },
  {
    "id": 346,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Trong Phân cụm Phân cấp Tích tụ (Agglomerative Hierarchical Clustering), phương pháp Liên kết Ward (Ward's Linkage) hợp nhất hai cụm dựa trên tiêu chí nào?",
    "options": [
      "Khoảng cách ngắn nhất giữa hai điểm bất kỳ thuộc hai cụm",
      "Cực tiểu hóa mức gia tăng tổng phương sai nội cụm (Within-cluster variance) sau khi gộp",
      "Khoảng cách giữa hai điểm xa nhất của hai cụm",
      "Khoảng cách trung bình giữa tất cả các cặp điểm"
    ],
    "answer": 1,
    "explanation": "Ward's Linkage tìm cặp cụm mà khi hợp nhất sẽ làm tăng phương sai nội cụm (tổng bình phương khoảng cách tới tâm cụm mới) là ít nhất. Phương pháp này có xu hướng tạo ra các cụm có kích thước đồng đều và cấu trúc chặt chẽ tương tự K-Means.",
    "slideRef": "Slide Chương 5, Trang 14-16"
  },
  {
    "id": 347,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Nhược điểm lớn của phương pháp Liên kết Đơn (Single Linkage) trong phân cụm phân cấp là hiện tượng gì?",
    "options": [
      "Hiện tượng các cụm luôn có dạng hình cầu đối xứng",
      "Hiện tượng 'Tạo chuỗi xích' (Chaining effect), trong đó các điểm dữ liệu nhiễu nằm rải rác nối liền hai cụm tách biệt thành một cụm dài ngoằn ngoèo",
      "Không thể vẽ được biểu đồ hình cây Dendrogram",
      "Bắt buộc người dùng phải xác định trước số cụm K"
    ],
    "answer": 1,
    "explanation": "Single Linkage đo khoảng cách giữa hai điểm gần nhất giữa hai cụm (min distance). Chỉ cần một vài điểm nhiễu nằm cầu nối giữa hai cụm lớn, thuật toán sẽ nối chập hai cụm lớn đó lại với nhau thành một dải dài (Chaining effect).",
    "slideRef": "Slide Chương 5, Trang 15-17"
  },
  {
    "id": 348,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Biểu đồ hình cây (Dendrogram) trong phân cụm phân cấp cho phép người dùng xác định số lượng cụm mong muốn bằng cách nào?",
    "options": [
      "Đếm tổng số nút lá ở đáy biểu đồ",
      "Cắt một đường nằm ngang (ngưỡng khoảng cách / khoảng cách hợp nhất); số lượng nhánh thẳng đứng bị đường cắt đi qua chính là số lượng cụm thu được",
      "Tìm điểm cực tiểu của hàm mất mát",
      "Tính đạo hàm cấp 1 của cây"
    ],
    "answer": 1,
    "explanation": "Trục tung của Dendrogram biểu thị khoảng cách hợp nhất. Khi chọn một ngưỡng khoảng cách và vẽ đường cắt ngang, số lượng đường liên kết dọc bị cắt đứt chính là số cụm phân vùng tương ứng.",
    "slideRef": "Slide Chương 5, Trang 18-20"
  },
  {
    "id": 349,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Hàm mục tiêu Tổng bình phương khoảng cách nội cụm (WCSS hay Inertia) trong K-Means có tính chất toán học nào qua từng vòng lặp của thuật toán Lloyd?",
    "options": [
      "WCSS dao động ngẫu nhiên tăng giảm",
      "WCSS luôn giảm đơn điệu (hoặc giữ nguyên) sau mỗi bước gán mẫu và cập nhật tâm, đảm bảo thuật toán luôn hội tụ sau một số hữu hạn bước",
      "WCSS luôn tăng dần theo từng epoch",
      "WCSS luôn bằng 0 khi thuật toán dừng"
    ],
    "answer": 1,
    "explanation": "Ở bước gán (Assignment), mỗi điểm chọn tâm gần nhất nên WCSS giảm hoặc giữ nguyên. Ở bước cập nhật (Update), tâm mới là trung bình số học tối ưu hóa khoảng cách L2 nên WCSS tiếp tục giảm. Vì số cách phân chia N mẫu vào K cụm là hữu hạn nên thuật toán chắc chắn hội tụ.",
    "slideRef": "Slide Chương 5, Trang 24-26"
  },
  {
    "id": 350,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Độ phức tạp tính toán thời gian của thuật toán K-Means chuẩn cho mỗi lần chạy là bao nhiêu (với n là số mẫu, d là số chiều, K là số cụm, t là số vòng lặp)?",
    "options": [
      "O(n^2 * d)",
      "O(t * K * n * d)",
      "O(2^K * n)",
      "O(d^3)"
    ],
    "answer": 1,
    "explanation": "Trong mỗi vòng lặp t: tính khoảng cách từ n điểm đến K tâm trong không gian d chiều mất O(K * n * d); bước cập nhật tâm mất O(n * d). Tổng độ phức tạp là O(t * K * n * d), tuyến tính theo số mẫu n, rất nhanh so với phân cấp O(n^2) hoặc O(n^3).",
    "slideRef": "Slide Chương 5, Trang 27-28"
  },
  {
    "id": 351,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Thuật toán K-Means++ giải quyết vấn đề nhạy cảm với khởi tạo ngẫu nhiên của K-Means bằng cơ chế chọn tâm nào?",
    "options": [
      "Chọn ngẫu nhiên đồng đều tất cả K tâm cùng lúc từ tập dữ liệu",
      "Tâm đầu tiên chọn ngẫu nhiên; mỗi tâm tiếp theo được chọn từ các điểm còn lại với xác suất tỷ lệ thuận với bình phương khoảng cách D(x)^2 tới tâm gần nhất đã chọn",
      "Dùng kết quả của phân tích PCA làm tâm",
      "Chọn các điểm có giá trị lớn nhất theo từng trục tọa độ"
    ],
    "answer": 1,
    "explanation": "K-Means++ gán xác suất P(x) = D(x)^2 / sum(D(x')^2). Điểm nào càng nằm xa các tâm đã chọn thì xác suất được chọn làm tâm tiếp theo càng cao. Điều này phân tán các tâm khởi đầu ra xa nhau, giảm nguy cơ 2 tâm rơi vào cùng một cụm tự nhiên.",
    "slideRef": "Slide Chương 5, Trang 29-31"
  },
  {
    "id": 352,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Biến thể Mini-Batch K-Means được thiết kế nhằm mục đích chính nào trong các bài toán Big Data?",
    "options": [
      "Tăng độ chính xác phân cụm lên 100%",
      "Tối ưu hóa thời gian tính toán và tiết kiệm bộ nhớ RAM bằng cách cập nhật vị trí tâm cụm dựa trên từng tập con mẫu nhỏ (mini-batch) thay vì toàn bộ tập dữ liệu khổng lồ",
      "Tự động tìm kiếm số lượng cụm K tối ưu",
      "Cho phép tìm các cụm có hình dạng xoắn ốc phi tuyến"
    ],
    "answer": 1,
    "explanation": "Mini-Batch K-Means lấy mẫu ngẫu nhiên một batch nhỏ (ví dụ 100 đến 1000 mẫu) qua mỗi bước để di chuyển dần tâm cụm. Tốc độ nhanh hơn K-Means chuẩn gấp nhiều lần mà kết quả chỉ giảm chất lượng không đáng kể.",
    "slideRef": "Slide Chương 5, Trang 32-33"
  },
  {
    "id": 353,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Chỉ số Davies-Bouldin Index (DBI) đánh giá chất lượng phân cụm dựa trên tỷ lệ giữa độ phân tán nội cụm và khoảng cách giữa các tâm cụm. Mô hình phân cụm tốt khi DBI có giá trị thế nào?",
    "options": [
      "DBI càng LỚN càng tốt",
      "DBI càng NHỎ (càng gần 0) càng tốt",
      "DBI phải bằng đúng 1.0",
      "DBI phải nhận giá trị âm"
    ],
    "answer": 1,
    "explanation": "DBI đo tỷ số (độ phân tán cụm i + độ phân tán cụm j) / (khoảng cách giữa tâm i và tâm j). Một kết quả phân cụm lý tưởng có cụm chặt chẽ (độ phân tán nhỏ) và các cụm cách xa nhau (khoảng cách tâm lớn), tức DBI càng nhỏ càng tốt.",
    "slideRef": "Slide Chương 5, Trang 38-39"
  },
  {
    "id": 354,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Chỉ số Calinski-Harabasz Index (Variance Ratio Criterion) đánh giá chất lượng phân cụm như thế nào?",
    "options": [
      "Là tỷ lệ giữa độ phân tán giữa các cụm (Between-cluster dispersion) và độ phân tán nội cụm (Within-cluster dispersion); giá trị càng LỚN thì phân cụm càng tốt",
      "Là diện tích dưới đường cong ROC; càng gần 0.5 càng tốt",
      "Giá trị càng nhỏ càng tốt",
      "Chỉ số này chỉ đo lường thời gian chạy của thuật toán"
    ],
    "answer": 0,
    "explanation": "Calinski-Harabasz tính tỷ số giữa tổng bình phương khoảng cách giữa các cụm và trong từng cụm (có chuẩn hóa theo bậc tự do). Cụm càng đặc và cách biệt nhau thì tử số càng lớn và mẫu số càng nhỏ, do đó điểm số càng cao càng tốt.",
    "slideRef": "Slide Chương 5, Trang 39-40"
  },
  {
    "id": 355,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Khi đã có nhãn thực tế đối chứng (Ground Truth), chỉ số nào sau đây là độ đo đánh giá ngoại tại (External Evaluation) chuẩn xác, có tính đến việc hiệu chỉnh ngẫu nhiên?",
    "options": [
      "Within-Cluster Sum of Squares (Inertia)",
      "Adjusted Rand Index (ARI)",
      "Elbow Score",
      "Silhouette Coefficient"
    ],
    "answer": 1,
    "explanation": "Adjusted Rand Index (ARI) so sánh mức độ tương đồng giữa nhãn phân cụm dự đoán và nhãn ground truth thực tế, với giá trị hiệu chỉnh ngẫu nhiên (sao cho đoán mò có ARI = 0, phân cụm hoàn hảo có ARI = 1). Silhouette hay WCSS là đánh giá nội tại không cần nhãn.",
    "slideRef": "Slide Chương 5, Trang 41-43"
  },
  {
    "id": 356,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Trong Mô hình Hỗn hợp Gauss (GMM), mỗi cụm k được mô tả bằng bộ ba tham số thống kê nào?",
    "options": [
      "Số lượng nút lá, Độ sâu tối đa, Gini Impurity",
      "Vector kỳ vọng trung bình μ_k, Ma trận hiệp phương sai Σ_k, và Trọng số thành phần π_k (Mixing coefficient)",
      "Hệ số phạt L1, Hệ số phạt L2, Tốc độ học η",
      "Bán kính Epsilon, Số điểm tối thiểu MinPts, Khoảng cách Chebyshev"
    ],
    "answer": 1,
    "explanation": "GMM giả định dữ liệu sinh ra từ K phân phối chuẩn đa biến. Mỗi thành phần k có trọng số hỗn hợp π_k (với sum π_k = 1), vector tâm μ_k, và ma trận hiệp phương sai Σ_k xác định hình dạng, độ lớn và hướng xoay của cụm.",
    "slideRef": "Slide Chương 5, Trang 45-47"
  },
  {
    "id": 357,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Trong thuật toán EM (Expectation - Maximization) huấn luyện GMM, bước E (Expectation step) thực hiện công việc gì?",
    "options": [
      "Khởi tạo ngẫu nhiên toàn bộ dữ liệu",
      "Tính toán xác suất hậu nghiệm (Responsibility γ_ik) rằng điểm dữ liệu x_i được sinh ra bởi cụm k, dựa trên các tham số hiện tại",
      "Cập nhật lại vector trung bình μ_k và ma trận hiệp phương sai Σ_k",
      "Gán nhãn cứng 0 hoặc 1 cho từng điểm"
    ],
    "answer": 1,
    "explanation": "Bước E (Kỳ vọng) giữ nguyên tham số, sử dụng định lý Bayes để tính xác suất điểm x_i thuộc về cụm k: γ_ik = P(z_i = k | x_i) = π_k * N(x_i | μ_k, Σ_k) / sum_j [ π_j * N(x_i | μ_j, Σ_j) ].",
    "slideRef": "Slide Chương 5, Trang 48-50"
  },
  {
    "id": 358,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Bước M (Maximization step) trong thuật toán EM thực hiện công việc gì?",
    "options": [
      "Tính toán ma trận nghịch đảo của toàn bộ tập dữ liệu",
      "Cập nhật lại các tham số (μ_k, Σ_k, π_k) bằng cách tối đa hóa hàm hợp lý kỳ vọng dựa trên các trọng số trách nhiệm γ_ik vừa tính ở bước E",
      "Loại bỏ các điểm ngoại lai khỏi tập dữ liệu",
      "Vẽ biểu đồ hình cây Dendrogram"
    ],
    "answer": 1,
    "explanation": "Bước M (Cực đại hóa) cập nhật lại các tham số: μ_k mới là trung bình có trọng số theo γ_ik; Σ_k mới là hiệp phương sai có trọng số; và π_k mới = N_k / N.",
    "slideRef": "Slide Chương 5, Trang 50-52"
  },
  {
    "id": 359,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Nếu cấu hình ma trận hiệp phương sai trong GMM là 'diagonal' (đường chéo), các cụm Gauss trong không gian sẽ có dạng hình học nào?",
    "options": [
      "Hình cầu hoàn hảo",
      "Hình elip có các trục song song với các trục tọa độ (không xoay nghiêng)",
      "Hình elip tổng quát có thể xoay nghiêng tùy ý theo bất kỳ hướng nào",
      "Một đường thẳng dẹt 1 chiều"
    ],
    "answer": 1,
    "explanation": "'diagonal' covariance nghĩa là các phần tử ngoài đường chéo bằng 0 (hiệp phương sai giữa các chiều bằng 0, các biến độc lập nhau), do đó cụm có hình elip nhưng các trục chính luôn thẳng hàng song song với các trục tọa độ. (Nếu muốn xoay tự do phải dùng 'full' covariance).",
    "slideRef": "Slide Chương 5, Trang 53-54"
  },
  {
    "id": 360,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Trong thuật toán DBSCAN, một điểm p được định nghĩa là Điểm lõi (Core point) khi thỏa mãn điều kiện nào?",
    "options": [
      "Nó nằm cách tâm cụm một khoảng nhỏ hơn 1.0",
      "Trong vùng lân cận bán kính ε (Eps) của điểm p có chứa ít nhất MinPts điểm (tính cả chính điểm p)",
      "Nó có ít hơn MinPts điểm trong bán kính ε nhưng nằm cạnh một điểm khác",
      "Nó có giá trị ngoại lai lớn nhất trong tập dữ liệu"
    ],
    "answer": 1,
    "explanation": "Điều kiện điểm lõi (Core point): |N_ε(p)| >= MinPts. Điểm này nằm sâu trong vùng mật độ cao của cụm.",
    "slideRef": "Slide Chương 5, Trang 57-59"
  },
  {
    "id": 361,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Trong DBSCAN, một điểm q được gọi là Điểm biên (Border point) khi nào?",
    "options": [
      "Điểm q có số điểm lân cận trong bán kính ε nhỏ hơn MinPts, nhưng điểm q lại nằm trong vùng lân cận bán kính ε của một Điểm lõi",
      "Điểm q có số lân cận lớn hơn 2 lần MinPts",
      "Điểm q không nằm trong lân cận của bất kỳ điểm nào",
      "Điểm q luôn bị thuật toán gán nhãn là nhiễu (-1)"
    ],
    "answer": 0,
    "explanation": "Điểm biên (Border point) không đủ điều kiện làm điểm lõi (|N_ε(q)| < MinPts) nhưng may mắn 'chạm' vào vùng lân cận của một điểm lõi, do đó vẫn được kết nạp vào cụm của điểm lõi đó thay vì bị coi là nhiễu.",
    "slideRef": "Slide Chương 5, Trang 59-61"
  },
  {
    "id": 362,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Điểm nhiễu (Noise point / Outlier) trong thuật toán DBSCAN có đặc điểm nhận dạng nào?",
    "options": [
      "Điểm có khoảng cách Manhattan lớn nhất",
      "Điểm không phải là Điểm lõi và cũng không thuộc vùng lân cận ε của bất kỳ Điểm lõi nào (thường được gán nhãn -1)",
      "Điểm có hệ số Silhouette lớn hơn 0.8",
      "Điểm nằm chính giữa hai cụm lân cận"
    ],
    "answer": 1,
    "explanation": "Bất kỳ điểm nào không phải Core point và cũng không phải Border point đều bị xếp vào nhóm Điểm nhiễu (Noise). Trong thư viện scikit-learn, các điểm này được gán nhãn -1.",
    "slideRef": "Slide Chương 5, Trang 61-62"
  },
  {
    "id": 363,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Quan hệ 'Có thể tiếp cận theo mật độ' (Density-reachable) trong DBSCAN có tính chất nào?",
    "options": [
      "Có tính đối xứng (nếu p tiếp cận được q thì q luôn tiếp cận được p)",
      "Không có tính đối xứng nói chung: Một điểm biên có thể tiếp cận được từ một điểm lõi thông qua chuỗi các điểm lõi trung gian, nhưng ngược lại từ điểm biên không thể tiếp cận được điểm lõi vì điểm biên không có khả năng phát tán tiếp",
      "Luôn bắc cầu giữa mọi cặp điểm trong toàn bộ dataset",
      "Yêu cầu khoảng cách Euclidean phải bằng 0"
    ],
    "answer": 1,
    "explanation": "Density-reachable KHÔNG đối xứng. Chuỗi p1 -> p2 -> ... -> pn đòi hỏi các điểm từ p1 đến pn-1 phải là CORE points. Nếu pn là Border point thì p1 tiếp cận được pn, nhưng từ pn không thể tìm đường ngược lại vì pn không phải Core point.",
    "slideRef": "Slide Chương 5, Trang 62-64"
  },
  {
    "id": 364,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Trường hợp dữ liệu nào sau đây là 'khắc tinh' khiến thuật toán DBSCAN hoạt động kém hiệu quả nhất?",
    "options": [
      "Dữ liệu có chứa các cụm hình xoắn ốc hoặc vành khăn lồng nhau",
      "Dữ liệu chứa các cụm có MẬT ĐỘ RẤT KHÁC NHAU (một cụm cực kỳ đặc, một cụm rất thưa thớt)",
      "Dữ liệu có nhiều điểm nhiễu ngoại lai",
      "Dữ liệu 2 chiều quan sát trực quan"
    ],
    "answer": 1,
    "explanation": "DBSCAN sử dụng một cặp tham số (ε, MinPts) cố định toàn cục. Nếu dữ liệu có các cụm mật độ chênh lệch lớn: nếu chọn ε nhỏ để bắt cụm đặc thì cụm thưa sẽ bị coi là nhiễu; nếu chọn ε lớn để bắt cụm thưa thì cụm đặc sẽ bị dính chập vào nhau. Khi đó phải dùng HDBSCAN.",
    "slideRef": "Slide Chương 5, Trang 66-67"
  },
  {
    "id": 365,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Ưu điểm vượt trội nhất của DBSCAN so với K-Means là gì?",
    "options": [
      "DBSCAN luôn chạy nhanh hơn K-Means trên dữ liệu hàng triệu chiều",
      "DBSCAN không yêu cầu người dùng phải xác định trước số cụm K, có khả năng tìm các cụm có hình dạng hình học tùy ý phi tuyến, và tự động phát hiện loại bỏ các điểm nhiễu",
      "DBSCAN luôn tạo ra các cụm hình cầu tròn trịa",
      "DBSCAN có nghiệm đóng giải tích duy nhất"
    ],
    "answer": 1,
    "explanation": "K-Means bị giới hạn ở cụm lồi hình cầu và phải đoán K trước. DBSCAN tự động phát hiện số lượng cụm, bắt trọn các hình dạng phức tạp (chữ U, xoắn ốc, vành khuyên) và cô lập hoàn toàn các điểm nhiễu.",
    "slideRef": "Slide Chương 5, Trang 67-68"
  },
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
  },
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
  },
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
  },
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
  },
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
  },
  {
    "id": 511,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Dữ liệu chuỗi (Sequence Data) khác biệt với dữ liệu bảng độc lập thông thường ở đặc tính cốt lõi nào?",
    "options": [
      "Dữ liệu chuỗi luôn luôn có kích thước cố định bằng 100",
      "Thứ tự sắp xếp trước sau giữa các phần tử mang ý nghĩa ngữ nghĩa sống còn; nếu xáo trộn thứ tự, ý nghĩa của dữ liệu sẽ bị thay đổi hoặc mất hoàn toàn",
      "Dữ liệu chuỗi chỉ bao gồm các ký tự số nguyên",
      "Dữ liệu chuỗi không thể chuyển đổi thành vector số học"
    ],
    "answer": 1,
    "explanation": "### 🎯 Khái niệm Dữ liệu chuỗi (Sequence Data):\nTrong văn bản, âm thanh, video hay chuỗi thời gian, thứ tự các từ hoặc tín hiệu quyết định toàn bộ ngữ nghĩa. Ví dụ: \"không tốt\" khác hoàn toàn \"tốt không\"; đảo lộn vị trí sẽ làm hỏng dữ liệu. Các mô hình mạng truyền thẳng (Feed-forward) xem các mẫu độc lập không nắm bắt được mối quan hệ thời gian này.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 4"
  },
  {
    "id": 512,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Bài toán Nhận dạng Thực thể có tên (Named Entity Recognition - NER) thuộc dạng cấu trúc I/O nào trong mô hình chuỗi?",
    "options": [
      "One-to-One",
      "One-to-Many",
      "Many-to-One",
      "Many-to-Many (cùng độ dài chuỗi: $T_x = T_y$)"
    ],
    "answer": 3,
    "explanation": "### 🎯 Phân loại I/O Sequence Model:\n* **One-to-Many:** Image Captioning (1 ảnh $\\to$ chuỗi từ mô tả).\n* **Many-to-One:** Sentiment Analysis (chuỗi từ bình luận $\\to$ 1 nhãn tích cực/tiêu cực).\n* **Many-to-Many cùng độ dài:** NER, POS tagging (mỗi từ $x^{\\langle t \\rangle}$ tương ứng 1 nhãn thực thể $y^{\\langle t \\rangle}$).\n* **Many-to-Many khác độ dài:** Machine Translation (câu tiếng Anh 5 từ dịch sang câu tiếng Việt 7 từ).",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 12, 28-30"
  },
  {
    "id": 513,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Ý tưởng trung tâm của Mạng nơ-ron hồi quy (RNN cổ điển) trong việc xử lý chuỗi là gì?",
    "options": [
      "Xóa bỏ hoàn toàn các tầng ẩn",
      "Sử dụng trạng thái ẩn (Hidden state $a^{\\langle t \\rangle}$) như một \"bộ nhớ\" tóm tắt thông tin quá khứ từ các bước trước để truyền tiếp sang bước hiện tại",
      "Huấn luyện các cây quyết định độc lập tại mỗi từ",
      "Tính nghịch đảo ma trận tại mỗi bước thời gian"
    ],
    "answer": 1,
    "explanation": "### 🎯 Trạng thái ẩn $a^{\\langle t \\rangle}$ trong RNN:\nTrạng thái ẩn $a^{\\langle t \\rangle}$ là bản tóm tắt mọi thông tin mà mạng đã quan sát được từ thời điểm $1$ đến $t$. Tại bước $t$, mạng kết hợp trạng thái ẩn bước trước $a^{\\langle t-1 \\rangle}$ và từ hiện tại $x^{\\langle t \\rangle}$ để sinh ra trạng thái ẩn mới $a^{\\langle t \\rangle}$.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 17"
  },
  {
    "id": 514,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Lợi ích sống còn của việc Chia sẻ tham số (Parameter Sharing) qua mọi bước thời gian trong RNN là gì?",
    "options": [
      "Làm tăng số lượng tham số tỷ lệ thuận với độ dài chuỗi",
      "Giữ số lượng tham số cố định và không phụ thuộc vào độ dài chuỗi đầu vào, đồng thời cho phép mạng nhận diện cùng một quy luật ngữ pháp ở bất kỳ vị trí nào trong câu",
      "Ngăn chặn mô hình sử dụng hàm kích hoạt Tanh",
      "Làm cho hàm mất mát luôn đạt giá trị 0"
    ],
    "answer": 1,
    "explanation": "### 🎯 Chia sẻ tham số (Parameter Sharing):\nNếu dùng mạng truyền thẳng, mỗi vị trí từ sẽ cần một bộ trọng số riêng $\\implies$ số tham số bùng nổ theo độ dài câu. Trong RNN, cùng một bộ ma trận trọng số $(W_{ax}, W_{aa}, W_{ya})$ được tái sử dụng qua mọi bước thời gian. Điều này giúp mô hình nhận ra một từ khóa dù nó đứng ở đầu câu hay cuối câu.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 19-20"
  },
  {
    "id": 515,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Công thức lan truyền thuận (Forward propagation) để tính trạng thái ẩn $a^{\\langle t \\rangle}$ trong RNN chuẩn là:",
    "options": [
      "$a^{\\langle t \\rangle} = \\sigma(W_{ya} x^{\\langle t \\rangle} + b_y)$",
      "$a^{\\langle t \\rangle} = g(W_{aa} a^{\\langle t-1 \\rangle} + W_{ax} x^{\\langle t \\rangle} + b_a)$ với $g$ thường là hàm Tanh hoặc ReLU",
      "$a^{\\langle t \\rangle} = a^{\\langle t-1 \\rangle} + x^{\\langle t \\rangle}$",
      "$a^{\\langle t \\rangle} = \\text{softmax}(W_{ax} x^{\\langle t \\rangle})$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Công thức cập nhật RNN:\n$$a^{\\langle t \\rangle} = g(W_{aa} a^{\\langle t-1 \\rangle} + W_{ax} x^{\\langle t \\rangle} + b_a)$$\nHàm kích hoạt $g$ truyền thống luôn là **Tanh** (đưa giá trị về $[-1, 1]$ để kiểm soát miền giá trị không bị bùng nổ sau nhiều bước lặp).",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 21"
  },
  {
    "id": 516,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Thuật toán tính đạo hàm và cập nhật trọng số trong mạng nơ-ron hồi quy được gọi là gì?",
    "options": [
      "Stochastic Gradient Descent thông thường",
      "Lan truyền ngược qua thời gian (Backpropagation Through Time - BPTT)",
      "Thuật toán di truyền hồi quy",
      "Thuật toán K-Means++"
    ],
    "answer": 1,
    "explanation": "### 🎯 BPTT (Backpropagation Through Time):\nVì mạng RNN được trải phẳng (unrolled) qua các bước thời gian $t = 1, \\dots, T_x$, gradient của hàm mất mát tại bước cuối cùng phải được lan truyền ngược dọc theo toàn bộ chuỗi thời gian quay về các bước ban đầu để cập nhật các ma trận trọng số dùng chung.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 26"
  },
  {
    "id": 517,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Hạn chế chí tử nhất của kiến trúc RNN cổ điển khi xử lý các chuỗi văn bản dài là gì?",
    "options": [
      "Mạng không thể xử lý được từ ngữ tiếng Việt",
      "Hiện tượng Triệt tiêu đạo hàm (Vanishing Gradient) khi lan truyền qua nhiều bước thời gian, khiến mạng bị \"trí nhớ ngắn hạn\" và không học được các phụ thuộc dài hạn",
      "Mạng luôn luôn sinh ra các số nguyên âm",
      "Hàm kích hoạt Tanh bị tràn số"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bệnh lý Vanishing Gradient trong RNN:\nKhi lan truyền ngược qua $T$ bước, gradient bị nhân liên tiếp với ma trận trọng số $W_{aa}^T$ và đạo hàm Tanh (luôn $\\le 1$). Nếu trị riêng lớn nhất của $W_{aa} < 1$, gradient suy giảm theo hàm mũ về 0 $\\implies$ các từ ở bước $100$ không thể truyền tín hiệu học về từ ở bước $1$. Ví dụ: câu \"The **dog** that ate the apple ... was **full**\", mạng không nhớ được chủ ngữ là số ít hay số nhiều.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 36-41"
  },
  {
    "id": 518,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Để xử lý hiện tượng Bùng nổ đạo hàm (Exploding Gradient) trong huấn luyện RNN (khi gradient tăng vọt dẫn đến lỗi NaN), kỹ thuật đơn giản và hiệu quả nhất là gì?",
    "options": [
      "Tăng tốc độ học Learning Rate lên gấp 10 lần",
      "Cắt tỉa đạo hàm (Gradient Clipping) - nếu độ dài vector gradient vượt ngưỡng $threshold$, co nó lại về ngưỡng đó",
      "Xóa bỏ các từ cuối câu",
      "Chuyển sang dùng hàm Sigmoid"
    ],
    "answer": 1,
    "explanation": "### 🎯 Kỹ thuật Gradient Clipping:\nNếu $\\|g\\| > c$, ta co lại: $g = \\frac{c}{\\|g\\|} g$. Thao tác này giữ nguyên hướng dốc của gradient nhưng giới hạn độ dài bước nhảy tối đa, ngăn không cho trọng số văng khỏi vùng hội tụ hoặc bị tràn số (NaN).",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 40"
  },
  {
    "id": 519,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Thành phần cốt lõi nào trong tế bào mạng LSTM (Long Short-Term Memory) đóng vai trò là \"đường cao tốc thông tin\" giúp gradient lan truyền không bị suy biến?",
    "options": [
      "Trạng thái tế bào (Cell State - $C_t$)",
      "Cổng ra Output Gate",
      "Vector One-Hot đầu vào",
      "Lớp chuẩn hóa LayerNorm"
    ],
    "answer": 0,
    "explanation": "### 🎯 Cell State ($C_t$) - Đường cao tốc thông tin:\nCell State chạy thẳng tắp xuyên suốt toàn bộ chuỗi với rất ít tương tác phi tuyến (chỉ có phép nhân phần tử và phép cộng tuyến tính). Gradient khi truyền ngược dọc theo Cell State không phải qua các phép nhân ma trận liên hoàn, giải quyết triệt để bài toán Vanishing Gradient.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 44, 46"
  },
  {
    "id": 520,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Ba cổng kiểm soát luồng thông tin trong một tế bào LSTM (Hochreiter & Schmidhuber, 1997) là gì?",
    "options": [
      "Cổng AND, cổng OR, cổng NOT",
      "Cổng quên (Forget Gate), Cổng nạp/nhập (Input Gate), Cổng xuất (Output Gate)",
      "Cổng Stride, cổng Padding, cổng Pooling",
      "Cổng Encoder, cổng Decoder, cổng Mask"
    ],
    "answer": 1,
    "explanation": "### 🎯 3 Cổng của LSTM:\n1. **Forget Gate ($f_t$):** Quyết định vứt bỏ bao nhiêu phần trăm thông tin từ Cell State cũ $C_{t-1}$.\n2. **Input Gate ($i_t$):** Quyết định nạp bao nhiêu phần trăm thông tin ứng viên mới $\\tilde{C}_t$ vào Cell State.\n3. **Output Gate ($o_t$):** Quyết định xuất bao nhiêu phần trăm từ Cell State ra trạng thái ẩn $a_t$ (hoặc $h_t$).\nTất cả các cổng đều dùng hàm kích hoạt Sigmoid (cho ra giá trị từ $0$ = đóng hoàn toàn đến $1$ = mở hoàn toàn).",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 44-45"
  },
  {
    "id": 521,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Công thức cập nhật Trạng thái tế bào ($C_t$) trong LSTM là gì?",
    "options": [
      "$C_t = C_{t-1} + x_t$",
      "$C_t = f_t * C_{t-1} + i_t * \\tilde{C}_t$",
      "$C_t = o_t * \\tanh(C_{t-1})$",
      "$C_t = \\sigma(W_c x_t + b_c)$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Phương trình cập nhật Cell State:\n$$C_t = f_t * C_{t-1} + i_t * \\tilde{C}_t$$\n* $f_t * C_{t-1}$: Quên đi các thông tin cũ không còn hữu ích (ví dụ đổi chủ ngữ).\n* $i_t * \\tilde{C}_t$: Bổ sung thêm các thông tin mới từ ngữ cảnh hiện tại.\nDấu $*$ là phép nhân từng phần tử (Hadamard product).",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 45"
  },
  {
    "id": 522,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Vì sao mô hình BiLSTM (Bidirectional LSTM - LSTM hai chiều) lại vượt trội hơn LSTM đơn hướng trong các bài toán hiểu ngôn ngữ như NER?",
    "options": [
      "Vì BiLSTM chỉ tốn một nửa bộ nhớ so với LSTM",
      "Vì BiLSTM kết hợp đồng thời hai luồng thông tin: một luồng chạy xuôi từ quá khứ và một luồng chạy ngược từ tương lai, cho phép mạng hiểu trọn vẹn ngữ cảnh hai phía",
      "Vì BiLSTM loại bỏ hoàn toàn các cổng Forget Gate",
      "Vì BiLSTM không sử dụng hàm kích hoạt Tanh"
    ],
    "answer": 1,
    "explanation": "### 🎯 Sức mạnh của BiLSTM:\nXét câu: *\"Teddy Roosevelt was a great president\"* và *\"Teddy bears are on sale\"*. Nếu chỉ đọc từ trái sang phải, khi gặp từ \"Teddy\", mô hình đơn hướng không thể biết đó là tên người hay con gấu bông. BiLSTM đọc cả từ phía sau (\"Roosevelt\" vs \"bears\"), cung cấp ngữ cảnh tương lai để phân loại chính xác.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 48-50"
  },
  {
    "id": 523,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Mô hình Không gian Trạng thái liên tục (Continuous-time State Space Model - SSM) trong lý thuyết điều khiển tuyến tính được mô tả bởi hệ phương trình vi phân nào?",
    "options": [
      "$h(t) = w^T x(t) + b$",
      "$\\dot{h}(t) = A h(t) + B x(t)$ và $y(t) = C h(t)$",
      "$y(t) = \\text{softmax}(x(t))$",
      "$\\Delta h(t) = \\max(0, h(t))$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Hệ phương trình LTI SSM:\n$$\\dot{h}(t) = A h(t) + B x(t)$$\n$$y(t) = C h(t)$$\n* $x(t)$: Tín hiệu đầu vào liên tục theo thời gian.\n* $h(t)$: Trạng thái ẩn bên trong (Internal state vector).\n* $y(t)$: Tín hiệu đầu ra.\n* $A, B, C$: Các ma trận tham số của hệ thống tuyến tính bất biến theo thời gian (LTI).",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 54-57"
  },
  {
    "id": 524,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Kỹ thuật Rời rạc hóa (Discretization) bằng phương pháp giữ bậc không (Zero-Order Hold - ZOH) với bước nhảy thời gian $\\Delta$ biến đổi ma trận $A$ liên tục thành ma trận $\\bar{A}$ rời rạc theo công thức nào?",
    "options": [
      "$\\bar{A} = A + \\Delta$",
      "$\\bar{A} = \\exp(\\Delta A)$",
      "$\\bar{A} = \\frac{A}{\\Delta}$",
      "$\\bar{A} = A^T A$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Rời rạc hóa ZOH:\n$$\\bar{A} = \\exp(\\Delta A)$$\n$$\\bar{B} = (\\Delta A)^{-1}(\\exp(\\Delta A) - I) \\cdot \\Delta B$$\nBiến đổi hệ liên tục thành hệ rời rạc để máy tính có thể xử lý các chuỗi token rời rạc theo từng bước thời gian: $h_t = \\bar{A} h_{t-1} + \\bar{B} x_t$.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 58"
  },
  {
    "id": 525,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Tính chất tính toán kép (Dual Computation Modes) của mô hình LTI SSM mang lại hai ưu thế vượt bậc nào?",
    "options": [
      "Chạy được trên cả Windows và macOS",
      "Dạng Hồi quy (Recurrent Mode) cho phép suy luận (Inference) cực nhanh trong thời gian $O(1)$ mỗi bước; Dạng Tích chập (Convolutional Mode) cho phép huấn luyện song song toàn chuỗi cực nhanh trong thời gian $O(N \\log N)$ nhờ phép biến đổi Fourier (FFT)",
      "Chỉ tính toán khi người dùng nhấn phím Enter",
      "Tự động dịch mã sang ngôn ngữ C++"
    ],
    "answer": 1,
    "explanation": "### 🎯 Tính toán kép của LTI SSM:\n* **Khi Training:** Khai triển $y = x * \\bar{K}$, là một phép tích chập 1D với kernel $\\bar{K} = (C\\bar{B}, C\\bar{A}\\bar{B}, C\\bar{A}^2\\bar{B}, \\dots)$. Tính song song toàn bộ câu qua FFT trong $O(N \\log N)$ giống như CNN!\n* **Khi Inference:** Chuyển sang dạng hồi quy $h_t = \\bar{A} h_{t-1} + \\bar{B} x_t$, chỉ mất $O(1)$ thời gian và bộ nhớ cố định giống như RNN, không cần cache ma trận KV khổng lồ như Transformer!",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 59-60"
  },
  {
    "id": 526,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Hạn chế căn bản của các mô hình State Space Model thế hệ trước (như S4) dựa trên giả định Bất biến theo thời gian tuyến tính (Linear Time Invariance - LTI) là gì?",
    "options": [
      "Các ma trận $A, B, C$ bị cố định cho mọi token, khiến mô hình không thể chọn lọc hoặc ghi nhớ thông tin phụ thuộc vào ngữ cảnh (không thể lọc bỏ từ rác hoặc nhớ từ khóa)",
      "Mô hình không thể chạy được trên card đồ họa GPU",
      "Mô hình chỉ áp dụng được cho dữ liệu bảng 1 chiều",
      "Số tham số của mô hình thay đổi liên tục theo thời gian"
    ],
    "answer": 0,
    "explanation": "### 🎯 Giới hạn của LTI SSM:\nTrong hệ LTI, cách thức thông tin được nén vào trạng thái ẩn luôn cố định bất kể từ đó là từ nối vô nghĩa (\"the\", \"and\") hay danh từ then chốt. Mô hình không thể thực hiện tác vụ chọn lọc nội dung (Selective Copying hay Induction Heads) mà Transformer làm rất tốt.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 62-63"
  },
  {
    "id": 527,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Đột phá cốt lõi của kiến trúc Mamba (Selective State Space Model - S6, Gu & Dao 2024) là gì?",
    "options": [
      "Tăng số đầu Attention lên 128 đầu",
      "Cơ chế Chọn lọc (Selection Mechanism): phá vỡ tính LTI bằng cách cho các ma trận tham số $B, C$ và bước thời gian $\\Delta$ biến thiên phụ thuộc trực tiếp vào dữ liệu đầu vào hiện tại: $B_t = s_B(x_t), C_t = s_C(x_t), \\Delta_t = \\tau_\\Delta(\\text{Linear}(x_t))$",
      "Thay thế hoàn toàn mạng nơ-ron bằng thuật toán K-Nearest Neighbors",
      "Xóa bỏ hoàn toàn bước rời rạc hóa ZOH"
    ],
    "answer": 1,
    "explanation": "### 🎯 Đột phá S6 của Mamba:\nBằng cách biến các tham số thành hàm phụ thuộc vào input $x_t$, Mamba cho phép mô hình tự quyết định:\n* Khi gặp từ rác: Đặt $\\Delta_t$ nhỏ $\\implies$ không lưu vào bộ nhớ.\n* Khi gặp từ quan trọng: Đặt $\\Delta_t$ lớn $\\implies$ nạp sâu vào trạng thái ẩn.\nĐiều này mang lại sức mạnh chú ý ngữ cảnh y hệt như Attention của Transformer!",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 63-65"
  },
  {
    "id": 528,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Khi phá vỡ tính chất LTI (các tham số phụ thuộc vào $x_t$), mô hình Mamba không còn dùng được phép tích chập song song FFT. Mamba đã giải quyết bài toán tốc độ huấn luyện trên GPU bằng thuật toán phần cứng nào?",
    "options": [
      "Thuật toán quét song song nhận thức phần cứng (Hardware-aware Selective Scan) tận dụng bộ nhớ SRAM nhanh trên chip GPU và tính toán lại (Recomputation) ở lượt truyền ngược",
      "Chuyển toàn bộ dữ liệu lên bộ nhớ đám mây Cloud",
      "Giảm độ sâu của mô hình xuống còn 1 tầng duy nhất",
      "Chỉ tính toán trên các số nguyên 8-bit mà không dùng số thực"
    ],
    "answer": 0,
    "explanation": "### 🎯 Hardware-aware Selective Scan trong Mamba:\nThay vì đưa các ma trận trạng thái trung gian khổng lồ ra bộ nhớ HBM (DRAM) chậm của GPU (vốn là điểm nghẽn cổ chai I/O), Mamba sử dụng **Kernel Fusion** để tải dữ liệu vào bộ nhớ cực nhanh **SRAM** trên chip GPU, thực hiện thuật toán Parallel Scan trực tiếp trên SRAM, và tính toán lại (Recomputation) ở lượt backward thay vì lưu lại. Nhờ đó Mamba chạy nhanh hơn Transformer tới 5 lần trên chuỗi dài!",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 68-70"
  },
  {
    "id": 529,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "So sánh độ phức tạp tính toán theo độ dài chuỗi $N$ giữa kiến trúc Mamba và cơ chế Attention của Transformer:",
    "options": [
      "Mamba có độ phức tạp bậc hai $O(N^2)$, Transformer có độ phức tạp tuyến tính $O(N)$",
      "Mamba có độ phức tạp tuyến tính $O(N)$ cả về thời gian và bộ nhớ; trong khi Attention của Transformer có độ phức tạp bậc hai $O(N^2)$",
      "Cả hai mô hình đều có độ phức tạp hằng số $O(1)$",
      "Mamba có độ phức tạp hàm mũ $O(2^N)$"
    ],
    "answer": 1,
    "explanation": "### 🎯 So sánh Độ phức tạp Mamba vs Transformer:\n* **Transformer Self-Attention:** $O(N^2)$ (mỗi token phải tính tích vô hướng với tất cả các token khác) $\\implies$ chi phí bùng nổ khi chuỗi dài hàng triệu token.\n* **Mamba:** Đạt **chi phí tuyến tính $O(N)$**, cho phép mở rộng ngữ cảnh lên hàng trăm ngàn đến hàng triệu tokens mượt mà và suy luận với tốc độ hằng số $O(1)$ mỗi token.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 52, 74"
  },
  {
    "id": 530,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Khối kiến trúc Mamba Block kết hợp thống nhất các thành phần nào thay vì tách rời Attention và MLP như Transformer truyền thống?",
    "options": [
      "Chiếu mở rộng HBN, tích chập 1D ngắn, hàm kích hoạt SiLU / Swish, khối SSM chọn lọc và cổng gating tương tự Gated MLP",
      "Khối Pooling, khối Dropout và tầng Softmax",
      "Cây quyết định nhị phân và hồi quy Logistic",
      "Mạng nơ-ron lan truyền ngược đơn tầng"
    ],
    "answer": 0,
    "explanation": "### 🎯 Kiến trúc Mamba Block:\nMamba thiết kế một block đồng nhất (Homogeneous Architecture): vector đầu vào được nhân đôi chiều, một nhánh đi qua Conv 1D + SiLU + SSM chọn lọc S6, nhánh kia làm cổng Gating nhân phần tử, sau đó chiếu nén trở lại kích thước gốc. Thiết kế này loại bỏ sự cần thiết của khối MLP tách biệt.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 71"
  },
  {
    "id": 531,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Trong bài toán mô hình hóa chuỗi, kiến trúc nào sau đây KHÔNG THỂ chạy song song trên GPU trong giai đoạn huấn luyện (Training)?",
    "options": [
      "Mạng Transformer",
      "Mạng nơ-ron hồi quy cổ điển (Standard RNN)",
      "Mạng tích chập 1D (CNN 1D)",
      "Mô hình Mamba (với Hardware-aware Selective Scan)"
    ],
    "answer": 1,
    "explanation": "### 🎯 Điểm yếu của RNN thuần túy:\nDo công thức $a_t = g(W_{aa} a_{t-1} + W_{ax} x_t)$, bước $t$ hoàn toàn lệ thuộc vào kết quả của bước $t-1$. GPU có hàng ngàn nhân tính toán nhưng buộc phải ngồi chờ từng bước thời gian tính tuần tự $\\implies$ không thể song song hóa trong training.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 18, 52"
  },
  {
    "id": 532,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Định lý 1 trong bài báo Mamba (Gu & Dao, 2024) chỉ ra mối liên hệ mật thiết giữa cơ chế chọn lọc SSM và cơ chế cổng nào của RNN?",
    "options": [
      "Cơ chế cổng ReLU",
      "Cơ chế cổng Gated Recurrent Unit (GRU) và LSTM, trong đó tham số $\\Delta_t$ đóng vai trò tương tự như cổng quên (Forget Gate)",
      "Cổng lượng tử hóa",
      "Cổng phân nhánh cây C4.5"
    ],
    "answer": 1,
    "explanation": "### 🎯 Mối liên hệ toán học giữa SSM và RNN Gating:\nĐịnh lý 1 chứng minh rằng cơ chế rời rạc hóa ZOH với tham số bước thời gian phụ thuộc đầu vào $\\Delta_t$ chính là một dạng tổng quát hóa của cơ chế Gating trong LSTM/GRU. Khi $\\Delta_t \\to 0$, mô hình bỏ qua trạng thái hiện tại (giữ nguyên bộ nhớ cũ); khi $\\Delta_t \\to \\infty$, mô hình xóa sạch bộ nhớ cũ để nạp thông tin mới.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 67"
  },
  {
    "id": 533,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Trong mạng RNN, bài toán Lấy mẫu sinh chuỗi mới (Sampling) hoạt động theo cơ chế nào?",
    "options": [
      "Tại mỗi bước, lấy mẫu từ phân phối xác suất đầu ra $\\hat{y}^{\\langle t \\rangle}$ và nạp kết quả đó làm đầu vào $x^{\\langle t+1 \\rangle}$ cho bước tiếp theo",
      "Sinh ngẫu nhiên toàn bộ câu trong 1 lần duy nhất",
      "Sao chép y nguyên câu trong tập dữ liệu huấn luyện",
      "Tính nghịch đảo của chuỗi gốc"
    ],
    "answer": 0,
    "explanation": "### 🎯 Cơ chế Sampling trong Sequence Generation:\nĐể sinh văn bản hay âm nhạc mới, ở bước 1 ta nạp vector 0 hoặc token `<sos>`. Mạng sinh ra xác suất của từ tiếp theo. Ta dùng hàm `np.random.choice` để bốc ngẫu nhiên một từ theo phân phối xác suất này, rồi nạp chính từ vừa sinh làm đầu vào cho bước 2.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 33"
  },
  {
    "id": 534,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Mô hình ngôn ngữ mức ký tự (Character-level Language Model) trong RNN khác với mô hình mức từ (Word-level) ở điểm nào?",
    "options": [
      "Từ điển (Vocabulary) của mức ký tự nhỏ hơn rất nhiều (chỉ gồm các chữ cái a-z, chữ số, dấu câu) và không bao giờ gặp lỗi từ ngoài từ điển (Out-Of-Vocabulary - OOV)",
      "Mức ký tự có độ dài chuỗi ngắn hơn mức từ",
      "Mức ký tự không thể huấn luyện được bằng BPTT",
      "Mức ký tự chỉ dùng được cho tiếng La-tinh"
    ],
    "answer": 0,
    "explanation": "### 🎯 Character-level vs Word-level:\n* **Word-level:** Từ điển khổng lồ ($50.000 - 100.000$ từ), dễ gặp từ lạ OOV, nhưng chuỗi ngắn.\n* **Character-level:** Từ điển cực nhỏ (khoảng 100 ký tự), không sợ từ lạ OOV, nhưng chuỗi trở nên dài gấp 5-10 lần $\\implies$ đòi hỏi mô hình phải nhớ được phụ thuộc xa hơn.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 34"
  },
  {
    "id": 535,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Biến thể GRU (Gated Recurrent Unit) đơn giản hóa cấu trúc của LSTM bằng cách nào?",
    "options": [
      "Gộp Cell State và Hidden State làm một, chỉ sử dụng 2 cổng: Cổng cập nhật (Update Gate) và Cổng đặt lại (Reset Gate)",
      "Tăng số cổng lên thành 5 cổng",
      "Loại bỏ hoàn toàn các phép nhân có trọng số",
      "Thay thế hàm kích hoạt Sigmoid bằng hàm bậc thang"
    ],
    "answer": 0,
    "explanation": "### 🎯 GRU (Cho et al., 2014):\nGRU đơn giản hóa tế bào LSTM: hòa trộn trạng thái $C_t$ và $a_t$ thành một vector trạng thái ẩn duy nhất $h_t$; kết hợp cổng quên và cổng nạp thành **Update Gate ($z_t$)**, và dùng **Reset Gate ($r_t$)**. GRU có ít tham số hơn LSTM, tính toán nhanh hơn và thường cho hiệu năng tương đương.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 47"
  },
  {
    "id": 536,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Ma trận $A$ trong mô hình S4 và Mamba thường được khởi tạo đặc biệt theo ma trận nào để tối ưu hóa khả năng ghi nhớ dài hạn?",
    "options": [
      "Ma trận toàn số 0",
      "Ma trận HiPPO (High-order Polynomial Projection Operators)",
      "Ma trận đơn vị Identity",
      "Ma trận ngẫu nhiên phân phối Gauss"
    ],
    "answer": 1,
    "explanation": "### 🎯 Khởi tạo HiPPO (Gu et al., 2020):\nHiPPO cung cấp cơ sở toán học để nén lịch sử tín hiệu liên tục vào một không gian đa thức trực giao Legendre. Việc khởi tạo ma trận $A$ theo cấu trúc HiPPO cho phép hệ SSM duy trì trí nhớ qua hàng chục ngàn bước thời gian mà không bị suy hao thông tin.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 61"
  },
  {
    "id": 537,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Trong bài toán Dịch máy (Machine Translation) sử dụng mạng RNN, kiến trúc nào được sử dụng để chuyển đổi câu từ ngôn ngữ nguồn sang ngôn ngữ đích có độ dài khác nhau?",
    "options": [
      "Mô hình Perceptron đơn tầng",
      "Kiến trúc Bộ mã hóa - Bộ giải mã (Encoder - Decoder)",
      "Mô hình hồi quy tuyến tính Lasso",
      "Thuật toán phân cụm DBSCAN"
    ],
    "answer": 1,
    "explanation": "### 🎯 Kiến trúc Encoder - Decoder (Seq2Seq):\n* **Encoder:** Đọc toàn bộ câu nguồn tiếng Anh từng từ một và nén toàn bộ thông tin vào vector trạng thái ẩn cuối cùng.\n* **Decoder:** Nhận vector trạng thái này làm khởi đầu và sinh từng từ tiếng Việt tiếp theo cho đến khi gặp token kết thúc.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 10, 30"
  },
  {
    "id": 538,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Hiện tượng \"Bottleneck\" trong kiến trúc RNN Encoder-Decoder truyền thống (trước khi có Attention) là gì?",
    "options": [
      "Dung lượng lưu trữ của ổ cứng bị quá tải",
      "Toàn bộ ngữ nghĩa của câu nguồn dù dài bao nhiêu từ cũng bị ép phải nén vào một vector kích thước cố định duy nhất, gây mất mát thông tin nghiêm trọng trên các câu dài",
      "Tốc độ mạng internet bị suy giảm",
      "Hàm Softmax không thể chạy trên GPU"
    ],
    "answer": 1,
    "explanation": "### 🎯 Điểm nghẽn biểu diễn của Seq2Seq cổ điển:\nBắt một vector có độ dài cố định (ví dụ 512 số thực) phải ghi nhớ đầy đủ từng chi tiết của một đoạn văn dài 100 từ là điều bất khả thi. Đây chính là lý do cơ chế Attention ra đời: cho phép Decoder nhìn lại toàn bộ các trạng thái ẩn trung gian của Encoder.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 30, 52"
  },
  {
    "id": 539,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Trong thực nghiệm đánh giá mô hình Mamba trên các lĩnh vực phi ngôn ngữ (Non-language domains), Mamba thể hiện sự vượt trội rõ rệt nhất ở dạng dữ liệu nào?",
    "options": [
      "Hình ảnh đen trắng kích thước 8x8",
      "Dữ liệu chuỗi DNA dài hàng triệu cặp bazơ và tín hiệu âm thanh thô độ phân giải cao",
      "Dữ liệu bảng có ít hơn 10 dòng",
      "Tập dữ liệu hoa Iris"
    ],
    "answer": 1,
    "explanation": "### 🎯 Ứng dụng chuỗi siêu dài của Mamba:\nNhờ độ phức tạp tuyến tính $O(N)$ và khả năng chọn lọc, Mamba cực kỳ xuất sắc trong mô hình hóa chuỗi DNA (nơi chuỗi dài hàng triệu base-pairs mà Transformer bị nổ bộ nhớ) và dữ liệu sóng âm thanh thô độ dài hàng trăm ngàn mẫu.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 74"
  },
  {
    "id": 540,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Hạn chế hiện tại của mô hình Mamba so với các mô hình Transformer đã được thừa nhận trong bài báo là gì?",
    "options": [
      "Mamba không thể chạy được trên card đồ họa NVIDIA",
      "Chi phí phần cứng khi huấn luyện từ đầu vẫn đòi hỏi các GPU hiện đại có băng thông SRAM cao, và hệ sinh thái tối ưu hóa phần mềm chưa phong phú bằng Transformer vốn đã phát triển gần 10 năm",
      "Mamba chỉ hoạt động với chuỗi có độ dài nhỏ hơn 10",
      "Mamba không có hàm mất mát toán học"
    ],
    "answer": 1,
    "explanation": "### 🎯 Giới hạn của Mamba:\nTransformer đã có hệ sinh thái phần cứng (FlashAttention, TensorRT, TPU) được tối ưu hóa cực sâu trong nhiều năm. Mamba phụ thuộc vào các GPU có kiến trúc SRAM hiện đại (như A100/H100) để đạt tốc độ tối đa của Selective Scan, và quá trình huấn luyện quy mô hàng trăm tỷ tham số vẫn cần thời gian kiểm chứng cộng đồng.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 75"
  },
  {
    "id": 541,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Phương pháp Mã sửa lỗi đầu ra (Error-Correcting Output Codes - ECOC, Dietterich & Bakiri 1995) giải quyết bài toán phân loại đa lớp ($K > 2$ lớp) theo nguyên lý nào?",
    "options": [
      "Gộp tất cả các lớp thành 1 lớp duy nhất",
      "Phân tách bài toán đa lớp thành nhiều bài toán phân loại nhị phân độc lập dựa trên một ma trận mã hóa nhị phân kích thước $K \\times L$, sau đó dự đoán lớp dựa trên khoảng cách Hamming nhỏ nhất",
      "Sử dụng thuật toán K-Means để gom các lớp lại",
      "Huấn luyện duy nhất 1 đường hồi quy tuyến tính OLS"
    ],
    "answer": 1,
    "explanation": "### 🎯 Nguyên lý cốt lõi của ECOC:\nECOC mượn ý tưởng từ lý thuyết truyền tin (Information Theory). Mỗi lớp được gán một \"từ mã\" (codeword) nhị phân độ dài $L$ bit (tạo thành ma trận mã hóa $K \\times L$). Ta huấn luyện $L$ bộ phân loại nhị phân độc lập. Khi dự đoán, chuỗi đầu ra của $L$ bộ phân loại sẽ được so sánh với từ mã của từng lớp bằng khoảng cách Hamming; lớp nào gần nhất sẽ được chọn.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Slide 2, Paper Trang 1"
  },
  {
    "id": 542,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Khoảng cách Hamming (Hamming Distance) giữa hai từ mã nhị phân có độ dài bằng nhau được định nghĩa là:",
    "options": [
      "Tích vô hướng giữa hai vector",
      "Số lượng vị trí bit mà tại đó hai từ mã có giá trị khác nhau",
      "Độ dài cạnh huyền tam giác vuông",
      "Tổng bình phương khoảng cách giữa các số thực"
    ],
    "answer": 1,
    "explanation": "### 🎯 Khoảng cách Hamming:\nĐo số lượng bit khác biệt giữa 2 chuỗi nhị phân. Ví dụ: từ mã $A = [1, 0, 1, 1]$ và $B = [1, 1, 1, 0]$ có 2 vị trí bit khác nhau (ở vị trí thứ 2 và thứ 4) $\\implies$ Khoảng cách Hamming $d(A, B) = 2$.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 2"
  },
  {
    "id": 543,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Theo định lý sửa sai trong lý thuyết thông tin, nếu ma trận mã hóa ECOC có khoảng cách Hamming tối thiểu giữa 2 hàng bất kỳ là $d_{\\min}$, mô hình có khả năng tự động sửa đúng bao nhiêu lỗi phân loại nhị phân?",
    "options": [
      "$d_{\\min}$ lỗi",
      "Tối đa $\\left\\lfloor \\frac{d_{\\min} - 1}{2} \\right\\rfloor$ lỗi phân loại nhị phân",
      "Không thể sửa được lỗi nào",
      "$2 \\times d_{\\min}$ lỗi"
    ],
    "answer": 1,
    "explanation": "### 🎯 Khả năng sửa sai kỳ diệu của ECOC:\nNếu khoảng cách tối thiểu giữa 2 lớp bất kỳ là $d_{\\min}$, thì một lỗi dự đoán làm dịch chuyển từ mã đi 1 bit. Để từ mã bị biến thành một lớp khác, nó cần phải sai tối thiểu $\\lfloor \\frac{d_{\\min} - 1}{2} \\rfloor + 1$ bit. Do đó, nếu số bộ phân loại con bị đoán sai nhỏ hơn hoặc bằng $\\left\\lfloor \\frac{d_{\\min} - 1}{2} \\right\\rfloor$, từ mã dự đoán **vẫn nằm gần lớp đúng nhất**, và ECOC tự động sửa sai để cho ra kết quả cuối cùng hoàn toàn chính xác!",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Slide 4, Paper Trang 2"
  },
  {
    "id": 544,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Chiến lược One-vs-Rest (OvR) kinh điển có thể được biểu diễn như một trường hợp đặc biệt của ma trận mã hóa ECOC với dạng ma trận nào?",
    "options": [
      "Ma trận toàn số 0",
      "Ma trận đơn vị đường chéo kích thước $K \\times K$ (hoặc ma trận có đường chéo là 1 và các phần tử khác là 0 hoặc -1)",
      "Ma trận ngẫu nhiên kích thước vô hạn",
      "Ma trận tam giác dưới"
    ],
    "answer": 1,
    "explanation": "### 🎯 OvR là một dạng ECOC suy biến:\nTrong One-vs-Rest cho $K$ lớp, từ mã của lớp $i$ có bit thứ $i$ bằng 1 và tất cả các bit khác bằng 0 (hoặc -1). Khi đó, ma trận mã hóa chính là ma trận đơn vị $I_K$. Khoảng cách Hamming giữa hai lớp bất kỳ chỉ bằng đúng 2 $\\implies$ Khả năng sửa sai: $\\lfloor (2-1)/2 \\rfloor = 0$ (OvR hoàn toàn không có khả năng tự sửa sai nếu 1 bộ phân loại đoán hỏng!).",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 2-3"
  },
  {
    "id": 545,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Vì sao phương pháp Mã ngẫu nhiên (Random ECOC) với độ dài từ mã dài hơn (ví dụ $L = 50$ đến $60$ bit) lại vượt trội hơn hẳn so với One-vs-Rest (OvR)?",
    "options": [
      "Vì Random ECOC chạy nhanh hơn gấp 100 lần",
      "Vì độ dài mã dài hơn giúp tạo ra khoảng cách Hamming tối thiểu $d_{\\min}$ rất lớn, mang lại năng lực sửa sai dự phòng cực cao và chống chịu rất tốt trước hiện tượng nhãn nhiễu hoặc bộ phân loại yếu",
      "Vì Random ECOC không cần dùng dữ liệu huấn luyện",
      "Vì Random ECOC chỉ dùng được với cây quyết định"
    ],
    "answer": 1,
    "explanation": "### 🎯 Sức mạnh của Random ECOC dài:\nKhi tăng độ dài mã ngẫu nhiên lên $L = 50 - 60$ bit, khoảng cách Hamming $d_{\\min}$ giữa các lớp tăng vọt (thường đạt $d_{\\min} > 15$). Khi đó, dù có tới 5–7 bộ phân loại nhị phân con bị dự đoán sai hoàn toàn do nhiễu, khoảng cách Hamming tới lớp thật vẫn là nhỏ nhất $\\implies$ Kết quả cuối cùng vẫn đúng 100%!",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Slide 6, Paper Trang 4-6"
  },
  {
    "id": 546,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Sự khác biệt căn bản giữa bài toán Phân loại Đa lớp (Multiclass Classification) và bài toán Phân loại Đa nhãn (Multilabel Classification) trong Scikit-Learn là gì?",
    "options": [
      "Multiclass chỉ dùng được cho ảnh đen trắng",
      "Multiclass có các lớp loại trừ lẫn nhau (mỗi mẫu CHỈ THUỘC DUY NHẤT 1 lớp trong số K lớp); Multilabel cho phép mỗi mẫu thuộc về NHIỀU NHÃN CÙNG MỘT LÚC (vector nhãn nhị phân $y \\in \\{0, 1\\}^m$)",
      "Multiclass là học không giám sát, Multilabel là học có giám sát",
      "Hai bài toán này hoàn toàn đồng nhất về bản chất toán học"
    ],
    "answer": 1,
    "explanation": "### 🎯 Phân biệt Multiclass vs Multilabel:\n* **Multiclass:** Ví dụ nhận diện chữ số MNIST ($0, 1, \\dots, 9$): một ảnh chỉ có thể là số 3 HOẶC số 7 (không thể vừa là 3 vừa là 7).\n* **Multilabel:** Ví dụ gán thẻ cho bài báo: một tin tức có thể đồng thời thuộc các nhãn `['Kinh tế', 'Công nghệ', 'Chứng khoán']`.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Slide 2, Paper Trang 2"
  },
  {
    "id": 547,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Bài toán Hồi quy Đa đầu ra (Multioutput Regression) trong Scikit-Learn được định nghĩa như thế nào?",
    "options": [
      "Dự đoán 1 giá trị số nguyên duy nhất",
      "Dự đoán đồng thời nhiều biến mục tiêu liên tục ($y \\in \\mathbb{R}^m$) cho mỗi mẫu quan sát",
      "Dự đoán xác suất của 10 lớp rời rạc",
      "Gom cụm dữ liệu thành m cụm"
    ],
    "answer": 1,
    "explanation": "### 🎯 Multioutput Regression:\nMục tiêu $y$ không phải là một số vô hướng mà là một vector số thực liên tục có $m$ chiều. Ví dụ: Dự đoán tọa độ không gian 3 chiều $(x, y, z)$ và vận tốc của một vật thể bay.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Slide 2, Paper Trang 2"
  },
  {
    "id": 548,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Mô hình Chuỗi phân loại (Classifier Chains - Read et al., 2011) giải quyết bài toán Đa nhãn (Multilabel) vượt trội hơn phương pháp Binary Relevance độc lập ở điểm nào?",
    "options": [
      "Classifier Chains không cần dùng thuật toán tối ưu hóa",
      "Mô hình hóa được mối quan hệ phụ thuộc giữa các nhãn mục tiêu bằng cách xâu chuỗi: kết quả dự đoán của nhãn trước được dùng làm đặc trưng đầu vào bổ sung cho bộ phân loại của nhãn tiếp theo",
      "Classifier Chains huấn luyện nhanh hơn gấp 10 lần",
      "Classifier Chains chỉ áp dụng được cho dữ liệu văn bản tiếng Anh"
    ],
    "answer": 1,
    "explanation": "### 🎯 Sức mạnh của Classifier Chains:\nPhương pháp độc lập (Binary Relevance) giả định các nhãn hoàn toàn không liên quan đến nhau (sai thực tế). Classifier Chains sắp xếp các nhãn theo thứ tự: nhãn $y_1$ được đoán từ $X$; nhãn $y_2$ được đoán từ $[X, y_1]$; nhãn $y_3$ được đoán từ $[X, y_1, y_2]$... Nhờ đó, nếu đã đoán có nhãn \"Bệnh cúm\", mô hình sẽ dễ dàng dự đoán thêm nhãn \"Sốt cao\".",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Slide 4, Paper Trang 4"
  },
  {
    "id": 549,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Lớp `OutputCodeClassifier` trong module `sklearn.multiclass` của Scikit-Learn cung cấp tham số `code_size` nhằm kiểm soát điều gì?",
    "options": [
      "Kích thước bộ nhớ RAM tối đa của máy tính",
      "Tỷ lệ độ dài từ mã so với số lượng lớp: tổng số bộ phân loại nhị phân $L = \\text{round}(\\text{code\\_size} \\times K)$",
      "Số lượng cây trong rừng ngẫu nhiên",
      "Bán kính của siêu cầu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Tham số `code_size` trong Scikit-Learn:\nNếu bài toán có $K$ lớp, thiết lập `code_size=1.5` sẽ tạo ra ma trận mã hóa có số cột $L = 1.5 \\times K$ bộ phân loại nhị phân. Nếu `code_size` lớn, độ dài từ mã càng dài, khoảng cách Hamming càng lớn và khả năng sửa sai càng cao.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 3"
  },
  {
    "id": 550,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Những mô hình học máy nào sau đây trong Scikit-Learn hỗ trợ bài toán Đa đầu ra (Multioutput) một cách TỰ NHIÊN (natively) trong một mô hình duy nhất mà không cần wrapper bọc ngoài?",
    "options": [
      "Hồi quy Logistic và Linear SVM",
      "Cây quyết định (Decision Trees), Rừng ngẫu nhiên (Random Forests), Hồi quy Ridge và K-Nearest Neighbors",
      "Naïve Bayes và AdaBoost cổ điển",
      "Perceptron đơn tầng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Hỗ trợ Native Multioutput trong Scikit-Learn:\n* `DecisionTreeRegressor` / `DecisionTreeClassifier`: Tại mỗi lá có thể lưu trữ trực tiếp vector nhiều giá trị trung bình hoặc tỷ lệ lớp.\n* `RandomForestRegressor`: Tổng hợp kết quả vector từ các cây.\n* `Ridge`: Nghiệm ma trận đóng $W = (X^TX + \\alpha I)^{-1} X^TY$ với $Y$ là ma trận nhiều cột.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 4"
  },
  {
    "id": 551,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Hạn chế hoặc rủi ro tiềm ẩn lớn nhất của mô hình Chuỗi phân loại (Classifier Chains) là gì?",
    "options": [
      "Không thể lưu mô hình vào đĩa cứng",
      "Hiện tượng lan truyền lỗi sai theo dây chuyền (Error Propagation): nếu các bộ phân loại ở đầu chuỗi dự đoán sai, sai số đó sẽ trở thành đặc trưng đầu vào gây hại cho tất cả các bộ phân loại phía sau",
      "Mô hình không hỗ trợ hàm mất mát Cross-Entropy",
      "Chỉ chạy được với tập dữ liệu có ít hơn 100 dòng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Rủi ro của Classifier Chains:\nVì nhãn phía sau phụ thuộc hoàn toàn vào dự đoán của nhãn trước, việc sắp xếp thứ tự nhãn (ordering risk) cực kỳ nhạy cảm. Để giảm thiểu rủi ro này, người ta thường dùng **Ensemble of Classifier Chains (ECC)**: huấn luyện nhiều chuỗi với thứ tự nhãn ngẫu nhiên khác nhau và lấy trung bình dự đoán.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 4"
  },
  {
    "id": 552,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Trong bài toán Đa nhãn (Multilabel), độ đo đánh giá nào kiểm tra xem tập nhãn dự đoán có KHỚP HOÀN TOÀN 100% với tập nhãn thực tế hay không (chỉ cần sai 1 nhãn là tính sai cả mẫu)?",
    "options": [
      "Hamming Loss",
      "Exact Match Ratio (còn gọi là Subset Accuracy)",
      "Macro-Averaged F1-score",
      "Mean Squared Error"
    ],
    "answer": 1,
    "explanation": "### 🎯 Exact Match Ratio (Subset Accuracy):\nĐây là độ đo khắt khe nhất trong Multilabel: một mẫu chỉ được tính là đúng (1 điểm) nếu toàn bộ vector nhãn dự đoán $\\hat{y}$ trùng khớp tuyệt đối từng bit với vector nhãn thật $y$.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 3"
  },
  {
    "id": 553,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Độ đo Hamming Loss trong đánh giá bài toán Đa nhãn (Multilabel Classification) được tính bằng:",
    "options": [
      "Tổng thời gian huấn luyện của mô hình",
      "Tỷ lệ phần trăm giữa số lượng nhãn bị dự đoán sai trên tổng số nhãn của toàn bộ các mẫu",
      "Khoảng cách giữa tâm các lớp",
      "Số lượng thuộc tính bị loại bỏ"
    ],
    "answer": 1,
    "explanation": "### 🎯 Hamming Loss:\n$$\\text{Hamming Loss} = \\frac{1}{N \\cdot M} \\sum_{i=1}^N \\sum_{j=1}^M \\mathbb{I}(y_{i,j} \\ne \\hat{y}_{i,j})$$\nĐo tỷ lệ dự đoán nhãn sai trung bình trên từng nhãn nhị phân con. Giá trị càng nhỏ càng tốt ($0$ là hoàn hảo).",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 3"
  },
  {
    "id": 554,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Hai tiêu chuẩn thiết kế ma trận mã hóa ECOC tối ưu theo lý thuyết của Dietterich và Bakiri (1995) là gì?",
    "options": [
      "Tất cả các hàng phải hoàn toàn giống nhau và tất cả các cột phải có tổng bằng 0",
      "Khoảng cách giữa các hàng phải lớn (Row Separation: các cặp lớp có từ mã xa nhau để tối đa hóa khả năng sửa sai) và các cột không được tương quan hoặc bổ sung nhau (Column Separation: các bài toán nhị phân con độc lập nhau)",
      "Ma trận phải là ma trận số nguyên tố",
      "Số cột phải luôn nhỏ hơn số hàng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Hai nguyên tắc thiết kế mã ECOC:\n1. **Row Separation:** Khoảng cách Hamming giữa các cặp hàng (lớp) phải lớn để phân biệt rõ và sửa sai tốt.\n2. **Column Separation:** Các cột (bộ phân loại con) không được giống nhau hoặc là phần bù đảo bit của nhau, nhằm bảo đảm các bộ phân loại con học các khía cạnh độc lập của dữ liệu.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 2"
  },
  {
    "id": 555,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Trong báo cáo thực nghiệm seminar Nhóm 6, phương pháp ECOC-R60 (Random ECOC với độ dài 60 bit) thể hiện hiệu năng thế nào so với One-vs-Rest (OvR) chuẩn?",
    "options": [
      "ECOC-R60 luôn cho độ chính xác thấp hơn OvR",
      "ECOC-R60 xếp hạng nhất trên 6/8 tập dữ liệu thực nghiệm, đem lại mức cải thiện độ chính xác vượt trội (accuracy gain) so với One-vs-Rest",
      "ECOC-R60 chỉ chạy được với tập dữ liệu nhỏ hơn 10 mẫu",
      "ECOC-R60 cho kết quả giống hệt OvR"
    ],
    "answer": 1,
    "explanation": "### 🎯 Kết quả thực nghiệm ECOC:\nThực nghiệm trên 8 tập dữ liệu đa lớp chuẩn (Segment, Vowel, Optdigits...) chỉ ra rằng ECOC-R60 vượt trội hoàn toàn so với OvR nhờ khả năng chịu lỗi và tính độc lập của các mã ngẫu nhiên 60-bit.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 5, Figure 2 & 3"
  },
  {
    "id": 556,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Khi nào người ta nên ưu tiên sử dụng mã ECOC dài thay vì dùng One-vs-Rest (OvR) hay One-vs-One (OvO)?",
    "options": [
      "Khi thời gian huấn luyện đòi hỏi phải dưới 1 mili-giây",
      "Khi dữ liệu có nhãn bị nhiễu (Noisy labels) hoặc khi bộ phân loại cơ sở (base learner) không ổn định (Unstable / High Variance)",
      "Khi tập dữ liệu chỉ có đúng 2 lớp đối tượng",
      "Khi bài toán không có dữ liệu kiểm thử"
    ],
    "answer": 1,
    "explanation": "### 🎯 Khi nào nên dùng ECOC dài:\nBáo cáo khuyến nghị: Khi dữ liệu bị nhiễu nhãn hoặc mô hình con dễ bị overfit (như cây quyết định sâu), các mã ECOC dài ($\\ge 60$ bits) đóng vai trò như một bộ đệm sửa lỗi bảo vệ hệ thống khỏi các quyết định sai lầm của từng mô hình đơn lẻ.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 11"
  },
  {
    "id": 557,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Mô hình Regressor Chains (Spyromitros-Xioufis et al., 2011) áp dụng tư tưởng của Classifier Chains cho bài toán nào?",
    "options": [
      "Bài toán Hồi quy Đa đầu ra (Multioutput Regression) bằng cách xâu chuỗi các giá trị dự đoán liên tục của đầu ra trước làm đầu vào bổ sung cho đầu ra sau",
      "Bài toán phân cụm phân cấp",
      "Bài toán trích xuất đặc trưng PCA",
      "Bài toán mã hóa One-Hot"
    ],
    "answer": 0,
    "explanation": "### 🎯 Regressor Chains:\nChuyển giao ý tưởng chuỗi sang bài toán hồi quy đa biến: thay vì dự đoán độc lập từng biến $y_j$, mô hình hồi quy thứ $j$ nhận các biến mục tiêu đã dự đoán trước đó $(\\hat{y}_1, \\dots, \\hat{y}_{j-1})$ làm các thuộc tính đầu vào để nắm bắt tương quan giữa các biến liên tục.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 4"
  },
  {
    "id": 558,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Trong Scikit-Learn, hàm tiện ích nào được sử dụng để tự động kiểm tra định dạng của biến mục tiêu `y` (trả về `'multiclass'`, `'multilabel-indicator'`, `'multiclass-multioutput'`, v.v.)?",
    "options": [
      "`sklearn.utils.multiclass.type_of_target(y)`",
      "`np.shape(y)`",
      "`sklearn.metrics.accuracy_score(y)`",
      "`pd.DataFrame(y).info()`"
    ],
    "answer": 0,
    "explanation": "### 🎯 Hàm `type_of_target(y)`:\nĐây là hàm chuẩn nội bộ của Scikit-Learn giúp xác định chính xác bài toán mục tiêu dựa trên hình dạng và kiểu dữ liệu của $y$, từ đó điều hướng lựa chọn meta-estimator phù hợp.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Slide 2, Paper Trang 2"
  },
  {
    "id": 559,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Lớp `MultiOutputClassifier` trong Scikit-Learn hoạt động theo chiến lược mở rộng nào?",
    "options": [
      "Chiến lược Binary Relevance: tự động khởi tạo và huấn luyện một mô hình phân loại độc lập cho mỗi cột nhãn mục tiêu trong bài toán đa nhãn",
      "Chiến lược Stacking với Meta-learner",
      "Chiến lược giảm chiều dữ liệu t-SNE",
      "Chiến lược cây bao trùm ngắn nhất"
    ],
    "answer": 0,
    "explanation": "### 🎯 `MultiOutputClassifier`:\nWrapper đơn giản cho phép bất kỳ bộ phân loại nhị phân hay đa lớp nào mở rộng sang dự đoán nhiều cột nhãn đồng thời bằng cách nhân bản mô hình độc lập cho từng cột mục tiêu.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Slide 2, Paper Trang 2"
  },
  {
    "id": 560,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Một bài toán có $K = 4$ lớp đối tượng, ma trận mã hóa ECOC được thiết kế sao cho khoảng cách Hamming giữa mọi cặp lớp đều bằng $d = 5$. Mô hình này có thể tự động sửa được tối đa bao nhiêu lỗi phân loại nhị phân con?",
    "options": [
      "0 lỗi",
      "1 lỗi",
      "2 lỗi",
      "5 lỗi"
    ],
    "answer": 2,
    "explanation": "### 🎯 Tính toán khả năng sửa sai ECOC:\nÁp dụng công thức:\n$$\\text{Số lỗi sửa được} = \\left\\lfloor \\frac{d - 1}{2} \\right\\rfloor = \\left\\lfloor \\frac{5 - 1}{2} \\right\\rfloor = \\left\\lfloor \\frac{4}{2} \\right\\rfloor = 2 \\text{ lỗi}.$$\nDù có 2 bộ phân loại nhị phân con bị phán đoán sai, mô hình ECOC vẫn chọn chính xác lớp đúng!",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 2"
  },
  {
    "id": 561,
    "chapter": 13,
    "question": "Bản chất toán học của mô hình Cây quyết định (Decision Tree) trong bài toán hồi quy là gì?",
    "options": [
      "A. Một xấp xỉ hằng số từng đoạn (piecewise constant approximation) phân chia không gian đặc trưng thành các siêu hộp trực giao",
      "B. Một hàm liên tục khả vi bậc cao xấp xỉ không gian bằng đa thức",
      "C. Một tổ hợp tuyến tính các đặc trưng sau khi qua hàm phi tuyến sigmoid",
      "D. Một hàm siêu phẳng phân chia không gian tối đa hóa lề (maximum margin hyperplane)"
    ],
    "answer": "A",
    "explanation": "Decision Tree chia không gian đầu vào thành tập hợp các khối/siêu hộp trực giao (hyper-rectangles) song song với các trục tọa độ và gán một giá trị hằng số (thường là trung bình nhãn) cho mỗi vùng lá. Do đó nó tạo ra xấp xỉ hằng số từng đoạn (piecewise constant)."
  },
  {
    "id": 562,
    "chapter": 13,
    "question": "Trong thư viện Scikit-Learn (`DecisionTreeRegressor`), tiêu chí tách nhánh mặc định `criterion='squared_error'` tối thiểu hóa đại lượng nào tại mỗi bước phân chia?",
    "options": [
      "A. Tổng sai số bình phương dư thừa (Mean Squared Error / L2 loss) so với trung bình của mỗi nút con",
      "B. Tổng sai số tuyệt đối (Mean Absolute Error / L1 loss) so với trung vị của mỗi nút con",
      "C. Sai số tương đối phần trăm trung bình (MAPE)",
      "D. Khoảng cách Mahalanobis giữa hai nút con"
    ],
    "answer": "A",
    "explanation": "`criterion='squared_error'` (trước đây là 'mse') đo lường độ giảm của sai số bình phương trung bình (MSE), tức là tìm điểm chia sao cho tổng phương sai có trọng số của hai nút con là nhỏ nhất (tương đương tối đa hóa phương sai giải thích được)."
  },
  {
    "id": 563,
    "chapter": 13,
    "question": "Tiêu chí tách nhánh `criterion='friedman_mse'` trong Scikit-Learn thường được thiết kế chuyên biệt và tối ưu nhất cho mô hình nào?",
    "options": [
      "A. Gradient Boosting Regressor (cải thiện xấp xỉ MSE với điểm số Friedman)",
      "B. Logistic Regression",
      "C. Ordinary Least Squares",
      "D. Naive Bayes Classifier"
    ],
    "answer": "A",
    "explanation": "`friedman_mse` sử dụng phương pháp tính điểm cải tiến của Jerome Friedman, tối ưu hóa tốc độ và chất lượng phân tách đặc biệt phù hợp khi cây đóng vai trò là weak learner trong Gradient Boosting."
  },
  {
    "id": 564,
    "chapter": 13,
    "question": "Tham số `splitter='random'` khác biệt như thế nào so với `splitter='best'` trong `DecisionTreeClassifier`/`DecisionTreeRegressor` của Scikit-Learn?",
    "options": [
      "A. `best` đánh giá tất cả các ngưỡng phân chia của mọi đặc trưng để chọn tối ưu; còn `random` chọn ngẫu nhiên một ngưỡng cho mỗi đặc trưng rồi chọn đặc trưng tốt nhất, giúp chống overfitting và chạy nhanh hơn",
      "B. `random` xáo trộn ngẫu nhiên nhãn mục tiêu y trước khi huấn luyện",
      "C. `random` chia dữ liệu thành tập con ngẫu nhiên trước khi tính độ vẩn đục Gini",
      "D. `best` chỉ xét 1 đặc trưng ngẫu nhiên còn `random` xét tất cả đặc trưng"
    ],
    "answer": "A",
    "explanation": "`splitter='best'` duyệt qua mọi ngưỡng phân chia khả dĩ của tất cả đặc trưng (hoặc `max_features`) để tìm điểm phân chia hoàn hảo nhất. `splitter='random'` sinh ngưỡng ngẫu nhiên cho từng đặc trưng và chọn phân tách tốt nhất trong số đó, giảm độ phụ thuộc vào nhiễu và tăng tốc độ tính toán."
  },
  {
    "id": 565,
    "chapter": 13,
    "question": "Khi cây quyết định hồi quy gặp dữ liệu kiểm tra nằm ngoài miền giá trị cực trị của tập huấn luyện (extrapolation), hành vi dự đoán của cây sẽ như thế nào?",
    "options": [
      "A. Không thể ngoại suy xu hướng tuyến tính mà sẽ dự đoán bằng giá trị hằng số của nút lá tương ứng tại biên",
      "B. Tiếp tục ngoại suy tuyến tính theo độ dốc gần nhất",
      "C. Báo lỗi ngoại lệ Out-of-Range Exception trong Scikit-Learn",
      "D. Tự động chuyển đổi thành mô hình hồi quy bậc hai"
    ],
    "answer": "A",
    "explanation": "Cây quyết định hoàn toàn không thể ngoại suy (cannot extrapolate). Mọi điểm dữ liệu lớn hơn giá trị lớn nhất trong tập train đều rơi vào cùng một nút lá ngoài cùng và nhận cùng giá trị dự đoán hằng số của lá đó."
  },
  {
    "id": 566,
    "chapter": 13,
    "question": "Kỹ thuật tỉa cành Minimal Cost-Complexity Pruning (tỉa cành tối thiểu chi phí - độ phức tạp) trong Scikit-Learn được điều khiển thông qua tham số nào?",
    "options": [
      "A. `ccp_alpha`",
      "B. `alpha_pruning_ratio`",
      "C. `tree_l1_penalty`",
      "D. `cost_complexity_factor`"
    ],
    "answer": "A",
    "explanation": "Hàm chi phí tỉa cành là $R_\\alpha(T) = R(T) + \\alpha |T|$, trong đó $R(T)$ là tổng độ vẩn đục/sai số và $|T|$ là số lượng nút lá. Tham số `ccp_alpha` ($\\ge 0$) điều khiển mức độ phạt kích thước cây. $\\alpha = 0$ là cây không tỉa, $\\alpha$ càng lớn cây càng bị cắt gọt nhiều."
  },
  {
    "id": 567,
    "chapter": 13,
    "question": "Phương thức nào trong `DecisionTreeClassifier` cho phép trích xuất dãy các giá trị `ccp_alphas` hiệu dụng và độ vẩn đục tương ứng để dò tìm siêu tham số tối ưu?",
    "options": [
      "A. `cost_complexity_pruning_path(X, y)`",
      "B. `get_pruning_alphas()`",
      "C. `compute_effective_alphas(X, y)`",
      "D. `tree_prune_schedule()`"
    ],
    "answer": "A",
    "explanation": "Trong Scikit-Learn, hàm `tree.cost_complexity_pruning_path(X, y)` trả về `ccp_alphas` và `impurities`, biểu diễn các ngưỡng alpha làm xuất hiện các cây tỉa cành khác nhau dọc theo lộ trình cắt tỉa."
  },
  {
    "id": 568,
    "chapter": 13,
    "question": "Sự khác biệt căn bản giữa tham số `min_samples_split` và `min_samples_leaf` là gì?",
    "options": [
      "A. `min_samples_split` là số lượng mẫu tối thiểu cần có tại một nút để nút đó được phép phân chia tiếp; còn `min_samples_leaf` là số mẫu tối thiểu bắt buộc phải có ở mỗi nút con (nút lá) sau phân chia",
      "B. `min_samples_leaf` chỉ áp dụng cho phân loại, `min_samples_split` chỉ áp dụng cho hồi quy",
      "C. `min_samples_split` đo lường số đặc trưng, còn `min_samples_leaf` đo lường số mẫu",
      "D. Cả hai có vai trò hoàn toàn tương đương và có thể dùng thay thế nhau mà không đổi kết quả"
    ],
    "answer": "A",
    "explanation": "`min_samples_split` quy định điều kiện để một nút mẹ được xét chia nhánh. `min_samples_leaf` đảm bảo rằng bất kể chia theo ngưỡng nào, cả hai nút con tạo thành đều phải chứa ít nhất số mẫu này, giúp làm mượt mô hình và chống học vẹt các mẫu ngoại lai đơn lẻ."
  },
  {
    "id": 569,
    "chapter": 13,
    "question": "Độ phức tạp tính toán thời gian (time complexity) để xây dựng một cây quyết định cân bằng với $n$ mẫu và $p$ đặc trưng là bao nhiêu?",
    "options": [
      "A. $O(p \\cdot n \\log(n))$",
      "B. $O(n^3 \\cdot p)$",
      "C. $O(p^2 \\cdot \\log(n))$",
      "D. $O(2^n \\cdot p)$"
    ],
    "answer": "A",
    "explanation": "Tại mỗi tầng của cây, việc sắp xếp hoặc duyệt các mẫu tốn $O(n \\log n)$ hoặc $O(n)$ cho mỗi đặc trưng $p$, và một cây cân bằng có chiều sâu $O(\\log n)$. Tổng chi phí xây dựng cây xấp xỉ $O(p \\cdot n \\log n)$."
  },
  {
    "id": 570,
    "chapter": 13,
    "question": "Cây quyết định tiêu chuẩn sử dụng các phép phân tách trực giao (axis-aligned splits). Nhược điểm cố hữu lớn nhất của đặc tính này là gì?",
    "options": [
      "A. Rất nhạy cảm với phép quay hệ tọa độ của không gian dữ liệu; nếu đường biên quyết định có hướng chéo 45 độ, cây phải xấp xỉ dạng bậc thang rất phức tạp",
      "B. Không thể áp dụng cho các bài toán phân loại nhị phân",
      "C. Bắt buộc tất cả các đặc trưng phải chuẩn hóa StandardScaler trước khi huấn luyện",
      "D. Tốc độ suy luận (inference time) chậm hơn mạng nơ-ron sâu"
    ],
    "answer": "A",
    "explanation": "Vì các nhát cắt luôn vuông góc với các trục tọa độ ($x_j \\le \\theta$), khi đường ranh giới thực tế nghiêng một góc chéo so với các trục, cây quyết định phải tạo ra vô số bậc thang zigzag để xấp xỉ, dẫn đến cây quá sâu và giảm khả năng tổng quát hóa."
  },
  {
    "id": 571,
    "chapter": 13,
    "question": "Tham số `max_features` trong `DecisionTreeClassifier` của Scikit-Learn có tác dụng gì?",
    "options": [
      "A. Giới hạn số lượng đặc trưng được xem xét ngẫu nhiên khi tìm kiếm phép phân chia tốt nhất tại mỗi nút",
      "B. Lọc bỏ các đặc trưng có phương sai thấp trước khi bắt đầu huấn luyện",
      "C. Tự động áp dụng phân tích thành phần chính PCA để giảm chiều dữ liệu",
      "D. Giới hạn số lượng nhãn đầu ra tối đa của bài toán phân loại"
    ],
    "answer": "A",
    "explanation": "`max_features` quy định số đặc trưng tối đa được lấy mẫu ngẫu nhiên tại mỗi nút phân chia. Việc giảm `max_features` làm tăng tính ngẫu nhiên, giảm tương quan giữa các cây (cơ chế trọng tâm của Random Forest)."
  },
  {
    "id": 572,
    "chapter": 13,
    "question": "Trong Scikit-Learn, cây quyết định có cần bước chuẩn hóa dữ liệu (StandardScaler hoặc MinMaxScaler) không? Vì sao?",
    "options": [
      "A. Không cần, vì cây quyết định là mô hình bất biến với các phép biến đổi đơn điệu (monotonic transformations) trên từng đặc trưng riêng lẻ",
      "B. Rất cần, vì khoảng cách Euclidean giữa các điểm dữ liệu quyết định việc phân chia",
      "C. Bắt buộc với hồi quy, nhưng không cần với phân loại",
      "D. Bắt buộc nếu số lượng đặc trưng lớn hơn 100"
    ],
    "answer": "A",
    "explanation": "Cây quyết định chỉ quan tâm đến thứ tự xếp hạng (rank order) của các giá trị trên từng đặc trưng để chọn ngưỡng phân chia, chứ không tính khoảng cách độ lớn. Do đó bất kỳ biến đổi đơn điệu nào (như nhân hằng số dương, logarit, chuẩn hóa z-score) đều không làm thay đổi kết quả phân chia."
  },
  {
    "id": 573,
    "chapter": 13,
    "question": "Phương thức `export_text` và `export_graphviz` trong `sklearn.tree` dùng để làm gì?",
    "options": [
      "A. Trực quan hóa cấu trúc luật if-else và vẽ sơ đồ phân nhánh của cây quyết định đã huấn luyện",
      "B. Xuất trọng số mô hình sang định dạng ONNX",
      "C. Chuyển đổi cây quyết định thành mạng nơ-ron nhiều tầng",
      "D. Biên dịch cây quyết định sang mã máy C++ để chạy nhúng"
    ],
    "answer": "A",
    "explanation": "`export_text` in cấu trúc cây dưới dạng các dòng thụt lề if-else text, còn `export_graphviz` xuất file đồ thị Graphviz DOT để trực quan hóa cây thành biểu đồ nhánh đẹp mắt."
  },
  {
    "id": 574,
    "chapter": 13,
    "question": "Đặc trưng quan trọng (Feature Importances) trong Decision Tree của Scikit-Learn được tính toán dựa trên chỉ số nào?",
    "options": [
      "A. Tổng độ giảm độ vẩn đục Gini/MSE (Mean Decrease Impurity) chuẩn hóa do đặc trưng đó đem lại trên toàn bộ các nút phân chia",
      "B. Trị tuyệt đối của hệ số hồi quy góc nghiêng",
      "C. Hệ số tương quan Pearson giữa đặc trưng và nhãn mục tiêu",
      "D. Tỷ lệ phần trăm dữ liệu bị thiếu trong đặc trưng đó"
    ],
    "answer": "A",
    "explanation": "Feature importance trong scikit-learn (còn gọi là Gini importance hay MDI - Mean Decrease Impurity) được tính bằng tổng độ giảm độ vẩn đục có trọng số (weighted decrease in impurity) do đặc trưng đó mang lại khi dùng làm điểm cắt trên toàn bộ cây, chia cho tổng độ giảm của tất cả đặc trưng."
  },
  {
    "id": 575,
    "chapter": 13,
    "question": "Khi dữ liệu phân loại bị mất cân bằng nghiêm trọng (imbalanced classes), tham số nào trong `DecisionTreeClassifier` giúp cân bằng trọng số tự động tỉ lệ nghịch với tần suất nhãn?",
    "options": [
      "A. `class_weight='balanced'`",
      "B. `resample_data=True`",
      "C. `imbalance_ratio='auto'`",
      "D. `stratified_split=True`"
    ],
    "answer": "A",
    "explanation": "Thiết lập `class_weight='balanced'` sẽ tự động gán trọng số cho từng lớp tỉ lệ nghịch với tần số xuất hiện của lớp đó trong tập train theo công thức $n\\_samples / (n\\_classes * \\text{bincount}(y))$, giúp cây chú trọng hơn đến lớp thiểu số."
  },
  {
    "id": 576,
    "chapter": 14,
    "question": "Nghiệm giải tích phương trình pháp tuyến (Normal Equations) của hồi quy tuyến tính bình phương cực tiểu OLS là gì?",
    "options": [
      "A. $\\hat{w} = (X^T X)^{-1} X^T y$",
      "B. $\\hat{w} = (X X^T)^{-1} X y$",
      "C. $\\hat{w} = X^T (X X^T) y$",
      "D. $\\hat{w} = (X^T y)^{-1} X^T X$"
    ],
    "answer": "A",
    "explanation": "Để tìm nghiệm tối thiểu hóa hàm mất mát bình phương tổng sai số $L(w) = \\|y - Xw\\|^2$, ta đạo hàm theo $w$ và cho bằng $0$: $-2 X^T (y - Xw) = 0 \\iff X^T X w = X^T y \\implies \\hat{w} = (X^T X)^{-1} X^T y$ khi $X^T X$ khả nghịch."
  },
  {
    "id": 577,
    "chapter": 14,
    "question": "Khi ma trận thiết kế $X$ xảy ra hiện tượng đa cộng tuyến hoàn hảo (multicollinearity), điều gì xảy ra với ma trận hiệp phương sai $X^T X$?",
    "options": [
      "A. $X^T X$ trở nên suy biến (singular), định thức bằng 0 và không tồn tại ma trận nghịch đảo thông thường $(X^T X)^{-1}$",
      "B. $X^T X$ trở thành ma trận đường chéo đơn vị",
      "C. Các giá trị riêng (eigenvalues) của $X^T X$ đều tiến tới vô cùng",
      "D. Sai số huấn luyện $R^2$ lập tức giảm về 0"
    ],
    "answer": "A",
    "explanation": "Đa cộng tuyến hoàn hảo khiến các cột của $X$ phụ thuộc tuyến tính, hạng ma trận rank($X$) < $p$, dẫn đến ma trận vuông $X^T X$ bị suy biến (không đủ hạng, định thức det = 0), không thể nghịch đảo trực tiếp."
  },
  {
    "id": 578,
    "chapter": 14,
    "question": "Số điều kiện (Condition Number $\\kappa(X)$) của ma trận đo lường điều gì trong bài toán giải hệ phương trình tuyến tính?",
    "options": [
      "A. Độ nhạy của nghiệm hồi quy đối với những biến thiên hoặc nhiễu nhỏ trong dữ liệu đầu vào ($X$ hoặc $y$)",
      "B. Số lượng giá trị khuyết tật (missing values) trong ma trận $X$",
      "C. Tỉ số giữa số lượng hàng và số lượng cột của $X$",
      "D. Tỉ lệ mẫu dương so với mẫu âm trong bài toán phân loại"
    ],
    "answer": "A",
    "explanation": "Số điều kiện $\\kappa(A) = \\|A\\| \\|A^{-1}\\| = \\sigma_{max} / \\sigma_{min}$. Nếu $\\kappa(A)$ rất lớn (ill-conditioned), ma trận gần suy biến và một thay đổi cực nhỏ ở đầu vào cũng làm nghiệm biến đổi khổng lồ, gây mất ổn định số học."
  },
  {
    "id": 579,
    "chapter": 14,
    "question": "Trong thực tế cài đặt thư viện (`scipy.linalg.lstsq` được Scikit-Learn `LinearRegression` gọi bên dưới), giải pháp số học nào được sử dụng thay vì nghịch đảo trực tiếp $(X^T X)^{-1}$?",
    "options": [
      "A. Phân rã giá trị suy biến SVD (Singular Value Decomposition) hoặc phân rã QR",
      "B. Phương pháp nhân ma trận Strassen",
      "C. Thuật toán quy hoạch nguyên (Integer Linear Programming)",
      "D. Giải thuật di truyền (Genetic Algorithm)"
    ],
    "answer": "A",
    "explanation": "Tính trực tiếp $(X^T X)^{-1}$ làm bình phương số điều kiện (từ $\\kappa(X)$ lên $\\kappa(X)^2$), gây tổn thất chính xác số học nghiêm trọng. Các thư viện đại số tuyến tính chuẩn sử dụng SVD (tính giả nghịch đảo Moore-Penrose $X^+$) hoặc phân rã QR để đảm bảo tính ổn định số học cao nhất."
  },
  {
    "id": 580,
    "chapter": 14,
    "question": "Với phân tích giá trị suy biến $X = U \\Sigma V^T$, ma trận giả nghịch đảo Moore-Penrose $X^+$ được tính như thế nào?",
    "options": [
      "A. $X^+ = V \\Sigma^+ U^T$, trong đó $\\Sigma^+$ được tạo bằng cách lấy nghịch đảo các giá trị kỳ dị khác 0",
      "B. $X^+ = U \\Sigma^{-1} V$",
      "C. $X^+ = (U^T V) \\Sigma$",
      "D. $X^+ = V^T \\Sigma^+ U$"
    ],
    "answer": "A",
    "explanation": "Từ $X = U \\Sigma V^T$, ma trận giả nghịch đảo là $X^+ = V \\Sigma^+ U^T$. Nghiệm bình phương cực tiểu ổn định nhất luôn là $\\hat{w} = X^+ y$."
  },
  {
    "id": 581,
    "chapter": 14,
    "question": "Hồi quy Ridge (Tikhonov Regularization) giải quyết triệt để vấn đề ma trận suy biến bằng cách thêm số hạng nào vào ma trận cần nghịch đảo?",
    "options": [
      "A. Thêm ma trận đường chéo $\\alpha I$, chuyển thành $(X^T X + \\alpha I)^{-1}$",
      "B. Nhân ma trận với hệ số tỉ lệ $\\alpha$",
      "C. Trừ đi ma trận đơn vị $(X^T X - \\alpha I)^{-1}$",
      "D. Thay thế các phần tử ngoại đường chéo bằng 0"
    ],
    "answer": "A",
    "explanation": "Công thức nghiệm Ridge là $\\hat{w}_{ridge} = (X^T X + \\alpha I)^{-1} X^T y$. Vì $X^T X$ là ma trận nửa xác định dương (bán xác định dương), khi cộng thêm $\\alpha I$ (với $\\alpha > 0$), ma trận trở thành xác định dương nghiêm ngặt (strictly positive definite), đảm bảo luôn luôn khả nghịch."
  },
  {
    "id": 582,
    "chapter": 14,
    "question": "Vì sao hàm mất mát của Lasso ($L_1$ regularization) không thể giải bằng phương trình đạo hàm giải tích đóng như Ridge?",
    "options": [
      "A. Vì hàm chuẩn $L_1$ ($\\|w\\|_1 = \\sum |w_j|$) không khả vi tại điểm gốc tọa độ $w_j = 0$",
      "B. Vì Lasso có vô số nghiệm địa phương không hội tụ",
      "C. Vì Lasso yêu cầu số mẫu phải nhỏ hơn số đặc trưng",
      "D. Vì ma trận đạo hàm bậc hai Hessian của Lasso luôn bằng 0"
    ],
    "answer": "A",
    "explanation": "Hàm giá trị tuyệt đối $|w|$ có góc nhọn tại 0 và không có đạo hàm tại đó (chỉ có dưới đạo hàm - subgradient). Do đó không thể triệt tiêu gradient bậc nhất để giải nghiệm đóng, mà phải dùng thuật toán số như Coordinate Descent hoặc LARS."
  },
  {
    "id": 583,
    "chapter": 14,
    "question": "Thuật toán tối ưu hóa mặc định được Scikit-Learn sử dụng để huấn luyện mô hình `Lasso` là gì?",
    "options": [
      "A. Tọa độ giảm dần (Coordinate Descent)",
      "B. Adam Optimizer",
      "C. L-BFGS-B",
      "D. Đạo hàm ngẫu nhiên phân rã QR"
    ],
    "answer": "A",
    "explanation": "Scikit-Learn sử dụng thuật toán Coordinate Descent (hạ tọa độ theo từng biến riêng lẻ với toán tử ngưỡng mềm soft-thresholding) để giải bài toán tối ưu Lasso lồi."
  },
  {
    "id": 584,
    "chapter": 14,
    "question": "Thuật toán LARS (Least Angle Regression) trong thư viện hồi quy tuyến tính có ưu điểm nổi bật nào khi tìm toàn bộ đường nghiệm Lasso (Lasso path)?",
    "options": [
      "A. Xây dựng toàn bộ nghiệm thưa hiệu quả với chi phí tính toán tương đương một lần chạy OLS thông thường",
      "B. Tự động xử lý biến dạng chuỗi văn bản không cần nhúng",
      "C. Luôn luôn chọn tất cả đặc trưng cùng lúc mà không làm triệt tiêu hệ số nào",
      "D. Khử hoàn toàn hiện tượng overfitting mà không cần tập validation"
    ],
    "answer": "A",
    "explanation": "LARS di chuyển theo hướng phân giác đều (equiangular) tạo bởi các đặc trưng tương quan nhất với phần dư. Khi kết hợp với điều kiện Lasso, nó sinh ra toàn bộ lộ trình nghiệm (regularization path) của Lasso một cách cực kỳ nhanh chóng."
  },
  {
    "id": 585,
    "chapter": 14,
    "question": "Mô hình `MultiTaskLasso` trong Scikit-Learn giải quyết bài toán hồi quy đa mục tiêu bằng cách ràng buộc đặc trưng nào?",
    "options": [
      "A. Sử dụng chuẩn hỗn hợp $L_{2,1}$ để chọn chung cùng một tập các đặc trưng hữu ích cho tất cả các nhiệm vụ đầu ra (joint feature selection)",
      "B. Huấn luyện các mô hình Lasso độc lập trên từng biến mục tiêu",
      "C. Ghép nối tất cả biến mục tiêu thành một chuỗi duy nhất",
      "D. Sử dụng mạng nơ-ron hồi quy với hàm kích hoạt softmax"
    ],
    "answer": "A",
    "explanation": "`MultiTaskLasso` áp dụng chuẩn hỗn hợp Frobenius/L21 norm lên ma trận trọng số $W$. Nó ép nguyên cả một hàng của ma trận $W$ về 0, nghĩa là nếu một đặc trưng bị loại thì sẽ bị loại đồng thời trên tất cả các biến mục tiêu đầu ra."
  },
  {
    "id": 586,
    "chapter": 14,
    "question": "Trong mô hình `ElasticNet`, tham số `l1_ratio` đại diện cho điều gì?",
    "options": [
      "A. Tỉ lệ cân bằng giữa số hạng phạt L1 (Lasso) và L2 (Ridge) trong hàm mất mát",
      "B. Tỉ lệ giữa kích thước tập huấn luyện và kiểm tra",
      "C. Tỉ số giữa learning rate và số lượng epoch",
      "D. Ngưỡng cắt tỉa cây quyết định"
    ],
    "answer": "A",
    "explanation": "Hàm phạt của ElasticNet là $\\alpha \\cdot [\\text{l1\\_ratio} \\|w\\|_1 + \\frac{1 - \\text{l1\\_ratio}}{2} \\|w\\|_2^2]$. Khi `l1_ratio=1` mô hình trở thành thuần Lasso, khi `l1_ratio=0` mô hình trở thành thuần Ridge."
  },
  {
    "id": 587,
    "chapter": 14,
    "question": "Hồi quy Huber (`HuberRegressor`) trong các biến thể tuyến tính giải quyết nhược điểm nào của hồi quy OLS chuẩn?",
    "options": [
      "A. Rất mạnh mẽ chống lại nhiễu ngoại lai (robust to outliers) nhờ chuyển từ hàm mất mát bậc 2 sang bậc 1 tuyến tính khi sai số vượt quá ngưỡng $\\epsilon$",
      "B. Giảm số chiều dữ liệu tự động mà không cần chuẩn hóa",
      "C. Tự động tính toán ma trận tương quan giữa các nhãn",
      "D. Huấn luyện nhanh hơn OLS trên dữ liệu nhỏ"
    ],
    "answer": "A",
    "explanation": "OLS sử dụng sai số bình phương nên các điểm ngoại lai bị phạt theo hàm bậc hai cực lớn, kéo lệch đường hồi quy. Huber loss dùng sai số bậc hai cho phần dư nhỏ ($|e| \\le \\epsilon$) và sai số bậc nhất tuyến tính cho phần dư lớn, giúp mô hình miễn nhiễm với nhiễu ngoại lai."
  },
  {
    "id": 588,
    "chapter": 14,
    "question": "Phân rã QR của ma trận thiết kế $X = Q R$ có cấu trúc hai ma trận $Q$ và $R$ như thế nào?",
    "options": [
      "A. $Q$ là ma trận trực giao ($Q^T Q = I$) và $R$ là ma trận tam giác trên khả nghịch",
      "B. $Q$ là ma trận đường chéo và $R$ là ma trận đối xứng",
      "C. $Q$ là ma trận ngẫu nhiên và $R$ là ma trận nghịch đảo của $X$",
      "D. Cả $Q$ và $R$ đều là ma trận đơn vị"
    ],
    "answer": "A",
    "explanation": "Phân rã QR tách $X$ thành ma trận trực giao $Q$ ($Q^T Q = I$) và ma trận tam giác trên $R$. Khi đó hệ phương trình bình phương cực tiểu trở thành $R w = Q^T y$, giải cực kỳ nhanh và ổn định bằng phép thế ngược (back substitution)."
  },
  {
    "id": 589,
    "chapter": 14,
    "question": "Tham số `fit_intercept=False` trong `LinearRegression` nên được sử dụng trong tình huống nào?",
    "options": [
      "A. Khi dữ liệu $X$ và $y$ đã được trừ trung bình (centered/standardized) hoặc bài toán bắt buộc đường hồi quy phải đi qua gốc tọa độ $(0, 0)$",
      "B. Khi ma trận $X$ có nhiều biến phân loại dạng One-Hot",
      "C. Khi số chiều $p$ lớn hơn số quan sát $n$",
      "D. Khi huấn luyện mô hình trên GPU"
    ],
    "answer": "A",
    "explanation": "Nếu dữ liệu đã được trừ trung bình (mean-centered) thì hệ số chặn bias bằng 0. Nếu đặt `fit_intercept=False`, mô hình không thêm cột hệ số tự do $w_0$ và đường hồi quy bắt buộc đi qua gốc tọa độ."
  },
  {
    "id": 590,
    "chapter": 14,
    "question": "Vì sao việc chuẩn hóa đặc trưng (Feature Scaling) lại đặc biệt bắt buộc đối với Ridge và Lasso nhưng không làm thay đổi nghiệm dự đoán của OLS thuần túy (về mặt toán học)?",
    "options": [
      "A. Vì số hạng phạt chuẩn $\\|w\\|_1$ và $\\|w\\|_2^2$ phạt công bằng mọi trọng số; nếu đặc trưng có thang đo lớn, trọng số tự nhiên của nó sẽ nhỏ và ít bị phạt hơn đặc trưng có thang đo nhỏ",
      "B. Vì OLS không thể hội tụ nếu dữ liệu chưa chuẩn hóa",
      "C. Vì Lasso chỉ chấp nhận đầu vào trong khoảng $[0, 1]$",
      "D. Vì chuẩn hóa làm ma trận $X^T X$ trở thành ma trận đơn vị"
    ],
    "answer": "A",
    "explanation": "Trong OLS, việc đổi đơn vị (thang đo) của đặc trưng chỉ làm hệ số $w_j$ tỉ lệ nghịch lại mà không đổi hàm mất mát. Nhưng trong Regularization, $\\lambda \\sum w_j^2$ phạt mọi $w$ ngang nhau, nên đặc trưng có đơn vị nhỏ (giá trị số lớn $\\to$ trọng số $w$ bé) sẽ né được án phạt, còn đặc trưng đơn vị lớn (trọng số $w$ to) bị phạt oan. Do đó chuẩn hóa là tiên quyết."
  },
  {
    "id": 591,
    "chapter": 15,
    "question": "Định lý Bồi thẩm đoàn Condorcet (Condorcet's Jury Theorem) - nền tảng lý thuyết xác suất của Ensemble Learning - phát biểu điều gì?",
    "options": [
      "A. Nếu mỗi người đánh giá độc lập có xác suất đúng $p > 0.5$, thì khi tăng số lượng người tham gia bỏ phiếu theo đa số, xác suất phán quyết tập thể chính xác sẽ tiến dần tới 1 (100%)",
      "B. Nếu các mô hình cơ sở phụ thuộc tuyến tính vào nhau thì sai số tổng thể luôn bằng 0",
      "C. Tập hợp các mô hình yếu chỉ mạnh lên khi tất cả cùng mắc chung một loại sai lầm",
      "D. Kích thước tập huấn luyện tối thiểu của ensemble phải gấp đôi số lượng cây con"
    ],
    "answer": "A",
    "explanation": "Condorcet's Jury Theorem chỉ ra rằng chỉ cần các bộ phân loại cá nhân độc lập và có độ chính xác nhỉnh hơn đoán mò ngẫu nhiên ($p > 0.5$), thì luật đa số (majority voting) của một tập thể đủ lớn sẽ hội tụ về độ chính xác tiệm cận tuyệt đối 1."
  },
  {
    "id": 592,
    "chapter": 15,
    "question": "Trong kỹ thuật Bagging (Bootstrap Aggregating) với kích thước tập dữ liệu $n$, khi $n$ tiến ra vô cùng, tỉ lệ phần trăm các mẫu không bao giờ được chọn vào một túi con (Out-of-Bag - OOB samples) là khoảng bao nhiêu?",
    "options": [
      "A. Khoảng 36.8% (xấp xỉ $1/e$)",
      "B. Khoảng 50.0%",
      "C. Khoảng 10.0%",
      "D. Khoảng 63.2%"
    ],
    "answer": "A",
    "explanation": "Xác suất một mẫu không được rút trong $n$ lần rút có hoàn lại là $(1 - 1/n)^n$. Khi $n \\to \\infty$, $\\lim_{n \\to \\infty} (1 - 1/n)^n = e^{-1} \\approx 0.367879$ (36.8%). Khoảng 63.2% dữ liệu được chọn vào túi bootstrap, và 36.8% còn lại làm tập kiểm tra OOB."
  },
  {
    "id": 593,
    "chapter": 15,
    "question": "Tính năng đánh giá OOB (Out-of-Bag score) trong `RandomForestClassifier(oob_score=True)` đem lại lợi ích lớn nào trong thực tế?",
    "options": [
      "A. Cung cấp một ước lượng khách quan về độ chính xác kiểm thử tương đương cross-validation mà không cần phải tốn công chia tập validation riêng biệt",
      "B. Tăng tốc độ huấn luyện của cây gấp đôi",
      "C. Tự động loại bỏ các thuộc tính bị thiếu dữ liệu",
      "D. Đảm bảo mô hình đạt 100% độ chính xác trên tập kiểm tra"
    ],
    "answer": "A",
    "explanation": "Vì khoảng 37% số mẫu trong mỗi cây hoàn toàn không được dùng để huấn luyện cây đó, ta có thể dùng chính những mẫu OOB này để kiểm tra chéo từng cây và tính điểm tổng thể (OOB score), đóng vai trò như một bộ kiểm định độc lập hoàn toàn miễn phí."
  },
  {
    "id": 594,
    "chapter": 15,
    "question": "Điểm khác biệt cốt lõi giữa Random Forest và mô hình Cây ngẫu nhiên cực độ (Extra-Trees / Extremely Randomized Trees) trong Scikit-Learn là gì?",
    "options": [
      "A. Extra-Trees sinh ngẫu nhiên luôn cả ngưỡng cắt (split threshold) cho từng đặc trưng ứng viên thay vì đi tìm ngưỡng cắt tối ưu nhất như Random Forest",
      "B. Extra-Trees sử dụng mạng nơ-ron để tìm điểm phân nhánh",
      "C. Extra-Trees chỉ cho phép cây có độ sâu tối đa bằng 2",
      "D. Extra-Trees không áp dụng được cho bài toán hồi quy"
    ],
    "answer": "A",
    "explanation": "Trong khi Random Forest tìm ngưỡng phân chia tối ưu nhất trong số các đặc trưng con, Extra-Trees rút ngẫu nhiên hoàn toàn các ngưỡng cho mỗi đặc trưng và chỉ chọn ngưỡng tốt nhất trong số các ngưỡng ngẫu nhiên đó. Kỹ thuật này giúp giảm variance nhiều hơn nữa và huấn luyện nhanh hơn đáng kể."
  },
  {
    "id": 595,
    "chapter": 15,
    "question": "Trong thuật toán AdaBoost (Adaptive Boosting), trọng số của các mẫu dữ liệu được cập nhật như thế nào sau mỗi vòng lặp của mô hình yếu?",
    "options": [
      "A. Các mẫu bị phân loại sai ở vòng trước được tăng trọng số lên, buộc mô hình ở vòng tiếp theo phải tập trung học sửa các lỗi này",
      "B. Các mẫu dự đoán đúng được tăng trọng số lên để củng cố niềm tin",
      "C. Tất cả các mẫu đều bị giảm trọng số về 0",
      "D. Trọng số của các mẫu được xáo trộn ngẫu nhiên"
    ],
    "answer": "A",
    "explanation": "AdaBoost điều chỉnh trọng số mẫu theo công thức $w_i \\leftarrow w_i \\exp(\\alpha_m)$ nếu đoán sai và $w_i \\leftarrow w_i \\exp(-\\alpha_m)$ nếu đoán đúng (với $\\alpha_m > 0$ là độ tin cậy của learner thứ $m$). Do đó, các mẫu khó/đoán sai nhận trọng số lớn hơn nhiều trong các vòng sau."
  },
  {
    "id": 596,
    "chapter": 15,
    "question": "Hệ số tin cậy $\\alpha_m$ của mô hình cơ sở thứ $m$ trong AdaBoost phụ thuộc vào tỉ lệ lỗi phân loại có trọng số $err_m$ theo công thức nào?",
    "options": [
      "A. $\\alpha_m = \\frac{1}{2} \\ln \\left(\\frac{1 - err_m}{err_m}\\right)$",
      "B. $\\alpha_m = 1 - err_m^2$",
      "C. $\\alpha_m = \\exp(-err_m)$",
      "D. $\\alpha_m = \\frac{err_m}{1 - err_m}$"
    ],
    "answer": "A",
    "explanation": "Công thức tính trọng số đóng góp của base estimator trong AdaBoost SAMME là $\\alpha_m = \\frac{1}{2} \\ln \\frac{1 - err_m}{err_m}$. Khi lỗi $err_m < 0.5$, $\\alpha_m > 0$; lỗi càng thấp thì $\\alpha_m$ càng lớn. Nếu mô hình đoán mò $err_m = 0.5$, $\\alpha_m = 0$."
  },
  {
    "id": 597,
    "chapter": 15,
    "question": "Điểm khác biệt căn bản trong chiến lược học giữa AdaBoost và Gradient Boosting là gì?",
    "options": [
      "A. AdaBoost điều chỉnh trọng số của mẫu dữ liệu sai; còn Gradient Boosting giữ nguyên trọng số mẫu nhưng khớp (fit) mô hình kế tiếp vào phần dư (residuals) hoặc gradient âm của hàm mất mát",
      "B. AdaBoost dùng cây quyết định còn Gradient Boosting dùng hồi quy tuyến tính",
      "C. Gradient Boosting chỉ chạy được trên một luồng CPU duy nhất",
      "D. AdaBoost giảm variance còn Gradient Boosting chỉ giảm bias"
    ],
    "answer": "A",
    "explanation": "Trong Gradient Boosting, thay vì cập nhật phân phối trọng số các điểm dữ liệu như AdaBoost, mỗi cây quyết định mới được huấn luyện để dự đoán phần dư sai số $y - \\hat{y}$ (chính là gradient âm $-\\frac{\\partial L}{\\partial \\hat{y}}$ của hàm mất mát)."
  },
  {
    "id": 598,
    "chapter": 15,
    "question": "Trong Gradient Boosting, siêu tham số `learning_rate` (còn gọi là hệ số co - shrinkage rate) có vai trò gì?",
    "options": [
      "A. Thu nhỏ sự đóng góp của mỗi cây bằng một hệ số nhân $\\eta \\in (0, 1]$, làm chậm quá trình học để giảm nguy cơ overfitting",
      "B. Điều chỉnh tốc độ cập nhật trọng số nơ-ron bằng phương pháp quán tính",
      "C. Tăng số lượng mẫu được lấy vào mỗi cây",
      "D. Tự động dừng sớm nếu sau $k$ vòng lặp kết quả không cải thiện"
    ],
    "answer": "A",
    "explanation": "Công thức cộng dồn của Gradient Tree Boosting là $\\hat{y}^{(m)} = \\hat{y}^{(m-1)} + \\eta \\cdot h_m(x)$. Hệ số $\\eta$ (learning rate) làm giảm bước nhảy của mỗi cây, cho phép nhiều cây cùng phối hợp nhịp nhàng và cải thiện khả năng tổng quát hóa."
  },
  {
    "id": 599,
    "chapter": 15,
    "question": "Kiến trúc mô hình xếp chồng (Stacking / Stacked Generalization) bao gồm những thành phần cấu tạo nào?",
    "options": [
      "A. Một tập các mô hình cơ sở (base estimators / Level-0) và một mô hình tổng hợp siêu cấp (meta-learner / Level-1) học cách kết hợp dự đoán của các mô hình cơ sở",
      "B. Nhiều cây quyết định được nối tiếp nhau thành một chuỗi Markov",
      "C. Một bộ giải mã Transformer kết hợp cùng mạng tự hồi quy RNN",
      "D. Tập hợp các bộ phân loại được gán nhãn mã nhị phân ECOC"
    ],
    "answer": "A",
    "explanation": "Stacking hoạt động theo kiến trúc 2 tầng (hoặc nhiều tầng): Tầng Level-0 gồm các mô hình đa dạng (SVM, Random Forest, KNN, MLP...). Dự đoán của các mô hình Level-0 được dùng làm đặc trưng đầu vào cho mô hình Level-1 (Meta-model / Blender, thường là Logistic Regression hoặc Ridge) để đưa ra quyết định cuối."
  },
  {
    "id": 600,
    "chapter": 15,
    "question": "Trong `StackingClassifier` của Scikit-Learn, cơ chế nào được sử dụng để tạo ra tập dữ liệu huấn luyện cho meta-learner nhằm triệt tiêu rủi ro rò rỉ dữ liệu (data leakage) và overfitting?",
    "options": [
      "A. Sử dụng dự đoán kiểm định chéo Out-of-Fold (K-Fold cross-validation predictions) từ các mô hình cơ sở",
      "B. Cho các mô hình cơ sở dự đoán trực tiếp trên chính toàn bộ tập train ban đầu",
      "C. Thêm nhiễu Gaussian trắng ngẫu nhiên vào nhãn mục tiêu",
      "D. Chia đôi tập dữ liệu và chỉ dùng một nửa để train Level-0"
    ],
    "answer": "A",
    "explanation": "Nếu cho Level-0 dự đoán trên chính dữ liệu nó đã học, các dự đoán sẽ quá lạc quan (overfitting), khiến Meta-learner phụ thuộc sai lệch. Scikit-Learn chia tập train thành K-folds, mỗi fold được dự đoán bởi mô hình train trên K-1 folds còn lại (out-of-fold predictions) để sinh đặc trưng sạch cho Level-1."
  },
  {
    "id": 601,
    "chapter": 15,
    "question": "Tham số `passthrough=True` trong `StackingClassifier`/`StackingRegressor` có ý nghĩa gì?",
    "options": [
      "A. Nối trực tiếp các đặc trưng huấn luyện gốc ban đầu $X$ cùng với các dự đoán của mô hình cơ sở để làm đầu vào cho meta-learner",
      "B. Bỏ qua bước kiểm tra điều kiện hội tụ của meta-model",
      "C. Cho phép dữ liệu kiểm thử đi thẳng vào bước dự đoán mà không qua tiền xử lý",
      "D. Tự động chuyển đổi toàn bộ bài toán phân loại thành hồi quy"
    ],
    "answer": "A",
    "explanation": "Khi `passthrough=True`, ma trận đầu vào cho meta-model ở Level-1 sẽ là $[X_{original}, \\hat{y}_{base1}, \\hat{y}_{base2}, ...]$. Điều này cho phép meta-learner vừa xem xét dự đoán của base models vừa tham chiếu lại bối cảnh của các đặc trưng gốc."
  },
  {
    "id": 602,
    "chapter": 15,
    "question": "Sự khác biệt giữa `VotingClassifier(voting='hard')` và `VotingClassifier(voting='soft')` là gì?",
    "options": [
      "A. `hard` dựa trên đa số phiếu bầu của các nhãn dự đoán (majority voting); còn `soft` tính trung bình cộng xác suất dự đoán (predicted probabilities) của các mô hình và chọn nhãn có xác suất cao nhất",
      "B. `hard` áp dụng cho hồi quy còn `soft` áp dụng cho phân loại",
      "C. `soft` yêu cầu tất cả các mô hình cơ sở phải là Random Forest",
      "D. `hard` chỉ sử dụng khi số lượng mô hình cơ sở là số chẵn"
    ],
    "answer": "A",
    "explanation": "Hard voting đếm số lượng mô hình dự đoán mỗi class và chọn class nhiều phiếu nhất (chỉ cần hàm `.predict()`). Soft voting lấy trung bình trọng số của xác suất dự đoán (cần hàm `.predict_proba()`), thường đem lại hiệu năng phân loại cao hơn vì tận dụng được độ tự tin của mô hình."
  },
  {
    "id": 603,
    "chapter": 15,
    "question": "Kỹ thuật Pasting khác với Bagging ở điểm nào?",
    "options": [
      "A. Pasting lấy mẫu con không hoàn lại (without replacement); trong khi Bagging lấy mẫu con có hoàn lại (with replacement)",
      "B. Pasting lấy mẫu trên các đặc trưng còn Bagging lấy mẫu trên các hàng dữ liệu",
      "C. Pasting sử dụng cây quyết định còn Bagging sử dụng SVM",
      "D. Pasting chỉ áp dụng cho dữ liệu văn bản"
    ],
    "answer": "A",
    "explanation": "Trong `BaggingClassifier(bootstrap=True)` là Bagging (lấy mẫu có hoàn lại). Nếu đặt `bootstrap=False` thì kỹ thuật đó gọi là Pasting (lấy mẫu tập con ngẫu nhiên không hoàn lại)."
  },
  {
    "id": 604,
    "chapter": 15,
    "question": "Phương pháp Random Patches và Random Subspaces trong Ensemble Learning lấy mẫu như thế nào?",
    "options": [
      "A. Random Patches lấy mẫu ngẫu nhiên cả quan sát (samples) lẫn đặc trưng (features); Random Subspaces giữ nguyên toàn bộ mẫu nhưng lấy mẫu ngẫu nhiên trên đặc trưng",
      "B. Random Patches chỉ dùng cho xử lý ảnh còn Random Subspaces dùng cho âm thanh",
      "C. Random Subspaces dùng cho mô hình tuyến tính còn Random Patches dùng cho cây",
      "D. Cả hai phương pháp đều loại bỏ 90% dữ liệu ngẫu nhiên"
    ],
    "answer": "A",
    "explanation": "Trong Scikit-Learn: Lấy mẫu cả samples và features gọi là Random Patches (thường dùng khi dữ liệu vừa nhiều dòng vừa nhiều cột). Giữ toàn bộ samples (`bootstrap=False`, `max_samples=1.0`) nhưng lấy tập con features (`max_features < 1.0`) gọi là Random Subspaces."
  },
  {
    "id": 605,
    "chapter": 15,
    "question": "Tại sao trong Stacking, việc kết hợp các mô hình có bản chất thuật toán rất khác nhau (ví dụ: Cây quyết định + SVM + Tuyến tính + KNN) lại mang lại hiệu quả vượt trội hơn so với kết hợp các mô hình cùng loại?",
    "options": [
      "A. Vì các mô hình khác loại có không gian giả thuyết và cơ chế tạo sai số khác nhau (low error correlation), sai lầm của mô hình này được bù đắp bởi thế mạnh của mô hình khác",
      "B. Vì các mô hình khác loại chạy song song nhanh hơn",
      "C. Vì chuẩn hóa dữ liệu chỉ có tác dụng khi có ít nhất một mô hình tuyến tính",
      "D. Vì meta-learner chỉ hoạt động được khi các base models có độ phức tạp khác nhau"
    ],
    "answer": "A",
    "explanation": "Sức mạnh cốt lõi của Ensemble là tính đa dạng (diversity). Các mô hình có nguyên lý toán học khác nhau tạo ra các đường biên quyết định hoàn toàn khác nhau. Khi một mô hình bị đánh lừa bởi một dạng nhiễu cụ thể, các mô hình khác với bias khác sẽ không mắc cùng sai lầm đó, giúp meta-model đưa ra quyết định toàn diện nhất."
  }
];
