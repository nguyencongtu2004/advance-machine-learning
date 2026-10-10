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
    "explanation": "Arthur Samuel định nghĩa Machine Learning là lĩnh vực nghiên cứu mang lại cho máy tính khả năng học hỏi từ dữ liệu mà không cần phải lập trình tường minh (hard-code) mọi trường hợp.",
    "slideRef": "Slide Chương 1, Trang 40"
  },
  {
    "id": 2,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Trong định nghĩa kinh điển của Tom Mitchell (1997) về Machine Learning, bộ ba yếu tố cấu thành là gì?",
    "options": [
      "Training, Validation, Test",
      "Task (T), Experience (E), Performance (P)",
      "Precision (P), Recall (R), F1-score (F)",
      "Data (D), Model (M), Loss (L)"
    ],
    "answer": 1,
    "explanation": "Tom Mitchell định nghĩa: Một chương trình học từ kinh nghiệm E đối với tác vụ T và được đo bằng độ đo hiệu năng P, nếu hiệu năng tại tác vụ T được cải thiện theo kinh nghiệm E.",
    "slideRef": "Slide Chương 1, Trang 40-41"
  },
  {
    "id": 3,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Trong bài toán xây dựng bộ lọc thư rác (Spam Filtering), yếu tố nào sau đây đóng vai trò là Kinh nghiệm E (Experience)?",
    "options": [
      "Việc phân loại email mới thành spam hay thư thường",
      "Tập các email cũ trong quá khứ đã được con người gán nhãn sẵn",
      "Tỷ lệ email được phân loại chính xác",
      "Tốc độ xử lý của máy chủ mail"
    ],
    "answer": 1,
    "explanation": "Tác vụ T là phân loại email; Kinh nghiệm E là tập dữ liệu email lịch sử đã có nhãn; Độ đo P là tỷ lệ phần trăm phân loại chính xác.",
    "slideRef": "Slide Chương 1, Trang 42"
  },
  {
    "id": 4,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Mối quan hệ bao hàm đúng nhất giữa AI, Machine Learning (ML) và Deep Learning (DL) là gì?",
    "options": [
      "AI ⊂ ML ⊂ DL",
      "DL ⊂ ML ⊂ AI",
      "ML ⊂ AI ⊂ DL",
      "DL và ML là hai nhánh độc lập cùng thuộc AI"
    ],
    "answer": 1,
    "explanation": "Trí tuệ nhân tạo (AI) là khái niệm rộng nhất. Machine Learning là tập con của AI, và Deep Learning (học sâu bằng mạng nơ-ron nhiều tầng) là tập con của Machine Learning.",
    "slideRef": "Slide Chương 1, Trang 5, 39"
  },
  {
    "id": 5,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Thuật toán Backpropagation (Lan truyền ngược) nền tảng cho mạng nơ-ron nhiều tầng được mô tả vào năm nào và bởi ai?",
    "options": [
      "1950 bởi Alan Turing",
      "1951 bởi Marvin Minsky",
      "1969 bởi Arthur Bryson và Yu-Chi Ho",
      "2006 bởi Fei-Fei Li"
    ],
    "answer": 2,
    "explanation": "Năm 1969, Arthur Bryson và Yu-Chi Ho mô tả thuật toán lan truyền ngược để kích hoạt mạng nơ-ron nhân tạo nhiều tầng, đặt nền móng cho học sâu hiện đại.",
    "slideRef": "Slide Chương 1, Trang 8"
  },
  {
    "id": 6,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Dự án cơ sở dữ liệu hình ảnh quy mô lớn ImageNet thúc đẩy kỷ nguyên Deep Learning bùng nổ được khởi động bởi ai và vào năm nào?",
    "options": [
      "Andrew Ng (2009)",
      "Fei-Fei Li (2006)",
      "Alan Turing (1950)",
      "Geoffrey Hinton (1986)"
    ],
    "answer": 1,
    "explanation": "Giáo sư Fei-Fei Li đã bắt đầu dự án ImageNet vào năm 2006, tạo tiền đề dữ liệu khổng lồ cho sự bùng nổ của thị giác máy tính và học sâu.",
    "slideRef": "Slide Chương 1, Trang 9"
  },
  {
    "id": 7,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Đặc điểm cốt lõi của Học có giám sát (Supervised Learning) là gì?",
    "options": [
      "Dữ liệu đầu vào chỉ có các đặc trưng, không có nhãn",
      "Dữ liệu đầu vào đi kèm nhãn (ground truth) tương ứng đã biết trước",
      "Hệ thống học qua việc tương tác thử-sai với môi trường và nhận phần thưởng",
      "Hệ thống tự động gom các điểm tương đồng vào cụm"
    ],
    "answer": 1,
    "explanation": "Học có giám sát sử dụng dữ liệu huấn luyện gồm các cặp (x, y), trong đó x là vector đặc trưng và y là nhãn thực tế đã biết trước.",
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
    "explanation": "Giá nhà là một đại lượng số thực liên tục, do đó dự đoán giá nhà là bài toán Hồi quy (Regression).",
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
    "explanation": "Vì nhãn đầu ra là rời rạc với 2 trạng thái (Gian lận hoặc Hợp lệ), đây là bài toán Phân loại nhị phân.",
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
      "Khám phá cấu trúc ẩn, gom nhóm dữ liệu tự nhiên (Phân cụm)",
      "Tối đa hóa điểm số phần thưởng trong trò chơi điện tử"
    ],
    "answer": 2,
    "explanation": "Học không giám sát làm việc với dữ liệu không nhãn nhằm khám phá cấu trúc tiềm ẩn, phân cụm khách hàng hoặc giảm chiều dữ liệu.",
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
    "explanation": "Học bán giám sát tận dụng một lượng nhỏ dữ liệu có nhãn (do chi phí gán nhãn đắt) kết hợp lượng lớn dữ liệu chưa gán nhãn có sẵn.",
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
    "explanation": "Trong Reinforcement Learning, agent tương tác với môi trường và tối ưu hóa tổng phần thưởng tích lũy qua các hành động thử-sai.",
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
    "explanation": "Fine-tuning là việc lấy mô hình đã được pre-train trên dữ liệu lớn rồi tiếp tục tinh chỉnh trọng số trên tập dữ liệu cụ thể của bài toán mục tiêu.",
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
    "explanation": "Transfer Learning là việc tái sử dụng tri thức và biểu diễn đã học từ một nhiệm vụ lớn/tổng quát sang giải quyết nhiệm vụ mới.",
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
    "explanation": "Tham số (như trọng số w, bias b) được mô hình tự học từ dữ liệu; Siêu tham số (như learning rate, max depth, K cụm) do con người thiết lập trước.",
    "slideRef": "Slide Chương 1, Trang 53-55"
  },
  {
    "id": 16,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Đại lượng nào sau đây là một Siêu tham số (Hyperparameter)?",
    "options": [
      "Trọng số kết nối giữa các nơ-ron",
      "Hệ số chặn bias b của hàm tuyến tính",
      "Độ sâu tối đa của cây quyết định (max_depth)",
      "Sai số phần dư trên từng mẫu"
    ],
    "answer": 2,
    "explanation": "Độ sâu tối đa của cây (max_depth) là siêu tham số do kỹ sư lựa chọn để kiểm soát độ phức tạp của mô hình.",
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
    "explanation": "Validation set dùng để so sánh các cấu hình mô hình khác nhau và tinh chỉnh lựa chọn siêu tham số tối ưu.",
    "slideRef": "Slide Chương 1, Trang 57, 59"
  },
  {
    "id": 18,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Vai trò duy nhất của Tập kiểm thử (Test set) là gì?",
    "options": [
      "Huấn luyện tham số w và bias b",
      "Chọn độ sâu của cây quyết định",
      "Đánh giá khách quan cuối cùng về khả năng tổng quát hóa trên dữ liệu chưa từng thấy",
      "Làm sạch dữ liệu bị nhiễu"
    ],
    "answer": 2,
    "explanation": "Test set chỉ dùng để ước lượng độc lập khả năng dự đoán của mô hình trên dữ liệu mới chưa từng tham gia vào quá trình phát triển mô hình.",
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
    "explanation": "Tổng quát hóa là năng lực cốt lõi của ML: đưa ra kết quả dự đoán tốt trên những quan sát ngoài đời thực chưa từng xuất hiện trong tập train.",
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
    "explanation": "Overfitting là hiện tượng mô hình khớp cả tín hiệu lẫn nhiễu trong tập huấn luyện, dẫn đến độ chính xác cao trên train nhưng kém cỏi trên test.",
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
    "explanation": "Underfitting xảy ra khi mô hình quá đơn giản, không đủ năng lực nắm bắt quy luật, khiến sai số cao trên cả tập Train lẫn dữ liệu mới.",
    "slideRef": "Slide Chương 1, Trang 61"
  },
  {
    "id": 22,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Sự khác biệt giữa Hàm mất mát (Loss Function) và Thước đo đánh giá (Evaluation Metric) là gì?",
    "options": [
      "Loss và Metric hoàn toàn giống nhau, chỉ khác tên gọi",
      "Loss được dùng trực tiếp bởi thuật toán để tối ưu tham số khi huấn luyện; Metric dùng để con người diễn giải chất lượng bài toán",
      "Metric dùng để tối ưu gradient descent; Loss dùng để vẽ biểu đồ",
      "Loss không cần có đạo hàm; Metric bắt buộc phải có đạo hàm"
    ],
    "answer": 1,
    "explanation": "Loss function được thuật toán tối ưu (như GD) dùng trực tiếp để cập nhật tham số; Metric dùng để con người đánh giá chất lượng mô hình.",
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
    "explanation": "Quy trình chuẩn: Xác định bài toán -> Thu thập & hiểu dữ liệu -> Chuẩn bị/tiền xử lý dữ liệu -> Huấn luyện & tinh chỉnh -> Triển khai & giám sát.",
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
      "Thu thập thêm dữ liệu huấn luyện hoặc áp dụng Regularization",
      "Bỏ qua tập Validation"
    ],
    "answer": 2,
    "explanation": "Để giảm Overfitting, ta có thể thu thập thêm dữ liệu, giảm độ phức tạp mô hình, hoặc áp dụng các kỹ thuật phạt Regularization (L1, L2).",
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
    "explanation": "Hành động hợp lý (Acting Rationally) tập trung vào các tác tử hợp lý (Rational Agents) hành động nhằm đạt được kỳ vọng kết quả tối ưu nhất.",
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
    "explanation": "Các bài toán cảm nhận (ảnh, giọng nói) có quá nhiều biến thể vi mô, việc mô tả bằng danh sách luật cố định là bất khả thi.",
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
    "explanation": "Ground truth là kết quả đúng thực tế của đối tượng, dùng để so sánh với kết quả dự đoán (prediction) của mô hình.",
    "slideRef": "Slide Chương 1, Trang 50"
  },
  {
    "id": 28,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Để đánh giá khả năng tổng quát hóa của mô hình một cách khách quan nhất, quy tắc nào bắt buộc phải tuân thủ?",
    "options": [
      "Dùng chính Training set để đánh giá hiệu năng cuối cùng",
      "Không để thông tin từ tập Validation hoặc Test rò rỉ vào quá trình học tham số",
      "Huấn luyện mô hình trên cả 3 tập Train, Validation và Test cùng lúc",
      "Chọn siêu tham số trực tiếp trên Test set"
    ],
    "answer": 1,
    "explanation": "Tuyệt đối không để dữ liệu thẩm định và kiểm thử tham gia vào bước học tham số của mô hình để tránh hiện tượng rò rỉ thông tin (Data Leakage).",
    "slideRef": "Slide Chương 1, Trang 59"
  },
  {
    "id": 29,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Một mô hình dịch tự động từ tiếng Anh sang tiếng Việt thuộc lĩnh vực ứng dụng nào của AI?",
    "options": [
      "Thị giác máy tính (Computer Vision)",
      "Xử lý ngôn ngữ tự nhiên (NLP)",
      "Hệ thống gợi ý (Recommender System)",
      "Phân cụm không gian"
    ],
    "answer": 1,
    "explanation": "Dịch máy là ứng dụng tiêu biểu của Xử lý ngôn ngữ tự nhiên (Natural Language Processing - NLP).",
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
    "explanation": "Phân đoạn (Segmentation) là bài toán phân chia hình ảnh thành các vùng khác nhau dựa trên các đặc điểm tương tự.",
    "slideRef": "Slide Chương 1, Trang 26"
  },
  {
    "id": 31,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Bốn chiều chất lượng dữ liệu được đề cập trong bài giảng gồm những yếu tố nào?",
    "options": [
      "Tính đầy đủ, Tính đồng nhất, Tính toàn vẹn, Tính kịp thời",
      "Độ chính xác, Độ nhạy, Độ đặc hiệu, F1-score",
      "Tính tuyến tính, Tính chuẩn tắc, Tính độc lập, Phương sai đồng nhất",
      "Số dòng, Số cột, Dung lượng file, Định dạng file"
    ],
    "answer": 0,
    "explanation": "Bốn chiều chất lượng dữ liệu cốt lõi: Tính đầy đủ (Completeness), Tính đồng nhất (Consistency), Tính toàn vẹn (Integrity/Validity) và Tính kịp thời/Chính xác.",
    "slideRef": "Slide Chương 2, Trang 18-21"
  },
  {
    "id": 32,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Sai lệch lấy mẫu (Sampling Bias) xảy ra khi nào?",
    "options": [
      "Khi kích thước file dữ liệu quá lớn",
      "Khi tập mẫu thu thập không phản ánh đúng các nhóm và bối cảnh của bài toán thực tế",
      "Khi dữ liệu có quá nhiều cột số",
      "Khi chuẩn hóa dữ liệu bằng Z-score"
    ],
    "answer": 1,
    "explanation": "Sai lệch lấy mẫu xảy ra khi mẫu thu thập bị thiên lệch, không đại diện đầy đủ cho phân bố và các nhóm đối tượng trong miền bài toán.",
    "slideRef": "Slide Chương 2, Trang 9-11"
  },
  {
    "id": 33,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Khi một thuộc tính có tỷ lệ giá trị bị thiếu (Missing) lên tới hơn 80% và không đóng vai trò sống còn, chiến lược xử lý tốt nhất là gì?",
    "options": [
      "Xóa bỏ toàn bộ các dòng có chứa dữ liệu thiếu",
      "Điền giá trị trung bình (Mean) vào tất cả các ô thiếu",
      "Loại bỏ thuộc tính (cột) đó khỏi tập dữ liệu",
      "Tạo ra 80% dữ liệu giả mạo"
    ],
    "answer": 2,
    "explanation": "Khi phần lớn giá trị của một thuộc tính bị khuyết (> 70-80%) và không phải biến cốt lõi, loại bỏ thuộc tính đó là giải pháp an toàn nhất để tránh đưa nhiễu vào mô hình.",
    "slideRef": "Slide Chương 2, Trang 25"
  },
  {
    "id": 34,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Khi một thuộc tính số có phân phối bị lệch mạnh hoặc chứa nhiều giá trị ngoại lai cực đoan (Outliers), ta nên điền dữ liệu thiếu bằng đại lượng nào?",
    "options": [
      "Giá trị trung bình (Mean)",
      "Giá trị trung vị (Median)",
      "Giá trị 0",
      "Giá trị lớn nhất (Max)"
    ],
    "answer": 1,
    "explanation": "Trung vị (Median) là đại lượng thống kê vững (robust), không bị kéo lệch bởi các giá trị ngoại lai cực đoan như giá trị trung bình (Mean).",
    "slideRef": "Slide Chương 2, Trang 26"
  },
  {
    "id": 35,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Khẳng định nào sau đây là ĐÚNG khi nói về giá trị ngoại biên (Outliers)?",
    "options": [
      "Mọi giá trị ngoại biên đều là lỗi nhập liệu và bắt buộc phải xóa bỏ",
      "Ngoại biên là quan sát khác biệt lớn so với phần lớn mẫu, nhưng có thể phản ánh tín hiệu thực tế quan trọng (như gian lận tài chính)",
      "Ngoại biên luôn làm tăng độ chính xác của mô hình",
      "Ngoại biên chỉ xuất hiện ở dữ liệu danh mục"
    ],
    "answer": 1,
    "explanation": "Không phải ngoại biên nào cũng là lỗi cần xóa. Trong nhiều bài toán như phát hiện gian lận hay phát hiện xâm nhập mạng, chính các quan sát ngoại biên lại là thông tin quý giá nhất.",
    "slideRef": "Slide Chương 2, Trang 28"
  },
  {
    "id": 36,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Công thức chuẩn hóa Min-Max Normalization đưa giá trị về đoạn nào?",
    "options": [
      "[-1, 1]",
      "[0, 1]",
      "(-∞, +∞)",
      "[0, 100]"
    ],
    "answer": 1,
    "explanation": "Min-Max Normalization biến đổi dữ liệu theo công thức x' = (x - x_min) / (x_max - x_min), đưa toàn bộ giá trị về đoạn chuẩn [0, 1].",
    "slideRef": "Slide Chương 2, Trang 33"
  },
  {
    "id": 37,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Nhược điểm lớn nhất của phương pháp chuẩn hóa Min-Max Normalization là gì?",
    "options": [
      "Tính toán quá chậm",
      "Làm mất hoàn toàn thứ tự của các mẫu",
      "Rất nhạy cảm với các giá trị ngoại lai cực đoan (Outliers)",
      "Không thể áp dụng cho biến số thực"
    ],
    "answer": 2,
    "explanation": "Nếu tập dữ liệu xuất hiện một giá trị ngoại lai cực lớn, x_max sẽ bị kéo vọt lên, làm cho phần lớn các giá trị bình thường bị nén dồn về sát số 0.",
    "slideRef": "Slide Chương 2, Trang 33, 36"
  },
  {
    "id": 38,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Phương pháp Standardization (Z-score) biến đổi thuộc tính về phân phối có tính chất gì?",
    "options": [
      "Giá trị nhỏ nhất bằng 0, lớn nhất bằng 1",
      "Trung bình bằng 0 và độ lệch chuẩn (phương sai) bằng 1",
      "Trung bình bằng 1 và phương sai bằng 0",
      "Mọi giá trị đều là số nguyên dương"
    ],
    "answer": 1,
    "explanation": "Z-score chuẩn hóa theo công thức z = (x - μ) / σ, đưa thuộc tính về thang đo có trung bình μ = 0 và độ lệch chuẩn σ = 1.",
    "slideRef": "Slide Chương 2, Trang 35-36"
  },
  {
    "id": 39,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Một thuộc tính có x_min = 10, x_max = 50. Một mẫu có giá trị x = 30 thì sau khi chuẩn hóa Min-Max sẽ nhận giá trị bao nhiêu?",
    "options": [
      "0.25",
      "0.50",
      "0.75",
      "0.40"
    ],
    "answer": 1,
    "explanation": "Áp dụng công thức: x' = (30 - 10) / (50 - 10) = 20 / 40 = 0.5.",
    "slideRef": "Slide Chương 2, Trang 33"
  },
  {
    "id": 40,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Một thuộc tính có trung bình μ = 40, độ lệch chuẩn σ = 5. Giá trị x = 55 sau khi chuẩn hóa Z-score là bao nhiêu?",
    "options": [
      "1.5",
      "2.0",
      "3.0",
      "2.5"
    ],
    "answer": 2,
    "explanation": "Áp dụng công thức Z-score: z = (55 - 40) / 5 = 15 / 5 = 3.0.",
    "slideRef": "Slide Chương 2, Trang 35"
  },
  {
    "id": 41,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Nguy cơ lớn nhất khi sử dụng Label Encoding cho biến danh mục không có thứ bậc (như Màu sắc: Đỏ, Xanh, Vàng) là gì?",
    "options": [
      "Làm tăng số chiều của dữ liệu lên gấp 3 lần",
      "Tạo ra một quan hệ thứ tự giả định vô lý giữa các giá trị (như Vàng > Xanh > Đỏ)",
      "Làm mất dữ liệu của các màu hiếm gặp",
      "Khiến mô hình không thể chạy được"
    ],
    "answer": 1,
    "explanation": "Label Encoding gán các số nguyên (0, 1, 2) có thể khiến mô hình hiểu lầm rằng giá trị 2 lớn hơn và quan trọng hơn giá trị 0.",
    "slideRef": "Slide Chương 2, Trang 37"
  },
  {
    "id": 42,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Kỹ thuật One-Hot Encoding biến đổi một thuộc tính có K giá trị danh mục thành dạng biểu diễn nào?",
    "options": [
      "Một cột số nguyên duy nhất từ 1 đến K",
      "K cột nhị phân riêng biệt, trong đó vị trí tương ứng nhận giá trị 1 và các vị trí khác nhận 0",
      "Một ma trận hiệp phương sai kích thước K x K",
      "Một vector xác suất liên tục có tổng bằng 1"
    ],
    "answer": 1,
    "explanation": "One-Hot Encoding tạo ra K cột nhị phân; mỗi mẫu nhận giá trị 1 ở cột danh mục tương ứng và 0 ở các cột còn lại.",
    "slideRef": "Slide Chương 2, Trang 38"
  },
  {
    "id": 43,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Sự khác biệt căn bản giữa Feature Selection (Lựa chọn đặc trưng) và Feature Extraction (Rút trích đặc trưng) là gì?",
    "options": [
      "Feature Selection tạo ra không gian biểu diễn mới; Feature Extraction chỉ chọn lại các cột cũ",
      "Feature Selection giữ lại tập con các thuộc tính ban đầu và loại bỏ biến dư thừa; Feature Extraction kết hợp các thuộc tính cũ để tạo ra các biểu diễn mới (như PCA)",
      "Feature Selection chỉ dùng cho biến số; Feature Extraction chỉ dùng cho biến chữ",
      "Hai khái niệm này hoàn toàn tương đương nhau"
    ],
    "answer": 1,
    "explanation": "Selection là chọn lọc giữ nguyên một số thuộc tính gốc tốt nhất; Extraction là biến đổi toán học kết hợp các thuộc tính gốc để tạo ra các thuộc tính mới.",
    "slideRef": "Slide Chương 2, Trang 42-43"
  },
  {
    "id": 44,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Hiện tượng 'Lời nguyền số chiều' (Curse of Dimensionality) dẫn đến hệ quả tiêu cực nào sau đây?",
    "options": [
      "Không gian dữ liệu trở nên cực kỳ thưa thớt và khoảng cách giữa các điểm kém phân biệt",
      "Dữ liệu bị nén quá chặt làm các điểm dính vào nhau",
      "Thời gian huấn luyện mô hình giảm đi đáng kể",
      "Mô hình luôn bị Underfitting"
    ],
    "answer": 0,
    "explanation": "Khi số chiều tăng cao, thể tích không gian tăng vọt làm dữ liệu cực kỳ thưa, khoảng cách Euclidean mất dần khả năng phân biệt điểm gần/xa và chi phí tính toán bùng nổ.",
    "slideRef": "Slide Chương 2, Trang 50"
  },
  {
    "id": 45,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Thuật toán PCA (Principal Component Analysis) thuộc nhóm phương pháp học nào?",
    "options": [
      "Học có giám sát (Supervised Learning)",
      "Học không giám sát (Unsupervised Learning)",
      "Học tăng cường (Reinforcement Learning)",
      "Học bán giám sát"
    ],
    "answer": 1,
    "explanation": "PCA là phương pháp học không giám sát dùng để giảm chiều dữ liệu, hoàn toàn không sử dụng nhãn y.",
    "slideRef": "Slide Chương 2, Trang 53"
  },
  {
    "id": 46,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Mục tiêu cốt lõi của thuật toán PCA khi chiếu dữ liệu sang không gian mới là gì?",
    "options": [
      "Tối đa hóa khoảng cách giữa các lớp có nhãn khác nhau",
      "Bảo toàn tối đa phương sai (Variance) của dữ liệu trên các thành phần chính",
      "Ép toàn bộ dữ liệu về phân phối chuẩn chuẩn tắc",
      "Loại bỏ toàn bộ các điểm dữ liệu ngoại lai"
    ],
    "answer": 1,
    "explanation": "PCA tìm các hướng chiếu trực giao sao cho dữ liệu có phương sai lớn nhất dọc theo các hướng đó (giữ lại tối đa lượng thông tin biến thiên).",
    "slideRef": "Slide Chương 2, Trang 53, 59"
  },
  {
    "id": 47,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Bước BẮT BUỘC phải thực hiện đầu tiên trong thuật toán PCA trước khi tính ma trận hiệp phương sai là gì?",
    "options": [
      "Chuẩn hóa dữ liệu về [0, 1]",
      "Tâm hóa dữ liệu (Data Centering) bằng cách trừ mỗi mẫu cho vector trung bình",
      "Gán nhãn phân loại cho từng điểm",
      "Xóa bỏ các cột có phương sai bằng 0"
    ],
    "answer": 1,
    "explanation": "Trước khi tính hiệp phương sai, dữ liệu bắt buộc phải được trừ vector trung bình để đưa tâm của đám mây dữ liệu về đúng gốc tọa độ (0, 0).",
    "slideRef": "Slide Chương 2, Trang 55, 60, 64"
  },
  {
    "id": 48,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Trong ma trận hiệp phương sai (Covariance Matrix) của dữ liệu đã tâm hóa, các phần tử nằm trên đường chéo chính thể hiện điều gì?",
    "options": [
      "Mức độ tương quan giữa hai đặc trưng khác nhau",
      "Phương sai của từng đặc trưng riêng lẻ",
      "Vector trung bình của các đặc trưng",
      "Các trị riêng eigenvalue"
    ],
    "answer": 1,
    "explanation": "Đường chéo chính của ma trận hiệp phương sai biểu diễn phương sai (độ biến thiên) của từng đặc trưng; các phần tử ngoài đường chéo là hiệp phương sai giữa các cặp đặc trưng.",
    "slideRef": "Slide Chương 2, Trang 56"
  },
  {
    "id": 49,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Trong bài toán PCA, Vector riêng (Eigenvector) và Trị riêng (Eigenvalue) của ma trận hiệp phương sai mang ý nghĩa hình học gì?",
    "options": [
      "Eigenvector chỉ phương sai; Eigenvalue chỉ hướng của thành phần chính",
      "Eigenvector chỉ hướng của thành phần chính mới; Eigenvalue biểu thị độ lớn phương sai của dữ liệu dọc theo hướng đó",
      "Eigenvector là tọa độ tâm dữ liệu; Eigenvalue là số lượng mẫu quan sát",
      "Eigenvector và Eigenvalue đều biểu thị sai số của mô hình"
    ],
    "answer": 1,
    "explanation": "Eigenvector v xác định hướng của trục tọa độ mới (thành phần chính), còn eigenvalue λ đo lượng phương sai mà thành phần chính đó nắm giữ.",
    "slideRef": "Slide Chương 2, Trang 57-59"
  },
  {
    "id": 50,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Sau khi tìm được các eigenvector và eigenvalue, bước tiếp theo trong PCA là gì?",
    "options": [
      "Sắp xếp các eigenvector theo thứ tự eigenvalue giảm dần và chọn K eigenvector lớn nhất",
      "Cộng tất cả các eigenvalue lại với nhau để tìm ma trận nghịch đảo",
      "Nhân ma trận hiệp phương sai với vector nhãn y",
      "Chia tất cả các eigenvalue cho số lượng mẫu n"
    ],
    "answer": 0,
    "explanation": "Ta sắp xếp các eigenvalue theo thứ tự giảm dần λ1 >= λ2 >= ... và chọn K vector riêng tương ứng để tạo ma trận chiếu không gian mới.",
    "slideRef": "Slide Chương 2, Trang 61, 65"
  },
  {
    "id": 51,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Tỷ lệ phương sai giải thích (Explained Variance Ratio - EVR) của thành phần chính thứ k được tính bằng công thức nào?",
    "options": [
      "EVR_k = λ_k / n",
      "EVR_k = λ_k / Σ(λ_j)",
      "EVR_k = Σ(λ_j) / λ_k",
      "EVR_k = √(λ_k)"
    ],
    "answer": 1,
    "explanation": "EVR_k = λ_k / (λ_1 + λ_2 + ... + λ_p), thể hiện tỷ lệ phần trăm phương sai của toàn bộ dữ liệu mà thành phần chính thứ k giải thích được.",
    "slideRef": "Slide Chương 2, Trang 67"
  },
  {
    "id": 52,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Một ma trận dữ liệu 3 chiều có các trị riêng tính được là λ_1 = 6, λ_2 = 3, λ_3 = 1. Tỷ lệ phương sai giải thích của thành phần chính thứ nhất (PC1) là bao nhiêu?",
    "options": [
      "30%",
      "60%",
      "90%",
      "10%"
    ],
    "answer": 1,
    "explanation": "Tổng các trị riêng: 6 + 3 + 1 = 10. Tỷ lệ của PC1: EVR_1 = 6 / 10 = 0.6 = 60%.",
    "slideRef": "Slide Chương 2, Trang 67"
  },
  {
    "id": 53,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Tổng tỷ lệ phương sai giải thích (EVR) của toàn bộ p thành phần chính trong PCA luôn bằng bao nhiêu?",
    "options": [
      "Phụ thuộc vào số chiều dữ liệu",
      "Bằng số lượng mẫu n",
      "Luôn bằng 1 (hay 100%)",
      "Bằng 0"
    ],
    "answer": 2,
    "explanation": "Vì mẫu số là tổng của toàn bộ các eigenvalue, tổng tích lũy của tất cả p thành phần chính luôn luôn bằng 1 (100%).",
    "slideRef": "Slide Chương 2, Trang 67"
  },
  {
    "id": 54,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Các thành phần chính (Principal Components) tạo bởi PCA có mối quan hệ hình học nào với nhau?",
    "options": [
      "Chúng song song với nhau",
      "Chúng trực giao (vuông góc) đôi một và không tương quan với nhau",
      "Chúng cắt nhau tại một góc 45 độ",
      "Chúng trùng nhau"
    ],
    "answer": 1,
    "explanation": "Các thành phần chính trong PCA luôn trực giao đôi một (orthogonal), đảm bảo thông tin giữa các chiều mới không bị trùng lặp (hiệp phương sai bằng 0).",
    "slideRef": "Slide Chương 2, Trang 54, 61"
  },
  {
    "id": 55,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Dữ liệu dạng văn bản thô (Text) thường được biểu diễn thành dạng số thông qua kỹ thuật nào sau đây?",
    "options": [
      "Min-Max Normalization",
      "Túi từ (Bag-of-Words), TF-IDF hoặc Word Embeddings",
      "Rời rạc hóa Z-score",
      "Giải phương trình OLS"
    ],
    "answer": 1,
    "explanation": "Biểu diễn văn bản sang vector số thường dùng Bag-of-Words (BoW), TF-IDF hoặc các mô hình nhúng từ (Word Embeddings).",
    "slideRef": "Slide Chương 2, Trang 45"
  },
  {
    "id": 56,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Kỹ thuật rời rạc hóa (Binning / Discretization) thực hiện thao tác nào trên dữ liệu?",
    "options": [
      "Gom các giá trị số liên tục thành các khoảng nhóm rời rạc (như Tuổi -> Nhóm tuổi)",
      "Chuyển đổi dữ liệu danh mục thành số thực",
      "Nhân các thuộc tính với nhau để tạo đa thức",
      "Loại bỏ các giá trị trùng lặp"
    ],
    "answer": 0,
    "explanation": "Rời rạc hóa gom các giá trị liên tục thành các khoảng (bins), giúp một số mô hình xử lý hiệu quả hơn và giảm nhạy cảm với nhiễu nhỏ.",
    "slideRef": "Slide Chương 2, Trang 39"
  },
  {
    "id": 57,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Khi thu thập dữ liệu bằng kỹ thuật Crawling & Scraping trên web, thách thức lớn nhất đối với chất lượng dữ liệu là gì?",
    "options": [
      "Dữ liệu hoàn toàn không có nhiễu",
      "Dữ liệu lẫn nhiều mã HTML, quảng cáo, trùng lặp và cấu trúc không đồng nhất",
      "Dữ liệu luôn được gán nhãn chính xác 100%",
      "Không thể lưu trữ được trên đĩa cứng"
    ],
    "answer": 1,
    "explanation": "Dữ liệu cào từ web chứa rất nhiều tạp chất (thẻ định dạng, nội dung rác, cấu trúc trang web thay đổi) đòi hỏi khâu tiền xử lý cực kỳ công phu.",
    "slideRef": "Slide Chương 2, Trang 15"
  },
  {
    "id": 58,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Phép chiếu PCA từ 2 chiều xuống 1 chiều thực hiện ánh xạ điểm dữ liệu như thế nào?",
    "options": [
      "Xóa bỏ hoàn toàn tọa độ trục tung y",
      "Chiếu vuông góc điểm dữ liệu đã tâm hóa lên đường thẳng xác định bởi vector riêng thứ nhất",
      "Lấy trung bình cộng của 2 tọa độ",
      "Nhân 2 tọa độ với nhau"
    ],
    "answer": 1,
    "explanation": "Chiếu xuống 1 chiều là phép chiếu trực giao các điểm dữ liệu đã tâm hóa lên trục của vector riêng thứ nhất (PC1).",
    "slideRef": "Slide Chương 2, Trang 62, 66"
  },
  {
    "id": 59,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Đặc trưng dư thừa (Redundant Feature) được định nghĩa là gì?",
    "options": [
      "Đặc trưng có chứa nhiều giá trị âm",
      "Đặc trưng lặp lại thông tin đã có ở một hoặc nhiều đặc trưng khác",
      "Đặc trưng có giá trị trung bình bằng 0",
      "Đặc trưng bị thiếu hoàn toàn dữ liệu"
    ],
    "answer": 1,
    "explanation": "Đặc trưng dư thừa là thuộc tính lặp lại thông tin mà các thuộc tính khác đã mang lại, làm tăng số chiều và chi phí tính toán mà không bổ sung tín hiệu mới.",
    "slideRef": "Slide Chương 2, Trang 41, 47"
  },
  {
    "id": 60,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý và biểu diễn dữ liệu",
    "question": "Tiêu chí nào sau đây thường được dùng để chọn số chiều K trong thuật toán PCA?",
    "options": [
      "Chọn K sao cho tổng phương sai giải thích tích lũy (Cumulative EVR) đạt ngưỡng (ví dụ >= 90% hoặc 95%)",
      "Luôn luôn chọn K = 1 trong mọi trường hợp",
      "Chọn K sao cho số chiều mới bằng số chiều cũ",
      "Chọn K bằng số lượng dòng dữ liệu"
    ],
    "answer": 0,
    "explanation": "Trong thực tế, người ta cộng dồn tỷ lệ EVR của các thành phần chính và chọn số chiều K nhỏ nhất sao cho giữ lại được 90% đến 95% tổng phương sai.",
    "slideRef": "Slide Chương 2, Trang 67"
  },
  {
    "id": 61,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hàm mất mát của mô hình Hồi quy tuyến tính theo phương pháp OLS (Ordinary Least Squares) là gì?",
    "options": [
      "Tổng trị tuyệt đối sai số (MAE)",
      "Tổng bình phương sai số phần dư (SSE / RSS): Σ(y_i - ŷ_i)^2",
      "Binary Cross-Entropy Loss",
      "Hàm mất mát bản lề (Hinge Loss)"
    ],
    "answer": 1,
    "explanation": "OLS tối thiểu hóa tổng bình phương phần dư giữa nhãn thực tế y và nhãn dự đoán ŷ: J(w) = ||y - Xw||_2^2.",
    "slideRef": "Slide Chương 3, Trang 18-20"
  },
  {
    "id": 62,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hệ phương trình chuẩn (Normal Equation) rút ra từ việc đặt gradient của hàm mất mát OLS bằng 0 là gì?",
    "options": [
      "Xw = y",
      "X^T X w = X^T y",
      "X^T y w = X^T X",
      "(X^T X)^(-1) w = y"
    ],
    "answer": 1,
    "explanation": "Đạo hàm ∇J(w) = -2X^Ty + 2X^TXw = 0 dẫn đến hệ phương trình chuẩn X^T X w = X^T y.",
    "slideRef": "Slide Chương 3, Trang 22-23"
  },
  {
    "id": 63,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Công thức nghiệm đóng giải tích (Closed-form solution) của hồi quy tuyến tính OLS là gì?",
    "options": [
      "w* = X^T y (X^T X)^(-1)",
      "w* = (X^T X)^(-1) X^T y",
      "w* = (X X^T)^(-1) X y",
      "w* = X (X^T X)^(-1) y"
    ],
    "answer": 1,
    "explanation": "Khi ma trận X^TX khả nghịch, nghiệm đóng của OLS là w* = (X^T X)^(-1) X^T y.",
    "slideRef": "Slide Chương 3, Trang 24"
  },
  {
    "id": 64,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Điều kiện BẮT BUỘC để nghiệm đóng giải tích của OLS w* = (X^T X)^(-1) X^T y tồn tại duy nhất là gì?",
    "options": [
      "Ma trận X^T X phải khả nghịch (các cột của X độc lập tuyến tính, số mẫu n >= số đặc trưng p)",
      "Số đặc trưng p phải lớn hơn số mẫu n",
      "Tất cả các đặc trưng phải tuân theo phân phối chuẩn",
      "Hệ số chặn bias w_0 phải bằng 0"
    ],
    "answer": 0,
    "explanation": "Nghiệm đóng chỉ tồn tại khi ma trận X^TX khả nghịch, đòi hỏi các cột của X phải độc lập tuyến tính và số mẫu n phải lớn hơn hoặc bằng số đặc trưng p.",
    "slideRef": "Slide Chương 3, Trang 25, 40"
  },
  {
    "id": 65,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Về mặt hình học, vector dự đoán ŷ* = Xw* trong nghiệm OLS có mối quan hệ gì với vector nhãn thật y?",
    "options": [
      "ŷ* song song với vector y",
      "ŷ* là hình chiếu trực giao (Orthogonal Projection) của vector y lên không gian cột Col(X)",
      "ŷ* luôn có độ dài lớn hơn vector y",
      "ŷ* vuông góc với vector y"
    ],
    "answer": 1,
    "explanation": "Dự đoán ŷ* nằm trong không gian cột Col(X) và là điểm gần vector y nhất, tức là hình chiếu vuông góc trực giao của y lên Col(X).",
    "slideRef": "Slide Chương 3, Trang 26"
  },
  {
    "id": 66,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Tại điểm cực tiểu OLS, vector phần dư e = y - Xw* có tính chất hình học nào đối với các cột của ma trận X?",
    "options": [
      "Vector phần dư trùng với cột thứ nhất của X",
      "Vector phần dư trực giao (vuông góc) với mọi cột của ma trận X: X^T (y - Xw*) = 0",
      "Vector phần dư có độ dài bằng 0 trên mọi bài toán",
      "Vector phần dư tạo góc 45 độ với các cột của X"
    ],
    "answer": 1,
    "explanation": "Tại nghiệm tối ưu OLS, phần dư e vuông góc với không gian cột Col(X), do đó X^T e = X^T (y - Xw*) = 0.",
    "slideRef": "Slide Chương 3, Trang 27"
  },
  {
    "id": 67,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Khi giả định sai số ngẫu nhiên ε tuân theo phân phối chuẩn ε ~ N(0, σ^2), việc tối đa hóa hàm Log-Likelihood (MLE) tương đương với điều gì?",
    "options": [
      "Tối đa hóa phương sai của sai số",
      "Tối thiểu hóa tổng bình phương phần dư trong OLS",
      "Tối thiểu hóa số lượng biến đặc trưng",
      "Tối đa hóa chuẩn L1 của trọng số"
    ],
    "answer": 1,
    "explanation": "Dưới giả định sai số Gaussian độc lập, bài toán MLE dẫn đến cực tiểu hóa tổng bình phương sai số, cho ra cùng nghiệm với OLS.",
    "slideRef": "Slide Chương 3, Trang 37-38"
  },
  {
    "id": 68,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hàm mục tiêu của Hồi quy Ridge (Ridge Regression) bổ sung hình phạt nào vào sai số dữ liệu?",
    "options": [
      "Hình phạt chuẩn L1: λ Σ |w_j|",
      "Hình phạt chuẩn L2: λ ||w||_2^2 = λ Σ (w_j)^2",
      "Hình phạt hỗn hợp L1 và L2",
      "Hình phạt số lượng đặc trưng khác không"
    ],
    "answer": 1,
    "explanation": "Ridge Regression bổ sung hình phạt chuẩn L2 (tổng bình phương các hệ số trọng số): J(w) = ||y - Xw||_2^2 + λ ||w||_2^2.",
    "slideRef": "Slide Chương 3, Trang 45-46"
  },
  {
    "id": 69,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Công thức nghiệm đóng giải tích của Hồi quy Ridge là gì?",
    "options": [
      "w* = (X^T X + λI)^(-1) X^T y",
      "w* = (X^T X - λI)^(-1) X^T y",
      "w* = (X^T X)^(-1) X^T y + λ",
      "w* = λ (X^T X)^(-1) X^T y"
    ],
    "answer": 0,
    "explanation": "Nghiệm đóng của Ridge là w* = (X^T X + λI)^(-1) X^T y. Nhờ cộng thêm λI (λ > 0), ma trận này luôn luôn khả nghịch!",
    "slideRef": "Slide Chương 3, Trang 47"
  },
  {
    "id": 70,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Ưu thế vượt trội của ma trận (X^T X + λI) trong Ridge Regression so với (X^T X) trong OLS khi gặp hiện tượng đa cộng tuyến là gì?",
    "options": [
      "Nó có kích thước nhỏ hơn",
      "Nó luôn luôn khả nghịch (invertible) ngay cả khi các đặc trưng tương quan mạnh",
      "Nó làm tất cả các trọng số bằng 0",
      "Nó loại bỏ hoàn toàn hệ số chặn bias"
    ],
    "answer": 1,
    "explanation": "Việc cộng λI vào đường chéo chính làm ma trận xác định dương và triệt tiêu tính suy biến, giúp nghiệm Ridge luôn tồn tại và ổn định.",
    "slideRef": "Slide Chương 3, Trang 47, 57"
  },
  {
    "id": 71,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Khi siêu tham số λ trong Ridge Regression tăng lên rất lớn (λ -> ∞), các hệ số trọng số w sẽ có xu hướng như thế nào?",
    "options": [
      "Tăng lên vô cùng",
      "Co dần về sát 0 nhưng không bao giờ bằng đúng 0 hoàn toàn",
      "Bị ép về đúng bằng 0 ngay lập tức",
      "Dao động đổi dấu liên tục"
    ],
    "answer": 1,
    "explanation": "Khi λ tăng lớn, hình phạt L2 càng nặng làm các hệ số co dần về sát 0, nhưng do miền ràng buộc trơn mượt, chúng hầu như không bị triệt tiêu về đúng 0.",
    "slideRef": "Slide Chương 3, Trang 45, 48"
  },
  {
    "id": 72,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hàm mục tiêu của Hồi quy Lasso (Lasso Regression) sử dụng hình phạt nào?",
    "options": [
      "Hình phạt chuẩn L2",
      "Hình phạt chuẩn L1: λ ||w||_1 = λ Σ |w_j|",
      "Hình phạt bậc ba",
      "Hình phạt dựa trên Entropy"
    ],
    "answer": 1,
    "explanation": "Lasso sử dụng hình phạt chuẩn L1 (tổng trị tuyệt đối của các hệ số): J(w) = ||y - Xw||_2^2 + λ Σ |w_j|.",
    "slideRef": "Slide Chương 3, Trang 51-52"
  },
  {
    "id": 73,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Tại sao Hồi quy Lasso có khả năng tự động thực hiện Lựa chọn đặc trưng (Feature Selection)?",
    "options": [
      "Vì nó xóa bỏ ngẫu nhiên các cột trong ma trận dữ liệu",
      "Vì miền ràng buộc chuẩn L1 có các đỉnh nhọn nằm trên các trục tọa độ, làm cho điểm tiếp xúc tối ưu dễ rơi vào trục và ép nhiều hệ số w_j về ĐÚNG BẰNG 0",
      "Vì Lasso có nghiệm đóng giải tích giống OLS",
      "Vì Lasso chỉ áp dụng được khi dữ liệu có 1 chiều"
    ],
    "answer": 1,
    "explanation": "Hình học vùng ràng buộc L1 là hình thoi/đa diện có góc nhọn trên trục tọa độ, tạo ra nghiệm thưa (Sparse Solution) với nhiều hệ số bằng đúng 0.",
    "slideRef": "Slide Chương 3, Trang 51, 53-54"
  },
  {
    "id": 74,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Khẳng định nào sau đây là ĐÚNG khi so sánh về nghiệm đóng giữa Ridge và Lasso?",
    "options": [
      "Cả Ridge và Lasso đều có công thức nghiệm đóng giải tích trực tiếp",
      "Ridge có nghiệm đóng giải tích; Lasso KHÔNG có nghiệm đóng giải tích do hàm chuẩn L1 không khả vi tại 0",
      "Lasso có nghiệm đóng giải tích; Ridge không có",
      "Cả hai đều không có nghiệm đóng"
    ],
    "answer": 1,
    "explanation": "Chuẩn L1 chứa hàm trị tuyệt đối không khả vi tại 0 nên Lasso không thể giải ra công thức đóng trực tiếp mà phải dùng thuật toán tối ưu số (Coordinate Descent).",
    "slideRef": "Slide Chương 3, Trang 52, 57"
  },
  {
    "id": 75,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Mô hình Elastic Net kết hợp hai thành phần điều chuẩn nào?",
    "options": [
      "Chuẩn L0 và chuẩn L1",
      "Chuẩn L1 (Lasso) và chuẩn L2 (Ridge)",
      "Chuẩn L2 và hàm Sigmoid",
      "Entropy và chỉ số Gini"
    ],
    "answer": 1,
    "explanation": "Elastic Net kết hợp cả L1 và L2: J(w) = ||y - Xw||_2^2 + λ_1 ||w||_1 + λ_2 ||w||_2^2, tận dụng ưu điểm tạo nghiệm thưa của Lasso và tính ổn định của Ridge.",
    "slideRef": "Slide Chương 3, Trang 55-56"
  },
  {
    "id": 76,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hàm kích hoạt Sigmoid trong Logistic Regression có công thức và miền giá trị là gì?",
    "options": [
      "σ(z) = e^z / (1 + e^z), miền giá trị [-1, 1]",
      "σ(z) = 1 / (1 + e^(-z)), miền giá trị (0, 1)",
      "σ(z) = max(0, z), miền giá trị [0, +∞)",
      "σ(z) = 1 - e^(-z), miền giá trị [0, 1]"
    ],
    "answer": 1,
    "explanation": "Hàm Sigmoid là σ(z) = 1 / (1 + e^(-z)), nén toàn bộ giá trị thực z vào khoảng xác suất mở (0, 1).",
    "slideRef": "Slide Chương 3, Trang 60-61"
  },
  {
    "id": 77,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Trong Logistic Regression, tại giá trị điểm số z = w^T x = 0, xác suất dự đoán p = σ(z) bằng bao nhiêu?",
    "options": [
      "0.0",
      "0.5",
      "1.0",
      "-1.0"
    ],
    "answer": 1,
    "explanation": "Khi z = 0, σ(0) = 1 / (1 + e^0) = 1 / (1 + 1) = 0.5 (ngay tại biên quyết định).",
    "slideRef": "Slide Chương 3, Trang 61"
  },
  {
    "id": 78,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Tỷ số Odds trong bài toán phân loại nhị phân được định nghĩa như thế nào?",
    "options": [
      "Odds = p / (1 - p)",
      "Odds = (1 - p) / p",
      "Odds = p * (1 - p)",
      "Odds = ln(p)"
    ],
    "answer": 0,
    "explanation": "Odds là tỷ số giữa xác suất biến cố xảy ra (p) và xác suất biến cố không xảy ra (1 - p): Odds = p / (1 - p).",
    "slideRef": "Slide Chương 3, Trang 62"
  },
  {
    "id": 79,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Đại lượng nào sau đây trong Logistic Regression có mối quan hệ TUYẾN TÍNH với vector đặc trưng đầu vào x?",
    "options": [
      "Xác suất dự đoán p",
      "Log-odds (Logit): ln[p / (1 - p)]",
      "Hàm mất mát Binary Cross-Entropy",
      "Độ nhạy Recall"
    ],
    "answer": 1,
    "explanation": "Logit = ln[p / (1 - p)] = w^T x. Như vậy Log-odds thay đổi hoàn toàn tuyến tính theo các đặc trưng x dù bản thân xác suất p là phi tuyến.",
    "slideRef": "Slide Chương 3, Trang 63"
  },
  {
    "id": 80,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hàm mất mát Binary Cross-Entropy (BCE Loss) cho 1 mẫu dữ liệu có dạng nào?",
    "options": [
      "L = (y - p)^2",
      "L = - [y ln(p) + (1 - y) ln(1 - p)]",
      "L = |y - p|",
      "L = ln(y / p)"
    ],
    "answer": 1,
    "explanation": "Binary Cross-Entropy Loss: L = - [y ln(p) + (1 - y) ln(1 - p)]. Hàm này phạt cực nặng khi mô hình đưa ra dự đoán sai một cách tự tin.",
    "slideRef": "Slide Chương 3, Trang 69-70"
  },
  {
    "id": 81,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Tại sao bài toán tối ưu Logistic Regression không có nghiệm đóng giải tích như OLS?",
    "options": [
      "Vì ma trận X không khả nghịch",
      "Vì sự hiện diện của hàm phi tuyến Sigmoid làm hệ phương trình đạo hàm bằng 0 không thể tách w thành công thức đóng trực tiếp",
      "Vì Logistic Regression chỉ giải bài toán 1 chiều",
      "Vì hàm mất mát BCE không có đạo hàm"
    ],
    "answer": 1,
    "explanation": "Hàm Sigmoid phi tuyến khiến phương trình gradient = 0 không giải được nghiệm tường minh, buộc phải dùng thuật toán lặp Gradient Descent.",
    "slideRef": "Slide Chương 3, Trang 71"
  },
  {
    "id": 82,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Nếu ta thay đổi ngưỡng quyết định (Decision Threshold) trong Logistic Regression từ 0.5 xuống 0.3, điều gì sẽ xảy ra?",
    "options": [
      "Số lượng mẫu được dự đoán là Dương tính (lớp 1) sẽ TĂNG lên",
      "Số lượng mẫu được dự đoán là Dương tính sẽ GIẢM đi",
      "Không có thay đổi nào đối với kết quả dự đoán",
      "Mô hình chuyển thành bài toán hồi quy"
    ],
    "answer": 0,
    "explanation": "Hạ thấp ngưỡng quyết định (ví dụ từ 0.5 xuống 0.3) sẽ làm điều kiện để dự đoán lớp 1 dễ dàng hơn, khiến nhiều mẫu được gán nhãn Dương tính hơn (tăng Recall, giảm Precision).",
    "slideRef": "Slide Chương 3, Trang 77"
  },
  {
    "id": 83,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hàm Softmax được sử dụng trong bài toán nào sau đây?",
    "options": [
      "Hồi quy đơn biến",
      "Phân loại đa lớp rời rạc loại trừ lẫn nhau (Multi-class Classification)",
      "Giảm chiều dữ liệu phi tuyến",
      "Tính khoảng cách trong phân cụm K-Means"
    ],
    "answer": 1,
    "explanation": "Hàm Softmax chuyển đổi K điểm số tuyến tính thành phân phối xác suất trên K lớp có tổng bằng 1, chuẩn mực cho phân loại đa lớp.",
    "slideRef": "Slide Chương 3, Trang 80-81"
  },
  {
    "id": 84,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Độ đo sai số MAE (Mean Absolute Error) có đặc điểm nổi bật nào so với MSE?",
    "options": [
      "MAE phạt mạnh hơn rất nhiều đối với các sai số lớn",
      "MAE cùng đơn vị với biến mục tiêu và ít bị chi phối bởi các giá trị ngoại lai hơn MSE",
      "MAE luôn có giá trị lớn hơn MSE",
      "MAE có đạo hàm liên tục tại mọi điểm"
    ],
    "answer": 1,
    "explanation": "MAE đo trung bình độ lớn tuyệt đối của sai số, tăng tuyến tính theo sai số nên ít nhạy cảm với ngoại lai hơn so với bình phương sai số của MSE.",
    "slideRef": "Slide Chương 3, Trang 87, 90, 94"
  },
  {
    "id": 85,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Độ đo RMSE (Root Mean Squared Error) được định nghĩa là gì?",
    "options": [
      "Căn bậc hai của MAE",
      "Căn bậc hai của MSE: √[(1/n) Σ (y_i - ŷ_i)^2]",
      "Nghịch đảo của hệ số R^2",
      "Trung bình của bình phương phần dư"
    ],
    "answer": 1,
    "explanation": "RMSE là căn bậc hai của MSE, có ưu điểm cùng đơn vị đo với biến mục tiêu y nhưng vẫn giữ đặc tính phạt nặng các sai số lớn.",
    "slideRef": "Slide Chương 3, Trang 89, 94"
  },
  {
    "id": 86,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hệ số xác định R^2 (R-squared) trong bài toán hồi quy biểu thị điều gì?",
    "options": [
      "Sai số tuyệt đối trung bình của mô hình",
      "Tỷ lệ biến thiên của biến mục tiêu y được giải thích bởi các đặc trưng trong mô hình",
      "Xác suất mô hình dự đoán chính xác trên dữ liệu kiểm thử",
      "Khoảng cách Euclidean giữa các điểm dữ liệu"
    ],
    "answer": 1,
    "explanation": "R^2 = 1 - SS_res / SS_tot, đo lường tỷ lệ phần trăm phương sai của y được giải thích bởi mô hình so với mức baseline đoán trung bình.",
    "slideRef": "Slide Chương 3, Trang 92, 94"
  },
  {
    "id": 87,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Tại sao người ta sử dụng Adjusted R^2 (R^2 hiệu chỉnh) thay vì R^2 khi so sánh các mô hình hồi quy đa biến?",
    "options": [
      "Vì R^2 luôn có giá trị âm",
      "Vì việc thêm bừa bất kỳ biến đặc trưng nào vào mô hình cũng làm R^2 tăng hoặc giữ nguyên; Adjusted R^2 áp dụng hình phạt theo số lượng biến dư thừa",
      "Vì R^2 không thể tính được khi n > p",
      "Vì Adjusted R^2 đo lường độ chính xác phân loại"
    ],
    "answer": 1,
    "explanation": "Adjusted R^2 điều chỉnh theo số quan sát n và số biến p; nếu thêm vào một biến vô dụng không cải thiện chất lượng mô hình, Adjusted R^2 sẽ bị giảm xuống.",
    "slideRef": "Slide Chương 3, Trang 93"
  },
  {
    "id": 88,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Trong Ma trận nhầm lẫn (Confusion Matrix), định nghĩa của False Positive (FP) là gì?",
    "options": [
      "Thực tế là Dương, mô hình đoán là Dương",
      "Thực tế là Âm, mô hình đoán là Dương (Báo động giả / Sai lầm loại I)",
      "Thực tế là Dương, mô hình đoán là Âm (Bỏ sót / Sai lầm loại II)",
      "Thực tế là Âm, mô hình đoán là Âm"
    ],
    "answer": 1,
    "explanation": "False Positive (FP) là trường hợp thực tế là Âm tính nhưng mô hình lại dự đoán nhầm thành Dương tính (báo động giả).",
    "slideRef": "Slide Chương 3, Trang 95"
  },
  {
    "id": 89,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Tại sao độ đo Accuracy (Độ chính xác) có thể gây ngộ nhận nguy hiểm trong bài toán dữ liệu mất cân bằng (Imbalanced Data)?",
    "options": [
      "Vì Accuracy không thể tính được khi có nhiều hơn 2 lớp",
      "Vì một mô hình tầm thường luôn dự đoán lớp chiếm đa số vẫn có thể đạt Accuracy rất cao trong khi hoàn toàn không phát hiện được lớp thiểu số",
      "Vì Accuracy luôn có giá trị nhỏ hơn Precision",
      "Vì công thức của Accuracy chia cho 0"
    ],
    "answer": 1,
    "explanation": "Ví dụ trong tập dữ liệu có 99% người khỏe mạnh và 1% người ung thư, mô hình đoán tất cả là khỏe mạnh vẫn đạt 99% Accuracy nhưng bỏ sót 100% người bệnh.",
    "slideRef": "Slide Chương 3, Trang 96, 101"
  },
  {
    "id": 90,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Công thức tính Precision (Độ chuẩn xác) là gì?",
    "options": [
      "Precision = TP / (TP + FN)",
      "Precision = TP / (TP + FP)",
      "Precision = TN / (TN + FP)",
      "Precision = (TP + TN) / Tổng số mẫu"
    ],
    "answer": 1,
    "explanation": "Precision = TP / (TP + FP), trả lời câu hỏi: Trong số tất cả các mẫu mô hình dự đoán là Dương tính, có bao nhiêu mẫu thực sự Dương tính.",
    "slideRef": "Slide Chương 3, Trang 97"
  },
  {
    "id": 91,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Công thức tính Recall (Độ nhạy / Sensitivity) là gì?",
    "options": [
      "Recall = TP / (TP + FP)",
      "Recall = TP / (TP + FN)",
      "Recall = TN / (TN + FN)",
      "Recall = FP / (TP + FP)"
    ],
    "answer": 1,
    "explanation": "Recall = TP / (TP + FN), trả lời câu hỏi: Trong số tất cả các mẫu thực sự là Dương tính, mô hình đã tìm ra được bao nhiêu mẫu.",
    "slideRef": "Slide Chương 3, Trang 98"
  },
  {
    "id": 92,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Trong bài toán phát hiện bệnh ung thư hiểm nghèo hoặc phát hiện bom mìn, độ đo nào quan trọng nhất cần được tối đa hóa?",
    "options": [
      "Precision",
      "Recall",
      "Specificity",
      "Adjusted R^2"
    ],
    "answer": 1,
    "explanation": "Trong bài toán y tế nguy hiểm, chi phí của việc bỏ sót bệnh nhân ung thư (False Negative) là tính mạng con người, do đó bắt buộc phải tối đa hóa Recall.",
    "slideRef": "Slide Chương 3, Trang 98, 101"
  },
  {
    "id": 93,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Trong bài toán xây dựng bộ lọc thư rác đưa vào Inbox, độ đo nào cần được ưu tiên cao nhất?",
    "options": [
      "Recall",
      "Precision",
      "MSE",
      "MAE"
    ],
    "answer": 1,
    "explanation": "Nếu đưa một email công việc quan trọng nhầm vào hòm thư rác (False Positive), người dùng có thể mất hợp đồng; do đó phải ưu tiên Precision cao.",
    "slideRef": "Slide Chương 3, Trang 97, 101"
  },
  {
    "id": 94,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Độ đo F1-Score là sự kết hợp của Precision và Recall theo dạng trung bình nào?",
    "options": [
      "Trung bình cộng (Arithmetic Mean)",
      "Trung bình hình học (Geometric Mean)",
      "Trung bình điều hòa (Harmonic Mean): 2 * (P * R) / (P + R)",
      "Trung bình có trọng số theo số mẫu"
    ],
    "answer": 2,
    "explanation": "F1-score là trung bình điều hòa của Precision và Recall: F1 = 2 * (Precision * Recall) / (Precision + Recall).",
    "slideRef": "Slide Chương 3, Trang 99"
  },
  {
    "id": 95,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Cho kết quả phân loại: TP = 80, FP = 20, FN = 20, TN = 80. Độ đo Precision và Recall lần lượt là bao nhiêu?",
    "options": [
      "Precision = 0.8, Recall = 0.8",
      "Precision = 0.75, Recall = 0.85",
      "Precision = 0.8, Recall = 0.5",
      "Precision = 0.9, Recall = 0.8"
    ],
    "answer": 0,
    "explanation": "Precision = 80 / (80 + 20) = 80 / 100 = 0.8; Recall = 80 / (80 + 20) = 80 / 100 = 0.8.",
    "slideRef": "Slide Chương 3, Trang 97-98"
  },
  {
    "id": 96,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Trong bài toán phân loại đa lớp, sự khác biệt giữa Macro-average và Micro-average là gì?",
    "options": [
      "Macro tính riêng metric cho từng lớp rồi lấy trung bình cộng bình đẳng; Micro cộng dồn toàn bộ TP, FP, FN trên mọi lớp rồi mới tính",
      "Macro bị chi phối bởi lớp đa số; Micro coi các lớp bình đẳng",
      "Macro chỉ dùng cho hồi quy; Micro dùng cho phân loại",
      "Cả hai luôn cho ra cùng một con số kết quả"
    ],
    "answer": 0,
    "explanation": "Macro coi mọi lớp quan trọng ngang nhau (thích hợp kiểm tra lớp hiếm); Micro cộng dồn mẫu trên toàn bộ dataset nên bị chi phối bởi lớp chiếm đa số.",
    "slideRef": "Slide Chương 3, Trang 100"
  },
  {
    "id": 97,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Kỹ thuật Stratified Split (Chia phân tầng) mang lại lợi ích gì?",
    "options": [
      "Làm tăng số lượng dữ liệu lên gấp đôi",
      "Giữ nguyên tỷ lệ phân bố giữa các lớp ở tập Train và Test giống hệt như tập dữ liệu gốc",
      "Tự động điền các giá trị thiếu trong dữ liệu",
      "Giúp mô hình không bao giờ bị Overfitting"
    ],
    "answer": 1,
    "explanation": "Stratified Split đảm bảo mỗi tập con (train, test) đều giữ nguyên tỷ lệ mẫu của từng lớp, cực kỳ cần thiết khi dữ liệu mất cân bằng.",
    "slideRef": "Slide Chương 3, Trang 103"
  },
  {
    "id": 98,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Trong K-Fold Cross-Validation với K = 5, quá trình đánh giá diễn ra như thế nào?",
    "options": [
      "Chia dữ liệu làm 5 phần; lặp 5 lần, mỗi lần dùng 4 phần để huấn luyện và 1 phần để kiểm thử",
      "Lấy ngẫu nhiên 5 mẫu để đánh giá",
      "Huấn luyện 5 mô hình khác nhau trên toàn bộ dữ liệu",
      "Chỉ kiểm thử trên 20% dữ liệu 1 lần duy nhất"
    ],
    "answer": 0,
    "explanation": "K-Fold chia dataset thành K phần bằng nhau, luân phiên dùng K - 1 phần để train và 1 phần để validation, lặp lại K lượt.",
    "slideRef": "Slide Chương 3, Trang 105"
  },
  {
    "id": 99,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Trường hợp nào sau đây là một ví dụ ĐIỂN HÌNH của hiện tượng Data Leakage (Rò rỉ dữ liệu)?",
    "options": [
      "Tính toán Mean và Std trên toàn bộ tập dữ liệu trước khi chia Train và Test",
      "Chỉ tính Mean và Std trên tập Train rồi áp dụng transform lên tập Test",
      "Sử dụng Stratified Split cho dữ liệu mất cân bằng",
      "Áp dụng K-Fold Cross Validation trên tập Train"
    ],
    "answer": 0,
    "explanation": "Tính toán thống kê (như Mean, Std, Min, Max) trên toàn bộ dữ liệu trước khi split sẽ khiến thông tin của tập Test bị rò rỉ vào tập Train, tạo điểm số ảo.",
    "slideRef": "Slide Chương 3, Trang 111"
  },
  {
    "id": 100,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Leave-One-Out Cross-Validation (LOO) là trường hợp đặc biệt của K-Fold khi nào?",
    "options": [
      "Khi K = 2",
      "Khi K = 10",
      "Khi K = n (với n là tổng số mẫu trong tập dữ liệu)",
      "Khi K = 1"
    ],
    "answer": 2,
    "explanation": "Leave-One-Out là K-Fold với K bằng đúng số lượng mẫu n (mỗi vòng dùng n - 1 mẫu để train và đúng 1 mẫu để test).",
    "slideRef": "Slide Chương 3, Trang 106"
  },
  {
    "id": 101,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Khi nào ta nên sử dụng Repeated Hold-Out thay vì một lần Hold-Out duy nhất?",
    "options": [
      "Khi muốn giảm chi phí tính toán xuống mức thấp nhất",
      "Khi muốn giảm thiểu sự may rủi do việc chia ngẫu nhiên một lần duy nhất gây ra",
      "Khi tập dữ liệu có kích thước hàng tỷ dòng",
      "Khi mô hình không có siêu tham số"
    ],
    "answer": 1,
    "explanation": "Repeated Hold-Out thực hiện chia ngẫu nhiên nhiều lần và lấy trung bình kết quả để giảm thiểu độ bất định của một lần chia đơn lẻ.",
    "slideRef": "Slide Chương 3, Trang 104"
  },
  {
    "id": 102,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Biên quyết định (Decision Boundary) của mô hình Logistic Regression chuẩn với ngưỡng 0.5 là một bề mặt có dạng gì?",
    "options": [
      "Đường cong Parabol",
      "Đường tròn bao quanh tâm",
      "Siêu phẳng tuyến tính thỏa mãn phương trình w^T x = 0",
      "Đường gấp khúc bậc thang"
    ],
    "answer": 2,
    "explanation": "Biên quyết định ứng với ngưỡng xác suất 0.5 là bề mặt z = w^T x = 0, một siêu phẳng tuyến tính trong không gian đặc trưng.",
    "slideRef": "Slide Chương 3, Trang 74, 77"
  },
  {
    "id": 103,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Để so sánh hiệu năng của nhiều mô hình khác nhau một cách công bằng (Fair Comparison), ta phải tuân thủ nguyên tắc nào?",
    "options": [
      "Dùng các tập chia train/test khác nhau cho từng mô hình",
      "Dùng cùng một tập chia dữ liệu (hoặc cùng các fold) và cùng một pipeline tiền xử lý cho mọi mô hình",
      "Đánh giá mỗi mô hình trên một độ đo hoàn toàn khác nhau",
      "Cho phép một số mô hình được học trên tập Test"
    ],
    "answer": 1,
    "explanation": "So sánh công bằng đòi hỏi mọi mô hình phải được thử thách trên cùng một tập dữ liệu, cùng cách chia và cùng độ đo mục tiêu.",
    "slideRef": "Slide Chương 3, Trang 110"
  },
  {
    "id": 104,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Khi bài toán phân loại đa lớp có các lớp không loại trừ lẫn nhau (Multi-label Classification, 1 mẫu có thể thuộc nhiều lớp cùng lúc), ta nên thiết kế đầu ra như thế nào?",
    "options": [
      "Dùng 1 hàm Softmax trên toàn bộ các lớp",
      "Dùng K nơ-ron độc lập với hàm kích hoạt Sigmoid trên từng nơ-ron",
      "Dùng hồi quy OLS tuyến tính",
      "Dùng phân cụm K-Means"
    ],
    "answer": 1,
    "explanation": "Với Multi-label, mỗi lớp là một bài toán nhị phân độc lập (Có/Không), do đó sử dụng K nơ-ron Sigmoid độc lập thay vì Softmax.",
    "slideRef": "Slide Chương 3, Trang 80"
  },
  {
    "id": 105,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá mô hình",
    "question": "Hiện tượng Overfitting trong hồi quy tuyến tính thường thể hiện qua đặc điểm nào của các hệ số trọng số w?",
    "options": [
      "Tất cả các hệ số w đều bằng 0",
      "Các hệ số w nhận giá trị cực lớn mang dấu trái ngược nhau để cố gắng đi qua từng điểm dữ liệu huấn luyện",
      "Mọi hệ số w đều là số nguyên dương",
      "Hệ số bias b luôn bằng 1"
    ],
    "answer": 1,
    "explanation": "Khi quá khớp hoặc đa cộng tuyến, các hệ số w thường bị phóng đại cực lớn và nhạy cảm, điều mà Ridge và Lasso sinh ra để kìm hãm.",
    "slideRef": "Slide Chương 3, Trang 41, 49"
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
    "explanation": "Nút lá là điểm kết thúc của đường đi dự đoán, lưu nhãn lớp dự đoán hoặc xác suất các lớp của mẫu rơi vào đó.",
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
    "explanation": "Mỗi phép chia của cây kiểm tra một đặc trưng đơn lẻ (x_j <= t), tạo thành các lát cắt song song trực giao với các trục tọa độ.",
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
    "explanation": "Cây chỉ so sánh thứ tự lớn hơn / nhỏ hơn của giá trị đặc trưng, do đó thang đo độ lớn của biến hoàn toàn không ảnh hưởng đến cấu trúc cây.",
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
    "explanation": "Với 2 lớp cân bằng p=0.5, H(S) = - (0.5 log2 0.5 + 0.5 log2 0.5) = 1.0 (độ hỗn tạp tối đa).",
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
    "explanation": "Khi một lớp có xác suất bằng 1 (thuần khiết hoàn toàn), không còn sự bất định nào, do đó H(S) = - 1 * log2(1) = 0.",
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
    "explanation": "Information Gain đo mức giảm độ hỗn tạp sau khi phân chia theo thuộc tính A: IG(S, A) = H(S) - H(S|A).",
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
    "explanation": "Gini = 1 - Σ(p_k^2) = 1 - (0.5^2 + 0.5^2) = 1 - 0.5 = 0.5.",
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
    "explanation": "Khi nút chỉ chứa 1 lớp, p_1 = 1, Gini = 1 - 1^2 = 0.",
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
    "explanation": "ID3 sử dụng Information Gain dựa trên Entropy; CART sử dụng Gini cho phân loại, phương sai cho hồi quy và luôn tạo phép chia nhị phân 2 nhánh.",
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
    "explanation": "Với bài toán hồi quy, nút lá dự đoán một giá trị liên tục bằng giá trị trung bình của các mẫu thuộc nút lá đó.",
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
    "explanation": "Outlook có IG = 0.25 (lớn nhất so với Humidity 0.16, Wind 0.05, Temperature 0.03) nên được chọn làm nút gốc của cây.",
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
    "explanation": "Cây sâu có Bias thấp nhưng Variance rất cao, dễ thuộc lòng cả nhiễu và rất nhạy cảm với việc thay đổi dữ liệu huấn luyện.",
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
    "explanation": "Pre-pruning đặt ra các điều kiện dừng sớm như giới hạn độ sâu tối đa, số mẫu tối thiểu ở nút lá để ngăn cây mọc quá sâu.",
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
    "explanation": "Cây nông có ít luật nên đơn giản (High Bias, Low Variance); Cây sâu biểu diễn linh hoạt quan hệ phức tạp nhưng dễ quá khớp (Low Bias, High Variance).",
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
    "explanation": "Ba điều kiện: 1. Năng lực dự đoán > ngẫu nhiên; 2. Đa dạng (không cùng mắc một lỗi); 3. Quy tắc kết hợp hợp lý.",
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
    "explanation": "Hard Voting đếm số phiếu nhãn rời rạc; Soft Voting lấy trung bình xác suất của từng lớp rồi chọn lớp có xác suất cao nhất (thường cho kết quả tốt hơn).",
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
    "explanation": "Bootstrap lấy ngẫu nhiên n mẫu có hoàn lại từ tập n mẫu ban đầu, cho phép một mẫu có thể được chọn nhiều lần.",
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
    "explanation": "Bagging huấn luyện độc lập và song song nhiều mô hình trên các tập mẫu bootstrap riêng lẻ, sau đó tổng hợp kết quả.",
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
    "explanation": "Nhờ trung bình hóa dự đoán của nhiều mô hình có phương sai cao, Bagging triệt tiêu các dao động riêng lẻ và làm GIẢM VARIANCE hiệu quả.",
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
    "explanation": "Xác suất một mẫu không được chọn sau n lượt rút là (1 - 1/n)^n -> 1/e ≈ 0.368 (36.8%).",
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
    "explanation": "Mỗi cây có khoảng 36.8% mẫu OOB không dùng để train cây đó; tổng hợp các dự đoán OOB cho phép đánh giá hiệu năng mô hình hoàn toàn miễn phí.",
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
    "explanation": "Ngoài bootstrap dữ liệu, Random Forest chỉ xét ngẫu nhiên một tập con đặc trưng (thường là √p) tại mỗi nút để tìm phép chia tốt nhất.",
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
    "explanation": "Nếu luôn xét mọi đặc trưng, các cây sẽ có cấu trúc rất giống nhau (tương quan cao). Lấy mẫu ngẫu nhiên đặc trưng buộc các cây phải độc lập và đa dạng.",
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
    "explanation": "Extra Trees tăng tính ngẫu nhiên bằng cách chọn ngẫu nhiên cả ngưỡng phân chia trên các thuộc tính, giúp huấn luyện nhanh hơn và giảm variance thêm nữa.",
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
    "explanation": "Bagging xây dựng các cây độc lập song song; Boosting xây dựng chuỗi mô hình tuần tự, mỗi mô hình mới tập trung khắc phục điểm yếu của tập hợp hiện tại.",
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
    "explanation": "Boosting sử dụng các bộ học yếu (High Bias) và kết hợp tuần tự để làm GIẢM BIAS, tạo ra mô hình có độ chính xác cao.",
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
    "explanation": "Boosting bắt đầu từ các mô hình cơ sở rất đơn giản, thường là các cây rất nông (Decision Stumps) chỉ cần có độ chính xác nhỉnh hơn đoán ngẫu nhiên.",
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
    "explanation": "Sau mỗi vòng, AdaBoost tăng trọng số của các mẫu bị đoán sai để buộc mô hình kế tiếp phải tập trung học các trường hợp khó này.",
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
    "explanation": "Trọng số alpha_j = 0.5 * ln[(1 - r_j) / r_j]. Mô hình nào có tỷ lệ sai số r_j càng nhỏ thì alpha_j càng lớn, tiếng nói trong biểu quyết càng nặng ký.",
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
    "explanation": "Gradient Boosting điều chỉnh mô hình bằng cách cho cây mới học trực tiếp phần dư sai số (pseudo-residuals), tức hướng âm gradient của loss function.",
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
    "explanation": "Gradient Boosting cộng dồn dự đoán của cây mới h_k(x) có nhân với hệ số co tốc độ học η (learning rate): F_k(x) = F_{k-1}(x) + η * h_k(x).",
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
    "explanation": "Learning rate η điều khiển bước đi dọc theo gradient. Giá trị η nhỏ đóng vai trò như regularization giúp mô hình bền vững hơn.",
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
    "explanation": "XGBoost và LightGBM là hai đại diện xuất sắc nhất của họ mô hình Gradient Boosting nâng cao được xếp trong đề cương.",
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
    "explanation": "Do cơ chế liên tục tăng trọng số hoặc khớp phần dư của mẫu sai, Boosting rất dễ bị cuốn theo các mẫu nhiễu/ngoại lai.",
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
    "explanation": "Thuật toán duyệt qua các giá trị ngưỡng tiềm năng giữa các điểm dữ liệu và chọn cặp (đặc trưng, ngưỡng t) làm giảm Gini nhiều nhất.",
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
    "explanation": "Random Forest tổng hợp dự đoán của tất cả các cây thành viên bằng biểu quyết đa số (Hard voting) hoặc trung bình xác suất (Soft voting).",
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
    "explanation": "Non-parametric không có nghĩa là không có tham số, mà là dạng hàm và số lượng tham số không bị ấn định cố định trước (như trong hồi quy tuyến tính) mà phát triển theo dữ liệu.",
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
    "explanation": "Hậu cắt tỉa dùng tập thẩm định (Validation set) để kiểm tra xem việc tỉa bớt một nhánh có làm giảm hiệu năng tổng quát hóa hay không.",
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
    "explanation": "Decision Tree là mô hình tiêu biểu có cấu trúc luật Nếu-Thì trực quan và hoàn toàn không bị ảnh hưởng bởi thang đo dữ liệu.",
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
    "explanation": "Cây đơn lẻ dễ trực quan hóa (White-box) nhưng variance cao; Random Forest là ensemble gồm hàng trăm cây nên bền vững, chính xác cao nhưng hoạt động như hộp đen (Black-box).",
    "slideRef": "Slide Chương 4, Trang 67, 114"
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
    "id": 211,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Nếu ma trận hiệp phương sai X^T X không khả nghịch (singular/suy biến do hiện tượng đa cộng tuyến hoàn hảo), nghiệm của OLS có thể giải quyết bằng cách nào?",
    "options": [
      "Bắt buộc phải bỏ bài toán và chuyển sang mô hình phi tuyến",
      "Sử dụng ma trận giả nghịch đảo Moore-Penrose (X^+) hoặc áp dụng chính quy hóa Ridge Regression",
      "Tăng số bước lặp Epoch trong Gradient Descent",
      "Loại bỏ toàn bộ nhãn y và chuyển sang bài toán không giám sát"
    ],
    "answer": 1,
    "explanation": "Khi X^T X suy biến (det = 0), ta không thể tính nghịch đảo thông thường. Cách xử lý kinh điển là dùng ma trận giả nghịch đảo Moore-Penrose X^+ hoặc thêm thành phần lambda * I (chính quy hóa L2 Ridge) để biến ma trận thành luôn khả nghịch.",
    "slideRef": "Slide Chương 3, Trang 19-21, 46"
  },
  {
    "id": 212,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Khi áp dụng hàm cơ sở phi tuyến phi(x) (như hồi quy đa thức bậc cao y = w0 + w1*x + w2*x^2), tại sao mô hình này vẫn được gọi là 'Hồi quy Tuyến tính'?",
    "options": [
      "Vì đồ thị biểu diễn hàm số của nó luôn luôn là một đường thẳng",
      "Vì mô hình tuyến tính theo các trọng số w (tham số cần học), mặc dù phi tuyến theo biến đầu vào x",
      "Vì dữ liệu ban đầu x là các giá trị tuyến tính",
      "Vì hàm mất mát bắt buộc phải là một hàm tuyến tính"
    ],
    "answer": 1,
    "explanation": "Định nghĩa mô hình tuyến tính trong Học máy dựa vào tính tuyến tính đối với vector trọng số w: y = w^T * phi(x). Dù phi(x) có biến đổi không gian thành phi tuyến phức tạp đến đâu, mối quan hệ giữa y và w vẫn là bậc nhất tuyến tính.",
    "slideRef": "Slide Chương 3, Trang 24-25"
  },
  {
    "id": 213,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Dưới giả định thống kê nào thì nghiệm Cực đại hóa hợp lý (Maximum Likelihood Estimation - MLE) trong hồi quy hoàn toàn tương đương với nghiệm Bình phương tối thiểu (OLS)?",
    "options": [
      "Nhiễu epsilon tuân theo phân phối đều (Uniform Distribution)",
      "Nhiễu epsilon tuân theo phân phối Laplace",
      "Nhiễu epsilon là các biến ngẫu nhiên độc lập cùng tuân theo phân phối chuẩn N(0, sigma^2)",
      "Dữ liệu đầu vào x tuân theo phân phối Bernoulli"
    ],
    "answer": 2,
    "explanation": "Khi giả định sai số nhiễu epsilon ~ N(0, sigma^2) độc lập, hàm log-likelihood sẽ tỷ lệ thuận với số âm của tổng bình phương phần dư (- sum (y - w^T x)^2). Do đó cực đại hóa likelihood đồng nghĩa cực tiểu hóa sai số bình phương OLS.",
    "slideRef": "Slide Chương 3, Trang 26-28"
  },
  {
    "id": 214,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Xét theo ý nghĩa hình học của Hồi quy tuyến tính OLS, vector dự đoán y_hat = X * w_OLS đại diện cho yếu tố nào?",
    "options": [
      "Là vector đối xứng của y qua gốc tọa độ",
      "Là hình chiếu vuông góc (orthogonal projection) của vector nhãn thực tế y lên không gian cột của ma trận dữ liệu X",
      "Là tiếp tuyến của mặt phẳng dữ liệu tại điểm trung bình",
      "Là vector có độ dài ngắn nhất trong toàn bộ không gian đa chiều"
    ],
    "answer": 1,
    "explanation": "Hình học OLS chỉ ra rằng để khoảng cách ||y - Xw|| đạt cực tiểu thì vector sai số e = y - Xw phải vuông góc với không gian con span(X). Do đó y_hat = Xw chính là hình chiếu trực giao (orthogonal projection) của y lên span(X).",
    "slideRef": "Slide Chương 3, Trang 29-30"
  },
  {
    "id": 215,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Độ phức tạp tính toán khi tìm nghiệm đóng OLS bằng công thức w = (X^T X)^(-1) X^T y với N mẫu và d đặc trưng xấp xỉ là bao nhiêu?",
    "options": [
      "O(N + d)",
      "O(N * log(d))",
      "O(d^3 + N * d^2)",
      "O(N^3 * d)"
    ],
    "answer": 2,
    "explanation": "Tính ma trận X^T X tốn O(N * d^2), phép nghịch đảo ma trận d x d tốn O(d^3). Tổng độ phức tạp là O(d^3 + N * d^2). Khi d rất lớn (hàng chục nghìn đặc trưng), việc nghịch đảo O(d^3) là bất khả thi, buộc phải dùng Gradient Descent.",
    "slideRef": "Slide Chương 3, Trang 31"
  },
  {
    "id": 216,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Khi nào ta NÊN ưu tiên sử dụng Elastic Net thay vì dùng riêng biệt Lasso (L1) hoặc Ridge (L2)?",
    "options": [
      "Khi tập dữ liệu chỉ có đúng 1 đặc trưng",
      "Khi số chiều đặc trưng d lớn hơn nhiều số mẫu N (d >> N), hoặc các biến có hiện tượng tương quan nhóm mạnh (collinear groups)",
      "Khi dữ liệu hoàn toàn không có nhiễu",
      "Khi biến mục tiêu là nhãn nhị phân 0 và 1"
    ],
    "answer": 1,
    "explanation": "Lasso chỉ có thể chọn tối đa N đặc trưng khi d > N và thường chỉ chọn ngẫu nhiên 1 biến trong nhóm biến tương quan cao. Elastic Net kết hợp cả L1 và L2 giúp chọn được toàn bộ nhóm biến tương quan (grouping effect) và xử lý tốt trường hợp d >> N.",
    "slideRef": "Slide Chương 3, Trang 49-51"
  },
  {
    "id": 217,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Trong Hồi quy Logistic, đạo hàm của hàm mất mát Binary Cross-Entropy theo trọng số w_j có dạng toán học là gì?",
    "options": [
      "dJ/dw_j = sum( (y_hat_i - y_i) * x_ij )",
      "dJ/dw_j = sum( (y_hat_i - y_i)^2 * x_ij )",
      "dJ/dw_j = sum( y_hat_i * (1 - y_hat_i) )",
      "dJ/dw_j = exp(w_j) / sum(exp(w_k))"
    ],
    "answer": 0,
    "explanation": "Rất thú vị và là bẫy thi thường gặp: dù hàm kích hoạt Sigmoid có đạo hàm sigma*(1 - sigma), khi kết hợp với hàm Cross-Entropy, phần đạo hàm này bị triệt tiêu, tạo ra công thức gradient đạo hàm giống hệt như hồi quy tuyến tính: sum (y_hat - y) * x.",
    "slideRef": "Slide Chương 3, Trang 62-65"
  },
  {
    "id": 218,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Trong bài toán phân lớp đa lớp có mất cân bằng dữ liệu, nhận định nào sau đây là ĐÚNG về Macro-F1 và Micro-F1?",
    "options": [
      "Micro-F1 coi trọng mọi lớp bằng nhau bất kể kích thước mẫu",
      "Macro-F1 tính F1 riêng biệt cho từng lớp rồi lấy trung bình cộng không trọng số, nên phản ánh tốt hiệu năng trên các lớp thiểu số",
      "Micro-F1 và Macro-F1 luôn luôn cho cùng một giá trị số học",
      "Macro-F1 luôn bằng với chỉ số Accuracy"
    ],
    "answer": 1,
    "explanation": "Macro-F1 = (F1_1 + F1_2 + ... + F1_C) / C, không phụ thuộc số mẫu mỗi lớp nên đánh giá công bằng cho các lớp hiếm. Micro-F1 tổng hợp toàn bộ TP, FP, FN rồi mới tính nên bị chi phối mạnh bởi các lớp chiếm số đông (thường bằng Accuracy).",
    "slideRef": "Slide Chương 3, Trang 89-92"
  },
  {
    "id": 219,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Một mô hình chẩn đoán bệnh ung thư dự đoán TẤT CẢ bệnh nhân đều 'Không mắc bệnh' (Negative). Tập dữ liệu gồm 98 người khỏe (Negative) và 2 người bệnh (Positive). Chỉ số nào sau đây sẽ bằng 0?",
    "options": [
      "Accuracy của toàn mô hình",
      "Specificity của lớp Negative",
      "Recall (Độ nhạy) của lớp Positive (Mắc bệnh)",
      "Tổng số mẫu dự đoán đúng (TN)"
    ],
    "answer": 2,
    "explanation": "Vì mô hình không phát hiện được bất kỳ ca bệnh nào, True Positive (TP) = 0. Do đó Recall = TP / (TP + FN) = 0 / 2 = 0%. Trong khi đó, Accuracy của mô hình vẫn hiển thị 'đẹp đẽ' là 98/100 = 98%, đây là bẫy đánh lừa kinh điển của Accuracy.",
    "slideRef": "Slide Chương 3, Trang 84-86"
  },
  {
    "id": 220,
    "chapter": 3,
    "chapterTitle": "Chương 3: Các mô hình tuyến tính và Đánh giá",
    "question": "Điểm biểu diễn một mô hình phân loại HOÀN HẢO (Perfect Classifier) trên không gian ROC nằm ở tọa độ nào?",
    "options": [
      "(FPR = 1.0, TPR = 1.0) ở góc trên bên phải",
      "(FPR = 0.0, TPR = 1.0) ở góc trên bên trái",
      "(FPR = 0.0, TPR = 0.0) ở gốc tọa độ",
      "(FPR = 0.5, TPR = 0.5) ở chính giữa đường chéo"
    ],
    "answer": 1,
    "explanation": "Mô hình lý tưởng không có bất kỳ kết quả dương tính giả nào (FPR = 0) và phát hiện chính xác 100% các mẫu dương tính thật (TPR = 1). Tọa độ này là (0, 1) ở góc trên bên trái, với diện tích dưới đường cong AUC = 1.0.",
    "slideRef": "Slide Chương 3, Trang 96-98"
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
    "explanation": "Nếu thuộc tính có nhiều giá trị phân biệt như ID, mỗi nhánh con chỉ chứa đúng 1 mẫu (thuần khiết tuyệt đối, Entropy = 0), dẫn đến Information Gain tối đa giả tạo. Thuật toán C4.5 đã khắc phục nhược điểm này bằng cách chia cho Split Information để tạo ra Gain Ratio.",
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
    "explanation": "Information Gain đạt cực đại là dấu hiệu phân chia tốt chứ không phải điều kiện dừng. Các điều kiện dừng chuẩn gồm: nút thuần khiết (pure node), hết thuộc tính phân chia, đạt max_depth, hoặc số mẫu nhỏ hơn min_samples_split/min_samples_leaf.",
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
    "explanation": "Pre-pruning (early stopping) dừng mở rộng nút khi chưa đạt yêu cầu (có thể dừng quá sớm). Post-pruning cho phép cây phát triển đầy đủ đến mức overfit, sau đó đánh giá từ lá ngược lên và cắt bỏ các nhánh không làm tăng độ chính xác trên tập kiểm định.",
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
    "explanation": "Thuật toán sắp xếp n giá trị liên tục thành v_1 <= v_2 <= ... <= v_n. Sau đó tạo ra (n - 1) ngưỡng ứng viên t_i = (v_i + v_{i+1}) / 2, tính toán Information Gain hoặc Gini cho từng ngưỡng để chọn ra ngưỡng tối ưu nhất.",
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
    "explanation": "Theo khuyến nghị kinh điển của Leo Breiman: đối với bài toán Classification, m = floor(sqrt(d)); đối với bài toán Regression, m = floor(d / 3). Việc lấy mẫu ngẫu nhiên này giúp khử tương quan giữa các cây trong rừng.",
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
    "explanation": "Đối với bài toán Hồi quy, giá trị khuyến nghị tiêu chuẩn trong tài liệu và thư viện scikit-learn là m = floor(d / 3), kết hợp kích thước nút lá tối thiểu (min_samples_leaf) thường bằng 5.",
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
    "explanation": "Trong Bootstrap, xấp xỉ 36.8% mẫu không bao giờ xuất hiện trong tập huấn luyện của cây đó (gọi là OOB samples). Ta dùng chính các mẫu OOB này để kiểm tra cây tương ứng. Kết quả OOB Error tương đương với phương pháp K-fold Cross-Validation nhưng không tốn công chia tập dữ liệu.",
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
    "explanation": "Công thức alpha_m = 0.5 * ln( (1 - epsilon_m) / epsilon_m ). Nếu mô hình rất chuẩn xác (epsilon_m rất nhỏ), alpha_m sẽ rất lớn, đóng góp tiếng nói quan trọng. Nếu mô hình đoán như tung đồng xu (epsilon_m = 0.5), alpha_m = 0.",
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
    "explanation": "Một weak learner chỉ cần có hiệu năng nhỉnh hơn việc đoán mò ngẫu nhiên (better than random guessing, accuracy > 50%). Ví dụ kinh điển là Decision Stump (cây quyết định chỉ có đúng 1 nút phân chia). Boosting sẽ kết hợp hàng trăm weak learner thành một strong learner có độ chính xác rất cao.",
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
    "explanation": "Cả hai đều là Boosting tuần tự, nhưng cơ chế bù trừ khác nhau: AdaBoost tăng trọng số mẫu bị đoán sai ở vòng sau. GBDT xem bài toán dưới góc nhìn tối ưu hàm mục tiêu: cây ở bước m cố gắng dự đoán giá trị thặng dư r_i = y_i - y_hat_{i, m-1} (gradient âm của hàm loss).",
    "slideRef": "Slide Chương 4, Trang 98-102"
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
  }
];
