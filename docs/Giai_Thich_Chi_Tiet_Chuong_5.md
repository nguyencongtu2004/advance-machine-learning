# 🧠 TỔNG HỢP CHI TIẾT TOÀN BỘ GIẢI THÍCH TRỰC QUAN BẢN CHẤT CHƯƠNG 5: BÀI TOÁN PHÂN CỤM (CLUSTERING)
> **Tài liệu gốc:** [05_Note_Chuong_5_Bai_Toan_Phan_Cum.md](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/ôn tập 21-10/05_Note_Chuong_5_Bai_Toan_Phan_Cum.md)  
> **Slide bài giảng:** [Chuong-5-Bai-toan-phan-cum.pdf](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/Chuong-5-Bai-toan-phan-cum.pdf) (72 trang)  
> **Phương pháp học:** Tư duy trực quan, ví dụ đời thường, giải phẫu công thức toán học, sơ đồ ASCII và trọng tâm các bẫy trắc nghiệm phòng thi 21-10.

---

# MỤC LỤC CHI TIẾT
1. [PHẦN 1: BẢN CHẤT CỦA BÀI TOÁN PHÂN CỤM (CLUSTERING)](#phần-1-bản-chất-của-bài-toán-phân-cụm-clustering)
   - [1.1 Khái niệm cơ bản & Khác biệt cốt tử với Phân loại (Classification)](#11-khái-niệm-cơ-bản--khác-biệt-cốt-tử-với-phân-loại-classification)
   - [1.2 Tiêu chí một cụm tốt: Độ chặt nội cụm vs Độ tách biệt ngoại cụm](#12-tiêu-chí-một-cụm-tốt-độ-chặt-nội-cụm-vs-độ-tách-biệt-ngoại-cụm)
   - [1.3 Ba cách nhìn định nghĩa cụm trong ML (Tâm, Xác suất, Mật độ)](#13-ba-cách-nhìn-định-nghĩa-cụm-trong-ml-tâm-xác-suất-mật-độ)
   - [1.4 Vì sao BẮT BUỘC phải Chuẩn hóa thang đo (Feature Scaling)?](#14-vì-sao-bắt-buộc-phải-chuẩn-hóa-thang-đo-feature-scaling)
2. [PHẦN 2: THUẬT TOÁN K-MEANS & THUẬT TOÁN LLOYD](#phần-2-thuật-toán-k-means--thuật-toán-lloyd)
   - [2.1 Giả định & Hàm mục tiêu WCSS (SSE)](#21-giả-định--hàm-mục-tiêu-wcss-sse)
   - [2.2 Chu trình lặp 2 bước của Lloyd (Assignment & Update)](#22-chu-trình-lặp-2-bước-của-lloyd-assignment--update)
   - [2.3 Ranh giới Voronoi & Bản chất hình học](#23-ranh-giới-voronoi--bản-chất-hình-học)
   - [2.4 Ví dụ tính toán bằng tay từng bước (Thiết lập, Vòng 1, Vòng 2)](#24-ví-dụ-tính-toán-bằng-tay-từng-bước-thiết-lập-vòng-1-vòng-2)
   - [2.5 Bốn hạn chế chí mạng của K-Means (Bẫy trắc nghiệm cực hay thi!)](#25-bốn-hạn-chế-chí-mạng-của-k-means-bẫy-trắc-nghiệm-cực-hay-thi)
3. [PHẦN 3: K-MEANS++ (KHỞI TẠO TÂM THÔNG MINH) & MINI-BATCH K-MEANS](#phần-3-k-means-khởi-tạo-tâm-thông-minh--mini-batch-k-means)
   - [3.1 Động lực: Vì sao chọn ngẫu nhiên đồng đều lại nguy hiểm?](#31-động-lực-vì-sao-chọn-ngẫu-nhiên-đồng-đều-lại-nguy-hiểm)
   - [3.2 Quy trình 4 bước của K-Means++ & Công thức xác suất $P(x)$](#32-quy-trình-4-bước-của-k-means--công-thức-xác-suất-px)
   - [3.3 Mini-Batch K-Means: Tối ưu trên tập dữ liệu hàng triệu dòng](#33-mini-batch-k-means-tối-ưu-trên-tập-dữ-liệu-hàng-triệu-dòng)
4. [PHẦN 4: ĐÁNH GIÁ CHẤT LƯỢNG PHÂN CỤM KHI KHÔNG CÓ NHÃN](#phần-4-đánh-giá-chất-lượng-phân-cụm-khi-không-có-nhãn)
   - [4.1 Phương pháp Elbow (Khuỷu tay) & Quy luật suy giảm WCSS](#41-phương-pháp-elbow-khuỷu-tay--quy-luật-suy-giảm-wcss)
   - [4.2 Hệ số Silhouette: Giải phẫu công thức $a(i)$ và $b(i)$](#42-hệ-số-silhouette-giải-phẫu-công-thức-ai-và-bi)
   - [4.3 Ý nghĩa 3 miền giá trị: +1, 0, và Bẫy số âm $s(i) < 0$](#43-ý-nghĩa-3-miền-giá-trị-1-0-và-bẫy-số-âm-si--0)
   - [4.4 Cách đọc Biểu đồ Silhouette Plot (Độ rộng, độ dày, thanh vượt ngưỡng)](#44-cách-đọc-biểu-đồ-silhouette-plot-độ-rộng-độ-dày-thanh-vượt-ngưỡng)
5. [PHẦN 5: GMM (GAUSSIAN MIXTURE MODEL) & THUẬT TOÁN EM](#phần-5-gmm-gaussian-mixture-model--thuật-toán-em)
   - [5.1 Phân cụm mềm (Soft Clustering) vs Phân cụm cứng (Hard Clustering)](#51-phân-cụm-mềm-soft-clustering-vs-phân-cụm-cứng-hard-clustering)
   - [5.2 Ba tham số: Trọng số pha trộn $\pi_j$, Tâm $\mu_j$, Hiệp phương sai $\Sigma_j$](#52-ba-tham-số-trọng-số-pha-trộn-pi_j-tâm-mu_j-hiệp-phương-sai-sigma_j)
   - [5.3 Ma trận hiệp phương sai quyết định hình học cụm (Spherical, Diagonal, Full)](#53-ma-trận-hiệp-phương-sai-quyết-định-hình-học-cụm-spherical-diagonal-full)
   - [5.4 Thuật toán EM (Expectation - Maximization): Trách nhiệm $\gamma_{ij}$ & Cập nhật](#54-thuật-toán-em-expectation---maximization-trách-nhiệm-gamma_ij--cập-nhật)
   - [5.5 Chọn số thành phần $K$ bằng tiêu chí AIC và BIC](#55-chọn-số-thành-phần-k-bằng-tiêu-chí-aic-và-bic)
6. [PHẦN 6: DBSCAN (PHÂN CỤM DỰA TRÊN MẬT ĐỘ VÀ KHỬ NHIỄU)](#phần-6-dbscan-phân-cụm-dựa-trên-mật-độ-và-khử-nhiễu)
   - [6.1 Đột phá số 1: Tự động tìm số cụm $K$ & Khử nhiễu](#61-đột-phá-số-1-tự-động-tìm-số-cụm-k--khử-nhiễu)
   - [6.2 Hai siêu tham số cốt lõi: $Eps$ ($\varepsilon$) và $MinPts$](#62-hai-siêu-tham-số-cốt-lõi-eps-varepsilon-và-minpts)
   - [6.3 Phân loại 3 loại điểm: Core Point, Border Point, Noise Point](#63-phân-loại-3-loại-điểm-core-point-border-point-noise-point)
   - [6.4 Cơ chế lan truyền & Mở rộng cụm từ Core](#64-cơ-chế-lan-truyền--mở-rộng-cụm-từ-core)
   - [6.5 Tác động của $Eps$ và $MinPts$: Khi quá nhỏ hoặc quá lớn](#65-tác-động-của-eps-và-minpts-khi-quá-nhỏ-hoặc-quá-lớn)
   - [6.6 Giới hạn của DBSCAN: Mật độ biến thiên và Lời nguyền số chiều](#66-giới-hạn-của-dbscan-mật-độ-biến-thiên-và-lời-nguyền-số-chiều)
7. [PHẦN 7: DEEP CLUSTERING (DEC & DEEPCLUSTER)](#phần-7-deep-clustering-dec--deepcluster)
   - [7.1 Vì sao cần học biểu diễn trước khi phân cụm?](#71-vì-sao-cần-học-biểu-diễn-trước-khi-phân-cụm)
   - [7.2 DEC (Deep Embedding Clustering): Phân phối Student-t & Phân kỳ KL](#72-dec-deep-embedding-clustering-phân-phối-student-t--phân-kỳ-kl)
   - [7.3 Chu trình DeepCluster: Luân phiên biểu diễn CNN và K-Means gán nhãn giả](#73-chu-trình-deepcluster-luân-phiên-biểu-diễn-cnn-và-k-means-gán-nhãn-giả)
8. [PHẦN 8: BẢNG SO SÁNH MA TRẬN 4 HỌ PHÂN CỤM & HƯỚNG DẪN CHỌN MÔ HÌNH](#phần-8-bảng-so-sánh-ma-trận-4-họ-phân-cụm--hướng-dẫn-chọn-mô-hình)
   - [8.1 Ma trận đối chiếu 4 họ thuật toán phân cụm](#81-ma-trận-đối-chiếu-4-họ-thuật-toán-phân-cụm)
   - [8.2 Cây quyết định chọn thuật toán chuẩn xác theo bài toán](#82-cây-quyết-định-chọn-thuật-toán-chuẩn-xác-theo-bài-toán)
9. [PHẦN 9: TUYỂN TẬP 12 CÂU HỎI TRẮC NGHIỆM "TỦ" CHẮC CHẮN GẶP](#phần-9-tuyển-tập-12-câu-hỏi-trắc-nghiệm-tủ-chắc-chắn-gặp)

---

# PHẦN 1: BẢN CHẤT CỦA BÀI TOÁN PHÂN CỤM (CLUSTERING)

---

### 1.1 Khái niệm cơ bản & Khác biệt cốt tử với Phân loại (Classification)
📍 **[Slide Trang 4 – 7]**

Phân cụm là hình thức tiêu biểu nhất của **Học không giám sát (Unsupervised Learning)**. 

```
  PHÂN LOẠI (SUPERVISED)               PHÂN CỤM (UNSUPERVISED)
  Đã biết trước các nhãn                Hoàn toàn KHÔNG CÓ nhãn
  [ Điểm dữ liệu (X, y) ]               [ Chỉ có dữ liệu X ]
          │                                     │
          ▼                                     ▼
  Học ranh giới phân tách               Tự động khám phá cấu trúc ẩn,
  giữa các nhãn đã biết trước           gom nhóm theo độ tương đồng tự nhiên
```

* **Dữ liệu đầu vào:** Chỉ có tập vector đặc trưng $\mathcal{D} = \{x_1, x_2, \dots, x_n\} \subset \mathbb{R}^d$, **hoàn toàn không có nhãn đích $y$ (Ground truth)**.
* **Mục tiêu:** Tự động phát hiện cấu trúc nội tại, quy luật tiềm ẩn và gom các đối tượng tương tự nhau vào cùng một nhóm (cụm).
* **Ứng dụng thực tế tiêu biểu trong slide:**
  1. *Phân khúc khách hàng (Customer Segmentation):* Nhóm khách hàng theo hành vi mua sắm để đưa ra chiến dịch marketing cá nhân hóa.
  2. *Nén ảnh (Image Compression):* Giảm số màu sắc trong ảnh từ 16 triệu màu xuống 16 màu chủ đạo bằng cách gom cụm các giá trị RGB.
  3. *Phát hiện bất thường (Anomaly/Fraud Detection):* Các giao dịch gian lận nằm lẻ loi ngoài các cụm giao dịch bình thường.
  4. *Hệ thống gợi ý (Recommender Systems):* Gom cụm người dùng có cùng sở thích xem phim để gợi ý nội dung.

---

### 1.2 Tiêu chí một cụm tốt: Độ chặt nội cụm vs Độ tách biệt ngoại cụm
📍 **[Slide Trang 5]**

Làm sao biết máy tính đã gom cụm "chuẩn"? Một kết quả phân cụm lý tưởng bắt buộc phải thỏa mãn đồng thời hai mục tiêu đối lập:

```
          CỤM 1                                    CỤM 2
       ╭─────────╮                              ╭─────────╮
       │  *   *  │                              │  #   #  │
       │    *    │ ◄─── ĐỘ CHẶT NỘI CỤM ────►   │    #    │
       │  *   *  │     (Khoảng cách bé nhất)    │  #   #  │
       ╰─────────╯                              ╰─────────╯
            ▲                                        ▲
            └────────── ĐỘ TÁCH BIỆT NGOẠI CỤM ──────┘
                     (Khoảng cách lớn nhất!)
```

1. **Độ chặt chẽ nội cụm (High Intra-cluster Compactness):**
   * Các điểm bên trong cùng một cụm phải càng gần nhau càng tốt (độ tương đồng cao).
   * Về mặt toán học: Tổng khoảng cách giữa các điểm với nhau hoặc với tâm cụm phải **đạt cực tiểu**.
2. **Độ tách biệt ngoại cụm (High Inter-cluster Separation):**
   * Các cụm khác nhau phải nằm cách xa nhau càng nhiều càng tốt (sự khác biệt lớn).
   * Về mặt toán học: Khoảng cách giữa các tâm cụm phải **đạt cực đại**.

---

### 1.3 Ba cách nhìn định nghĩa cụm trong ML (Tâm, Xác suất, Mật độ)
📍 **[Slide Trang 7]**

Trong học máy, không có một định nghĩa duy nhất về "thế nào là một cụm". Có 3 trường phái tư duy chính:

1. **Dựa trên tâm (Centroid-based):**
   * Cụm được định nghĩa bởi một điểm trung tâm đại diện (Centroid). Điểm nào gần tâm nào nhất thì thuộc về cụm đó.
   * *Đại diện tiêu biểu:* **K-Means**.
   * *Hình học cụm:* Thường có dạng hình cầu, ranh giới phân hoạch lồi (Convex).
2. **Dựa trên phân phối xác suất (Distribution-based):**
   * Cụm được mô hình hóa bởi một phân phối xác suất thống kê (ví dụ: Phân phối chuẩn đa biến Gaussian).
   * *Đại diện tiêu biểu:* **GMM (Gaussian Mixture Model)**.
   * *Hình học cụm:* Dạng hình elip có thể xoay nghiêng các hướng khác nhau trong không gian.
3. **Dựa trên mật độ (Density-based):**
   * Cụm là một vùng không gian liên thông có mật độ các điểm dày đặc, được bao quanh bởi các vùng không gian thưa thớt (chứa điểm nhiễu).
   * *Đại diện tiêu biểu:* **DBSCAN**.
   * *Hình học cụm:* Có thể mang **hình dạng uốn lượn bất kỳ phi tuyến** (hình trăng khuyết lồng nhau, hình nhẫn, hình chữ C).

---

### 1.4 Vì sao BẮT BUỘC phải Chuẩn hóa thang đo (Feature Scaling)?
📍 **[Slide Trang 11]** — ⚠️ **BẪY TRẮC NGHIỆM KINH ĐIỂN!**

Khác với Cây quyết định (Decision Tree không cần chuẩn hóa vì chỉ so sánh thứ tự), trong Phân cụm (đặc biệt là K-Means và DBSCAN), việc tính toán **khoảng cách Euclidean** là trái tim của thuật toán:
$$d(x, y) = \sqrt{\sum_{j=1}^d (x_j - y_j)^2}$$

* **Thảm họa nếu không chuẩn hóa:**
  - Giả sử bạn phân cụm khách hàng theo 2 đặc trưng: `Tuổi` ($20 - 70$ tuổi) và `Thu nhập hàng năm` ($10.000.000 - 100.000.000$ VNĐ).
  - Độ chênh lệch về tuổi giữa 2 người tối đa là: $(\Delta \text{Tuổi})^2 = (70 - 20)^2 = 2.500$.
  - Trong khi đó, độ chênh lệch thu nhập là: $(\Delta \text{Thu nhập})^2 = (10^8 - 10^7)^2 \approx 8 \times 10^{15}$!
  - 👉 **Khoảng cách thu nhập lớn gấp hàng tỷ lần khoảng cách tuổi tác! Biến thu nhập sẽ nuốt chửng hoàn toàn biến tuổi tác.** Thuật toán phân cụm lúc này chỉ còn phân cụm theo thu nhập, biến tuổi bị vô hiệu hóa 100%!
* 👉 **KẾT LUẬN THI:** **BẮT BUỘC phải thực hiện Chuẩn hóa thang đo (Min-Max Scaling hoặc Standard Scaling $z$-score) trước khi chạy K-Means và DBSCAN!**

---

# PHẦN 2: THUẬT TOÁN K-MEANS & THUẬT TOÁN LLOYD
📍 **[Slide Trang 8 – 24]**

---

### 2.1 Giả định & Hàm mục tiêu WCSS (SSE)
📍 **[Slide Trang 9 – 12]**

* **Đầu vào:** $n$ điểm dữ liệu $X$ và **số lượng cụm $K$ bắt buộc phải được người dùng chỉ định trước**.
* **Đầu ra:** Tọa độ $K$ tâm cụm $\mu_1, \dots, \mu_K$ và nhãn cụm của từng điểm.
* **Hàm mục tiêu của K-Means (Within-Cluster Sum of Squares - WCSS hay SSE):**
  $$J = \sum_{k=1}^K \sum_{x_i \in C_k} \|x_i - \mu_k\|^2$$
  * $C_k$: Tập hợp các điểm thuộc cụm thứ $k$.
  * $\mu_k$: Vector tọa độ tâm của cụm thứ $k$.
  * $\|x_i - \mu_k\|^2$: Bình phương khoảng cách Euclidean từ điểm $x_i$ đến tâm cụm của nó.
* 💡 **Ý nghĩa:** Mục tiêu là tìm cách phân chia các cụm và đặt các tâm sao cho **tổng bình phương sai số nội cụm $J$ đạt giá trị nhỏ nhất có thể**.

---

### 2.2 Chu trình lặp 2 bước của Lloyd (Assignment & Update)
📍 **[Slide Trang 13 – 16]**

Vì việc tối ưu hóa đồng thời cả nhãn gán cụm lẫn vị trí các tâm là bài toán NP-hard, thuật toán Lloyd sử dụng phương pháp **tối ưu hóa luân phiên 2 bước (Coordinate Descent)**:

```
                   KHỞI TẠO K TÂM BAN ĐẦU (μ_1, ..., μ_K)
                                  │
                                  ▼
                   ┌───────────────────────────────┐
         ┌────────►│  BƯỚC 1: GÁN CỤM              │
         │         │  (Assignment Step)            │
         │         │  Cố định tâm μ, gán điểm      │
         │         │  vào tâm gần nhất             │
         │         └──────────────┬────────────────┘
         │                        │
         │                        ▼
         │         ┌───────────────────────────────┐
         │         │  BƯỚC 2: CẬP NHẬT TÂM         │
         │         │  (Update Step)                │
         │         │  Cố định cụm, tính lại tâm    │
         │         │  bằng trung bình cộng tọa độ  │
         │         └──────────────┬────────────────┘
         │                        │
         │                        ▼
         └─── KHÔNG ─────── Điều kiện dừng? ──────── ĐÚNG ───► HỘI TỤ (XONG!)
                           (Tâm không đổi,
                            nhãn không đổi)
```

1. **Bước 1 - Gán cụm (Assignment):**
   * Giữ cố định tọa độ các tâm $\mu_k$.
   * Với mỗi điểm $x_i$, tính khoảng cách tới tất cả $K$ tâm. Gán $x_i$ vào cụm có tâm gần nó nhất:
     $$c_i = \arg\min_{k} \|x_i - \mu_k\|^2$$
2. **Bước 2 - Cập nhật tâm (Update):**
   * Giữ cố định việc gán nhãn cụm.
   * Tính lại tọa độ tâm $\mu_k$ bằng **trung bình cộng (Centroid)** của toàn bộ các điểm đang thuộc cụm đó:
     $$\mu_k = \frac{1}{|C_k|} \sum_{x \in C_k} x$$
     *(Tại sao lại dùng trung bình cộng? Vì trong giải tích, trung bình cộng chính là điểm làm tối thiểu hóa tổng bình phương khoảng cách Euclidean!)*
3. **Điều kiện dừng của thuật toán:**
   * Tọa độ các tâm $\mu_k$ không còn dịch chuyển (hoặc độ dịch chuyển $< \epsilon$).
   * Không còn điểm dữ liệu nào bị đổi cụm giữa 2 vòng lặp liên tiếp.
   * Đạt giới hạn số vòng lặp tối đa (`max_iter`).

---

### 2.3 Ranh giới Voronoi & Bản chất hình học
📍 **[Slide Trang 22]**

* Trong K-Means, ranh giới phân chia giữa 2 cụm bất kỳ thực chất là **đường trung trực (trong 2D)** hoặc **siêu phẳng trung trực (trong không gian nhiều chiều)** nối giữa 2 tâm cụm.
* Toàn bộ không gian bị phân chia thành các đa giác lồi gọi là **Tế bào Voronoi (Voronoi Cells)**.
* 👉 **Hệ quả hình học sống còn:** Vì ranh giới là các đường thẳng/mặt phẳng trung trực, K-Means **chỉ có thể phân chia các cụm có dạng lồi / hình cầu**. Nó hoàn toàn bất lực trước các cụm có dạng uốn lượn phức tạp!

---

### 2.4 Ví dụ tính toán bằng tay từng bước (Thiết lập, Vòng 1, Vòng 2)
📍 **[Slide Trang 17 – 21]**

Để hiểu sâu sắc bản chất và giải quyết bài tập tự luận/trắc nghiệm, hãy làm theo ví dụ sau:

* **Tập dữ liệu gồm 4 điểm 2D:**
  $A(1, 1), B(2, 1), C(4, 3), D(5, 4)$. Cần phân thành $K = 2$ cụm.
* **Khởi tạo 2 tâm ban đầu:** Chọn $\mu_1 = A(1, 1)$ và $\mu_2 = C(4, 3)$.

#### VÒNG LẶP 1:
* **Bước 1 (Gán cụm):** Tính khoảng cách bình phương từ mỗi điểm tới $\mu_1$ và $\mu_2$:
  - Điểm $A(1, 1)$: $d^2(A, \mu_1) = 0$, $d^2(A, \mu_2) = (1-4)^2 + (1-3)^2 = 9 + 4 = 13 \implies$ **Gán vào Cụm 1**.
  - Điểm $B(2, 1)$: $d^2(B, \mu_1) = (2-1)^2 + (1-1)^2 = 1$, $d^2(B, \mu_2) = (2-4)^2 + (1-3)^2 = 4 + 4 = 8 \implies$ **Gán vào Cụm 1**.
  - Điểm $C(4, 3)$: $d^2(C, \mu_1) = 9 + 4 = 13$, $d^2(C, \mu_2) = 0 \implies$ **Gán vào Cụm 2**.
  - Điểm $D(5, 4)$: $d^2(D, \mu_1) = (5-1)^2 + (4-1)^2 = 16 + 9 = 25$, $d^2(D, \mu_2) = (5-4)^2 + (4-3)^2 = 1 + 1 = 2 \implies$ **Gán vào Cụm 2**.
  - Kết quả gán Vòng 1: Cụm 1 gồm $\{A, B\}$; Cụm 2 gồm $\{C, D\}$.
* **Bước 2 (Cập nhật tâm):**
  - $\mu_1^{mới} = \frac{A + B}{2} = \left(\frac{1+2}{2}, \frac{1+1}{2}\right) = (1.5, 1.0)$.
  - $\mu_2^{mới} = \frac{C + D}{2} = \left(\frac{4+5}{2}, \frac{3+4}{2}\right) = (4.5, 3.5)$.

#### VÒNG LẶP 2:
* **Bước 1 (Gán lại điểm với tâm mới):**
  - Kiểm tra khoảng cách của từng điểm đến $(1.5, 1.0)$ và $(4.5, 3.5)$ $\implies$ Kết quả các điểm vẫn thuộc về Cụm 1 $\{A, B\}$ và Cụm 2 $\{C, D\}$.
* 👉 **Nhãn không đổi $\implies$ THUẬT TOÁN HỘI TỤ VÀ DỪNG LẠI!**

---

### 2.5 Bốn hạn chế chí mạng của K-Means (Bẫy trắc nghiệm cực hay thi!)
📍 **[Slide Trang 23 – 24]**

| Hạn chế | Bản chất & Hậu quả | Ví dụ thực tế |
| :--- | :--- | :--- |
| **1. Nhạy cảm với khởi tạo** | Thuật toán hội tụ về **Cực tiểu địa phương (Local Minima)** chứ không đảm bảo Cực tiểu toàn cục. Nếu chọn 2 tâm ban đầu rơi trúng vào cùng một cụm tự nhiên, kết quả phân cụm sẽ bị sai lệch hoàn toàn. | Phải chạy lại nhiều lần (`n_init=10`) hoặc dùng **K-Means++**. |
| **2. Bắt buộc biết trước số cụm $K$** | Trong thực tế không ai biết trước dữ liệu có bao nhiêu cụm tự nhiên. | Phải dùng thêm kỹ thuật phụ trợ như **Elbow** hoặc **Silhouette**. |
| **3. Chỉ phân cụm hình cầu / lồi** | Ranh giới Voronoi là siêu phẳng tuyến tính $\implies$ **Bất lực trước dữ liệu hình trăng khuyết, hình xoắn ốc hoặc vòng tròn đồng tâm!** | K-Means sẽ cắt đôi dải trăng khuyết thay vì nhận diện trọn vẹn cả dải. |
| **4. Rất nhạy cảm với Ngoại lai (Outliers)** | Vì hàm mất mát tính **bình phương khoảng cách** $\|x - \mu\|^2$, chỉ cần 1 điểm ngoại lai ở rất xa sẽ kéo lệch tâm cụm hàng dặm! | Không có cơ chế lọc nhiễu, điểm nào cũng bị ép gán cụm. |

---

# PHẦN 3: K-MEANS++ (KHỞI TẠO TÂM THÔNG MINH) & MINI-BATCH K-MEANS
📍 **[Slide Trang 25 – 30]**

---

### 3.1 Động lực: Vì sao chọn ngẫu nhiên đồng đều lại nguy hiểm?
📍 **[Slide Trang 25]**

Trong K-Means truyền thống (Forgy method), $K$ tâm được chọn hoàn toàn ngẫu nhiên và đồng đều từ các điểm dữ liệu:
* Nếu vô tình chọn 2 tâm nằm sát sạt nhau trong cùng 1 cụm dày đặc, K-Means sẽ chia cụm đó làm đôi, trong khi 2 cụm ở xa khác lại bị gộp chung vào 1 tâm!
* Kết quả phân cụm bị kẹt ở nghiệm cục bộ cực xấu, $WCSS$ rất cao.

---

### 3.2 Quy trình 4 bước của K-Means++ & Công thức xác suất $P(x)$
📍 **[Slide Trang 26 – 28]** — ⚠️ **TRỌNG TÂM THI CỰC CAO!**

David Arthur và Sergei Vassilvitskii (2007) đề xuất **K-Means++** với triết lý: *"Các tâm ban đầu nên nằm càng cách xa nhau càng tốt"*.

```
  Bước 1: Chọn ngẫu nhiên tâm μ_1
          * (μ_1)
  
  Bước 2 & 3: Tính D(x) đến tâm gần nhất. Điểm càng xa thì xác suất chọn càng cao!
          * (μ_1) ──── D(x) bé (Xác suất thấp) ────► . (Gần)
          * (μ_1) ────────────────── D(x) lớn (Xác suất CỰC CAO!) ──────────────────► ★ (Tâm mới μ_2)
```

**Bốn bước chuẩn mực của thuật toán K-Means++:**
1. **Bước 1:** Chọn ngẫu nhiên đồng đều đúng **1 tâm đầu tiên $\mu_1$** từ tập dữ liệu.
2. **Bước 2:** Với mỗi điểm $x$ chưa được chọn, tính khoảng cách ngắn nhất $D(x)$ từ $x$ đến tâm cụm gần nó nhất trong số các tâm đã chọn:
   $$D(x) = \min_{j} \|x - \mu_j\|$$
3. **Bước 3:** Chọn tâm tiếp theo $\mu_{k}$ từ các điểm dữ liệu còn lại theo phân phối xác suất tỉ lệ thuận với **BÌNH PHƯƠNG KHOẢNG CÁCH**:
   $$P(x) = \frac{D(x)^2}{\sum_{x'} D(x')^2}$$
   * 💡 **Ý nghĩa:** Điểm nào càng nằm xa các tâm đã chọn ($D(x)$ lớn) thì $D(x)^2$ càng khổng lồ $\implies$ Càng có xác suất cực cao được chọn làm tâm tiếp theo! Kỹ thuật này ngăn chặn triệt để việc các tâm bị chọn dồn vào một chỗ.
4. **Bước 4:** Lặp lại Bước 2 và Bước 3 cho đến khi chọn đủ $K$ tâm. Sau đó mới chạy thuật toán Lloyd tiêu chuẩn.

---

### 3.3 Mini-Batch K-Means: Tối ưu trên tập dữ liệu hàng triệu dòng
📍 **[Slide Trang 30]**

* Khi dữ liệu có hàng triệu mẫu, việc tính khoảng cách từ toàn bộ các điểm đến $K$ tâm ở mỗi vòng lặp tốn rất nhiều RAM và CPU.
* **Mini-Batch K-Means (Sculley, 2010):**
  - Ở mỗi vòng lặp, chỉ lấy ngẫu nhiên một **lô nhỏ dữ liệu (Mini-batch)** (ví dụ: $b = 100$ hoặc $500$ mẫu).
  - Gán cụm cho các mẫu trong mini-batch và cập nhật tọa độ tâm theo công thức trung bình động có trọng số.
  - 👉 **Ưu điểm:** Tốc độ nhanh hơn từ $3$ đến $10$ lần, tiết kiệm bộ nhớ tối đa, kết quả xấp xỉ rất sát K-Means chuẩn.

---

# PHẦN 4: ĐÁNH GIÁ CHẤT LƯỢNG PHÂN CỤM KHI KHÔNG CÓ NHÃN
📍 **[Slide Trang 31 – 37]**

---

### 4.1 Phương pháp Elbow (Khuỷu tay) & Quy luật suy giảm WCSS
📍 **[Slide Trang 31]**

Vì không có nhãn đúng ($y$) để tính Accuracy hay F1-Score, ta phải dùng tiêu chí nội tại:

```
  Hàm WCSS (J)
       ▲
       │  \
       │   \
       │    \  ◄── Giảm rất nhanh
       │     \
       │      * ◄── ĐIỂM ELBOW (Khuỷu tay tối ưu, ví dụ K = 3)
       │       \ _ _ _ _ _ _ _
       │                       \ _ _ _  ◄── Giảm rất chậm (bão hòa)
       └─────────────────────────────────► Số lượng cụm K
       0    1   2   3   4   5   6   7
```

* Cho $K$ chạy từ $1, 2, 3, \dots, 10$. Với mỗi $K$, tính giá trị $WCSS(K)$.
* Khi $K$ tăng, $WCSS$ luôn giảm (khi $K = n$, mỗi điểm là 1 cụm thì $WCSS = 0$).
* **Điểm Elbow:** Điểm gập khúc mà trước nó $WCSS$ giảm rất mạnh, nhưng sau nó việc tăng $K$ chỉ làm giảm $WCSS$ một lượng không đáng kể $\implies$ Đây là giá trị $K$ cân bằng hoàn hảo giữa độ nén dữ liệu và độ phức tạp mô hình.

---

### 4.2 Hệ số Silhouette: Giải phẫu công thức $a(i)$ và $b(i)$
📍 **[Slide Trang 32]** — ⚠️ **CÔNG THỨC VÀNG BẮT BUỘC THUỘC!**

Với mỗi điểm dữ liệu $i$, hệ số Silhouette $s(i)$ đo lường mức độ "vừa vặn" của điểm đó trong cụm của mình so với các cụm láng giềng:

$$s(i) = \frac{b(i) - a(i)}{\max(a(i), b(i))}$$

Trong đó:
* **$a(i)$ (Độ chặt nội cụm - Cohesion):** Khoảng cách trung bình từ điểm $i$ đến **tất cả các điểm khác trong cùng cụm với nó**.
  - $a(i)$ càng nhỏ chứng tỏ cụm càng đặc quánh, điểm $i$ càng gần đồng đội $\implies$ **Càng nhỏ càng tốt!**
* **$b(i)$ (Độ tách biệt ngoại cụm - Separation):** Khoảng cách trung bình từ điểm $i$ đến tất cả các điểm thuộc **cụm lân cận gần nhất** (cụm hàng xóm sát nó nhất mà không phải cụm của nó).
  - $b(i)$ càng lớn chứng tỏ cụm hàng xóm càng ở xa $\implies$ **Càng lớn càng tốt!**

---

### 4.3 Ý nghĩa 3 miền giá trị: +1, 0, và Bẫy số âm $s(i) < 0$
📍 **[Slide Trang 33]** — ⚠️ **BẪY TRẮC NGHIỆM ĐỈNH CAO!**

Miền giá trị của Silhouette luôn nằm trong đoạn: **$-1 \le s(i) \le 1$**.

```
  -1 ◄─────────────────────────── 0 ───────────────────────────► +1
  GÁN SAI CỤM!             Nằm sát biên ranh giới           PHÂN CỤM HOÀN HẢO!
  (Gần cụm khác hơn cụm mình)   (Lấp lửng giữa 2 cụm)       (a(i) << b(i))
```

1. **Khi $s(i) \approx +1$ ($a(i) \ll b(i)$):**
   * Điểm $i$ nằm rất sát tâm cụm của mình ($a(i) \approx 0$) và nằm cách rất xa cụm hàng xóm ($b(i)$ lớn).
   * 👉 **Ý nghĩa:** Điểm được phân cụm **rất chuẩn xác và tự tin**.
2. **Khi $s(i) \approx 0$ ($a(i) \approx b(i)$):**
   * Khoảng cách từ điểm $i$ tới cụm của nó xấp xỉ bằng khoảng cách tới cụm bên cạnh.
   * 👉 **Ý nghĩa:** Điểm nằm ngay trên **đường biên ranh giới** giữa 2 cụm, việc xếp nó vào cụm nào cũng chênh vênh.
3. **⚠️ KHI $s(i) < 0$ (Âm) — CÂU HỎI PHÒNG THI 100% CÓ MẶT:**
   * Từ công thức: $s(i) < 0 \iff b(i) - a(i) < 0 \iff \mathbf{b(i) < a(i)}$!
   * Điều này có nghĩa: Khoảng cách từ điểm $i$ tới cụm láng giềng lại **nhỏ hơn** khoảng cách tới các điểm trong cụm của chính nó!
   * 👉 **KẾT LUẬN ĐANH THÉP:** **Điểm $i$ ĐÃ BỊ GÁN NHẦM CỤM!** Điểm này đáng lẽ phải thuộc về cụm hàng xóm mới đúng.

---

### 4.4 Cách đọc Biểu đồ Silhouette Plot (Độ rộng, độ dày, thanh vượt ngưỡng)
📍 **[Slide Trang 34 – 35]**

Silhouette Plot vẽ đồ thị thanh ngang biểu diễn hệ số Silhouette của từng điểm, xếp theo từng cụm:
* **Trục tung (Y-axis):** Các cụm (Cụm 0, Cụm 1, Cụm 2, ...). Độ dày (chiều cao) của từng dải phản ánh **số lượng mẫu** trong cụm đó.
* **Trục hoành (X-axis):** Giá trị Silhouette từ $-1$ đến $+1$.
* **Đường nét đứt màu đỏ:** Đại diện cho **Hệ số Silhouette trung bình (Silhouette Score)** của toàn bộ tập dữ liệu.
* **Dấu hiệu nhận biết kết quả phân cụm tốt qua Silhouette Plot:**
  1. Hầu hết các thanh của mọi cụm đều **vượt qua đường trung bình nét đứt**.
  2. Bề dày (chiều cao) của các cụm **tương đối đồng đều nhau** (không có cụm quá khổng lồ, cụm quá lèo tèo).
  3. **Không có thanh nào thò sang phần âm ($< 0$)** (nghĩa là không có mẫu bị gán sai cụm).

---

# PHẦN 5: GMM (GAUSSIAN MIXTURE MODEL) & THUẬT TOÁN EM
📍 **[Slide Trang 38 – 49]**

---

### 5.1 Phân cụm mềm (Soft Clustering) vs Phân cụm cứng (Hard Clustering)
📍 **[Slide Trang 39 – 40]**

* **Phân cụm cứng (Hard Clustering - như K-Means):** Mỗi điểm dữ liệu $x_i$ bắt buộc phải thuộc về **đúng 1 cụm duy nhất** (xác suất $100\%$ hoặc $0\%$). Điều này gây khiên cưỡng với các điểm nằm ở vùng ranh giới giao nhau giữa 2 cụm.
* **Phân cụm mềm (Soft / Probabilistic Clustering - GMM):** Mỗi điểm dữ liệu thuộc về tất cả các cụm với một **phân phối xác suất**:
  - *Ví dụ:* Điểm $A$ thuộc Cụm 1 với xác suất $75\%$, thuộc Cụm 2 với xác suất $25\%$.
  - Mô hình hóa được sự không chắc chắn (Uncertainty) của dữ liệu thực tế.

---

### 5.2 Ba tham số: Trọng số pha trộn $\pi_j$, Tâm $\mu_j$, Hiệp phương sai $\Sigma_j$
📍 **[Slide Trang 41 – 43]**

GMM giả định toàn bộ tập dữ liệu được sinh ra từ một hỗn hợp gồm $K$ phân phối chuẩn nhiều chiều (Multivariate Gaussian). Mỗi thành phần cụm $j$ được đặc trưng bởi bộ 3 tham số:
$$\theta_j = \{\pi_j, \mu_j, \Sigma_j\}$$

1. **$\pi_j$ (Trọng số pha trộn - Mixture Weight):** Tỷ trọng xác suất tiên nghiệm của cụm $j$ trong toàn bộ tổng thể ($\sum_{j=1}^K \pi_j = 1$ và $0 \le \pi_j \le 1$). Cụm nào có $\pi_j$ lớn hơn thì chứa nhiều điểm hơn.
2. **$\mu_j$ (Vector kỳ vọng trung tâm - Mean Vector):** Tọa độ trung tâm của quả chuông Gaussian cụm $j$ trong không gian $d$ chiều.
3. **$\Sigma_j$ (Ma trận hiệp phương sai - Covariance Matrix):** Kích thước $d \times d$, mô tả phương sai nội tại và mối tương quan giữa các chiều đặc trưng.

---

### 5.3 Ma trận hiệp phương sai quyết định hình học cụm (Spherical, Diagonal, Full)
📍 **[Slide Trang 48]** — ⚠️ **BẪY HÌNH HỌC CỰC HAY THI!**

Dạng của ma trận hiệp phương sai $\Sigma$ quyết định trực tiếp hình dáng hình học của các cụm trong không gian:

```
    SPHERICAL (Hình cầu)            DIAGONAL (Elip thẳng trục)            FULL (Elip xoay tự do)
         ╭───────╮                          ╭─────────────╮                       . - ~ ~ - .
       │    *    │                        │      *      │                   . '    *        ' .
       │  * μ *  │                        │    * μ *    │                 (      * μ *        )
       │    *    │                        │      *      │                   ' .       *     . '
         ╰───────╯                          ╰─────────────╯                       ' - ~ ~ - '
    (Bán kính bằng nhau,            (Các trục song song với trục tọa độ,       (Phương sai và tương quan tự do,
     độc lập hoàn toàn)              không có tương quan giữa các biến)        xoay chéo bất kỳ - Mạnh nhất!)
```

1. **Spherical (Hình cầu):** $\Sigma = \sigma^2 I$. Các chiều đặc trưng có phương sai bằng nhau và độc lập $\implies$ Cụm là hình tròn/hình cầu (tương đương giả định của K-Means).
2. **Diagonal (Đường chéo):** $\Sigma = \text{diag}(\sigma_1^2, \dots, \sigma_d^2)$. Các chiều độc lập nhưng có phương sai khác nhau $\implies$ Cụm là hình elip nhưng **các trục của elip bắt buộc phải song song với các trục tọa độ**.
3. **Full (Đầy đủ):** $\Sigma$ là ma trận đối xứng dương tổng quát $\implies$ **Cụm là hình elip có thể xoay nghiêng theo bất kỳ góc chéo nào trong không gian**, mô tả hoàn hảo mối tương quan giữa các đặc trưng!

---

### 5.4 Thuật toán EM (Expectation - Maximization): Trách nhiệm $\gamma_{ij}$ & Cập nhật
📍 **[Slide Trang 46 – 47]**

Vì nhãn cụm thực sự của từng điểm là **Biến ẩn (Latent Variable $z$)** không quan sát được, ta không thể dùng Đạo hàm hợp lý cực đại (MLE) trực tiếp mà phải dùng thuật toán lặp **EM (Dempster, Laird & Rubin, 1977)**:

#### 1. Bước E (Expectation Step - Kỳ vọng):
* Giữ cố định các tham số $(\pi_j, \mu_j, \Sigma_j)$.
* Tính **Độ trách nhiệm (Responsibility $\gamma_{ij}$)** — tức là xác suất hậu nghiệm điểm $x_i$ được sinh ra bởi thành phần thứ $j$:
  $$\gamma_{ij} = P(z_i = j | x_i) = \frac{\pi_j \mathcal{N}(x_i | \mu_j, \Sigma_j)}{\sum_{k=1}^K \pi_k \mathcal{N}(x_i | \mu_k, \Sigma_k)}$$
  *(Mẫu số đóng vai trò chuẩn hóa để tổng xác suất của điểm $i$ trên mọi cụm bằng đúng 1)*.

#### 2. Bước M (Maximization Step - Tối đa hóa):
* Giữ cố định các trách nhiệm $\gamma_{ij}$ vừa tính.
* Cập nhật lại các tham số bằng phương pháp **trung bình có trọng số (Weighted Average)**:
  - Tổng trách nhiệm của cụm $j$: $N_j = \sum_{i=1}^n \gamma_{ij}$.
  - Trọng số cụm: $\pi_j^{mới} = \frac{N_j}{n}$.
  - Tâm cụm mới: $\mu_j^{mới} = \frac{1}{N_j} \sum_{i=1}^n \gamma_{ij} x_i$.
  - Ma trận hiệp phương sai mới: $\Sigma_j^{mới} = \frac{1}{N_j} \sum_{i=1}^n \gamma_{ij} (x_i - \mu_j^{mới})(x_i - \mu_j^{mới})^T$.
* Lặp 2 bước cho đến khi hàm Log-Likelihood hội tụ. Mỗi bước lặp của EM **đảm bảo không bao giờ làm giảm hàm Log-Likelihood**!

---

### 5.5 Chọn số thành phần $K$ bằng tiêu chí AIC và BIC
📍 **[Slide Trang 49]**

Vì GMM tối ưu hóa hàm Log-Likelihood, nếu ta tăng số cụm $K$ lên vô hạn, mô hình sẽ bị Overfitting. Để chọn $K$ tối ưu, ta phạt thêm độ phức tạp mô hình bằng tiêu chí thông tin:

* **AIC (Akaike Information Criterion):** $\text{AIC} = 2k - 2\ln(L)$
* **BIC (Bayesian Information Criterion):** $\text{BIC} = k\ln(n) - 2\ln(L)$
  *(Trong đó $k$ là tổng số tham số cần ước lượng, $n$ là số mẫu, $L$ là giá trị Likelihood cực đại)*.
* ⚠️ **QUY TẮC PHÒNG THI:** **Chọn số cụm $K$ làm cho giá trị AIC hoặc BIC ĐẠT CỰC TIỂU (NHỎ NHẤT)!** (BIC phạt nặng hơn AIC đối với các mô hình phức tạp khi dữ liệu $n$ lớn).

---

# PHẦN 6: DBSCAN (PHÂN CỤM DỰA TRÊN MẬT ĐỘ VÀ KHỬ NHIỄU)
📍 **[Slide Trang 50 – 61]** — ⚠️ **CỰC KỲ QUAN TRỌNG TRONG ĐỀ THI!**

---

### 6.1 Đột phá số 1: Tự động tìm số cụm $K$ & Khử nhiễu
📍 **[Slide Trang 51]**

DBSCAN (*Density-Based Spatial Clustering of Applications with Noise*) thay đổi hoàn toàn cách tiếp cận so với K-Means và GMM:
1. **KHÔNG CẦN CHỈ ĐỊNH TRƯỚC SỐ LƯỢNG CỤM $K$!** Thuật toán tự quét không gian và tự phát hiện có bao nhiêu cụm tự nhiên.
2. **TỰ ĐỘNG PHÁT HIỆN VÀ LOẠI BỎ ĐIỂM NGOẠI LAI (NOISE FILTERING):** Điểm nào nằm ở vùng thưa thớt không thuộc về cụm nào sẽ bị dán nhãn là Nhiễu (thường ký hiệu nhãn $-1$).

---

### 6.2 Hai siêu tham số cốt lõi: $Eps$ ($\varepsilon$) và $MinPts$
📍 **[Slide Trang 52]**

Mọi hành vi của DBSCAN được kiểm soát bởi cặp thông số:
1. **$Eps$ ($\varepsilon$ - Epsilon):** Bán kính của hình tròn (trong 2D) hoặc quả cầu (trong 3D/nhiều chiều) bao quanh một điểm đang xét $\implies$ Xác định phạm vi "hàng xóm lân cận".
2. **$MinPts$ (Minimum Points):** Số lượng điểm tối thiểu bắt buộc phải có nằm bên trong vùng lân cận bán kính $Eps$ để vùng đó được công nhận là một "vùng đậm đặc".

---

### 6.3 Phân loại 3 loại điểm: Core Point, Border Point, Noise Point
📍 **[Slide Trang 53]** — ⚠️ **ĐỀ THI 100% SẼ HỎI PHÂN LOẠI ĐIỂM!**

```
                 * NOISE (Nằm lẻ loi, lân cận Eps < MinPts và không chạm Core nào)
  
          .   * BORDER (Lân cận Eps < MinPts, nhưng NẰM TRONG VÙNG EPS của Core)
         .  *  .
        (  ★ CORE  )  ◄── Lân cận bán kính Eps chứa >= MinPts điểm (TÍNH CẢ NÓ!)
         .  .  .
```

1. **Core Point (Điểm lõi):**
   * Là điểm mà trong vùng lân cận bán kính $Eps$ của nó có **ÍT NHẤT $MinPts$ điểm**.
   * ⚠️ **LƯU Ý TRẮC NGHIỆM:** **Khi đếm số điểm trong vùng Eps, BẮT BUỘC PHẢI TÍNH CẢ CHÍNH NÓ!** (Nếu vùng xung quanh có $3$ điểm khác, cộng thêm chính nó là $4$ điểm $\ge MinPts = 4 \implies$ Nó là Core Point).
2. **Border Point (Điểm biên):**
   * Bản thân nó **không đủ $MinPts$ điểm** trong bán kính $Eps$ (không đủ tiêu chuẩn làm Core).
   * **NHƯNG** nó lại nằm lọt vào bên trong vùng lân cận bán kính $Eps$ của một Core Point nào đó.
   * Điểm biên đóng vai trò là "rìa mép" ngoài cùng của cụm.
3. **Noise Point (Điểm nhiễu / Ngoại lai):**
   * Điểm không phải Core Point và cũng không phải Border Point (bị cô lập hoàn toàn).
   * Không thuộc về bất kỳ cụm nào.

---

### 6.4 Cơ chế lan truyền & Mở rộng cụm từ Core
📍 **[Slide Trang 54 – 55]**

* **Khả đạt trực tiếp theo mật độ (Directly density-reachable):** Điểm $p$ đạt trực tiếp từ điểm $q$ nếu $q$ là Core Point và $p$ nằm trong bán kính $Eps$ của $q$.
* **Khả đạt theo mật độ (Density-reachable):** Có một chuỗi các Core Point $p_1, p_2, \dots, p_k$ sao cho $p_{i+1}$ đạt trực tiếp từ $p_i$.
* **Liên thông theo mật độ (Density-connected):** Hai điểm $p$ và $q$ được gọi là liên thông nếu cùng khả đạt mật độ từ một Core Point $o$ nào đó.
* 💡 **Thuật toán tạo cụm:**
  1. Bốc một Core Point bất kỳ làm hạt nhân cụm.
  2. Lan truyền hiệu ứng "vết dầu loang" qua tất cả các Core Point có thể kết nối mật độ với nhau.
  3. Gom tất cả các Border Point chạm vào các Core Point này vào chung cụm.
  4. Khi không thể lan truyền thêm được nữa $\implies$ Hoàn thành 1 cụm! Tiếp tục tìm Core Point tự do khác để sinh cụm tiếp theo.

---

### 6.5 Tác động của $Eps$ và $MinPts$: Khi quá nhỏ hoặc quá lớn
📍 **[Slide Trang 57 – 59]**

* **Khi chọn $Eps$ QUÁ NHỎ:**
  - Vùng lân cận quá hẹp, hầu hết các điểm đều không gom đủ $MinPts$ điểm để thành Core.
  - 👉 **Hậu quả:** Phần lớn dữ liệu bị coi là **Nhiễu (Noise)**, hoặc dữ liệu bị băm nát thành hàng trăm cụm li ti siêu nhỏ.
* **Khi chọn $Eps$ QUÁ LỚN:**
  - Vùng lân cận quá rộng, các điểm ở xa cũng chạm vào nhau.
  - 👉 **Hậu quả:** Toàn bộ các cụm riêng biệt bị dính chùm vào nhau thành **đúng một cụm khổng lồ duy nhất**, mất hoàn toàn khả năng phân tách!
* **Quy tắc thực nghiệm chọn tham số:**
  - $MinPts \ge d + 1$ (với $d$ là số chiều không gian), thông thường chọn $MinPts \approx 2d$ (dữ liệu 2D thường chọn $MinPts = 4$).
  - Dùng biểu đồ **k-distance graph** (khoảng cách đến láng giềng thứ $k$), tìm điểm uốn (Elbow) để chọn giá trị $Eps$ phù hợp.

---

### 6.6 Giới hạn của DBSCAN: Mật độ biến thiên và Lời nguyền số chiều
📍 **[Slide Trang 61]**

1. **Thất bại khi dữ liệu có mật độ biến thiên (Varying Densities):**
   - DBSCAN chỉ dùng duy nhất một cặp $(Eps, MinPts)$ cho toàn bộ không gian dữ liệu.
   - Nếu trong dữ liệu vừa có một cụm cực kỳ đậm đặc, vừa có một cụm thưa thớt tự nhiên:
     * Nếu đặt $Eps$ nhỏ để tách cụm đặc $\to$ cụm thưa bị coi là **Nhiễu toàn bộ**!
     * Nếu đặt $Eps$ lớn để nhận cụm thưa $\to$ cụm đặc bị nuốt chửng dính liền với các cụm khác!
2. **Lời nguyền số chiều (Curse of Dimensionality):** Trong không gian nhiều chiều ($d > 50$), không gian bị loãng, khoảng cách Euclidean giữa mọi cặp điểm đều xấp xỉ bằng nhau $\implies$ Khái niệm "vùng mật độ dày đặc" bị phá sản.

---

# PHẦN 7: DEEP CLUSTERING (DEC & DEEPCLUSTER)
📍 **[Slide Trang 62 – 68]**

---

### 7.1 Vì sao cần học biểu diễn trước khi phân cụm?
📍 **[Slide Trang 63 – 64]**

* Với dữ liệu phức tạp nhiều chiều như hình ảnh ($256 \times 256 \times 3$), âm thanh hay văn bản: khoảng cách pixel thô không mang ý nghĩa ngữ nghĩa (2 bức ảnh cùng con mèo nhưng 1 ảnh chụp ban ngày, 1 ảnh ban đêm thì khoảng cách pixel Euclidean cực kỳ xa nhau!).
* **Giải pháp:** Sử dụng Mạng nơ-ron sâu (Deep Neural Networks / Autoencoder) để nén dữ liệu thô $x$ thành một vector tiềm ẩn cấp cao $z$ trong **Không gian ẩn (Latent Space)**. Trong không gian này, các đặc trưng ngữ nghĩa được sắp xếp trật tự, lúc này mới áp dụng phân cụm!

---

### 7.2 DEC (Deep Embedding Clustering): Phân phối Student-t & Phân kỳ KL
📍 **[Slide Trang 65 – 67]**

Mô hình DEC (Xie et al., ICML 2016) thực hiện học biểu diễn và phân cụm đồng thời:
1. **Bước 1 (Gán mềm $q_{ij}$):** Dùng phân phối Student-t (với 1 bậc tự do - phân phối Cauchy) để đo độ tương đồng giữa biểu diễn ẩn $z_i$ và tâm cụm $\mu_j$:
   $$q_{ij} = \frac{(1 + \|z_i - \mu_j\|^2)^{-1}}{\sum_{j'} (1 + \|z_i - \mu_{j'}\|^2)^{-1}}$$
2. **Bước 2 (Phân phối mục tiêu tinh chỉnh $p_{ij}$):** Nâng lũy thừa phân phối $q$ để nhấn mạnh vào các điểm có độ tin cậy cao và làm sạch các điểm biên:
   $$p_{ij} = \frac{q_{ij}^2 / \sum_i q_{ij}}{\sum_{j'} (q_{ij'}^2 / \sum_i q_{ij'})}$$
3. **Bước 3 (Huấn luyện tối thiểu hóa KL Divergence):**
   $$L = \text{KL}(P || Q) = \sum_i \sum_j p_{ij} \log \frac{p_{ij}}{q_{ij}}$$
   * Mạng liên tục ép phân phối dự đoán mềm $Q$ phải tiến sát về phân phối tự cải thiện $P$, giúp các cụm ngày càng co cụm chặt chẽ và tách bạch!

---

### 7.3 Chu trình DeepCluster: Luân phiên biểu diễn CNN và K-Means gán nhãn giả
📍 **[Slide Trang 68]**

Caron et al. (ECCV 2018) phát triển mô hình **DeepCluster** tự giám sát (Self-supervised learning):
* **Vòng lặp bất tận:**
  1. Trích xuất đặc trưng hình ảnh bằng mạng CNN hiện tại.
  2. Dùng **K-Means tiêu chuẩn** để gom cụm các vector đặc trưng này $\implies$ Gán **Nhãn giả (Pseudo-labels)** cho từng bức ảnh.
  3. Dùng các nhãn giả này để huấn luyện ngược lại mạng CNN bằng hàm mất mát Cross-Entropy chuẩn (như học có giám sát).
  4. Lặp lại chu trình: CNN học đặc trưng tốt hơn $\to$ K-Means phân cụm chuẩn hơn $\to$ Tạo nhãn giả xịn hơn!

---

# PHẦN 8: BẢNG SO SÁNH MA TRẬN 4 HỌ PHÂN CỤM & HƯỚNG DẪN CHỌN MÔ HÌNH
📍 **[Slide Trang 69 – 70]** — ⚠️ **BẢNG ĐỐI CHIẾU QUYẾT ĐỊNH ĐIỂM SỐ!**

---

### 8.1 Ma trận đối chiếu 4 họ thuật toán phân cụm

| Tiêu chí so sánh | K-MEANS | GMM (Gaussian Mixture) | DBSCAN | DEEP CLUSTERING (DEC) |
| :--- | :--- | :--- | :--- | :--- |
| **Loại phân cụm** | **Phân cụm cứng (Hard)** | **Phân cụm mềm (Soft)** | **Phân cụm cứng (Hard)** | **Gán mềm (Soft via Student-t)** |
| **Biết trước số cụm $K$?** | **BẮT BUỘC PHẢI CÓ** | **BẮT BUỘC PHẢI CÓ** | **KHÔNG CẦN BIẾT TRƯỚC** | Bắt buộc phải có |
| **Hình dạng cụm hỗ trợ** | Chỉ cụm hình cầu / lồi | **Hình elip xoay các hướng** | **Hình dạng bất kỳ phi tuyến** | Phức tạp trong không gian ẩn |
| **Khả năng lọc ngoại lai** | Không (ép gán mọi điểm) | Kém (bị nhiễu làm lệch) | **TUYỆT VỜI (Gán nhãn -1)** | Tùy thuộc cấu trúc mạng |
| **Thuật toán tối ưu** | Lặp Lloyd (Gán $\to$ Cập nhật) | Thuật toán EM (E-step $\to$ M-step)| Mở rộng liên thông mật độ | Lan truyền ngược (SGD / Adam) |
| **Độ phức tạp tính toán** | Siêu nhanh $\mathcal{O}(n \cdot K \cdot d)$ | Trung bình $\mathcal{O}(n \cdot K \cdot d^3)$ | $\mathcal{O}(n \log n)$ đến $\mathcal{O}(n^2)$ | Rất tốn kém (Huấn luyện GPU) |
| **Dữ liệu áp dụng tốt nhất**| Bảng số liệu, cụm tròn đều | Dữ liệu có sự chồng lấn | Dữ liệu không gian, hình trăng khuyết | Ảnh thô, văn bản, âm thanh |

---

### 8.2 Cây quyết định chọn thuật toán chuẩn xác theo bài toán
📍 **[Slide Trang 70]**

```
                            BẮT ĐẦU BÀI TOÁN PHÂN CỤM
                                        │
             ┌──────────────────────────┴──────────────────────────┐
             ▼ Dữ liệu thô phức tạp (Ảnh, Text)                    ▼ Dữ liệu dạng bảng (Tabular / Số)
     DEEP CLUSTERING                                               │
                                       ┌───────────────────────────┴───────────────────────────┐
                                       ▼ Có chứa nhiều điểm nhiễu? Cụm hình uốn lượn cong queo? ▼ Không có nhiễu, cụm dạng lồi
                                    DBSCAN                                                     │
                                                                   ┌───────────────────────────┴───────────────────────────┐
                                                                   ▼ Cần biết xác suất mềm/Cụm elip?                       ▼ Cần nhanh, đơn giản, baseline
                                                                    GMM                                                     K-MEANS
```

---

# PHẦN 9: TUYỂN TẬP 12 CÂU HỎI TRẮC NGHIỆM "TỦ" CHẮC CHẮN GẶP

1. **Câu 1:** Thuật toán nào trong các thuật toán sau KHÔNG yêu cầu người dùng phải cung cấp số lượng cụm $K$ trước khi huấn luyện?
   * 👉 **Đáp án:** **DBSCAN** (tự động phát hiện số lượng cụm dựa trên mật độ liên thông).
2. **Câu 2:** Một mẫu dữ liệu $i$ có hệ số Silhouette bằng $-0.38$. Điều này thể hiện bản chất gì?
   * 👉 **Đáp án:** Mẫu dữ liệu này **đã bị gán nhầm cụm** (khoảng cách tới cụm láng giềng $b(i)$ nhỏ hơn khoảng cách tới cụm hiện tại $a(i)$).
3. **Câu 3:** Trong thuật toán K-Means++, xác suất một điểm dữ liệu $x$ được chọn làm tâm mới tiếp theo tỉ lệ thuận với đại lượng nào?
   * 👉 **Đáp án:** Tỉ lệ thuận với **bình phương khoảng cách** $D(x)^2$ từ điểm đó đến tâm cụm gần nhất đã chọn.
4. **Câu 4:** Điểm $p$ được coi là Core Point trong thuật toán DBSCAN khi nào?
   * 👉 **Đáp án:** Khi vùng lân cận bán kính $Eps$ của nó chứa **ít nhất $MinPts$ điểm (tính cả chính bản thân nó)**.
5. **Câu 5:** Trong bài toán phân cụm tập dữ liệu hai dải hình trăng khuyết lồng nhau có chứa nhiều điểm nhiễu lác đác, thuật toán nào hoạt động hiệu quả nhất?
   * 👉 **Đáp án:** **DBSCAN** (vì phát hiện được cụm hình dạng bất kỳ và tự động lọc bỏ điểm nhiễu).
6. **Câu 6:** Ranh giới quyết định phân chia giữa các cụm trong thuật toán K-Means tạo thành cấu trúc hình học nào?
   * 👉 **Đáp án:** **Phân hoạch Voronoi (Voronoi Tessellation)** với các ranh giới là các siêu phẳng tuyến tính trực giao.
7. **Câu 7:** Tại sao bắt buộc phải chuẩn hóa thang đo dữ liệu (Feature Scaling) trước khi chạy thuật toán K-Means?
   * 👉 **Đáp án:** Vì K-Means dùng khoảng cách Euclidean; nếu không chuẩn hóa, đặc trưng có độ lớn số học khổng lồ sẽ **chi phối hoàn toàn khoảng cách** và vô hiệu hóa các đặc trưng khác.
8. **Câu 8:** Điểm khác biệt cơ bản nhất giữa GMM (Gaussian Mixture Model) và K-Means là gì?
   * 👉 **Đáp án:** GMM thực hiện **Phân cụm mềm (Soft Clustering)** theo phân phối xác suất và hỗ trợ cụm dạng elip, trong khi K-Means thực hiện **Phân cụm cứng (Hard Clustering)** với cụm dạng cầu.
9. **Câu 9:** Trong thuật toán EM huấn luyện mô hình GMM, Bước E (Expectation step) có nhiệm vụ gì?
   * 👉 **Đáp án:** Giữ cố định tham số mô hình, tính toán **Độ trách nhiệm (Responsibility $\gamma_{ij}$)** — tức xác suất hậu nghiệm điểm $i$ thuộc cụm $j$.
10. **Câu 10:** Để lựa chọn số lượng cụm $K$ tối ưu trong mô hình GMM, người ta chọn $K$ làm cho giá trị AIC hoặc BIC biến đổi như thế nào?
    * 👉 **Đáp án:** Chọn giá trị $K$ mà tại đó **AIC hoặc BIC ĐẠT GIÁ TRỊ NHỎ NHẤT (Cực tiểu)**.
11. **Câu 11:** Trong thuật toán Lloyd của K-Means, việc cập nhật lại tọa độ tâm bằng trung bình cộng các điểm đảm bảo tính chất toán học nào?
    * 👉 **Đáp án:** Đảm bảo hàm mục tiêu tổng bình phương khoảng cách $WCSS$ (SSE) **không bao giờ tăng lên** qua các vòng lặp.
12. **Câu 12:** Điều gì xảy ra với thuật toán DBSCAN nếu ta chọn siêu tham số $Eps$ quá lớn?
    * 👉 **Đáp án:** Hầu hết các cụm riêng biệt sẽ bị nối liền với nhau và **hợp nhất thành một cụm khổng lồ duy nhất**.
