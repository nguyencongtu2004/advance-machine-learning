# 🧠 TỔNG HỢP CHI TIẾT TOÀN BỘ GIẢI THÍCH TRỰC QUAN BẢN CHẤT CHƯƠNG 2: TIỀN XỬ LÝ VÀ BIỂU DIỄN DỮ LIỆU
> **Tài liệu gốc:** [02_Note_Chuong_2_Tien_Xu_Ly_Du_Lieu.md](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/%C3%B4n%20t%E1%BA%ADp%2021-10/02_Note_Chuong_2_Tien_Xu_Ly_Du_Lieu.md)  
> **Châm ngôn kinh điển:** *"Garbage In, Garbage Out"* — Dữ liệu rác thì dù dùng mô hình xịn sò đến mấy cũng chỉ cho ra kết quả rác!  
> **Phương pháp học:** Trực quan hóa bản chất, ví dụ đời thường, giải phẫu công thức toán học và đúc kết trắc nghiệm.

---

# MỤC LỤC CHI TIẾT
1. [Thu thập dữ liệu & Bốn chiều chất lượng dữ liệu cốt lõi](#1-thu-thập-dữ-liệu--bốn-chiều-chất-lượng-dữ-liệu-cốt-lõi)
   - 1.1 Quá trình lấy mẫu & Cạm bẫy Sai lệch lấy mẫu (Sampling Bias)
   - 1.2 Bốn chiều chất lượng dữ liệu cốt lõi (Completeness, Consistency, Integrity, Timeliness)
2. [Xử lý Dữ liệu thiếu (Missing Data) & Dữ liệu nhiễu (Noise)](#2-xử-lý-dữ-liệu-thiếu-missing-data--dữ-liệu-nhiễu-noise)
   - 2.1 Ba chiến lược xử lý dữ liệu thiếu: Xóa dòng vs Xóa cột vs Điền thay thế
   - 2.2 Bẫy thi kinh điển: Khi nào bắt buộc dùng Median thay vì Mean?
   - 2.3 Phân biệt Nhiễu (Noise) vs Ngoại biên (Outliers): Vì sao không được xóa bừa ngoại biên?
3. [Biến đổi dữ liệu: Chuẩn hóa thang đo & Mã hóa danh mục](#3-biến-đổi-dữ-liệu-chuẩn-hóa-thang-đo--mã-hóa-danh-mục)
   - 3.1 Vì sao bắt buộc phải chuẩn hóa thang đo?
   - 3.2 So sánh chi tiết: Min-Max Normalization vs Standardization (Z-score)
   - 3.3 Mã hóa dữ liệu danh mục: Label Encoding vs One-Hot Encoding
4. [Feature Engineering: Lựa chọn đặc trưng vs Rút trích đặc trưng](#4-feature-engineering-lựa-chọn-đặc-trưng-vs-rút-trích-đặc-trưng)
5. [Lời nguyền số chiều (Curse of Dimensionality)](#5-lời-nguyền-số-chiều-curse-of-dimensionality)
6. [PCA (Principal Component Analysis) - Đỉnh cao trọng tâm thi Chương 2](#6-pca-principal-component-analysis---đỉnh-cao-trọng-tâm-thi-chương-2)
   - 6.1 Bản chất và Triết lý của PCA: Bảo toàn phương sai tối đa
   - 6.2 Toàn bộ quy trình 7 bước tính toán PCA (Nằm lòng từng bước!)
   - 6.3 Tỷ lệ phương sai giải thích (Explained Variance Ratio - EVR)
7. [Chốt lại các câu hỏi trắc nghiệm điển hình Chương 2](#7-chốt-lại-các-câu-hỏi-trắc-nghiệm-điển-hình-chương-2)

---

# 1. THU THẬP DỮ LIỆU & BỐN CHIỀU CHẤT LƯỢNG DỮ LIỆU CỐT LÕI

### 1.1 Quá trình lấy mẫu & Cạm bẫy Sai lệch lấy mẫu (Sampling Bias)

Không một công ty hay nhà khoa học nào có thể thu thập $100\%$ dữ liệu của toàn bộ dân số trên trái đất. Vì vậy, ta bắt buộc phải **Lấy mẫu (Sampling)** — tức là trích một tập con nhỏ đại diện để nghiên cứu.

#### ⚠️ Cạm bẫy Sai lệch lấy mẫu (Sampling Bias) là gì?
Xảy ra khi phương pháp thu thập khiến một số nhóm đối tượng bị chọn quá nhiều, trong khi các nhóm khác bị bỏ sót hoàn toàn, làm cho mẫu **mất đi tính đại diện (Representative)**.

* 🏬 **Ví dụ đời thường:** Bạn muốn làm mô hình khảo sát *"Mức thu nhập trung bình của người dân TP.HCM"*. Nhưng bạn lại cử nhân viên ra đứng phát phiếu khảo sát ở sảnh trung tâm thương mại cao cấp Quận 1 vào lúc 2 giờ chiều ngày thứ Ba:
  * Những người có mặt ở đó chủ yếu là người giàu có, rảnh rỗi hoặc khách du lịch.
  * Toàn bộ giới công nhân, viên chức văn phòng, sinh viên, người lao động nghèo đều không có cơ hội tham gia khảo sát.
  * 👉 **Kết quả:** Bạn thu được mức thu nhập trung bình là $80$ triệu đồng/tháng $\implies$ Dữ liệu bị thiên lệch nặng nề, đem kết quả này đi huấn luyện mô hình sẽ cho ra những phán đoán sai lệch nghiêm trọng!

---

### 1.2 Bốn chiều chất lượng dữ liệu cốt lõi (CÂU HỎI HAY GẶP TRẮC NGHIỆM)

1. **Tính đầy đủ (Completeness):** Mỗi dòng dữ liệu phải có đủ các thông tin cần thiết. Việc một mẫu bị khuyết quá nhiều cột (Missing data) sẽ làm mất tín hiệu dự đoán.
2. **Tính đồng nhất (Consistency):** Dữ liệu phải cùng tuân theo một quy chuẩn thống nhất:
   * Chiều cao người này ghi bằng mét ($1.75m$), người kia lại ghi bằng centimet ($175cm$).
   * Định dạng ngày tháng: Cột thì ghi `DD/MM/YYYY`, cột thì ghi `MM/DD/YYYY`.
3. **Tính toàn vẹn / Hợp lệ (Integrity / Validity):** Dữ liệu phải tuân thủ đúng logic thực tế:
   * Tuổi không được là số âm ($-5$ tuổi), điểm thi đại học không thể là $15/10$.
   * Tình trạng hôn nhân là "Độc thân" nhưng số con lại là $3$ đứa $\implies$ Mâu thuẫn logic nội tại.
4. **Tính kịp thời (Timeliness):** Dữ liệu phải phản ánh đúng thời điểm cần dự đoán. Dùng dữ liệu hành vi mua sắm của năm 2010 để dự đoán xu hướng mua hàng online năm 2026 sẽ bị sai lệch vì thói quen người tiêu dùng đã thay đổi hoàn toàn sau đại dịch và thời đại smartphone.

---

# 2. XỬ LÝ DỮ LIỆU THIẾU (MISSING DATA) & DỮ LIỆU NHIỄU (NOISE)

### 2.1 Ba chiến lược xử lý dữ liệu thiếu

Khi trong bảng dữ liệu xuất hiện các ô trống `NaN / Null`, ta có 3 phương án:

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

1. **Xóa dòng (Row Deletion):**
   * *Khi nào dùng:* Khi số lượng dòng bị thiếu rất nhỏ ($< 3\% - 5\%$) và việc xóa đi không làm thay đổi cấu trúc phân bố của dữ liệu.
   * *Nguy cơ:* Nếu dòng nào thiếu cũng xóa, ta có thể làm mất đi một nửa tập dữ liệu quý giá mà công ty phải tốn tiền triệu để thu thập!
2. **Xóa cột (Feature Deletion):**
   * *Khi nào dùng:* Khi một cột bị khuyết quá nặng (trên $60\% - 70\%$ là khoảng trống) và cột đó không phải là biến cốt lõi quyết định kết quả.
3. **Điền giá trị thay thế (Imputation):**
   * Giữ lại dòng dữ liệu và dùng một con số thống kê hợp lý để lấp đầy ô trống.

---

### 2.2 BẪY THI KINH ĐIỂN: Khi nào bắt buộc dùng Median thay vì Mean?

Đây là câu hỏi xuất hiện liên tục trong các đề thi:

#### 💼 Ví dụ câu chuyện mức lương ở một phòng ban:
Phòng kế toán có 6 nhân viên với mức lương hàng tháng (triệu VNĐ) như sau:
$$10, \quad 11, \quad 12, \quad 12, \quad 13, \quad \mathbf{500} \text{ (Lương của Tổng Giám đốc ngồi nhờ)}$$

Bây giờ có một nhân viên mới vào bị khuyết thông tin lương, bạn sẽ điền số nào?

* **Cách 1: Dùng Mean (Trung bình cộng):**
  $$\text{Mean} = \frac{10 + 11 + 12 + 12 + 13 + 500}{6} = \frac{558}{6} = 93 \text{ triệu!}$$
  👉 **VÔ LÝ HẾT SỨC!** Không có một nhân viên bình thường nào trong phòng đạt mức lương $93$ triệu cả. Con số trung bình này bị ông sếp $500$ triệu kéo lệch hoàn toàn!
* **Cách 2: Dùng Median (Trung vị - Con số đứng chính giữa sau khi xếp hàng):**
  Xếp dãy số: $10, 11, \mathbf{12}, \mathbf{12}, 13, 500 \implies \text{Median} = 12$ triệu!
  👉 **HOÀN HẢO!** Con số $12$ triệu phản ánh cực kỳ chân thực mức lương phổ biến của nhân viên trong phòng, hoàn toàn không bị ông sếp $500$ triệu làm lung lay!

> 🏆 **QUY TẮC NẰM LÒNG ĐI THI:**  
> * Dữ liệu có **phân phối chuẩn hình chuông (đối xứng, không có ngoại lai)** $\implies$ Điền bằng **MEAN (Trung bình)**.
> * Dữ liệu **bị lệch (Skewed) hoặc có chứa NGOẠI LAI (Outliers)** $\implies$ Bắt buộc điền bằng **MEDIAN (Trung vị)**!
> * Dữ liệu **dạng chữ / danh mục (Categorical)** $\implies$ Điền bằng **MODE (Giá trị xuất hiện nhiều nhất)**.

---

### 2.3 Phân biệt Nhiễu (Noise) vs Ngoại biên (Outliers)

* **Nhiễu (Noise):** Là những lỗi đo lường ngẫu nhiên, vô nghĩa (ví dụ: cảm biến đo nhiệt độ bị chập chờn nhảy từ $30^\circ C$ lên $80^\circ C$ trong $1$ giây rồi tụt về $30^\circ C$). Nhiễu là rác rưởi, cần tìm cách loại bỏ hoặc làm mịn.
* **Ngoại biên (Outliers):** Là quan sát có giá trị thực tế khác biệt rất lớn so với số đông (ví dụ: một tỷ phú có tài sản $10.000$ tỷ sống trong khu dân cư bình thường).

> ⚠️ **LƯU Ý TRẮC NGHIỆM ĐỈNH CAO:** **Không phải ngoại biên nào cũng là lỗi cần xóa!**  
> Trong bài toán **Phát hiện gian lận thẻ tín dụng** hoặc **Phát hiện tấn công an ninh mạng**:  
> * $99.99\%$ các giao dịch ngoài đời là bình thường.
> * Chính những giao dịch "ngoại biên" dị biệt (đột nhiên nửa đêm quẹt thẻ mua 50 chiếc iPhone ở nước ngoài) **lại là ĐỐI TƯỢNG QUAN TRỌNG NHẤT mà mô hình cần phải bắt được**! Nếu vội vàng xóa bỏ ngoại biên, hệ thống phát hiện gian lận sẽ hoàn toàn vô dụng!

---

# 3. BIẾN ĐỔI DỮ LIỆU: CHUẨN HÓA THANG ĐO & MÃ HÓA DANH MỤC

### 3.1 Vì sao bắt buộc phải chuẩn hóa thang đo?

Hãy tưởng tượng bạn đưa vào mô hình 2 đặc trưng:
* Cột 1: **Tuổi** (Giá trị từ $18$ đến $60$).
* Cột 2: **Thu nhập hàng tháng** (Giá trị từ $5.000.000$ đến $100.000.000$ VNĐ).

Khi mô hình tính khoảng cách giữa hai người (trong thuật toán KNN, K-Means hoặc mạng nơ-ron):
$$\text{Khoảng cách}^2 = (\text{Tuổi}_A - \text{Tuổi}_B)^2 + (\text{Lương}_A - \text{Lương}_B)^2$$
* Độ lệch tuổi tối đa là $(60 - 18)^2 = 42^2 = 1.764$.
* Độ lệch lương là $(50.000.000 - 10.000.000)^2 = 1.600.000.000.000.000$!

👉 Con số lương hàng triệu triệu sẽ **đè bẹp hoàn toàn** biến tuổi. Mô hình sẽ coi như tuổi tác không tồn tại, chỉ vì đơn vị của lương có nhiều số $0$ hơn!  
Do đó, ta bắt buộc phải **kéo các đặc trưng về cùng một sân chơi bình đẳng** thông qua Chuẩn hóa thang đo (Feature Scaling).

---

### 3.2 So sánh chi tiết: Min-Max Normalization vs Standardization (Z-score)

#### A. Min-Max Normalization (Chuẩn hóa Min-Max)
Co toàn bộ miền giá trị của một thuộc tính về một khoảng đóng cố định, thông thường là $[0, 1]$:

$$x' = \frac{x - x_{\min}}{x_{\max} - x_{\min}}$$

* **Ý nghĩa:** Giá trị nhỏ nhất $x_{\min}$ biến thành $0$, giá trị lớn nhất $x_{\max}$ biến thành $1$.
* 🧮 **Ví dụ bài tập tính toán:** Cột Tuổi có người trẻ nhất là $x_{\min} = 20$, người già nhất là $x_{\max} = 60$. Một người $30$ tuổi sẽ có giá trị chuẩn hóa là:
  $$x' = \frac{30 - 20}{60 - 20} = \frac{10}{40} = 0.25$$
* ⚠️ **Nhược điểm chí mạng:** Cực kỳ nhạy cảm với ngoại lai! Nếu trong lớp tự nhiên có một cụ già $1000$ tuổi lạc vào ($x_{\max} = 1000$), thì tất cả các bạn trẻ từ $20 - 60$ tuổi sẽ bị ép dồn hết thành một nhúm $0.01, 0.02$ sát số $0$, làm mất sạch tính phân biệt!

#### B. Standardization (Z-score / Chuẩn hóa độ lệch chuẩn)
Đưa thuộc tính về một phân phối có **Giá trị trung bình $\mu = 0$ và Độ lệch chuẩn $\sigma = 1$**:

$$z = \frac{x - \mu}{\sigma}$$

* 🧮 **Ví dụ bài tập tính toán:** Điểm thi có trung bình $\mu = 50$, độ lệch chuẩn $\sigma = 10$. Một học sinh đạt $x = 70$ điểm sẽ có giá trị $z$ là:
  $$z = \frac{70 - 50}{10} = \frac{20}{10} = +2.0$$
  *(Nghĩa là điểm của bạn này cao hơn mức trung bình của lớp đúng 2 độ lệch chuẩn).*
* 🛡️ **Ưu điểm vượt trội:** Không bị giới hạn cứng trong đoạn $[0, 1]$, **ít bị tổn thương bởi các điểm ngoại lai hơn Min-Max**. Rất phù hợp với các mô hình hồi quy tuyến tính, Logistic Regression, mạng nơ-ron và thuật toán PCA.

---

### 3.3 Mã hóa dữ liệu danh mục: Label Encoding vs One-Hot Encoding

Máy tính chỉ hiểu số, không hiểu chữ (chữ "Hà Nội", "Đà Nẵng", "TP.HCM" máy tính không thể nhân chia được). Ta phải mã hóa chúng:

#### 1. Label Encoding (Mã hóa nhãn): Gán mỗi chữ cái một con số nguyên
* Hà Nội $\to 0$
* Đà Nẵng $\to 1$
* TP.HCM $\to 2$

⚠️ **Cạm bẫy của Label Encoding:**
* Máy tính sẽ hiểu nhầm là có quan hệ thứ tự số học: $2 > 1 > 0 \implies \text{TP.HCM} > \text{Đà Nẵng} > \text{Hà Nội}$!
* Hơn nữa, máy còn tưởng: $\text{Hà Nội} (0) + \text{TP.HCM} (2) = 2 \times \text{Đà Nẵng} (1)$! Điều này hoàn toàn ngớ ngẩn về mặt logic địa lý!
* 👉 **Quy tắc thi:** **Chỉ dùng Label Encoding khi thuộc tính thực sự có thứ tự phân cấp tự nhiên** (ví dụ Trình độ học vấn: `Tiểu học: 0, Cấp 3: 1, Đại học: 2, Thạc sĩ: 3`; hoặc Kích cỡ áo: `S: 0, M: 1, L: 2, XL: 3`).

#### 2. One-Hot Encoding (Mã hóa một nóng): Biến mỗi danh mục thành 1 cột nhị phân
Với 3 thành phố, ta tạo ra 3 cột riêng biệt:

| Thành phố | Cột Hà Nội | Cột Đà Nẵng | Cột TP.HCM |
| :--- | :---: | :---: | :---: |
| **Hà Nội** | **1** | 0 | 0 |
| **Đà Nẵng** | 0 | **1** | 0 |
| **TP.HCM** | 0 | 0 | **1** |

* **Ưu điểm:** Hoàn toàn công bằng, không áp đặt bất kỳ quan hệ thứ tự sai trái nào giữa các thành phố.
* **Nhược điểm (Lời nguyền số chiều):** Nếu cột "Quốc gia" có $200$ nước trên thế giới, One-Hot Encoding sẽ tạo ra thêm $200$ cột mới, làm bảng dữ liệu phình to khổng lồ và chứa toàn số 0 thưa thớt!

---

# 4. FEATURE ENGINEERING: LỰA CHỌN ĐẶC TRƯNG vs RÚT TRÍCH ĐẶC TRƯNG

Hai khái niệm này rất hay bị đánh tráo khái niệm trong đề thi trắc nghiệm:

| Tiêu chí | Feature Selection (Lựa chọn đặc trưng) | Feature Extraction (Rút trích đặc trưng) |
| :--- | :--- | :--- |
| **Bản chất hành động** | **"Sàng lọc và Vứt bỏ"** | **"Nhào nặn và Tạo mới"** |
| **Cách thức** | Chọn ra một tập con các đặc trưng quan trọng nhất từ tập gốc, **gạch bỏ các cột vô dụng/gây nhiễu**. | Dùng toán học kết hợp các đặc trưng cũ để **tạo ra một không gian đặc trưng hoàn toàn mới** có số chiều thấp hơn. |
| **Đặc trưng mới có được tạo ra không?** | **KHÔNG TẠO RA ĐẶC TRƯNG MỚI** (chỉ giữ lại hoặc xóa bỏ đặc trưng cũ). | **CÓ TẠO RA CÁC ĐẶC TRƯNG MỚI** (là tổ hợp của các biến cũ). |
| **Ý nghĩa vật lý** | Vẫn giữ nguyên ý nghĩa ban đầu (cột diện tích vẫn là diện tích). | Mất đi ý nghĩa vật lý trực quan ban đầu (ví dụ: Thành phần chính PC1 trong PCA là tổ hợp của cả diện tích + số phòng + khoảng cách). |
| **Thuật toán tiêu biểu** | Lasso ($L_1$), Lọc theo tương quan Pearson, RFE. | **PCA (Principal Component Analysis)**, t-SNE, LDA. |

---

# 5. LỜI NGUYỀN SỐ CHIỀU (CURSE OF DIMENSIONALITY)

Nhiều người ngây thơ nghĩ rằng: *"Càng đưa nhiều cột đặc trưng vào mô hình thì mô hình càng thông minh"*. **ĐÂY LÀ MỘT SAI LẦM TAI HẠI!**

Khi số lượng cột đặc trưng $p$ tăng lên quá cao (hàng trăm, hàng ngàn chiều):
1. **Không gian trở nên rỗng tuếch và thưa thớt (Sparsity):** Thể tích không gian tăng theo cấp số nhân ($d$ chiều thì thể tích là $V^d$). Dữ liệu của bạn giống như vài hạt cát nằm trơ trọi giữa một vũ trụ mênh mông.
2. **Các độ đo khoảng cách bị vô hiệu hóa:** Khoảng cách Euclidean giữa bất kỳ cặp điểm nào cũng đều to như nhau $\implies$ Các thuật toán dựa vào khoảng cách (như KNN, K-Means) bị "mù", không thể phân biệt được điểm nào ở gần, điểm nào ở xa!
3. **Mô hình bị Overfitting nghiêm trọng:** Để lấp đầy một không gian 1000 chiều, bạn cần lượng dữ liệu lớn hơn cả số nguyên tử trong vũ trụ. Không đủ dữ liệu sẽ khiến mô hình học vẹt.

👉 **Giải pháp sống còn:** Phải giảm số chiều dữ liệu trước khi huấn luyện $\implies$ Vũ khí số 1 chính là **PCA**!

---

# 6. PCA (PRINCIPAL COMPONENT ANALYSIS) - ĐỈNH CAO TRỌNG TÂM THI CHƯƠNG 2

Đây là phần có mật độ câu hỏi thi trắc nghiệm dày đặc nhất của Chương 2. Hãy nắm chắc từng bản chất sau:

### 6.1 Bản chất và Triết lý của PCA

* **PCA là phương pháp Học không giám sát (Unsupervised Learning):** PCA **HOÀN TOÀN KHÔNG BIẾT VÀ KHÔNG DÙNG ĐẾN NHÃN $y$**! Nó chỉ nhìn vào các đặc trưng $X$.
* **Triết lý của PCA:** Hãy tưởng tượng bạn chụp ảnh một người mẫu. Bạn phải chọn **góc chụp nào mà thấy rõ dáng người nhất** (thấy cả chiều cao và chiều rộng), tránh góc chụp từ trên đỉnh đầu nhìn xuống (người bị thu gọn lại thành một chấm tròn, mất hết thông tin).

```
         y ▲          .  .  * Thành phần chính 1 (PC1): Hướng đám mây tản mát
           │        .  .      rộng nhất (Phương sai MAX - chứa nhiều thông tin nhất)
           │      .  .
           │    .  .  *       * Thành phần chính 2 (PC2): Vuông góc tuyệt đối với PC1,
           │  .  .              chứa lượng thông tin lớn tiếp theo
           └────────────────► x
```

* **Hai mục tiêu tối thượng của PCA:**
  1. **Bảo toàn phương sai tối đa (Maximize Variance):** Hướng nào mà dữ liệu tản mát rộng nhất (phương sai lớn nhất) thì giữ lại nhiều thông tin nhất $\to$ Chọn làm **Thành phần chính 1 (PC1)**.
  2. **Triệt tiêu tương quan (Hiệp phương sai = 0):** Các thành phần chính tiếp theo (PC2, PC3...) **bắt buộc phải VUÔNG GÓC (Trực giao)** với các thành phần trước đó. Điều này giúp loại bỏ hoàn toàn thông tin trùng lặp giữa các biến!

---

### 6.2 Toàn bộ quy trình 7 bước tính toán PCA (Nằm lòng từng bước!)

Đề thi rất hay hỏi: *"Bước thứ 2 trong quy trình PCA là gì?"* hoặc *"Ma trận nào được dùng để tìm trị riêng?"*. Hãy học thuộc 7 bước chuẩn:

#### Bước 1: Tính vector trung bình ($\bar{x}$)
$$\bar{x} = \frac{1}{n} \sum_{i=1}^n x_i$$

#### Bước 2: Tâm hóa dữ liệu (Data Centering) - ⚠️ BƯỚC BẮT BUỘC SỐ 1
$$X_{centered} = X - \bar{x}$$
* **Ý nghĩa trực quan:** Lấy từng điểm dữ liệu trừ đi giá trị trung bình. Việc này giúp **dời toàn bộ đám mây dữ liệu về gốc tọa độ $(0, 0)$** mà không làm thay đổi hình dáng hay khoảng cách tương đối giữa các điểm!

#### Bước 3: Tính ma trận hiệp phương sai (Covariance Matrix $\Sigma$)
$$\Sigma = \frac{1}{n-1} X_{centered}^T X_{centered} \quad (\in \mathbb{R}^{p \times p})$$
* Ma trận vuông kích thước $p \times p$ (với $p$ là số đặc trưng gốc).
* **Đường chéo chính:** Là phương sai của từng biến.
* **Các phần tử ngoài đường chéo:** Là mức độ tương quan giữa các cặp biến.

#### Bước 4: Tìm Trị riêng (Eigenvalues $\lambda$) và Vector riêng (Eigenvectors $v$)
Giải phương trình đặc trưng:
$$\Sigma v_i = \lambda_i v_i$$
* 📐 **Vector riêng ($v_i$):** Quyết định **HƯỚNG** của trục chiếu (các trục tọa độ mới). Vector riêng luôn được chuẩn hóa độ dài bằng $1$ ($\|v_i\| = 1$).
* 📊 **Trị riêng ($\lambda_i$):** Quyết định **ĐỘ LỚN PHƯƠNG SAI** (lượng thông tin) nằm dọc theo hướng của vector riêng đó!

#### Bước 5: Sắp xếp các thành phần theo thứ tự giảm dần
Xếp các trị riêng từ to đến bé:
$$\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_p \ge 0$$
* $\lambda_1$ lớn nhất tương ứng với vector $v_1$ $\implies$ Đây chính là **Thành phần chính 1 (PC1)**.
* $\lambda_2$ lớn nhì tương ứng với vector $v_2$ $\implies$ **Thành phần chính 2 (PC2)**.

#### Bước 6: Chọn $K$ thành phần chính đầu tiên ($K < p$)
Ghép $K$ vector riêng lớn nhất cạnh nhau để tạo thành **Ma trận chiếu $W$**:
$$W = [v_1, v_2, \dots, v_K] \in \mathbb{R}^{p \times K}$$

#### Bước 7: Chiếu dữ liệu sang không gian mới $K$ chiều
$$Z = X_{centered} W \quad (\in \mathbb{R}^{n \times K})$$
Dữ liệu từ $p$ chiều ban đầu nay đã được nén gọn gàng về $K$ chiều mà vẫn giữ lại được tinh hoa thông tin!

---

### 6.3 Tỷ lệ phương sai giải thích (Explained Variance Ratio - EVR)

Làm sao biết được nên nén về bao nhiêu chiều ($K = ?$)? Ta dùng chỉ số **EVR**:

$$EVR_k = \frac{\lambda_k}{\sum_{j=1}^p \lambda_j}$$

* **Ý nghĩa:** Trị riêng của thành phần đó chia cho Tổng tất cả các trị riêng. Cho biết thành phần thứ $k$ **giữ lại được bao nhiêu phần trăm thông tin** của bộ dữ liệu gốc.
* **Tính chất bất biến:** Tổng tỷ lệ phương sai của tất cả các thành phần luôn luôn bằng đúng $1$ ($100\%$):
  $$\sum_{k=1}^p EVR_k = 1.0 \quad (100\%)$$

#### 🧮 Ví dụ bài tập tính toán trắc nghiệm:
Một bộ dữ liệu 3 chiều có ma trận hiệp phương sai cho ra 3 trị riêng: $\lambda_1 = 6.0, \lambda_2 = 3.0, \lambda_3 = 1.0$.
* Tổng các trị riêng: $\sum \lambda = 6.0 + 3.0 + 1.0 = 10.0$.
* Tỷ lệ phương sai của PC1: $EVR_1 = \frac{6.0}{10.0} = 60\%$.
* Tỷ lệ phương sai của PC2: $EVR_2 = \frac{3.0}{10.0} = 30\%$.
* Tỷ lệ phương sai của PC3: $EVR_3 = \frac{1.0}{10.0} = 10\%$.

👉 **Cách chọn số chiều $K$ trong thực tế:**
* Nếu chỉ chọn $K = 1$ (giữ lại PC1): Ta giữ lại được $60\%$ thông tin (mất đi $40\%$, hơi nhiều).
* Nếu chọn $K = 2$ (giữ lại PC1 và PC2): Ta cộng dồn $60\% + 30\% = 90\%$ thông tin! Nén từ 3 chiều xuống 2 chiều mà vẫn bảo toàn được $90\%$ thông tin gốc $\to$ **Quyết định chọn $K = 2$!**

---

# 7. CHỐT LẠI CÁC CÂU HỎI TRẮC NGHIỆM ĐIỂN HÌNH CHƯƠNG 2

1. **Câu hỏi:** Trong một tập dữ liệu có phân phối bị lệch nặng hoặc chứa nhiều giá trị ngoại lai cực đoan, phương pháp điền dữ liệu thiếu nào là tối ưu nhất?
   * 👉 **Đáp án:** Điền bằng **Median (Trung vị)**, vì Median không bị kéo lệch bởi các giá trị ngoại lai.
2. **Câu hỏi:** Tại sao không nên dùng Label Encoding cho các thuộc tính danh mục không có thứ tự (như Màu sắc: Đỏ, Xanh, Vàng)?
   * 👉 **Đáp án:** Vì nó vô tình tạo ra quan hệ thứ tự số học giả định sai trái giữa các danh mục.
3. **Câu hỏi:** PCA là phương pháp học có giám sát hay không giám sát? Mục tiêu toán học cốt lõi là gì?
   * 👉 **Đáp án:** Là phương pháp **Học không giám sát (Unsupervised)**. Mục tiêu là tìm hệ trục tọa độ mới trực giao sao cho **phương sai của dữ liệu chiếu lên là cực đại**.
4. **Câu hỏi:** Bước tiền xử lý nào BẮT BUỘC phải thực hiện trước khi tính ma trận hiệp phương sai trong PCA?
   * 👉 **Đáp án:** **Tâm hóa dữ liệu (Data Centering)** bằng cách lấy từng điểm trừ đi vector trung bình.
5. **Câu hỏi:** Trong PCA, đại lượng nào quyết định lượng thông tin (độ lớn phương sai) mà một thành phần chính nắm giữ?
   * 👉 **Đáp án:** **Trị riêng (Eigenvalue $\lambda$)**. Trị riêng càng lớn thì lượng thông tin giải thích được càng nhiều.
6. **Câu hỏi:** Sự khác biệt cơ bản giữa Lựa chọn đặc trưng (Feature Selection) và Rút trích đặc trưng (Feature Extraction) là gì?
   * 👉 **Đáp án:** Feature Selection chỉ giữ lại tập con của các biến cũ mà không tạo biến mới; Feature Extraction tạo ra các biến hoàn toàn mới thông qua phép biến đổi toán học.
