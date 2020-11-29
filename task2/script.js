const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
});


const Alert = document.querySelector('#Alert');

Alert.addEventListener('click', () => {
    alert('Простой способ вывести информацию');
});


const Promt = document.querySelector('#Promt');

Promt.addEventListener('click', () => {
    prompt('Используется для ввода текста');
});