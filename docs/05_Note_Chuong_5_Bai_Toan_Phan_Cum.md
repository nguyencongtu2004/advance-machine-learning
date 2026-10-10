# 📓 BẢN NOTE CHI TIẾT CHƯƠNG 5: BÀI TOÁN PHÂN CỤM (CLUSTERING)
> **Tài liệu gốc:** [Chuong-5-Bai-toan-phan-cum.pdf](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/Chuong-5-Bai-toan-phan-cum.pdf) (72 trang)  
> **Chủ đề chính:** Học không giám sát, K-Means, K-Means++, Hệ số Silhouette, GMM (thuật toán EM) và DBSCAN (phân cụm mật độ).

---

## 1. Bản chất của Phân cụm (Clustering)
📍 **[Slide Trang 4 – 7]**

### 1.1 Khái niệm cơ bản
* Phân cụm là phương pháp **Học không giám sát (Unsupervised Learning)**.
* Dữ liệu đầu vào chỉ có các vector đặc trưng $X$, **hoàn toàn không có nhãn đầu ra $y$**.
* Mục tiêu: Tự động gom các đối tượng giống nhau vào cùng một nhóm (cụm).

### 1.2 Thế nào là một kết quả phân cụm tốt?
Một bài phân cụm chất lượng cao phải thỏa mãn đồng thời 2 điều kiện:
1. **Độ chặt chẽ nội cụm cao (High Intra-cluster Compactness):** Các điểm dữ liệu nằm trong cùng một cụm phải có khoảng cách rất gần nhau, độ tương đồng cao.
2. **Độ tách biệt ngoại cụm rõ ràng (High Inter-cluster Separation):** Khoảng cách giữa các cụm khác nhau phải càng xa càng tốt.

### 1.3 Ba cách nhìn định nghĩa cụm trong ML
1. **Dựa trên tâm cụm (Centroid-based):** Mỗi cụm được đại diện bởi một điểm trung tâm tọa độ (Ví dụ tiêu biểu: **K-Means**).
2. **Dựa trên xác suất (Distribution-based):** Mỗi cụm được mô hình hóa bởi một phân phối xác suất thống kê (Ví dụ tiêu biểu: **GMM**).
3. **Dựa trên mật độ (Density-based):** Cụm là một vùng liên thông có mật độ điểm dày đặc, được ngăn cách với các cụm khác bởi các vùng thưa thớt (Ví dụ tiêu biểu: **DBSCAN**).

---

## 2. Thuật toán K-Means
📍 **[Slide Trang 8 – 24]**

### 2.1 Đầu vào và Giả định
* **Đầu vào:** $n$ điểm dữ liệu và **số lượng cụm $K$ bắt buộc phải được ấn định trước**.
* ⚠️ **BẮT BUỘC PHẢI CHUẨN HÓA DỮ LIỆU TRƯỚC KHI CHẠY K-MEANS:** Vì K-Means sử dụng khoảng cách Euclidean. Nếu một thuộc tính có thang đo quá lớn (như Thu nhập tính bằng triệu đồng), nó sẽ chi phối toàn bộ khoảng cách và vô hiệu hóa các thuộc tính khác (như Tuổi).

### 2.2 Hàm mục tiêu của K-Means
Tối thiểu hóa tổng bình phương khoảng cách từ các điểm tới tâm cụm của nó (Within-Cluster Sum of Squares - WCSS hay SSE):
$$J = \sum_{k=1}^K \sum_{x \in C_k} \|x - \mu_k\|^2$$
*(Trong đó $\mu_k$ là tọa độ tâm cụm của cụm $C_k$)*.

### 2.3 Thuật toán luân phiên 2 bước của Lloyd (Lloyd's Algorithm)
📍 **[Slide Trang 13 – 16]**

