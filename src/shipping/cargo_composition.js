// Smaller, focused objects
class Cargo {
    constructor(description, weight) {
        this.description = description;
        this.weight = weight;
    }
}

class ShippingContainer {
    constructor(containerNumber, capacity) {
        this.containerNumber = containerNumber;
        this.capacity = capacity;
        this.cargoes = [];
    }

    addCargo(cargo) {
        if (this.cargoes.length < this.capacity) {
            this.cargoes.push(cargo);
            console.log(`Added cargo to container ${this.containerNumber}.`);
        } else {
            console.log(`Container ${this.containerNumber} is already full.`);
        }
    }

    removeCargoes() {

        if (this.capacity.length > 0) {
            let itemRemoved = this.cargoes.pop();
        }
    }
}

class ShippingYard {
    constructor() {
        this.containers = [];
    }

    addContainer(container) {
        this.containers.push(container);
        console.log(`Added container ${container.containerNumber} to the shipping yard.`);
    }
}

// Composition in action
const yard = new ShippingYard();

const container1 = new ShippingContainer('C001', 5);

let cargo1 = new Cargo('Electronics', 200);
container1.addCargo(cargo1);
container1.addCargo(new Cargo('Clothing', 100));
yard.addContainer(container1);

const container2 = new ShippingContainer('C002', 3);
container2.addCargo(new Cargo('Furniture', 500));
yard.addContainer(container2);
