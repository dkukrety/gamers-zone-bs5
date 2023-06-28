// console.log("This is from external file")


var student1 = "Rakshit";
var age = 21;
var eligibleForVoting = true;// true or false
var job = null;
var designation;
var company = Symbol("ExcelR")
// console.log(student1 + " " + age + " voting eligibility " + eligibleForVoting);
// console.log(job)
// console.log(designation)
// console.log(company)

var a = 10;
var b = 6;
// console.log(a + b)

// console.log(a - b)

// console.log(a * b)

// console.log(a / b)
// var area = "Bengaluru";

// {
//     area = "Karnataka"
//     console.log(area)
// }

// console.log(area)

// function add() {

//     var results = parseInt(document.getElementById("a").value) + parseInt(document.getElementById("b").value);
//     document.getElementById("results").innerHTML = results;

// }

// function sub() {
//     var results = parseInt(document.getElementById("a").value) - parseInt(document.getElementById("b").value);
//     document.getElementById("results").innerHTML = results;

// }

// function multiply() {
//     var results = parseInt(document.getElementById("a").value) * parseInt(document.getElementById("b").value);
//     document.getElementById("results").innerHTML = results;

// }

// function divide() {
//     var results = parseInt(document.getElementById("a").value) / parseInt(document.getElementById("b").value);
//     document.getElementById("results").innerHTML = results;

// }


// setTimeout(function () {
//     // document.getElementById("c1").innerHTML = "<div> " + student1 + "</div>";
//     document.getElementById("fav_games").style.backgroundColor = "red";
// }, 2000)


// setTimeout(() => {
// console.log(document.getElementById("fav_games"))
// console.log(document.getElementById("popular_games"))
// console.log(document.querySelector(".fav"))
// console.log(document.querySelectorAll(".card"))
// console.log(document.querySelectorAll(".fav"))
// console.log(document.querySelector(".card"))
// console.log(document.getElementsByClassName("popular_game"));

// console.log(document.getElementsByTagName("section"));
// document.title = "Spartans"

// document.getElementById("fav_games").style.backgroundColor = "red";
// }, 1000)



{
    const arc = "Golgumbuz";
}

let last_seen_time = new Date();
let technical_stacks = ["Javascript", "HTML", "CSS", "Java"];
const employee = {
    "name": "Manoj",
    "designation": "Software Engineer",
    "last_seen": last_seen_time,
    "tech_stack": technical_stacks
}

const college = {
    "name": "BNMIT",
    "place": "Bengaluru",
    "courses": ["CS", "EC", "ME", "EE"]
}

function displayCollegeDetails() {

    console.log(college)


}
console.log("before invoking displayCollegeDetails")
displayCollegeDetails();