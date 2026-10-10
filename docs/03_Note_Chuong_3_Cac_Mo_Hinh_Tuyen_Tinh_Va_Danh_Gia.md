# 📕 BẢN NOTE CHI TIẾT CHƯƠNG 3: CÁC MÔ HÌNH TUYẾN TÍNH & ĐÁNH GIÁ MÔ HÌNH
> **Tài liệu gốc:** [Chuong-3-Cac-mo-hinh-hoc-may-co-ban.pdf](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/Chuong-3-Cac-mo-hinh-hoc-may-co-ban.pdf) (114 trang)  
> **Tầm quan trọng:** Chương dài nhất và chiếm tỷ trọng câu hỏi thi trắc nghiệm lớn nhất (ước tính 25–30 câu trong đề thi).

---

## 1. Hồi quy tuyến tính (Linear Regression) & Thuật toán OLS
📍 **[Slide Trang 11 – 28]**

### 1.1 Phương trình dự đoán & Dạng ma trận
* **Dạng phương trình:**
  $$\hat{y} = w_0 + w_1 x_1 + w_2 x_2 + \dots + w_p x_p$$
  - $w_0$: Hệ số chặn (Bias / Intercept) — giá trị dự đoán khi mọi đặc trưng $x_j = 0$.
  - $w_j$: Trọng số của đặc trưng thứ $j$ — cho biết khi đặc trưng $x_j$ tăng 1 đơn vị (và các biến khác giữ nguyên) thì dự đoán $\hat{y}$ thay đổi bao nhiêu đơn vị.
* **Biểu diễn ma trận:** $\hat{y} = Xw$
  - Với $n$ quan sát và $p$ đặc trưng: Ma trận $X \in \mathbb{R}^{n \times (p+1)}$, vector trọng số $w \in \mathbb{R}^{p+1}$, vector nhãn thật $y \in \mathbb{R}^n$.
  - ⚠️ **Lưu ý:** Cột đầu tiên của ma trận $X$ luôn là **cột toàn số 1** để nhân với hệ số chặn $w_0$.

### 1.2 Hàm mất mát OLS (Ordinary Least Squares - Bình phương tối thiểu)
* **Phần dư (Residual):** $e_i = y_i - \hat{y}_i$ (độ lệch giữa giá trị thật và giá trị dự đoán).
* **Vì sao phải bình phương phần dư?**
  - Nếu cộng trực tiếp các phần dư, sai số âm và dương sẽ triệt tiêu lẫn nhau.
  - Bình phương bảo đảm mọi sai số đều dương, và **phạt rất mạnh các sai số có độ lệch lớn**.
* **Hàm mục tiêu OLS:** Tối thiểu hóa tổng bình phương phần dư (SSE / RSS):
  $$J(w) = \|y - Xw\|_2^2 = (y - Xw)^T (y - Xw) = y^Ty - 2w^TX^Ty + w^TX^TXw$$

### 1.3 Nghiệm đóng của OLS (Normal Equation) - ⚠️ TRỌNG TÂM THI!
* Lấy đạo hàm gradient theo $w$ và cho bằng $0$:
  $$\nabla_w J(w) = -2X^Ty + 2X^TXw = 0 \iff X^TXw = X^Ty \quad \text{(Hệ phương trình chuẩn)}$$
* Nếu ma trận $X^TX$ khả nghịch, ta có **Nghiệm đóng giải tích (Closed-form solution):**
  $$w^* = (X^TX)^{-1} X^Ty$$

### 1.4 Điều kiện để nghiệm đóng OLS tồn tại (RẤT HAY BỊ GÀI BẪY)
* Ma trận $X^TX$ phải **khả nghịch (Invertible / Non-singular)**.
* Điều kiện toán học để khả nghịch:
  1. Các cột của ma trận $X$ phải **độc lập tuyến tính** (không có biến nào là tổ hợp tuyến tính của các biến khác, không có đa cộng tuyến hoàn hảo).
  2. Số lượng mẫu quan sát phải lớn hơn hoặc bằng số đặc trưng ($n \ge p$).
  3. ⚠️ **Nếu số đặc trưng nhiều hơn số mẫu ($p > n$):** Ma trận $X^TX$ chắc chắn không khả nghịch $\to$ **OLS không thể tìm được nghiệm đóng duy nhất**!

