var gameMode = "multiplayer";

switch (gameMode) {
    case "singleplayer":
        console.log("You are playing in singleplayer mode.");
        break;
    case "multiplayer":
        console.log("You are playing in multiplayer mode.");
        break;
    case "online":
        console.log("You are playing in online mode.");
        break;
    default:
        console.log("Invalid game mode selected.");
        break;
}
