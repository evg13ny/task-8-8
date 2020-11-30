const textField = document.querySelector('#textField');

textField.addEventListener('keyup', (event) => {
    duplicateField.textContent = textField.value;
});


const flick = document.querySelector('#flick');

flick.addEventListener('click', (event) => {
    console.log(textField.value);
    textField.value = '';
    duplicateField.textContent = '';
    event.preventDefault();
});