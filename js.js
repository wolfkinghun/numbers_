export function genrandNumber(minNr, maxNr) {
    return Math.floor(Math.random()*(maxNr-minNr+1))+minNr
}

let found = false
export function compare(guessedNr, randomNr) {
    if (+document.getElementById('attempts').textContent == 0) return "Elfogyott az életed!"
    if (found) return
    if (guessedNr == "") return "Adj meg egy számot!"
    else if (guessedNr > randomNr) {
        document.getElementById('attempts').textContent = +document.getElementById('attempts').textContent - 1
        if (+document.getElementById('attempts').textContent == 0) return "Elfogyott az életed!"
        return "A te számod nagyobb."
    }
    else if (randomNr > guessedNr) {
        document.getElementById('attempts').textContent = +document.getElementById('attempts').textContent - 1
        if (+document.getElementById('attempts').textContent == 0) return "Elfogyott az életed!"
        return "A te számod kisebb."
    }
    else return "Helyes megfejtés."
}