// Ваша задача реализовать функцию-банкомат
// Дан массив купюр со следующим номиналом banknotes = [1, 5, 10, 20, 50, 100, 500];
// Количество банкнот не ограничено
// Функция принимает число (сумму, которую хочет списать пользователь) возвращает массив банкнот с наибольшим номиналом
// ATM(1000) // [500, 500]
// ATM(1025) // [500, 500, 20, 5],
// ATM(10) // 10



const ATM = (money) => {
    const banknotes = [500, 100, 50, 20, 10, 5, 1]

    const result = []

    let i = 0

    while (i < banknotes.length) {
        if(money >= banknotes[i]) {
            money -= banknotes[i]
            result.push(banknotes[i])
        } else{
            i++
        }
    }

    return result
}

console.log(ATM(1025))