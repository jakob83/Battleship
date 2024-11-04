function displayShips(ships, containerDOM, onlySunken) {
  const nodes = containerDOM.children;
  ships.forEach((ship) => {
    let cls = 'ship';
    if (onlySunken) {
      if (ship.isSunk()) {
        cls = 'sunk';
      } else {
        return;
      }
    }

    for (let i = 0; i < ship.cords.length; i++) {
      const c = ship.cords[i];
      const index = cordsToIndex(c);
      addClass(nodes[index], cls);
    }
  });
}
function displayShotsOnBoard(board, containerDOM) {
  const nodes = containerDOM.children;
  const hits = board.getHittedCords();
  const misses = board.getMissedCords();

  misses.forEach((cords) => {
    const index = cordsToIndex(cords);
    addClass(nodes[index], 'attacked');
  });

  hits.forEach((cords) => {
    const index = cordsToIndex(cords);
    addClass(nodes[index], 'hit');
  });
}

function addClass(el, c) {
  el.classList.add(c);
}
function cordsToIndex(cords) {
  return (9 - cords[1]) * 10 + cords[0];
}

export { displayShips, displayShotsOnBoard };
