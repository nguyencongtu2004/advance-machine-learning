# 📙 BẢN NOTE CHI TIẾT CHƯƠNG 4: CÂY QUYẾT ĐỊNH VÀ ENSEMBLE LEARNING
> **Tài liệu gốc:** [Chuong-4-Cay-quyet-dinh-va-Ensemble-Learning.pdf](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/Chuong-4-Cay-quyet-dinh-va-Ensemble-Learning.pdf) (116 trang)  
> **Chủ đề chính:** Cây quyết định (Decision Tree), Entropy, Gini, Bagging (Random Forest) và Boosting (AdaBoost, Gradient Boosting).

---

## 1. Decision Tree (Cây quyết định)
📍 **[Slide Trang 4 – 17, 27 – 31, 56 – 58]**

### 1.1 Cấu trúc của một Cây quyết định
* **Nút gốc (Root Node):** Nút trên cùng, chứa toàn bộ tập dữ liệu huấn luyện trước khi phân chia.
* **Nút trong (Internal Node):** Nút kiểm tra điều kiện trên một đặc trưng cụ thể (ví dụ: `Tuổi > 30?` hoặc `Thời tiết == Mưa?`).
* **Nhánh (Branch):** Đại diện cho một kết quả kiểm tra (Ví dụ: Đúng / Sai hoặc Nhánh Sunny / Overcast / Rain).
* **Nút lá (Leaf Node):** Nút kết thúc của đường đi.
  - Trong **Cây phân loại:** Nút lá lưu nhãn lớp dự đoán (lớp chiếm đa số) hoặc phân phối xác suất các lớp.
  - Trong **Cây hồi quy:** Nút lá lưu **giá trị trung bình cộng** $\bar{y}$ của tất cả các mẫu rơi vào lá đó.

### 1.2 Bản chất biểu diễn & Trực giác hình học
* **Tập luật Nếu - Thì (If - Then):** Mỗi đường đi từ nút gốc đến một nút lá tạo thành một luật logic kết hợp bằng phép AND (Ví dụ: `Nếu Thời tiết = Nắng VÀ Độ ẩm = Cao THÌ Không chơi`).
* **Phân hoạch không gian:** Cây chia không gian đặc trưng thành các siêu hộp chữ nhật **song song trực giao với các trục tọa độ**. Ranh giới quyết định luôn có dạng gấp khúc vuông góc theo từng trục, không phải là một đường thẳng chéo nghiêng mượt mà.

### 1.3 Ưu điểm vượt trội & Hạn chế
📍 **[Slide Trang 56 – 58]**
* **ƯU ĐIỂM SỐ 1 (RẤT HAY THI):** **KHÔNG ĐÒI HỎI CHUẨN HÓA DỮ LIỆU (No Scaling Needed)!**
  - Cây chỉ quan tâm đến thứ tự sắp xếp của giá trị để tìm ngưỡng cắt $x_j \le t$. Do đó, dù bạn nhân một đặc trưng với $1.000.000$ lần hay giữ nguyên thì cây vẫn tìm ra cùng một ngưỡng cắt!
  - Xử lý mượt mà cả biến số liên tục lẫn biến danh mục rời rạc.
* **HẠN CHẾ CHÍ MẠNG:**
  - Cây đơn lẻ có **Variance rất cao (Overfitting nghiêm trọng)** khi phát triển sâu.
  - **Bất ổn định (Instability):** Cấu trúc cây cực kỳ nhạy cảm với dữ liệu. Một thay đổi nhỏ ở tập huấn luyện có thể làm thay đổi hoàn toàn đặc trưng chọn ở nút gốc, kéo theo toàn bộ cây phía dưới bị đảo lộn!
  - 👉 Để khắc phục nhược điểm này, người ta phát minh ra **Ensemble Learning (Random Forest)**.

---

## 2. Các tiêu chí phân chia nhánh: Entropy, Information Gain & Gini
📍 **[Slide Trang 18 – 26, 42 – 45]** - ⚠️ BẮT BUỘC PHẢI THUỘC CÔNG THỨC!

Một phép chia tốt là phép chia làm cho các nút con trở nên **thuần khiết hơn (Pure hơn)**, tức là sự hỗn tạp giảm xuống mức tối thiểu.

