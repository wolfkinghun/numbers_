export function genrandNumber(minNr, maxNr) {
    return Math.floor(Math.random()*(maxNr-minNr+1))+minNr
}

export function compare(guessedNr, randomNr) {
    if (guessedNr == "") return "Adj meg egy számot!"
    else if (guessedNr > randomNr) return "A te számod nagyobb."
    else if (randomNr > guessedNr) return "A te számod kisebb."
    else return "Helyes megfejtés."
}