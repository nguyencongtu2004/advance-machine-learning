# 📸 BẢN NOTE CHI TIẾT CHƯƠNG 7: CNN - CONVOLUTIONAL NEURAL NETWORK (MẠNG NƠ-RON TÍCH CHẬP)
> **Tài liệu gốc:** [Chuong-7_CNN-Convolution Neural Network.pdf](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/Chuong-7_CNN-Convolution%20Neural%20Network.pdf) (52 trang)  
> **Chủ đề chính:** Động lực ra đời CNN, Kết nối cục bộ & Chia sẻ trọng số, Lớp Tích chập (Convolution), Lớp Gộp (Pooling), Lớp Kết nối đầy đủ (FC), Công thức kích thước Output, Sự tiến hóa các kiến trúc (LeNet-5, AlexNet, VGGNet, GoogLeNet, ResNet) và Ứng dụng thị giác máy tính.

---

## 1. Tại sao cần CNN? Giới hạn của Mạng truyền thống (Fully Connected / MLP)
📍 **[Slide Trang 4 – 11]**

### 1.1 Ba vấn đề chí tử của Mạng kết nối đầy đủ (MLP) khi xử lý hình ảnh
1. **Bùng nổ số lượng tham số (Parameter Explosion):**
   * Trong MLP, mỗi nơ-ron ở tầng sau phải nối với **tất cả** các pixel ở tầng trước.
   * *Ví dụ minh họa:* Một bức ảnh màu rất nhỏ kích thước $64 \times 64 \times 3$ (chỉ có $12.288$ pixel) nếu kết nối với một tầng ẩn gồm $1.000$ nơ-ron sẽ tạo ra:
     $$\text{Số trọng số} = 12.288 \times 1.000 \approx 12,3 \text{ triệu tham số!}$$
   * Với ảnh độ phân giải cao ($1080p$ hoặc $4K$), số lượng tham số sẽ lên tới hàng tỷ, làm tràn bộ nhớ và không thể huấn luyện nổi.
2. **Làm mất hoàn toàn thông tin không gian (Spatial Structure Loss):**
   * MLP bắt buộc phải "duỗi phẳng" (flatten) bức ảnh 2D/3D thành một vector 1 chiều dài ngoằng.
   * Hành động này xem các pixel hoàn toàn độc lập, **phá hủy hoàn toàn mối tương quan không gian** giữa các pixel lân cận (ví dụ: các pixel tạo nên sống mũi, khóe mắt nằm cạnh nhau sẽ bị xé rời).
3. **Cực kỳ dễ bị Quá khớp (Overfitting):**
   * Số lượng tham số quá khổng lồ so với số lượng mẫu huấn luyện khiến mạng có xu hướng "học vẹt" cả các chi tiết nhiễu thay vì học được các đặc trưng ngữ nghĩa tổng quát.

---

### 1.2 Ba giải pháp đột phá của Mạng tích chập (CNN)
📍 **[Slide Trang 10 – 11]**
* **1. Kết nối cục bộ (Local Connectivity / Receptive Field):**
  - Mỗi nơ-ron tích chập chỉ kết nối với một vùng không gian nhỏ cục bộ của dữ liệu đầu vào (gọi là *Vùng nhận cảm - Receptive Field*) thay vì kết nối với toàn bộ bức ảnh.
* **2. Chia sẻ trọng số (Weight Sharing):**
  - Một bộ lọc (Filter / Kernel) với tập trọng số cố định sẽ được **dùng chung và trượt trên toàn bộ bức ảnh**. Nếu một đặc trưng (như đường cạnh ngang, góc nhọn) hữu ích ở góc trên bên trái, nó cũng hữu ích ở góc dưới bên phải.
  - Nhờ chia sẻ trọng số, số lượng tham số giảm đi hàng nghìn lần!
* **3. Tự động trích xuất đặc trưng phân cấp (Hierarchical Feature Extraction):**
  - Người dùng không cần tự tay thiết kế đặc trưng thủ công (hand-crafted features như SIFT, HOG, Haar-like).
  - Mạng tự học theo cấu trúc phân cấp: Các tầng đầu học các đặc trưng cấp thấp (cạnh, mép, đường cong, màu sắc); các tầng giữa học các bộ phận (mắt, mũi, bánh xe); các tầng sâu học đối tượng hoàn chỉnh (khuôn mặt, chiếc xe).

