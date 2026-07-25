// Khởi tạo tên lớp hiện tại mặc định
let currentClass = "Lớp 5A1";

// Định cấu hình định dạng màu sắc cho từng tên môn học
const subjectMeta = {
    "Tiếng Việt": "color-tv", "Toán": "color-toan", "Ngoại ngữ": "color-nn",
    "Khoa học": "color-kh", "Lịch sử và Địa lý": "color-lsdl", "Nghệ thuật": "color-nt",
    "Thể dục": "color-td", "Đạo đức": "color-dd", "Tin học": "color-th",
    "Công nghệ": "color-cn", "Hoạt động trải nghiệm": "color-hdtn", "Giáo dục địa phương": "color-ggdp"
};

// Kho lưu trữ dữ liệu số tiết độc lập cho từng lớp học
const classSubjectsDatabase = {
    "Lớp 5A1": { "Tiếng Việt": 7, "Toán": 5, "Ngoại ngữ": 4, "Khoa học": 2, "Lịch sử và Địa lý": 2, "Nghệ thuật": 2, "Thể dục": 2, "Đạo đức": 1, "Tin học": 2, "Công nghệ": 1, "Hoạt động trải nghiệm": 1, "Giáo dục địa phương": 1 },
    "Lớp 5A2": { "Tiếng Việt": 7, "Toán": 5, "Ngoại ngữ": 4, "Khoa học": 2, "Lịch sử và Địa lý": 2, "Nghệ thuật": 2, "Thể dục": 2, "Đạo đức": 1, "Tin học": 2, "Công nghệ": 1, "Hoạt động trải nghiệm": 1, "Giáo dục địa phương": 1 },
    "Lớp 5A3": { "Tiếng Việt": 7, "Toán": 5, "Ngoại ngữ": 4, "Khoa học": 2, "Lịch sử và Địa lý": 2, "Nghệ thuật": 2, "Thể dục": 2, "Đạo đức": 1, "Tin học": 2, "Công nghệ": 1, "Hoạt động trải nghiệm": 1, "Giáo dục địa phương": 1 },
    "Lớp 5A4": { "Tiếng Việt": 7, "Toán": 5, "Ngoại ngữ": 4, "Khoa học": 2, "Lịch sử và Địa lý": 2, "Nghệ thuật": 2, "Thể dục": 2, "Đạo đức": 1, "Tin học": 2, "Công nghệ": 1, "Hoạt động trải nghiệm": 1, "Giáo dục địa phương": 1 },
    "Lớp 5A5": { "Tiếng Việt": 7, "Toán": 5, "Ngoại ngữ": 4, "Khoa học": 2, "Lịch sử và Địa lý": 2, "Nghệ thuật": 2, "Thể dục": 2, "Đạo đức": 1, "Tin học": 2, "Công nghệ": 1, "Hoạt động trải nghiệm": 1, "Giáo dục địa phương": 1 }

};

