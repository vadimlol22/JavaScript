const someFn = async () => {
    const postsRequest = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => 
    response.json())

    const usersRequest = await fetch('https://jsonplaceholder.typicode.com/users').then((response) => 
    response.json())


    const combine =  (postsRequest, usersRequest) => {
        const postsMap = new Map();

        postsRequest.forEach((comment) => {
            postsMap.set(comment.userId , comment)
        })
        console.log(postsMap)
    }

    



    // return  usersRequest((user) => {
    //     return {
    //         ...user,
    //         myPosts : sortPosts.get(user.userId)
    //     }
    // })


    // console.log(postsRequest)
    // console.log(usersRequest)
    // console.log(sortPosts)
}

someFn()