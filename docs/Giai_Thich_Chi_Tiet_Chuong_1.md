# 🧠 TỔNG HỢP CHI TIẾT TOÀN BỘ GIẢI THÍCH TRỰC QUAN BẢN CHẤT CHƯƠNG 1: TỔNG QUAN HỌC MÁY
> **Tài liệu gốc:** [01_Note_Chuong_1_Tong_Quan_Hoc_May.md](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/%C3%B4n%20t%E1%BA%ADp%2021-10/01_Note_Chuong_1_Tong_Quan_Hoc_May.md)  
> **Phương pháp học:** Tư duy trực quan, ví dụ đời thường, đối chiếu khái niệm và trọng tâm câu hỏi trắc nghiệm ăn trọn điểm số.

---

# MỤC LỤC CHI TIẾT
1. [Bức tranh tổng quan: AI vs Machine Learning vs Deep Learning](#1-bức-tranh-tổng-quan-ai-vs-machine-learning-vs-deep-learning)
   - 1.1 Chiếc "hộp lồng nhau" và Sự khác nhau sống còn với Lập trình truyền thống
   - 1.2 Bốn góc nhìn định nghĩa AI của các giáo sư đầu ngành
2. [Dòng thời gian lịch sử AI (Mẹo ghi nhớ các mốc hay thi)](#2-dòng-thời-gian-lịch-sử-ai-mẹo-ghi-nhớ-các-mốc-hay-thi)
3. [Vì sao cần Học máy? Khi nào nên và không nên dùng?](#3-vì-sao-cần-học-máy-khi-nào-nên-và-không-nên-dùng)
4. [Hai định nghĩa kinh điển về Machine Learning](#4-hai-định-nghĩa-kinh-điển-về-machine-learning)
   - 4.1 Định nghĩa của Arthur Samuel (1959)
   - 4.2 Định nghĩa của Tom Mitchell (1997) - Bộ ba (T, E, P) trọng tâm thi 100%!
5. [Bốn phương pháp học từ dữ liệu (Supervised, Unsupervised, Semi-supervised, RL)](#5-bốn-phương-pháp-học-từ-dữ-liệu)
   - 5.1 Học có giám sát (Supervised): Phân loại vs Hồi quy
   - 5.2 Học không giám sát (Unsupervised): Phân cụm vs Giảm chiều
   - 5.3 Học bán giám sát (Semi-supervised): Nghệ thuật tận dụng dữ liệu rẻ tiền
   - 5.4 Học tăng cường (Reinforcement Learning): Trò chơi thưởng phạt
6. [Bốn hình thức huấn luyện mô hình AI hiện đại](#6-bốn-hình-thức-huấn-luyện-mô-hình-ai-hiện-đại)
   - Train from Scratch vs Pre-training vs Fine-tuning vs Transfer Learning
7. [Thuật ngữ nền tảng: Parameter vs Hyperparameter vs Loss vs Metric](#7-thuật-ngữ-nền-tảng-parameter-vs-hyperparameter-vs-loss-vs-metric)
   - 7.1 Phân biệt Input, Feature, Label, Prediction, Ground Truth
   - 7.2 Loss Function vs Evaluation Metric (Bẫy đạo hàm khả vi)
   - 7.3 Tham số (Parameters) vs Siêu tham số (Hyperparameters) - Bẫy thi kinh điển!
8. [Ba tập dữ liệu độc lập: Train – Validation – Test](#8-ba-tập-dữ-liệu-độc-lập-train--validation--test)
9. [Khả năng tổng quát hóa, Căn bệnh Underfitting và Overfitting](#9-khả-năng-tổng-quát-hóa-căn-bệnh-underfitting-và-overfitting)
10. [Quy trình 6 bước chuẩn của một dự án Machine Learning](#10-quy-trình-6-bước-chuẩn-của-một-dự-án-machine-learning)
11. [Chốt lại các câu hỏi trắc nghiệm điển hình Chương 1](#11-chốt-lại-các-câu-hỏi-trắc-nghiệm-điển-hình-chương-1)

---

# 1. BỨC TRANH TỔNG QUAN: AI vs MACHINE LEARNING vs DEEP LEARNING

### 1.1 Chiếc "hộp lồng nhau" và Sự khác biệt với Lập trình truyền thống

Hãy tưởng tượng bạn có 3 chiếc hộp búp bê Nga lồng vào nhau:

```
┌────────────────────────────────────────────────────────┐
│  TRÍ TUỆ NHÂN TẠO (AI - Artificial Intelligence)       │
│  ┌──────────────────────────────────────────────────┐  │
│  │  HỌC MÁY (ML - Machine Learning)                 │  │
│  │  ┌────────────────────────────────────────────┐  │  │
│  │  │  HỌC SÂU (DL - Deep Learning)              │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

#### 1. Trí tuệ nhân tạo (AI): Chiếc hộp to nhất bên ngoài
* Là khái niệm rộng lớn bao trùm tất cả: Bất kỳ cỗ máy hoặc dòng code nào có hành vi **mô phỏng trí tuệ con người** (biết suy luận, giải quyết vấn đề, ra quyết định) đều được gọi là AI.
* 💡 **Ví dụ:** Một lập trình viên ngồi viết tay $100.000$ dòng lệnh `if-else` để dạy máy tính chơi cờ vua theo các nước cờ do con người nghĩ sẵn. 
  $\to$ Con bot này **là AI** (hệ thống dựa trên tri thức/chuyên gia), nhưng **KHÔNG PHẢI là Machine Learning**!

#### 2. Học máy (Machine Learning - ML): Cuộc cách mạng đảo ngược tư duy
Điểm khác biệt sống còn giữa Lập trình truyền thống và Học máy:

* **Lập trình truyền thống (Rule-based):**
  $$\text{Dữ liệu đầu vào} + \text{Luật chơi do con người viết tay (Code)} \implies \text{Kết quả đầu ra}$$
  * *Bế tắc:* Làm sao con người có thể ngồi gõ tay hàng triệu dòng `if-else` để phân biệt ảnh con mèo và con chó? (Tai hình tam giác? Nhưng có con tai cụp! Lông màu vàng? Nhưng có con mèo vàng!).
* **Học máy (Machine Learning):**
  $$\text{Dữ liệu đầu vào} + \text{Kết quả thực tế (Nhãn)} \implies \text{MÁY TỰ TÌM RA LUẬT (Model)!}$$
  * Ta chỉ việc ném $100.000$ bức ảnh kèm đáp án: *"Đây là chó, đây là mèo"*, máy tính sẽ tự động tinh chỉnh các con số bên trong để tự rút ra quy luật nhận diện!

#### 3. Học sâu (Deep Learning - DL): Chiếc hộp nhỏ nhất và mạnh mẽ nhất
* Là tập con của Machine Learning, sử dụng kiến trúc **Mạng nơ-ron nhân tạo nhiều tầng ẩn (Deep Neural Networks)** mô phỏng các tế bào nơ-ron trong não người.
* **Điểm đột phá:** Trong ML truyền thống, con người vẫn phải tự tay đo đạc và chọn ra các đặc trưng (diện tích, số phòng, độ dài tai). Còn trong Deep Learning, máy tính tự động "học" cách trích xuất từ các đặc trưng thô sơ (pixel, cạnh, góc) cho đến các đặc trưng trừu tượng cao cấp (mắt, mũi, khuôn mặt).

---

### 1.2 Bốn góc nhìn định nghĩa AI của các giáo sư đầu ngành

Đề thi trắc nghiệm rất hay hỏi 4 ô phân loại sau:

| | **Mục tiêu: GIỐNG CON NGƯỜI (Human)** | **Mục tiêu: ĐẠT LÝ TƯỞNG / CHUẨN MỰC (Rational)** |
| :--- | :--- | :--- |
| **SUY NGHĨ (Thinking)** | **1. Suy nghĩ như con người (Thinking Humanly):** <br> Mô phỏng quá trình tư duy, tâm lý và nhận thức của não bộ con người. | **2. Suy nghĩ hợp lý (Thinking Rationally):** <br> Dựa trên các quy luật logic toán học chuẩn mực (tam đoạn luận: Nếu $A \to B$ và $B \to C$ thì $A \to C$). |
| **HÀNH ĐỘNG (Acting)** | **3. Hành động như con người (Acting Humanly):** <br> Vượt qua **Phép thử Turing (Turing Test)** — máy tính trò chuyện sao cho con người không phân biệt được đang chat với máy hay người. | **4. Hành động hợp lý (Acting Rationally):** <br> Máy là một **Tác tử hợp lý (Rational Agent)**, luôn hành động để đạt được kết quả kỳ vọng tốt nhất dựa trên thông tin hiện có. |

---

# 2. DÒNG THỜI GIAN LỊCH SỬ AI (MẸO GHI NHỚ CÁC MỐC HAY THI)

Đề thi trắc nghiệm đóng thường có 1-2 câu hỏi ghép năm hoặc tên nhà khoa học. Bạn chỉ cần nhớ các cột mốc "đinh" sau:

* **1950 - Alan Turing:** Đề xuất khái niệm trí tuệ nhân tạo và bài kiểm tra huyền thoại **Phép thử Turing (Turing Test)**.
* **1951 - Minsky & Edmonds:** Chế tạo cỗ máy mạng nơ-ron nhân tạo đầu tiên mang tên **SNARC**.
* **1959 - Arthur Samuel:** Đưa ra định nghĩa kinh điển đầu tiên về Machine Learning (chương trình chơi cờ đam tự học).
* **1969 - Arthur Bryson & Yu-Chi Ho:** Mô tả thuật toán **Lan truyền ngược (Backpropagation)** — chìa khóa sống còn để huấn luyện mạng nơ-ron nhiều tầng sau này.
* **2006 - Fei-Fei Li (Lý Phi Phi):** Khởi động dự án cơ sở dữ liệu hình ảnh khổng lồ **ImageNet**, tạo ra "nhiên liệu dữ liệu" châm ngòi cho sự bùng nổ của Deep Learning.
* **2009 - Andrew Ng (Ngô Ân Đạt):** Đề xuất sử dụng **card đồ họa (GPU)** để tăng tốc huấn luyện mạng nơ-ron, rút ngắn thời gian huấn luyện từ vài tuần xuống vài giờ.
* **2018 - OpenAI:** Phát hành kiến trúc **GPT** (Generative Pre-trained Transformer), mở màn cho kỷ nguyên các mô hình ngôn ngữ lớn (LLM).

---

# 3. VÌ SAO CẦN HỌC MÁY? KHI NÀO NÊN DÙNG?

### ❌ Khi nào KHÔNG NÊN dùng Học máy?
* Khi bài toán đơn giản, đã có công thức toán học hoặc quy trình logic rõ ràng (ví dụ: tính hóa đơn tiền điện, tính lương theo bậc, sắp xếp danh sách tên theo thứ tự A-Z). Dùng code truyền thống sẽ nhanh, chính xác $100\%$ và không tốn kém tài nguyên.

### ✅ Khi nào BẮT BUỘC NÊN dùng Học máy?
1. **Bài toán quá phức tạp, không có công thức tường minh:** Nhận diện khuôn mặt, lái xe tự động, dịch tiếng Anh sang tiếng Việt.
2. **Quy luật biến động liên tục theo thời gian:** Phát hiện giao dịch gian lận thẻ tín dụng (kẻ trộm luôn đổi chiêu thức mới), dự báo giá cổ phiếu.
3. **Cần cá nhân hóa ở quy mô hàng triệu người:** Thuật toán đề xuất phim của Netflix, gợi ý video "Dành cho bạn" của TikTok. Không lập trình viên nào có thể ngồi viết tay luật cho từng tài khoản một!

---

# 4. HAI ĐỊNH NGHĨA KINH ĐIỂN VỀ MACHINE LEARNING

### 4.1 Định nghĩa của Arthur Samuel (1959)
> *"Học máy là ngành học mang lại cho máy tính khả năng học tập mà không cần được lập trình một cách tường minh cho từng trường hợp cụ thể."*

---

### 4.2 Định nghĩa của Tom Mitchell (1997) - ⚠️ TRỌNG TÂM THI 100%!

> *"Một chương trình máy tính được gọi là học từ kinh nghiệm **$E$** (Experience) đối với một tác vụ **$T$** (Task) và một thước đo hiệu năng **$P$** (Performance), nếu hiệu năng của nó ở tác vụ $T$, được đo lường bằng $P$, cải thiện dần theo kinh nghiệm $E$."*

#### 🧩 Công thức ghi nhớ: Bộ ba $(T, E, P)$

Hãy giải phẫu 2 ví dụ kinh điển để đi thi gặp câu hỏi trắc nghiệm bạn khoanh trúng ngay:

#### Ví dụ 1: Bộ lọc thư rác (Spam Filter)
* **Tác vụ $T$ (Task - Việc cần làm):** Phân loại từng email đưa vào xem nó là "Thư rác (Spam)" hay "Thư bình thường (Ham)".
* **Kinh nghiệm $E$ (Experience - Dữ liệu quá khứ để học):** Tập hợp hàng ngàn email cũ trong quá khứ đã được người dùng đánh dấu sẵn nhãn Spam hay Không spam.
* **Hiệu năng $P$ (Performance - Thước đo chấm điểm):** Tỷ lệ phần trăm phân loại đúng ($Accuracy$) hoặc tỷ lệ email quan trọng bị chặn nhầm.

#### Ví dụ 2: Xe tự lái (Self-driving Car)
* **Tác vụ $T$:** Lái xe an toàn trên đường phố (đạp ga, thắng, đánh lái).
* **Kinh nghiệm $E$:** Lịch sử hàng triệu giờ lái xe thu được từ camera, cảm biến lidar và các pha xử lý của tài xế con người.
* **Hiệu năng $P$:** Quãng đường trung bình xe chạy được mà không cần con người can thiệp, số vụ va chạm = 0.

---

# 5. BỐN PHƯƠNG PHÁP HỌC TỪ DỮ LIỆU

```
                          ┌────────────────────────────┐
                          │   BỐN PHƯƠNG PHÁP HỌC      │
                          └─────────────┬──────────────┘
         ┌──────────────────┬───────────┴───────────┬──────────────────┐
         ▼                  ▼                       ▼                  ▼
   HỌC CÓ GIÁM SÁT   HỌC KHÔNG GIÁM SÁT      HỌC BÁN GIÁM SÁT    HỌC TĂNG CƯỜNG
   (Supervised)      (Unsupervised)          (Semi-supervised)   (Reinforcement)
  Có cả câu hỏi X   Chỉ có câu hỏi X,       Chút ít có đáp án,  Không có đề sẵn,
   và đáp án y       HOÀN TOÀN KHÔNG         phần lớn chưa gán   tự làm rồi nhận
                     CÓ ĐÁP ÁN y             nhãn                thưởng/phạt
```

### 5.1 Học có giám sát (Supervised Learning)
* **Đặc điểm:** Dữ liệu có đầy đủ cả **Đặc trưng đầu vào $X$** và **Đáp án đúng $y$ (Ground truth)**. Mô hình giống như một học sinh làm bài tập có sẵn sách giải phía sau để so đáp án và sửa sai.
* Chia thành 2 bài toán con (CÂU HỎI HAY BỊ GÀI BẪY):
  1. **Bài toán Phân loại (Classification):** Biến mục tiêu $y$ là **rời rạc, định tính** (hữu hạn các nhóm).
     * *Ví dụ:* Đoán Đậu/Rớt ($0$ hoặc $1$); nhận diện Chó, Mèo, Gà; nhận diện chữ viết tay từ $0$ đến $9$.
  2. **Bài toán Hồi quy (Regression):** Biến mục tiêu $y$ là **số thực liên tục, định lượng**.
     * *Ví dụ:* Dự đoán giá nhà (tỷ đồng), nhiệt độ ngày mai, doanh số bán hàng, điểm thi môn học máy.

### 5.2 Học không giám sát (Unsupervised Learning)
* **Đặc điểm:** Dữ liệu **chỉ có $X$, hoàn toàn không có nhãn $y$ nào cả**. Máy tính phải tự bơi để tìm ra cấu trúc ẩn hoặc sự tương đồng tự nhiên giữa các dữ liệu.
* *Hai bài toán tiêu biểu:*
  1. **Phân cụm (Clustering):** Gom các khách hàng có hành vi mua sắm tương tự nhau vào cùng một nhóm để marketing (K-Means, DBSCAN).
  2. **Giảm chiều dữ liệu (Dimensionality Reduction):** Nén dữ liệu từ $100$ đặc trưng xuống còn $2$ đặc trưng để vẽ lên màn hình trực quan hóa mà vẫn giữ được thông tin quan trọng nhất (PCA).

### 5.3 Học bán giám sát (Semi-Supervised Learning)
* **Đặc điểm:** Kết hợp giữa một **lượng nhỏ dữ liệu có nhãn** và một **lượng khổng lồ dữ liệu chưa có nhãn**.
* 💡 **Ý nghĩa thực tế:** Đi cào hàng triệu bức ảnh y khoa từ internet về thì rất rẻ ($0$ đồng). Nhưng thuê giáo sư bác sĩ ngồi soi và gán nhãn xem từng bức ảnh có khối u hay không thì tốn hàng tỷ đồng! Phương pháp này giúp tận dụng kho ảnh thô khổng lồ để nâng cao độ chính xác của mô hình học từ số ít ảnh có nhãn.

### 5.4 Học tăng cường (Reinforcement Learning - RL)
* **Đặc điểm:** Không có dữ liệu mẫu tĩnh. Có một **Tác tử (Agent)** tự do hành động trong một **Môi trường (Environment)**.
* **Quy luật Thưởng/Phạt (Trial and Error):** 
  * Giống hệt như cách bạn **huấn luyện một chú cún con**:
    * Khi cún ngồi xuống theo lệnh $\implies$ Thưởng cho một mẩu xúc xích (+1 điểm Reward).
    * Khi cún cắn phá giày dép $\implies$ Bị la mắng (-1 điểm Penalty).
  * Mục tiêu của Agent: Tự mò mẫm học ra chiến lược hành động (Policy) sao cho **tổng điểm thưởng tích lũy theo thời gian là lớn nhất**!
  * *Ứng dụng:* AlphaGo đánh bại kiện tướng cờ vây thế giới, robot tự học cách giữ thăng bằng để đi lại, xe tự hành.

---

# 6. BỐN HÌNH THỨC HUẤN LUYỆN MÔ HÌNH AI HIỆN ĐẠI

1. **Train from Scratch (Huấn luyện từ đầu):** Khởi tạo mô hình với các con số trọng số ngẫu nhiên hoàn toàn. Dạy máy từ con số 0. Tốn kém hàng triệu USD tiền điện máy chủ và đòi hỏi tập dữ liệu khổng lồ.
2. **Pre-training (Huấn luyện sơ bộ):** Huấn luyện mô hình trên kho tri thức khổng lồ của nhân loại để nó nắm bắt được quy luật tổng quát (ví dụ: cho mô hình GPT đọc toàn bộ Wikipedia và sách báo internet để hiểu ngữ pháp, kiến thức phổ thông).
3. **Fine-tuning (Tinh chỉnh chuyên biệt):** Lấy mô hình đã pre-train ở trên, cho nó học thêm một tập dữ liệu nhỏ chuyên biệt của một ngành cụ thể (ví dụ: lấy GPT dạy thêm dữ liệu hồ sơ bệnh án để nó biến thành trợ lý bác sĩ chuyên khoa).
4. **Transfer Learning (Học chuyển giao):** Triết lý tổng quát: Tái sử dụng tri thức đã học từ bài toán này để áp dụng vào bài toán khác có liên quan, giúp mô hình học nhanh hơn và cần ít dữ liệu hơn rất nhiều.

---

# 7. THUẬT NGỮ NỀN TẢNG: PARAMETER vs HYPERPARAMETER vs LOSS vs METRIC

### 7.1 Input, Feature, Label, Prediction, Ground Truth
* **Sample / Instance (Quan sát / Mẫu):** Một dòng dữ liệu cụ thể (ví dụ: Căn nhà số 12 đường Nguyễn Huệ).
* **Feature (Đặc trưng $x$):** Các cột thuộc tính dùng để mô tả mẫu (diện tích, số tầng, khoảng cách tới trường học).
* **Label / Target ($y$ - Ground Truth):** Kết quả đúng thực tế cần đoán (giá bán thực tế của căn nhà = 5 tỷ).
* **Prediction ($\hat{y}$):** Kết quả do mô hình tính toán và phán đoán (ví dụ mô hình đoán 4 tỷ 800 triệu).

---

### 7.2 Loss Function vs Evaluation Metric (⚠️ Phân biệt sống còn)

| Tiêu chí | Loss Function (Hàm mất mát) | Evaluation Metric (Thước đo đánh giá) |
| :--- | :--- | :--- |
| **Đối tượng sử dụng** | **Dành riêng cho máy tính / Thuật toán tối ưu** (Gradient Descent). | **Dành cho kỹ sư và con người** đọc và hiểu hiệu quả kinh doanh. |
| **Yêu cầu toán học** | **BẮT BUỘC PHẢI KHẢ VI (Có đạo hàm trơn)** để cập nhật trọng số. | **Không cần khả vi**. |
| **Ví dụ tiêu biểu** | MSE, Binary Cross-Entropy (BCE Loss). | Accuracy, Precision, Recall, F1-Score, MAE. |

> 📌 **Tại sao không lấy Accuracy làm hàm mất mát để huấn luyện mô hình?**  
> Vì Accuracy là hàm bậc thang gián đoạn (đoán trúng thì 1, lệch tí xíu thành 0), đạo hàm của nó bằng 0 ở khắp nơi $\to$ Thuật toán Gradient Descent bị "liệt", không biết phải chỉnh trọng số theo hướng nào!

---

### 7.3 Tham số (Parameters) vs Siêu tham số (Hyperparameters) - ⚠️ ĐỈNH CAO BẪY THI!

Đây là câu hỏi trắc nghiệm xuất hiện $100\%$ trong mọi đề thi:

| Tiêu chí | Tham số mô hình (Parameters) | Siêu tham số (Hyperparameters) |
| :--- | :--- | :--- |
| **Định nghĩa** | Là các giá trị nội tại quyết định phép tính dự đoán của mô hình. | Là các nút điều khiển bên ngoài định hình cấu trúc và tốc độ học của thuật toán. |
| **Ai là người quyết định?** | **MÁY TỰ HỌC TỪ DỮ LIỆU** thông qua quá trình huấn luyện (Training). | **KỸ SƯ CON NGƯỜI CHỌN TRƯỚC** khi bấm nút bắt đầu huấn luyện. |
| **Ví dụ kinh điển** | • Trọng số $w$ và bias $b$ ($y = wx + b$).<br>• Trọng số liên kết nơ-ron trong Deep Learning. | • Tốc độ học (Learning rate $\eta$).<br>• Số lượng cụm $K$ trong K-Means.<br>• Độ sâu tối đa của cây (`max_depth`).<br>• Hệ số phạt $\lambda$ trong Ridge / Lasso. |
| **Dùng tập dữ liệu nào để tinh chỉnh?** | Học trực tiếp trên **Training Set**. | Thử nghiệm và lựa chọn trên **Validation Set**. |

---

# 8. BA TẬP DỮ LIỆU ĐỘC LẬP: TRAIN – VALIDATION – TEST

Hãy tưởng tượng quá trình một học sinh ôn thi đại học:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TOÀN BỘ TẬP DỮ LIỆU HIỆN CÓ                      │
├───────────────────────────────────┬──────────────────┬─────────────────┤
│        TRAIN SET (60% - 70%)      │ VALIDATION (15%) │   TEST (15-20%) │
│   (Sách giáo khoa & Bài tập về nhà)│  (Kỳ thi thử)    │ (Kỳ thi THPT QG)│
└───────────────────────────────────┴──────────────────┴─────────────────┘
```

1. **Training Set (Tập huấn luyện):** Là sách giáo khoa và bài tập hàng ngày. Mô hình dùng tập này để **học các tham số ($w, b$)**.
2. **Validation Set (Tập thẩm định):** Là các **kỳ thi thử ở trường**. Dùng để so sánh xem mô hình nào giỏi hơn (so sánh Cây quyết định vs Hồi quy), đồng thời dùng để **chỉnh siêu tham số** và quyết định điểm dừng sớm (Early Stopping) trước khi bị học vẹt.
3. **Test Set (Tập kiểm tra cuối cùng):** Là **đề thi đại học thật**. Bộ dữ liệu này phải được cất vào két sắt, **tuyệt đối không được cho mô hình nhìn thấy** trong suốt quá trình học và chỉnh thông số! Nó chỉ được đem ra chấm điểm đúng một lần cuối cùng để đánh giá năng lực thực tế của mô hình.

> ⚠️ **Data Leakage (Rò rỉ dữ liệu):** Nếu bạn để thông tin từ tập Validation hoặc Test lọt vào tập Train, giống như việc học sinh biết trước đề thi $\to$ Điểm thi thử thì $10$ nhưng ra đời thi thật sẽ bị điểm liệt!

---

# 9. KHẢ NĂNG TỔNG QUÁT HÓA, UNDERFITTING VÀ OVERFITTING

* **Khả năng tổng quát hóa (Generalization):** Là thước đo quan trọng nhất của Machine Learning: Khả năng mô hình phán đoán chính xác trên **những dữ liệu mới toanh ngoài đời** mà nó chưa từng gặp trong lúc huấn luyện.

```
       Underfitting (Thiếu khớp)              Vừa vặn (Good Fit)               Overfitting (Quá khớp)
       ┌────────────────────────┐         ┌────────────────────────┐         ┌────────────────────────┐
     y │      .    .  /         │       y │      .   .-.  .        │       y │    .---.      .   /    │
       │   .      .  /          │         │   .     /   \   .      │         │   /     \    / \ /     │
       │ .      .   /           │         │ .      /     '--.      │         │  /       '--'   '      │
       └────────────────────────► x       └────────────────────────► x       └────────────────────────► x
         Mô hình quá ngây thơ             Mượt mà, tổng quát tốt             Uốn éo học vẹt cả nhiễu
         (High Bias)                                                         (High Variance)
```

#### 1. Underfitting (Thiếu khớp - Mô hình "Ngây thơ"):
* **Hiện tượng:** Mô hình quá đơn giản, học không nổi quy luật. **Sai số cao trên cả tập Train lẫn tập Test**.
* **Nguyên nhân:** Dữ liệu phi tuyến tính phức tạp nhưng lại chọn đường thẳng tuyến tính, quá ít đặc trưng, ép mức phạt regularization $\lambda$ quá nặng.
* **Cách khắc phục:** Dùng mô hình phức tạp hơn, tạo thêm đặc trưng mới hữu ích, giảm bớt cường độ phạt regularization.

#### 2. Overfitting (Quá khớp - Mô hình "Học vẹt"):
* **Hiện tượng:** Mô hình quá phức tạp, học thuộc lòng từng dấu chấm dấu phẩy của tập Train (kể cả những điểm nhiễu và ngoại lai vô lý). **Sai số trên tập Train cực thấp ($\approx 0$), nhưng sai số trên tập Test thì cực cao!**
* **Nguyên nhân:** Mạng nơ-ron quá nhiều tầng, cây quyết định chia quá sâu, dữ liệu huấn luyện quá ít ỏi.
* **Cách khắc phục:** Thu thập thêm dữ liệu, áp dụng Regularization ($L_1, L_2$), cắt tỉa bớt nhánh cây (Pruning), Dropout trong Deep Learning, giảm bớt số lượng đặc trưng dư thừa.

---

# 10. QUY TRÌNH 6 BƯỚC CHUẨN CỦA MỘT DỰ ÁN MACHINE LEARNING

1. **Hiểu bài toán kinh doanh (Business Understanding):** Xác định mục tiêu: Dự đoán cái gì? Giúp doanh nghiệp tiết kiệm bao nhiêu tiền?
2. **Định nghĩa bài toán học máy:** Xác định dạng bài toán (Phân loại, Hồi quy hay Phân cụm?), xác định biến đầu vào $X$ và nhãn $y$.
3. **Thu thập và khám phá dữ liệu (EDA):** Kiểm tra dữ liệu xem có bị thiên lệch lấy mẫu không, vẽ biểu đồ phân phối.
4. **Chuẩn bị và tiền xử lý dữ liệu:** Làm sạch rác, điền dữ liệu thiếu, mã hóa danh mục, chuẩn hóa thang đo, chia tách Train/Val/Test.
5. **Huấn luyện và tinh chỉnh (Modeling):** Huấn luyện trên Train set, so sánh và chỉnh siêu tham số trên Validation set.
6. **Triển khai và giám sát (Deployment & Monitoring):** Đưa mô hình vào chạy thực tế trên web/app, liên tục theo dõi để phát hiện hiện tượng suy giảm hiệu năng theo thời gian.

---

# 11. CHỐT LẠI CÁC CÂU HỎI TRẮC NGHIỆM ĐIỂN HÌNH CHƯƠNG 1

1. **Câu hỏi:** Trong định nghĩa của Tom Mitchell, nếu bài toán là "Dự đoán giá nhà dựa trên lịch sử giao dịch", thì Kinh nghiệm $E$ là gì?
   * 👉 **Đáp án:** Tập dữ liệu các giao dịch nhà đất trong quá khứ đã có giá bán thực tế.
2. **Câu hỏi:** Sự khác nhau cơ bản nhất giữa Tham số (Parameter) và Siêu tham số (Hyperparameter) là gì?
   * 👉 **Đáp án:** Tham số do mô hình tự học từ tập Train; Siêu tham số do con người thiết lập trước khi huấn luyện và tinh chỉnh trên tập Validation.
3. **Câu hỏi:** Tập dữ liệu nào được sử dụng để điều chỉnh siêu tham số và so sánh các mô hình với nhau?
   * 👉 **Đáp án:** Validation Set (Tập thẩm định).
4. **Câu hỏi:** Mô hình có độ chính xác trên tập Train đạt 99.8% nhưng trên tập Test chỉ đạt 62%. Mô hình đang mắc phải căn bệnh gì?
   * 👉 **Đáp án:** Hiện tượng Overfitting (Quá khớp).
5. **Câu hỏi:** Bài toán dự đoán nhiệt độ ngày mai tại TP.HCM thuộc dạng bài toán nào?
   * 👉 **Đáp án:** Bài toán Hồi quy (Regression) trong Học có giám sát, vì nhiệt độ là giá trị số thực liên tục.
6. **Câu hỏi:** Thuật toán K-Means gom nhóm khách hàng thuộc phương pháp học nào?
   * 👉 **Đáp án:** Học không giám sát (Unsupervised Learning).
