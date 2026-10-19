# 🧠 TỔNG HỢP CHI TIẾT TOÀN BỘ GIẢI THÍCH TRỰC QUAN BẢN CHẤT CHƯƠNG 4: CÂY QUYẾT ĐỊNH VÀ ENSEMBLE LEARNING
> **Tài liệu gốc:** [04_Note_Chuong_4_Cay_Quyet_Dinh_Va_Ensemble.md](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/%C3%B4n%20t%E1%BA%ADp%2021-10/04_Note_Chuong_4_Cay_Quyet_Dinh_Va_Ensemble.md)  
> **Slide bài giảng:** [Chuong-4-Cay-quyet-dinh-va-Ensemble-Learning.pdf](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/Chuong-4-Cay-quyet-dinh-va-Ensemble-Learning.pdf) (116 trang)  
> **Phương pháp học:** Tư duy trực quan, ví dụ đời thường, giải phẫu công thức toán học, sơ đồ ASCII và trọng tâm các bẫy trắc nghiệm phòng thi 21-10.

---

# MỤC LỤC CHI TIẾT
1. [PHẦN 1: BẢN CHẤT CÂY QUYẾT ĐỊNH (DECISION TREE)](#phần-1-bản-chất-cây-quyết-định-decision-tree)
   - [1.1 Cấu trúc giải phẫu: Nút gốc, Nút trong, Nhánh và Nút lá](#11-cấu-trúc-giải-phẫu-nút-gốc-nút-trong-nhánh-và-nút-lá)
   - [1.2 Bản chất hình học: Phân hoạch siêu hộp trực giao](#12-bản-chất-hình-học-phân-hoạch-siêu-hộp-trực-giao)
   - [1.3 Tập luật logic Nếu - Thì (If - Then Rules)](#13-tập-luật-logic-nếu---thì-if---then-rules)
   - [1.4 Ưu điểm số 1: Vì sao Cây quyết định KHÔNG CẦN CHUẨN HÓA DỮ LIỆU?](#14-ưu-điểm-số-1-vì-sao-cây-quyết-định-không-cần-chuẩn-hóa-dữ-liệu)
   - [1.5 Nhược điểm chí mạng: Bất ổn định và Quá khớp (High Variance)](#15-nhược-điểm-chí-mạng-bất-ổn-định-và-quá-khớp-high-variance)
2. [PHẦN 2: CÁC TIÊU CHÍ PHÂN CHIA NHÁNH (ENTROPY, INFORMATION GAIN & GINI)](#phần-2-các-tiêu-chí-phân-chia-nhánh-entropy-information-gain--gini)
   - [2.1 Trực giác "Độ thuần khiết" (Purity) vs "Độ hỗn tạp" (Impurity)](#21-trực-giác-độ-thuần-khiết-purity-vs-độ-hỗn-tạp-impurity)
   - [2.2 Shannon Entropy: Giải mã công thức, dấu âm, cơ số 2 và 2 mốc cực trị](#22-shannon-entropy-giải-mã-công-thức-dấu-âm-cơ-số-2-và-2-mốc-cực-trị)
   - [2.3 Information Gain (ID3): Giảm độ hỗn loạn và Bẫy phân mảnh đặc trưng](#23-information-gain-id3-giảm-độ-hỗn-loạn-và-bẫy-phân-mảnh-đặc-trưng)
   - [2.4 Gini Impurity (CART): Trực giác xác suất bốc sai nhãn & 2 mốc cực trị](#24-gini-impurity-cart-trực-giác-xác-suất-bốc-sai-nhãn--2-mốc-cực-trị)
   - [2.5 Bảng so sánh 1-1: ID3 (Entropy) vs CART (Gini)](#25-bảng-so-sánh-1-1-id3-entropy-vs-cart-gini)
   - [2.6 Mẹo bấm máy tính Casio tính nhanh Entropy trong phòng thi](#26-mẹo-bấm-máy-tính-casio-tính-nhanh-entropy-trong-phòng-thi)
3. [PHẦN 3: VÍ DỤ BÀI TOÁN GOLF KINH ĐIỂN (SLIDE TRANG 32 – 41)](#phần-3-ví-dụ-bài-toán-golf-kinh-điển-slide-trang-32--41)
   - [3.1 Dữ liệu bài toán & Con số vàng $H(S) = 0.940$](#31-dữ-liệu-bài-toán--con-số-vàng-hs--0940)
   - [3.2 Cuộc đua giành ngôi Nút Gốc: Phép tính chi tiết thuộc tính Outlook](#32-cuộc-đua-giành-ngôi-nút-gốc-phép-tính-chi-tiết-thuộc-tính-outlook)
   - [3.3 Xử lý từng nhánh con: Tại sao Overcast dừng ngay? Xử lý Sunny & Rain](#33-xử-lý-từng-nhánh-con-tại-sao-overcast-dừng-ngay-xử-lý-sunny--rain)
   - [3.4 Cây quyết định hoàn chỉnh & Vì sao Temperature bị gạch tên?](#34-cây-quyết-định-hoàn-chỉnh--vì-sao-temperature-bị-gạch-tên)
4. [PHẦN 4: QUÁ KHỚP Ở CÂY SÂU & KỸ THUẬT CẮT TỈA (PRUNING)](#phần-4-quá-khớp-ở-cây-sâu--kỹ-thuật-cắt-tỉa-pruning)
   - [4.1 Hiện tượng Quá khớp (Overfitting / High Variance) khi cây mọc tự do](#41-hiện-tượng-quá-khớp-overfitting--high-variance-khi-cây-mọc-tự-do)
   - [4.2 Tiền cắt tỉa (Pre-pruning / Dừng sớm)](#42-tiền-cắt-tỉa-pre-pruning--dừng-sớm)
   - [4.3 Hậu cắt tỉa (Post-pruning / Cost-Complexity Pruning)](#43-hậu-cắt-tỉa-post-pruning--cost-complexity-pruning)
5. [PHẦN 5: ENSEMBLE LEARNING (HỌC KẾT HỢP) — TRỌNG TÂM THI CỬ](#phần-5-ensemble-learning-học-kết-hợp--trọng-tâm-thi-cử)
   - [5.1 Triết lý hội đồng & 3 điều kiện bắt buộc để Ensemble có hiệu quả](#51-triết-lý-hội-đồng--3-điều-kiện-bắt-buộc-để-ensemble-có-hiệu-quả)
   - [5.2 Hard Voting vs Soft Voting (Vì sao Soft Voting luôn vượt trội?)](#52-hard-voting-vs-soft-voting-vì-sao-soft-voting-luôn-vượt-trội)
   - [5.3 BAGGING (Bootstrap Aggregating) & RANDOM FOREST](#53-bagging-bootstrap-aggregating--random-forest)
     - A. Kỹ thuật Lấy mẫu Bootstrap (Bootstrap Sampling)
     - B. Mẫu Out-Of-Bag (OOB): Chứng minh toán học $\lim (1 - 1/n)^n = 1/e \approx 36.8\%$
     - C. Random Forest: "Tuyệt chiêu" Feature Subsampling giải trừ tương quan
     - D. Extra Trees (Extremely Randomized Trees)
   - [5.4 BOOSTING (AdaBoost & Gradient Boosting)](#54-boosting-adaboost--gradient-boosting)
     - A. Triết lý học tuần tự từ sai lầm (Sequential) & Weak Learners (Decision Stumps)
     - B. AdaBoost (Adaptive Boosting): Chấm điểm mô hình $\alpha_j$ & Trừng phạt mẫu đoán sai
     - C. Gradient Boosting (GBM): Khớp vào phần dư (Pseudo-residuals) & Tốc độ học $\eta$
     - D. Hệ sinh thái hiện đại: XGBoost, LightGBM, CatBoost
6. [PHẦN 6: BẢNG SO SÁNH "SỐNG CÒN": BAGGING VS BOOSTING](#phần-6-bảng-so-sánh-sống-còn-bagging-vs-boosting)
   - [6.1 Ma trận đối chiếu 6 chiều toàn diện](#61-ma-trận-đối-chiếu-6-chiều-toàn-diện)
   - [6.2 Tuyển tập 10 câu hỏi trắc nghiệm "tủ" chắc chắn gặp trong phòng thi](#62-tuyển-tập-10-câu-hỏi-trắc-nghiệm-tủ-chắc-chắn-gặp-trong-phòng-thi)

---

# PHẦN 1: BẢN CHẤT CÂY QUYẾT ĐỊNH (DECISION TREE)

---

### 1.1 Cấu trúc giải phẫu: Nút gốc, Nút trong, Nhánh và Nút lá
📍 **[Slide Trang 4 – 17]**

Cây quyết định là một đồ thị phân cấp có cấu trúc ngược so với cây tự nhiên (rễ nằm ở trên đỉnh, tán lá hướng xuống dưới):

```
                   ┌─────────────────────────┐
                   │   NÚT GỐC (Root Node)   │  ◄── Chứa 100% dữ liệu huấn luyện
                   │       Tuổi > 30?        │
                   └────────────┬────────────┘
                         Đúng  / \  Sai
                              /   \
        ┌────────────────────┘     └────────────────────┐
        ▼                                               ▼
┌───────────────┐                               ┌───────────────┐
│ NÚT TRONG     │                               │ NÚT LÁ (Leaf) │
│ Thu nhập > 20tr?│                              │  Mua xe = NO  │ ◄── Nơi kết luận
└───┬───────┬───┘                               └───────────────┘
    │Đúng   │Sai
    ▼       ▼
 ┌─────┐ ┌─────┐
 │(YES)│ │(NO) │  ◄── Các nút lá tận cùng
 └─────┘ └─────┘
```

1. **Nút gốc (Root Node):** Nút trên cùng, chứa toàn bộ tập dữ liệu huấn luyện $S$. Tại đây diễn ra phép kiểm tra điều kiện quan trọng nhất trên một đặc trưng để tách đôi/tách ba dữ liệu.
2. **Nút trong (Internal Node):** Nút trung gian, tiếp tục kiểm tra điều kiện logic trên các đặc trưng khác (`Huyết áp cao?`, `Thu nhập > 20 triệu?`).
3. **Nhánh (Branch):** Đại diện cho một giá trị hoặc một khoảng giá trị đầu ra của phép kiểm tra (ví dụ: `Đúng` / `Sai`, hoặc `Thấp` / `Trung bình` / `Cao`).
4. **Nút lá (Leaf Node):** Điểm dừng cuối cùng của đường đi. Nút lá không chia nhánh nữa mà đưa ra quyết định:
   * **Cây phân loại (Classification Tree):** Dự đoán nhãn lớp chiếm đa số hoặc phân phối xác suất các lớp trong lá đó.
   * **Cây hồi quy (Regression Tree):** Dự đoán **giá trị trung bình cộng** $\bar{y} = \frac{1}{|S_{\text{lá}}|} \sum_{i \in S_{\text{lá}}} y_i$ của các mẫu rơi vào lá.

---

### 1.2 Bản chất hình học: Phân hoạch siêu hộp trực giao
📍 **[Slide Trang 27 – 31]**

Khác với Hồi quy Logistic hay SVM tạo ra một đường thẳng/mặt phẳng nghiêng mượt mà chéo qua không gian:
* Cây quyết định chỉ kiểm tra từng đặc trưng một tại mỗi bước ($x_j \le t$).
* Vì vậy, ranh giới quyết định (Decision Boundary) của cây luôn luôn là **những đường gấp khúc vuông góc song song với các trục tọa độ**.
* Trong không gian nhiều chiều, cây chia không gian thành các **siêu hộp chữ nhật trực giao (Orthogonal Hyper-rectangles)**.

```
 Đặc trưng X2
      ▲
      │                 Vùng A (Lớp 1)
   t2 ┼──────────────┬──────────────────
      │              │
      │  Vùng B      │  Vùng C (Lớp 1)
      │  (Lớp 2)     │
      └──────────────┴──────────────────► Đặc trưng X1
                     t1
  (Ranh giới luôn vuông góc với các trục tọa độ, không bao giờ là đường chéo nghiêng!)
```

---

### 1.3 Tập luật logic Nếu - Thì (If - Then Rules)

Mỗi đường đi từ Nút gốc đến một Nút lá cụ thể tạo thành một **luật suy diễn logic If - Then** cực kỳ minh bạch và dễ giải thích (Explainable AI):
* Các điều kiện dọc đường đi được kết hợp bằng phép hội logic **VÀ (AND)**.
* Các nút lá khác nhau kết hợp với nhau bằng phép tuyển logic **HOẶC (OR)**.
* *Ví dụ:* `NẾU (Tuổi > 30) VÀ (Thu nhập > 20 triệu) THÌ Mua xe = YES`.

---

### 1.4 Ưu điểm số 1: Vì sao Cây quyết định KHÔNG CẦN CHUẨN HÓA DỮ LIỆU?
📍 **[Slide Trang 56 – 58]** — ⚠️ **BẪY TRẮC NGHIỆM KINH ĐIỂN!**

Trong các mô hình tuyến tính (OLS, Logistic, Ridge, Lasso) hoặc KNN, SVM, mạng nơ-ron, nếu không chuẩn hóa thang đo ($Scale$), biến có giá trị lớn (như Thu nhập: triệu đồng) sẽ lấn át hoàn toàn biến nhỏ (như Số con: 1, 2).

Nhưng với Cây Quyết Định:
* Thuật toán chỉ sắp xếp các giá trị của từng đặc trưng theo thứ tự tăng dần để quét tìm vị trí chia cắt $x_j \le t$ tốt nhất.
* Phép biến đổi đơn điệu (nhân với $1.000.000$, lấy $\log$, cộng thêm $100$) **hoàn toàn không làm thay đổi thứ tự sắp xếp của dữ liệu**!
* 👉 **Do đó, Cây quyết định hoàn toàn MIỄN NHIỄM với độ lớn của thang đo (Invariant to Monotonic Transformations). Bạn không cần Normalization hay Standardization!**

---

### 1.5 Nhược điểm chí mạng: Bất ổn định và Quá khớp (High Variance)
1. **Tính bất ổn định cao (High Instability):** Vì cây học theo cấu trúc tham lam từ trên xuống, chỉ cần một biến động nhỏ (thêm/bớt vài mẫu dữ liệu), đặc trưng chọn ở nút gốc có thể bị đổi sang đặc trưng khác, kéo theo **toàn bộ các nhánh bên dưới bị đảo lộn hoàn toàn**!
2. **Căn bệnh Quá khớp (High Variance):** Cây mọc càng sâu thì chia cắt không gian càng vụn vặt, bắt chước từng điểm nhiễu trong tập Train $\to$ Đây là lý do ra đời kỹ thuật **Cắt tỉa (Pruning)** và phương pháp kết hợp **Random Forest**.

---

# PHẦN 2: CÁC TIÊU CHÍ PHÂN CHIA NHÁNH (ENTROPY, INFORMATION GAIN & GINI)
📍 **[Slide Trang 18 – 26, 42 – 45]**

---

### 2.1 Trực giác "Độ thuần khiết" (Purity) vs "Độ hỗn tạp" (Impurity)

Hãy tưởng tượng bạn có 3 chiếc hộp đựng 10 viên bi (Đỏ và Xanh):
* **Hộp A:** 10 viên Đỏ, 0 viên Xanh $\to$ **Thuần khiết 100% (Pure)**. Nhắm mắt bốc ra chắc chắn 100% là bi Đỏ, không có sự bất ngờ $\implies$ **Độ hỗn tạp (Impurity) = 0**.
* **Hộp B:** 9 viên Đỏ, 1 viên Xanh $\to$ Khá thuần khiết, rủi ro bốc trúng bi Xanh rất thấp $\implies$ **Độ hỗn tạp rất nhỏ**.
* **Hộp C:** 5 viên Đỏ, 5 viên Xanh $\to$ **Hỗn loạn cực đại**. Khả năng bốc trúng Đỏ hay Xanh là 50-50 (như tung đồng xu), bạn bối rối nhất $\implies$ **Độ hỗn tạp đạt CỰC ĐẠI**.

> 💡 **Sứ mệnh của thuật toán:** Tìm thuộc tính phân nhánh sao cho các nút con sinh ra càng gần với **Hộp A** càng tốt và tránh xa **Hộp C**!

---

### 2.2 Shannon Entropy: Giải mã công thức, dấu âm, cơ số 2 và 2 mốc cực trị

Được Claude Shannon đặt nền móng trong Lý thuyết thông tin (1948) để đo độ bất ngờ / độ hỗn loạn của một phân phối:

$$H(S) = - \sum_{k=1}^C p_k \log_2(p_k)$$

*(Trong đó $p_k$ là tỷ lệ mẫu thuộc lớp $k$ trong nút $S$. Quy ước: $0 \log_2 0 = 0$)*.

#### 🔍 Giải phẫu chi tiết công thức toán:
1. **Tại sao có dấu trừ $(-)$ phía trước?**
   * Vì $p_k \in (0, 1] \implies \log_2(p_k) \le 0$ (luôn luôn là số âm). Dấu trừ triệt tiêu số âm đó để **Entropy luôn luôn $\ge 0$**.
2. **Tại sao lại dùng cơ số 2 ($\log_2$)?**
   * Trong máy tính, cơ số 2 đo lượng thông tin bằng đơn vị **bit** (nhị phân 0 và 1). Một câu hỏi nhị phân Có/Không chứa tối đa 1 bit thông tin.

#### 🎯 Hai trạng thái cực trị "sống còn" khi thi cử (Xét bài toán 2 lớp):
```
Entropy H(S)
   1.0 ┼               ╭───────╮
       │             ╭╯         ╰╮
       │           ╭╯             ╰╮
   0.5 │         ╭╯                 ╰╮
       │       ╭╯                     ╰╮
   0.0 ┼───────┴───────────────────────┴───────
      p=0.0                  p=0.5           p=1.0  (Tỷ lệ lớp 1)
   (Thuần khiết)          (Hỗn tạp max)   (Thuần khiết)
```

* **Trạng thái thuần khiết 100% ($p_1 = 1, p_2 = 0$):**
  $$H(S) = - (1 \log_2 1 + 0) = \mathbf{0.0}$$
* **Trạng thái hỗn tạp cực đại ($p_1 = 0.5, p_2 = 0.5$):**
  $$H(S) = - (0.5 \log_2 0.5 + 0.5 \log_2 0.5) = - (0.5 \times (-1) + 0.5 \times (-1)) = \mathbf{1.0\text{ bit}}$$

---

### 2.3 Information Gain (ID3): Giảm độ hỗn loạn và Bẫy phân mảnh đặc trưng

Thuật toán **ID3** dùng thước đo **Information Gain ($IG$)** để quyết định thuộc tính nào được chọn:

$$IG(S, A) = H(S) - H(S|A)$$

* **$H(S)$:** Độ hỗn loạn của nút cha ban đầu.
* **$H(S|A)$:** Độ hỗn loạn trung bình có trọng số của các nút con sau khi chia theo thuộc tính $A$:
  $$H(S|A) = \sum_{v \in Values(A)} \frac{|S_v|}{|S|} H(S_v)$$
  *(Trong đó $\frac{|S_v|}{|S|}$ là tỷ lệ số mẫu rơi vào nhánh con $v$ so với tổng số mẫu của nút cha)*.

👑 **Quy tắc phân nhánh:** Thuộc tính nào có **$IG$ LỚN NHẤT** sẽ được chọn để phân nhánh!

#### ⚠️ BẪY THI KINH ĐIỂN CỦA INFORMATION GAIN:
* **Hiện tượng thiên vị đặc trưng phân mảnh:** Information Gain có xu hướng chọn các thuộc tính có quá nhiều giá trị riêng biệt (như mã `MSSV`, `Số CMND`, `Số điện thoại`).
* *Tại sao?* Nếu chia theo `MSSV`, mỗi nhánh con chỉ có đúng 1 sinh viên $\to$ Mọi nhánh con đều có $H(S_v) = 0$ (thuần khiết 100%) $\implies IG$ bùng nổ lên giá trị cực đại! Cây chia thành hàng nghìn nhánh vụn vặt, hoàn toàn vô dụng trên dữ liệu mới.
* 👉 **Khắc phục:** Thuật toán **C4.5** ra đời dùng **Gain Ratio**:
  $$\text{Gain Ratio}(S, A) = \frac{IG(S, A)}{\text{SplitInfo}(S, A)}$$
  *(Trong đó $\text{SplitInfo}$ đóng vai trò như một khoản phạt nếu thuộc tính bị chia ra quá nhiều nhánh)*.

---

### 2.4 Gini Impurity (CART): Trực giác xác suất bốc sai nhãn & 2 mốc cực trị

Thuật toán **CART** chuyển sang dùng **Gini Impurity** để tránh việc tính toán logarit tốn CPU.

#### 🎲 Trực giác xác suất đời thường:
> Giả sử bạn nhắm mắt bốc ngẫu nhiên một mẫu trong nút, rồi đoán mò nhãn của nó dựa đúng theo phân bố xác suất của các lớp trong nút đó. **Xác suất bạn đoán SAI chính là Gini Impurity!**

$$Gini(S) = 1 - \sum_{k=1}^C p_k^2$$

#### 🎯 Hai trạng thái cực trị đối với bài toán 2 lớp:
1. **Thuần khiết 100% ($p_1 = 1, p_2 = 0$):**
   $$Gini(S) = 1 - (1^2 + 0^2) = \mathbf{0.0}$$
2. **Hỗn tạp cực đại ($p_1 = 0.5, p_2 = 0.5$):**
   $$Gini(S) = 1 - (0.5^2 + 0.5^2) = 1 - (0.25 + 0.25) = \mathbf{0.5}$$
   * ⚠️ **So sánh thi cử:** Cực đại của Entropy (2 lớp) là **$1.0$**, trong khi cực đại của Gini chỉ là **$0.5$**!

#### Phép chia nhị phân với Gini trong CART:
CART luôn chia thành đúng **2 nhánh (Trái và Phải)**:
$$Gini_{split} = \frac{n_{\text{trái}}}{n} Gini(\text{trái}) + \frac{n_{\text{phải}}}{n} Gini(\text{phải})$$
👉 CART chọn phép chia tạo ra **$Gini_{split}$ NHỎ NHẤT** (vì vẩn đục càng nhỏ thì càng sạch).

---

### 2.5 Bảng so sánh 1-1: ID3 (Entropy) vs CART (Gini)

| Tiêu chí | ID3 (Quinlan) | CART (Breiman) |
| :--- | :--- | :--- |
| **Tiêu chí tối ưu** | **Information Gain (Entropy)** | **Gini Impurity** (Phân loại) / Variance (Hồi quy) |
| **Công thức đo** | $- \sum p_k \log_2 p_k$ | $1 - \sum p_k^2$ |
| **Cực đại (2 lớp)** | **$1.0$** | **$0.5$** |
| **Kiểu phân nhánh** | **Đa nhánh (Multi-way split)** theo danh mục | **Luôn luôn chia nhị phân (Binary split: Đúng 2 nhánh)** |
| **Tốc độ tính toán** | Chậm hơn (vướng hàm $\log_2$) | **Rất nhanh** (chỉ có cộng, trừ, bình phương) |
| **Hỗ trợ Hồi quy** | Không | **Có** (Hỗ trợ cả Classification và Regression) |
| **Thư viện Sklearn** | Không tích hợp trực tiếp | `DecisionTreeClassifier` trong Sklearn mặc định dùng **CART (Gini)**! |

---

### 2.6 Mẹo bấm máy tính Casio tính nhanh Entropy trong phòng thi

Khi làm bài trắc nghiệm gặp nút có $a$ mẫu lớp 1 và $b$ mẫu lớp 2 (tổng $n = a + b$):
Thay vì viết công thức dài dòng, hãy nhập trực tiếp vào máy tính Casio:
$$-\left( \frac{a}{n} \times \frac{\ln(a/n)}{\ln 2} + \frac{b}{n} \times \frac{\ln(b/n)}{\ln 2} \right)$$
*(Hoặc dùng trực tiếp phím $\log_{\Box}(\Box)$ cơ số 2 nếu dòng máy Casio fx-580VNX có sẵn).*

---

# PHẦN 3: VÍ DỤ BÀI TOÁN GOLF KINH ĐIỂN
📍 **[Slide Trang 32 – 41]**

---

### 3.1 Dữ liệu bài toán & Con số vàng $H(S) = 0.940$

Tập dữ liệu gồm **$14$ ngày** ghi nhận thời tiết để quyết định chơi Golf ($Play$):
* **4 đặc trưng:** `Outlook` (Sunny, Overcast, Rain), `Temperature` (Hot, Mild, Cool), `Humidity` (High, Normal), `Wind` (Weak, Strong).
* **Nhãn $y$ (`Play`):** 9 ngày **Yes** và 5 ngày **No** $\implies S = [9+, 5-]$.

#### Bước 1: Tính Entropy của Nút Gốc
$$H(S) = - \left[ \frac{9}{14} \log_2\left(\frac{9}{14}\right) + \frac{5}{14} \log_2\left(\frac{5}{14}\right) \right] \approx \mathbf{0.940\text{ bit}}$$

> 💡 **Con số vàng:** Cứ thấy bài toán 14 mẫu gồm 9 Yes và 5 No thì Entropy gốc chắc chắn là **$0.940$**!

---

### 3.2 Cuộc đua giành ngôi Nút Gốc: Phép tính chi tiết thuộc tính Outlook

Thuật toán thử chia theo từng đặc trưng để tính $IG$:

#### Xét thuộc tính `Outlook` (có 3 giá trị: Sunny, Overcast, Rain):
1. **Nhánh `Sunny` (5 ngày: 2 Yes, 3 No):**
   $$H(S_{\text{Sunny}}) = - \left( \frac{2}{5} \log_2 \frac{2}{5} + \frac{3}{5} \log_2 \frac{3}{5} \right) \approx \mathbf{0.971}$$
2. **Nhánh `Overcast` (4 ngày: 4 Yes, 0 No) — Thuần khiết 100%:**
   $$H(S_{\text{Overcast}}) = - (1 \log_2 1 + 0) = \mathbf{0.0}$$
3. **Nhánh `Rain` (5 ngày: 3 Yes, 2 No):**
   $$H(S_{\text{Rain}}) = - \left( \frac{3}{5} \log_2 \frac{3}{5} + \frac{2}{5} \log_2 \frac{2}{5} \right) \approx \mathbf{0.971}$$

#### Entropy có trọng số sau khi chia theo `Outlook`:
$$H(S|\text{Outlook}) = \frac{5}{14}(0.971) + \frac{4}{14}(0.0) + \frac{5}{14}(0.971) \approx \mathbf{0.693}$$

#### Information Gain của `Outlook`:
$$IG(S, \text{Outlook}) = H(S) - H(S|\text{Outlook}) = 0.940 - 0.693 = \mathbf{0.247 \approx 0.25}$$

#### 📊 Bảng so sánh 4 thuộc tính ứng viên:
* $IG(S, \text{Outlook}) \approx \mathbf{0.247}$ 🥇 **(Cao nhất $\to$ Chọn làm NÚT GỐC)**
* $IG(S, \text{Humidity}) \approx 0.151$ 🥈
* $IG(S, \text{Wind}) \approx 0.048$ 🥉
* $IG(S, \text{Temperature}) \approx 0.029$ ⚠️ (Thấp nhất)

---

### 3.3 Xử lý từng nhánh con: Tại sao Overcast dừng ngay? Xử lý Sunny & Rain

Từ nút gốc `Outlook`, 3 nhánh con được mở ra:
1. **Nhánh `Outlook == Overcast`:** Có 4 mẫu toàn Yes ($H = 0$) $\to$ **Dừng lại ngay lập tức! Biến thành Nút lá: Play = Yes**.
2. **Nhánh `Outlook == Sunny` (5 mẫu: 2 Yes, 3 No):** Vẫn hỗn tạp. Xét tiếp 3 thuộc tính còn lại trên 5 mẫu này $\to$ `Humidity` đạt $IG$ cao nhất:
   * Nếu `Humidity == High` $\to$ Nút lá: **Play = No** (3 mẫu No).
   * Nếu `Humidity == Normal` $\to$ Nút lá: **Play = Yes** (2 mẫu Yes).
3. **Nhánh `Outlook == Rain` (5 mẫu: 3 Yes, 2 No):** Vẫn hỗn tạp. Xét tiếp các thuộc tính còn lại trên 5 mẫu này $\to$ `Wind` đạt $IG$ cao nhất:
   * Nếu `Wind == Strong` $\to$ Nút lá: **Play = No** (2 mẫu No).
   * Nếu `Wind == Weak` $\to$ Nút lá: **Play = Yes** (3 mẫu Yes).

---

### 3.4 Cây quyết định hoàn chỉnh & Vì sao Temperature bị gạch tên?

```
                      [ OUTLOOK ]
                     /     │     \
             Sunny  /   Overcast  \  Rain
                   /       │       \
             [HUMIDITY]   (YES)    [ WIND ]
             /        \            /      \
        High/   Normal \    Strong/   Weak \
           /            \        /          \
        (NO)           (YES)   (NO)        (YES)
```

* **5 Luật Nếu - Thì trích xuất từ cây:**
  1. `Nếu Outlook = Overcast` $\implies$ **Yes**.
  2. `Nếu Outlook = Sunny VÀ Humidity = High` $\implies$ **No**.
  3. `Nếu Outlook = Sunny VÀ Humidity = Normal` $\implies$ **Yes**.
  4. `Nếu Outlook = Rain VÀ Wind = Strong` $\implies$ **No**.
  5. `Nếu Outlook = Rain VÀ Wind = Weak` $\implies$ **Yes**.
* ❓ **Tại sao đặc trưng `Temperature` hoàn toàn vắng mặt trong cây?**
  * Vì ở mỗi bước phân chia, $IG$ của `Temperature` luôn thua các đặc trưng khác (`Humidity`, `Wind`). Cây đã đạt đến độ thuần khiết hoàn hảo trước khi cần dùng đến `Temperature`.

---

# PHẦN 4: QUÁ KHỚP Ở CÂY SÂU & KỸ THUẬT CẮT TỈA (PRUNING)
📍 **[Slide Trang 47 – 55]**

---

### 4.1 Hiện tượng Quá khớp (Overfitting / High Variance) khi cây mọc tự do

Nếu để cây phân chia tự do:
* Cây sẽ chia nhỏ đến mức mỗi nút lá chỉ chứa đúng 1 điểm dữ liệu.
* Độ chính xác trên tập Train đạt $100\%$ (Loss = 0).
* Nhưng cây đã học vẹt cả các điểm dữ liệu nhiễu ngoại lai $\to$ Khi gặp tập Test mới, dự đoán sai nghiêm trọng $\implies$ **High Variance / Overfitting**.

---

### 4.2 Tiền cắt tỉa (Pre-pruning / Dừng sớm)

Can thiệp trong lúc cây đang mọc, đặt ra các điều kiện chặn không cho cây phát triển sâu thêm:
* `max_depth`: Khống chế độ sâu tối đa của cây (ví dụ chỉ cho sâu tối đa 3-5 tầng).
* `min_samples_split`: Số lượng mẫu tối thiểu trong một nút để được phép tiếp tục phân chia (nút có ít mẫu hơn sẽ bị ép dừng lại).
* `min_samples_leaf`: Số lượng mẫu tối thiểu bắt buộc phải có trong mỗi nút lá.

---

### 4.3 Hậu cắt tỉa (Post-pruning / Cost-Complexity Pruning)

Cho cây mọc xả láng đến mức tối đa (Full tree), sau đó xem xét tỉa bớt các nhánh lá sâu nhất từ dưới lên:
* Dùng hàm chi phí phạt độ phức tạp cây:
  $$R_\alpha(T) = R(T) + \alpha |T|$$
  *(Trong đó $R(T)$ là sai số phân loại, $|T|$ là số lượng nút lá, $\alpha$ là siêu tham số phạt độ cồng kềnh `ccp_alpha`)*.
* Nhánh nào khi cắt bỏ đi mà không làm giảm đáng kể độ chính xác trên tập Validation thì sẽ bị chặt bỏ.
* 👉 **Hậu cắt tỉa đóng vai trò tương tự như kỹ thuật Regularization trong các mô hình tuyến tính!**

---

# PHẦN 5: ENSEMBLE LEARNING (HỌC KẾT HỢP) — TRỌNG TÂM THI CỬ
📍 **[Slide Trang 61 – 114]**

---

### 5.1 Triết lý hội đồng & 3 điều kiện bắt buộc để Ensemble có hiệu quả

Thay vì cố gắng tìm một mô hình đơn lẻ hoàn hảo, Ensemble kết hợp nhiều mô hình cơ sở (**Base Models** / **Weak Learners**) thành một "hội đồng thông thái".

#### 3 Điều kiện bắt buộc để kết hợp có ích (Slide Trang 64 – 66):
1. **Các mô hình cơ sở phải tốt hơn đoán ngẫu nhiên:** Độ chính xác $Accuracy > 50\%$ (Nếu toàn những người đoán sai quá nửa thì bỏ phiếu chỉ làm tình hình tệ hơn).
2. **Tính đa dạng (Diversity) — ĐIỀU KIỆN TIÊN QUYẾT:** Các mô hình phải mắc các **sai lầm khác nhau** (không được đồng pha). Nếu mọi mô hình đều có cùng cách tư duy và mắc cùng 1 lỗi, việc kết hợp hoàn toàn vô dụng!
3. **Quy tắc kết hợp phù hợp:** Bỏ phiếu đa số cho phân loại hoặc lấy trung bình cộng cho hồi quy.

---

### 5.2 Hard Voting vs Soft Voting
📍 **[Slide Trang 70 – 74]**

* **Hard Voting (Bỏ phiếu cứng):** Đếm theo số đông nhãn lớp.
  * Mô hình 1: Lớp A
  * Mô hình 2: Lớp A
  * Mô hình 3: Lớp B
  * 👉 **Kết quả:** Chọn **Lớp A** (thắng với 2/3 phiếu).
* **Soft Voting (Bỏ phiếu mềm):** Lấy **trung bình cộng xác suất dự đoán** của từng lớp giữa các mô hình rồi chọn lớp có xác suất trung bình cao nhất.
  * Giả sử Mô hình 1 và 2 chọn A với xác suất 51% (rất phân vân).
  * Mô hình 3 chọn B với xác suất tới 99% (cực kỳ tự tin).
  * Soft Voting sẽ nhận diện được độ tự tin áp đảo của Mô hình 3 và chọn B!
* ⚠️ **Chốt lại:** **Soft Voting gần như luôn tốt hơn Hard Voting** vì nó tận dụng được thông tin độ tự tin (Confidence) của các mô hình!

---

### 5.3 BAGGING (Bootstrap Aggregating) & RANDOM FOREST
📍 **[Slide Trang 75 – 95]**

```
                       TẬP DỮ LIỆU GỐC (n MẪU)
                    ┌─────────────┼─────────────┐
          Lấy mẫu   ▼   Bootstrap ▼   Bootstrap ▼
                  Mẫu 1         Mẫu 2         Mẫu 3  (Rút thăm CÓ HOÀN LẠI)
                    │             │             │
                    ▼ (Song song) ▼ (Song song) ▼ (Song song)
                 Cây 1         Cây 2         Cây 3  (Độc lập, cây sâu)
                    └─────────────┬─────────────┘
                                  ▼
                         TỔNG HỢP (AGGREGATING)
                   (Bỏ phiếu đa số hoặc Trung bình cộng)
                      ===> GIẢM VARIANCE (GIẢM OVERFITTING)!
```

#### A. Kỹ thuật Lấy mẫu Bootstrap (Bootstrap Sampling)
* Từ tập dữ liệu gốc có $n$ mẫu, ta rút ngẫu nhiên $n$ lần **CÓ HOÀN LẠI (with replacement)** để sinh ra một tập dữ liệu mới có kích thước đúng bằng $n$.
* Do có hoàn lại, có những mẫu được chọn lặp lại 2, 3 lần, và có những mẫu **không bao giờ được chọn**!

#### B. Mẫu Out-Of-Bag (OOB) — Chứng minh toán học $\approx 36.8\%$
1. Xác suất để 1 mẫu cụ thể **KHÔNG** được chọn trong 1 lần rút là:
   $$1 - \frac{1}{n}$$
2. Xác suất mẫu đó **không bao giờ được chọn trong cả $n$ lần rút độc lập** là:
   $$P(\text{bị bỏ rơi}) = \left( 1 - \frac{1}{n} \right)^n$$
3. Khi kích thước tập dữ liệu $n$ rất lớn ($n \to \infty$):
   $$\lim_{n \to \infty} \left( 1 - \frac{1}{n} \right)^n = \frac{1}{e} \approx \mathbf{0.368 = 36.8\%}$$

> 💥 **Ý NGHĨA KINH ĐIỂN:**
> * Khoảng **$36.8\%$ mẫu dữ liệu ban đầu hoàn toàn không tham gia huấn luyện cây đó** (gọi là tập **Out-Of-Bag - OOB**).
> * Ta dùng chính 36.8% mẫu OOB này để đánh giá chất lượng của từng cây (gọi là **OOB Score**).
> * 👉 **Lợi ích:** Ta có thể kiểm định mô hình mà **KHÔNG CẦN tốn tập Validation riêng biệt!**

#### C. Random Forest: "Tuyệt chiêu" Feature Subsampling
* **Vấn đề của Bagging tiêu chuẩn:** Nếu có một đặc trưng cực mạnh, mọi cây trong Bagging đều chọn nó làm nút gốc $\implies$ Hàng trăm cây bị **tương quan cao (Correlated)**, trông na ná nhau $\implies$ Khả năng giảm Variance bị suy giảm.
* **Giải pháp của Random Forest:** Tại **MỖI NÚT PHÂN CHIA**, thuật toán chỉ được phép xét ngẫu nhiên một tập con gồm **$m$ đặc trưng** ($m < p$):
  * Phân loại: $m = \sqrt{p}$.
  * Hồi quy: $m = \frac{p}{3}$.
* Việc "bịt mắt" này ép các cây phải tìm các hướng phân chia khác nhau $\to$ Giảm tương quan giữa các cây $\to$ **Khả năng giảm Variance đạt mức tối đa!**

#### D. Extra Trees (Extremely Randomized Trees)
* Ngẫu nhiên hóa thêm một bước nữa: Không chỉ ngẫu nhiên chọn đặc trưng, mà còn **ngẫu nhiên chọn luôn cả ngưỡng cắt $t$** cho từng đặc trưng đó (thay vì tìm ngưỡng tối ưu).
* Tốc độ huấn luyện cực kỳ nhanh, giảm thêm một chút Variance nhưng có thể tăng nhẹ Bias.

---

### 5.4 BOOSTING (AdaBoost & Gradient Boosting)
📍 **[Slide Trang 96 – 113]**

```
              ┌───────────────┐     Mẫu đoán sai     ┌───────────────┐     Mẫu đoán sai     ┌───────────────┐
  Dữ liệu ──► │  Mô hình 1    ├────────────────────► │  Mô hình 2    ├────────────────────► │  Mô hình 3    │
              │ (Cây 1 tầng)  │   Bị phạt nặng       │ (Cây 1 tầng)  │   Bị phạt nặng       │ (Cây 1 tầng)  │
              └───────┬───────┘                      └───────┬───────┘                      └───────┬───────┘
                      │                                      │                                      │
                      ▼ (Trọng số α_1)                       ▼ (Trọng số α_2)                       ▼ (Trọng số α_3)
                      └──────────────────────────────┬──────────────────────────────────────┘
                                                     ▼
                                          MÔ HÌNH HỘI ĐỒNG CỰC MẠNH
                                            (GIẢM BIAS TỐI ĐA!)
```

#### A. Triết lý của Boosting:
* Khác với Bagging (song song độc lập), Boosting huấn luyện **TUẦN TỰ (Sequential)**: Mô hình sau sinh ra để sửa chữa các sai lầm mà mô hình trước mắc phải.
* Sử dụng các **Bộ học yếu (Weak Learners)**: Điển hình là **Cây 1 tầng (Decision Stump)** — cây chỉ có đúng 1 lần phân nhánh rồi ra lá ngay.
* ⚠️ **Mục tiêu cốt lõi của Boosting:** **LÀM GIẢM BIAS** (biến chuỗi các mô hình yếu thành một mô hình tổng thể cực mạnh).

#### B. AdaBoost (Adaptive Boosting):
1. **Khởi tạo:** Gán trọng số mẫu bằng nhau: $w_i = \frac{1}{m}$.
2. **Huấn luyện cây yếu thứ $j$:** Tính sai số có trọng số $r_j$.
3. **Tính trọng số của mô hình trong hội đồng:**
   $$\alpha_j = \frac{1}{2} \ln\left(\frac{1 - r_j}{r_j}\right)$$
   *(Mô hình đoán đúng nhiều thì $\alpha_j$ càng lớn, tiếng nói càng to trong hội đồng)*.
4. **CẬP NHẬT TRỌNG SỐ MẪU (QUAN TRỌNG NHẤT):**
   * Mẫu đoán **ĐÚNG** $\to$ Giữ nguyên hoặc giảm trọng số.
   * Mẫu đoán **SAI** $\to$ **BỊ TĂNG TRỌNG SỐ LÊN RẤT MẠNH**!
5. Chuẩn hóa lại tổng trọng số bằng 1. Vòng tiếp theo, cây mới buộc phải dồn toàn lực vào các mẫu khó bị đoán sai ở vòng trước.

#### C. Gradient Boosting (GBM):
Thay vì đổi trọng số mẫu như AdaBoost, Gradient Boosting huấn luyện mỗi cây mới để **khớp vào PHẦN DƯ / SAI SỐ (Pseudo-residuals)** của mô hình hiện tại:
* Phần dư thực chất là **Âm gradient của hàm mất mát** (hướng làm sai số giảm nhanh nhất):
  $$r_{ik} = - \left[ \frac{\partial L(y_i, F(x_i))}{\partial F(x_i)} \right]_{F = F_{k-1}}$$
* **Công thức cập nhật mô hình cộng dồn:**
  $$F_k(x) = F_{k-1}(x) + \mathbf{\eta} \cdot h_k(x)$$
  * $h_k(x)$: Cây mới vừa học để dự đoán phần dư sai số.
  * $\mathbf{\eta}$ **(Learning Rate / Shrinkage):** Thường chọn nhỏ ($0.01 - 0.1$). Nó khống chế mỗi cây chỉ đóng góp một phần nhỏ $\to$ Mô hình học bền bỉ, **chống Overfitting hiệu quả**.

#### D. Hệ sinh thái hiện đại: XGBoost, LightGBM, CatBoost
* **XGBoost (Extreme Gradient Boosting):** Sử dụng khai triển Taylor bậc 2 của hàm mất mát để tối ưu hóa cực nhanh, tích hợp sẵn Regularization phạt độ sâu của cây.
* **LightGBM:** Do Microsoft phát triển, dùng kỹ thuật Histogram-based và phát triển cây theo chiều sâu lá (Leaf-wise), xử lý dữ liệu lớn cực nhanh.

---

# PHẦN 6: BẢNG SO SÁNH "SỐNG CÒN": BAGGING VS BOOSTING
📍 **[Slide Trang 114]** — ⚠️ **BẢNG ĐỐI CHIẾU QUYẾT ĐỊNH ĐIỂM SỐ!**

### 6.1 Ma trận đối chiếu 6 chiều toàn diện

| Tiêu chí so sánh | BAGGING (Random Forest) | BOOSTING (AdaBoost, Gradient Boosting) |
| :--- | :--- | :--- |
| **1. Cách thức huấn luyện** | **Song song (Parallel)**, các cây hoàn toàn độc lập với nhau. | **Tuần tự (Sequential)**, cây sau phụ thuộc sai lầm của cây trước. |
| **2. Mục tiêu Bias - Variance** | **GIẢM VARIANCE** (chữa bệnh Quá khớp - Overfitting). | **GIẢM BIAS** (tăng độ chính xác từ mô hình yếu). |
| **3. Bản chất Cây cơ sở** | **Cây sâu, phức tạp** (vốn dĩ có High Variance, Low Bias). | **Cây rất nông, đơn giản** (Decision Stumps - High Bias, Low Variance). |
| **4. Cơ chế xử lý dữ liệu** | **Bootstrap**: Lấy mẫu có hoàn lại, xác suất mỗi mẫu ngang nhau. | **Thay đổi dữ liệu**: Tăng trọng số mẫu sai (AdaBoost) hoặc khớp phần dư (GBM). |
| **5. Đánh giá Out-Of-Bag (OOB)**| **CÓ** (khoảng $\approx 36.8\%$ dữ liệu OOB dùng làm validation). | **KHÔNG CÓ** tập OOB. |
| **6. Độ nhạy với Dữ liệu Nhiễu** | **Rất ổn định, ít bị ảnh hưởng bởi Outliers/Nhiễu.** | **RẤT NHẠY CẢM VỚI NHIỄU!** *(Vì Boosting liên tục tăng trọng số hoặc cố khớp các điểm ngoại lai $\to$ Dễ bị overfit trên nhiễu)*. |

---

### 6.2 Tuyển tập 10 câu hỏi trắc nghiệm "tủ" chắc chắn gặp trong phòng thi

1. **Câu 1:** Cây quyết định có đòi hỏi dữ liệu phải được chuẩn hóa thang đo (Feature Scaling) trước khi huấn luyện không?
   * 👉 **Đáp án:** **Hoàn toàn KHÔNG**, vì cây chỉ quan tâm đến thứ tự sắp xếp của các giá trị để tìm ngưỡng cắt $x_j \le t$.
2. **Câu 2:** Một nút chứa 100 mẫu hoàn toàn thuộc về lớp A. Giá trị Entropy $H(S)$ và Gini $Gini(S)$ của nút này là:
   * 👉 **Đáp án:** $H(S) = 0$ và $Gini(S) = 0$ (Độ thuần khiết tuyệt đối).
3. **Câu 3:** Với bài toán phân loại 2 lớp cân bằng 50% - 50%, giá trị cực đại của Entropy và Gini lần lượt là:
   * 👉 **Đáp án:** Entropy cực đại là **$1.0$**; Gini cực đại là **$0.5$**.
4. **Câu 4:** Thuật toán nào luôn luôn thực hiện phép chia nhị phân (Binary split) và dùng tiêu chí Gini?
   * 👉 **Đáp án:** Thuật toán **CART**.
5. **Câu 5:** Trong bài toán Golf 14 mẫu thời tiết kinh điển, thuộc tính nào được chọn làm Nút Gốc (Root Node)?
   * 👉 **Đáp án:** Thuộc tính **Outlook** (với Information Gain cao nhất $\approx 0.247$).
6. **Câu 6:** Trong kỹ thuật Bootstrap lấy mẫu kích thước $n$ từ $n$ phần tử, khi $n$ đủ lớn, tỷ lệ phần trăm mẫu Out-of-Bag (không được chọn) xấp xỉ bằng bao nhiêu?
   * 👉 **Đáp án:** $\frac{1}{e} \approx \mathbf{36.8\%}$.
7. **Câu 7:** Random Forest bổ sung cơ chế ngẫu nhiên nào so với Bagging tiêu chuẩn để giải trừ tương quan giữa các cây?
   * 👉 **Đáp án:** Chọn ngẫu nhiên một tập con các đặc trưng (**Feature Subsampling**, thường là $\sqrt{p}$) tại mỗi nút phân chia.
8. **Câu 8:** Bagging và Boosting tập trung làm giảm thành phần nào trong đánh đổi Bias - Variance?
   * 👉 **Đáp án:** Bagging tập trung **giảm Variance**; Boosting tập trung **giảm Bias**.
9. **Câu 9:** Trong thuật toán AdaBoost, điều gì sẽ xảy ra với các mẫu dữ liệu bị mô hình dự đoán SAI ở vòng trước?
   * 👉 **Đáp án:** Chúng bị **tăng trọng số** lên mạnh mẽ để mô hình tiếp theo tập trung sửa sai.
10. **Câu 10:** Trong Gradient Boosting, mỗi cây mới được huấn luyện để dự đoán đại lượng nào?
    * 👉 **Đáp án:** Dự đoán **Pseudo-residuals** (Phần dư sai số / Âm gradient của hàm mất mát).
