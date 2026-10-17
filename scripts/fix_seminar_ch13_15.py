import json
import os
import re
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
QUESTIONS_DIR = os.path.join(ROOT_DIR, 'data', 'questions')

SEMINAR_META = {
    13: {
        "chapterTitle": "Chương 13: Seminar - Nâng cao Cây quyết định Scikit-Learn",
        "slideRef": "Seminar Nhóm 02 (Decision Trees)"
    },
    14: {
        "chapterTitle": "Chương 14: Seminar - Nâng cao Tuyến tính & Phân rã SVD/QR",
        "slideRef": "Seminar Nhóm 08 (Linear Models)"
    },
    15: {
        "chapterTitle": "Chương 15: Seminar - Nâng cao Ensemble Learning & Stacking",
        "slideRef": "Seminar Nhóm 12 (Ensemble & Stacking)"
    }
}

def clean_option(opt):
    # Xóa prefix A. B. C. D. hoặc A) B) C) D)
    return re.sub(r'^[A-D][.)]\s*', '', opt).strip()

def fix_chapter(ch_num):
    filepath = os.path.join(QUESTIONS_DIR, f'chuong_{ch_num}.js')
    if not os.path.exists(filepath):
        print(f"Không tìm thấy {filepath}")
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Trích xuất JSON từ window.QUESTIONS_CHUONG_X = [...]
    match = re.search(r'window\.QUESTIONS_CHUONG_\d+\s*=\s*(\[[\s\S]*\]);?', content)
    if not match:
        print(f"Không trích xuất được JSON từ {filepath}")
        return

    data = json.loads(match.group(1))
    meta = SEMINAR_META.get(ch_num, {})

    target_pattern = [1, 2, 0, 3, 2, 1, 0, 3, 1, 0, 2, 3, 0, 2, 1]

    for i, q in enumerate(data):
        raw_options = q.get('options', [])
        # Trong dữ liệu cũ, phương án đúng luôn là phương án đầu tiên (A)
        correct_text = clean_option(raw_options[0])
        distractor1 = clean_option(raw_options[1]) if len(raw_options) > 1 else ""
        distractor2 = clean_option(raw_options[2]) if len(raw_options) > 2 else ""
        distractor3 = clean_option(raw_options[3]) if len(raw_options) > 3 else ""

        # Chọn vị trí đáp án đúng theo quy luật phân tán đều A, B, C, D
        target_idx = target_pattern[i % len(target_pattern)]

        distractors = [distractor1, distractor2, distractor3]
        new_options = []
        d_idx = 0
        for pos in range(4):
            if pos == target_idx:
                new_options.append(correct_text)
            else:
                new_options.append(distractors[d_idx])
                d_idx += 1

        q['options'] = new_options
        q['answer'] = target_idx
        q['chapterTitle'] = meta.get('chapterTitle', f"Chương {ch_num}")
        q['slideRef'] = meta.get('slideRef', f"Seminar Chương {ch_num}")

        # Thêm header markdown nếu chưa có trong explanation
        if not q['explanation'].startswith('###'):
            q['explanation'] = f"### 🎯 Phân tích chi tiết & Bản chất:\n{q['explanation']}"

    # Ghi lại file JS
    var_name = f"QUESTIONS_CHUONG_{ch_num}"
    new_content = f"/* ==============================================================================\n" \
                  f"   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM - {meta.get('chapterTitle', f'CHƯƠNG {ch_num}')}\n" \
                  f"   - Số lượng: {len(data)} câu (Đã chuẩn hóa đáp án số & phân bổ đều A/B/C/D)\n" \
                  f"============================================================================== */\n\n" \
                  f"window.{var_name} = {json.dumps(data, ensure_ascii=False, indent=2)};\n"

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"✓ Đã sửa hoàn chỉnh {filepath}: {len(data)} câu, answers phân bổ: {[q['answer'] for q in data]}")

if __name__ == '__main__':
    fix_chapter(13)
    fix_chapter(14)
    fix_chapter(15)