### 1.5 Diễn giải hình học của OLS
📍 **[Slide Trang 26 – 28]**
* Không gian tạo bởi các cột của $X$ được gọi là **Không gian cột $Col(X)$**.
* Vector nhãn thật $y$ nằm ngoài không gian $Col(X)$. Mọi dự đoán hợp lệ $\hat{y} = Xw$ bắt buộc phải nằm trong $Col(X)$.
* OLS tìm điểm trong $Col(X)$ gần $y$ nhất $\implies$ Vector dự đoán $\hat{y}^* = Xw^*$ chính là **Hình chiếu trực giao (Orthogonal Projection)** của $y$ lên $Col(X)$.
* Vector phần dư $e = y - \hat{y}$ **vuông góc trực giao** với mọi cột đặc trưng của $X$:
  $$X^T (y - Xw^*) = 0$$

---

## 2. Góc nhìn Thống kê: Fisher & Maximum Likelihood (MLE)
📍 **[Slide Trang 29 – 39]**
* **Mô hình có sai số ngẫu nhiên:** $y = Xw + \epsilon$.
* **Giả định cổ điển về sai số $\epsilon$:**
  1. Sai số có kỳ vọng bằng $0$: $\mathbb{E}[\epsilon] = 0$.
  2. Sai số tuân theo phân phối chuẩn Gaussian: $\epsilon_i \sim \mathcal{N}(0, \sigma^2)$.
  3. Các quan sát độc lập với nhau (i.i.d).
* **Fisher & Ý tưởng MLE (Ước lượng hợp lý cực đại):**
  - Giữ cố định dữ liệu đã quan sát, tìm tham số $w$ sao cho xác suất dữ liệu đó xảy ra là lớn nhất.
  - Sử dụng **Log-Likelihood $\ln L(w)$** để biến tích các xác suất thành tổng các số hạng $\to$ dễ tính đạo hàm và không bị tràn số dưới (underflow).
* ⚠️ **KẾT LUẬN QUAN TRỌNG (HAY THI):**
  - Khi giả định sai số tuân theo phân phối chuẩn Gaussian $\mathcal{N}(0, \sigma^2)$, việc **Tối đa hóa Log-Likelihood (MLE) hoàn toàn tương đương với việc Tối thiểu hóa tổng bình phương phần dư (OLS)**!
  - Cả hai cách tiếp cận (hình học OLS và xác suất MLE) dẫn đến cùng một nghiệm $w^* = (X^TX)^{-1}X^Ty$.

---

## 3. Đa cộng tuyến, Overfitting & Regularization
📍 **[Slide Trang 40 – 57]** - ⚠️ ĐỈNH CAO BẪY TRẮC NGHIỆM!

### 3.1 Hiện tượng Đa cộng tuyến (Multicollinearity)
* Xảy ra khi hai hoặc nhiều đặc trưng trong tập dữ liệu có tương quan tuyến tính rất mạnh với nhau (ví dụ: cột "Diện tích theo m²" và cột "Diện tích theo feet vuông").
* Hậu quả: Ma trận $X^TX$ gần như suy biến (định thức gần bằng 0) $\to$ Ma trận nghịch đảo $(X^TX)^{-1}$ trở nên cực kỳ bất ổn định $\to$ Chỉ một thay đổi tí xíu ở dữ liệu huấn luyện sẽ khiến các hệ số $w$ nhảy múa điên loạn (Variance cực cao).

