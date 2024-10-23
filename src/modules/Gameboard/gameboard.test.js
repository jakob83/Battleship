import { sharing } from 'webpack';
import { GameBoard } from './gameboard';
let fakeShip;
let fakeShip2;
let board;

beforeEach(() => {
  fakeShip = {
    length: 3,
    cords: [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    hit: jest.fn(), // mock the hit function
    isSunk: jest.fn(),
  };

  fakeShip2 = {
    length: 4,
    cords: [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    hit: jest.fn(), // mock the hit function,
    isSunk: jest.fn(),
  };

  board = new GameBoard();
  board.addShip(fakeShip);
  board.addShip(fakeShip2);
});

describe('addShip() function works', () => {
  test('adding 1 ship makes ships.length be 1', () => {
    const fakeShip3 = {
      length: 4,
      cords: [
        [3, 3],
        [3, 4],
        [3, 5],
        [3, 6],
      ],
      hit: jest.fn(), // mock the hit function,
      isSunk: jest.fn(),
    };
    board.addShip(fakeShip3);
    expect(board.shipsQuantity).toBe(3); // bcs already added 2 above
  });
  test('should check, for if the ships cords arent already used, or outside the board', () => {
    const shipWithWrongCords = {
      length: 4,
      cords: [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      hit: jest.fn(), // mock the hit function,
      isSunk: jest.fn(),
    };
    expect(board.addShip(shipWithWrongCords)).toBe(false);
    expect(board.shipsQuantity).toBe(2); // like before
  });
});

describe('receiveAttack() function works', () => {
  test('adding 1 ship and attacking it, calls the hit function on the hitted ship', () => {
    let fakeHitLog = jest.spyOn(fakeShip, 'hit');
    board.receiveAttack([0, 0]);
    expect(fakeHitLog).toHaveBeenCalled();
  });
  test('If its not a hit the hit function shouldnt be called', () => {
    let fakeHitLog = jest.spyOn(fakeShip, 'hit');
    let fakeHitLog2 = jest.spyOn(fakeShip2, 'hit');

    board.receiveAttack([3, 3]);
    expect(fakeHitLog).not.toHaveBeenCalled();
    expect(fakeHitLog2).not.toHaveBeenCalled();
  });
  test('should keep track of missed shots', () => {
    board.receiveAttack([3, 3]);
    board.receiveAttack([0, 1]); // hit
    board.receiveAttack([1, 1]); // hit
    board.receiveAttack([3, 9]);
    expect(board.getMissedCords()).toEqual([
      [3, 3],
      [3, 9],
    ]);
  });
});
describe('Board is able to report if all ships have sunk', () => {
  test('sink all ships and check if fleetSunk() reports true', () => {
    fakeShip.isSunk.mockReturnValueOnce(true);
    fakeShip2.isSunk.mockReturnValueOnce(true);
    expect(board.fleetSunk()).toBe(true);
  });
});

describe('can generate 5 random Ships', () => {
  test('board has 5 ships after running addRandomShips()', () => {
    const newBoard = new GameBoard();
    newBoard.addRandomShips();
    expect(newBoard.shipsQuantity).toBe(5);
    expect(newBoard.getShips()[0].length).toBe(2);
    expect(newBoard.getShips()[1].length).toBe(3);
    expect(newBoard.getShips()[2].length).toBe(3);
    expect(newBoard.getShips()[3].length).toBe(4);
    expect(newBoard.getShips()[4].length).toBe(5);
  });
  test('lengths are right', () => {
    const newBoard = new GameBoard();
    newBoard.addRandomShips();

    expect(newBoard.getShips()[0].length).toBe(2);
    expect(newBoard.getShips()[1].length).toBe(3);
    expect(newBoard.getShips()[2].length).toBe(3);
    expect(newBoard.getShips()[3].length).toBe(4);
    expect(newBoard.getShips()[4].length).toBe(5);
  });
});
