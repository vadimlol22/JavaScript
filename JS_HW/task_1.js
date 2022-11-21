// Лизе нужно написать функцию sayHello(name), которая возвращает приветствие для пользователей.
// Тем не менее, она влюблена в пользователя с именем "Mark", и хотела бы поприветствовать его немного
// иначе. Помогите ей)

// Пример вызовов:
//    sayHello("Oleg"), //Hello, Oleg!
//    sayHello("Vikrot"), //Hello, Vektor!
//    sayHello("Mark"), //Hi, Mark!





function sayHello(name) {
    if (name === "Mark") {
        console.log('Hi,' + ' ' + name + '!')

        return;
    }


    console.log('Hello,', name + '!')
}

sayHello("Oleg")
