const value = document.querySelector(".value");
const inputValue = document.querySelector(".input-value");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
let userInput=1;

inputValue.addEventListener('change', (event) => {
    userInput = event.target.value;
});

add.addEventListener('click', () => {
    value.textContent = Number(value.textContent)+Number(userInput);
})

subtract.addEventListener('click', () => {
    value.textContent = Number(value.textContent)-Number(userInput);
})

reset.addEventListener('click', () => {
    userInput = 0;
    inputValue.value = 0;
    value.textContent = 0;
})