```
                       KHỞI TẠO K TÂM BAN ĐẦU
                                 │
                                 ▼
                     ┌───────────────────────┐
         ┌──────────►│  BƯỚC 1: GÁN CỤM      │
         │           │  (Assignment Step)    │
         │           └───────────┬───────────┘
         │                       │ Gán mỗi điểm vào tâm gần nhất
         │                       ▼
         │           ┌───────────────────────┐
         │           │  BƯỚC 2: CẬP NHẬT TÂM │
         │           │  (Update Step)        │
         │           └───────────┬───────────┘
         │                       │ Tính lại tâm bằng trung bình cộng
         │                       ▼
         └─── KHÔNG ──────── Kiểm tra điều kiện dừng? ──────── ĐÚNG ───► XONG!
```

* **Bước 1 - Gán cụm (Assignment):** Giữ cố định vị trí các tâm $\mu_k$. Với mỗi điểm $x_i$, tính khoảng cách tới tất cả $K$ tâm, gán $x_i$ vào cụm có tâm gần nó nhất.
* **Bước 2 - Cập nhật tâm (Update):** Giữ cố định việc gán cụm. Tính lại tọa độ tâm $\mu_k$ bằng **trung bình cộng tọa độ** của tất cả các điểm thuộc cụm đó:
  $$\mu_k = \frac{1}{|C_k|} \sum_{x \in C_k} x$$
* **Điều kiện dừng của thuật toán:**
  1. Nhãn cụm của các điểm không còn thay đổi giữa 2 vòng lặp liên tiếp.
  2. Độ dịch chuyển của các tâm nhỏ hơn một ngưỡng $\epsilon$ rất bé.
  3. Đạt số vòng lặp tối đa được thiết lập trước.

### 2.4 Ranh giới Voronoi
* Ranh giới giữa các cụm trong K-Means là các đường trung trực thẳng (trong không gian 2D) hoặc các siêu phẳng (trong không gian nhiều chiều).
* Sự phân chia này tạo thành các đa giác gọi là **Phân hoạch Voronoi**.

### 2.5 Hạn chế chí mạng của K-Means - ⚠️ CỰC HAY THI!
📍 **[Slide Trang 23 – 24]**
1. **Nhạy cảm với khởi tạo tâm ban đầu:** Rất dễ bị kẹt ở các cực tiểu địa phương xấu nếu ban đầu chọn ngẫu nhiên các tâm rơi vào cùng một cụm.
2. **Chỉ hoạt động tốt với các cụm có dạng hình cầu / lồi (Convex):** K-Means **thất bại hoàn toàn** khi dữ liệu có hình dạng bất kỳ, uốn lượn phi tuyến (như 2 dải hình trăng khuyết lồng nhau, hoặc vòng tròn đồng tâm).
3. **Giả định các cụm có kích thước và mật độ tương đồng nhau:** Nếu một cụm dày đặc và một cụm thưa thớt, K-Means sẽ chia sai ranh giới.
4. **Nhạy cảm với ngoại lai (Outliers):** Một vài điểm ngoại lai ở rất xa sẽ kéo lệch hẳn tọa độ tâm cụm.

---

## 3. Thuật toán K-Means++ (Khởi tạo tâm thông minh)
📍 **[Slide Trang 25 – 30]**

* **Mục tiêu:** Giải quyết triệt để vấn đề "nhạy cảm khởi tạo" của K-Means truyền thống, giúp các tâm ban đầu phân tán đều khắp không gian dữ liệu.
* **Quy trình 4 bước của K-Means++ (Nằm lòng!):**
  1. Chọn tâm đầu tiên $\mu_1$ hoàn toàn ngẫu nhiên và đồng đều từ tập dữ liệu.
  2. Với mỗi điểm dữ liệu $x$, tính khoảng cách $D(x)$ từ $x$ đến tâm cụm gần nó nhất trong số các tâm đã chọn.
  3. Chọn tâm tiếp theo từ các điểm còn lại với xác suất tỷ lệ thuận với **bình phương khoảng cách**:
     $$P(x) = \frac{D(x)^2}{\sum_{x'} D(x')^2}$$
     *(Điểm nào càng nằm xa các tâm đã chọn thì càng có xác suất cao được chọn làm tâm mới!)*
  4. Lặp lại bước 2 và bước 3 cho đến khi chọn đủ $K$ tâm.
