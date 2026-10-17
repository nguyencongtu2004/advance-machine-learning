/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 10: SEMINAR - TRANSFORMER & ATTENTION
   - Số lượng: 25 câu (ID 486 - 510)
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_10 = [
  {
    "id": 486,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Động lực lịch sử lớn nhất thúc đẩy sự ra đời của kiến trúc Transformer (\"Attention Is All You Need\", 2017) thay thế cho RNN/LSTM là gì?",
    "options": [
      "RNN tiêu tốn quá ít bộ nhớ GPU",
      "RNN xử lý tuần tự từng bước thời gian nên không thể song song hóa quá trình huấn luyện, đồng thời khó duy trì mối quan hệ phụ thuộc ngữ cảnh rất dài",
      "RNN chỉ xử lý được hình ảnh chứ không xử lý được văn bản",
      "LSTM không có hàm kích hoạt phi tuyến"
    ],
    "answer": 1,
    "explanation": "### 🎯 Động lực ra đời Transformer:\n* **Tính tuần tự của RNN/LSTM:** Muốn tính bước $t$ bắt buộc phải đợi bước $t-1$ tính xong $\\implies$ không tận dụng được sức mạnh tính toán song song của GPU.\n* **Điểm nghẽn ngữ cảnh:** Vector trạng thái ẩn cố định phải nén thông tin qua hàng trăm bước $\\implies$ suy hao thông tin phụ thuộc xa.\nTransformer loại bỏ hoàn toàn tính tuần tự, xử lý toàn bộ các từ cùng lúc nhờ cơ chế Self-Attention.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 3-5"
  },
  {
    "id": 487,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Công thức chuẩn xác của cơ chế chú ý tích vô hướng có tỷ lệ (Scaled Dot-Product Attention) là gì?",
    "options": [
      "$\\text{Attention}(Q, K, V) = \\text{softmax}(QK^T) V$",
      "$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right) V$",
      "$\\text{Attention}(Q, K, V) = \\frac{\\text{softmax}(QV)}{K^T}$",
      "$\\text{Attention}(Q, K, V) = \\sigma(W_q Q + W_k K) V$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Scaled Dot-Product Attention:\n$$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right) V$$\n* $Q$ (Query): Vector truy vấn.\n* $K$ (Key): Vector khóa (để đối chiếu tương đồng với Query).\n* $V$ (Value): Vector giá trị thông tin.\n* $d_k$: Số chiều của vector Key.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 9, Notebook Section 9"
  },
  {
    "id": 488,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Tại sao trong công thức Scaled Dot-Product Attention, tích vô hướng $QK^T$ lại bắt buộc phải chia cho hệ số tỷ lệ $\\sqrt{d_k}$?",
    "options": [
      "Để chuyển đổi vector thành ma trận vuông",
      "Khi chiều $d_k$ lớn, tích vô hướng $QK^T$ có độ lớn rất lớn đẩy hàm Softmax vào vùng bão hòa có gradient cực nhỏ (triệt tiêu đạo hàm); chia cho $\\sqrt{d_k}$ giúp giữ phương sai ổn định quanh 1",
      "Để bảo đảm tổng các phần tử bằng 0",
      "Để giảm số lượng tham số cần học của mạng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Vai trò sống còn của $\\sqrt{d_k}$:\nGiả sử các thành phần của $Q$ và $K$ là các biến ngẫu nhiên độc lập có trung bình 0 và phương sai 1. Tích vô hướng $q \\cdot k = \\sum_{i=1}^{d_k} q_i k_i$ sẽ có kỳ vọng bằng 0 nhưng **phương sai bằng $d_k$**. Khi $d_k$ lớn (ví dụ 64 hoặc 512), giá trị tích vô hướng rất lớn khiến Softmax bị bão hòa (tiến sát 1 hoặc 0), gradient bị triệt tiêu khiến mạng không học được.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 10, Notebook Section 9"
  },
  {
    "id": 489,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Cơ chế Chú ý Đa đầu (Multi-Head Attention) mang lại lợi ích đột phá nào so với việc chỉ sử dụng một đầu chú ý duy nhất?",
    "options": [
      "Tăng gấp đôi tốc độ xử lý trên CPU",
      "Cho phép mô hình đồng thời chú ý đến thông tin từ các không gian biểu diễn con khác nhau ở các vị trí khác nhau (ví dụ một đầu bắt quan hệ ngữ pháp, một đầu bắt quan hệ ngữ nghĩa)",
      "Tự động dịch văn bản sang nhiều ngôn ngữ cùng lúc",
      "Loại bỏ hoàn toàn sự cần thiết của hàm mất mát Cross-Entropy"
    ],
    "answer": 1,
    "explanation": "### 🎯 Multi-Head Attention:\nThay vì chỉ tính một ma trận attention duy nhất, Multi-Head chiếu $Q, K, V$ qua $h$ bộ ma trận trọng số độc lập để tạo ra $h$ đầu tính song song:\n$$\\text{MultiHead}(Q, K, V) = \\text{Concat}(\\text{head}_1, \\dots, \\text{head}_h) W^O$$\nĐiều này cho phép mạng cùng lúc nhìn câu dưới nhiều góc độ khác nhau (chủ ngữ - vị ngữ, đại từ - danh từ thay thế...).",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 11, Notebook Section 10"
  },
  {
    "id": 490,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Vì sao kiến trúc Transformer bắt buộc phải bổ sung Mã hóa Vị trí (Positional Encoding) vào vector nhúng từ (Token Embedding)?",
    "options": [
      "Vì Transformer không thể phân biệt được chữ hoa và chữ thường",
      "Vì các phép toán Self-Attention hoàn toàn bất biến đối với thứ tự vị trí; nếu không có Positional Encoding, câu đảo từ lộn xộn sẽ cho ra kết quả biểu diễn y hệt nhau",
      "Vì hàm Softmax đòi hỏi dữ liệu phải có tính tuần hoàn",
      "Để nén độ dài câu văn về một hằng số cố định"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất của Positional Encoding:\nKhác với RNN xử lý tuần tự từng từ một, phép nhân ma trận Self-Attention xử lý tất cả các từ trong câu cùng một lúc. Do đó, câu \"Tôi cắn con chó\" và \"Con chó cắn tôi\" nếu không có mã hóa vị trí sẽ sinh ra ma trận biểu diễn y hệt nhau! Positional Encoding đưa thông tin thứ tự trước sau vào mạng.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 7, Notebook Section 7"
  },
  {
    "id": 491,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Hàm số nào được tác giả Vaswani et al. sử dụng để tạo ra vector Positional Encoding dạng sin/cosin trong Transformer gốc?",
    "options": [
      "Hàm bước nhảy Heaviside",
      "$PE_{(pos, 2i)} = \\sin\\left(\\frac{pos}{10000^{2i/d_{\\text{model}}}}\\right)$ và $PE_{(pos, 2i+1)} = \\cos\\left(\\frac{pos}{10000^{2i/d_{\\text{model}}}}\\right)$",
      "Hàm Sigmoid đối xứng",
      "Hàm đa thức bậc ba Lagrange"
    ],
    "answer": 1,
    "explanation": "### 🎯 Công thức Sinusoidal Positional Encoding:\nSử dụng các bước sóng sin và cosin có tần số khác nhau từ $2\\pi$ đến $10000 \\cdot 2\\pi$. Nhờ tính chất lượng giác, vị trí tương đối $pos + k$ có thể biểu diễn tuyến tính qua $pos$, giúp mô hình dễ dàng học cách chú ý đến khoảng cách tương đối giữa các từ.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 8, Notebook Section 7"
  },
  {
    "id": 492,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Mặt nạ nhân quả (Causal Mask / Look-ahead Mask) trong khối Decoder của Transformer có nhiệm vụ gì?",
    "options": [
      "Bỏ qua các từ đồng nghĩa trong câu",
      "Gán giá trị $-\\infty$ vào các vị trí tương lai trong ma trận attention để ngăn Decoder \"nhìn trộm\" các từ phía sau khi huấn luyện tự hồi quy",
      "Tự động phát hiện lỗi chính tả",
      "Xóa bỏ các token `<pad>` trong câu nguồn"
    ],
    "answer": 1,
    "explanation": "### 🎯 Causal Mask (Look-ahead Mask):\nKhi sinh từ tiếp theo (Autoregressive), tại bước $t$, Decoder chỉ được phép nhìn các từ từ $1$ đến $t$. Trong quá trình huấn luyện song song, Causal Mask đặt một ma trận tam giác trên chứa $-\\infty$. Khi qua hàm Softmax, $e^{-\\infty} = 0$, triệt tiêu hoàn toàn sự chú ý tới các từ tương lai.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 14, Notebook Section 8.2"
  },
  {
    "id": 493,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Mặt nạ đệm (Padding Mask) trong Transformer được sử dụng nhằm mục đích gì?",
    "options": [
      "Đệm thêm số 0 vào 4 cạnh của ảnh",
      "Che giấu các token đệm `<pad>` để chúng không tham gia tính toán và không nhận trọng số chú ý trong hàm Softmax",
      "Ngăn chặn việc tràn bộ nhớ khi câu quá ngắn",
      "Mã hóa các ký tự đặc biệt"
    ],
    "answer": 1,
    "explanation": "### 🎯 Padding Mask:\nKhi huấn luyện theo Batch, các câu có độ dài ngắn khác nhau được thêm các token `<pad>` cho bằng nhau. Padding Mask gán giá trị $-\\infty$ tại các vị trí `<pad>` để Softmax gán xác suất bằng 0, bảo đảm mô hình không lãng phí sự chú ý vào các ký tự vô nghĩa này.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Notebook Section 8.1"
  },
  {
    "id": 494,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Trong tầng Cross-Attention của khối Decoder, các vector Query ($Q$), Key ($K$) và Value ($V$) được lấy từ đâu?",
    "options": [
      "$Q, K, V$ đều được lấy từ đầu ra của Decoder trước đó",
      "$Q$ lấy từ Decoder; còn $K$ và $V$ lấy từ đầu ra cuối cùng của Encoder",
      "$Q$ và $K$ lấy từ Encoder; còn $V$ lấy từ Decoder",
      "$Q, K, V$ đều được lấy trực tiếp từ bảng từ điển Embedding"
    ],
    "answer": 1,
    "explanation": "### 🎯 Cơ chế Cross-Attention (Decoder-Encoder Attention):\n* **Query ($Q$):** Đến từ tầng Decoder bên dưới (đại diện cho những gì câu đích tiếng Việt đang cần tìm).\n* **Key ($K$) & Value ($V$):** Đến từ đầu ra của Encoder (đại diện cho toàn bộ thông tin câu nguồn tiếng Anh).\nNhờ đó, Decoder có thể tra cứu thông tin ngữ nghĩa từ câu nguồn để dịch chính xác từ tiếp theo.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 15, Notebook Section 12"
  },
  {
    "id": 495,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Kỹ thuật Chuẩn hóa tầng (Layer Normalization - LayerNorm) trong Transformer khác với Chuẩn hóa theo lô (Batch Normalization - BatchNorm) ở điểm mấu chốt nào?",
    "options": [
      "BatchNorm tính trung bình trên từng mẫu riêng lẻ; LayerNorm tính trung bình trên cả mini-batch",
      "LayerNorm chuẩn hóa các đặc trưng trên từng mẫu độc lập (không phụ thuộc vào kích thước batch), cực kỳ ổn định cho dữ liệu chuỗi có độ dài thay đổi",
      "LayerNorm không có tham số học được",
      "BatchNorm chỉ dùng được cho văn bản, LayerNorm chỉ dùng cho hình ảnh"
    ],
    "answer": 1,
    "explanation": "### 🎯 LayerNorm vs BatchNorm:\n* **BatchNorm:** Tính trung bình và phương sai dọc theo chiều batch size $\\implies$ phụ thuộc vào các mẫu khác trong batch, không phù hợp với chuỗi có độ dài khác nhau.\n* **LayerNorm:** Chuẩn hóa ngang qua tất cả các đặc trưng kích hoạt của **chính mẫu đó tại mỗi bước thời gian**, hoàn toàn độc lập với kích thước batch.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 12, Notebook Section 11"
  },
  {
    "id": 496,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Mạng truyền thẳng theo vị trí (Position-wise Feed-Forward Network - FFN) trong mỗi khối Transformer gồm cấu trúc nào?",
    "options": [
      "Hai phép biến đổi tuyến tính xen kẽ một hàm kích hoạt phi tuyến (như ReLU): $\\text{FFN}(x) = \\max(0, xW_1 + b_1)W_2 + b_2$",
      "Một mạng tích chập 3D",
      "Một tầng hồi quy Logistic duy nhất",
      "Chuỗi 5 lớp Max Pooling"
    ],
    "answer": 0,
    "explanation": "### 🎯 Khối Feed-Forward (FFN):\nMỗi block Attention được tiếp nối bởi một mạng FFN đơn giản gồm 2 lớp tuyến tính: lớp 1 mở rộng số chiều (thường từ $d_{\\text{model}} = 512$ lên $d_{ff} = 2048$), áp dụng ReLU, sau đó lớp 2 nén chiều trở lại $512$.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 12, Notebook Section 11"
  },
  {
    "id": 497,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Độ phức tạp tính toán thời gian của cơ chế Self-Attention chuẩn đối với một chuỗi đầu vào có độ dài $N$ là bao nhiêu?",
    "options": [
      "Tuyến tính $O(N)$",
      "Bậc hai $O(N^2)$",
      "Logarit $O(\\log N)$",
      "Hằng số $O(1)$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Điểm nghẽn bậc 2 của Transformer:\nPhép nhân $QK^T$ tạo ra một ma trận trọng số chú ý kích thước $N \\times N$ (mỗi từ phải đối chiếu với tất cả $N$ từ còn lại trong câu). Chi phí tính toán và bộ nhớ đều tỷ lệ thuận với $O(N^2)$, gây khó khăn khi xử lý văn bản siêu dài (hàng chục ngàn từ).",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 18"
  },
  {
    "id": 498,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Phương pháp sinh từ tham lam (Greedy Decoding) trong giai đoạn suy luận (Inference) của Transformer hoạt động như thế nào?",
    "options": [
      "Chọn ngẫu nhiên một từ trong từ điển theo phân phối đều",
      "Tại mỗi bước sinh, chọn từ có xác suất dự đoán cao nhất từ hàm Softmax ở đầu ra",
      "Tìm kiếm tất cả các câu khả dĩ rồi chọn câu dài nhất",
      "Dịch ngược câu tiếng Việt về lại tiếng Anh để so sánh"
    ],
    "answer": 1,
    "explanation": "### 🎯 Greedy Decoding:\nỞ mỗi bước suy luận, mô hình lấy $\\arg\\max$ của phân phối xác suất Softmax làm từ dự đoán, sau đó nối từ này vào chuỗi đầu vào của Decoder để tiếp tục dự đoán từ kế tiếp cho đến khi gặp token kết thúc `<eos>`.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Notebook Section 18"
  },
  {
    "id": 499,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Chiến lược huấn luyện ép buộc giáo viên (Teacher Forcing) trong Transformer có đặc điểm gì?",
    "options": [
      "Người dạy học ngồi chấm điểm trực tiếp từng bước",
      "Tại mỗi bước thời gian của Decoder trong lúc training, mô hình luôn được nạp từ mục tiêu đúng thực tế (Ground Truth) của bước trước làm đầu vào, thay vì nạp từ do chính nó vừa dự đoán sai",
      "Đóng băng toàn bộ trọng số của Encoder",
      "Chỉ tính gradient trên các câu có độ dài chẵn"
    ],
    "answer": 1,
    "explanation": "### 🎯 Teacher Forcing:\nGiúp quá trình huấn luyện nhanh và ổn định hơn. Nếu để mô hình tự nạp từ dự đoán sai ở bước 1 vào bước 2, lỗi sai sẽ bị khuếch đại theo dây chuyền (Exposure Bias). Teacher Forcing sửa sai ngay lập tức bằng cách luôn đưa đáp án đúng làm đầu vào bước kế tiếp.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Notebook Section 16"
  },
  {
    "id": 500,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Sự kết hợp giữa Kết nối tắt phần dư (Residual Connection) và Chuẩn hóa tầng trong Transformer thường được ký hiệu là gì?",
    "options": [
      "$\\text{Softmax}(\\text{Dropout}(x))$",
      "$\\text{LayerNorm}(x + \\text{Sublayer}(x))$",
      "$\\text{BatchNorm}(x \\cdot W)$",
      "$\\text{ReLU}(x - \\mu)$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Cấu trúc Add & Norm:\nMỗi tầng con (Sublayer) trong khối Encoder và Decoder đều được bao quanh bởi một kết nối phần dư và theo sau là chuẩn hóa tầng:\n$$\\text{Output} = \\text{LayerNorm}(x + \\text{Sublayer}(x))$$\nGiúp gradient lan truyền dễ dàng qua hàng chục tầng Transformer sâu mà không bị suy hao.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 12, Notebook Section 11"
  },
  {
    "id": 501,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Nếu một mô hình Transformer có kích thước vector ẩn $d_{\\text{model}} = 512$ và sử dụng $h = 8$ đầu chú ý (Attention Heads), thì kích thước không gian chiếu của mỗi đầu $d_k$ bằng bao nhiêu?",
    "options": [
      "8",
      "64",
      "256",
      "512"
    ],
    "answer": 1,
    "explanation": "### 🎯 Công thức phân bổ chiều Multi-Head:\n$$d_k = d_v = \\frac{d_{\\text{model}}}{h} = \\frac{512}{8} = 64$$\nNhờ chia nhỏ $d_{\\text{model}}$ thành $h$ phần, tổng chi phí tính toán của $h$ đầu Multi-Head tương đương với một đầu duy nhất có kích thước $d_{\\text{model}}$.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 11, Notebook Section 10"
  },
  {
    "id": 502,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Mô hình BERT (Devlin et al., 2018) chỉ sử dụng thành phần nào của kiến trúc Transformer gốc?",
    "options": [
      "Chỉ sử dụng Decoder",
      "Chỉ sử dụng Encoder (với cơ chế Self-Attention hai chiều không che mặt nạ nhân quả)",
      "Chỉ sử dụng lớp Positional Encoding",
      "Sử dụng đầy đủ cả Encoder và Decoder"
    ],
    "answer": 1,
    "explanation": "### 🎯 Các nhánh tiến hóa của Transformer:\n* **Chỉ dùng Encoder (Autoencoding):** **BERT, RoBERTa** — phù hợp cho hiểu văn bản, phân loại, NER (nhìn được ngữ cảnh 2 chiều).\n* **Chỉ dùng Decoder (Autoregressive):** **GPT, LLaMA** — phù hợp cho sinh văn bản tiếp nối (dùng Causal Mask).\n* **Đầy đủ Encoder - Decoder:** **T5, BART, Transformer gốc** — phù hợp cho dịch máy, tóm tắt văn bản.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 22"
  },
  {
    "id": 503,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Dòng mô hình GPT (Generative Pre-trained Transformer) của OpenAI được xây dựng dựa trên thành phần nào của kiến trúc Transformer?",
    "options": [
      "Chỉ dùng các khối Decoder xếp chồng với Causal Mask (Mặt nạ nhân quả)",
      "Chỉ dùng các khối Encoder xếp chồng",
      "Chỉ dùng mạng nơ-ron tích chập 1D",
      "Chỉ dùng mạng hồi quy GRU"
    ],
    "answer": 0,
    "explanation": "### 🎯 Kiến trúc Decoder-only của GPT:\nGPT loại bỏ khối Encoder và tầng Cross-Attention, chỉ sử dụng chuỗi các tầng **Masked Decoder** xếp chồng liên tiếp để thực hiện bài toán mô hình hóa ngôn ngữ tự hồi quy (Next-token prediction).",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 22"
  },
  {
    "id": 504,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Thuật toán Beam Search trong giải mã văn bản vượt trội hơn Greedy Decoding ở điểm nào?",
    "options": [
      "Beam Search chạy nhanh hơn gấp 10 lần",
      "Thay vì chỉ giữ lại 1 từ tốt nhất ở mỗi bước, Beam Search duy trì một chùm gồm $B$ giả thuyết có xác suất tích lũy cao nhất, giúp tránh rơi vào các ngõ cụt tối ưu cục bộ",
      "Beam Search không cần dùng đến từ điển Vocabulary",
      "Beam Search chỉ dịch các từ danh từ"
    ],
    "answer": 1,
    "explanation": "### 🎯 Thuật toán Beam Search:\nGreedy search có thể chọn một từ có xác suất cao ở bước 1 nhưng dẫn đến toàn bộ các bước sau có xác suất cực thấp. Beam Search duy trì $B$ chuỗi ứng viên (Beam width) song song, tìm kiếm bao quát hơn không gian câu để cho ra bản dịch tự nhiên và chính xác hơn.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Notebook Section 18"
  },
  {
    "id": 505,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Trong ma trận Attention $A = \\text{softmax}(QK^T / \\sqrt{d_k})$, phần tử tại dòng $i$ và cột $j$ biểu thị điều gì?",
    "options": [
      "Khoảng cách địa lý giữa từ $i$ và từ $j$",
      "Mức độ quan trọng (trọng số chú ý) mà từ thứ $i$ dành cho từ thứ $j$ khi tổng hợp thông tin ngữ cảnh",
      "Số lần từ $i$ xuất hiện trước từ $j$",
      "Xác suất từ $j$ bị xóa khỏi câu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Ý nghĩa của Attention Weight:\nTrọng số $A_{i,j}$ cho biết khi nơ-ron đang xây dựng biểu diễn cho token thứ $i$, nó cần \"chú ý\" (tập trung) bao nhiêu phần trăm thông tin vào token thứ $j$. Tổng các phần tử trên mỗi hàng luôn bằng 1.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 9, Notebook Section 20-21"
  },
  {
    "id": 506,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Quá trình chuyển đổi từ từ ngữ dạng chữ thành các chỉ số số nguyên trước khi nạp vào mạng Transformer được gọi là gì?",
    "options": [
      "Tokenization và Numericalization",
      "Continuous Wavelet Transform",
      "Principal Component Projection",
      "Data Augmentation"
    ],
    "answer": 0,
    "explanation": "### 🎯 Pipeline tiền xử lý văn bản:\n1. **Tokenization:** Tách câu thành các mảnh từ nhỏ (token) như BPE, WordPiece.\n2. **Numericalization:** Ánh xạ từng token thành chỉ số ID nguyên trong từ điển (Vocabulary).\n3. **Embedding:** Tra cứu ID trong bảng ma trận để biến thành vector số thực $d$-chiều.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Notebook Section 3-4"
  },
  {
    "id": 507,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Kích thước ma trận trọng số chiếu $W^Q, W^K, W^V$ trong một tầng Transformer chuẩn với kích thước mô hình $d_{\\text{model}}$ là bao nhiêu?",
    "options": [
      "$d_{\\text{model}} \\times d_k$",
      "$N \\times N$",
      "$d_{\\text{model}} \\times d_{\\text{model}}$",
      "$1 \\times d_{\\text{model}}$"
    ],
    "answer": 2,
    "explanation": "### 🎯 Ma trận chiếu Attention:\nĐể chiếu vector đầu vào $x \\in \\mathbb{R}^{d_{\\text{model}}}$ thành $Q, K, V$, mạng nhân với các ma trận tham số học được có kích thước $d_{\\text{model}} \\times d_{\\text{model}}$ (hoặc $d_{\\text{model}} \\times d_k$ cho từng head riêng lẻ).",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 11, Notebook Section 22"
  },
  {
    "id": 508,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Token đặc biệt nào thường được thêm vào đầu chuỗi trong các mô hình như BERT để phục vụ cho các tác vụ phân loại câu?",
    "options": [
      "`<pad>`",
      "`[CLS]`",
      "`[SEP]`",
      "`<eos>`"
    ],
    "answer": 1,
    "explanation": "### 🎯 Token `[CLS]` (Classification):`\nTrong kiến trúc BERT, token `[CLS]` luôn được đặt ở đầu câu. Sau khi đi qua các tầng Transformer, vector biểu diễn tương ứng của `[CLS]` sẽ tổng hợp toàn bộ ngữ cảnh của cả câu và được đưa vào bộ phân loại để gán nhãn (ví dụ phân loại cảm xúc tích cực/tiêu cực).",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 22"
  },
  {
    "id": 509,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Hàm mất mát tiêu chuẩn được sử dụng để huấn luyện mô hình Transformer dịch máy hoặc sinh ngôn ngữ là gì?",
    "options": [
      "Mean Squared Error (MSE)",
      "Cross-Entropy Loss (với kỹ thuật Label Smoothing và bỏ qua nhãn `<pad>`)",
      "Hinge Loss",
      "Contrastive Loss"
    ],
    "answer": 1,
    "explanation": "### 🎯 Hàm mất mát trong Transformer:\nMô hình dự đoán phân phối xác suất trên toàn bộ từ điển (Vocabulary) tại mỗi bước, do đó hàm mất mát chuẩn là **Cross-Entropy Loss**. Các vị trí token `<pad>` được bỏ qua (ignore_index) để không tính lỗi.",
    "slideRef": "Seminar Nhóm 11 (Transformer), Notebook Section 15"
  },
  {
    "id": 510,
    "chapter": 10,
    "chapterTitle": "Chương 10: Seminar - Transformer Architecture & Attention",
    "question": "Mô hình Vision Transformer (ViT - Dosovitskiy et al., 2020) áp dụng kiến trúc Transformer vào xử lý hình ảnh bằng cách nào?",
    "options": [
      "Coi mỗi điểm pixel là một nơ-ron riêng biệt",
      "Cắt bức ảnh thành các mảnh vuông nhỏ (Patches, ví dụ 16x16 pixel), trải phẳng mỗi mảnh thành vector và coi chúng tương tự như các token từ trong câu",
      "Sử dụng các bộ lọc tích chập thay cho cơ chế Attention",
      "Chỉ áp dụng Transformer lên phần âm thanh của video"
    ],
    "answer": 1,
    "explanation": "### 🎯 Vision Transformer (ViT):\nViT chia bức ảnh $224 \\times 224$ thành lưới các patch vuông $16 \\times 16$ (tổng cộng có $14 \\times 14 = 196$ patches). Mỗi patch được chiếu tuyến tính thành một vector embedding, cộng thêm Positional Encoding và đưa vào Transformer Encoder y hệt như một chuỗi văn bản!",
    "slideRef": "Seminar Nhóm 11 (Transformer), Slide 24"
  }
];
