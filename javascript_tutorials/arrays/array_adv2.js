let fruits = ['banana', 'apple', 'orange'];
let slicedArray = fruits.slice(1, 3);
console.log(slicedArray); // Output: ['apple', 'orange']

let concatenatedArray = fruits.concat(['grape', 'kiwi']);
console.log(concatenatedArray); // Output: ['banana', 'apple', 'orange', 'grape', 'kiwi']

let sortedArray = fruits.sort();
console.log(sortedArray); // Output: ['apple', 'banana', 'orange']

let reversedArray = fruits.reverse();
console.log(reversedArray); // Output: ['orange', 'banana', 'apple']

let joinedString = fruits.join(', ');
console.log(joinedString); // Output: 'orange, banana, apple'

let foundFruit = fruits.find((fruit) => fruit === 'banana');
console.log(foundFruit); // Output: 'banana'

let index = fruits.findIndex((fruit) => fruit === 'orange');
console.log(index); // Output: 2

let hasApple = fruits.some((fruit) => fruit === 'apple');
console.log(hasApple); // Output: true

let allFruitsAreLong = fruits.every((fruit) => fruit.length > 5);
console.log(allFruitsAreLong); // Output: false




