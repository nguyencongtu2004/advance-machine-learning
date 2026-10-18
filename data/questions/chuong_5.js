/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 5: BÀI TOÁN PHÂN CỤM (CLUSTERING)
   - Số lượng: 50 câu
   - Nội dung: Học không giám sát, K-Means, K-Means++, Lloyd's Algorithm, WCSS,
     Elbow Method, Silhouette Score & Plot, GMM (EM Algorithm, Covariance Types),
     DBSCAN (Core, Border, Noise, Density-reachability), Deep Clustering (DEC, DeepCluster)
   - Giải thích chi tiết & trực quan hóa bản chất từ Giai_Thich_Chi_Tiet_Chuong_5.md
   - Hỗ trợ hiển thị Markdown & Công thức Toán LaTeX (KaTeX)
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_5 = [
  {
    "id": 146,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Bài toán phân cụm (Clustering) thuộc loại phương pháp học máy nào?",
    "options": [
      "Học có giám sát (Supervised Learning)",
      "Học không giám sát (Unsupervised Learning)",
      "Học tăng cường (Reinforcement Learning)",
      "Học bán giám sát (Semi-supervised Learning)"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nPhân cụm (Clustering) là bài toán tiêu biểu nhất của **Học không giám sát (Unsupervised Learning)**:\n* **Đầu vào:** Chỉ có các vector đặc trưng $X = [x_1, x_2, \\dots, x_n]$, **hoàn toàn không có nhãn đầu ra $y$ (Ground truth)**.\n* **Mục tiêu:** Tự động khám phá cấu trúc tiềm ẩn, phát hiện các nhóm tự nhiên trong dữ liệu sao cho các điểm trong cùng một cụm tương đồng nhau nhất, và các cụm khác nhau tách biệt nhau nhất.\n* Ngược lại, **Học có giám sát (Supervised Learning)** bắt buộc phải có cặp dữ liệu $(X, y)$ để học hàm ánh xạ $f(X) \\to y$.\n\n> 💡 **Quy tắc trắc nghiệm:** Cứ thấy bài toán gom nhóm không có nhãn đầu ra thì 100% là Unsupervised Learning.",
    "slideRef": "Slide Chương 5, Trang 4, 7"
  },
  {
    "id": 147,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Đầu vào của thuật toán $K$-Means gồm những thành phần nào?",
    "options": [
      "Tập dữ liệu đặc trưng và nhãn lớp thực tế của từng mẫu",
      "Tập $n$ điểm dữ liệu và số lượng cụm $K$ bắt buộc phải được ấn định trước",
      "Chỉ cần tập dữ liệu, không cần biết trước số lượng cụm",
      "Bán kính lân cận $Eps$ và số điểm tối thiểu $MinPts$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nThuật toán $K$-Means đòi hỏi hai yếu tố đầu vào tiên quyết:\n1. **Tập dữ liệu:** $n$ điểm dữ liệu số trong không gian $d$ chiều: $\\mathcal{D} = \\{x_1, x_2, \\dots, x_n\\} \\subset \\mathbb{R}^d$.\n2. **Số lượng cụm $K$:** **Bắt buộc người dùng phải chỉ định trước** (ví dụ $K = 3, 5, \\dots$).\n\n### ⚠️ Bẫy thi kinh điển:\n* $K$-Means **KHÔNG THỂ tự động đoán ra số cụm $K$**. Muốn chọn $K$ tối ưu, kỹ sư phải dùng các phương pháp bổ trợ như **Elbow Method (Khuỷu tay)** hoặc **Silhouette Analysis**.",
    "slideRef": "Slide Chương 5, Trang 10"
  },
  {
    "id": 148,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hàm mục tiêu $WCSS$ (Within-Cluster Sum of Squares hay $SSE$) mà $K$-Means cần tối thiểu hóa có công thức là gì?",
    "options": [
      "Tổng khoảng cách Manhattan giữa các tâm cụm",
      "Tổng bình phương khoảng cách Euclidean từ mỗi điểm dữ liệu đến tâm cụm tương ứng: $J = \\sum_{k=1}^K \\sum_{x \\in C_k} \\|x - \\mu_k\\|^2$",
      "Số lượng điểm nhiễu ngoại lai bị loại bỏ",
      "Hệ số Silhouette trung bình của toàn bộ tập dữ liệu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nHàm mục tiêu cốt lõi của $K$-Means là cực tiểu hóa **Tổng bình phương sai số nội cụm** ($WCSS$ - Within-Cluster Sum of Squares hay $SSE$):\n$$J = \\sum_{k=1}^K \\sum_{x \\in C_k} \\|x - \\mu_k\\|^2$$\n* $C_k$: Tập hợp các điểm thuộc cụm thứ $k$.\n* $\\mu_k$: Vector tọa độ tâm (Centroid) của cụm thứ $k$.\n* $\\|x - \\mu_k\\|^2$: Bình phương khoảng cách Euclidean từ điểm $x$ đến tâm $\\mu_k$.\n\n> 💡 **Ý nghĩa:** $WCSS$ càng nhỏ chứng tỏ các điểm dữ liệu co cụm càng chặt chẽ quanh tâm của mình (High Compactness).",
    "slideRef": "Slide Chương 5, Trang 12"
  },
  {
    "id": 149,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hai bước luân phiên trong chu trình lặp của thuật toán $K$-Means (Thuật toán Lloyd) là gì?",
    "options": [
      "Bước khởi tạo trọng số và Bước chuẩn hóa dữ liệu",
      "Bước gán cụm (Assignment Step) và Bước cập nhật tọa độ tâm cụm (Update Step)",
      "Bước mã hóa One-hot và Bước giảm chiều PCA",
      "Bước tính ma trận hiệp phương sai và Bước tính giá trị riêng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nThuật toán Lloyd giải bài toán $K$-Means bằng phương pháp tối ưu luân phiên 2 bước (Coordinate Descent):\n1. **Bước 1 - Gán cụm (Assignment Step):** Giữ cố định vị trí các tâm $\\mu_k$, tính khoảng cách từ mỗi điểm $x_i$ đến tất cả $K$ tâm, gán $x_i$ vào cụm có tâm gần nó nhất:\n   $$c_i = \\arg\\min_{k} \\|x_i - \\mu_k\\|^2$$\n2. **Bước 2 - Cập nhật tâm (Update Step):** Giữ cố định việc gán nhãn, tính lại tọa độ tâm $\\mu_k$ bằng **trung bình cộng tọa độ** của các điểm trong cụm đó:\n   $$\\mu_k = \\frac{1}{|C_k|} \\sum_{x \\in C_k} x$$\n\nChu trình này lặp lại liên tục cho đến khi nhãn cụm không đổi hoặc các tâm ngừng dịch chuyển.",
    "slideRef": "Slide Chương 5, Trang 13-16"
  },
  {
    "id": 150,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trong bước cập nhật tâm (Update step) của $K$-Means, tọa độ tâm mới của mỗi cụm được tính bằng công thức nào?",
    "options": [
      "Trung vị (Median) của các điểm trong cụm",
      "Trung bình cộng (Mean / Centroid) tọa độ của tất cả các điểm thuộc về cụm đó",
      "Điểm có khoảng cách xa nhất trong cụm",
      "Trọng tâm của toàn bộ tập dữ liệu ban đầu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTên gọi \"$K$-Means\" bắt nguồn chính từ phép toán này:\n* Tâm cụm $\\mu_k$ được tính bằng **trung bình cộng (Mean)** của tất cả các vector điểm $x$ nằm trong cụm $C_k$:\n  $$\\mu_k = \\frac{1}{|C_k|} \\sum_{x \\in C_k} x$$\n* *Chứng minh toán học:* Trong không gian Euclidean, trung bình cộng chính là điểm duy nhất làm đạo hàm của hàm tổng bình phương khoảng cách $\\sum \\|x - \\mu\\|^2$ bằng 0 $\\implies$ làm cho sai số nội cụm đạt cực tiểu tuyệt đối!\n\n### ⚠️ Mở rộng kiến thức:\nNếu ta thay phép tính trung bình cộng (Mean) bằng phép lấy trung vị (Median), ta thu được thuật toán **$K$-Medians** (bền vững hơn với Outliers).",
    "slideRef": "Slide Chương 5, Trang 14, 19"
  },
  {
    "id": 151,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Ranh giới quyết định phân chia giữa các cụm trong không gian của thuật toán $K$-Means tạo thành cấu trúc hình học nào?",
    "options": [
      "Các đường cong uốn lượn phi tuyến bậc 2",
      "Phân hoạch Voronoi (Voronoi Tessellation) với các đường trung trực / siêu phẳng tuyến tính",
      "Các đường tròn đồng tâm bao quanh gốc tọa độ",
      "Các đa giác lõm bất kỳ tự do"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Trong $K$-Means, điểm $x$ được gán vào tâm $\\mu_k$ gần nó nhất.\n* Ranh giới giữa 2 cụm bất kỳ chính là tập hợp các điểm cách đều 2 tâm cụm: $\\|x - \\mu_1\\| = \\|x - \\mu_2\\|$.\n* Đây chính là phương trình của **đường trung trực (trong 2D)** hoặc **siêu phẳng trung trực tuyến tính (trong không gian nhiều chiều)**.\n* Tập hợp các siêu phẳng này chia không gian thành các đa giác lồi gọi là **Tế bào Voronoi (Voronoi Diagram / Voronoi Cells)**.\n\n> 💡 **Hệ quả thi cử:** Ranh giới $K$-Means luôn là các mặt phẳng thẳng, do đó $K$-Means chỉ phân tách được các cụm dạng lồi (hình cầu/elip tròn).",
    "slideRef": "Slide Chương 5, Trang 22"
  },
  {
    "id": 152,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trường hợp cấu trúc dữ liệu nào sau đây khiến thuật toán $K$-Means THẤT BẠI hoàn toàn trong việc phân cụm chính xác?",
    "options": [
      "Các cụm có dạng hình cầu lồi tách biệt rõ ràng",
      "Các cụm có hình dạng uốn lượn phi tuyến phức tạp (như 2 dải hình trăng khuyết lồng nhau, hoặc vòng tròn đồng tâm)",
      "Các cụm có kích thước và mật độ tương đồng nhau",
      "Dữ liệu 2 chiều đã được chuẩn hóa Standard Scaler"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nBốn giới hạn chí tử của $K$-Means:\n1. **Chỉ hoạt động tốt với cụm hình cầu / lồi (Convex):** Vì ranh giới Voronoi là các siêu phẳng thẳng, $K$-Means **bất lực trước các cụm phi tuyến** (hình trăng khuyết lồng nhau, hình vòng tròn đồng tâm, hình xoắn ốc). $K$-Means sẽ cắt ngang dải trăng khuyết làm đôi thay vì gom trọn vẹn cả dải!\n2. **Nhạy cảm với ngoại lai (Outliers):** Bình phương khoảng cách khiến các điểm ở xa kéo lệch tâm cụm.\n3. **Giả định kích thước và mật độ cụm tương đương:** Nếu một cụm dày đặc và một cụm thưa thớt, $K$-Means sẽ chia sai ranh giới.\n4. **Nhạy cảm với khởi tạo tâm ban đầu.**",
    "slideRef": "Slide Chương 5, Trang 23-24"
  },
  {
    "id": 153,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Mục đích chính của thuật toán $K$-Means++ so với $K$-Means truyền thống là gì?",
    "options": [
      "Thay đổi hàm khoảng cách từ Euclidean sang Manhattan",
      "Cải thiện khâu khởi tạo tâm ban đầu thông minh, giúp các tâm phân tán cách xa nhau và giảm thiểu nguy cơ kẹt ở cực tiểu địa phương xấu",
      "Tự động tìm ra số lượng cụm $K$ tối ưu",
      "Loại bỏ hoàn toàn các điểm ngoại lai khỏi tập dữ liệu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* $K$-Means truyền thống khởi tạo $K$ tâm hoàn toàn ngẫu nhiên đồng đều. Nếu vô tình chọn các tâm rơi vào cùng một cụm tự nhiên, thuật toán sẽ bị kẹt ở **cực tiểu địa phương xấu (Bad Local Minima)**.\n* **$K$-Means++ (Arthur & Vassilvitskii, 2007)** sinh ra để giải quyết triệt để khâu khởi tạo:\n  - Triết lý: *\"Các tâm ban đầu nên nằm càng cách xa nhau càng tốt\"*.\n  - Giúp thuật toán hội tụ nhanh hơn gấp nhiều lần và giảm đáng kể sai số $WCSS$ cuối cùng.\n\n> 💡 **Lưu ý:** $K$-Means++ chỉ cải tiến bước KHỞI TẠO TÂM ban đầu, sau đó vẫn chạy thuật toán Lloyd 2 bước như bình thường.",
    "slideRef": "Slide Chương 5, Trang 25, 29"
  },
  {
    "id": 154,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trong thuật toán $K$-Means++, xác suất một điểm $x$ được chọn làm tâm tiếp theo tỷ lệ thuận với đại lượng nào?",
    "options": [
      "Nghịch đảo khoảng cách đến tâm gần nhất",
      "Bình phương khoảng cách $D(x)^2$ từ điểm đó đến tâm gần nhất đã chọn",
      "Khoảng cách từ điểm đó đến gốc tọa độ $(0, 0)$",
      "Số lượng điểm láng giềng xung quanh điểm $x$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nCông thức chọn tâm của $K$-Means++:\n$$P(x) = \\frac{D(x)^2}{\\sum_{x' \\in \\mathcal{X}} D(x')^2}$$\n* $D(x) = \\min_{j} \\|x - \\mu_j\\|$: Khoảng cách ngắn nhất từ điểm $x$ đến tâm cụm gần nó nhất trong số các tâm đã chọn trước đó.\n* **Ý nghĩa:** Điểm nào nằm càng xa các tâm đã chọn ($D(x)$ lớn) thì $D(x)^2$ càng lớn $\\implies$ Xác suất được chọn làm tâm mới càng cao!\n* Cơ chế xác suất có trọng số này ngăn chặn triệt để việc các tâm bị chọn chụm vào cùng một vị trí dày đặc.",
    "slideRef": "Slide Chương 5, Trang 26-28"
  },
  {
    "id": 155,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Phương pháp Elbow (Khuỷu tay) dùng để xác định đại lượng nào trong bài toán phân cụm?",
    "options": [
      "Xác định bán kính lân cận $Eps$",
      "Lựa chọn số lượng cụm $K$ hợp lý dựa trên điểm gập khúc của đồ thị $WCSS$",
      "Xác định ngưỡng phân loại điểm ngoại lai",
      "Chọn kích thước lô (batch size) trong Mini-batch $K$-Means"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nPhương pháp Elbow vẽ đồ thị biểu diễn hàm mất mát $WCSS$ theo số lượng cụm $K$ (từ $K = 1, 2, \\dots, 10$):\n* Khi $K$ tăng, $WCSS$ luôn luôn giảm (khi $K = n$, mỗi điểm là 1 cụm thì $WCSS = 0$).\n* **Điểm Elbow (Khuỷu tay):** Là điểm uốn cong gập khúc rõ nét trên đồ thị.\n  - Trước điểm này: $WCSS$ giảm cực kỳ dốc khi tăng $K$.\n  - Sau điểm này: Việc tăng thêm cụm chỉ làm giảm $WCSS$ một lượng rất nhỏ (bão hòa).\n* 👉 Điểm gập khúc chính là giá trị $K$ tối ưu nhất cần chọn.",
    "slideRef": "Slide Chương 5, Trang 31"
  },
  {
    "id": 156,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hệ số Silhouette $s(i)$ của một điểm dữ liệu $i$ có miền giá trị nằm trong đoạn nào?",
    "options": [
      "$[0, 1]$",
      "$[-1, 1]$",
      "$[0, +\\infty)$",
      "$(-\\infty, +\\infty)$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nHệ số Silhouette được định nghĩa theo công thức:\n$$s(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))}$$\n* Do mẫu số là $\\max(a(i), b(i))$, giá trị của $s(i)$ luôn bị chặn chặt chẽ trong đoạn:\n  $$\\mathbf{-1 \\le s(i) \\le +1}$$\n* Đây là chỉ số đánh giá nội tại không cần nhãn thật, chuẩn hóa tuyệt đối giữa các thuật toán và thang đo khác nhau.",
    "slideRef": "Slide Chương 5, Trang 32-33"
  },
  {
    "id": 157,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trong công thức Silhouette $s(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))}$, đại lượng $a(i)$ biểu thị điều gì?",
    "options": [
      "Khoảng cách từ điểm $i$ đến gốc tọa độ",
      "Khoảng cách trung bình từ điểm $i$ đến tất cả các điểm khác TRONG CÙNG CỤM của nó (Độ chặt nội cụm)",
      "Khoảng cách trung bình từ điểm $i$ đến các điểm thuộc cụm lân cận gần nhất",
      "Khoảng cách giữa hai tâm cụm xa nhau nhất"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **$a(i)$ (Độ chặt chẽ nội cụm - Intra-cluster distance):**\n  - Là khoảng cách trung bình từ điểm $i$ đến toàn bộ các điểm khác nằm trong cùng cụm với nó.\n  - $a(i)$ càng nhỏ chứng tỏ cụm càng đặc quánh, điểm $i$ càng gần gũi với đồng đội $\\implies$ **$a(i)$ càng nhỏ càng tốt!**\n* **$b(i)$ (Độ tách biệt ngoại cụm - Nearest-cluster distance):**\n  - Là khoảng cách trung bình từ điểm $i$ đến các điểm thuộc cụm láng giềng gần nó nhất.\n  - $b(i)$ càng lớn chứng tỏ cụm bên cạnh ở rất xa $\\implies$ **$b(i)$ càng lớn càng tốt!**",
    "slideRef": "Slide Chương 5, Trang 32"
  },
  {
    "id": 158,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Một điểm dữ liệu $i$ có hệ số Silhouette nhận giá trị ÂM ($s(i) < 0$) mang ý nghĩa gì?",
    "options": [
      "Điểm $i$ nằm rất sát tâm cụm của chính nó",
      "Điểm $i$ nằm chính xác trên ranh giới phân cách giữa 2 cụm",
      "Điểm $i$ ĐÃ BỊ GÁN NHẦM CỤM (khoảng cách đến cụm láng giềng nhỏ hơn khoảng cách đến cụm hiện tại)",
      "Điểm $i$ là một Điểm lõi (Core point)"
    ],
    "answer": 2,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n⚠️ **CÂU HỎI BẪY KINH ĐIỂN TRONG PHÒNG THI!**\n* Từ công thức: $s(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))}$.\n* $s(i) < 0 \\iff b(i) - a(i) < 0 \\iff \\mathbf{b(i) < a(i)}$.\n* **Ý nghĩa thực tế:** Khoảng cách từ điểm $i$ đến cụm hàng xóm lại **nhỏ hơn** khoảng cách đến cụm của chính mình!\n* 👉 **Kết luận:** Điểm dữ liệu này đã bị thuật toán **gán sai cụm (Misclassified / Misclustered)**! Đáng lẽ nó phải thuộc về cụm hàng xóm mới đúng.",
    "slideRef": "Slide Chương 5, Trang 33"
  },
  {
    "id": 159,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hệ số Silhouette trung bình của toàn bộ tập dữ liệu tiến rất gần về $+1$ ($s \\approx +1$) biểu thị điều gì?",
    "options": [
      "Kết quả phân cụm rất tồi tệ, các cụm bị dính liền vào nhau",
      "Kết quả phân cụm xuất sắc: các điểm nằm rất chặt chẽ trong cụm của mình và các cụm phân tách rất xa nhau",
      "Dữ liệu có quá nhiều điểm nhiễu ngoại lai",
      "Mô hình đang bị Underfitting nghiêm trọng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Khi $s(i) \\to +1 \\implies a(i) \\ll b(i)$ (khoảng cách nội cụm $a(i) \\approx 0$ và khoảng cách ngoại cụm $b(i)$ rất lớn).\n* Điều này thể hiện trạng thái phân cụm lý tưởng nhất:\n  - Cụm nội bộ đặc quánh, các điểm chụm sát nhau.\n  - Các cụm khác nhau nằm cách xa nhau một trời một vực.\n* 👉 Hệ số Silhouette trung bình càng cao gần 1 thì cấu trúc phân cụm càng rõ ràng và đáng tin cậy.",
    "slideRef": "Slide Chương 5, Trang 33"
  },
  {
    "id": 160,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Mô hình Hỗn hợp Gauss (Gaussian Mixture Model - GMM) tiếp cận bài toán phân cụm theo góc nhìn nào?",
    "options": [
      "Góc nhìn tâm cụm hình học cứng",
      "Góc nhìn xác suất: dữ liệu là sự pha trộn của $K$ phân phối chuẩn nhiều chiều và thực hiện phân cụm mềm (Soft Clustering)",
      "Góc nhìn mật độ lân cận bán kính $Eps$",
      "Góc nhìn đồ thị phân cấp nhị phân"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* GMM là đại diện tiêu biểu của trường phái **Phân cụm dựa trên phân phối xác suất (Distribution-based Clustering)**:\n  - Giả định dữ liệu được sinh ra từ một hỗn hợp gồm $K$ phân phối chuẩn đa biến (Multivariate Gaussian).\n  - Khác với $K$-Means ép mỗi điểm thuộc về đúng 1 cụm (Hard clustering), GMM thực hiện **Phân cụm mềm (Soft Clustering)**: Mỗi điểm thuộc về các cụm với một xác suất cụ thể (ví dụ: 85% Cụm 1, 15% Cụm 2).",
    "slideRef": "Slide Chương 5, Trang 39-40, 44"
  },
  {
    "id": 161,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Ưu thế hình học vượt trội của GMM so với $K$-Means là gì?",
    "options": [
      "GMM chỉ tạo ra các cụm hình cầu tròn trịa",
      "Nhờ ma trận hiệp phương sai $\\Sigma$, các cụm trong GMM có thể mang hình elip xoay các hướng khác nhau với kích thước và độ lệch bất kỳ",
      "GMM luôn chạy nhanh hơn $K$-Means gấp 10 lần",
      "GMM không cần dữ liệu đầu vào dạng số"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* $K$-Means ngầm giả định các cụm có dạng hình cầu đồng nhất vì chỉ đo khoảng cách Euclidean tới 1 tâm duy nhất.\n* **GMM mô tả mỗi cụm bằng 3 tham số:** Trọng số pha trộn $\\pi_k$, Vector tâm $\\mu_k$, và **Ma trận hiệp phương sai $\\Sigma_k$**:\n  - Nhờ ma trận $\\Sigma_k$, các quả chuông Gaussian có thể kéo dãn thành **hình elip nghiêng chéo theo bất kỳ góc nào trong không gian**, mô hình hóa hoàn hảo mối tương quan giữa các đặc trưng!",
    "slideRef": "Slide Chương 5, Trang 41, 48"
  },
  {
    "id": 162,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Thuật toán EM (Expectation - Maximization) huấn luyện mô hình GMM gồm hai bước luân phiên nào?",
    "options": [
      "Bước E: tính trách nhiệm/xác suất mềm $\\gamma_{ik}$; Bước M: cập nhật lại các tham số $(\\pi, \\mu, \\Sigma)$ từ các trọng số đó",
      "Bước E: cập nhật tọa độ tâm; Bước M: gán nhãn cứng 0 hoặc 1",
      "Bước E: chuẩn hóa $z$-score; Bước M: tính phép chiếu PCA",
      "Bước E: tìm trị riêng; Bước M: khử nhiễu ngoại lai"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nVì nhãn cụm thực chất là **biến ẩn (Latent Variable)** không quan sát được, GMM dùng thuật toán EM:\n1. **Bước E (Expectation step):** Giữ cố định tham số, tính **Độ trách nhiệm (Responsibility $\\gamma_{ik}$)** — xác suất hậu nghiệm điểm $x_i$ thuộc về cụm $k$:\n   $$\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\Sigma_k)}{\\sum_{j=1}^K \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$$\n2. **Bước M (Maximization step):** Dùng các trọng số $\\gamma_{ik}$ vừa tính để cập nhật lại các tham số $\\pi_k, \\mu_k, \\Sigma_k$ bằng trung bình có trọng số.\n* Thuật toán lặp lại cho đến khi hàm Log-Likelihood hội tụ.",
    "slideRef": "Slide Chương 5, Trang 46-47"
  },
  {
    "id": 163,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hai tiêu chuẩn thông tin nào thường được dùng để lựa chọn số lượng thành phần $K$ tối ưu trong mô hình GMM?",
    "options": [
      "Elbow và Silhouette",
      "AIC (Akaike Information Criterion) và BIC (Bayesian Information Criterion)",
      "Precision và Recall",
      "MAE và MSE"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTrong GMM, nếu tăng $K$ lên vô hạn thì Log-Likelihood sẽ luôn tăng (gây Overfitting). Để chọn $K$ tối ưu, người ta phạt thêm độ phức tạp của số lượng tham số bằng 2 tiêu chuẩn:\n* **AIC:** $\\text{AIC} = 2k - 2\\ln(L)$\n* **BIC:** $\\text{BIC} = k\\ln(n) - 2\\ln(L)$\n  *(với $k$ là số tham số, $n$ là số mẫu, $L$ là giá trị Likelihood cực đại)*.\n\n> 💡 **Quy tắc trắc nghiệm:** Mô hình GMM tốt nhất là mô hình có giá trị **AIC hoặc BIC NHỎ NHẤT (Cực tiểu)**.",
    "slideRef": "Slide Chương 5, Trang 49"
  },
  {
    "id": 164,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Đặc tính ĐỘT PHÁ NỔI BẬT NHẤT của thuật toán phân cụm DBSCAN so với $K$-Means là gì?",
    "options": [
      "DBSCAN chạy nhanh hơn $K$-Means trên mọi tập dữ liệu lớn",
      "DBSCAN hoàn toàn KHÔNG CẦN người dùng ấn định trước số lượng cụm $K$",
      "DBSCAN luôn tìm ra các cụm hình cầu đối xứng",
      "DBSCAN chỉ áp dụng được cho dữ liệu 1 chiều"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Với $K$-Means và GMM, người dùng **bắt buộc phải chỉ định số cụm $K$ ngay từ đầu**.\n* Ngược lại, **DBSCAN (*Density-Based Spatial Clustering of Applications with Noise*)**:\n  - **TỰ ĐỘNG PHÁT HIỆN SỐ CỤM $K$** dựa trên cấu trúc liên thông mật độ thực tế của dữ liệu!\n  - Ngoài ra, DBSCAN còn có khả năng tự động phát hiện và loại bỏ các điểm nhiễu (Noise Filtering).",
    "slideRef": "Slide Chương 5, Trang 51"
  },
  {
    "id": 165,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hai siêu tham số cốt lõi kiểm soát hành vi của thuật toán DBSCAN là gì?",
    "options": [
      "Số cụm $K$ và số vòng lặp tối đa `max_iter`",
      "Bán kính lân cận $Eps$ ($\\varepsilon$) và Số điểm tối thiểu trong lân cận $MinPts$",
      "Tốc độ học $\\eta$ và hệ số suy giảm trọng số",
      "Số thành phần Gaussian $K$ và ma trận hiệp phương sai $\\Sigma$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nDBSCAN hoạt động dựa trên cặp siêu tham số:\n1. **$Eps$ ($\\varepsilon$ - Epsilon):** Bán kính của hình tròn/mặt cầu xác định vùng lân cận xung quanh một điểm.\n2. **$MinPts$ (Minimum Points):** Số lượng điểm tối thiểu bắt buộc phải có bên trong vùng bán kính $Eps$ để vùng đó được xem là một \"vùng mật độ dày đặc\".\n\n> 💡 **Mẹo:** Dữ liệu $d$ chiều thường chọn $MinPts \\approx 2d$ (dữ liệu 2D thường chọn $MinPts = 4$).",
    "slideRef": "Slide Chương 5, Trang 52"
  },
  {
    "id": 166,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trong DBSCAN, một điểm được định nghĩa là Điểm lõi (Core Point) khi thỏa mãn điều kiện nào?",
    "options": [
      "Vùng lân cận bán kính $Eps$ của nó chứa ít nhất $MinPts$ điểm (TÍNH CẢ CHÍNH BẢN THÂN NÓ)",
      "Nó có khoảng cách gần nhất đến gốc tọa độ",
      "Nó có ít hơn $MinPts$ điểm trong bán kính $Eps$ nhưng chạm vào một điểm khác",
      "Nó nằm cô lập không có láng giềng nào"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n⚠️ **BẪY THI CỰC HAY GẶP VỀ CÁCH ĐẾM ĐIỂM:**\n* Một điểm $p$ là **Core Point (Điểm lõi)** khi và chỉ khi:\n  $$|N_{Eps}(p)| \\ge MinPts$$\n* Trong đó, vùng lân cận $N_{Eps}(p)$ **BẮT BUỘC PHẢI TÍNH CẢ CHÍNH BẢN THÂN ĐIỂM $p$**!\n* *Ví dụ:* Nếu $MinPts = 4$, xung quanh điểm $p$ trong bán kính $Eps$ có 3 điểm khác $\\implies$ Tổng cộng tính cả $p$ là $3 + 1 = 4$ điểm $\\implies$ Điểm $p$ là Core Point!",
    "slideRef": "Slide Chương 5, Trang 53"
  },
  {
    "id": 167,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trong DBSCAN, Điểm biên (Border Point) được nhận dạng bởi đặc điểm nào?",
    "options": [
      "Có số láng giềng trong bán kính $Eps$ lớn hơn hoặc bằng $MinPts$",
      "Có ít hơn $MinPts$ điểm trong bán kính $Eps$ của mình, nhưng lại nằm trong vùng lân cận bán kính $Eps$ của một Core Point",
      "Bị cô lập hoàn toàn và bị gán nhãn là ngoại lai",
      "Tự mình có khả năng phát tán và mở rộng cụm mới"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Border Point (Điểm biên):**\n  - Bản thân nó **không đủ tiêu chuẩn làm Core** (trong bán kính $Eps$ có ít hơn $MinPts$ điểm).\n  - **NHƯNG** nó lại nằm lọt vào bên trong vùng lân cận bán kính $Eps$ của một Core Point nào đó.\n* **Đặc tính hoạt động:** Điểm biên được thu nhận vào cụm của Core Point đó, nhưng nó **KHÔNG THỂ tự mình mở rộng cụm tiếp** (nó là điểm tận cùng ở rìa mép của cụm).",
    "slideRef": "Slide Chương 5, Trang 53, 55"
  },
  {
    "id": 168,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Điểm nhiễu (Noise Point / Outlier) trong thuật toán DBSCAN được định nghĩa là gì?",
    "options": [
      "Điểm có tọa độ mang giá trị âm",
      "Điểm không phải Core Point và cũng không phải Border Point (thường được gán nhãn là -1)",
      "Điểm có hệ số Silhouette bằng +1",
      "Điểm nằm tại vị trí trung tâm của cụm"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Noise Point (Điểm nhiễu):**\n  - Là điểm bị cô lập ở vùng mật độ quá thưa thớt: Vùng lân cận bán kính $Eps$ của nó không đủ $MinPts$ điểm, và nó cũng không nằm gần bất kỳ một Core Point nào.\n  - Thuật toán DBSCAN tự động lọc bỏ điểm này và đánh nhãn là **$-1$** (Noise).\n* Đây là tính năng vượt trội giúp DBSCAN không bị các điểm ngoại lai kéo lệch kết quả như $K$-Means.",
    "slideRef": "Slide Chương 5, Trang 53-54"
  },
  {
    "id": 169,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Khả năng vượt trội của DBSCAN so với $K$-Means thể hiện rõ nét nhất ở loại dữ liệu nào?",
    "options": [
      "Phân cụm các điểm hình cầu kích thước bằng nhau",
      "Phân cụm dữ liệu có hình dạng bất kỳ phức tạp (như 2 dải hình trăng khuyết lồng nhau, hình xoắn ốc) và tự động lọc bỏ điểm nhiễu",
      "Phân cụm dữ liệu có mật độ chênh lệch quá lớn giữa các vùng",
      "Dự đoán giá nhà đất liên tục"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nDBSCAN là \"vua\" trong các bài toán dữ liệu phi tuyến:\n* Cơ chế lan truyền liên thông mật độ (Density-connected) cho phép cụm uốn lượn mềm mại theo bất kỳ hình dạng nào: hình trăng khuyết, hình vòng nhẫn đồng tâm, hình chữ S.\n* Trong khi $K$-Means bị ép buộc bởi ranh giới siêu phẳng Voronoi $\\implies$ cắt vụn các hình uốn lượn và thất bại hoàn toàn.",
    "slideRef": "Slide Chương 5, Trang 56, 60"
  },
  {
    "id": 170,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Nếu ta chọn tham số $Eps$ trong DBSCAN QUÁ NHỎ, hiện tượng tiêu cực nào sẽ xảy ra?",
    "options": [
      "Tất cả các điểm bị dính liền vào nhau thành đúng một cụm khổng lồ duy nhất",
      "Hầu hết các điểm không gom đủ $MinPts$ láng giềng, cụm thực bị vỡ vụn và số lượng điểm bị gán nhãn là Nhiễu (Noise) tăng vọt",
      "Thời gian chạy của thuật toán tăng lên gấp 100 lần",
      "Thuật toán tự động thoái hóa thành $K$-Means"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Khi $Eps$ QUÁ NHỎ:** Bán kính quét quá hẹp, các điểm dữ liệu khó tìm đủ $MinPts$ láng giềng $\\implies$ Phần lớn dữ liệu bị coi là **Nhiễu (Noise)**, hoặc dữ liệu bị băm nát thành hàng chục cụm li ti siêu nhỏ.\n* **Ngược lại, khi $Eps$ QUÁ LỚN:** Vùng quét quá rộng, các cụm tách biệt ở xa cũng chạm lân cận nhau $\\implies$ Toàn bộ dữ liệu bị dính liền thành **đúng 1 cụm duy nhất**!",
    "slideRef": "Slide Chương 5, Trang 57-58"
  },
  {
    "id": 171,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hạn chế lớn nhất của thuật toán DBSCAN trong thực tế là gì?",
    "options": [
      "Hoàn toàn không thể xử lý được dữ liệu có điểm nhiễu",
      "Thất bại khi dữ liệu chứa các cụm có MẬT ĐỘ CHÊNH LỆCH QUÁ LỚN (một cụm rất đặc, một cụm rất thưa thớt)",
      "Bắt buộc người dùng phải biết trước chính xác số lượng cụm $K$",
      "Chỉ tìm được các cụm có dạng hình cầu đối xứng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Tử huyệt của DBSCAN:** Thuật toán chỉ sử dụng duy nhất **một cặp tham số toàn cục $(Eps, MinPts)$** cho toàn bộ không gian dữ liệu.\n* Khi dữ liệu có các cụm với mật độ quá chênh lệch:\n  - Nếu chọn $Eps$ nhỏ để tách cụm dày đặc $\\implies$ cụm thưa tự nhiên sẽ bị coi là **Nhiễu toàn bộ (Noise)**!\n  - Nếu chọn $Eps$ lớn để gom được cụm thưa $\\implies$ cụm dày đặc sẽ bị nuốt chửng, dính chùm vào các cụm xung quanh!\n* *(Để khắc phục nhược điểm này, người ta phát triển thuật toán OPTICS hoặc HDBSCAN)*.",
    "slideRef": "Slide Chương 5, Trang 61"
  },
  {
    "id": 172,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Phương pháp Deep Clustering (tiêu biểu như DEC - Deep Embedding Clustering) kết hợp những thành phần nào?",
    "options": [
      "Mạng nơ-ron sâu (như Autoencoder) để học không gian biểu diễn ẩn $z$, kết hợp tinh chỉnh đồng thời với hàm mục tiêu phân cụm",
      "Cây quyết định kết hợp với Hồi quy tuyến tính",
      "Phân cụm $K$-Means kết hợp với lọc thư rác thủ công",
      "DBSCAN chạy trực tiếp trên các pixel ảnh thô"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Với dữ liệu phức tạp nhiều chiều như ảnh ($256 \\times 256 \\times 3$) hay văn bản, khoảng cách Euclidean trên pixel thô không mang ý nghĩa ngữ nghĩa.\n* **DEC (Deep Embedding Clustering - Xie et al., ICML 2016):**\n  1. Dùng mạng nơ-ron sâu (Encoder) nén dữ liệu thô $x$ thành vector biểu diễn tiềm ẩn $z$ trong **Không gian ẩn (Latent Space)**.\n  2. Đo độ tương đồng gán mềm $q_{ij}$ bằng phân phối Student-t.\n  3. Huấn luyện mạng và cập nhật tâm cụm đồng thời bằng cách tối thiểu hóa độ phân kỳ Kullback-Leibler (KL Divergence): $L = \\text{KL}(P \\| Q)$.\n  4. Giúp các cụm trong không gian ẩn ngày càng tách biệt và cô đọng!",
    "slideRef": "Slide Chương 5, Trang 63-67"
  },
  {
    "id": 173,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Thuật toán Mini-Batch $K$-Means được thiết kế nhằm mục đích chính nào?",
    "options": [
      "Đảm bảo độ chính xác phân cụm luôn đạt 100%",
      "Tiết kiệm bộ nhớ RAM và tăng tốc độ tính toán gấp nhiều lần trên tập dữ liệu lớn bằng cách cập nhật tâm theo từng lô nhỏ (Mini-batch)",
      "Loại bỏ hoàn toàn việc phải chọn số lượng cụm $K$",
      "Tự động phân cụm các dữ liệu có hình xoắn ốc phi tuyến"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Khi tập dữ liệu có hàng triệu dòng ($n > 10^7$), việc quét toàn bộ dữ liệu ở mỗi vòng lặp của $K$-Means chuẩn tốn rất nhiều thời gian và làm tràn bộ nhớ.\n* **Mini-Batch $K$-Means (Sculley, 2010):**\n  - Mỗi bước chỉ lấy ngẫu nhiên một lô nhỏ mẫu dữ liệu (ví dụ $b = 100$ hoặc $500$ điểm).\n  - Cập nhật tọa độ tâm bằng trung bình trượt có trọng số.\n  - Tốc độ nhanh hơn từ $3$ đến $10$ lần, cho kết quả xấp xỉ rất sát với $K$-Means chuẩn.",
    "slideRef": "Slide Chương 5, Trang 30"
  },
  {
    "id": 174,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Khi nào ta nên ưu tiên lựa chọn GMM (Gaussian Mixture Model) thay vì $K$-Means?",
    "options": [
      "Khi cần một thuật toán phân cụm đơn giản nhất, chạy nhanh nhất có thể",
      "Khi các cụm có mức độ chồng lấn lên nhau và việc ước lượng xác suất mềm (Soft Clustering) từng điểm thuộc về cụm nào mang lại giá trị nghiệp vụ",
      "Khi dữ liệu có hình dạng 2 dải trăng khuyết lồng nhau",
      "Khi hoàn toàn chưa biết trước số lượng cụm $K$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* $K$-Means chỉ phù hợp khi các cụm tách biệt rõ ràng, có dạng hình cầu đối xứng.\n* **Nên chọn GMM khi:**\n  1. Cụm có **hình elip xoay các hướng khác nhau** (nhờ ma trận hiệp phương sai $\\Sigma$).\n  2. Các cụm **chồng lấn lên nhau** ở vùng biên: Nghiệp vụ đòi hỏi biết độ tin cậy/xác suất (ví dụ: Bệnh nhân có 70% thuộc nhóm bệnh A, 30% thuộc nhóm bệnh B).",
    "slideRef": "Slide Chương 5, Trang 44, 70"
  },
  {
    "id": 175,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Khi nào ta nên ưu tiên lựa chọn DBSCAN thay vì $K$-Means hay GMM?",
    "options": [
      "Khi dữ liệu tuân theo phân phối chuẩn đồng đều",
      "Khi dữ liệu chứa nhiều ngoại lai / điểm nhiễu, các cụm có hình dạng uốn lượn bất kỳ phi tuyến và chưa biết trước số lượng cụm $K$",
      "Khi cần chạy thuật toán trên không gian 10.000 chiều",
      "Khi cần xuất ra phân phối xác suất mềm"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **DBSCAN là lựa chọn số 1 khi:**\n  1. Dữ liệu có **hình dạng bất kỳ phi lồi** (hình trăng khuyết, hình nhẫn, hình chữ C).\n  2. Dữ liệu chứa **nhiều điểm nhiễu ngoại lai** (DBSCAN tự động cô lập thành nhãn -1).\n  3. **Chưa biết trước số lượng cụm $K$** (DBSCAN tự tìm số cụm).",
    "slideRef": "Slide Chương 5, Trang 60, 70"
  },
  {
    "id": 346,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Trong Phân cụm Phân cấp Tích tụ (Agglomerative Hierarchical Clustering), phương pháp Liên kết Ward (Ward's Linkage) hợp nhất hai cụm dựa trên tiêu chí nào?",
    "options": [
      "Khoảng cách ngắn nhất giữa hai điểm bất kỳ thuộc hai cụm",
      "Cực tiểu hóa mức gia tăng của tổng phương sai nội cụm (Within-cluster variance) sau khi hợp nhất",
      "Khoảng cách giữa hai điểm xa nhất của hai cụm",
      "Khoảng cách trung bình giữa tất cả các cặp điểm"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Phương pháp **Ward's Linkage** lấy cảm hứng tương tự như hàm mục tiêu $WCSS$ của $K$-Means:\n  - Tại mỗi bước, thuật toán tính toán xem nếu gộp cụm $A$ và cụm $B$ lại thì tổng bình phương sai số nội cụm sẽ tăng thêm bao nhiêu:\n    $$\\Delta \\text{ESS} = \\frac{n_A n_B}{n_A + n_B} \\|\\mu_A - \\mu_B\\|^2$$\n  - Thuật toán chọn cặp cụm làm **tối thiểu hóa mức tăng phương sai** này để gộp lại.\n* 👉 Giúp các cụm tạo ra có độ chặt chẽ cao và kích thước đồng đều.",
    "slideRef": "Slide Chương 5, Trang 34-36"
  },
  {
    "id": 347,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Nhược điểm lớn nhất của phương pháp Liên kết Đơn (Single Linkage) trong phân cụm phân cấp là gì?",
    "options": [
      "Hiện tượng các cụm luôn bị ép thành hình cầu đối xứng",
      "Hiện tượng 'Tạo chuỗi xích' (Chaining Effect), trong đó các điểm dữ liệu nhiễu nằm rải rác vô tình nối liền hai cụm tách biệt thành một cụm dài ngoằn ngoèo",
      "Không thể vẽ được biểu đồ hình cây Dendrogram",
      "Bắt buộc người dùng phải xác định trước số lượng cụm $K$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Single Linkage:** Khoảng cách giữa 2 cụm được tính bằng khoảng cách giữa **2 điểm gần nhau nhất**:\n  $$D(A, B) = \\min_{x \\in A, y \\in B} \\|x - y\\|$$\n* **Hiệu ứng chuỗi xích (Chaining Effect):** Chỉ cần một vài điểm dữ liệu nhiễu nằm lác đác làm \"cầu nối\" giữa 2 cụm lớn ở xa nhau, Single Linkage sẽ lần lượt gộp các điểm này lại, biến 2 cụm độc lập thành **một dải chuỗi xích dài ngoằng ngoèo dính liền vào nhau**!",
    "slideRef": "Slide Chương 5, Trang 36-37"
  },
  {
    "id": 348,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Biểu đồ hình cây (Dendrogram) trong phân cụm phân cấp cho phép người dùng xác định số lượng cụm mong muốn bằng cách nào?",
    "options": [
      "Đếm tổng số nút lá ở đáy biểu đồ",
      "Cắt một đường nằm ngang (ngưỡng khoảng cách / Distance threshold); số lượng nhánh thẳng đứng bị đường cắt đi qua chính là số lượng cụm thu được",
      "Tìm điểm cực tiểu của hàm mất mát",
      "Tính đạo hàm cấp 1 của cây phân cấp"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Biểu đồ **Dendrogram** thể hiện toàn bộ lịch sử gộp cụm từ dưới lên trên:\n  - Trục hoành: Các mẫu dữ liệu ban đầu (nút lá).\n  - Trục tung: Khoảng cách phân tách khi hai cụm được gộp vào nhau.\n* **Cách chọn số cụm:** Kẻ một đường thẳng nằm ngang cắt ngang qua Dendrogram:\n  - Số lượng nhánh thẳng đứng bị đường thẳng này cắt qua chính là **số lượng cụm** thu được tại ngưỡng khoảng cách đó.\n  - Vị trí cắt đẹp nhất là nơi có các nhánh thẳng đứng dài nhất (biên độ khoảng cách lớn, thể hiện các cụm tách biệt rõ).",
    "slideRef": "Slide Chương 5, Trang 37-38"
  },
  {
    "id": 349,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Hàm mục tiêu Tổng bình phương khoảng cách nội cụm ($WCSS$ hay Inertia) trong $K$-Means có tính chất toán học nào qua từng vòng lặp của thuật toán Lloyd?",
    "options": [
      "WCSS dao động ngẫu nhiên tăng giảm thất thường",
      "WCSS luôn GIẢM ĐƠN ĐIỆU (hoặc giữ nguyên) sau mỗi bước gán mẫu và cập nhật tâm, đảm bảo thuật toán luôn hội tụ sau một số hữu hạn bước lặp",
      "WCSS luôn tăng dần theo từng vòng lặp",
      "WCSS luôn đạt bằng đúng 0 khi thuật toán dừng lại"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nTính chất hội tụ toán học của thuật toán Lloyd:\n1. Ở bước gán mẫu: Mỗi điểm chọn tâm gần nhất $\\implies WCSS$ không thể tăng.\n2. Ở bước cập nhật tâm: Tọa độ tâm mới là trung bình cộng (điểm tối ưu bậc 2) $\\implies WCSS$ không thể tăng.\n* 👉 Do đó, **$WCSS$ luôn giảm đơn điệu hoặc giữ nguyên** qua từng bước lặp!\n* Vì số cách phân chia $n$ điểm vào $K$ cụm là hữu hạn ($K^n$), thuật toán Lloyd **chắc chắn sẽ hội tụ sau một số hữu hạn bước** (tuy nhiên chỉ đảm bảo cực tiểu địa phương).",
    "slideRef": "Slide Chương 5, Trang 19-21"
  },
  {
    "id": 350,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Độ phức tạp tính toán thời gian của thuật toán $K$-Means chuẩn cho mỗi lần chạy là bao nhiêu (với $n$ là số mẫu, $d$ là số chiều đặc trưng, $K$ là số cụm, $t$ là số vòng lặp)?",
    "options": [
      "$\\mathcal{O}(n^2 \\cdot d)$",
      "$\\mathcal{O}(t \\cdot K \\cdot n \\cdot d)$",
      "$\\mathcal{O}(2^K \\cdot n)$",
      "$\\mathcal{O}(d^3)$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nGiải phẫu độ phức tạp của $K$-Means:\n* Tại mỗi vòng lặp:\n  - Tính khoảng cách từ $n$ điểm đến $K$ tâm trong không gian $d$ chiều: tốn $\\mathcal{O}(K \\cdot n \\cdot d)$ phép tính.\n  - Cập nhật $K$ tâm bằng trung bình cộng $n$ điểm: tốn $\\mathcal{O}(n \\cdot d)$ phép tính.\n* Nếu thuật toán lặp lại $t$ vòng cho đến khi hội tụ:\n  $$\\mathbf{\\text{Độ phức tạp thời gian} = \\mathcal{O}(t \\cdot K \\cdot n \\cdot d)}$$\n* Nhận xét: Độ phức tạp **tuyến tính** với số mẫu $n$, giúp $K$-Means chạy siêu nhanh trên dữ liệu lớn.",
    "slideRef": "Slide Chương 5, Trang 16, 69"
  },
  {
    "id": 351,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Thuật toán $K$-Means++ giải quyết vấn đề nhạy cảm với khởi tạo ngẫu nhiên của $K$-Means bằng cơ chế chọn tâm nào?",
    "options": [
      "Chọn ngẫu nhiên đồng đều tất cả $K$ tâm cùng lúc từ tập dữ liệu",
      "Tâm đầu tiên chọn ngẫu nhiên; mỗi tâm tiếp theo được chọn từ các điểm còn lại với xác suất tỷ lệ thuận với bình phương khoảng cách $D(x)^2$ tới tâm gần nhất đã chọn",
      "Dùng kết quả của phân tích PCA làm tâm",
      "Chọn các điểm có giá trị lớn nhất theo từng trục tọa độ"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nQuy trình 4 bước của $K$-Means++:\n1. Chọn tâm đầu tiên $\\mu_1$ ngẫu nhiên đồng đều từ $X$.\n2. Với mỗi điểm $x$, tính khoảng cách $D(x)$ đến tâm cụm gần nó nhất.\n3. Chọn tâm tiếp theo với xác suất: $P(x) = \\frac{D(x)^2}{\\sum D(x')^2}$.\n4. Lặp lại bước 2 và 3 cho đến khi đủ $K$ tâm.\n* Điểm nằm càng xa các tâm cũ thì xác suất được chọn làm tâm mới càng lớn $\\implies$ Phân tán các tâm đều khắp dữ liệu.",
    "slideRef": "Slide Chương 5, Trang 26-28"
  },
  {
    "id": 352,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Biến thể Mini-Batch $K$-Means được thiết kế nhằm mục đích chính nào trong các bài toán Big Data?",
    "options": [
      "Tăng độ chính xác phân cụm lên 100%",
      "Tối ưu hóa thời gian tính toán và tiết kiệm bộ nhớ RAM bằng cách cập nhật vị trí tâm cụm dựa trên từng tập con mẫu nhỏ (mini-batch) thay vì toàn bộ tập dữ liệu khổng lồ",
      "Tự động tìm kiếm số lượng cụm $K$ tối ưu",
      "Cho phép tìm các cụm có hình dạng xoắn ốc phi tuyến"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Trong các bài toán dữ liệu lớn hàng chục gigabyte không thể nạp hết vào RAM:\n  - Mini-Batch $K$-Means lấy từng lô nhỏ ngẫu nhiên (ví dụ $B = 100$ hoặc $1000$ mẫu).\n  - Cập nhật vị trí tâm tức thì theo từng lô.\n  - Tiết kiệm bộ nhớ RAM tối đa và giảm thời gian huấn luyện từ hàng giờ xuống vài phút mà chất lượng cụm suy giảm không đáng kể.",
    "slideRef": "Slide Chương 5, Trang 30"
  },
  {
    "id": 353,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Chỉ số Davies-Bouldin Index (DBI) đánh giá chất lượng phân cụm dựa trên tỷ lệ giữa độ phân tán nội cụm và khoảng cách giữa các tâm cụm. Mô hình phân cụm tốt khi DBI có giá trị thế nào?",
    "options": [
      "DBI càng LỚN càng tốt",
      "DBI càng NHỎ (càng gần 0) càng tốt",
      "DBI phải bằng đúng 1.0",
      "DBI phải nhận giá trị âm"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Chỉ số Davies-Bouldin Index (DBI) đo lường độ tương tự trung bình giữa mỗi cụm và cụm giống nó nhất:\n  $$R_{ij} = \\frac{s_i + s_j}{d(\\mu_i, \\mu_j)}$$\n  *(với $s_i$ là độ phân tán nội cụm $i$, $d(\\mu_i, \\mu_j)$ là khoảng cách giữa 2 tâm cụm)*.\n* Ta muốn:\n  - Độ phân tán nội cụm $s_i, s_j$ càng nhỏ càng tốt (cụm cô đặc).\n  - Khoảng cách giữa các tâm $d(\\mu_i, \\mu_j)$ càng lớn càng tốt (tách biệt xa).\n* 👉 Do đó, tử số nhỏ và mẫu số lớn $\\implies$ **DBI CÀNG NHỎ (CÀNG GẦN 0) CÀNG TỐT!**",
    "slideRef": "Slide Chương 5, Trang 38"
  },
  {
    "id": 354,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Chỉ số Calinski-Harabasz Index (Variance Ratio Criterion) đánh giá chất lượng phân cụm như thế nào?",
    "options": [
      "Là tỷ lệ giữa độ phân tán giữa các cụm (Between-cluster dispersion) và độ phân tán nội cụm (Within-cluster dispersion); giá trị càng LỚN thì phân cụm càng tốt",
      "Là diện tích dưới đường cong ROC; càng gần 0.5 càng tốt",
      "Giá trị càng nhỏ càng tốt",
      "Chỉ số này chỉ đo lường thời gian chạy của thuật toán"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Chỉ số Calinski-Harabasz (CH Index):\n  $$\\text{CH} = \\frac{\\text{SSB} / (K - 1)}{\\text{SSW} / (n - K)}$$\n  * $\\text{SSB}$ (Between-group Sum of Squares): Phương sai giữa các tâm cụm với tâm tổng thể (càng lớn càng tốt).\n  * $\\text{SSW}$ (Within-group Sum of Squares): Phương sai nội bộ các điểm trong cụm (càng nhỏ càng tốt).\n* 👉 Tỷ số này **CÀNG LỚN THÌ KẾT QUẢ PHÂN CỤM CÀNG XUẤT SẮC**!",
    "slideRef": "Slide Chương 5, Trang 39"
  },
  {
    "id": 355,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Khi đã có nhãn thực tế đối chứng (Ground Truth), chỉ số nào sau đây là độ đo đánh giá ngoại tại (External Evaluation) chuẩn xác, có tính đến việc hiệu chỉnh ngẫu nhiên?",
    "options": [
      "Within-Cluster Sum of Squares (Inertia)",
      "Adjusted Rand Index (ARI)",
      "Elbow Score",
      "Silhouette Coefficient"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nPhân biệt 2 loại độ đo đánh giá phân cụm:\n1. **Đánh giá nội tại (Internal Evaluation - Không có nhãn thật):** Silhouette Score, WCSS (Inertia), Davies-Bouldin, Calinski-Harabasz.\n2. **Đánh giá ngoại tại (External Evaluation - Khi CÓ NHÃN THẬT để kiểm chứng):**\n   * **Rand Index (RI):** Tỷ lệ các cặp điểm được gán đúng cùng cụm hoặc khác cụm.\n   * **Adjusted Rand Index (ARI):** Hiệu chỉnh chỉ số Rand Index theo kỳ vọng ngẫu nhiên (chống việc gán bừa vẫn có điểm cao). Giá trị nằm trong $[-1, 1]$, càng gần 1 càng hoàn hảo.",
    "slideRef": "Slide Chương 5, Trang 41-43"
  },
  {
    "id": 356,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Trong Mô hình Hỗn hợp Gauss (GMM), mỗi cụm $k$ được mô tả bằng bộ ba tham số thống kê nào?",
    "options": [
      "Số lượng nút lá, Độ sâu tối đa, Gini Impurity",
      "Vector kỳ vọng trung bình $\\mu_k$, Ma trận hiệp phương sai $\\Sigma_k$, và Trọng số thành phần $\\pi_k$ (Mixing coefficient)",
      "Hệ số phạt L1, Hệ số phạt L2, Tốc độ học $\\eta$",
      "Bán kính Epsilon, Số điểm tối thiểu MinPts, Khoảng cách Chebyshev"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nMỗi thành phần Gaussian thứ $k$ trong GMM được định nghĩa bởi bộ 3 tham số:\n1. **$\\pi_k$ (Trọng số pha trộn):** Xác suất tiên nghiệm của cụm $k$ (thỏa mãn $\\sum \\pi_k = 1$ và $\\pi_k \\ge 0$).\n2. **$\\mu_k$ (Vector kỳ vọng trung tâm):** Xác định tọa độ tâm quả chuông Gaussian trong không gian $d$ chiều.\n3. **$\\Sigma_k$ (Ma trận hiệp phương sai):** Kích thước $d \\times d$, quyết định độ rộng, phương sai và hướng xoay nghiêng của cụm elip.",
    "slideRef": "Slide Chương 5, Trang 41"
  },
  {
    "id": 357,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Trong thuật toán EM (Expectation - Maximization) huấn luyện GMM, bước E (Expectation step) thực hiện công việc gì?",
    "options": [
      "Khởi tạo ngẫu nhiên toàn bộ dữ liệu",
      "Tính toán xác suất hậu nghiệm (Responsibility $\\gamma_{ik}$) rằng điểm dữ liệu $x_i$ được sinh ra bởi cụm $k$, dựa trên các tham số hiện tại",
      "Cập nhật lại vector trung bình $\\mu_k$ và ma trận hiệp phương sai $\\Sigma_k$",
      "Gán nhãn cứng 0 hoặc 1 cho từng điểm"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Bước E (Expectation Step - Kỳ vọng):**\n  - Giữ nguyên các tham số $(\\pi, \\mu, \\Sigma)$ hiện tại.\n  - Tính toán **Độ trách nhiệm (Responsibility $\\gamma_{ik}$)**:\n    $$\\gamma_{ik} = P(z_i = k | x_i) = \\frac{\\pi_k \\mathcal{N}(x_i | \\mu_k, \\Sigma_k)}{\\sum_{j=1}^K \\pi_j \\mathcal{N}(x_i | \\mu_j, \\Sigma_j)}$$\n  - $\\gamma_{ik}$ chính là xác suất mềm thể hiện mức độ đóng góp của cụm $k$ trong việc sinh ra điểm $x_i$.",
    "slideRef": "Slide Chương 5, Trang 45-47"
  },
  {
    "id": 358,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Bước M (Maximization step) trong thuật toán EM thực hiện công việc gì?",
    "options": [
      "Tính toán ma trận nghịch đảo của toàn bộ tập dữ liệu",
      "Cập nhật lại các tham số $(\\mu_k, \\Sigma_k, \\pi_k)$ bằng cách tối đa hóa hàm hợp lý kỳ vọng dựa trên các trọng số trách nhiệm $\\gamma_{ik}$ vừa tính ở bước E",
      "Loại bỏ các điểm ngoại lai khỏi tập dữ liệu",
      "Vẽ biểu đồ hình cây Dendrogram"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Bước M (Maximization Step - Tối đa hóa):**\n  - Giữ cố định các trách nhiệm mềm $\\gamma_{ik}$ từ bước E.\n  - Cập nhật lại các tham số thống kê bằng **trung bình có trọng số**:\n    * Tổng trách nhiệm: $N_k = \\sum_{i=1}^n \\gamma_{ik}$.\n    * Trọng số mới: $\\pi_k = \\frac{N_k}{n}$.\n    * Tâm mới: $\\mu_k = \\frac{1}{N_k} \\sum_{i=1}^n \\gamma_{ik} x_i$.\n    * Hiệp phương sai mới: $\\Sigma_k = \\frac{1}{N_k} \\sum_{i=1}^n \\gamma_{ik} (x_i - \\mu_k)(x_i - \\mu_k)^T$.",
    "slideRef": "Slide Chương 5, Trang 46-47"
  },
  {
    "id": 359,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Nếu cấu hình ma trận hiệp phương sai trong GMM là 'diagonal' (đường chéo), các cụm Gauss trong không gian sẽ có dạng hình học nào?",
    "options": [
      "Hình cầu tròn hoàn hảo đối xứng",
      "Hình elip có các trục luôn song song với các trục tọa độ (không được xoay nghiêng)",
      "Hình elip tổng quát có thể xoay nghiêng tùy ý theo bất kỳ hướng nào",
      "Một đường thẳng dẹt 1 chiều"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nBa dạng hình học của ma trận hiệp phương sai $\\Sigma$:\n1. **'spherical':** $\\Sigma = \\sigma^2 I \\implies$ Cụm là **hình tròn / hình cầu** (các chiều có phương sai bằng nhau và độc lập).\n2. **'diagonal':** $\\Sigma = \\text{diag}(\\sigma_1^2, \\dots, \\sigma_d^2) \\implies$ Cụm là **hình elip nhưng các trục bắt buộc phải song song với các trục tọa độ** (các biến độc lập với nhau, không có tương quan chéo).\n3. **'full':** $\\Sigma$ tổng quát $\\implies$ Cụm là **hình elip xoay tự do theo bất kỳ góc chéo nào** trong không gian!",
    "slideRef": "Slide Chương 5, Trang 48"
  },
  {
    "id": 360,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Trong thuật toán DBSCAN, một điểm $p$ được định nghĩa là Điểm lõi (Core point) khi thỏa mãn điều kiện nào?",
    "options": [
      "Nó nằm cách tâm cụm một khoảng nhỏ hơn 1.0",
      "Trong vùng lân cận bán kính $Eps$ ($\\varepsilon$) của điểm $p$ có chứa ít nhất $MinPts$ điểm (TÍNH CẢ CHÍNH ĐIỂM $p$)",
      "Nó có ít hơn $MinPts$ điểm trong bán kính $Eps$ nhưng nằm cạnh một điểm khác",
      "Nó có giá trị ngoại lai lớn nhất trong tập dữ liệu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Core Point (Điểm lõi):** Điểm hạt nhân của cụm mật độ cao.\n* Điều kiện: Số lượng điểm trong hình cầu bán kính $Eps$ quanh điểm $p$ phải thỏa mãn:\n  $$|N_{Eps}(p)| \\ge MinPts$$\n* ⚠️ **Lưu ý phòng thi:** Tập $N_{Eps}(p)$ **LUÔN BAO GỒM CHÍNH ĐIỂM $p$**! Chỉ cần có thêm $(MinPts - 1)$ điểm láng giềng khác lọt vào vùng bán kính $Eps$ là $p$ trở thành Điểm lõi.",
    "slideRef": "Slide Chương 5, Trang 53"
  },
  {
    "id": 361,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Trong DBSCAN, một điểm $q$ được gọi là Điểm biên (Border point) khi nào?",
    "options": [
      "Điểm $q$ có số điểm lân cận trong bán kính $Eps$ nhỏ hơn $MinPts$, nhưng điểm $q$ lại nằm trong vùng lân cận bán kính $Eps$ của một Điểm lõi",
      "Điểm $q$ có số lân cận lớn hơn 2 lần $MinPts$",
      "Điểm $q$ không nằm trong lân cận của bất kỳ điểm nào",
      "Điểm $q$ luôn bị thuật toán gán nhãn là nhiễu (-1)"
    ],
    "answer": 0,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Border Point (Điểm biên):**\n  - Điều kiện 1: $|N_{Eps}(q)| < MinPts$ (bản thân nó thưa thớt, không đủ tiêu chuẩn làm Core).\n  - Điều kiện 2: Tồn tại ít nhất một Điểm lõi $p$ sao cho $q \\in N_{Eps}(p)$ (nó chạm vào vùng phủ của một Core).\n* Điểm biên là ranh giới ngoài cùng của cụm mật độ. Nó thuộc về cụm nhưng không có năng lực tự lan truyền mở rộng cụm sang các điểm khác.",
    "slideRef": "Slide Chương 5, Trang 53, 55"
  },
  {
    "id": 362,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Điểm nhiễu (Noise point / Outlier) trong thuật toán DBSCAN có đặc điểm nhận dạng nào?",
    "options": [
      "Điểm có khoảng cách Manhattan lớn nhất",
      "Điểm không phải là Điểm lõi và cũng không thuộc vùng lân cận $Eps$ của bất kỳ Điểm lõi nào (thường được gán nhãn -1)",
      "Điểm có hệ số Silhouette lớn hơn 0.8",
      "Điểm nằm chính giữa hai cụm lân cận"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* **Noise Point (Điểm nhiễu):**\n  - Là điểm bị cô lập ở vùng mật độ rất thưa thớt.\n  - Vùng lân cận bán kính $Eps$ của nó không đủ $MinPts$ điểm, và nó cũng không chạm tới bất kỳ Điểm lõi nào.\n  - DBSCAN tự động phát hiện và gán nhãn cho các điểm này là **$-1$**.\n* Đây là tính năng lọc nhiễu tự nhiên rất mạnh mà $K$-Means hoàn toàn không có.",
    "slideRef": "Slide Chương 5, Trang 53-54"
  },
  {
    "id": 363,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Quan hệ 'Có thể tiếp cận theo mật độ' (Density-reachable) trong DBSCAN có tính chất nào?",
    "options": [
      "Có tính đối xứng (nếu $p$ tiếp cận được $q$ thì $q$ luôn tiếp cận được $p$)",
      "KHÔNG CÓ TÍNH ĐỐI XỨNG nói chung: Một điểm biên có thể tiếp cận được từ điểm lõi, nhưng từ điểm biên KHÔNG THỂ tiếp cận được điểm lõi vì điểm biên không có khả năng phát tán tiếp",
      "Luôn bắc cầu giữa mọi cặp điểm trong toàn bộ dataset",
      "Yêu cầu khoảng cách Euclidean phải bằng 0"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n⚠️ **CÂU HỎI LÝ THUYẾT ĐẲNG CẤP HAY RA THI:**\n* **Khả đạt mật độ (Density-reachable):** Điểm $q$ khả đạt mật độ từ điểm $p$ nếu có một chuỗi $p_1, \\dots, p_k$ ($p_1 = p, p_k = q$) sao cho mỗi điểm tiếp theo khả đạt trực tiếp từ điểm lõi trước đó.\n* **Tính chất không đối xứng:**\n  - Nếu $p$ là Core và $q$ là Border: $q$ khả đạt từ $p$.\n  - Nhưng chiều ngược lại: Vì $q$ là Border (không phải Core), nó không thể kích hoạt tiếp chuỗi lan truyền $\\implies p$ **KHÔNG THỂ khả đạt mật độ từ $q$**!\n* Để có tính đối xứng, người ta định nghĩa quan hệ **Liên thông mật độ (Density-connected)**.",
    "slideRef": "Slide Chương 5, Trang 54-55"
  },
  {
    "id": 364,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Trường hợp dữ liệu nào sau đây là 'khắc tinh' khiến thuật toán DBSCAN hoạt động kém hiệu quả nhất?",
    "options": [
      "Dữ liệu có chứa các cụm hình xoắn ốc hoặc vành khăn lồng nhau",
      "Dữ liệu chứa các cụm có MẬT ĐỘ RẤT KHÁC NHAU (một cụm cực kỳ đặc, một cụm rất thưa thớt)",
      "Dữ liệu có nhiều điểm nhiễu ngoại lai",
      "Dữ liệu 2 chiều quan sát trực quan"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\n* Vì DBSCAN chỉ dùng **duy nhất một cặp siêu tham số $(Eps, MinPts)$ cố định** cho toàn bộ dataset:\n  - Nếu trong dữ liệu có 1 cụm siêu đặc (ví dụ $1000$ điểm trong vòng tròn bán kính 1) và 1 cụm thưa tự nhiên (ví dụ $50$ điểm trong vòng tròn bán kính 5):\n  - Không thể tìm được một giá trị $Eps$ nào làm hài lòng cả 2 cụm: Hoặc cụm thưa bị gán nhãn là Nhiễu hết, hoặc cụm đặc bị dính liền với các vùng xung quanh!",
    "slideRef": "Slide Chương 5, Trang 61"
  },
  {
    "id": 365,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Ưu điểm vượt trội nhất của DBSCAN so với $K$-Means là gì?",
    "options": [
      "DBSCAN luôn chạy nhanh hơn $K$-Means trên dữ liệu hàng triệu chiều",
      "DBSCAN không yêu cầu người dùng phải xác định trước số cụm $K$, có khả năng tìm các cụm có hình dạng hình học tùy ý phi tuyến, và tự động phát hiện loại bỏ các điểm nhiễu",
      "DBSCAN luôn tạo ra các cụm hình cầu tròn trịa",
      "DBSCAN có nghiệm đóng giải tích duy nhất"
    ],
    "answer": 1,
    "explanation": "### 🎯 Bản chất trực quan & Phân tích chi tiết:\nBa ưu điểm vô địch của DBSCAN khi so sánh với $K$-Means:\n1. **Không cần biết trước số cụm $K$:** Tự động phát hiện số lượng cụm tự nhiên.\n2. **Tìm được cụm hình dạng bất kỳ:** Hình trăng khuyết, xoắn ốc, chữ C mà $K$-Means hoàn toàn bất lực.\n3. **Tự động lọc điểm nhiễu ngoại lai:** Gán nhãn $-1$ cho các điểm cô lập, không để ngoại lai làm biến dạng cụm.",
    "slideRef": "Slide Chương 5, Trang 60, 69-70"
  }
];
