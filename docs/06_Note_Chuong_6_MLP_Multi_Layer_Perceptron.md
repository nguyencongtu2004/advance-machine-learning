# 🗂️ BẢN NOTE CHI TIẾT CHƯƠNG 6: MLP - MULTI-LAYER PERCEPTRON
> **Tài liệu gốc:** [Chuong-6-MLP-Multi-Layer-Perceptron.pdf](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/Chuong-6-MLP-Multi-Layer-Perceptron.pdf) (76 trang)  
> **Chủ đề chính:** Nơ-ron nhân tạo, Perceptron, Giới hạn XOR, Vai trò của hàm kích hoạt phi tuyến, Backpropagation (Lan truyền ngược), và các biến thể Gradient Descent.

---

## 1. Mạng nơ-ron nhân tạo & Perceptron cổ điển
📍 **[Slide Trang 4 – 19]**

### 1.1 Cấu tạo của một Nơ-ron nhân tạo (Artificial Neuron)
Một nơ-ron là đơn vị tính toán cơ bản nhất, nhận cảm hứng từ tế bào thần kinh sinh học:
1. **Các đầu vào (Inputs $x$ hoặc $p$):** Vector đặc trưng $[x_1, x_2, \dots, x_d]^T$.
2. **Các trọng số (Weights $w$):** Vector $[w_1, w_2, \dots, w_d]^T$ thể hiện mức độ quan trọng và chiều tác động của từng đặc trưng đầu vào.
3. **Độ lệch (Bias $b$):** Một đại lượng dịch chuyển độc lập với đầu vào, quyết định mức ngưỡng kích hoạt của nơ-ron (tương đương hệ số chặn $w_0$).
4. **Tổng có trọng số (Weighted Sum):**
   $$z = w^Tx + b = \sum_{j=1}^d w_j x_j + b$$
5. **Hàm kích hoạt (Activation Function $\phi$):** Biến đổi giá trị tuyến tính $z$ thành đầu ra sau kích hoạt:
   $$a = \phi(z)$$

```
     x_1 ──► (w_1) ──┐
     x_2 ──► (w_2) ──┼──► [ Tổng có trọng số: z = Σ w_j x_j + b ] ──► [ Hàm kích hoạt: a = φ(z) ] ──► Đầu ra
     ... ──► (...)  ──┤
     x_d ──► (w_d) ──┘
               ▲
               │
            Bias (b)
```

### 1.2 Perceptron của Frank Rosenblatt (1957)
* Nơ-ron sử dụng **hàm kích hoạt bước nhảy (Step / Threshold function)**:
  $$a = \phi(z) = \begin{cases} 1 & \text{nếu } z = w^Tx + b \ge 0 \\ 0 & \text{nếu } z = w^Tx + b < 0 \end{cases}$$
* **Biên quyết định của Perceptron:** Là một siêu phẳng tuyến tính phẳng $w^Tx + b = 0$. Vector trọng số $w$ luôn vuông góc với biên quyết định.

### 1.3 Giới hạn lịch sử: Bài toán XOR và Mùa đông AI thứ nhất - ⚠️ HAY THI!
📍 **[Slide Trang 18 – 19]**
* **Các cổng logic phân tách tuyến tính (Linearly Separable):** Cổng **NOT, AND, OR** đều có thể được phân tách rạch ròi bằng một đường thẳng phẳng $\to$ Perceptron đơn tầng giải quyết ngon lành!
* **Bài toán XOR (Hoặc loại trừ):**
  - Khi $(0, 0) \to 0$ và $(1, 1) \to 0$ (cùng nhãn 0 nằm ở 2 góc chéo nhau).
  - Khi $(0, 1) \to 1$ và $(1, 0) \to 1$ (cùng nhãn 1 nằm ở 2 góc chéo còn lại).
  - 👉 **KHÔNG THỂ DÙNG MỘT ĐƯỜNG THẲNG ĐỂ PHÂN TÁCH 2 LỚP NÀY!**
