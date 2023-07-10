// Function Declaration

function bookCab(from, to) {
    console.log("You have booked cab from " + from + " to " + to)
}

// bookCab("Indiranagar", "Koramangala")

// Function Expression Anonymous
let foodOrder = function (list) {
    console.log("You have ordered below food items");
    for (item of list) console.log(item)
}

// foodOrder(["Daal", "Roti", "Ghee Rice"])

// Function Expression Named

let buyMovieTicket = function buyTicket(movieDetail) {
    for (let prop in movieDetail) {
        console.log(prop + " : " + movieDetail[prop])
    }
}

// buyMovieTicket({ name: "KGF", timing: "9:30pm", price: 200, count: 2 })

// Fat arrow function
const getCourses = (courses) => {
    for (let course of courses) {
        let temp = ""
        for (let type in course) {
            temp += course[type] + " ";
        }
        console.log(temp)
    }
}

// getCourses([
//     { name: "Java", "duration": "6 months" },
//     { name: "Javascript", "duration": "2 months" },
//     { name: "ReactJS", "duration": "2 months" },
//     { name: "HTML", "duration": "1 month" }
// ])

const gamersZone = {
    name: "Gamers Zone",
    playGame: function () {
        console.log("Welcome to " + this.name + "!");

    }
};
// gamersZone.playGame(); // Calling the playGame method


// Function as a Constructor

function Articles(author_name, date, publisher) {
    this.author_name = author_name;
    this.date = date;
    this.publisher = publisher;
}

let art1 = new Articles("Sumanth", new Date(), "ExcelR")
let art2 = new Articles("Manoj", new Date(), "ExcelR")
let art3 = new Articles("Rakshit", new Date(), "ExcelR")
let art4 = new Articles("Vikash", new Date(), "ExcelR")
let art5 = new Articles("Deepak", new Date(), "ExcelR")

let articles = [];
articles.push(art1);
articles.push(art2);
articles.push(art3);
articles.push(art4);
articles.push(art5);

// for (let i = 0; i < articles.length; i++) {
//     console.log(articles[i].author_name)
// }

let city = "Jaipur";
// (function weather(temperature, city) {
//     console.log("temperature of " + city + " is " + temperature)
// }
// )("42", city);

// Generator function

function* notifications() {
    yield "You have visited the website first time";
    yield "You have visited the website second time";
    yield "You have visited the website third time";
}

let notifications_gen = notifications();
console.log(notifications_gen.next().value)
console.log(notifications_gen.next().value)
console.log(notifications_gen.next().value)
console.log(notifications_gen.next().value)
console.log(notifications_gen.next().value)

function* notificationsUnlimited() {
    let i = 1;
    while (true) {
        yield "You have visited the website " + i++ + " time";
    }

}



let notifications_ul = notificationsUnlimited();
console.log(notifications_ul.next().value)
console.log(notifications_ul.next().value)
console.log(notifications_ul.next().value)
console.log(notifications_ul.next().value)
console.log(notifications_ul.next().value)