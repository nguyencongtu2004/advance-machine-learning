# 📘 BẢN NOTE CHI TIẾT CHƯƠNG 1: TỔNG QUAN VỀ HỌC MÁY
> **Tài liệu gốc:** [Chuong-1-Tong-quan-ve-hoc-may.pdf](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/Chuong-1-Tong-quan-ve-hoc-may.pdf) (72 trang)  
> **Mục tiêu:** Đọc là hiểu ngay bản chất, nhớ lâu, tự tin ăn trọn 15–18 câu trắc nghiệm của Chương 1.

---

## 1. Bức tranh tổng quan: AI vs Machine Learning vs Deep Learning
📍 **[Slide Trang 4 – 6, 39]**

### 1.1 Khái niệm cơ bản (Hiểu nôm na)
* **Trí tuệ nhân tạo (AI - Artificial Intelligence):** Là cái "ô" to nhất. Bất kỳ máy móc hay phần mềm nào có hành vi thông minh mô phỏng trí tuệ con người đều được gọi là AI.
  - *Ví dụ:* Một con bot đánh cờ vua viết bằng 100.000 dòng lệnh `if-else` do con người tự nghĩ ra luật chơi thì nó vẫn là AI (hệ thống dựa trên tri thức/luật).
* **Học máy (Machine Learning - ML):** Là tập con của AI. Điểm khác biệt sống còn: Thay vì con người ngồi viết tay từng dòng luật `if-else`, chúng ta ném dữ liệu cho máy, và **máy tự tìm ra quy luật**.
* **Học sâu (Deep Learning - DL):** Là tập con của ML. Sử dụng kiến trúc mạng nơ-ron nhân tạo nhiều tầng ẩn (Deep Neural Networks) để tự động trích xuất các đặc trưng cực kỳ phức tạp (nhận diện khuôn mặt, dịch ngôn ngữ).

### 1.2 Bốn góc nhìn định nghĩa AI của các giáo sư đầu ngành
📍 **[Slide Trang 6]**
1. **Suy nghĩ như con người (Thinking Humanly):** Máy có nhận thức, mô phỏng quá trình tâm lý của não bộ.
2. **Suy nghĩ hợp lý (Thinking Rationally):** Máy dựa trên các quy luật logic (tam đoạn luận, suy diễn đúng đắn).
3. **Hành động như con người (Acting Humanly):** Máy vượt qua được phép thử Turing (Turing Test - con người không phân biệt được đang chat với người hay máy).
4. **Hành động hợp lý (Acting Rationally):** Máy là một tác tử hợp lý (Rational Agent), luôn hành động để đạt được kết quả kỳ vọng tốt nhất.

---

## 2. Dòng thời gian lịch sử AI (Các mốc trắc nghiệm hay hỏi)
📍 **[Slide Trang 7 – 10]**
Đề thi trắc nghiệm đóng rất hay hỏi ghép nối năm hoặc tên tác giả, hãy nhớ các mốc sau:
* **1950:** **Alan Turing** đề xuất khái niệm trí tuệ nhân tạo qua *Phép thử Turing (Turing Test)*.
* **1951:** **Minsky và Edmonds** chế tạo mạng nơ-ron nhân tạo đầu tiên (SNARC).
* **1959:** **Arthur Samuel** đưa ra định nghĩa nổi tiếng về Machine Learning.
* **1969:** **Arthur Bryson và Yu-Chi Ho** mô tả thuật toán **Lan truyền ngược (Backpropagation)** để huấn luyện mạng nơ-ron nhiều tầng.
* **2006:** **Fei-Fei Li** khởi động dự án **ImageNet** (cơ sở dữ liệu hình ảnh khổng lồ thúc đẩy bùng nổ Deep Learning).
* **2009:** **Andrew Ng** cùng cộng sự đề xuất sử dụng **GPU** để tăng tốc huấn luyện học sâu.
* **2018:** **OpenAI** phát hành mô hình GPT (mở đầu kỷ nguyên LLM).