* Năm 1969, hai nhà khoa học Minsky và Papert đã chứng minh rằng: **Perceptron đơn tầng bất lực hoàn toàn với bài toán XOR**, dẫn đến "Mùa đông AI thứ nhất".
* 👉 **Giải pháp:** Phải xếp nhiều tầng nơ-ron lại với nhau thành **Mạng nơ-ron nhiều tầng (MLP - Multi-Layer Perceptron)** kết hợp với **hàm kích hoạt phi tuyến**!

---

## 2. Kiến trúc MLP & Vai trò sống còn của Hàm kích hoạt phi tuyến
📍 **[Slide Trang 20 – 38]**

### 2.1 Ba thành phần của kiến trúc MLP
1. **Tầng đầu vào (Input Layer):** Nhận vector đặc trưng $x \in \mathbb{R}^d$ (không có tham số tính toán).
2. **Một hoặc nhiều tầng ẩn (Hidden Layers):** Nhận đầu ra của tầng trước, nhân với ma trận trọng số, cộng bias và áp dụng hàm kích hoạt phi tuyến. Tầng ẩn tự động học các biểu diễn đặc trưng trừu tượng mới từ dữ liệu thô.
3. **Tầng đầu ra (Output Layer):** Đưa ra kết quả dự đoán cuối cùng (nhãn phân loại hoặc giá trị số thực).

### 2.2 ⚠️ VÌ SAO MẠNG BẮT BUỘC PHẢI DÙNG HÀM KÍCH HOẠT PHI TUYẾN? (CÂU HỎI KINH ĐIỂN)
📍 **[Slide Trang 11]**
* Giả sử ta không dùng hàm kích hoạt (hoặc dùng hàm kích hoạt tuyến tính $\phi(z) = c \cdot z$).
* Hãy xem điều gì xảy ra qua 2 tầng:
  - Tầng 1: $a^{(1)} = W^{(1)}x + b^{(1)}$
  - Tầng 2: $a^{(2)} = W^{(2)}a^{(1)} + b^{(2)} = W^{(2)}(W^{(1)}x + b^{(1)}) + b^{(2)}$
  - Khai triển: $a^{(2)} = (W^{(2)}W^{(1)})x + (W^{(2)}b^{(1)} + b^{(2)}) = W_{tổng}x + b_{tổng}$
* 👉 **Tích của các ma trận tuyến tính vẫn chỉ là một ma trận tuyến tính đơn lẻ!** Dù bạn xếp 100 tầng mạng hay 1000 tầng mạng thì mô hình vẫn sụp đổ thành **đúng 1 tầng tuyến tính đơn giản**!
* 👉 Do đó, **bắt buộc phải có hàm kích hoạt PHI TUYẾN** ở các tầng ẩn để phá vỡ tính tuyến tính, cho phép mạng uốn cong không gian và xấp xỉ được các quan hệ phức tạp (Định lý Universal Approximation).

---

## 3. So sánh các hàm kích hoạt phổ biến (Sigmoid, Tanh, ReLU)
📍 **[Slide Trang 28 – 31]** - ⚠️ ĐỈNH CAO BẪY TRẮC NGHIỆM!

```
      Sigmoid                  Tanh                       ReLU
   1 ▲       _----*         1 ▲       _----*           ▲        /
     │     /                  │     /                  │       /
 0.5 ┼   /                  0 ┼────/──────►            │      /
     │ _/                    -1 _/                     └─────*──────►
   0 ┴──────────►                                            0
      Miền: (0, 1)              Miền: (-1, 1)            Miền: [0, +∞)
    KHÔNG Zero-centered         CÓ Zero-centered         Giải quyết Vanishing!
```

### 3.1 Hàm Sigmoid
* **Công thức:** $\sigma(z) = \frac{1}{1 + e^{-z}}$, miền giá trị $(0, 1)$.
* **Đạo hàm:** $\sigma'(z) = \sigma(z)(1 - \sigma(z))$.
  - Đạo hàm đạt giá trị cực đại chỉ bằng $0.25$ (tại $z = 0$). Khi $|z|$ lớn, đạo hàm tiến sát về $0$.
