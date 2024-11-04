const shiplength = document.querySelector('#shipLength');
const cordsX = document.querySelector('#xCords');
const cordsY = document.querySelector('#yCords');
const direction = document.querySelector('#shipDirectionBtn');
function getShipInfo() {
  return {
    length: shiplength.value,
    xy: [Number(cordsX.value), Number(cordsY.value)],
    direction: direction.innerText,
  };
}
export default getShipInfo;