* **Mini-Batch K-Means:** Thay vì dùng toàn bộ dataset để cập nhật tâm ở mỗi bước, ta dùng một lô nhỏ (Mini-batch) ngẫu nhiên $\to$ Tăng tốc độ tính toán gấp nhiều lần trên tập dữ liệu hàng triệu dòng.

---

## 4. Đánh giá chất lượng Phân cụm (Khi không có nhãn thật)
📍 **[Slide Trang 31 – 37]**

### 4.1 Phương pháp Elbow (Khuỷu tay)
* Vẽ đồ thị hàm mất mát $WCSS$ theo số lượng cụm $K$ (từ $K = 1, 2, 3, \dots$).
* Khi $K$ tăng, $WCSS$ luôn giảm (khi $K = n$, $WCSS = 0$).
* **Điểm Elbow (Khuỷu tay):** Là điểm gập khúc rõ rệt trên đồ thị — nơi mà sau đó nếu tăng $K$ tiếp thì $WCSS$ giảm rất ít $\to$ Điểm này là giá trị $K$ tối ưu nhất.

### 4.2 Hệ số Silhouette (Độ bóng) - ⚠️ BẬC THẦY BẪY TRẮC NGHIỆM!
📍 **[Slide Trang 32 – 35]**

Với mỗi điểm dữ liệu $i$, hệ số Silhouette được tính bằng:
$$s(i) = \frac{b(i) - a(i)}{\max(a(i), b(i))}$$
* **$a(i)$ (Độ chặt nội cụm):** Khoảng cách trung bình từ điểm $i$ đến tất cả các điểm khác **trong cùng cụm** của nó. ($a(i)$ càng nhỏ càng tốt).
* **$b(i)$ (Độ tách biệt ngoại cụm):** Khoảng cách trung bình từ điểm $i$ đến tất cả các điểm thuộc **cụm lân cận gần nhất** (cụm khác gần nó nhất). ($b(i)$ càng lớn càng tốt).

#### Ý nghĩa các miền giá trị của Silhouette: $s(i) \in [-1, 1]$
* **$s(i) \approx +1$:** Điểm $i$ nằm rất gần tâm cụm của mình ($a(i) \approx 0$) và rất xa cụm bên cạnh ($b(i)$ lớn) $\to$ **Điểm được phân cụm cực kỳ hoàn hảo!**
* **$s(i) \approx 0$:** Điểm $i$ có khoảng cách tới cụm mình và cụm hàng xóm ngang ngửa nhau ($a(i) \approx b(i)$) $\to$ Điểm nằm ngay sát ranh giới giữa 2 cụm.
* **⚠️ $s(i) < 0$ (Âm) - CÂU HỎI TRẮC NGHIỆM KINH ĐIỂN:**
  - $s(i) < 0 \iff b(i) < a(i)$.
  - Nghĩa là: Điểm $i$ thực tế lại **gần cụm bên cạnh hơn là cụm của chính nó**!
  - 👉 **Ý nghĩa:** **Điểm dữ liệu đã bị gán nhầm cụm!**

---

## 5. GMM (Gaussian Mixture Model - Mô hình hỗn hợp Gaussian)
📍 **[Slide Trang 38 – 49]**

### 5.1 Khái niệm Phân cụm mềm (Soft Clustering)
* Trong K-Means, mỗi điểm chỉ thuộc về đúng 1 cụm (Phân cụm cứng - Hard Clustering).
* Trong **GMM**, mỗi điểm thuộc về các cụm theo một **phân phối xác suất** (ví dụ: Điểm $A$ thuộc Cụm 1 với xác suất $80\%$, Cụm 2 với xác suất $20\%$).
* Mỗi cụm $j$ là một phân phối chuẩn nhiều chiều được xác định bởi 3 tham số:
  1. $\pi_j$: Trọng số pha trộn của cụm ($\sum \pi_j = 1$).
  2. $\mu_j$: Vector kỳ vọng trung tâm của cụm.
  3. $\Sigma_j$: Ma trận hiệp phương sai của cụm.
