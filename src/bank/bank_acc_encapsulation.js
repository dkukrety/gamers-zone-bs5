// Encapsulation: Encapsulation refers to the bundling of data and methods within an object, 
// hiding the internal details and providing an interface to interact with the object.
// It helps in creating secure and modular code by controlling access to object internals.

class BankAccount {
    constructor(accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log('Insufficient balance.');
        }
    }
}

const myAccount = new BankAccount('123456');
myAccount.deposit(1000);
myAccount.withdraw(500);