* **Hai nhược điểm chí mạng:**
  1. **Triệt tiêu đạo hàm (Vanishing Gradient):** Khi mạng sâu, việc nhân chuỗi nhiều số nhỏ hơn $0.25$ làm gradient truyền về các tầng đầu tiên bị triệt tiêu về $0$ $\to$ các tầng đầu không thể học được!
  2. **Không đối xứng qua gốc tọa độ 0 (Not Zero-centered):** Đầu ra luôn dương $\to$ gradient của các trọng số luôn cùng dấu (cùng tăng hoặc cùng giảm), gây ra hiện tượng dao động zic-zac khi cập nhật.

### 3.2 Hàm Tanh (Hyperbolic Tangent)
* **Công thức:** $\tanh(z) = \frac{e^z - e^{-z}}{e^z + e^{-z}}$, miền giá trị $(-1, 1)$.
* **Đạo hàm:** $\tanh'(z) = 1 - \tanh^2(z)$.
* **Ưu điểm vượt trội hơn Sigmoid:** **Đối xứng hoàn hảo qua gốc tọa độ 0 (Zero-centered)** $\to$ Gradient dao động đều quanh 0, giúp mạng huấn luyện hội tụ nhanh hơn Sigmoid.
* **Nhược điểm:** Vẫn bị bão hòa ở 2 đầu khi $|z|$ lớn $\to$ Vẫn bị bệnh **Vanishing Gradient**.

### 3.3 Hàm ReLU (Rectified Linear Unit) - Chuẩn mực hiện đại!
* **Công thức:** $\text{ReLU}(z) = \max(0, z)$, miền giá trị $[0, +\infty)$.
* **Đạo hàm:** 
  $$\text{ReLU}'(z) = \begin{cases} 1 & \text{khi } z > 0 \\ 0 & \text{khi } z < 0 \end{cases}$$
* **Ưu điểm vô địch:**
  1. **Khắc phục triệt để Vanishing Gradient ở miền dương ($z > 0$):** Đạo hàm luôn bằng đúng $1$, gradient truyền ngược nguyên vẹn qua hàng chục tầng mạng sâu!
  2. **Tính toán siêu nhanh:** Chỉ là phép so sánh logic `if z > 0`, không tốn chi phí tính toán hàm số mũ $e^z$ nặng nề như Sigmoid/Tanh.
* **Bệnh lý riêng - Dying ReLU (Chết nơ-ron):** Nếu một nơ-ron liên tục nhận đầu vào $z < 0$, đạo hàm bằng $0$ vĩnh viễn, trọng số không bao giờ được cập nhật lại nữa $\to$ Nơ-ron bị "chết".
* 👉 *Khắc phục bằng **Leaky ReLU**:* Thay vì bằng 0 khi $z < 0$, cho phép một độ dốc nhỏ $\alpha z$ ($\alpha \approx 0.01$).

---

## 4. Thiết kế Tầng đầu ra & Hàm mất mát tương ứng
📍 **[Slide Trang 41 – 43, 67 – 72]**

Một hệ thống học máy phải chọn đúng cặp bài trùng giữa **Hàm kích hoạt tầng đầu ra** và **Hàm mất mát (Loss Function)**:

| Loại bài toán | Kích hoạt Tầng đầu ra | Hàm mất mát (Loss Function) | Ví dụ ứng dụng |
| :--- | :--- | :--- | :--- |
| **Hồi quy (Regression)** | **Tuyến tính (Linear / No activation)** | **MSE (Mean Squared Error)** | Dự đoán giá nhà, lượng mưa |
| **Phân loại nhị phân** | **Sigmoid (1 nơ-ron duy nhất)** | **Binary Cross-Entropy (BCE)** | Spam hay không, Bệnh hay không |
| **Phân loại đa lớp loại trừ** | **Softmax ($K$ nơ-ron)** | **Categorical Cross-Entropy (CCE)** | Nhận diện 10 chữ số MNIST ($0-9$) |

### Mẹo ổn định số học trong Softmax (Numerical Stability Trick)
📍 **[Slide Trang 36, 503]**
* Khi các điểm số $z_k$ quá lớn (ví dụ $z_k = 1000$), việc tính $e^{1000}$ trên máy tính sẽ bị lỗi **Tràn số (Overflow)**.
* **Giải pháp chuẩn:** Trừ đi giá trị lớn nhất $c = \max(z)$ khỏi mọi điểm số:
  $$P(y = k | x) = \frac{e^{z_k - c}}{\sum_{j=1}^K e^{z_j - c}}$$
