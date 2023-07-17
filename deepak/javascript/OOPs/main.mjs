import Game from './game.mjs';
import GameLib from './gameLib.mjs';

const game1 = new Game("a","gen","plat",new Date(),"some des");
const game2 = new Game("b","gen","plat",new Date(),"some des");

let gameLib = new GameLib();
gameLib.addGame(game1);
gameLib.addGame(game2);

gameLib.displayGame();
