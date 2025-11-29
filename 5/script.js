// Завдання 1: Валідація форми
document.getElementById('validationForm').addEventListener('submit', function(event) {
	event.preventDefault();
	validateForm();
});

function validateForm() {
	const fields = [
		{ id: 'pib', regex: /^[А-ЯІЄЇҐ][а-яієїґ]+\s[А-ЯІЄЇҐ]\.[А-ЯІЄЇҐ]\.$/, format: "Прізвище І.П. (Приклад: Шевченко Т.Г.)", label: "ПІБ" },
		{ id: 'phone', regex: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/, format: "(XXX)-XXX-XX-XX", label: "Телефон" },
		{ id: 'faculty', regex: /^[А-ЯІЄЇҐ]{1,4}$/, format: "До 4 великих українських літер (Приклад: ФІОТ)", label: "Факультет" },
		{ id: 'dob', regex: /^\d{2}\.\d{2}\.\d{4}$/, format: "DD.MM.YYYY", label: "Дата народження" },
		{ id: 'address', regex: /^м\.\s[А-ЯІЄЇҐ][а-яієїґ]+$/, format: "м. НазваМіста (Приклад: м. Харків)", label: "Адреса" }
	];
	let isFormValid = true;
	let outputData = "Введена інформація:\n\n";
	fields.forEach(field => {
		const inputElement = document.getElementById(field.id);
		const errorElement = document.getElementById(field.id + 'Error');
		const value = inputElement.value.trim();
		inputElement.classList.remove('error-field');
		errorElement.textContent = '';
		if (!field.regex.test(value)) {
			inputElement.classList.add('error-field');
			errorElement.textContent = `Помилка: Невірний формат. Очікується: ${field.format}`;
			isFormValid = false;
		} else {
			outputData += `${field.label}: ${value}\n`;
		}
	});
	if (isFormValid) {
		alert(outputData);
	}
}

// Завдання 2: Таблиця 6x6
const table = document.getElementById("grid");
const colorPicker = document.getElementById("picker");
const VARIANT = 6;

let n = 1;
for (let r = 0; r < 6; r++) {
    const row = table.insertRow();
    for (let c = 0; c < 6; c++) {
        const cell = row.insertCell();
        cell.textContent = n;
        cell.dataset.number = n;
        cell.dataset.row = r;
        cell.dataset.col = c;
        if (n === VARIANT) {
            addEvents(cell);
        }
        n++;
    }
}

function addEvents(cell) {
    cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = randomColor();
    });
    cell.addEventListener("click", () => {
        cell.style.backgroundColor = colorPicker.value;
    });
    cell.addEventListener("dblclick", () => {
        fillRectangleFrom(cell);
    });
}

function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
	// 16777215 - максимальне число кольорів у форматі HEX
}

function fillRectangleFrom(cell) {
    const startRow = Number(cell.dataset.row);
    const startCol = Number(cell.dataset.col);
    const chosenColor = colorPicker.value;
    for (let r = startRow; r < 6; r++) {
        for (let c = startCol; c < 6; c++) {
            const target = table.rows[r].cells[c];
            target.style.backgroundColor = chosenColor;
        }
    }
}