```
DÒNG CHẢY DỮ LIỆU TỔNG QUÁT TRONG CNN:
[ Ảnh đầu vào ] ──► [ Conv + ReLU ] ──► [ Pooling ] ──► [ Conv + ReLU ] ──► [ Pooling ] ──► [ Flatten ] ──► [ Fully Connected ] ──► [ Softmax ] ──► Dự đoán lớp
                    └─────────────────────────────┘   └─────────────────────────────┘
                               Tầng thấp                         Tầng cao
                       (Trích xuất đặc trưng tự động)            (Đặc trưng trừu tượng)               (Phân loại xác suất)
```

---

## 2. Các tầng cốt lõi trong CNN (Core Layers)
📍 **[Slide Trang 12 – 24]**

CNN cấu thành từ 3 loại lớp chính: **Convolutional Layer (Tích chập)**, **Pooling Layer (Gộp)** và **Fully Connected Layer (Kết nối đầy đủ)** xen kẽ hàm kích hoạt phi tuyến.

### 2.1 Lớp tích chập (Convolutional Layer)
📍 **[Slide Trang 13 – 17]**
* **Bộ lọc (Filter / Kernel):** Là một ma trận trọng số kích thước nhỏ (thường là $3 \times 3$ hoặc $5 \times 5$).
* **Quy tắc về chiều sâu (Filter Depth Rule) - ⚠️ BẪY THI CỰC KỲ QUAN TRỌNG:**
  > **Chiều sâu của bộ lọc (depth) BẮT BUỘC PHẢI BẰNG HOÀN TOÀN chiều sâu của khối dữ liệu đầu vào!**
  > *Ví dụ:* Nếu ảnh đầu vào là ảnh RGB có kích thước $W \times H \times 3$ (3 kênh màu), thì một bộ lọc kích thước $3 \times 3$ thực chất phải có kích thước là $3 \times 3 \times 3$!
* **Cơ chế tính toán:**
  1. Đặt bộ lọc lên một vùng cục bộ tương ứng trên ảnh.
  2. Thực hiện **phép nhân từng phần tử tương ứng (element-wise multiplication)** giữa giá trị pixel và trọng số bộ lọc.
  3. **Cộng tổng (summation)** tất cả các kết quả nhân lại với nhau, rồi cộng thêm một giá trị **bias (độ chệch)** $\implies$ thu được đúng **1 giá trị số thực duy nhất**.
  4. Trượt bộ lọc từ trái sang phải, từ trên xuống dưới trên toàn ảnh để tạo thành một ma trận 2D gọi là **Bản đồ kích hoạt (Activation Map / Feature Map)**.
* **Số lượng Feature Map đầu ra:**
  - Nếu tầng Conv sử dụng $K$ bộ lọc độc lập khác nhau, đầu ra sẽ có đúng **$K$ bản đồ kích hoạt** xếp chồng lên nhau (chiều sâu của khối dữ liệu mới $= K$).

---

### 2.2 Bước nhảy (Stride) & Đệm viền (Padding)
📍 **[Slide Trang 15 – 17]**

* **Stride ($S$ - Bước nhảy):**
  - Là khoảng cách (số lượng pixel) mà bộ lọc di chuyển sau mỗi bước tính toán.
  - $S = 1$: Bộ lọc trượt từng pixel một.
  - $S = 2$: Bộ lọc nhảy cóc qua 2 pixel $\implies$ kích thước bản đồ đặc trưng đầu ra sẽ giảm đi khoảng một nửa.
* **Padding ($P$ - Đệm viền):**
  - Kỹ thuật thêm các viền giá trị số (thường là đệm số 0 - **Zero-padding**) bao quanh 4 phía của dữ liệu đầu vào.
  - **Hai mục đích sống còn của Zero-Padding:**
    1. **Bảo toàn kích thước không gian:** Ngăn chặn việc kích thước ảnh bị teo nhỏ dần sau mỗi lớp tích chập liên tiếp.
    2. **Chống mất thông tin vùng rìa:** Các pixel ở góc và mép ảnh nếu không đệm sẽ chỉ được bộ lọc quét qua 1 lần, trong khi pixel ở giữa được quét nhiều lần. Padding giúp các pixel rìa được tham gia tính toán nhiều hơn.

---

### 2.3 ⚠️ CÔNG THỨC VÀNG BẤM MÁY TÍNH: TÍNH KÍCH THƯỚC ĐẦU RA (OUTPUT SIZE)
📍 **[Slide Trang 15]** - **(CÂU HỎI THI TÍNH TOÁN 100% CÓ MẶT!)**

