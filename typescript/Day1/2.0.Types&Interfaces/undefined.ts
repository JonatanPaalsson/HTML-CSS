type Car = {
  brand: string;
  color: string[];
};

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  car?: Car;
};

const ourCarPerson: Person = {
  firstName: "Jonatan",
  lastName: "Pålsson",
  age: 32,
};

const myCar = ourCarPerson.car;
