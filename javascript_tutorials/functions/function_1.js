function greet(name, designation) {
    console.log("welcome " + name + " designation " + designation)
}

greet("Lakshmikant", "Director")
greet("Deepak", "VP")
greet("Manoj", "Engineer")

const greet2 = function (name, designation) {
    console.log("welcome " + name + " designation " + designation)
}

greet2("Sumanth", "Engineer")

// Function Expression
const add = function (a, b) {
    return a + b
}

console.log(add(4, 5))
console.log(add(6, 9))

// function declaration
function sub(a, b) {
    return a - b;
}

console.log(sub(6, 2))

// arrow functions

const multiply = (x, y, z) => {
    return x * y * z;
}
console.log(multiply(3, 4, 5))

