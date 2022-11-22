// Написать функцию которая принимает в себя строчное значение состоящее из одного слова. В слове могут быть буквы разных регистров. Результатом выполнения данной функции должна быть строка, в которой первая буквы заглавная, а все последующие в нижнем регистре.
// Если в слове четное количество букв, то и последняя буква должна быть заглавной.
// Пример:

// someFn(‘пиТеР’) // Питер
// someFn(‘javaScript’) // JavascripT








function someFn (letter) {
    const toLowerCase = letter.toLowerCase();
    const firstBigLetter = toLowerCase[0].toUpperCase() + toLowerCase.slice(1);


    
    if (letter.length % 2 !== 0) {
        
        return firstBigLetter;
    }
    

    else if (letter.length % 2 === 0) {
        const lastBigLetters = firstBigLetter.slice(0, -1) + firstBigLetter.slice(-1).toUpperCase();
        
        return lastBigLetters;
    }

}


console.log(someFn ("javaScript"))
