// Напишите функцию isEven(n), которая принимает один параметр, число, и
// возвращает, четное ли оно.
//  То есть функция может возвращать два значения: четное или нечетное.
//     isEven(4); //true
//     isEven(5); //false






function isEven (number) {
    if (number % 2 === 0) {
        console.log ('true')
        return true;
    }

    else {
        console.log ('false')
        return false;
    }
}

isEven(4)