---

## 3. Vì sao cần Học Máy? Khi nào nên dùng?
📍 **[Slide Trang 36 – 38]**
* **Hạn chế của lập trình truyền thống (Rule-based):**
  - Con người không thể ngồi viết tay hàng triệu quy tắc cho các bài toán phức tạp (ví dụ: làm sao viết luật `if-else` để phân biệt ảnh con chó và con mèo?).
  - Khi bối cảnh thay đổi, luật viết tay bị lỗi thời và cực kỳ tốn công bảo trì.
* **Khi nào nên dùng Học máy?**
  1. Khi bài toán quá phức tạp, không có công thức toán hay thuật toán giải tích tường minh.
  2. Khi khối lượng dữ liệu lớn và quy luật ẩn bên trong liên tục biến động (dự báo giá nhà, phát hiện giao dịch gian lận).
  3. Khi cần cá nhân hóa cho từng người dùng (hệ thống gợi ý phim Netflix, video TikTok).

---

## 4. Hai định nghĩa kinh điển về Machine Learning
📍 **[Slide Trang 40 – 42]**

### 4.1 Định nghĩa của Arthur Samuel (1959)
> *"Học máy là ngành học mang lại cho máy tính khả năng học tập mà không cần được lập trình một cách tường minh cho từng trường hợp cụ thể."*

### 4.2 Định nghĩa của Tom Mitchell (1997) - ⚠️ TRỌNG TÂM THI 100%!
> *"Một chương trình máy tính được gọi là học từ kinh nghiệm **$E$** (Experience) đối với một tác vụ **$T$** (Task) và một thước đo hiệu năng **$P$** (Performance), nếu hiệu năng của nó ở tác vụ $T$, được đo lường bằng $P$, cải thiện dần theo kinh nghiệm $E$."*

* **Bảng phân tích ví dụ Bộ lọc thư rác (Spam Filter) trong slide:**
  - **Tác vụ $T$ (Task):** Phân loại từng email xem nó là "Thư rác" (Spam) hay "Thư bình thường" (Ham).
  - **Kinh nghiệm $E$ (Experience):** Tập dữ liệu các email cũ trong quá khứ đã được con người gán nhãn sẵn.
  - **Độ đo $P$ (Performance):** Tỷ lệ phần trăm email được phân loại đúng ($Accuracy$), hoặc số lượng email quan trọng bị gắn nhầm vào spam.

---

## 5. Bốn phương pháp học từ dữ liệu
📍 **[Slide Trang 11 – 15, 69 – 72]**

### 5.1 Học có giám sát (Supervised Learning)
* **Đặc điểm:** Dữ liệu huấn luyện có đầy đủ cả **Đặc trưng đầu vào $X$** và **Nhãn kết quả đúng $y$** (Ground truth). Máy học ánh xạ $y = f(x)$.
* Chia thành 2 bài toán con:
  - **Phân loại (Classification):** Nhãn $y$ là rời rạc, có số lượng lớp hữu hạn.
    - *Ví dụ:* Phân loại email (Spam / Non-spam), nhận diện chữ số viết tay ($0, 1, \dots, 9$), phát hiện ung thư (Lành tính / Ác tính).
  - **Hồi quy (Regression):** Nhãn $y$ là giá trị số thực liên tục.
    - *Ví dụ:* Dự đoán giá nhà (triệu đồng), dự đoán nhiệt độ ngày mai, dự đoán doanh thu.

### 5.2 Học không giám sát (Unsupervised Learning)
* **Đặc điểm:** Dữ liệu **chỉ có đặc trưng đầu vào $X$, hoàn toàn không có nhãn $y$**.
* Máy phải tự khám phá cấu trúc ẩn hoặc gom nhóm tự nhiên trong dữ liệu.
* *Bài toán tiêu biểu:*
  - **Phân cụm (Clustering):** Gom các khách hàng có hành vi mua sắm giống nhau vào cùng 1 nhóm (K-Means, DBSCAN).
  - **Giảm chiều dữ liệu (Dimensionality Reduction):** Nén dữ liệu từ 100 chiều xuống 2 chiều để vẽ biểu đồ mà không làm mất thông tin (PCA).

