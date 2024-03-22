import {genrandNumber, compare} from "./js.js"
        

let randNum;
const result = document.querySelector('.result')
const guessedNum = document.getElementById('guessedNum')
const check = document.querySelector('.check')


addEventListener("DOMContentLoaded", (event) => {
    randNum = genrandNumber(1, 100) // Change this later.
    console.log(randNum); // Teszt - Delete
});

guessedNum.addEventListener('keydown', function(event) {
    if (event.key === 'e' || event.key === 'E') event.preventDefault()
});

guessedNum.addEventListener('blur', function(event) {
    if (guessedNum.value < +guessedNum.min) guessedNum.value = guessedNum.min
    if (guessedNum.value > +guessedNum.max) guessedNum.value = guessedNum.max
});

function calcAns() {
    result.textContent = compare(guessedNum.value, randNum)
}

check.addEventListener('click', calcAns)