### 3.2 Tư tưởng của Regularization (Điều chuẩn hóa)
* OLS chỉ biết cắm đầu tối thiểu hóa sai số huấn luyện mà không quan tâm độ lớn của các hệ số $w$ $\to$ Dễ bị Overfitting.
* **Regularization** bổ sung thêm một **hình phạt (Penalty)** vào hàm mất mát để trừng phạt các hệ số $w$ có độ lớn quá cồng kềnh:
  $$J_{reg}(w) = J_{data}(w) + \lambda \cdot \Omega(w)$$
  - $J_{data}(w)$: Mức độ khớp dữ liệu (SSE).
  - $\Omega(w)$: Độ phức tạp của tham số (chuẩn $L_1$ hoặc $L_2$).
  - $\lambda \ge 0$: Siêu tham số điều khiển cường độ phạt (chọn bằng Validation set).
    - $\lambda = 0 \implies$ Quay về OLS chuẩn.
    - $\lambda$ càng lớn $\implies$ Phạt càng mạnh, các hệ số $w$ càng bị co nhỏ về gần 0 (giảm variance, chấp nhận tăng nhẹ bias).
    - $\lambda$ quá lớn $\implies$ Tất cả các hệ số bị ép về 0, mô hình bị **Underfitting**.

---

### 3.3 Ridge vs Lasso vs Elastic Net (So sánh chi tiết tuyệt đối)

```
                    ┌──────────────────────────────────────────────┐
                    │               REGULARIZATION                 │
                    └──────────────────────┬───────────────────────┘
             ┌─────────────────────────────┴─────────────────────────────┐
             ▼                                                           ▼
     Ridge Regression (Chuẩn L2)                                 Lasso Regression (Chuẩn L1)
  - Penalty: λ Σ (w_j)^2                                      - Penalty: λ Σ |w_j|
  - Hàm mục tiêu: ||y - Xw||^2 + λ||w||_2^2                   - Hàm mục tiêu: ||y - Xw||^2 + λ||w||_1
  - Vùng ràng buộc: Hình cầu / Tròn (Mượt mà)                 - Vùng ràng buộc: Hình thoi có góc nhọn trên trục
  - Co các hệ số về GẦN 0, KHÔNG BẰNG 0                       - Ép các hệ số về ĐÚNG BẰNG 0!
  - KHÔNG thực hiện lựa chọn đặc trưng                        - TỰ ĐỘNG CHỌN ĐẶC TRƯNG (Tạo nghiệm thưa - Sparse)
  - CÓ NGHIỆM ĐÓNG: w* = (X^T X + λI)^(-1) X^T y              - KHÔNG CÓ NGHIỆM ĐÓNG GIẢI TÍCH (Do |w| không khả vi)
  - Giải quyết triệt để đa cộng tuyến vì X^T X + λI          - Khi có nhóm biến tương quan, Lasso sẽ chọn ngẫu
    LUÔN LUÔN KHẢ NGHỊCH!                                       nhiên 1 biến và triệt tiêu các biến còn lại.
```

* **Elastic Net:**
  - Kết hợp cả hai chuẩn: $J(w) = \|y - Xw\|_2^2 + \lambda_1 \|w\|_1 + \lambda_2 \|w\|_2^2$.
  - Khắc phục nhược điểm của Lasso: Khi có một nhóm đặc trưng tương quan mạnh với nhau, Elastic Net sẽ chọn cả nhóm thay vì chọn ngẫu nhiên 1 biến như Lasso.

---

## 4. Logistic Regression (Hồi quy Logistic cho Phân loại)
📍 **[Slide Trang 58 – 81]**

### 4.1 Vì sao Hồi quy tuyến tính không dùng được cho Phân loại?
* Đầu ra của hồi quy tuyến tính nằm trên toàn trục số $(-\infty, +\infty)$, trong khi xác suất bắt buộc phải nằm trong đoạn $[0, 1]$.
* Hồi quy tuyến tính cực kỳ nhạy cảm với các điểm ngoại lai nằm xa biên quyết định $\to$ làm dịch chuyển đường phân loại sai lệch.

### 4.2 Hàm Sigmoid, Tỷ số Odds và Logit
* **Hàm Sigmoid:** 
  $$\sigma(z) = \frac{1}{1 + e^{-z}} \in (0, 1)$$
  - Khi $z = 0 \implies \sigma(0) = 0.5$.
  - Khi $z \to +\infty \implies \sigma(z) \to 1$; Khi $z \to -\infty \implies \sigma(z) \to 0$.
  - Đạo hàm cực đẹp: $\sigma'(z) = \sigma(z)(1 - \sigma(z))$.
