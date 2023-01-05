interface Interface1 {
  someKey: string | number;
  anotherKey: string;
}

interface Interface2 {
  someKey: string;
}

const myConfusedObject: Interface2 = { someKey: "hello" };

const createNewObject = (myobject: Interface2) => {
  const newObject: Interface1 = Object.assign({}, myobject, {
    anotherKey: "hello",
  });
  return newObject;
};

const newOb = createNewObject(myConfusedObject);