Nếu khối dữ liệu đầu vào có kích thước chiều ngang/dọc là $N$, kích thước bộ lọc là $F$, độ rộng đệm là $P$, và bước nhảy là $S$ ($Stride$):

$$\text{Output Size} = \left\lfloor \frac{N + 2P - F}{S} \right\rfloor + 1$$

* **Bài tập mẫu kinh điển 1:**
  - Đầu vào ảnh $N = 32$, bộ lọc $F = 5$, không có padding ($P = 0$), bước nhảy $S = 1$:
    $$\text{Output} = \frac{32 + 2(0) - 5}{1} + 1 = 27 + 1 = 28$$
  - Đầu ra là ma trận $28 \times 28$.
* **Bài tập mẫu kinh điển 2 (Same Padding):**
  - Để kích thước đầu ra bằng đúng đầu vào ($\text{Output} = N$) khi $S = 1$, ta cần chọn độ rộng padding là:
    $$P = \frac{F - 1}{2}$$
    *(Ví dụ với bộ lọc $F = 3 \times 3$, ta chọn $P = 1$; với bộ lọc $F = 5 \times 5$, ta chọn $P = 2$)*.

---

### 2.4 Hàm kích hoạt trong CNN: Vì sao ReLU là lựa chọn mặc định?
📍 **[Slide Trang 18 – 20]**
* **ReLU (Rectified Linear Unit):** Công thức $f(x) = \max(0, x)$. Quy ước $\text{ReLU}'(0) = 0$.
* **Vai trò:** Xen kẽ giữa các tầng Conv để đưa **tính phi tuyến** vào mạng. Nếu không có hàm kích hoạt, chuỗi các phép tích chập chỉ tương đương với một phép biến đổi tuyến tính đơn giản.
* **Ưu điểm vượt trội của ReLU trong CNN:**
  1. **Tốc độ tính toán siêu nhanh:** Chỉ là phép so sánh logic ngưỡng 0, không cần tính số mũ $e^z$ nặng nề.
  2. **Hội tụ cực nhanh:** Thực nghiệm cho thấy ReLU giúp mạng hội tụ **nhanh hơn khoảng 6 lần** so với dùng Sigmoid hoặc Tanh!
  3. **Khắc phục Triệt tiêu đạo hàm (Vanishing Gradient):** Đạo hàm miền dương luôn bằng $1$.
* **Nhược điểm của Sigmoid & Tanh:** Khi đầu vào có trị tuyệt đối lớn (rất âm hoặc rất dương), gradient tiến sát về $0 \implies$ Trọng số của các tầng tích chập phía trước gần như không được cập nhật.

---

### 2.5 Lớp gộp (Pooling Layer / Downsampling)
📍 **[Slide Trang 21 – 22]**
* **Vị trí & Mục đích:** Đặt xen kẽ giữa các lớp Conv để giảm kích thước không gian (chiều rộng $W$ và chiều cao $H$) của feature map, giúp:
  - Giảm mạnh khối lượng tính toán và dung lượng bộ nhớ cho các lớp phía sau.
  - Giảm thiểu nguy cơ Overfitting.
* **Đặc tính kỹ thuật cốt lõi - ⚠️ BẪY TRẮC NGHIỆM:**
  1. **HOÀN TOÀN KHÔNG CÓ THAM SỐ CẦN HUẤN LUYỆN (Zero learnable parameters):** Lớp Pooling chỉ áp dụng một phép tính toán học cố định (Max hoặc Average), không có trọng số $W$ hay bias $b$.
  2. **Hoạt động độc lập trên từng kênh (Channel-independent):** Pooling chỉ thu nhỏ kích thước không gian $(H, W)$, **giữ nguyên hoàn toàn chiều sâu (số kênh $D$)** của khối dữ liệu!
* **Hai loại phổ biến:**
  - **Max Pooling (Phổ biến nhất):** Lấy giá trị lớn nhất trong cửa sổ trượt (thường dùng cửa sổ $2 \times 2$, $S = 2$, giúp giảm kích thước ảnh đi một nửa).
  - **Average Pooling:** Tính giá trị trung bình của các phần tử trong cửa sổ.
* **Ý nghĩa hình học quan trọng:** Max Pooling giúp tạo ra **tính bất biến đối với các thay đổi nhỏ** như phép tịnh tiến (translation invariance) hoặc phép co dãn, méo mó (deformation invariance) của đối tượng trong ảnh.

