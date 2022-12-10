// Функция принимает массив чисел. Функция должна вернуть число, которое встречается больше всего раз. 
// fn([1,1,2,3]) // 1
// fn([1,2,3,4,2]) // 2



const fn = (numbers) => {
    return numbers.map((number) => {
        if (number.lastIndexOf() > number[0]) {
            return number
        }

        return number.indexOf()
    })
}

console.log(fn([0,1,2,3]))
