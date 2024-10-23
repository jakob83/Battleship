import { Ship } from '../Ship/ship';
import createBoard from './createBoardUI';
import getShipInfo from './getShipInfo';
import { displayShips, displayShotsOnBoard } from './displayShips';
import Player from '../Player/player';
import { GameBoard } from '../Gameboard/gameboard';

class GameManager {
  #addShipBtn = document.querySelector('#addShipBtn');
  #startGameBtn = document.querySelector('#startGameBtn');
  constructor(player, ai, gameBoardUIUser, gameBoardUIAI) {
    this.player = player;
    this.ai = ai;
    this.gameBoardUIUser = gameBoardUIAI;
    this.gameBoardUIAI = gameBoardUIAI;
  }
  handlePlayerShips() {
    this.#addShipBtn.addEventListener('click', () => {
      const info = getShipInfo();
      const cords = Ship.calcCords(info);
      const ship = new Ship(info.length, cords);
      this.player.gameBoard.addShip(ship);
      displayShips(this.player.gameBoard.getShips(), container1);
    });
  }
  generateAIShips() {
    this;
  }
  startGame() {
    this.#startGameBtn.addEventListener('click', () => {
      if (this.player.gameBoard.shipsQuantity < 5) {
        // Error handling...
        console.log('nope');
        return;
      }
      this.ai.gameBoard.addRandomShips();
      this.prepareEnemyFields();
      // showcase text, that tells user to attack
    });
  }
  prepareEnemyFields() {
    const boardUI = this.gameBoardUIAI;
    boardUI.addEventListener('click', (e) => {
      const target = e.target;
      if (!target.classList.contains('cell')) {
        return;
      }
      const attackedIndex = Array.from(boardUI.children).indexOf(target);
      const attackCords = indexToCords(attackedIndex);
      console.log(attackCords);
      this.ai.gameBoard.receiveAttack(attackCords);
      displayShotsOnBoard(this.ai.gameBoard, this.gameBoardUIAI);
    });
  }
}
function indexToCords(index) {
  const splitted = index.toString().split('');
  if (splitted.length < 2) {
    splitted.unshift(0);
  }
  return [Number(splitted[1]), Number(9 - splitted[0])];
}

export default GameManager;
