/* ==============================================================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - Chương 15: Seminar - Nâng cao Ensemble Learning & Stacking
   - Số lượng: 15 câu (Đã chuẩn hóa đáp án số & phân bổ đều A/B/C/D)
============================================================================== */

window.QUESTIONS_CHUONG_15 = [
  {
    "id": 591,
    "chapter": 15,
    "question": "Định lý Bồi thẩm đoàn Condorcet (Condorcet's Jury Theorem) - nền tảng lý thuyết xác suất của Ensemble Learning - phát biểu điều gì?",
    "options": [
      "Nếu các mô hình cơ sở phụ thuộc tuyến tính vào nhau thì sai số tổng thể luôn bằng 0",
      "Nếu mỗi người đánh giá độc lập có xác suất đúng $p > 0.5$, thì khi tăng số lượng người tham gia bỏ phiếu theo đa số, xác suất phán quyết tập thể chính xác sẽ tiến dần tới 1 (100%)",
      "Tập hợp các mô hình yếu chỉ mạnh lên khi tất cả cùng mắc chung một loại sai lầm",
      "Kích thước tập huấn luyện tối thiểu của ensemble phải gấp đôi số lượng cây con"
    ],
    "answer": 1,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nCondorcet's Jury Theorem chỉ ra rằng chỉ cần các bộ phân loại cá nhân độc lập và có độ chính xác nhỉnh hơn đoán mò ngẫu nhiên ($p > 0.5$), thì luật đa số (majority voting) của một tập thể đủ lớn sẽ hội tụ về độ chính xác tiệm cận tuyệt đối 1.",
    "chapterTitle": "Chương 15: Seminar - Nâng cao Ensemble Learning & Stacking",
    "slideRef": "Seminar Nhóm 12 (Ensemble & Stacking)"
  },
  {
    "id": 592,
    "chapter": 15,
    "question": "Trong kỹ thuật Bagging (Bootstrap Aggregating) với kích thước tập dữ liệu $n$, khi $n$ tiến ra vô cùng, tỉ lệ phần trăm các mẫu không bao giờ được chọn vào một túi con (Out-of-Bag - OOB samples) là khoảng bao nhiêu?",
    "options": [
      "Khoảng 50.0%",
      "Khoảng 10.0%",
      "Khoảng 36.8% (xấp xỉ $1/e$)",
      "Khoảng 63.2%"
    ],
    "answer": 2,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nXác suất một mẫu không được rút trong $n$ lần rút có hoàn lại là $(1 - 1/n)^n$. Khi $n \\to \\infty$, $\\lim_{n \\to \\infty} (1 - 1/n)^n = e^{-1} \\approx 0.367879$ (36.8%). Khoảng 63.2% dữ liệu được chọn vào túi bootstrap, và 36.8% còn lại làm tập kiểm tra OOB.",
    "chapterTitle": "Chương 15: Seminar - Nâng cao Ensemble Learning & Stacking",
    "slideRef": "Seminar Nhóm 12 (Ensemble & Stacking)"
  },
  {
    "id": 593,
    "chapter": 15,
    "question": "Tính năng đánh giá OOB (Out-of-Bag score) trong `RandomForestClassifier(oob_score=True)` đem lại lợi ích lớn nào trong thực tế?",
    "options": [
      "Cung cấp một ước lượng khách quan về độ chính xác kiểm thử tương đương cross-validation mà không cần phải tốn công chia tập validation riêng biệt",
      "Tăng tốc độ huấn luyện của cây gấp đôi",
      "Tự động loại bỏ các thuộc tính bị thiếu dữ liệu",
      "Đảm bảo mô hình đạt 100% độ chính xác trên tập kiểm tra"
    ],
    "answer": 0,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nVì khoảng 37% số mẫu trong mỗi cây hoàn toàn không được dùng để huấn luyện cây đó, ta có thể dùng chính những mẫu OOB này để kiểm tra chéo từng cây và tính điểm tổng thể (OOB score), đóng vai trò như một bộ kiểm định độc lập hoàn toàn miễn phí.",
    "chapterTitle": "Chương 15: Seminar - Nâng cao Ensemble Learning & Stacking",
    "slideRef": "Seminar Nhóm 12 (Ensemble & Stacking)"
  },
  {
    "id": 594,
    "chapter": 15,
    "question": "Điểm khác biệt cốt lõi giữa Random Forest và mô hình Cây ngẫu nhiên cực độ (Extra-Trees / Extremely Randomized Trees) trong Scikit-Learn là gì?",
    "options": [
      "Extra-Trees sử dụng mạng nơ-ron để tìm điểm phân nhánh",
      "Extra-Trees chỉ cho phép cây có độ sâu tối đa bằng 2",
      "Extra-Trees không áp dụng được cho bài toán hồi quy",
      "Extra-Trees sinh ngẫu nhiên luôn cả ngưỡng cắt (split threshold) cho từng đặc trưng ứng viên thay vì đi tìm ngưỡng cắt tối ưu nhất như Random Forest"
    ],
    "answer": 3,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nTrong khi Random Forest tìm ngưỡng phân chia tối ưu nhất trong số các đặc trưng con, Extra-Trees rút ngẫu nhiên hoàn toàn các ngưỡng cho mỗi đặc trưng và chỉ chọn ngưỡng tốt nhất trong số các ngưỡng ngẫu nhiên đó. Kỹ thuật này giúp giảm variance nhiều hơn nữa và huấn luyện nhanh hơn đáng kể.",
    "chapterTitle": "Chương 15: Seminar - Nâng cao Ensemble Learning & Stacking",
    "slideRef": "Seminar Nhóm 12 (Ensemble & Stacking)"
  },
  {
    "id": 595,
    "chapter": 15,
    "question": "Trong thuật toán AdaBoost (Adaptive Boosting), trọng số của các mẫu dữ liệu được cập nhật như thế nào sau mỗi vòng lặp của mô hình yếu?",
    "options": [
      "Các mẫu dự đoán đúng được tăng trọng số lên để củng cố niềm tin",
      "Tất cả các mẫu đều bị giảm trọng số về 0",
      "Các mẫu bị phân loại sai ở vòng trước được tăng trọng số lên, buộc mô hình ở vòng tiếp theo phải tập trung học sửa các lỗi này",
      "Trọng số của các mẫu được xáo trộn ngẫu nhiên"
    ],
    "answer": 2,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nAdaBoost điều chỉnh trọng số mẫu theo công thức $w_i \\leftarrow w_i \\exp(\\alpha_m)$ nếu đoán sai và $w_i \\leftarrow w_i \\exp(-\\alpha_m)$ nếu đoán đúng (với $\\alpha_m > 0$ là độ tin cậy của learner thứ $m$). Do đó, các mẫu khó/đoán sai nhận trọng số lớn hơn nhiều trong các vòng sau.",
    "chapterTitle": "Chương 15: Seminar - Nâng cao Ensemble Learning & Stacking",
    "slideRef": "Seminar Nhóm 12 (Ensemble & Stacking)"
  },
  {
    "id": 596,
    "chapter": 15,
    "question": "Hệ số tin cậy $\\alpha_m$ của mô hình cơ sở thứ $m$ trong AdaBoost phụ thuộc vào tỉ lệ lỗi phân loại có trọng số $err_m$ theo công thức nào?",
    "options": [
      "$\\alpha_m = 1 - err_m^2$",
      "$\\alpha_m = \\frac{1}{2} \\ln \\left(\\frac{1 - err_m}{err_m}\\right)$",
      "$\\alpha_m = \\exp(-err_m)$",
      "$\\alpha_m = \\frac{err_m}{1 - err_m}$"
    ],
    "answer": 1,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nCông thức tính trọng số đóng góp của base estimator trong AdaBoost SAMME là $\\alpha_m = \\frac{1}{2} \\ln \\frac{1 - err_m}{err_m}$. Khi lỗi $err_m < 0.5$, $\\alpha_m > 0$; lỗi càng thấp thì $\\alpha_m$ càng lớn. Nếu mô hình đoán mò $err_m = 0.5$, $\\alpha_m = 0$.",
    "chapterTitle": "Chương 15: Seminar - Nâng cao Ensemble Learning & Stacking",
    "slideRef": "Seminar Nhóm 12 (Ensemble & Stacking)"
  },
  {
    "id": 597,
    "chapter": 15,
    "question": "Điểm khác biệt căn bản trong chiến lược học giữa AdaBoost và Gradient Boosting là gì?",
    "options": [
      "AdaBoost điều chỉnh trọng số của mẫu dữ liệu sai; còn Gradient Boosting giữ nguyên trọng số mẫu nhưng khớp (fit) mô hình kế tiếp vào phần dư (residuals) hoặc gradient âm của hàm mất mát",
      "AdaBoost dùng cây quyết định còn Gradient Boosting dùng hồi quy tuyến tính",
      "Gradient Boosting chỉ chạy được trên một luồng CPU duy nhất",
      "AdaBoost giảm variance còn Gradient Boosting chỉ giảm bias"
    ],
    "answer": 0,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nTrong Gradient Boosting, thay vì cập nhật phân phối trọng số các điểm dữ liệu như AdaBoost, mỗi cây quyết định mới được huấn luyện để dự đoán phần dư sai số $y - \\hat{y}$ (chính là gradient âm $-\\frac{\\partial L}{\\partial \\hat{y}}$ của hàm mất mát).",
    "chapterTitle": "Chương 15: Seminar - Nâng cao Ensemble Learning & Stacking",
    "slideRef": "Seminar Nhóm 12 (Ensemble & Stacking)"
  },
  {
    "id": 598,
    "chapter": 15,
    "question": "Trong Gradient Boosting, siêu tham số `learning_rate` (còn gọi là hệ số co - shrinkage rate) có vai trò gì?",
    "options": [
      "Điều chỉnh tốc độ cập nhật trọng số nơ-ron bằng phương pháp quán tính",
      "Tăng số lượng mẫu được lấy vào mỗi cây",
      "Tự động dừng sớm nếu sau $k$ vòng lặp kết quả không cải thiện",
      "Thu nhỏ sự đóng góp của mỗi cây bằng một hệ số nhân $\\eta \\in (0, 1]$, làm chậm quá trình học để giảm nguy cơ overfitting"
    ],
    "answer": 3,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nCông thức cộng dồn của Gradient Tree Boosting là $\\hat{y}^{(m)} = \\hat{y}^{(m-1)} + \\eta \\cdot h_m(x)$. Hệ số $\\eta$ (learning rate) làm giảm bước nhảy của mỗi cây, cho phép nhiều cây cùng phối hợp nhịp nhàng và cải thiện khả năng tổng quát hóa.",
    "chapterTitle": "Chương 15: Seminar - Nâng cao Ensemble Learning & Stacking",
    "slideRef": "Seminar Nhóm 12 (Ensemble & Stacking)"
  },
  {
    "id": 599,
    "chapter": 15,
    "question": "Kiến trúc mô hình xếp chồng (Stacking / Stacked Generalization) bao gồm những thành phần cấu tạo nào?",
    "options": [
      "Nhiều cây quyết định được nối tiếp nhau thành một chuỗi Markov",
      "Một tập các mô hình cơ sở (base estimators / Level-0) và một mô hình tổng hợp siêu cấp (meta-learner / Level-1) học cách kết hợp dự đoán của các mô hình cơ sở",
      "Một bộ giải mã Transformer kết hợp cùng mạng tự hồi quy RNN",
      "Tập hợp các bộ phân loại được gán nhãn mã nhị phân ECOC"
    ],
    "answer": 1,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nStacking hoạt động theo kiến trúc 2 tầng (hoặc nhiều tầng): Tầng Level-0 gồm các mô hình đa dạng (SVM, Random Forest, KNN, MLP...). Dự đoán của các mô hình Level-0 được dùng làm đặc trưng đầu vào cho mô hình Level-1 (Meta-model / Blender, thường là Logistic Regression hoặc Ridge) để đưa ra quyết định cuối.",
    "chapterTitle": "Chương 15: Seminar - Nâng cao Ensemble Learning & Stacking",
    "slideRef": "Seminar Nhóm 12 (Ensemble & Stacking)"
  },
  {
    "id": 600,
    "chapter": 15,
    "question": "Trong `StackingClassifier` của Scikit-Learn, cơ chế nào được sử dụng để tạo ra tập dữ liệu huấn luyện cho meta-learner nhằm triệt tiêu rủi ro rò rỉ dữ liệu (data leakage) và overfitting?",
    "options": [
      "Sử dụng dự đoán kiểm định chéo Out-of-Fold (K-Fold cross-validation predictions) từ các mô hình cơ sở",
      "Cho các mô hình cơ sở dự đoán trực tiếp trên chính toàn bộ tập train ban đầu",
      "Thêm nhiễu Gaussian trắng ngẫu nhiên vào nhãn mục tiêu",
      "Chia đôi tập dữ liệu và chỉ dùng một nửa để train Level-0"
    ],
    "answer": 0,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nNếu cho Level-0 dự đoán trên chính dữ liệu nó đã học, các dự đoán sẽ quá lạc quan (overfitting), khiến Meta-learner phụ thuộc sai lệch. Scikit-Learn chia tập train thành K-folds, mỗi fold được dự đoán bởi mô hình train trên K-1 folds còn lại (out-of-fold predictions) để sinh đặc trưng sạch cho Level-1.",
    "chapterTitle": "Chương 15: Seminar - Nâng cao Ensemble Learning & Stacking",
    "slideRef": "Seminar Nhóm 12 (Ensemble & Stacking)"
  },
  {
    "id": 601,
    "chapter": 15,
    "question": "Tham số `passthrough=True` trong `StackingClassifier`/`StackingRegressor` có ý nghĩa gì?",
    "options": [
      "Bỏ qua bước kiểm tra điều kiện hội tụ của meta-model",
      "Cho phép dữ liệu kiểm thử đi thẳng vào bước dự đoán mà không qua tiền xử lý",
      "Nối trực tiếp các đặc trưng huấn luyện gốc ban đầu $X$ cùng với các dự đoán của mô hình cơ sở để làm đầu vào cho meta-learner",
      "Tự động chuyển đổi toàn bộ bài toán phân loại thành hồi quy"
    ],
    "answer": 2,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nKhi `passthrough=True`, ma trận đầu vào cho meta-model ở Level-1 sẽ là $[X_{original}, \\hat{y}_{base1}, \\hat{y}_{base2}, ...]$. Điều này cho phép meta-learner vừa xem xét dự đoán của base models vừa tham chiếu lại bối cảnh của các đặc trưng gốc.",
    "chapterTitle": "Chương 15: Seminar - Nâng cao Ensemble Learning & Stacking",
    "slideRef": "Seminar Nhóm 12 (Ensemble & Stacking)"
  },
  {
    "id": 602,
    "chapter": 15,
    "question": "Sự khác biệt giữa `VotingClassifier(voting='hard')` và `VotingClassifier(voting='soft')` là gì?",
    "options": [
      "`hard` áp dụng cho hồi quy còn `soft` áp dụng cho phân loại",
      "`soft` yêu cầu tất cả các mô hình cơ sở phải là Random Forest",
      "`hard` chỉ sử dụng khi số lượng mô hình cơ sở là số chẵn",
      "`hard` dựa trên đa số phiếu bầu của các nhãn dự đoán (majority voting); còn `soft` tính trung bình cộng xác suất dự đoán (predicted probabilities) của các mô hình và chọn nhãn có xác suất cao nhất"
    ],
    "answer": 3,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nHard voting đếm số lượng mô hình dự đoán mỗi class và chọn class nhiều phiếu nhất (chỉ cần hàm `.predict()`). Soft voting lấy trung bình trọng số của xác suất dự đoán (cần hàm `.predict_proba()`), thường đem lại hiệu năng phân loại cao hơn vì tận dụng được độ tự tin của mô hình.",
    "chapterTitle": "Chương 15: Seminar - Nâng cao Ensemble Learning & Stacking",
    "slideRef": "Seminar Nhóm 12 (Ensemble & Stacking)"
  },
  {
    "id": 603,
    "chapter": 15,
    "question": "Kỹ thuật Pasting khác với Bagging ở điểm nào?",
    "options": [
      "Pasting lấy mẫu con không hoàn lại (without replacement); trong khi Bagging lấy mẫu con có hoàn lại (with replacement)",
      "Pasting lấy mẫu trên các đặc trưng còn Bagging lấy mẫu trên các hàng dữ liệu",
      "Pasting sử dụng cây quyết định còn Bagging sử dụng SVM",
      "Pasting chỉ áp dụng cho dữ liệu văn bản"
    ],
    "answer": 0,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nTrong `BaggingClassifier(bootstrap=True)` là Bagging (lấy mẫu có hoàn lại). Nếu đặt `bootstrap=False` thì kỹ thuật đó gọi là Pasting (lấy mẫu tập con ngẫu nhiên không hoàn lại).",
    "chapterTitle": "Chương 15: Seminar - Nâng cao Ensemble Learning & Stacking",
    "slideRef": "Seminar Nhóm 12 (Ensemble & Stacking)"
  },
  {
    "id": 604,
    "chapter": 15,
    "question": "Phương pháp Random Patches và Random Subspaces trong Ensemble Learning lấy mẫu như thế nào?",
    "options": [
      "Random Patches chỉ dùng cho xử lý ảnh còn Random Subspaces dùng cho âm thanh",
      "Random Subspaces dùng cho mô hình tuyến tính còn Random Patches dùng cho cây",
      "Random Patches lấy mẫu ngẫu nhiên cả quan sát (samples) lẫn đặc trưng (features); Random Subspaces giữ nguyên toàn bộ mẫu nhưng lấy mẫu ngẫu nhiên trên đặc trưng",
      "Cả hai phương pháp đều loại bỏ 90% dữ liệu ngẫu nhiên"
    ],
    "answer": 2,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nTrong Scikit-Learn: Lấy mẫu cả samples và features gọi là Random Patches (thường dùng khi dữ liệu vừa nhiều dòng vừa nhiều cột). Giữ toàn bộ samples (`bootstrap=False`, `max_samples=1.0`) nhưng lấy tập con features (`max_features < 1.0`) gọi là Random Subspaces.",
    "chapterTitle": "Chương 15: Seminar - Nâng cao Ensemble Learning & Stacking",
    "slideRef": "Seminar Nhóm 12 (Ensemble & Stacking)"
  },
  {
    "id": 605,
    "chapter": 15,
    "question": "Tại sao trong Stacking, việc kết hợp các mô hình có bản chất thuật toán rất khác nhau (ví dụ: Cây quyết định + SVM + Tuyến tính + KNN) lại mang lại hiệu quả vượt trội hơn so với kết hợp các mô hình cùng loại?",
    "options": [
      "Vì các mô hình khác loại chạy song song nhanh hơn",
      "Vì các mô hình khác loại có không gian giả thuyết và cơ chế tạo sai số khác nhau (low error correlation), sai lầm của mô hình này được bù đắp bởi thế mạnh của mô hình khác",
      "Vì chuẩn hóa dữ liệu chỉ có tác dụng khi có ít nhất một mô hình tuyến tính",
      "Vì meta-learner chỉ hoạt động được khi các base models có độ phức tạp khác nhau"
    ],
    "answer": 1,
    "explanation": "### 🎯 Phân tích chi tiết & Bản chất:\nSức mạnh cốt lõi của Ensemble là tính đa dạng (diversity). Các mô hình có nguyên lý toán học khác nhau tạo ra các đường biên quyết định hoàn toàn khác nhau. Khi một mô hình bị đánh lừa bởi một dạng nhiễu cụ thể, các mô hình khác với bias khác sẽ không mắc cùng sai lầm đó, giúp meta-model đưa ra quyết định toàn diện nhất.",
    "chapterTitle": "Chương 15: Seminar - Nâng cao Ensemble Learning & Stacking",
    "slideRef": "Seminar Nhóm 12 (Ensemble & Stacking)"
  }
];
