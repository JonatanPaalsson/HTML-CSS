const ourCallback = (attempts) => {
  console.log("The total number of attempts was: ", attempts);
};

const generateNewRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const ourFunction = (number, callback) => {
  let attempts = 1;
  let x = generateNewRandomNumber(0, 999);

  while (x != number) {
    x = generateNewRandomNumber(0, 999);

    attempts++;
  }

  callback(attempts);
};

ourFunction(100, ourCallback);
