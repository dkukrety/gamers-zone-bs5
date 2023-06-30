var playerPoints = 1500;
var pointsThreshold = 1000;

if (playerPoints >= pointsThreshold) {
    console.log("Congratulations! You can level up.");
} else {
    console.log("Keep playing to earn more points.");
}

var hasAchievement = true;

if (hasAchievement) {
    console.log("You have unlocked a special achievement!");
} else {
    console.log("Keep playing to unlock more achievements.");
}


var playerLevel = 30;
var maxLevel = 50;

if (playerLevel === maxLevel) {
    console.log("You have reached the maximum level!");
} else {
    console.log("Keep playing to level up further.");
}

var inventory = ["sword", "shield", "potion"];
var hasItem = inventory.includes("sword");

if (hasItem) {
    console.log("You have a sword in your inventory.");
} else {
    console.log("Find a sword to enhance your combat abilities.");
}

var player1Score = 1500;
var player2Score = 1200;

if (player1Score > player2Score) {
    console.log("Player 1 has a higher score than Player 2.");
} else {
    console.log("Player 2 has a higher score than Player 1.");
}

var playerLives = 3;
var maxLives = 5;

if (playerLives === 0) {
    console.log("Game over! Player is out of lives.");
} else if (playerLives < maxLives) {
    console.log("Player has some lives remaining.");
} else {
    console.log("Player has the maximum number of lives.");
}

var playerExperience = 1200;
var requiredExperience = 1000;

if (playerExperience >= requiredExperience) {
    console.log("Player can access the restricted area.");
} else {
    console.log("Player needs more experience to access the area.");
}


var playerTimeTaken = 85;
var timeLimit = 90;

if (playerTimeTaken <= timeLimit) {
    console.log("Congratulations! Player completed the level within the time limit.");
} else {
    console.log("Player ran out of time. Level not completed.");
}