```
Minh họa Max Pooling (Cửa sổ 2x2, Stride = 2):
┌────────┬────────┐
│ 1   3  │ 2   4  │         ┌────┬────┐
│ 5   6  │ 7   8  │  ───►   │ 6  │ 8  │
├────────┼────────┤         ├────┼────┤
│ 3   2  │ 1   0  │         │ 3  │ 4  │
│ 1   2  │ 3   4  │         └────┴────┘
└────────┴────────┘
```

---

### 2.6 Lớp Kết nối đầy đủ (Fully Connected - FC) & Softmax
📍 **[Slide Trang 23 – 24]**
* **Bước làm phẳng (Flattening):**
  - Chuyển khối đặc trưng 3 chiều cuối cùng $(H \times W \times D)$ thành một vector 1 chiều có số chiều là $H \times W \times D$.
  - *Ý nghĩa:* Dữ liệu sau các tầng Conv/Pool đang ở dạng ma trận không gian; Flattening giúp dàn phẳng để đưa vào mạng MLP truyền thống nhằm tổng hợp mọi đặc trưng lại với nhau.
* **Lớp đầu ra Softmax:**
  - Đặt tại tầng cuối cùng của mạng phân loại.
  - Chuyển đổi các giá trị số thực tự do (logits) thành **phân phối xác suất** của $C$ lớp đối tượng:
    $$P(y = k | x) = \frac{e^{z_k}}{\sum_{j=1}^C e^{z_j}}$$
  - Tổng các xác suất luôn bằng $1$. Mô hình chọn lớp có xác suất cao nhất làm nhãn dự đoán.

---

## 3. Sự tiến hóa của các kiến trúc CNN tiêu biểu (1998 – 2015)
📍 **[Slide Trang 25 – 37]** - ⚠️ ĐỈNH CAO BÀI TẬP VÀ CÂU HỎI SO SÁNH TRẮC NGHIỆM!

```
LỊCH SỬ TIẾN HÓA CÁC KIẾN TRÚC CNN KINH ĐIỂN:
1998: LeNet-5 (7 lớp)       ──► Tiên phong áp dụng Backprop nhận dạng chữ số trên séc
2012: AlexNet (8 lớp)       ──► Vô địch ILSVRC 2012, bùng nổ Deep Learning (ReLU, Dropout, GPU)
2014: VGGNet (16-19 lớp)    ──► Triết lý xếp chồng các bộ lọc nhỏ 3x3 thay vì bộ lọc lớn
2014: GoogLeNet (22 lớp)    ──► Khối Inception song song đa quy mô, nút cổ chai 1x1 Conv, GAP
2015: ResNet (152 lớp)      ──► Đột phá mạng siêu sâu với Residual Learning & Skip Connection (Lỗi 3.57% < người)
```

---

### 3.1 LeNet-5 (1998) - Kiến trúc tiên phong của Yann LeCun
📍 **[Slide Trang 27 – 28]**
* **Tác giả & Bài toán:** Được thiết kế bởi Yann LeCun nhằm nhận dạng chữ số viết tay trên các tấm séc ngân hàng và mã bưu điện (tập dữ liệu MNIST).
* **Cột mốc lịch sử:** Là mô hình đầu tiên áp dụng thành công thuật toán **Lan truyền ngược (Backpropagation)** trên mạng tích chập để tự động học trọng số.
* **Cấu trúc mạng:** Gồm **7 lớp** (không tính tầng input):
  - Chuỗi lặp lại 2 lần: `[Tích chập (Conv) + Gộp trung bình (Average Pooling)]`
  - Tiếp theo là các lớp Kết nối đầy đủ (FC layers) và tầng đầu ra 10 lớp (chữ số $0 - 9$).

---

### 3.2 AlexNet (2012) - Kỷ nguyên bùng nổ Deep Learning
📍 **[Slide Trang 29 – 30]**
* **Thành tựu:** Vô địch áp đảo cuộc thi ImageNet Large Scale Visual Recognition Challenge (ILSVRC 2012), bỏ xa các phương pháp học máy truyền thống, mở ra thời kỳ hoàng kim của Deep Learning.
* **Quy mô:** Gồm **8 lớp học được** (5 lớp Conv + 3 lớp FC), chứa khoảng **60 triệu tham số** (gấp 1.000 lần LeNet-5).
* **Ba cải tiến kỹ thuật then chốt mang tính cách mạng:**
  1. **Sử dụng hàm kích hoạt ReLU:** Thay thế Sigmoid/Tanh, giúp mạng huấn luyện hội tụ nhanh hơn gấp 6 lần.
  2. **Kỹ thuật Dropout:** Đặt tại các lớp FC để ngắt ngẫu nhiên các nơ-ron, chống hiện tượng Overfitting hiệu quả.
  3. **Huấn luyện phân tán trên 2 card đồ họa GPU:** Tận dụng năng lực tính toán song song ma trận của GPU để huấn luyện trên hàng triệu bức ảnh.

