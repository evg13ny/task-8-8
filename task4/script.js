const textField = document.querySelector('#textField');

textField.addEventListener('click', (event) => {
    textField.textContent = prompt('Введите текст:');
    event.preventDefault();
});