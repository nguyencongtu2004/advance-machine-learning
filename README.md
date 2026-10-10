# HỆ THỐNG ÔN THI TRẮC NGHIỆM HỌC MÁY TIÊN TIẾN & ỨNG DỤNG (UIT)
## Kỳ thi Trắc nghiệm Đề đóng 100 câu — Ngày 21/10

---

## Giới Thiệu
Ứng dụng Web tĩnh (Offline Single Page Application - SPA) được thiết kế chuyên biệt để phục vụ việc ôn luyện cấp tốc cho kỳ thi **Học máy tiên tiến và ứng dụng** (Trường ĐH Công nghệ Thông tin - ĐHQG-HCM), bám sát 6 bộ slide bài giảng của **TS. Hà Minh Tân** (~520 trang).

Ứng dụng chạy hoàn toàn **offline tại máy cục bộ (Local)**, không phụ thuộc vào internet hay bất kỳ backend server nào. Mọi tiến độ học tập, câu đã làm, điểm thi thử và sổ tay câu sai đều được lưu trữ tự động trên trình duyệt (`localStorage`).

Hỗ trợ **chuyển đổi 2 giao diện Sáng (Light Mode) và Tối (Dark Mode)**, giao diện tối giản gọn gàng, không bị rối mắt bởi emoji.

---

## Hướng Dẫn Khởi Chạy Nhanh

