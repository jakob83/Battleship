import { Ship } from '../Ship/ship';
import createBoard from './createBoardUI';
import getShipInfo from './getShipInfo';
import { displayShips, displayShotsOnBoard } from './displayShips';
import Player from '../Player/player';
import { GameBoard } from '../Gameboard/gameboard';
import toggleDirectionOnBtn from './toggleDirectionOnBtn';
import displayError, { toggleErrorClass } from './displayError';
import writeToInfoBox from './writeToInfoBox';
class GameManager {
  #addShipBtn = document.querySelector('#addShipBtn');
  #startGameBtn = document.querySelector('#startGameBtn');
  #changeDirectionBtn = document.querySelector('#shipDirectionBtn');
  #errorOKBtn = document.querySelector('#errorOKBtn');
  constructor(player, ai, gameBoardUIUser, gameBoardUIAI) {
    this.player = player;
    this.ai = ai;
    this.gameBoardUIUser = gameBoardUIUser;
    this.gameBoardUIAI = gameBoardUIAI;
  }
  handlePlayerShips() {
    this.#changeDirectionBtn.addEventListener('click', toggleDirectionOnBtn);
    this.#addShipBtn.addEventListener('click', () => {
      const info = getShipInfo();
      const cords = Ship.calcCords(info);
      const ship = new Ship(info.length, cords);
      const shipIsAdded = this.player.gameBoard.addShip(ship);
      if (!shipIsAdded) {
        return; // Error msg
      }
      displayShips(this.player.gameBoard.getShips(), this.gameBoardUIUser);
      removeSelectItem();
    });
  }

  startGame() {
    this.#errorOKBtn.addEventListener('click', toggleErrorClass);
    this.#startGameBtn.addEventListener('click', () => {
      if (this.player.gameBoard.shipsQuantity < 5) {
        // Error handling...
        displayError('Make sure all your ships have been placed!');
        return;
      }
      this.ai.gameBoard.addRandomShips();
      this.prepareEnemyFields();
      // remove ship info form
      removeShipForm();
      // showcase text, that tells user to attack
      writeToInfoBox('Click on an enemy field to launch your attack!');
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
      const attack = this.ai.gameBoard.receiveAttack(attackCords);
      if (attack === null) {
        return;
      } else if (attack === 2) {
        writeToInfoBox('You sunk an enemy Ship!');
      } else if (attack === 3) {
        writeToInfoBox('You won, congrats (:');
      }
      // AI's attack:
      const aiAttack = this.player.gameBoard.aiAttack();
      if (aiAttack === null) {
        return;
      } else if (aiAttack === 2) {
        writeToInfoBox('Your enemy has sunken one of your ships!');
      } else if (aiAttack === 3) {
        writeToInfoBox('your fleet was sunk ): L');
      }
      displayShotsOnBoard(this.ai.gameBoard, this.gameBoardUIAI);
      displayShotsOnBoard(this.player.gameBoard, this.gameBoardUIUser);

      displayShips(
        this.player.gameBoard.getShips(),
        this.gameBoardUIUser,
        true
      );

      displayShips(this.ai.gameBoard.getShips(), this.gameBoardUIAI, true);
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
function removeSelectItem() {
  const x = document.querySelector('#shipLength');
  x.remove(x.selectedIndex);
}
function removeShipForm() {
  const form = document.querySelector('#placeShipCont');
  startGameBtn.classList.toggle('hidden');
  form.classList.toggle('hidden');
}

export default GameManager;
