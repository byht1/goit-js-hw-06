let counterValue = 0;

const buttonPlus = document.querySelector('[data-action= "increment"]');
const buttonMinus = document.querySelector('[data-action= "decrement"]');
const scout = document.querySelector('#value');

buttonPlus.addEventListener('click', () => {
  counterValue += 1;
  scout.textContent = counterValue;
  //   console.log(counterValue);
});

buttonMinus.addEventListener('click', () => {
  counterValue -= 1;
  scout.textContent = counterValue;
  //   console.log(counterValue);
});
