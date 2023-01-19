// Результатом работы вашей функции должен быть массив пользователей. 
// У каждого объекта пользователя должно появиться поле myPosts: [<в этом массиве будут посты, которые сделал этот пользователь>]. 
// Поле массив, так как у одного пользователя может быть более 1-го поста.




const someFn = async () => {
    const URL = 'https://jsonplaceholder.typicode.com';

    try {
        const [users, posts] = await Promise.all([
            fetch(`${URL}/users`).then(resp => resp.json()),
            fetch(`${URL}/posts`).then(resp => resp.json())
        ]);

        const UserIdPostMap = new Map();

        for(const post of posts) {
            if(!UserIdPostMap.has(post.userId)) {
                UserIdPostMap.set(post.userId, [])
            }
            UserIdPostMap.get(post.userId).push(post);
        }

        return users.map((user) => ({
            ...user,
            myPosts : UserIdPostMap.get(user.id)
        }))

    } catch(error) {
        console.log('error')
    }
}

console.log(someFn())