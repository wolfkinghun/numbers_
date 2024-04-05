import {genrandNumber, compare} from "./js.js"
        

let randNumber;
const result = document.querySelector('.result')
const guessedNum = document.getElementById('guessedNum')
const check = document.querySelector('.check')


addEventListener("DOMContentLoaded", (event) => {
    randNumber = genrandNumber(1, 100)
    console.log(randNumber); // Teszt - Delete
});

guessedNum.addEventListener('keydown', function(event) {
    if (event.key === 'e' || event.key === 'E') event.preventDefault()
});

guessedNum.addEventListener('blur', function(event) {
    if (guessedNum.value < +guessedNum.min) guessedNum.value = guessedNum.min
    if (guessedNum.value > +guessedNum.max) guessedNum.value = guessedNum.max
});

check.addEventListener('click', (event) => {
    result.textContent = compare(guessedNum.value, randNumber)
})