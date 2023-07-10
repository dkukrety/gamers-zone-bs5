var hasEnoughCoins = true;
var hasItem = true;

if (hasEnoughCoins && hasItem) {
    console.log("You can purchase the upgrade!");
} else {
    console.log("You need more coins or the required item to make the purchase.");
}

var hasQuest1Completed = true;
var hasQuest2Completed = false;

if (hasQuest1Completed || hasQuest2Completed) {
    console.log("You have completed at least one quest!");
} else {
    console.log("Keep playing to complete more quests.");
}


var playerLevel = 20;
var hasAbility1 = true;
var hasAbility2 = false;

if (playerLevel >= 15 && (hasAbility1 || hasAbility2)) {
    console.log("You have unlocked a special ability!");
} else {
    console.log("You need to reach the required level and have specific abilities to unlock the special ability.");
}


var playerHealth = 0;
var hasHealingItem = false;

if (!playerHealth && !hasHealingItem) {
    console.log("You are in a critical state with no health or healing items.");
} else {
    console.log("You have health or healing items to aid you.");
}


var highScore = true;
var hasAchievement = true;

if (highScore && hasAchievement) {
    console.log("Congratulations! You have a high score and unlocked an achievement.");
} else {
    console.log("Keep playing to improve your score and unlock achievements.");
}

var hasCompletedLevel = true;
var itemCount = 5;
var requiredItemCount = 10;

if (hasCompletedLevel || itemCount >= requiredItemCount) {
    console.log("You have met the criteria to proceed to the next stage.");
} else {
    console.log("Keep playing to meet the requirements for the next stage.");
}


var deathCount = 3;
var maxDeaths = 5;

if (deathCount < maxDeaths) {
    console.log("You have remaining lives. Keep playing!");
} else {
    console.log("Game over! You have exceeded the maximum allowed deaths.");
}


var hasItem = true;
var currencyAmount = 500;
var requiredCurrency = 1000;

if (hasItem && currencyAmount >= requiredCurrency) {
    console.log("You have the item and enough currency to make a purchase.");
} else {
    console.log("Keep playing to acquire the item and earn more currency.");
}


