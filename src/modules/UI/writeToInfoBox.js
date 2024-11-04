const infoTextEl = document.querySelector('#infoText');
export default function writeToInfoBox(msg) {
  infoTextEl.innerText = msg;
  setTimeout(resetInfoBox, 3000);
}

function resetInfoBox() {
  infoTextEl.innerText = '';
}
