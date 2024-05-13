const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            display.value += button.textContent;
        } else if (button.classList.contains('operator')) {
            display.value += ` ${button.textContent} `;
        } else if (button.classList.contains('clear')) {
            display.value = '';
        } else if (button.classList.contains('plus-minus')) {
            display.value *= -1;
        } else if (button.classList.contains('radical')) {
            display.value = Math.sqrt(display.value);
        } else if (button.classList.contains('evaluate')) {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Ошибка';
            }
        }
    });
}