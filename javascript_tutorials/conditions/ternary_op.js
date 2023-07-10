var playerPoints = 1500;
var pointsThreshold = 1000;

var message = (playerPoints >= pointsThreshold) ? "Congratulations! You can level up." : "Keep playing to earn more points.";

console.log(message);

var hasAchievement = true;

var message = hasAchievement ? "You have unlocked a special achievement!" : "Keep playing to unlock more achievements.";

console.log(message);


var playerLevel = 30;
var maxLevel = 50;

var message = (playerLevel === maxLevel) ? "You have reached the maximum level!" : "Keep playing to level up further.";

console.log(message);


var inventory = ["sword", "shield", "potion"];
var hasItem = inventory.includes("sword");

var message = hasItem ? "You have a sword in your inventory." : "Find a sword to enhance your combat abilities.";

console.log(message);