* **Điểm số tuyến tính (Linear score):** $z = w^Tx = w_0 + w_1 x_1 + \dots + w_p x_p$.
* **Xác suất dự đoán:** $p = P(y = 1 | x) = \sigma(w^Tx)$.
* **Tỷ số Odds:** $Odds = \frac{p}{1 - p}$ (tỷ số giữa xác suất biến cố xảy ra và không xảy ra).
* **Logit (Log-odds) - ⚠️ CÂU HỎI TRẮC NGHIỆM KINH ĐIỂN:**
  $$\ln\left(\frac{p}{1 - p}\right) = \ln\left(\frac{\sigma(z)}{1 - \sigma(z)}\right) = z = w^Tx$$
  👉 **Khẳng định trắc nghiệm chuẩn:** *Dù xác suất $p$ có quan hệ phi tuyến hình chữ S với đặc trưng, nhưng **Log-odds (Logit) lại thay đổi hoàn toàn TUYẾN TÍNH theo các đặc trưng $x$**!*

### 4.3 Hàm mất mát Binary Cross-Entropy (BCE Loss / Log Loss)
📍 **[Slide Trang 67 – 70]**
$$L(w) = - \frac{1}{n} \sum_{i=1}^n \left[ y_i \ln(p_i) + (1 - y_i) \ln(1 - p_i) \right]$$
* **Bản chất trừng phạt:**
  - Nếu nhãn thật $y = 1$: Loss $L = -\ln(p)$. Nếu mô hình đoán $p \to 1$, Loss $= 0$. Nhưng nếu đoán sai tự tin $p \to 0$, Loss $\to +\infty$!
  - Nếu nhãn thật $y = 0$: Loss $L = -\ln(1 - p)$. Nếu đoán sai $p \to 1$, Loss $\to +\infty$!
* ⚠️ **Vì sao không có nghiệm đóng?** Do sự xuất hiện của hàm phi tuyến Sigmoid trong phương trình đạo hàm bằng 0, ta không thể cô lập $w$ về một vế $\to$ **Buộc phải tối ưu xấp xỉ bằng thuật toán Gradient Descent**.

### 4.4 Phân loại đa lớp (Multi-class Classification)
📍 **[Slide Trang 79 – 81]**
* **One-vs-Rest (OvR):** Với bài toán $K$ lớp, ta huấn luyện $K$ mô hình nhị phân riêng biệt (lớp $k$ đối đầu với tất cả các lớp còn lại). Khi dự đoán, chọn lớp có điểm số cao nhất.
* **Softmax Regression (Multinomial Logistic Regression):**
  $$P(y = k | x) = \frac{e^{z_k}}{\sum_{j=1}^K e^{z_j}}$$
  - Chuyển đổi $K$ điểm số tuyến tính $z_1, \dots, z_K$ thành phân phối xác suất hợp lệ (tổng các xác suất $= 1$).

---

## 5. Thước đo đánh giá mô hình (Evaluation Metrics)
📍 **[Slide Trang 86 – 101]**

