type PersonType = { firstName: string; lastName: string; age: number };
interface PersonInerface {
  firstName: string;
  lastName: string;
  age: number;
}

const firstPerson: PersonType = {
  firstName: "Jonatan",
  lastName: "Pålsson",
  age: 32,
};

const secondPerson: PersonInerface = {
  firstName: "Ola",
  lastName: "Nordmann",
  age: 45,
};
