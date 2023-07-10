// Original array
var fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// Removing an element using splice
var removedFruit = fruits.splice(1, 1);
console.log(removedFruit); // Output: ['Banana']
console.log(fruits); // Output: ['Apple', 'Orange', 'Mango']

// Adding elements using splice
fruits.splice(2, 0, 'Grapes', 'Kiwi');
console.log(fruits); // Output: ['Apple', 'Orange', 'Grapes', 'Kiwi', 'Mango']

// Replacing elements using splice
fruits.splice(1, 2, 'Pineapple', 'Watermelon');
console.log(fruits); // Output: ['Apple', 'Pineapple', 'Watermelon', 'Kiwi', 'Mango']



// Original array
var fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

// Extracting a portion of the array using slice
var selectedFruits = fruits.slice(1, 4);
console.log(selectedFruits); // Output: ['Banana', 'Orange', 'Mango']

// Slice without arguments to create a copy of the array
var copyOfFruits = fruits.slice();
console.log(copyOfFruits); // Output: ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes']

// Negative indices in slice
var lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits); // Output: ['Mango', 'Grapes']
