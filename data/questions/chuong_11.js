/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 11: SEMINAR - SEQUENCE MODELS: RNN, LSTM & MAMBA
   - Số lượng: 30 câu (ID 511 - 540)
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_11 = [
  {
    "id": 511,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Dữ liệu chuỗi (Sequence Data) khác biệt với dữ liệu bảng độc lập thông thường ở đặc tính cốt lõi nào?",
    "options": [
      "Dữ liệu chuỗi luôn luôn có kích thước cố định bằng 100",
      "Thứ tự sắp xếp trước sau giữa các phần tử mang ý nghĩa ngữ nghĩa sống còn; nếu xáo trộn thứ tự, ý nghĩa của dữ liệu sẽ bị thay đổi hoặc mất hoàn toàn",
      "Dữ liệu chuỗi chỉ bao gồm các ký tự số nguyên",
      "Dữ liệu chuỗi không thể chuyển đổi thành vector số học"
    ],
    "answer": 1,
    "explanation": "### 🎯 Khái niệm Dữ liệu chuỗi (Sequence Data):\nTrong văn bản, âm thanh, video hay chuỗi thời gian, thứ tự các từ hoặc tín hiệu quyết định toàn bộ ngữ nghĩa. Ví dụ: \"không tốt\" khác hoàn toàn \"tốt không\"; đảo lộn vị trí sẽ làm hỏng dữ liệu. Các mô hình mạng truyền thẳng (Feed-forward) xem các mẫu độc lập không nắm bắt được mối quan hệ thời gian này.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 4"
  },
  {
    "id": 512,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Bài toán Nhận dạng Thực thể có tên (Named Entity Recognition - NER) thuộc dạng cấu trúc I/O nào trong mô hình chuỗi?",
    "options": [
      "One-to-One",
      "One-to-Many",
      "Many-to-One",
      "Many-to-Many (cùng độ dài chuỗi: $T_x = T_y$)"
    ],
    "answer": 3,
    "explanation": "### 🎯 Phân loại I/O Sequence Model:\n* **One-to-Many:** Image Captioning (1 ảnh $\\to$ chuỗi từ mô tả).\n* **Many-to-One:** Sentiment Analysis (chuỗi từ bình luận $\\to$ 1 nhãn tích cực/tiêu cực).\n* **Many-to-Many cùng độ dài:** NER, POS tagging (mỗi từ $x^{\\langle t \\rangle}$ tương ứng 1 nhãn thực thể $y^{\\langle t \\rangle}$).\n* **Many-to-Many khác độ dài:** Machine Translation (câu tiếng Anh 5 từ dịch sang câu tiếng Việt 7 từ).",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 12, 28-30"
  },
  {
    "id": 513,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Ý tưởng trung tâm của Mạng nơ-ron hồi quy (RNN cổ điển) trong việc xử lý chuỗi là gì?",
    "options": [
      "Xóa bỏ hoàn toàn các tầng ẩn",
      "Sử dụng trạng thái ẩn (Hidden state $a^{\\langle t \\rangle}$) như một \"bộ nhớ\" tóm tắt thông tin quá khứ từ các bước trước để truyền tiếp sang bước hiện tại",
      "Huấn luyện các cây quyết định độc lập tại mỗi từ",
      "Tính nghịch đảo ma trận tại mỗi bước thời gian"
    ],
    "answer": 1,
    "explanation": "### 🎯 Trạng thái ẩn $a^{\\langle t \\rangle}$ trong RNN:\nTrạng thái ẩn $a^{\\langle t \\rangle}$ là bản tóm tắt mọi thông tin mà mạng đã quan sát được từ thời điểm $1$ đến $t$. Tại bước $t$, mạng kết hợp trạng thái ẩn bước trước $a^{\\langle t-1 \\rangle}$ và từ hiện tại $x^{\\langle t \\rangle}$ để sinh ra trạng thái ẩn mới $a^{\\langle t \\rangle}$.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 17"
  },
  {
    "id": 514,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Lợi ích sống còn của việc Chia sẻ tham số (Parameter Sharing) qua mọi bước thời gian trong RNN là gì?",
    "options": [
      "Làm tăng số lượng tham số tỷ lệ thuận với độ dài chuỗi",
      "Giữ số lượng tham số cố định và không phụ thuộc vào độ dài chuỗi đầu vào, đồng thời cho phép mạng nhận diện cùng một quy luật ngữ pháp ở bất kỳ vị trí nào trong câu",
      "Ngăn chặn mô hình sử dụng hàm kích hoạt Tanh",
      "Làm cho hàm mất mát luôn đạt giá trị 0"
    ],
    "answer": 1,
    "explanation": "### 🎯 Chia sẻ tham số (Parameter Sharing):\nNếu dùng mạng truyền thẳng, mỗi vị trí từ sẽ cần một bộ trọng số riêng $\\implies$ số tham số bùng nổ theo độ dài câu. Trong RNN, cùng một bộ ma trận trọng số $(W_{ax}, W_{aa}, W_{ya})$ được tái sử dụng qua mọi bước thời gian. Điều này giúp mô hình nhận ra một từ khóa dù nó đứng ở đầu câu hay cuối câu.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 19-20"
  },
  {
    "id": 515,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Công thức lan truyền thuận (Forward propagation) để tính trạng thái ẩn $a^{\\langle t \\rangle}$ trong RNN chuẩn là:",
    "options": [
      "$a^{\\langle t \\rangle} = \\sigma(W_{ya} x^{\\langle t \\rangle} + b_y)$",
      "$a^{\\langle t \\rangle} = g(W_{aa} a^{\\langle t-1 \\rangle} + W_{ax} x^{\\langle t \\rangle} + b_a)$ với $g$ thường là hàm Tanh hoặc ReLU",
      "$a^{\\langle t \\rangle} = a^{\\langle t-1 \\rangle} + x^{\\langle t \\rangle}$",
      "$a^{\\langle t \\rangle} = \\text{softmax}(W_{ax} x^{\\langle t \\rangle})$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Công thức cập nhật RNN:\n$$a^{\\langle t \\rangle} = g(W_{aa} a^{\\langle t-1 \\rangle} + W_{ax} x^{\\langle t \\rangle} + b_a)$$\nHàm kích hoạt $g$ truyền thống luôn là **Tanh** (đưa giá trị về $[-1, 1]$ để kiểm soát miền giá trị không bị bùng nổ sau nhiều bước lặp).",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 21"
  },
  {
    "id": 516,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Thuật toán tính đạo hàm và cập nhật trọng số trong mạng nơ-ron hồi quy được gọi là gì?",
    "options": [
      "Stochastic Gradient Descent thông thường",
      "Lan truyền ngược qua thời gian (Backpropagation Through Time - BPTT)",
      "Thuật toán di truyền hồi quy",
      "Thuật toán K-Means++"
    ],
    "answer": 1,
    "explanation": "### 🎯 BPTT (Backpropagation Through Time):\nVì mạng RNN được trải phẳng (unrolled) qua các bước thời gian $t = 1, \\dots, T_x$, gradient của hàm mất mát tại bước cuối cùng phải được lan truyền ngược dọc theo toàn bộ chuỗi thời gian quay về các bước ban đầu để cập nhật các ma trận trọng số dùng chung.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 26"
  },
  {
    "id": 517,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Hạn chế chí tử nhất của kiến trúc RNN cổ điển khi xử lý các chuỗi văn bản dài là gì?",
    "options": [
      "Mạng không thể xử lý được từ ngữ tiếng Việt",
      "Hiện tượng Triệt tiêu đạo hàm (Vanishing Gradient) khi lan truyền qua nhiều bước thời gian, khiến mạng bị \"trí nhớ ngắn hạn\" và không học được các phụ thuộc dài hạn",
      "Mạng luôn luôn sinh ra các số nguyên âm",
      "Hàm kích hoạt Tanh bị tràn số"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bệnh lý Vanishing Gradient trong RNN:\nKhi lan truyền ngược qua $T$ bước, gradient bị nhân liên tiếp với ma trận trọng số $W_{aa}^T$ và đạo hàm Tanh (luôn $\\le 1$). Nếu trị riêng lớn nhất của $W_{aa} < 1$, gradient suy giảm theo hàm mũ về 0 $\\implies$ các từ ở bước $100$ không thể truyền tín hiệu học về từ ở bước $1$. Ví dụ: câu \"The **dog** that ate the apple ... was **full**\", mạng không nhớ được chủ ngữ là số ít hay số nhiều.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 36-41"
  },
  {
    "id": 518,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Để xử lý hiện tượng Bùng nổ đạo hàm (Exploding Gradient) trong huấn luyện RNN (khi gradient tăng vọt dẫn đến lỗi NaN), kỹ thuật đơn giản và hiệu quả nhất là gì?",
    "options": [
      "Tăng tốc độ học Learning Rate lên gấp 10 lần",
      "Cắt tỉa đạo hàm (Gradient Clipping) - nếu độ dài vector gradient vượt ngưỡng $threshold$, co nó lại về ngưỡng đó",
      "Xóa bỏ các từ cuối câu",
      "Chuyển sang dùng hàm Sigmoid"
    ],
    "answer": 1,
    "explanation": "### 🎯 Kỹ thuật Gradient Clipping:\nNếu $\\|g\\| > c$, ta co lại: $g = \\frac{c}{\\|g\\|} g$. Thao tác này giữ nguyên hướng dốc của gradient nhưng giới hạn độ dài bước nhảy tối đa, ngăn không cho trọng số văng khỏi vùng hội tụ hoặc bị tràn số (NaN).",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 40"
  },
  {
    "id": 519,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Thành phần cốt lõi nào trong tế bào mạng LSTM (Long Short-Term Memory) đóng vai trò là \"đường cao tốc thông tin\" giúp gradient lan truyền không bị suy biến?",
    "options": [
      "Trạng thái tế bào (Cell State - $C_t$)",
      "Cổng ra Output Gate",
      "Vector One-Hot đầu vào",
      "Lớp chuẩn hóa LayerNorm"
    ],
    "answer": 0,
    "explanation": "### 🎯 Cell State ($C_t$) - Đường cao tốc thông tin:\nCell State chạy thẳng tắp xuyên suốt toàn bộ chuỗi với rất ít tương tác phi tuyến (chỉ có phép nhân phần tử và phép cộng tuyến tính). Gradient khi truyền ngược dọc theo Cell State không phải qua các phép nhân ma trận liên hoàn, giải quyết triệt để bài toán Vanishing Gradient.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 44, 46"
  },
  {
    "id": 520,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Ba cổng kiểm soát luồng thông tin trong một tế bào LSTM (Hochreiter & Schmidhuber, 1997) là gì?",
    "options": [
      "Cổng AND, cổng OR, cổng NOT",
      "Cổng quên (Forget Gate), Cổng nạp/nhập (Input Gate), Cổng xuất (Output Gate)",
      "Cổng Stride, cổng Padding, cổng Pooling",
      "Cổng Encoder, cổng Decoder, cổng Mask"
    ],
    "answer": 1,
    "explanation": "### 🎯 3 Cổng của LSTM:\n1. **Forget Gate ($f_t$):** Quyết định vứt bỏ bao nhiêu phần trăm thông tin từ Cell State cũ $C_{t-1}$.\n2. **Input Gate ($i_t$):** Quyết định nạp bao nhiêu phần trăm thông tin ứng viên mới $\\tilde{C}_t$ vào Cell State.\n3. **Output Gate ($o_t$):** Quyết định xuất bao nhiêu phần trăm từ Cell State ra trạng thái ẩn $a_t$ (hoặc $h_t$).\nTất cả các cổng đều dùng hàm kích hoạt Sigmoid (cho ra giá trị từ $0$ = đóng hoàn toàn đến $1$ = mở hoàn toàn).",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 44-45"
  },
  {
    "id": 521,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Công thức cập nhật Trạng thái tế bào ($C_t$) trong LSTM là gì?",
    "options": [
      "$C_t = C_{t-1} + x_t$",
      "$C_t = f_t * C_{t-1} + i_t * \\tilde{C}_t$",
      "$C_t = o_t * \\tanh(C_{t-1})$",
      "$C_t = \\sigma(W_c x_t + b_c)$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Phương trình cập nhật Cell State:\n$$C_t = f_t * C_{t-1} + i_t * \\tilde{C}_t$$\n* $f_t * C_{t-1}$: Quên đi các thông tin cũ không còn hữu ích (ví dụ đổi chủ ngữ).\n* $i_t * \\tilde{C}_t$: Bổ sung thêm các thông tin mới từ ngữ cảnh hiện tại.\nDấu $*$ là phép nhân từng phần tử (Hadamard product).",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 45"
  },
  {
    "id": 522,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Vì sao mô hình BiLSTM (Bidirectional LSTM - LSTM hai chiều) lại vượt trội hơn LSTM đơn hướng trong các bài toán hiểu ngôn ngữ như NER?",
    "options": [
      "Vì BiLSTM chỉ tốn một nửa bộ nhớ so với LSTM",
      "Vì BiLSTM kết hợp đồng thời hai luồng thông tin: một luồng chạy xuôi từ quá khứ và một luồng chạy ngược từ tương lai, cho phép mạng hiểu trọn vẹn ngữ cảnh hai phía",
      "Vì BiLSTM loại bỏ hoàn toàn các cổng Forget Gate",
      "Vì BiLSTM không sử dụng hàm kích hoạt Tanh"
    ],
    "answer": 1,
    "explanation": "### 🎯 Sức mạnh của BiLSTM:\nXét câu: *\"Teddy Roosevelt was a great president\"* và *\"Teddy bears are on sale\"*. Nếu chỉ đọc từ trái sang phải, khi gặp từ \"Teddy\", mô hình đơn hướng không thể biết đó là tên người hay con gấu bông. BiLSTM đọc cả từ phía sau (\"Roosevelt\" vs \"bears\"), cung cấp ngữ cảnh tương lai để phân loại chính xác.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 48-50"
  },
  {
    "id": 523,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Mô hình Không gian Trạng thái liên tục (Continuous-time State Space Model - SSM) trong lý thuyết điều khiển tuyến tính được mô tả bởi hệ phương trình vi phân nào?",
    "options": [
      "$h(t) = w^T x(t) + b$",
      "$\\dot{h}(t) = A h(t) + B x(t)$ và $y(t) = C h(t)$",
      "$y(t) = \\text{softmax}(x(t))$",
      "$\\Delta h(t) = \\max(0, h(t))$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Hệ phương trình LTI SSM:\n$$\\dot{h}(t) = A h(t) + B x(t)$$\n$$y(t) = C h(t)$$\n* $x(t)$: Tín hiệu đầu vào liên tục theo thời gian.\n* $h(t)$: Trạng thái ẩn bên trong (Internal state vector).\n* $y(t)$: Tín hiệu đầu ra.\n* $A, B, C$: Các ma trận tham số của hệ thống tuyến tính bất biến theo thời gian (LTI).",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 54-57"
  },
  {
    "id": 524,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Kỹ thuật Rời rạc hóa (Discretization) bằng phương pháp giữ bậc không (Zero-Order Hold - ZOH) với bước nhảy thời gian $\\Delta$ biến đổi ma trận $A$ liên tục thành ma trận $\\bar{A}$ rời rạc theo công thức nào?",
    "options": [
      "$\\bar{A} = A + \\Delta$",
      "$\\bar{A} = \\exp(\\Delta A)$",
      "$\\bar{A} = \\frac{A}{\\Delta}$",
      "$\\bar{A} = A^T A$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Rời rạc hóa ZOH:\n$$\\bar{A} = \\exp(\\Delta A)$$\n$$\\bar{B} = (\\Delta A)^{-1}(\\exp(\\Delta A) - I) \\cdot \\Delta B$$\nBiến đổi hệ liên tục thành hệ rời rạc để máy tính có thể xử lý các chuỗi token rời rạc theo từng bước thời gian: $h_t = \\bar{A} h_{t-1} + \\bar{B} x_t$.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 58"
  },
  {
    "id": 525,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Tính chất tính toán kép (Dual Computation Modes) của mô hình LTI SSM mang lại hai ưu thế vượt bậc nào?",
    "options": [
      "Chạy được trên cả Windows và macOS",
      "Dạng Hồi quy (Recurrent Mode) cho phép suy luận (Inference) cực nhanh trong thời gian $O(1)$ mỗi bước; Dạng Tích chập (Convolutional Mode) cho phép huấn luyện song song toàn chuỗi cực nhanh trong thời gian $O(N \\log N)$ nhờ phép biến đổi Fourier (FFT)",
      "Chỉ tính toán khi người dùng nhấn phím Enter",
      "Tự động dịch mã sang ngôn ngữ C++"
    ],
    "answer": 1,
    "explanation": "### 🎯 Tính toán kép của LTI SSM:\n* **Khi Training:** Khai triển $y = x * \\bar{K}$, là một phép tích chập 1D với kernel $\\bar{K} = (C\\bar{B}, C\\bar{A}\\bar{B}, C\\bar{A}^2\\bar{B}, \\dots)$. Tính song song toàn bộ câu qua FFT trong $O(N \\log N)$ giống như CNN!\n* **Khi Inference:** Chuyển sang dạng hồi quy $h_t = \\bar{A} h_{t-1} + \\bar{B} x_t$, chỉ mất $O(1)$ thời gian và bộ nhớ cố định giống như RNN, không cần cache ma trận KV khổng lồ như Transformer!",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 59-60"
  },
  {
    "id": 526,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Hạn chế căn bản của các mô hình State Space Model thế hệ trước (như S4) dựa trên giả định Bất biến theo thời gian tuyến tính (Linear Time Invariance - LTI) là gì?",
    "options": [
      "Các ma trận $A, B, C$ bị cố định cho mọi token, khiến mô hình không thể chọn lọc hoặc ghi nhớ thông tin phụ thuộc vào ngữ cảnh (không thể lọc bỏ từ rác hoặc nhớ từ khóa)",
      "Mô hình không thể chạy được trên card đồ họa GPU",
      "Mô hình chỉ áp dụng được cho dữ liệu bảng 1 chiều",
      "Số tham số của mô hình thay đổi liên tục theo thời gian"
    ],
    "answer": 0,
    "explanation": "### 🎯 Giới hạn của LTI SSM:\nTrong hệ LTI, cách thức thông tin được nén vào trạng thái ẩn luôn cố định bất kể từ đó là từ nối vô nghĩa (\"the\", \"and\") hay danh từ then chốt. Mô hình không thể thực hiện tác vụ chọn lọc nội dung (Selective Copying hay Induction Heads) mà Transformer làm rất tốt.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 62-63"
  },
  {
    "id": 527,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Đột phá cốt lõi của kiến trúc Mamba (Selective State Space Model - S6, Gu & Dao 2024) là gì?",
    "options": [
      "Tăng số đầu Attention lên 128 đầu",
      "Cơ chế Chọn lọc (Selection Mechanism): phá vỡ tính LTI bằng cách cho các ma trận tham số $B, C$ và bước thời gian $\\Delta$ biến thiên phụ thuộc trực tiếp vào dữ liệu đầu vào hiện tại: $B_t = s_B(x_t), C_t = s_C(x_t), \\Delta_t = \\tau_\\Delta(\\text{Linear}(x_t))$",
      "Thay thế hoàn toàn mạng nơ-ron bằng thuật toán K-Nearest Neighbors",
      "Xóa bỏ hoàn toàn bước rời rạc hóa ZOH"
    ],
    "answer": 1,
    "explanation": "### 🎯 Đột phá S6 của Mamba:\nBằng cách biến các tham số thành hàm phụ thuộc vào input $x_t$, Mamba cho phép mô hình tự quyết định:\n* Khi gặp từ rác: Đặt $\\Delta_t$ nhỏ $\\implies$ không lưu vào bộ nhớ.\n* Khi gặp từ quan trọng: Đặt $\\Delta_t$ lớn $\\implies$ nạp sâu vào trạng thái ẩn.\nĐiều này mang lại sức mạnh chú ý ngữ cảnh y hệt như Attention của Transformer!",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 63-65"
  },
  {
    "id": 528,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Khi phá vỡ tính chất LTI (các tham số phụ thuộc vào $x_t$), mô hình Mamba không còn dùng được phép tích chập song song FFT. Mamba đã giải quyết bài toán tốc độ huấn luyện trên GPU bằng thuật toán phần cứng nào?",
    "options": [
      "Thuật toán quét song song nhận thức phần cứng (Hardware-aware Selective Scan) tận dụng bộ nhớ SRAM nhanh trên chip GPU và tính toán lại (Recomputation) ở lượt truyền ngược",
      "Chuyển toàn bộ dữ liệu lên bộ nhớ đám mây Cloud",
      "Giảm độ sâu của mô hình xuống còn 1 tầng duy nhất",
      "Chỉ tính toán trên các số nguyên 8-bit mà không dùng số thực"
    ],
    "answer": 0,
    "explanation": "### 🎯 Hardware-aware Selective Scan trong Mamba:\nThay vì đưa các ma trận trạng thái trung gian khổng lồ ra bộ nhớ HBM (DRAM) chậm của GPU (vốn là điểm nghẽn cổ chai I/O), Mamba sử dụng **Kernel Fusion** để tải dữ liệu vào bộ nhớ cực nhanh **SRAM** trên chip GPU, thực hiện thuật toán Parallel Scan trực tiếp trên SRAM, và tính toán lại (Recomputation) ở lượt backward thay vì lưu lại. Nhờ đó Mamba chạy nhanh hơn Transformer tới 5 lần trên chuỗi dài!",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 68-70"
  },
  {
    "id": 529,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "So sánh độ phức tạp tính toán theo độ dài chuỗi $N$ giữa kiến trúc Mamba và cơ chế Attention của Transformer:",
    "options": [
      "Mamba có độ phức tạp bậc hai $O(N^2)$, Transformer có độ phức tạp tuyến tính $O(N)$",
      "Mamba có độ phức tạp tuyến tính $O(N)$ cả về thời gian và bộ nhớ; trong khi Attention của Transformer có độ phức tạp bậc hai $O(N^2)$",
      "Cả hai mô hình đều có độ phức tạp hằng số $O(1)$",
      "Mamba có độ phức tạp hàm mũ $O(2^N)$"
    ],
    "answer": 1,
    "explanation": "### 🎯 So sánh Độ phức tạp Mamba vs Transformer:\n* **Transformer Self-Attention:** $O(N^2)$ (mỗi token phải tính tích vô hướng với tất cả các token khác) $\\implies$ chi phí bùng nổ khi chuỗi dài hàng triệu token.\n* **Mamba:** Đạt **chi phí tuyến tính $O(N)$**, cho phép mở rộng ngữ cảnh lên hàng trăm ngàn đến hàng triệu tokens mượt mà và suy luận với tốc độ hằng số $O(1)$ mỗi token.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 52, 74"
  },
  {
    "id": 530,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Khối kiến trúc Mamba Block kết hợp thống nhất các thành phần nào thay vì tách rời Attention và MLP như Transformer truyền thống?",
    "options": [
      "Chiếu mở rộng HBN, tích chập 1D ngắn, hàm kích hoạt SiLU / Swish, khối SSM chọn lọc và cổng gating tương tự Gated MLP",
      "Khối Pooling, khối Dropout và tầng Softmax",
      "Cây quyết định nhị phân và hồi quy Logistic",
      "Mạng nơ-ron lan truyền ngược đơn tầng"
    ],
    "answer": 0,
    "explanation": "### 🎯 Kiến trúc Mamba Block:\nMamba thiết kế một block đồng nhất (Homogeneous Architecture): vector đầu vào được nhân đôi chiều, một nhánh đi qua Conv 1D + SiLU + SSM chọn lọc S6, nhánh kia làm cổng Gating nhân phần tử, sau đó chiếu nén trở lại kích thước gốc. Thiết kế này loại bỏ sự cần thiết của khối MLP tách biệt.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 71"
  },
  {
    "id": 531,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Trong bài toán mô hình hóa chuỗi, kiến trúc nào sau đây KHÔNG THỂ chạy song song trên GPU trong giai đoạn huấn luyện (Training)?",
    "options": [
      "Mạng Transformer",
      "Mạng nơ-ron hồi quy cổ điển (Standard RNN)",
      "Mạng tích chập 1D (CNN 1D)",
      "Mô hình Mamba (với Hardware-aware Selective Scan)"
    ],
    "answer": 1,
    "explanation": "### 🎯 Điểm yếu của RNN thuần túy:\nDo công thức $a_t = g(W_{aa} a_{t-1} + W_{ax} x_t)$, bước $t$ hoàn toàn lệ thuộc vào kết quả của bước $t-1$. GPU có hàng ngàn nhân tính toán nhưng buộc phải ngồi chờ từng bước thời gian tính tuần tự $\\implies$ không thể song song hóa trong training.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 18, 52"
  },
  {
    "id": 532,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Định lý 1 trong bài báo Mamba (Gu & Dao, 2024) chỉ ra mối liên hệ mật thiết giữa cơ chế chọn lọc SSM và cơ chế cổng nào của RNN?",
    "options": [
      "Cơ chế cổng ReLU",
      "Cơ chế cổng Gated Recurrent Unit (GRU) và LSTM, trong đó tham số $\\Delta_t$ đóng vai trò tương tự như cổng quên (Forget Gate)",
      "Cổng lượng tử hóa",
      "Cổng phân nhánh cây C4.5"
    ],
    "answer": 1,
    "explanation": "### 🎯 Mối liên hệ toán học giữa SSM và RNN Gating:\nĐịnh lý 1 chứng minh rằng cơ chế rời rạc hóa ZOH với tham số bước thời gian phụ thuộc đầu vào $\\Delta_t$ chính là một dạng tổng quát hóa của cơ chế Gating trong LSTM/GRU. Khi $\\Delta_t \\to 0$, mô hình bỏ qua trạng thái hiện tại (giữ nguyên bộ nhớ cũ); khi $\\Delta_t \\to \\infty$, mô hình xóa sạch bộ nhớ cũ để nạp thông tin mới.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 67"
  },
  {
    "id": 533,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Trong mạng RNN, bài toán Lấy mẫu sinh chuỗi mới (Sampling) hoạt động theo cơ chế nào?",
    "options": [
      "Tại mỗi bước, lấy mẫu từ phân phối xác suất đầu ra $\\hat{y}^{\\langle t \\rangle}$ và nạp kết quả đó làm đầu vào $x^{\\langle t+1 \\rangle}$ cho bước tiếp theo",
      "Sinh ngẫu nhiên toàn bộ câu trong 1 lần duy nhất",
      "Sao chép y nguyên câu trong tập dữ liệu huấn luyện",
      "Tính nghịch đảo của chuỗi gốc"
    ],
    "answer": 0,
    "explanation": "### 🎯 Cơ chế Sampling trong Sequence Generation:\nĐể sinh văn bản hay âm nhạc mới, ở bước 1 ta nạp vector 0 hoặc token `<sos>`. Mạng sinh ra xác suất của từ tiếp theo. Ta dùng hàm `np.random.choice` để bốc ngẫu nhiên một từ theo phân phối xác suất này, rồi nạp chính từ vừa sinh làm đầu vào cho bước 2.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 33"
  },
  {
    "id": 534,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Mô hình ngôn ngữ mức ký tự (Character-level Language Model) trong RNN khác với mô hình mức từ (Word-level) ở điểm nào?",
    "options": [
      "Từ điển (Vocabulary) của mức ký tự nhỏ hơn rất nhiều (chỉ gồm các chữ cái a-z, chữ số, dấu câu) và không bao giờ gặp lỗi từ ngoài từ điển (Out-Of-Vocabulary - OOV)",
      "Mức ký tự có độ dài chuỗi ngắn hơn mức từ",
      "Mức ký tự không thể huấn luyện được bằng BPTT",
      "Mức ký tự chỉ dùng được cho tiếng La-tinh"
    ],
    "answer": 0,
    "explanation": "### 🎯 Character-level vs Word-level:\n* **Word-level:** Từ điển khổng lồ ($50.000 - 100.000$ từ), dễ gặp từ lạ OOV, nhưng chuỗi ngắn.\n* **Character-level:** Từ điển cực nhỏ (khoảng 100 ký tự), không sợ từ lạ OOV, nhưng chuỗi trở nên dài gấp 5-10 lần $\\implies$ đòi hỏi mô hình phải nhớ được phụ thuộc xa hơn.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 34"
  },
  {
    "id": 535,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Biến thể GRU (Gated Recurrent Unit) đơn giản hóa cấu trúc của LSTM bằng cách nào?",
    "options": [
      "Gộp Cell State và Hidden State làm một, chỉ sử dụng 2 cổng: Cổng cập nhật (Update Gate) và Cổng đặt lại (Reset Gate)",
      "Tăng số cổng lên thành 5 cổng",
      "Loại bỏ hoàn toàn các phép nhân có trọng số",
      "Thay thế hàm kích hoạt Sigmoid bằng hàm bậc thang"
    ],
    "answer": 0,
    "explanation": "### 🎯 GRU (Cho et al., 2014):\nGRU đơn giản hóa tế bào LSTM: hòa trộn trạng thái $C_t$ và $a_t$ thành một vector trạng thái ẩn duy nhất $h_t$; kết hợp cổng quên và cổng nạp thành **Update Gate ($z_t$)**, và dùng **Reset Gate ($r_t$)**. GRU có ít tham số hơn LSTM, tính toán nhanh hơn và thường cho hiệu năng tương đương.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 47"
  },
  {
    "id": 536,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Ma trận $A$ trong mô hình S4 và Mamba thường được khởi tạo đặc biệt theo ma trận nào để tối ưu hóa khả năng ghi nhớ dài hạn?",
    "options": [
      "Ma trận toàn số 0",
      "Ma trận HiPPO (High-order Polynomial Projection Operators)",
      "Ma trận đơn vị Identity",
      "Ma trận ngẫu nhiên phân phối Gauss"
    ],
    "answer": 1,
    "explanation": "### 🎯 Khởi tạo HiPPO (Gu et al., 2020):\nHiPPO cung cấp cơ sở toán học để nén lịch sử tín hiệu liên tục vào một không gian đa thức trực giao Legendre. Việc khởi tạo ma trận $A$ theo cấu trúc HiPPO cho phép hệ SSM duy trì trí nhớ qua hàng chục ngàn bước thời gian mà không bị suy hao thông tin.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 61"
  },
  {
    "id": 537,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Trong bài toán Dịch máy (Machine Translation) sử dụng mạng RNN, kiến trúc nào được sử dụng để chuyển đổi câu từ ngôn ngữ nguồn sang ngôn ngữ đích có độ dài khác nhau?",
    "options": [
      "Mô hình Perceptron đơn tầng",
      "Kiến trúc Bộ mã hóa - Bộ giải mã (Encoder - Decoder)",
      "Mô hình hồi quy tuyến tính Lasso",
      "Thuật toán phân cụm DBSCAN"
    ],
    "answer": 1,
    "explanation": "### 🎯 Kiến trúc Encoder - Decoder (Seq2Seq):\n* **Encoder:** Đọc toàn bộ câu nguồn tiếng Anh từng từ một và nén toàn bộ thông tin vào vector trạng thái ẩn cuối cùng.\n* **Decoder:** Nhận vector trạng thái này làm khởi đầu và sinh từng từ tiếng Việt tiếp theo cho đến khi gặp token kết thúc.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 10, 30"
  },
  {
    "id": 538,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Hiện tượng \"Bottleneck\" trong kiến trúc RNN Encoder-Decoder truyền thống (trước khi có Attention) là gì?",
    "options": [
      "Dung lượng lưu trữ của ổ cứng bị quá tải",
      "Toàn bộ ngữ nghĩa của câu nguồn dù dài bao nhiêu từ cũng bị ép phải nén vào một vector kích thước cố định duy nhất, gây mất mát thông tin nghiêm trọng trên các câu dài",
      "Tốc độ mạng internet bị suy giảm",
      "Hàm Softmax không thể chạy trên GPU"
    ],
    "answer": 1,
    "explanation": "### 🎯 Điểm nghẽn biểu diễn của Seq2Seq cổ điển:\nBắt một vector có độ dài cố định (ví dụ 512 số thực) phải ghi nhớ đầy đủ từng chi tiết của một đoạn văn dài 100 từ là điều bất khả thi. Đây chính là lý do cơ chế Attention ra đời: cho phép Decoder nhìn lại toàn bộ các trạng thái ẩn trung gian của Encoder.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 30, 52"
  },
  {
    "id": 539,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Trong thực nghiệm đánh giá mô hình Mamba trên các lĩnh vực phi ngôn ngữ (Non-language domains), Mamba thể hiện sự vượt trội rõ rệt nhất ở dạng dữ liệu nào?",
    "options": [
      "Hình ảnh đen trắng kích thước 8x8",
      "Dữ liệu chuỗi DNA dài hàng triệu cặp bazơ và tín hiệu âm thanh thô độ phân giải cao",
      "Dữ liệu bảng có ít hơn 10 dòng",
      "Tập dữ liệu hoa Iris"
    ],
    "answer": 1,
    "explanation": "### 🎯 Ứng dụng chuỗi siêu dài của Mamba:\nNhờ độ phức tạp tuyến tính $O(N)$ và khả năng chọn lọc, Mamba cực kỳ xuất sắc trong mô hình hóa chuỗi DNA (nơi chuỗi dài hàng triệu base-pairs mà Transformer bị nổ bộ nhớ) và dữ liệu sóng âm thanh thô độ dài hàng trăm ngàn mẫu.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 74"
  },
  {
    "id": 540,
    "chapter": 11,
    "chapterTitle": "Chương 11: Seminar - RNN, LSTM & Mamba (SSM)",
    "question": "Hạn chế hiện tại của mô hình Mamba so với các mô hình Transformer đã được thừa nhận trong bài báo là gì?",
    "options": [
      "Mamba không thể chạy được trên card đồ họa NVIDIA",
      "Chi phí phần cứng khi huấn luyện từ đầu vẫn đòi hỏi các GPU hiện đại có băng thông SRAM cao, và hệ sinh thái tối ưu hóa phần mềm chưa phong phú bằng Transformer vốn đã phát triển gần 10 năm",
      "Mamba chỉ hoạt động với chuỗi có độ dài nhỏ hơn 10",
      "Mamba không có hàm mất mát toán học"
    ],
    "answer": 1,
    "explanation": "### 🎯 Giới hạn của Mamba:\nTransformer đã có hệ sinh thái phần cứng (FlashAttention, TensorRT, TPU) được tối ưu hóa cực sâu trong nhiều năm. Mamba phụ thuộc vào các GPU có kiến trúc SRAM hiện đại (như A100/H100) để đạt tốc độ tối đa của Selective Scan, và quá trình huấn luyện quy mô hàng trăm tỷ tham số vẫn cần thời gian kiểm chứng cộng đồng.",
    "slideRef": "Seminar Nhóm 17 (RNN-LSTM-Mamba), Slide 75"
  }
];
