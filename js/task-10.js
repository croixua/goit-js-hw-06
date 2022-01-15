const inputRef = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

createBtn.addEventListener('click', onInputValue);
destroyBtn.addEventListener('click', destroyBoxes);

function onInputValue() {
  createBoxes(inputRef.value);
}

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    let size = 30 + i * 10;

    const color = getRandomHexColor();
    const boxEl = document.createElement('div');

    boxEl.style.width = `${size}px`;
    boxEl.style.height = `${size}px`;
    boxEl.style.backgroundColor = color;

    boxes.push(boxEl);
  }

  boxesRef.append(...boxes);
  inputRef.value = '';
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
