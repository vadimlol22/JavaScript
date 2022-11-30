const fn = (numbers) => {
  const result = numbers.map((currentValue, index) => {
    return `Value: ${currentValue}; Index: ${index}; 'Squared: ${
      currentValue ** 2
    };`;
  });
  return result;
};

console.log(fn([3, 4, 6]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fn = (numbers) => {
  const result = [];

  let i = 0;

  while (i < numbers.length) {
    const number = numbers[i];

    const answer = `Value: ${number}; Index: ${i}; 'Squared: ${number ** 2};`;

    result.push(answer);

    i++;
  }

  return result;
};

console.log(fn([3, 4, 6]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fn = (numbers) => {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    const answer = `Value: ${number}; Index: ${i}; 'Squared: ${number ** 2};`;

    result.push(answer);
  }

  return result;
};

console.log(fn([3, 4, 6]));