### 2.1 Entropy (Đo độ hỗn tạp theo Shannon)
* **Công thức:**
  $$H(S) = - \sum_{k=1}^C p_k \log_2(p_k)$$
  *(Trong đó $p_k$ là tỷ lệ mẫu thuộc lớp $k$ trong nút $S$. Quy ước: $0 \log_2(0) = 0$)*.
* **Hai trạng thái đặc biệt cần nhớ để đánh trắc nghiệm:**
  - **Nút hoàn toàn thuần khiết (100% mẫu cùng 1 lớp):** $H(S) = 0$ (Không còn độ hỗn tạp nào).
  - **Nút hỗn tạp cực đại (2 lớp cân bằng 50% - 50%):** 
    $$H(S) = - (0.5 \log_2 0.5 + 0.5 \log_2 0.5) = 1.0$$
  - Đồ thị Entropy có hình quả chuông úp, đạt đỉnh cao nhất tại $p = 0.5$.

### 2.2 Information Gain (Độ lợi thông tin - Dùng trong thuật toán ID3)
* **Công thức:**
  $$IG(S, A) = H(S) - H(S|A) = H(S) - \sum_{v \in Values(A)} \frac{|S_v|}{|S|} H(S_v)$$
  - $H(S)$: Độ hỗn tạp của nút cha trước khi chia.
  - $H(S|A)$: Độ hỗn tạp trung bình có trọng số của các nút con sau khi chia theo thuộc tính $A$.
* **Quy tắc:** Thuộc tính nào mang lại **Information Gain LỚN NHẤT** (tức là làm giảm độ hỗn tạp nhiều nhất) sẽ được chọn để phân nhánh!

### 2.3 Gini Impurity (Độ vẩn đục Gini - Dùng trong thuật toán CART)
* **Công thức:**
  $$Gini(S) = 1 - \sum_{k=1}^C p_k^2$$
* **Ý nghĩa xác suất:** Xác suất phân loại sai một mẫu nếu ta gán nhãn ngẫu nhiên theo phân bố lớp trong nút.
* **Hai trạng thái đặc biệt:**
  - **Nút hoàn toàn thuần khiết:** $Gini(S) = 0$.
  - **Nút hỗn tạp cực đại (2 lớp cân bằng $p_1 = p_2 = 0.5$):**
    $$Gini(S) = 1 - (0.5^2 + 0.5^2) = 1 - (0.25 + 0.25) = 0.5$$
* **Gini sau khi chia nhị phân:**
  $$Gini_{split} = \frac{n_{trái}}{n} Gini(trái) + \frac{n_{phải}}{n} Gini(phải)$$
* Thuật toán CART sẽ chọn phép chia nào tạo ra **$Gini_{split}$ NHỎ NHẤT**.
* ⚠️ **So sánh ID3 vs CART (Hay thi):**
  - **ID3:** Dùng **Information Gain (Entropy)**, có thể chia ra **nhiều nhánh** theo danh mục, ban đầu chỉ hỗ trợ bài toán phân loại.
  - **CART:** Dùng **Gini Impurity** cho phân loại và phương sai cho hồi quy, **luôn luôn thực hiện chia nhị phân (Binary split - đúng 2 nhánh trái/phải)**. Tính toán nhanh hơn ID3 vì không cần bấm logarit.

---

## 3. Ví dụ bài toán Golf kinh điển trong Slide bài giảng
📍 **[Slide Trang 32 – 41]**

* Tập dữ liệu có $14$ mẫu thời tiết: $9$ mẫu $Play = Yes$ và $5$ mẫu $Play = No$.
* **Bước 1 - Tính Entropy nút gốc:**
  $$H(S) = - \left[ \frac{9}{14} \log_2\left(\frac{9}{14}\right) + \frac{5}{14} \log_2\left(\frac{5}{14}\right) \right] \approx 0.940$$
* **Bước 2 - Tính Information Gain cho 4 thuộc tính ứng viên:**
  - $IG(Outlook) = 0.25$
  - $IG(Humidity) = 0.16$
  - $IG(Wind) = 0.05$
  - $IG(Temperature) = 0.03$