---

### 3.3 VGGNet (2014) - Sức mạnh của sự đơn giản và chiều sâu
📍 **[Slide Trang 31 – 32]**
* **Tác giả:** Simonyan & Zisserman (Đại học Oxford) - Đạt giải Á quân ILSVRC 2014 (Top-5 error: 7.3%).
* **Hai phiên bản nổi tiếng:** **VGG-16** (16 lớp) và **VGG-19** (19 lớp).
* **Triết lý thiết kế đột phá:** 
  - Loại bỏ hoàn toàn các bộ lọc kích thước lớn (như $7 \times 7$ hay $11 \times 11$).
  - **CHỈ SỬ DỤNG DUY NHẤT các bộ lọc nhỏ kích thước $3 \times 3$ (với Stride = 1, Padding = 1) xếp chồng liên tiếp nhau**, xen kẽ với các lớp Max Pooling $2 \times 2$ (Stride = 2).
* **⚠️ VÌ SAO DÙNG 3 LỚP $3 \times 3$ LẠI TỐT HƠN 1 LỚP $7 \times 7$? (CÂU HỎI TRỌNG TÂM):**
  1. **Vùng nhận cảm tương đương:** Việc xếp chồng 3 lớp tích chập $3 \times 3$ liên tiếp bao phủ đúng một vùng nhận cảm cục bộ kích thước $7 \times 7$.
  2. **Tăng tính phi tuyến:** 3 lớp $3 \times 3$ có tới 3 hàm kích hoạt ReLU xen kẽ, giúp mạng học được các hàm phức tạp và phân biệt sắc nét hơn nhiều so với chỉ 1 hàm ReLU của lớp $7 \times 7$.
  3. **Tiết kiệm đáng kể số lượng tham số:**
     - Giả sử số kênh vào và ra đều là $C$:
       $$\text{Tham số của 1 lớp } 7 \times 7 = 7 \times 7 \times C \times C = 49 C^2$$
       $$\text{Tham số của 3 lớp } 3 \times 3 = 3 \times (3 \times 3 \times C \times C) = 27 C^2$$
     - Số lượng tham số giảm gần **$45\%$**!

---

### 3.4 GoogLeNet / Inception v1 (2014) - Tối ưu hóa hiệu năng và Đa quy mô
📍 **[Slide Trang 33 – 35]**
* **Thành tựu:** Vô địch ILSVRC 2014 (Top-5 error: 6.7%).
* **Quy mô ấn tượng:** Độ sâu lên tới **22 lớp**, nhưng chỉ có khoảng **5 triệu tham số** (ít hơn AlexNet tới 12 lần dù sâu hơn gần gấp 3 lần!).
* **Ba đột phá kiến trúc độc nhất vô nhị:**
  1. **Khối Inception (Multi-scale processing):**
     - Thay vì băn khoăn nên chọn filter $1 \times 1$, $3 \times 3$ hay $5 \times 5$, GoogLeNet chạy **song song đồng thời** cả 4 nhánh: Conv $1 \times 1$, Conv $3 \times 3$, Conv $5 \times 5$ và Max Pooling $3 \times 3$ trong cùng một tầng.
     - Đầu ra của 4 nhánh được ghép lại (concatenate) theo chiều sâu kênh.
  2. **Lớp tích chập $1 \times 1$ làm "Nút cổ chai" (Bottleneck):**
     - Tích chập $1 \times 1$ có vai trò **giảm số chiều sâu kênh (Channel dimensionality reduction)** trước khi đi vào các phép tính Conv $3 \times 3$ và $5 \times 5$ tốn kém.
     - Giúp giảm khối lượng tính toán từ 854 triệu phép tính xuống chỉ còn 353 triệu phép tính trong mỗi khối Inception!
  3. **Global Average Pooling (GAP):**
     - Thay thế toàn bộ các lớp Fully Connected nặng nề ở cuối mạng bằng một lớp lấy trung bình toàn cục trên mỗi feature map.
     - Triệt tiêu phần lớn số lượng tham số dễ gây overfitting nhất ở cuối mạng.

