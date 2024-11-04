export default function displayError(msg) {
  const errorMsgP = document.querySelector('#errorMsgP');
  errorMsgP.innerText = msg;
  toggleErrorClass();
}

export function toggleErrorClass() {
  const errorDiv = document.querySelector('#errorDiv');
  errorDiv.classList.toggle('invisible');
}
