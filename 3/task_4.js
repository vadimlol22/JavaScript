// Функция принимает строку и проверяет её на палиндром. В случае если строка является палиндромом возвращает true иначе false

//isPalindrome('Привет') --> false
//isPalindrome('шалаш') --> true






const isPalindrome = (string) => {
    return string.toLowerCase() === string.toLowerCase().split('').reverse().join('');
    }

console.log(isPalindrome('Привет'))
console.log(isPalindrome('шалаш'))