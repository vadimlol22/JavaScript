const fn = (numbers) => 
    numbers.map((number) => 
        number % 2 === 0 ? number + 1 : number -1
);

console.log(fn([1,2,3]))