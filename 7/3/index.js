// Написать метод которые повторяет логику Object.entries(). 
// EX: customEntries({a: 1, b:2}) // [[‘a’, 1], [‘b’, 2]]


const customEntries = (obj) => {
    const result = []

    for(const [key] in obj) {
        result.push([key, obj[key]])
    }
    return result
}


const object = {a: 1, b:2}

console.log(customEntries(object))