* 👉 **Kết luận:** Thuộc tính **Outlook (Thời tiết)** có $IG$ lớn nhất ($0.25$) $\to$ Được chọn làm **Nút gốc (Root Node)**!
* **Bước 3 - Xét từng nhánh của Outlook:**
  - Nhánh `Outlook = Overcast` (4 mẫu toàn $Yes$) $\to$ Đã thuần khiết $100\%$, trở thành **Nút lá (Play = Yes)**.
  - Nhánh `Outlook = Sunny` (còn lẫn Yes và No) $\to$ Chia tiếp theo thuộc tính có Gain cao nhất là **Humidity** (`High` $\to$ No, `Normal` $\to$ Yes).
  - Nhánh `Outlook = Rain` (còn lẫn Yes và No) $\to$ Chia tiếp theo **Wind** (`Strong` $\to$ No, `Weak` $\to$ Yes).

---

## 4. Quá khớp ở Cây sâu & Kỹ thuật Cắt tỉa (Pruning)
📍 **[Slide Trang 47 – 55]**
* **Hiện tượng:** Nếu để cây phát triển tự do, cây sẽ chia nhánh cho tới khi mỗi chiếc lá chỉ chứa đúng 1 mẫu. Lúc này điểm Train $= 100\%$ nhưng điểm Test cực thấp (Overfitting).
* **Tiền cắt tỉa (Pre-pruning / Dừng sớm):** Chặn không cho cây mọc quá sâu:
  - Giới hạn độ sâu tối đa: `max_depth`.
  - Giới hạn số mẫu tối thiểu để được phép chia: `min_samples_split`.
  - Giới hạn số mẫu tối thiểu nằm trong nút lá: `min_samples_leaf`.
* **Hậu cắt tỉa (Post-pruning):** Cho cây phát triển tối đa, sau đó tỉa bớt các nhánh lá sâu nhất nếu việc cắt bỏ chúng không làm giảm độ chính xác trên tập Validation (Cost-Complexity Pruning). Cắt tỉa đóng vai trò tương tự như Regularization.

---

## 5. Ensemble Learning (Học kết hợp): Voting, Bagging & Boosting
📍 **[Slide Trang 61 – 114]** - ⚠️ PHẦN HAY THI NHẤT!

### 5.1 Triết lý & Ba điều kiện để Ensemble có hiệu quả
📍 **[Slide Trang 63 – 66]**
* Triết lý: Kết hợp nhiều mô hình cơ sở (Base models) để tạo ra mô hình có hiệu năng vượt trội so với từng mô hình đơn lẻ.
* **3 điều kiện bắt buộc để kết hợp có ích:**
  1. Mỗi mô hình cơ sở phải **tốt hơn đoán ngẫu nhiên** ($Accuracy > 50\%$).
  2. Các mô hình phải có tính **đa dạng (Diversity)** (mắc các lỗi khác nhau, không được đồng pha cùng mắc 1 sai lầm).
  3. Quy tắc kết hợp phải phù hợp.

### 5.2 Hard Voting vs Soft Voting
📍 **[Slide Trang 70 – 74]**
* **Hard Voting:** Biểu quyết theo số đông nhãn cứng (Mô hình 1 đoán A, Mô hình 2 đoán A, Mô hình 3 đoán B $\to$ Chọn A).
* **Soft Voting:** Lấy trung bình cộng xác suất dự đoán của từng lớp giữa các mô hình rồi chọn lớp có xác suất trung bình cao nhất.
* 👉 **So sánh:** Soft Voting thường vượt trội hơn Hard Voting vì nó tận dụng được **độ tự tin (Confidence)** của từng mô hình.

---

### 5.3 BAGGING (Bootstrap Aggregating) & RANDOM FOREST
📍 **[Slide Trang 75 – 95]**

```
                       TẬP DỮ LIỆU GỐC (N MẪU)
                    ┌─────────────┼─────────────┐
          Lấy mẫu   ▼   Bootstrap ▼   Bootstrap ▼
                  Mẫu 1         Mẫu 2         Mẫu 3 (Song song)
                    │             │             │
                    ▼             ▼             ▼
                 Cây 1         Cây 2         Cây 3 (Độc lập)
                    └─────────────┬─────────────┘
                                  ▼
                        TỔNG HỢP (AGGREGATING)
                  (Bỏ phiếu đa số hoặc Trung bình cộng)
                     ===> GIẢM VARIANCE (GIẢM OVERFITTING)!
```

#### A. Kỹ thuật Bootstrap Sampling
* Từ tập dữ liệu $n$ mẫu ban đầu, ta rút ngẫu nhiên $n$ lần **CÓ HOÀN LẠI (with replacement)** để tạo ra một tập dữ liệu mới cùng kích thước $n$.
* Do có hoàn lại, một mẫu có thể xuất hiện nhiều lần, và có những mẫu không bao giờ được chọn!

