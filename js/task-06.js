const inputRef = document.querySelector('#validation-input');
const inputSymbolsLength = document.querySelector('[data-length="6"]');

inputRef.addEventListener('blur', blurInput);

function blurInput(event) {
  const length = Number(inputSymbolsLength.dataset.length);
  if (length === event.currentTarget.value.length) {
    inputRef.classList.remove('invalid');
    return inputRef.classList.add('valid');
  }
  inputRef.classList.add('invalid');
}
