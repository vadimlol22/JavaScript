// Написать функцию, которая принимает 2 значения. 1 – строка, 2 – число. Если длинна строки,
// больше чем число функция должна вернуть – ‘String is too long!’ в ином случае вернуть переданную строку. 
// checkStringLength(‘HI’, 2) // Hi
// checkStringLength(‘HI’, 1) // – ‘String is too long!’.








function checkStringLength (stringValue, numberValue) {
    if ((typeof stringValue === 'string') && (typeof numberValue === 'number' )) {
        if (stringValue.length > numberValue) {
            console.log('String is too long!')
            return
        }

        else {
            console.log(stringValue)
            return
        }
    }

    else  {
        console.log("Data entered incorrectly")    
    }

}


checkStringLength('Hi', 2)