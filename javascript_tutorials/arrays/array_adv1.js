let numbers = [1, 2, 3, 4, 5];

// Using map to double each number
let doubledNumbers = numbers.map(function (number) {
    return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Using filter to get even numbers
let evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

// Using reduce to sum all numbers
let sum = numbers.reduce(function (accumulator, number) {
    return accumulator + number;
}, 0);
console.log(sum); // Output: 15

// Using find to get the first even number
let firstEvenNumber = numbers.find(function (number) {
    return number % 2 === 0;
});
console.log(firstEvenNumber); // Output: 2


