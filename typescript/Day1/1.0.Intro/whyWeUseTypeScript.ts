const number = Math.floor(Math.random() * (10 - 0) + 0);

if (number === 5) {
  console.log("its a miracle");
}

if (number === 5) {
  console.log("will probably never happend");
}

const multiplyNumberWithTwo = (number: number) => {
  return number * 2;
};

const ourString = "I'm not a number";

const newNumber = multiplyNumberWithTwo(number);

const person = { name: "Jonatan" };
console.log(person.name);
