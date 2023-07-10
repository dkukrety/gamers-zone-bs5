
let person = {
    name: "Manoj",
    designation: "Student",
    short: "S",
    marks: 99,
    subject: "Mathematics"
}
switch (true) {

    case person.marks >= 90:
        person.grade = "S"
        console.log(person.name + " has secured S grade")
        break;

    case person.marks >= 70 && person.marks < 90:
        person.grade = "A"
        console.log(person.name + " has secured A grade")
        break;

    case person.marks >= 60 && person.marks < 70:
        person.grade = "B"
        console.log(person.name + " has secured B grade")
        break;

    case person.marks >= 35 && person.marks < 59:
        person.grade = "C"
        console.log(person.name + " has secured C grade")
        break;
    default:
        person.grade = "F"
        console.log(person.name + " failed")

}

console.log(person)