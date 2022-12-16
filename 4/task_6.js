// Написать функция которая принимает строку, и допустимое количество символов. 
// Если длина строки превышает допустимое количество символов, 
// функция должна обрезать строку а в конец  добавить многоточие
// fn(‘Hello’, 3) // ‘Hel…’ 



const fn = (stringValue, numberValue) => stringValue.length > numberValue ? stringValue.slice(0, 3)+'...' : stringValue;


console.log(fn('Hello', 3));