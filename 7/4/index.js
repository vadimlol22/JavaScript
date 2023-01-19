// ⦁	Написать метод которые повторяет логику Object.fromEntries(). 
// EX: customFromEntries([[‘a’, 1], [‘b’, 2]]) // { a: 1, b:2 }

const customFromEntries = (array) => {

    const result = {}

    for (const [key, value] of array) {
        result[key] = value
    }

    return result

}



console.log(customFromEntries([['a', 1], ['b', 2]]))