---

### 3.5 ResNet (2015) - Đột phá Mạng siêu sâu với Kết nối phần dư
📍 **[Slide Trang 36 – 37]**
* **Tác giả:** Kaiming He cùng cộng sự (Microsoft Research) - Vô địch tuyệt đối ILSVRC 2015.
* **Kỷ lục lịch sử:** Đạt sai số Top-5 chỉ **$3.57\%$**, lần đầu tiên trong lịch sử trí tuệ nhân tạo **vượt qua độ chính xác của mắt người** (ngưỡng sai số người khoảng $5.1\%$).
* **Vấn đề suy biến mạng sâu (Degradation Problem):**
  - Trước ResNet, khi người ta cố gắng tăng độ sâu của mạng lên (ví dụ từ 20 lớp lên 56 lớp), **sai số trên cả tập huấn luyện (Train error) lẫn tập kiểm thử đều tăng vọt**!
  - ⚠️ **Lưu ý trắc nghiệm:** Hiện tượng này **KHÔNG PHẢI do Overfitting** (vì nếu overfit thì train error phải rất thấp), mà là do mạng quá sâu khiến hàm mất mát trở nên cực kỳ gồ ghề, thuật toán Gradient Descent bị bế tắc và không thể tối ưu hóa nổi.
* **Giải pháp cốt lõi - Kết nối tắt (Skip Connection / Shortcut Connection):**
  - Cho phép tín hiệu đầu vào $x$ nhảy cóc qua một vài tầng trung gian và được cộng trực tiếp vào đầu ra:
    $$\mathcal{H}(x) = \mathcal{F}(x) + x$$
  - **Học biểu diễn phần dư (Residual Learning):** Mạng không cần học toàn bộ hàm mục tiêu $\mathcal{H}(x)$, mà chỉ cần học phần chênh lệch dư $\mathcal{F}(x) = \mathcal{H}(x) - x$.
  - Nếu tầng đó không học được gì hữu ích, mạng chỉ cần ép các trọng số $\mathcal{F}(x) \to 0$, khi đó $\mathcal{H}(x) = x$ (phép ánh xạ đồng nhất - Identity mapping), mạng sâu ít nhất vẫn giữ nguyên hiệu năng bằng mạng nông.
  - Về mặt toán học, khi tính đạo hàm theo chuỗi:
    $$\frac{\partial \mathcal{E}}{\partial x} = \frac{\partial \mathcal{E}}{\partial \mathcal{H}} \left( \frac{\partial \mathcal{F}}{\partial x} + 1 \right)$$
    Nhờ có hằng số $+1$, gradient có một **"đường cao tốc" (gradient highway)** chảy thẳng tắp ngược về các tầng đầu tiên mà không bao giờ bị triệt tiêu!
* **Quy mô kiến trúc:** Xây dựng thành công các mạng siêu sâu từ 50, 101 cho đến **152 lớp**.
* **Khối Bottleneck của ResNet-50+:** Sử dụng chuỗi 3 lớp tích chập: `Conv 1x1 (giảm kênh) ──► Conv 3x3 ──► Conv 1x1 (phục hồi kênh)`.

---

## 4. Bảng Ma trận so sánh 5 Kiến trúc CNN Kinh điển
📍 **[Tổng hợp cốt lõi phục vụ ôn thi tốc hành]**

