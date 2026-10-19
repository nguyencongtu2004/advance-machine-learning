# 🧠 TỔNG HỢP CHI TIẾT TOÀN BỘ GIẢI THÍCH TRỰC QUAN BẢN CHẤT CHƯƠNG 3: CÁC MÔ HÌNH TUYẾN TÍNH & ĐÁNH GIÁ MÔ HÌNH
> **Tài liệu gốc:** [03_Note_Chuong_3_Cac_Mo_Hinh_Tuyen_Tinh_Va_Danh_Gia.md](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/%C3%B4n%20t%E1%BA%ADp%2021-10/03_Note_Chuong_3_Cac_Mo_Hinh_Tuyen_Tinh_Va_Danh_Gia.md)  
> **Phương châm:** Giữ nguyên 100% tất cả các lời giải thích chi tiết, ví dụ đời thường, hình vẽ trực quan, phân tích ký hiệu toán học và các câu hỏi trắc nghiệm từ đầu buổi học đến giờ.

---

# MỤC LỤC CHI TIẾT
1. [PHẦN 1: HỒI QUY TUYẾN TÍNH & THUẬT TOÁN OLS (MỤC 1.2 ĐẾN 1.5)](#phần-1-hồi-quy-tuyến-tính--thuật-toán-ols-mục-12-đến-15)
   - [1.1 Hàm mất mát OLS: Đo độ "dở" của mô hình bằng cách nào?](#11-hàm-mất-mát-ols-đo-độ-dở-của-mô-hình-bằng-cách-nào)
   - [1.2 Giải phẫu ký hiệu Bình phương Chuẩn L2: $\|e\|_2^2 = \|y - Xw\|_2^2$](#12-giải-phẫu-ký-hiệu-bình-phương-chuẩn-l2-e_22--y---xw_22)
   - [1.3 Nghiệm đóng của OLS: Đối chiếu 1-1 với đạo hàm bậc 2 cấp 3](#13-nghiệm-đóng-của-ols-đối-chiếu-1-1-với-đạo-hàm-bậc-2-cấp-3)
   - [1.4 Vì sao có chữ T (chuyển vị) ở $X^Ty$ và $X^TX$?](#14-vì-sao-có-chữ-t-chuyển-vị-ở-xty-và-xtx)
   - [1.5 Điều kiện để nghiệm đóng OLS tồn tại (Bẫy trắc nghiệm)](#15-điều-kiện-để-nghiệm-đóng-ols-tồn-tại-bẫy-trắc-nghiệm)
   - [1.6 Diễn giải hình học của OLS: Bản chất hình chiếu trực giao](#16-diễn-giải-hình-học-của-ols-bản-chất-hình-chiếu-trực-giao)
2. [PHẦN 2: GÓC NHÌN THỐNG KÊ & ƯỚC LƯỢNG HỢP LÝ CỰC ĐẠI (MLE CỦA FISHER)](#phần-2-góc-nhìn-thống-kê--ước-lượng-hợp-lý-cực-đại-mle-của-fisher)
   - [2.1 Thế giới luôn có "Nhiễu" & 3 giả định kinh điển về sai số](#21-thế-giới-luôn-có-nhiễu--3-giả-định-kinh-điển-về-sai-số)
   - [2.2 Tư tưởng MLE: Phân biệt Xác suất vs Độ hợp lý (Likelihood)](#22-tư-tưởng-mle-phân-biệt-xác-suất-vs-độ-hợp-lý-likelihood)
   - [2.3 Giải mã MLE bằng ví dụ Trò chơi bắn cung (Dễ hiểu nhất)](#23-giải-mã-mle-bằng-ví-dụ-trò-chơi-bắn-cung-dễ-hiểu-nhất)
   - [2.4 Log-Likelihood: Tại sao lại phải lấy $\ln$?](#24-log-likelihood-tại-sao-lại-phải-lấy-ln)
   - [2.5 Bước ngoặt ma thuật: Tại sao Cực đại MLE lại chính là Cực tiểu OLS?](#25-bước-ngoặt-ma-thuật-tại-sao-cực-đại-mle-lại-chính-là-cực-tiểu-ols)
   - [2.6 Chốt lại 3 câu hỏi trắc nghiệm kinh điển về MLE](#26-chốt-lại-3-câu-hỏi-trắc-nghiệm-kinh-điển-về-mle)
3. [PHẦN 3: ĐA CỘNG TUYẾN, OVERFITTING & REGULARIZATION](#phần-3-đa-cộng-tuyến-overfitting--regularization)
   - [3.1 Hiện tượng Đa cộng tuyến (Multicollinearity): Ví dụ 2 nhân viên sinh đôi](#31-hiện-tượng-đa-cộng-tuyến-multicollinearity-ví-dụ-2-nhân-viên-sinh-đôi)
   - [3.2 Tư tưởng của Regularization: "Phạt đứa nào to đầu!"](#32-tư-tưởng-của-regularization-phạt-đứa-nào-to-đầu)
   - [3.3 Trận chiến kinh điển: Ridge ($L_2$) vs Lasso ($L_1$)](#33-trận-chiến-kinh-điển-ridge-l_2-vs-lasso-l_1)
   - [3.4 Bổ sung: Elastic Net là gì?](#34-bổ-sung-elastic-net-là-gì)
   - [3.5 Chốt lại 4 câu hỏi trắc nghiệm chắc chắn gặp về Regularization](#35-chốt-lại-4-câu-hỏi-trắc-nghiệm-chắc-chắn-gặp-về-regularization)
4. [PHẦN 4: LOGISTIC REGRESSION (HỒI QUY LOGISTIC CHO PHÂN LOẠI)](#phần-4-logistic-regression-hồi-quy-logistic-cho-phân-loại)
   - [4.1 Vì sao Hồi quy tuyến tính không dùng được cho Phân loại?](#41-vì-sao-hồi-quy-tuyến-tính-không-dùng-được-cho-phân-loại)
   - [4.2 Hàm Sigmoid: "Máy nén thần kỳ" ép mọi số về $(0, 1)$](#42-hàm-sigmoid-máy-nén-thần-kỳ-ép-mọi-số-về-0-1)
   - [4.3 Ngoài lề chuyên sâu: Tại sao hàm Sigmoid lại dùng cơ số $e$?](#43-ngoài-lề-chuyên-sâu-tại-sao-hàm-sigmoid-lại-dùng-cơ-số-e)
   - [4.4 Tỷ số Odds và Logit: 3 bước tiến hóa từ ván cờ vua](#44-tỷ-số-odds-và-logit-3-bước-tiến-hóa-từ-ván-cờ-vua)
   - [4.5 Hàm mất mát Binary Cross-Entropy (BCE Loss / Log Loss)](#45-hàm-mất-mát-binary-cross-entropy-bce-loss--log-loss)
   - [4.6 Phân loại nhiều hơn 2 lớp (Multi-class Classification)](#46-phân-loại-nhiều-hơn-2-lớp-multi-class-classification)
   - [4.7 Chốt lại 4 câu hỏi trắc nghiệm chắc chắn gặp về Logistic Regression](#47-chốt-lại-4-câu-hỏi-trắc-nghiệm-chắc-chắn-gặp-về-logistic-regression)
5. [PHẦN 5: THƯỚC ĐO ĐÁNH GIÁ MÔ HÌNH (EVALUATION METRICS)](#phần-5-thước-đo-đánh-giá-mô-hình-evaluation-metrics)
   - [5.1 Các độ đo cho bài toán Hồi quy (Regression Metrics)](#51-các-độ-đo-cho-bài-toán-hồi-quy-regression-metrics)
   - [5.2 Bản chất hệ số xác định $R^2$: So tài với "Mô hình người lười"](#52-bản-chất-hệ-số-xác-định-r2-so-tài-với-mô-hình-người-lười)
   - [5.3 Cạm bẫy của $R^2$ & Cứu cánh Adjusted $R^2$](#53-cạm-bẫy-của-r2--cứu-cánh-adjusted-r2)
   - [5.4 Ma trận nhầm lẫn (Confusion Matrix): Phân định rạch ròi TP, FP, FN, TN](#54-ma-trận-nhầm-lẫn-confusion-matrix-phân-định-rạch-ròi-tp-fp-fn-tn)
   - [5.5 Cạm bẫy của Accuracy trên dữ liệu mất cân bằng](#55-cạm-bẫy-của-accuracy-trên-dữ-liệu-mất-cân-bằng)
   - [5.6 Trận chiến đánh đổi: Precision vs Recall (Khi nào ưu tiên ai?)](#56-trận-chiến-đánh-đổi-precision-vs-recall-khi-nào-ưu-tiên-ai)
   - [5.7 F1-Score: Vì sao phải dùng Trung bình điều hòa (Harmonic Mean)?](#57-f1-score-vì-sao-phải-dùng-trung-bình-điều-hòa-harmonic-mean)
   - [5.8 Macro-Average vs Micro-Average trong Phân loại đa lớp](#58-macro-average-vs-micro-average-trong-phân-loại-đa-lớp)
   - [5.9 Chốt lại 6 câu hỏi trắc nghiệm chắc chắn gặp về Thước đo đánh giá](#59-chốt-lại-6-câu-hỏi-trắc-nghiệm-chắc-chắn-gặp-về-thước-đo-đánh-giá)
6. [PHẦN 6: GIAO THỨC CHIA DỮ LIỆU & BẪY DATA LEAKAGE](#phần-6-giao-thức-chia-dữ-liệu--bẫy-data-leakage)
   - [6.1 Stratified Split (Chia phân tầng): Công bằng cho lớp thiểu số](#61-stratified-split-chia-phân-tầng-công-bằng-cho-lớp-thiểu-số)
   - [6.2 K-Fold Cross-Validation & Leave-One-Out (LOO)](#62-k-fold-cross-validation--leave-one-out-loo)
   - [6.3 Hiện tượng Data Leakage (Rò rỉ dữ liệu) - Bẫy thi kinh điển](#63-hiện-tượng-data-leakage-rò-rỉ-dữ-liệu---bẫy-thi-kinh-điển)
   - [6.4 Chốt lại 4 câu hỏi trắc nghiệm chắc chắn gặp về Chia dữ liệu](#64-chốt-lại-4-câu-hỏi-trắc-nghiệm-chắc-chắn-gặp-về-chia-dữ-liệu)

---

# PHẦN 1: HỒI QUY TUYẾN TÍNH & THUẬT TOÁN OLS (MỤC 1.2 ĐẾN 1.5)

Chúng ta sẽ đi qua từng mục theo mạch tư duy tự nhiên: **Ý tưởng $\to$ Đại số $\to$ Điều kiện tồn tại $\to$ Hình ảnh trực quan**.

---

### 1.1 Hàm mất mát OLS: Đo độ "dở" của mô hình bằng cách nào?

Giả sử bạn đi dự đoán giá nhà:
* Giá thực tế căn nhà thứ $i$ là $y_i$ (ví dụ: 5 tỷ).
* Mô hình của bạn đoán là $\hat{y}_i$ (ví dụ: 4 tỷ).
* **Phần dư (Residual):** $e_i = y_i - \hat{y}_i = 5 - 4 = 1$ tỷ (độ lệch giữa thực tế và dự đoán).

#### 🤔 Tại sao lại là "Bình phương tối thiểu" (Least Squares)?
Tại sao không lấy tổng các độ lệch $\sum e_i$ để tối thiểu hóa?
1. **Tránh triệt tiêu:** Nếu nhà thứ nhất bạn đoán thiếu 2 tỷ ($e_1 = +2$), nhà thứ hai bạn đoán thừa 2 tỷ ($e_2 = -2$), cộng lại bằng $0 \implies$ máy tính tưởng mô hình đoán hoàn hảo $100\%$!
2. **Phạt nặng sai số lớn:** Lệch 1 tỷ thì phạt $1^2 = 1$. Nhưng lệch 4 tỷ thì phạt $4^2 = 16$ (phạt gấp 16 lần). Điều này ép mô hình không được phép đoán quá lệch ở bất kỳ mẫu nào.
3. **Cực kỳ dễ tính toán:** Bình phương là hàm bậc hai trơn (parabol), đạo hàm rất đẹp.

#### 📐 Công thức dạng ma trận: $\|y - Xw\|_2^2$ nghĩa là gì?
* $y$ là vector chứa tất cả giá trị thật.
* $\hat{y} = Xw$ là vector chứa tất cả giá trị dự đoán.
* Vector sai số: $e = y - Xw$.
* Trong đại số tuyến tính, bình phương độ dài vector $e$ chính là:
  $$\|e\|_2^2 = e_1^2 + e_2^2 + \dots + e_n^2 = e^T e = (y - Xw)^T (y - Xw)$$
* Nhân phá ngoặc ma trận ra, bạn được:
  $$J(w) = y^Ty - 2w^TX^Ty + w^TX^TXw$$

---

### 1.2 Giải phẫu ký hiệu Bình phương Chuẩn L2: $\|e\|_2^2 = \|y - Xw\|_2^2$

Ký hiệu này đọc là **"Bình phương Chuẩn $L_2$"** (Squared $L_2$ Norm). Chúng ta bóc tách từng thành phần từ ngoài vào trong:

$$\| e \|_2^2$$

#### 1. Dấu hai gạch song song $\| \dots \|$ là gì?
* Với **một số thực** bình thường, để đo "độ lớn" (khoảng cách tới số 0) ta dùng dấu giá trị tuyệt đối: $|-5| = 5$.
* Nhưng với **một vector** (chứa một danh sách nhiều số), ta dùng dấu hai gạch $\| v \|$, trong toán gọi là **Chuẩn (Norm)** — tức là **thước đo "độ dài" của vector đó**.

#### 2. Số 2 ở DƯỚI ($\| \dots \|_2$) là gì?
Số 2 ở dưới chỉ loại chuẩn: **Chuẩn $L_2$ (hay còn gọi là khoảng cách Euclid / Pytago)**.
Đây chính là định lý Pytago quen thuộc: Muốn tính độ dài của một đoạn thẳng nối từ gốc tọa độ tới điểm đó, ta **bình phương từng phần tử, cộng lại rồi rút căn bậc hai**:
$$\| e \|_2 = \sqrt{e_1^2 + e_2^2 + \dots + e_n^2}$$
* **Ví dụ trực quan:** Nếu vector sai số chỉ có 2 phần tử $e = (3, 4)$, thì độ dài chuẩn $L_2$ của nó là:
  $$\| e \|_2 = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = 5$$

#### 3. Số 2 ở TRÊN ($\| \dots \|^2$) là gì?
Số 2 ở trên đơn giản là **phép MŨ 2 (Bình phương)**.
Vì chuẩn $L_2$ ở trên có cái dấu căn bậc hai ($\sqrt{\dots}$) rất cồng kềnh, nên người ta **bình phương mũ 2 lên để làm mất dấu căn**:
$$\| e \|_2^2 = \left( \sqrt{e_1^2 + e_2^2 + \dots + e_n^2} \right)^2 = e_1^2 + e_2^2 + \dots + e_n^2$$

#### 🎯 TÓM LẠI: Cả cụm $\|y - Xw\|_2^2$ có nghĩa dân dã là gì?
* $y - Xw$ là vector phần dư $e$ (danh sách các độ lệch giữa thực tế và dự đoán).
* **$\|y - Xw\|_2^2$ dịch ra tiếng Việt là:** 
  > **"Tổng bình phương của tất cả các sai số"** ($e_1^2 + e_2^2 + \dots + e_n^2$).
  > (Trong sách hay viết tắt là **SSE** - *Sum of Squared Errors* hoặc **RSS** - *Residual Sum of Squares*).

> 💡 **Mẹo để sau này không bị nhầm khi gặp lại:**
> * Số **ở dưới** chỉ **cách đo**: 
>   * Số $2$ ở dưới ($\|w\|_2$): Đo theo kiểu Pytago (bình phương rồi căn).
>   * Số $1$ ở dưới ($\|w\|_1$): Chuẩn $L_1$ (cộng trị tuyệt đối $|w_1| + |w_2|$, bạn gặp ở thuật toán **Lasso** mục 3.3).
> * Số **ở trên** chỉ **số mũ**: mũ 2 là bình phương lên để mất dấu căn.

---

### 1.3 Nghiệm đóng của OLS: Đối chiếu 1-1 với đạo hàm bậc 2 cấp 3

Mục tiêu của ta là tìm bộ trọng số $w$ sao cho hàm mất mát $J(w)$ nhỏ nhất.

Lấy đạo hàm của hàm mất mát theo $w$ rồi cho bằng 0:
$$\nabla_w J(w) = -2X^Ty + 2X^TXw = 0$$

Nhìn qua ma trận thì có vẻ "đáng sợ", nhưng thực chất nó **giống hệt phương trình bậc 2 của toán cấp 3**!

#### 1. Ký hiệu tam giác ngược $\nabla_w J(w)$ là gì?
* $\nabla$ (đọc là **Nabla** hoặc **Gradient**): Đây đơn giản là ký hiệu **ĐẠO HÀM** khi biến số là một vector (thay vì viết $J'(w)$ như số thực ở cấp 3 thì trong ma trận người ta viết $\nabla_w J(w)$).
* Chữ $w$ ở dưới chân nghĩa là: *"Ta đang coi $w$ là biến cần tìm, còn dữ liệu $X$ và $y$ chỉ là các hằng số đã biết"*.

#### 2. So sánh 1-1 với đạo hàm cấp 3:
Hàm mất mát ở mục 1.2 là:
$$J(w) = \underbrace{y^Ty}_{\text{Số tự do}} - \underbrace{2w^TX^Ty}_{\text{Bậc 1 theo } w} + \underbrace{w^TX^TXw}_{\text{Bậc 2 theo } w}$$

Hãy đặt các ma trận tương ứng với các con số $a, b, c$ quen thuộc:
* Đặt $X^TX = a$
* Đặt $X^Ty = b$
* Đặt $y^Ty = c$

| Toán cấp 3 (Số thực 1 biến) | Toán ma trận OLS (Vector nhiều chiều) | Giải thích nguồn gốc |
| :--- | :--- | :--- |
| **Hàm số:** <br> $f(w) = a w^2 - 2bw + c$ | **Hàm mất mát:** <br> $J(w) = w^T (X^TX) w - 2 w^T (X^Ty) + y^Ty$ | Cùng là hàm bậc 2 hình parabol |
| **Đạo hàm:** <br> $f'(w) = 2aw - 2b$ | **Gradient:** <br> $\nabla_w J(w) = 2(X^TX)w - 2X^Ty$ | • $c$ (và $y^Ty$) là hằng số $\to$ đạo hàm bằng 0.<br>• $-2bw$ (và $-2w^TX^Ty$) bậc 1 $\to$ rụng $w$, còn hệ số.<br>• $aw^2$ (và $w^TAw$) bậc 2 $\to$ hạ số 2 xuống! |
| **Cho đạo hàm = 0:** <br> $2aw - 2b = 0$ <br> $\iff aw = b$ | **Cho Gradient = 0:** <br> $2(X^TX)w - 2X^Ty = 0$ <br> $\iff (X^TX)w = X^Ty$ | Tìm điểm cực tiểu (đáy của parabol) |
| **Rút ra nghiệm:** <br> $w^* = \frac{b}{a}$ | **Rút ra nghiệm:** <br> $w^* = (X^TX)^{-1} X^Ty$ | Trong ma trận không có phép chia, nên ta nhân với **nghịch đảo** $(X^TX)^{-1}$ |

> 📌 **"Nghiệm đóng" (Closed-form solution) là gì?**  
> Nghĩa là bạn có sẵn **một công thức duy nhất**, chỉ cần ném dữ liệu $X$ và $y$ vào bấm máy tính một phát là ra ngay đáp án $w^*$ tối ưu tuyệt đối, không cần phải chạy vòng lặp mò mẫm từng bước như thuật toán Gradient Descent.

---

### 1.4 Vì sao có chữ T (chuyển vị) ở $X^Ty$ và $X^TX$?

Nhiều bạn thắc mắc: *"Tại sao không phải là $Xy$ mà lại là $X^Ty$?"*

Câu trả lời nằm ở **kích thước của ma trận**:
* Giả sử bạn có $n = 100$ căn nhà và $p = 3$ đặc trưng (diện tích, số phòng, khoảng cách).
* Ma trận $X$ có kích thước là $100 \times 4$ ($100$ dòng, $4$ cột tính cả hệ số chặn).
* Vector $y$ là cột giá nhà có kích thước $100 \times 1$ ($100$ dòng, $1$ cột).

👉 Hai ma trận có kích thước $(100 \times 4)$ và $(100 \times 1)$ **không thể nhân với nhau được** (vì số cột của ma trận trước phải bằng số dòng của ma trận sau).

Vì vậy, ta phải **lật ma trận $X$ nằm ngang lại** thành $X^T$ (kích thước $4 \times 100$):
$$(4 \times 100) \times (100 \times 1) = (4 \times 1)$$
Kết quả ra đúng một vector kích thước $4 \times 1$, khớp hoàn toàn với số lượng trọng số $w$ cần tìm!

---

### 1.5 Điều kiện để nghiệm đóng OLS tồn tại (Bẫy trắc nghiệm)

Trong số học, phép chia $\frac{a}{b}$ chỉ làm được khi $b \ne 0$.
Trong ma trận, muốn nhân $(X^TX)^{-1}$ thì ma trận $X^TX$ **bắt buộc phải khả nghịch (có ma trận nghịch đảo)**.

Khi nào thì $X^TX$ **KHÔNG** khả nghịch (khiến OLS thất bại)?
1. **Số mẫu ít hơn số đặc trưng ($n < p$):**
   * *Ví dụ:* Bạn chỉ có thông tin của $n = 3$ căn nhà, nhưng lại đo tới $p = 10$ đặc trưng (diện tích, số phòng, hướng nhà, số tầng...).
   * Lúc này số ẩn nhiều hơn số phương trình, hệ có vô số nghiệm $\implies X^TX$ không khả nghịch $\implies$ OLS không ra nghiệm duy nhất.
2. **Đa cộng tuyến hoàn hảo (Tồn tại cột phụ thuộc tuyến tính):**
   * *Ví dụ:* Cột $x_1$ là diện tích tính bằng $m^2$, cột $x_2$ là diện tích tính bằng $cm^2$ ($x_2 = 10000 \cdot x_1$). Cột này là bản sao phóng đại của cột kia.
   * Khi các cột không độc lập tuyến tính, định thức $\det(X^TX) = 0 \implies$ không thể đảo ma trận.

---

### 1.6 Diễn giải hình học của OLS: Bản chất hình chiếu trực giao

Phần này giúp bạn hiểu **bản chất thật sự của công thức $X^TXw = X^Ty$ mà không cần đạo hàm!**

Hãy hình dung:
1. **Mặt bàn phẳng:** Đại diện cho không gian tạo bởi các cột của $X$ (gọi là $Col(X)$). Vì dự đoán $\hat{y} = Xw$ là tổ hợp của các cột trong $X$, nên **mọi dự đoán $\hat{y}$ bắt buộc phải nằm trên mặt bàn**.
2. **Một quả bóng lơ lửng trên không trung:** Đây là vector nhãn thực tế $y$ (nó nằm ngoài mặt bàn vì dữ liệu thực tế luôn có sai số).
3. **Bài toán:** Tìm một điểm $\hat{y}$ nằm trên mặt bàn sao cho khoảng cách từ quả bóng $y$ đến $\hat{y}$ là **ngắn nhất**?

```
         y (Nhãn thật - lơ lửng trên không trung)
         o
         | \
         |  \
  e = y-ŷ|   \ (Khoảng cách bất kỳ)
 (vuông  |    \
   góc)  |     \
         ▼      \
─────────o───────o──────── Không gian Col(X) (Mặt bàn phẳng)
         ŷ*      ŷ khác
    (Hình chiếu)
```

Khoảng cách từ một điểm trên không xuống một mặt phẳng ngắn nhất khi và chỉ khi nó là **ĐƯỜNG CHIẾU VUÔNG GÓC**!
* Do đó, vector sai số $e = y - \hat{y}$ phải **vuông góc (trực giao)** với toàn bộ mặt bàn $Col(X)$.
* Mà vuông góc với mặt bàn nghĩa là $e$ phải vuông góc với từng cột đặc trưng của $X$.
* Trong toán học, hai vector vuông góc thì tích vô hướng bằng $0$:
  $$X^T e = 0 \iff X^T (y - \hat{y}) = 0$$
* Thay $\hat{y} = Xw$ vào:
  $$X^T (y - Xw) = 0 \iff X^Ty - X^TXw = 0 \iff X^TXw = X^Ty$$

👉 **Công thức đạo hàm ở mục 1.3 và hình chiếu trực giao ở mục 1.6 cho ra chính xác cùng một phương trình $X^TXw = X^Ty$!**

---

# PHẦN 2: GÓC NHÌN THỐNG KÊ & ƯỚC LƯỢNG HỢP LÝ CỰC ĐẠI (MLE CỦA FISHER)

Nếu như ở Phần 1, chúng ta tìm $w$ bằng con đường **Hình học** (chiếu vuông góc tìm khoảng cách ngắn nhất), thì ở Phần 2, nhà thống kê vĩ đại **Ronald Fisher** tiếp cận theo một góc nhìn hoàn toàn khác: **Xác suất & Thống kê**.

---

### 2.1 Thế giới luôn có "Nhiễu" & 3 giả định kinh điển về sai số

Ở Phần 1, ta viết $\hat{y} = Xw$. Nhưng thực tế ngoài đời, không có mô hình nào đoán chính xác $100\%$ được giá nhà:
* Cùng một diện tích $100m^2$, có nhà bán được 5 tỷ, có nhà lại bán 5 tỷ 200 triệu (vì hôm đó chủ nhà vui vẻ, người mua cần gấp, phong thủy...).
* Do đó, phương trình thực tế phải là:
  $$y = Xw + \epsilon$$
  - $Xw$: **Tín hiệu có quy luật** (diện tích tăng thì giá tăng).
  - $\epsilon$ (Epsilon): **Nhiễu ngẫu nhiên** (những yếu tố trời ơi đất hỡi không thể đo đếm).

#### 📌 3 Giả định kinh điển về sai số $\epsilon$:
1. **$\mathbb{E}[\epsilon] = 0$ (Kỳ vọng bằng 0):** Sai số có lúc lệch dương, có lúc lệch âm, nhưng trung bình lại thì triệt tiêu bằng 0.
2. **$\epsilon_i \sim \mathcal{N}(0, \sigma^2)$ (Nhiễu tuân theo phân phối chuẩn Gaussian):** Đa số sai số chỉ lệch tí xíu quanh mức 0 (xác suất cao ở giữa hình chuông), hiếm khi nào tự nhiên giá nhà bị lệch hàng chục tỷ (xác suất cực thấp ở 2 rìa).
3. **Độc lập (i.i.d):** Sai số của nhà này không làm ảnh hưởng đến sai số của nhà kia.

---

### 2.2 Tư tưởng MLE: Phân biệt Xác suất vs Độ hợp lý (Likelihood)

Để hiểu MLE, bạn hãy phân biệt giữa **Xác suất (Probability)** và **Độ hợp lý (Likelihood)**:
* **Xác suất:** Bạn *đã biết* đồng xu cân bằng 50/50 $\to$ Tính xác suất để tung 10 lần được 8 lần ngửa.
* **Độ hợp lý (Likelihood - MLE):** Bạn *chưa biết* đồng xu có chuẩn không, nhưng bạn vừa tung 10 lần và thấy ra 8 lần ngửa (dữ liệu đã xảy ra rồi) $\to$ Bạn kết luận đồng xu này có xác suất ngửa tầm $80\%$ là **"hợp lý nhất"**.

> 💡 **Ý tưởng của Fisher trong Hồi quy:**  
> Tập dữ liệu $(X, y)$ gồm 100 căn nhà đã nằm sẵn trên bàn rồi. Trong vô vàn bộ trọng số $w$ có thể chọn, **bộ $w$ nào làm cho xác suất xuất hiện 100 căn nhà này là CAO NHẤT?** Đó chính là nghiệm cần tìm!

---

### 2.3 Giải mã MLE bằng ví dụ Trò chơi bắn cung (Dễ hiểu nhất)

Hãy tưởng tượng bạn đang xem một người tập bắn cung vào hồng tâm:

1. **Thực tế:** Người bắn cung luôn cố nhắm vào tâm (đường dự đoán của mô hình). Nhưng do tay run, gió thổi (nhiễu $\epsilon$), mũi tên sẽ cắm chệch tâm một chút:
   * Mũi tên cắm **rất gần tâm**: Xảy ra rất thường xuyên (xác suất rất cao).
   * Mũi tên bay **lệch tít ra ngoài bờ tường**: Rất hiếm khi xảy ra (xác suất cực kỳ thấp).
   * 👉 Đó chính là ý nghĩa của **"Phân phối chuẩn hình chuông"**: Sai số càng nhỏ thì khả năng xảy ra càng cao!

#### 🤔 Bây giờ, Fisher đổi ngược câu hỏi:
Giả sử bạn bước vào phòng, bạn thấy **5 mũi tên đã cắm sẵn trên tấm bia rồi** (đây chính là tập dữ liệu thực tế mà bạn thu thập được). Nhưng người ta lại giấu mất cái hồng tâm đi!

Người ta đố bạn: **"Hãy đoán xem ban đầu cái hồng tâm nằm ở chỗ nào?"**

Bạn sẽ chọn đặt hồng tâm ở đâu?
* **Cách 1:** Bạn có đặt hồng tâm ở tận góc phòng cách xa 5 mũi tên không? 
  $\to$ Không đời nào! Vì nếu nhắm ở góc phòng mà cả 5 mũi tên lại bay trúng vào đây thì xác suất xảy ra gần như bằng 0 (trừ khi có phép màu).
* **Cách 2:** Bạn sẽ đặt hồng tâm **vào chính giữa cụm 5 mũi tên đó**, sao cho khoảng cách từ hồng tâm đến các mũi tên là **gần nhất có thể**!
  $\to$ Bởi vì khi hồng tâm nằm gần các mũi tên nhất, thì khả năng người bắn bắn trúng cụm đó là **dễ xảy ra nhất (hợp lý nhất - Maximum Likelihood)**!

#### 💡 Mối liên kết "thần kỳ" giữa 2 phương pháp:
* **Bên Xác suất (MLE):** Ta muốn tìm vị trí sao cho khả năng bắn trúng là **CAO NHẤT**.
* **Bên Đo đạc (OLS):** Khả năng chỉ cao nhất khi hồng tâm cách các mũi tên **GẦN NHẤT** (tức là tổng khoảng cách sai số là **BÉ NHẤT**).

👉 **Nói một câu bình dân:** 
> *"Muốn xác suất xảy ra là lớn nhất (MLE), thì bắt buộc sai số lệch đi phải là nhỏ nhất (OLS)"*.  
> Đó là lý do hai ông Fisher (xác suất) và Gauss (hình học) dù đi hai con đường khác nhau nhưng **đều tìm ra chung một kết quả**!

---

### 2.4 Log-Likelihood: Tại sao lại phải lấy $\ln$?

Vì các quan sát độc lập với nhau, xác suất để **cả 100 căn nhà cùng xuất hiện** là phép **NHÂN** liên tiếp:
$$L(w) = p_1 \times p_2 \times p_3 \times \dots \times p_{100}$$

Nhưng trong máy tính và toán học, phép nhân hàng trăm xác suất nhỏ (ví dụ $0.001 \times 0.002 \dots$) gây ra 2 thảm họa:
1. **Tràn số dưới (Underflow):** Kết quả ra $0.00000000...$ khiến máy tính làm tròn về 0 luôn.
2. **Đạo hàm phép nhân cực kỳ khủng khiếp** ($(u \cdot v)' = u'v + uv'$ mà nhân 100 hàm thì không thể giải nổi).

👉 **Tuyệt chiêu:** Lấy logarit tự nhiên $\ln$ cả hai vế!
Nhờ công thức $\ln(a \cdot b) = \ln(a) + \ln(b)$, phép nhân lập tức biến thành **phép CỘNG**:
$$\ln L(w) = \ln(p_1) + \ln(p_2) + \dots + \ln(p_n) = \sum_{i=1}^n \ln(p_i)$$
Đạo hàm của một tổng thì chỉ việc đạo hàm từng số hạng, cực kỳ dễ tính!

---

### 2.5 Bước ngoặt ma thuật: Tại sao Cực đại MLE lại chính là Cực tiểu OLS?

Hàm mật độ của phân phối chuẩn Gaussian có công thức:
$$p(\epsilon_i) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{\epsilon_i^2}{2\sigma^2} \right) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(y_i - X_i w)^2}{2\sigma^2} \right)$$

Khi lấy $\ln$ biểu thức trên (để ý là $\ln(e^A) = A$):
$$\ln L(w) = \text{Hằng số} - \frac{1}{2\sigma^2} \sum_{i=1}^n (y_i - X_i w)^2$$

Bây giờ bạn nhìn kỹ biểu thức trên nhé:
* Mục tiêu của ta là: Tìm $w$ để **tối đa hóa (CỰC ĐẠI)** hàm hợp lý $\ln L(w)$.
* Nhưng ngay đằng trước tổng $\sum (y_i - X_i w)^2$ lại có **DẤU TRỪ ($-$)**!
* Muốn một biểu thức có dấu trừ đạt giá trị **LỚN NHẤT**, thì cái phần bị trừ đi bắt buộc phải **NHỎ NHẤT (CỰC TIỂU)**!

$$\max \left[ - \sum_{i=1}^n (y_i - X_i w)^2 \right] \iff \min \sum_{i=1}^n (y_i - X_i w)^2$$

👉 Mà $\sum (y_i - X_i w)^2$ chính là **tổng bình phương sai số của OLS ở mục 1.1**!

---

### 2.6 Chốt lại 3 câu hỏi trắc nghiệm kinh điển về MLE

1. **Hỏi:** Trong mô hình hồi quy, sai số ngẫu nhiên $\epsilon$ thường được giả định tuân theo phân phối gì?
   * 👉 **Đáp án:** Phân phối chuẩn (Gaussian distribution) với trung bình bằng $0$.
2. **Hỏi:** Khi sai số tuân theo phân phối chuẩn, phương pháp Ước lượng hợp lý cực đại (MLE) tương đương với phương pháp nào?
   * 👉 **Đáp án:** Tương đương với phương pháp Bình phương tối thiểu (OLS).
3. **Hỏi:** Tại sao người ta lại lấy Logarit ($\ln$) của hàm hợp lý (Log-Likelihood)?
   * 👉 **Đáp án:** Để biến **phép nhân** (tích xác suất) thành **phép cộng** (tổng), giúp máy tính không bị lỗi tràn số và dễ tính toán đạo hàm.

---

# PHẦN 3: ĐA CỘNG TUYẾN, OVERFITTING & REGULARIZATION

Thông điệp cốt lõi của phần này: **"Làm sao để mô hình không học vẹt (tránh Overfitting) và không bị điên loạn khi các đặc trưng trùng lặp nhau?"**

---

### 3.1 Hiện tượng Đa cộng tuyến (Multicollinearity): Ví dụ 2 nhân viên sinh đôi

#### 🏠 Ví dụ đời thường:
Bạn xây dựng mô hình dự đoán giá nhà. Trong bảng dữ liệu, bạn vô tình đưa vào 2 cột:
* Cột $x_1$: Diện tích tính bằng mét vuông ($m^2$).
* Cột $x_2$: Diện tích tính bằng feet vuông ($sq\ ft$).

Hai cột này thực chất là **một thông tin duy nhất**, chỉ khác đơn vị đo!
* Nó giống như việc bạn giao một công việc cho **2 nhân viên sinh đôi giống hệt nhau** cùng làm. Khi công việc hoàn thành (giá nhà được dự đoán đúng), bạn không tài nào biết được **công lao thực sự thuộc về ai**:
  * Bạn có thể thưởng nhân viên 1: $+100$ điểm, trừ nhân viên 2: $-90$ điểm (tổng là $+10$).
  * Hoặc bạn thưởng nhân viên 1: $+1000$ điểm, trừ nhân viên 2: $-990$ điểm (tổng vẫn là $+10$).
* **Hậu quả:** Các trọng số $w_1$ và $w_2$ sẽ **phình to khổng lồ và nhảy múa loạn xạ** (một cái dương cực lớn, một cái âm cực lớn bù trừ nhau). Mô hình trở nên cực kỳ bất ổn định!

---

### 3.2 Tư tưởng của Regularization: "Phạt đứa nào to đầu!"

Mô hình OLS ở Phần 1 rất "ngây thơ": Nó chỉ biết cắm đầu làm cho sai số trên tập học nhỏ nhất có thể, bất chấp các trọng số $w$ bị phình to lên cả triệu, cả tỷ $\to$ Dẫn đến **học vẹt (Overfitting)**.

Để dạy cho mô hình bớt "ngông", các nhà khoa học thêm một **khoản tiền phạt (Penalty)** vào hàm mất mát:

$$\text{Tổng mất mát} = \text{Sai số dự đoán} + \lambda \times (\text{Độ lớn của các trọng số } w)$$

* Nếu các trọng số $w$ phình to quá $\to$ Tiền phạt cực kỳ đắt $\to$ Mô hình bắt buộc phải **co nhỏ các hệ số $w$ lại** để giảm tiền phạt!
* $\lambda$ (Lambda) là **núm vặn chỉnh mức phạt**:
  * $\lambda = 0$: Không phạt gì cả $\implies$ Quay về OLS bình thường.
  * $\lambda$ vừa phải: Giữ các hệ số nhỏ gọn $\implies$ Mô hình mượt mà, tổng quát tốt.
  * $\lambda$ quá lớn: Phạt quá nặng, đè bẹp tất cả $w$ về 0 $\implies$ Mô hình không học được gì cả (**Underfitting**).

---

### 3.3 Trận chiến kinh điển: Ridge ($L_2$) vs Lasso ($L_1$)

```
                            ┌────────────────────────┐
                            │     REGULARIZATION     │
                            └───────────┬────────────┘
                   ┌────────────────────┴────────────────────┐
                   ▼                                         ▼
         RIDGE REGRESSION (Chuẩn L2)               LASSO REGRESSION (Chuẩn L1)
       (Phạt theo BÌNH PHƯƠNG w^2)                (Phạt theo TRỊ TUYỆT ĐỐI |w|)
```

#### 🥊 Hiệp 1: Cách phạt
* **Ridge ($L_2$):** Phạt $\lambda \sum w_j^2$. Vì có bình phương, càng to càng bị phạt theo cấp số nhân.
* **Lasso ($L_1$):** Phạt $\lambda \sum |w_j|$. Phạt đều đặn theo độ lớn trị tuyệt đối.

#### 🥊 Hiệp 2: Số phận của các hệ số $w$ (QUAN TRỌNG NHẤT!)
* **Ridge:** Chỉ co các hệ số $w$ về **RẤT GẦN 0, chứ KHÔNG BAO GIỜ BẰNG 0**. Tất cả các biến đều được giữ lại trong phương trình.
* **Lasso:** Có khả năng **ÉP CÁC HỆ SỐ VÔ DỤNG VỀ ĐÚNG BẰNG 0!**
  * Mà trong toán học, $w = 0$ nghĩa là biến đó bị gạch tên hoàn toàn khỏi phương trình.
  * 👉 Do đó, **Lasso có khả năng TỰ ĐỘNG CHỌN ĐẶC TRƯNG (Feature Selection)**, tạo ra nghiệm thưa (*Sparse*).

#### 🥊 Hiệp 3: Hình học trực quan (Tại sao Lasso làm được điều kỳ diệu đó?)
* **Ridge:** Vùng giới hạn phạt là **HÌNH TRÒN** (mượt mà, không có góc nhọn) $\to$ Điểm chạm giữa sai số và hình tròn thường nằm lơ lửng trên đường cong, không chạm vào trục tọa độ $\to$ $w$ không bằng 0.
* **Lasso:** Vùng giới hạn phạt là **HÌNH THOI** (có các đỉnh nhọn đâm thẳng vào các trục tọa độ) $\to$ Khi sai số chạm vào hình thoi, nó rất dễ va vào các đỉnh nhọn nằm ngay trên trục $\to$ Tọa độ của các trục khác lập tức bằng 0!

#### 🥊 Hiệp 4: Có nghiệm đóng giải tích hay không?
* **Ridge:** **CÓ nghiệm đóng!** 
  $$w^* = (X^TX + \lambda I)^{-1} X^Ty$$
  *(Nhờ cộng thêm $\lambda I$ vào đường chéo, ma trận luôn luôn khả nghịch, giải quyết triệt để bệnh đa cộng tuyến).*
* **Lasso:** **KHÔNG CÓ nghiệm đóng!** Vì dấu trị tuyệt đối $|w|$ có góc nhọn bẻ gãy, không lấy đạo hàm tại 0 được $\to$ Bắt buộc phải dùng thuật toán chạy lặp.

---

### 3.4 Bổ sung: Elastic Net là gì?
* **Elastic Net** đơn giản là con lai: Nó phạt **cả $L_1$ lẫn $L_2$**:
  $$J(w) = \|y - Xw\|_2^2 + \lambda_1 \|w\|_1 + \lambda_2 \|w\|_2^2$$
* *Lý do ra đời:* Khi có 1 nhóm 5 biến tương quan mạnh với nhau, Lasso hay bốc đại 1 biến và vứt bỏ 4 biến kia. Elastic Net sẽ giữ lại cả nhóm 5 biến đó nhưng co nhỏ chúng lại.

---

### 3.5 Chốt lại 4 câu hỏi trắc nghiệm chắc chắn gặp về Regularization

1. **Câu hỏi:** Giữa Ridge và Lasso, thuật toán nào có khả năng tự động chọn lọc đặc trưng (Feature Selection)?
   * 👉 **Đáp án:** **Lasso ($L_1$)**, vì nó ép được trọng số về đúng bằng 0.
2. **Câu hỏi:** Nghiệm của Lasso có tính chất gì?
   * 👉 **Đáp án:** Nghiệm thưa (**Sparse** - nghĩa là chứa nhiều số 0).
3. **Câu hỏi:** Tại sao Ridge giải quyết được đa cộng tuyến?
   * 👉 **Đáp án:** Vì ma trận $(X^TX + \lambda I)$ luôn luôn khả nghịch với mọi $\lambda > 0$.
4. **Câu hỏi:** Khi tăng siêu tham số $\lambda$ lên rất lớn, điều gì xảy ra với mô hình?
   * 👉 **Đáp án:** Các hệ số $w$ bị ép nhỏ lại, Bias tăng lên, Variance giảm xuống, và mô hình có nguy cơ bị **Underfitting**.

---

# PHẦN 4: LOGISTIC REGRESSION (HỒI QUY LOGISTIC CHO PHÂN LOẠI)

Một "cú lừa" ngay từ tên gọi: **Nó tên là "Hồi quy" (Regression), nhưng công dụng thực tế 100% lại là để làm bài toán PHÂN LOẠI (Classification)!**

---

### 4.1 Vì sao Hồi quy tuyến tính không dùng được cho Phân loại?

Giả sử bạn làm bài toán: Dự đoán xem sinh viên **ĐẬU ($y = 1$)** hay **TRƯỢT ($y = 0$)** dựa vào số giờ học bài.

Tại sao không dùng đường thẳng $y = Xw$ ở Phần 1?
1. **Lỗi tràn biên xác suất:** Đường thẳng $y = Xw$ kéo dài vô tận từ $-\infty$ đến $+\infty$. Nếu đưa vào một người học 50 tiếng, mô hình phán: *"Xác suất đậu là $2.5$ (tức là $250\%$)"*, hoặc người lười học thì phán *"Xác suất đậu là $-0.8$"*. Điều này hoàn toàn vô nghĩa vì xác suất bắt buộc phải nằm trong đoạn $[0, 1]$!
2. **Dễ bị "bẻ gãy" bởi điểm ngoại lai:** Nếu trong lớp có một "dị nhân" học 100 tiếng mới đi thi và đậu, đường thẳng hồi quy sẽ bị kéo lệch hẳn về phía người đó, khiến cho những bạn học 10–15 tiếng (vốn dĩ đủ đậu) lại bị phán thành trượt!

---

### 4.2 Hàm Sigmoid: "Máy nén thần kỳ" ép mọi số về $(0, 1)$

Để khắc phục, các nhà khoa học lấy điểm số tuyến tính $z = w^Tx$ (từ $-\infty$ đến $+\infty$) rồi nhét nó qua một **chiếc máy nén mang tên Sigmoid**:

$$\sigma(z) = \frac{1}{1 + e^{-z}}$$

```
  Xác suất (p)
      1.0 ┤                      . - - - - (Gần 1 khi z rất lớn)
          │                  . '
      0.5 ┤ - - - - - - - - o - - - - - - (Ngang ngửa 50/50 khi z = 0)
          │             . '
      0.0 ┴ - - - - - ' ───────────────── Điểm số z (từ -∞ đến +∞)
```

* **Nếu điểm số $z = 0$ (lưng chừng):** $\sigma(0) = \frac{1}{1 + e^0} = \frac{1}{1 + 1} = 0.5$ (Cơ hội đậu 50/50).
* **Nếu $z$ là số dương rất lớn ($z = +10$):** $e^{-10} \approx 0 \implies \sigma(10) \approx \frac{1}{1 + 0} = 1$ (Gần như chắc chắn $100\%$ đậu).
* **Nếu $z$ là số âm rất lớn ($z = -10$):** $e^{10}$ cực lớn $\implies \sigma(-10) \approx \frac{1}{\infty} = 0$ (Gần như chắc chắn $0\%$ rớt).

👉 **Kết quả:** Mọi giá trị đầu ra luôn bị khóa chặt trong khoảng $(0, 1)$, biến thành **xác suất $p = P(y=1|x)$ cực kỳ hoàn hảo!**

---

### 4.3 Ngoài lề chuyên sâu: Tại sao hàm Sigmoid lại dùng cơ số $e$?

Tại sao lại là $e \approx 2.71828$ (số Euler) mà không phải là số $2$, số $10$ hay số $5$?
Thực tế: Nếu bạn thay $e$ bằng số $2$ ($\frac{1}{1 + 2^{-z}}$) hay số $10$ ($\frac{1}{1 + 10^{-z}}$) thì đồ thị **vẫn ra hình chữ S** ép về $(0, 1)$. Nhưng toàn bộ giới khoa học đều chọn $e$ vì **3 lý do "ma thuật"** sau:

#### 1. "Phép màu đạo hàm" giúp máy tính chạy siêu nhanh (Lý do số 1)
Bạn còn nhớ kiến thức đạo hàm cấp 3 không?
* Đạo hàm của $e^x$ là: $(e^x)' = e^x$ *(nguyên vẹn, không đổi)*.
* Nhưng đạo hàm của $2^x$ là: $(2^x)' = 2^x \cdot \ln(2)$ *(bị thừa ra cái đuôi $\ln 2$)*.
* Đạo hàm của $10^x$ là: $(10^x)' = 10^x \cdot \ln(10)$ *(bị thừa ra cái đuôi $\ln 10$)*.

Chính nhờ $(e^x)' = e^x$ mà khi lấy đạo hàm của hàm Sigmoid cơ số $e$, ta thu được một công thức **đẹp như tranh vẽ**:
$$\sigma'(z) = \sigma(z) \cdot (1 - \sigma(z))$$

> 💡 **Ý nghĩa thực tế sống còn đối với máy tính:**  
> Trong Machine Learning, máy tính phải tính đạo hàm hàng triệu lần mỗi giây khi chạy Gradient Descent.
> * Với công thức trên: Khi máy tính đã tính xong giá trị xác suất (ví dụ $p = 0.8$), muốn tính đạo hàm nó chỉ cần lấy: $0.8 \times (1 - 0.8) = 0.8 \times 0.2 = 0.16$.
> * **Chỉ mất đúng một phép nhân đơn giản**, không cần bắt máy tính phải bấm lại hàm mũ phức tạp hay nhân thêm cái đuôi $\ln(2), \ln(10)$ nào cả! Điều này giúp tiết kiệm tài nguyên tính toán kinh khủng!

#### 2. Mối "duyên tiền định" với Logarit tự nhiên ($\ln$)
* Cả hàm Logit $\ln(\text{Odds})$ và hàm mất mát Cross-Entropy $-[y\ln(p) + (1-y)\ln(1-p)]$ đều dùng **logarit tự nhiên $\ln$ (tức là $\log$ cơ số $e$)**.
* Trong toán học, hàm mũ $e^z$ và hàm logarit $\ln(z)$ là **hai hàm ngược nhau** ($\ln(e^z) = z$).
* Nhờ cùng dùng chung cơ số $e$, khi nhét Sigmoid vào hàm Logit hoặc hàm mất mát, hàm $\ln$ và hàm $e$ **triệt tiêu lẫn nhau hoàn toàn**, biến các phương trình phức tạp thành những đường thẳng tuyến tính $w^Tx$ vô cùng gọn gàng.

#### 3. $e$ là hằng số tăng trưởng tự nhiên của vũ trụ
* Sự phân rã hạt nhân, sự sinh sôi của vi khuẩn, lãi suất kép liên tục... đều tuân theo quy luật cơ số $e$.
* $e \approx 2.718$ tạo ra một đường cong hình chữ S có **độ dốc vừa vặn hoàn hảo**: Cơ số 10 thì dốc đứng quá gắt, cơ số nhỏ thì lài lài; $e$ đem lại sự cân bằng tối ưu nhất!

---

### 4.4 Tỷ số Odds và Logit: 3 bước tiến hóa từ ván cờ vua

Chúng ta sẽ đi qua **3 bước tiến hóa**: từ **Xác suất ($p$) $\to$ Tỷ số Odds $\to$ Logit**:

#### Bước 1: Phân biệt "Xác suất" ($p$) và "Odds" (Tỷ số cơ hội)
Hãy lấy ví dụ bạn và bạn thân chơi **10 ván cờ vua**:
* Bạn **thắng 8 ván**.
* Bạn **thua 2 ván**.

Bây giờ ta tính 2 đại lượng:
1. **Xác suất thắng ($p$):** Lấy số ván thắng chia cho **TỔNG SỐ VÁN ĐÃ CHƠI**:
   $$p = \frac{8}{10} = 0.8 \quad (80\%)$$
   *(Xác suất bắt buộc phải nằm từ $0$ đến $1$, tức là $0\%$ đến $100\%$)*.
2. **Tỷ số Odds:** Lấy số ván thắng chia thẳng cho **SỐ VÁN THUA**:
   $$\text{Odds} = \frac{\text{Số ván thắng}}{\text{Số ván thua}} = \frac{8}{2} = 4$$
   Hoặc tính bằng xác suất: 
   $$\text{Odds} = \frac{p}{1 - p} = \frac{0.8}{1 - 0.8} = \frac{0.8}{0.2} = 4$$

> 💡 **Ý nghĩa của $\text{Odds} = 4$ là gì?**  
> Dân dã nghĩa là: *"Cứ mỗi 1 lần thua, bạn sẽ thắng được 4 lần!"* (Cơ hội thắng **gấp 4 lần** cơ hội thua).
> * Nếu Odds $= 1$: Nghĩa là thắng 5 ván, thua 5 ván (kèo cân 50/50).
> * Nếu Odds $= 10$: Cơ hội thắng gấp 10 lần cơ hội thua.
> * Nếu Odds $= 0.1$: Cơ hội thắng chỉ bằng $1/10$ cơ hội thua.

👉 **Nhận xét về Odds:** Khi xác suất $p$ tăng từ $0 \to 1$, thì Odds sẽ chạy từ $0 \to +\infty$.

#### Bước 2: Tại sao lại cần thêm chữ "Log" vào để thành "Logit"?
Mục tiêu của chúng ta là muốn kết nối với đường thẳng quen thuộc $z = w^Tx = w_0 + w_1 x_1 + \dots$ 

Nhưng hãy nhìn vào "phạm vi hoạt động" (miền giá trị) của chúng:
* Đường thẳng $z = w^Tx$: Chạy từ **$-\infty$ đến $+\infty$** (có thể âm vô cùng, có thể dương vô cùng).
* Xác suất $p$: Bị nhốt chặt trong đoạn $[0, 1]$ $\to$ **Lệch nhau, không gán bằng nhau được!**
* Tỷ số Odds: Đã mở rộng ra được $[0, +\infty)$, nhưng **vẫn không có số âm** $\to$ **Vẫn chưa khớp!**

Làm sao để biến một số từ $[0, +\infty)$ thành một số có thể chạy từ $-\infty$ đến $+\infty$?
👉 **Lấy logarit tự nhiên ($\ln$)!**

$$\text{Logit} = \ln(\text{Odds}) = \ln\left(\frac{p}{1 - p}\right)$$

Hãy xem điều kỳ diệu xảy ra khi lấy $\ln$:
* Khi Odds $= 1$ (ngang ngửa 50/50): $\ln(1) = 0$.
* Khi Odds $> 1$ (cơ hội thắng cao, ví dụ Odds $= 100$): $\ln(100) = +4.6$ (thành số **DƯƠNG**).
* Khi Odds $< 1$ (cơ hội thắng thấp, ví dụ Odds $= 0.01$): $\ln(0.01) = -4.6$ (thành số **ÂM**).
* Khi Odds $\to 0$: $\ln(0) \to -\infty$.
* Khi Odds $\to +\infty$: $\ln(+\infty) \to +\infty$.

🎉 **BÙM!** Hàm Logit bây giờ đã chạy thoải mái từ **$-\infty$ đến $+\infty$**. Lúc này, ta mới có thể đàng hoàng đặt dấu bằng với đường thẳng $w^Tx$:
$$\ln\left(\frac{p}{1 - p}\right) = w_0 + w_1 x_1 + \dots + w_p x_p$$

#### Bước 3: Từ Logit giải ngược ra hàm Sigmoid (Mối liên hệ tối hậu)
Nếu bạn giải phương trình ở Bước 2 để tìm $p$ theo $z$:
1. Bỏ $\ln$ bằng cách lấy mũ $e$: 
   $$\frac{p}{1 - p} = e^z$$
2. Nhân chéo lên:
   $$p = e^z (1 - p) = e^z - p \cdot e^z$$
3. Chuyển $p$ về một vế:
   $$p + p \cdot e^z = e^z \iff p(1 + e^z) = e^z$$
4. Rút ra $p$:
   $$p = \frac{e^z}{1 + e^z} = \frac{1}{1 + e^{-z}} \quad \text{(ĐÂY CHÍNH LÀ HÀM SIGMOID!)}$$

👉 **Hóa ra hàm Sigmoid không phải do ai đó tự nhiên nghĩ bậy ra**, mà nó chính là **kết quả giải phương trình khi ta cho Logit bằng một đường thẳng tuyến tính!**

#### 📝 Bẫy trắc nghiệm kinh điển về Odds và Logit:
* **Câu hỏi 1:** Khi đặc trưng $x_j$ tăng thêm 1 đơn vị, đại lượng nào sẽ **tăng thêm $w_j$ đơn vị**?
  * 👉 **Đáp án:** **Log-odds (Logit)**. Vì $\text{Logit} = \dots + w_j x_j$.
* **Câu hỏi 2:** Khi đặc trưng $x_j$ tăng thêm 1 đơn vị, thì tỷ số Odds sẽ thay đổi như thế nào?
  * 👉 **Đáp án:** Tỷ số Odds sẽ **nhân lên $e^{w_j}$ lần** (gọi là Odds Ratio). 
  *(Vì $\text{Odds} = e^{\text{Logit}} = e^{\dots + w_j(x_j + 1)} = \text{Odds cũ} \times e^{w_j}$)*.

---

### 4.5 Hàm mất mát Binary Cross-Entropy (BCE Loss / Log Loss)

$$L = - \Big[ \underbrace{y \ln(p)}_{\text{Nhánh 1}} + \underbrace{(1 - y) \ln(1 - p)}_{\text{Nhánh 2}} \Big]$$

#### 1. Cơ chế "Công tắc đèn": Tại sao lại có $y$ và $(1-y)$?
Trong bài toán phân loại nhị phân, nhãn thực tế $y$ **chỉ có thể nhận 1 trong 2 giá trị: $1$ (Đậu) hoặc $0$ (Rớt)**. 
Hai biến $y$ và $(1 - y)$ thực chất là **một chiếc công tắc đảo chiều tự động**:

```
           ┌─── Nếu y = 1 (Thực tế là ĐẬU) ───► BẬT nhánh 1: -ln(p)
           │                                    TẮT nhánh 2: 0 * ln(1-p) = 0
 Nhãn y ───┤
           │
           └─── Nếu y = 0 (Thực tế là RỚT) ───► TẮT nhánh 1: 0 * ln(p) = 0
                                                BẬT nhánh 2: -ln(1-p)
```

👉 Người ta gom cả 2 trường hợp vào chung một dòng toán học duy nhất để máy tính có thể tính toán hàng loạt cho mọi dòng dữ liệu mà không cần phải viết lệnh `if...else` rườm rà!

#### 2. Quy luật phạt tiền: Tại sao lại là $-\ln$?
Bây giờ ta soi vào một nhánh khi $y = 1$: **Mất mát là $-\ln(p)$**:

```
  Mất mát (Loss = -ln(p))
    +∞ ┤  \
       │   \   (Phạt cực nặng khi đoán sai)
       │    \
    2  ┤     \
    1  ┤      `.
    0  ┴─────────'────────── Xác suất dự đoán p
       0        0.5        1.0
     (Đoán sai)          (Đoán đúng)
```

* **TH 1: Mô hình đoán đúng tuyệt đối ($p = 1$):**
  $$\text{Loss} = -\ln(1) = 0$$
  👉 **Tiền phạt = 0 đồng!** (Đoán đúng thì không bị phạt).
* **TH 2: Mô hình đoán hơi phân vân ($p = 0.5$):**
  $$\text{Loss} = -\ln(0.5) \approx 0.69$$
  👉 **Phạt nhẹ 0.69 điểm.**
* **TH 3: Mô hình "tự tin đoán ẩu" ($p = 0.01$ - thực tế là Đậu nhưng đoán $99\%$ là Rớt):**
  $$\text{Loss} = -\ln(0.01) \approx 4.6$$
* **TH 4: Cực đoan ($p \to 0$):**
  $$\text{Loss} = -\ln(0) \to +\infty$$
  👉 **Điểm phạt bùng nổ lên VÔ CỰC!**

> 💡 **Triết lý của BCE Loss:**  
> *"Thà bạn thừa nhận bạn không biết (50/50 thì phạt nhẹ), chứ nếu bạn dám chắc chắn $100\%$ một điều hoàn toàn sai sự thật, bạn sẽ bị phạt sạt nghiệp!"*

#### 3. Tại sao KHÔNG DÙNG bình phương $(y - p)^2$ như OLS? (TRỌNG TÂM THI)
Có **2 lý do sống còn** mà đề thi trắc nghiệm rất thích hỏi:
* **Lý do 1: Tránh bị "mắc kẹt" (Vấn đề Non-convex):**  
  Với OLS, hàm bình phương là hình parabol lồi (*Convex*), chỉ có duy nhất một đáy cực tiểu toàn cục. Nhưng ở Logistic, vì $p = \frac{1}{1 + e^{-z}}$ là hàm cong phi tuyến, nếu nhét nó vào $(y - p)^2$, đồ thị sẽ trở nên **nhấp nhô lượn sóng (Non-convex)**, có vô số thung lũng giả. Gradient Descent sẽ bị **mắc kẹt ở thung lũng giả**. Trong khi đó, **BCE Loss là hàm lồi (Convex)** $\implies$ chỉ có duy nhất 1 đáy, luôn tìm được nghiệm tối ưu!
* **Lý do 2: Tránh bị "lì lợm" (Hiện tượng triệt tiêu gradient):**  
  Khi dùng $(y - p)^2$, ở những vùng mô hình đoán sai nghiêm trọng, độ dốc của hàm Sigmoid lại gần như bằng $0$ $\to$ mô hình bị "tê liệt" không chịu cập nhật trọng số! Ngược lại, khi kết hợp BCE Loss với Sigmoid:
  $$\frac{\partial L}{\partial z} = p - y$$
  👉 **Độ dốc đúng bằng sai số $(p - y)$**: Càng đoán sai lệch nhiều thì lực đẩy sửa sai càng mạnh!

#### 4. Nguồn gốc thật sự: Nó chính là MLE ở Phần 2!
Với biến cố nhị phân $y \in \{0, 1\}$, xác suất xảy ra là phân phối Bernoulli:
$$P(y) = p^y (1 - p)^{1 - y}$$
Lấy logarit tự nhiên:
$$\ln P(y) = y \ln(p) + (1 - y) \ln(1 - p)$$
Vì trong máy học ta thích bài toán **tối thiểu hóa sai số**, nên ta chỉ việc **thêm dấu trừ vào trước**:
$$L = - \ln P(y) = - [y \ln(p) + (1 - y) \ln(1 - p)]$$
👉 Do đó, BCE Loss còn có tên gọi học thuật là **Negative Log-Likelihood (NLL - Số đối của Log-Likelihood)**!

---

### 4.6 Phân loại nhiều hơn 2 lớp (Multi-class Classification)

Bây giờ, nếu bài toán có **nhiều hơn 2 lớp** (ví dụ phân loại ảnh thành $K = 3$ loài: **Mèo, Chó, Gà**) thì máy tính sẽ giải quyết như thế nào?

Có **2 chiến lược lớn** cực kỳ kinh điển trong Machine Learning:

#### Chiến lược 1: One-vs-Rest (OvR hay One-vs-All) - "Chia để trị"
Ý tưởng: *"Nếu ta chỉ có công cụ phân loại 2 lớp, vậy thì hãy biến bài toán 3 lớp thành 3 bài toán 2 lớp riêng biệt!"*

Mô hình sẽ thành lập **$K$ bài toán con độc lập** (với $K = 3$ con vật):
* **Mô hình 1:** Nhận diện **Mèo** vs **(Tất cả con còn lại: Chó + Gà)** $\to$ Cho ra điểm số $z_1 = 3.2$.
* **Mô hình 2:** Nhận diện **Chó** vs **(Tất cả con còn lại: Mèo + Gà)** $\to$ Cho ra điểm số $z_2 = 1.1$.
* **Mô hình 3:** Nhận diện **Gà** vs **(Tất cả con còn lại: Mèo + Chó)** $\to$ Cho ra điểm số $z_3 = -0.5$.

Khi có một bức ảnh mới đưa vào, ta ném ảnh qua cả 3 mô hình:
$$\hat{y} = \arg\max (z_1, z_2, z_3) = \arg\max(3.2, 1.1, -0.5) \implies \text{Chọn Mèo!}$$
* **Đặc điểm:** Cần huấn luyện đúng **$K$ mô hình**.

#### Chiến lược 2: Softmax Regression - "Máy chia bánh phần trăm"
Softmax Regression (*Multinomial Logistic Regression*) là **MỘT mô hình duy nhất** tính toán đồng thời điểm số cho tất cả các lớp:

Giả sử mạng tính ra 3 điểm số tiềm năng:
* Điểm Mèo: $z_1 = 3.0$
* Điểm Chó: $z_2 = 1.0$
* Điểm Gà: $z_3 = 0.0$

Các số $3.0, 1.0, 0.0$ không phải là xác suất (tổng bằng $4.0 \ne 1.0$). 
Để biến các điểm số này thành các phần trăm xác suất chuẩn chỉnh, ta dùng **công thức Softmax**:

$$P(y = k | x) = \frac{e^{z_k}}{\sum_{j=1}^K e^{z_j}}$$

#### 🔍 Giải phẫu công thức Softmax qua bảng tính cụ thể:
```
  Điểm số thô (z)         Mũ hóa (e^z)              Chia cho Tổng (Softmax)
───────────────────      ──────────────            ─────────────────────────
  z_Mèo = 3.0       ──►   e^3.0 ≈ 20.08     ──►     20.08 / 23.80 ≈ 84.4%
  z_Chó = 1.0       ──►   e^1.0 ≈  2.72     ──►      2.72 / 23.80 ≈ 11.4%
  z_Gà  = 0.0       ──►   e^0.0 =  1.00     ──►      1.00 / 23.80 ≈  4.2%
                                ──────────                         ─────────
                                Tổng = 23.80                       Tổng = 100% (bằng 1)
```

1. **Bước 1: Mũ hóa ($e^{z_k}$):** Dùng hàm mũ $e$ để bảo đảm mọi kết quả đều biến thành **số dương** (ngay cả khi điểm số $z$ bị âm, ví dụ $e^{-2} = 0.135 > 0$). Đồng thời phóng đại điểm số của kẻ chiến thắng lên vượt trội.
2. **Bước 2: Chia cho Tổng ($\frac{\dots}{\sum e^{z_j}}$):** Đem phần của mình chia cho tổng số bánh của cả bàn $\implies$ Đảm bảo **tổng xác suất của cả 3 lớp cộng lại luôn luôn bằng đúng $1$ ($100\%$)**!

#### 🤔 Tại sao lại gọi là "Softmax" (Max Mềm)?
* **Hard-max (Max cứng):** Lấy thằng to nhất gán bằng $1$, vứt sạch các thằng còn lại thành $0$ (Mèo = $1$, Chó = $0$, Gà = $0$). Nhược điểm là đồ thị bị đứt gãy, không lấy đạo hàm được.
* **Softmax (Max mềm):** Thằng to nhất được miếng bánh to nhất ($84.4\%$), nhưng các thằng yếu thế hơn vẫn được chia một phần nhỏ ($11.4\%$ và $4.2\%$). Điều này tạo ra một phân phối mềm mại, **có đạo hàm trơn tru** để máy tính có thể học qua từng vòng lặp!

---

### 4.7 Chốt lại 4 câu hỏi trắc nghiệm chắc chắn gặp về Logistic Regression

1. **Câu hỏi:** Hàm kích hoạt Sigmoid có miền giá trị nằm trong khoảng nào?
   * 👉 **Đáp án:** Nằm trong khoảng $(0, 1)$.
2. **Câu hỏi:** Mối quan hệ giữa Log-odds (Logit) và các đặc trưng đầu vào $x$ là gì?
   * 👉 **Đáp án:** Mối quan hệ **tuyến tính** ($w^Tx$).
3. **Câu hỏi:** Mô hình Logistic Regression tìm nghiệm tối ưu bằng phương pháp nào?
   * 👉 **Đáp án:** Thuật toán tối ưu hóa lặp (như Gradient Descent), vì không có nghiệm đóng giải tích.
4. **Câu hỏi:** Hàm mất mát tiêu chuẩn dùng để huấn luyện Logistic Regression là gì?
   * 👉 **Đáp án:** Binary Cross-Entropy (BCE Loss) / Log Loss.
5. **Câu hỏi:** Với bài toán phân loại $K$ lớp, phương pháp One-vs-Rest (OvR) cần huấn luyện bao nhiêu mô hình nhị phân?
   * 👉 **Đáp án:** Cần huấn luyện đúng **$K$ mô hình**.
6. **Câu hỏi:** Khi bài toán chỉ có $K = 2$ lớp, hàm Softmax sẽ thu gọn về hàm nào?
   * 👉 **Đáp án:** Thu gọn về chính xác **hàm Sigmoid**!

---

# PHẦN 5: THƯỚC ĐO ĐÁNH GIÁ MÔ HÌNH (EVALUATION METRICS)

Sau khi huấn luyện xong mô hình, làm sao ta biết mô hình này "giỏi" hay "dở"? Ta cần các thước đo khách quan để chấm điểm.

---

### 5.1 Các độ đo cho bài toán Hồi quy (Regression Metrics)

Giả sử nhãn thật là $y_i$ và mô hình dự đoán là $\hat{y}_i$:

#### 1. MAE (Mean Absolute Error - Sai số tuyệt đối trung bình)
$$MAE = \frac{1}{n} \sum_{i=1}^n |y_i - \hat{y}_i|$$
* **Ý nghĩa:** Trung bình mỗi lần dự đoán, mô hình của bạn bị lệch đi bao nhiêu đơn vị.
* **Ưu điểm lớn nhất:** Cùng đơn vị đo với biến đích $y$ (ví dụ: dự đoán giá nhà lệch trung bình 50 triệu VNĐ), cực kỳ trực quan và dễ giải thích cho sếp hoặc khách hàng.
* **Đặc tính:** **Rất bền vững với ngoại lai (Robust to outliers)**. Nếu lỡ có 1 căn biệt thự ngoại lai bị đoán lệch 10 tỷ, MAE chỉ tăng lên tuyến tính chứ không bị phóng đại quá đà.

#### 2. MSE (Mean Squared Error - Sai số bình phương trung bình)
$$MSE = \frac{1}{n} \sum_{i=1}^n (y_i - \hat{y}_i)^2$$
* **Nhược điểm chí mạng:** Đơn vị đo bị **BÌNH PHƯƠNG** lên! Ví dụ: đơn vị dự đoán giá nhà thành $(\text{triệu đồng})^2$, dự đoán số người thành $\text{người}^2$ $\to$ Hoàn toàn vô nghĩa về mặt thực tế kinh doanh!
* **Đặc tính:** **Phạt cực kỳ tàn nhẫn các sai số lớn**. Lệch 2 đơn vị phạt 4, lệch 10 đơn vị phạt 100. Rất nhạy cảm với các điểm ngoại lai.

#### 3. RMSE (Root Mean Squared Error - Căn bậc hai của MSE)
$$RMSE = \sqrt{MSE} = \sqrt{\frac{1}{n} \sum_{i=1}^n (y_i - \hat{y}_i)^2}$$
* **Vì sao sinh ra RMSE?** Để khắc phục nhược điểm của MSE! Việc rút căn bậc hai giúp **kéo đơn vị đo về lại nguyên bản** (ví dụ triệu đồng), nhưng **vẫn giữ nguyên bản chất phạt rất nặng các sai số lớn**.
* **So sánh MAE và RMSE:** Luôn luôn có $RMSE \ge MAE$. Khoảng cách giữa $RMSE$ và $MAE$ càng lớn chứng tỏ trong dữ liệu có nhiều sai số lệch cực kỳ khủng khiếp!

---

### 5.2 Bản chất hệ số xác định $R^2$: So tài với "Mô hình người lười"

Các chỉ số MAE, RMSE phụ thuộc vào đơn vị đo (đoán lệch 100 triệu với giá nhà là tốt, nhưng đoán lệch 100 triệu với giá một chiếc xe máy là thảm họa). Người ta muốn một chỉ số **chuẩn hóa từ $0$ đến $1$** để so sánh được mọi mô hình. Đó là $R^2$!

$$R^2 = 1 - \frac{SS_{res}}{SS_{tot}} = 1 - \frac{\sum_{i=1}^n (y_i - \hat{y}_i)^2}{\sum_{i=1}^n (y_i - \bar{y})^2}$$

#### 🔍 Giải phẫu công thức qua câu chuyện "Anh chàng lười biếng":
* **$SS_{res}$ (Residual Sum of Squares):** Tổng bình phương sai số của **Mô hình học máy của bạn**.
* **$SS_{tot}$ (Total Sum of Squares):** Hãy tưởng tượng có một **"Anh chàng lười biếng"** không thèm học hành gì cả. Khi hỏi bất kỳ căn nhà nào, anh ta cũng chỉ phán đúng một câu: *"Giá bằng mức trung bình của cả khu phố $\bar{y}$"*. $SS_{tot}$ chính là tổng sai số của anh chàng lười này!
* **Phân số $\frac{SS_{res}}{SS_{tot}}$:** So sánh xem mô hình của bạn còn kém anh chàng lười biếng bao nhiêu phần trăm sai số.

```
       Sai số mô hình của bạn (SS_res)
R² = 1 - ─────────────────────────────────────
       Sai số anh lười đoán trung bình (SS_tot)
```

#### 💡 Ý nghĩa các mốc giá trị của $R^2$:
* **$R^2 = 1$:** Mô hình đoán đúng $100\%$ không lệch 1 xu ($SS_{res} = 0$).
* **$R^2 = 0.85$:** Dịch ra tiếng Việt là: *"Mô hình giải thích được $85\%$ sự biến động của giá nhà dựa vào diện tích, vị trí... Còn $15\%$ biến động còn lại là do yếu tố ngẫu nhiên ngoài đời"*.
* **$R^2 = 0$:** Mô hình của bạn đoán dở ngang ngửa với anh chàng lười biếng đoán giá trung bình!
* ⚠️ **CÂU HỎI BẪY TRẮC NGHIỆM: $R^2$ có thể bị ÂM không?**
  * 👉 **CÓ THỂ BỊ ÂM! ($R^2 < 0$)**. Đa số sinh viên nghĩ bình phương thì không âm nên tưởng $R^2 \ge 0$. Nhưng trên tập dữ liệu Test, nếu mô hình của bạn đoán quá tệ hại khiến sai số còn lớn hơn cả việc lấy trung bình ($SS_{res} > SS_{tot}$), thì phân số $> 1 \implies R^2 < 0$!

---

### 5.3 Cạm bẫy của $R^2$ & Cứu cánh Adjusted $R^2$ (Hệ số $R^2$ hiệu chỉnh)

#### ⚠️ Cạm bẫy "Ăn gian điểm số" của $R^2$:
Trong hồi quy tuyến tính, mỗi khi bạn nhét bừa thêm một đặc trưng mới vào mô hình (kể cả những biến rác rưởi vô nghĩa như: *"màu áo người mua nhà", "ngày sinh nhật chủ tịch xã"*), thì **$R^2$ luôn luôn TĂNG hoặc ít nhất là giữ nguyên, KHÔNG BAO GIỜ GIẢM!**
* *Vì sao?* Vì thuật toán OLS luôn tìm được chút tương quan ngẫu nhiên để gán một trọng số $w$ tí hon, làm giảm sai số trên tập train một chút $\to R^2$ bị thổi phồng giả tạo!

#### 🛡️ Adjusted $R^2$ - Vị cứu tinh biết trừng phạt:
$$R_{adj}^2 = 1 - \left[ \frac{(1 - R^2)(n - 1)}{n - p - 1} \right]$$
*(Trong đó: $n$ là số mẫu quan sát, $p$ là số lượng đặc trưng đưa vào mô hình)*.

* **Cơ chế trừng phạt:** Khi bạn cứ nhét thêm biến $p$ vào mô hình, mẫu số $(n - p - 1)$ sẽ bị co nhỏ lại $\to$ Làm phân số phạt phình to ra $\to$ Kéo tụt điểm $R_{adj}^2$ xuống!
* **Quy luật thưởng phạt:**
  * Nếu đưa vào một **biến thực sự hữu ích**: Mức tăng của $R^2$ đủ lớn để bù đắp tiền phạt $\implies Adjusted\ R^2$ **TĂNG**.
  * Nếu đưa vào một **biến rác vô dụng**: Hình phạt lớn hơn lợi ích $\implies Adjusted\ R^2$ **BỊ GIẢM XUỐNG**!
* 👉 **Luôn luôn có:** $Adjusted\ R^2 \le R^2$.

---

### 5.4 Ma trận nhầm lẫn (Confusion Matrix): Phân định rạch ròi TP, FP, FN, TN

Khi đánh giá bài toán phân loại nhị phân ($1$ = Dương tính / Bệnh; $0$ = Âm tính / Khỏe mạnh), ta lập ma trận $2 \times 2$:

```
                       ┌─────────────────────────┬─────────────────────────┐
                       │   THỰC TẾ DƯƠNG (y = 1) │   THỰC TẾ ÂM (y = 0)    │
┌──────────────────────┼─────────────────────────┼─────────────────────────┤
│ MÔ HÌNH ĐOÁN DƯƠNG   │  TP (True Positive)     │  FP (False Positive)    │
│  (Predict = 1)       │  Thực tế có bệnh,       │  Thực tế KHỎE MẠNH,     │
│                      │  mô hình đoán CÓ BỆNH   │  mô hình báo CÓ BỆNH    │
│                      │  👉 ĐOÁN ĐÚNG!          │  👉 BÁO ĐỘNG NHẦM       │
│                      │                         │  (Sai lầm loại I)       │
├──────────────────────┼─────────────────────────┼─────────────────────────┤
│ MÔ HÌNH ĐOÁN ÂM      │  FN (False Negative)    │  TN (True Negative)     │
│  (Predict = 0)       │  Thực tế CÓ BỆNH,       │  Thực tế khỏe mạnh,     │
│                      │  mô hình bảo KHỎE MẠNH  │  mô hình đoán KHỎE MẠNH │
│                      │  👉 BỎ SÓT NGUY HIỂM!   │  👉 ĐOÁN ĐÚNG!          │
│                      │  (Sai lầm loại II)      │                         │
└──────────────────────┴─────────────────────────┴─────────────────────────┘
```

> 💡 **Mẹo nhớ siêu nhanh không bao giờ lộn:**
> * Chữ thứ 2 (**Positive / Negative**): Là **MÔ HÌNH ĐOÁN GÌ**.
> * Chữ thứ 1 (**True / False**): Là **MÔ HÌNH ĐOÁN ĐÚNG HAY ĐOÁN SAI**.
> * *Ví dụ:* $FN$ $\to$ Chữ thứ hai là $N$ (Đoán Âm tính), chữ thứ nhất là $F$ (Đoán sai $\to$ Thực tế phải là Dương tính!).

---

### 5.5 Cạm bẫy của Accuracy trên dữ liệu mất cân bằng

$$Accuracy = \frac{TP + TN}{TP + TN + FP + FN} = \frac{\text{Tổng số ca đoán đúng}}{\text{Tổng tất cả các ca}}$$

#### ⚠️ Cú lừa thế kỷ của Accuracy:
Giả sử bạn làm mô hình chẩn đoán bệnh ung thư hiếm gặp:
* Trong $10.000$ người đến khám, chỉ có đúng **$10$ người thực sự bị bệnh ($0.1\%$)**, còn **$9.990$ người hoàn toàn khỏe mạnh ($99.9\%$)**.
* Một mô hình "ngớ ngẩn" không học hành gì cả, luôn luôn phán một câu duy nhất: *"Tất cả mọi người đều KHỎE MẠNH ($y = 0$)"*.
* Kết quả chấm điểm:
  * Nó đoán đúng $9.990$ người khỏe mạnh.
  * Độ chính xác: $Accuracy = \frac{9.990}{10.000} = 99.9\%$!
* 👉 Trên giấy tờ, điểm số $99.9\%$ cao ngất ngưởng. Nhưng trên thực tế, mô hình này **vô dụng và giết người**, vì nó bỏ sót toàn bộ $10$ bệnh nhân ung thư về nhà chờ chết!

> 🏆 **BÀI HỌC BẤM NẰM LÒNG ĐI THI:**  
> Khi dữ liệu bị mất cân bằng lớp (Imbalanced Data), **Accuracy hoàn toàn vô dụng và lừa dối**. Bắt buộc phải chuyển sang dùng **Precision, Recall và F1-Score**!

---

### 5.6 Trận chiến đánh đổi: Precision vs Recall (Khi nào ưu tiên ai?)

#### 1. Precision (Độ chuẩn xác - Độ tin cậy của lời báo)
$$Precision = \frac{TP}{TP + FP}$$
* **Ý nghĩa:** *"Trong tất cả các ca mô hình BÁO DƯƠNG TÍNH, có bao nhiêu ca THỰC SỰ DƯƠNG TÍNH?"*
* **Mục tiêu:** Càng ít $FP$ (ít báo động nhầm) thì Precision càng cao.
* **Bắt buộc ưu tiên Precision khi: Báo nhầm ($FP$) gây hậu quả tai hại hoặc chi phí rất đắt!**
  * *Ví dụ 1 (Bộ lọc Email Spam):* Dương tính = Thư rác, Âm tính = Thư bình thường. Nếu bị báo nhầm ($FP$): Thư báo trúng tuyển đại học của bạn hoặc hợp đồng khẩn cấp của sếp bị quăng nhầm vào mục Spam $\to$ Hậu quả cực kỳ tai hại! Thà để sót một vài bức thư rác vào hòm thư chính còn hơn báo nhầm thư quan trọng.
  * *Ví dụ 2 (Hệ thống gợi ý video Youtube / TikTok):* Đã gợi ý video nào lên màn hình thì video đó phải thực sự hay và chuẩn gu người xem.

#### 2. Recall (Độ nhạy / Sensitivity - Độ quét sạch ca bệnh)
$$Recall = \frac{TP}{TP + FN}$$
* **Ý nghĩa:** *"Trong tất cả các ca THỰC SỰ BỊ BỆNH NGOÀI ĐỜI, mô hình đã TÌM RA ĐƯỢC bao nhiêu ca?"*
* **Mục tiêu:** Càng ít $FN$ (ít bỏ sót) thì Recall càng cao.
* **Bắt buộc ưu tiên Recall khi: Bỏ sót ($FN$) gây hậu quả chết người hoặc thảm họa!**
  * *Ví dụ 1 (Chẩn đoán ung thư, HIV, Covid-19):* Thà nghi ngờ nhầm một người khỏe đi làm xét nghiệm sinh thiết lại ($FP$), còn hơn là bỏ sót một bệnh nhân ung thư giai đoạn đầu về nhà chờ chết ($FN$)!
  * *Ví dụ 2 (Phát hiện gian lận thẻ tín dụng / Giao dịch rửa tiền):* Thà khóa nhầm thẻ 5 phút để gọi điện xác minh, còn hơn để lọt một vụ trộm tiền tỷ.
  * *Ví dụ 3 (Hệ thống báo cháy, phát hiện khủng bố ở sân bay).*

#### ⚖️ Sự đánh đổi (Precision-Recall Trade-off):
* Muốn Recall đạt $100\%$ cực dễ: Chỉ cần mô hình phán tất cả mọi người trên thế giới đều bị ung thư $\to$ Không bao giờ bỏ sót ai ($FN = 0 \implies Recall = 100\%$), nhưng lúc này Precision sẽ sụp đổ về gần $0\%$.
* Muốn Precision đạt $100\%$ cũng dễ: Chỉ khi nào bệnh nhân có đầy đủ $100$ triệu chứng rõ như ban ngày mô hình mới dám phán ung thư $\to$ Báo ai là trúng người đó ($FP = 0 \implies Precision = 100\%$), nhưng sẽ bỏ sót hàng ngàn bệnh nhân giai đoạn ủ bệnh $\to Recall$ sụp đổ!
* 👉 Không thể cùng lúc tăng tối đa cả hai nếu mô hình không đổi.

---

### 5.7 F1-Score: Vì sao phải dùng Trung bình điều hòa (Harmonic Mean)?

$$F_1 = 2 \cdot \frac{Precision \cdot Recall}{Precision + Recall} = \frac{2TP}{2TP + FP + FN}$$

Để dung hòa giữa Precision và Recall, ta cần một chỉ số trung bình. Nhưng **tại sao không dùng trung bình cộng thông thường $\frac{Precision + Recall}{2}$?**

#### 💡 Ví dụ học sinh đi thi:
Giả sử có một mô hình cực đoan: Điểm **Precision = 100%**, nhưng điểm **Recall = 0%** (hoặc ngược lại):
* Nếu lấy **Trung bình cộng (Arithmetic Mean):**
  $$\frac{100\% + 0\%}{2} = 50\%$$
  👉 Một con số nhìn qua tưởng là "ở mức trung bình, vẫn xài tạm được", che giấu đi sự thật là mô hình đã hỏng một bên hoàn toàn!
* Nếu lấy **Trung bình điều hòa ($F_1$-Score):**
  $$F_1 = 2 \cdot \frac{100 \times 0}{100 + 0} = 0\%!$$
  👉 $F_1$ bị **kéo sập ngay lập tức về 0%!**

> 🎯 **Triết lý toán học:** Trung bình điều hòa bị chi phối mạnh mẽ bởi con số nhỏ hơn. Nó trừng phạt cực kỳ nặng nề sự mất cân đối. **Chỉ khi CẢ HAI chỉ số Precision và Recall đều cao thì $F_1$-Score mới có thể cao được!**

---

### 5.8 Macro-Average vs Micro-Average trong Phân loại đa lớp

Khi bài toán có nhiều lớp (ví dụ nhận diện: **Chó ($1000$ mẫu), Mèo ($900$ mẫu), Gà ($10$ mẫu - lớp hiếm)**):

#### 1. Macro-Average (Trung bình vĩ mô - "Công bằng xã hội"):
* Tính Precision riêng cho Chó, Mèo, Gà: $P_{\text{Chó}}, P_{\text{Mèo}}, P_{\text{Gà}}$.
* Lấy trung bình cộng giản đơn:
  $$P_{\text{Macro}} = \frac{P_{\text{Chó}} + P_{\text{Mèo}} + P_{\text{Gà}}}{3}$$
* **Đặc tính:** Mỗi lớp đều có **trọng số ngang nhau ($1/3$)**, bất kể lớp Gà chỉ có vỏn vẹn $10$ con.
* 👉 **Dùng khi:** Bạn quan tâm đến việc mô hình có làm tốt trên **lớp thiểu số** (lớp ít dữ liệu) hay không.

#### 2. Micro-Average (Trung bình vi mô - "Đa số thắng thiểu số"):
* Gom chung tất cả các ca trên toàn bộ dữ liệu lại tính một lần:
  $$P_{\text{Micro}} = \frac{TP_{\text{Chó}} + TP_{\text{Mèo}} + TP_{\text{Gà}}}{(TP_{\text{Chó}} + \dots) + (FP_{\text{Chó}} + \dots)}$$
* **Đặc tính:** Vì lớp Chó và Mèo có số lượng mẫu áp đảo ($1000$ và $900$), chúng sẽ **thao túng toàn bộ điểm số**. Dù mô hình có đoán sai bét toàn bộ $10$ con gà, Micro-Average vẫn có thể đạt trên $95\%$!
* 👉 **Dùng khi:** Bạn chỉ quan tâm đến hiệu năng tổng thể trên toàn bộ tập mẫu mà không phân biệt lớp hiếm.

---

### 5.9 Chốt lại 6 câu hỏi trắc nghiệm chắc chắn gặp về Thước đo đánh giá

1. **Câu hỏi:** Trong bài toán chẩn đoán tế bào ung thư ác tính, thước đo nào quan trọng nhất cần tối đa hóa?
   * 👉 **Đáp án:** **Recall (Độ nhạy)**, vì không thể chấp nhận việc bỏ sót ca ung thư ($FN$).
2. **Câu hỏi:** Trong bài toán lọc thư rác (Spam Filter), thước đo nào được ưu tiên hơn?
   * 👉 **Đáp án:** **Precision**, vì tránh việc đưa nhầm email quan trọng của người dùng vào hộp thư rác ($FP$).
3. **Câu hỏi:** Khi nhét thêm một biến ngẫu nhiên vô dụng vào mô hình hồi quy tuyến tính, chỉ số $R^2$ và $Adjusted\ R^2$ thay đổi như thế nào?
   * 👉 **Đáp án:** $R^2$ **tăng hoặc giữ nguyên**, còn $Adjusted\ R^2$ **sẽ bị giảm xuống**.
4. **Câu hỏi:** Hệ số xác định $R^2$ có thể nhận giá trị âm không?
   * 👉 **Đáp án:** **Có**, xảy ra khi mô hình dự đoán tệ hơn cả việc lấy giá trị trung bình $\bar{y}$.
5. **Câu hỏi:** Tại sao $F_1$-Score lại dùng trung bình điều hòa thay vì trung bình cộng?
   * 👉 **Đáp án:** Để phạt nặng sự mất cân bằng giữa Precision và Recall; $F_1$ chỉ cao khi cả hai cùng cao.
6. **Câu hỏi:** Trên tập dữ liệu mất cân bằng nghiêm trọng ($99\%$ mẫu Âm, $1\%$ mẫu Dương), thước đo nào dễ gây hiểu lầm nhất?
   * 👉 **Đáp án:** **Accuracy (Độ chính xác tổng thể)**.

---

# PHẦN 6: GIAO THỨC CHIA DỮ LIỆU & BẪY DATA LEAKAGE

---

### 6.1 Stratified Split (Chia phân tầng): Công bằng cho lớp thiểu số

Khi chia tập dữ liệu thành Train và Test, cách đơn giản nhất là bốc ngẫu nhiên (Random Split). 

#### ⚠️ Nguy cơ của bốc ngẫu nhiên:
Giả sử dữ liệu có $95\%$ giao dịch bình thường và $5\%$ giao dịch lừa đảo:
* Do tính ngẫu nhiên, hoàn toàn có thể xảy ra trường hợp: Tập Test xui xẻo rút trúng toàn bộ $100\%$ giao dịch bình thường, không có một giao dịch lừa đảo nào!
* Kết quả là tập Test không thể đánh giá được khả năng bắt lừa đảo của mô hình.

#### 🛡️ Giải pháp: Stratified Split (Chia phân tầng)
* **Quy tắc:** Bắt buộc phải **giữ nguyên tỷ lệ các lớp** giống hệt nhau ở cả tập Train và tập Test.
* Nếu tập gốc là $95\% - 5\%$ thì tập Train cũng phải là $95\% - 5\%$, và tập Test cũng bắt buộc phải là $95\% - 5\%$.
* 👉 **Bắt buộc áp dụng khi làm việc với tập dữ liệu mất cân bằng (Imbalanced Data)**.

---

### 6.2 K-Fold Cross-Validation & Leave-One-Out (LOO)

Nếu chỉ chia dữ liệu 1 lần thành Train và Test, kết quả đánh giá phụ thuộc rất nhiều vào "may rủi" (lỡ tập Test bốc trúng những ca quá dễ hoặc quá khó).

```
Dữ liệu gốc chia làm K = 5 phần (folds):
Lượt 1: [ Test ] [ Fold 2 ] [ Fold 3 ] [ Fold 4 ] [ Fold 5 ] ──► Đánh giá điểm 1
Lượt 2: [ Fold 1 ] [ Test ] [ Fold 3 ] [ Fold 4 ] [ Fold 5 ] ──► Đánh giá điểm 2
Lượt 3: [ Fold 1 ] [ Fold 2 ] [ Test ] [ Fold 4 ] [ Fold 5 ] ──► Đánh giá điểm 3
Lượt 4: [ Fold 1 ] [ Fold 2 ] [ Fold 3 ] [ Test ] [ Fold 5 ] ──► Đánh giá điểm 4
Lượt 5: [ Fold 1 ] [ Fold 2 ] [ Fold 3 ] [ Fold 4 ] [ Test ] ──► Đánh giá điểm 5
👉 Điểm số cuối cùng = Trung bình cộng của 5 lượt đánh giá!
```

* **Ưu điểm:** Mọi mẫu dữ liệu đều được làm bài thi đúng 1 lần và được dùng để học $K-1$ lần $\to$ Đánh giá cực kỳ khách quan và ổn định.
* **Leave-One-Out (LOO):** Là trường hợp cực đoan của K-Fold khi chọn **$K = n$ (bằng đúng số lượng mẫu)**:
  * Ví dụ có $100$ bệnh nhân: Mỗi lần lấy $99$ người để học và test đúng **$1$ người duy nhất**. Lặp lại $100$ lần!
  * Ưu điểm: Tận dụng tối đa dữ liệu. Nhược điểm: **Cực kỳ tốn kém thời gian và năng lực tính toán** (phải huấn luyện lại mô hình $n$ lần).

---

### 6.3 Hiện tượng Data Leakage (Rò rỉ dữ liệu) - BẪY THI KINH ĐIỂN

**Data Leakage (Rò rỉ dữ liệu)** là hiện tượng thông tin từ tập Validation/Test (tương lai) bị **"lọt" vào quá trình huấn luyện của tập Train**.

#### 🏫 Ví dụ đời thường:
Giống như bạn đi thi đại học:
* Cô giáo vô tình lấy đúng **10 câu trong đề thi thật** cho bạn làm thử trong lúc ôn tập.
* Kết quả: Bạn đi thi đạt điểm $10$ tuyệt đối. Nhưng đó là điểm số "ảo", kiến thức thực tế của bạn không giỏi như vậy! Khi ra đời gặp các vấn đề mới, bạn sẽ thất bại thảm hại.

#### ⚠️ Bẫy trắc nghiệm kinh điển về quy trình Chuẩn hóa dữ liệu (StandardScaler):

* ❌ **Quy trình SAI LẦM (Bị lỗi Data Leakage - 0 điểm):**
  1. Lấy toàn bộ dữ liệu hiện có tính Giá trị trung bình ($\mu$) và Độ lệch chuẩn ($\sigma$).
  2. Dùng $\mu$ và $\sigma$ đó để chuẩn hóa toàn bộ tập dữ liệu.
  3. Chia dữ liệu thành tập Train và tập Test $\to$ Cho mô hình học trên Train.
  👉 **LỖI:** Vì giá trị $\mu$ và $\sigma$ đã mang theo thông tin của tập Test lọt vào tập Train ngay từ đầu!

* ✅ **Quy trình CHUẨN ĐÚNG:**
  1. **Chia dữ liệu thành Train và Test TRƯỚC TIÊN.**
  2. **CHỈ TÍNH** giá trị trung bình $\mu_{\text{train}}$ và độ lệch chuẩn $\sigma_{\text{train}}$ **trên riêng tập Train** (`fit`).
  3. Dùng đúng bộ $\mu_{\text{train}}$ và $\sigma_{\text{train}}$ đó để chuyển đổi (`transform`) cho cả tập Train VÀ tập Test!
  👉 Tập Test phải hoàn toàn "mù" đối với mô hình cho đến phút chót kiểm tra!

---

### 6.4 Chốt lại 4 câu hỏi trắc nghiệm chắc chắn gặp về Chia dữ liệu

1. **Câu hỏi:** Kỹ thuật chia dữ liệu nào đảm bảo tỷ lệ các lớp trong tập con giống hệt tập dữ liệu ban đầu?
   * 👉 **Đáp án:** **Stratified Split (Chia phân tầng)**.
2. **Câu hỏi:** Kỹ thuật Leave-One-Out (LOO) Cross-Validation tương ứng với K-Fold khi $K$ bằng bao nhiêu?
   * 👉 **Đáp án:** Khi **$K = n$** (với $n$ là tổng số mẫu của tập dữ liệu).
3. **Câu hỏi:** Nhược điểm lớn nhất của phương pháp Leave-One-Out (LOO) là gì?
   * 👉 **Đáp án:** Chi phí tính toán cực kỳ cao (Computationally expensive) vì phải huấn luyện mô hình $n$ lần.
4. **Câu hỏi:** Để tránh hiện tượng Data Leakage khi tiền xử lý dữ liệu (chuẩn hóa Min-Max, Standard Scaler), ta phải làm gì?
   * 👉 **Đáp án:** **Chia tập Train/Test trước**, và chỉ tính toán các tham số thống kê ($\mu, \sigma, \min, \max$) trên **tập Train**.