### 5.1 Các độ đo cho bài toán Hồi quy (Regression Metrics)
* **MAE (Mean Absolute Error):** $\frac{1}{n}\sum |y_i - \hat{y}_i|$. Cùng đơn vị với $y$, dễ diễn giải, **ít bị chi phối bởi ngoại lai**.
* **MSE (Mean Squared Error):** $\frac{1}{n}\sum (y_i - \hat{y}_i)^2$. Phạt rất nặng sai số lớn do bình phương. Nhược điểm: đơn vị đo bị bình phương lên (ví dụ: triệu đồng$^2$).
* **RMSE (Root MSE):** $\sqrt{MSE}$. Cùng đơn vị đo với $y$, vẫn giữ đặc tính phạt nặng sai số lớn.
* **$R^2$ (Hệ số xác định):** $R^2 = 1 - \frac{SS_{res}}{SS_{tot}} = 1 - \frac{\sum(y_i - \hat{y}_i)^2}{\sum(y_i - \bar{y})^2}$. Cho biết mô hình giải thích được bao nhiêu % độ biến thiên của $y$. $R^2 = 1$ là hoàn hảo; $R^2 = 0$ nghĩa là mô hình đoán ngang với việc lấy trung bình $\bar{y}$.
* **Adjusted $R^2$ (Hệ số $R^2$ hiệu chỉnh):**
  - Trong hồi quy tuyến tính, việc cứ nhét bừa thêm đặc trưng vào mô hình luôn làm $R^2$ tăng lên một cách giả tạo.
  - Adjusted $R^2$ áp dụng hình phạt theo số lượng đặc trưng $p$. Nếu thêm một biến vô dụng, Adjusted $R^2$ sẽ bị giảm xuống!

### 5.2 Các độ đo cho bài toán Phân loại (Classification Metrics)

#### Ma trận nhầm lẫn (Confusion Matrix):
* $TP$ (True Positive): Mẫu thực tế Dương $\to$ Mô hình đoán Dương (Đúng).
* $FP$ (False Positive): Mẫu thực tế Âm $\to$ Mô hình đoán Dương (**Báo động nhầm / Sai lầm loại I**).
* $FN$ (False Negative): Mẫu thực tế Dương $\to$ Mô hình đoán Âm (**Bỏ sót / Sai lầm loại II**).
* $TN$ (True Negative): Mẫu thực tế Âm $\to$ Mô hình đoán Âm (Đúng).

#### Bốn thước đo cốt lõi:
1. **Accuracy (Độ chính xác tổng thể):**
   $$Accuracy = \frac{TP + TN}{TP + TN + FP + FN}$$
   - ⚠️ **CẠM BẪY MẤT CÂN BẰNG LỚP (IMBALANCED DATA):** Nếu tập dữ liệu có $99\%$ mẫu âm và $1\%$ mẫu dương, mô hình ngớ ngẩn luôn đoán tất cả là Âm vẫn đạt Accuracy $= 99\%$, nhưng mô hình hoàn toàn vô dụng!
2. **Precision (Độ chuẩn xác):**
   $$Precision = \frac{TP}{TP + FP}$$
   - Trả lời câu hỏi: *"Trong tất cả các mẫu mô hình BÁO DƯƠNG, có bao nhiêu mẫu THỰC SỰ DƯƠNG?"*
   - **Ưu tiên tối đa hóa Precision khi chi phí của $FP$ rất đắt:** Ví dụ: Bộ lọc spam (không được đưa thư công việc quan trọng của sếp vào mục Spam).
3. **Recall (Độ nhạy / Sensitivity):**
   $$Recall = \frac{TP}{TP + FN}$$
   - Trả lời câu hỏi: *"Trong tất cả các mẫu THỰC TẾ LÀ DƯƠNG, mô hình TÌM RA ĐƯỢC bao nhiêu mẫu?"*
   - **Ưu tiên tối đa hóa Recall khi chi phí của $FN$ cực kỳ nguy hiểm:** Ví dụ: Chẩn đoán ung thư, phát hiện tội phạm/gian lận tài chính (thà bắt nhầm người vô tội đi xét nghiệm lại còn hơn bỏ sót một bệnh nhân ung thư!).
4. **$F_1$-Score:** Trung bình điều hòa giữa Precision và Recall:
   $$F_1 = 2 \cdot \frac{Precision \cdot Recall}{Precision + Recall} = \frac{2TP}{2TP + FP + FN}$$
   - Dùng khi cần cân bằng cả Precision và Recall, đặc biệt khi dữ liệu mất cân bằng.

