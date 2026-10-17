import json
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

OUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'data', 'questions')
os.makedirs(OUT_DIR, exist_ok=True)

# -------------------------------------------------------------
# CHƯƠNG 13: Seminar - Nâng cao Cây quyết định Scikit-Learn (Nhóm 02)
# IDs: 561 - 575 (15 câu)
# -------------------------------------------------------------
questions_ch13 = [
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
        "explanation": "Hàm chi phí tỉa cành là $R_\\alpha(T) = R(T) + \\alpha |T|$, trong đó $R(T)$ là tổng độ vẩn đục/sai số và $|T|$ là số lượng nút lá. Tham số `ccp_alpha` ($\ge 0$) điều khiển mức độ phạt kích thước cây. $\\alpha = 0$ là cây không tỉa, $\\alpha$ càng lớn cây càng bị cắt gọt nhiều."
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
        "explanation": "Vì các nhát cắt luôn vuông góc với các trục tọa độ ($x_j \le \\theta$), khi đường ranh giới thực tế nghiêng một góc chéo so với các trục, cây quyết định phải tạo ra vô số bậc thang zigzag để xấp xỉ, dẫn đến cây quá sâu và giảm khả năng tổng quát hóa."
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
]

# -------------------------------------------------------------
# CHƯƠNG 14: Seminar - Nâng cao Mô hình Tuyến tính & Phân rã SVD/QR (Nhóm 08)
# IDs: 576 - 590 (15 câu)
# -------------------------------------------------------------
questions_ch14 = [
    {
        "id": 576,
        "chapter": 14,
        "question": "Nghiệm giải tích phương trình pháp tuyến (Normal Equations) của hồi quy tuyến tính bình phương cực tiểu OLS là gì?",
        "options": [
            "A. $\\hat{w} = (X^T X)^{-1} X^T y$",
            "B. $\\hat{w} = (X X^T)^{-1} X y$",
            "C. $\\hat{w} = X^T (X X^T) y$",
            "D. $\\hat{w} = (X^T y)^{-1} X^T X$"
        ],
        "answer": "A",
        "explanation": "Để tìm nghiệm tối thiểu hóa hàm mất mát bình phương tổng sai số $L(w) = \\|y - Xw\\|^2$, ta đạo hàm theo $w$ và cho bằng $0$: $-2 X^T (y - Xw) = 0 \\iff X^T X w = X^T y \\implies \\hat{w} = (X^T X)^{-1} X^T y$ khi $X^T X$ khả nghịch."
    },
    {
        "id": 577,
        "chapter": 14,
        "question": "Khi ma trận thiết kế $X$ xảy ra hiện tượng đa cộng tuyến hoàn hảo (multicollinearity), điều gì xảy ra với ma trận hiệp phương sai $X^T X$?",
        "options": [
            "A. $X^T X$ trở nên suy biến (singular), định thức bằng 0 và không tồn tại ma trận nghịch đảo thông thường $(X^T X)^{-1}$",
            "B. $X^T X$ trở thành ma trận đường chéo đơn vị",
            "C. Các giá trị riêng (eigenvalues) của $X^T X$ đều tiến tới vô cùng",
            "D. Sai số huấn luyện $R^2$ lập tức giảm về 0"
        ],
        "answer": "A",
        "explanation": "Đa cộng tuyến hoàn hảo khiến các cột của $X$ phụ thuộc tuyến tính, hạng ma trận rank($X$) < $p$, dẫn đến ma trận vuông $X^T X$ bị suy biến (không đủ hạng, định thức det = 0), không thể nghịch đảo trực tiếp."
    },
    {
        "id": 578,
        "chapter": 14,
        "question": "Số điều kiện (Condition Number $\\kappa(X)$) của ma trận đo lường điều gì trong bài toán giải hệ phương trình tuyến tính?",
        "options": [
            "A. Độ nhạy của nghiệm hồi quy đối với những biến thiên hoặc nhiễu nhỏ trong dữ liệu đầu vào ($X$ hoặc $y$)",
            "B. Số lượng giá trị khuyết tật (missing values) trong ma trận $X$",
            "C. Tỉ số giữa số lượng hàng và số lượng cột của $X$",
            "D. Tỉ lệ mẫu dương so với mẫu âm trong bài toán phân loại"
        ],
        "answer": "A",
        "explanation": "Số điều kiện $\\kappa(A) = \\|A\\| \\|A^{-1}\\| = \\sigma_{max} / \\sigma_{min}$. Nếu $\\kappa(A)$ rất lớn (ill-conditioned), ma trận gần suy biến và một thay đổi cực nhỏ ở đầu vào cũng làm nghiệm biến đổi khổng lồ, gây mất ổn định số học."
    },
    {
        "id": 579,
        "chapter": 14,
        "question": "Trong thực tế cài đặt thư viện (`scipy.linalg.lstsq` được Scikit-Learn `LinearRegression` gọi bên dưới), giải pháp số học nào được sử dụng thay vì nghịch đảo trực tiếp $(X^T X)^{-1}$?",
        "options": [
            "A. Phân rã giá trị suy biến SVD (Singular Value Decomposition) hoặc phân rã QR",
            "B. Phương pháp nhân ma trận Strassen",
            "C. Thuật toán quy hoạch nguyên (Integer Linear Programming)",
            "D. Giải thuật di truyền (Genetic Algorithm)"
        ],
        "answer": "A",
        "explanation": "Tính trực tiếp $(X^T X)^{-1}$ làm bình phương số điều kiện (từ $\\kappa(X)$ lên $\\kappa(X)^2$), gây tổn thất chính xác số học nghiêm trọng. Các thư viện đại số tuyến tính chuẩn sử dụng SVD (tính giả nghịch đảo Moore-Penrose $X^+$) hoặc phân rã QR để đảm bảo tính ổn định số học cao nhất."
    },
    {
        "id": 580,
        "chapter": 14,
        "question": "Với phân tích giá trị suy biến $X = U \\Sigma V^T$, ma trận giả nghịch đảo Moore-Penrose $X^+$ được tính như thế nào?",
        "options": [
            "A. $X^+ = V \\Sigma^+ U^T$, trong đó $\\Sigma^+$ được tạo bằng cách lấy nghịch đảo các giá trị kỳ dị khác 0",
            "B. $X^+ = U \\Sigma^{-1} V$",
            "C. $X^+ = (U^T V) \\Sigma$",
            "D. $X^+ = V^T \\Sigma^+ U$"
        ],
        "answer": "A",
        "explanation": "Từ $X = U \\Sigma V^T$, ma trận giả nghịch đảo là $X^+ = V \\Sigma^+ U^T$. Nghiệm bình phương cực tiểu ổn định nhất luôn là $\\hat{w} = X^+ y$."
    },
    {
        "id": 581,
        "chapter": 14,
        "question": "Hồi quy Ridge (Tikhonov Regularization) giải quyết triệt để vấn đề ma trận suy biến bằng cách thêm số hạng nào vào ma trận cần nghịch đảo?",
        "options": [
            "A. Thêm ma trận đường chéo $\\alpha I$, chuyển thành $(X^T X + \\alpha I)^{-1}$",
            "B. Nhân ma trận với hệ số tỉ lệ $\\alpha$",
            "C. Trừ đi ma trận đơn vị $(X^T X - \\alpha I)^{-1}$",
            "D. Thay thế các phần tử ngoại đường chéo bằng 0"
        ],
        "answer": "A",
        "explanation": "Công thức nghiệm Ridge là $\\hat{w}_{ridge} = (X^T X + \\alpha I)^{-1} X^T y$. Vì $X^T X$ là ma trận nửa xác định dương (bán xác định dương), khi cộng thêm $\\alpha I$ (với $\\alpha > 0$), ma trận trở thành xác định dương nghiêm ngặt (strictly positive definite), đảm bảo luôn luôn khả nghịch."
    },
    {
        "id": 582,
        "chapter": 14,
        "question": "Vì sao hàm mất mát của Lasso ($L_1$ regularization) không thể giải bằng phương trình đạo hàm giải tích đóng như Ridge?",
        "options": [
            "A. Vì hàm chuẩn $L_1$ ($\\|w\\|_1 = \\sum |w_j|$) không khả vi tại điểm gốc tọa độ $w_j = 0$",
            "B. Vì Lasso có vô số nghiệm địa phương không hội tụ",
            "C. Vì Lasso yêu cầu số mẫu phải nhỏ hơn số đặc trưng",
            "D. Vì ma trận đạo hàm bậc hai Hessian của Lasso luôn bằng 0"
        ],
        "answer": "A",
        "explanation": "Hàm giá trị tuyệt đối $|w|$ có góc nhọn tại 0 và không có đạo hàm tại đó (chỉ có dưới đạo hàm - subgradient). Do đó không thể triệt tiêu gradient bậc nhất để giải nghiệm đóng, mà phải dùng thuật toán số như Coordinate Descent hoặc LARS."
    },
    {
        "id": 583,
        "chapter": 14,
        "question": "Thuật toán tối ưu hóa mặc định được Scikit-Learn sử dụng để huấn luyện mô hình `Lasso` là gì?",
        "options": [
            "A. Tọa độ giảm dần (Coordinate Descent)",
            "B. Adam Optimizer",
            "C. L-BFGS-B",
            "D. Đạo hàm ngẫu nhiên phân rã QR"
        ],
        "answer": "A",
        "explanation": "Scikit-Learn sử dụng thuật toán Coordinate Descent (hạ tọa độ theo từng biến riêng lẻ với toán tử ngưỡng mềm soft-thresholding) để giải bài toán tối ưu Lasso lồi."
    },
    {
        "id": 584,
        "chapter": 14,
        "question": "Thuật toán LARS (Least Angle Regression) trong thư viện hồi quy tuyến tính có ưu điểm nổi bật nào khi tìm toàn bộ đường nghiệm Lasso (Lasso path)?",
        "options": [
            "A. Xây dựng toàn bộ nghiệm thưa hiệu quả với chi phí tính toán tương đương một lần chạy OLS thông thường",
            "B. Tự động xử lý biến dạng chuỗi văn bản không cần nhúng",
            "C. Luôn luôn chọn tất cả đặc trưng cùng lúc mà không làm triệt tiêu hệ số nào",
            "D. Khử hoàn toàn hiện tượng overfitting mà không cần tập validation"
        ],
        "answer": "A",
        "explanation": "LARS di chuyển theo hướng phân giác đều (equiangular) tạo bởi các đặc trưng tương quan nhất với phần dư. Khi kết hợp với điều kiện Lasso, nó sinh ra toàn bộ lộ trình nghiệm (regularization path) của Lasso một cách cực kỳ nhanh chóng."
    },
    {
        "id": 585,
        "chapter": 14,
        "question": "Mô hình `MultiTaskLasso` trong Scikit-Learn giải quyết bài toán hồi quy đa mục tiêu bằng cách ràng buộc đặc trưng nào?",
        "options": [
            "A. Sử dụng chuẩn hỗn hợp $L_{2,1}$ để chọn chung cùng một tập các đặc trưng hữu ích cho tất cả các nhiệm vụ đầu ra (joint feature selection)",
            "B. Huấn luyện các mô hình Lasso độc lập trên từng biến mục tiêu",
            "C. Ghép nối tất cả biến mục tiêu thành một chuỗi duy nhất",
            "D. Sử dụng mạng nơ-ron hồi quy với hàm kích hoạt softmax"
        ],
        "answer": "A",
        "explanation": "`MultiTaskLasso` áp dụng chuẩn hỗn hợp Frobenius/L21 norm lên ma trận trọng số $W$. Nó ép nguyên cả một hàng của ma trận $W$ về 0, nghĩa là nếu một đặc trưng bị loại thì sẽ bị loại đồng thời trên tất cả các biến mục tiêu đầu ra."
    },
    {
        "id": 586,
        "chapter": 14,
        "question": "Trong mô hình `ElasticNet`, tham số `l1_ratio` đại diện cho điều gì?",
        "options": [
            "A. Tỉ lệ cân bằng giữa số hạng phạt L1 (Lasso) và L2 (Ridge) trong hàm mất mát",
            "B. Tỉ lệ giữa kích thước tập huấn luyện và kiểm tra",
            "C. Tỉ số giữa learning rate và số lượng epoch",
            "D. Ngưỡng cắt tỉa cây quyết định"
        ],
        "answer": "A",
        "explanation": "Hàm phạt của ElasticNet là $\\alpha \\cdot [\\text{l1\\_ratio} \\|w\\|_1 + \\frac{1 - \\text{l1\\_ratio}}{2} \\|w\\|_2^2]$. Khi `l1_ratio=1` mô hình trở thành thuần Lasso, khi `l1_ratio=0` mô hình trở thành thuần Ridge."
    },
    {
        "id": 587,
        "chapter": 14,
        "question": "Hồi quy Huber (`HuberRegressor`) trong các biến thể tuyến tính giải quyết nhược điểm nào của hồi quy OLS chuẩn?",
        "options": [
            "A. Rất mạnh mẽ chống lại nhiễu ngoại lai (robust to outliers) nhờ chuyển từ hàm mất mát bậc 2 sang bậc 1 tuyến tính khi sai số vượt quá ngưỡng $\\epsilon$",
            "B. Giảm số chiều dữ liệu tự động mà không cần chuẩn hóa",
            "C. Tự động tính toán ma trận tương quan giữa các nhãn",
            "D. Huấn luyện nhanh hơn OLS trên dữ liệu nhỏ"
        ],
        "answer": "A",
        "explanation": "OLS sử dụng sai số bình phương nên các điểm ngoại lai bị phạt theo hàm bậc hai cực lớn, kéo lệch đường hồi quy. Huber loss dùng sai số bậc hai cho phần dư nhỏ ($|e| \\le \\epsilon$) và sai số bậc nhất tuyến tính cho phần dư lớn, giúp mô hình miễn nhiễm với nhiễu ngoại lai."
    },
    {
        "id": 588,
        "chapter": 14,
        "question": "Phân rã QR của ma trận thiết kế $X = Q R$ có cấu trúc hai ma trận $Q$ và $R$ như thế nào?",
        "options": [
            "A. $Q$ là ma trận trực giao ($Q^T Q = I$) và $R$ là ma trận tam giác trên khả nghịch",
            "B. $Q$ là ma trận đường chéo và $R$ là ma trận đối xứng",
            "C. $Q$ là ma trận ngẫu nhiên và $R$ là ma trận nghịch đảo của $X$",
            "D. Cả $Q$ và $R$ đều là ma trận đơn vị"
        ],
        "answer": "A",
        "explanation": "Phân rã QR tách $X$ thành ma trận trực giao $Q$ ($Q^T Q = I$) và ma trận tam giác trên $R$. Khi đó hệ phương trình bình phương cực tiểu trở thành $R w = Q^T y$, giải cực kỳ nhanh và ổn định bằng phép thế ngược (back substitution)."
    },
    {
        "id": 589,
        "chapter": 14,
        "question": "Tham số `fit_intercept=False` trong `LinearRegression` nên được sử dụng trong tình huống nào?",
        "options": [
            "A. Khi dữ liệu $X$ và $y$ đã được trừ trung bình (centered/standardized) hoặc bài toán bắt buộc đường hồi quy phải đi qua gốc tọa độ $(0, 0)$",
            "B. Khi ma trận $X$ có nhiều biến phân loại dạng One-Hot",
            "C. Khi số chiều $p$ lớn hơn số quan sát $n$",
            "D. Khi huấn luyện mô hình trên GPU"
        ],
        "answer": "A",
        "explanation": "Nếu dữ liệu đã được trừ trung bình (mean-centered) thì hệ số chặn bias bằng 0. Nếu đặt `fit_intercept=False`, mô hình không thêm cột hệ số tự do $w_0$ và đường hồi quy bắt buộc đi qua gốc tọa độ."
    },
    {
        "id": 590,
        "chapter": 14,
        "question": "Vì sao việc chuẩn hóa đặc trưng (Feature Scaling) lại đặc biệt bắt buộc đối với Ridge và Lasso nhưng không làm thay đổi nghiệm dự đoán của OLS thuần túy (về mặt toán học)?",
        "options": [
            "A. Vì số hạng phạt chuẩn $\\|w\\|_1$ và $\\|w\\|_2^2$ phạt công bằng mọi trọng số; nếu đặc trưng có thang đo lớn, trọng số tự nhiên của nó sẽ nhỏ và ít bị phạt hơn đặc trưng có thang đo nhỏ",
            "B. Vì OLS không thể hội tụ nếu dữ liệu chưa chuẩn hóa",
            "C. Vì Lasso chỉ chấp nhận đầu vào trong khoảng $[0, 1]$",
            "D. Vì chuẩn hóa làm ma trận $X^T X$ trở thành ma trận đơn vị"
        ],
        "answer": "A",
        "explanation": "Trong OLS, việc đổi đơn vị (thang đo) của đặc trưng chỉ làm hệ số $w_j$ tỉ lệ nghịch lại mà không đổi hàm mất mát. Nhưng trong Regularization, $\\lambda \\sum w_j^2$ phạt mọi $w$ ngang nhau, nên đặc trưng có đơn vị nhỏ (giá trị số lớn $\\to$ trọng số $w$ bé) sẽ né được án phạt, còn đặc trưng đơn vị lớn (trọng số $w$ to) bị phạt oan. Do đó chuẩn hóa là tiên quyết."
    }
]

