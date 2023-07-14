class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    start() {
        console.log(`Starting the ${this.brand} ${this.model}.`);
    }

    stop() {
        console.log(`Stopping the ${this.brand} ${this.model}.`);
    }
}

class Car extends Vehicle {
    constructor(brand, model, fuelType) {
        super(brand, model);
        this.fuelType = fuelType;
    }

    // Method overriding
    start() {
        console.log(`Warming up the engine of the ${this.brand} ${this.model}.`);
        super.start();
    }

    // Additional methods specific to cars...
}

class Motorbike extends Vehicle {
    constructor(brand, model, engineType) {
        super(brand, model);
        this.engineType = engineType;
    }

    // Method overriding
    start() {
        console.log(`Starting the ${this.engineType} engine of the ${this.brand} ${this.model}.`);
        super.start();
        this.stop();
    }

    stop() {
        console.log("Stopping the Motorbike")
    }

    // Additional methods specific to motorbikes...
}

class RE extends Motorbike {

    constructor() {
        super();
    }

    stop() {

    }
}

// Method overriding in action
const car = new Car('Honda', 'Civic', 'Petrol');
const motorbike = new Motorbike('Harley-Davidson', 'Sportster', 'V-Twin');

// car.start();
// car.stop();

// motorbike.start();
// motorbike.stop();

// let classic500 = new RE();
// classic500.stop()