#### B. Mẫu Out-Of-Bag (OOB) - ⚠️ CỰC HAY THI!
* Xác suất 1 mẫu cụ thể **KHÔNG** được chọn trong 1 lần rút là $1 - \frac{1}{n}$.
* Xác suất mẫu đó không được chọn trong cả $n$ lần rút là:
  $$\left(1 - \frac{1}{n}\right)^n \xrightarrow{n \to \infty} \frac{1}{e} \approx 0.368 = 36.8\%$$
* 👉 **Khoảng $36.8\%$ mẫu dữ liệu không hề tham gia huấn luyện cây đó** (gọi là tập Out-Of-Bag).
* **Đánh giá OOB:** Ta dùng chính các mẫu OOB này để kiểm thử chất lượng của từng cây mà **không cần tốn thêm tập Validation riêng**!

#### C. Random Forest (Rừng ngẫu nhiên)
* Nâng cấp từ Bagging:
  1. Lấy mẫu dữ liệu có hoàn lại (Bootstrap).
  2. **Lấy mẫu đặc trưng ngẫu nhiên (Feature Subsampling) - Cốt lõi của Random Forest:** Tại mỗi nút phân nhánh của mỗi cây, ta **không xét tất cả $p$ đặc trưng**, mà chỉ chọn ngẫu nhiên một tập con gồm $m$ đặc trưng (thường lấy $m = \sqrt{p}$ cho phân loại).
  3. *Tại sao phải làm vậy?* Nếu luôn xét mọi đặc trưng, một đặc trưng quá mạnh sẽ luôn được chọn làm nút gốc ở mọi cây, khiến các cây trông na ná nhau (bị tương quan cao). Việc ngẫu nhiên hóa đặc trưng buộc các cây phải tìm các góc nhìn khác nhau $\to$ Rừng đa dạng $\to$ Hiệu quả giảm Variance đạt tối đa!
* **Extra Trees (Extremely Randomized Trees):** Ngẫu nhiên hóa cả các ngưỡng phân nhánh, huấn luyện cực nhanh.

---

### 5.4 BOOSTING (AdaBoost & Gradient Boosting)
📍 **[Slide Trang 96 – 113]**

#### A. Triết lý của Boosting
* Khác hoàn toàn với Bagging (huấn luyện song song độc lập), Boosting huấn luyện **TUẦN TỰ (Sequential)** theo chuỗi.
* Mô hình sau tập trung học những sai lầm mà mô hình trước mắc phải.
* Sử dụng các **Bộ học yếu (Weak Learners)**, thường là các cây rất nông (Cây 1 tầng / Decision Stumps).
* ⚠️ **Mục tiêu cốt lõi của Boosting:** **LÀM GIẢM BIAS** (biến chuỗi các mô hình yếu thành một mô hình cực mạnh).

#### B. AdaBoost (Adaptive Boosting)
📍 **[Slide Trang 100 – 106]**
* **Bước 1:** Ban đầu, gán trọng số đều cho mọi mẫu dữ liệu: $w_i = \frac{1}{m}$.
* **Bước 2:** Huấn luyện bộ học yếu trên phân bố trọng số hiện tại, tính tỷ lệ sai số có trọng số $r_j$.
* **Bước 3:** Tính trọng số đóng góp của mô hình vào quyết định chung:
  $$\alpha_j = \frac{1}{2} \ln\left(\frac{1 - r_j}{r_j}\right)$$
  *(Mô hình nào đoán đúng nhiều thì $\alpha_j$ càng lớn, có tiếng nói càng to trong hội đồng!)*
* **Bước 4 (Cốt lõi): Cập nhật trọng số của từng mẫu:**
  - Mẫu đoán **ĐÚNG** $\to$ Giữ nguyên hoặc giảm trọng số.
  - Mẫu đoán **SAI** $\to$ **BỊ TĂNG TRỌNG SỐ LÊN MẠNH MẼ**!
* **Bước 5:** Chuẩn hóa lại tổng trọng số bằng 1. Vòng lặp tiếp theo buộc mô hình mới phải tập trung vào các mẫu khó bị đoán sai ở vòng trước.

