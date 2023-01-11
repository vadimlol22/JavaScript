// НАпишите функцию min(a, b), которая возвращает меньшее из чисел a,b.
//  Пример вызовов :
//     min(2, 5)
//     min(3, -1)
//     min(1, 1)




function min (a, b) {
    if (a < b) {

        return a;
    }

    if (a > b) {

        return b;
    }

    return 'a equals b';
}


console.log(min (2, 3))