/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 5: BÀI TOÁN PHÂN CỤM
   - Số lượng: 50 câu
   - Nội dung: K-Means, K-Means++, WCSS, Elbow method, Silhouette score, Gaussian Mixture Models (GMM), DBSCAN (Core, Border, Noise)
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
      "Học bán giám sát"
    ],
    "answer": 1,
    "explanation": "Phân cụm là phương pháp học không giám sát điển hình, phân nhóm dữ liệu chỉ dựa trên đặc trưng mà không hề có nhãn mục tiêu.",
    "slideRef": "Slide Chương 5, Trang 4"
  },
  {
    "id": 147,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Đầu vào của thuật toán K-Means gồm những gì?",
    "options": [
      "Tập dữ liệu và nhãn lớp thực tế",
      "Tập n điểm dữ liệu và số lượng cụm K được ấn định trước",
      "Chỉ cần tập dữ liệu, không cần biết số cụm",
      "Bán kính Eps và số điểm tối thiểu MinPts"
    ],
    "answer": 1,
    "explanation": "K-Means bắt buộc người dùng phải cung cấp dữ liệu số và số lượng cụm K cần phân chia ngay từ đầu.",
    "slideRef": "Slide Chương 5, Trang 10"
  },
  {
    "id": 148,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hàm mục tiêu WCSS (Within-Cluster Sum of Squares) mà K-Means cần tối thiểu hóa là gì?",
    "options": [
      "Tổng khoảng cách giữa các tâm cụm",
      "Tổng bình phương khoảng cách từ mỗi điểm dữ liệu đến tâm cụm tương ứng của nó: Σ Σ ||x - μ_k||^2",
      "Số lượng điểm nhiễu trong dữ liệu",
      "Hệ số Silhouette trung bình"
    ],
    "answer": 1,
    "explanation": "K-Means tối thiểu hóa tổng bình phương khoảng cách từ các điểm tới tâm cụm của chúng: J = Σ_k Σ_{x ∈ C_k} ||x - μ_k||^2.",
    "slideRef": "Slide Chương 5, Trang 12"
  },
  {
    "id": 149,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hai bước luân phiên trong chu trình lặp của thuật toán K-Means (Lloyd's Algorithm) là gì?",
    "options": [
      "Bước khởi tạo và Bước chuẩn hóa",
      "Bước gán cụm (Assignment) và Bước cập nhật tâm cụm (Update)",
      "Bước chọn đặc trưng và Bước giảm chiều",
      "Bước tính đạo hàm và Bước cập nhật learning rate"
    ],
    "answer": 1,
    "explanation": "K-Means luân phiên giữa: 1. Gán mỗi điểm vào tâm gần nó nhất; 2. Tính lại tâm cụm bằng trung bình cộng tọa độ các điểm vừa gán.",
    "slideRef": "Slide Chương 5, Trang 13-15"
  },
  {
    "id": 150,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Tại sao việc chuẩn hóa thang đo dữ liệu (Scaling) là BẮT BUỘC trước khi áp dụng K-Means?",
    "options": [
      "Vì K-Means chỉ nhận dữ liệu trong khoảng [0, 1]",
      "Vì K-Means sử dụng khoảng cách Euclidean; đặc trưng có thang đo lớn sẽ chi phối hoàn toàn khoảng cách và làm sai lệch việc gán cụm",
      "Vì K-Means không thể chạy trên biến số thực",
      "Vì chuẩn hóa giúp giảm số lượng cụm K"
    ],
    "answer": 1,
    "explanation": "Khoảng cách Euclidean rất nhạy cảm với độ lớn thang đo; biến có giá trị hàng triệu sẽ lấn át hoàn toàn biến có giá trị hàng chục.",
    "slideRef": "Slide Chương 5, Trang 11"
  },
  {
    "id": 151,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trong không gian 2 chiều, ranh giới phân chia giữa các cụm tạo bởi thuật toán K-Means có dạng gì?",
    "options": [
      "Các đường cong elip",
      "Các đường phân hoạch Voronoi (đường trung trực thẳng giữa các cặp tâm cụm)",
      "Các đường tròn bao quanh từng điểm",
      "Hình đa giác bất kỳ tự do"
    ],
    "answer": 1,
    "explanation": "Mỗi điểm được gán về tâm gần nhất tạo ra các vùng Voronoi với ranh giới phân chia là các đoạn thẳng/siêu phẳng trung trực tuyến tính.",
    "slideRef": "Slide Chương 5, Trang 18, 22"
  },
  {
    "id": 152,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trường hợp dữ liệu nào sau đây khiến thuật toán K-Means thất bại trong việc phân cụm đúng?",
    "options": [
      "Các cụm có dạng hình cầu lồi tách biệt rõ ràng",
      "Các cụm có hình dạng cong phức tạp (như 2 dải hình trăng khuyết lồng nhau, hoặc vòng tròn đồng tâm)",
      "Các cụm có kích thước và mật độ tương đồng",
      "Dữ liệu 2 chiều đã chuẩn hóa"
    ],
    "answer": 1,
    "explanation": "K-Means tạo ranh giới phẳng Voronoi nên chỉ gom được các cụm hình cầu/lồi (convex), bất lực với các cụm hình cong phi lồi.",
    "slideRef": "Slide Chương 5, Trang 24"
  },
  {
    "id": 153,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Mục đích chính của thuật toán K-Means++ so với K-Means truyền thống là gì?",
    "options": [
      "Thay đổi hàm khoảng cách từ Euclidean sang Manhattan",
      "Cải thiện khâu khởi tạo tâm ban đầu, giúp các tâm phân tán đều khắp dữ liệu và giảm nguy cơ kẹt ở cực tiểu địa phương xấu",
      "Tự động tìm ra số cụm K tối ưu",
      "Loại bỏ hoàn toàn các điểm ngoại lai"
    ],
    "answer": 1,
    "explanation": "K-Means++ khởi tạo các tâm ban đầu cách xa nhau dựa trên xác suất tỷ lệ với bình phương khoảng cách, giúp hội tụ nhanh và nghiệm ổn định.",
    "slideRef": "Slide Chương 5, Trang 25, 29"
  },
  {
    "id": 154,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trong thuật toán K-Means++, xác suất một điểm x được chọn làm tâm tiếp theo tỷ lệ thuận với đại lượng nào?",
    "options": [
      "Nghịch đảo khoảng cách đến tâm gần nhất",
      "Bình phương khoảng cách D(x)^2 từ điểm đó đến tâm gần nhất đã chọn",
      "Khoảng cách đến gốc tọa độ",
      "Số lượng láng giềng xung quanh x"
    ],
    "answer": 1,
    "explanation": "P(x) = D(x)^2 / Σ D(x')^2. Điểm nào càng nằm xa các tâm đã chọn thì xác suất được chọn làm tâm mới càng cao.",
    "slideRef": "Slide Chương 5, Trang 27-28"
  },
  {
    "id": 155,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Phương pháp Elbow (Khuỷu tay) dùng để xác định đại lượng nào trong bài toán phân cụm?",
    "options": [
      "Xác định bán kính Eps",
      "Lựa chọn số lượng cụm K hợp lý dựa trên điểm gập khúc của đồ thị WCSS",
      "Xác định điểm ngoại lai",
      "Chọn kích thước lô trong Mini-batch"
    ],
    "answer": 1,
    "explanation": "Đồ thị WCSS theo K có dạng cánh tay gập; điểm gập khúc (elbow) là nơi sau đó WCSS giảm chậm lại, thường là số cụm K tốt nhất.",
    "slideRef": "Slide Chương 5, Trang 35"
  },
  {
    "id": 156,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hệ số Silhouette s(i) của một điểm dữ liệu i có miền giá trị nằm trong khoảng nào?",
    "options": [
      "[0, 1]",
      "[-1, 1]",
      "[0, +∞)",
      "(-∞, +∞)"
    ],
    "answer": 1,
    "explanation": "Hệ số Silhouette luôn nằm trong đoạn chuẩn [-1, 1], đo lường mức độ phù hợp của điểm dữ liệu đối với cụm của nó.",
    "slideRef": "Slide Chương 5, Trang 32-33"
  },
  {
    "id": 157,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trong công thức Silhouette s(i) = (b(i) - a(i)) / max(a(i), b(i)), đại lượng a(i) biểu thị điều gì?",
    "options": [
      "Khoảng cách từ điểm i đến gốc tọa độ",
      "Khoảng cách trung bình từ điểm i đến tất cả các điểm khác TRONG CÙNG CỤM của nó (Độ chặt nội cụm)",
      "Khoảng cách trung bình từ điểm i đến cụm lân cận gần nhất",
      "Khoảng cách giữa hai tâm cụm"
    ],
    "answer": 1,
    "explanation": "a(i) đo độ chặt chẽ nội cụm: khoảng cách trung bình từ i đến các điểm cùng cụm (a(i) càng nhỏ thì cụm càng đậm đặc).",
    "slideRef": "Slide Chương 5, Trang 32"
  },
  {
    "id": 158,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Một điểm dữ liệu i có hệ số Silhouette s(i) nhận giá trị ÂM (s(i) < 0) mang ý nghĩa gì?",
    "options": [
      "Điểm i nằm rất gần tâm cụm của nó",
      "Điểm i nằm sát ranh giới giữa 2 cụm",
      "Điểm i đã bị gán nhầm cụm (khoảng cách đến cụm láng giềng nhỏ hơn khoảng cách đến cụm của chính nó)",
      "Điểm i là một Core point"
    ],
    "answer": 2,
    "explanation": "Khi s(i) < 0 tức là b(i) < a(i), nghĩa là điểm đó gần cụm bên cạnh hơn cụm hiện tại, dấu hiệu rõ ràng của việc bị gán nhầm cụm.",
    "slideRef": "Slide Chương 5, Trang 33"
  },
  {
    "id": 159,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Giá trị Silhouette trung bình của toàn bộ dữ liệu tiến rất gần về +1 biểu thị điều gì?",
    "options": [
      "Kết quả phân cụm rất tồi tệ, các cụm dính vào nhau",
      "Kết quả phân cụm xuất sắc: các điểm nằm rất chặt chẽ trong cụm của mình và các cụm phân tách rất xa nhau",
      "Dữ liệu có quá nhiều điểm nhiễu",
      "Mô hình đang bị Underfitting"
    ],
    "answer": 1,
    "explanation": "Silhouette gần +1 chứng tỏ các cụm đặc quánh nội bộ và tách biệt rõ rệt với nhau ngoài biên, chất lượng phân cụm tối ưu.",
    "slideRef": "Slide Chương 5, Trang 33"
  },
  {
    "id": 160,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Mô hình Gaussian Mixture Model (GMM) tiếp cận bài toán phân cụm theo góc nhìn nào?",
    "options": [
      "Góc nhìn tâm cụm hình học cứng",
      "Góc nhìn xác suất: dữ liệu là sự pha trộn của K phân phối chuẩn nhiều chiều và thực hiện phân cụm mềm (Soft Clustering)",
      "Góc nhìn mật độ lân cận bán kính Eps",
      "Góc nhìn đồ thị phân nhánh"
    ],
    "answer": 1,
    "explanation": "GMM mô hình hóa cụm bằng các phân phối Gaussian; mỗi điểm thuộc về các cụm theo một phân phối xác suất mềm thay vì gán nhãn cứng.",
    "slideRef": "Slide Chương 5, Trang 39, 44"
  },
  {
    "id": 161,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Ưu thế hình học của GMM so với K-Means là gì?",
    "options": [
      "GMM chỉ tạo ra các cụm hình cầu",
      "Nhờ ma trận hiệp phương sai Σ, các cụm trong GMM có thể mang hình elip xoay các hướng khác nhau với kích thước và độ lệch bất kỳ",
      "GMM luôn chạy nhanh hơn K-Means",
      "GMM không cần dữ liệu dạng số"
    ],
    "answer": 1,
    "explanation": "Ma trận hiệp phương sai cho phép GMM mô tả các cụm hình elip đa chiều có xu hướng tương quan và độ dẹt khác nhau.",
    "slideRef": "Slide Chương 5, Trang 41, 48"
  },
  {
    "id": 162,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Thuật toán EM (Expectation - Maximization) trong GMM gồm hai bước nào?",
    "options": [
      "E-step: tính trách nhiệm/xác suất mềm γ_ij; M-step: cập nhật lại các tham số (π, μ, Σ) từ các trọng số đó",
      "E-step: cập nhật tâm; M-step: gán nhãn cứng",
      "E-step: chuẩn hóa Z-score; M-step: tính PCA",
      "E-step: tìm trị riêng; M-step: chiếu không gian"
    ],
    "answer": 0,
    "explanation": "E-step ước lượng xác suất mềm mỗi điểm thuộc từng thành phần; M-step cập nhật tỷ trọng π, tâm μ và ma trận hiệp phương sai Σ.",
    "slideRef": "Slide Chương 5, Trang 46-47"
  },
  {
    "id": 163,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hai tiêu chuẩn thông tin nào thường được dùng để chọn số lượng thành phần K tối ưu trong mô hình GMM?",
    "options": [
      "Elbow và Silhouette",
      "AIC (Akaike Information Criterion) và BIC (Bayesian Information Criterion)",
      "Precision và Recall",
      "MAE và MSE"
    ],
    "answer": 1,
    "explanation": "Người ta so sánh các mô hình GMM với số thành phần K khác nhau bằng tiêu chuẩn AIC và BIC (chọn mô hình có AIC/BIC thấp hơn).",
    "slideRef": "Slide Chương 5, Trang 49"
  },
  {
    "id": 164,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Đặc tính NỔI BẬT NHẤT của thuật toán phân cụm DBSCAN so với K-Means là gì?",
    "options": [
      "DBSCAN chạy nhanh hơn K-Means trên mọi bài toán",
      "DBSCAN hoàn toàn KHÔNG CẦN người dùng ấn định trước số lượng cụm K",
      "DBSCAN luôn tìm ra các cụm hình cầu lồi",
      "DBSCAN chỉ áp dụng được cho dữ liệu 1 chiều"
    ],
    "answer": 1,
    "explanation": "DBSCAN phân cụm dựa trên mật độ thực tế của không gian, tự động xác định số lượng cụm K mà không cần người dùng nhập trước.",
    "slideRef": "Slide Chương 5, Trang 51, 60"
  },
  {
    "id": 165,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hai siêu tham số cốt lõi của thuật toán DBSCAN là gì?",
    "options": [
      "Số cụm K và số vòng lặp tối đa",
      "Bán kính lân cận Eps (ε) và Số điểm tối thiểu trong lân cận MinPts",
      "Tốc độ học η và hệ số co shrinkage",
      "Số thành phần K và ma trận hiệp phương sai Σ"
    ],
    "answer": 1,
    "explanation": "DBSCAN được định nghĩa bởi 2 siêu tham số: Bán kính lân cận Eps và số lượng điểm tối thiểu MinPts trong bán kính đó.",
    "slideRef": "Slide Chương 5, Trang 52"
  },
  {
    "id": 166,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trong DBSCAN, một điểm được định nghĩa là Điểm lõi (Core Point) khi thỏa mãn điều kiện nào?",
    "options": [
      "Vùng lân cận bán kính Eps của nó chứa ít nhất MinPts điểm (tính cả chính nó)",
      "Nó có khoảng cách gần nhất đến gốc tọa độ",
      "Nó có ít hơn MinPts điểm trong bán kính Eps nhưng gần một điểm khác",
      "Nó nằm cô lập không có láng giềng nào"
    ],
    "answer": 0,
    "explanation": "Core Point là điểm có mật độ dày đặc: số lượng điểm nằm trong hình cầu bán kính Eps quanh nó đạt tối thiểu MinPts (bao gồm cả nó).",
    "slideRef": "Slide Chương 5, Trang 53"
  },
  {
    "id": 167,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Trong DBSCAN, Điểm biên (Border Point) có đặc điểm gì?",
    "options": [
      "Có số láng giềng trong bán kính Eps lớn hơn MinPts",
      "Có ít hơn MinPts điểm trong bán kính Eps của mình, nhưng nằm trong vùng lân cận Eps của một Core Point",
      "Bị cô lập hoàn toàn và bị gán nhãn là ngoại lai",
      "Tự mình có thể khởi tạo một cụm mới"
    ],
    "answer": 1,
    "explanation": "Border Point không đủ dày để làm Core Point, nhưng nằm sát cạnh một Core Point nên được kết nạp vào rìa của cụm đó.",
    "slideRef": "Slide Chương 5, Trang 53, 55"
  },
  {
    "id": 168,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Điểm nhiễu (Noise Point) trong DBSCAN được định nghĩa là gì?",
    "options": [
      "Điểm có giá trị âm",
      "Điểm không phải Core Point cũng không phải Border Point (bị cô lập ở vùng mật độ thấp)",
      "Điểm có hệ số Silhouette bằng 1",
      "Điểm nằm tại tâm của cụm"
    ],
    "answer": 1,
    "explanation": "Những điểm nằm ở vùng thưa thớt, không thỏa mãn điều kiện Core và không chạm vùng Eps của Core nào sẽ bị DBSCAN gắn nhãn là nhiễu (Noise / Outlier).",
    "slideRef": "Slide Chương 5, Trang 53, 60"
  },
  {
    "id": 169,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Khả năng vượt trội của DBSCAN so với K-Means thể hiện rõ nhất ở bài toán nào?",
    "options": [
      "Phân cụm các điểm hình cầu kích thước bằng nhau",
      "Phân cụm dữ liệu có hình dạng bất kỳ phức tạp (như 2 dải hình trăng khuyết) và tự động lọc bỏ điểm nhiễu",
      "Phân cụm dữ liệu có mật độ chênh lệch quá lớn giữa các vùng",
      "Dự đoán giá nhà đất"
    ],
    "answer": 1,
    "explanation": "DBSCAN xuất sắc trong việc lần theo các dải mật độ liên thông hình dạng bất kỳ và tự động tách biệt các điểm nhiễu ra ngoài.",
    "slideRef": "Slide Chương 5, Trang 56, 60"
  },
  {
    "id": 170,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Nếu ta chọn tham số Eps trong DBSCAN quá nhỏ (quá khắt khe), hiện tượng gì sẽ xảy ra?",
    "options": [
      "Tất cả các điểm bị gom vào đúng một cụm duy nhất",
      "Nhiều điểm không đủ láng giềng, cụm thực bị vỡ vụn và số lượng điểm bị coi là Noise tăng vọt",
      "Thời gian chạy tăng lên gấp 10 lần",
      "DBSCAN chuyển thành thuật toán K-Means"
    ],
    "answer": 1,
    "explanation": "Eps quá nhỏ khiến bán kính tìm kiếm quá hẹp, rất ít điểm đạt chuẩn Core Point, dẫn đến cụm bị vỡ thành nhiều mảnh nhỏ và nhiều điểm bị coi là nhiễu.",
    "slideRef": "Slide Chương 5, Trang 57"
  },
  {
    "id": 171,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Hạn chế lớn nhất của thuật toán DBSCAN là gì?",
    "options": [
      "Không thể xử lý được điểm nhiễu",
      "Khó chọn được một cặp tham số Eps và MinPts chung khi các cụm trong dữ liệu có mật độ chênh lệch nhau quá lớn",
      "Bắt buộc phải biết trước số lượng cụm K",
      "Chỉ tìm được cụm hình cầu"
    ],
    "answer": 1,
    "explanation": "Vì DBSCAN dùng ngưỡng mật độ toàn cục cố định, nếu tập dữ liệu có cụm rất đặc và cụm rất thưa thì không thể tìm được một cặp (Eps, MinPts) phù hợp cho cả hai.",
    "slideRef": "Slide Chương 5, Trang 61"
  },
  {
    "id": 172,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Phương pháp Deep Clustering (như DEC - Deep Embedding Clustering) kết hợp những thành phần nào?",
    "options": [
      "Mạng nơ-ron sâu (như Autoencoder) để học không gian biểu diễn ẩn z, sau đó thực hiện phân cụm trên không gian này",
      "Cây quyết định kết hợp với hồi quy tuyến tính",
      "Phân cụm K-Means kết hợp với lọc thư rác",
      "DBSCAN chạy trên ảnh thô không qua xử lý"
    ],
    "answer": 0,
    "explanation": "Deep Clustering dùng mạng nơ-ron để ánh xạ dữ liệu phức tạp nhiều chiều vào không gian ẩn (latent space) có ngữ nghĩa tốt hơn trước khi phân cụm.",
    "slideRef": "Slide Chương 5, Trang 63, 65"
  },
  {
    "id": 173,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Thuật toán Mini-Batch K-Means được thiết kế nhằm mục đích gì?",
    "options": [
      "Tăng độ chính xác phân cụm lên 100%",
      "Tiết kiệm bộ nhớ RAM và thời gian tính toán trên tập dữ liệu cực lớn bằng cách cập nhật tâm theo từng lô nhỏ",
      "Loại bỏ yêu cầu số cụm K",
      "Phân cụm dữ liệu phi lồi"
    ],
    "answer": 1,
    "explanation": "Mini-Batch K-Means cập nhật tâm cụm xấp xỉ theo từng batch nhỏ ngẫu nhiên, giảm thiểu đáng kể chi phí bộ nhớ và thời gian đọc dữ liệu.",
    "slideRef": "Slide Chương 5, Trang 30"
  },
  {
    "id": 174,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Khi nào ta nên ưu tiên chọn GMM thay vì K-Means?",
    "options": [
      "Khi cần một thuật toán phân cụm đơn giản, nhanh nhất có thể",
      "Khi các cụm có mức độ chồng lấn lên nhau và việc ước lượng xác suất mềm thành viên mang lại giá trị nghiệp vụ",
      "Khi dữ liệu có hình 2 dải trăng khuyết",
      "Khi không biết số lượng cụm K"
    ],
    "answer": 1,
    "explanation": "GMM phù hợp khi ranh giới giữa các cụm không tuyệt đối, cụm có dạng elip và ta cần biết độ chắc chắn/xác suất thuộc về từng cụm.",
    "slideRef": "Slide Chương 5, Trang 70"
  },
  {
    "id": 175,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán phân cụm (Clustering)",
    "question": "Khi nào ta nên ưu tiên chọn DBSCAN thay vì K-Means hay GMM?",
    "options": [
      "Khi dữ liệu có phân phối chuẩn đồng đều",
      "Khi dữ liệu chứa nhiều ngoại lai/nhiễu, các cụm có hình dạng uốn lượn bất kỳ và chưa biết trước số cụm K",
      "Khi cần chạy thuật toán trên không gian 10.000 chiều",
      "Khi cần phân cụm mềm dạng xác suất"
    ],
    "answer": 1,
    "explanation": "DBSCAN là lựa chọn số 1 khi dữ liệu có hình dạng tự do, có nhiễu rải rác và không có thông tin tiên nghiệm về số lượng cụm.",
    "slideRef": "Slide Chương 5, Trang 70"
  },
  {
    "id": 346,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Trong Phân cụm Phân cấp Tích tụ (Agglomerative Hierarchical Clustering), phương pháp Liên kết Ward (Ward's Linkage) hợp nhất hai cụm dựa trên tiêu chí nào?",
    "options": [
      "Khoảng cách ngắn nhất giữa hai điểm bất kỳ thuộc hai cụm",
      "Cực tiểu hóa mức gia tăng tổng phương sai nội cụm (Within-cluster variance) sau khi gộp",
      "Khoảng cách giữa hai điểm xa nhất của hai cụm",
      "Khoảng cách trung bình giữa tất cả các cặp điểm"
    ],
    "answer": 1,
    "explanation": "Ward's Linkage tìm cặp cụm mà khi hợp nhất sẽ làm tăng phương sai nội cụm (tổng bình phương khoảng cách tới tâm cụm mới) là ít nhất. Phương pháp này có xu hướng tạo ra các cụm có kích thước đồng đều và cấu trúc chặt chẽ tương tự K-Means.",
    "slideRef": "Slide Chương 5, Trang 14-16"
  },
  {
    "id": 347,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Nhược điểm lớn của phương pháp Liên kết Đơn (Single Linkage) trong phân cụm phân cấp là hiện tượng gì?",
    "options": [
      "Hiện tượng các cụm luôn có dạng hình cầu đối xứng",
      "Hiện tượng 'Tạo chuỗi xích' (Chaining effect), trong đó các điểm dữ liệu nhiễu nằm rải rác nối liền hai cụm tách biệt thành một cụm dài ngoằn ngoèo",
      "Không thể vẽ được biểu đồ hình cây Dendrogram",
      "Bắt buộc người dùng phải xác định trước số cụm K"
    ],
    "answer": 1,
    "explanation": "Single Linkage đo khoảng cách giữa hai điểm gần nhất giữa hai cụm (min distance). Chỉ cần một vài điểm nhiễu nằm cầu nối giữa hai cụm lớn, thuật toán sẽ nối chập hai cụm lớn đó lại với nhau thành một dải dài (Chaining effect).",
    "slideRef": "Slide Chương 5, Trang 15-17"
  },
  {
    "id": 348,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Biểu đồ hình cây (Dendrogram) trong phân cụm phân cấp cho phép người dùng xác định số lượng cụm mong muốn bằng cách nào?",
    "options": [
      "Đếm tổng số nút lá ở đáy biểu đồ",
      "Cắt một đường nằm ngang (ngưỡng khoảng cách / khoảng cách hợp nhất); số lượng nhánh thẳng đứng bị đường cắt đi qua chính là số lượng cụm thu được",
      "Tìm điểm cực tiểu của hàm mất mát",
      "Tính đạo hàm cấp 1 của cây"
    ],
    "answer": 1,
    "explanation": "Trục tung của Dendrogram biểu thị khoảng cách hợp nhất. Khi chọn một ngưỡng khoảng cách và vẽ đường cắt ngang, số lượng đường liên kết dọc bị cắt đứt chính là số cụm phân vùng tương ứng.",
    "slideRef": "Slide Chương 5, Trang 18-20"
  },
  {
    "id": 349,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Hàm mục tiêu Tổng bình phương khoảng cách nội cụm (WCSS hay Inertia) trong K-Means có tính chất toán học nào qua từng vòng lặp của thuật toán Lloyd?",
    "options": [
      "WCSS dao động ngẫu nhiên tăng giảm",
      "WCSS luôn giảm đơn điệu (hoặc giữ nguyên) sau mỗi bước gán mẫu và cập nhật tâm, đảm bảo thuật toán luôn hội tụ sau một số hữu hạn bước",
      "WCSS luôn tăng dần theo từng epoch",
      "WCSS luôn bằng 0 khi thuật toán dừng"
    ],
    "answer": 1,
    "explanation": "Ở bước gán (Assignment), mỗi điểm chọn tâm gần nhất nên WCSS giảm hoặc giữ nguyên. Ở bước cập nhật (Update), tâm mới là trung bình số học tối ưu hóa khoảng cách L2 nên WCSS tiếp tục giảm. Vì số cách phân chia N mẫu vào K cụm là hữu hạn nên thuật toán chắc chắn hội tụ.",
    "slideRef": "Slide Chương 5, Trang 24-26"
  },
  {
    "id": 350,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Độ phức tạp tính toán thời gian của thuật toán K-Means chuẩn cho mỗi lần chạy là bao nhiêu (với n là số mẫu, d là số chiều, K là số cụm, t là số vòng lặp)?",
    "options": [
      "O(n^2 * d)",
      "O(t * K * n * d)",
      "O(2^K * n)",
      "O(d^3)"
    ],
    "answer": 1,
    "explanation": "Trong mỗi vòng lặp t: tính khoảng cách từ n điểm đến K tâm trong không gian d chiều mất O(K * n * d); bước cập nhật tâm mất O(n * d). Tổng độ phức tạp là O(t * K * n * d), tuyến tính theo số mẫu n, rất nhanh so với phân cấp O(n^2) hoặc O(n^3).",
    "slideRef": "Slide Chương 5, Trang 27-28"
  },
  {
    "id": 351,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Thuật toán K-Means++ giải quyết vấn đề nhạy cảm với khởi tạo ngẫu nhiên của K-Means bằng cơ chế chọn tâm nào?",
    "options": [
      "Chọn ngẫu nhiên đồng đều tất cả K tâm cùng lúc từ tập dữ liệu",
      "Tâm đầu tiên chọn ngẫu nhiên; mỗi tâm tiếp theo được chọn từ các điểm còn lại với xác suất tỷ lệ thuận với bình phương khoảng cách D(x)^2 tới tâm gần nhất đã chọn",
      "Dùng kết quả của phân tích PCA làm tâm",
      "Chọn các điểm có giá trị lớn nhất theo từng trục tọa độ"
    ],
    "answer": 1,
    "explanation": "K-Means++ gán xác suất P(x) = D(x)^2 / sum(D(x')^2). Điểm nào càng nằm xa các tâm đã chọn thì xác suất được chọn làm tâm tiếp theo càng cao. Điều này phân tán các tâm khởi đầu ra xa nhau, giảm nguy cơ 2 tâm rơi vào cùng một cụm tự nhiên.",
    "slideRef": "Slide Chương 5, Trang 29-31"
  },
  {
    "id": 352,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Biến thể Mini-Batch K-Means được thiết kế nhằm mục đích chính nào trong các bài toán Big Data?",
    "options": [
      "Tăng độ chính xác phân cụm lên 100%",
      "Tối ưu hóa thời gian tính toán và tiết kiệm bộ nhớ RAM bằng cách cập nhật vị trí tâm cụm dựa trên từng tập con mẫu nhỏ (mini-batch) thay vì toàn bộ tập dữ liệu khổng lồ",
      "Tự động tìm kiếm số lượng cụm K tối ưu",
      "Cho phép tìm các cụm có hình dạng xoắn ốc phi tuyến"
    ],
    "answer": 1,
    "explanation": "Mini-Batch K-Means lấy mẫu ngẫu nhiên một batch nhỏ (ví dụ 100 đến 1000 mẫu) qua mỗi bước để di chuyển dần tâm cụm. Tốc độ nhanh hơn K-Means chuẩn gấp nhiều lần mà kết quả chỉ giảm chất lượng không đáng kể.",
    "slideRef": "Slide Chương 5, Trang 32-33"
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
    "explanation": "DBI đo tỷ số (độ phân tán cụm i + độ phân tán cụm j) / (khoảng cách giữa tâm i và tâm j). Một kết quả phân cụm lý tưởng có cụm chặt chẽ (độ phân tán nhỏ) và các cụm cách xa nhau (khoảng cách tâm lớn), tức DBI càng nhỏ càng tốt.",
    "slideRef": "Slide Chương 5, Trang 38-39"
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
    "explanation": "Calinski-Harabasz tính tỷ số giữa tổng bình phương khoảng cách giữa các cụm và trong từng cụm (có chuẩn hóa theo bậc tự do). Cụm càng đặc và cách biệt nhau thì tử số càng lớn và mẫu số càng nhỏ, do đó điểm số càng cao càng tốt.",
    "slideRef": "Slide Chương 5, Trang 39-40"
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
    "explanation": "Adjusted Rand Index (ARI) so sánh mức độ tương đồng giữa nhãn phân cụm dự đoán và nhãn ground truth thực tế, với giá trị hiệu chỉnh ngẫu nhiên (sao cho đoán mò có ARI = 0, phân cụm hoàn hảo có ARI = 1). Silhouette hay WCSS là đánh giá nội tại không cần nhãn.",
    "slideRef": "Slide Chương 5, Trang 41-43"
  },
  {
    "id": 356,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Trong Mô hình Hỗn hợp Gauss (GMM), mỗi cụm k được mô tả bằng bộ ba tham số thống kê nào?",
    "options": [
      "Số lượng nút lá, Độ sâu tối đa, Gini Impurity",
      "Vector kỳ vọng trung bình μ_k, Ma trận hiệp phương sai Σ_k, và Trọng số thành phần π_k (Mixing coefficient)",
      "Hệ số phạt L1, Hệ số phạt L2, Tốc độ học η",
      "Bán kính Epsilon, Số điểm tối thiểu MinPts, Khoảng cách Chebyshev"
    ],
    "answer": 1,
    "explanation": "GMM giả định dữ liệu sinh ra từ K phân phối chuẩn đa biến. Mỗi thành phần k có trọng số hỗn hợp π_k (với sum π_k = 1), vector tâm μ_k, và ma trận hiệp phương sai Σ_k xác định hình dạng, độ lớn và hướng xoay của cụm.",
    "slideRef": "Slide Chương 5, Trang 45-47"
  },
  {
    "id": 357,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Trong thuật toán EM (Expectation - Maximization) huấn luyện GMM, bước E (Expectation step) thực hiện công việc gì?",
    "options": [
      "Khởi tạo ngẫu nhiên toàn bộ dữ liệu",
      "Tính toán xác suất hậu nghiệm (Responsibility γ_ik) rằng điểm dữ liệu x_i được sinh ra bởi cụm k, dựa trên các tham số hiện tại",
      "Cập nhật lại vector trung bình μ_k và ma trận hiệp phương sai Σ_k",
      "Gán nhãn cứng 0 hoặc 1 cho từng điểm"
    ],
    "answer": 1,
    "explanation": "Bước E (Kỳ vọng) giữ nguyên tham số, sử dụng định lý Bayes để tính xác suất điểm x_i thuộc về cụm k: γ_ik = P(z_i = k | x_i) = π_k * N(x_i | μ_k, Σ_k) / sum_j [ π_j * N(x_i | μ_j, Σ_j) ].",
    "slideRef": "Slide Chương 5, Trang 48-50"
  },
  {
    "id": 358,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Bước M (Maximization step) trong thuật toán EM thực hiện công việc gì?",
    "options": [
      "Tính toán ma trận nghịch đảo của toàn bộ tập dữ liệu",
      "Cập nhật lại các tham số (μ_k, Σ_k, π_k) bằng cách tối đa hóa hàm hợp lý kỳ vọng dựa trên các trọng số trách nhiệm γ_ik vừa tính ở bước E",
      "Loại bỏ các điểm ngoại lai khỏi tập dữ liệu",
      "Vẽ biểu đồ hình cây Dendrogram"
    ],
    "answer": 1,
    "explanation": "Bước M (Cực đại hóa) cập nhật lại các tham số: μ_k mới là trung bình có trọng số theo γ_ik; Σ_k mới là hiệp phương sai có trọng số; và π_k mới = N_k / N.",
    "slideRef": "Slide Chương 5, Trang 50-52"
  },
  {
    "id": 359,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Nếu cấu hình ma trận hiệp phương sai trong GMM là 'diagonal' (đường chéo), các cụm Gauss trong không gian sẽ có dạng hình học nào?",
    "options": [
      "Hình cầu hoàn hảo",
      "Hình elip có các trục song song với các trục tọa độ (không xoay nghiêng)",
      "Hình elip tổng quát có thể xoay nghiêng tùy ý theo bất kỳ hướng nào",
      "Một đường thẳng dẹt 1 chiều"
    ],
    "answer": 1,
    "explanation": "'diagonal' covariance nghĩa là các phần tử ngoài đường chéo bằng 0 (hiệp phương sai giữa các chiều bằng 0, các biến độc lập nhau), do đó cụm có hình elip nhưng các trục chính luôn thẳng hàng song song với các trục tọa độ. (Nếu muốn xoay tự do phải dùng 'full' covariance).",
    "slideRef": "Slide Chương 5, Trang 53-54"
  },
  {
    "id": 360,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Trong thuật toán DBSCAN, một điểm p được định nghĩa là Điểm lõi (Core point) khi thỏa mãn điều kiện nào?",
    "options": [
      "Nó nằm cách tâm cụm một khoảng nhỏ hơn 1.0",
      "Trong vùng lân cận bán kính ε (Eps) của điểm p có chứa ít nhất MinPts điểm (tính cả chính điểm p)",
      "Nó có ít hơn MinPts điểm trong bán kính ε nhưng nằm cạnh một điểm khác",
      "Nó có giá trị ngoại lai lớn nhất trong tập dữ liệu"
    ],
    "answer": 1,
    "explanation": "Điều kiện điểm lõi (Core point): |N_ε(p)| >= MinPts. Điểm này nằm sâu trong vùng mật độ cao của cụm.",
    "slideRef": "Slide Chương 5, Trang 57-59"
  },
  {
    "id": 361,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Trong DBSCAN, một điểm q được gọi là Điểm biên (Border point) khi nào?",
    "options": [
      "Điểm q có số điểm lân cận trong bán kính ε nhỏ hơn MinPts, nhưng điểm q lại nằm trong vùng lân cận bán kính ε của một Điểm lõi",
      "Điểm q có số lân cận lớn hơn 2 lần MinPts",
      "Điểm q không nằm trong lân cận của bất kỳ điểm nào",
      "Điểm q luôn bị thuật toán gán nhãn là nhiễu (-1)"
    ],
    "answer": 0,
    "explanation": "Điểm biên (Border point) không đủ điều kiện làm điểm lõi (|N_ε(q)| < MinPts) nhưng may mắn 'chạm' vào vùng lân cận của một điểm lõi, do đó vẫn được kết nạp vào cụm của điểm lõi đó thay vì bị coi là nhiễu.",
    "slideRef": "Slide Chương 5, Trang 59-61"
  },
  {
    "id": 362,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Điểm nhiễu (Noise point / Outlier) trong thuật toán DBSCAN có đặc điểm nhận dạng nào?",
    "options": [
      "Điểm có khoảng cách Manhattan lớn nhất",
      "Điểm không phải là Điểm lõi và cũng không thuộc vùng lân cận ε của bất kỳ Điểm lõi nào (thường được gán nhãn -1)",
      "Điểm có hệ số Silhouette lớn hơn 0.8",
      "Điểm nằm chính giữa hai cụm lân cận"
    ],
    "answer": 1,
    "explanation": "Bất kỳ điểm nào không phải Core point và cũng không phải Border point đều bị xếp vào nhóm Điểm nhiễu (Noise). Trong thư viện scikit-learn, các điểm này được gán nhãn -1.",
    "slideRef": "Slide Chương 5, Trang 61-62"
  },
  {
    "id": 363,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Quan hệ 'Có thể tiếp cận theo mật độ' (Density-reachable) trong DBSCAN có tính chất nào?",
    "options": [
      "Có tính đối xứng (nếu p tiếp cận được q thì q luôn tiếp cận được p)",
      "Không có tính đối xứng nói chung: Một điểm biên có thể tiếp cận được từ một điểm lõi thông qua chuỗi các điểm lõi trung gian, nhưng ngược lại từ điểm biên không thể tiếp cận được điểm lõi vì điểm biên không có khả năng phát tán tiếp",
      "Luôn bắc cầu giữa mọi cặp điểm trong toàn bộ dataset",
      "Yêu cầu khoảng cách Euclidean phải bằng 0"
    ],
    "answer": 1,
    "explanation": "Density-reachable KHÔNG đối xứng. Chuỗi p1 -> p2 -> ... -> pn đòi hỏi các điểm từ p1 đến pn-1 phải là CORE points. Nếu pn là Border point thì p1 tiếp cận được pn, nhưng từ pn không thể tìm đường ngược lại vì pn không phải Core point.",
    "slideRef": "Slide Chương 5, Trang 62-64"
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
    "explanation": "DBSCAN sử dụng một cặp tham số (ε, MinPts) cố định toàn cục. Nếu dữ liệu có các cụm mật độ chênh lệch lớn: nếu chọn ε nhỏ để bắt cụm đặc thì cụm thưa sẽ bị coi là nhiễu; nếu chọn ε lớn để bắt cụm thưa thì cụm đặc sẽ bị dính chập vào nhau. Khi đó phải dùng HDBSCAN.",
    "slideRef": "Slide Chương 5, Trang 66-67"
  },
  {
    "id": 365,
    "chapter": 5,
    "chapterTitle": "Chương 5: Bài toán Phân cụm",
    "question": "Ưu điểm vượt trội nhất của DBSCAN so với K-Means là gì?",
    "options": [
      "DBSCAN luôn chạy nhanh hơn K-Means trên dữ liệu hàng triệu chiều",
      "DBSCAN không yêu cầu người dùng phải xác định trước số cụm K, có khả năng tìm các cụm có hình dạng hình học tùy ý phi tuyến, và tự động phát hiện loại bỏ các điểm nhiễu",
      "DBSCAN luôn tạo ra các cụm hình cầu tròn trịa",
      "DBSCAN có nghiệm đóng giải tích duy nhất"
    ],
    "answer": 1,
    "explanation": "K-Means bị giới hạn ở cụm lồi hình cầu và phải đoán K trước. DBSCAN tự động phát hiện số lượng cụm, bắt trọn các hình dạng phức tạp (chữ U, xoắn ốc, vành khuyên) và cô lập hoàn toàn các điểm nhiễu.",
    "slideRef": "Slide Chương 5, Trang 67-68"
  }
];

// Tự động gộp vào ngân hàng câu hỏi chung
if (!window.QUESTION_BANK) {
  window.QUESTION_BANK = [];
}
window.QUESTION_BANK.push(...window.QUESTIONS_CHUONG_5);
