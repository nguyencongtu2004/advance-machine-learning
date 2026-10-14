module.exports = {
  "1": {
    "question": "Theo định nghĩa của Arthur Samuel (1959), Machine Learning là gì?",
    "options": [
      "Khả năng của máy tính thực hiện các phép tính số học tốc độ cao",
      "Khả năng học hỏi của máy tính mà không cần được lập trình một cách tường minh cho từng trường hợp",
      "Hệ thống các quy tắc logic if-else do con người định nghĩa sẵn",
      "Khả năng bắt chước hoàn hảo cấu trúc sinh học của não người"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nArthur Samuel (1959) — người tiên phong viết chương trình máy tính chơi cờ đam tự học — đã đưa ra định nghĩa kinh điển đầu tiên:\n> *\"Machine Learning là lĩnh vực nghiên cứu mang lại cho máy tính khả năng học tập mà không cần được lập trình một cách tường minh (without being explicitly programmed) cho từng trường hợp cụ thể.\"*\n\n* **Lập trình truyền thống (Rule-based):**\n  $$\\text{Dữ liệu đầu vào} + \\text{Luật chơi viết tay (Code if-else)} \\implies \\text{Kết quả đầu ra}$$\n* **Học máy (Machine Learning):**\n  $$\\text{Dữ liệu đầu vào} + \\text{Đáp án thực tế} \\implies \\text{Máy tự rút ra Quy luật (Model)!}$$\n\n💡 **Ví dụ đời thường:** Thay vì ngồi gõ tay hàng triệu dòng `if-else` quy định màu lông, độ dài tai để phân biệt chó và mèo, ta chỉ việc ném cho máy $100.000$ bức ảnh kèm nhãn. Máy tính sẽ tự động tinh chỉnh các trọng số để tự nhận diện đặc trưng.",
    "answer": 1
  },
  "2": {
    "question": "Trong định nghĩa kinh điển của Tom Mitchell (1997) về Machine Learning, bộ ba yếu tố cấu thành là gì?",
    "options": [
      "Training, Validation, Test",
      "Task ($T$), Experience ($E$), Performance ($P$)",
      "Precision ($P$), Recall ($R$), F1-score ($F$)",
      "Data ($D$), Model ($M$), Loss ($L$)"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTom Mitchell (1997) đã chuẩn hóa định nghĩa học máy bằng bộ ba toán học chặt chẽ $(T, E, P)$:\n> *\"Một chương trình máy tính được gọi là học từ kinh nghiệm **$E$** (Experience) đối với tác vụ **$T$** (Task) và thước đo hiệu năng **$P$** (Performance), nếu hiệu năng ở tác vụ $T$, đo bằng $P$, được cải thiện dần theo kinh nghiệm $E$.\"*\n\n* **$T$ (Task - Tác vụ):** Công việc cụ thể cần giải quyết (Ví dụ: Nhận diện chữ viết tay, phân loại email).\n* **$E$ (Experience - Kinh nghiệm):** Dữ liệu lịch sử tích lũy từ quá khứ dùng để huấn luyện.\n* **$P$ (Performance - Hiệu năng):** Thước đo định lượng để chấm điểm mức độ hoàn thành bài toán (Ví dụ: Accuracy $\\%$, MSE, F1-score).",
    "answer": 1
  },
  "3": {
    "question": "Trong bài toán xây dựng bộ lọc thư rác (Spam Filtering), yếu tố nào sau đây đóng vai trò là Kinh nghiệm $E$ (Experience)?",
    "options": [
      "Việc phân loại email mới thành spam hay thư thường",
      "Tập các email cũ trong quá khứ đã được con người gán nhãn sẵn",
      "Tỷ lệ email được phân loại chính xác",
      "Tốc độ xử lý của máy chủ mail"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nÁp dụng bộ ba $(T, E, P)$ của Tom Mitchell vào bài toán Bộ lọc thư rác (Spam Filter):\n* **Tác vụ $T$ (Task):** Phân loại một email mới gửi đến là Thư rác (Spam) hay Thư hợp lệ (Ham).\n* **Kinh nghiệm $E$ (Experience):** **Tập dữ liệu hàng ngàn email cũ trong quá khứ** đã được người dùng hoặc chuyên gia gán nhãn sẵn (\"Spam\" / \"Không Spam\").\n* **Hiệu năng $P$ (Performance):** Tỷ lệ phần trăm phân loại chính xác (Accuracy) hoặc số lượng thư quan trọng bị chặn nhầm.",
    "answer": 1
  },
  "4": {
    "question": "Mối quan hệ bao hàm đúng nhất giữa Trí tuệ nhân tạo (AI), Học máy (ML) và Học sâu (DL) là gì?",
    "options": [
      "$\\text{AI} \\subset \\text{ML} \\subset \\text{DL}$",
      "$\\text{DL} \\subset \\text{ML} \\subset \\text{AI}$",
      "$\\text{ML} \\subset \\text{AI} \\subset \\text{DL}$",
      "DL và ML là hai nhánh độc lập cùng thuộc AI"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nMối quan hệ giữa 3 khái niệm giống như **chiếc hộp búp bê Nga lồng vào nhau**:\n$$\\text{DL (Học sâu)} \\subset \\text{ML (Học máy)} \\subset \\text{AI (Trí tuệ nhân tạo)}$$\n\n1. **AI (Trí tuệ nhân tạo - Vòng tròn ngoài cùng):** Khái niệm rộng nhất bao gồm mọi hệ thống mô phỏng hành vi thông minh của con người (bao gồm cả các hệ chuyên gia viết tay $100.000$ lệnh `if-else`).\n2. **ML (Học máy - Vòng tròn giữa):** Tập con của AI, nơi máy tính tự học quy luật từ dữ liệu thay vì con người code sẵn luật.\n3. **DL (Học sâu - Vòng tròn trong cùng):** Tập con của ML, sử dụng các mạng nơ-ron nhân tạo nhiều tầng ẩn (Deep Neural Networks) có khả năng tự động trích xuất các tầng đặc trưng phức tạp từ dữ liệu thô.",
    "answer": 1
  },
  "5": {
    "question": "Thuật toán Backpropagation (Lan truyền ngược) nền tảng cho việc huấn luyện mạng nơ-ron nhiều tầng được mô tả vào năm nào và bởi ai?",
    "options": [
      "1950 bởi Alan Turing",
      "1951 bởi Marvin Minsky",
      "1969 bởi Arthur Bryson và Yu-Chi Ho",
      "2006 bởi Fei-Fei Li"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Năm 1969:** Hai nhà khoa học **Arthur Bryson và Yu-Chi Ho** đã mô tả toán học thuật toán **Lan truyền ngược (Backpropagation)** dựa trên quy tắc đạo hàm chuỗi (Chain Rule) cho các hệ thống điều khiển tối ưu.\n* Sau này (1986), Geoffrey Hinton, David Rumelhart và Ronald Williams đã phổ biến ứng dụng Backpropagation vào việc huấn luyện mạng nơ-ron nhân tạo nhiều tầng, giải quyết bài toán tính gradient cho các tầng ẩn.",
    "answer": 2
  },
  "6": {
    "question": "Dự án cơ sở dữ liệu hình ảnh quy mô lớn ImageNet thúc đẩy kỷ nguyên Deep Learning bùng nổ được khởi động bởi ai và vào năm nào?",
    "options": [
      "Andrew Ng (2009)",
      "Fei-Fei Li (Lý Phi Phi - 2006)",
      "Alan Turing (1950)",
      "Geoffrey Hinton (1986)"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Năm 2006:** Giáo sư **Fei-Fei Li (Lý Phi Phi)** tại Đại học Stanford đã khởi xướng dự án **ImageNet** — tập dữ liệu hình ảnh khổng lồ với hơn 14 triệu bức ảnh được gán nhãn thủ công qua Amazon Mechanical Turk.\n* ImageNet đóng vai trò là \"nhiên liệu dữ liệu\" mang tính bước ngoặt. Đến năm 2012, mô hình Deep CNN AlexNet đã vô địch cuộc thi ImageNet Challenge, chính thức mở ra kỷ nguyên bùng nổ của Deep Learning trên toàn thế giới.",
    "answer": 1
  },
  "7": {
    "question": "Đặc điểm cốt lõi của Học có giám sát (Supervised Learning) là gì?",
    "options": [
      "Dữ liệu đầu vào chỉ có các đặc trưng $X$, hoàn toàn không có nhãn $y$",
      "Dữ liệu đầu vào đi kèm nhãn mục tiêu (Ground Truth $y$) đã biết trước",
      "Hệ thống học qua việc tương tác thử-sai với môi trường và nhận phần thưởng",
      "Hệ thống tự động gom các điểm tương đồng vào cụm tự nhiên"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Học có giám sát (Supervised Learning):** Dữ liệu huấn luyện gồm các cặp đầy đủ:\n  $$\\mathcal{D} = \\{(x_1, y_1), (x_2, y_2), \\dots, (x_n, y_n)\\}$$\n  Trong đó $x_i$ là vector đặc trưng đầu vào, và $y_i$ là nhãn đúng thực tế (**Ground Truth**).\n* **Hình ảnh ẩn dụ:** Giống như một học sinh giải bài tập khi **phía sau sách có sẵn đáp án chi tiết**. Mỗi khi học sinh làm bài ra kết quả $\\hat{y}$, học sinh lật trang sau so sánh với đáp án $y$ để biết mình đúng hay sai, từ đó rút kinh nghiệm chỉnh lại cách giải.",
    "answer": 1
  },
  "8": {
    "question": "Bài toán dự đoán giá nhà dựa trên diện tích, vị trí và số phòng ngủ thuộc loại bài toán nào?",
    "options": [
      "Phân loại (Classification)",
      "Hồi quy (Regression)",
      "Phân cụm (Clustering)",
      "Học tăng cường (Reinforcement Learning)"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong Học có giám sát, ta phân biệt dựa vào bản chất của biến mục tiêu $y$:\n* **Hồi quy (Regression):** Biến mục tiêu $y$ là **số thực liên tục** ($y \\in \\mathbb{R}$). Ví dụ: Giá nhà ($2.5$ tỷ, $3.12$ tỷ), nhiệt độ thời tiết, doanh thu, cân nặng.\n* **Phân loại (Classification):** Biến mục tiêu $y$ là **rời rạc, định tính** ($y \\in \\{0, 1\\}$ hoặc các nhãn phân loại). Ví dụ: Đậu/Rớt, Chó/Mèo.\n👉 Do giá nhà là một đại lượng liên tục không bị giới hạn trong vài nhãn rời rạc, đây là bài toán **Hồi quy (Regression)**.",
    "answer": 1
  },
  "9": {
    "question": "Bài toán phát hiện giao dịch gian lận thẻ tín dụng (Gian lận / Không gian lận) thuộc loại bài toán nào?",
    "options": [
      "Hồi quy đa biến",
      "Phân loại nhị phân (Binary Classification)",
      "Phân cụm không giám sát",
      "Giảm chiều dữ liệu"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Biến mục tiêu $y$ của bài toán chỉ nhận 1 trong 2 giá trị rời rạc:\n  $$y \\in \\{0, 1\\} \\quad (0: \\text{Hợp lệ}, 1: \\text{Gian lận})$$\n* Do đầu ra chỉ có đúng 2 lớp (classes), đây là bài toán **Phân loại nhị phân (Binary Classification)** thuộc phương pháp Học có giám sát.",
    "answer": 1
  },
  "10": {
    "question": "Học không giám sát (Unsupervised Learning) thường được sử dụng cho mục đích nào sau đây?",
    "options": [
      "Dự đoán nhãn rời rạc cho ảnh y tế",
      "Dự đoán giá cổ phiếu trong tương lai",
      "Khám phá cấu trúc ẩn, gom nhóm dữ liệu tự nhiên (Phân cụm) hoặc giảm chiều",
      "Tối đa hóa điểm số phần thưởng trong trò chơi điện tử"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Học không giám sát (Unsupervised Learning):** Tập dữ liệu chỉ có các đặc trưng đầu vào $X$, **hoàn toàn không có nhãn $y$ nào cả**:\n  $$\\mathcal{D} = \\{x_1, x_2, \\dots, x_n\\}$$\n* **Nhiệm vụ chính:**\n  1. **Phân cụm (Clustering):** Gom các điểm dữ liệu có tính chất tương đồng vào cùng nhóm (K-Means, DBSCAN) để phân khúc khách hàng.\n  2. **Giảm số chiều (Dimensionality Reduction):** Nén dữ liệu từ nhiều chiều xuống ít chiều hơn mà vẫn giữ được thông tin quan trọng nhất (PCA, t-SNE).\n  3. **Phát hiện bất thường (Anomaly Detection):** Tìm các mẫu nằm tách biệt kỳ lạ so với đa số.",
    "answer": 2
  },
  "11": {
    "question": "Học bán giám sát (Semi-Supervised Learning) kết hợp dữ liệu như thế nào?",
    "options": [
      "Chỉ dùng dữ liệu có nhãn do chuyên gia tạo",
      "Dùng lượng nhỏ dữ liệu có nhãn kết hợp với lượng lớn dữ liệu chưa có nhãn",
      "Không dùng dữ liệu nào, chỉ học từ phần thưởng",
      "Dùng dữ liệu từ hai bài toán hoàn toàn không liên quan"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Thực tế cuộc sống:** Thu thập dữ liệu thô (ảnh cào trên mạng, đoạn ghi âm thoại) rất rẻ và nhiều vô kể ($0$ đồng). Nhưng thuê chuyên gia y tế hoặc kỹ sư ngồi soi và **gán nhãn chính xác (Labeling)** từng ảnh X-quang thì tốn kém hàng tỷ đồng và rất chậm.\n* **Học bán giám sát (Semi-Supervised Learning):** Kết hợp một **lượng nhỏ dữ liệu đã gán nhãn** với một **lượng cực lớn dữ liệu chưa gán nhãn**, giúp mô hình học được cấu trúc phân bố tổng thể của dữ liệu mà không tốn chi phí gán nhãn khổng lồ.",
    "answer": 1
  },
  "12": {
    "question": "Trong Học tăng cường (Reinforcement Learning), tác tử (Agent) học hành vi dựa trên cơ chế nào?",
    "options": [
      "So sánh dự đoán với nhãn ground truth có sẵn",
      "Tối ưu hóa phần thưởng (Reward / Penalty) nhận được từ môi trường qua quá trình thử và sai",
      "Tính khoảng cách Euclidean giữa các điểm dữ liệu",
      "Phân tách không gian bằng siêu phẳng OLS"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong **Học tăng cường (Reinforcement Learning - RL)**:\n* Không có tập dữ liệu tĩnh với nhãn đúng/sai cho trước.\n* Một **Tác tử (Agent)** tương tác liên tục với một **Môi trường (Environment)** bằng các Hành động ($a$).\n* Môi trường phản hồi lại bằng Trạng thái mới ($s$) và một tín hiệu **Phần thưởng ($r$ - Reward) hoặc Phạt (Penalty)**.\n* 💡 **Ví dụ huấn luyện cún con:** Cún ngồi xuống khi nghe lệnh $\\to$ thưởng xúc xích ($+1$); cún cắn giày dép $\\to$ bị mắng ($-1$). Tác tử học theo cơ chế **thử và sai (Trial and Error)** để tìm ra chiến lược (Policy $\\pi$) tối đa hóa tổng điểm thưởng tích lũy.",
    "answer": 1
  },
  "13": {
    "question": "Hình thức Fine-tuning trong AI có nghĩa là gì?",
    "options": [
      "Huấn luyện mô hình từ đầu với trọng số ngẫu nhiên",
      "Huấn luyện mô hình trên tập dữ liệu tổng quát cực lớn",
      "Tiếp tục huấn luyện mô hình đã pre-train trên một tập dữ liệu nhỏ chuyên biệt của tác vụ cụ thể",
      "Xóa bỏ toàn bộ trọng số của mô hình cũ để huấn luyện lại"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Pre-training:** Huấn luyện mô hình nền tảng khổng lồ trên kho dữ liệu tổng quát (ví dụ: cho mô hình ngôn ngữ đọc toàn bộ Internet để hiểu tiếng Việt, ngữ pháp, tri thức phổ thông).\n* **Fine-tuning (Tinh chỉnh):** Lấy mô hình đã pre-train ở trên và **tiếp tục huấn luyện với tốc độ học nhỏ (learning rate nhỏ)** trên một tập dữ liệu chuyên ngành hẹp (như văn bản hồ sơ bệnh án hoặc luật pháp).\n* Nhờ có tri thức nền tảng sẵn, quá trình Fine-tuning diễn ra rất nhanh, tốn ít tài nguyên và chỉ cần lượng dữ liệu nhỏ.",
    "answer": 2
  },
  "14": {
    "question": "Khái niệm Transfer Learning (Học chuyển giao) mô tả điều gì?",
    "options": [
      "Chuyển đổi dữ liệu từ dạng chữ sang dạng số",
      "Tái sử dụng một mô hình đã học từ một tác vụ nguồn sang giải quyết một tác vụ đích có liên quan",
      "Chuyển tham số của mô hình sang siêu tham số",
      "Chuyển dữ liệu từ tập Train sang tập Test"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Transfer Learning (Học chuyển giao):** Là chiến lược tái sử dụng các tri thức/trọng số mà mô hình đã học được từ một bài toán nguồn ($Task_A$) để áp dụng sang một bài toán đích mới ($Task_B$).\n* 💡 **Ví dụ thực tế:** Một người đã biết đi xe đạp thì khi học đi xe máy sẽ tiếp thu nhanh hơn nhiều so với người chưa từng đi xe hai bánh, vì họ đã có sẵn tri thức về phản xạ thăng bằng và đánh lái. Tương tự, mô hình thị giác học nhận diện triệu vật thể trên ImageNet có thể chuyển giao các bộ lọc trích xuất cạnh, góc để soi ảnh tế bào ung thư.",
    "answer": 1
  },
  "15": {
    "question": "Sự khác biệt căn bản giữa Tham số (Parameters) và Siêu tham số (Hyperparameters) là gì?",
    "options": [
      "Tham số do con người đặt trước; Siêu tham số do mô hình tự học",
      "Tham số do mô hình tự học từ dữ liệu train; Siêu tham số do con người thiết lập trước để điều khiển cấu trúc và huấn luyện",
      "Tham số chỉ có trong hồi quy; Siêu tham số chỉ có trong phân loại",
      "Cả hai đều do mô hình tự học nhưng siêu tham số có giá trị lớn hơn"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết (⚠️ TRỌNG TÂM THI 100%):\n| Tiêu chí | Tham số (Parameters) | Siêu tham số (Hyperparameters) |\n| :--- | :--- | :--- |\n| **Nguồn gốc** | **Mô hình tự động học từ tập Train** qua thuật toán tối ưu. | **Kỹ sư con người phải tự chọn trước** khi bấm nút train. |\n| **Bản chất** | Quyết định công thức dự đoán cụ thể của mô hình. | Điều khiển cấu trúc và thuật toán học của mô hình. |\n| **Ví dụ** | Trọng số $w$ và bias $b$ trong $y = wx + b$. | Tốc độ học $\\eta$, hệ số phạt $\\lambda$, số cụm $K$, độ sâu cây `max_depth`. |\n| **Tập dữ liệu dùng** | Tinh chỉnh trên **Training Set**. | So sánh và chọn lựa trên **Validation Set**. |",
    "answer": 1
  },
  "16": {
    "question": "Đại lượng nào sau đây là một Siêu tham số (Hyperparameter)?",
    "options": [
      "Trọng số kết nối $w$ giữa các nơ-ron",
      "Hệ số chặn bias $b$ của hàm tuyến tính",
      "Độ sâu tối đa của cây quyết định (`max_depth`)",
      "Sai số phần dư trên từng mẫu $e_i = y_i - \\hat{y}_i$"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Độ sâu tối đa của cây (`max_depth`):** Là nút điều khiển cấu trúc do người lập trình ấn định trước khi xây dựng cây quyết định $\\implies$ Đây là **Siêu tham số (Hyperparameter)**.\n* Các đại lượng khác:\n  * Trọng số $w$ và bias $b$: Do giải thuật toán học tự học từ dữ liệu $\\implies$ **Tham số (Parameter)**.\n  * Sai số $e_i$: Là kết quả tính toán đầu ra, không phải tham số mô hình.",
    "answer": 2
  },
  "17": {
    "question": "Tập dữ liệu nào sau đây được sử dụng để so sánh các mô hình và lựa chọn Siêu tham số?",
    "options": [
      "Training set",
      "Validation set",
      "Test set",
      "Toàn bộ dataset gộp chung"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Training set:** Dùng để cập nhật **tham số nội tại** ($w, b$).\n* **Validation set (Tập thẩm định - 'Thi thử'):** Dùng để thử nghiệm các giá trị **siêu tham số khác nhau** (chọn độ sâu cây = 3 hay 5, chọn $\\lambda = 0.01$ hay $0.1$) và so sánh các thuật toán để chọn ra mô hình tốt nhất.\n* **Test set (Tập kiểm thử - 'Thi thật'):** Giữ kín tuyệt đối, chỉ đem ra chấm điểm một lần duy nhất ở bước cuối cùng.",
    "answer": 1
  },
  "18": {
    "question": "Vai trò duy nhất của Tập kiểm thử (Test set) là gì?",
    "options": [
      "Huấn luyện tham số $w$ và bias $b$",
      "Chọn độ sâu của cây quyết định",
      "Đánh giá khách quan cuối cùng về khả năng tổng quát hóa trên dữ liệu chưa từng thấy",
      "Làm sạch dữ liệu bị nhiễu"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Tập Test Set** đóng vai trò giống như **Đề thi tốt nghiệp THPT Quốc gia thật**:\n  * Nó tuyệt đối không được dùng để huấn luyện trọng số.\n  * Nó cũng không được dùng để chọn siêu tham số hay lựa chọn mô hình.\n  * Nhiệm vụ duy nhất là cung cấp **đánh giá độc lập, khách quan không thiên vị (Unbiased Evaluation)** về khả năng tổng quát hóa của mô hình trước khi bàn giao đưa vào vận hành thực tế.",
    "answer": 2
  },
  "19": {
    "question": "Khả năng tổng quát hóa (Generalization) của một mô hình học máy nghĩa là gì?",
    "options": [
      "Mô hình đạt độ chính xác 100% trên tập Training set",
      "Mô hình có khả năng dự đoán chính xác trên các quan sát mới chưa từng gặp lúc huấn luyện",
      "Mô hình có số lượng tham số lớn nhất có thể",
      "Mô hình có thời gian huấn luyện nhanh nhất"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Khả năng tổng quát hóa (Generalization Ability):** Là tiêu chuẩn vàng tối thượng của Học máy: Khả năng mô hình dự đoán chính xác trên **dữ liệu mới toanh ngoài thực tế** mà nó chưa từng được nhìn thấy trong quá trình huấn luyện.\n* Một mô hình học thuộc lòng $100\\%$ tập Train nhưng ra ngoài đời đoán sai be bét thì hoàn toàn vô giá trị.",
    "answer": 1
  },
  "20": {
    "question": "Hiện tượng Overfitting (Quá khớp) xảy ra khi nào?",
    "options": [
      "Mô hình có sai số cao trên cả tập Train lẫn tập Test",
      "Mô hình quá phức tạp, học thuộc cả nhiễu của tập Train; sai số Train rất thấp nhưng sai số Test rất cao",
      "Mô hình quá đơn giản, không học được quy luật dữ liệu",
      "Mô hình có thời gian chạy quá lâu"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Overfitting (Quá khớp - Bệnh 'Học vẹt'):**\n  * **Đặc trưng nhận diện:** Sai số trên tập huấn luyện cực thấp ($Train\\_Error \\approx 0$), nhưng sai số trên dữ liệu mới lại cực kỳ cao ($Test\\_Error \\gg 0$).\n  * **Bản chất:** Mô hình có độ phức tạp quá cao (bậc đa thức quá lớn, mạng quá nhiều tầng) nên nó khớp từng điểm dữ liệu, học vẹt luôn cả các điểm nhiễu và ngoại lai cá biệt, làm mất đi tính tổng quát hóa.",
    "answer": 1
  },
  "21": {
    "question": "Hiện tượng Underfitting (Thiếu khớp) thể hiện qua dấu hiệu nào sau đây?",
    "options": [
      "Sai số tập Train cực thấp nhưng sai số Test rất cao",
      "Sai số cao trên cả tập huấn luyện (Train) lẫn tập kiểm thử (Test)",
      "Mô hình có quá nhiều tham số phức tạp",
      "Mô hình dự đoán đúng 100% mọi mẫu"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Underfitting (Thiếu khớp - Bệnh 'Ngây thơ'):**\n  * **Đặc trưng nhận diện:** Sai số rất cao trên **CẢ HAI tập Train và Test** ($Train\\_Error$ cao, $Test\\_Error$ cũng cao).\n  * **Bản chất (High Bias):** Mô hình quá đơn giản (ví dụ dùng đường thẳng bậc 1 để xấp xỉ một đường cong parabol phức tạp) hoặc thiếu đặc trưng quan trọng, khiến mô hình thậm chí còn không học nổi quy luật cơ bản của tập Train.",
    "answer": 1
  },
  "22": {
    "question": "Sự khác biệt giữa Hàm mất mát (Loss Function) và Thước đo đánh giá (Evaluation Metric) là gì?",
    "options": [
      "Loss và Metric hoàn toàn giống nhau, chỉ khác tên gọi",
      "Loss bắt buộc phải khả vi để thuật toán tối ưu cập nhật trọng số; Metric dùng cho con người theo dõi mục tiêu nghiệp vụ và không cần khả vi",
      "Metric dùng để tối ưu gradient descent; Loss dùng để vẽ biểu đồ",
      "Loss không cần có đạo hàm; Metric bắt buộc phải có đạo hàm"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Loss Function (Hàm mất mát):**\n  * Phục vụ cho **thuật toán tối ưu của máy tính** (Gradient Descent).\n  * **Bắt buộc phải KHẢ VI (có đạo hàm liên tục, trơn)** để tính toán đạo hàm dốc cập nhật trọng số (MSE, BCE Loss).\n* **Evaluation Metric (Thước đo đánh giá):**\n  * Phục vụ cho **kỹ sư và doanh nghiệp** hiểu hiệu quả bài toán.\n  * **Không cần khả vi** (Accuracy, Precision, Recall, F1-score).\n* 💡 **Tại sao không lấy Accuracy làm hàm mất mát?** Vì Accuracy là hàm bậc thang gián đoạn (đoán trúng thì 1, lệch 1 chút thành 0), đạo hàm của nó bằng 0 ở khắp nơi nên Gradient Descent không thể cập nhật được!",
    "answer": 1
  },
  "23": {
    "question": "Trong quy trình dự án Machine Learning chuẩn, bước nào sau đây phải thực hiện TRƯỚC bước huấn luyện mô hình?",
    "options": [
      "Triển khai mô hình vào sản xuất (Deployment)",
      "Theo dõi suy giảm hiệu năng (Monitoring)",
      "Thu thập, làm sạch và chuẩn bị dữ liệu (Data Preprocessing)",
      "Báo cáo sai số cuối cùng trên Test set"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nQuy trình chuẩn 6 bước của một dự án Học máy:\n1. **Hiểu bài toán kinh doanh (Business Understanding)**\n2. **Định nghĩa bài toán học máy (ML Problem Framing)**\n3. **Thu thập & Khám phá dữ liệu (Data Collection & EDA)**\n4. **Tiền xử lý & Chuẩn bị dữ liệu (Data Preprocessing & Feature Engineering)**\n5. **Huấn luyện & Đánh giá mô hình (Model Training & Evaluation)**\n6. **Triển khai & Giám sát (Deployment & Monitoring)**\n👉 Bước **Tiền xử lý dữ liệu** bắt buộc phải hoàn thành trước khi đưa dữ liệu vào thuật toán huấn luyện.",
    "answer": 2
  },
  "24": {
    "question": "Phương pháp nào sau đây giúp giảm bớt nguy cơ Overfitting cho mô hình?",
    "options": [
      "Thêm nhiều đặc trưng không liên quan vào mô hình",
      "Tăng độ sâu của cây quyết định lên tối đa",
      "Thu thập thêm dữ liệu huấn luyện hoặc áp dụng Regularization ($L_1, L_2$)",
      "Bỏ qua tập Validation"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nĐể chữa căn bệnh **Overfitting (Quá khớp)**, ta áp dụng các biện pháp:\n1. **Bổ sung thêm nhiều dữ liệu huấn luyện:** Khi thấy hàng triệu ví dụ phong phú, mô hình khó có thể học vẹt từng trường hợp cụ thể.\n2. **Chính quy hóa (Regularization $L_1, L_2$):** Phạt các trọng số có độ lớn quá cao, ép mô hình giữ cấu trúc đơn giản, mượt mà.\n3. **Giảm độ phức tạp mô hình:** Cắt tỉa cây (Pruning), giảm số tầng nơ-ron, dùng Dropout.\n4. **Chọn lọc đặc trưng (Feature Selection):** Loại bỏ các biến nhiễu vô nghĩa.",
    "answer": 2
  },
  "25": {
    "question": "Một giáo sư định nghĩa AI là 'xây dựng các tác tử hành động để đạt kết quả tốt nhất có thể'. Góc nhìn này thuộc nhóm nào?",
    "options": [
      "Suy nghĩ như con người (Thinking Humanly)",
      "Suy nghĩ hợp lý (Thinking Rationally)",
      "Hành động như con người (Acting Humanly)",
      "Hành động hợp lý (Acting Rationally)"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nBốn góc nhìn kinh điển về định nghĩa Trí tuệ nhân tạo (AI):\n* **Hành động hợp lý (Acting Rationally - Rational Agent):** Tập trung vào việc tạo ra các tác tử (agent) luôn đưa ra hành động tối ưu để tối đa hóa kết quả kỳ vọng dựa trên thông tin hiện có.\n* **Hành động như con người (Acting Humanly):** Vượt qua phép thử Turing (Turing Test).\n* **Suy nghĩ như con người (Thinking Humanly):** Mô phỏng các quá trình nhận thức tâm lý não bộ người.\n* **Suy nghĩ hợp lý (Thinking Rationally):** Dựa trên logic hình thức toán học chuẩn mực.",
    "answer": 3
  },
  "26": {
    "question": "Tại sao việc chỉ viết luật thủ công (Rule-based) lại thất bại trong bài toán nhận diện giọng nói hoặc phân loại ảnh?",
    "options": [
      "Vì máy tính không thể thực thi lệnh if-else",
      "Vì số lượng luật cần viết quá khổng lồ, phức tạp và không thể bao quát hết biến thể thực tế",
      "Vì luật viết tay chạy quá nhanh",
      "Vì lập trình thủ công đòi hỏi GPU đắt tiền"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Một bức ảnh chỉ $256 \\times 256$ pixel đã chứa tới $65.536$ số nguyên. Cùng là một con mèo, nhưng góc nghiêng, ánh sáng, màu lông, tư thế nằm/chạy tạo ra vô số tổ hợp pixel khác biệt.\n* Con người không thể nào ngồi viết hàng triệu triệu nhánh `if-else` thủ công để bao quát hết mọi biến thể thực tế của tự nhiên. Đây chính là lý do Học máy (Machine Learning) ra đời: để máy tính tự động tìm quy luật từ dữ liệu lớn.",
    "answer": 1
  },
  "27": {
    "question": "Dữ liệu Ground Truth mang ý nghĩa gì trong bài toán học có giám sát?",
    "options": [
      "Kết quả do mô hình Machine Learning dự đoán",
      "Kết quả đúng thực tế đã biết trước của quan sát",
      "Sai số giữa dự đoán và nhãn",
      "Tập các siêu tham số được chọn"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Ground Truth ($y$ - Chân lý mặt đất):** Là giá trị thực tế đúng đắn, khách quan của mẫu dữ liệu được kiểm chứng ngoài đời thực (Ví dụ: Giá bán thực tế của căn nhà được công chứng là $5$ tỷ; hoặc kết quả sinh thiết xác nhận khối u là Lành tính).\n* Ground Truth được dùng làm thước đo chuẩn để đối chiếu với giá trị do mô hình phán đoán (Prediction $\\hat{y}$) nhằm tính sai số và cải thiện tham số.",
    "answer": 1
  },
  "28": {
    "question": "Để đánh giá khả năng tổng quát hóa của mô hình một cách khách quan nhất, quy tắc nào bắt buộc phải tuân thủ?",
    "options": [
      "Dùng chính Training set để đánh giá hiệu năng cuối cùng",
      "Không để thông tin từ tập Validation hoặc Test rò rỉ vào quá trình học tham số (Chống Data Leakage)",
      "Huấn luyện mô hình trên cả 3 tập Train, Validation và Test cùng lúc",
      "Chọn siêu tham số trực tiếp trên Test set"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Quy tắc vàng:** Tuyệt đối giữ cho tập **Validation Set** và **Test Set** hoàn toàn độc lập với quá trình huấn luyện tham số của mô hình.\n* **Hiểm họa Data Leakage (Rò rỉ dữ liệu):** Nếu mô hình vô tình được nhìn thấy thông tin của tập Test (ví dụ tính toán chuẩn hóa mean/std gộp chung cả tập Test trước khi chia dữ liệu), kết quả đánh giá sẽ bị lạc quan giả tạo: điểm thi thử đạt $10$ nhưng khi đưa ra môi trường thực tế sẽ thất bại thảm hại.",
    "answer": 1
  },
  "29": {
    "question": "Một mô hình dịch tự động từ tiếng Anh sang tiếng Việt thuộc lĩnh vực ứng dụng nào của AI?",
    "options": [
      "Thị giác máy tính (Computer Vision)",
      "Xử lý ngôn ngữ tự nhiên (Natural Language Processing - NLP)",
      "Hệ thống gợi ý (Recommender System)",
      "Phân cụm không gian"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Dịch máy (Machine Translation):** Là bài toán kinh điển thuộc lĩnh vực **Xử lý ngôn ngữ tự nhiên (Natural Language Processing - NLP)**.\n* Bài toán này biến đổi chuỗi từ ngữ trong ngôn ngữ nguồn sang chuỗi từ ngữ tương đương trong ngôn ngữ đích (Sequence-to-Sequence), hiện nay sử dụng chủ yếu kiến trúc Transformer.",
    "answer": 1
  },
  "30": {
    "question": "Bài toán phân chia ảnh chụp cắt lớp y tế thành các vùng mô bệnh và mô lành thuộc loại bài toán nào?",
    "options": [
      "Hồi quy đa biến",
      "Phân đoạn hình ảnh (Image Segmentation)",
      "Phân cụm văn bản",
      "Học tăng cường"
    ],
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Phân đoạn hình ảnh (Image Segmentation):** Là tác vụ phân loại mức độ pixel (Pixel-level Classification), gán mỗi pixel trong bức ảnh vào một lớp đối tượng cụ thể (ví dụ: pixel nào thuộc về khối u, pixel nào thuộc về mô lành).\n* Đây là tác vụ thị giác máy tính cao cấp hơn Phân loại ảnh (Image Classification) và Nhận diện vật thể (Object Detection).",
    "answer": 1
  }
};
