/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 1: TỔNG QUAN VỀ HỌC MÁY
   - Số lượng: 50 câu
   - Nội dung: Định nghĩa Mitchell & Samuel, phân loại học máy (Supervised, Unsupervised, Reinforcement), Train/Val/Test, Overfitting/Underfitting, K-Fold CV
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_1 = [
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
  }
];
