// С помощью функций map, reduce, вывести url у которого самая большая площадь



const boxarts = [
    {
        width: 200,
        height: 200,
        url: "http://cdn-0.nflximg.com/image/2891/Fracture200.jpg"
    },{
        width: 300,
        height: 200,
        url: "http://cdn-0.nflximg.com/image/2891/Fracture300.jpg"
    },
    {
        width: 425,
        height: 150,
        url: "http://cdn-0.nflximg.com/image/2891/Fracture425.jpg"
    },
    {
        width: 150,
        height: 200,
        url: "http://cdn-0.nflximg.com/image/2891/Fracture150.jpg"
    }
];


const square = (boxart) => {
    const newBoxart = boxarts.map(({width, height, url}) => ({
        url,
        square: width * height,
    }));

    return newBoxart.reduce((result, currenBoxart) => {
        if (result.square > currenBoxart.square) {
            return result
        } else {
            return currenBoxart
        }
    }).url
    
}

console.log(square(boxarts))
