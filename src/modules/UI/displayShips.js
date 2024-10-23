function displayShips(ships, containerDOM) {
  const nodes = containerDOM.children;
  ships.forEach((ship) => {
    for (let i = 0; i < ship.cords.length; i++) {
      const c = ship.cords[i];
      const index = cordsToIndex(c);
      addShipClass(nodes[index]);
    }
  });
}
function displayShotsOnBoard(board, containerDOM) {
  const nodes = containerDOM.children;
  const hits = board.getHittedCords();
  const misses = board.getMissedCords();

  misses.forEach((cords) => {
    const index = cordsToIndex(cords);
    addAttackedClass(nodes[index]);
  });

  hits.forEach((cords) => {
    const index = cordsToIndex(cords);
    addHittedClass(nodes[index]);
  });
}
function addHittedClass(el) {
  el.classList.add('hit');
}
function addAttackedClass(el) {
  el.classList.add('attacked');
}
function addShipClass(el) {
  el.classList.add('ship');
}
function cordsToIndex(cords) {
  return (9 - cords[1]) * 10 + cords[0];
}

export { displayShips, displayShotsOnBoard };
