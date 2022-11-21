// Написать функцию, которая принимает букву, если буква является большой, функция возвращает ‘Оууу май, большая буква!’. В ином случае ‘Нет уж, маленькие буквы - скучно’

// Пример: 
// checkLetterCase(‘A’) // ‘Оууу май, большая буква!’
// checkLetterCase(‘s) //  ‘Нет уж, маленькие буквы - скучно’








function checkLetterCase (stringValue) {
    
    if ((stringValue.length !== 1) && (typeof stringValue !== 'string')) {
        console.log ('Data entered incorrectly')

        return
    }

    if (stringValue.length === 1) {
        if (stringValue === stringValue.toUpperCase()) {
            console.log ('Оууу май, большая буква!')
            return
        } 

        else if (stringValue !== stringValue.toUpperCase()) {
            console.log ('Нет уж, маленькие буквы - скучно')
            return
        }
    }


}

checkLetterCase ("A")