| Tiêu chí | LeNet-5 (1998) | AlexNet (2012) | VGGNet (2014) | GoogLeNet (2014) | ResNet (2015) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Số lớp học được** | 7 lớp | 8 lớp | 16 – 19 lớp | 22 lớp | Lên tới 152 lớp |
| **Số tham số** | $\approx 60.000$ | $\approx 60$ triệu | $\approx 138$ triệu | $\approx 5$ triệu | $\approx 25$ triệu (ResNet-50) |
| **Kích thước Filter Conv** | $5 \times 5$ | $11 \times 11, 5 \times 5, 3 \times 3$ | **Chỉ dùng $3 \times 3$** | Đa quy mô ($1 \times 1, 3 \times 3, 5 \times 5$) | $3 \times 3$ và Bottleneck $1 \times 1$ |
| **Lớp Gộp (Pooling)** | Average Pooling | Max Pooling | Max Pooling ($2 \times 2$) | Max Pool & Global Avg Pool | Max Pool & Global Avg Pool |
| **Hàm kích hoạt** | Sigmoid / Tanh | **ReLU** | ReLU | ReLU | ReLU |
| **Kỹ thuật chống Overfit** | Không có | **Dropout**, Data Augment | Dropout, Data Augment | Global Average Pooling | Batch Normalization, Skip Conn |
| **Đột phá công nghệ** | Ứng dụng Backprop đầu tiên | Dùng GPU, ReLU, Dropout | Xếp chồng các filter nhỏ $3 \times 3$ | Khối Inception, Conv 1x1 giảm chiều | Skip/Shortcut, Học phần dư $\mathcal{F}(x) + x$ |
| **Thành tích ILSVRC** | Nhận dạng séc ngân hàng | Vô địch 2012 (Top-5: 16.4%) | Á quân 2014 (Top-5: 7.3%) | Vô địch 2014 (Top-5: 6.7%) | Vô địch 2015 (Top-5: **3.57%**) |

---

## 5. Bốn nhóm bài toán Thị giác máy tính & Ứng dụng thực tế của CNN
📍 **[Slide Trang 38 – 52]**

### 5.1 Phân biệt 4 bài toán thị giác máy tính cốt lõi
1. **Phân loại ảnh (Image Classification):** Gán 1 nhãn duy nhất cho toàn bộ bức ảnh (ví dụ: ảnh này là "Con mèo").
2. **Định vị đối tượng (Localization):** Xác định vị trí của **1 đối tượng duy nhất** trong ảnh bằng một khung bao chữ nhật (Bounding Box: tọa độ tâm $x, y$, chiều rộng $w$, chiều cao $h$).
3. **Phát hiện đối tượng (Object Detection):** Đồng thời xác định vị trí khung bao và phân loại **nhiều đối tượng khác nhau** trong cùng một khung hình.
   * *Thuật toán Hai giai đoạn (Two-stage detectors):* **R-CNN, Fast R-CNN, Faster R-CNN**. Cơ chế: Đề xuất vùng ứng viên (Region Proposal) trước, sau đó mới phân loại và nắn chỉnh khung bao. Độ chính xác rất cao nhưng xử lý chậm.
   * *Thuật toán Một giai đoạn (One-stage detectors):* **YOLO (You Only Look Once), SSD (Single Shot MultiBox Detector)**. Cơ chế: Dự đoán trực tiếp tọa độ hộp và nhãn lớp trên lưới ô trong một lần quét duy nhất. Tốc độ cực nhanh, đạt thời gian thực (Real-time).
4. **Phân đoạn ảnh (Image Segmentation):**
   * *Phân đoạn ngữ nghĩa (Semantic Segmentation):* Gán nhãn lớp cho từng điểm ảnh (pixel). Các đối tượng cùng loại (ví dụ 3 con mèo) sẽ được tô cùng 1 màu nhãn.
   * *Phân đoạn thực thể (Instance Segmentation):* Vừa phân đoạn mức pixel vừa phân biệt rạch ròi từng cá thể riêng biệt (Mèo 1 tô màu đỏ, Mèo 2 tô màu xanh).

---

### 5.2 Các lĩnh vực ứng dụng thực tế tiêu biểu trong slide
📍 **[Slide Trang 40 – 52]**
* **1. Truy vấn ảnh theo nội dung (Content-Based Image Retrieval - CBIR):**
  - Trích xuất vector đặc trưng (Feature Vector / Embedding) ở tầng gần cuối của CNN.
  - So sánh độ tương đồng góc Cosine giữa các vector để tìm kiếm các hình ảnh tương đồng trong cơ sở dữ liệu hàng tỷ ảnh (nền tảng của Google Images, Google Photos).
* **2. Nhận dạng khuôn mặt & Sinh trắc học (Face Recognition & Biometrics):**
  - Apple FaceID (mở khóa điện thoại bảo mật cao).
  - Tính năng phát hiện nụ cười tự động (**Smile Shutter**) trên máy ảnh kỹ thuật số.
  - Nhận diện mống mắt (**Iris Recognition** - ví dụ lịch sử tìm lại "Cô gái Afghanistan" của National Geographic sau hàng chục năm).
  - Quét vân tay (**Fingerprint Scanning**) trên smartphone/laptop.
