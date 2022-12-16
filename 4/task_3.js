// Функция принимает массив чисел. Функция должна вернуть число, которое встречается больше всего раз. 
// fn([1,1,2,3]) // 1
// fn([1,2,3,4,2]) // 2



const fn = (numbers) => {
    const meetingsCount = numbers.reduce((result, number) => {
        if (!result[number]) {
            result[number] = 0;
        }

        result[number] += 1;
        return result;
    }, {});

    let max = 0;

    for (const key in meetingsCount) {
        const meetings = meetingsCount[key];

        if (meetings > max) {
            max = key
        }
    }

    return max
}

console.log(fn([1,1,2,3]))
console.log(fn([1,2,3,4,2]))