* ⚠️ **Ưu thế hình học của GMM so với K-Means:** Nhờ ma trận hiệp phương sai $\Sigma_j$, các cụm trong GMM có thể mang **hình elip xoay các hướng khác nhau** với kích thước và độ lệch bất kỳ, không bị gò bó thành hình cầu như K-Means.

### 5.2 Thuật toán EM (Expectation - Maximization)
📍 **[Slide Trang 46 – 47]**
GMM được huấn luyện bằng thuật toán lặp EM gồm 2 bước:
* **E-step (Kỳ vọng):** Giữ cố định các tham số $(\pi, \mu, \Sigma)$, tính xác suất hậu nghiệm (gọi là **Responsibility** $\gamma_{ij}$ — xác suất mềm điểm $i$ thuộc về cụm $j$).
* **M-step (Tối đa hóa):** Dùng các trọng số trách nhiệm $\gamma_{ij}$ vừa tính để cập nhật lại các tham số $\pi_j, \mu_j, \Sigma_j$ bằng trung bình có trọng số.
* Lặp 2 bước cho đến khi hàm Log-Likelihood hội tụ.
* **Chọn số cụm $K$ cho GMM:** Dựa vào tiêu chí thông tin **AIC** (Akaike Information Criterion) hoặc **BIC** (Bayesian Information Criterion). Chọn $K$ có AIC/BIC **nhỏ nhất**.

---

## 6. DBSCAN (Phân cụm dựa trên mật độ và khử nhiễu)
📍 **[Slide Trang 50 – 61]** - ⚠️ CỰC KỲ QUAN TRỌNG!

### 6.1 Bản chất của DBSCAN
* Viết tắt: *Density-Based Spatial Clustering of Applications with Noise*.
* ⚠️ **ĐẶC ĐIỂM SỐ 1:** **HOÀN TOÀN KHÔNG CẦN CHỈ ĐỊNH TRƯỚC SỐ LƯỢNG CỤM $K$!** DBSCAN tự động tìm ra số lượng cụm dựa trên mật độ thực tế của dữ liệu.
* **Hai siêu tham số cốt lõi:**
  1. **$Eps$ ($\varepsilon$ - Epsilon):** Bán kính vùng lân cận xung quanh một điểm đang xét.
  2. **$MinPts$:** Số lượng điểm tối thiểu nằm trong vùng bán kính $Eps$ để vùng đó được xem là đậm đặc.

### 6.2 Phân loại 3 loại điểm trong DBSCAN (Bắt buộc phải thuộc!)
📍 **[Slide Trang 53]**

```
                   * (Điểm Noise - Nằm cô độc ngoài rìa)

           .   .  * (Điểm Border - Có < MinPts điểm nhưng chạm vùng Eps của Core)
         .  *  .
          ( o )   * (Điểm Core - Vùng lân cận Eps chứa >= MinPts điểm)
         .  .  .
```

1. **Core Point (Điểm lõi):** Điểm có **ít nhất $MinPts$ điểm** nằm trong bán kính $Eps$ của nó (**⚠️ TÍNH CẢ CHÍNH NÓ**).
2. **Border Point (Điểm biên):** Điểm có **ít hơn $MinPts$ điểm** trong bán kính $Eps$, nhưng nó nằm trong vùng lân cận $Eps$ của một Core Point nào đó.
3. **Noise Point (Điểm nhiễu / Ngoại lai):** Điểm không phải Core Point cũng không phải Border Point (bị cô lập, mật độ quá thưa thớt) $\to$ Bị gán nhãn là ngoại lai (thường đánh số $-1$).

