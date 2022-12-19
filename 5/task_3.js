// ROMAN NUMERALS


const solution = (string) => {
    const stringToArray = string.toUpperCase().split('')
    return numbers = stringToArray.reduce((result, currentValue) => {
        if (currentValue === 'I') {
            result += 1
        }
        if (currentValue === 'V') {
            result += 5
        }
        if (currentValue === 'X') {
            result += 10
        }
        if (currentValue === 'L') {
            result += 50
        }
        if (currentValue === 'C') {
            result += 100
        }
        if (currentValue === 'D') {
            result += 500
        }
        if (currentValue === 'M') {
            result += 1000
        }

        return result
    }, 0)
}


console.log(solution('XXI'))