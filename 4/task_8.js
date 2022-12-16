// Написать свою реализацию метода массива filter (myFilter) которая работает точно так же как существующая. 
// ВСЕ массивы должны иметь этот метод. Примеры ниже.
// const numbers = [1,2,3]	
// 	const result1 = numbers.myMap((number) => number > 2) // [3]
// 	const result2 = numbers.myMap((number) => number % 2 === 0) // [2]


    Array.prototype.myMap = function(callback) {
        const result = [];
        for (let index = 0; index < this.length; index++) {
            if (callback(this[index], index, this)) {
                result.push(this[index])
            }  
        }
        return result
    }



    const numbers = [1,2,3];
	const result1 = numbers.myMap((number) => number > 2);
	const result2 = numbers.myMap((number) => number % 2 === 0);

    console.log(result1)
    console.log(result2)
