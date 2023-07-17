import Game from './game.mjs';

class GamesLibrary{
    constructor(){
        this.games = [];
    };
    addGame(game){
        this.games.push(game);
    };
    displayGame(){
        this.games.forEach(game => game.displayInfo() );
    };
    searchByTitle(title){
        this.games.filter(game=>game.title.includes(title));
    };
}

export default GamesLibrary;