#### Macro-Average vs Micro-Average trong Phân loại đa lớp:
📍 **[Slide Trang 100]**
* **Macro-average:** Tính riêng Precision/Recall cho từng lớp, rồi lấy **trung bình cộng giản đơn** giữa các lớp. Mọi lớp đều có trọng số ngang nhau $\to$ Rất tốt để đánh giá xem mô hình có làm tốt trên lớp thiểu số hay không.
* **Micro-average:** Cộng dồn tất cả $TP, FP, FN$ trên toàn bộ các lớp rồi mới tính công thức $\to$ Bị chi phối mạnh bởi lớp chiếm đa số mẫu.

---

## 6. Giao thức chia dữ liệu & Bẫy Data Leakage
📍 **[Slide Trang 102 – 111]**
* **Stratified Split (Chia phân tầng):** Đảm bảo tỷ lệ các lớp trong tập con (train, val, test) giống hệt tỷ lệ trong tập dữ liệu gốc. **Bắt buộc phải dùng khi dữ liệu phân loại bị mất cân bằng**.
* **K-Fold Cross-Validation:** Chia dữ liệu thành $K$ phần (folds). Lặp $K$ lần, mỗi lần dùng $K-1$ phần để huấn luyện và $1$ phần để thẩm định $\to$ Giúp đánh giá ổn định, giảm thiểu phụ thuộc vào cách chia ngẫu nhiên.
* **Leave-One-Out (LOO):** Là $K$-Fold với $K = n$ (mỗi lần test đúng 1 mẫu). Tốn kém tính toán nhất.
* **⚠️ HIỆN TƯỢNG DATA LEAKAGE (RÒ RỈ DỮ LIỆU) - BẪY THI KINH ĐIỂN:**
  - Là hiện tượng thông tin từ tập Validation/Test bị rò rỉ vào quá trình huấn luyện, làm mô hình đạt điểm số cao giả tạo trên giấy tờ nhưng sụp đổ khi đem ra thực tế.
  - *Ví dụ bẫy trắc nghiệm:* "Thực hiện tính Mean và Std trên toàn bộ dữ liệu $\to$ Chuẩn hóa toàn bộ $\to$ Chia Train và Test $\to$ Huấn luyện mô hình". **Quy trình này BỊ LỖI DATA LEAKAGE!**
  - *Quy trình đúng:* Chia Train/Test trước $\to$ Chỉ tính Mean và Std trên tập Train $\to$ Dùng Mean/Std đó để transform cho cả tập Train và tập Test.

---

## 🎯 CÁC CÂU HỎI TRẮC NGHIỆM ĐIỂN HÌNH CHƯƠNG 3

1. **Câu hỏi:** Điều kiện để phương trình nghiệm đóng OLS $w^* = (X^TX)^{-1}X^Ty$ tồn tại là gì?
   - *Trả lời:* Ma trận $X^TX$ phải khả nghịch (các cột độc lập tuyến tính, $n \ge p$).
2. **Câu hỏi:** Giữa Ridge và Lasso, thuật toán nào có khả năng tự động loại bỏ biến (Feature selection)? Vì sao?
   - *Trả lời:* Lasso ($L_1$), vì miền ràng buộc $L_1$ có dạng hình thoi với các đỉnh nhọn nằm trên trục tọa độ, ép nhiều hệ số về đúng bằng 0.
3. **Câu hỏi:** Trong bài toán chẩn đoán ung thư, ta nên ưu tiên chỉ số Precision hay Recall?
   - *Trả lời:* Recall (Độ nhạy), vì không thể chấp nhận bỏ sót ca bệnh dương tính ($FN$).
4. **Câu hỏi:** Đại lượng nào trong Logistic Regression có quan hệ tuyến tính với các đặc trưng $x$?
   - *Trả lời:* Log-odds (Logit): $\ln\left(\frac{p}{1-p}\right) = w^Tx$.
5. **Câu hỏi:** Tại sao ma trận trong nghiệm đóng của Ridge $(X^TX + \lambda I)$ luôn khả nghịch khi $\lambda > 0$?
   - *Trả lời:* Vì việc cộng thêm $\lambda I$ làm tăng các phần tử trên đường chéo chính, làm ma trận xác định dương và triệt tiêu tính suy biến.
