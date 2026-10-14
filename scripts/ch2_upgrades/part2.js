module.exports = {
  261: {
    question: "Trong 4 chiều chất lượng dữ liệu, chiều nào phản ánh việc dữ liệu tuân thủ cùng một quy chuẩn, định dạng và đơn vị đo lường thống nhất trên toàn bộ hệ thống?",
    options: [
      "Tính đầy đủ (Completeness)",
      "Tính nhất quán / đồng nhất (Consistency)",
      "Tính kịp thời (Timeliness)",
      "Tính khả chuyển (Portability)"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Tính đồng nhất / nhất quán (Consistency):** Đảm bảo không có sự mâu thuẫn nội tại về mặt biểu diễn hoặc quy ước trong cùng một tập dữ liệu:
  * Chiều cao: Người ghi mét ($1.72m$), người ghi centimet ($172cm$).
  * Ngày tháng: Cột ghi \`YYYY-MM-DD\`, cột ghi \`DD/MM/YYYY\`.
  * Tiền tệ: Người ghi USD, người ghi VNĐ.
* Chuẩn hóa tính đồng nhất là nhiệm vụ sống còn đầu tiên của bước làm sạch dữ liệu.`
  },

  262: {
    question: "Cơ chế dữ liệu khuyết Missing Completely at Random (MCAR - Khuyết hoàn toàn ngẫu nhiên) có đặc điểm cốt lõi nào sau đây?",
    options: [
      "Dữ liệu chỉ bị khuyết đối với những người có thu nhập cao",
      "Xác suất dữ liệu bị thiếu phụ thuộc vào một biến quan sát khác trong bảng",
      "Xác suất bị thiếu của một ô dữ liệu là hoàn toàn ngẫu nhiên, độc lập với cả giá trị của chính nó lẫn mọi biến số khác trong tập dữ liệu",
      "Dữ liệu bị thiếu do thuật toán tự động xóa bỏ"
    ],
    answer: 2,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Ba cơ chế dữ liệu khuyết thiếu theo lý thuyết của Rubin (1976):
1. **MCAR (Missing Completely at Random):** Thiếu hoàn toàn ngẫu nhiên (ví dụ: gió thổi bay mất một tờ phiếu khảo sát, hoặc một gói tin mạng bị rơi ngẫu nhiên). Việc xóa các dòng MCAR không làm thiên lệch phân phối mẫu.
2. **MAR (Missing at Random):** Khuyết có điều kiện (ví dụ: phụ nữ ít khai báo cân nặng hơn nam giới, nhưng sau khi kiểm soát biến giới tính thì tính chất thiếu là ngẫu nhiên).
3. **MNAR (Missing Not at Random):** Khuyết không ngẫu nhiên (ví dụ: những người trốn thuế hoặc có thu nhập cực khủng luôn cố tình bỏ trống ô kê khai tài sản).`
  },

  263: {
    question: "Khi dữ liệu bị khuyết thuộc dạng Missing Not at Random (MNAR, ví dụ người thu nhập cực cao cố tình giấu thu nhập), cách xử lý nào sau đây là thông minh và giữ được tín hiệu dự đoán tốt nhất?",
    options: [
      "Bắt buộc xóa bỏ tất cả các dòng bị khuyết đó",
      "Điền giá trị trung bình cộng Mean rồi coi như không có chuyện gì",
      "Điền giá trị thay thế (như Median) kết hợp TẠO THÊM MỘT CỘT CỜ NHỊ PHÂN MỚI (Missing Indicator Flag: $1$ nếu bị thiếu, $0$ nếu có sẵn) để mô hình học được tín hiệu ẩn",
      "Gán tất cả các ô thiếu thành số âm vô cùng"
    ],
    answer: 2,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Tín hiệu trong sự vắng mặt:** Khi dữ liệu là MNAR, **chính hành vi bỏ trống ô dữ liệu đã là một đặc trưng quý giá** (người bỏ trống ô thu nhập có xác suất là đại gia giàu có cao hơn người bình thường).
* Nếu chỉ điền Median đơn thuần, ta đã xóa sạch dấu vết này.
* **Kỹ thuật Missing Indicator:** Tạo cột cờ \`is_income_missing\`:
  * Ô nào có sẵn số: điền bình thường, cờ $= 0$.
  * Ô nào bị thiếu: điền Median vào ô thu nhập, đồng thời bật cờ $= 1$.
  * Mô hình học máy sẽ sử dụng cột cờ này như một đặc trưng phân loại quan trọng!`
  },

  264: {
    question: "Trong phương pháp phát hiện ngoại lai bằng Quy tắc Hàng rào Tukey (Boxplot), ngưỡng xác định 'Ngoại lai cực đoan' (Extreme Outliers) nằm ngoài khoảng nào sau đây?",
    options: [
      "$[Q_1 - 1.5 \\times \\text{IQR}, Q_3 + 1.5 \\times \\text{IQR}]$",
      "$[Q_1 - 3.0 \\times \\text{IQR}, Q_3 + 3.0 \\times \\text{IQR}]$",
      "$[\\mu - 2\\sigma, \\mu + 2\\sigma]$",
      "$[x_{\\min}, x_{\\max}]$"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Với khoảng tứ phân vị $\\text{IQR} = Q_3 - Q_1$:
* **Hàng rào trong (Ngoại lai nhẹ / Mild Outliers):** Nằm ngoài khoảng:
  $$[Q_1 - 1.5 \\times \\text{IQR}, \\quad Q_3 + 1.5 \\times \\text{IQR}]$$
* **Hàng rào ngoài (Ngoại lai cực đoan / Extreme Outliers):** Nằm ngoài khoảng:
  $$[Q_1 - 3.0 \\times \\text{IQR}, \\quad Q_3 + 3.0 \\times \\text{IQR}]$$`
  },

  265: {
    question: "Kỹ thuật Winsorization xử lý các giá trị ngoại lai (Outliers) theo cơ chế biến đổi nào?",
    options: [
      "Xóa bỏ hoàn toàn các dòng dữ liệu có chứa ngoại lai",
      "Thay thế các giá trị vượt ngưỡng bằng giá trị của phân vị giới hạn xác định (ví dụ co các giá trị nhỏ hơn phân vị 1% về phân vị 1%, và lớn hơn phân vị 99% về phân vị 99%)",
      "Lấy logarit tự nhiên của toàn bộ cột",
      "Nhân tất cả các ngoại lai với số 0"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Winsorization (Cắt ngọn / Co cụm phân vị):** Thay vì xóa bỏ mẫu làm giảm kích thước dữ liệu quý giá:
  * Ta ấn định ngưỡng phân vị trên (ví dụ $99\\%$) và ngưỡng phân vị dưới (ví dụ $1\\%$).
  * Mọi giá trị lớn hơn mốc $99\\%$ được ép co về bằng đúng giá trị mốc $99\\%$.
  * Mọi giá trị nhỏ hơn mốc $1\\%$ được ép co về bằng đúng mốc $1\\%$.
* Cách làm này giúp "thuần hóa" các điểm ngoại lai điên rồ mà vẫn giữ nguyên số lượng quan sát của tập dữ liệu.`
  },

  266: {
    question: "Hiện tượng 'Bẫy biến giả' (Dummy Variable Trap) xảy ra khi nào trong quá trình mã hóa One-Hot Encoding?",
    options: [
      "Khi một biến danh mục có $K$ trạng thái nhưng ta lại tạo đủ cả $K$ cột nhị phân trong mô hình có chứa hệ số chặn bias ($w_0$), gây ra hiện tượng Đa cộng tuyến hoàn hảo (Multicollinearity)",
      "Khi mã hóa chữ hoa thành chữ thường",
      "Khi số lượng danh mục vượt quá 1000",
      "Khi sử dụng GPU để train mạng nơ-ron"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Dummy Variable Trap (Bẫy biến giả):**
  * Giả sử biến Giới tính có 2 trạng thái: Nam và Nữ. Nếu ta tạo đủ 2 cột \`Is_Nam\` và \`Is_Nu\`:
    $$\\text{Is\\_Nam} + \\text{Is\\_Nu} = 1$$
  * Tổng 2 cột này luôn bằng $1$, trùng khớp hoàn hảo với cột bias hệ số chặn $x_0 = 1$!
  * Ma trận $X^T X$ sẽ bị suy biến (không khả nghịch), khiến việc giải nghiệm OLS bị sụp đổ!
* 🛡️ **Giải pháp:** Với biến có $K$ danh mục, ta **chỉ tạo $K-1$ cột biến giả** (ví dụ tham số \`drop='first'\` trong Scikit-learn), danh mục còn lại được làm mốc tham chiếu cơ sở (Base category).`
  },

  267: {
    question: "Khi áp dụng Target Encoding (Mean Encoding) cho biến danh mục có độ lực lượng cao (nhiều nhóm), nguy cơ tiềm ẩn lớn nhất là gì?",
    options: [
      "Làm bảng dữ liệu phình to thêm hàng nghìn cột",
      "Bị rò rỉ dữ liệu mục tiêu (Target Leakage) dẫn đến Overfitting nghiêm trọng, đặc biệt ở các nhóm danh mục có quá ít mẫu",
      "Khiến tất cả các giá trị biến thành số nguyên",
      "Mất mát toàn bộ thông tin nhãn lớp"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Target Encoding:** Thay mỗi danh mục bằng giá trị trung bình của nhãn mục tiêu $y$ thuộc danh mục đó.
* ⚠️ **Nguy cơ Overfitting & Target Leakage:** Nếu một danh mục hiếm chỉ xuất hiện duy nhất 1 lần trong tập Train với nhãn $y = 1$, mô hình sẽ gán cho danh mục đó giá trị $1.0$. Khi học, mô hình sẽ coi danh mục này là dự đoán $100\\%$ chính xác $\\implies$ Học vẹt!
* Khắc phục: Phải dùng K-Fold Target Encoding và kỹ thuật làm mịn (Smoothing / Regularization).`
  },

  268: {
    question: "Bộ chuẩn hóa RobustScaler trong thư viện Scikit-learn sử dụng các đại lượng thống kê nào để chuẩn hóa đặc trưng nhằm chống lại sự ảnh hưởng của ngoại lai?",
    options: [
      "Giá trị nhỏ nhất $x_{\\min}$ và lớn nhất $x_{\\max}$",
      "Giá trị trung bình cộng $\\mu$ và phương sai $\\sigma^2$",
      "Trung vị (Median) và Khoảng tứ phân vị (Interquartile Range - $\\text{IQR} = Q_3 - Q_1$)",
      "Độ dốc gradient và hệ số học learning rate"
    ],
    answer: 2,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Công thức của RobustScaler:
$$x_{robust} = \\frac{x - \\text{Median}}{\\text{IQR}} = \\frac{x - Q_2}{Q_3 - Q_1}$$
* Thay vì trừ Mean và chia Standard Deviation (vốn rất dễ bị méo mó bởi ngoại lai), RobustScaler sử dụng **Median** và **IQR** — hai đại lượng thống kê phi tham số có tính kháng cự ngoại lai (Robust) tuyệt đối.`
  },

  269: {
    question: "Cho thuộc tính $x$ có $x_{\\min} = 20$ và $x_{\\max} = 100$. Khi chuẩn hóa $x$ về đoạn $[-1, 1]$, giá trị $x = 60$ sẽ trở thành bao nhiêu?",
    options: [
      "$-0.5$",
      "$0.0$",
      "$0.5$",
      "$1.0$"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Công thức chuẩn hóa về khoảng tùy ý $[a, b]$:
$$x' = a + \\frac{x - x_{\\min}}{x_{\\max} - x_{\\min}} (b - a)$$
Với $[a, b] = [-1, 1]$:
* Bước 1: Chuẩn hóa về $[0, 1]$:
  $$x_{std} = \\frac{60 - 20}{100 - 20} = \\frac{40}{80} = 0.5$$
* Bước 2: Ánh xạ sang $[-1, 1]$:
  $$x' = -1 + 0.5 \\times (1 - (-1)) = -1 + 0.5 \\times 2 = 0.0$$`
  },

  270: {
    question: "Cho một tập dữ liệu có giá trị trung bình $\\mu = 50$ và độ lệch chuẩn $\\sigma = 10$. Điểm số $x = 75$ có giá trị chuẩn hóa Z-score là bao nhiêu?",
    options: [
      "$1.5$",
      "$2.0$",
      "$2.5$",
      "$3.0$"
    ],
    answer: 2,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Áp dụng công thức Z-score:
$$z = \\frac{x - \\mu}{\\sigma} = \\frac{75 - 50}{10} = \\frac{25}{10} = 2.5$$`
  },

  271: {
    question: "Thuật toán học máy nào sau đây KHÔNG BỊ ẢNH HƯỞNG bởi thang đo của các đặc trưng (không bắt buộc phải chuẩn hóa Scale dữ liệu)?",
    options: [
      "K-Nearest Neighbors (KNN)",
      "Phân tích Thành phần Chính (PCA)",
      "Hồi quy Tuyến tính có điều chuẩn Ridge ($L_2$)",
      "Cây quyết định (Decision Tree) và Rừng ngẫu nhiên (Random Forest)"
    ],
    answer: 3,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Các thuật toán nhạy cảm với thang đo (BẮT BUỘC SCALE):**
  * KNN, K-Means: Tính khoảng cách Euclidean.
  * PCA: Tìm hướng có phương sai lớn nhất (cột nào đơn vị to phương sai sẽ giả vờ to).
  * Ridge / Lasso: Phạt độ lớn trọng số $\\lambda w^2$.
  * Gradient Descent trong Mạng nơ-ron: Bề mặt loss bị méo dạng elip dẹp nếu không scale.
* **Cây quyết định (Decision Trees) & Mô hình Ensemble (Random Forest, XGBoost):**
  * Phân nhánh tại mỗi nút chỉ dựa trên quy tắc so sánh ngưỡng đơn biến: *"Nếu $x_j \\le \\theta$ thì rẽ trái"*.
  * Việc nhân thêm một số dương vào $x_j$ không hề làm thay đổi thứ tự tương quan, do đó **Cây quyết định hoàn toàn bất biến trước thang đo**!`
  },

  272: {
    question: "Khái niệm 'Lời nguyền số chiều' (Curse of Dimensionality) đề cập đến hiện tượng nào sau đây?",
    options: [
      "Máy tính bị hỏng khi lưu file CSV quá 100MB",
      "Khi số chiều $p$ tăng cao, thể tích không gian tăng theo hàm mũ khiến mật độ dữ liệu trở nên cực kỳ thưa thớt, khoảng cách giữa các điểm trở nên vô nghĩa và nguy cơ Overfitting tăng vọt",
      "Dữ liệu bị thiếu quá nhiều dòng",
      "Thời gian tính toán của mô hình luôn luôn giảm dần"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Khi số chiều tăng từ 1D lên 100D, thể tích khối cầu nội tiếp trong hình lập phương tiệm cận dần về $0$.
* Hầu hết thể tích không gian nằm tập trung ở các "góc nhọn" xa xôi của hình lập phương.
* Mọi điểm dữ liệu đều trở thành các điểm cô lập nằm cách xa nhau xấp xỉ bằng nhau $\\implies$ Khiến các thuật toán dựa vào khoảng cách bị mất hoàn toàn khả năng phân biệt.`
  },

  273: {
    question: "Mục tiêu tối ưu hóa hình học cốt lõi của Thuật toán Phân tích Thành phần Chính (PCA) là gì?",
    options: [
      "Tìm trục chiếu sao cho các lớp dữ liệu tách xa nhau nhất",
      "Tìm hệ trục tọa độ mới trực giao sao cho dữ liệu chiếu lên có phương sai cực đại (Maximize Variance), tương đương với việc giảm thiểu tối đa sai số tái tạo bình phương (Minimize Reconstruction Error)",
      "Tối đa hóa số lượng đặc trưng",
      "Tối thiểu hóa ma trận nghịch đảo giả"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Hai mặt của cùng một đồng xu trong PCA:
1. **Góc nhìn Tối đa hóa phương sai (Variance Maximization):** Hướng có phương sai lớn nhất giữ lại nhiều sự biến thiên thông tin nhất của dữ liệu.
2. **Góc nhìn Tối thiểu hóa sai số tái tạo (Reconstruction Error Minimization):** Tìm không gian con $K$ chiều sao cho khoảng cách vuông góc từ các điểm gốc đến hình chiếu của chúng là nhỏ nhất.`
  },

  274: {
    question: "Trước khi thực hiện phân rã ma trận để tìm các thành phần chính trong PCA, thao tác tiền xử lý nào là BẮT BUỘC?",
    options: [
      "Mã hóa One-Hot toàn bộ dữ liệu",
      "Trừ đi giá trị trung bình của từng đặc trưng (Data Centering / Zero-centered) để dời gốc tọa độ về trung tâm đám mây dữ liệu",
      "Xóa bỏ tất cả các giá trị nhỏ hơn 0",
      "Chia tập dữ liệu thành 3 phần Train, Val và Test"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
$$X_{centered} = X - \\bar{X}$$
* Nếu không trừ vector trung bình $\\bar{X}$, hướng thành phần chính thứ nhất (PC1) sẽ bị kéo lệch về phía vector nối từ gốc tọa độ $(0, 0)$ đến trọng tâm dữ liệu thay vì bám theo hướng phân tán tự nhiên của dữ liệu!`
  },

  275: {
    question: "Một ma trận hiệp phương sai của tập dữ liệu 4 chiều có 4 trị riêng: $\\lambda_1 = 5.0, \\lambda_2 = 3.0, \\lambda_3 = 1.5, \\lambda_4 = 0.5$. Tỷ lệ phương sai giải thích tích lũy nếu ta chọn giữ lại $K = 2$ thành phần chính đầu tiên là bao nhiêu?",
    options: [
      "$50\\%$",
      "$70\\%$",
      "$80\\%$",
      "$95\\%$"
    ],
    answer: 2,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Tổng toàn bộ các trị riêng:
  $$\\sum_{j=1}^4 \\lambda_j = 5.0 + 3.0 + 1.5 + 0.5 = 10.0$$
* Phương sai do 2 thành phần chính đầu tiên nắm giữ:
  $$\\lambda_1 + \\lambda_2 = 5.0 + 3.0 = 8.0$$
* Tỷ lệ phương sai tích lũy:
  $$\\text{Cumulative EVR}_2 = \\frac{8.0}{10.0} = 0.8 = 80\\%$$
* Nén dữ liệu từ 4 chiều xuống 2 chiều vẫn bảo toàn được $80\\%$ lượng thông tin gốc!`
  },

  276: {
    question: "Tính chất quan trọng nào sau đây là ĐÚNG đối với các vector thành phần chính (Eigenvectors của ma trận hiệp phương sai) trong PCA?",
    options: [
      "Chúng song song với các trục tọa độ ban đầu",
      "Chúng là một hệ vector trực chuẩn (Orthonormal): Đôi một vuông góc với nhau ($v_i^T v_j = 0$) và có độ dài chuẩn hóa bằng đúng 1 ($\\|v_i\\| = 1$)",
      "Chúng luôn có các phần tử mang giá trị dương",
      "Chúng có số lượng luôn lớn hơn số dòng của tập dữ liệu"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Ma trận hiệp phương sai $\\Sigma$ là ma trận thực đối xứng $\\implies$ Theo định lý quang phổ (Spectral Theorem), các vector riêng luôn trực giao đôi một và có thể chuẩn hóa độ dài bằng 1:
  $$v_i^T v_j = \\begin{cases} 1 & \\text{khi } i = j \\\\ 0 & \\text{khi } i \\ne j \\end{cases}$$
* Điều này đảm bảo hệ trục tọa độ mới là một hệ trục Đề-các vuông góc chuẩn tắc.`
  },

  277: {
    question: "Để tái tạo lại xấp xỉ dữ liệu ban đầu $X_{approx}$ kích thước $(n \\times p)$ từ ma trận tọa độ nén $Z$ kích thước $(n \\times K)$ và ma trận chiếu $W$ kích thước $(p \\times K)$, ta dùng công thức nào?",
    options: [
      "$X_{approx} = Z W$",
      "$X_{approx} = Z W^T + \\bar{x}$ (với $\\bar{x}$ là vector trung bình ban đầu)",
      "$X_{approx} = (Z^T Z)^{-1} W$",
      "$X_{approx} = W Z^T$"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Chiều xuôi (Nén dữ liệu từ $p$ chiều về $K$ chiều):**
  $$Z = X_{centered} W = (X - \\bar{x}) W$$
* **Chiều ngược (Tái tạo xấp xỉ từ $K$ chiều về $p$ chiều):**
  Do các cột của $W$ là trực chuẩn ($W^T W = I$), ta nhân $W^T$ vào bên phải:
  $$X_{centered\\_approx} = Z W^T$$
  Cộng lại vector trung bình $\\bar{x}$ đã trừ lúc ban đầu:
  $$X_{approx} = Z W^T + \\bar{x}$$`
  },

  278: {
    question: "Điểm khác biệt căn bản giữa Phân tích Thành phần Chính (PCA) và Phân tích Biệt thức Tuyến tính (LDA - Linear Discriminant Analysis) là gì?",
    options: [
      "PCA là phương pháp Học không giám sát (không dùng nhãn $y$, chỉ tối đa hóa phương sai tổng thể); còn LDA là phương pháp Học có giám sát (sử dụng nhãn $y$ để tối đa hóa sự phân tách giữa các lớp)",
      "PCA chỉ dùng cho ảnh; LDA chỉ dùng cho văn bản",
      "PCA làm tăng số chiều; LDA làm giảm số chiều",
      "PCA không dùng đại số tuyến tính; LDA dùng ma trận"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
| Tiêu chí | PCA (Unsupervised) | LDA (Supervised) |
| :--- | :--- | :--- |
| **Sử dụng nhãn $y$?** | **KHÔNG** (Học không giám sát). | **CÓ** (Học có giám sát). |
| **Mục tiêu tối ưu** | Tối đa hóa phương sai dữ liệu tổng quát (tìm hướng tản mát rộng nhất). | Tối đa hóa khoảng cách giữa các tâm lớp, đồng thời tối thiểu hóa phương sai nội tại trong mỗi lớp (tìm hướng phân biệt lớp rõ ràng nhất). |`
  },

  279: {
    question: "Một nhược điểm lớn khi sử dụng PCA để giảm chiều dữ liệu trong các dự án nghiệp vụ kinh doanh là gì?",
    options: [
      "Mô hình luôn luôn chạy chậm hơn",
      "Mất đi ý nghĩa vật lý trực quan ban đầu của các biến đặc trưng (mỗi thành phần chính mới là tổ hợp tuyến tính phức tạp của nhiều biến cũ)",
      "Không thể tái tạo lại ảnh nén",
      "Số lượng mẫu dữ liệu bị giảm đi một nửa"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Cái giá phải trả của PCA (Trade-off):**
  * Trước khi dùng PCA: Cột là *Diện tích*, *Số phòng ngủ*, *Khoảng cách tới bệnh viện* $\implies$ Giám đốc kinh doanh đọc là hiểu ngay.
  * Sau khi dùng PCA: Biến thành $PC_1 = 0.54 \\times \\text{Diện tích} - 0.32 \\times \\text{Số phòng} + 0.12 \\times \\text{Khoảng cách}$ $\implies$ Mất đi khả năng giải thích trực quan (Loss of Interpretability) đối với khách hàng và nghiệp vụ.`
  },

  280: {
    question: "Phát biểu nào sau đây về Thứ tự Tiền xử lý chuẩn mực trong Pipeline Machine Learning để tránh hiện tượng Rò rỉ dữ liệu (Data Leakage) là ĐÚNG?",
    options: [
      "Tính toán chuẩn hóa Scaler trên TOÀN BỘ dữ liệu trước, sau đó mới chia train_test_split",
      "Thực hiện chia train_test_split ĐẦU TIÊN; sau đó chỉ học các thông số thống kê (Mean, Std, Min, Max, Imputer) trên tập TRAIN (bằng lệnh \`.fit()\`), rồi mới áp dụng chuyển đổi (\`.transform()\`) sang cả tập Train và tập Test",
      "Học thông số Scaler trên tập Test rồi chuyển sang tập Train",
      "Bỏ qua bước chuẩn hóa dữ liệu"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* ⚠️ **Nguyên tắc vàng chống Data Leakage:**
  1. Phải chia dữ liệu thành **Train Set và Test Set trước tiên**.
  2. Các bước tiền xử lý (Imputer điền giá trị thiếu, Scaler chuẩn hóa Z-score/Min-Max):
     * Chỉ được gọi hàm \`.fit()\` (học $\\mu, \\sigma, x_{\\min}, x_{\\max}$) **DUY NHẤT TRÊN TẬP TRAIN**.
     * Sau đó dùng chính các thông số đã học này để gọi \`.transform()\` cho cả tập Train và tập Test.
  3. Tuyệt đối không để tập Train "nhìn trộm" giá trị trung bình hay phân phối của tập Test!`
  }
};
