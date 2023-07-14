class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const person = new Person('Lakshmikant', 30);
person.greet();

const person2 = new Person('Manoj', 23);
person2.greet();

const person3 = new Person('Vikash', 24);
person3.greet();

const person4 = new Person('Deepak', 34);
person4.greet();