#### C. Gradient Boosting (GBM)
📍 **[Slide Trang 107 – 112]**
* Thay vì thay đổi trọng số của mẫu như AdaBoost, Gradient Boosting huấn luyện mỗi cây mới để **khớp vào phần dư / sai số (Pseudo-residuals)** của mô hình hiện tại:
  $$r_{ik} = - \left[ \frac{\partial L(y_i, F(x_i))}{\partial F(x_i)} \right]_{F = F_{k-1}}$$
  *(Pseudo-residual chính là hướng âm gradient của hàm mất mát, chỉ hướng làm sai số giảm nhanh nhất!)*
* **Mô hình cộng dồn:** $F_k(x) = F_{k-1}(x) + \eta \cdot h_k(x)$.
  - $h_k(x)$: Cây mới vừa học để sửa sai.
  - $\eta$: **Tốc độ học (Learning Rate / Shrinkage)**. $\eta$ nhỏ làm mỗi cây đóng góp một phần nhỏ $\to$ cần nhiều cây hơn nhưng tránh bị Overfitting.
* **XGBoost & LightGBM:** Là các thư viện tối ưu hóa đỉnh cao của Gradient Boosting (dùng xấp xỉ đạo hàm bậc 2 Taylor, tối ưu bộ nhớ cache và song song hóa).

---

## 6. Bảng so sánh "Sống còn": Bagging vs Boosting
📍 **[Slide Trang 114]**

| Tiêu chí | Bagging (Random Forest) | Boosting (AdaBoost, Gradient Boosting) |
| :--- | :--- | :--- |
| **Cơ chế huấn luyện** | **Song song (Parallel)**, các cây hoàn toàn độc lập | **Tuần tự (Sequential)**, cây sau phụ thuộc cây trước |
| **Mục tiêu chính** | **Giảm Variance** (trị bệnh quá khớp) | **Giảm Bias** (tăng độ chính xác từ mô hình yếu) |
| **Mô hình cơ sở** | Cây sâu, phức tạp (High Variance) | Cây rất nông, đơn giản (High Bias / Stumps) |
| **Cơ chế dữ liệu** | Bootstrap (lấy mẫu có hoàn lại, xác suất đều) | Tăng trọng số mẫu sai (AdaBoost) hoặc khớp phần dư (GBM) |
| **Mẫu Out-Of-Bag (OOB)**| Có tập OOB $\approx 36.8\%$ | Không có OOB |
| **Độ nhạy cảm với nhiễu**| Rất ổn định, ít bị ảnh hưởng bởi ngoại lai | **Rất nhạy cảm với nhiễu** (dễ bị ép khớp mẫu nhiễu do tăng trọng số) |

---

## 🎯 CÁC CÂU HỎI TRẮC NGHIỆM ĐIỂN HÌNH CHƯƠNG 4

1. **Câu hỏi:** Cây quyết định có đòi hỏi dữ liệu phải được chuẩn hóa (Normalization / Standardization) trước khi huấn luyện không?
   - *Trả lời:* Hoàn toàn KHÔNG, vì cây chỉ tìm ngưỡng thứ tự phân chia trên từng đặc trưng.
2. **Câu hỏi:** Trong kỹ thuật Bootstrap lấy mẫu kích thước $n$ từ $n$ phần tử, tỷ lệ phần trăm mẫu dữ liệu không được chọn (Out-of-Bag) xấp xỉ bằng bao nhiêu?
   - *Trả lời:* Xấp xỉ $36.8\%$ (hoặc $\frac{1}{e}$).
3. **Câu hỏi:** Random Forest bổ sung cơ chế ngẫu nhiên nào so với Bagging tiêu chuẩn?
   - *Trả lời:* Lấy mẫu ngẫu nhiên một tập con đặc trưng (thường là $\sqrt{p}$) tại mỗi nút phân nhánh.
4. **Câu hỏi:** Bagging và Boosting tập trung làm giảm thành phần nào trong đánh đổi Bias - Variance?
   - *Trả lời:* Bagging tập trung giảm Variance; Boosting tập trung giảm Bias.
5. **Câu hỏi:** Trong Gradient Boosting, mỗi cây mới được huấn luyện để dự đoán đại lượng nào?
   - *Trả lời:* Dự đoán Pseudo-residuals (Âm gradient của hàm mất mát / phần dư sai số của mô hình trước).
