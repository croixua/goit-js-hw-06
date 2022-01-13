const changeColorBtnRef = document.querySelector('.change-color');
const colorTextValueRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');

changeColorBtnRef.addEventListener('click', changeColor);

function changeColor() {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = `${color}`;
  colorTextValueRef.textContent = `${color}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
