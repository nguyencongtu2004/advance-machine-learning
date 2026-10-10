# 📝 SỔ TAY CÔNG THỨC & 30+ BẪY TRẮC NGHIỆM KINH ĐIỂN
## BÍ KÍP PHÒNG THI MÔN HỌC MÁY TIÊN TIẾN VÀ ỨNG DỤNG (UIT)

---

## PHẦN 1: TỔNG HỢP CÔNG THỨC BẤM MÁY TÍNH NHANH ($\le 60$ GIÂY)

### 1. Tính Entropy của tập dữ liệu
* **Công thức:** $H(S) = - \sum_{k=1}^C p_k \log_2(p_k)$.
* **Mẹo Casio:** Dùng phím $\log_{\Box}(\Box)$ nhập cơ số 2. Nhớ quy ước $0 \log_2(0) = 0$.
* *Ví dụ:* Tập $S$ gồm $8$ mẫu Dương và $4$ mẫu Âm (Tổng $= 12$ mẫu):
  $$p_+ = \frac{8}{12} = \frac{2}{3}, \quad p_- = \frac{4}{12} = \frac{1}{3}$$
  $$H(S) = - \left[ \frac{2}{3}\log_2\left(\frac{2}{3}\right) + \frac{1}{3}\log_2\left(\frac{1}{3}\right) \right] \approx 0.918$$

### 2. Tính Information Gain khi phân nhánh cây ID3
* $IG(S, A) = H(S) - H(S|A) = H(S) - \left[ \frac{|S_1|}{|S|}H(S_1) + \frac{|S_2|}{|S|}H(S_2) \right]$.
* Chọn thuộc tính có **$IG$ lớn nhất**.

### 3. Tính Gini Impurity của tập dữ liệu (Cây CART)
* **Công thức:** $Gini(S) = 1 - \sum_{k=1}^C p_k^2$.
* *Ví dụ:* Tập $S$ gồm $8$ Dương và $4$ Âm:
  $$Gini(S) = 1 - \left[ \left(\frac{2}{3}\right)^2 + \left(\frac{1}{3}\right)^2 \right] = 1 - \left(\frac{4}{9} + \frac{1}{9}\right) = 1 - \frac{5}{9} = \frac{4}{9} \approx 0.444$$
* **Gini sau chia nhị phân:** $Gini_{split} = \frac{|S_{trái}|}{|S|} Gini(trái) + \frac{|S_{phải}|}{|S|} Gini(phải)$.

### 4. Tính Confusion Matrix & Đánh giá Phân loại
| | Dự đoán Dương (Predicted +) | Dự đoán Âm (Predicted -) |
| :--- | :---: | :---: |
| **Thực tế Dương (Actual +)** | $TP$ | $FN$ |
| **Thực tế Âm (Actual -)** | $FP$ | $TN$ |

* $Accuracy = \frac{TP + TN}{TP + TN + FP + FN}$
* $Precision = \frac{TP}{TP + FP}$
* $Recall = \frac{TP}{TP + FN}$
* $F_1 = 2 \cdot \frac{Precision \cdot Recall}{Precision + Recall} = \frac{2TP}{2TP + FP + FN}$

### 5. Tính số lượng tham số trong mạng MLP (Weights + Biases)
* Giữa 2 tầng kề nhau (tầng trước $d$ nơ-ron, tầng sau $h$ nơ-ron):
  $$\text{Số tham số} = h \times d + h = h(d + 1)$$
* *Ví dụ:* Mạng có Input $10$ $\to$ Tầng ẩn $20$ $\to$ Output $3$:
  - Tầng 1: $20 \times (10 + 1) = 220$.
  - Tầng 2: $3 \times (20 + 1) = 63$.
  - Tổng cộng: $220 + 63 = 283$ tham số.

### 6. Chuẩn hóa Min-Max và Z-score
* **Min-Max về $[0, 1]$:** $x' = \frac{x - x_{\min}}{x_{\max} - x_{\min}}$.
* **Z-score:** $z = \frac{x - \mu}{\sigma}$.

### 7. Nghiệm chuẩn OLS và Ridge
* **OLS:** $w^* = (X^TX)^{-1} X^Ty$ *(Yêu cầu $X^TX$ khả nghịch)*.
* **Ridge:** $w^* = (X^TX + \lambda I)^{-1} X^Ty$ *(Luôn khả nghịch với $\lambda > 0$)*.

