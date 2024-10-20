class GameBoard {
  ships = [];
  #missedAttackCords = [];
  addShip(ship) {
    if (this.checkShipCorrectnes(ship)) {
      this.ships.push(ship);
      return true;
    }
    return false;
  }
  receiveAttack(cords) {
    for (let i = 0; i < this.ships.length; i++) {
      const ship = this.ships[i];
      const hit = ship.cords.some((c) => {
        return c[0] === cords[0] && c[1] === cords[1];
      });
      if (hit) {
        ship.hit();
        return;
      }
    }
    this.#missedAttackCords.push(cords);
  }
  checkShipCorrectnes({ cords, length }) {
    if (cords[0] > 9 || cords[1] > 9 || cords[0] < 0 || cords[1] < 0) {
      return false;
    } else if (length > 5 || length < 2) {
      return false;
    }
    for (let i = 0; i < this.ships.length; i++) {
      const ship = this.ships[i];
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
  getMissedAttackCords() {
    return this.#missedAttackCords;
  }
  fleetSunk() {
    return !this.ships.some((ship) => !ship.isSunk());
  }
}

export { GameBoard };
