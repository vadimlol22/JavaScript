// ROMAN NUMERALS


const solution = (string) => {
    const romanianMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < string.length; i++) {
        const currentSymbol = string[i];
        const nextSymbol = string[i+1];

        const currentValue = romanianMap[currentSymbol];
        const nextValue = romanianMap[nextSymbol];

        if (currentValue < nextValue) {
            result -= currentValue
        } else {
            result += currentValue
        }
    }

    return result
}


console.log(solution('XIX'))