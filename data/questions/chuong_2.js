/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 2: TIỀN XỬ LÝ VÀ BIỂU DIỄN DỮ LIỆU
   - Số lượng: 50 câu
   - Nội dung: 4 chiều chất lượng dữ liệu, Sampling Bias, Missing data (Xóa/Điền Mean/Median),
     Outliers (Tukey, Winsorization), Chuẩn hóa (Min-Max, Z-score, RobustScaler),
     Mã hóa (Label, One-Hot, Target), Feature Engineering (Selection vs Extraction),
     Lời nguyền số chiều (Curse of Dimensionality), PCA (7 bước tính toán, EVR, Trực giao, Tái tạo)
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_2 = [
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
  }
];
