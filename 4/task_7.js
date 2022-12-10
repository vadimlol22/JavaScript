// Написать свою реализацию метода массива map (myMap) которая работает точно так же как существующая. 
// ВСЕ массивы должны иметь этот метод. Примеры ниже.
// const numbers = [1,2,3]
// 	const result1 = numbers.myMap((number) => number * 2) // [2,4,6]
// 	const result2 = numbers.myMap((number) => String(number)) // [‘1’, ‘2’, ‘3’]


Array.prototype.myMap = function (callback) {
    const result = [];

    for (let index = 0; index < this.length; index++) {
        result.push(callback(this[index], index, this))
    }

    return result
}

const numbers = [1,2,3];
const result1 = numbers.myMap((number) => number * 2);
const result2 = numbers.myMap((number) => String(number));


console.log(result1)
console.log(result2)
