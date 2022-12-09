// Функция принимает массив пользователей. Исходные данные см. ниже. Возвращает объект, состоящий из двух полей: women и men. Данные
// поля являются массивами, в которых содержаться пользователи, подходящие по категории gender соответственно.
// Также, вместо двух полей first_name и last_name у каждого из объектов должнобыть поле fullName в котором будут объеденины убранные поля 
// (first_name и last_name). Количество пользователей может быть не ограничено.




const users = [
    {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female',
        ip_address: '26.58.193.2',
    },
    {
        id: 2,
        first_name: 'Petr',
        last_name: 'Jackson',
        email: 'gfrediani1@senate.gov',
        gender: 'Male',
        ip_address: '229.179.4.212',
    },
];

const someFunction = (users) => {
    const women = "Female";
    return users.reduce((result, {first_name, last_name, ...otherInfo}) => {
        const isWomen = otherInfo.gender === women;

        const userToPush = {
            fullName: `$(user.first_name) $(user.last_name)`,
            ...otherInfo
        };

        if (isWomen) {
            result.women.push(userToPush)
        } else {
            result.men.push(userToPush)
        }

        return result
    },
    { men : [], women : [] })

    }

console.log(someFunction(users))