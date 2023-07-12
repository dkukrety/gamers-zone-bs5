let myArray = [1, 2, 3, 4, 5];
console.log(myArray);

let fruits = ['apple', 'banana', 'orange'];
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

fruits.pop();
console.log(fruits); // Output: ['apple', 'banana', 'orange']

fruits.shift();
console.log(fruits); // Output: ['banana', 'orange']

fruits.unshift('kiwi');
console.log(fruits); // Output: ['kiwi', 'banana', 'orange']

fruits.splice(1, 1, 'cherry', 'mango');
console.log(fruits); // Output: ['kiwi', 'cherry', 'mango', 'orange']

