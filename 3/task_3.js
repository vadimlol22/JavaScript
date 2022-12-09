const users = [
    {
        id: 1,
        name: 'Alex',
    },
    {
        id: 2,
        name: 'Tomara',
    },
    {
        id: 3,
        name: 'Max',
    },
];


const renoveUsers = (users, badId) => {
    return users.filter(({ id }) => !badId.includes(id))
}




console.log(renoveUsers(users, [2, 3]))
console.log(renoveUsers(users, [3]))


// [ { id: 1, name: 'Alex' } ]
// [ { id: 1, name: 'Alex' }, { id: 2, name: 'Tomara' } ]  <-------- вывод в консоль
