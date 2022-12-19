// const fn = (string) => {
//     for(let i of string) {
//         if (i === i.toUpperCase()) {
//             return string.replaceAll(i,' '+i )
//         }
//     }
// }

const fn = (string) => {
    for(let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            return string.replace(string[i],' '+ string[i] )
        }
    }
}







console.log(fn("camelCasing"));
console.log(fn("identifier"));
console.log(fn("helloMyDearFriend"));