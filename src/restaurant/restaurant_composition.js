class Dish {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

class Menu {
    constructor() {
        this.dishes = [];
    }

    addDish(dish) {
        this.dishes.push(dish);
    }

    display() {
        this.dishes.forEach(d => console.log(d.name))
    }

    calculateBill() {
        return this.dishes.reduce((accumulator, dish) => accumulator + dish.price, 0)
    }
}

const dish1 = new Dish('Pasta', 'Delicious pasta with marinara sauce', 100);
const dish2 = new Dish('Steak', 'Grilled steak with mashed potatoes', 190);
const dish3 = new Dish('Salad', 'Fresh garden salad with balsamic dressing', 80);

const menu = new Menu();
menu.addDish(dish1);
menu.addDish(dish2);
menu.addDish(dish3);
menu.display();
let bill = menu.calculateBill();
console.log(bill)