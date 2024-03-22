import {genrandNumber} from "./js.js"
        
let randNum;
addEventListener("DOMContentLoaded", (event) => {
    randNum = genrandNumber(1, 100) // Change this later.
    console.log(randNum);
});