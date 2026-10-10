# 📗 BẢN NOTE CHI TIẾT CHƯƠNG 2: TIỀN XỬ LÝ VÀ BIỂU DIỄN DỮ LIỆU
> **Tài liệu gốc:** [Chuong-2-Tien-xu-ly-va-bieu-dien-du-lieu.pdf](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/Chuong-2-Tien-xu-ly-va-bieu-dien-du-lieu.pdf) (69 trang)  
> **Châm ngôn ngành ML:** *"Garbage In, Garbage Out"* — Dữ liệu rác thì mô hình xịn đến mấy cũng cho ra kết quả rác!

---

## 1. Thu thập dữ liệu & Bốn chiều chất lượng dữ liệu
📍 **[Slide Trang 6 – 21]**

### 1.1 Quá trình thu thập & Sai lệch lấy mẫu (Sampling Bias)
* Không ai có thể thu thập 100% dữ liệu của toàn bộ thế giới $\to$ buộc phải **Lấy mẫu (Sampling)**.
* **Mẫu phải có tính đại diện (Representative):** Mẫu nhỏ phải phản ánh đúng các nhóm, tỷ lệ và bối cảnh của bài toán thực tế.
* **Sai lệch lấy mẫu (Sampling Bias):** Xảy ra khi một số nhóm quan sát bị thu thập quá nhiều trong khi nhóm khác bị bỏ sót.
  - *Ví dụ:* Muốn khảo sát thu nhập toàn dân nhưng chỉ đứng phỏng vấn ở trung tâm thương mại cao cấp Quận 1 $\to$ Dữ liệu bị thiên lệch nặng.
* **Các kênh thu thập phổ biến:**
  - *Crowdsourcing / Khảo sát:* Thu thập từ nhiều người đóng góp (dễ nhiễu, thiếu nhất quán).
  - *Logging:* Ghi lại lịch sử hành vi người dùng trên ứng dụng/web (phản ánh hành vi thực tế nhưng dữ liệu thô thường khổng lồ).
  - *Crawling & Scraping:* Thu thập tự động từ internet (cần lọc sạch mã HTML, quảng cáo).

### 1.2 Bốn chiều chất lượng dữ liệu cốt lõi
📍 **[Slide Trang 18 – 21]**
1. **Tính đầy đủ (Completeness):** Mỗi mẫu phải có đủ các trường thông tin cần thiết. Giá trị bị thiếu (Missing) làm mất tín hiệu dự đoán.
2. **Tính đồng nhất (Consistency):** Cùng sử dụng một quy ước biểu diễn (đơn vị đo thống nhất: mét hoặc centimet; định dạng ngày tháng: `YYYY-MM-DD`).
3. **Tính toàn vẹn (Integrity / Validity):** Giá trị ghi nhận phải phản ánh đúng logic thực tế (Tuổi $\ge 0$, Điểm thi từ 0 đến 10, các trường không được mâu thuẫn nhau).
4. **Tính kịp thời (Timeliness):** Dữ liệu phải phản ánh đúng giai đoạn cần dự đoán, tránh dùng dữ liệu quá cũ khi hành vi người dùng đã thay đổi.

---

## 2. Xử lý dữ liệu thiếu (Missing Data) & Dữ liệu nhiễu (Noise)
📍 **[Slide Trang 22 – 30]**

### 2.1 Chiến lược xử lý dữ liệu thiếu - ⚠️ TRỌNG TÂM THI!
Dữ liệu thiếu có 3 hướng giải quyết: Xóa dòng, Xóa cột hoặc Điền giá trị thay thế.

```
                   ┌─────────────────────────────────────────┐
                   │         XỬ LÝ DỮ LIỆU THIẾU             │
                   └────────────────────┬────────────────────┘
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
      XÓA DÒNG (Samples)         XÓA CỘT (Features)        ĐIỀN THAY THẾ (Imputation)
    - Chỉ dùng khi số dòng     - Dùng khi thuộc tính     - Biến phân loại: Điền MODE
      thiếu RẤT ÍT (< 3-5%)      bị thiếu ĐA SỐ            (hoặc nhãn riêng "Unknown")
    - Thiếu hoàn toàn            (> 60 - 70%)            - Biến số phân phối chuẩn:
      ngẫu nhiên               - Thuộc tính không quan     Điền MEAN (Trung bình)
    - Không làm mất tính đại     trọng đối với mục tiêu  - Biến số bị lệch / OUTLIERS:
      diện của mẫu               dự đoán                   Điền MEDIAN (Trung vị)!
```

