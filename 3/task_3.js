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
    return users.filter((user) => !badId.includes(user.id))
}




console.log(renoveUsers(users, [2, 3]))
console.log(renoveUsers(users, [3]))

