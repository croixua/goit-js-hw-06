const controlsRef = document.querySelector('#controls');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');
const inputRef = controlsRef.firstElementChild;

createBtn.addEventListener('click', onInputValue);
destroyBtn.addEventListener('click', destroyBoxes);

function onInputValue() {
  const amount = inputRef.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    let size = 30 + i * 10;

    const color = getRandomHexColor();
    const box = document.createElement('div');

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;

    boxes.push(box);
  }

  boxesRef.append(...boxes);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
