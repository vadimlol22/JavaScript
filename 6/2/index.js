// Если ответ от сервера больше указанного времени, вернуть ошибку


const createFakeRequest = (value, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
};


const loadData = (requestFn, timeout) => {
    const rejection = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Requst is too slow!'))
        }, timeout)
    });

    return Promise.race([requestFn, rejection]).then(result => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error.message)
    })
}


const request = createFakeRequest('ответ от сервера', 1000);

loadData(request, 2000)