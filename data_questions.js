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
    "id": 261,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Trong 4 chiều đánh giá chất lượng dữ liệu, chiều nào phản ánh việc dữ liệu tuân thủ các quy tắc logic, ràng buộc định dạng và không mâu thuẫn giữa các bảng dữ liệu?",
    "options": [
      "Tính đầy đủ (Completeness)",
      "Tính nhất quán (Consistency)",
      "Tính kịp thời (Timeliness)",
      "Tính bảo mật (Confidentiality)"
    ],
    "answer": 1,
    "explanation": "Tính nhất quán (Consistency) bảo đảm không có sự mâu thuẫn hay xung đột logic giữa các trường dữ liệu (ví dụ: ngày sinh sau ngày lập tài khoản, hoặc tuổi là 25 nhưng trạng thái là 'đã nghỉ hưu 40 năm').",
    "slideRef": "Slide Chương 2, Trang 7-10"
  },
  {
    "id": 262,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Cơ chế dữ liệu khuyết Missing Completely at Random (MCAR) có đặc điểm cốt lõi nào?",
    "options": [
      "Xác suất bị thiếu của một giá trị phụ thuộc hoàn toàn vào chính giá trị thật của nó",
      "Xác suất bị thiếu của một giá trị phụ thuộc vào các biến quan sát khác trong dữ liệu",
      "Xác suất bị thiếu của một giá trị hoàn toàn độc lập với cả các biến quan sát lẫn chính giá trị bị thiếu đó",
      "Chỉ xảy ra khi toàn bộ dòng dữ liệu bị xóa bỏ"
    ],
    "answer": 2,
    "explanation": "MCAR xảy ra khi sự kiện mất dữ liệu là hoàn toàn ngẫu nhiên (ví dụ: mất điện đột ngột làm cảm biến ngừng ghi). Phân bố của các mẫu quan sát được và mẫu bị thiếu là giống nhau, do đó việc xóa bỏ mẫu MCAR không gây chệch hệ thống.",
    "slideRef": "Slide Chương 2, Trang 14-16"
  },
  {
    "id": 263,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Khi dữ liệu bị khuyết thuộc dạng Missing Not at Random (MNAR), ví dụ như người có thu nhập cực cao thường từ chối khai báo mức lương trong khảo sát, phương pháp xử lý nào là phù hợp nhất?",
    "options": [
      "Xóa bỏ toàn bộ các dòng bị khuyết (Listwise deletion) mà không cần suy nghĩ",
      "Điền bằng giá trị trung bình (Mean) mà không thêm thuộc tính nào khác",
      "Điền giá trị khuyết kết hợp tạo thêm một cột cờ nhị phân 'Chỉ báo khuyết' (Missing Indicator) để mô hình học được tín hiệu từ sự vắng mặt",
      "Nhân tất cả các cột khác với một hằng số"
    ],
    "answer": 2,
    "explanation": "Với MNAR, bản thân việc giá trị bị thiếu mang một tín hiệu thông tin cực kỳ quan trọng (người giàu thường giấu thu nhập). Thêm một cột Missing Indicator (nhận giá trị 1 nếu thiếu, 0 nếu không thiếu) giúp mô hình tận dụng được thông tin ẩn này.",
    "slideRef": "Slide Chương 2, Trang 16-18"
  },
  {
    "id": 264,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Trong phương pháp phát hiện ngoại lai bằng Quy tắc Hàng rào Tukey (Boxplot IQR), các giá trị được coi là ngoại lai cực đoan (Extreme Outliers) khi nằm ngoài khoảng nào?",
    "options": [
      "[Q1 - 1.5 * IQR, Q3 + 1.5 * IQR]",
      "[Q1 - 3.0 * IQR, Q3 + 3.0 * IQR]",
      "[Mean - 2 * Std, Mean + 2 * Std]",
      "[Min, Max]"
    ],
    "answer": 1,
    "explanation": "Hàng rào trong (Mild Outliers) là [Q1 - 1.5*IQR, Q3 + 1.5*IQR]. Hàng rào ngoài (Extreme Outliers) là [Q1 - 3.0*IQR, Q3 + 3.0*IQR].",
    "slideRef": "Slide Chương 2, Trang 23-25"
  },
  {
    "id": 265,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Kỹ thuật Winsorization xử lý các giá trị ngoại lai (outliers) theo cơ chế nào?",
    "options": [
      "Xóa bỏ hoàn toàn dòng chứa giá trị ngoại lai khỏi tập dữ liệu",
      "Thay thế các giá trị vượt ngưỡng bằng giá trị của một phân vị xác định (ví dụ phân vị thứ 1% và 99%) thay vì loại bỏ chúng",
      "Chuyển toàn bộ các giá trị ngoại lai thành giá trị 0",
      "Tính căn bậc hai của toàn bộ cột dữ liệu"
    ],
    "answer": 1,
    "explanation": "Winsorization (cắt ngọn / giới hạn phân vị) không xóa dòng dữ liệu mà 'ghim' các giá trị cực trị vượt ngưỡng về một giá trị trần/sàn xác định (ví dụ thay giá trị > 99th percentile bằng đúng giá trị ở 99th percentile), bảo toàn số lượng mẫu.",
    "slideRef": "Slide Chương 2, Trang 26"
  },
  {
    "id": 266,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Hiện tượng 'Bẫy biến giả' (Dummy Variable Trap) xảy ra khi nào?",
    "options": [
      "Khi mã hóa một biến danh mục k trạng thái thành đúng k cột nhị phân trong mô hình hồi quy tuyến tính có hệ số chặn (intercept), dẫn đến đa cộng tuyến hoàn hảo",
      "Khi áp dụng One-Hot Encoding cho cột có quá nhiều giá trị phân biệt",
      "Khi chia tập train/test bằng hàm train_test_split mà quên đặt random_state",
      "Khi dữ liệu nhãn bị đảo lộn giữa 0 và 1"
    ],
    "answer": 0,
    "explanation": "Nếu một biến danh mục có k trạng thái và ta tạo đủ k cột nhị phân, thì tổng k cột đó luôn bằng 1 cho mọi dòng (đúng bằng cột bias/intercept). Điều này gây ra Đa cộng tuyến hoàn hảo (Perfect Multicollinearity), khiến ma trận X^T X bị suy biến. Khắc phục bằng cách bỏ đi 1 cột (chỉ giữ k - 1 cột).",
    "slideRef": "Slide Chương 2, Trang 34-36"
  },
  {
    "id": 267,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Khi áp dụng Target Encoding (Mean Encoding) cho biến danh mục có độ lực lượng cao (High Cardinality), nguy cơ lớn nhất là gì và cách phòng tránh tiêu chuẩn là gì?",
    "options": [
      "Mô hình bị Underfitting; Khắc phục bằng cách nhân đôi số chiều",
      "Bị rò rỉ dữ liệu mục tiêu dẫn đến Overfitting nghiêm trọng; Khắc phục bằng Out-of-Fold (K-fold) target encoding kèm thêm nhiễu hoặc smoothing",
      "Ma trận đặc trưng trở nên quá thưa; Khắc phục bằng cách dùng One-Hot Encoding",
      "Mất mát toàn bộ thông tin thứ bậc; Khắc phục bằng Label Encoding"
    ],
    "answer": 1,
    "explanation": "Target Encoding thay thế danh mục bằng giá trị trung bình của nhãn y. Nếu tính trên toàn tập train, mô hình sẽ học thuộc lòng nhãn gây overfit nặng. Tiêu chuẩn công nghiệp là dùng Out-of-fold target encoding kết hợp m-estimate smoothing để làm mượt các nhóm ít mẫu.",
    "slideRef": "Slide Chương 2, Trang 37-38"
  },
  {
    "id": 268,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Bộ chuẩn hóa RobustScaler trong scikit-learn sử dụng đại lượng nào để căn chỉnh tâm và thang đo đặc trưng, giúp nó không bị ảnh hưởng bởi các ngoại lai?",
    "options": [
      "Giá trị Trung bình (Mean) và Độ lệch chuẩn (Standard Deviation)",
      "Giá trị Nhỏ nhất (Min) và Lớn nhất (Max)",
      "Trung vị (Median) và Khoảng tứ phân vị (Interquartile Range - IQR)",
      "Giá trị Tuyệt đối lớn nhất (MaxAbs)"
    ],
    "answer": 2,
    "explanation": "RobustScaler trừ đi Trung vị (Median) và chia cho IQR (Q3 - Q1). Cả Median và IQR đều là các thống kê kháng nhiễu (robust statistics), nên thang đo sau chuẩn hóa không bị méo mó khi có outliers cực đoan.",
    "slideRef": "Slide Chương 2, Trang 43-45"
  },
  {
    "id": 269,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Cho thuộc tính x có min = 20, max = 100. Giá trị x = 60 sau khi chuẩn hóa Min-Max về khoảng [-1, 1] bằng công thức mở rộng sẽ là bao nhiêu?",
    "options": [
      "0.5",
      "0.0",
      "-0.5",
      "0.25"
    ],
    "answer": 1,
    "explanation": "Trước hết chuẩn hóa về [0, 1]: x_std = (60 - 20) / (100 - 20) = 40/80 = 0.5. Sau đó chuyển sang [-1, 1]: x_scaled = x_std * (1 - (-1)) + (-1) = 0.5 * 2 - 1 = 0.0.",
    "slideRef": "Slide Chương 2, Trang 41-42"
  },
  {
    "id": 270,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Cho một tập dữ liệu có giá trị trung bình mean = 50 và độ lệch chuẩn std = 10. Giá trị x = 75 sau khi chuẩn hóa Z-score (Standardization) sẽ nhận giá trị bằng bao nhiêu?",
    "options": [
      "1.5",
      "2.0",
      "2.5",
      "0.75"
    ],
    "answer": 2,
    "explanation": "Công thức Z-score: z = (x - mean) / std = (75 - 50) / 10 = 25 / 10 = 2.5.",
    "slideRef": "Slide Chương 2, Trang 42-44"
  },
  {
    "id": 271,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Thuật toán học máy nào sau đây KHÔNG bị ảnh hưởng bởi thang đo đặc trưng (Feature Scale) và do đó KHÔNG CẦN thực hiện Feature Scaling?",
    "options": [
      "K-Nearest Neighbors (KNN)",
      "Support Vector Machine (SVM) với kernel RBF",
      "Mạng nơ-ron nhiều tầng (MLP)",
      "Cây quyết định (Decision Tree)"
    ],
    "answer": 3,
    "explanation": "Cây quyết định phân nhánh dựa trên bất đẳng thức so sánh đơn biến x_j <= threshold. Phép biến đổi đơn điệu (như nhân với 100 hay cộng thêm 10) chỉ làm dịch chuyển ngưỡng chia tương ứng mà không làm thay đổi thứ tự hay độ tinh khiết Gini/Entropy.",
    "slideRef": "Slide Chương 2, Trang 40"
  },
  {
    "id": 272,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Khái niệm 'Lời nguyền số chiều' (Curse of Dimensionality) đề cập đến hiện tượng bất lợi nào khi số lượng đặc trưng d tăng lên quá lớn?",
    "options": [
      "Bộ nhớ RAM máy tính luôn bị tràn bất kể số dòng dữ liệu nhiều hay ít",
      "Không gian dữ liệu trở nên cực kỳ thưa thớt, khoảng cách Euclidean giữa mọi cặp điểm có xu hướng tiệm cận nhau làm mất khả năng phân biệt",
      "Mô hình học máy chuyển hoàn toàn sang trạng thái Underfitting",
      "Tất cả các ma trận hiệp phương sai đều có định thức bằng 0"
    ],
    "answer": 1,
    "explanation": "Khi số chiều d tăng, thể tích không gian tăng theo hàm mũ khiến các điểm dữ liệu nằm cách xa nhau và thưa thớt. Tỷ lệ khoảng cách xa nhất và gần nhất tiến dần về 1, khiến các thuật toán dựa trên khoảng cách (KNN, K-Means) mất tính hiệu quả.",
    "slideRef": "Slide Chương 2, Trang 48-50"
  },
  {
    "id": 273,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Mục tiêu tối ưu hóa hình học cốt lõi của Thuật toán Phân tích Thành phần Chính (PCA) là gì?",
    "options": [
      "Tìm trục chiếu sao cho cực đại hóa sai số giữa các lớp và cực tiểu hóa khoảng cách nội lớp",
      "Tìm các hướng trực giao (Principal Components) sao cho phương sai của dữ liệu chiếu lên các hướng đó là lớn nhất (tương đương cực tiểu hóa sai số tái tạo)",
      "Tìm một siêu phẳng phi tuyến cong để bao bọc toàn bộ dữ liệu",
      "Phân chia các điểm dữ liệu thành đúng K cụm tách biệt"
    ],
    "answer": 1,
    "explanation": "PCA tìm các trục chiếu trực giao sao cho bảo toàn được nhiều phương sai (thông tin) của dữ liệu nhất có thể. Mặt toán học, việc tối đa hóa phương sai dữ liệu chiếu hoàn toàn tương đương với cực tiểu hóa sai số bình phương tái tạo (Reconstruction Error).",
    "slideRef": "Slide Chương 2, Trang 51-55"
  },
  {
    "id": 274,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Trước khi thực hiện phân rã ma trận để tìm các thành phần chính trong PCA, bước tiền xử lý nào là BẮT BUỘC?",
    "options": [
      "Chuyển toàn bộ dữ liệu thành số nguyên",
      "Trừ đi giá trị trung bình của từng đặc trưng (Centering dữ liệu về 0) và chuẩn hóa thang đo nếu các đặc trưng khác đơn vị đo",
      "Thực hiện One-Hot Encoding cho tất cả các cột",
      "Chia tập dữ liệu thành 10 folds bằng StratifiedKFold"
    ],
    "answer": 1,
    "explanation": "PCA bắt buộc dữ liệu phải được Zero-centered (trừ đi Mean của mỗi cột) để ma trận hiệp phương sai X^T X / (n - 1) tính toán đúng tâm. Đồng thời phải chuẩn hóa Standardize để tránh biến có thang đo lớn áp đảo hoàn toàn các thành phần chính.",
    "slideRef": "Slide Chương 2, Trang 53"
  },
  {
    "id": 275,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Một ma trận hiệp phương sai của tập dữ liệu 4 chiều có 4 trị riêng (eigenvalues) lần lượt là: λ1 = 5.0, λ2 = 3.0, λ3 = 1.5, λ4 = 0.5. Nếu giữ lại 2 thành phần chính đầu tiên (PC1 và PC2), tỷ lệ phương sai giải thích tích lũy (Cumulative Explained Variance Ratio) đạt bao nhiêu?",
    "options": [
      "50%",
      "70%",
      "80%",
      "90%"
    ],
    "answer": 2,
    "explanation": "Tổng các trị riêng = 5.0 + 3.0 + 1.5 + 0.5 = 10.0. Tỷ lệ phương sai của 2 thành phần đầu tiên = (5.0 + 3.0) / 10.0 = 8.0 / 10.0 = 80%.",
    "slideRef": "Slide Chương 2, Trang 58-60"
  },
  {
    "id": 276,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Tính chất quan trọng nào sau đây là ĐÚNG đối với các vector thành phần chính (Principal Component eigenvectors) trong PCA?",
    "options": [
      "Các vector thành phần chính có độ dài tùy ý và luôn song song với nhau",
      "Các vector thành phần chính đôi một trực giao với nhau (tích vô hướng bằng 0) và có độ dài chuẩn hóa bằng 1 (trực chuẩn)",
      "Vector thành phần chính thứ hai giải thích nhiều phương sai hơn vector thành phần chính thứ nhất",
      "Các vector thành phần chính luôn trùng khớp với các trục tọa độ ban đầu của dữ liệu"
    ],
    "answer": 1,
    "explanation": "Trong PCA, các vector riêng của ma trận hiệp phương sai là một hệ trực chuẩn (Orthonormal): vi^T * vj = 0 (với i != j) và ||vi|| = 1. Điều này đảm bảo các thành phần chính mới hoàn toàn không tương quan với nhau (Zero correlation).",
    "slideRef": "Slide Chương 2, Trang 54-56"
  },
  {
    "id": 277,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Để tái tạo lại xấp xỉ dữ liệu ban đầu X_approx (n x d) từ ma trận tọa độ đã nén Z (n x k) và ma trận trọng số chiếu W (d x k), kèm vector trung bình mean_vec (1 x d), công thức là gì?",
    "options": [
      "X_approx = Z * W + mean_vec",
      "X_approx = Z * W^T + mean_vec",
      "X_approx = W * Z^T - mean_vec",
      "X_approx = (Z^T * Z)^(-1) * W"
    ],
    "answer": 1,
    "explanation": "Phép chiếu nén: Z = (X - mean) * W. Do W là ma trận trực chuẩn nên ma trận nghịch đảo giả là W^T. Phép tái tạo xấp xỉ: X_approx = Z * W^T + mean.",
    "slideRef": "Slide Chương 2, Trang 61-62"
  },
  {
    "id": 278,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Điểm khác biệt căn bản giữa Phân tích Thành phần Chính (PCA) và Phân tích Biệt thức Tuyến tính (LDA - Linear Discriminant Analysis) là gì?",
    "options": [
      "PCA là thuật toán học không giám sát không dùng nhãn lớp; LDA là thuật toán học có giám sát sử dụng thông tin nhãn lớp để tối đa hóa khả năng phân tách giữa các lớp",
      "PCA chỉ áp dụng cho dữ liệu văn bản, LDA chỉ áp dụng cho dữ liệu hình ảnh",
      "PCA tạo ra các trục cong phi tuyến, LDA chỉ tạo ra các trục phẳng",
      "PCA cần nhãn lớp để tính ma trận hiệp phương sai, LDA không cần"
    ],
    "answer": 0,
    "explanation": "PCA tìm hướng có phương sai lớn nhất mà không hề biết nhãn lớp (Unsupervised). LDA sử dụng thông tin nhãn y để tìm hướng tối đa hóa tỷ lệ phương sai giữa các lớp (Between-class variance) so với phương sai nội bộ từng lớp (Within-class variance) nhằm hỗ trợ bài toán phân loại tốt nhất.",
    "slideRef": "Slide Chương 2, Trang 63-65"
  },
  {
    "id": 279,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Một nhược điểm lớn khi sử dụng PCA để giảm chiều dữ liệu là gì?",
    "options": [
      "PCA làm tăng gấp đôi số lượng mẫu dữ liệu ban đầu",
      "Các thành phần chính mới là tổ hợp tuyến tính của tất cả các đặc trưng cũ, dẫn đến việc mất đi khả năng giải thích ngữ nghĩa vật lý trực quan của từng thuộc tính ban đầu",
      "PCA không thể áp dụng được nếu số chiều d lớn hơn số mẫu n",
      "PCA luôn làm suy giảm độ chính xác của mọi mô hình học máy phân loại"
    ],
    "answer": 1,
    "explanation": "Sau khi biến đổi PCA, mỗi chiều mới PC_i là một tổ hợp toán học tuyến tính phức tạp của toàn bộ d đặc trưng cũ. Ta không còn biết PC_1 đại diện cụ thể cho 'tuổi' hay 'thu nhập', làm giảm tính diễn giải (Interpretability).",
    "slideRef": "Slide Chương 2, Trang 65-66"
  },
  {
    "id": 280,
    "chapter": 2,
    "chapterTitle": "Chương 2: Tiền xử lý dữ liệu và Giảm chiều",
    "question": "Phát biểu nào sau đây về Thứ tự Tiền xử lý chuẩn mực trong Pipeline Machine Learning là ĐÚNG?",
    "options": [
      "Chuẩn hóa dữ liệu StandardScaler trên toàn bộ dataset rồi mới gọi train_test_split",
      "Thực hiện train_test_split trước, sau đó chỉ fit scaler trên tập Train, rồi dùng scaler đã fit đó để transform cho cả tập Train và tập Test",
      "Fit scaler độc lập trên tập Train và fit lại một scaler hoàn toàn mới độc lập trên tập Test",
      "Điền missing value trên toàn bộ tập dữ liệu bằng Mean của cả dataset trước khi chia train/test"
    ],
    "answer": 1,
    "explanation": "Để tránh Rò rỉ dữ liệu (Data Leakage), toàn bộ thống kê (Mean, Std, Imputer, Encoder) chỉ được phép học (fit) từ tập Huấn luyện (Train set). Sau đó áp dụng (transform) lên cả Train và Test bằng cùng tham số đó.",
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 2,
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
    "answer": 1,
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
    "answer": 2,
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
    "answer": 1,
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
    "answer": 2,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 2,
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
    "answer": 1,
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
    "answer": 2,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 2,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 2,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 2,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "answer": 1,
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
    "explanation": "p_+ = 8/16 = 0.5; p_- = 8/16 = 0.5. H(S) = - [ 0.5 * log2(0.5) + 0.5 * log2(0.5) ] = - [ 0.5 * (-1) + 0.5 * (-1) ] = 1.0. Khi phân bố đều 50-50, độ bất định đạt cực đại và Entropy bằng đúng 1.",
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
    "explanation": "p_+ = 9/10 = 0.9; p_- = 1/10 = 0.1. Gini(S) = 1 - (p_+^2 + p_-^2) = 1 - (0.9^2 + 0.1^2) = 1 - (0.81 + 0.01) = 1 - 0.82 = 0.18.",
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
    "explanation": "Gini = 1 - (p1^2 + p2^2). Khi p1 = p2 = 0.5: Gini_max = 1 - (0.25 + 0.25) = 1 - 0.5 = 0.5. Đây là độ bất định lớn nhất của CART trong phân loại 2 lớp.",
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
    "explanation": "Nếu một thuộc tính có N giá trị phân biệt cho N mẫu (như cột ID), mỗi nhánh con chỉ có đúng 1 mẫu (Entropy = 0), dẫn đến Information Gain cực đại nhưng hoàn toàn không có khả năng tổng quát hóa (Overfitting cực độ).",
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
    "explanation": "Gain Ratio(S, A) = IG(S, A) / SplitInfo(S, A), với SplitInfo(S, A) = - sum (|S_i| / |S|) * log2(|S_i| / |S|). Nếu thuộc tính chia thành quá nhiều nhánh nhỏ, SplitInfo sẽ rất lớn, kéo Gain Ratio giảm xuống, triệt tiêu thiên vị.",
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
    "explanation": "Với bài toán hồi quy, CART dự đoán đầu ra bằng trung bình số học y_bar của các mẫu trong vùng phân chia (nút lá), và chọn điểm cắt c trên thuộc tính x_j sao cho tổng phương sai / MSE trên hai nhánh con trái và phải là nhỏ nhất.",
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
    "explanation": "Pre-pruning chặn không cho cây phát triển quá mức bằng các siêu tham số giới hạn cấu trúc cây ngay trong lúc xây dựng: giới hạn max_depth, quy định min_samples_split, min_samples_leaf, hoặc min_impurity_decrease.",
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
    "explanation": "|T| là số lượng nút lá (độ phức tạp của cây). R(T) là sai số phân loại của cây. Tham số α >= 0 đóng vai trò phạt kích thước cây; khi α lớn, cây bị tỉa gọn thành cây nhỏ hơn.",
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
    "explanation": "Định lý Condorcet chỉ ra sức mạnh của trí tuệ tập thể: Chỉ cần các mô hình cơ sở độc lập và có độ chính xác nhỉnh hơn đoán mò (p > 0.5), việc biểu quyết đa số (Majority Voting) sẽ khuếch đại độ chính xác lên mức tuyệt hảo.",
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
    "explanation": "Bootstrap rút mẫu kích thước N từ tập ban đầu có N mẫu CÓ HOÀN LẠI (with replacement). Do đó, một mẫu có thể xuất hiện nhiều lần trong tập con, trong khi một số mẫu khác không được chọn lần nào.",
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
    "explanation": "Xác suất không được chọn ở 1 lần rút là (1 - 1/N). Sau N lần rút độc lập, xác suất là (1 - 1/N)^N. Khi N -> ∞, lim (1 - 1/N)^N = 1/e ≈ 0.3678 ≈ 36.8%. Khoảng 63.2% mẫu được chọn vào tập huấn luyện, còn 36.8% nằm ở nhóm OOB.",
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
    "explanation": "Mỗi cây chỉ được huấn luyện trên khoảng 63.2% dữ liệu. Ta có thể dùng 36.8% mẫu OOB còn lại để kiểm tra cây đó. Tổng hợp dự đoán OOB của toàn rừng cho kết quả ước lượng sai số khách quan tương đương K-Fold Cross-Validation mà không tốn thêm chi phí train lại.",
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
    "explanation": "Nếu có 1 đặc trưng cực mạnh, mọi cây trong Bagging thông thường đều sẽ chọn đặc trưng đó ở nút gốc, khiến các cây rất giống nhau (tương quan cao). Random Forest ngẫu nhiên hóa không gian đặc trưng (Feature Subsampling) tại mỗi nút để triệt tiêu tương quan giữa các cây, tối đa hóa hiệu quả giảm phương sai (Variance Reduction).",
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
    "explanation": "Tiêu chuẩn do Leo Breiman đề xuất: Đối với bài toán phân loại, m = floor(sqrt(d)); Đối với bài toán hồi quy, m = floor(d / 3) (và kích thước nút lá tối thiểu thường là 5 thay vì 1).",
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
    "explanation": "MDI tính tổng mức giảm độ vẩn đục (Gini/MSE) trên tất cả các nút mà thuộc tính đó tham gia phân nhánh qua toàn bộ các cây. Permutation Importance (MDA) xáo trộn ngẫu nhiên giá trị của thuộc tính trên tập OOB và đo lường mức độ suy giảm độ chính xác của mô hình.",
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
    "explanation": "Boosting được thiết kế để kết hợp các bộ học yếu (Weak Learners - có độ chệch High Bias). Cây gốc cụt 1 tầng (Decision Stump) là bộ học yếu lý tưởng: huấn luyện cực nhanh, độ chệch cao, và qua từng vòng lặp sẽ được Boosting khắc phục sai số để giảm dần Bias.",
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
    "explanation": "α_m = 0.5 * ln((1 - ε_m) / ε_m). Khi mô hình rất tốt (ε_m -> 0), α_m tiến đến +∞ (tiếng nói có trọng lượng cực lớn). Khi mô hình chỉ ngang đoán mò (ε_m = 0.5), α_m = 0.5 * ln(1) = 0 (không có tiếng nói). Khi ε_m > 0.5, α_m âm (đảo ngược dự đoán).",
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
    "explanation": "Công thức cập nhật: w_i <- w_i * exp(- α_m * y_i * h_m(x_i)). Nếu đoán đúng (y_i * h_m = 1), nhân với exp(-α) < 1 (giảm trọng số). Nếu đoán sai (y_i * h_m = -1), nhân với exp(+α) > 1 (tăng vọt trọng số), khiến mô hình sau phải ưu tiên khắc phục các mẫu bị đoán sai.",
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
    "explanation": "Trong GBDT, mỗi cây mới được khớp để dự đoán phần dư r_i = - [ dL(y_i, F(x_i)) / dF(x_i) ]. Với hàm mất mát MSE, phần dư này chính là (y_i - F(x_i)). Bằng cách này, GBDT tổng quát hóa cơ chế Boosting cho mọi hàm mất mát tùy ý (Huber loss, Cross-Entropy...).",
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
    "explanation": "Shrinkage η in (0, 1] (thường chọn 0.01 đến 0.1) làm giảm tốc độ cập nhật của từng cây. Học chậm rãi (thêm nhiều cây nhỏ với learning rate bé) giúp mô hình khám phá không gian giải pháp mượt mà hơn và chống Overfitting hiệu quả hơn hẳn.",
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
    "explanation": "LightGBM sử dụng chiến lược Leaf-wise (chọn nút lá có delta Loss lớn nhất để chia tiếp, bất đối xứng) kết hợp thuật toán Histogram binning dữ liệu, thay vì chiến lược Level-wise mở rộng cân bằng toàn bộ tầng như GBDT truyền thống.",
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
    "explanation": "Stacking kết hợp các thuật toán dị thể (ví dụ: SVM + Random Forest + XGBoost). Dự đoán của các mô hình tầng 1 (Level-0) được dùng làm biến đầu vào để huấn luyện Meta-model (Level-1, thường là Logistic Regression hoặc Ridge) học cách phân bổ quyền lực tối ưu giữa các mô hình.",
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
    "explanation": "Nếu dùng chính mô hình đã train trên toàn bộ tập train để dự đoán lại tập train làm input cho meta-learner, mô hình sẽ bị rò rỉ (meta-learner học vẹt trên dự đoán đã overfit). Bắt buộc phải dùng Out-of-fold (OOF) predictions qua K-Fold để đảm bảo meta-model học từ các dự đoán khách quan.",
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
    "explanation": "Bagging kết hợp các mô hình sâu độc lập (High Variance) để triệt tiêu phương sai. Boosting sử dụng các mô hình nông đơn giản (High Bias) và học tuần tự sửa sai để ép giảm độ chệch.",
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
    "explanation": "Các mẫu ngoại lai sai nhãn là 'bất khả thi để dự đoán đúng'. Trong AdaBoost và Gradient Boosting, thuật toán hiểu lầm đây là các mẫu khó và dồn toàn bộ trọng số/gradient để khớp vào chúng, dẫn đến mô hình bị méo mó và overfit vào nhiễu.",
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
    "explanation": "Gini = 1 - (0.5^2 + 0.3^2 + 0.2^2) = 1 - (0.25 + 0.09 + 0.04) = 1 - 0.38 = 0.62.",
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
    "explanation": "CART lấy trung điểm giữa các cặp giá trị kề nhau làm ngưỡng cắt ứng viên: (10+20)/2 = 15; (20+30)/2 = 25; (30+40)/2 = 35. Với m giá trị phân biệt, có đúng m - 1 điểm cắt ứng viên.",
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
    "explanation": "Theo Định luật số lớn (Law of Large Numbers) của Breiman, việc tăng số cây trong Random Forest không làm mô hình overfit mà chỉ giúp phương sai của phép bình quân hội tụ ổn định. Giới hạn duy nhất là thời gian huấn luyện và tài nguyên tính toán.",
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
    "explanation": "Khác với Random Forest, việc tăng số cây trong Boosting liên tục ép giảm hàm mất mát trên tập train. Nếu không có Early Stopping hoặc Regularization, Boosting sẽ bắt đầu khớp vào các phần dư nhiễu ngẫu nhiên, dẫn đến Overfitting nghiêm trọng.",
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
    "explanation": "Cây quyết định có tính diễn giải (Interpretability) tuyệt vời nhất trong ML. Mỗi đường đi từ nút gốc đến nút lá là một chuỗi logic IF (điều kiện) THEN (kết luận) tường minh, hoàn toàn không phải hộp đen như mạng nơ-ron sâu.",
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
  }
];
