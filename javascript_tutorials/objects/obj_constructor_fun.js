
// Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log("Hello!");
    };
}

const person2 = new Person("Rakesh", 22);

person2.name;
person2.greet()