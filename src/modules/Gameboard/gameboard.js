import { Ship } from '../Ship/ship';
class GameBoard {
  #ships = [];
  #missedCords = [];
  #hittedCords = [];
  shipLengths = [2, 3, 3, 4, 5];
  addShip(ship) {
    if (this.checkShipCorrectnes(ship)) {
      this.#ships.push(ship);
      return true;
    }
    return false;
  }
  receiveAttack(cords) {
    for (let i = 0; i < this.#ships.length; i++) {
      const ship = this.#ships[i];
      const hit = ship.cords.some((c) => {
        return c[0] === cords[0] && c[1] === cords[1];
      });
      if (hit) {
        ship.hit();
        this.#hittedCords.push(cords);
        return;
      }
    }
    this.#missedCords.push(cords);
  }
  checkShipCorrectnes({ cords, length }) {
    console.log(cords);
    if (cords[0] > 9 || cords[1] > 9 || cords[0] < 0 || cords[1] < 0) {
      return false;
    } else if (length > 5 || length < 2) {
      return false;
    }
    for (let i = 0; i < this.#ships.length; i++) {
      const ship = this.#ships[i];
      const cordsExist = ship.cords.some((c) => {
        for (let y = 0; y < cords.length; y++) {
          return c[0] === cords[y][0] && c[1] === cords[y][1];
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
}

export { GameBoard };
