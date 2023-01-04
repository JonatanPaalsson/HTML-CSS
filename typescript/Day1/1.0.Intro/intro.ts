let value: number | string = 10;

value = "hello";

//value = true;

const stringFunction = (ourParameter: string) => {
  console.log(ourParameter);
};

//stringFunction();

const personJonatan: { firstName: string; lastName: string; age: number } = {
  firstName: "Jonatan",
  lastName: "Pålsson",
  age: 32,
};

const doNotDoThis: any = "Stay away from this";

doNotDoThis.fullname;
