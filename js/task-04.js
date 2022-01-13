const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnReset = document.querySelector('.reset-btn');
const value = document.querySelector('#value');

let counterValue = 0;

const decrementValue = () => (value.textContent = counterValue -= 1);
const incrementValue = () => (value.textContent = counterValue += 1);

btnDecrement.addEventListener('click', decrementValue);
btnIncrement.addEventListener('click', incrementValue);
btnReset.addEventListener('click', resetValue);

function resetValue() {
  counterValue = 0;
  value.textContent = counterValue;
}
