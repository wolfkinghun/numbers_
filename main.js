import {genrandNumber, compare} from "./js.js"
        

let randNum;
const ans = document.querySelector('.ans')
const guessedNum = document.getElementById('guessedNum')
const check = document.querySelector('.check')


addEventListener("DOMContentLoaded", (event) => {
    randNum = genrandNumber(1, 100) // Change this later.
    console.log(randNum); // Teszt - Delete
});

guessedNum.addEventListener('keydown', function(event) {
    if (event.key === 'e' || event.key === 'E') event.preventDefault()
});

function calcAns() {
    ans.textContent = compare(guessedNum.value, randNum)
}

check.addEventListener('click', calcAns)