### 8. Hệ số Silhouette trong phân cụm
* $s(i) = \frac{b(i) - a(i)}{\max(a(i), b(i))} \in [-1, 1]$.
* $a(i)$: khoảng cách trung bình nội cụm; $b(i)$: khoảng cách trung bình đến cụm lân cận gần nhất.
* $s(i) < 0 \implies$ điểm bị gán nhầm cụm!

---

## PHẦN 2: 6 BẢNG ĐỐI CHIẾU MA TRẬN "SỐNG CÒN"

### Bảng 1: OLS vs Ridge vs Lasso vs Elastic Net
| Đặc tính | OLS | Ridge ($L_2$) | Lasso ($L_1$) | Elastic Net |
| :--- | :--- | :--- | :--- | :--- |
| **Penalty** | Không | $\lambda \|w\|_2^2$ | $\lambda \|w\|_1$ | $\lambda_1 \|w\|_1 + \lambda_2 \|w\|_2^2$ |
| **Nghiệm đóng** | Có | Có: $(X^TX + \lambda I)^{-1}X^Ty$ | **Không có** | Không có |
| **Ép hệ số về 0** | Không | Co về gần 0, không bằng 0 | **Có (Triệt tiêu về 0)** | Có |
| **Chọn đặc trưng**| Không | Không | **Có (Nghiệm thưa)** | Có |
| **Đa cộng tuyến** | Rất bất ổn | Ổn định tuyệt đối | Chọn 1 biến tùy ý | Ổn định nhóm biến |

### Bảng 2: Bagging vs Boosting
| Tiêu chí | Bagging (Random Forest) | Boosting (AdaBoost, Gradient Boosting) |
| :--- | :--- | :--- |
| **Huấn luyện** | **Song song (Parallel)**, độc lập | **Tuần tự (Sequential)**, sửa sai |
| **Tác dụng chính** | **Giảm Variance** (trị quá khớp) | **Giảm Bias** (tăng độ chính xác) |
| **Mô hình cơ sở** | Cây sâu (High Variance) | Cây rất nông (High Bias) |
| **Mẫu OOB** | Có ($36.8\%$) | Không có |
| **Độ nhạy nhiễu** | Ít nhạy | Rất nhạy cảm với nhiễu |

### Bảng 3: K-Means vs GMM vs DBSCAN
| Tiêu chí | K-Means | GMM | DBSCAN |
| :--- | :--- | :--- | :--- |
| **Dạng phân cụm** | Cứng (Hard) | **Mềm (Soft)** | Cứng (Hard) |
| **Cần biết trước $K$?**| **Có** | **Có** | **KHÔNG CẦN** |
| **Hình dạng cụm** | Chỉ cụm hình cầu / lồi | Cụm hình elip xoay hướng | **Hình dạng bất kỳ phi tuyến** |
| **Khử nhiễu** | Không (gán ép điểm) | Không | **Tự động nhận diện và khử nhiễu** |

### Bảng 4: Sigmoid vs Tanh vs ReLU
| Tiêu chí | Sigmoid | Tanh | ReLU |
| :--- | :--- | :--- | :--- |
| **Miền giá trị** | $(0, 1)$ | $(-1, 1)$ | $[0, +\infty)$ |
| **Zero-centered?** | **Không** | **Có (Đối xứng qua 0)** | Không |
| **Vanishing Gradient?**| Rất nặng khi $\|z\|$ lớn | Rất nặng khi $\|z\|$ lớn | **Không bị ở miền $z > 0$** |
| **Bệnh lý riêng** | Bão hòa 2 đầu | Bão hòa 2 đầu | Dying ReLU (chết nơ-ron khi $z < 0$) |

### Bảng 5: Batch GD vs SGD vs Mini-batch GD
| Tiêu chí | Batch GD | Stochastic GD (SGD) | Mini-batch GD |
| :--- | :--- | :--- | :--- |
| **Mẫu mỗi bước** | Toàn bộ $N$ mẫu | Đúng 1 mẫu | $B$ mẫu ($32 \le B \le 256$) |
| **Đường đi** | Rất mượt mà | Rất dích dắc hỗn loạn | Cân bằng, có dao động nhẹ |
| **Tốc độ / RAM** | Rất chậm trên dữ liệu lớn | Cực nhanh | Nhanh, tối ưu GPU (Chuẩn mực) |

