// Приближается зима, вы должны подготовить свои лыжные каникулы. Ваша задача определить количество пар перчаток, 
// которое вы можете составить из перчаток, которые есть в вашем ящике.
// Дан массив, описывающий цвет каждой перчатки, верните количество пар, которые вы можете составить, предполагая, 
// что только перчатки одного цвета могут образовывать пары.
// Fn(["red", "green", "red", "blue", "blue"] // 2 (1 пара красных, одна пара голубых) )
// Fn(["red", "red", "red", "red", "red", "red"] // 3 (3 красных пары)


const fn = (gloves) => {
    const GlovesAmountMap = new Map();

    gloves.forEach((glove) => {
        if (GlovesAmountMap.has(glove)) {
            GlovesAmountMap.set(glove, GlovesAmountMap.get(glove) + 1);
        } else {
            GlovesAmountMap.set(glove, 1)
        }
    });

    return Array.from(GlovesAmountMap).reduce((result, [gloveColor, amount]) => {
        if (amount > 1) {
            result[gloveColor] = Math.floor(amount / 2)
        }

        return result;
    }, {});

};






console.log(fn(["red", "green", "red", "blue", "blue"]))
console.log(fn(["red", "red", "red", "red", "red", "red"]))