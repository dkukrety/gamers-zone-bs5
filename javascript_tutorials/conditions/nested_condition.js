var playerLevel = 10;
var playerPoints = 800;
var requiredLevel = 5;
var requiredPoints = 1000;

if (playerLevel >= requiredLevel) {
    if (playerPoints >= requiredPoints) {
        console.log("Congratulations! You have reached the required level and earned enough points.");
    } else {
        console.log("You have reached the required level, but you need more points to proceed.");
    }
} else {
    console.log("You need to reach the required level to unlock this feature.");
}

