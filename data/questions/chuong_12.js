/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - CHƯƠNG 12: SEMINAR - ECOC & MULTI-LABEL / MULTI-OUTPUT
   - Số lượng: 20 câu (ID 541 - 560)
   - Tự động gộp vào window.QUESTION_BANK
============================================================================== */

window.QUESTIONS_CHUONG_12 = [
  {
    "id": 541,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Phương pháp Mã sửa lỗi đầu ra (Error-Correcting Output Codes - ECOC, Dietterich & Bakiri 1995) giải quyết bài toán phân loại đa lớp ($K > 2$ lớp) theo nguyên lý nào?",
    "options": [
      "Gộp tất cả các lớp thành 1 lớp duy nhất",
      "Phân tách bài toán đa lớp thành nhiều bài toán phân loại nhị phân độc lập dựa trên một ma trận mã hóa nhị phân kích thước $K \\times L$, sau đó dự đoán lớp dựa trên khoảng cách Hamming nhỏ nhất",
      "Sử dụng thuật toán K-Means để gom các lớp lại",
      "Huấn luyện duy nhất 1 đường hồi quy tuyến tính OLS"
    ],
    "answer": 1,
    "explanation": "### 🎯 Nguyên lý cốt lõi của ECOC:\nECOC mượn ý tưởng từ lý thuyết truyền tin (Information Theory). Mỗi lớp được gán một \"từ mã\" (codeword) nhị phân độ dài $L$ bit (tạo thành ma trận mã hóa $K \\times L$). Ta huấn luyện $L$ bộ phân loại nhị phân độc lập. Khi dự đoán, chuỗi đầu ra của $L$ bộ phân loại sẽ được so sánh với từ mã của từng lớp bằng khoảng cách Hamming; lớp nào gần nhất sẽ được chọn.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Slide 2, Paper Trang 1"
  },
  {
    "id": 542,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Khoảng cách Hamming (Hamming Distance) giữa hai từ mã nhị phân có độ dài bằng nhau được định nghĩa là:",
    "options": [
      "Tích vô hướng giữa hai vector",
      "Số lượng vị trí bit mà tại đó hai từ mã có giá trị khác nhau",
      "Độ dài cạnh huyền tam giác vuông",
      "Tổng bình phương khoảng cách giữa các số thực"
    ],
    "answer": 1,
    "explanation": "### 🎯 Khoảng cách Hamming:\nĐo số lượng bit khác biệt giữa 2 chuỗi nhị phân. Ví dụ: từ mã $A = [1, 0, 1, 1]$ và $B = [1, 1, 1, 0]$ có 2 vị trí bit khác nhau (ở vị trí thứ 2 và thứ 4) $\\implies$ Khoảng cách Hamming $d(A, B) = 2$.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 2"
  },
  {
    "id": 543,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Theo định lý sửa sai trong lý thuyết thông tin, nếu ma trận mã hóa ECOC có khoảng cách Hamming tối thiểu giữa 2 hàng bất kỳ là $d_{\\min}$, mô hình có khả năng tự động sửa đúng bao nhiêu lỗi phân loại nhị phân?",
    "options": [
      "$d_{\\min}$ lỗi",
      "Tối đa $\\left\\lfloor \\frac{d_{\\min} - 1}{2} \\right\\rfloor$ lỗi phân loại nhị phân",
      "Không thể sửa được lỗi nào",
      "$2 \\times d_{\\min}$ lỗi"
    ],
    "answer": 1,
    "explanation": "### 🎯 Khả năng sửa sai kỳ diệu của ECOC:\nNếu khoảng cách tối thiểu giữa 2 lớp bất kỳ là $d_{\\min}$, thì một lỗi dự đoán làm dịch chuyển từ mã đi 1 bit. Để từ mã bị biến thành một lớp khác, nó cần phải sai tối thiểu $\\lfloor \\frac{d_{\\min} - 1}{2} \\rfloor + 1$ bit. Do đó, nếu số bộ phân loại con bị đoán sai nhỏ hơn hoặc bằng $\\left\\lfloor \\frac{d_{\\min} - 1}{2} \\right\\rfloor$, từ mã dự đoán **vẫn nằm gần lớp đúng nhất**, và ECOC tự động sửa sai để cho ra kết quả cuối cùng hoàn toàn chính xác!",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Slide 4, Paper Trang 2"
  },
  {
    "id": 544,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Chiến lược One-vs-Rest (OvR) kinh điển có thể được biểu diễn như một trường hợp đặc biệt của ma trận mã hóa ECOC với dạng ma trận nào?",
    "options": [
      "Ma trận toàn số 0",
      "Ma trận đơn vị đường chéo kích thước $K \\times K$ (hoặc ma trận có đường chéo là 1 và các phần tử khác là 0 hoặc -1)",
      "Ma trận ngẫu nhiên kích thước vô hạn",
      "Ma trận tam giác dưới"
    ],
    "answer": 1,
    "explanation": "### 🎯 OvR là một dạng ECOC suy biến:\nTrong One-vs-Rest cho $K$ lớp, từ mã của lớp $i$ có bit thứ $i$ bằng 1 và tất cả các bit khác bằng 0 (hoặc -1). Khi đó, ma trận mã hóa chính là ma trận đơn vị $I_K$. Khoảng cách Hamming giữa hai lớp bất kỳ chỉ bằng đúng 2 $\\implies$ Khả năng sửa sai: $\\lfloor (2-1)/2 \\rfloor = 0$ (OvR hoàn toàn không có khả năng tự sửa sai nếu 1 bộ phân loại đoán hỏng!).",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 2-3"
  },
  {
    "id": 545,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Vì sao phương pháp Mã ngẫu nhiên (Random ECOC) với độ dài từ mã dài hơn (ví dụ $L = 50$ đến $60$ bit) lại vượt trội hơn hẳn so với One-vs-Rest (OvR)?",
    "options": [
      "Vì Random ECOC chạy nhanh hơn gấp 100 lần",
      "Vì độ dài mã dài hơn giúp tạo ra khoảng cách Hamming tối thiểu $d_{\\min}$ rất lớn, mang lại năng lực sửa sai dự phòng cực cao và chống chịu rất tốt trước hiện tượng nhãn nhiễu hoặc bộ phân loại yếu",
      "Vì Random ECOC không cần dùng dữ liệu huấn luyện",
      "Vì Random ECOC chỉ dùng được với cây quyết định"
    ],
    "answer": 1,
    "explanation": "### 🎯 Sức mạnh của Random ECOC dài:\nKhi tăng độ dài mã ngẫu nhiên lên $L = 50 - 60$ bit, khoảng cách Hamming $d_{\\min}$ giữa các lớp tăng vọt (thường đạt $d_{\\min} > 15$). Khi đó, dù có tới 5–7 bộ phân loại nhị phân con bị dự đoán sai hoàn toàn do nhiễu, khoảng cách Hamming tới lớp thật vẫn là nhỏ nhất $\\implies$ Kết quả cuối cùng vẫn đúng 100%!",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Slide 6, Paper Trang 4-6"
  },
  {
    "id": 546,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Sự khác biệt căn bản giữa bài toán Phân loại Đa lớp (Multiclass Classification) và bài toán Phân loại Đa nhãn (Multilabel Classification) trong Scikit-Learn là gì?",
    "options": [
      "Multiclass chỉ dùng được cho ảnh đen trắng",
      "Multiclass có các lớp loại trừ lẫn nhau (mỗi mẫu CHỈ THUỘC DUY NHẤT 1 lớp trong số K lớp); Multilabel cho phép mỗi mẫu thuộc về NHIỀU NHÃN CÙNG MỘT LÚC (vector nhãn nhị phân $y \\in \\{0, 1\\}^m$)",
      "Multiclass là học không giám sát, Multilabel là học có giám sát",
      "Hai bài toán này hoàn toàn đồng nhất về bản chất toán học"
    ],
    "answer": 1,
    "explanation": "### 🎯 Phân biệt Multiclass vs Multilabel:\n* **Multiclass:** Ví dụ nhận diện chữ số MNIST ($0, 1, \\dots, 9$): một ảnh chỉ có thể là số 3 HOẶC số 7 (không thể vừa là 3 vừa là 7).\n* **Multilabel:** Ví dụ gán thẻ cho bài báo: một tin tức có thể đồng thời thuộc các nhãn `['Kinh tế', 'Công nghệ', 'Chứng khoán']`.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Slide 2, Paper Trang 2"
  },
  {
    "id": 547,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Bài toán Hồi quy Đa đầu ra (Multioutput Regression) trong Scikit-Learn được định nghĩa như thế nào?",
    "options": [
      "Dự đoán 1 giá trị số nguyên duy nhất",
      "Dự đoán đồng thời nhiều biến mục tiêu liên tục ($y \\in \\mathbb{R}^m$) cho mỗi mẫu quan sát",
      "Dự đoán xác suất của 10 lớp rời rạc",
      "Gom cụm dữ liệu thành m cụm"
    ],
    "answer": 1,
    "explanation": "### 🎯 Multioutput Regression:\nMục tiêu $y$ không phải là một số vô hướng mà là một vector số thực liên tục có $m$ chiều. Ví dụ: Dự đoán tọa độ không gian 3 chiều $(x, y, z)$ và vận tốc của một vật thể bay.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Slide 2, Paper Trang 2"
  },
  {
    "id": 548,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Mô hình Chuỗi phân loại (Classifier Chains - Read et al., 2011) giải quyết bài toán Đa nhãn (Multilabel) vượt trội hơn phương pháp Binary Relevance độc lập ở điểm nào?",
    "options": [
      "Classifier Chains không cần dùng thuật toán tối ưu hóa",
      "Mô hình hóa được mối quan hệ phụ thuộc giữa các nhãn mục tiêu bằng cách xâu chuỗi: kết quả dự đoán của nhãn trước được dùng làm đặc trưng đầu vào bổ sung cho bộ phân loại của nhãn tiếp theo",
      "Classifier Chains huấn luyện nhanh hơn gấp 10 lần",
      "Classifier Chains chỉ áp dụng được cho dữ liệu văn bản tiếng Anh"
    ],
    "answer": 1,
    "explanation": "### 🎯 Sức mạnh của Classifier Chains:\nPhương pháp độc lập (Binary Relevance) giả định các nhãn hoàn toàn không liên quan đến nhau (sai thực tế). Classifier Chains sắp xếp các nhãn theo thứ tự: nhãn $y_1$ được đoán từ $X$; nhãn $y_2$ được đoán từ $[X, y_1]$; nhãn $y_3$ được đoán từ $[X, y_1, y_2]$... Nhờ đó, nếu đã đoán có nhãn \"Bệnh cúm\", mô hình sẽ dễ dàng dự đoán thêm nhãn \"Sốt cao\".",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Slide 4, Paper Trang 4"
  },
  {
    "id": 549,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Lớp `OutputCodeClassifier` trong module `sklearn.multiclass` của Scikit-Learn cung cấp tham số `code_size` nhằm kiểm soát điều gì?",
    "options": [
      "Kích thước bộ nhớ RAM tối đa của máy tính",
      "Tỷ lệ độ dài từ mã so với số lượng lớp: tổng số bộ phân loại nhị phân $L = \\text{round}(\\text{code\\_size} \\times K)$",
      "Số lượng cây trong rừng ngẫu nhiên",
      "Bán kính của siêu cầu"
    ],
    "answer": 1,
    "explanation": "### 🎯 Tham số `code_size` trong Scikit-Learn:\nNếu bài toán có $K$ lớp, thiết lập `code_size=1.5` sẽ tạo ra ma trận mã hóa có số cột $L = 1.5 \\times K$ bộ phân loại nhị phân. Nếu `code_size` lớn, độ dài từ mã càng dài, khoảng cách Hamming càng lớn và khả năng sửa sai càng cao.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 3"
  },
  {
    "id": 550,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Những mô hình học máy nào sau đây trong Scikit-Learn hỗ trợ bài toán Đa đầu ra (Multioutput) một cách TỰ NHIÊN (natively) trong một mô hình duy nhất mà không cần wrapper bọc ngoài?",
    "options": [
      "Hồi quy Logistic và Linear SVM",
      "Cây quyết định (Decision Trees), Rừng ngẫu nhiên (Random Forests), Hồi quy Ridge và K-Nearest Neighbors",
      "Naïve Bayes và AdaBoost cổ điển",
      "Perceptron đơn tầng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Hỗ trợ Native Multioutput trong Scikit-Learn:\n* `DecisionTreeRegressor` / `DecisionTreeClassifier`: Tại mỗi lá có thể lưu trữ trực tiếp vector nhiều giá trị trung bình hoặc tỷ lệ lớp.\n* `RandomForestRegressor`: Tổng hợp kết quả vector từ các cây.\n* `Ridge`: Nghiệm ma trận đóng $W = (X^TX + \\alpha I)^{-1} X^TY$ với $Y$ là ma trận nhiều cột.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 4"
  },
  {
    "id": 551,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Hạn chế hoặc rủi ro tiềm ẩn lớn nhất của mô hình Chuỗi phân loại (Classifier Chains) là gì?",
    "options": [
      "Không thể lưu mô hình vào đĩa cứng",
      "Hiện tượng lan truyền lỗi sai theo dây chuyền (Error Propagation): nếu các bộ phân loại ở đầu chuỗi dự đoán sai, sai số đó sẽ trở thành đặc trưng đầu vào gây hại cho tất cả các bộ phân loại phía sau",
      "Mô hình không hỗ trợ hàm mất mát Cross-Entropy",
      "Chỉ chạy được với tập dữ liệu có ít hơn 100 dòng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Rủi ro của Classifier Chains:\nVì nhãn phía sau phụ thuộc hoàn toàn vào dự đoán của nhãn trước, việc sắp xếp thứ tự nhãn (ordering risk) cực kỳ nhạy cảm. Để giảm thiểu rủi ro này, người ta thường dùng **Ensemble of Classifier Chains (ECC)**: huấn luyện nhiều chuỗi với thứ tự nhãn ngẫu nhiên khác nhau và lấy trung bình dự đoán.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 4"
  },
  {
    "id": 552,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Trong bài toán Đa nhãn (Multilabel), độ đo đánh giá nào kiểm tra xem tập nhãn dự đoán có KHỚP HOÀN TOÀN 100% với tập nhãn thực tế hay không (chỉ cần sai 1 nhãn là tính sai cả mẫu)?",
    "options": [
      "Hamming Loss",
      "Exact Match Ratio (còn gọi là Subset Accuracy)",
      "Macro-Averaged F1-score",
      "Mean Squared Error"
    ],
    "answer": 1,
    "explanation": "### 🎯 Exact Match Ratio (Subset Accuracy):\nĐây là độ đo khắt khe nhất trong Multilabel: một mẫu chỉ được tính là đúng (1 điểm) nếu toàn bộ vector nhãn dự đoán $\\hat{y}$ trùng khớp tuyệt đối từng bit với vector nhãn thật $y$.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 3"
  },
  {
    "id": 553,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Độ đo Hamming Loss trong đánh giá bài toán Đa nhãn (Multilabel Classification) được tính bằng:",
    "options": [
      "Tổng thời gian huấn luyện của mô hình",
      "Tỷ lệ phần trăm giữa số lượng nhãn bị dự đoán sai trên tổng số nhãn của toàn bộ các mẫu",
      "Khoảng cách giữa tâm các lớp",
      "Số lượng thuộc tính bị loại bỏ"
    ],
    "answer": 1,
    "explanation": "### 🎯 Hamming Loss:\n$$\\text{Hamming Loss} = \\frac{1}{N \\cdot M} \\sum_{i=1}^N \\sum_{j=1}^M \\mathbb{I}(y_{i,j} \\ne \\hat{y}_{i,j})$$\nĐo tỷ lệ dự đoán nhãn sai trung bình trên từng nhãn nhị phân con. Giá trị càng nhỏ càng tốt ($0$ là hoàn hảo).",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 3"
  },
  {
    "id": 554,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Hai tiêu chuẩn thiết kế ma trận mã hóa ECOC tối ưu theo lý thuyết của Dietterich và Bakiri (1995) là gì?",
    "options": [
      "Tất cả các hàng phải hoàn toàn giống nhau và tất cả các cột phải có tổng bằng 0",
      "Khoảng cách giữa các hàng phải lớn (Row Separation: các cặp lớp có từ mã xa nhau để tối đa hóa khả năng sửa sai) và các cột không được tương quan hoặc bổ sung nhau (Column Separation: các bài toán nhị phân con độc lập nhau)",
      "Ma trận phải là ma trận số nguyên tố",
      "Số cột phải luôn nhỏ hơn số hàng"
    ],
    "answer": 1,
    "explanation": "### 🎯 Hai nguyên tắc thiết kế mã ECOC:\n1. **Row Separation:** Khoảng cách Hamming giữa các cặp hàng (lớp) phải lớn để phân biệt rõ và sửa sai tốt.\n2. **Column Separation:** Các cột (bộ phân loại con) không được giống nhau hoặc là phần bù đảo bit của nhau, nhằm bảo đảm các bộ phân loại con học các khía cạnh độc lập của dữ liệu.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 2"
  },
  {
    "id": 555,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Trong báo cáo thực nghiệm seminar Nhóm 6, phương pháp ECOC-R60 (Random ECOC với độ dài 60 bit) thể hiện hiệu năng thế nào so với One-vs-Rest (OvR) chuẩn?",
    "options": [
      "ECOC-R60 luôn cho độ chính xác thấp hơn OvR",
      "ECOC-R60 xếp hạng nhất trên 6/8 tập dữ liệu thực nghiệm, đem lại mức cải thiện độ chính xác vượt trội (accuracy gain) so với One-vs-Rest",
      "ECOC-R60 chỉ chạy được với tập dữ liệu nhỏ hơn 10 mẫu",
      "ECOC-R60 cho kết quả giống hệt OvR"
    ],
    "answer": 1,
    "explanation": "### 🎯 Kết quả thực nghiệm ECOC:\nThực nghiệm trên 8 tập dữ liệu đa lớp chuẩn (Segment, Vowel, Optdigits...) chỉ ra rằng ECOC-R60 vượt trội hoàn toàn so với OvR nhờ khả năng chịu lỗi và tính độc lập của các mã ngẫu nhiên 60-bit.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 5, Figure 2 & 3"
  },
  {
    "id": 556,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Khi nào người ta nên ưu tiên sử dụng mã ECOC dài thay vì dùng One-vs-Rest (OvR) hay One-vs-One (OvO)?",
    "options": [
      "Khi thời gian huấn luyện đòi hỏi phải dưới 1 mili-giây",
      "Khi dữ liệu có nhãn bị nhiễu (Noisy labels) hoặc khi bộ phân loại cơ sở (base learner) không ổn định (Unstable / High Variance)",
      "Khi tập dữ liệu chỉ có đúng 2 lớp đối tượng",
      "Khi bài toán không có dữ liệu kiểm thử"
    ],
    "answer": 1,
    "explanation": "### 🎯 Khi nào nên dùng ECOC dài:\nBáo cáo khuyến nghị: Khi dữ liệu bị nhiễu nhãn hoặc mô hình con dễ bị overfit (như cây quyết định sâu), các mã ECOC dài ($\\ge 60$ bits) đóng vai trò như một bộ đệm sửa lỗi bảo vệ hệ thống khỏi các quyết định sai lầm của từng mô hình đơn lẻ.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 11"
  },
  {
    "id": 557,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Mô hình Regressor Chains (Spyromitros-Xioufis et al., 2011) áp dụng tư tưởng của Classifier Chains cho bài toán nào?",
    "options": [
      "Bài toán Hồi quy Đa đầu ra (Multioutput Regression) bằng cách xâu chuỗi các giá trị dự đoán liên tục của đầu ra trước làm đầu vào bổ sung cho đầu ra sau",
      "Bài toán phân cụm phân cấp",
      "Bài toán trích xuất đặc trưng PCA",
      "Bài toán mã hóa One-Hot"
    ],
    "answer": 0,
    "explanation": "### 🎯 Regressor Chains:\nChuyển giao ý tưởng chuỗi sang bài toán hồi quy đa biến: thay vì dự đoán độc lập từng biến $y_j$, mô hình hồi quy thứ $j$ nhận các biến mục tiêu đã dự đoán trước đó $(\\hat{y}_1, \\dots, \\hat{y}_{j-1})$ làm các thuộc tính đầu vào để nắm bắt tương quan giữa các biến liên tục.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 4"
  },
  {
    "id": 558,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Trong Scikit-Learn, hàm tiện ích nào được sử dụng để tự động kiểm tra định dạng của biến mục tiêu `y` (trả về `'multiclass'`, `'multilabel-indicator'`, `'multiclass-multioutput'`, v.v.)?",
    "options": [
      "`sklearn.utils.multiclass.type_of_target(y)`",
      "`np.shape(y)`",
      "`sklearn.metrics.accuracy_score(y)`",
      "`pd.DataFrame(y).info()`"
    ],
    "answer": 0,
    "explanation": "### 🎯 Hàm `type_of_target(y)`:\nĐây là hàm chuẩn nội bộ của Scikit-Learn giúp xác định chính xác bài toán mục tiêu dựa trên hình dạng và kiểu dữ liệu của $y$, từ đó điều hướng lựa chọn meta-estimator phù hợp.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Slide 2, Paper Trang 2"
  },
  {
    "id": 559,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Lớp `MultiOutputClassifier` trong Scikit-Learn hoạt động theo chiến lược mở rộng nào?",
    "options": [
      "Chiến lược Binary Relevance: tự động khởi tạo và huấn luyện một mô hình phân loại độc lập cho mỗi cột nhãn mục tiêu trong bài toán đa nhãn",
      "Chiến lược Stacking với Meta-learner",
      "Chiến lược giảm chiều dữ liệu t-SNE",
      "Chiến lược cây bao trùm ngắn nhất"
    ],
    "answer": 0,
    "explanation": "### 🎯 `MultiOutputClassifier`:\nWrapper đơn giản cho phép bất kỳ bộ phân loại nhị phân hay đa lớp nào mở rộng sang dự đoán nhiều cột nhãn đồng thời bằng cách nhân bản mô hình độc lập cho từng cột mục tiêu.",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Slide 2, Paper Trang 2"
  },
  {
    "id": 560,
    "chapter": 12,
    "chapterTitle": "Chương 12: Seminar - ECOC & Multi-label / Multi-output",
    "question": "Một bài toán có $K = 4$ lớp đối tượng, ma trận mã hóa ECOC được thiết kế sao cho khoảng cách Hamming giữa mọi cặp lớp đều bằng $d = 5$. Mô hình này có thể tự động sửa được tối đa bao nhiêu lỗi phân loại nhị phân con?",
    "options": [
      "0 lỗi",
      "1 lỗi",
      "2 lỗi",
      "5 lỗi"
    ],
    "answer": 2,
    "explanation": "### 🎯 Tính toán khả năng sửa sai ECOC:\nÁp dụng công thức:\n$$\\text{Số lỗi sửa được} = \\left\\lfloor \\frac{d - 1}{2} \\right\\rfloor = \\left\\lfloor \\frac{5 - 1}{2} \\right\\rfloor = \\left\\lfloor \\frac{4}{2} \\right\\rfloor = 2 \\text{ lỗi}.$$\nDù có 2 bộ phân loại nhị phân con bị phán đoán sai, mô hình ECOC vẫn chọn chính xác lớp đúng!",
    "slideRef": "Seminar Nhóm 06 (ECOC & Multioutput), Paper Trang 2"
  }
];
