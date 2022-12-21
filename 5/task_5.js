// Ну и наша задача на факториал через рекурсию


// const factorial = (number) => {
//     if (number !== 1) {
//     return number * factorial(number-1) 
//     }

//     return 1
// }

const factorial = (number) => number !== 1 ? number * factorial(number-1) : 1



console.log(factorial(5))