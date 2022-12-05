const isPalindrome = (string) => {
    return string === string.split('').reverse().join('') ? 'true' : 'false';
    }

console.log(isPalindrome('Привет'))
console.log(isPalindrome('шалаш'))