### 5.3 Học bán giám sát (Semi-Supervised Learning)
* **Đặc điểm:** Kết hợp giữa một **lượng nhỏ dữ liệu có nhãn** và một **lượng rất lớn dữ liệu chưa có nhãn**.
* *Ý nghĩa thực tế:* Thu thập dữ liệu thô thì rẻ (tải hàng triệu bức ảnh trên mạng), nhưng thuê chuyên gia ngồi gán nhãn từng ảnh thì cực kỳ đắt đỏ. Phương pháp này tận dụng dữ liệu không nhãn để cải thiện mô hình.

### 5.4 Học tăng cường (Reinforcement Learning)
* **Đặc điểm:** Không có dữ liệu mẫu kiểu tĩnh. Một **Agent (Tác tử)** tương tác với **Environment (Môi trường)** thông qua việc thử và sai.
* Mỗi khi agent đưa ra một **Hành động (Action)**, môi trường sẽ phản hồi bằng một **Phần thưởng (Reward)** hoặc phạt (Penalty).
* Mục tiêu: Học chiến lược hành động sao cho tối đa hóa tổng phần thưởng tích lũy theo thời gian (AlphaGo chơi cờ vây, robot học cách đi bộ, xe tự hành).

---

## 6. Bốn hình thức huấn luyện mô hình AI
📍 **[Slide Trang 28 – 32]**
* **1. Train from Scratch (Huấn luyện từ đầu):** Khởi tạo mô hình với các trọng số ngẫu nhiên hoàn toàn và huấn luyện trên tập dữ liệu từ con số 0. Tốn kém tài nguyên tính toán và đòi hỏi tập dữ liệu khổng lồ.
* **2. Pre-training (Huấn luyện trước):** Huấn luyện một mô hình trên bộ dữ liệu tổng quát cực lớn để nó nắm bắt được các tri thức nền tảng (ví dụ: huấn luyện GPT đọc hàng tỷ văn bản tiếng Anh/tiếng Việt).
* **3. Fine-tuning (Tinh chỉnh):** Lấy mô hình đã pre-train, tiếp tục cập nhật trọng số trên một tập dữ liệu nhỏ chuyên biệt của một bài toán cụ thể (ví dụ: lấy GPT fine-tune trên dữ liệu văn bản y tế để thành trợ lý bác sĩ).
* **4. Transfer Learning (Học chuyển giao):** Khái niệm tổng quát: Tái sử dụng tri thức, biểu diễn đã học từ bài toán nguồn để giải quyết bài toán đích khác có liên quan, giúp mô hình học nhanh hơn và cần ít dữ liệu hơn.

---

## 7. Các thuật ngữ nền tảng: Parameter, Hyperparameter, Loss, Metric
📍 **[Slide Trang 44 – 55]**

### 7.1 Input, Feature, Label, Prediction, Ground Truth
* **Quan sát (Sample / Instance):** Một dòng dữ liệu, một đối tượng cụ thể (ví dụ: 1 căn nhà cụ thể).
* **Feature (Đặc trưng $x$):** Các thuộc tính mô tả quan sát (diện tích, số phòng ngủ, khoảng cách đến trung tâm).
* **Label / Target ($y$):** Kết quả đúng thực tế cần dự đoán (giá bán thực tế của căn nhà = Ground Truth).
* **Prediction ($\hat{y}$):** Giá trị do mô hình tính toán và đưa ra dự đoán.

