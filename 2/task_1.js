const userList = ["Alex", "alex", "Max", "Vika", "Petr", "Alexandra"];

const filterUsers = (userList, blackList) => {
  if (!Array.isArray(blackList) || !Array.isArray(userList)) return;

  const lowerLetterBlackList = blackList.map((letter) => letter.toLowerCase());

  return userList.filter((user) => {
    const firstLetter = user[0].toLowerCase();

    return !lowerLetterBlackList.includes(firstLetter);
  });
};

console.log(filterUsers(userList, ["a", "p"]));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const userList = ["Alex", "alex", "Max", "Vika", "Petr", "Alexandra"];

const filterUsers = (userList, blackList) => {
  const result = [];
  const lowerLetterBlackList = [];

  for (let i = 0; i < blackList.length; i++) {
    const letter = blackList[i].toLowerCase();

    lowerLetterBlackList.push(letter);
  }

  for (let i = 0; i < userList.length; i++) {
    const user = userList[i];
    const lowerLetterUser = user[0].toLowerCase();

    if (!lowerLetterBlackList.includes(lowerLetterUser)) {
      result.push(user);
    }
  }
  return result;
};

console.log(filterUsers(userList, ["a", "p"]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

const userList = ["Alex", "alex", "Max", "Vika", "Petr", "Alexandra"];

const filterUsers = (userList, blackList) => {
  const result = [];
  const lowerLetterBlackList = [];

  let i = 0;

  while (i < blackList.length) {
    const letter = blackList[i].toLowerCase();

    lowerLetterBlackList.push(letter);
    i++;
  }

  while (i < userList.length) {
    const user = userList[i];
    const lowerLetterUser = user[0].toLowerCase();

    if (!lowerLetterBlackList.includes(lowerLetterUser)) {
      result.push(user);
    }
    i++;
  }
  return result;
};

console.log(filterUsers(userList, ["a", "p"]));
