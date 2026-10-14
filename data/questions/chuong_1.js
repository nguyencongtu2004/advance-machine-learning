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
    "id": 241,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Trong phép thử Turing (Turing Test) do Alan Turing đề xuất năm 1950, tiêu chí để một cỗ máy được coi là có trí tuệ là gì?",
    "options": [
      "Máy tính có thể giải quyết các bài toán tích phân vi phân phức tạp nhanh hơn con người",
      "Một người thẩm định con người sau khi trò chuyện bằng văn bản không thể phân biệt được đâu là máy và đâu là người",
      "Máy tính có cấu trúc phần cứng mô phỏng chính xác mạng lưới tế bào thần kinh sinh học",
      "Máy tính tự viết lại mã nguồn của chính mình mà không cần con người can thiệp"
    ],
    "answer": 1,
    "explanation": "Alan Turing đề xuất rằng nếu một người phỏng vấn giao tiếp bằng chữ (text) với một đối tượng giấu mặt mà không thể phân biệt được đối tượng đó là máy hay người thật, cỗ máy đó đã vượt qua phép thử Turing và được coi là có trí thông minh.",
    "slideRef": "Slide Chương 1, Trang 6-7"
  },
  {
    "id": 242,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Thí nghiệm tư duy 'Phòng tiếng Trung' (Chinese Room) của triết gia John Searle được đưa ra nhằm phản bác luận điểm nào?",
    "options": [
      "Phản bác quan điểm cho rằng máy tính chỉ thao tác cú pháp theo luật hình thức có thể thực sự hiểu được ngữ nghĩa (AI mạnh / Strong AI)",
      "Phản bác tính khả thi của thuật toán dịch tự động dựa trên quy tắc ngữ pháp",
      "Phản bác định nghĩa học máy của Tom Mitchell",
      "Phản bác sự cần thiết của hàm kích hoạt phi tuyến trong mạng nơ-ron"
    ],
    "answer": 0,
    "explanation": "John Searle đưa ra lập luận 'Phòng tiếng Trung' để chỉ ra rằng việc một người trong phòng tra bảng quy tắc đối sánh ký tự tiếng Trung rồi đưa ra kết quả không đồng nghĩa với việc người đó hiểu tiếng Trung. Máy tính thao tác biểu tượng cú pháp (syntax) thuần túy không đồng nghĩa với việc có nhận thức ngữ nghĩa (semantics).",
    "slideRef": "Slide Chương 1, Trang 6"
  },
  {
    "id": 243,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Mô hình mạng nơ-ron nhân tạo phần cứng đầu tiên trên thế giới (SNARC) được chế tạo vào năm 1951 bởi ai?",
    "options": [
      "Frank Rosenblatt",
      "Marvin Minsky và Dean Edmonds",
      "John McCarthy và Claude Shannon",
      "Geoffrey Hinton và Yann LeCun"
    ],
    "answer": 1,
    "explanation": "Năm 1951, Marvin Minsky và Dean Edmonds đã chế tạo SNARC (Stochastic Neural Analog Reinforcement Calculator), cỗ máy mạng nơ-ron nhân tạo phần cứng đầu tiên gồm 40 nơ-ron mô phỏng hành vi của chuột tìm đường trong mê cung.",
    "slideRef": "Slide Chương 1, Trang 7"
  },
  {
    "id": 244,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Trong bài toán xây dựng hệ thống xe tự hành (Self-Driving Car), yếu tố nào sau đây đóng vai trò là Thước đo hiệu năng P (Performance) theo định nghĩa của Tom Mitchell?",
    "options": [
      "Dữ liệu video từ camera và cảm biến LiDAR được ghi lại trong hàng triệu km chạy thử",
      "Tác vụ điều khiển vô-lăng, chân ga và phanh xe an toàn",
      "Số km di chuyển trung bình giữa hai lần xảy ra sự cố cần tài xế can thiệp",
      "Tốc độ tính toán của bộ vi xử lý GPU trên xe"
    ],
    "answer": 2,
    "explanation": "Tác vụ T là lái xe an toàn trên đường; Kinh nghiệm E là hàng triệu km dữ liệu hành trình; Thước đo P là quãng đường trung bình di chuyển an toàn giữa các lần con người phải can thiệp (hoặc tỷ lệ tai nạn trên 100.000 km).",
    "slideRef": "Slide Chương 1, Trang 41-42"
  },
  {
    "id": 245,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Học tự giám sát (Self-Supervised Learning) - nền tảng của các mô hình ngôn ngữ lớn như BERT và GPT - thuộc bản chất phương pháp học nào?",
    "options": [
      "Học tăng cường thuần túy không cần hàm mất mát",
      "Học có giám sát nhưng nhãn được tự động tạo ra từ chính cấu trúc bên trong của dữ liệu mà không cần con người gán nhãn thủ công",
      "Học không giám sát chỉ dùng phân cụm K-Means",
      "Lập trình hướng luật if-else tự sinh mã nguồn"
    ],
    "answer": 1,
    "explanation": "Self-Supervised Learning là một nhánh đặc biệt của Học có giám sát, trong đó nhãn mục tiêu được tự động trích xuất từ chính dữ liệu đầu vào (ví dụ: che đi 1 từ và yêu cầu mô hình đoán từ đó - Masked Language Modeling) mà không tốn công sức dán nhãn thủ công của con người.",
    "slideRef": "Slide Chương 1, Trang 11-13"
  },
  {
    "id": 246,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Định lý 'Không có bữa trưa miễn phí' (No Free Lunch Theorem) của Wolpert và Macready (1997) mang ý nghĩa cốt lõi nào trong Machine Learning?",
    "options": [
      "Không có mô hình học máy nào hoạt động tốt nếu không có dữ liệu huấn luyện",
      "Không tồn tại một thuật toán học máy đơn lẻ nào vượt trội hơn tất cả các thuật toán khác trên mọi bài toán khả dĩ",
      "Mô hình học máy luôn đòi hỏi chi phí phần cứng đắt đỏ để huấn luyện",
      "Mọi mô hình học máy đều chắc chắn sẽ bị Overfitting sau một số vòng lặp nhất định"
    ],
    "answer": 1,
    "explanation": "Định lý No Free Lunch khẳng định rằng khi lấy trung bình trên tất cả các phân phối bài toán có thể xảy ra, mọi thuật toán học máy đều có hiệu năng ngang nhau. Không có mô hình nào là 'vạn năng' tốt nhất cho mọi bài toán; sự vượt trội phụ thuộc vào mức độ phù hợp của giả định mô hình với bài toán cụ thể.",
    "slideRef": "Slide Chương 1, Trang 36-38"
  },
  {
    "id": 247,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Khái niệm 'Định kiến quy nạp' (Inductive Bias) của một thuật toán học máy biểu thị điều gì?",
    "options": [
      "Sự thiên vị mang tính phân biệt đối xử của người thu thập dữ liệu",
      "Tập hợp các giả định tiên nghiệm mà thuật toán sử dụng để dự đoán nhãn cho các điểm dữ liệu mới chưa từng thấy",
      "Hiện tượng sai lệch do lỗi lập trình cú pháp trong mã nguồn",
      "Độ lệch chuẩn giữa tập dữ liệu Train và tập Test"
    ],
    "answer": 1,
    "explanation": "Inductive Bias là tập hợp các giả định mà mô hình học máy áp dụng để khái quát hóa từ dữ liệu quan sát sang dữ liệu chưa quan sát (ví dụ: Linear Regression giả định mối quan hệ giữa X và y là tuyến tính; KNN giả định các điểm gần nhau sẽ có nhãn giống nhau).",
    "slideRef": "Slide Chương 1, Trang 43-45"
  },
  {
    "id": 248,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Sự khác biệt căn bản giữa Học theo lô (Batch / Offline Learning) và Học trực tuyến (Online / Incremental Learning) là gì?",
    "options": [
      "Batch Learning học trên trình duyệt web, Online Learning học trên máy chủ",
      "Batch Learning huấn luyện trên toàn bộ tập dữ liệu cùng lúc khi hệ thống offline; Online Learning liên tục cập nhật mô hình theo từng mẫu hoặc mini-batch khi dữ liệu mới liên tục đổ về",
      "Batch Learning không có hàm mất mát, Online Learning có hàm mất mát",
      "Online Learning luôn cho độ chính xác cao hơn Batch Learning trên mọi tập dữ liệu"
    ],
    "answer": 1,
    "explanation": "Batch Learning đòi hỏi toàn bộ dữ liệu phải có sẵn để huấn luyện mô hình một lần; nếu có dữ liệu mới thì phải train lại từ đầu. Ngược lại, Online Learning có khả năng tiếp nhận và cập nhật trọng số liên tục theo từng luồng dữ liệu mới (rất hữu ích cho Out-of-core learning khi dữ liệu vượt RAM).",
    "slideRef": "Slide Chương 1, Trang 28-30"
  },
  {
    "id": 249,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Hiện tượng 'Trôi dạt khái niệm' (Concept Drift) trong các hệ thống học máy triển khai thực tế biểu thị điều gì?",
    "options": [
      "Bộ nhớ RAM của máy chủ bị tràn sau thời gian dài vận hành",
      "Mối quan hệ thống kê giữa đặc trưng đầu vào X và biến mục tiêu y bị thay đổi theo thời gian",
      "Các tham số W và b của mô hình bị giảm độ chính xác dấu phẩy động",
      "Mô hình bị quá khớp ngay trong giai đoạn huấn luyện trên tập train"
    ],
    "answer": 1,
    "explanation": "Concept Drift xảy ra khi bản chất mối quan hệ P(y|X) thay đổi theo thời gian (ví dụ: hành vi lừa đảo qua thẻ tín dụng thay đổi chiêu thức mới khiến mô hình cũ không còn phát hiện được). Đây là lý do cần giám sát và huấn luyện lại mô hình định kỳ.",
    "slideRef": "Slide Chương 1, Trang 67-68"
  },
  {
    "id": 250,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Mô hình tham số (Parametric Model) và Mô hình phi tham số (Non-parametric Model) khác nhau ở điểm cốt lõi nào?",
    "options": [
      "Mô hình tham số có số lượng tham số cố định không phụ thuộc vào kích thước tập dữ liệu; Mô hình phi tham số có số lượng tham số tăng theo kích thước tập dữ liệu",
      "Mô hình tham số không có siêu tham số, Mô hình phi tham số có rất nhiều siêu tham số",
      "Mô hình tham số chỉ dùng cho bài toán phân loại, Mô hình phi tham số chỉ dùng cho bài toán hồi quy",
      "Mô hình phi tham số không bao giờ bị quá khớp (Overfitting)"
    ],
    "answer": 0,
    "explanation": "Mô hình tham số (như Linear Regression, Logistic Regression) tóm tắt dữ liệu qua một tập tham số có kích thước cố định độc lập với N. Mô hình phi tham số (như KNN, Decision Tree không giới hạn độ sâu) không gò ép dạng hàm cố định, số lượng tham số/nút linh hoạt tăng theo kích thước tập dữ liệu.",
    "slideRef": "Slide Chương 1, Trang 44-46"
  },
  {
    "id": 251,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Trong kỹ thuật Stratified K-Fold Cross-Validation, từ 'Stratified' (Phân tầng) có ý nghĩa bắt buộc nào?",
    "options": [
      "Chia dữ liệu thành các tầng theo thứ tự thời gian tăng dần",
      "Đảm bảo tỷ lệ phân bố giữa các nhãn lớp trong mỗi fold con giống hệt với tỷ lệ phân bố nhãn trong toàn bộ tập dữ liệu gốc",
      "Chia dữ liệu thành các nhóm theo khoảng cách Euclidean",
      "Huấn luyện mô hình từ tầng nơ-ron thấp nhất lên tầng cao nhất"
    ],
    "answer": 1,
    "explanation": "Stratified K-Fold đảm bảo mỗi fold con đại diện công bằng tỷ lệ phần trăm của từng nhãn lớp như tập gốc. Điều này tối quan trọng với dữ liệu mất cân bằng (Imbalanced dataset), tránh trường hợp một fold bị thiếu hẳn lớp thiểu số.",
    "slideRef": "Slide Chương 1, Trang 58-60"
  },
  {
    "id": 252,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Khi nào bắt buộc phải dùng TimeSeriesSplit thay vì K-Fold thông thường để đánh giá mô hình?",
    "options": [
      "Khi dữ liệu có số lượng chiều đặc trưng lớn hơn 100",
      "Khi dữ liệu có tính phụ thuộc thời gian (chuỗi thời gian), nhằm đảm bảo tập huấn luyện luôn xảy ra trước tập kiểm thử theo trục thời gian",
      "Khi dữ liệu chỉ chứa các biến phân loại danh mục (Categorical)",
      "Khi huấn luyện mô hình Random Forest với 500 cây"
    ],
    "answer": 1,
    "explanation": "Với dữ liệu chuỗi thời gian (giá cổ phiếu, dự báo thời tiết), chia K-Fold ngẫu nhiên sẽ lấy dữ liệu tương lai để dự đoán quá khứ (Look-ahead Data Leakage). TimeSeriesSplit đảm bảo mô hình chỉ học từ quá khứ để dự đoán tương lai.",
    "slideRef": "Slide Chương 1, Trang 59-60"
  },
  {
    "id": 253,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Khoảng cách tổng quát hóa (Generalization Gap) của một mô hình học máy được định nghĩa là gì?",
    "options": [
      "Khoảng cách giữa tâm các cụm trong không gian đặc trưng",
      "Hiệu số giữa sai số trên tập kiểm thử (Test Error) và sai số trên tập huấn luyện (Training Error)",
      "Thời gian cần thiết để huấn luyện mô hình từ đầu đến khi hội tụ",
      "Độ lệch chuẩn giữa ma trận hiệp phương sai và ma trận đơn vị"
    ],
    "answer": 1,
    "explanation": "Generalization Gap = Error_test - Error_train. Khi khoảng cách này lớn (Error_train rất nhỏ nhưng Error_test rất lớn), mô hình đang bị quá khớp (Overfitting) nghiêm trọng.",
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
    "explanation": "Nếu chỉnh siêu tham số trên Test Set, thông tin từ Test Set gián tiếp ngấm vào quá trình ra quyết định của mô hình (Optimism Bias). Khi đó Test Set không còn là bài kiểm tra khách quan độc lập nữa, khiến mô hình tưởng chừng tốt nhưng thất bại khi deploy thực tế.",
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
      "Tăng mạnh cường độ phạt chính quy hóa (tăng hệ số lambda)",
      "Giảm bớt mức độ phạt chính quy hóa (regularization)"
    ],
    "answer": 2,
    "explanation": "Underfitting xảy ra khi mô hình quá đơn giản (High Bias). Tăng mạnh hệ số phạt lambda sẽ ép mô hình càng đơn giản hơn, làm trầm trọng thêm tình trạng Underfitting. Khắc phục Underfitting cần tăng độ phức tạp mô hình hoặc giảm regularization.",
    "slideRef": "Slide Chương 1, Trang 60-61"
  },
  {
    "id": 256,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Trong học tăng cường (Reinforcement Learning), 'Chính sách' (Policy, ký hiệu π) biểu thị điều gì?",
    "options": [
      "Bộ luật pháp lý quy định quyền riêng tư dữ liệu người dùng",
      "Hàm hoặc chiến lược ánh xạ từ Trạng thái (State) sang Hành động (Action) mà tác tử sẽ thực hiện",
      "Tổng phần thưởng tích lũy nhận được ở cuối mỗi màn chơi",
      "Thuật toán tối ưu hóa Gradient Descent áp dụng cho hàm mất mát"
    ],
    "answer": 1,
    "explanation": "Policy π(a|s) là chiến lược hành vi của Agent: xác định xác suất hoặc quyết định thực hiện hành động 'a' khi Agent đang ở trạng thái 's' nhằm tối đa hóa phần thưởng kỳ vọng lâu dài.",
    "slideRef": "Slide Chương 1, Trang 14-15"
  },
  {
    "id": 257,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Trong bài toán nhận diện cảm xúc giọng nói, phát biểu nào sau đây xác định đúng bộ ba T-E-P?",
    "options": [
      "T: Tập các file ghi âm giọng nói; E: Tỷ lệ nhận diện đúng; P: Gán nhãn vui/buồn/giận dữ",
      "T: Phân loại đoạn ghi âm vào các trạng thái cảm xúc; E: Tập dữ liệu âm thanh giọng nói đã được gán nhãn trước; P: Độ chính xác phân loại F1-score",
      "T: Tốc độ xử lý của CPU; E: Tần số âm thanh Hz; P: Số người tham gia thu âm",
      "T: Thuật toán MLP; E: Hàm kích hoạt Softmax; P: Hàm mất mát Cross-Entropy"
    ],
    "answer": 1,
    "explanation": "Tác vụ T là phân loại cảm xúc từ đoạn âm thanh; Kinh nghiệm E là tập dữ liệu mẫu âm thanh lịch sử đã có nhãn; Thước đo P là chỉ số đánh giá F1-score hoặc Accuracy.",
    "slideRef": "Slide Chương 1, Trang 41-42"
  },
  {
    "id": 258,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Đặc trưng nào sau đây của mạng nơ-ron Perceptron do Frank Rosenblatt phát minh năm 1957 là nguyên nhân chính dẫn đến sự suy tàn của mạng nơ-ron lần thứ nhất (AI Winter)?",
    "options": [
      "Chi phí tính toán quá đắt đỏ khiến máy tính thời đó không chạy nổi",
      "Bản chất chỉ tạo ra ranh giới quyết định tuyến tính phẳng, hoàn toàn bất lực trước các bài toán phi tuyến như hàm logic XOR",
      "Thuật toán không thể lưu trữ trọng số trên đĩa từ",
      "Perceptron yêu cầu tất cả đầu vào phải là số thực liên tục"
    ],
    "answer": 1,
    "explanation": "Năm 1969, cuốn sách 'Perceptrons' của Marvin Minsky và Seymour Papert đã chứng minh mặt toán học rằng Perceptron đơn tầng chỉ giải được bài toán tách biệt tuyến tính và không thể học được hàm XOR đơn giản, dẫn đến giai đoạn AI Winter đầu tiên.",
    "slideRef": "Slide Chương 1, Trang 7-8"
  },
  {
    "id": 259,
    "chapter": 1,
    "chapterTitle": "Chương 1: Tổng quan về Học máy",
    "question": "Công việc chính của bước 'Triển khai và Giám sát' (Deployment & Monitoring) trong quy trình 6 bước Machine Learning là gì?",
    "options": [
      "Viết báo cáo tiểu luận và nộp mã nguồn cho giảng viên",
      "Đóng gói mô hình thành dịch vụ API/phần mềm phục vụ người dùng thực tế và theo dõi độ trễ, sai số, trôi dạt dữ liệu trong môi trường production",
      "Thực hiện phân tích thành phần chính PCA trên toàn bộ tập dữ liệu",
      "Lập trình thêm các câu lệnh if-else để ghi đè kết quả mô hình"
    ],
    "answer": 1,
    "explanation": "Bước cuối cùng là đưa mô hình vào hệ thống thực tế (qua API/Microservice), đồng thời thiết lập hệ thống cảnh báo, giám sát chất lượng dự đoán và phát hiện Data Drift / Concept Drift để cập nhật mô hình kịp thời.",
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
    "explanation": "K-Fold Cross-Validation yêu cầu huấn luyện mô hình K lần độc lập trên K tập con, do đó thời gian tính toán tăng lên gấp K lần chứ không thể giảm đi.",
    "slideRef": "Slide Chương 1, Trang 58-60"
  }
];

// Tự động gộp vào ngân hàng câu hỏi chung
if (!window.QUESTION_BANK) {
  window.QUESTION_BANK = [];
}
window.QUESTION_BANK.push(...window.QUESTIONS_CHUONG_1);
