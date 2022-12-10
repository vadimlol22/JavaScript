// Ожидаемый результат : 
// {
//     '675465': 'Fracture',
//     '65432445': 'The Chamber',
//     '70111470': 'Die Hard',
//     '654356453': 'Boy Hard'
//   }





const videos = [{
    id: 65432445,
    title: 'The Chamber'
}, {
    id: 675465,
    title: 'Fracture'
}, {
    id: 70111470,
    title: 'Die Hard'
} , {
    id: 654356453,
    title: 'Boy Hard'
}]




const someFn = (video) => video.reduce((result, {id, title}) => {
    result[id] = title;

    return result
}, {})



console.log(someFn(videos))