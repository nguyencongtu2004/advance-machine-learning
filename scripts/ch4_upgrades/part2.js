module.exports = {
  126: {
    question: "Tập mẫu Out-Of-Bag (OOB) trong Bagging được sử dụng để làm gì?",
    options: [
      "Huấn luyện thêm một cây mới",
      "Đánh giá kiểm định chất lượng mô hình mà không cần tốn thêm tập validation riêng",
      "Làm sạch dữ liệu ngoại lai",
      "Tính toán trọng số alpha"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Trong Bagging và Random Forest:
* Mỗi cây chỉ được huấn luyện trên khoảng $63.2\\%$ dữ liệu từ mẫu Bootstrap. Khoảng $36.8\\%$ số mẫu còn lại hoàn toàn "vô hình" đối với cây đó (tập Out-Of-Bag - OOB).
* **Ứng dụng đột phá:** Ta lấy chính các mẫu OOB này đưa vào cây tương ứng để dự đoán và tính toán sai số (gọi là **OOB Error / OOB Score**).
* **Lợi ích to lớn:**
  1. Đóng vai trò như một tập **Validation tự nhiên được tích hợp sẵn**.
  2. Kỹ sư ML không cần phải cắt bớt một phần dữ liệu quý giá để làm tập Validation riêng, và cũng không cần tốn chi phí chạy K-Fold Cross-Validation!`,
    slideRef: "Slide Chương 4, Trang 82, 93"
  },

  127: {
    question: "Random Forest bổ sung thêm nguồn ngẫu nhiên nào so với phương pháp Bagging thông thường?",
    options: [
      "Ngẫu nhiên hàm mất mát",
      "Lấy mẫu ngẫu nhiên một tập con đặc trưng (Feature Subsampling) tại mỗi nút phân nhánh",
      "Ngẫu nhiên tốc độ học learning rate",
      "Ngẫu nhiên số lượng lớp dự đoán"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Nếu Bagging chỉ ngẫu nhiên hóa **dòng dữ liệu** (lấy mẫu Bootstrap), thì Random Forest bổ sung thêm tầng ngẫu nhiên thứ hai trên **cột đặc trưng**:
* **Kỹ thuật Lấy mẫu đặc trưng ngẫu nhiên (Feature Subsampling):**
  - Tại **MỖI NÚT PHÂN CHIA** của từng cây, thuật toán **không duyệt qua toàn bộ $p$ đặc trưng**, mà chỉ chọn ngẫu nhiên một tập con gồm $m$ đặc trưng ($m < p$).
  - Thuật toán chỉ tìm điểm cắt tối ưu trên tập con $m$ đặc trưng này.
* **Quy tắc ngón tay cái chuẩn (Rule of Thumb):**
  - Với bài toán Phân loại: $m = \\sqrt{p}$.
  - Với bài toán Hồi quy: $m = \\frac{p}{3}$.`,
    slideRef: "Slide Chương 4, Trang 85-88"
  },

  128: {
    question: "Tại sao việc lấy mẫu ngẫu nhiên đặc trưng tại mỗi nút lại giúp Random Forest vượt trội hơn Bagging cây thông thường?",
    options: [
      "Vì nó giúp cây phát triển sâu hơn",
      "Vì nó ngăn các đặc trưng quá mạnh luôn thống trị ở nút gốc, làm giảm sự tương quan giữa các cây và tăng tính đa dạng cho cả rừng",
      "Vì nó giúp loại bỏ hoàn toàn các đặc trưng nhiễu",
      "Vì nó biến bài toán thành học không giám sát"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Hạn chế của Bagging chuẩn:** Nếu trong tập dữ liệu có 1 hoặc vài đặc trưng quá mạnh (Predictive power áp đảo), thì hầu như mọi cây trong Bagging đều sẽ chọn đặc trưng đó làm Nút gốc $\\implies$ Hàng trăm cây có cấu trúc na ná nhau $\\implies$ Các cây bị **tương quan cao (Highly Correlated)**.
* Khi các mô hình bị tương quan cao, việc lấy trung bình cộng không giúp giảm nhiều phương sai (giống như hỏi ý kiến của 100 người nhưng cả 100 người đều cùng chung một góc nhìn).
* **Giải pháp của Random Forest:** Bằng cách ngẫu nhiên chỉ cho chọn $m = \\sqrt{p}$ đặc trưng tại mỗi nút, các cây bị ép phải thử nghiệm các đặc trưng yếu hơn $\\implies$ Giải trừ sự tương quan (**Decorrelate the trees**) $\\implies$ Rừng trở nên cực kỳ phong phú và đa dạng $\\implies$ **Giảm Variance tối đa!**`,
    slideRef: "Slide Chương 4, Trang 88"
  },

  129: {
    question: "Thuật toán Extra Trees (Extremely Randomized Trees) khác Random Forest ở điểm nào?",
    options: [
      "Extra Trees huấn luyện tuần tự",
      "Extra Trees ngẫu nhiên hóa cả các ngưỡng phân nhánh ứng viên thay vì tìm ngưỡng tối ưu",
      "Extra Trees chỉ dùng đúng 1 cây duy nhất",
      "Extra Trees không dùng cho bài toán phân loại"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Random Forest:** Chọn ngẫu nhiên $m$ đặc trưng, nhưng trên mỗi đặc trưng được chọn, nó vẫn dùng thuật toán tìm ngưỡng cắt $t$ tối ưu nhất (làm sạch Gini nhất).
* **Extra Trees (Extremely Randomized Trees):** Đẩy tính ngẫu nhiên lên mức tối đa!
  - Không đi tìm ngưỡng cắt tối ưu nữa, mà **chọn ngẫu nhiên luôn ngưỡng cắt $t$** cho từng đặc trưng ứng viên!
  - Sau đó chỉ so sánh giữa các ngưỡng ngẫu nhiên này để chọn cái tốt nhất.
* **Hệ quả:**
  1. Tốc độ huấn luyện **nhanh hơn Random Forest rất nhiều** (bỏ qua bước quét tìm điểm cắt tốn CPU).
  2. Tăng tính ngẫu nhiên giúp giảm thêm một chút Variance, nhưng có thể tăng nhẹ Bias.`,
    slideRef: "Slide Chương 4, Trang 94-95"
  },

  130: {
    question: "Sự khác biệt căn bản về cách thức huấn luyện giữa Bagging và Boosting là gì?",
    options: [
      "Bagging huấn luyện tuần tự; Boosting huấn luyện song song",
      "Bagging huấn luyện SONG SONG độc lập; Boosting huấn luyện TUẦN TỰ theo chuỗi, mô hình sau sửa sai cho mô hình trước",
      "Bagging chỉ dùng cho hồi quy; Boosting chỉ dùng cho phân loại",
      "Bagging dùng mạng nơ-ron; Boosting dùng hồi quy tuyến tính"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Đây là câu hỏi cốt lõi phân biệt 2 nhánh lớn của Ensemble:
* **BAGGING:**
  - Cách thức: **Song song (Parallel)**.
  - Các cây hoàn toàn độc lập với nhau, có thể phân tán chạy trên nhiều nhân CPU/GPU cùng một lúc.
* **BOOSTING:**
  - Cách thức: **Tuần tự theo chuỗi (Sequential)**.
  - Cây thứ $k$ bắt buộc phải chờ cây thứ $k-1$ huấn luyện xong để biết cây trước đoán sai ở đâu, từ đó tập trung học để sửa chữa sai lầm! Không thể huấn luyện song song các cây trong Boosting.`,
    slideRef: "Slide Chương 4, Trang 96-97"
  },

  131: {
    question: "Mục tiêu cốt lõi của phương pháp Boosting là tác động lên thành phần nào trong đánh đổi Bias - Variance?",
    options: [
      "Làm giảm Variance của mô hình",
      "Làm giảm Bias của mô hình (biến các bộ học yếu thành bộ học mạnh)",
      "Làm tăng Bias để mô hình đơn giản hơn",
      "Không thay đổi cả hai"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Mô hình cơ sở trong Boosting thường là các **bộ học rất yếu (Weak Learners)**, ví dụ như Cây 1 tầng (Decision Stump). Mô hình yếu thì dự đoán rất đơn giản $\\implies$ **Bias rất cao**.
* Bằng cách xâu chuỗi tuần tự hàng trăm bộ học yếu, mỗi bộ học gánh vác việc sửa một phần lỗi của hệ thống, Boosting biến một tập hợp các mô hình yếu thành một **mô hình tổng thể cực mạnh (Strong Learner)**.
* 👉 **Mục tiêu chính của Boosting là GIẢM BIAS!** (Ngược lại với Bagging tập trung giảm Variance).`,
    slideRef: "Slide Chương 4, Trang 99, 114"
  },

  132: {
    question: "Mô hình cơ sở (Weak Learner) thường được sử dụng trong Boosting là gì?",
    options: [
      "Mạng nơ-ron sâu 100 tầng",
      "Cây quyết định rất nông (thường là cây 1 tầng / Decision Stump)",
      "Mô hình Random Forest hoàn chỉnh",
      "Hồi quy Ridge với λ cực lớn"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Trong Boosting, ta **không dùng cây sâu phức tạp** (vì cây sâu có High Variance, xâu chuỗi lại sẽ bị quá khớp bùng nổ).
* Ngược lại, Boosting sử dụng các **cây quyết định rất nông**, kinh điển nhất là **Decision Stump (Gốc cây / Cây 1 tầng)**:
  - Cây chỉ gồm đúng 1 nút kiểm tra ở trên và chẻ ra 2 nút lá ở dưới.
  - Mỗi Decision Stump chỉ cần dự đoán tốt hơn đoán ngẫu nhiên một chút (ví dụ $Accuracy > 50\\%$).
  - Hàng trăm Decision Stump kết hợp lại sẽ tạo ra biên phân loại phi tuyến cực kỳ phức tạp và chính xác.`,
    slideRef: "Slide Chương 4, Trang 99, 114"
  },

  133: {
    question: "Trong thuật toán AdaBoost, trọng số của các mẫu dữ liệu được cập nhật như thế nào sau mỗi vòng lặp?",
    options: [
      "Mọi mẫu đều giữ nguyên trọng số ban đầu 1/m",
      "Mẫu bị dự đoán SAI sẽ bị TĂNG TRỌNG SỐ; mẫu đoán ĐÚNG sẽ giữ nguyên hoặc giảm trọng số",
      "Mẫu bị đoán sai sẽ bị xóa khỏi tập dữ liệu",
      "Trọng số của mẫu đoán sai bị gán về 0"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Cơ chế "thưởng phạt" tâm lý trong AdaBoost (Adaptive Boosting):
* Ban đầu, tất cả $m$ mẫu đều có trọng số bình đẳng: $w_i = \\frac{1}{m}$.
* Ở mỗi vòng lặp:
  - Mẫu nào được mô hình hiện tại đoán **ĐÚNG** $\\to$ Giảm trọng số (vì dễ rồi, không cần tốn tài nguyên bận tâm nữa).
  - Mẫu nào bị mô hình đoán **SAI** $\\to$ **BỊ TĂNG TRỌNG SỐ LÊN RẤT MẠNH**!
* Sang vòng tiếp theo, cây mới được huấn luyện trên phân bố trọng số mới, buộc nó phải dồn toàn bộ sự chú ý để **ưu tiên phân loại đúng các mẫu khó bị đoán sai ở vòng trước**.`,
    slideRef: "Slide Chương 4, Trang 100, 105"
  },

  134: {
    question: "Trong AdaBoost, trọng số đóng góp của một mô hình (alpha_j) vào quyết định cuối cùng phụ thuộc vào điều gì?",
    options: [
      "Độ sâu của cây mô hình đó",
      "Tỷ lệ sai số có trọng số r_j của mô hình (mô hình có sai số càng thấp thì trọng số alpha càng lớn)",
      "Số lượng mẫu trong tập huấn luyện",
      "Thời gian huấn luyện mô hình đó"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Công thức tính trọng số đóng góp $\\alpha_j$ của mô hình thứ $j$ trong AdaBoost:
$$\\alpha_j = \\frac{1}{2} \\ln\\left(\\frac{1 - r_j}{r_j}\\right)$$
*(Trong đó $r_j$ là tỷ lệ sai số có trọng số của mô hình $j$)*.
* **Ý nghĩa:**
  - Nếu mô hình đoán rất giỏi ($r_j$ rất nhỏ, ví dụ $0.01$) $\\implies \\frac{1 - r_j}{r_j}$ rất lớn $\\implies \\alpha_j$ là số dương rất lớn $\\implies$ Tiếng nói của mô hình này trong hội đồng rất có trọng lượng!
  - Nếu mô hình chỉ đoán ngang ngửa tung đồng xu ($r_j = 0.5$) $\\implies \\alpha_j = \\frac{1}{2}\\ln(1) = 0 \\implies$ Không có tiếng nói nào.
  - Nếu mô hình đoán tệ hơn ngẫu nhiên ($r_j > 0.5$) $\\implies \\alpha_j < 0$ (phủ quyết ý kiến).`,
    slideRef: "Slide Chương 4, Trang 104"
  },

  135: {
    question: "Điểm khác biệt CỐT LÕI giữa Gradient Boosting và AdaBoost là gì?",
    options: [
      "AdaBoost dùng cây; Gradient Boosting dùng hồi quy tuyến tính",
      "Thay vì thay đổi trọng số của mẫu như AdaBoost, Gradient Boosting huấn luyện mỗi cây mới để khớp vào phần dư (Pseudo-residuals / Âm gradient của hàm mất mát)",
      "Gradient Boosting huấn luyện song song; AdaBoost tuần tự",
      "Gradient Boosting không dùng siêu tham số"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **AdaBoost:** Sửa sai bằng cách **điều chỉnh trọng số của mẫu dữ liệu** (phạt mẫu sai bằng cách tăng trọng số).
* **Gradient Boosting:** Không đổi trọng số mẫu. Thay vào đó, nó dùng toán giải tích:
  - Mỗi cây mới $h_k(x)$ được giao nhiệm vụ **học cách dự đoán trực tiếp PHẦN DƯ SAI SỐ (Pseudo-residuals)** của mô hình hiện tại:
    $$r_{ik} = - \\left[ \\frac{\\partial L(y_i, F(x_i))}{\\partial F(x_i)} \\right]$$
  - Phần dư âm gradient chính là hướng giảm sai số nhanh nhất của hàm mất mát. Cây mới bù đắp phần còn thiếu mà các cây trước chưa dự đoán được.`,
    slideRef: "Slide Chương 4, Trang 107, 110"
  },

  136: {
    question: "Mô hình cộng dồn trong Gradient Boosting có dạng biểu thức nào sau đây?",
    options: [
      "F_k(x) = F_{k-1}(x) * h_k(x)",
      "F_k(x) = F_{k-1}(x) + η * h_k(x)",
      "F_k(x) = (F_{k-1}(x) + h_k(x)) / 2",
      "F_k(x) = F_0(x) - h_k(x)"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Gradient Boosting xây dựng mô hình theo phương pháp **cộng dồn từng bước (Additive Model)**:
$$F_k(x) = F_{k-1}(x) + \\eta \\cdot h_k(x)$$
* $F_{k-1}(x)$: Dự đoán của toàn bộ chuỗi mô hình ở bước trước đó.
* $h_k(x)$: Cây mới vừa được huấn luyện để sửa phần dư sai số.
* $\\eta$ (hoặc $\\nu$): Tốc độ học (Learning Rate / Shrinkage), giúp thu nhỏ đóng góp của mỗi cây mới để mô hình học từ tốn, tránh Overfitting.`,
    slideRef: "Slide Chương 4, Trang 109, 111"
  },

  137: {
    question: "Vai trò của tham số Tốc độ học (Learning Rate η / Shrinkage) trong Gradient Boosting là gì?",
    options: [
      "Quyết định số lượng thuộc tính được lấy mẫu",
      "Điều khiển mức độ đóng góp của từng cây mới; learning rate nhỏ giúp chuỗi học thận trọng và tránh Overfitting nhưng cần nhiều cây hơn",
      "Xác định độ sâu tối đa của cây",
      "Quy định số lượng fold trong cross validation"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Tham số $\\eta$ (thường chọn trong khoảng $0.01 - 0.1$) đóng vai trò như một **khoản chiết khấu (Shrinkage)**:
  - Nếu $\\eta = 1$: Cây mới sửa sai $100\\%$ phần dư ngay lập tức $\\implies$ Mô hình học rất nhanh nhưng cực kỳ dễ bị quá khớp (Overfitting).
  - Khi $\\eta$ nhỏ (ví dụ $0.05$): Mỗi cây mới chỉ được phép đóng góp $5\\%$ công sức $\\implies$ Chuỗi mô hình phải học từ tốn qua hàng trăm bước $\\implies$ Khả năng tổng quát hóa trên tập Test tốt hơn rất nhiều.
* **Đánh đổi:** $\\eta$ càng nhỏ thì đòi hỏi số lượng cây (\`n_estimators\`) phải càng nhiều và thời gian huấn luyện lâu hơn.`,
    slideRef: "Slide Chương 4, Trang 112"
  },

  138: {
    question: "Hai thư viện Gradient Boosting hiện đại, hiệu năng cao được nhắc đến trong đề cương bài giảng là gì?",
    options: [
      "Scikit-learn và Weka",
      "XGBoost và LightGBM",
      "TensorFlow và PyTorch",
      "Pandas và NumPy"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **XGBoost (Extreme Gradient Boosting):** Nâng cấp Gradient Boosting bằng cách dùng khai triển Taylor bậc 2 của hàm mất mát, tối ưu hóa bộ nhớ đệm (Cache-aware) và tích hợp sẵn Regularization phạt độ phức tạp cây.
* **LightGBM (do Microsoft phát triển):** Tối ưu hóa tốc độ xử lý dữ liệu lớn bằng kỹ thuật chia nhóm Histogram và phát triển cây theo chiều sâu lá (**Leaf-wise**), giúp giảm sai số nhanh hơn so với kiểu chia tầng truyền thống (Level-wise).`,
    slideRef: "Slide Chương 4, Trang 113"
  },

  139: {
    question: "Nhược điểm lớn của phương pháp Boosting so với Bagging khi dữ liệu có nhiều ngoại lai (Outliers) và nhiễu là gì?",
    options: [
      "Boosting chạy quá nhanh",
      "Boosting rất nhạy cảm với nhiễu vì có xu hướng gán trọng số ngày càng lớn cho các mẫu nhiễu khó học, dẫn đến Overfitting trên nhiễu",
      "Boosting không thể xử lý dữ liệu lớn",
      "Boosting luôn có Variance cao hơn Bagging"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Đây là **bẫy trắc nghiệm kinh điển** về tính nhạy cảm với nhiễu:
* Trong **Bagging (Random Forest)**: Mỗi cây lấy mẫu Bootstrap độc lập, một vài điểm nhiễu chỉ rơi vào một số cây và bị triệt tiêu khi lấy trung bình $\\implies$ **Rất bền vững, ít bị ảnh hưởng bởi Outliers/Nhiễu**.
* Trong **Boosting (AdaBoost, Gradient Boosting)**:
  - Bản chất của Boosting là "thấy chỗ nào sai thì tập trung dồn lực sửa chỗ đó".
  - Một điểm dữ liệu nhiễu/ngoại lai là cực kỳ khó dự đoán đúng $\\implies$ Nó liên tục bị dự đoán sai qua các vòng.
  - AdaBoost sẽ liên tục **nhân trọng số của điểm nhiễu này lên cực đại**, hoặc Gradient Boosting sẽ cố gò các cây sau khớp vào phần dư của điểm nhiễu này $\\implies$ Toàn bộ mô hình bị "dắt mũi" chạy theo nhiễu $\\implies$ **Overfitting nặng nề!**`,
    slideRef: "Slide Chương 4, Trang 114"
  },

  140: {
    question: "Khi xây dựng cây phân loại CART cho biến số liên tục, điểm chia ngưỡng x_j <= t được xác định như thế nào?",
    options: [
      "Lấy ngẫu nhiên một số bất kỳ",
      "Thử các ngưỡng ứng viên nằm giữa các giá trị quan sát và chọn ngưỡng t tạo ra độ vẩn đục Gini sau chia là nhỏ nhất",
      "Luôn luôn lấy giá trị trung bình cộng của biến đó",
      "Lấy giá trị lớn nhất của biến"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Để tìm điểm chia $x_j \\le t$ cho thuộc tính liên tục trong CART:
1. Sắp xếp tất cả các giá trị phân biệt của đặc trưng $x_j$ trong tập dữ liệu theo thứ tự tăng dần.
2. Tạo ra các ngưỡng ứng viên $t$ bằng **trung điểm giữa hai giá trị liên tiếp**: $t_i = \\frac{x_{(i)} + x_{(i+1)}}{2}$.
3. Với mỗi ngưỡng ứng viên $t$, chia dữ liệu thành 2 nửa (Trái: $x_j \\le t$ và Phải: $x_j > t$) và tính chỉ số $Gini_{\\text{split}}$.
4. Chọn ngưỡng $t^*$ nào tạo ra **$Gini_{\\text{split}}$ nhỏ nhất** (thuần khiết nhất)!`,
    slideRef: "Slide Chương 4, Trang 27"
  },

  141: {
    question: "Trong phân loại bằng Random Forest, nhãn dự đoán cuối cùng của toàn bộ rừng được tổng hợp bằng cách nào?",
    options: [
      "Lấy nhãn của cây đầu tiên được tạo ra",
      "Biểu quyết theo đa số (Majority Voting) hoặc trung bình cộng xác suất các cây",
      "Lấy giá trị trung vị của các cây",
      "Nhân các xác suất lại với nhau"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Trong Random Forest cho bài toán phân loại:
* Mỗi cây trong rừng sẽ đưa ra dự đoán nhãn lớp của riêng nó (hoặc phân phối xác suất dự đoán).
* Dự đoán cuối cùng của toàn bộ rừng được tổng hợp bằng:
  1. **Biểu quyết theo đa số (Majority / Hard Voting):** Lớp nào nhận được nhiều phiếu bầu nhất từ các cây sẽ là nhãn dự đoán chung.
  2. **Soft Voting (Trung bình xác suất):** Lấy trung bình cộng xác suất dự đoán của từng lớp trên toàn bộ các cây rồi chọn lớp có xác suất cao nhất.`,
    slideRef: "Slide Chương 4, Trang 91"
  },

  142: {
    question: "Tại sao Cây quyết định đơn lẻ thường được gọi là 'Non-parametric model'?",
    options: [
      "Vì nó không có siêu tham số",
      "Vì số lượng tham số cấu trúc của nó không cố định trước mà tăng lên linh hoạt theo dữ liệu huấn luyện",
      "Vì nó không tính toán được trên máy tính",
      "Vì nó không sử dụng hàm mất mát"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Trong thống kê học:
* **Mô hình tham số (Parametric):** Có số lượng tham số cố định từ đầu, không phụ thuộc vào kích thước dữ liệu (ví dụ Hồi quy tuyến tính có đúng $p+1$ trọng số $w$, dù bạn có 100 hay 1 triệu dòng thì số lượng $w$ vẫn y nguyên).
* **Mô hình phi tham số (Non-parametric):** Số lượng tham số (số nút, số nhánh, độ sâu) **không được định sẵn**, mà tự do phình to hoặc thu nhỏ theo kích thước và độ phức tạp của tập dữ liệu huấn luyện. Càng nhiều dữ liệu, cây càng có thể mọc nhiều nút hơn.`,
    slideRef: "Slide Chương 4, Trang 56"
  },

  143: {
    question: "Kỹ thuật Hậu cắt tỉa (Post-pruning) thường sử dụng tập dữ liệu nào để quyết định xem có nên cắt bỏ một nhánh hay không?",
    options: [
      "Training set",
      "Validation set",
      "Test set",
      "Tập OOB"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Nếu dùng chính tập Training set để đánh giá việc cắt tỉa thì thuật toán sẽ **không bao giờ cắt bất kỳ nhánh nào**, vì trên tập Train, cây càng sâu thì độ chính xác càng cao ($100\\%$).
* Do đó, bắt buộc phải dùng **Validation set (Tập kiểm định độc lập)**:
  - Thử nghiệm cắt bỏ một nhánh con từ dưới lên.
  - Nếu sau khi cắt bỏ nhánh đó mà độ chính xác trên tập Validation **không đổi hoặc tăng lên** (chứng tỏ nhánh đó chỉ học vẹt dữ liệu nhiễu), thuật toán sẽ chính thức chặt bỏ nhánh đó!`,
    slideRef: "Slide Chương 4, Trang 52-53"
  },

  144: {
    question: "Mô hình nào sau đây vừa có tính năng giải thích trực quan bằng luật Nếu-Thì, vừa không đòi hỏi chuẩn hóa thang đo dữ liệu?",
    options: [
      "Logistic Regression",
      "Multi-Layer Perceptron",
      "Decision Tree",
      "K-Means Clustering"
    ],
    answer: 2,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Tính năng giải thích trực quan bằng luật If - Then:** Mỗi nhánh đi từ nút gốc đến nút lá tương đương với một mệnh đề logic (ví dụ \`NẾU Tuổi > 30 VÀ Thu nhập > 20tr THÌ Mua xe = YES\`).
* **Không đòi hỏi chuẩn hóa dữ liệu:** Do thuật toán chỉ so sánh thứ tự lớn hơn / nhỏ hơn của từng đặc trưng độc lập.
* Trong 4 phương án, chỉ có **Cây quyết định (Decision Tree)** thỏa mãn đồng thời cả hai ưu điểm tuyệt vời này.`,
    slideRef: "Slide Chương 4, Trang 56"
  },

  145: {
    question: "So sánh tổng thể giữa Cây quyết định đơn lẻ và Rừng ngẫu nhiên (Random Forest):",
    options: [
      "Cây đơn dễ giải thích hơn nhưng độ chính xác và ổn định kém hơn; Random Forest chính xác và ổn định hơn nhiều nhưng khó diễn giải hơn",
      "Cây đơn luôn có độ chính xác cao hơn Random Forest",
      "Random Forest có thời gian huấn luyện nhanh hơn cây đơn",
      "Không có sự khác biệt nào giữa hai mô hình"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Sự đánh đổi kinh điển giữa Cây đơn và Random Forest:
* **Cây quyết định đơn lẻ (Single Tree):**
  - **Ưu điểm:** Tính diễn giải cực cao (**White-box**), dễ vẽ sơ đồ giải thích cho khách hàng/sếp hiểu.
  - **Nhược điểm:** Độ chính xác không cao, rất dễ bị Overfitting, cực kỳ bất ổn định (High Variance).
* **Random Forest (Rừng ngẫu nhiên):**
  - **Ưu điểm:** Độ chính xác vượt trội, chống Overfitting cực tốt, rất ổn định (Low Variance).
  - **Nhược điểm:** Trở thành mô hình "Hộp đen" (**Black-box**), rất khó giải thích lý do cụ thể vì quyết định được tổng hợp từ hàng trăm cây khác nhau.`,
    slideRef: "Slide Chương 4, Trang 67, 114"
  }
};
