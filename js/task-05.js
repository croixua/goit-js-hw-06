const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const DEFAULT_NAME = 'Anonymous';

textInput.addEventListener('input', event => {
  event.currentTarget.value === ''
    ? (output.textContent = DEFAULT_NAME)
    : (output.textContent = event.currentTarget.value);
});
