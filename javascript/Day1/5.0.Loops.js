const numberArray = [1,2,3,4,5]


//Old school way. Good for looping through fixed size
for (let index = 0; index < 5; index++) {
    console.log(index)  
}

//When you want to loop through it all
numberArray.forEach((value, index) => {
    console.log(value)
})

//Loops through and returns value
const doubleTheValue = numberArray.map(value => {
    return value * 2
})

//While loop
let value = 0;

while (value < 5) {
    console.log("I'm in the while loop with value: ", value);
    value++;
}

console.log(doubleTheValue)