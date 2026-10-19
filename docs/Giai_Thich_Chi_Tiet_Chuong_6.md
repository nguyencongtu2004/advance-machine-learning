# 🧠 TỔNG HỢP CHI TIẾT TOÀN BỘ GIẢI THÍCH TRỰC QUAN BẢN CHẤT CHƯƠNG 6: MLP (MULTI-LAYER PERCEPTRON)
> **Tài liệu gốc:** [06_Note_Chuong_6_MLP_Multi_Layer_Perceptron.md](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/ôn tập 21-10/06_Note_Chuong_6_MLP_Multi_Layer_Perceptron.md)  
> **Slide bài giảng:** [Chuong-6-MLP-Multi-Layer-Perceptron.pdf](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/Chuong-6-MLP-Multi-Layer-Perceptron.pdf) (76 trang)  
> **Phương pháp học:** Tư duy trực quan, ví dụ đời thường, giải phẫu công thức toán học, sơ đồ ASCII và trọng tâm các bẫy trắc nghiệm phòng thi 21-10.

---

# MỤC LỤC CHI TIẾT
1. [PHẦN 1: TẾ BÀO NƠ-RON NHÂN TẠO & PERCEPTRON CỔ ĐIỂN](#phần-1-tế-bào-nơ-ron-nhân-tạo--perceptron-cổ-điển)
   - [1.1 Giải phẫu toán học: Đầu vào, Trọng số $w$, Bias $b$, Tổng $z$, Kích hoạt $a$](#11-giải-phẫu-toán-học-đầu-vào-trọng-số-w-bias-b-tổng-z-kích-hoạt-a)
   - [1.2 Ý nghĩa sâu xa của Trọng số và Bias](#12-ý-nghĩa-sâu-xa-của-trọng-số-và-bias)
   - [1.3 Perceptron Rosenblatt (1957) & Bản chất hình học của Siêu phẳng](#13-perceptron-rosenblatt-1957--bản-chất-hình-học-của-siêu-phẳng)
   - [1.4 Thuật toán học từ sai lầm của Perceptron](#14-thuật-toán-học-từ-sai-lầm-của-perceptron)
   - [1.5 Bế tắc lịch sử: Bài toán XOR và Mùa đông AI thứ nhất (1969)](#15-bế-tắc-lịch-sử-bài-toán-xor-và-mùa-đông-ai-thứ-nhất-1969)
2. [PHẦN 2: KIẾN TRÚC MẠNG MLP & VAI TRÒ SỐNG CÒN CỦA TÍNH PHI TUYẾN](#phần-2-kiến-trúc-mạng-mlp--vai-trò-sống-còn-của-tính-phi-tuyến)
   - [2.1 Cấu trúc 3 tầng: Input, Hidden Layers, Output](#21-cấu-trúc-3-tầng-input-hidden-layers-output)
   - [2.2 Tầng ẩn học biểu diễn mới (Representation Learning)](#22-tầng-ẩn-học-biểu-diễn-mới-representation-learning)
   - [2.3 Chứng minh toán học: Vì sao BẮT BUỘC phải có hàm kích hoạt PHI TUYẾN?](#23-chứng-minh-toán-học-vì-sao-bắt-buộc-phải-có-hàm-kích-hoạt-phi-tuyến)
   - [2.4 Định lý Xấp xỉ Phổ quát (Universal Approximation Theorem)](#24-định-lý-xấp-xỉ-phổ-quát-universal-approximation-theorem)
3. [PHẦN 3: SO SÁNH TOÀN DIỆN CÁC HÀM KÍCH HOẠT (SIGMOID, TANH, RELU)](#phần-3-so-sánh-toàn-diện-các-hàm-kích-hoạt-sigmoid-tanh-relu)
   - [3.1 Hàm Sigmoid: Công thức, Đạo hàm cực đại 0.25 & Hai căn bệnh chí tử](#31-hàm-sigmoid-công-thức-đạo-hàm-cực-đại-025--hai-căn-bệnh-chí-tử)
   - [3.2 Hàm Tanh: Đối xứng qua 0 (Zero-centered) & Giới hạn bão hòa](#32-hàm-tanh-đối-xứng-qua-0-zero-centered--giới-hạn-bão-hòa)
   - [3.3 Hàm ReLU: Chuẩn mực Deep Learning, Tốc độ x6 & Bệnh Dying ReLU](#33-hàm-relu-chuẩn-mực-deep-learning-tốc-độ-x6--bệnh-dying-relu)
   - [3.4 Leaky ReLU & Các biến thể chữa bệnh "chết nơ-ron"](#34-leaky-relu--các-biến-thể-chữa-bệnh-chết-nơ-ron)
   - [3.5 Bảng so sánh ma trận 1-1 các hàm kích hoạt](#35-bảng-so-sánh-ma-trận-1-1-các-hàm-kích-hoạt)
4. [PHẦN 4: THIẾT KẾ TẦNG ĐẦU RA & CẶP ĐÔI HOÀN HẢO VỚI HÀM MẤT MÁT](#phần-4-thiết-kế-tầng-đầu-ra--cặp-đôi-hoàn-hảo-với-hàm-mất-mát)
   - [4.1 Hồi quy: Output tuyến tính + Hàm mất mát MSE](#41-hồi-quy-output-tuyến-tính--hàm-mất-mát-mse)
   - [4.2 Phân loại nhị phân: 1 nơ-ron Sigmoid + Binary Cross-Entropy (BCE)](#42-phân-loại-nhị-phân-1-nơ-ron-sigmoid--binary-cross-entropy-bce)
   - [4.3 Phân loại đa lớp: K nơ-ron Softmax + Categorical Cross-Entropy (CCE)](#43-phân-loại-đa-lớp-k-nơ-ron-softmax--categorical-cross-entropy-cce)
   - [4.4 Mẹo ổn định số học trong Softmax (Numerical Stability Trick)](#44-mẹo-ổn-định-số-học-trong-softmax-numerical-stability-trick)
   - [4.5 Biểu diễn nhãn One-hot & Bài toán MNIST kinh điển](#45-biểu-diễn-nhãn-one-hot--bài-toán-mnist-kinh-điển)
5. [PHẦN 5: BÀI TẬP BẤM MÁY TÍNH: TÍNH KÍCH THƯỚC MA TRẬN & SỐ LƯỢNG THAM SỐ](#phần-5-bài-tập-bấm-máy-tính-tính-kích-thước-ma-trận--số-lượng-tham-số)
   - [5.1 Quy tắc kích thước ma trận trọng số $W$ và vector bias $b$](#51-quy-tắc-kích-thước-ma-trận-trọng-số-w-và-vector-bias-b)
   - [5.2 Công thức tổng quát tính số lượng tham số cần học](#52-công-thức-tổng-quát-tính-số-lượng-tham-số-cần-học)
   - [5.3 Ba bài tập mẫu thực hành bấm máy tính chi tiết từng bước](#53-ba-bài-tập-mẫu-thực-hành-bấm-máy-tính-chi-tiết-từng-bước)
6. [PHẦN 6: HUẤN LUYỆN MẠNG: ĐỒ THỊ TÍNH TOÁN, CHAIN RULE & BACKPROPAGATION](#phần-6-huấn-luyện-mạng-đồ-thị-tính-toán-chain-rule--backpropagation)
   - [6.1 Forward Pass: Lưu trữ các giá trị trung gian $z$ và $a$](#61-forward-pass-lưu-trữ-các-giá-trị-trung-gian-z-và-a)
   - [6.2 Đồ thị tính toán (Computational Graph) & Đạo hàm cục bộ](#62-đồ-thị-tính-toán-computational-graph--đạo-hàm-cục-bộ)
   - [6.3 Ví dụ giải phẫu từng con số trên Slide: $f = (x+y)z$](#63-ví-dụ-giải-phẫu-từng-con-số-trên-slide-f--xyz)
   - [6.4 Quy trình Backpropagation tổng quát trên MLP](#64-quy-trình-backpropagation-tổng-quát-trên-mlp)
7. [PHẦN 7: CÁC BIẾN THỂ GRADIENT DESCENT & KỸ THUẬT HUẤN LUYỆN CHỐNG LỖI](#phần-7-các-biến-thể-gradient-descent--kỹ-thuật-huấn-luyện-chống-lỗi)
   - [7.1 Ma trận đối chiếu 3 biến thể: Batch GD vs SGD vs Mini-batch GD](#71-ma-trận-đối-chiếu-3-biến-thể-batch-gd-vs-sgd-vs-mini-batch-gd)
   - [7.2 Tốc độ học (Learning Rate $\eta$) & Cách chẩn đoán Đường cong Loss](#72-tốc-độ-học-learning-rate-eta--cách-chẩn-đoán-đường-cong-loss)
   - [7.3 Momentum: Quán tính làm mượt hướng cập nhật và thoát cực tiểu nông](#73-momentum-quán-tính-làm-mượt-hướng-cập-nhật-và-thoát-cực-tiểu-nông)
   - [7.4 Vì sao TUYỆT ĐỐI KHÔNG ĐƯỢC khởi tạo trọng số bằng 0? (Bẫy đối xứng)](#74-vì-sao-tuyệt-đối-không-được-khởi-tạo-trọng-số-bằng-0-bẫy-đối-xứng)
   - [7.5 Dừng sớm (Early Stopping) trên tập Validation](#75-dừng-sớm-early-stopping-trên-tập-validation)
8. [PHẦN 8: TUYỂN TẬP 12 CÂU HỎI TRẮC NGHIỆM "TỦ" CHẮC CHẮN GẶP PHÒNG THI](#phần-8-tuyển-tập-12-câu-hỏi-trắc-nghiệm-tủ-chắc-chắn-gặp-phòng-thi)

---

# PHẦN 1: TẾ BÀO NƠ-RON NHÂN TẠO & PERCEPTRON CỔ ĐIỂN
📍 **[Slide Trang 4 – 19]**

---

### 1.1 Giải phẫu toán học: Đầu vào, Trọng số $w$, Bias $b$, Tổng $z$, Kích hoạt $a$
📍 **[Slide Trang 8 – 9]**

Mạng nơ-ron nhân tạo lấy cảm hứng từ tế bào thần kinh sinh học (Neuron). Một nơ-ron nhân tạo là một cỗ máy gồm 5 thành phần phối hợp chặt chẽ:

```
  ĐẶC TRƯNG ĐẦU VÀO        TRỌNG SỐ (Weights)
      x_1 ──────────────► ( w_1 ) ───┐
                                      │
      x_2 ──────────────► ( w_2 ) ───┼──► [ TỔNG TUYẾN TÍNH: ] ──► [ HÀM KÍCH HOẠT: ] ──► ĐẦU RA a
                                      │    [ z = w^T x + b    ]    [ a = φ(z)         ]
      x_d ──────────────► ( w_d ) ───┘           ▲
                                                 │
                                            ĐỘ LỆCH (Bias b)
```

1. **Đầu vào (Inputs $x$ hoặc $p$):** Vector đặc trưng $x = [x_1, x_2, \dots, x_d]^T \in \mathbb{R}^d$.
2. **Trọng số (Weights $w$):** Vector $w = [w_1, w_2, \dots, w_d]^T \in \mathbb{R}^d$.
3. **Độ lệch (Bias $b$):** Một số thực vô hướng đóng vai trò dịch chuyển ngưỡng kích hoạt.
4. **Tổng có trọng số (Weighted Sum $z$):**
   $$z = w^T x + b = \sum_{j=1}^d w_j x_j + b$$
5. **Hàm kích hoạt (Activation Function $\phi$):** Biến đổi phi tuyến giá trị $z$ thành đầu ra sau kích hoạt:
   $$a = \phi(z)$$

---

### 1.2 Ý nghĩa sâu xa của Trọng số và Bias
📍 **[Slide Trang 10]**

* **Ý nghĩa của Trọng số $w_j$:**
  - **Độ lớn $|w_j|$:** Phản ánh mức độ quan trọng / mức độ ảnh hưởng của đặc trưng $x_j$ lên quyết định của nơ-ron. $|w_j|$ càng lớn thì đặc trưng đó càng mang tính quyết định.
  - **Dấu của $w_j$:** Cho biết chiều hướng tác động. Dấu dương ($w_j > 0$) nghĩa là đầu vào thúc đẩy nơ-ron kích hoạt (kích thích); dấu âm ($w_j < 0$) nghĩa là đầu vào kìm hãm nơ-ron kích hoạt (ức chế).
* **Ý nghĩa của Bias $b$:**
  - Nếu không có $b$, phương trình $w^Tx = 0$ luôn đi qua gốc tọa độ $(0, 0, \dots, 0)$, khiến nơ-ron bị trói chặt tại gốc tọa độ!
  - Bias đóng vai trò là **ngưỡng kích hoạt nội tại**: Nó quyết định tín hiệu đầu vào phải mạnh đến mức nào thì nơ-ron mới bắt đầu "bật công tắc".

---

### 1.3 Perceptron Rosenblatt (1957) & Bản chất hình học của Siêu phẳng
📍 **[Slide Trang 13 – 16]**

Frank Rosenblatt phát minh ra mô hình **Perceptron** với hàm kích hoạt bước nhảy đơn giản (Step / Threshold function):
$$a = \phi(z) = \begin{cases} 1 & \text{nếu } z = w^Tx + b \ge 0 \\ 0 & \text{nếu } z = w^Tx + b < 0 \end{cases}$$

```
                x_2 ▲
                    │        Phía w^T x + b > 0  (Đầu ra a = 1)
                    │               /
                    │              /  ──► Vector pháp tuyến w (vuông góc với biên!)
                    │             /
                    │            /
                    │           /  BIÊN QUYẾT ĐỊNH: w^T x + b = 0
                    │          /
                    │         /
                    └────────/──────────────► x_1
                            /   Phía w^T x + b < 0  (Đầu ra a = 0)
```

* **Biên quyết định (Decision Boundary):** Là tập hợp các điểm thỏa mãn phương trình:
  $$w^T x + b = 0$$
  - Trong không gian 2D, biên quyết định là một **đường thẳng**.
  - Trong không gian 3D, biên quyết định là một **mặt phẳng**.
  - Trong không gian $d$ chiều, biên quyết định là một **siêu phẳng (Hyperplane)** $d-1$ chiều.
* ⚠️ **Tính chất hình học cực hay thi:** **Vector trọng số $w$ luôn vuông góc với biên quyết định** và luôn hướng về phía vùng không gian cho ra giá trị dự đoán bằng $1$!

---

### 1.4 Thuật toán học từ sai lầm của Perceptron
📍 **[Slide Trang 17]**

Perceptron học theo quy tắc sửa sai trực tiếp (Perceptron Learning Rule):
1. Đưa 1 mẫu $(x_i, y_i)$ qua Perceptron, tính đầu ra dự đoán $\hat{y}_i \in \{0, 1\}$.
2. Tính sai số: $e_i = y_i - \hat{y}_i$.
3. **Cập nhật tham số:**
   $$w \leftarrow w + \eta (y_i - \hat{y}_i) x_i$$
   $$b \leftarrow b + \eta (y_i - \hat{y}_i)$$
   * Nếu đoán **ĐÚNG** ($y_i = \hat{y}_i \implies e_i = 0$): Giữ nguyên $w$ và $b$.
   * Nếu đoán **SAI** ($y_i \ne \hat{y}_i$): Vector trọng số $w$ lập tức quay một góc theo hướng của vector $x_i$ để kéo điểm đó về phía đúng.
   * *Định lý hội tụ Perceptron (Novikoff, 1962):* Nếu dữ liệu phân tách tuyến tính, thuật toán chắc chắn hội tụ sau một số hữu hạn bước lặp!

---

### 1.5 Bế tắc lịch sử: Bài toán XOR và Mùa đông AI thứ nhất (1969)
📍 **[Slide Trang 18 – 19]** — ⚠️ **BẪY TRẮC NGHIỆM LỊCH SỬ!**

```
     CỔNG OR (Tách tuyến tính được)                    CỔNG XOR (BẤT LỰC HOÀN TOÀN!)
      x_2 ▲                                             x_2 ▲
        1 ┼   ● (1)       ● (1)                           1 ┼   ● (1)       ○ (0)
          │                                                 │
          │         /  ◄── 1 đường thẳng chia đôi           │      \     /   ◄── Cần 2 đường thẳng!
        0 ┼───○ (0)───────● (1)──► x_1                    0 ┼───○ (0)───────● (1)──► x_1
          0               1                                 0               1
```

* **Các cổng logic phân tách tuyến tính (Linearly Separable):** Cổng **NOT, AND, OR** đều có thể dùng đúng một đường thẳng phẳng để phân chia hoàn hảo 2 lớp nhãn $0$ và $1$.
* **Cổng logic XOR (Exclusive OR - Hoặc loại trừ):**
  - Mẫu $(0, 0) \to 0$ và $(1, 1) \to 0$ (Cùng nhãn 0 nằm ở 2 góc đối đỉnh chéo nhau).
  - Mẫu $(0, 1) \to 1$ và $(1, 0) \to 1$ (Cùng nhãn 1 nằm ở 2 góc đối đỉnh còn lại).
  - 👉 **HÌNH HỌC KHÔNG THỂ VẼ ĐƯỢC MỘT ĐƯỜNG THẲNG DUY NHẤT NÀO ĐỂ TÁCH 2 LỚP NÀY!**
* **Mùa đông AI thứ nhất (First AI Winter):** Năm 1969, Marvin Minsky và Seymour Papert xuất bản cuốn sách chấn động *"Perceptrons"*, chứng minh toán học rằng Perceptron đơn tầng bất lực trước bài toán XOR. Điều này khiến toàn bộ các quỹ nghiên cứu AI toàn cầu bị cắt giảm, đẩy ngành AI chìm vào giấc ngủ đông suốt gần 2 thập kỷ.
* 👉 **LỐI THOÁT DUY NHẤT:** Phải kết hợp nhiều nơ-ron thành **Mạng nhiều tầng (MLP - Multi-Layer Perceptron)** và sử dụng **Hàm kích hoạt phi tuyến**!

---

# PHẦN 2: KIẾN TRÚC MẠNG MLP & VAI TRÒ SỐNG CÒN CỦA TÍNH PHI TUYẾN
📍 **[Slide Trang 20 – 38]**

---

### 2.1 Cấu trúc 3 tầng: Input, Hidden Layers, Output
📍 **[Slide Trang 20 – 22]**

Một mạng MLP hoàn chỉnh bao gồm 3 phân khu chức năng:

```
    TẦNG ĐẦU VÀO           TẦNG ẨN THỨ NHẤT         TẦNG ẨN THỨ HAI          TẦNG ĐẦU RA
   (Input Layer)           (Hidden Layer 1)         (Hidden Layer 2)        (Output Layer)
      x_1 ───────────┐         ╭───────╮                ╭───────╮
                     ├────────►│   h1  ├───────────────►│   h1  │
      x_2 ───────────┼────────►│   h2  ├───────────────►│   h2  ├──────────► ŷ (Dự đoán)
                     │         │  ...  │                │  ...  │
      x_d ───────────┘         ╰───────╯                ╰───────╯
   (Không tham số)        (W^(1), b^(1), φ)        (W^(2), b^(2), φ)       (W^(3), b^(3), φ_out)
```

1. **Tầng đầu vào (Input Layer):** Chỉ đóng vai trò nhận các giá trị đặc trưng thô $x \in \mathbb{R}^d$, **hoàn toàn không có trọng số hay phép tính toán nào**.
2. **Một hoặc nhiều tầng ẩn (Hidden Layers):** Nằm giữa input và output. Nhận đầu ra của tầng liền trước, nhân với ma trận trọng số, cộng bias và áp dụng hàm kích hoạt phi tuyến.
3. **Tầng đầu ra (Output Layer):** Đưa ra kết luận cuối cùng (xác suất các lớp hoặc giá trị số thực liên tục).

---

### 2.2 Tầng ẩn học biểu diễn mới (Representation Learning)
📍 **[Slide Trang 26]**

* Điểm khác biệt vĩ đại giữa MLP và các mô hình tuyến tính cổ điển (Linear/Logistic Regression):
  - Mô hình tuyến tính đòi hỏi con người phải tự tay trích xuất đặc trưng (Feature Engineering thủ công).
  - Tầng ẩn của MLP tự động biến đổi không gian dữ liệu gốc $X$ thành một **không gian biểu diễn mới (Feature Space)** nơi mà dữ liệu trở nên **phân tách tuyến tính được**!
* Với bài toán XOR: Tầng ẩn thứ nhất gồm 2 nơ-ron sẽ biến đổi 4 điểm dữ liệu cong queo ban đầu thành 4 tọa độ mới trong không gian ẩn, biến chúng thành một bài toán phân tách tuyến tính hoàn hảo cho tầng đầu ra giải quyết!

---

### 2.3 Chứng minh toán học: Vì sao BẮT BUỘC phải có hàm kích hoạt PHI TUYẾN?
📍 **[Slide Trang 11]** — ⚠️ **CÂU HỎI TỰ LUẬN & TRẮC NGHIỆM ĐỈNH CAO!**

Giả sử ta xây dựng một mạng MLP gồm 2 tầng ẩn, nhưng **không dùng hàm kích hoạt** (hoặc dùng hàm kích hoạt tuyến tính $\phi(z) = z$):

* **Tầng 1:** $a^{(1)} = W^{(1)} x + b^{(1)}$
* **Tầng 2:** $a^{(2)} = W^{(2)} a^{(1)} + b^{(2)}$
* Thay biểu thức tầng 1 vào tầng 2:
  $$a^{(2)} = W^{(2)} \left( W^{(1)} x + b^{(1)} \right) + b^{(2)}$$
  $$a^{(2)} = \underbrace{\left( W^{(2)} W^{(1)} \right)}_{W_{\text{tổng}}} x + \underbrace{\left( W^{(2)} b^{(1)} + b^{(2)} \right)}_{b_{\text{tổng}}}$$
  $$a^{(2)} = W_{\text{tổng}} x + b_{\text{tổng}}$$

* 💡 **Ý NGHĨA KẾT QUẢ:**
  - Tích của hai ma trận $W^{(2)} W^{(1)}$ vẫn chỉ là một ma trận đơn lẻ $W_{\text{tổng}}$!
  - Biểu thức $W^{(2)} b^{(1)} + b^{(2)}$ vẫn chỉ là một vector bias đơn lẻ $b_{\text{tổng}}$!
  - 👉 **Dù bạn có xếp chồng 10 tầng, 100 tầng hay 1.000 tầng tuyến tính lại với nhau, toàn bộ mạng sâu sẽ sụp đổ và có năng lực biểu diễn hoàn toàn tương đương với ĐÚNG MỘT TẦNG TUYẾN TÍNH ĐƠN LẺ!**
  - 👉 Do đó, **bắt buộc phải có hàm kích hoạt PHI TUYẾN** để "uốn cong" không gian giữa các tầng, giúp mạng thoát khỏi cái bẫy tuyến tính!

---

### 2.4 Định lý Xấp xỉ Phổ quát (Universal Approximation Theorem)
📍 **[Slide Trang 38]**

* **Định lý (Cybenko 1989, Hornik 1991):** Một mạng MLP chỉ cần có **ĐÚNG MỘT TẦNG ẨN** với số lượng nơ-ron đủ lớn và sử dụng hàm kích hoạt phi tuyến liên tục (như Sigmoid) thì có thể xấp xỉ bất kỳ hàm số liên tục nào trong không gian thực với độ chính xác tùy ý!
* *Câu hỏi phản biện:* Nếu 1 tầng ẩn đã biểu diễn được mọi hàm, tại sao ta lại cần Mạng sâu (Deep Learning nhiều tầng)?
  - 👉 Vì một mạng nông (1 tầng ẩn) có thể đòi hỏi **hàng triệu nơ-ron** (bùng nổ số lượng nơ-ron theo hàm mũ). Trong khi một mạng sâu (nhiều tầng) có thể biểu diễn cùng một hàm phức tạp đó với **số lượng tham số ít hơn theo cấp số nhân**, học biểu diễn phân cấp từ thấp đến cao cực kỳ tự nhiên!

---

# PHẦN 3: SO SÁNH TOÀN DIỆN CÁC HÀM KÍCH HOẠT (SIGMOID, TANH, RELU)
📍 **[Slide Trang 28 – 31]** — ⚠️ **TRỌNG TÂM CHIẾM ĐẾN 30% ĐỀ THI MLP!**

---

### 3.1 Hàm Sigmoid: Công thức, Đạo hàm cực đại 0.25 & Hai căn bệnh chí tử
📍 **[Slide Trang 28]**

```
           Sigmoid σ(z)
        1 ▲          _ - - - * (Tiến sát 1 khi z rất dương)
          │        /
      0.5 ┼      / (Đạo hàm cực đại = 0.25 tại z = 0)
          │    /
        0 ┴ - - - - - - - - - - -► z
           (Tiến sát 0 khi z rất âm)
```

* **Công thức toán học:**
  $$\sigma(z) = \frac{1}{1 + e^{-z}}, \quad \text{Miền giá trị: } (0, 1)$$
* **Đạo hàm của Sigmoid (Rất hay hỏi công thức!):**
  $$\sigma'(z) = \sigma(z) \cdot (1 - \sigma(z))$$
  - Khi $z = 0$: $\sigma(0) = 0.5 \implies \sigma'(0) = 0.5 \times (1 - 0.5) = \mathbf{0.25}$ (**ĐÂY LÀ GIÁ TRỊ CỰC ĐẠI CỦA ĐẠO HÀM!**).
  - Khi $|z|$ lớn ($z > 4$ hoặc $z < -4$): $\sigma(z) \approx 1$ hoặc $\sigma(z) \approx 0 \implies \sigma'(z) \to 0$.
* **Hai nhược điểm chí mạng của Sigmoid:**
  1. **Triệt tiêu đạo hàm (Vanishing Gradient):** Đạo hàm luôn $\le 0.25$. Khi mạng có $L$ tầng, theo quy tắc chuỗi ta phải nhân liên tiếp $L$ số nhỏ hơn $0.25$: $(0.25)^L \approx 0$ $\implies$ Gradient truyền về các tầng đầu tiên bị teo biến về 0 hoàn toàn, các tầng đầu bị "tê liệt", không học được gì!
  2. **Không đối xứng qua gốc tọa độ 0 (Not Zero-centered):** Đầu ra luôn dương ($a > 0$) $\implies$ Gradient của các trọng số $\frac{\partial L}{\partial w_j} = \delta \cdot x_j$ luôn cùng dấu $\implies$ Cập nhật trọng số bị giật zic-zac chậm chạp.

---

### 3.2 Hàm Tanh: Đối xứng qua 0 (Zero-centered) & Giới hạn bão hòa
📍 **[Slide Trang 29]**

* **Công thức toán học:**
  $$\tanh(z) = \frac{e^z - e^{-z}}{e^z + e^{-z}}, \quad \text{Miền giá trị: } (-1, 1)$$
* **Đạo hàm của Tanh:**
  $$\tanh'(z) = 1 - \tanh^2(z)$$
  - Tại $z = 0$: $\tanh(0) = 0 \implies \tanh'(0) = 1 - 0 = \mathbf{1.0}$.
* **Ưu điểm vượt trội hơn Sigmoid:** **Hoàn toàn đối xứng qua gốc tọa độ 0 (Zero-centered)**. Đầu ra có cả giá trị âm và dương với giá trị trung bình xấp xỉ 0 $\implies$ Khắc phục hiện tượng dao động zic-zac, giúp mạng huấn luyện hội tụ nhanh hơn Sigmoid.
* **Nhược điểm tồn đọng:** Khi $|z|$ lớn, hàm vẫn bị bão hòa ở 2 cực $\implies$ **Vẫn bị bệnh Triệt tiêu đạo hàm (Vanishing Gradient)** khi mạng sâu!

---

### 3.3 Hàm ReLU: Chuẩn mực Deep Learning, Tốc độ x6 & Bệnh Dying ReLU
📍 **[Slide Trang 30]**

Alex Krizhevsky đưa ReLU vào AlexNet (2012) tạo nên cuộc cách mạng trong Deep Learning:

```
           ReLU f(z) = max(0, z)
          ▲           /
          │          /  (Đạo hàm luôn bằng 1 khi z > 0!)
          │         /
          │        /
    ──────┴───────*──────► z
          0       0
   (Đạo hàm = 0)
```

* **Công thức toán học:**
  $$\text{ReLU}(z) = \max(0, z), \quad \text{Miền giá trị: } [0, +\infty)$$
* **Đạo hàm của ReLU:**
  $$\text{ReLU}'(z) = \begin{cases} 1 & \text{khi } z > 0 \\ 0 & \text{khi } z < 0 \end{cases}$$
  *(Tại $z = 0$, quy ước đạo hàm dưới bằng $0$ hoặc $0.5$)*.
* **Hai ưu điểm vô địch của ReLU:**
  1. **GIẢI QUYẾT TRIỆT TIÊU GRADIENT Ở MIỀN DƯƠNG:** Với mọi $z > 0$, đạo hàm luôn bằng đúng **$1.0$**! Gradient chảy qua hàng chục tầng mạng sâu mà không bị teo nhỏ.
  2. **TÍNH TOÁN CỰC NHANH:** Chỉ là phép kiểm tra điều kiện `if z > 0`, không tốn chi phí số học tính hàm số mũ $e^z$ như Sigmoid/Tanh $\implies$ **Huấn luyện hội tụ nhanh hơn gấp 6 lần!**

---

### 3.4 Leaky ReLU & Các biến thể chữa bệnh "chết nơ-ron"
📍 **[Slide Trang 30]**

* **Bệnh lý Dying ReLU (Chết nơ-ron):** Nếu một nơ-ron bị cập nhật trọng số sao cho nó liên tục nhận đầu vào $z < 0$, đạo hàm luôn bằng 0. Nơ-ron này không bao giờ được cập nhật trọng số nữa và vĩnh viễn "chết lâm sàng".
* **Liều thuốc - Leaky ReLU:** Cho phép một độ dốc nhỏ $\alpha$ (thường chọn $\alpha = 0.01$) khi $z < 0$:
  $$\text{Leaky ReLU}(z) = \begin{cases} z & \text{khi } z > 0 \\ \alpha z & \text{khi } z \le 0 \end{cases}$$
  - Nhờ có độ dốc $\alpha = 0.01$, gradient không bao giờ bằng 0, nơ-ron luôn có cơ hội "hồi sinh".

---

### 3.5 Bảng so sánh ma trận 1-1 các hàm kích hoạt
📍 **[Slide Trang 31]**

| Tiêu chí | Sigmoid | Tanh | ReLU | Leaky ReLU |
| :--- | :---: | :---: | :---: | :---: |
| **Công thức** | $\frac{1}{1 + e^{-z}}$ | $\frac{e^z - e^{-z}}{e^z + e^{-z}}$ | $\max(0, z)$ | $\max(\alpha z, z)$ |
| **Miền giá trị** | $(0, 1)$ | $(-1, 1)$ | $[0, +\infty)$ | $(-\infty, +\infty)$ |
| **Đạo hàm cực đại** | **0.25** | **1.0** | **1.0** (khi $z > 0$) | **1.0** (khi $z > 0$) |
| **Zero-centered?** | **KHÔNG** | **CÓ** | KHÔNG | Gần như có |
| **Vanishing Gradient?** | **RẤT NẶNG** | **CÓ** | **KHÔNG (ở miền dương)** | **KHÔNG** |
| **Tốc độ tính toán** | Chậm (hàm số mũ $e$) | Chậm (hàm số mũ $e$) | **Siêu nhanh (Ngưỡng 0)** | Siêu nhanh |
| **Vị trí khuyên dùng** | Chỉ dùng ở **Tầng Output** bài toán nhị phân | Tầng ẩn mạng nông | **TẦNG ẨN MẶC ĐỊNH MẠNG SÂU** | Tầng ẩn mạng sâu |

---

# PHẦN 4: THIẾT KẾ TẦNG ĐẦU RA & CẶP ĐÔI HOÀN HẢO VỚI HÀM MẤT MÁT
📍 **[Slide Trang 41 – 43, 67 – 72]** — ⚠️ **BẮT BUỘC KHÔNG ĐƯỢC CHỌN LỆCH CẶP!**

Trong thiết kế MLP, Hàm kích hoạt tầng đầu ra và Hàm mất mát (Loss function) phải là **cặp bài trùng tương thích tuyệt đối**:

```
                 BÀI TOÁN HỌC MÁY CỦA BẠN LÀ GÌ?
                                │
        ┌───────────────────────┼───────────────────────┐
        ▼                       ▼                       ▼
  HỒI QUY (Regression)    PHÂN LOẠI NHỊ PHÂN      PHÂN LOẠI ĐA LỚP
  Dự đoán giá nhà,        Spam / Không Spam       MNIST (0 đến 9)
  doanh thu, nhiệt độ     (2 lớp đối lập)         (K lớp loại trừ)
        │                       │                       │
        ▼                       ▼                       ▼
  KÍCH HOẠT OUTPUT:       KÍCH HOẠT OUTPUT:       KÍCH HOẠT OUTPUT:
  Tuyến tính (Linear)     Sigmoid (1 nơ-ron)      Softmax (K nơ-ron)
        │                       │                       │
        ▼                       ▼                       ▼
  HÀM MẤT MÁT:            HÀM MẤT MÁT:            HÀM MẤT MÁT:
  MSE (Mean Squared)      BCE (Binary Cross)      CCE (Categorical Cross)
```

---

### 4.1 Hồi quy: Output tuyến tính + Hàm mất mát MSE
📍 **[Slide Trang 42]**
* **Kích hoạt đầu ra:** Tuyến tính $\hat{y} = z$ (hoặc không dùng hàm kích hoạt). Đầu ra có thể là bất kỳ số thực nào từ $-\infty$ đến $+\infty$.
* **Hàm mất mát MSE (Mean Squared Error):**
  $$L_{\text{MSE}} = \frac{1}{2n} \sum_{i=1}^n (y_i - \hat{y}_i)^2$$

---

### 4.2 Phân loại nhị phân: 1 nơ-ron Sigmoid + Binary Cross-Entropy (BCE)
📍 **[Slide Trang 32, 68]**
* **Kích hoạt đầu ra:** 1 nơ-ron duy nhất với hàm Sigmoid: $\hat{y} = \sigma(z) \in (0, 1)$, biểu thị xác suất $P(y = 1 | x)$.
* **Hàm mất mát BCE (Binary Cross-Entropy / Log Loss):**
  $$L_{\text{BCE}} = - \frac{1}{n} \sum_{i=1}^n \left[ y_i \ln(\hat{y}_i) + (1 - y_i) \ln(1 - \hat{y}_i) \right]$$
  * Khi $y_i = 1$: Loss $= -\ln(\hat{y}_i)$. Nếu mô hình đoán $\hat{y} \to 0$, Loss tiến tới $+\infty$ (phạt cực nặng!).
  * Khi $y_i = 0$: Loss $= -\ln(1 - \hat{y}_i)$. Nếu mô hình đoán $\hat{y} \to 1$, Loss tiến tới $+\infty$.

---

### 4.3 Phân loại đa lớp: K nơ-ron Softmax + Categorical Cross-Entropy (CCE)
📍 **[Slide Trang 35, 69]**
* **Kích hoạt đầu ra:** $K$ nơ-ron với hàm Softmax biến vector điểm số thô $z = [z_1, \dots, z_K]^T$ thành phân phối xác suất:
  $$\hat{y}_k = P(y = k | x) = \frac{e^{z_k}}{\sum_{j=1}^K e^{z_j}}, \quad \text{với } \sum_{k=1}^K \hat{y}_k = 1$$
* **Hàm mất mát CCE (Categorical Cross-Entropy):**
  $$L_{\text{CCE}} = - \sum_{k=1}^K y_k \ln(\hat{y}_k)$$
  *(Trong đó nhãn $y$ được mã hóa dưới dạng One-hot vector)*.

---

### 4.4 Mẹo ổn định số học trong Softmax (Numerical Stability Trick)
📍 **[Slide Trang 36]** — ⚠️ **BẪY TRẮC NGHIỆM ĐẶC SẮC!**

* **Nguy cơ tràn số (Overflow):** Nếu điểm số thô $z_k$ lớn (ví dụ: $z_k = 1000$), máy tính tính $e^{1000} \to \text{inf}$ hoặc trả về lỗi số học `NaN`.
* **Giải pháp chuẩn:** Trừ đi giá trị lớn nhất $c = \max(z_1, \dots, z_K)$ khỏi tất cả các phần tử trước khi lấy mũ:
  $$\text{Softmax}(z)_k = \frac{e^{z_k - c}}{\sum_{j=1}^K e^{z_j - c}}$$
* **Chứng minh toán học xác suất KHÔNG ĐỔI:**
  $$\frac{e^{z_k - c}}{\sum_j e^{z_j - c}} = \frac{e^{z_k} \cdot e^{-c}}{\sum_j (e^{z_j} \cdot e^{-c})} = \frac{e^{z_k} \cdot e^{-c}}{e^{-c} \cdot \sum_j e^{z_j}} = \frac{e^{z_k}}{\sum_j e^{z_j}}$$
* 👉 **KẾT LUẬN THI:** Việc trừ hằng số $c$ giúp số mũ lớn nhất bằng $e^0 = 1$ (triệt tiêu hoàn toàn lỗi tràn số) trong khi **giá trị xác suất đầu ra được bảo toàn 100%**!

---

### 4.5 Biểu diễn nhãn One-hot & Bài toán MNIST kinh điển
📍 **[Slide Trang 37, 70]**

* **Mã hóa One-hot:** Với bài toán nhận diện 10 chữ số MNIST ($0, 1, \dots, 9$):
  - Chữ số 0: $[1, 0, 0, 0, 0, 0, 0, 0, 0, 0]^T$
  - Chữ số 3: $[0, 0, 0, 1, 0, 0, 0, 0, 0, 0]^T$
  - Chữ số 9: $[0, 0, 0, 0, 0, 0, 0, 0, 0, 1]^T$
* Nhờ biểu diễn One-hot, hàm mất mát CCE chỉ tính toán đúng tại vị trí của nhãn thật: $L = -\ln(\hat{y}_{\text{đúng}})$.

---

# PHẦN 5: BÀI TẬP BẤM MÁY TÍNH: TÍNH KÍCH THƯỚC MA TRẬN & SỐ LƯỢNG THAM SỐ
📍 **[Slide Trang 24]** — ⚠️ **CÂU HỎI THI TÍNH TOÁN 100% CÓ TRONG ĐỀ!**

---

### 5.1 Quy tắc kích thước ma trận trọng số $W$ và vector bias $b$

Xét kết nối từ **Tầng trước** (có $A$ nơ-ron) sang **Tầng sau** (có $B$ nơ-ron):
* Công thức tuyến tính: $z^{(sau)} = W \cdot a^{(trước)} + b$
* Để phép nhân ma trận hợp lệ:
  - Vector kích hoạt tầng trước: Kích thước $A \times 1$.
  - Vector kết quả tầng sau: Kích thước $B \times 1$.
* 👉 **Kích thước ma trận trọng số $W$ BẮT BUỘC PHẢI LÀ: $B \times A$** (Hàng = Số nơ-ron tầng sau, Cột = Số nơ-ron tầng trước).
* 👉 **Kích thước vector bias $b$ BẮT BUỘC PHẢI LÀ: $B \times 1$** (Mỗi nơ-ron tầng sau có đúng 1 bias riêng).

---

### 5.2 Công thức tổng quát tính số lượng tham số cần học

Tại mỗi tầng kết nối giữa tầng trước ($A$ nơ-ron) và tầng sau ($B$ nơ-ron):
$$\text{Số trọng số (Weights)} = B \times A$$
$$\text{Số độ lệch (Biases)} = B$$
$$\mathbf{\text{Tổng số tham số của 1 tầng}} = B \times A + B = \mathbf{B \times (A + 1)}$$

> 💡 **Mẹo bấm máy tính cực nhanh:** Lấy số nơ-ron tầng sau nhân với (số nơ-ron tầng trước cộng thêm 1)!

---

### 5.3 Ba bài tập mẫu thực hành bấm máy tính chi tiết từng bước

#### 📝 BÀI TẬP 1 (Chuẩn đề thi MNIST):
> *Một mạng MLP nhận đầu vào là ảnh kích thước $28 \times 28$ pixel. Mạng gồm Tầng ẩn 1 có 128 nơ-ron, Tầng ẩn 2 có 64 nơ-ron, và Tầng đầu ra có 10 nơ-ron. Giả sử tất cả các nơ-ron đều sử dụng bias. Hãy tính tổng số tham số cần huấn luyện của toàn mạng.*

* **Bước 1 (Xác định số nơ-ron đầu vào):** Ảnh $28 \times 28$ được dàn phẳng thành vector $d = 28 \times 28 = 784$ nơ-ron.
* **Bước 2 (Tham số từ Input $\to$ Tầng ẩn 1):**
  - Tầng trước $A = 784$, tầng sau $B = 128$.
  - Số tham số = $128 \times (784 + 1) = 128 \times 785 = \mathbf{100.480}$ tham số.
* **Bước 3 (Tham số từ Tầng ẩn 1 $\to$ Tầng ẩn 2):**
  - Tầng trước $A = 128$, tầng sau $B = 64$.
  - Số tham số = $64 \times (128 + 1) = 64 \times 129 = \mathbf{8.256}$ tham số.
* **Bước 4 (Tham số từ Tầng ẩn 2 $\to$ Tầng Output):**
  - Tầng trước $A = 64$, tầng sau $B = 10$.
  - Số tham số = $10 \times (64 + 1) = 10 \times 65 = \mathbf{650}$ tham số.
* 👉 **TỔNG SỐ THAM SỐ TOÀN MẠNG:**
  $$\text{Tổng} = 100.480 + 8.256 + 650 = \mathbf{109.386} \text{ tham số!}$$

#### 📝 BÀI TẬP 2 (Bẫy đề thi: Không có bias ở tầng nào đó):
> *Một mạng MLP có 5 đầu vào, tầng ẩn có 10 nơ-ron (CÓ dùng bias), tầng đầu ra có 2 nơ-ron (KHÔNG dùng bias). Tính tổng số tham số.*
* Tầng Input $\to$ Tầng ẩn: $10 \times (5 + 1) = 60$ tham số.
* Tầng ẩn $\to$ Output (không bias): $2 \times 10 = 20$ tham số (chỉ có trọng số, không cộng 2 bias).
* 👉 **Tổng tham số:** $60 + 20 = \mathbf{80}$ tham số!

---

# PHẦN 6: HUẤN LUYỆN MẠNG: ĐỒ THỊ TÍNH TOÁN, CHAIN RULE & BACKPROPAGATION
📍 **[Slide Trang 44 – 53]**

---

### 6.1 Forward Pass: Lưu trữ các giá trị trung gian $z$ và $a$
📍 **[Slide Trang 44]**

* Trong quá trình Lan truyền thuận (Forward Pass), dữ liệu di chuyển từ tầng Input $\to$ Tầng ẩn $\to$ Tầng Output.
* ⚠️ **LƯU Ý TRỌNG TÂM:** Mạng nơ-ron **bắt buộc phải lưu giữ lại toàn bộ các giá trị trung gian $z^{(l)}$ và các giá trị kích hoạt $a^{(l)}$** trong bộ nhớ RAM/VRAM. Vì nếu không có các giá trị này, lát nữa khi đi ngược (Backprop) ta sẽ không thể tính được đạo hàm!

---

### 6.2 Đồ thị tính toán (Computational Graph) & Đạo hàm cục bộ
📍 **[Slide Trang 45 – 47]**

Đồ thị tính toán chia nhỏ một hàm toán học phức tạp thành các nút phép toán cục bộ đơn giản (+, $\times$, $\exp$, $\sin$):
* Mỗi nút nhận đầu vào, thực hiện phép tính và cho ra đầu ra.
* Tại mỗi nút, ta chỉ cần biết cách tính **Gradient cục bộ (Local Gradient)** của đầu ra đối với từng đầu vào của chính nút đó.

---

### 6.3 Ví dụ giải phẫu từng con số trên Slide: $f = (x+y)z$
📍 **[Slide Trang 45, 52]** — ⚠️ **BÀI TẬP MẪU KINH ĐIỂN TRONG SLIDE!**

Cho biểu thức $f(x, y, z) = (x + y)z$. Đặt biến trung gian $q = x + y \implies f = q \cdot z$.
Giá trị đầu vào: $x = -2, y = 5, z = -4$.

```
     x = -2 ──┐
              (+) ──► q = 3 ──┐
     y = 5  ──┘               (x) ──► f = -12
     z = -4 ──────────────────┘
```

#### 1. Lan truyền thuận (Forward pass):
* $q = x + y = (-2) + 5 = 3$.
* $f = q \cdot z = 3 \cdot (-4) = -12$.

#### 2. Lan truyền ngược (Backward pass) qua từng nút bằng Chain Rule:
* Điểm xuất phát: $\frac{\partial f}{\partial f} = 1.0$.
* **Xét nút phép nhân ($f = q \cdot z$):**
  - Gradient cục bộ: $\frac{\partial f}{\partial z} = q$ và $\frac{\partial f}{\partial q} = z$.
  - $\frac{\partial f}{\partial z} = q = \mathbf{3.0}$.
  - $\frac{\partial f}{\partial q} = z = \mathbf{-4.0}$.
* **Xét nút phép cộng ($q = x + y$):**
  - Gradient cục bộ: $\frac{\partial q}{\partial x} = 1.0$ và $\frac{\partial q}{\partial y} = 1.0$.
  - Áp dụng Quy tắc chuỗi (Chain Rule):
    $$\frac{\partial f}{\partial x} = \frac{\partial f}{\partial q} \cdot \frac{\partial q}{\partial x} = (-4.0) \cdot 1.0 = \mathbf{-4.0}$$
    $$\frac{\partial f}{\partial y} = \frac{\partial f}{\partial q} \cdot \frac{\partial q}{\partial y} = (-4.0) \cdot 1.0 = \mathbf{-4.0}$$

> 💡 **Quy tắc nhớ nhanh:** Phép cộng truyền nguyên vẹn gradient cho các nhánh; Phép nhân hoán đổi vị trí của các biến!

---

### 6.4 Quy trình Backpropagation tổng quát trên MLP
📍 **[Slide Trang 48 – 51]**

1. **Bước 1 (Tính sai số tại Tầng đầu ra $L$):**
   $$\delta^{(L)} = \nabla_a L \odot \phi'(z^{(L)})$$
   *(Đặc biệt khi dùng Softmax + Categorical Cross-Entropy, sai số đơn giản đến mức kinh ngạc: $\mathbf{\delta^{(L)} = \hat{y} - y}$!)*.
2. **Bước 2 (Lan truyền sai số ngược về Tầng ẩn $l$):**
   $$\delta^{(l)} = \left( (W^{(l+1)})^T \delta^{(l+1)} \right) \odot \phi'(z^{(l)})$$
   *(Sai số của tầng sau được nhân ngược với chuyển vị ma trận trọng số $(W^{(l+1)})^T$ và nhân từng phần tử với đạo hàm kích hoạt)*.
3. **Bước 3 (Tính gradient của Trọng số và Bias):**
   $$\frac{\partial L}{\partial W^{(l)}} = \delta^{(l)} \cdot (a^{(l-1)})^T$$
   $$\frac{\partial L}{\partial b^{(l)}} = \delta^{(l)}$$
4. **Bước 4 (Cập nhật tham số theo Gradient Descent):**
   $$W^{(l)} \leftarrow W^{(l)} - \eta \frac{\partial L}{\partial W^{(l)}}$$
   $$b^{(l)} \leftarrow b^{(l)} - \eta \frac{\partial L}{\partial b^{(l)}}$$

---

# PHẦN 7: CÁC BIẾN THỂ GRADIENT DESCENT & KỸ THUẬT HUẤN LUYỆN CHỐNG LỖI
📍 **[Slide Trang 54 – 64]**

---

### 7.1 Ma trận đối chiếu 3 biến thể: Batch GD vs SGD vs Mini-batch GD
📍 **[Slide Trang 54 – 56, 60]** — ⚠️ **BẢNG ĐỐI CHIẾU "SỐNG CÒN"!**

| Tiêu chí | Batch Gradient Descent | Stochastic Gradient Descent (SGD) | Mini-batch Gradient Descent |
| :--- | :--- | :--- | :--- |
| **Kích thước mẫu / bước** | **Toàn bộ dataset ($N$ mẫu)** | **Đúng 1 mẫu duy nhất ($1$)** | **Một lô nhỏ ($B = 32, 64, 128$)** |
| **Số lần cập nhật / epoch** | Đúng 1 lần duy nhất | $N$ lần cập nhật | $N / B$ lần cập nhật |
| **Quỹ đạo hội tụ** | Đường đi êm dịu, mượt mà | Dao động zic-zac hỗn loạn | Ổn định, có rung lắc nhẹ vừa đủ |
| **Khả năng thoát cực tiểu địa phương**| Rất kém, dễ bị kẹt ở hố nông | **Rất tốt** (nhiễu giúp nhảy khỏi hố) | **Tốt** (cân bằng hoàn hảo) |
| **Tận dụng phần cứng GPU**| Kém nếu $N$ quá lớn tràn RAM | Không tận dụng được (tính từng mẫu) | **TẬN DỤNG TỐI ĐA NĂNG LỰC GPU!** |
| **Đánh giá thực tế** | Quá chậm trên dữ liệu lớn | Khó hội tụ chính xác vào đáy | **CHUẨN MỰC TRONG DEEP LEARNING** |

---

### 7.2 Tốc độ học (Learning Rate $\eta$) & Cách chẩn đoán Đường cong Loss
📍 **[Slide Trang 58 – 59]**

```
     Hàm mất mát L
          ▲
          │   \  /  \    /
          │    \/    \  /   ◄── TỐC ĐỘ HỌC QUÁ LỚN (Phân kỳ, Loss dao động dữ dội!)
          │           \/
          │  \
          │   \ _ _ _ _ _   ◄── TỐC ĐỘ HỌC TỐI ƯU (Hội tụ nhanh, êm ái về đáy)
          │
          │  \ \ \ \ \ \    ◄── TỐC ĐỘ HỌC QUÁ NHỎ (Học rùa bò, kẹt cực tiểu nông)
          └─────────────────────► Số vòng lặp (Epochs)
```

1. **Learning rate quá lớn ($\eta$ quá cao):** Các bước nhảy vượt quá đáy cực tiểu $\implies$ Mất mát bị phân kỳ, dao động dữ dội hoặc vọt lên giá trị vô cùng (`NaN`).
2. **Learning rate quá nhỏ ($\eta$ quá thấp):** Tiến triển cực kỳ chậm chạp, tốn hàng nghìn epoch vẫn chưa học xong, dễ bị sa lầy ở các điểm yên ngựa (Saddle points) hoặc cực tiểu địa phương nông.
3. **Chiến lược hiện đại:** Sử dụng **Learning Rate Scheduler** (Bắt đầu với $\eta$ lớn để học nhanh, sau đó giảm dần $\eta$ (Decay) khi tiến gần đáy).

---

### 7.3 Momentum: Quán tính làm mượt hướng cập nhật và thoát cực tiểu nông
📍 **[Slide Trang 61]**

Lấy cảm hứng từ một hòn đá lăn từ trên đỉnh núi xuống:
* **Công thức toán học:**
  $$v_t = \gamma v_{t-1} + \eta \nabla L(\theta_t)$$
  $$\theta_{t+1} = \theta_t - v_t$$
  *(Trong đó $\gamma \approx 0.9$ là hệ số suy giảm quán tính)*.
* 💡 **Ý nghĩa:**
  - Gradient ở các hướng dao động qua lại sẽ triệt tiêu lẫn nhau $\implies$ **Giảm rung lắc ở các hẻm vực dốc hẹp**.
  - Gradient ở các hướng cùng chiều sẽ cộng dồn gia tốc $\implies$ **Lăn siêu nhanh qua các vùng bình nguyên bằng phẳng**.
  - Động lượng tích lũy giúp viên bi có đà **nhảy vọt qua các gò đất cao để thoát khỏi cực tiểu địa phương nông**!

---

### 7.4 Vì sao TUYỆT ĐỐI KHÔNG ĐƯỢC khởi tạo trọng số bằng 0? (Bẫy đối xứng)
📍 **[Slide Trang 62]** — ⚠️ **BẪY TRẮC NGHIỆM ĐIỂN HÌNH NHẤT!**

* **Thảm họa nếu gán $W = 0$:**
  - Giả sử mọi trọng số trong tầng ẩn đều bằng $0$.
  - Mọi nơ-ron trong tầng ẩn đó sẽ nhận cùng một giá trị tổng có trọng số $z_1 = z_2 = \dots = z_h = b$.
  - Chúng cho ra cùng một giá trị kích hoạt: $a_1 = a_2 = \dots = a_h = \phi(b)$.
  - Trong quá trình Backpropagation, chúng nhận về các giá trị gradient y hệt nhau!
  - Sau khi cập nhật, các trọng số của chúng vẫn bằng nhau chằn chặn!
* 👉 **Hiện tượng này gọi là Bẫy đối xứng (Symmetry Problem):** Toàn bộ hàng trăm nơ-ron trong tầng ẩn bị "đồng bộ hóa", cùng học một đặc trưng duy nhất. Mạng sâu $100$ nơ-ron bị thoái hóa thành đúng $1$ nơ-ron đơn độc!
* 👉 **GIẢI PHÁP:** Bắt buộc phải **khởi tạo trọng số ngẫu nhiên phá vỡ tính đối xứng (Symmetry Breaking)**:
  - Khởi tạo **Xavier/Glorot**: Thích hợp cho Sigmoid và Tanh ($W \sim \mathcal{N}(0, \frac{2}{n_{in} + n_{out}})$).
  - Khởi tạo **He (Kaiming)**: Thích hợp cho ReLU ($W \sim \mathcal{N}(0, \frac{2}{n_{in}})$).

---

### 7.5 Dừng sớm (Early Stopping) trên tập Validation
📍 **[Slide Trang 63]**

```
     Mất mát (Loss)
          ▲
          │                          ĐƯỜNG TEST / VALIDATION
          │                         /
          │       \                /  ◄── VÙNG OVERFITTING! (Loss val bắt đầu tăng)
          │        \              * ◄── ĐIỂM DỪNG SỚM (EARLY STOPPING)
          │         \ _ _ _ _ _ _/
          │          \
          │           \ _ _ _ _ _ _   ◄── ĐƯỜNG TRAIN (Cứ tiếp tục giảm)
          └────────────────────────────────► Số Epochs
```

* Trong quá trình huấn luyện, ta liên tục đánh giá mô hình trên tập **Validation**.
* Train Loss luôn giảm, nhưng Validation Loss sẽ giảm đến một đáy cực tiểu rồi bắt đầu quay đầu tăng trở lại (dấu hiệu mạng bắt đầu học vẹt - Overfitting).
* **Quy tắc Early Stopping:** Khi Validation Loss ngừng cải thiện sau một số epoch ấn định trước (gọi là `patience`), lập tức **dừng huấn luyện ngay** và lấy lại bộ trọng số tại thời điểm Validation Loss tốt nhất!

---

# PHẦN 8: TUYỂN TẬP 12 CÂU HỎI TRẮC NGHIỆM "TỦ" CHẮC CHẮN GẶP PHÒNG THI

1. **Câu 1:** Tại sao mô hình Perceptron đơn tầng của Frank Rosenblatt không thể phân loại được dữ liệu của bài toán cổng logic XOR?
   * 👉 **Đáp án:** Vì dữ liệu của bài toán cổng XOR **không phân tách tuyến tính (Not Linearly Separable)**, không thể dùng một siêu phẳng đơn lẻ để phân tách.
2. **Câu 2:** Nếu trong một mạng nơ-ron nhiều tầng, ta loại bỏ toàn bộ các hàm kích hoạt phi tuyến (hoặc dùng hàm kích hoạt tuyến tính), điều gì sẽ xảy ra?
   * 👉 **Đáp án:** Mạng sẽ **sụp đổ thành một mô hình tuyến tính đơn tầng duy nhất**, vì tích của nhiều ma trận tuyến tính vẫn là một ma trận tuyến tính.
3. **Câu 3:** Giá trị đạo hàm cực đại của hàm kích hoạt Sigmoid là bao nhiêu và đạt được tại đâu?
   * 👉 **Đáp án:** Đạt cực đại bằng **$0.25$** tại điểm **$z = 0$**.
4. **Câu 4:** Điểm vượt trội nhất của hàm kích hoạt Tanh so với Sigmoid là gì?
   * 👉 **Đáp án:** Hàm Tanh **đối xứng qua gốc tọa độ 0 (Zero-centered)** với miền giá trị $(-1, 1)$, giúp gradient không bị dao động zic-zac.
5. **Câu 5:** Hiện tượng "Dying ReLU" trong mạng nơ-ron nhân tạo là gì?
   * 👉 **Đáp án:** Là hiện tượng nơ-ron liên tục nhận giá trị đầu vào âm ($z < 0$), khiến đạo hàm bằng 0 vĩnh viễn và trọng số không bao giờ được cập nhật lại nữa.
6. **Câu 6:** Trong bài toán phân loại đa lớp loại trừ gồm $K$ lớp, tầng đầu ra nên sử dụng hàm kích hoạt nào và hàm mất mát nào?
   * 👉 **Đáp án:** Kích hoạt **Softmax** và hàm mất mát **Categorical Cross-Entropy (CCE)**.
7. **Câu 7:** Một mạng MLP có đầu vào $d = 100$, một tầng ẩn gồm 50 nơ-ron, và tầng đầu ra gồm 10 nơ-ron. Giả sử tất cả các nơ-ron đều có bias, tổng số tham số cần huấn luyện là:
   * 👉 **Đáp án:** $50 \times (100 + 1) + 10 \times (50 + 1) = 5.050 + 510 = \mathbf{5.560}$ tham số.
8. **Câu 8:** Tại sao tuyệt đối không được khởi tạo tất cả các trọng số $W$ trong mạng nơ-ron bằng 0?
   * 👉 **Đáp án:** Vì gây ra **Hiện tượng đối xứng (Symmetry Problem)**, khiến mọi nơ-ron trong cùng một tầng có cùng đầu ra và cùng nhận gradient như nhau, làm mất tác dụng của mạng nhiều nơ-ron.
9. **Câu 9:** Thuật toán Lan truyền ngược (Backpropagation) thực chất là sự ứng dụng của quy tắc giải tích nào trên đồ thị tính toán?
   * 👉 **Đáp án:** **Quy tắc chuỗi (Chain Rule)** để tính đạo hàm riêng của hàm mất mát đối với từng trọng số và bias.
10. **Câu 10:** Trong biểu thức Softmax, việc trừ đi giá trị cực đại $c = \max(z)$ khỏi các điểm số thô nhằm mục đích gì?
    * 👉 **Đáp án:** Nhằm **chống tràn số số học (Avoid Numerical Overflow)** khi tính hàm mũ $e^z$, trong khi bảo toàn nguyên vẹn giá trị xác suất đầu ra.
11. **Câu 11:** Biến thể Gradient Descent nào được coi là chuẩn mực trong Deep Learning hiện đại nhờ cân bằng giữa khả năng tận dụng GPU và ổn định cập nhật?
    * 👉 **Đáp án:** **Mini-batch Gradient Descent**.
12. **Câu 12:** Kỹ thuật Momentum bổ sung thêm thành phần nào vào công thức cập nhật trọng số của Gradient Descent?
    * 👉 **Đáp án:** Bổ sung **vận tốc / quán tính từ bước cập nhật trước đó** ($v_t = \gamma v_{t-1} + \eta \nabla L$), giúp làm mượt quỹ đạo và vượt qua cực tiểu địa phương.
