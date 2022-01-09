const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')
const btnReset = document.querySelector('.reset-btn')
const value = document.querySelector('#value')

let counterValue = 0;

btnDecrement.addEventListener('click', decrementValue)
btnIncrement.addEventListener('click', incrementValue)
btnReset.addEventListener('click', resetValue)

function decrementValue() {
    counterValue -= 1
    return value.textContent = counterValue
}

function incrementValue() {
    counterValue += 1
    return value.textContent = counterValue
}

function resetValue() {
    counterValue = 0
    return value.textContent = counterValue
}

