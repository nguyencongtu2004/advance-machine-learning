/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 4: CÂY QUYẾT ĐỊNH VÀ HỌC KẾT HỢP
   - Số lượng: 80 câu
   - Nội dung: Decision Tree (Entropy, Information Gain ID3, Gini CART, Pruning), Bagging, Random Forest, Boosting (AdaBoost, Gradient Boosting)
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_4 = [
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
  }
];

// Tự động gộp vào ngân hàng câu hỏi chung
if (!window.QUESTION_BANK) {
  window.QUESTION_BANK = [];
}
window.QUESTION_BANK.push(...window.QUESTIONS_CHUONG_4);