// Kho lưu trữ ma trận lịch học độc lập riêng cho từng lớp học
const classTKBDatabase = {
    "Lớp 5A1": [["Chào cờ", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", "Sinh hoạt lớp"], ["", "", "", "", "Nghỉ học"], ["", "", "", "", "Nghỉ học"], ["", "", "", "", "Nghỉ học"]],
    "Lớp 5A2": [["Chào cờ", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", "Sinh hoạt lớp"], ["", "", "", "", "Nghỉ học"], ["", "", "", "", "Nghỉ học"], ["", "", "", "", "Nghỉ học"]],
    "Lớp 5A3": [["Chào cờ", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", "Sinh hoạt lớp"], ["", "", "", "", "Nghỉ học"], ["", "", "", "", "Nghỉ học"], ["", "", "", "", "Nghỉ học"]],
    "Lớp 5A4": [["Chào cờ", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", "Sinh hoạt lớp"], ["", "", "", "", "Nghỉ học"], ["", "", "", "", "Nghỉ học"], ["", "", "", "", "Nghỉ học"]],
    "Lớp 5A5": [["Chào cờ", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", "Sinh hoạt lớp"], ["", "", "", "", "Nghỉ học"], ["", "", "", "", "Nghỉ học"], ["", "", "", "", "Nghỉ học"]]

};

// Đổi Tab lớp học khi nhấp chuột
function switchClass(className) {
    document.getElementById(`tab-${currentClass}`).classList.remove('active-tab');
    currentClass = className;
    document.getElementById(`tab-${currentClass}`).classList.add('active-tab');
    renderSubjects();
    renderTable();
}

// Hàm hiển thị Kho môn học của lớp hiện tại
function renderSubjects() {
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';
    let totalRemaining = 0;
    const currentSubjects = classSubjectsDatabase[currentClass];

    for (const [name, count] of Object.entries(currentSubjects)) {
        totalRemaining += count;
        const div = document.createElement('div');
        const sClass = subjectMeta[name] || '';

        if (count > 0) {
            div.className = `p-3 rounded-xl border-4 font-bold text-sm flex justify-between items-center transition-all subject-tag ${sClass}`;
            div.setAttribute('draggable', 'true');
            div.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text/plain', name); });
            div.innerHTML = `<span>${name}</span><span class="badge-count px-2 py-0.5 rounded-md text-xs font-bold">${count} tiết</span>`;
        } else {
            div.className = `p-3 rounded-xl border-4 border-dashed border-slate-200 text-slate-300 font-bold text-sm flex justify-between items-center select-none pointer-events-none`;
            div.innerHTML = `<span>${name}</span><span class="badge-count px-2 py-0.5 rounded-md text-xs font-bold border-slate-200 text-slate-200">0</span>`;
        }
        container.appendChild(div);
    }
    document.getElementById('total-badge').innerText = `${totalRemaining} tiết cần xếp`;
}

// Hàm hiển thị lưới bảng lịch của lớp hiện tại
function renderTable() {
    const tbody = document.querySelector('#tkb-table tbody');
    tbody.innerHTML = '';
    const currentTKB = classTKBDatabase[currentClass];
    const currentSubjects = classSubjectsDatabase[currentClass];

    currentTKB.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');

        const tdTiet = document.createElement('td');
        tdTiet.className = "text-center font-bold border-4 border-slate-800 rounded-2xl bg-slate-100 text-slate-600 text-xs";
        tdTiet.innerText = `Tiết ${rowIndex + 1}`;
        tr.appendChild(tdTiet);

        row.forEach((cellValue, colIndex) => {
            const td = document.createElement('td');

            const isChàoCờ = rowIndex === 0 && colIndex === 0 && cellValue === "Chào cờ";
            const isSinhHoạt = rowIndex === 3 && colIndex === 4 && cellValue === "Sinh hoạt lớp";
            const isNghỉHọc = cellValue === "Nghỉ học";

            if (isChàoCờ || isSinhHoạt) {
                td.className = "slot-fixed text-center";
                td.innerText = cellValue;
            } else if (isNghỉHọc) {
                td.className = "slot-disabled text-center";
                td.innerText = "Nghỉ học";
            } else {
                if (cellValue === "") {
                    td.className = "slot-empty";
                    td.addEventListener('dragover', (e) => { e.preventDefault(); td.classList.add('drag-over'); });
                    td.addEventListener('dragleave', () => td.classList.remove('drag-over'));
                    td.addEventListener('drop', (e) => {
                        e.preventDefault();
                        td.classList.remove('drag-over');
                        const subjectName = e.dataTransfer.getData('text/plain');

                        if (currentTKB[rowIndex][colIndex] === "" && currentSubjects[subjectName] && currentSubjects[subjectName] > 0) {
                            currentTKB[rowIndex][colIndex] = subjectName;
                            currentSubjects[subjectName]--;
                            renderSubjects();
                            renderTable();
                        }
                    });
                } else {
                    const sClass = subjectMeta[cellValue] || '';
                    td.innerHTML = `<div class="table-subject-card ${sClass}">${cellValue}</div>`;
                    td.addEventListener('click', () => {
                        currentSubjects[cellValue]++;
                        currentTKB[rowIndex][colIndex] = "";
                        renderSubjects();
                        renderTable();
                    });
                }
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}

// THUẬT TOÁN MỚI: Trải phẳng toàn bộ thời khóa biểu đa lớp theo hàng dọc giống 100% ảnh mẫu
function exportAllClassesToExcel() {
    // Định nghĩa hàng đầu tiên làm tiêu đề cột
    let excelRows = [
        ["Lớp", "", "5A1", "5A2", "5A3", "5A4", "5A5"],
        ["Thứ", "Tiết", "", "", ""]
    ];

    // Tạo cấu trúc 35 dòng rỗng tương ứng với 5 ngày (Thứ 2 - Thứ 6), mỗi ngày 7 tiết
    // Chỉ số ngày: 2 (Thứ 2) đến 6 (Thứ 6)
    // Chỉ số tiết: 1 đến 7
    for (let day = 2; day <= 6; day++) {
        for (let tiet = 1; tiet <= 7; tiet++) {
            // Đẩy dòng mẫu mới có sẵn số Thứ và số Tiết vào mảng, tạm thời để trống dữ liệu môn học
            excelRows.push([day, tiet, "", "", ""]);
        }
    }

    // Tiến hành đọc ma trận lịch của từng lớp để điền vào đúng vị trí dòng dọc
    const classOrder = ["5A1", "5A2", "5A3", "5A4", "5A5"];

    classOrder.forEach((className) => {
        const fullClassName = "Lớp " + className;
        const tkbMatrix = classTKBDatabase[fullClassName];

        // Xác định cột tương ứng trong Excel (Lớp 1A là cột chỉ số 2, 1B là cột 3, 1C là cột 4)
        const colIndexInExcel = classOrder.indexOf(className) + 2;

        if (tkbMatrix) {
            tkbMatrix.forEach((row, rowIndex) => {
                const tietNumber = rowIndex + 1; // Tiết 1 - 7

                row.forEach((cellValue, colIndex) => {
                    const dayNumber = colIndex + 2; // Thứ 2 - 6

                    // Tìm vị trí dòng chính xác trong excelRows dựa vào thuật toán định tuyến Thứ và Tiết
                    // Dòng tiêu đề chiếm 2 hàng đầu (index 0 và 1).
                    // Thuật toán: ((Thứ - 2) * 7) + (Tiết - 1) + 2 tiêu đề
                    const excelRowIndex = ((dayNumber - 2) * 7) + (tietNumber - 1) + 2;

                    // Điền tên môn học của lớp vào đúng ô lưới trục dọc
                    excelRows[excelRowIndex][colIndexInExcel] = cellValue;
                });
            });
        }
    });

    // Biên dịch dữ liệu mảng phẳng và tạo file tải về
    const worksheet = XLSX.utils.aoa_to_sheet(excelRows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Tổng Hợp Dạng Dọc");

    // Tự động căn rộng độ rộng cột
    const max_cols = excelRows.map((_, i) => excelRows.map(row => row[i] ? row[i].toString().length : 0).reduce((a, b) => Math.max(a, b), 0));
    worksheet['!cols'] = max_cols.map(w => ({ wch: w + 4 }));

    XLSX.writeFile(workbook, "TKB_TongHop_DangDoc.xlsx");
}

// Khởi chạy khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    renderSubjects();
    renderTable();
});