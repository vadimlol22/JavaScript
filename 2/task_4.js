const someFunction = (values) => {
  return values.filter((value) => value.length % 2 === 0);
};

console.log(someFunction(["Hi", 2, 3, 4, 5, "JS", 2, "C++"]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const someFunction = (values) => {
  const result = [];

  for (let i = 0; i < values.length; i++) {
    const item = values[i];

    if (item.length % 2 === 0) {
      result.push(item);
    }
  }

  return result;
};

console.log(someFunction(["Hi", 2, 3, 4, 5, "JS", 2, "C++"]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const someFunction = (values) => {
  const result = [];

  let i = 0;

  while (i < values.length) {
    const item = values[i];

    if (item.length % 2 === 0) {
      result.push(item);
    }

    i++;
  }

  return result;
};

console.log(someFunction(["Hi", 2, 3, 4, 5, "JS", 2, "C++"]));
