export default function toggleDirectionOnBtn(e) {
  if (e.target.innerText === 'horizontal') {
    e.target.innerText = 'vertical';
    return;
  }
  e.target.innerText = 'horizontal';
}
