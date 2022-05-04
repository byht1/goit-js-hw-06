const input = document.querySelector('#font-size-control');
const valiadleText = document.querySelector('#text');

input.addEventListener('input', () => {
  valiadleText.style.fontSize = `${input.value}px`;
});
