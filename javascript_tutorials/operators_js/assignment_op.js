let totalScore = 500;
let newScore = 150;
totalScore = totalScore + newScore;//short hand => totalScore += newScore;

console.log("Updated total score: " + totalScore);

let currentHealth = 400;
let damage = 50;
currentHealth -= damage; // => currentHealth = currentHealth - damage;
console.log("Remaining health: " + currentHealth);

let experiencePoints = 100;
let multiplier = 1.5;
experiencePoints *= multiplier; // => experiencePoints = experiencePoints * multiplier;
console.log("Updated experience points: " + experiencePoints);

let totalScore2 = 1000;
let gamesPlayed = 20;
totalScore2 /= gamesPlayed; // => totalScore2 = totalScore2 / gamesPlayed;
console.log("Average score per game: " + totalScore2);

let powerUps = 14;
let usedPowerUps = 3;
powerUps %= usedPowerUps; // => powerUps = powerUps / usedPowerUps;
console.log("Remaining power-ups: " + powerUps);