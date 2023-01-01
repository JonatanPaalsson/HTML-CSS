//Mutation
const myArray = [1,2,3,4]


const dubbleTheValueMutable = (array) => {
    return array.forEach((value, index, array) => array[index] = value * 2);
}

dubbleTheValueMutable(myArray)

console.log(myArray)


//Immutable
const myOtherArray = [1,2,3,4]

const dubbleTheValueImmutable = (array) => {
    return array.map(value => value * 2);
}

const dubbleArray = dubbleTheValueImmutable(myOtherArray)

/*
console.log(myOtherArray)
console.log(dubbleArray)
*/
