module.exports = {
  241: {
    question: "Trong phép thử Turing (Turing Test) do Alan Turing đề xuất năm 1950, tiêu chí để một cỗ máy được coi là có 'trí tuệ' là gì?",
    options: [
      "Máy tính có khả năng tính toán các phép toán siêu việt nhanh hơn con người 1000 lần",
      "Một người phỏng vấn giao tiếp gián tiếp qua văn bản không thể phân biệt được đối tượng đang trò chuyện là máy hay là người thật",
      "Máy tính có thể tự học cách sửa chữa các vi mạch phần cứng của chính nó",
      "Cỗ máy bắt chước hoàn hảo cấu trúc mạng nơ-ron sinh học của não khỉ"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Năm 1950:** Nhà toán học huyền thoại **Alan Turing** xuất bản bài báo *"Computing Machinery and Intelligence"* và đề xuất trò chơi bắt chước (**Imitation Game / Turing Test**).
* **Luật chơi:** Một giám khảo con người (Judge) ngồi trong phòng kín và trò chuyện qua màn hình văn bản với 2 đối tượng ẩn danh: một con người thật và một cỗ máy tính.
* **Tiêu chí vượt qua:** Nếu vị giám khảo **hoàn toàn không thể phân biệt được** đối tượng nào là con người, đối tượng nào là máy tính sau các cuộc đối thoại tự nhiên, cỗ máy được xem là đã thể hiện hành vi thông minh tương đương con người (**Acting Humanly**).`
  },

  242: {
    question: "Thí nghiệm tư duy 'Phòng tiếng Trung' (Chinese Room) của triết gia John Searle (1980) được đưa ra nhằm phản bác luận điểm nào?",
    options: [
      "Việc một chương trình chỉ thao tác cú pháp theo luật hình thức vượt qua Turing Test đồng nghĩa với việc cỗ máy thực sự 'hiểu' và có ý thức nhận thức (AI mạnh / Strong AI)",
      "Mạng nơ-ron nhân tạo không thể học được dữ liệu chuỗi văn bản",
      "Ngôn ngữ tiếng Trung là ngôn ngữ khó nhất đối với các thuật toán AI",
      "Máy tính không thể dịch tự động giữa các ngôn ngữ tự nhiên"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Thí nghiệm tư duy Phòng tiếng Trung:** Giả sử một người hoàn toàn không biết một chữ tiếng Trung nào bị nhốt trong phòng kín. Người này nhận được các ký tự tiếng Trung từ ngoài khe cửa đưa vào, sau đó tra cứu một cuốn sách luật tiếng Anh hướng dẫn: *"Nếu thấy biểu tượng A, hãy viết lại biểu tượng B"*. Người bên ngoài nhận được biểu tượng B và tưởng rằng người bên trong rất giỏi tiếng Trung!
* **Kết luận của Searle (Phản bác Strong AI):** Cỗ máy chỉ đang thực hiện các thao tác cú pháp hình thức (**Syntax manipulation**) dựa trên quy tắc, chứ hoàn toàn **không hề có ý thức, ngữ nghĩa hay sự thấu hiểu thực sự (Semantics / Understanding)** bên trong.`
  },

  243: {
    question: "Mô hình mạng nơ-ron nhân tạo phần cứng đầu tiên trên thế giới mang tên SNARC (1951) được chế tạo bởi ai?",
    options: [
      "John von Neumann và Alan Turing",
      "Marvin Minsky và Dean Edmonds",
      "Arthur Samuel và Frank Rosenblatt",
      "Geoffrey Hinton và Yann LeCun"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Năm 1951:** Khi còn là sinh viên tại Đại học Princeton, **Marvin Minsky** (sau này là một trong những cha đẻ sáng lập ngành AI) cùng với **Dean Edmonds** đã chế tạo cỗ máy **SNARC** (Stochastic Neural Analog Reinforcement Calculator).
* Cỗ máy này gồm 40 tế bào nơ-ron phần cứng sử dụng các bóng đèn chân không và động cơ con quay hồi chuyển, mô phỏng mạng nơ-ron học cách tìm đường đi qua mê cung của một chú chuột ảo.`
  },

  244: {
    question: "Trong bài toán xây dựng hệ thống xe tự hành (Self-Driving Car), yếu tố nào sau đây đóng vai trò là Thước đo hiệu năng $P$ (Performance) theo định nghĩa của Tom Mitchell?",
    options: [
      "Dữ liệu video từ camera và cảm biến LiDAR được ghi lại trong hàng triệu km chạy thử",
      "Tác vụ điều khiển vô-lăng, chân ga và phanh xe an toàn trên đường",
      "Số km di chuyển trung bình giữa hai lần xảy ra sự cố cần tài xế can thiệp (Disengagement rate)",
      "Tốc độ tính toán của bộ vi xử lý GPU trên xe"
    ],
    answer: 2,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Phân tích bộ ba $(T, E, P)$ của Tom Mitchell cho **Xe tự lái**:
* **Tác vụ $T$ (Task):** Điều khiển xe di chuyển an toàn trên đường phố (đưa ra quyết định đánh lái, phanh, tăng tốc, giữ làn).
* **Kinh nghiệm $E$ (Experience):** Hàng triệu gigabyte dữ liệu hình ảnh, lidar, cảm biến thu được từ các tài xế người lái trước đó.
* **Hiệu năng $P$ (Performance):** **Số km di chuyển trung bình giữa hai lần xảy ra sự cố cần tài xế can thiệp** (Disengagement rate) và tỷ lệ tai nạn $= 0$.`
  },

  245: {
    question: "Học tự giám sát (Self-Supervised Learning) - nền tảng huấn luyện tiền đề cho các mô hình ngôn ngữ lớn (LLM như GPT, BERT) - hoạt động theo nguyên lý nào?",
    options: [
      "Thuê hàng triệu chuyên gia thủ công gán nhãn từng câu chữ trên Internet",
      "Tự động tạo ra nhãn giám sát từ chính cấu trúc bên trong dữ liệu thô (ví dụ: giấu một từ để bắt mô hình dự đoán từ bị khuyết)",
      "Không cần dùng hàm mất mát, chỉ dựa vào luật ngẫu nhiên",
      "Kết hợp giữa thuật toán K-Means và Hồi quy tuyến tính"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Self-Supervised Learning (Học tự giám sát):** Là chìa khóa mang lại sự bùng nổ của các mô hình nền tảng (Foundation Models như BERT, GPT).
* **Nguyên lý:** Thay vì con người ngồi gán nhãn thủ công tốn kém:
  * Mô hình tự động **che giấu một phần dữ liệu** (Masked Language Modeling: *"Mặt trời mọc ở hướng [MASK]"* $\\implies$ bắt máy đoán chữ *"Đông"*).
  * Hoặc bắt mô hình **dự đoán token tiếp theo** (Next Token Prediction: *"Hôm nay trời nhiều..."* $\\implies$ đoán *"mây"*).
* Bằng cách này, mô hình có thể "tự học" từ hàng nghìn tỷ từ trên Internet mà **không tốn một đồng chi phí gán nhãn**!`
  },

  246: {
    question: "Định lý 'Không có bữa trưa miễn phí' (No Free Lunch Theorem) của Wolpert và Macready (1997) khẳng định điều gì?",
    options: [
      "Các mô hình AI luôn luôn phải tiêu tốn tài nguyên điện toán lớn",
      "Không có thuật toán học máy nào là tối ưu tuyệt đối trên mọi bài toán khả dĩ; hiệu năng vượt trội trên bài toán này phải đánh đổi bằng hiệu năng kém trên bài toán khác",
      "Mọi bài toán phân loại đều có thể giải quyết hoàn hảo bằng Mạng nơ-ron sâu",
      "Muốn đạt độ chính xác cao bắt buộc phải trả phí bản quyền cho thuật toán"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **No Free Lunch Theorem (NFL Theorem):** Khi lấy trung bình trên **toàn bộ mọi phân phối bài toán có thể có trong vũ trụ**, mọi thuật toán học máy đều có hiệu năng ngang ngửa nhau (thậm chí ngang với việc đoán mò ngẫu nhiên!).
* 💡 **Ý nghĩa thực tiễn sống còn cho kỹ sư:**
  * **Không tồn tại một thuật toán thần thánh nào** luôn thắng trong mọi cuộc thi hay dự án.
  * Một thuật toán (như XGBoost hay Deep Learning) hoạt động cực tốt trên bài toán phân loại ảnh nhưng có thể thua một cây quyết định đơn giản trên tập dữ liệu bảng nhỏ.
  * Do đó, kỹ sư bắt buộc phải thử nghiệm nhiều mô hình khác nhau và thấu hiểu bài toán cụ thể chứ không áp đặt mù quáng một thuật toán duy nhất.`
  },

  247: {
    question: "Khái niệm 'Định kiến quy nạp' (Inductive Bias) của một thuật toán học máy đề cập đến điều gì?",
    options: [
      "Sự phân biệt đối xử mang tính kỳ thị xã hội trong dữ liệu huấn luyện",
      "Tập hợp các giả định tiên nghiệm mà mô hình áp đặt lên không gian hàm để dự đoán nhãn cho các điểm dữ liệu mới chưa từng thấy",
      "Lỗi phần cứng của card đồ họa khi tính toán dấu phẩy động",
      "Độ lệch chuẩn giữa giá trị trung bình của tập Train và tập Test"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Inductive Bias (Định kiến quy nạp):** Nếu không có bất kỳ giả định ban đầu nào, một tập điểm dữ liệu hữu hạn có thể được khớp bởi vô số hàm số toán học khác nhau. Để chọn ra một nghiệm, thuật toán bắt buộc phải mang sẵn những **giả định ngầm**:
  * *Hồi quy tuyến tính (Linear Regression):* Giả định mối quan hệ giữa $X$ và $y$ là **tuyến tính phẳng** ($y = Xw$).
  * *KNN:* Giả định các điểm nằm **gần nhau trong không gian thì có nhãn giống nhau**.
  * *CNN (Convolutional Neural Networks):* Giả định tính **bất biến tịnh tiến cục bộ** của hình ảnh (mắt mèo nằm ở góc nào thì vẫn là mắt mèo).`
  },

  248: {
    question: "Sự khác biệt căn bản giữa Học theo lô (Batch / Offline Learning) và Học trực tuyến (Online / Incremental Learning) là gì?",
    options: [
      "Batch Learning học bằng CPU; Online Learning bắt buộc học bằng GPU",
      "Batch Learning yêu cầu toàn bộ dữ liệu có sẵn và huấn luyện lại từ đầu khi có dữ liệu mới; Online Learning cập nhật mô hình liên tục theo từng mẫu/mini-batch khi dữ liệu mới liên tục đổ về",
      "Batch Learning chỉ dùng cho bài toán phân loại; Online Learning chỉ dùng cho hồi quy",
      "Batch Learning không có hàm mất mát; Online Learning có hàm mất mát"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Batch Learning (Học ngoại tuyến / Theo lô):** Cần nạp toàn bộ dataset vào bộ nhớ. Khi có thêm dữ liệu mới, mô hình phải gom tất cả lại và **huấn luyện lại từ đầu (train from scratch)**. Thích hợp khi hệ thống có tài nguyên dồi dào và dữ liệu ít thay đổi.
* **Online Learning (Học tăng cường / Trực tuyến):** Mô hình được cập nhật tức thì theo luồng dữ liệu (Streaming data), từng mẫu hoặc từng mini-batch một, rồi loại bỏ mẫu cũ ngay. Phù hợp tuyệt vời cho các hệ thống như phát hiện lừa đảo thẻ, định giá chứng khoán real-time hoặc thiết bị biên (IoT) có bộ nhớ cực nhỏ.`
  },

  249: {
    question: "Hiện tượng 'Trôi dạt khái niệm' (Concept Drift) trong các hệ thống học máy thực tế mô tả điều gì?",
    options: [
      "Sự gia tăng đột biến của tốc độ phần cứng máy tính theo định luật Moore",
      "Sự thay đổi bản chất của mối quan hệ thống kê giữa đặc trưng đầu vào và nhãn mục tiêu $P(y|X)$ theo thời gian trong môi trường thực tế",
      "Việc mô hình học quá nhanh dẫn đến gradient bị phát nổ",
      "Sự dịch chuyển của gốc tọa độ ma trận trong thuật toán PCA"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Concept Drift (Trôi dạt khái niệm):** Trong thực tế sản xuất (Production), mối quan hệ giữa đầu vào $X$ và nhãn $y$ không bất biến mà **thay đổi theo thời gian**:
  $$P_t(y|X) \\ne P_{t+\\Delta t}(y|X)$$
* 💡 **Ví dụ kinh điển:**
  * Trước đại dịch Covid, từ khóa *"khẩu trang, cồn 90 độ"* trên trang thương mại điện tử chỉ có lượng tìm kiếm bình thường. Khi dịch bùng phát, hành vi mua sắm của người tiêu dùng thay đổi $180^\\circ$.
  * Kẻ lừa đảo thẻ tín dụng liên tục thay đổi thủ đoạn mới tinh vi hơn để né bộ lọc AI cũ.
* Vì vậy, hệ thống MLOps bắt buộc phải liên tục giám sát (**Monitoring**) để phát hiện Concept Drift và tự động kích hoạt huấn luyện lại (Retraining).`
  },

  250: {
    question: "Mô hình tham số (Parametric Model) và Mô hình phi tham số (Non-parametric Model) khác nhau căn bản ở điểm nào?",
    options: [
      "Mô hình tham số có số lượng tham số cố định không phụ thuộc vào kích thước dữ liệu huấn luyện; Mô hình phi tham số có số tham số tăng theo độ lớn của tập dữ liệu",
      "Mô hình tham số hoàn toàn không có trọng số; Mô hình phi tham số có vô số trọng số",
      "Mô hình tham số chỉ chạy trên dữ liệu số thực; Mô hình phi tham số chỉ chạy trên văn bản",
      "Mô hình tham số không thể bị Overfitting; Mô hình phi tham số luôn luôn bị Underfitting"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Mô hình tham số (Parametric Models):** Giả định trước dạng toán học của hàm mục tiêu (ví dụ đường thẳng $y = w_0 + w_1 x_1 + \\dots$). Số lượng tham số là **CỐ ĐỊNH** (ví dụ $p+1$ tham số) bất kể bạn nạp $100$ dòng hay $10$ triệu dòng dữ liệu.
  * *Ví dụ:* Linear Regression, Logistic Regression, Linear SVM.
  * *Ưu điểm:* Học nhanh, ít tốn bộ nhớ, nhưng có thể bị High Bias nếu dạng hàm thực tế phi tuyến.
* **Mô hình phi tham số (Non-parametric Models):** Không đóng khung trước số lượng tham số cố định, độ phức tạp của mô hình **tự do mở rộng tỷ lệ thuận theo kích thước dữ liệu**.
  * *Ví dụ:* K-Nearest Neighbors (lưu lại toàn bộ dữ liệu train), Cây quyết định (Decision Trees có thể nở sâu theo dữ liệu).`
  },

  251: {
    question: "Trong kỹ thuật Stratified K-Fold Cross-Validation, từ 'Stratified' (Phân tầng) mang ý nghĩa kỹ thuật gì?",
    options: [
      "Dữ liệu được chia thành các tầng dựa theo số lượng dòng code của thuật toán",
      "Tỷ lệ phân bố của các nhãn mục tiêu (Class distribution) trong mỗi Fold con được đảm bảo giữ nguyên tỷ lệ giống hệt như trong toàn bộ tập dữ liệu gốc",
      "Dữ liệu được sắp xếp tăng dần theo giá trị trung bình của các đặc trưng",
      "Mỗi Fold con chỉ chứa các mẫu dữ liệu của đúng một lớp duy nhất"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Bối cảnh (Dữ liệu mất cân bằng - Imbalanced Data):** Giả sử bài toán phát hiện tế bào ung thư chỉ có $2\\%$ mẫu dương tính (mắc bệnh) và $98\\%$ mẫu âm tính (khỏe mạnh).
* Nếu chia ngẫu nhiên thông thường (Standard K-Fold), rất có thể một Fold nào đó tình cờ **chẳng có một ca ung thư nào** ($0\\%$)! Khi lấy Fold đó làm Test thì việc đánh giá hoàn toàn sai lệch.
* **Stratified K-Fold (Phân tầng):** Đảm bảo rằng **ở mỗi Fold con**, tỷ lệ giữa bệnh nhân ung thư và người khỏe mạnh **luôn giữ đúng $2\\% : 98\\%$ y hệt như tập dữ liệu gốc**, giúp việc thẩm định công bằng và đáng tin cậy.`
  },

  252: {
    question: "Khi nào bắt buộc phải dùng kỹ thuật TimeSeriesSplit thay vì chia ngẫu nhiên K-Fold thông thường?",
    options: [
      "Khi dữ liệu có kích thước vượt quá 1 triệu dòng",
      "Khi dữ liệu có tính chất chuỗi thời gian (Time-series) phụ thuộc vào thứ tự thời gian (như giá cổ phiếu, dự báo thời tiết, nhu cầu năng lượng)",
      "Khi dữ liệu có chứa thuộc tính dạng chuỗi ký tự (String)",
      "Khi muốn tăng tốc độ tính toán của thuật toán lên gấp 10 lần"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Quy luật bất biến của thời gian:** Trong thực tế, bạn chỉ có thể dùng dữ liệu quá khứ để đoán tương lai, **tuyệt đối không thể dùng dữ liệu ngày mai để đoán ngày hôm qua**!
* Nếu dùng K-Fold ngẫu nhiên cho bài toán giá cổ phiếu, thuật toán sẽ lấy dữ liệu ngày thứ Tư làm tập Train để dự đoán giá ngày thứ Ba $\\implies$ Mô hình bị **Rò rỉ tương lai (Lookahead bias / Data Leakage)**, cho kết quả ảo tưởng!
* **TimeSeriesSplit (Walk-forward Validation):** Luôn đảm bảo tập Train đi trước tập Test theo trục thời gian:
  * Fold 1: Train $[1..T]$, Test $[T+1]$
  * Fold 2: Train $[1..T+1]$, Test $[T+2]$
  * ...`
  },

  253: {
    question: "Khoảng cách tổng quát hóa (Generalization Gap) của một mô hình học máy được định nghĩa như thế nào?",
    options: [
      "Hiệu số giữa thời gian chạy trên GPU và CPU",
      "Khoảng cách chênh lệch giữa sai số trên tập kiểm thử và sai số trên tập huấn luyện: $Gap = Error_{test} - Error_{train}$",
      "Thời gian cần thiết để huấn luyện mô hình từ đầu đến khi hội tụ",
      "Độ lệch chuẩn giữa ma trận hiệp phương sai và ma trận đơn vị"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
$$Generalization\\_Gap = Error_{test} - Error_{train}$$
* **Ý nghĩa:** Đo lường mức độ mô hình hoạt động kém hơn khi bước ra dữ liệu mới so với lúc làm bài tập về nhà.
* **Chẩn đoán bệnh:**
  * Nếu $Gap \\approx 0$ và cả 2 sai số đều thấp: Mô hình lý tưởng (**Good fit**).
  * Nếu $Gap \\gg 0$ (sai số train cực nhỏ, nhưng sai số test rất lớn): Mô hình bị **Overfitting (Quá khớp)** nghiêm trọng!
  * Nếu $Gap$ nhỏ nhưng cả 2 sai số đều rất cao: Mô hình bị **Underfitting (Thiếu khớp)**.`
  },

  254: {
    question: "Tại sao việc liên tục điều chỉnh siêu tham số trực tiếp trên tập Test Set (thay vì Validation Set) lại là một sai lầm nghiêm trọng?",
    options: [
      "Vì tập Test Set thường có kích thước quá nhỏ không đủ để tính toán Loss",
      "Vì dẫn đến hiện tượng Rò rỉ thông tin (Data Leakage) khiến đánh giá hiệu năng bị thiên vị lạc quan giả tạo và mô hình bị overfit vào tập Test",
      "Vì thuật toán Gradient Descent không thể chạy được trên tập Test",
      "Vì làm thay đổi vĩnh viễn dữ liệu gốc trong cơ sở dữ liệu"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Hiểm họa 'Overfitting vào tập Test':** Mỗi lần bạn thử một siêu tham số và nhìn vào điểm số của tập Test để quyết định chọn giá trị tốt nhất, bạn đã vô tình **đưa thông tin của tập Test vào quá trình ra quyết định của con người**.
* Sau vài chục lần tinh chỉnh như vậy, tập Test không còn là bài thi khách quan nữa. Điểm số báo cáo trên Test set sẽ bị **Thiên vị lạc quan giả tạo (Optimism Bias)**, dẫn đến việc mô hình tưởng chừng đạt $99\\%$ nhưng khi deploy ra production gặp khách hàng thật sẽ thất bại thê thảm.`
  },

  255: {
    question: "Biện pháp nào sau đây KHÔNG GIÚP khắc phục hiện tượng Thiếu khớp (Underfitting)?",
    options: [
      "Bổ sung thêm các đặc trưng mới hoặc tạo các đặc trưng đa thức",
      "Sử dụng mô hình có cấu trúc phức tạp hơn (tăng độ sâu của cây, tăng số tầng nơ-ron)",
      "Tăng mạnh cường độ phạt chính quy hóa (tăng hệ số $\\lambda$)",
      "Giảm bớt mức độ phạt chính quy hóa (regularization)"
    ],
    answer: 2,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Bản chất Underfitting (High Bias):** Mô hình đang quá yếu, quá ngây thơ, không học nổi quy luật dữ liệu.
* **Tác động của Regularization (Hệ số $\\lambda$):** $\\lambda$ có tác dụng **kìm hãm, ép mô hình đơn giản lại** để chống học vẹt.
* 👉 Do đó, nếu mô hình đã ngây thơ mà ta lại **tăng mạnh $\\lambda$**, ta đang tiếp tục bóp nghẹt mô hình, làm cho nó càng thêm đơn giản và khiến bệnh **Underfitting trầm trọng hơn nữa**!`
  },

  256: {
    question: "Trong học tăng cường (Reinforcement Learning), 'Chính sách' (Policy, ký hiệu $\\pi$) biểu thị điều gì?",
    options: [
      "Bộ luật pháp lý quy định quyền riêng tư dữ liệu người dùng",
      "Hàm hoặc chiến lược ánh xạ từ Trạng thái ($s$) sang Hành động ($a$) mà tác tử sẽ thực hiện: $\\pi(a|s)$",
      "Tổng phần thưởng tích lũy nhận được ở cuối mỗi màn chơi",
      "Thuật toán tối ưu hóa Gradient Descent áp dụng cho hàm mất mát"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Chính sách (Policy $\\pi$):** Được xem là "bộ não" hoặc "kim chỉ nam chiến lược" của Agent:
  $$\\pi(a|s) = P(A_t = a \\mid S_t = s)$$
* Nó quy định: Khi tác tử đang đứng ở Trạng thái $s$ (State), nó nên chọn Hành động $a$ (Action) nào để có xác suất nhận được tổng điểm thưởng tích lũy trong tương lai là lớn nhất.
* Mục tiêu tối thượng của các thuật toán Học tăng cường (như Q-Learning, PPO, DQN) là tìm ra **Chính sách tối ưu $\\pi^*$**.`
  },

  257: {
    question: "Trong bài toán nhận diện cảm xúc giọng nói, phát biểu nào sau đây xác định đúng bộ ba $T-E-P$?",
    options: [
      "T: Tập các file ghi âm giọng nói; E: Tỷ lệ nhận diện đúng; P: Gán nhãn vui/buồn/giận dữ",
      "T: Phân loại đoạn ghi âm vào các trạng thái cảm xúc; E: Tập dữ liệu âm thanh giọng nói đã được gán nhãn trước; P: Độ chính xác phân loại F1-score",
      "T: Tốc độ xử lý của CPU; E: Tần số âm thanh Hz; P: Số người tham gia thu âm",
      "T: Thuật toán MLP; E: Hàm kích hoạt Softmax; P: Hàm mất mát Cross-Entropy"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Phân tích bộ ba $(T, E, P)$ của Tom Mitchell cho bài toán Nhận diện cảm xúc giọng nói:
* **$T$ (Task - Việc cần làm):** Nhận một file ghi âm giọng nói mới và phân loại xem người nói đang Vui, Buồn, Giận dữ hay Bình thường.
* **$E$ (Experience - Dữ liệu quá khứ):** Tập hợp hàng nghìn file ghi âm trước đây đã có chuyên gia nghe và dán nhãn cảm xúc sẵn.
* **$P$ (Performance - Thước đo chấm điểm):** Chỉ số F1-score, Precision hoặc Accuracy đo tỷ lệ nhận diện cảm xúc chính xác.`
  },

  258: {
    question: "Đặc trưng nào sau đây của mạng nơ-ron Perceptron do Frank Rosenblatt phát minh năm 1957 là nguyên nhân chính dẫn đến sự suy tàn của mạng nơ-ron lần thứ nhất (AI Winter)?",
    options: [
      "Chi phí tính toán quá đắt đỏ khiến máy tính thời đó không chạy nổi",
      "Bản chất chỉ tạo ra ranh giới quyết định tuyến tính phẳng, hoàn toàn bất lực trước các bài toán phân tách phi tuyến như hàm logic XOR",
      "Thuật toán không thể lưu trữ trọng số trên đĩa từ",
      "Perceptron yêu cầu tất cả đầu vào phải là số thực liên tục"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Năm 1957:** Frank Rosenblatt phát minh ra **Perceptron** đơn tầng và tuyên bố nó sẽ sớm biết suy nghĩ như con người.
* **Cú sốc năm 1969:** Hai nhà khoa học Marvin Minsky và Seymour Papert xuất bản cuốn sách kinh điển *"Perceptrons"*, chứng minh toán học chặt chẽ rằng một nơ-ron Perceptron đơn tầng chỉ có thể vạch ra một đường thẳng hoặc siêu phẳng tuyến tính, **hoàn toàn bất lực không thể phân loại được hàm logic XOR** (một bài toán phi tuyến tính vô cùng đơn giản).
* Cuốn sách này đã khiến các cơ quan tài trợ cắt sạch ngân sách nghiên cứu mạng nơ-ron, đẩy ngành AI bước vào thời kỳ **Mùa đông AI thứ nhất (AI Winter)** kéo dài suốt hơn một thập kỷ.`
  },

  259: {
    question: "Công việc chính của bước 'Triển khai và Giám sát' (Deployment & Monitoring) trong quy trình 6 bước Machine Learning là gì?",
    options: [
      "Viết báo cáo tiểu luận và nộp mã nguồn cho giảng viên",
      "Đóng gói mô hình thành dịch vụ API/phần mềm phục vụ người dùng thực tế và liên tục theo dõi độ trễ, sai số, trôi dạt dữ liệu trong môi trường production",
      "Thực hiện phân tích thành phần chính PCA trên toàn bộ tập dữ liệu",
      "Lập trình thêm các câu lệnh if-else để ghi đè kết quả mô hình"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Một mô hình dù đạt độ chính xác $99\\%$ trong phòng thí nghiệm (Jupyter Notebook) nhưng nếu không được đưa vào thực tế thì chỉ là con số trên giấy.
* **Deployment (Triển khai):** Đóng gói mô hình thành REST API / Docker Container hoặc nhúng trực tiếp vào ứng dụng web/mobile để xử lý dữ liệu của người dùng thật.
* **Monitoring (Giám sát):** Thiết lập hệ thống telemetry theo dõi độ trễ (latency), tỷ lệ lỗi, và đặc biệt là giám sát hiện tượng suy giảm độ chính xác do **Data Drift** và **Concept Drift** để kịp thời kích hoạt tái huấn luyện (Retrain).`
  },

  260: {
    question: "Đặc điểm nào sau đây KHÔNG PHẢI là một ưu điểm của việc sử dụng K-Fold Cross-Validation so với phân chia Train/Test đơn lẻ?",
    options: [
      "Đánh giá độ ổn định và giảm thiểu phương sai của phép ước lượng hiệu năng",
      "Tận dụng tối đa toàn bộ dữ liệu vì mọi mẫu đều có cơ hội xuất hiện trong tập kiểm thử đúng 1 lần",
      "Thời gian tính toán và huấn luyện mô hình giảm đi K lần so với train một mô hình duy nhất",
      "Phát hiện xem mô hình có bị quá nhạy cảm với việc chọn mẫu dữ liệu cụ thể hay không"
    ],
    answer: 2,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Bản chất của K-Fold Cross-Validation:** Dữ liệu được chia thành $K$ phần bằng nhau. Thuật toán phải **huấn luyện mô hình $K$ lần độc lập**, mỗi lần dùng $K-1$ phần để train và $1$ phần còn lại để test.
* 👉 Do đó, **thời gian tính toán và chi phí phần cứng sẽ TĂNG LÊN gấp $K$ lần** (chứ không hề giảm đi). Đây chính là nhược điểm đánh đổi lớn nhất của K-Fold để đổi lấy sự đánh giá khách quan, tin cậy và không phụ thuộc vào may rủi của một lần chia tập duy nhất.`
  }
};
