const fn = (someWords) => {
    const result = someWords.map((word) => {
        const oneWordLowerLetters =  word.toLowerCase();
        const firstLetterUpper = oneWordLowerLetters[0].toUpperCase();
            return firstLetterUpper + oneWordLowerLetters.slice(1)
    });
    return result
}










console.log(fn(['hello', 'wOrLd']));