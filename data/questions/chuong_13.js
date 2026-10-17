// Bộ câu hỏi chuong_13.js
window.QUESTIONS_CHUONG_13 = [
  {
    "id": 561,
    "chapter": 13,
    "question": "Bản chất toán học của mô hình Cây quyết định (Decision Tree) trong bài toán hồi quy là gì?",
    "options": [
      "A. Một xấp xỉ hằng số từng đoạn (piecewise constant approximation) phân chia không gian đặc trưng thành các siêu hộp trực giao",
      "B. Một hàm liên tục khả vi bậc cao xấp xỉ không gian bằng đa thức",
      "C. Một tổ hợp tuyến tính các đặc trưng sau khi qua hàm phi tuyến sigmoid",
      "D. Một hàm siêu phẳng phân chia không gian tối đa hóa lề (maximum margin hyperplane)"
    ],
    "answer": "A",
    "explanation": "Decision Tree chia không gian đầu vào thành tập hợp các khối/siêu hộp trực giao (hyper-rectangles) song song với các trục tọa độ và gán một giá trị hằng số (thường là trung bình nhãn) cho mỗi vùng lá. Do đó nó tạo ra xấp xỉ hằng số từng đoạn (piecewise constant)."
  },
  {
    "id": 562,
    "chapter": 13,
    "question": "Trong thư viện Scikit-Learn (`DecisionTreeRegressor`), tiêu chí tách nhánh mặc định `criterion='squared_error'` tối thiểu hóa đại lượng nào tại mỗi bước phân chia?",
    "options": [
      "A. Tổng sai số bình phương dư thừa (Mean Squared Error / L2 loss) so với trung bình của mỗi nút con",
      "B. Tổng sai số tuyệt đối (Mean Absolute Error / L1 loss) so với trung vị của mỗi nút con",
      "C. Sai số tương đối phần trăm trung bình (MAPE)",
      "D. Khoảng cách Mahalanobis giữa hai nút con"
    ],
    "answer": "A",
    "explanation": "`criterion='squared_error'` (trước đây là 'mse') đo lường độ giảm của sai số bình phương trung bình (MSE), tức là tìm điểm chia sao cho tổng phương sai có trọng số của hai nút con là nhỏ nhất (tương đương tối đa hóa phương sai giải thích được)."
  },
  {
    "id": 563,
    "chapter": 13,
    "question": "Tiêu chí tách nhánh `criterion='friedman_mse'` trong Scikit-Learn thường được thiết kế chuyên biệt và tối ưu nhất cho mô hình nào?",
    "options": [
      "A. Gradient Boosting Regressor (cải thiện xấp xỉ MSE với điểm số Friedman)",
      "B. Logistic Regression",
      "C. Ordinary Least Squares",
      "D. Naive Bayes Classifier"
    ],
    "answer": "A",
    "explanation": "`friedman_mse` sử dụng phương pháp tính điểm cải tiến của Jerome Friedman, tối ưu hóa tốc độ và chất lượng phân tách đặc biệt phù hợp khi cây đóng vai trò là weak learner trong Gradient Boosting."
  },
  {
    "id": 564,
    "chapter": 13,
    "question": "Tham số `splitter='random'` khác biệt như thế nào so với `splitter='best'` trong `DecisionTreeClassifier`/`DecisionTreeRegressor` của Scikit-Learn?",
    "options": [
      "A. `best` đánh giá tất cả các ngưỡng phân chia của mọi đặc trưng để chọn tối ưu; còn `random` chọn ngẫu nhiên một ngưỡng cho mỗi đặc trưng rồi chọn đặc trưng tốt nhất, giúp chống overfitting và chạy nhanh hơn",
      "B. `random` xáo trộn ngẫu nhiên nhãn mục tiêu y trước khi huấn luyện",
      "C. `random` chia dữ liệu thành tập con ngẫu nhiên trước khi tính độ vẩn đục Gini",
      "D. `best` chỉ xét 1 đặc trưng ngẫu nhiên còn `random` xét tất cả đặc trưng"
    ],
    "answer": "A",
    "explanation": "`splitter='best'` duyệt qua mọi ngưỡng phân chia khả dĩ của tất cả đặc trưng (hoặc `max_features`) để tìm điểm phân chia hoàn hảo nhất. `splitter='random'` sinh ngưỡng ngẫu nhiên cho từng đặc trưng và chọn phân tách tốt nhất trong số đó, giảm độ phụ thuộc vào nhiễu và tăng tốc độ tính toán."
  },
  {
    "id": 565,
    "chapter": 13,
    "question": "Khi cây quyết định hồi quy gặp dữ liệu kiểm tra nằm ngoài miền giá trị cực trị của tập huấn luyện (extrapolation), hành vi dự đoán của cây sẽ như thế nào?",
    "options": [
      "A. Không thể ngoại suy xu hướng tuyến tính mà sẽ dự đoán bằng giá trị hằng số của nút lá tương ứng tại biên",
      "B. Tiếp tục ngoại suy tuyến tính theo độ dốc gần nhất",
      "C. Báo lỗi ngoại lệ Out-of-Range Exception trong Scikit-Learn",
      "D. Tự động chuyển đổi thành mô hình hồi quy bậc hai"
    ],
    "answer": "A",
    "explanation": "Cây quyết định hoàn toàn không thể ngoại suy (cannot extrapolate). Mọi điểm dữ liệu lớn hơn giá trị lớn nhất trong tập train đều rơi vào cùng một nút lá ngoài cùng và nhận cùng giá trị dự đoán hằng số của lá đó."
  },
  {
    "id": 566,
    "chapter": 13,
    "question": "Kỹ thuật tỉa cành Minimal Cost-Complexity Pruning (tỉa cành tối thiểu chi phí - độ phức tạp) trong Scikit-Learn được điều khiển thông qua tham số nào?",
    "options": [
      "A. `ccp_alpha`",
      "B. `alpha_pruning_ratio`",
      "C. `tree_l1_penalty`",
      "D. `cost_complexity_factor`"
    ],
    "answer": "A",
    "explanation": "Hàm chi phí tỉa cành là $R_\\alpha(T) = R(T) + \\alpha |T|$, trong đó $R(T)$ là tổng độ vẩn đục/sai số và $|T|$ là số lượng nút lá. Tham số `ccp_alpha` ($\\ge 0$) điều khiển mức độ phạt kích thước cây. $\\alpha = 0$ là cây không tỉa, $\\alpha$ càng lớn cây càng bị cắt gọt nhiều."
  },
  {
    "id": 567,
    "chapter": 13,
    "question": "Phương thức nào trong `DecisionTreeClassifier` cho phép trích xuất dãy các giá trị `ccp_alphas` hiệu dụng và độ vẩn đục tương ứng để dò tìm siêu tham số tối ưu?",
    "options": [
      "A. `cost_complexity_pruning_path(X, y)`",
      "B. `get_pruning_alphas()`",
      "C. `compute_effective_alphas(X, y)`",
      "D. `tree_prune_schedule()`"
    ],
    "answer": "A",
    "explanation": "Trong Scikit-Learn, hàm `tree.cost_complexity_pruning_path(X, y)` trả về `ccp_alphas` và `impurities`, biểu diễn các ngưỡng alpha làm xuất hiện các cây tỉa cành khác nhau dọc theo lộ trình cắt tỉa."
  },
  {
    "id": 568,
    "chapter": 13,
    "question": "Sự khác biệt căn bản giữa tham số `min_samples_split` và `min_samples_leaf` là gì?",
    "options": [
      "A. `min_samples_split` là số lượng mẫu tối thiểu cần có tại một nút để nút đó được phép phân chia tiếp; còn `min_samples_leaf` là số mẫu tối thiểu bắt buộc phải có ở mỗi nút con (nút lá) sau phân chia",
      "B. `min_samples_leaf` chỉ áp dụng cho phân loại, `min_samples_split` chỉ áp dụng cho hồi quy",
      "C. `min_samples_split` đo lường số đặc trưng, còn `min_samples_leaf` đo lường số mẫu",
      "D. Cả hai có vai trò hoàn toàn tương đương và có thể dùng thay thế nhau mà không đổi kết quả"
    ],
    "answer": "A",
    "explanation": "`min_samples_split` quy định điều kiện để một nút mẹ được xét chia nhánh. `min_samples_leaf` đảm bảo rằng bất kể chia theo ngưỡng nào, cả hai nút con tạo thành đều phải chứa ít nhất số mẫu này, giúp làm mượt mô hình và chống học vẹt các mẫu ngoại lai đơn lẻ."
  },
  {
    "id": 569,
    "chapter": 13,
    "question": "Độ phức tạp tính toán thời gian (time complexity) để xây dựng một cây quyết định cân bằng với $n$ mẫu và $p$ đặc trưng là bao nhiêu?",
    "options": [
      "A. $O(p \\cdot n \\log(n))$",
      "B. $O(n^3 \\cdot p)$",
      "C. $O(p^2 \\cdot \\log(n))$",
      "D. $O(2^n \\cdot p)$"
    ],
    "answer": "A",
    "explanation": "Tại mỗi tầng của cây, việc sắp xếp hoặc duyệt các mẫu tốn $O(n \\log n)$ hoặc $O(n)$ cho mỗi đặc trưng $p$, và một cây cân bằng có chiều sâu $O(\\log n)$. Tổng chi phí xây dựng cây xấp xỉ $O(p \\cdot n \\log n)$."
  },
  {
    "id": 570,
    "chapter": 13,
    "question": "Cây quyết định tiêu chuẩn sử dụng các phép phân tách trực giao (axis-aligned splits). Nhược điểm cố hữu lớn nhất của đặc tính này là gì?",
    "options": [
      "A. Rất nhạy cảm với phép quay hệ tọa độ của không gian dữ liệu; nếu đường biên quyết định có hướng chéo 45 độ, cây phải xấp xỉ dạng bậc thang rất phức tạp",
      "B. Không thể áp dụng cho các bài toán phân loại nhị phân",
      "C. Bắt buộc tất cả các đặc trưng phải chuẩn hóa StandardScaler trước khi huấn luyện",
      "D. Tốc độ suy luận (inference time) chậm hơn mạng nơ-ron sâu"
    ],
    "answer": "A",
    "explanation": "Vì các nhát cắt luôn vuông góc với các trục tọa độ ($x_j \\le \\theta$), khi đường ranh giới thực tế nghiêng một góc chéo so với các trục, cây quyết định phải tạo ra vô số bậc thang zigzag để xấp xỉ, dẫn đến cây quá sâu và giảm khả năng tổng quát hóa."
  },
  {
    "id": 571,
    "chapter": 13,
    "question": "Tham số `max_features` trong `DecisionTreeClassifier` của Scikit-Learn có tác dụng gì?",
    "options": [
      "A. Giới hạn số lượng đặc trưng được xem xét ngẫu nhiên khi tìm kiếm phép phân chia tốt nhất tại mỗi nút",
      "B. Lọc bỏ các đặc trưng có phương sai thấp trước khi bắt đầu huấn luyện",
      "C. Tự động áp dụng phân tích thành phần chính PCA để giảm chiều dữ liệu",
      "D. Giới hạn số lượng nhãn đầu ra tối đa của bài toán phân loại"
    ],
    "answer": "A",
    "explanation": "`max_features` quy định số đặc trưng tối đa được lấy mẫu ngẫu nhiên tại mỗi nút phân chia. Việc giảm `max_features` làm tăng tính ngẫu nhiên, giảm tương quan giữa các cây (cơ chế trọng tâm của Random Forest)."
  },
  {
    "id": 572,
    "chapter": 13,
    "question": "Trong Scikit-Learn, cây quyết định có cần bước chuẩn hóa dữ liệu (StandardScaler hoặc MinMaxScaler) không? Vì sao?",
    "options": [
      "A. Không cần, vì cây quyết định là mô hình bất biến với các phép biến đổi đơn điệu (monotonic transformations) trên từng đặc trưng riêng lẻ",
      "B. Rất cần, vì khoảng cách Euclidean giữa các điểm dữ liệu quyết định việc phân chia",
      "C. Bắt buộc với hồi quy, nhưng không cần với phân loại",
      "D. Bắt buộc nếu số lượng đặc trưng lớn hơn 100"
    ],
    "answer": "A",
    "explanation": "Cây quyết định chỉ quan tâm đến thứ tự xếp hạng (rank order) của các giá trị trên từng đặc trưng để chọn ngưỡng phân chia, chứ không tính khoảng cách độ lớn. Do đó bất kỳ biến đổi đơn điệu nào (như nhân hằng số dương, logarit, chuẩn hóa z-score) đều không làm thay đổi kết quả phân chia."
  },
  {
    "id": 573,
    "chapter": 13,
    "question": "Phương thức `export_text` và `export_graphviz` trong `sklearn.tree` dùng để làm gì?",
    "options": [
      "A. Trực quan hóa cấu trúc luật if-else và vẽ sơ đồ phân nhánh của cây quyết định đã huấn luyện",
      "B. Xuất trọng số mô hình sang định dạng ONNX",
      "C. Chuyển đổi cây quyết định thành mạng nơ-ron nhiều tầng",
      "D. Biên dịch cây quyết định sang mã máy C++ để chạy nhúng"
    ],
    "answer": "A",
    "explanation": "`export_text` in cấu trúc cây dưới dạng các dòng thụt lề if-else text, còn `export_graphviz` xuất file đồ thị Graphviz DOT để trực quan hóa cây thành biểu đồ nhánh đẹp mắt."
  },
  {
    "id": 574,
    "chapter": 13,
    "question": "Đặc trưng quan trọng (Feature Importances) trong Decision Tree của Scikit-Learn được tính toán dựa trên chỉ số nào?",
    "options": [
      "A. Tổng độ giảm độ vẩn đục Gini/MSE (Mean Decrease Impurity) chuẩn hóa do đặc trưng đó đem lại trên toàn bộ các nút phân chia",
      "B. Trị tuyệt đối của hệ số hồi quy góc nghiêng",
      "C. Hệ số tương quan Pearson giữa đặc trưng và nhãn mục tiêu",
      "D. Tỷ lệ phần trăm dữ liệu bị thiếu trong đặc trưng đó"
    ],
    "answer": "A",
    "explanation": "Feature importance trong scikit-learn (còn gọi là Gini importance hay MDI - Mean Decrease Impurity) được tính bằng tổng độ giảm độ vẩn đục có trọng số (weighted decrease in impurity) do đặc trưng đó mang lại khi dùng làm điểm cắt trên toàn bộ cây, chia cho tổng độ giảm của tất cả đặc trưng."
  },
  {
    "id": 575,
    "chapter": 13,
    "question": "Khi dữ liệu phân loại bị mất cân bằng nghiêm trọng (imbalanced classes), tham số nào trong `DecisionTreeClassifier` giúp cân bằng trọng số tự động tỉ lệ nghịch với tần suất nhãn?",
    "options": [
      "A. `class_weight='balanced'`",
      "B. `resample_data=True`",
      "C. `imbalance_ratio='auto'`",
      "D. `stratified_split=True`"
    ],
    "answer": "A",
    "explanation": "Thiết lập `class_weight='balanced'` sẽ tự động gán trọng số cho từng lớp tỉ lệ nghịch với tần số xuất hiện của lớp đó trong tập train theo công thức $n\\_samples / (n\\_classes * \\text{bincount}(y))$, giúp cây chú trọng hơn đến lớp thiểu số."
  }
];
