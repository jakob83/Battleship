import './index.css';
import createBoard from './modules/UI/createBoardUI';
import getShipInfo from './modules/UI/getShipInfo';
import displayShips from './modules/UI/displayShips';
import Player from './modules/Player/player';
import { GameBoard } from './modules/Gameboard/gameboard';
import { Ship } from './modules/Ship/ship';
import GameManager from './modules/UI/GameManager';

const container1 = document.querySelector('#container1');
const container2 = document.querySelector('#container2');

createBoard(container1);
createBoard(container2);

const player = new Player(new GameBoard(), false);
const ai = new Player(new GameBoard(), true);

const gameManager = new GameManager(player, ai, container1, container2);
gameManager.player.gameBoard.addShip(new Ship(3, [[0, 1]]));
gameManager.player.gameBoard.addShip(new Ship(2, [[0, 2]]));
gameManager.player.gameBoard.addShip(new Ship(2, [[0, 3]]));
gameManager.player.gameBoard.addShip(new Ship(2, [[0, 4]]));
gameManager.player.gameBoard.addShip(new Ship(2, [[0, 5]]));

gameManager.handlePlayerShips();
gameManager.startGame();
