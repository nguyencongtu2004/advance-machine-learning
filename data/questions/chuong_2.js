/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 2: TIỀN XỬ LÝ DỮ LIỆU VÀ GIẢM CHIỀU
   - Số lượng: 50 câu
   - Nội dung: Xử lý missing value, chuẩn hóa Min-Max/Z-score, mã hóa One-Hot, phát hiện nhiễu IQR/3-Sigma, Giảm chiều dữ liệu PCA & EVR
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_2 = [
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
  }
];

// Tự động gộp vào ngân hàng câu hỏi chung
if (!window.QUESTION_BANK) {
  window.QUESTION_BANK = [];
}
window.QUESTION_BANK.push(...window.QUESTIONS_CHUONG_2);
