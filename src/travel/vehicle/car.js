// Inheritance: Inheritance allows objects to inherit properties and methods from other objects.
// It promotes code reuse and helps create hierarchical relationships between objects.
// JavaScript uses prototype - based inheritance, where objects can inherit from other objects.

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log('Starting the vehicle...');
    }
}

class Car extends Vehicle {
    constructor(make, model, color) {
        super(make, model);
        this.color = color;
    }

    drive() {
        console.log(`Driving the ${this.color} ${this.make} ${this.model}.`);
    }
}

const myCar = new Car('Honda', 'Civic', 'blue');
myCar.start();
myCar.drive();
