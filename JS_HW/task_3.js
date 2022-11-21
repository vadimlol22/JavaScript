// НАпишите функцию min(a, b), которая возвращает меньшее из чисел a,b.
//  Пример вызовов :
//     min(2, 5)
//     min(3, -1)
//     min(1, 1)




function min (a, b) {
    if (a < b) {
        console.log(a)

        return a;
    }

    if (a > b) {
        console.log(b)

        return b;
    }

    console.log('a equals b');
}


min (2, 3)