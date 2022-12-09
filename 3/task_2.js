// Функция принимает массив слов, возвращает новый массив слов, у которых первая буква большая, остальные маленькие.
//  Чем-то очень похоже на функцию которую мы писали для одного слова.


const fn = (someWords) => {
    const result = someWords.map((word) => {
        const oneWordLowerLetters =  word.toLowerCase();
        const firstLetterUpper = oneWordLowerLetters[0].toUpperCase();
            return firstLetterUpper + oneWordLowerLetters.slice(1)
    });
    return result
}



console.log(fn(['hello', 'wOrLd']));