* *Lưu ý trắc nghiệm:* Việc trừ đi hằng số $c$ này **hoàn toàn KHÔNG làm thay đổi giá trị xác suất** đầu ra của Softmax!

---

## 5. Kích thước ma trận và Công thức tính số lượng tham số
📍 **[Slide Trang 24]** - ⚠️ BÀI TẬP BẤM MÁY TÍNH CHẮC CHẮN CÓ!

Giả sử kết nối giữa Tầng trước ($A$ nơ-ron) và Tầng sau ($B$ nơ-ron):
* Ma trận trọng số $W$: Kích thước $B \times A$ (gồm $B \times A$ trọng số).
* Vector bias $b$: Kích thước $B \times 1$ (gồm $B$ phần tử, mỗi nơ-ron tầng sau có 1 bias).
* 👉 **Tổng số tham số của tầng này = $B \times A + B = B \times (A + 1)$**.

### Ví dụ mẫu thi trắc nghiệm:
> *Một mạng MLP có đầu vào $d = 784$ (ảnh MNIST), tầng ẩn thứ nhất có $h_1 = 128$ nơ-ron, tầng ẩn thứ hai có $h_2 = 64$ nơ-ron, tầng đầu ra Softmax có $K = 10$ nơ-ron. Giả sử mọi nơ-ron đều có bias, tính tổng số tham số cần huấn luyện của toàn mạng.*
* **Bước 1 (Input $\to$ Ẩn 1):** $128 \times (784 + 1) = 128 \times 785 = 100.480$ tham số.
* **Bước 2 (Ẩn 1 $\to$ Ẩn 2):** $64 \times (128 + 1) = 64 \times 129 = 8.256$ tham số.
* **Bước 3 (Ẩn 2 $\to$ Output):** $10 \times (64 + 1) = 10 \times 65 = 650$ tham số.
* 👉 **Tổng tham số toàn mạng:** $100.480 + 8.256 + 650 = 109.386$ tham số.

---

## 6. Huấn luyện mạng: Backpropagation & Các biến thể Gradient Descent
📍 **[Slide Trang 39 – 64]**

### 6.1 Lan truyền thuận & Lan truyền ngược
* **Forward Pass (Lan truyền thuận):** Dữ liệu đi từ input qua các tầng ẩn đến output, tính toán giá trị dự đoán $\hat{y}$ và hàm mất mát $L$. Trong lúc đi, mạng lưu lại toàn bộ các giá trị trung gian $z$ và $a$.
* **Backward Pass / Backpropagation (Lan truyền ngược):**
  - Sử dụng **Quy tắc chuỗi (Chain Rule)** trên đồ thị tính toán (Computational Graph).
  - Đi ngược từ hàm mất mát $L$ về tầng đầu ra, rồi qua các tầng ẩn để tính đạo hàm riêng: $\frac{\partial L}{\partial W}$ và $\frac{\partial L}{\partial b}$.

### 6.2 So sánh 3 biến thể của Gradient Descent
📍 **[Slide Trang 54 – 60]**

```
    Batch GD                          Mini-batch GD                         SGD
 (Toàn bộ N mẫu)                   (Một lô nhỏ B mẫu)                   (Đúng 1 mẫu)
  Đường đi mượt mà,               Đường đi ổn định, có dao động nhẹ,   Dao động dích dắc hỗn loạn,
  chậm chạp trên dữ liệu lớn.     chuẩn mực tối ưu GPU thực tế!        cập nhật siêu nhanh.
```

1. **Batch Gradient Descent:** Dùng **toàn bộ dữ liệu ($N$ mẫu)** để tính đúng 1 gradient rồi cập nhật trọng số 1 lần.
   - *Ưu điểm:* Quỹ đạo đi rất êm ái, hướng thẳng tới cực tiểu.
   - *Nhược điểm:* Quá chậm và tốn bộ nhớ khi tập dữ liệu có hàng triệu mẫu; dễ bị kẹt ở các cực tiểu địa phương nông.
