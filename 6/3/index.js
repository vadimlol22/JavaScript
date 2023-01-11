// Перенести все нули в конец
// [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
// is transformed into
// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]



const someFn = (numsArray) => {
    const zero =[]
    const notZero = []

    for(const num of numsArray) {
        if (num === 0 || num === "0") {
            zero.push(num)
        }else {
            notZero.push(num)
        }
    }

    return [...notZero , ...zero]
    
}


console.log(someFn([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]))