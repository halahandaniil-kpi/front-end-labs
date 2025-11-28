// Завдання 1: Зміна кольору при кліку
const elementById = document.getElementById('targetElement1'); 
const elementByQuery = document.querySelector('#targetElement2'); 
function toggleStyle(event) {
    event.currentTarget.classList.toggle('clicked-style');
}
if (elementById) {
    elementById.addEventListener('click', toggleStyle);
}
if (elementByQuery) {
    elementByQuery.addEventListener('click', toggleStyle);
}

// Завдання 2: Керування зображенням
const imageContainer = document.querySelector('a');
const addBtn = document.getElementById('addImageBtn');
const increaseBtn = document.getElementById('increaseSizeBtn');
const decreaseBtn = document.getElementById('decreaseSizeBtn');
const deleteBtn = document.getElementById('deleteImageBtn');

const defaultSrc = "https://tourinform.org.ua/wp-content/uploads/2022/05/279595712_359423186216028_4299996720014435233_n.jpg";
const defaultAlt = "Замок Паланок у Мукачево";
const sizeStep = 50;

// Функція "Додати зображення"
addBtn.addEventListener('click', () => {
    if (!document.getElementById('palankaImage')) {
        const img = document.createElement('img');
        img.id = 'palankaImage';
        img.src = defaultSrc;
        img.alt = defaultAlt;
        img.height = 400;
        imageContainer.appendChild(img); 
        alert('Зображення додано!');
    } else {
        alert('Зображення вже присутнє на сторінці.');
    }
});

// Функція "Збільшити зображення"
increaseBtn.addEventListener('click', () => {
    const img = document.getElementById('palankaImage');
    if (img) {
        img.height = img.height + sizeStep; 
    } else {
        alert('Зображення відсутнє. Натисніть "Додати зображення".');
    }
});

// Функція "Зменшити зображення"
decreaseBtn.addEventListener('click', () => {
    const img = document.getElementById('palankaImage');
    if (img) {
        img.height = Math.max(50, img.height - sizeStep); 
    } else {
        alert('Зображення відсутнє. Натисніть "Додати зображення".');
    }
});

// Функція "Видалити зображення"
deleteBtn.addEventListener('click', () => {
    const img = document.getElementById('palankaImage');
    if (img) {
        img.remove(); 
        alert('Зображення видалено!');
    } else {
        alert('Зображення вже відсутнє.');
    }
});