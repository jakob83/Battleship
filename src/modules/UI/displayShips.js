function displayShips(ships, containerDOM) {
  const nodes = containerDOM.children;
  ships.forEach((ship) => {
    for (let i = 0; i < ship.cords.length; i++) {
      const c = ship.cords[i];
      const index = calcIndex(c);
      addShipClass(nodes[index]);
    }
  });
}
function calcIndex(cords) {
  return (9 - cords[1]) * 10 + cords[0];
}
function addShipClass(el) {
  el.classList.add('ship');
}
export default displayShips;