### 7.2 Loss Function vs Evaluation Metric (⚠️ Rất dễ nhầm)
* **Loss Function (Hàm mất mát):** Đo mức độ sai lệch giữa dự đoán $\hat{y}$ và giá trị thật $y$ trên từng mẫu hoặc trên tập train. **Loss được thuật toán tối ưu hóa (Gradient Descent) sử dụng trực tiếp để cập nhật tham số trong quá trình training**. Yêu cầu Loss phải có đạo hàm (khả vi).
* **Evaluation Metric (Độ đo đánh giá):** Dùng để con người đọc và hiểu chất lượng mô hình theo mục tiêu nghiệp vụ (ví dụ: Accuracy, Precision, Recall, F1-score, MAE). Metric không nhất thiết phải khả vi.

### 7.3 Tham số (Parameters) vs Siêu tham số (Hyperparameters) - ⚠️ BẪY THI KINH ĐIỂN!

| Tiêu chí | Tham số (Model Parameters) | Siêu tham số (Hyperparameters) |
| :--- | :--- | :--- |
| **Bản chất** | Là các giá trị nội tại quyết định hành vi mô hình. | Là các nút điều khiển cấu trúc mô hình hoặc cách huấn luyện. |
| **Cách xác định** | **Được mô hình tự học từ dữ liệu** qua quá trình huấn luyện. | **Do kỹ sư con người chọn trước** hoặc điều chỉnh qua thử nghiệm. |
| **Ví dụ** | • Trọng số $W$ và bias $b$ trong mạng nơ-ron.<br>• Hệ số hồi quy $w_j$ trong bài toán tuyến tính. | • Tốc độ học (Learning rate $\eta$).<br>• Độ sâu tối đa của cây (`max_depth`).<br>• Số lượng cụm $K$ trong K-Means.<br>• Hệ số phạt $\lambda$ trong Ridge/Lasso. |
| **Tập dữ liệu dùng để chọn** | Học từ **Training Set**. | Tinh chỉnh và chọn trên **Validation Set**. |

---

