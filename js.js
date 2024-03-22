export function genrandNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min
}

export function compare(guessedNr, randomNr) {
    if (guessedNr > randomNr) return "A te számod nagyobb."
    else if (randomNr > guessedNr) return "A te számod kisebb."
    else return "Helyes megfejtés."
}