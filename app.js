//function keyword (most common)
function greet(name) {
    console.log(`Hello, ${name}!`)
}

greet("Seth")
//greet(12)
//greet(false)
//greet()

function multiply(a, b) {
    return a * b
}

let twoThingsMultiplied = multiply(5, 5)
console.log(twoThingsMultiplied)

//function keyword stored in a variable
let add = function(a, b) {
    return a + b
}

let addedNumbers = add(2, 2)
console.log(addedNumbers)

//anon function // arrow notation

let subtract = (a, b) => a - b

let subtractedNumbers = subtract(10, 5)
console.log(subtractedNumbers)