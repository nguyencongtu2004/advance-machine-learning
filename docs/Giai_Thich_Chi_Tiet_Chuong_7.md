# 🧠 TỔNG HỢP CHI TIẾT TOÀN BỘ GIẢI THÍCH TRỰC QUAN BẢN CHẤT CHƯƠNG 7: CNN (CONVOLUTIONAL NEURAL NETWORK)
> **Tài liệu gốc:** [07_Note_Chuong_7_CNN_Mang_Tich_Chap.md](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/ôn tập 21-10/07_Note_Chuong_7_CNN_Mang_Tich_Chap.md)  
> **Slide bài giảng:** [Chuong-7_CNN-Convolution Neural Network.pdf](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/Chuong-7_CNN-Convolution%20Neural%20Network.pdf) (52 trang)  
> **Phương pháp học:** Tư duy trực quan, ví dụ đời thường, giải phẫu công thức toán học, sơ đồ ASCII và trọng tâm các bẫy trắc nghiệm phòng thi 21-10.

---

# MỤC LỤC CHI TIẾT
1. [PHẦN 1: TẠI SAO CẦN CNN? GIỚI HẠN CHÍ MẠNG CỦA MẠNG MLP](#phần-1-tại-sao-cần-cnn-giới-hạn-chí-mạng-của-mạng-mlp)
   - [1.1 Ba tử huyệt của Mạng kết nối đầy đủ (MLP) khi xử lý hình ảnh](#11-ba-tử-huyệt-của-mạng-kết-nối-đầy-đủ-mlp-khi-xử-lý-hình-ảnh)
   - [1.2 Ba giải pháp đột phá của Mạng tích chập (CNN)](#12-ba-giải-pháp-đột-phá-của-mạng-tích-chập-cnn)
   - [1.3 Các cột mốc lịch sử: 1980 (Neocognitron) ──► 1998 (LeNet-5) ──► 2012 (AlexNet)](#13-các-cột-mốc-lịch-sử-1980-neocognitron----1998-lenet-5----2012-alexnet)
2. [PHẦN 2: CÁC TẦNG CỐT LÕI TRONG MẠNG TÍCH CHẬP (CORE LAYERS)](#phần-2-các-tầng-cốt-lõi-trong-mạng-tích-chập-core-layers)
   - [2.1 Lớp tích chập (Convolutional Layer) & Quy tắc chiều sâu bộ lọc](#21-lớp-tích-chập-convolutional-layer--quy-tắc-chiều-sâu-bộ-lọc)
   - [2.2 Bước nhảy (Stride) & Đệm viền (Zero-Padding)](#22-bước-nhảy-stride--đệm-viền-zero-padding)
   - [2.3 Công thức vàng bấm máy tính: Tính kích thước Output Size](#23-công-thức-vàng-bấm-máy-tính-tính-kích-thước-output-size)
   - [2.4 Công thức tính số lượng tham số của Lớp Conv](#24-công-thức-tính-số-lượng-tham-số-của-lớp-conv)
   - [2.5 Hàm kích hoạt trong CNN: Vì sao ReLU là chuẩn mực tuyệt đối?](#25-hàm-kích-hoạt-trong-cnn-vì-sao-relu-là-chuẩn-mực-tuyệt-đối)
   - [2.6 Lớp gộp (Pooling Layer): Max Pool vs Average Pool & Hai tính chất cốt tử](#26-lớp-gộp-pooling-layer-max-pool-vs-average-pool--hai-tính-chất-cốt-tử)
   - [2.7 Lớp Kết nối đầy đủ (FC), Flattening và Tầng Softmax](#27-lớp-kết-nối-đầy-đủ-fc-flattening-và-tầng-softmax)
3. [PHẦN 3: SỰ TIẾN HÓA CỦA 5 KIẾN TRÚC CNN KINH ĐIỂN (1998 – 2015)](#phần-3-sự-tiến-hóa-của-5-kiến-trúc-cnn-kinh-điển-1998--2015)
   - [3.1 LeNet-5 (1998): Tiên phong Backpropagation trên mạng tích chập](#31-lenet-5-1998-tiên-phong-backpropagation-trên-mạng-tích-chập)
   - [3.2 AlexNet (2012): Bùng nổ Deep Learning (ReLU, Dropout, GPU)](#32-alexnet-2012-bùng-nổ-deep-learning-relu-dropout-gpu)
   - [3.3 VGGNet (2014): Sức mạnh của việc xếp chồng bộ lọc nhỏ 3x3](#33-vggnet-2014-sức-mạnh-của-việc-xếp-chồng-bộ-lọc-nhỏ-3x3)
   - [3.4 GoogLeNet (2014): Khối Inception đa quy mô, Conv 1x1 & GAP](#34-googlenet-2014-khối-inception-đa-quy-mô-conv-1x1--gap)
   - [3.5 ResNet (2015): Cột mốc 152 lớp, Skip Connection & Học phần dư](#35-resnet-2015-cột-mốc-152-lớp-skip-connection--học-phần-dư)
4. [PHẦN 4: MA TRẬN ĐỐI CHIẾU 5 KIẾN TRÚC CNN KINH ĐIỂN](#phần-4-ma-trận-đối-chiếu-5-kiến-trúc-cnn-kinh-điển)
5. [PHẦN 5: BỐN NHÓM BÀI TOÁN THỊ GIÁC MÁY TÍNH & HỆ SINH THÁI ỨNG DỤNG](#phần-5-bốn-nhóm-bài-toán-thị-giác-máy-tính--hệ-sinh-thái-ứng-dụng)
   - [5.1 Phân biệt 4 bài toán: Classification, Localization, Detection, Segmentation](#51-phân-biệt-4-bài-toán-classification-localization-detection-segmentation)
   - [5.2 Hai trường phái Phát hiện đối tượng: Two-stage (R-CNN) vs One-stage (YOLO)](#52-hai-trường-phái-phát-hiện-đối-tượng-two-stage-r-cnn-vs-one-stage-yolo)
   - [5.3 Sáu lĩnh vực ứng dụng thực tế tiêu biểu trong slide](#53-sáu-lĩnh-vực-ứng-dụng-thực-tế-tiêu-biểu-trong-slide)
6. [PHẦN 6: TUYỂN TẬP 12 CÂU HỎI TRẮC NGHIỆM "TỦ" CHẮC CHẮN GẶP PHÒNG THI](#phần-6-tuyển-tập-12-câu-hỏi-trắc-nghiệm-tủ-chắc-chắn-gặp-phòng-thi)

---

# PHẦN 1: TẠI SAO CẦN CNN? GIỚI HẠN CHÍ MẠNG CỦA MẠNG MLP
📍 **[Slide Trang 4 – 11]**

---

### 1.1 Ba tử huyệt của Mạng kết nối đầy đủ (MLP) khi xử lý hình ảnh
📍 **[Slide Trang 9 – 10]**

Trước khi CNN ra đời, người ta thử dùng mạng MLP truyền thống (Fully Connected) để phân loại ảnh. Cách làm này ngay lập tức đối mặt với 3 thất bại thảm hại:

```
  ẢNH 2D/3D (CÓ CẤU TRÚC KHÔNG GIAN)             MẠNG MLP TRUYỀN THỐNG
       ┌───────────┐                              ┌──────────┐
       │ (Mắt)     │                              │   x_1    ├──┐
       │     (Mũi) │ ─── DUỖI PHẲNG (FLATTEN) ──► │   x_2    ├──┼──► HÀNG TRIỆU KẾT NỐI!
       │ (Miệng)   │   (XÉ NÁT KHÔNG GIAN!)       │   ...    ├──┤    (BÙNG NỔ THAM SỐ)
       └───────────┘                              │  x_N     ├──┘
```

1. **Bùng nổ số lượng tham số (Parameter Explosion):**
   * Trong MLP, mỗi nơ-ron ở tầng sau phải nối với **tất cả mọi pixel** ở tầng trước.
   * *Ví dụ trong slide:* Một bức ảnh màu kích thước rất khiêm tốn $64 \times 64 \times 3$ (chỉ có $12.288$ pixel) nếu kết nối với một tầng ẩn gồm $1.000$ nơ-ron:
     $$\text{Số trọng số} = 12.288 \times 1.000 \approx \mathbf{12,3 \text{ triệu tham số!}}$$
   * Nếu đưa vào ảnh Full HD ($1920 \times 1080 \times 3 \approx 6,2$ triệu pixel), chỉ một tầng ẩn đã sinh ra **hàng tỷ tham số**, làm sụp đổ hoàn toàn bộ nhớ máy tính!
2. **Phá hủy hoàn toàn cấu trúc không gian (Spatial Structure Loss):**
   * MLP bắt buộc phải "duỗi phẳng" (Flatten) bức ảnh ma trận 2D/3D thành một vector 1D dài ngoằng.
   * Hành động này xem các pixel độc lập rời rạc, làm **mất đi mối tương quan không gian gần gũi** (ví dụ: các pixel tạo nên sống mũi, khóe mắt nằm sát cạnh nhau bị xé lẻ thành các vị trí cách xa nhau hàng ngàn phần tử trong vector).
3. **Cực kỳ dễ bị Quá khớp (Overfitting):**
   * Mô hình có số lượng tham số quá khổng lồ so với lượng ảnh huấn luyện sẽ có xu hướng "học vẹt" từng điểm nhiễu thay vì học được quy luật tổng quát của đồ vật.

---

### 1.2 Ba giải pháp đột phá của Mạng tích chập (CNN)
📍 **[Slide Trang 10 – 11]**

CNN (*Convolutional Neural Network*) giải quyết triệt để 3 vấn đề trên bằng 3 cơ chế mô phỏng thị giác sinh học:

1. **Kết nối cục bộ (Local Connectivity / Receptive Field):**
   * Mỗi nơ-ron tích chập không kết nối với toàn bộ bức ảnh, mà chỉ nhìn vào một vùng không gian nhỏ cục bộ (gọi là *Vùng nhận cảm - Receptive Field*, ví dụ kích thước $3 \times 3$ hoặc $5 \times 5$ pixel).
2. **Chia sẻ trọng số (Weight Sharing):**
   * Thay vì mỗi vị trí dùng một bộ trọng số riêng, một bộ lọc (Kernel / Filter) với tập trọng số cố định sẽ **trượt trên toàn bộ bức ảnh**.
   * *Triết lý:* Nếu một bộ lọc học được cách phát hiện một đường cong hay góc nhọn ở góc trên bên trái, nó hoàn toàn có thể dùng lại đúng bộ trọng số đó để phát hiện đường cong ở bất kỳ vị trí nào khác trên ảnh!
   * 👉 Nhờ chia sẻ trọng số, số lượng tham số giảm đi **hàng triệu lần**!
3. **Học đặc trưng phân cấp tự động (Hierarchical Feature Representation):**
   * Người dùng không cần tự tay ngồi chế tạo đặc trưng thủ công (như SIFT, HOG ngày xưa).
   * Mạng tự động học từ thấp đến cao:
     - **Tầng đầu (Low-level):** Học phát hiện cạnh ngang, cạnh dọc, góc nhọn, đốm màu.
     - **Tầng giữa (Mid-level):** Ghép các cạnh thành bộ phận (mắt, mũi, bánh xe, cánh cửa).
     - **Tầng sâu (High-level):** Ghép các bộ phận thành đối tượng hoàn chỉnh (khuôn mặt, chiếc xe con, con mèo).

```
DÒNG CHẢY DỮ LIỆU ĐẶC TRƯNG PHÂN CẤP:
[ Ảnh đầu vào ] ──► [ Conv + ReLU ] ──► [ Pooling ] ──► [ Conv + ReLU ] ──► [ Pooling ] ──► [ Flatten ] ──► [ FC Layers ] ──► Softmax
                        Tầng thấp (Cạnh, viền)              Tầng cao (Bộ phận)                 Phân loại lớp
```

---

### 1.3 Các cột mốc lịch sử: 1980 (Neocognitron) ──► 1998 (LeNet-5) ──► 2012 (AlexNet)
📍 **[Slide Trang 5 – 8]**

* **1980 (Kunihiko Fukushima):** Đề xuất mô hình **Neocognitron** mô phỏng vỏ não thị giác (tế bào đơn giản S-cells và tế bào phức hợp C-cells) — đặt nền móng lý thuyết đầu tiên cho CNN.
* **1998 (Yann LeCun):** Xây dựng thành công **LeNet-5** — lần đầu tiên ứng dụng thuật toán **Lan truyền ngược (Backpropagation)** trên mạng tích chập để tự động học trọng số nhận dạng chữ số trên séc ngân hàng.
* **2012 (Alex Krizhevsky, Ilya Sutskever, Geoffrey Hinton):** **AlexNet** vô địch áp đảo ILSVRC 2012, giảm tỷ lệ lỗi Top-5 từ 26% xuống 16%, mở ra kỷ nguyên bùng nổ Deep Learning toàn cầu!

---

# PHẦN 2: CÁC TẦNG CỐT LÕI TRONG MẠNG TÍCH CHẬP (CORE LAYERS)
📍 **[Slide Trang 12 – 24]**

Một mạng CNN tiêu chuẩn được lắp ghép từ 3 loại tầng chính: **Tầng Tích chập (Conv)**, **Tầng Gộp (Pooling)**, và **Tầng Kết nối đầy đủ (Fully Connected - FC)** xen kẽ các hàm kích hoạt phi tuyến (ReLU).

---

### 2.1 Lớp tích chập (Convolutional Layer) & Quy tắc chiều sâu bộ lọc
📍 **[Slide Trang 13 – 14]**

* **Bộ lọc (Filter / Kernel):** Là một ma trận trọng số kích thước không gian nhỏ (thường là $3 \times 3$ hoặc $5 \times 5$).
* ⚠️ **QUY TẮC CHIỀU SÂU BỘ LỌC (FILTER DEPTH RULE) — BẪY THI CỰC HAY GẶP:**
  > **Chiều sâu của bộ lọc (depth) BẮT BUỘC PHẢI BẰNG ĐÚNG chiều sâu (số kênh) của khối dữ liệu đầu vào!**
  > *Ví dụ:* Nếu ảnh đầu vào là ảnh màu RGB có kích thước $W \times H \times 3$ (3 kênh màu), thì một bộ lọc kích thước $3 \times 3$ thực chất phải có kích thước là **$3 \times 3 \times 3$**!

```
     ẢNH ĐẦU VÀO (3 KÊNH RGB)               BỘ LỌC KERNEL (3 KÊNH)                BẢN ĐỒ KÍCH HOẠT (FEATURE MAP)
       ┌───┬───┬───┐                         ┌───┬───┐
       │ 1 │ 0 │ 2 │                         │ 1 │ 0 │
       ├───┼───┼───┤                         ├───┼───┤                             ┌──────┬──────┐
       │ 3 │ 1 │ 0 │    * (TÍCH CHẬP)        │ 0 │ 1 │        ════════════►        │  28  │  ... │
       ├───┼───┼───┤                         └───┴───┘                             ├──────┼──────┤
       │ 0 │ 2 │ 1 │                      (Kích thước F x F x D)                   │  ... │  ... │
       └───┴───┴───┘                                                               └──────┴──────┘
   (Kích thước N x N x D)                                                      (Ma trận 2D số thực)
```

* **Cơ chế tính toán tại mỗi vị trí:**
  1. Đặt bộ lọc trùm lên một vùng cục bộ tương ứng trên ảnh.
  2. Thực hiện **phép nhân từng phần tử tương ứng (element-wise multiplication)** trên toàn bộ các kênh.
  3. **Cộng tổng toàn bộ các tích lại với nhau**, rồi cộng thêm một giá trị **bias $b$** $\implies$ cho ra **đúng một giá trị số thực duy nhất** trên bản đồ đặc trưng!
* **Số lượng bản đồ đặc trưng (Feature Maps) đầu ra:**
  - Nếu tầng Conv sử dụng **$K$ bộ lọc độc lập**, đầu ra sẽ thu được đúng **$K$ bản đồ đặc trưng** xếp chồng lên nhau (chiều sâu của khối dữ liệu mới bằng đúng $K$).

---

### 2.2 Bước nhảy (Stride) & Đệm viền (Zero-Padding)
📍 **[Slide Trang 15 – 17]**

* **Bước nhảy (Stride $S$):**
  - Là số lượng pixel mà bộ lọc dịch chuyển sau mỗi bước tính toán.
  - Khi $S = 1$: Bộ lọc trượt từng pixel một (thu thập thông tin dày đặc).
  - Khi $S = 2$: Bộ lọc nhảy cóc 2 pixel mỗi bước $\implies$ làm kích thước bản đồ đầu ra giảm đi khoảng một nửa (downsampling).
* **Đệm viền (Padding $P$):**
  - Là kỹ thuật thêm các đường viền giá trị số 0 (**Zero-Padding**) bao quanh 4 phía mép ảnh.
  - **Hai sứ mệnh sống còn của Zero-Padding:**
    1. **Bảo toàn kích thước không gian:** Ngăn chặn việc kích thước bản đồ đặc trưng bị teo nhỏ dần qua mỗi lớp Conv liên tiếp.
    2. **Chống mất thông tin vùng rìa:** Các pixel ở góc mép nếu không có padding sẽ chỉ được bộ lọc quét qua 1 lần, trong khi pixel ở tâm được quét hàng chục lần. Padding giúp các pixel rìa tham gia tính toán công bằng hơn.

---

### 2.3 Công thức vàng bấm máy tính: Tính kích thước Output Size
📍 **[Slide Trang 15]** — ⚠️ **BÀI TẬP BẤM MÁY TÍNH 100% CÓ TRONG ĐỀ THI!**

Nếu khối dữ liệu đầu vào có kích thước chiều ngang/dọc là $N$, kích thước bộ lọc là $F$, độ rộng đệm là $P$, và bước nhảy là $S$:

$$\mathbf{\text{Output Size}} = \mathbf{\left\lfloor \frac{N + 2P - F}{S} \right\rfloor + 1}$$

#### Hai chế độ Padding kinh điển cần nằm lòng:
1. **Valid Padding ($P = 0$ - Không đệm viền):**
   $$\text{Output} = \frac{N - F}{S} + 1$$
   *(Kích thước đầu ra chắc chắn sẽ nhỏ hơn đầu vào)*.
2. **Same Padding (Bảo toàn kích thước đầu ra bằng đúng đầu vào: $\text{Output} = N$ khi $S = 1$):**
   $$N = \frac{N + 2P - F}{1} + 1 \implies \mathbf{P = \frac{F - 1}{2}}$$
   * Với bộ lọc $F = 3 \times 3 \implies P = \frac{3 - 1}{2} = \mathbf{1}$.
   * Với bộ lọc $F = 5 \times 5 \implies P = \frac{5 - 1}{2} = \mathbf{2}$.
   * Với bộ lọc $F = 7 \times 7 \implies P = \frac{7 - 1}{2} = \mathbf{3}$.

#### Ví dụ bài tập mẫu:
> *Một ảnh đầu vào kích thước $32 \times 32 \times 3$, đi qua một lớp tích chập có 16 bộ lọc kích thước $5 \times 5$, Stride $S = 1$, Padding $P = 2$. Hỏi kích thước của khối dữ liệu đầu ra là bao nhiêu?*
* $\text{Kích thước cạnh} = \frac{32 + 2(2) - 5}{1} + 1 = \frac{31}{1} + 1 = 32$.
* Vì có 16 bộ lọc nên chiều sâu đầu ra bằng 16.
* 👉 **Đáp án:** Khối dữ liệu đầu ra có kích thước **$32 \times 32 \times 16$**.

---

### 2.4 Công thức tính số lượng tham số của Lớp Conv
📍 **[Slide Trang 14]** — ⚠️ **BÀI TẬP BẤM MÁY TÍNH CỰC HAY THI!**

Mỗi bộ lọc (Filter) có kích thước $F \times F \times D_{in}$ và kèm theo đúng $1$ bias $b$. Nếu lớp Conv có $K$ bộ lọc:
$$\mathbf{\text{Số tham số của lớp Conv}} = \mathbf{\left( F \times F \times D_{in} + 1 \right) \times K}$$

* **Bài tập mẫu:**
  > *Một lớp tích chập nhận đầu vào có kích thước $32 \times 32 \times 3$ (ảnh RGB). Lớp này sử dụng 64 bộ lọc kích thước $3 \times 3$, mỗi bộ lọc đều có bias. Hãy tính tổng số tham số cần học của lớp này.*
  * Kích thước không gian filter: $F = 3, F = 3$.
  * Số kênh đầu vào: $D_{in} = 3$.
  * Số bộ lọc: $K = 64$.
  * Số tham số = $(3 \times 3 \times 3 + 1) \times 64 = (27 + 1) \times 64 = 28 \times 64 = \mathbf{1.792}$ tham số!
  * ⚠️ *Lưu ý trắc nghiệm:* Kích thước không gian của ảnh đầu vào ($32 \times 32$) **hoàn toàn KHÔNG ảnh hưởng** đến số lượng tham số của lớp tích chập nhờ tính chất chia sẻ trọng số!

---

### 2.5 Hàm kích hoạt trong CNN: Vì sao ReLU là chuẩn mực tuyệt đối?
📍 **[Slide Trang 18 – 20]**

* Đặt ngay sau mỗi phép tích chập: $f(x) = \max(0, x)$.
* **Vì sao ReLU thống trị CNN?**
  1. **Tốc độ tính toán vô địch:** Không cần tính hàm số mũ $e^z$ nặng nề như Sigmoid/Tanh.
  2. **Hội tụ nhanh gấp 6 lần:** Thực nghiệm của AlexNet chỉ ra rằng mạng dùng ReLU đạt độ chính xác tương đương nhanh hơn gấp 6 lần so với dùng Tanh!
  3. **Miễn nhiễm với Triệt tiêu đạo hàm ở miền dương:** Gradient truyền ngược qua hàng chục tầng tích chập không bị suy giảm.

---

### 2.6 Lớp gộp (Pooling Layer): Max Pool vs Average Pool & Hai tính chất cốt tử
📍 **[Slide Trang 21 – 22]** — ⚠️ **BẪY TRẮC NGHIỆM ĐỈNH CAO!**

* **Mục đích:** Giảm kích thước không gian $(H, W)$ của bản đồ đặc trưng, giảm tải tính toán cho các lớp phía sau và giảm thiểu Overfitting.
* **HAI TÍNH CHẤT KỸ THUẬT BẮT BUỘC PHẢI THUỘC LÒNG:**
  1. **HOÀN TOÀN KHÔNG CÓ THAM SỐ CẦN HUẤN LUYỆN (ZERO LEARNABLE PARAMETERS):** Lớp Pooling chỉ thực hiện một phép toán thống kê cố định (lấy Max hoặc lấy Trung bình), không có trọng số $W$ hay bias $b$.
  2. **HOẠT ĐỘNG ĐỘC LẬP TRÊN TỪNG KÊNH (CHANNEL-INDEPENDENT):** Pooling chỉ thu nhỏ chiều rộng $W$ và chiều cao $H$, **GIỮ NGUYÊN HOÀN TOÀN CHIỀU SÂU (SỐ KÊNH $D$)** của khối dữ liệu!

```
     MINH HỌA MAX POOLING (Cửa sổ 2x2, Stride = 2):
       ┌────────┬────────┐
       │ 1   3  │ 2   4  │            ┌────┬────┐
       │ 5   6  │ 7   8  │    ───►    │ 6  │ 8  │
       ├────────┼────────┤            ├────┼────┤
       │ 3   2  │ 1   0  │            │ 3  │ 4  │
       │ 1   2  │ 3   4  │            └────┴────┘
       └────────┴────────┘
     (Ma trận 4x4)                (Giảm xuống 2x2)
```

* **Max Pooling (Phổ biến nhất):** Giữ lại giá trị kích hoạt mạnh nhất trong vùng $\implies$ Giữ lại đặc trưng nổi bật nhất.
* **Ý nghĩa hình học quan trọng:** Max Pooling giúp tạo ra **tính bất biến đối với các dịch chuyển nhỏ (Translation Invariance)** và các biến dạng co giãn nhẹ của vật thể trong ảnh.

---

### 2.7 Lớp Kết nối đầy đủ (FC), Flattening và Tầng Softmax
📍 **[Slide Trang 23 – 24]**

* **Bước làm phẳng (Flattening):**
  - Chuyển đổi khối đặc trưng 3 chiều cuối cùng $(H \times W \times D)$ thành một vector 1 chiều có chiều dài bằng $H \times W \times D$.
  - Đưa dữ liệu từ dạng ma trận không gian về dạng vector để cấp cho các tầng MLP truyền thống.
* **Lớp Kết nối đầy đủ (FC):** Tổng hợp toàn bộ các đặc trưng cấp cao đã trích xuất được từ mọi vị trí trên ảnh để tiến hành suy luận phân loại.
* **Tầng đầu ra Softmax:** Chuyển đổi các logits thành phân phối xác suất của $C$ lớp đối tượng, tổng xác suất bằng 1.

---

# PHẦN 3: SỰ TIẾN HÓA CỦA 5 KIẾN TRÚC CNN KINH ĐIỂN (1998 – 2015)
📍 **[Slide Trang 25 – 37]** — ⚠️ **TRỌNG TÂM CHIẾM ĐẾN 40% ĐỀ THI!**

```
DÒNG THỜI GIAN LỊCH SỬ TIẾN HÓA CÁC KIẾN TRÚC CNN:
1998: LeNet-5 (7 lớp)       ──► Tiên phong Backpropagation nhận dạng chữ số trên séc
2012: AlexNet (8 lớp)       ──► Vô địch ILSVRC 2012, bùng nổ Deep Learning (ReLU, Dropout, GPU)
2014: VGGNet (16-19 lớp)    ──► Triết lý xếp chồng các bộ lọc nhỏ 3x3 thay vì bộ lọc lớn
2014: GoogLeNet (22 lớp)    ──► Khối Inception song song đa quy mô, Conv 1x1 nút cổ chai, GAP
2015: ResNet (152 lớp)      ──► Mạng siêu sâu với Skip Connection & Học phần dư (Lỗi 3.57% < người)
```

---

### 3.1 LeNet-5 (1998): Tiên phong Backpropagation trên mạng tích chập
📍 **[Slide Trang 27 – 28]**

* **Tác giả:** Yann LeCun (AT&T Bell Labs).
* **Bài toán:** Nhận dạng chữ số viết tay trên séc ngân hàng và mã bưu điện (tập MNIST).
* **Cột mốc lịch sử:** Mô hình đầu tiên ứng dụng thành công thuật toán **Lan truyền ngược (Backpropagation)** trên mạng tích chập, chứng minh mạng nơ-ron có thể tự động học trọng số hiệu quả từ dữ liệu ảnh thô.
* **Cấu trúc 7 lớp (không tính tầng input):**
  - Chuỗi lặp 2 lần: `[Tích chập Conv (5x5) + Gộp trung bình Average Pooling (2x2)]`
  - Tiếp theo là 2 lớp Fully Connected và tầng đầu ra 10 lớp (chữ số $0 - 9$).

---

### 3.2 AlexNet (2012): Bùng nổ Deep Learning (ReLU, Dropout, GPU)
📍 **[Slide Trang 29 – 30]**

* **Tác giả:** Alex Krizhevsky, Ilya Sutskever, Geoffrey Hinton (Đại học Toronto).
* **Thành tích:** Vô địch ILSVRC 2012 với sai số Top-5 là **$16.4\%$**, bỏ xa đội về nhì (phương pháp truyền thống dùng đặc trưng thủ công đạt lỗi $26.2\%$).
* **Quy mô:** Gồm **8 lớp học được** (5 lớp Conv + 3 lớp FC), chứa **$\approx 60$ triệu tham số**.
* **Ba cải tiến kỹ thuật đột phá:**
  1. **Sử dụng hàm kích hoạt ReLU:** Thay thế Sigmoid/Tanh, giúp mạng huấn luyện nhanh gấp 6 lần.
  2. **Kỹ thuật Dropout:** Tắt ngẫu nhiên $50\%$ số nơ-ron trong các lớp FC ở mỗi lượt huấn luyện, chống hiện tượng Overfitting cực kỳ hiệu quả.
  3. **Huấn luyện song song trên 2 card đồ họa GPU (Nvidia GTX 580):** Tận dụng tính toán song song ma trận để xử lý khối dữ liệu 1,2 triệu ảnh ImageNet.

---

### 3.3 VGGNet (2014): Sức mạnh của việc xếp chồng bộ lọc nhỏ 3x3
📍 **[Slide Trang 31 – 32]** — ⚠️ **CÂU HỎI TRỌNG TÂM PHÒNG THI!**

* **Tác giả:** Simonyan & Zisserman (Visual Geometry Group - Đại học Oxford). Á quân ILSVRC 2014 (Top-5 error: 7.3%).
* **Hai phiên bản tiêu biểu:** **VGG-16** (16 lớp) và **VGG-19** (19 lớp).
* **Triết lý thiết kế đột phá:** 
  - Loại bỏ hoàn toàn các bộ lọc lớn (như $7 \times 7$ hay $11 \times 11$).
  - **CHỈ DÙNG DUY NHẤT các bộ lọc nhỏ kích thước $3 \times 3$ (Stride = 1, Padding = 1)** xếp chồng liên tiếp nhau, xen kẽ các lớp Max Pooling $2 \times 2$ (Stride = 2).

#### ⚠️ VÌ SAO DÙNG 3 LỚP $3 \times 3$ LẠI VƯỢT TRỘI HƠN 1 LỚP $7 \times 7$?
1. **Vùng nhận cảm tương đương (Same Receptive Field):**
   - Lớp $3 \times 3$ thứ nhất nhìn vùng $3 \times 3$.
   - Lớp $3 \times 3$ thứ hai nhìn vùng $(3 + 2) = 5 \times 5$.
   - Lớp $3 \times 3$ thứ ba nhìn vùng $(5 + 2) = \mathbf{7 \times 7}$!
   - 👉 Xếp chồng 3 lớp $3 \times 3$ bao phủ đúng một vùng không gian bằng 1 lớp $7 \times 7$.
2. **Tăng cường tính phi tuyến:**
   - 1 lớp $7 \times 7$ chỉ có đúng **1 hàm kích hoạt ReLU**.
   - 3 lớp $3 \times 3$ có tới **3 hàm kích hoạt ReLU xen kẽ**, giúp mạng học được các hàm quyết định phức tạp và sắc nét hơn nhiều!
3. **Tiết kiệm tới 45% số lượng tham số:**
   - Giả sử số kênh vào và ra đều bằng $C$:
     $$\text{Tham số 1 lớp } 7 \times 7 = (7 \times 7 \times C) \times C = \mathbf{49 C^2}$$
     $$\text{Tham số 3 lớp } 3 \times 3 = 3 \times \left[ (3 \times 3 \times C) \times C \right] = 3 \times 9C^2 = \mathbf{27 C^2}$$
   - 👉 Giảm số tham số từ $49 C^2$ xuống $27 C^2$, tiết kiệm: $\frac{49 - 27}{49} \approx \mathbf{44.9\%}$!

---

### 3.4 GoogLeNet (2014): Khối Inception đa quy mô, Conv 1x1 & GAP
📍 **[Slide Trang 33 – 35]**

* **Tác giả:** Szegedy et al. (Google). Vô địch ILSVRC 2014 (Top-5 error: 6.7%).
* **Quy mô:** Sâu tới **22 lớp**, nhưng chỉ có **$\approx 5$ triệu tham số** (ít hơn AlexNet tới 12 lần dù sâu hơn gần gấp 3!).
* **Ba đột phá kiến trúc độc nhất vô nhị:**
  1. **Khối Inception (Multi-scale Processing):**
     - Chạy **song song đồng thời** 4 nhánh trong cùng một tầng: Conv $1 \times 1$, Conv $3 \times 3$, Conv $5 \times 5$ và Max Pooling $3 \times 3$.
     - Đầu ra của 4 nhánh được ghép lại (Concatenate) theo chiều sâu kênh.
  2. **Lớp tích chập $1 \times 1$ làm "Nút cổ chai" (Bottleneck):**
     - Tích chập $1 \times 1$ có vai trò **giảm chiều sâu của kênh (Dimensionality Reduction)** trước khi đi vào các phép tính tích chập $3 \times 3$ và $5 \times 5$ tốn kém.
     - Giúp giảm khối lượng tính toán từ 854 triệu phép tính xuống chỉ còn 353 triệu phép tính trong mỗi khối Inception!
  3. **Global Average Pooling (GAP):**
     - Thay thế hoàn toàn các lớp Fully Connected nặng nề ở cuối mạng bằng một lớp lấy trung bình toàn cục trên mỗi feature map.
     - Triệt tiêu phần lớn số lượng tham số dễ gây overfitting nhất của mạng.

---

### 3.5 ResNet (2015): Cột mốc 152 lớp, Skip Connection & Học phần dư
📍 **[Slide Trang 36 – 37]** — ⚠️ **ĐỈNH CAO BÀI TẬP VÀ CÂU HỎI THI!**

* **Tác giả:** Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun (Microsoft Research). Vô địch tuyệt đối ILSVRC 2015.
* **Kỷ lục lịch sử:** Đạt sai số Top-5 chỉ **$3.57\%$**, lần đầu tiên trong lịch sử AI **vượt qua độ chính xác của con người** (ngưỡng sai số của người khoảng $5.1\%$).
* **Vấn đề suy biến mạng sâu (Degradation Problem):**
  - Trước thời ResNet, khi người ta cố gắng tăng độ sâu của mạng (ví dụ từ 20 lớp lên 56 lớp), **cả sai số huấn luyện (Train Error) lẫn sai số kiểm thử (Test Error) đều tăng vọt**!
  - ⚠️ **LƯU Ý TRẮC NGHIỆM:** Hiện tượng này **KHÔNG PHẢI do Overfitting** (vì nếu overfit thì train error phải rất thấp), mà là do mạng quá sâu khiến hàm mất mát trở nên cực kỳ gập ghềnh, thuật toán Gradient Descent bị bế tắc và không thể tối ưu hóa nổi.

```
       ĐẦU VÀO x ──────────────────┐ (ĐƯỜNG CAO TỐC SKIP CONNECTION)
           │                       │
           ▼                       │
       ┌───────────┐               │
       │ Weight 1  │               │
       └─────┬─────┘               │
             ▼ ReLU                │
       ┌───────────┐               │
       │ Weight 2  │               │
       └─────┬─────┘               │
             ▼                     ▼
       Phần dư F(x) ──────► ( + ) ◄┘ (Cộng trực tiếp: H(x) = F(x) + x)
                               │
                               ▼ ReLU
                           ĐẦU RA H(x)
```

* **Đột phá cốt lõi - Kết nối tắt (Skip / Shortcut Connection):**
  - Cho phép tín hiệu đầu vào $x$ nhảy cóc qua một vài tầng trung gian và được cộng trực tiếp vào đầu ra:
    $$\mathcal{H}(x) = \mathcal{F}(x) + x$$
  - **Học biểu diễn phần dư (Residual Learning):** Tầng mạng không cần học toàn bộ hàm ánh xạ mục tiêu $\mathcal{H}(x)$, mà chỉ cần học **phần chênh lệch dư $\mathcal{F}(x) = \mathcal{H}(x) - x$**.
  - Nếu các tầng trung gian không học được gì hữu ích, mạng chỉ cần ép trọng số $\mathcal{F}(x) \to 0$, khi đó $\mathcal{H}(x) = x$ (phép ánh xạ đồng nhất - Identity Mapping), mạng sâu ít nhất vẫn giữ nguyên hiệu năng bằng mạng nông!
  - **Giải mã toán học: Gradient Highway:**
    Khi tính đạo hàm theo quy tắc chuỗi:
    $$\frac{\partial \mathcal{E}}{\partial x} = \frac{\partial \mathcal{E}}{\partial \mathcal{H}} \cdot \frac{\partial \mathcal{H}}{\partial x} = \frac{\partial \mathcal{E}}{\partial \mathcal{H}} \left( \frac{\partial \mathcal{F}}{\partial x} + \mathbf{1} \right)$$
    Nhờ có **hằng số $+1$**, gradient luôn có một "đường cao tốc" chảy thẳng tắp ngược về các tầng đầu tiên mà **không bao giờ bị triệt tiêu**!
* **Quy mô kiến trúc:** Xây dựng thành công các mạng siêu sâu từ 50, 101 cho đến **152 lớp**.

---

# PHẦN 4: MA TRẬN ĐỐI CHIẾU 5 KIẾN TRÚC CNN KINH ĐIỂN
📍 **[Slide Trang 26 – 37]** — ⚠️ **BẢNG ĐỐI CHIẾU QUYẾT ĐỊNH ĐIỂM SỐ!**

| Tiêu chí | LeNet-5 (1998) | AlexNet (2012) | VGGNet (2014) | GoogLeNet (2014) | ResNet (2015) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Số lớp học được** | 7 lớp | 8 lớp | 16 – 19 lớp | 22 lớp | Lên tới **152 lớp** |
| **Số lượng tham số**| $\approx 60.000$ | $\approx 60$ triệu | $\approx 138$ triệu | $\approx 5$ triệu | $\approx 25$ triệu (ResNet-50) |
| **Kích thước Filter** | $5 \times 5$ | $11 \times 11, 5 \times 5, 3 \times 3$ | **Chỉ dùng $3 \times 3$** | Đa quy mô ($1 \times 1, 3 \times 3, 5 \times 5$) | $3 \times 3$ và Bottleneck $1 \times 1$ |
| **Lớp Gộp (Pooling)** | Average Pooling | Max Pooling ($3 \times 3$) | Max Pooling ($2 \times 2$) | Max Pool & Global Avg Pool | Max Pool & Global Avg Pool |
| **Hàm kích hoạt** | Sigmoid / Tanh | **ReLU** | ReLU | ReLU | ReLU |
| **Chống Overfitting** | Không có | **Dropout**, Data Augment | Dropout, Data Augment | Global Average Pooling | Batch Normalization, Skip Conn |
| **Đột phá kỹ thuật** | Tiên phong Backprop trên Conv | Dùng GPU, ReLU, Dropout | Xếp chồng các filter nhỏ $3 \times 3$ | Khối Inception, Conv 1x1 giảm chiều | Skip/Shortcut, Học phần dư $\mathcal{F}(x)+x$ |
| **Thành tích ILSVRC** | Đọc séc ngân hàng | Vô địch 2012 (Top-5: 16.4%) | Á quân 2014 (Top-5: 7.3%) | Vô địch 2014 (Top-5: 6.7%) | Vô địch 2015 (Top-5: **3.57%** < người) |

---

# PHẦN 5: BỐN NHÓM BÀI TOÁN THỊ GIÁC MÁY TÍNH & HỆ SINH THÁI ỨNG DỤNG
📍 **[Slide Trang 38 – 52]**

---

### 5.1 Phân biệt 4 bài toán: Classification, Localization, Detection, Segmentation
📍 **[Slide Trang 39]** — ⚠️ **BẪY ĐỀ THI PHÂN BIỆT KHÁI NIỆM!**

```
  PHÂN LOẠI (Classification)           ĐỊNH VỊ (Localization)
  Gán 1 nhãn cho toàn ảnh               Vẽ 1 Bounding Box cho 1 vật
        ╭─────────────╮                       ╭─────────────╮
        │             │                       │  ┌───────┐  │
        │   MÈO       │                       │  │  MÈO  │  │
        │             │                       │  └───────┘  │
        ╰─────────────╯                       ╰─────────────╯
  
  PHÁT HIỆN ĐỐI TƯỢNG (Detection)       PHÂN ĐOẠN ẢNH (Segmentation)
  Nhiều Bounding Box cho nhiều vật      Tô màu nhãn cho TỪNG PIXEL
        ╭─────────────╮                       ╭─────────────╮
        │ ┌────┐ ┌──┐ │                       │  ░░░░░ ▓▓▓  │
        │ │ MÈO│ │CHÓ│ │                       │  ░MÈO░ ▓CHÓ▓│
        │ └────┘ └──┘ │                       │  ░░░░░ ▓▓▓  │
        ╰─────────────╯                       ╰─────────────╯
```

1. **Phân loại ảnh (Image Classification):** Trả lời câu hỏi: *"Trong ảnh có vật gì?"* $\implies$ Gán một nhãn duy nhất cho toàn bức ảnh.
2. **Định vị đối tượng (Localization):** Trả lời câu hỏi: *"Vật đó nằm ở đâu?"* $\implies$ Vẽ **đúng một khung bao chữ nhật (Bounding Box: $x, y, w, h$)** bao quanh một đối tượng duy nhất.
3. **Phát hiện đối tượng (Object Detection):** Đồng thời xác định vị trí khung bao và phân loại **nhiều đối tượng khác nhau** trong cùng một khung hình.
4. **Phân đoạn ảnh (Image Segmentation):** Gán nhãn lớp cho **từng điểm ảnh (pixel)**:
   * *Phân đoạn ngữ nghĩa (Semantic Segmentation):* Mọi pixel thuộc cùng một lớp (ví dụ 3 con mèo) đều được tô cùng một màu nhãn.
   * *Phân đoạn thực thể (Instance Segmentation):* Phân biệt rạch ròi từng cá thể riêng biệt (Mèo 1 tô màu đỏ, Mèo 2 tô màu xanh).

---

### 5.2 Hai trường phái Phát hiện đối tượng: Two-stage (R-CNN) vs One-stage (YOLO)
📍 **[Slide Trang 42]**

* **Nhóm Hai giai đoạn (Two-stage Detectors - R-CNN, Fast R-CNN, Faster R-CNN):**
  - *Cơ chế:* Giai đoạn 1 đề xuất các vùng ứng viên tiềm năng (Region Proposals); Giai đoạn 2 đưa các vùng đó qua CNN để phân loại nhãn và tinh chỉnh tọa độ khung bao.
  - *Đặc điểm:* Độ chính xác rất cao nhưng tốc độ xử lý chậm, khó đạt thời gian thực.
* **Nhóm Một giai đoạn (One-stage Detectors - YOLO, SSD):**
  - *Cơ chế:* Xem bài toán phát hiện đối tượng như một bài toán hồi quy đơn lẻ. Chia ảnh thành lưới ô và dự đoán trực tiếp tọa độ khung bao cùng xác suất lớp trong **đúng một lần quét duy nhất (You Only Look Once)**.
  - *Đặc điểm:* Tốc độ cực nhanh ($30 - 60+$ FPS), xử lý video thời gian thực mượt mà!

---

### 5.3 Sáu lĩnh vực ứng dụng thực tế tiêu biểu trong slide
📍 **[Slide Trang 40 – 52]**

1. **Truy vấn ảnh theo nội dung (Content-Based Image Retrieval - CBIR):** Dùng CNN trích xuất vector đặc trưng (Embedding) ở tầng gần cuối, so sánh độ tương đồng Cosine để tìm kiếm ảnh tương tự (Google Images, Pinterest).
2. **Nhận dạng khuôn mặt & Sinh trắc học (Face Recognition & Biometrics):** Apple FaceID mở khóa điện thoại; Tính năng Smile Shutter tự chụp khi phát hiện nụ cười; Nhận diện mống mắt (vụ tìm lại "Cô gái Afghanistan" của National Geographic); Quét vân tay.
3. **Nhận dạng ký tự quang học (OCR) & Giao thông thông minh:** Đọc chữ số viết tay trên séc; Nhận diện biển số xe tự động (ANPR); Đếm lưu lượng phương tiện, phát hiện vi phạm lấn làn, vượt đèn đỏ.
4. **Xe tự hành (Autonomous Vehicles):** Tesla Autopilot nhận diện làn đường, phát hiện người đi bộ, biển báo và xe xung quanh theo thời gian thực để tránh va chạm.
5. **Robotics & Vũ trụ:** Robot tự hành sao Hỏa (**Mars Rover**) dùng CNN chụp ảnh Panorama, dựng mô hình 3D địa hình và điều hướng tránh chướng ngại vật; Robot nông nghiệp tự động nhận diện và hái trái cây chín.
6. **AR/VR & Tương tác người - máy:** Nhận diện cử chỉ chuyển động cơ thể trong không gian 3D (công nghệ **Microsoft Kinect**).

---

# PHẦN 6: TUYỂN TẬP 12 CÂU HỎI TRẮC NGHIỆM "TỦ" CHẮC CHẮN GẶP PHÒNG THI

1. **Câu 1:** Trong một lớp tích chập, nếu ảnh đầu vào có kích thước $64 \times 64 \times 3$ (3 kênh màu), một bộ lọc kích thước không gian $5 \times 5$ sẽ có chiều sâu thực tế là bao nhiêu?
   * 👉 **Đáp án:** Chiều sâu là **3** (vì chiều sâu của bộ lọc luôn bắt buộc phải bằng chiều sâu của khối dữ liệu đầu vào: kích thước đầy đủ là $5 \times 5 \times 3$).
2. **Câu 2:** Một ảnh kích thước $32 \times 32$ đi qua lớp Conv với bộ lọc $5 \times 5$, Stride $S = 1$, Padding $P = 2$. Kích thước bản đồ đặc trưng đầu ra là bao nhiêu?
   * 👉 **Đáp án:** $\text{Output} = \frac{32 + 2(2) - 5}{1} + 1 = \mathbf{32 \times 32}$ (Kích thước được bảo toàn nguyên vẹn - Same Padding).
3. **Câu 3:** Lớp Gộp (Pooling Layer) có bao nhiêu trọng số (parameters) cần được huấn luyện thông qua Backpropagation?
   * 👉 **Đáp án:** **0 tham số** (Pooling là phép toán thống kê cố định, không có trọng số hay bias cần học).
4. **Câu 4:** Lớp Pooling tác động như thế nào đến chiều sâu (số kênh) của khối dữ liệu đi qua nó?
   * 👉 **Đáp án:** **Giữ nguyên hoàn toàn chiều sâu (số kênh)**, chỉ làm giảm kích thước chiều cao và chiều rộng không gian.
5. **Câu 5:** Tại sao kiến trúc VGGNet lại ưu tiên xếp chồng 3 lớp tích chập nhỏ $3 \times 3$ thay vì dùng 1 lớp tích chập lớn $7 \times 7$?
   * 👉 **Đáp án:** Có cùng vùng nhận cảm $7 \times 7$, nhưng tăng cường tính phi tuyến (với 3 hàm ReLU) và **tiết kiệm gần 45% số lượng tham số**.
6. **Câu 6:** Kiến trúc mạng nào lần đầu tiên ứng dụng thành công thuật toán Backpropagation trên mạng tích chập để nhận dạng chữ số viết tay trên séc ngân hàng?
   * 👉 **Đáp án:** **LeNet-5** (năm 1998 của Yann LeCun).
7. **Câu 7:** Ba cải tiến kỹ thuật đột phá giúp AlexNet vô địch ILSVRC 2012 và mở ra kỷ nguyên bùng nổ Deep Learning là gì?
   * 👉 **Đáp án:** Sử dụng hàm kích hoạt **ReLU**, kỹ thuật ngắt ngẫu nhiên **Dropout**, và huấn luyện song song trên **card đồ họa GPU**.
8. **Câu 8:** Vai trò chính của lớp tích chập $1 \times 1$ trong khối Inception của kiến trúc GoogLeNet là gì?
   * 👉 **Đáp án:** Làm "Nút cổ chai" (Bottleneck) để **giảm số chiều sâu kênh**, giúp cắt giảm mạnh mẽ khối lượng tính toán.
9. **Câu 9:** Hiện tượng suy biến (Degradation Problem) trong các mạng rất sâu trước thời ResNet có phải do Overfitting gây ra không?
   * 👉 **Đáp án:** **Hoàn toàn KHÔNG phải do Overfitting**, mà là do việc tối ưu hóa mạng quá sâu gặp khó khăn (khiến cả sai số huấn luyện Train Error lẫn Test Error đều tăng vọt).
10. **Câu 10:** Kiến trúc ResNet giải quyết vấn đề suy biến mạng siêu sâu bằng cơ chế cốt lõi nào?
    * 👉 **Đáp án:** **Kết nối tắt (Skip / Shortcut Connection)** cho phép học phần dư $\mathcal{H}(x) = \mathcal{F}(x) + x$, tạo "đường cao tốc" cho gradient truyền ngược mà không bị triệt tiêu.
11. **Câu 11:** Thuật toán phát hiện đối tượng nào thuộc nhóm Một giai đoạn (One-stage) cho phép xử lý video thời gian thực?
    * 👉 **Đáp án:** **YOLO** (You Only Look Once) và **SSD**.
12. **Câu 12:** Kỹ thuật nào trong CNN giúp mô hình đạt được tính bất biến đối với các phép tịnh tiến nhỏ (Translation Invariance) và biến dạng nhẹ của vật thể?
    * 👉 **Đáp án:** **Lớp Gộp cực đại (Max Pooling)**.
