const textField = document.querySelector('#textField');

textField.addEventListener('click', function(event) {
    this.textContent = prompt('Введите текст:');
    event.preventDefault();
});