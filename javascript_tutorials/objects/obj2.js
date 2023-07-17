// Literals and properties
let game = {     // an object
    name: "Call of Duty",  // by key "name" store value "Call of Duty"
    price: 200,        // by key "price" store value 200
    "video game": true  // multiword property name must be quoted
};


// Square brackets
// set
game["video game"] = false;

// get
console.log(game["video game"]); // true

// delete
delete game["video game"];

let key = "isDownloadable";
let test = { temp: "Hey" }
// same as game["isDownloadable"] = true;
game[key] = true;

game[test.temp] = true;

// Computed properties

let game_input = prompt("Which game to buy?", "GOT");

// let game2 = {
    // [game_input]: true, // the name of the property is taken from the variable game_input
// };

// console.log(game2.GOT); // true if game_input="GOT"

// console.log("GOT" in game2); // true, game2.GOT exists

function createGame(name, price) {
    return {
        name, // same as name: name
        price,  // same as age: price
        // ...
    };
}

let res = createGame("Manoj", 200000)
console.log(res);



