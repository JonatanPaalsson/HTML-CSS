function myFunction() {
    console.log('My function')
}

function functionWithParameter(myParameter) {
    console.log("my parameter is of type: ", typeof myParameter)
}

functionWithParameter("string")


const functionExpression = function(firstParam, secondParam) {
    return firstParam + secondParam
}

const arrowFunction = (param) => {
    
    return "You called arrowFunction with: " + param
}