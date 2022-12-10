// Функция принимает объект с неограниченным количеством полей. 
// Результатом выполнения функции должен быть объект, 
// в котором были отсеяны поля со значениями null или undefined

// fn({ a: 1, b: ‘Hello’, c: null, z: undefined}) // { a: 1, b: ‘Hello’ }
// fn({ name: ‘alex’, age: 10, friends: [], address: null}) // { name: ‘alex’, age: 10, friends: [], }


const fn = (objs) => {
    const badWords = Object.values(objs) === undefined;
    return objs.filter((obj) => !badWords.includes(obj))

}


// fn({ a: 1, b: 'Hello', c: null, z: undefined})
// fn({ name: 'alex', age: 10, friends: [], address: null}) 


console.log(fn({ a: 1, b: 'Hello', c: null, z: undefined}))