### 6.3 Cơ chế hình thành cụm
* Một cụm được bắt đầu từ một Core Point và lan truyền mật độ (Density-connected) sang các Core Point lân cận nằm trong bán kính $Eps$.
* Border Point được thu nhận vào cụm nhưng không thể tự mở rộng cụm tiếp.

### 6.4 Ưu điểm vượt trội & Hạn chế của DBSCAN
* **Ưu điểm lớn nhất:**
  - **Nhận diện được các cụm có hình dạng bất kỳ** (hình trăng khuyết, hình xoắn ốc, chữ C phi tuyến).
  - **Tự động phát hiện và loại bỏ điểm nhiễu / ngoại lai (Noise Filtering)**.
  - Không cần biết trước số lượng cụm $K$.
* **Hạn chế:**
  - Thất bại khi dữ liệu có các cụm với **mật độ chênh lệch quá lớn** (vì DBSCAN dùng chung một cặp tham số $Eps, MinPts$ trên toàn bộ không gian).
  - Kém hiệu quả trong không gian nhiều chiều do lời nguyền số chiều (khoảng cách bị loãng).

---

## 7. Bảng so sánh 3 thuật toán Phân cụm kinh điển
📍 **[Slide Trang 69 – 70]**

| Tiêu chí | K-Means | GMM | DBSCAN |
| :--- | :--- | :--- | :--- |
| **Loại phân cụm** | Phân cụm cứng (Hard) | **Phân cụm mềm (Soft)** | Phân cụm cứng (Hard) |
| **Cần biết trước số cụm $K$?** | **BẮT BUỘC CÓ** | **BẮT BUỘC CÓ** | **KHÔNG CẦN BIẾT TRƯỚC** |
| **Hình dạng cụm** | Chỉ cụm hình cầu / lồi | Cụm hình elip xoay hướng | **Hình dạng bất kỳ phi tuyến** |
| **Xử lý điểm nhiễu (Noise)** | Không (ép gán mọi điểm) | Không khử nhiễu | **Tự động nhận diện và khử nhiễu** |
| **Thuật toán tối ưu** | Lặp Lloyd (Gán $\to$ Cập nhật) | Thuật toán EM (E-step $\to$ M-step) | Mở rộng liên thông mật độ |
| **Độ nhạy ngoại lai** | Rất nhạy cảm | Nhạy cảm | **Không bị ảnh hưởng (tự lọc ra)** |

---

## 🎯 CÁC CÂU HỎI TRẮC NGHIỆM ĐIỂN HÌNH CHƯƠNG 5

1. **Câu hỏi:** Thuật toán nào sau đây KHÔNG yêu cầu người dùng phải cung cấp số cụm $K$ trước khi huấn luyện?
   - *Trả lời:* DBSCAN.
2. **Câu hỏi:** Một mẫu dữ liệu có hệ số Silhouette bằng $-0.45$. Kết luận nào sau đây là chính xác?
   - *Trả lời:* Mẫu dữ liệu này đã bị phân cụm sai (gần cụm bên cạnh hơn cụm hiện tại).
3. **Câu hỏi:** Trong bài toán phân cụm tập dữ liệu hình 2 dải trăng khuyết lồng nhau có chứa nhiều điểm nhiễu rải rác, thuật toán nào là phù hợp nhất?
   - *Trả lời:* DBSCAN (vì nhận diện được hình dạng bất kỳ và tự lọc nhiễu).
4. **Câu hỏi:** Trong K-Means++, xác suất một điểm dữ liệu được chọn làm tâm tiếp theo phụ thuộc vào đại lượng nào?
   - *Trả lời:* Tỷ lệ thuận với bình phương khoảng cách $D(x)^2$ từ điểm đó đến tâm gần nhất đã chọn.
5. **Câu hỏi:** Điểm được xem là Core Point trong DBSCAN khi nào?
   - *Trả lời:* Khi vùng lân cận bán kính $Eps$ của nó chứa ít nhất $MinPts$ điểm (tính cả chính nó).
