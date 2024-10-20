import { Ship } from './ship';

describe('isSunk() function works', () => {
  let ship = new Ship(5);
  test('isSunk returns false when only one square was hit', () => {
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });
  test('isSunk returns true when more Squares where hit than ship.length', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
