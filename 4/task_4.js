// Функция принимает объект с неограниченным количеством полей. 
// Результатом выполнения функции должен быть объект, 
// в котором были отсеяны поля со значениями null или undefined

// fn({ a: 1, b: ‘Hello’, c: null, z: undefined}) // { a: 1, b: ‘Hello’ }
// fn({ name: ‘alex’, age: 10, friends: [], address: null}) // { name: ‘alex’, age: 10, friends: [], }


const fn = (objs) => {
    const entries = Object.entries(objs)

    const fiterEntries = entries.filter(([key, value]) => value !== null && typeof value !== 'undefined')

    return Object.fromEntries(fiterEntries)
}


console.log(fn({ a: 1, b: 'Hello', c: null, z: undefined}))
console.log(fn({ name: 'alex', age: 10, friends: [], address: null}))
