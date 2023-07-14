class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    // Abstract method
    start() {
        throw new Error('Method not implemented.');
    }

    // Abstract method
    stop() {
        throw new Error('Method not implemented.');
    }
}

class Car extends Vehicle {
    start() {
        console.log(`Starting the ${this.brand} car.`);
        // Code to start the car engine
    }

    stop() {
        console.log(`Stopping the ${this.brand} car.`);
        // Code to stop the car engine
    }

    // Additional methods and properties specific to cars...
}

class Motorcycle extends Vehicle {
    start() {
        console.log(`Starting the ${this.brand} motorcycle.`);
        // Code to start the motorcycle engine
    }

    stop() {
        console.log(`Stopping the ${this.brand} motorcycle.`);
        // Code to stop the motorcycle engine
    }

    // Additional methods and properties specific to motorcycles...
}

// Abstract class in action
const car = new Car('Toyota');
car.start();
car.stop();

const motorcycle = new Motorcycle('Harley-Davidson');
motorcycle.start();
motorcycle.stop();
