let age = 19;

if (age > 18) {

    console.log("Eligible for voting");
} else {
    console.log("Not eligible for voting");
}


let employee = {
    name: "Sumanth",
    age: 22,
    exp: 5,
    yrsInExcelr: 2,
    designation: "SSE",
    salary: 1000000
}

if (employee.exp >= 5 && employee.yrsInExcelr >= 2) {

    employee.designation = "TL";
}

if (employee.yrsInExcelr >= 2) {
    employee.salary = employee.salary * 1.2;
}

console.log(employee)
