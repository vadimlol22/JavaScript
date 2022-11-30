const someFunction = (letters) => {
  const result = [];

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];

    if (letter === letter.toUpperCase()) {
      result.push(letter.toLowerCase());
    } else {
      result.push(letter.toUpperCase());
    }
  }

  return result;
};
console.log(someFunction(["a", "B", "c"]));

/////////////////////////////////////////////////////////////////////////////////////////////////

const someFunction = (letters) => {
  const result = [];

  let i = 0;

  while (i < letters.length) {
    const letter = letters[i];

    if (letter === letter.toUpperCase()) {
      result.push(letter.toLowerCase());
    } else {
      result.push(letter.toUpperCase());
    }

    i++;
  }

  return result;
};
console.log(someFunction(["a", "B", "c"]));

//////////////////////////////////////////////////////////////////////////////////////////////////////

const someFunction = (letter) => {
  const result = letter.map((currentValue) => {
    if (currentValue === currentValue.toUpperCase()) {
      return currentValue.toLowerCase();
    }

    return currentValue.toUpperCase();
  });
  return result;
};

console.log(someFunction(["a", "B", "c"]));
