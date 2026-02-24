const resultWindow = document.getElementById('result-window');
const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const messageWindow = document.getElementById('message-window');

let counter = 0;

function updateUI() {
    resultWindow.textContent = counter;

    // Смена цвета фона
    if (counter > 0) {
        resultWindow.style.backgroundColor = 'yellow';
    } else if (counter < 0) {
        resultWindow.style.backgroundColor = 'green';
    } else {
        resultWindow.style.backgroundColor = 'red';
    }

    // Проверка границ и управление кнопками
    if (counter === 10) {
        btnPlus.disabled = true;
        messageWindow.textContent = "вы достигли экстремального значения";
    } else if (counter === -10) {
        btnMinus.disabled = true;
        messageWindow.textContent = "вы достигли экстремального значения";
    } else {
        btnPlus.disabled = false;
        btnMinus.disabled = false;
        messageWindow.textContent = "";
    }
}

btnPlus.addEventListener('click', function() {
    if (counter < 10) {
        counter++;
        updateUI();
    }
});

btnMinus.addEventListener('click', function() {
    if (counter > -10) {
        counter--;
        updateUI();
    }
});

// Запуск при загрузке
updateUI();