Bạn chỉ cần thực hiện 1 thao tác duy nhất:
1. Mở thư mục `web/`.
2. **Nhấp đúp chuột (Double-click)** vào file [`index.html`](file:///c:/Users/LENOVO/OneDrive%20-%20Tr%C6%B0%E1%BB%9Dng%20%C4%90H%20CNTT%20-%20University%20of%20Information%20Technology/_H%E1%BB%8Dc%20m%C3%A1y%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%E1%BB%A9ng%20d%E1%BB%A5ng/%C3%B4n%20t%E1%BA%ADp%2021-10/web/index.html).
3. Ứng dụng sẽ tự động mở bằng trình duyệt mặc định của bạn (Google Chrome, Microsoft Edge, Brave, Cốc Cốc, Firefox...).

> [!NOTE]
> Không cần cài đặt Node.js, Python server, Apache hay XAMPP. Toàn bộ logic chạy trên JavaScript Vanilla chuẩn của trình duyệt.

---

## Cấu Trúc Thư Mục `web/`

```
web/
├── index.html          # Khung giao diện chính (SPA gồm 6 Tabs chức năng, nút Sáng/Tối)
├── style.css           # Hệ thống giao diện Dark / Light Mode tối giản, sạch sẽ
├── data_questions.js   # Ngân hàng 240 câu hỏi trắc nghiệm chuẩn kèm giải thích & trang slide
├── app.js              # Xử lý toàn bộ logic: chấm điểm, giải thích, chuyển theme, localStorage
└── README.md           # Tài liệu hướng dẫn sử dụng chi tiết này
```

---

## Phân Bổ Ngân Hàng 240 Câu Hỏi Theo 6 Chương

Ngân hàng câu hỏi được chia theo 6 chương, trong đó **các chương trọng tâm (Chương 3, 4, 6)** được tăng cường mật độ câu hỏi và các dạng bẫy trắc nghiệm:

| Chương | Tên chương & Nội dung trọng tâm | Số lượng câu | Trọng số đề thi 100 câu |
| :---: | :--- | :---: | :---: |
| **Chương 1** | **Tổng quan về Học máy**: Định nghĩa T-E-P (Tom Mitchell), Phân loại ML, Train/Val/Test, K-Fold CV | **30 câu** | 10 câu |
| **Chương 2** | **Tiền xử lý & PCA**: Dữ liệu khuyết, Ngoại lai IQR/Z-score, Min-Max, Standard Scaler, PCA 7 bước & EVR | **30 câu** | 12 câu |
| **Chương 3** | **Tuyến tính & Đánh giá** (Trọng tâm): OLS nghiệm đóng & ma trận suy biến, Ridge (L2), Lasso (L1), Elastic Net, Logistic Regression, Cross-Entropy gradient, Confusion Matrix, ROC-AUC, Micro/Macro F1 | **55 câu** | **25 câu** |
| **Chương 4** | **Cây quyết định & Ensemble** (Trọng tâm): Entropy, Gain Ratio (C4.5), Gini (CART), Cắt tỉa cây, Bagging, Random Forest OOB & $m=\sqrt{d}$, AdaBoost cập nhật trọng số, GBDT tối ưu phần dư | **50 câu** | **22 câu** |
| **Chương 5** | **Bài toán Phân cụm**: K-Means cực tiểu WCSS, Khởi tạo K-Means++, Hệ số Silhouette $[-1, 1]$, GMM & thuật toán EM, DBSCAN mật độ | **30 câu** | 13 câu |
| **Chương 6** | **MLP & Backpropagation** (Trọng tâm): Perceptron giới hạn XOR, Kích hoạt Sigmoid, Tanh, ReLU, Leaky ReLU, Softmax; Triệt tiêu gradient, Lan truyền ngược Chain Rule, GD variants, Momentum, Adam, Đếm tham số | **45 câu** | **18 câu** |
| **TỔNG CỘNG** | **Bám sát toàn diện 520 trang bài giảng** | **240 CÂU** | **100 CÂU** |

---

## Các Tính Năng Nổi Bật

### 1. Chuyển đổi linh hoạt Giao diện Sáng (Light Mode) / Tối (Dark Mode)
- Bấm nút **Sáng / Tối** trên thanh điều hướng để đổi theme ngay lập tức theo sở thích làm việc ban ngày hay ban đêm.
- Tự động ghi nhớ lựa chọn giao diện vào `localStorage`.

### 2. Giải thích tức thì ngay sau khi chọn đáp án
- Trong chế độ **Luyện tập**, khi bạn bấm chọn một đáp án (A, B, C, D):
  - Hệ thống **lập tức highlight** đáp án đúng (màu xanh lá) và đáp án sai (màu đỏ nếu bạn chọn nhầm).
  - Khối giải thích hiển thị ngay:
    - **Trạng thái:** Báo chính xác hay chưa chính xác.
    - **Slide trích dẫn:** Ghi rõ số trang slide bài giảng của thầy (ví dụ: `Slide Chương 3, Trang 48`).
    - **Phân tích lý thuyết chuyên sâu:** Giải thích cơ chế vì sao đáp án đó đúng và phân tích các phương án nhiễu (bẫy đề thi).

### 2. ⏱️ Chế độ Thi thử 100 câu bấm giờ (Mock Exam Simulator)
- Tự động rút ngẫu nhiên **100 câu hỏi** từ ngân hàng dữ liệu theo đúng tỷ lệ đề thi (10 - 12 - 25 - 22 - 13 - 18 câu).
- Cài đặt thời gian: **60 phút** (chuẩn áp lực phòng thi), **90 phút**, hoặc **45 phút** (phản xạ nhanh).
- Tùy chọn chế độ xem:
  - *Chỉ hiện giải thích sau khi nộp bài* (Mô phỏng thi thật nghiêm túc).
  - *Hiện giải thích ngay sau mỗi câu* (Vừa thi vừa học).
- Sau khi nộp bài:
  - Chấm điểm chuẩn xác theo thang điểm 10.0 và xếp loại năng lực.
  - Phân tích biểu đồ % chính xác theo từng chương (nhận diện ngay chương yếu để tập trung cải thiện).
  - Xem lại chi tiết toàn bộ 100 câu: Bạn chọn gì, Đáp án đúng là gì và Giải thích chi tiết.
  - Tự động lưu tất cả câu trả lời sai vào **Sổ tay câu sai**.

### 3. 📕 Sổ tay câu sai (Mistakes Notebook)
- Tự động tập hợp những câu bạn đã từng trả lời sai ở các phần Luyện tập và Thi thử.
- Cho phép bạn làm lại từng câu. Khi đã nắm chắc kiến thức và trả lời đúng, bấm **"✓ Đã nắm vững"** để loại bỏ câu hỏi ra khỏi danh sách.

### 4. ⭐ Danh sách đánh dấu quan trọng
- Bấm vào icon ngôi sao `☆` ở bất kỳ câu hỏi nào để lưu lại các câu bẫy kinh điển, công thức hay quên nhằm ôn lại nhanh vào đêm trước ngày thi.

### 5. 🃏 Lật thẻ Flashcards 3D
- 240 thẻ flashcard lật 3D: Mặt trước là đề bài, click vào thẻ (hoặc bấm phím `Space`) sẽ lật sang mặt sau để xem đáp án đúng và lời giải cô đọng.

---

## ⌨️ Bảng Phím Tắt Điều Khiển Nhanh

| Phím bấm | Chức năng trong Luyện tập / Thi thử | Chức năng trong Flashcards |
| :---: | :--- | :--- |
| **`1`** hoặc **`A`** | Chọn phương án **A** | — |
| **`2`** hoặc **`B`** | Chọn phương án **B** | — |
| **`3`** hoặc **`C`** | Chọn phương án **C** | — |
| **`4`** hoặc **`D`** | Chọn phương án **D** | — |
| **`Mũi tên Phải`** / **`N`** | Chuyển sang **Câu tiếp theo** | Chuyển sang **Thẻ tiếp theo** |
| **`Mũi tên Trái`** / **`P`** | Quay lại **Câu trước đó** | Quay lại **Thẻ trước đó** |
| **`S`** | Bật / tắt **Đánh dấu sao ⭐** câu hiện tại | — |
| **`Space`** hoặc **`Enter`** | — | **Lật thẻ 3D** xem đáp án |

---

## 💾 Cơ Chế Lưu Trữ Dữ Liệu (`localStorage`)

Toàn bộ dữ liệu của bạn được lưu an toàn trong trình duyệt thông qua các khóa:
- `ml_exam_user_answers_v2`: Lịch sử câu hỏi đã làm và kết quả.
- `ml_exam_wrong_ids_v2`: Danh sách ID các câu làm sai.
- `ml_exam_starred_ids_v2`: Danh sách ID các câu đã đánh dấu sao.
- `ml_exam_history_v2`: Lịch sử các bài thi thử đã nộp.

Nếu muốn xóa toàn bộ lịch sử để bắt đầu lại từ con số 0, bạn chỉ cần bấm nút **"🔄 Reset"** ở góc trên bên phải thanh điều hướng.

---

Chúc bạn ôn tập hiệu quả và đạt điểm $\ge 8.5/10$ trong kỳ thi ngày 21/10 sắp tới! 🎓
