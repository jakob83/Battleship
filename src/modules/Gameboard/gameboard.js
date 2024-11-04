import { Ship } from '../Ship/ship';
class GameBoard {
  #ships = [];
  #missedCords = [];
  #hittedCords = [];
  // for attacking phase:
  #horizontalAttackQueue = [];
  #verticalAttackQueue = [];
  #attackDirection = null;
  // 0: nix;  1: hit
  #attackComboState = 0;
  shipLengths = [2, 3, 3, 4, 5];
  addShip(ship) {
    if (this.checkShipCorrectnes(ship)) {
      this.#ships.push(ship);
      return true;
    }
    return false;
  }
  // returns null: wrong input, 0: miss, 1: hit, 2: shipSunk, 3: flotte sunk
  receiveAttack(cords) {
    if (!this.areValidAttackCords(cords)) {
      return null;
    }
    for (let i = 0; i < this.#ships.length; i++) {
      const ship = this.#ships[i];
      const hit = ship.cords.some((c) => {
        return c[0] === cords[0] && c[1] === cords[1];
      });
      if (hit) {
        ship.hit();
        this.#hittedCords.push(cords);
        if (ship.isSunk()) {
          if (this.fleetSunk()) {
            return 3;
          }
          return 2;
        }
        return 1;
      }
    }
    this.#missedCords.push(cords);
    return 0;
  }
  checkShipCorrectnes(ship) {
    if (ship.length > 5 || ship.length < 2) {
      return false;
    }
    for (let i = 0; i < ship.cords.length; i++) {
      if (
        ship.cords[i][0] > 9 ||
        ship.cords[i][1] > 9 ||
        ship.cords[i][0] < 0 ||
        ship.cords[i][1] < 0
      ) {
        return false;
      }
    }

    for (let i = 0; i < this.#ships.length; i++) {
      const s = this.#ships[i];
      const cordsExist = s.cords.some((c) => {
        for (let y = 0; y < ship.cords.length; y++) {
          return c[0] === ship.cords[y][0] && c[1] === ship.cords[y][1];
        }
      });
      if (cordsExist) {
        return false;
      }
    }

    return true;
  }
  getMissedCords() {
    return this.#missedCords;
  }
  getHittedCords() {
    return this.#hittedCords;
  }
  fleetSunk() {
    return !this.#ships.some((ship) => !ship.isSunk());
  }
  getShips() {
    return this.#ships;
  }
  get shipsQuantity() {
    return this.#ships.length;
  }
  static randomShipInfo() {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    let dir = ['horizontal', 'vertical'];
    return { xy: [x, y], direction: dir[Math.floor(Math.random() * 2)] };
  }
  addRandomShips() {
    let isAdded = false;
    let i = 0;
    while (this.shipsQuantity < 5) {
      while (!isAdded) {
        let info = GameBoard.randomShipInfo();
        info.length = this.shipLengths[i];
        let cords = Ship.calcCords(info);
        isAdded = this.addShip(new Ship(info.length, cords));
      }
      isAdded = false;
      i++;
    }
  }
  setPotentialTargets([x, y]) {
    const potentialTargets = [
      [x + 1, y], // Right
      [x - 1, y], // Left
      [x, y + 1], // Down
      [x, y - 1], // Up
    ];
    for (let i = 0; i < 2; i++) {
      const element = potentialTargets[i];
      if (this.areValidAttackCords(element)) {
        this.#horizontalAttackQueue.push(element);
      }
    }
    for (let i = 2; i < 4; i++) {
      const element = potentialTargets[i];
      if (this.areValidAttackCords(element)) {
        this.#verticalAttackQueue.push(element);
      }
    }
  }
  aiAttack() {
    let attack;
    let direction = null;
    if (
      this.#horizontalAttackQueue.length > 0 ||
      this.#verticalAttackQueue.length > 0
    ) {
      if (this.#attackDirection === 'vertical') {
        attack = this.#verticalAttackQueue.shift();
        direction = 'vertical';
      } else if (this.#attackDirection === 'horizontal') {
        attack = this.#horizontalAttackQueue.shift();
        direction = 'horizontal';
      } else {
        // case, where we have hit the ship, but don't yet know the attacking direction
        let hor = this.#horizontalAttackQueue.shift();
        if (hor) {
          attack = hor;
          direction = 'horizontal';
        } else {
          let ver = this.#verticalAttackQueue.shift();
          attack = ver;
          direction = 'vertical';
        }
      }
    }
    if (!attack) {
      attack = this.getRandomAttackCords();
      while (!this.areValidAttackCords(attack)) {
        attack = this.getRandomAttackCords();
      }
    }
    const receivedAtt = this.receiveAttack(attack);
    if (receivedAtt === 1) {
      this.setPotentialTargets(attack);
      this.#attackDirection = direction;
    } else if (receivedAtt === 2) {
      this.clearQueues();
      this.#attackDirection = null;
    } else if (receivedAtt === 0) {
    }
    return receivedAtt;
  }
  getRandomAttackCords() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y];
  }
  clearQueues() {
    this.#verticalAttackQueue = [];
    this.#horizontalAttackQueue = [];
    this.#attackDirection = null;
  }
  areValidAttackCords(cords) {
    if (cords[0] > 9 || cords[1] > 9 || cords[0] < 0 || cords[1] < 0) {
      return false;
    } else if (
      this.#missedCords
        .concat(this.#hittedCords)
        .some((coord) => coord[0] === cords[0] && coord[1] === cords[1])
    ) {
      return false;
    }
    return true;
  }
}
export { GameBoard };