2. **Stochastic Gradient Descent (SGD):** Cập nhật trọng số ngay sau **từng mẫu dữ liệu duy nhất ($1$ mẫu)**.
   - *Ưu điểm:* Cập nhật cực nhanh; độ nhiễu ngẫu nhiên cao giúp mạng dễ dàng nhảy thoát ra khỏi các hố cực tiểu địa phương.
   - *Nhược điểm:* Dao động dích dắc hỗn loạn, khó hội tụ chính xác vào đáy cực tiểu.
3. **Mini-batch Gradient Descent:** Chia dữ liệu thành các lô nhỏ có kích thước $B$ (thường là lũy thừa của 2: $32, 64, 128, 256$).
   - *Ưu điểm:* **Sự kết hợp hoàn hảo** — Vừa tận dụng được năng lực tính toán song song ma trận của GPU, vừa cập nhật tham số thường xuyên và có dao động nhẹ giúp thoát cực tiểu địa phương $\to$ **Lựa chọn tiêu chuẩn trong mọi framework Deep Learning**.

### 6.3 Các kỹ thuật bổ trợ quan trọng
* **Momentum (Quán tính):** Bổ sung một phần vận tốc từ bước cập nhật trước vào bước hiện tại $v_t = \gamma v_{t-1} + \eta \nabla L$. Giúp viên bi lăn nhanh qua các vùng bằng phẳng và giảm rung lắc ở các hẻm vực dốc.
* **⚠️ KHỞI TẠO TRỌNG SỐ (CỰC HAY THI):**
  - **Tuyệt đối KHÔNG ĐƯỢC khởi tạo tất cả các trọng số $W = 0$!**
  - Vì nếu $W = 0$, mọi nơ-ron trong cùng một tầng sẽ nhận đầu vào $z$ giống nhau, cho ra kích hoạt $a$ giống nhau, và nhận gradient truyền ngược y hệt nhau (hiện tượng đối xứng - Symmetry) $\to$ Toàn bộ nơ-ron bị đồng bộ hóa, mạng sâu mất tác dụng!
  - Bắt buộc phải khởi tạo **ngẫu nhiên các giá trị nhỏ** (Xavier / He Initialization).
* **Early Stopping (Dừng sớm):** Theo dõi độ mất mát trên tập **Validation**. Khi Validation Loss ngừng giảm và bắt đầu tăng trở lại (dấu hiệu Overfitting) $\to$ Dừng huấn luyện ngay lập tức và giữ lại bộ trọng số tốt nhất.

---

## 🎯 CÁC CÂU HỎI TRẮC NGHIỆM ĐIỂN HÌNH CHƯƠNG 6

1. **Câu hỏi:** Tại sao Perceptron đơn tầng của Rosenblatt không thể giải quyết được bài toán cổng logic XOR?
   - *Trả lời:* Vì dữ liệu của bài toán XOR không phân tách tuyến tính (Linearly Separable).
2. **Câu hỏi:** Điều gì sẽ xảy ra nếu ta loại bỏ tất cả các hàm kích hoạt phi tuyến trong một mạng MLP 10 tầng?
   - *Trả lời:* Mạng sẽ sụp đổ và có năng lực biểu diễn tương đương với đúng một tầng tuyến tính duy nhất.
3. **Câu hỏi:** Hàm kích hoạt nào trong các hàm sau đối xứng qua gốc tọa độ 0: Sigmoid, Tanh, ReLU?
   - *Trả lời:* Hàm Tanh (miền giá trị $(-1, 1)$).
4. **Câu hỏi:** Trong bài toán nhận diện chữ số viết tay từ 0 đến 9 (10 lớp), tầng đầu ra nên dùng hàm kích hoạt nào và hàm mất mát nào?
   - *Trả lời:* Kích hoạt Softmax và hàm mất mát Categorical Cross-Entropy.
5. **Câu hỏi:** Vì sao người ta không khởi tạo tất cả các trọng số $W$ trong mạng nơ-ron bằng 0?
   - *Trả lời:* Vì gây ra hiện tượng đối xứng (Symmetry problem), khiến các nơ-ron trong cùng tầng học giống hệt nhau.
