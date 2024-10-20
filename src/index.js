import './index.css';
import createBoard from './modules/UI/createBoardUI';
import getShipInfo from './modules/UI/getShipInfo';
import displayShips from './modules/UI/displayShips';
import Player from './modules/Player/player';
import { GameBoard } from './modules/Gameboard/gameboard';
import { Ship } from './modules/Ship/ship';

const container1 = document.querySelector('#container1');
const container2 = document.querySelector('#container2');

createBoard(container1);
createBoard(container2);

const player = new Player(new GameBoard());

const addShipBtn = document.querySelector('#addShipBtn');
addShipBtn.addEventListener('click', () => {
  const info = getShipInfo();
  const cords = Ship.calcCords(info);
  const ship = new Ship(info.length, cords);
  player.gameBoard.addShip(ship);
  displayShips(player.gameBoard.ships, container1);
});
