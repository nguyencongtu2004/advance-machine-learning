module.exports = {
  221: {
    question: "Nhược điểm lớn nhất của chỉ số Information Gain chuẩn trong thuật toán ID3 là gì?",
    options: [
      "Không thể tính toán được với dữ liệu dạng chuỗi",
      "Có xu hướng thiên vị (bias) chọn các thuộc tính có quá nhiều giá trị phân biệt (ví dụ: Số CCCD, ID sinh viên)",
      "Luôn tạo ra cây có độ sâu chỉ bằng 1",
      "Không bao giờ hội tụ khi huấn luyện"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Hiện tượng thiên vị đặc trưng phân mảnh (High Cardinality Bias):**
  - Giả sử trong tập dữ liệu có thuộc tính \`Mã sinh viên\` hoặc \`Số CCCD\` (mỗi dòng là một giá trị duy nhất).
  - Nếu thuật toán ID3 chọn thuộc tính này, nó sẽ chẻ ra $N$ nhánh con, mỗi nhánh con chỉ chứa đúng 1 sinh viên!
  - Lúc này, mỗi nhánh con hoàn toàn thuần khiết $100\\%$ ($H(S_v) = 0$).
  - Khi đó, Entropy sau chia $H(S|A) = 0 \\implies IG(S, A) = H(S) - 0 = H(S)$ đạt giá trị **CỰC ĐẠI TUYỆT ĐỐI**!
* Thuật toán tưởng đây là thuộc tính hoàn hảo nhất và chọn làm nút gốc, nhưng trên thực tế cây này chỉ học vẹt mã số, hoàn toàn vô dụng trên dữ liệu mới!
* 👉 **Giải pháp:** C4.5 ra đời dùng **Gain Ratio** để phạt các thuộc tính chia ra quá nhiều nhánh vụn vặt.`,
    slideRef: "Slide Chương 4, Trang 33-35"
  },

  222: {
    question: "Trong thuật toán Cây quyết định, điều nào sau đây KHÔNG phải là một điều kiện dừng hợp lệ khi mở rộng nút?",
    options: [
      "Tất cả các mẫu tại nút đều thuộc về cùng một lớp nhãn duy nhất",
      "Độ sâu của cây đạt đến giới hạn max_depth quy định",
      "Số lượng mẫu tại nút nhỏ hơn ngưỡng min_samples_split",
      "Độ đo Information Gain của thuộc tính tốt nhất đạt giá trị cực đại bằng 100"
    ],
    answer: 3,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Các điều kiện dừng hợp lệ để một nút trở thành nút lá:
1. **Nút đã thuần khiết:** Tất cả các mẫu đều cùng 1 lớp (Entropy = 0, Gini = 0).
2. **Hết thuộc tính để chia** hoặc tất cả các mẫu đều có giá trị thuộc tính giống hệt nhau.
3. **Chạm giới hạn tiền cắt tỉa:** Độ sâu đạt \`max_depth\`, hoặc số mẫu nhỏ hơn \`min_samples_split\`.

### ⚠️ Vì sao phương án 4 là SAI (Bẫy thi)?
* Công thức Information Gain: $IG(S, A) = H(S) - H(S|A)$.
* Vì $H(S)$ với 2 lớp chỉ tối đa bằng $1.0$ (với $C$ lớp tối đa bằng $\\log_2 C$), nên $IG$ **không bao giờ có thể đạt tới giá trị 100**! Con số 100 là hoàn toàn vô lý về mặt toán học.`,
    slideRef: "Slide Chương 4, Trang 38-40"
  },

  223: {
    question: "Sự khác biệt cốt lõi giữa kỹ thuật Cắt tỉa trước (Pre-pruning) và Cắt tỉa sau (Post-pruning) trong Cây quyết định là gì?",
    options: [
      "Pre-pruning dừng sớm quá trình phát triển cây dựa trên ngưỡng; Post-pruning cho cây mọc hoàn chỉnh rồi mới tỉa bớt các nhánh phụ dựa trên tập validation",
      "Pre-pruning chỉ dùng cho bài toán Hồi quy, còn Post-pruning chỉ dùng cho Phân loại",
      "Pre-pruning làm tăng overfitting, còn Post-pruning làm tăng underfitting",
      "Pre-pruning loại bỏ thuộc tính đầu vào trước khi huấn luyện"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Pre-pruning (Cắt tỉa trước / Dừng sớm):** Giống như việc "uốn cây cảnh từ bé". Trong lúc cây đang mọc, nếu gặp điều kiện chặn (\`max_depth\`, \`min_samples_split\`, \`min_samples_leaf\`), thuật toán lập tức **chặn không cho mọc tiếp**.
  - *Ưu điểm:* Huấn luyện nhanh, tốn ít bộ nhớ.
  - *Nhược điểm:* Dễ bị dừng non (Early stopping) do không nhìn thấy những phép phân chia tiềm năng ở các tầng sâu hơn.
* **Post-pruning (Cắt tỉa sau):** Giống như "để cây mọc tự do sum suê rồi vác kéo đi tỉa cành". Cho cây phát triển tối đa đến khi Overfitting, sau đó dựa vào **tập Validation** để tỉa dần các nhánh không mang lại lợi ích.
  - *Ưu điểm:* Tìm ra cấu trúc cây tối ưu hơn.
  - *Nhược điểm:* Tốn thời gian huấn luyện cây đầy đủ ban đầu.`,
    slideRef: "Slide Chương 4, Trang 42-45"
  },

  224: {
    question: "Để xử lý thuộc tính dạng liên tục (Continuous Attribute) trong cây CART/C4.5, thuật toán thực hiện như thế nào?",
    options: [
      "Bắt buộc người dùng phải gán nhãn thủ công từng khoảng",
      "Sắp xếp các giá trị thuộc tính tăng dần, thử nghiệm các ngưỡng cắt là trung điểm giữa 2 giá trị kề cận và chọn ngưỡng tối ưu độ đo",
      "Lấy giá trị trung bình cộng của toàn bộ cột làm ngưỡng duy nhất",
      "Bỏ qua thuộc tính liên tục và chỉ dùng thuộc tính phân loại"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Quy trình biến đổi thuộc tính liên tục thành phép chia nhị phân:
1. Lấy toàn bộ giá trị của đặc trưng đó trong tập dữ liệu và sắp xếp theo thứ tự tăng dần: $x_{(1)} < x_{(2)} < \\dots < x_{(N)}$.
2. Tạo ra các ngưỡng chia ứng viên là **trung điểm của hai giá trị kề nhau**:
   $$t_i = \\frac{x_{(i)} + x_{(i+1)}}{2}$$
3. Với mỗi ngưỡng $t_i$, dữ liệu được tách thành hai nhóm ($x \\le t_i$ và $x > t_i$).
4. Tính độ đo (Information Gain hoặc Gini) cho từng ngưỡng và chọn ngưỡng $t^*$ nào đem lại độ thuần khiết cao nhất.`,
    slideRef: "Slide Chương 4, Trang 48-50"
  },

  225: {
    question: "Trong thuật toán Rừng ngẫu nhiên (Random Forest) cho bài toán PHÂN LỚP (Classification) có d thuộc tính, số thuộc tính m được lấy mẫu ngẫu nhiên tại mỗi nút thường được khuyến nghị là:",
    options: [
      "m = d (lấy toàn bộ thuộc tính)",
      "m = sqrt(d) (căn bậc hai của d)",
      "m = d / 2",
      "m = log2(d) + 10"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Quy tắc thực nghiệm kinh điển của Leo Breiman khi thiết kế Random Forest:
* Với bài toán **Phân loại (Classification)** có $d$ đặc trưng:
  $$m = \\lfloor\\sqrt{d}\\rfloor$$
* *Ví dụ:* Nếu dữ liệu có $d = 100$ đặc trưng, tại mỗi nút phân chia, thuật toán chỉ rút ngẫu nhiên $m = \\sqrt{100} = 10$ đặc trưng để tìm điểm chia tốt nhất.
* Trong thư viện Scikit-learn: Tham số này được gọi là \`max_features='sqrt'\` (mặc định cho \`RandomForestClassifier\`).`,
    slideRef: "Slide Chương 4, Trang 68-70"
  },

  226: {
    question: "Trong thuật toán Rừng ngẫu nhiên (Random Forest) cho bài toán HỒI QUY (Regression) có d thuộc tính, số thuộc tính m được khuyến nghị chọn tại mỗi nút là:",
    options: [
      "m = d / 3",
      "m = sqrt(d)",
      "m = d - 1",
      "m = 1"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Khác với bài toán phân loại dùng $\\sqrt{d}$:
* Với bài toán **Hồi quy (Regression)** có $d$ đặc trưng, giá trị lý thuyết và thực nghiệm tối ưu thường được khuyến nghị là:
  $$m = \\left\\lfloor\\frac{d}{3}\\right\\rfloor$$
* *Ví dụ:* Nếu bài toán dự đoán giá nhà có $d = 30$ đặc trưng, tại mỗi nút của mỗi cây hồi quy, ta lấy ngẫu nhiên $m = 30 / 3 = 10$ đặc trưng để tìm điểm chia cực tiểu hóa phương sai.`,
    slideRef: "Slide Chương 4, Trang 71"
  },

  227: {
    question: "Ước lượng lỗi ngoài túi Out-of-Bag (OOB Error) trong Random Forest mang lại lợi ích nổi bật nào?",
    options: [
      "Loại bỏ hoàn toàn bước huấn luyện cây",
      "Đánh giá khách quan chất lượng mô hình trên dữ liệu chưa thấy mà không cần tách tập Validation hoặc chạy Cross-Validation",
      "Tăng gấp đôi tốc độ dự đoán thời gian thực",
      "Làm giảm số lượng cây trong rừng xuống còn 1 cây"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Vì mỗi cây trong Random Forest được huấn luyện trên một mẫu Bootstrap khác nhau, nên với mỗi mẫu dữ liệu $x_i$, sẽ có khoảng $36.8\\%$ số cây trong rừng **chưa từng nhìn thấy $x_i$ trong lúc huấn luyện**.
* Để dự đoán cho $x_i$, ta chỉ cho các cây mà $x_i$ là mẫu OOB bỏ phiếu.
* **Lợi ích thực tiễn:**
  - Cho ra ước lượng sai số khách quan không chệch (Unbiased estimate), chính xác tương đương với K-Fold Cross-Validation.
  - Tiết kiệm $100\\%$ tài nguyên tính toán vì không phải chạy lại mô hình $K$ lần như K-Fold!`,
    slideRef: "Slide Chương 4, Trang 74-76"
  },

  228: {
    question: "Trong thuật toán AdaBoost, trọng số đóng góp alpha_m của một mô hình cơ sở vào quyết định cuối cùng phụ thuộc vào điều gì?",
    options: [
      "Thời gian mà mô hình đó mất để huấn luyện",
      "Tỷ lệ lỗi epsilon_m của mô hình: lỗi càng nhỏ thì alpha_m càng lớn",
      "Số lượng nút lá của cây cơ sở",
      "Thứ tự xuất hiện ngẫu nhiên trong vòng lặp"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Trong AdaBoost, các mô hình cơ sở không có quyền biểu quyết ngang nhau:
$$\\alpha_m = \\frac{1}{2} \\ln\\left(\\frac{1 - \\epsilon_m}{\\epsilon_m}\\right)$$
* $\\epsilon_m$ là tỷ lệ sai số có trọng số của mô hình cơ sở thứ $m$.
* **Mối quan hệ:**
  - Khi $\\epsilon_m \\to 0$ (mô hình dự đoán gần như hoàn hảo) $\\implies \\alpha_m \\to +\\infty$ (tiếng nói cực lớn).
  - Khi $\\epsilon_m = 0.5$ (đoán ngang ngửa đoán mò) $\\implies \\alpha_m = 0$ (bị tước quyền bỏ phiếu).
  - Khi $\\epsilon_m > 0.5$ (đoán sai nhiều hơn đúng) $\\implies \\alpha_m < 0$ (bị đảo ngược dự đoán).`,
    slideRef: "Slide Chương 4, Trang 88-92"
  },

  229: {
    question: "Khái niệm 'Weak Learner' (Bộ học yếu) thường dùng trong Boosting (như AdaBoost) có nghĩa là gì?",
    options: [
      "Mô hình có độ chính xác luôn luôn bằng 0%",
      "Mô hình dự đoán chỉ cần tốt hơn đoán ngẫu nhiên một chút (ví dụ: độ chính xác > 50% trong phân loại nhị phân)",
      "Mô hình chỉ được huấn luyện trên 1 mẫu dữ liệu duy nhất",
      "Mô hình có thời gian suy luận quá chậm"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Bộ học yếu (Weak Learner):** Là mô hình có khả năng dự đoán chỉ cần **nhỉnh hơn đoán ngẫu nhiên một chút** ($Accuracy > 50\\%$ trong bài toán nhị phân, tức $\\epsilon < 0.5$).
* Không cần mô hình phải phức tạp hay chính xác cao. Ví dụ kinh điển là một Decision Stump (Cây quyết định 1 tầng chỉ kiểm tra 1 điều kiện duy nhất).
* Định lý nền tảng của Schapire (1990) đã chứng minh rằng: **Bất kỳ thuật toán học yếu nào cũng có thể được nâng cấp (Boost) thành một bộ học mạnh (Strong Learner)** có độ chính xác tùy ý bằng cách kết hợp tuần tự!`,
    slideRef: "Slide Chương 4, Trang 82-84"
  },

  230: {
    question: "Điểm khác biệt căn bản giữa thuật toán AdaBoost và Gradient Boosting (GBDT) là gì?",
    options: [
      "AdaBoost dùng cho Hồi quy, còn GBDT chỉ dùng cho Phân cụm",
      "AdaBoost thay đổi trọng số phân phối của các mẫu khó; còn GBDT huấn luyện cây mới để khớp trực tiếp với phần dư (residual/gradient âm) của các cây trước",
      "AdaBoost huấn luyện các cây song song độc lập, còn GBDT huấn luyện tuần tự",
      "AdaBoost chỉ dùng được với mạng nơ-ron sâu"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Mặc dù đều thuộc họ Boosting tuần tự:
* **AdaBoost:** Tác động vào **DỮ LIỆU** bằng cách thay đổi trọng số của mẫu (mẫu đoán sai bị tăng trọng số để mô hình sau tập trung học).
* **Gradient Boosting (GBDT):** Tác động vào **HÀM MẤT MÁT** bằng giải tích:
  - Giữ nguyên trọng số mẫu.
  - Tính toán độ lệch giữa nhãn thật và dự đoán hiện tại $\\implies$ Phần dư (Residuals / Âm gradient).
  - Cây mới được huấn luyện để **dự đoán chính xác phần dư này**, sau đó cộng dồn vào mô hình tổng thể: $F_m(x) = F_{m-1}(x) + \\eta h_m(x)$.`,
    slideRef: "Slide Chương 4, Trang 98-102"
  },

  316: {
    question: "Cho một tập dữ liệu nhị phân S gồm 16 mẫu, trong đó có 8 mẫu Dương (+) và 8 mẫu Âm (-). Giá trị Entropy H(S) của tập dữ liệu này bằng bao nhiêu?",
    options: [
      "0.0",
      "0.5",
      "1.0",
      "2.0"
    ],
    answer: 2,
    explanation: `### 🎯 Bản chất trực quan & Tính toán chi tiết:
Tập dữ liệu có $N = 16$ mẫu:
* Tỷ lệ mẫu Dương: $p_+ = \\frac{8}{16} = 0.5$.
* Tỷ lệ mẫu Âm: $p_- = \\frac{8}{16} = 0.5$.

Áp dụng công thức Shannon Entropy:
$$H(S) = - \\left[ p_+ \\log_2(p_+) + p_- \\log_2(p_-) \\right]$$
$$H(S) = - \\left[ 0.5 \\log_2(0.5) + 0.5 \\log_2(0.5) \\right]$$
Vì $\\log_2(0.5) = \\log_2(2^{-1}) = -1$:
$$H(S) = - [0.5 \\times (-1) + 0.5 \\times (-1)] = - [-0.5 - 0.5] = \\mathbf{1.0\\text{ bit}}$$

> 💡 **Mẹo thi cử:** Cứ thấy bài toán 2 lớp mà số mẫu 2 bên bằng nhau (50% - 50%), khoanh ngay **Entropy = 1.0** không cần bấm máy tính!`,
    slideRef: "Slide Chương 4, Trang 14-16"
  },

  317: {
    question: "Cho một tập dữ liệu S gồm 10 mẫu thuộc 2 lớp: 9 mẫu Dương và 1 mẫu Âm. Giá trị Gini Impurity của tập S theo thuật toán CART bằng bao nhiêu?",
    options: [
      "0.18",
      "0.09",
      "0.45",
      "0.81"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Tính toán chi tiết:
Tập dữ liệu có $N = 10$ mẫu:
* Tỷ lệ mẫu Dương: $p_+ = \\frac{9}{10} = 0.9$.
* Tỷ lệ mẫu Âm: $p_- = \\frac{1}{10} = 0.1$.

Áp dụng công thức Gini Impurity của thuật toán CART:
$$Gini(S) = 1 - \\sum_{k=1}^C p_k^2 = 1 - \\left( p_+^2 + p_-^2 \\right)$$
$$Gini(S) = 1 - (0.9^2 + 0.1^2) = 1 - (0.81 + 0.01) = 1 - 0.82 = \\mathbf{0.18}$$

* Kết quả là **$0.18$** (độ vẩn đục rất thấp vì nút gần như thuần khiết, 90% là mẫu Dương).`,
    slideRef: "Slide Chương 4, Trang 26-28"
  },

  318: {
    question: "Giá trị cực đại khả dĩ của độ đo Gini Impurity đối với bài toán phân loại nhị phân (2 lớp) là bao nhiêu và đạt được khi nào?",
    options: [
      "1.0, khi tất cả các mẫu thuộc cùng một lớp",
      "0.5, khi hai lớp có số lượng mẫu bằng nhau (p1 = p2 = 0.5)",
      "0.25, khi hai lớp có số lượng mẫu bằng nhau",
      "0.0, khi tập dữ liệu bị rỗng"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Hàm Gini Impurity với 2 lớp ($p_2 = 1 - p_1$):
$$Gini(p_1) = 1 - [p_1^2 + (1 - p_1)^2] = 2p_1(1 - p_1)$$
* Đạo hàm: $Gini'(p_1) = 2 - 4p_1 = 0 \\iff p_1 = 0.5$.
* Giá trị cực đại:
  $$Gini_{\\max} = 2 \\times 0.5 \\times (1 - 0.5) = \\mathbf{0.5}$$
* Đạt được khi hai lớp có tỷ lệ ngang nhau $50\\% - 50\\%$.

⚠️ **Phân biệt cực đại:**
* Bài toán 2 lớp: $\\text{Entropy}_{\\max} = \\mathbf{1.0}$; $\\text{Gini}_{\\max} = \\mathbf{0.5}$.`,
    slideRef: "Slide Chương 4, Trang 27"
  },

  319: {
    question: "Nhược điểm chí mạng của tiêu chuẩn Thông tin Thu được (Information Gain) trong thuật toán ID3 là gì?",
    options: [
      "Không thể tính toán được ma trận hiệp phương sai",
      "Có xu hướng thiên vị (ưu tiên cao) các thuộc tính có số lượng giá trị phân biệt lớn (như ID khách hàng, Số CMND, Ngày sinh), dẫn đến cây chia thành hàng trăm nhánh con vô nghĩa",
      "Luôn luôn chia nhị phân",
      "Chỉ áp dụng được cho bài toán hồi quy"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* **Bản chất của Information Gain:** $IG(S, A) = H(S) - H(S|A)$.
* Khi thuộc tính $A$ có số lượng giá trị phân biệt bằng đúng số dòng dữ liệu (như \`Số CMND\` hay \`ID giao dịch\`):
  - Mỗi nhánh con $S_v$ chỉ chứa đúng 1 mẫu.
  - Một mẫu thì thuần khiết $100\\% \\implies H(S_v) = 0 \\implies H(S|A) = 0$.
  - Khi đó $IG(S, A) = H(S) - 0 = H(S)$ đạt giá trị lớn nhất tuyệt đối!
* **Hậu quả:** Thuật toán luôn chọn thuộc tính ID này làm nút gốc, tạo ra một cây cực kỳ phân mảnh, học vẹt dữ liệu cũ nhưng dự đoán sai hoàn toàn trên dữ liệu mới!`,
    slideRef: "Slide Chương 4, Trang 20-22"
  },

  320: {
    question: "Thuật toán C4.5 của Ross Quinlan đã giải quyết vấn đề thiên vị thuộc tính nhiều giá trị của ID3 bằng cách nào?",
    options: [
      "Thay thế bằng thuật toán Gradient Descent",
      "Sử dụng Tỷ số Thu được (Gain Ratio = Information Gain / Split Information), trong đó Split Information đóng vai trò như một khoản phạt dựa trên số lượng và kích thước nhánh phân chia",
      "Chuyển toàn bộ dữ liệu thành dạng số thực bằng PCA",
      "Bắt buộc cây chỉ được có tối đa 2 tầng"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Để trừng phạt các thuộc tính có quá nhiều giá trị rời rạc, thuật toán **C4.5** cải tiến công thức thành **Gain Ratio (Tỷ số độ lợi)**:
$$\\text{Gain Ratio}(S, A) = \\frac{IG(S, A)}{\\text{SplitInfo}(S, A)}$$
* Trong đó, **Split Information** đo độ hỗn loạn của chính việc chia nhánh:
  $$\\text{SplitInfo}(S, A) = - \\sum_{v=1}^K \\frac{|S_v|}{|S|} \\log_2\\left( \\frac{|S_v|}{|S|} \\right)$$
* Nếu một thuộc tính bị bẻ vụn ra thành hàng trăm nhánh con li ti, mẫu số $\\text{SplitInfo}$ sẽ cực kỳ lớn $\\implies$ làm cho **Gain Ratio bị kéo tụt xuống**!
* Nhờ vậy, C4.5 tránh được việc chọn các thuộc tính ID vô nghĩa.`,
    slideRef: "Slide Chương 4, Trang 22-24"
  },

  321: {
    question: "Trong Cây hồi quy (Regression Tree) của thuật toán CART, giá trị dự đoán tại một nút lá và tiêu chuẩn để chọn điểm chia nhánh lần lượt là gì?",
    options: [
      "Dự đoán bằng Mode của lá; Tiêu chuẩn chia là Information Gain",
      "Dự đoán bằng Giá trị trung bình (Mean) của các mẫu tại nút lá; Tiêu chuẩn chia là Cực tiểu hóa Tổng bình phương sai số (MSE hay Variance Reduction)",
      "Dự đoán bằng Trung vị (Median); Tiêu chuẩn chia là Gini Impurity",
      "Dự đoán bằng phương trình siêu phẳng OLS"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Trong Cây hồi quy (Regression Tree):
1. **Giá trị dự đoán tại nút lá:** Không phải nhãn lớp mà là giá trị liên tục, được tính bằng **Trung bình cộng (Mean)** $\\hat{y} = \\bar{y}$ của các mẫu trong lá đó.
2. **Tiêu chuẩn chọn điểm chia nhánh:** Không dùng Entropy hay Gini (vốn chỉ áp dụng cho biến nhãn rời rạc). Thay vào đó, nó tìm điểm chia làm **giảm phương sai nhiều nhất (Variance Reduction)**, tương đương với việc **cực tiểu hóa Tổng bình phương sai số phần dư (RSS / MSE)** của hai nhánh con:
   $$RSS_{\\text{split}} = \\sum_{i \\in \\text{Trái}} (y_i - \\bar{y}_{\\text{Trái}})^2 + \\sum_{i \\in \\text{Phải}} (y_i - \\bar{y}_{\\text{Phải}})^2$$`,
    slideRef: "Slide Chương 4, Trang 31-33"
  },

  322: {
    question: "Kỹ thuật 'Tỉa cây trước' (Pre-pruning / Dừng sớm) trong Cây quyết định thường sử dụng các điều kiện dừng nào sau đây?",
    options: [
      "Độ sâu tối đa (max_depth), Số mẫu tối thiểu để phân chia nút (min_samples_split), Số mẫu tối thiểu tại nút lá (min_samples_leaf)",
      "Số vòng lặp Epoch trong Gradient Descent",
      "Hệ số phạt L1 trong hàm mất mát Lasso",
      "Số lượng cụm K trong thuật toán K-Means"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Các siêu tham số Pre-pruning phổ biến nhất trong Scikit-learn (\`DecisionTreeClassifier\`):
* \`max_depth\`: Khống chế độ sâu tối đa của cây (chặn không cho mọc quá sâu).
* \`min_samples_split\`: Số lượng mẫu tối thiểu bắt buộc phải có tại một nút trong để được phép tiếp tục chia nhánh (ví dụ: nút chỉ còn 3 mẫu thì cấm chia).
* \`min_samples_leaf\`: Số lượng mẫu tối thiểu bắt buộc phải có trong mỗi nút lá (ngăn chặn lá chỉ chứa 1 mẫu cá biệt).
* \`max_leaf_nodes\`: Số lượng nút lá tối đa cho phép trong cây.`,
    slideRef: "Slide Chương 4, Trang 35-37"
  },

  323: {
    question: "Trong kỹ thuật 'Tỉa cây sau' (Post-pruning) bằng thuật toán Cost-Complexity Pruning, hàm mục tiêu cần cực tiểu hóa là R_α(T) = R(T) + α * |T|. Trong đó |T| biểu thị đại lượng nào?",
    options: [
      "Thời gian tính toán của cây tính bằng mili-giây",
      "Số lượng nút lá (Leaf nodes) của cây T",
      "Số lượng đặc trưng đầu vào của dữ liệu",
      "Tổng số mẫu trong tập huấn luyện"
    ],
    answer: 1,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Thuật toán Cost-Complexity Pruning (tương tự như Regularization):
$$R_\\alpha(T) = R(T) + \\alpha |T|$$
* $R(T)$: Sai số huấn luyện (hoặc độ vẩn đục) của toàn bộ cây $T$.
* $|T|$: **Số lượng nút lá (Number of terminal/leaf nodes)** của cây $T$ $\\implies$ Đại diện cho độ cồng kềnh, phức tạp của cây!
* $\\alpha$ (\`ccp_alpha\`): Siêu tham số điều khiển mức phạt độ phức tạp.
  - Khi $\\alpha = 0$: Không phạt gì cả $\\implies$ Giữ nguyên cây gốc to nhất (Full tree).
  - Khi $\\alpha$ càng lớn: Phạt cây cồng kềnh càng nặng $\\implies$ Buộc cây phải bị tỉa bớt các nhánh lá để thu nhỏ kích thước $|T|$.`,
    slideRef: "Slide Chương 4, Trang 38-40"
  },

  324: {
    question: "Định lý Bồi thẩm đoàn Condorcet (Condorcet's Jury Theorem) giải thích nền tảng lý thuyết của Ensemble Learning như thế nào?",
    options: [
      "Nếu mỗi thành viên có xác suất quyết định đúng p > 0.5 và đưa ra quyết định độc lập với nhau, thì xác suất để biểu quyết đa số đưa ra quyết định đúng sẽ tiệm cận 1 (100%) khi số lượng thành viên tăng lên",
      "Một chuyên gia giỏi luôn đưa ra quyết định tốt hơn một nhóm người",
      "Sai số của tập hợp mô hình luôn bằng trung bình cộng sai số của từng mô hình",
      "Các mô hình bắt buộc phải có trọng số bằng nhau"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
Định lý Bồi thẩm đoàn Condorcet (1785):
* Giả sử một bồi thẩm đoàn gồm $M$ người độc lập cần đưa ra phán quyết Đúng/Sai.
* Nếu mỗi cá nhân có xác suất đoán đúng $p > 0.5$ (tốt hơn tung đồng xu ngẫu nhiên):
* Thì khi kích thước bồi thẩm đoàn $M$ càng tăng lên, **xác suất để phán quyết của số đông (đa số phiếu) là chính xác sẽ tiến dần về $1$ ($100\\%$)**!
* 👉 Đây chính là nền tảng toán học chứng minh vì sao gom nhiều mô hình cơ sở yếu (Weak learners) lại có thể tạo thành một mô hình tập hợp siêu mạnh (Strong learner)!`,
    slideRef: "Slide Chương 4, Trang 43-45"
  },

  325: {
    question: "Kỹ thuật Lấy mẫu có hoàn lại (Bootstrap Sampling) trong phương pháp Bagging có bản chất là gì?",
    options: [
      "Lấy ngẫu nhiên N mẫu từ tập gốc N mẫu, mỗi khi một mẫu được rút ra thì lại bỏ ngược nó vào túi để có thể được rút tiếp ở các lần sau",
      "Chia tập dữ liệu thành 10 phần bằng nhau không trùng lặp",
      "Loại bỏ vĩnh viễn các mẫu có giá trị ngoại lai",
      "Chỉ lấy mẫu từ các quan sát có nhãn dương"
    ],
    answer: 0,
    explanation: `### 🎯 Bản chất trực quan & Phân tích chi tiết:
* Kỹ thuật **Bootstrap** (Efron, 1979):
  - Cho tập dữ liệu gốc gồm $N$ mẫu.
  - Ta tiến hành bốc thăm ngẫu nhiên $N$ lần.
  - Sau mỗi lần rút được 1 mẫu, ta ghi lại thông tin rồi **bỏ ngược mẫu đó lại vào túi (Sampling with replacement)**.
* Vì có hoàn lại, xác suất mỗi mẫu được chọn ở mỗi lượt bốc luôn giữ nguyên là $\\frac{1}{N}$.
* Một mẫu có thể xuất hiện nhiều lần trong tập con Bootstrap mới, trong khi một số mẫu khác không bao giờ được bốc trúng.`,
    slideRef: "Slide Chương 4, Trang 47-49"
  }
};
