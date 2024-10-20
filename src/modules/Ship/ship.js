class Ship {
  constructor(length, cords) {
    this.length = length;
    this.cords = cords;
  }
  #hits = 0;
  hit() {
    this.#hits += 1;
  }
  isSunk() {
    if (this.length <= this.#hits) {
      return true;
    }
    return false;
  }
  static calcCords({ xy, length, direction }) {
    let cords = [];
    let [x, y] = xy;

    if (direction === 'vertical') {
      for (let i = 0; i < length; i++) {
        cords.push([x, y + i]);
      }
      return cords;
    } else if (direction === 'horizontal') {
      for (let i = 0; i < length; i++) {
        cords.push([x + i, y]);
      }
      return cords;
    } else {
      return null;
    }
  }
}

export { Ship };
