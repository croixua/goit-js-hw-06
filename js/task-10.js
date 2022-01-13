const boxesRef = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', createBoxes);

function createBoxes(amount) {
  let width = '30px';
  let height = '30px';
  const color = getRandomHexColor();
  const box = document.createElement('div');

  box.style.width = width;
  box.style.height = height;
  box.style.backgroundColor = color;

  boxesRef.append(box);

  const array = [];
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
