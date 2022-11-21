//    Ваша цель - создать функцию deleteChars(str), которая удаляет первый и последний символы строки,
//    которая передается в параметр, и возвращает новую строку без этих символов.

//    deleteChars("Hello"); //ell
//    deleteChars("A"); //пустая строка





function deleteChars(string) {
    console.log(string.slice(1, -1));
    return ;
}


deleteChars("Hello")