import Game from "./game.js";

// gameLibrary.js
class GameLibrary {
    constructor() {
        this.games = [];
    }

    addGame(game) {
        this.games.push(game);
    }

    displayGames() {
        this.games.forEach((game) => {
            game.displayInfo();
        });
    }

    searchByTitle(title) {
        const filteredGames = this.games.filter((game) =>
            game.title.toLowerCase().includes(title.toLowerCase())
        );

        if (filteredGames.length === 0) {
            console.log('No games found with that title.');
        } else {
            console.log(`Games found with title '${title}':`);
            filteredGames.forEach((game) => {
                game.displayInfo();
            });
        }
    }
}

// let gameLib = new GameLibrary();
// let game1 = new Game("Call of Duty", "Action", "PS5", new Date(), "This is the COD Game")
// let game2 = new Game("Fortnite", "Action", "Windows", new Date(), "This is the Fortnite Game")
// gameLib.addGame(game1)
// gameLib.addGame(game2)
// gameLib.displayGames();
// gameLib.searchByTitle("of")
export default GameLibrary;
