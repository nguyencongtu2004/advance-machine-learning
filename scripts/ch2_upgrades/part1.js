module.exports = {
  31: {
    question: "Bốn chiều chất lượng dữ liệu cốt lõi trong bước Thu thập và Tiền xử lý dữ liệu bao gồm những yếu tố nào?",
    options: [
      "Tính đầy đủ (Completeness), Tính đồng nhất (Consistency), Tính toàn vẹn (Integrity), Tính kịp thời (Timeliness)",
      "Độ chính xác (Accuracy), Độ nhạy (Recall), F1-score, Ma trận nhầm lẫn",
      "Số lượng dòng, Số lượng cột, Dung lượng file, Định dạng file",
      "Tốc độ mạng, Bộ nhớ RAM, Card đồ họa GPU, Dung lượng ổ cứng SSD"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Bốn chiều kích thước đo lường chất lượng dữ liệu chuẩn mực:
1. **Tính đầy đủ (Completeness):** Mức độ dữ liệu có bị khuyết thiếu (Missing values) hay không. Bị thiếu quá nhiều sẽ làm mất tín hiệu dự đoán quan trọng.
2. **Tính đồng nhất (Consistency):** Dữ liệu không mâu thuẫn định dạng hay đơn vị đo (ví dụ: dòng này ghi $1.75m$, dòng kia lại ghi $175cm$; cột ngày tháng lẫn lộn \`DD/MM/YYYY\` và \`MM/DD/YYYY\`).
3. **Tính toàn vẹn / Hợp lệ (Integrity / Validity):** Tuân thủ logic thực tế (tuổi không thể là số âm $-5$; điểm thi đại học thang 10 không thể là $15/10$).
4. **Tính kịp thời (Timeliness):** Dữ liệu phản ánh đúng thời điểm hiện tại. Dùng thói quen mua sắm năm 2010 để đoán nhu cầu năm 2026 sẽ bị sai lệch nghiêm trọng.`
  },

  32: {
    question: "Hiện tượng 'Sai lệch lấy mẫu' (Sampling Bias) xảy ra khi nào?",
    options: [
      "Khi kích thước tập dữ liệu quá lớn khiến máy tính bị tràn RAM",
      "Khi phương pháp lấy mẫu khiến một số nhóm đối tượng bị chọn quá nhiều trong khi nhóm khác bị bỏ sót, làm mất tính đại diện của tổng thể",
      "Khi tất cả các biến đặc trưng đều có phân phối chuẩn",
      "Khi nhãn mục tiêu là số thực liên tục thay vì biến rời rạc"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Sampling Bias (Sai lệch lấy mẫu):** Xảy ra khi tập dữ liệu con (Sample) được thu thập **không đại diện trung thực cho toàn bộ dân số (Population)**.
* 💡 **Ví dụ đời thường:** Bạn làm khảo sát *"Thu nhập trung bình của người dân TP.HCM"* nhưng lại cử nhân viên ra phát phiếu ở sảnh trung tâm thương mại cao cấp Quận 1 vào 2h chiều ngày làm việc:
  * Người tham gia chủ yếu là giới nhà giàu, người rảnh rỗi hoặc du khách.
  * Toàn bộ giới công nhân, sinh viên, viên chức văn phòng vắng mặt.
  * Kết quả thu được trung bình 80 triệu/tháng $\implies$ Dữ liệu bị thiên lệch nặng nề, đem kết quả này đi huấn luyện mô hình sẽ cho ra những phán đoán sai lệch nghiêm trọng!`
  },

  33: {
    question: "Khi một thuộc tính (cột) trong bảng dữ liệu bị thiếu giá trị (Missing data) lên tới hơn $60\\% - 70\\%$, biện pháp xử lý chuẩn mực nhất là gì?",
    options: [
      "Bắt buộc xóa toàn bộ tập dữ liệu và hủy bỏ dự án",
      "Điền bằng giá trị trung bình cộng (Mean) của các mẫu còn lại",
      "Loại bỏ thuộc tính (cột) đó khỏi tập dữ liệu huấn luyện (Feature Deletion)",
      "Nhân đôi tất cả các giá trị của các cột khác"
    ],
    answer: 2,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Ba chiến lược xử lý dữ liệu khuyết thiếu:
* **Xóa dòng (Row Deletion):** Chỉ nên dùng khi số lượng dòng thiếu **rất ít ($< 3\\% - 5\\%$)** và dữ liệu thiếu hoàn toàn ngẫu nhiên.
* **Điền thay thế (Imputation):** Áp dụng khi cột bị thiếu ở mức vừa phải ($< 30\\% - 40\\%$) bằng Mean, Median hoặc Mode.
* **Xóa cột (Feature Deletion):** Khi một cột bị **khuyết quá nặng (trên $60\\% - 70\\%$)**, thông tin thực tế còn lại quá ít, việc cố tình điền vào sẽ tự tạo ra dữ liệu giả mạo (nhiễu nhân tạo). Cách an toàn nhất là loại bỏ hoàn toàn thuộc tính này.`
  },

  34: {
    question: "Trong một cột dữ liệu số bị lệch phân phối mạnh (Skewed) hoặc chứa nhiều giá trị ngoại lai cực đoan (Outliers), ta nên điền dữ liệu khuyết bằng đại lượng nào?",
    options: [
      "Giá trị trung bình cộng (Mean)",
      "Giá trị trung vị (Median)",
      "Giá trị lớn nhất (Maximum)",
      "Số 0 trong mọi trường hợp"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết (⚠️ BẪY THI KINH ĐIỂN):
* 💼 **Ví dụ phòng kế toán:** 5 nhân viên lương $10, 11, 12, 12, 13$ triệu; có 1 Tổng giám đốc ngồi nhờ lương $\\mathbf{500}$ triệu.
  * $\\text{Mean} = \\frac{10+11+12+12+13+500}{6} = 93$ triệu! $\\implies$ Vô lý hết sức, không có nhân viên nào lương 93 triệu cả.
  * $\\text{Median} = 12$ triệu! $\\implies$ Phản ánh cực kỳ trung thực mức lương phổ biến của nhân viên.
* 🏆 **Quy tắc thi:**
  * Phân phối chuẩn, đối xứng, không ngoại lai $\\implies$ Điền **Mean**.
  * Bị lệch hoặc có **Ngoại lai (Outliers)** $\implies$ Bắt buộc điền **Median (Trung vị)**!`
  },

  35: {
    question: "Sự khác biệt căn bản giữa Nhiễu (Noise) và Điểm ngoại biên (Outliers) là gì?",
    options: [
      "Nhiễu luôn là số nguyên, ngoại biên luôn là số thực",
      "Nhiễu là các sai số đo lường ngẫu nhiên vô nghĩa; Ngoại biên là các quan sát thực tế khác biệt lớn nhưng có thể mang tín hiệu vô cùng quan trọng",
      "Nhiễu chỉ có trong ảnh, ngoại biên chỉ có trong bảng số",
      "Cả hai đều là lỗi và bắt buộc phải xóa bỏ ngay lập tức"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Nhiễu (Noise):** Là lỗi kỹ thuật, sai số phần cứng ngẫu nhiên (ví dụ nhiệt kế chập chờn nhảy vọt lên $90^\\circ C$ trong 1 giây rồi hạ về $30^\\circ C$). Nhiễu là rác, cần loại bỏ hoặc làm mịn.
* **Ngoại biên (Outliers):** Là các sự kiện khác biệt thực sự xảy ra ngoài đời.
* ⚠️ **Lưu ý trắc nghiệm:** Không phải ngoại lai nào cũng nên xóa! Trong bài toán **Phát hiện gian lận thẻ tín dụng**, các giao dịch bình thường chiếm $99.99\\%$. Chính những cú quẹt thẻ "ngoại biên" dị biệt bất thường lại là **mục tiêu quý giá nhất** mà mô hình cần bắt được!`
  },

  36: {
    question: "Phương pháp Chuẩn hóa Min-Max (Min-Max Normalization) co toàn bộ giá trị của một thuộc tính về khoảng đóng tiêu chuẩn nào?",
    options: [
      "$[-1, 1]$",
      "$[0, 1]$",
      "$(-\\infty, +\\infty)$",
      "$[0, 100]$"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Công thức Chuẩn hóa Min-Max:
$$x' = \\frac{x - x_{\\min}}{x_{\\max} - x_{\\min}}$$
* Khi $x = x_{\\min} \\implies x' = 0$.
* Khi $x = x_{\\max} \\implies x' = 1$.
* Toàn bộ miền giá trị của biến được ánh xạ tuyến tính về khoảng đóng **$[0, 1]$**.`
  },

  37: {
    question: "Nhược điểm chí mạng lớn nhất của phương pháp Chuẩn hóa Min-Max là gì?",
    options: [
      "Thời gian tính toán quá lâu",
      "Không thể áp dụng được cho số dương",
      "Cực kỳ nhạy cảm với các giá trị ngoại lai cực đoan (Outliers)",
      "Làm thay đổi số lượng cột của bảng dữ liệu"
    ],
    answer: 2,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Hiểm họa Outliers đối với Min-Max:** Công thức phụ thuộc trực tiếp vào $x_{\\min}$ và $x_{\\max}$.
* Nếu tập dữ liệu tuổi từ $20$ đến $60$, tự nhiên có một cụ già nhập nhầm thành $1000$ tuổi ($x_{\\max} = 1000$):
  * Tất cả các bạn trẻ $20 - 60$ tuổi sẽ bị ép dồn hết thành một nhúm $0.02, 0.03, 0.04$ sát số $0$!
  * Khoảng cách giữa các mẫu bình thường bị triệt tiêu hoàn toàn, khiến mô hình mất sạch khả năng phân biệt.`
  },

  38: {
    question: "Sau khi áp dụng phương pháp Chuẩn hóa Z-score (Standardization), thuộc tính mới sẽ có phân phối với kỳ vọng và độ lệch chuẩn bằng bao nhiêu?",
    options: [
      "Trung bình bằng 1 và độ lệch chuẩn bằng 0",
      "Trung bình $\\mu = 0$ và độ lệch chuẩn $\\sigma = 1$ (phương sai $\\sigma^2 = 1$)",
      "Trung bình bằng 0.5 và phương sai bằng 0.25",
      "Miền giá trị luôn bị chặn cứng trong $[0, 1]$"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Công thức Chuẩn hóa Z-score (Standardization):
$$z = \\frac{x - \\mu}{\\sigma}$$
* Đại lượng $z$ đo lường: Điểm dữ liệu $x$ đang cách giá trị trung bình $\\mu$ một khoảng bằng bao nhiêu lần độ lệch chuẩn $\\sigma$.
* Sau khi chuẩn hóa, biến mới luôn có **kỳ vọng trung bình bằng $0$** và **độ lệch chuẩn (phương sai) bằng $1$**.`
  },

  39: {
    question: "Một thuộc tính có $x_{\\min} = 10$ và $x_{\\max} = 50$. Áp dụng Chuẩn hóa Min-Max, giá trị $x = 30$ sẽ được chuyển đổi thành bao nhiêu?",
    options: [
      "$0.25$",
      "$0.50$",
      "$0.75$",
      "$0.40$"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Áp dụng công thức Min-Max:
$$x' = \\frac{x - x_{\\min}}{x_{\\max} - x_{\\min}} = \\frac{30 - 10}{50 - 10} = \\frac{20}{40} = 0.50$$`
  },

  40: {
    question: "Một phân phối điểm thi có trung bình $\\mu = 40$ và độ lệch chuẩn $\\sigma = 5$. Điểm số $x = 55$ sau khi chuẩn hóa Z-score sẽ nhận giá trị $z$ bằng bao nhiêu?",
    options: [
      "$1.5$",
      "$2.0$",
      "$3.0$",
      "$-3.0$"
    ],
    answer: 2,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Áp dụng công thức Z-score:
$$z = \\frac{x - \\mu}{\\sigma} = \\frac{55 - 40}{5} = \\frac{15}{5} = +3.0$$
* Ý nghĩa: Học sinh này đạt mức điểm cao hơn điểm trung bình của cả lớp đúng 3 lần độ lệch chuẩn.`
  },

  41: {
    question: "Nguy cơ lớn nhất khi sử dụng Label Encoding cho biến danh mục không có thứ bậc (như Màu sắc: Đỏ, Xanh, Vàng) là gì?",
    options: [
      "Làm tăng số lượng cột lên gấp đôi",
      "Vô tình tạo ra một quan hệ thứ tự và khoảng cách số học giả tạo giữa các danh mục ($2 > 1 > 0$)",
      "Làm mất mát toàn bộ dữ liệu số thực",
      "Khiến mô hình không thể hội tụ bằng Gradient Descent"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Nếu mã hóa: \`Đỏ = 0, Xanh = 1, Vàng = 2\`.
* Máy tính sẽ ngầm hiểu: $\\text{Vàng} > \\text{Xanh} > \\text{Đỏ}$, và thậm chí $\\text{Đỏ} (0) + \\text{Vàng} (2) = 2 \\times \\text{Xanh} (1)$!
* Điều này phi lý về mặt logic. Do đó, **Label Encoding chỉ được dùng cho biến có thứ tự tự nhiên** (như Trình độ học vấn: Cấp 1, Cấp 2, Cấp 3, Đại học; hoặc Size áo: S, M, L, XL).`
  },

  42: {
    question: "Kỹ thuật One-Hot Encoding biến đổi một thuộc tính có $K$ giá trị danh mục khác nhau thành cấu trúc như thế nào?",
    options: [
      "Một cột duy nhất chứa các số nguyên từ $0$ đến $K-1$",
      "$K$ cột nhị phân riêng biệt ($0$ hoặc $1$), trong đó tại mỗi dòng chỉ có duy nhất 1 cột nhận giá trị $1$",
      "$K^2$ cột ma trận chuyển vị",
      "Một vector số thực liên tục có độ dài bằng $K/2$"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Với $K$ trạng thái danh mục (ví dụ Hà Nội, Đà Nẵng, TP.HCM $\\to K = 3$), One-Hot Encoding sinh ra $3$ cột mới:
  * Hà Nội: \`[1, 0, 0]\`
  * Đà Nẵng: \`[0, 1, 0]\`
  * TP.HCM: \`[0, 0, 1]\`
* Các vector này trực giao và có khoảng cách đối xứng bình đẳng, không áp đặt thứ tự giả.`
  },

  43: {
    question: "Sự khác biệt căn bản giữa Lựa chọn đặc trưng (Feature Selection) và Rút trích đặc trưng (Feature Extraction) là gì?",
    options: [
      "Selection tạo ra các đặc trưng hoàn toàn mới; Extraction giữ nguyên các biến cũ",
      "Feature Selection chỉ giữ lại hoặc loại bỏ tập con các biến ban đầu; Feature Extraction dùng phép biến đổi toán học để tạo ra không gian đặc trưng mới có số chiều thấp hơn",
      "Selection chỉ dùng cho hồi quy; Extraction chỉ dùng cho phân loại",
      "Cả hai hoàn toàn giống nhau chỉ khác tên gọi"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
| Tiêu chí | Feature Selection (Lựa chọn) | Feature Extraction (Rút trích) |
| :--- | :--- | :--- |
| **Bản chất** | **"Sàng lọc & Giữ lại"** | **"Nhào nặn & Tạo mới"** |
| **Biến mới** | **KHÔNG tạo biến mới**, giữ nguyên ý nghĩa vật lý ban đầu. | **CÓ tạo ra các biến mới** (tổ hợp toán học từ các biến cũ). |
| **Ví dụ** | Lasso ($L_1$), Lọc tương quan Pearson, RFE. | **PCA**, t-SNE, LDA. |`
  },

  44: {
    question: "Hiện tượng 'Lời nguyền số chiều' (Curse of Dimensionality) dẫn đến hệ quả tiêu cực nào sau đây?",
    options: [
      "Không gian trở nên cực kỳ thưa thớt (Sparse), khoảng cách giữa các cặp điểm đều trở nên xấp xỉ bằng nhau khiến các thuật toán dựa vào khoảng cách (KNN, K-Means) bị vô hiệu hóa",
      "Dung lượng bộ nhớ giảm đi đáng kể",
      "Mô hình không bao giờ bị Overfitting",
      "Thời gian tính toán của mô hình giảm về 0"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Khi số chiều $p$ tăng vọt lên hàng trăm, hàng nghìn chiều:
1. **Thể tích không gian tăng theo cấp số nhân:** Dữ liệu trở nên cực kỳ thưa thớt như vài hạt cát giữa vũ trụ mênh mông.
2. **Khoảng cách Euclidean bị bão hòa:** Khoảng cách giữa 2 điểm bất kỳ đều to như nhau, khiến KNN hoặc K-Means không thể phân biệt được điểm nào gần, điểm nào xa.
3. **Mô hình bị Overfitting nặng:** Đòi hỏi số lượng dữ liệu lớn khủng khiếp để lấp đầy không gian.`
  },

  45: {
    question: "Thuật toán Phân tích Thành phần Chính (PCA - Principal Component Analysis) thuộc nhóm phương pháp học nào?",
    options: [
      "Học có giám sát (Supervised Learning)",
      "Học không giám sát (Unsupervised Learning)",
      "Học bán giám sát (Semi-Supervised Learning)",
      "Học tăng cường (Reinforcement Learning)"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **PCA là Học không giám sát (Unsupervised Learning):**
  * PCA **HOÀN TOÀN KHÔNG BIẾT VÀ KHÔNG SỬ DỤNG NHÃN $y$**!
  * Nó chỉ nhìn vào cấu trúc hình học và sự phân tán của ma trận đặc trưng đầu vào $X$ để tìm các trục chiếu trực giao tối ưu.`
  },

  46: {
    question: "Mục tiêu tối ưu hóa hình học cốt lõi của thuật toán PCA khi chiếu dữ liệu sang không gian mới là gì?",
    options: [
      "Tối thiểu hóa khoảng cách giữa các tâm cụm",
      "Bảo toàn tối đa phương sai (Variance) của dữ liệu, đồng thời triệt tiêu hoàn toàn tương quan giữa các trục mới (hiệp phương sai = 0)",
      "Tối đa hóa số lượng mẫu dữ liệu",
      "Ép tất cả các điểm dữ liệu nằm trên một đường tròn"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Hai mục tiêu tối thượng của PCA:
1. **Bảo toàn phương sai tối đa (Maximize Variance):** Hướng nào mà các điểm dữ liệu tản mát rộng nhất thì chứa nhiều thông tin nhất $\implies$ Chọn làm Thành phần chính 1 (PC1).
2. **Triệt tiêu tương quan:** Các thành phần chính tiếp theo (PC2, PC3...) bắt buộc phải **vuông góc (trực giao)** với các thành phần trước đó, loại bỏ hoàn toàn thông tin dư thừa lặp lại giữa các biến.`
  },

  47: {
    question: "Bước tiền xử lý nào BẮT BUỘC phải thực hiện đầu tiên trong quy trình PCA trước khi tính ma trận hiệp phương sai?",
    options: [
      "Chuẩn hóa Min-Max về khoảng $[0, 1]$",
      "Tâm hóa dữ liệu (Data Centering) bằng cách lấy từng điểm trừ đi vector trung bình: $X_{centered} = X - \\bar{x}$",
      "Mã hóa One-Hot toàn bộ bảng",
      "Chia tập dữ liệu thành 10 Folds"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Tâm hóa dữ liệu (Zero-centering):**
  $$X_{centered} = X - \\bar{x}$$
* Thao tác này giúp **dời toàn bộ đám mây dữ liệu về gốc tọa độ $(0, 0)$** mà không làm thay đổi hình dáng hay khoảng cách tương đối giữa các điểm.
* Nếu không tâm hóa, công thức tính hiệp phương sai $\\Sigma = \\frac{1}{n-1} X^TX$ sẽ bị sai lệch hoàn toàn.`
  },

  48: {
    question: "Trong ma trận hiệp phương sai (Covariance Matrix $\\Sigma$) của dữ liệu đã tâm hóa, các phần tử nằm trên đường chéo chính biểu diễn đại lượng nào?",
    options: [
      "Mức độ tương quan giữa các cặp đặc trưng khác nhau",
      "Phương sai (Variance) của từng đặc trưng riêng lẻ",
      "Nghịch đảo của các giá trị trung bình",
      "Tổng sai số bình phương phần dư"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Ma trận hiệp phương sai $\\Sigma$ kích thước $(p \\times p)$:
* **Đường chéo chính (vị trí $(j, j)$):** Là $\\text{Cov}(x_j, x_j) = \\text{Var}(x_j)$ — **Phương sai của thuộc tính thứ $j$**.
* **Các phần tử ngoài đường chéo (vị trí $(j, k)$ với $j \\ne k$):** Là $\\text{Cov}(x_j, x_k)$ — **Hiệp phương sai giữa hai thuộc tính $j$ và $k$**.`
  },

  49: {
    question: "Trong bài toán PCA, Vector riêng (Eigenvector) và Trị riêng (Eigenvalue) của ma trận hiệp phương sai mang ý nghĩa hình học gì?",
    options: [
      "Eigenvector chỉ độ lớn; Eigenvalue chỉ hướng",
      "Eigenvector xác định HƯỚNG của trục thành phần chính mới; Eigenvalue biểu thị ĐỘ LỚN PHƯƠNG SAI (lượng thông tin) dọc theo hướng đó",
      "Cả hai đều biểu thị số lượng mẫu của tập train",
      "Eigenvector là ma trận nghịch đảo của Eigenvalue"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Phương trình đặc trưng: $\\Sigma v = \\lambda v$
* **Vector riêng ($v$):** Là vector đơn vị định hình **HƯỚNG của trục tọa độ mới**.
* **Trị riêng ($\\lambda$):** Là một số thực đo lường **ĐỘ LỚN PHƯƠNG SAI** của dữ liệu khi chiếu lên trục đó. Trị riêng càng lớn thì trục đó càng giữ lại nhiều thông tin quý giá!`
  },

  50: {
    question: "Sau khi tìm được các Trị riêng (Eigenvalues) và Vector riêng (Eigenvectors), bước tiếp theo trong quy trình PCA là gì?",
    options: [
      "Sắp xếp các Trị riêng theo thứ tự GIẢM DẦN ($\\lambda_1 \\ge \\lambda_2 \\ge \\dots \\ge \\lambda_p$) cùng các Vector riêng tương ứng",
      "Tính đạo hàm bậc hai của ma trận hiệp phương sai",
      "Xóa bỏ tất cả các Trị riêng có giá trị dương",
      "Đổi dấu toàn bộ các phần tử của vector riêng"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Vì mục tiêu của ta là giữ lại các hướng có phương sai lớn nhất:
  * Ta xếp: $\\lambda_1 \\ge \\lambda_2 \\ge \\dots \\ge \\lambda_p \\ge 0$.
  * Vector $v_1$ tương ứng với $\\lambda_1$ lớn nhất chính là **Thành phần chính 1 (PC1)**.
  * Vector $v_2$ tương ứng với $\\lambda_2$ lớn nhì chính là **Thành phần chính 2 (PC2)**.`
  },

  51: {
    question: "Tỷ lệ phương sai giải thích (Explained Variance Ratio - EVR) của thành phần chính thứ $k$ được tính bằng công thức nào?",
    options: [
      "$\\text{EVR}_k = \\lambda_k \\times \\sum_{j=1}^p \\lambda_j$",
      "$\\text{EVR}_k = \\frac{\\lambda_k}{\\sum_{j=1}^p \\lambda_j}$",
      "$\\text{EVR}_k = \\frac{\\sum_{j=1}^p \\lambda_j}{\\lambda_k}$",
      "$\\text{EVR}_k = \\sqrt{\\lambda_k}$"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
$$\\text{EVR}_k = \\frac{\\lambda_k}{\\sum_{j=1}^p \\lambda_j}$$
* **Ý nghĩa:** Cho biết thành phần chính thứ $k$ **nắm giữ bao nhiêu phần trăm thông tin (phương sai)** của toàn bộ bộ dữ liệu gốc $p$ chiều.`
  },

  52: {
    question: "Một tập dữ liệu 3 chiều có các trị riêng tính được là $\\lambda_1 = 6.0, \\lambda_2 = 3.0, \\lambda_3 = 1.0$. Tỷ lệ phương sai giải thích của Thành phần chính 1 (PC1) là bao nhiêu?",
    options: [
      "$30\\%$",
      "$60\\%$",
      "$90\\%$",
      "$10\\%$"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Tổng các trị riêng:
  $$\\sum_{j=1}^3 \\lambda_j = 6.0 + 3.0 + 1.0 = 10.0$$
* Tỷ lệ phương sai giải thích của PC1:
  $$\\text{EVR}_1 = \\frac{6.0}{10.0} = 0.6 = 60\\%$$`
  },

  53: {
    question: "Tổng tỷ lệ phương sai giải thích (EVR) của toàn bộ $p$ thành phần chính luôn luôn bằng bao nhiêu?",
    options: [
      "Bằng $0$",
      "Phụ thuộc vào số lượng mẫu $n$",
      "Luôn luôn bằng đúng $1.0$ (tức $100\\%$)",
      "Bằng giá trị trung bình $\\mu$"
    ],
    answer: 2,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Vì tử số là từng trị riêng và mẫu số là tổng của tất cả các trị riêng:
$$\\sum_{k=1}^p \\text{EVR}_k = \\frac{\\sum_{k=1}^p \\lambda_k}{\\sum_{j=1}^p \\lambda_j} = 1.0 \\quad (100\\%)$$
* Toàn bộ $p$ thành phần chính cộng lại luôn bảo toàn $100\\%$ phương sai của không gian gốc.`
  },

  54: {
    question: "Các thành phần chính (Principal Components) do thuật toán PCA tạo ra có mối quan hệ hình học và thống kê nào sau đây?",
    options: [
      "Chúng song song với nhau và có tương quan bằng 1",
      "Chúng trực giao (vuông góc) đôi một và có hiệp phương sai bằng 0 (triệt tiêu hoàn toàn tương quan tuyến tính)",
      "Chúng cắt nhau tại góc 45 độ",
      "Chúng luôn có độ dài bằng nhau và bằng vô cùng"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Trực giao đôi một (Orthogonal):** $v_i^T v_j = 0$ với mọi $i \\ne j$.
* **Triệt tiêu tương quan:** Ma trận hiệp phương sai của dữ liệu trong không gian mới là ma trận đường chéo, nghĩa là mọi thành phần chính đều độc lập tuyến tính với nhau, loại bỏ hoàn toàn hiện tượng đa cộng tuyến.`
  },

  55: {
    question: "Dữ liệu dạng văn bản thô (Text) thường được biểu diễn thành các vector số học thông qua những kỹ thuật nào?",
    options: [
      "Chỉ dùng Min-Max Normalization",
      "Túi từ (Bag-of-Words), TF-IDF hoặc Word Embeddings (Word2Vec, BERT embeddings)",
      "Lập trình hướng đối tượng OOP",
      "Giải thuật Dijkstra"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Máy tính không thể trực tiếp thực hiện phép toán trên ký tự văn bản:
* **Bag-of-Words (BoW):** Đếm tần số xuất hiện của từng từ vựng trong văn bản.
* **TF-IDF:** Cân nhắc trọng số từ vựng (từ xuất hiện nhiều trong câu nhưng hiếm trong kho tài liệu thì mang ý nghĩa quan trọng).
* **Word Embeddings (Word2Vec, FastText, Transformer):** Ánh xạ từ ngữ vào không gian vector nhiều chiều phản ánh ngữ nghĩa học.`
  },

  56: {
    question: "Kỹ thuật Rời rạc hóa (Binning / Discretization) thực hiện thao tác biến đổi nào trên dữ liệu?",
    options: [
      "Gom các giá trị số liên tục thành các khoảng/nhóm danh mục (ví dụ Tuổi liên tục gom thành nhóm Trẻ, Trung niên, Già)",
      "Xóa bỏ các cột có chứa số 0",
      "Chuyển đổi văn bản thành chữ in hoa",
      "Sắp xếp bảng dữ liệu theo thứ tự bảng chữ cái"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Binning (Rời rạc hóa / Chia thùng):**
  * Chia một biến số thực liên tục thành các khoảng giá trị rời rạc.
  * 💡 **Ví dụ:** Cột Tuổi từ $0 - 100$ được chia thành: Nhóm $[0 - 18)$ (Trẻ em), $[18 - 60)$ (Trưởng thành), $[60 - 100]$ (Người cao tuổi).
  * Giúp giảm độ nhạy với ngoại lai và cho phép mô hình học các phi tuyến đơn giản.`
  },

  57: {
    question: "Khi thu thập dữ liệu bằng kỹ thuật Crawling & Scraping trên mạng Internet, thách thức tiền xử lý lớn nhất là gì?",
    options: [
      "Dữ liệu luôn luôn có sẵn định dạng số hoàn hảo",
      "Dữ liệu bán cấu trúc lẫn nhiều tạp chất (thẻ HTML, quảng cáo rác, văn bản trùng lặp và thiếu cấu trúc chuẩn mực)",
      "Không thể lưu trữ được vào file văn bản",
      "Tất cả các trang web đều dùng cùng một chuẩn schema"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Dữ liệu cào web (Web Scraping) là dữ liệu thô bán cấu trúc:
  * Trộn lẫn mã JavaScript, thẻ HTML (\`<div>\`, \`<span>\`), banner quảng cáo, menu điều hướng.
  * Đòi hỏi quy trình bóc tách (Parsing), làm sạch (Regex cleaning), loại bỏ trùng lặp (Deduplication) cực kỳ công phu trước khi có thể huấn luyện mô hình.`
  },

  58: {
    question: "Phép chiếu PCA từ không gian 2 chiều xuống không gian 1 chiều thực hiện ánh xạ các điểm dữ liệu như thế nào?",
    options: [
      "Gán tất cả các điểm về gốc tọa độ $(0, 0)$",
      "Chiếu vuông góc (trực giao) từng điểm dữ liệu đã tâm hóa lên đường thẳng thành phần chính 1 (PC1)",
      "Xóa bỏ ngẫu nhiên 50% số điểm dữ liệu",
      "Uốn cong không gian thành hình xoắn ốc"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Khi giảm chiều từ 2D xuống 1D:
  * PCA tìm đường thẳng tốt nhất (PC1) sao cho tổng khoảng cách bình phương từ các điểm đến đường thẳng là nhỏ nhất (tương đương với phương sai các hình chiếu là lớn nhất).
  * Mỗi điểm dữ liệu $x_i$ được **chiếu trực giao (vuông góc)** lên đường thẳng PC1, tọa độ mới là khoảng cách có hướng từ gốc tọa độ đến hình chiếu.`
  },

  59: {
    question: "Đặc trưng dư thừa (Redundant Feature) được định nghĩa là gì trong quá trình Feature Engineering?",
    options: [
      "Đặc trưng chứa toàn bộ giá trị rỗng NaN",
      "Đặc trưng lặp lại thông tin đã có ở một hoặc nhiều đặc trưng khác (có tương quan tuyến tính rất cao với các biến khác)",
      "Đặc trưng có giá trị phương sai cực lớn",
      "Đặc trưng là nhãn mục tiêu cần dự đoán"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Đặc trưng dư thừa:** Ví dụ bảng dữ liệu có cả 2 cột:
  * Cột 1: *Năm sinh*
  * Cột 2: *Tuổi* (với $\\text{Tuổi} = 2026 - \\text{Năm sinh}$)
* Cột Tuổi hoàn toàn không mang lại thêm bất kỳ thông tin mới nào cho mô hình! Nó gây ra hiện tượng **Đa cộng tuyến hoàn hảo**, làm phình to ma trận và khiến các thuật toán hồi quy bị bất ổn.`
  },

  60: {
    question: "Tiêu chí nào sau đây thường được dùng phổ biến nhất để lựa chọn số chiều $K$ cần giữ lại trong thuật toán PCA?",
    options: [
      "Chọn $K$ sao cho tổng tỷ lệ phương sai giải thích tích lũy (Cumulative EVR) đạt một ngưỡng mong muốn (thường từ $85\\% - 95\\%$), hoặc dùng đồ thị Scree Plot (phương pháp Elbow)",
      "Luôn luôn chọn $K = 1$ trong mọi bài toán",
      "Chọn $K$ bằng đúng số chiều ban đầu $p$",
      "Chọn $K$ bằng số lượng mẫu $n$"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Hai phương pháp chuẩn mực để chọn số chiều $K$:
1. **Ngưỡng phương sai tích lũy:** Cộng dồn tỷ lệ phương sai $\\sum_{k=1}^K \\text{EVR}_k \\ge 90\\%$ (hoặc $95\\%$). Nén giảm được số chiều tối đa mà vẫn giữ lại được $90\\%$ tinh hoa thông tin gốc.
2. **Phương pháp Điểm uốn (Elbow / Scree Plot):** Vẽ biểu đồ trị riêng giảm dần. Chọn điểm mà đồ thị bắt đầu gãy khúc nằm ngang (phần phương sai còn lại chỉ là nhiễu không đáng kể).`
  }
};
