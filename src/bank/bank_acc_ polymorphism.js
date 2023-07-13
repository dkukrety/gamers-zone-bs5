class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into Account ${this.accountNumber}.`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from Account ${this.accountNumber}.`);
        } else {
            console.log('Insufficient balance.');
        }
    }
}

class SavingsAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    // Method overriding
    withdraw(amount) {
        console.log('Withdrawal not allowed for Savings Account.');
    }

    calculateInterest() {
        const interest = this.balance * this.interestRate;
        console.log(`Interest calculated for Savings Account ${this.accountNumber}: ${interest}`);
    }
}

class CurrentAccount extends Account {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from Current Account ${this.accountNumber}.`);
        } else {
            console.log('Withdrawal amount exceeds overdraft limit.');
        }
    }
}

// Polymorphic behavior
const savingsAccount = new SavingsAccount('123456', 5000, 0.05);
const currentAccount = new CurrentAccount('789012', 2000, 5000);

const accounts = [savingsAccount, currentAccount];

for (const account of accounts) {
    account.deposit(1000);
    account.withdraw(2000);
}
