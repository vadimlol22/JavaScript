// Написать функцию, которая принимает букву, если буква является большой, функция возвращает ‘Оууу май, большая буква!’. В ином случае ‘Нет уж, маленькие буквы - скучно’

// Пример: 
// checkLetterCase(‘A’) // ‘Оууу май, большая буква!’
// checkLetterCase(‘s) //  ‘Нет уж, маленькие буквы - скучно’








function checkLetterCase (stringValue) {
    
    if ((stringValue.length === 1) && (typeof stringValue === 'string')) {

            if (stringValue === stringValue.toUpperCase()) {
                return 'Оууу май, большая буква!'             
            } 

            return 'Нет уж, маленькие буквы - скучно'            
    }
    
    return "Data not correct"

}

console.log(checkLetterCase ("A"))