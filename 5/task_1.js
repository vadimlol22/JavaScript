// Complete the solution so that the function will break up camel casing, using a space between words.
// EX: 
// fn("camelCasing")  //  "camel Casing"
// fn("identifier")  //  "identifier"
// fn(‘helloMyDearFriend’) // ’hello My Dear Friend’



const fn = (string) => {
    let result = '';

    for (const letter of string) {
        const isBigLetter = letter === letter.toUpperCase();

        if (isBigLetter) {
            result += ` ${letter}`
        } else {
            result += letter
        }
    }

    return result;
} 





const fn = (string) => {
    const stringToArray = string.split('')
    const makeSpace = stringToArray.reduce((result, letter) => {
        letter === letter.toLowerCase() ? result.push(letter) : result.push(' '+letter);
    return result
}, [])
return makeSpace.join('')
}







console.log(fn("camelCasing"));
console.log(fn("identifier"));
console.log(fn("helloMyDearFriend"));