### Bảng 6: ID3 vs CART
| Tiêu chí | ID3 | CART |
| :--- | :--- | :--- |
| **Tiêu chuẩn chia** | **Information Gain (Entropy)** | **Gini Impurity** / MSE |
| **Kiểu chia nhánh** | Có thể chia nhiều nhánh | **Luôn luôn chia nhị phân (Binary)** |
| **Hỗ trợ bài toán** | Chỉ Phân loại | Cả Phân loại và Hồi quy |

---

## PHẦN 3: TUYỂN TẬP 30+ "BẪY TRẮC NGHIỆM" GIẢNG VIÊN HAY GÀI

1. **Bẫy tên gọi Logistic Regression:** Dù có chữ *Regression*, đây là mô hình giải bài toán **Phân loại (Classification)**!
2. **Bẫy nghiệm đóng OLS:** OLS chỉ có nghiệm đóng duy nhất khi $X^TX$ khả nghịch ($n \ge p$, không có đa cộng tuyến hoàn hảo). Khi $p > n$, OLS vô nghiệm duy nhất.
3. **Bẫy nghiệm thưa:** Chỉ có **Lasso ($L_1$)** mới tạo nghiệm thưa (ép hệ số về đúng 0) và tự động chọn đặc trưng. Ridge ($L_2$) **không bao giờ** đưa hệ số về đúng 0.
4. **Bẫy nghiệm đóng Lasso:** Lasso **không có nghiệm đóng giải tích** do chuẩn $L_1$ có điểm góc nhọn không khả vi tại 0.
5. **Bẫy chuẩn hóa dữ liệu với Cây quyết định:** Cây quyết định (Decision Tree, Random Forest) **KHÔNG CẦN chuẩn hóa thang đo dữ liệu**. Việc nhân đặc trưng với $10^6$ không ảnh hưởng cấu trúc cây.
6. **Bẫy Accuracy:** Khi dữ liệu bị mất cân bằng lớp (99% âm, 1% dương), Accuracy = 99% là vô nghĩa. Phải dùng Recall, Precision hoặc F1-score.
7. **Bẫy Data Leakage:** Chuẩn hóa toàn bộ dataset trước khi chia train/test là sai nghiêm trọng (rò rỉ dữ liệu). Phải chia train/test trước, chỉ tính Mean/Std trên tập Train.
8. **Bẫy tỷ lệ OOB trong Bootstrap:** Khi $n$ đủ lớn, xác suất 1 mẫu rơi vào nhóm Out-of-Bag xấp xỉ bằng $\frac{1}{e} \approx 36.8\%$.
9. **Bẫy Bias - Variance trong Ensemble:**
   - Bagging: Mục tiêu chính là **giảm Variance** (chống quá khớp).
   - Boosting: Mục tiêu chính là **giảm Bias** (tăng độ chính xác từ mô hình yếu).
10. **Bẫy Soft Voting vs Hard Voting:** Soft Voting (lấy trung bình cộng xác suất) thường hiệu quả hơn Hard Voting vì tận dụng được độ tin cậy của mô hình.
11. **Bẫy hàm kích hoạt tuyến tính:** Nếu mạng MLP nhiều tầng dùng toàn hàm kích hoạt tuyến tính $f(z) = z$, mạng sẽ sụp đổ tương đương với **1 tầng tuyến tính đơn lẻ**.
12. **Bẫy khởi tạo trọng số $W = 0$:** Tuyệt đối không khởi tạo tất cả $W = 0$ vì gây ra hiện tượng đối xứng (Symmetry), các nơ-ron học y hệt nhau.
13. **Bẫy Perceptron và XOR:** Perceptron đơn tầng chỉ phân loại được dữ liệu phân tách tuyến tính, **thất bại hoàn toàn với bài toán XOR**.
14. **Bẫy hình dạng cụm của K-Means:** K-Means chỉ tìm được các cụm hình cầu / lồi. Muốn phân cụm hình trăng khuyết lồng nhau, bắt buộc phải dùng **DBSCAN**.
15. **Bẫy số cụm trong DBSCAN:** DBSCAN **không cần người dùng chỉ định trước số cụm $K$**.
16. **Bẫy Core point trong DBSCAN:** Core point yêu cầu trong bán kính $Eps$ có ít nhất $MinPts$ điểm **(tính cả chính nó)**.
17. **Bẫy Silhouette âm:** Điểm có $s(i) < 0$ đồng nghĩa với việc điểm đó **đã bị gán nhầm cụm**.
18. **Bẫy ổn định số học Softmax:** Trừ $z_{\max}$ khỏi mọi logit giúp tránh tràn số (Overflow) mà không làm đổi giá trị xác suất.
19. **Bẫy chọn Metric theo chi phí sai lầm:**
   - Bệnh hiểm nghèo, gian lận $\to$ Ưu tiên **Recall** (sợ bỏ sót $FN$).
   - Lọc thư rác đưa vào Inbox $\to$ Ưu tiên **Precision** (sợ báo nhầm $FP$).