* **⚠️ BẪY THI CỰC QUAN TRỌNG: KHI NÀO DÙNG MEDIAN THAY VÌ MEAN?**
  - **Mean (Trung bình cộng):** Rất nhạy cảm với các giá trị ngoại lai cực đoan (Outliers). Ví dụ: 5 người có lương $10, 12, 11, 13$ triệu và một sếp lớn $500$ triệu $\to$ Mean $= 109.2$ triệu (con số này hoàn toàn sai lệch thực tế của đa số người).
  - **Median (Trung vị - Số đứng giữa khi sắp xếp):** Lấy giá trị $12$ triệu $\to$ Đại diện cực kỳ chuẩn xác cho mức trung tâm của đám đông!
  - 👉 **Quy tắc trắc nghiệm:** *Khi dữ liệu bị lệch (skewed) hoặc có chứa Outliers, phương pháp điền thiếu tốt nhất là dùng **Median**.*

### 2.2 Nhiễu (Noise) vs Ngoại biên (Outliers)
📍 **[Slide Trang 28]**
* **Nhiễu (Noise):** Là những biến động ngẫu nhiên, sai số đo lường không phản ánh tín hiệu bản chất của bài toán $\to$ Cần tìm cách lọc bỏ.
* **Ngoại biên (Outliers):** Là quan sát có giá trị khác biệt rất lớn so với phần lớn các mẫu còn lại.
* ⚠️ **Lưu ý trắc nghiệm:** **Không phải ngoại biên nào cũng là lỗi cần xóa!**
  - Trong bài toán phát hiện gian lận thẻ tín dụng hoặc phát hiện tấn công mạng, chính những giao dịch "ngoại biên" bất thường lại là **đối tượng quan trọng nhất cần phát hiện**!

---

## 3. Biến đổi dữ liệu: Chuẩn hóa thang đo & Mã hóa danh mục
📍 **[Slide Trang 31 – 39]**

### 3.1 Vì sao bắt buộc phải biến đổi dữ liệu?
Mô hình học máy về bản chất là các hàm toán học (nhân ma trận, tính khoảng cách, tính đạo hàm). Do đó:
1. Dữ liệu dạng chữ/danh mục phải được chuyển thành dạng số.
2. Các đặc trưng có thang đo chênh lệch lớn (ví dụ: Tuổi từ $18 - 60$, Thu nhập từ $5.000.000 - 100.000.000$) nếu không chuẩn hóa thì đặc trưng Thu nhập sẽ lấn át hoàn toàn đặc trưng Tuổi chỉ vì giá trị số học của nó to hơn!

### 3.2 Normalization vs Standardization (So sánh chi tiết)
📍 **[Slide Trang 33 – 36]**

#### A. Min-Max Normalization (Chuẩn hóa Min-Max)
* **Công thức:**
  $$x' = \frac{x - x_{\min}}{x_{\max} - x_{\min}}$$
* **Ý nghĩa:** Co toàn bộ miền giá trị của thuộc tính về một khoảng cố định $[0, 1]$ (hoặc $[-1, 1]$). Giá trị nhỏ nhất $x_{\min}$ biến thành $0$, giá trị lớn nhất $x_{\max}$ biến thành $1$.
* **Ví dụ bấm máy tính:** Tuổi có $x_{\min} = 20, x_{\max} = 60$. Một người $30$ tuổi sẽ có giá trị chuẩn hóa là:
  $$x' = \frac{30 - 20}{60 - 20} = \frac{10}{40} = 0.25$$
* **Nhược điểm chí mạng:** Cực kỳ nhạy cảm với ngoại lai. Nếu xuất hiện một giá trị đột biến $x_{\max} = 1000$, thì tất cả các giá trị từ $20 - 60$ tuổi sẽ bị ép dồn hết về một nhúm sát số $0$.

#### B. Standardization (Z-score / Chuẩn hóa độ lệch chuẩn)
* **Công thức:**
  $$z = \frac{x - \mu}{\sigma}$$
  *(Trong đó $\mu$ là trung bình, $\sigma$ là độ lệch chuẩn của thuộc tính)*.
* **Ý nghĩa:** Đưa thuộc tính về phân phối có **Trung bình $\mu = 0$ và Phương sai $\sigma^2 = 1$**.
* **Ví dụ bấm máy tính:** Thuộc tính có $\mu = 50, \sigma = 10$. Mẫu $x = 70$ có giá trị $z$ là:
  $$z = \frac{70 - 50}{10} = 2.0$$
* **Ưu điểm vượt trội:** Không giới hạn cứng miền giá trị, **ít bị chi phối bởi các giá trị ngoại lai hơn Min-Max**. Rất phù hợp với các mô hình giả định phân phối Gaussian, các thuật toán dùng Gradient Descent hoặc PCA.

