// С помощью функций map, reduce, вывести url у которого самая большая площадь



const boxarts = [
    {
        width: 200,
        height: 200,
        url: "http://cdn-0.nflximg.com/image/2891/Fracture200.jpg"
    },
    {
        width: 150,
        height: 200,
        url: "http://cdn-0.nflximg.com/image/2891/Fracture200.jpg"
    },
    {
        width: 300,
        height: 200,
        url: "http://cdn-0.nflximg.com/image/2891/Fracture200.jpg"
    },
    {
        width: 425,
        height: 150,
        url: "http://cdn-0.nflximg.com/image/2891/Fracture200.jpg"
    }
];


const square = (boxart) => {
    return boxart.map(({width, heignt}) => (width * heignt))
    
}

console.log(square(boxarts))