# -------------------------------------------------------------
# CHƯƠNG 15: Seminar - Nâng cao Ensemble Learning & Stacking (Nhóm 12)
# IDs: 591 - 605 (15 câu)
# -------------------------------------------------------------
questions_ch15 = [
    {
        "id": 591,
        "chapter": 15,
        "question": "Định lý Bồi thẩm đoàn Condorcet (Condorcet's Jury Theorem) - nền tảng lý thuyết xác suất của Ensemble Learning - phát biểu điều gì?",
        "options": [
            "A. Nếu mỗi người đánh giá độc lập có xác suất đúng $p > 0.5$, thì khi tăng số lượng người tham gia bỏ phiếu theo đa số, xác suất phán quyết tập thể chính xác sẽ tiến dần tới 1 (100%)",
            "B. Nếu các mô hình cơ sở phụ thuộc tuyến tính vào nhau thì sai số tổng thể luôn bằng 0",
            "C. Tập hợp các mô hình yếu chỉ mạnh lên khi tất cả cùng mắc chung một loại sai lầm",
            "D. Kích thước tập huấn luyện tối thiểu của ensemble phải gấp đôi số lượng cây con"
        ],
        "answer": "A",
        "explanation": "Condorcet's Jury Theorem chỉ ra rằng chỉ cần các bộ phân loại cá nhân độc lập và có độ chính xác nhỉnh hơn đoán mò ngẫu nhiên ($p > 0.5$), thì luật đa số (majority voting) của một tập thể đủ lớn sẽ hội tụ về độ chính xác tiệm cận tuyệt đối 1."
    },
    {
        "id": 592,
        "chapter": 15,
        "question": "Trong kỹ thuật Bagging (Bootstrap Aggregating) với kích thước tập dữ liệu $n$, khi $n$ tiến ra vô cùng, tỉ lệ phần trăm các mẫu không bao giờ được chọn vào một túi con (Out-of-Bag - OOB samples) là khoảng bao nhiêu?",
        "options": [
            "A. Khoảng 36.8% (xấp xỉ $1/e$)",
            "B. Khoảng 50.0%",
            "C. Khoảng 10.0%",
            "D. Khoảng 63.2%"
        ],
        "answer": "A",
        "explanation": "Xác suất một mẫu không được rút trong $n$ lần rút có hoàn lại là $(1 - 1/n)^n$. Khi $n \\to \\infty$, $\\lim_{n \\to \\infty} (1 - 1/n)^n = e^{-1} \\approx 0.367879$ (36.8%). Khoảng 63.2% dữ liệu được chọn vào túi bootstrap, và 36.8% còn lại làm tập kiểm tra OOB."
    },
    {
        "id": 593,
        "chapter": 15,
        "question": "Tính năng đánh giá OOB (Out-of-Bag score) trong `RandomForestClassifier(oob_score=True)` đem lại lợi ích lớn nào trong thực tế?",
        "options": [
            "A. Cung cấp một ước lượng khách quan về độ chính xác kiểm thử tương đương cross-validation mà không cần phải tốn công chia tập validation riêng biệt",
            "B. Tăng tốc độ huấn luyện của cây gấp đôi",
            "C. Tự động loại bỏ các thuộc tính bị thiếu dữ liệu",
            "D. Đảm bảo mô hình đạt 100% độ chính xác trên tập kiểm tra"
        ],
        "answer": "A",
        "explanation": "Vì khoảng 37% số mẫu trong mỗi cây hoàn toàn không được dùng để huấn luyện cây đó, ta có thể dùng chính những mẫu OOB này để kiểm tra chéo từng cây và tính điểm tổng thể (OOB score), đóng vai trò như một bộ kiểm định độc lập hoàn toàn miễn phí."
    },
    {
        "id": 594,
        "chapter": 15,
        "question": "Điểm khác biệt cốt lõi giữa Random Forest và mô hình Cây ngẫu nhiên cực độ (Extra-Trees / Extremely Randomized Trees) trong Scikit-Learn là gì?",
        "options": [
            "A. Extra-Trees sinh ngẫu nhiên luôn cả ngưỡng cắt (split threshold) cho từng đặc trưng ứng viên thay vì đi tìm ngưỡng cắt tối ưu nhất như Random Forest",
            "B. Extra-Trees sử dụng mạng nơ-ron để tìm điểm phân nhánh",
            "C. Extra-Trees chỉ cho phép cây có độ sâu tối đa bằng 2",
            "D. Extra-Trees không áp dụng được cho bài toán hồi quy"
        ],
        "answer": "A",
        "explanation": "Trong khi Random Forest tìm ngưỡng phân chia tối ưu nhất trong số các đặc trưng con, Extra-Trees rút ngẫu nhiên hoàn toàn các ngưỡng cho mỗi đặc trưng và chỉ chọn ngưỡng tốt nhất trong số các ngưỡng ngẫu nhiên đó. Kỹ thuật này giúp giảm variance nhiều hơn nữa và huấn luyện nhanh hơn đáng kể."
    },
    {
        "id": 595,
        "chapter": 15,
        "question": "Trong thuật toán AdaBoost (Adaptive Boosting), trọng số của các mẫu dữ liệu được cập nhật như thế nào sau mỗi vòng lặp của mô hình yếu?",
        "options": [
            "A. Các mẫu bị phân loại sai ở vòng trước được tăng trọng số lên, buộc mô hình ở vòng tiếp theo phải tập trung học sửa các lỗi này",
            "B. Các mẫu dự đoán đúng được tăng trọng số lên để củng cố niềm tin",
            "C. Tất cả các mẫu đều bị giảm trọng số về 0",
            "D. Trọng số của các mẫu được xáo trộn ngẫu nhiên"
        ],
        "answer": "A",
        "explanation": "AdaBoost điều chỉnh trọng số mẫu theo công thức $w_i \\leftarrow w_i \\exp(\\alpha_m)$ nếu đoán sai và $w_i \\leftarrow w_i \\exp(-\\alpha_m)$ nếu đoán đúng (với $\\alpha_m > 0$ là độ tin cậy của learner thứ $m$). Do đó, các mẫu khó/đoán sai nhận trọng số lớn hơn nhiều trong các vòng sau."
    },
    {
        "id": 596,
        "chapter": 15,
        "question": "Hệ số tin cậy $\\alpha_m$ của mô hình cơ sở thứ $m$ trong AdaBoost phụ thuộc vào tỉ lệ lỗi phân loại có trọng số $err_m$ theo công thức nào?",
        "options": [
            "A. $\\alpha_m = \\frac{1}{2} \\ln \\left(\\frac{1 - err_m}{err_m}\\right)$",
            "B. $\\alpha_m = 1 - err_m^2$",
            "C. $\\alpha_m = \\exp(-err_m)$",
            "D. $\\alpha_m = \\frac{err_m}{1 - err_m}$"
        ],
        "answer": "A",
        "explanation": "Công thức tính trọng số đóng góp của base estimator trong AdaBoost SAMME là $\\alpha_m = \\frac{1}{2} \\ln \\frac{1 - err_m}{err_m}$. Khi lỗi $err_m < 0.5$, $\\alpha_m > 0$; lỗi càng thấp thì $\\alpha_m$ càng lớn. Nếu mô hình đoán mò $err_m = 0.5$, $\\alpha_m = 0$."
    },
    {
        "id": 597,
        "chapter": 15,
        "question": "Điểm khác biệt căn bản trong chiến lược học giữa AdaBoost và Gradient Boosting là gì?",
        "options": [
            "A. AdaBoost điều chỉnh trọng số của mẫu dữ liệu sai; còn Gradient Boosting giữ nguyên trọng số mẫu nhưng khớp (fit) mô hình kế tiếp vào phần dư (residuals) hoặc gradient âm của hàm mất mát",
            "B. AdaBoost dùng cây quyết định còn Gradient Boosting dùng hồi quy tuyến tính",
            "C. Gradient Boosting chỉ chạy được trên một luồng CPU duy nhất",
            "D. AdaBoost giảm variance còn Gradient Boosting chỉ giảm bias"
        ],
        "answer": "A",
        "explanation": "Trong Gradient Boosting, thay vì cập nhật phân phối trọng số các điểm dữ liệu như AdaBoost, mỗi cây quyết định mới được huấn luyện để dự đoán phần dư sai số $y - \\hat{y}$ (chính là gradient âm $-\\frac{\\partial L}{\\partial \\hat{y}}$ của hàm mất mát)."
    },
    {
        "id": 598,
        "chapter": 15,
        "question": "Trong Gradient Boosting, siêu tham số `learning_rate` (còn gọi là hệ số co - shrinkage rate) có vai trò gì?",
        "options": [
            "A. Thu nhỏ sự đóng góp của mỗi cây bằng một hệ số nhân $\\eta \\in (0, 1]$, làm chậm quá trình học để giảm nguy cơ overfitting",
            "B. Điều chỉnh tốc độ cập nhật trọng số nơ-ron bằng phương pháp quán tính",
            "C. Tăng số lượng mẫu được lấy vào mỗi cây",
            "D. Tự động dừng sớm nếu sau $k$ vòng lặp kết quả không cải thiện"
        ],
        "answer": "A",
        "explanation": "Công thức cộng dồn của Gradient Tree Boosting là $\\hat{y}^{(m)} = \\hat{y}^{(m-1)} + \\eta \\cdot h_m(x)$. Hệ số $\\eta$ (learning rate) làm giảm bước nhảy của mỗi cây, cho phép nhiều cây cùng phối hợp nhịp nhàng và cải thiện khả năng tổng quát hóa."
    },
    {
        "id": 599,
        "chapter": 15,
        "question": "Kiến trúc mô hình xếp chồng (Stacking / Stacked Generalization) bao gồm những thành phần cấu tạo nào?",
        "options": [
            "A. Một tập các mô hình cơ sở (base estimators / Level-0) và một mô hình tổng hợp siêu cấp (meta-learner / Level-1) học cách kết hợp dự đoán của các mô hình cơ sở",
            "B. Nhiều cây quyết định được nối tiếp nhau thành một chuỗi Markov",
            "C. Một bộ giải mã Transformer kết hợp cùng mạng tự hồi quy RNN",
            "D. Tập hợp các bộ phân loại được gán nhãn mã nhị phân ECOC"
        ],
        "answer": "A",
        "explanation": "Stacking hoạt động theo kiến trúc 2 tầng (hoặc nhiều tầng): Tầng Level-0 gồm các mô hình đa dạng (SVM, Random Forest, KNN, MLP...). Dự đoán của các mô hình Level-0 được dùng làm đặc trưng đầu vào cho mô hình Level-1 (Meta-model / Blender, thường là Logistic Regression hoặc Ridge) để đưa ra quyết định cuối."
    },
    {
        "id": 600,
        "chapter": 15,
        "question": "Trong `StackingClassifier` của Scikit-Learn, cơ chế nào được sử dụng để tạo ra tập dữ liệu huấn luyện cho meta-learner nhằm triệt tiêu rủi ro rò rỉ dữ liệu (data leakage) và overfitting?",
        "options": [
            "A. Sử dụng dự đoán kiểm định chéo Out-of-Fold (K-Fold cross-validation predictions) từ các mô hình cơ sở",
            "B. Cho các mô hình cơ sở dự đoán trực tiếp trên chính toàn bộ tập train ban đầu",
            "C. Thêm nhiễu Gaussian trắng ngẫu nhiên vào nhãn mục tiêu",
            "D. Chia đôi tập dữ liệu và chỉ dùng một nửa để train Level-0"
        ],
        "answer": "A",
        "explanation": "Nếu cho Level-0 dự đoán trên chính dữ liệu nó đã học, các dự đoán sẽ quá lạc quan (overfitting), khiến Meta-learner phụ thuộc sai lệch. Scikit-Learn chia tập train thành K-folds, mỗi fold được dự đoán bởi mô hình train trên K-1 folds còn lại (out-of-fold predictions) để sinh đặc trưng sạch cho Level-1."
    },
    {
        "id": 601,
        "chapter": 15,
        "question": "Tham số `passthrough=True` trong `StackingClassifier`/`StackingRegressor` có ý nghĩa gì?",
        "options": [
            "A. Nối trực tiếp các đặc trưng huấn luyện gốc ban đầu $X$ cùng với các dự đoán của mô hình cơ sở để làm đầu vào cho meta-learner",
            "B. Bỏ qua bước kiểm tra điều kiện hội tụ của meta-model",
            "C. Cho phép dữ liệu kiểm thử đi thẳng vào bước dự đoán mà không qua tiền xử lý",
            "D. Tự động chuyển đổi toàn bộ bài toán phân loại thành hồi quy"
        ],
        "answer": "A",
        "explanation": "Khi `passthrough=True`, ma trận đầu vào cho meta-model ở Level-1 sẽ là $[X_{original}, \\hat{y}_{base1}, \\hat{y}_{base2}, ...]$. Điều này cho phép meta-learner vừa xem xét dự đoán của base models vừa tham chiếu lại bối cảnh của các đặc trưng gốc."
    },
    {
        "id": 602,
        "chapter": 15,
        "question": "Sự khác biệt giữa `VotingClassifier(voting='hard')` và `VotingClassifier(voting='soft')` là gì?",
        "options": [
            "A. `hard` dựa trên đa số phiếu bầu của các nhãn dự đoán (majority voting); còn `soft` tính trung bình cộng xác suất dự đoán (predicted probabilities) của các mô hình và chọn nhãn có xác suất cao nhất",
            "B. `hard` áp dụng cho hồi quy còn `soft` áp dụng cho phân loại",
            "C. `soft` yêu cầu tất cả các mô hình cơ sở phải là Random Forest",
            "D. `hard` chỉ sử dụng khi số lượng mô hình cơ sở là số chẵn"
        ],
        "answer": "A",
        "explanation": "Hard voting đếm số lượng mô hình dự đoán mỗi class và chọn class nhiều phiếu nhất (chỉ cần hàm `.predict()`). Soft voting lấy trung bình trọng số của xác suất dự đoán (cần hàm `.predict_proba()`), thường đem lại hiệu năng phân loại cao hơn vì tận dụng được độ tự tin của mô hình."
    },
    {
        "id": 603,
        "chapter": 15,
        "question": "Kỹ thuật Pasting khác với Bagging ở điểm nào?",
        "options": [
            "A. Pasting lấy mẫu con không hoàn lại (without replacement); trong khi Bagging lấy mẫu con có hoàn lại (with replacement)",
            "B. Pasting lấy mẫu trên các đặc trưng còn Bagging lấy mẫu trên các hàng dữ liệu",
            "C. Pasting sử dụng cây quyết định còn Bagging sử dụng SVM",
            "D. Pasting chỉ áp dụng cho dữ liệu văn bản"
        ],
        "answer": "A",
        "explanation": "Trong `BaggingClassifier(bootstrap=True)` là Bagging (lấy mẫu có hoàn lại). Nếu đặt `bootstrap=False` thì kỹ thuật đó gọi là Pasting (lấy mẫu tập con ngẫu nhiên không hoàn lại)."
    },
    {
        "id": 604,
        "chapter": 15,
        "question": "Phương pháp Random Patches và Random Subspaces trong Ensemble Learning lấy mẫu như thế nào?",
        "options": [
            "A. Random Patches lấy mẫu ngẫu nhiên cả quan sát (samples) lẫn đặc trưng (features); Random Subspaces giữ nguyên toàn bộ mẫu nhưng lấy mẫu ngẫu nhiên trên đặc trưng",
            "B. Random Patches chỉ dùng cho xử lý ảnh còn Random Subspaces dùng cho âm thanh",
            "C. Random Subspaces dùng cho mô hình tuyến tính còn Random Patches dùng cho cây",
            "D. Cả hai phương pháp đều loại bỏ 90% dữ liệu ngẫu nhiên"
        ],
        "answer": "A",
        "explanation": "Trong Scikit-Learn: Lấy mẫu cả samples và features gọi là Random Patches (thường dùng khi dữ liệu vừa nhiều dòng vừa nhiều cột). Giữ toàn bộ samples (`bootstrap=False`, `max_samples=1.0`) nhưng lấy tập con features (`max_features < 1.0`) gọi là Random Subspaces."
    },
    {
        "id": 605,
        "chapter": 15,
        "question": "Tại sao trong Stacking, việc kết hợp các mô hình có bản chất thuật toán rất khác nhau (ví dụ: Cây quyết định + SVM + Tuyến tính + KNN) lại mang lại hiệu quả vượt trội hơn so với kết hợp các mô hình cùng loại?",
        "options": [
            "A. Vì các mô hình khác loại có không gian giả thuyết và cơ chế tạo sai số khác nhau (low error correlation), sai lầm của mô hình này được bù đắp bởi thế mạnh của mô hình khác",
            "B. Vì các mô hình khác loại chạy song song nhanh hơn",
            "C. Vì chuẩn hóa dữ liệu chỉ có tác dụng khi có ít nhất một mô hình tuyến tính",
            "D. Vì meta-learner chỉ hoạt động được khi các base models có độ phức tạp khác nhau"
        ],
        "answer": "A",
        "explanation": "Sức mạnh cốt lõi của Ensemble là tính đa dạng (diversity). Các mô hình có nguyên lý toán học khác nhau tạo ra các đường biên quyết định hoàn toàn khác nhau. Khi một mô hình bị đánh lừa bởi một dạng nhiễu cụ thể, các mô hình khác với bias khác sẽ không mắc cùng sai lầm đó, giúp meta-model đưa ra quyết định toàn diện nhất."
    }
]

def save_js(filename, var_name, data):
    filepath = os.path.join(OUT_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(f"// Bộ câu hỏi {filename}\n")
        f.write(f"window.{var_name} = ")
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    print(f"Đã tạo {filename}: {len(data)} câu ({var_name})")

if __name__ == '__main__':
    save_js('chuong_13.js', 'QUESTIONS_CHUONG_13', questions_ch13)
    save_js('chuong_14.js', 'QUESTIONS_CHUONG_14', questions_ch14)
    save_js('chuong_15.js', 'QUESTIONS_CHUONG_15', questions_ch15)
