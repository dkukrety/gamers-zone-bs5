function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log("Hello, " + this.name + "!");
};

function Employee(name, salary) {
    Person.call(this, name);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const emp = new Employee("John Doe", 5000);
emp.greet();      // Hello, John Doe!