### 3.3 Mã hóa dữ liệu danh mục (Categorical Encoding)
📍 **[Slide Trang 37 – 38]**
* **Label Encoding (Mã hóa nhãn):** Gán mỗi nhãn chữ thành 1 số nguyên (ví dụ: `Hà Nội: 0, Đà Nẵng: 1, TP.HCM: 2`).
  - *Cạm bẫy:* Vô tình tạo ra quan hệ thứ tự giả định sai lầm ($2 > 1 > 0 \implies \text{TP.HCM} > \text{Đà Nẵng} > \text{Hà Nội}$). Mô hình tuyến tính hoặc nơ-ron sẽ bị đánh lừa bởi thứ tự này.
  - *Chỉ dùng khi:* Thuộc tính thực sự có thứ tự phân cấp (Trình độ: `Cấp 3: 0, Đại học: 1, Thạc sĩ: 2`).
* **One-Hot Encoding (Mã hóa một nóng):** Biến mỗi giá trị danh mục thành 1 cột nhị phân riêng biệt:
  - Nếu có 3 thành phố: `[Hà Nội, Đà Nẵng, TP.HCM]`:
    - Hà Nội $\to [1, 0, 0]$
    - Đà Nẵng $\to [0, 1, 0]$
    - TP.HCM $\to [0, 0, 1]$
  - *Ưu điểm:* Không áp đặt quan hệ thứ tự sai trái.
  - *Nhược điểm:* Làm bùng nổ số chiều dữ liệu nếu cột đó có hàng trăm giá trị khác nhau (Curse of Dimensionality).

---

## 4. Feature Engineering: Lựa chọn & Rút trích đặc trưng
📍 **[Slide Trang 40 – 48]**
* **Feature Engineering:** Là nghệ thuật biến đổi dữ liệu thô thành các biểu diễn đặc trưng hữu ích giúp mô hình học dễ dàng nhất.
* **Feature Selection (Lựa chọn đặc trưng):** Giữ lại một tập con các đặc trưng quan trọng nhất từ tập đặc trưng gốc, **vứt bỏ các đặc trưng dư thừa hoặc gây nhiễu** (không tạo ra đặc trưng mới).
* **Feature Extraction (Rút trích đặc trưng):** Kết hợp toán học các đặc trưng cũ để **tạo ra một không gian biểu diễn hoàn toàn mới** có số chiều thấp hơn nhưng cô đọng nhiều thông tin nhất (ví dụ kinh điển: PCA).

---

## 5. Lời nguyền số chiều (Curse of Dimensionality)
📍 **[Slide Trang 49 – 52]**
* Khi số chiều $p$ (số lượng cột đặc trưng) tăng lên quá cao:
  1. Thể tích không gian tăng theo hàm mũ $\to$ **Dữ liệu trở nên cực kỳ thưa thớt (Sparse)**.
  2. Khoảng cách Euclidean giữa các cặp điểm có xu hướng tiến về bằng nhau $\to$ Các thuật toán dựa trên khoảng cách (KNN, K-Means) mất hoàn toàn khả năng phân biệt điểm gần hay xa!
  3. Đòi hỏi số lượng mẫu dữ liệu huấn luyện phải tăng theo hàm mũ để lấp đầy không gian, nếu không mô hình sẽ bị **Overfitting nghiêm trọng**.
* 👉 **Giải pháp:** Áp dụng phương pháp chiếu giảm chiều dữ liệu (Projection), tiêu biểu nhất là **PCA**.

---

## 6. PCA (Principal Component Analysis - Phân tích thành phần chính)
📍 **[Slide Trang 53 – 67]** - ⚠️ ĐỈNH CAO TRỌNG TÂM THI CỦA CHƯƠNG 2!

### 6.1 Bản chất và Triết lý của PCA
* **PCA là phương pháp Học không giám sát (Unsupervised):** PCA hoàn toàn **không quan tâm đến nhãn $y$**.
* **Mục tiêu của PCA:** Tìm một hệ cơ sở trực giao mới (các trục tọa độ mới), sao cho khi chiếu dữ liệu lên các trục này:
  1. **Phương sai (Variance) của dữ liệu được bảo toàn tối đa** (hướng nào dữ liệu tản mát rộng nhất thì giữ nhiều thông tin nhất $\to$ chọn làm thành phần chính thứ 1).
  2. Các thành phần chính mới **hoàn toàn trực giao (vuông góc) và không tương quan với nhau** (Hiệp phương sai $= 0$).

```
             y ▲          .  .  * Thành phần chính 1 (PC1): Hướng có phương sai
               │        .  .      lớn nhất (chứa nhiều thông tin nhất)
               │      .  .
               │    .  .  *       * Thành phần chính 2 (PC2): Vuông góc với PC1,
               │  .  .              chứa phương sai lớn tiếp theo
               └────────────────► x
```

### 6.2 Toàn bộ quy trình 7 bước tính toán PCA (Nằm lòng từng bước!)
📍 **[Slide Trang 60 – 61, 64 – 66]**