* **3. Nhận dạng ký tự quang học (OCR) & Giao thông thông minh:**
  - Đọc chữ số viết tay trên séc ngân hàng và thư bưu điện.
  - Hệ thống tự động nhận diện biển số xe (ANPR).
  - Giám sát giao thông: Đếm lưu lượng xe, phát hiện vượt tốc độ, lấn làn.
* **4. Xe tự hành (Autonomous Vehicles):**
  - Nhận diện làn đường, vạch kẻ đường, vỉa hè thông qua phân đoạn ảnh thời gian thực.
  - Phát hiện và theo dõi người đi bộ, phương tiện xung quanh để tránh va chạm.
* **5. Robotics & Thám hiểm không gian:**
  - Robot tự hành trên sao Hỏa (**Mars Rover**) dùng CNN chụp ảnh Panorama, dựng mô hình 3D địa hình và điều hướng tránh chướng ngại vật.
  - Robot nông nghiệp tự động hái dâu tây, thu hoạch trái cây chín.
* **6. AR/VR & Tương tác người - máy:**
  - Nhận diện cử chỉ chuyển động cơ thể trong trò chơi (công nghệ **Microsoft Kinect**).

---

## 🎯 10 CÂU HỎI TRẮC NGHIỆM ĐIỂN HÌNH CHƯƠNG 7 (TỰ ĐÁNH GIÁ NHANH)

1. **Câu hỏi:** Trong một lớp tích chập, nếu ảnh đầu vào có kích thước $64 \times 64 \times 3$, một bộ lọc kích thước $5 \times 5$ sẽ có chiều sâu thực tế là bao nhiêu?
   - *Trả lời:* Chiều sâu là **3** (vì chiều sâu bộ lọc luôn phải bằng chiều sâu khối dữ liệu đầu vào: $5 \times 5 \times 3$).
2. **Câu hỏi:** Một ảnh $32 \times 32$ đi qua lớp Conv với filter $5 \times 5$, Stride = 1, Padding = 2. Kích thước bản đồ kích hoạt đầu ra là bao nhiêu?
   - *Trả lời:* Output $= \frac{32 + 2(2) - 5}{1} + 1 = 32 \times 32$ (Kích thước được bảo toàn - Same padding).
3. **Câu hỏi:** Lớp Pooling (Gộp) có bao nhiêu tham số cần học (weights)?
   - *Trả lời:* **0 tham số** (Pooling là phép toán không tham số, không cần huấn luyện).
4. **Câu hỏi:** Lớp Pooling tác động như thế nào đến chiều sâu (số kênh) của khối dữ liệu?
   - *Trả lời:* **Giữ nguyên chiều sâu**, chỉ làm giảm chiều cao và chiều rộng không gian.
5. **Câu hỏi:** Tại sao VGGNet lại ưu tiên dùng 3 lớp tích chập $3 \times 3$ thay vì 1 lớp $7 \times 7$?
   - *Trả lời:* Cùng vùng nhận cảm $7 \times 7$, nhưng tăng số hàm phi tuyến và giảm số lượng tham số gần 45%.
6. **Câu hỏi:** Kiến trúc nào lần đầu tiên ứng dụng thành công Backpropagation trên mạng tích chập để nhận dạng chữ số viết tay?
   - *Trả lời:* **LeNet-5** (1998 của Yann LeCun).
7. **Câu hỏi:** Ba cải tiến đột phá giúp AlexNet vô địch ILSVRC 2012 là gì?
   - *Trả lời:* Hàm kích hoạt **ReLU**, kỹ thuật **Dropout**, và huấn luyện song song trên **GPU**.
8. **Câu hỏi:** Vai trò của lớp tích chập $1 \times 1$ trong khối Inception của GoogLeNet là gì?
   - *Trả lời:* Giảm số chiều sâu của kênh (nút cổ chai Bottleneck), giúp giảm thiểu khối lượng tính toán.
9. **Câu hỏi:** Hiện tượng suy biến (Degradation) trong các mạng rất sâu trước thời ResNet có phải do Overfitting gây ra không?
   - *Trả lời:* **Không phải do Overfitting**, mà do việc tối ưu hóa mạng sâu gặp khó khăn (khiến cả train error lẫn test error đều tăng).
10. **Câu hỏi:** Thuật toán phát hiện đối tượng nào thuộc nhóm Một giai đoạn (One-stage) cho phép xử lý thời gian thực?
    - *Trả lời:* **YOLO** (You Only Look Once) và **SSD**.