## 8. Ba tập dữ liệu độc lập: Train – Validation – Test
📍 **[Slide Trang 56 – 60]**

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TOÀN BỘ TẬP DỮ LIỆU ĐÃ THU THẬP                 │
├───────────────────────────────────┬──────────────────┬─────────────────┤
│        TRAINING SET (60-70%)      │ VALIDATION (15%) │   TEST (15-20%) │
│    • Học tham số (w, b)           │ • Chọn mô hình   │ • Đánh giá cuối │
│    • Cập nhật qua Gradient        │ • Chỉnh siêu     │ • Không được    │
│      Descent                      │   tham số        │   chạm vào!     │
└───────────────────────────────────┴──────────────────┴─────────────────┘
```

1. **Training Set (Tập huấn luyện):** Cung cấp kinh nghiệm để mô hình học các tham số.
2. **Validation Set (Tập thẩm định):** Dùng để so sánh nhiều mô hình khác nhau, thử nghiệm các siêu tham số, phát hiện quá khớp và quyết định điểm dừng sớm (Early stopping).
3. **Test Set (Tập kiểm thử):** Đóng vai trò như bài thi học kỳ cuối cùng. Chỉ dùng để đánh giá năng lực tổng quát hóa của mô hình cuối cùng trên dữ liệu thực tế.
4. ⚠️ **NGUYÊN TẮC VÀNG:** **Không bao giờ để thông tin từ tập Validation hay Test rò rỉ vào bước huấn luyện (Data Leakage)!**

---

## 9. Khả năng tổng quát hóa, Underfitting và Overfitting
📍 **[Slide Trang 60 – 61]**

* **Khả năng tổng quát hóa (Generalization):** Là khả năng mô hình đưa ra dự đoán chính xác trên các mẫu dữ liệu mới toanh chưa từng thấy lúc học.
* **Underfitting (Thiếu khớp - High Bias):**
  - *Hiện tượng:* Mô hình quá đơn giản, không học nổi quy luật dữ liệu. Sai số cao trên cả tập Train lẫn tập Test.
  - *Nguyên nhân:* Chọn mô hình tuyến tính cho dữ liệu phi tuyến, quá ít đặc trưng, ép phạt regularization quá mạnh.
  - *Khắc phục:* Dùng mô hình phức tạp hơn, tạo thêm đặc trưng mới, giảm bớt regularization.
* **Overfitting (Quá khớp - High Variance):**
  - *Hiện tượng:* Mô hình quá phức tạp, học vẹt thuộc lòng toàn bộ dữ liệu huấn luyện (kể cả nhiễu và ngoại lai). Sai số Train cực thấp (Loss $\approx 0$), nhưng sai số Test/Validation thì cực cao!
  - *Nguyên nhân:* Mạng quá sâu, cây quá nhiều nhánh, dữ liệu train quá ít.
  - *Khắc phục:* Thu thập thêm dữ liệu, giảm bớt số chiều/số tham số, áp dụng Regularization ($L_1, L_2$), cắt tỉa cây (Pruning), Dropout.

---

## 10. Quy trình 6 bước chuẩn của một dự án Machine Learning
📍 **[Slide Trang 62 – 68]**
1. **Xác định bối cảnh sử dụng:** Hệ thống hỗ trợ ai, giải quyết bài toán kinh doanh nào, mức sai số nào chấp nhận được?
2. **Định nghĩa bài toán học máy:** Xác định rõ đầu vào $X$ là gì, đầu ra $y$ là gì, thuộc dạng bài toán nào (phân loại, hồi quy, phân cụm)?
3. **Thu thập và hiểu dữ liệu:** Kiểm tra độ tin cậy của nguồn, khám phá phân bố, kiểm tra tính đại diện và các nhóm bị thiếu.
4. **Chuẩn bị dữ liệu (Tiền xử lý):** Làm sạch lỗi/nhiễu, điền dữ liệu thiếu, mã hóa danh mục, chuẩn hóa thang đo, chia train/val/test.
5. **Huấn luyện và tinh chỉnh:** Train mô hình trên training set, đánh giá và chỉnh siêu tham số trên validation set.
6. **Triển khai và theo dõi (Deployment & Monitoring):** Tích hợp mô hình vào phần mềm thực tế, giám sát chất lượng và theo dõi hiện tượng suy giảm hiệu năng theo thời gian.

---

## 🎯 CÁC CÂU HỎI TRẮC NGHIỆM ĐIỂN HÌNH CHƯƠNG 1 (TỰ ĐÁNH GIÁ)

1. **Câu hỏi:** Trong định nghĩa của Tom Mitchell, nếu bài toán là "Dự đoán giá nhà dựa trên lịch sử giao dịch", thì Kinh nghiệm $E$ là gì?
   - *Trả lời:* Tập dữ liệu lịch sử các giao dịch nhà đất đã có giá bán thực tế.
2. **Câu hỏi:** Siêu tham số (Hyperparameter) khác Tham số (Parameter) ở điểm mấu chốt nào?
   - *Trả lời:* Tham số do mô hình tự học từ dữ liệu train; Siêu tham số do con người thiết lập trước khi huấn luyện.
3. **Câu hỏi:** Tập dữ liệu nào được sử dụng để điều chỉnh siêu tham số (hyperparameter tuning)?
   - *Trả lời:* Validation set (Tập thẩm định).
4. **Câu hỏi:** Mô hình có độ chính xác trên tập Train đạt 99.5% nhưng trên tập Test chỉ đạt 60%. Hiện tượng này là gì?
   - *Trả lời:* Overfitting (Quá khớp).
5. **Câu hỏi:** Bài toán phân loại và bài toán hồi quy khác nhau cơ bản ở điểm nào?
   - *Trả lời:* Phân loại có biến mục tiêu rời rạc (nhãn lớp), hồi quy có biến mục tiêu là số thực liên tục.