1. **Bước 1 - Tính vector trung bình:** 
   $$\bar{x} = \frac{1}{n} \sum_{i=1}^n x_i$$
2. **Bước 2 - Tâm hóa dữ liệu (Data Centering) - ⚠️ BẮT BUỘC:**
   $$X_{centered} = X - \bar{x}$$
   *Ý nghĩa:* Trừ mỗi quan sát cho vector trung bình để đưa tâm của đám mây dữ liệu về đúng gốc tọa độ $(0, 0)$.
3. **Bước 3 - Tính ma trận hiệp phương sai (Covariance Matrix):**
   $$\Sigma = \frac{1}{n-1} X_{centered}^T X_{centered} \quad (\in \mathbb{R}^{p \times p})$$
   - Các phần tử trên đường chéo chính: Là phương sai của từng đặc trưng.
   - Các phần tử ngoài đường chéo: Thể hiện mức độ tương quan tuyến tính giữa các cặp đặc trưng.
4. **Bước 4 - Tìm các trị riêng (Eigenvalues $\lambda$) và vector riêng (Eigenvectors $v$):**
   Giải phương trình đặc trưng: $\det(\Sigma - \lambda I) = 0 \implies \Sigma v_i = \lambda_i v_i$.
   - **Eigenvector $v_i$:** Chỉ **hướng** của thành phần chính thứ $i$ (độ dài vector được chuẩn hóa $\|v_i\| = 1$).
   - **Eigenvalue $\lambda_i$:** Đo **độ lớn phương sai** của dữ liệu dọc theo hướng của thành phần chính đó.
5. **Bước 5 - Sắp xếp theo thứ tự giảm dần:**
   Xếp các eigenvalue: $\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_p \ge 0$, và sắp xếp các eigenvector tương ứng theo thứ tự này.
6. **Bước 6 - Chọn $K$ thành phần chính đầu tiên ($K < p$):**
   Lấy $K$ eigenvector ứng với $K$ eigenvalue lớn nhất ghép lại thành ma trận chiếu $W = [v_1, v_2, \dots, v_K] \in \mathbb{R}^{p \times K}$.
7. **Bước 7 - Chiếu dữ liệu sang không gian mới:**
   $$Z = X_{centered} W \quad (\in \mathbb{R}^{n \times K})$$

### 6.3 Tỷ lệ phương sai giải thích (Explained Variance Ratio - EVR)
📍 **[Slide Trang 67]**
* Tỷ lệ phương sai mà thành phần chính thứ $k$ giải thích được:
  $$EVR_k = \frac{\lambda_k}{\sum_{j=1}^p \lambda_j}$$
* **Ý nghĩa:** Cho biết thành phần thứ $k$ giữ lại bao nhiêu phần trăm thông tin của dữ liệu ban đầu.
* **Tổng tỷ lệ của tất cả các thành phần chính luôn bằng $1$ (hoặc $100\%$):**
  $$\sum_{k=1}^p EVR_k = 1$$
* **Cách chọn số chiều $K$ trong thực tế:** Người ta cộng dồn $EVR$ từ thành phần 1, 2, ... cho đến khi tổng tích lũy đạt ngưỡng mong muốn (thường là $\ge 90\%$ hoặc $\ge 95\%$).

---

## 🎯 CÁC CÂU HỎI TRẮC NGHIỆM ĐIỂN HÌNH CHƯƠNG 2

1. **Câu hỏi:** Trong một tập dữ liệu lương nhân viên có nhiều giá trị ngoại lai cực lớn, phương pháp điền dữ liệu thiếu nào là an toàn nhất?
   - *Trả lời:* Điền bằng Median (Trung vị), vì Median không bị kéo lệch bởi Outliers.
2. **Câu hỏi:** Tại sao Label Encoding có thể gây hại cho mô hình hồi quy tuyến tính nếu áp dụng lên thuộc tính danh mục không có thứ tự?
   - *Trả lời:* Vì nó vô tình tạo ra quan hệ thứ tự số học giả định giữa các danh mục.
3. **Câu hỏi:** PCA là phương pháp học có giám sát hay không giám sát? Mục tiêu chính là gì?
   - *Trả lời:* Học không giám sát (Unsupervised). Mục tiêu là giảm chiều dữ liệu và bảo toàn tối đa phương sai.
4. **Câu hỏi:** Bước bắt buộc phải làm trước khi tính ma trận hiệp phương sai trong PCA là gì?
   - *Trả lời:* Tâm hóa dữ liệu (Data Centering) bằng cách trừ mỗi mẫu cho vector trung bình.
5. **Câu hỏi:** Trong PCA, đại lượng nào quyết định tầm quan trọng (mức độ giữ lại thông tin) của một thành phần chính?
   - *Trả lời:* Trị riêng (Eigenvalue $\lambda$). Trị riêng càng lớn thì phương sai giải thích càng cao.
