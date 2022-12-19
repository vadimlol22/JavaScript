// Complete the solution so that the function will break up camel casing, using a space between words.
// EX: 
// fn("camelCasing")  //  "camel Casing"
// fn("identifier")  //  "identifier"
// fn(‘helloMyDearFriend’) // ’hello My Dear Friend’


const fn = (string) => {
    const stringToArray = string.split('')
    const makeSpace = stringToArray.reduce((result, letter) => {
        if (letter === letter.toLowerCase()) {
            result.push(letter)
        } else {
            result.push(' '+letter)
        }
        return result
    }, [])

    return makeSpace.join('')
}




console.log(fn("camelCasing"));
console.log(fn("identifier"));
console.log(fn("helloMyDearFriend"));