20. **Bẫy Median:** Khi thuộc tính có nhiều điểm ngoại lai cực đoan (Outliers), bắt buộc phải điền giá trị thiếu bằng **Median (Trung vị)** chứ không dùng Mean.
21. **Bẫy PCA là học có giám sát hay không:** PCA là phương pháp **Học không giám sát (Unsupervised)**, không dùng nhãn $y$.
22. **Bẫy tâm hóa trong PCA:** Bắt buộc phải **tâm hóa dữ liệu (trừ vector trung bình)** trước khi tính ma trận hiệp phương sai.
23. **Bẫy GMM:** GMM là phương pháp **Phân cụm mềm (Soft Clustering)**.
24. **Bẫy thuật toán EM:** E-step tính xác suất hậu nghiệm (Responsibility), M-step cập nhật lại tham số phân phối.
25. **Bẫy Vanishing Gradient của Sigmoid:** Vì đạo hàm cực đại của Sigmoid chỉ là $0.25$ (tại $z=0$). Nhân chuỗi qua nhiều tầng làm gradient tắt ngấm.
26. **Bẫy Zero-centered của Tanh:** Tanh có miền $(-1, 1)$ nên đối xứng qua gốc tọa độ 0, giúp gradient không bị dao động lệch dấu như Sigmoid.
27. **Bẫy Dying ReLU:** Xảy ra khi nơ-ron luôn nhận $z < 0$, đạo hàm bằng 0 khiến trọng số không bao giờ được cập nhật lại.
28. **Bẫy AdaBoost cập nhật mẫu:** Sau mỗi vòng, mẫu bị đoán **SAI** sẽ bị **TĂNG TRỌNG SỐ**.
29. **Bẫy Gradient Boosting học cái gì:** Mỗi cây mới học khớp vào **Pseudo-residuals (Âm gradient của hàm mất mát)**, không học trực tiếp nhãn $y$.
30. **Bẫy EVR:** Tổng tỷ lệ phương sai giải thích của toàn bộ các thành phần chính luôn bằng **1 (100%)**.

---

## PHẦN 4: CHIẾN THUẬT PHÒNG THI 3 VÒNG (THE 3-PASS STRATEGY)

* **Vòng 1 (20 phút đầu - Ăn chắc 40 - 50 câu dễ):**
  - Đọc câu hỏi, nếu chắc chắn 100% $\to$ tô đáp án ngay.
  - Bỏ qua ngay lập tức mọi câu tính toán hoặc câu phân vân dài dòng.
  - Đánh dấu `*` cho câu tính toán, đánh dấu `?` cho câu phân vân.
* **Vòng 2 (35 - 40 phút tiếp theo - Giải quyết câu tính toán & suy luận):**
  - Làm các câu đánh dấu `*` bằng máy tính Casio (Entropy, Gini, Confusion matrix, số tham số MLP...).
  - Đọc kỹ câu so sánh lý thuyết và áp dụng 6 Bảng đối chiếu ma trận.
* **Vòng 3 (15 - 20 phút cuối - Xử lý câu khó & Soát phiếu):**
  - Dùng phương pháp loại suy cho các câu đánh dấu `?`.
  - Cảnh giác cao độ với các đáp án chứa từ tuyệt đối: *"luôn luôn"*, *"tất cả"*, *"chỉ duy nhất"*.
  - **Quy tắc bất biến:** Tuyệt đối không bao giờ để trống bất kỳ ô nào trên phiếu trả lời!
