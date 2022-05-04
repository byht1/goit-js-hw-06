const input = document.querySelector('#validation-input');
const dataLength = Number(input.dataset.length);

const whereToHengClass = () => {
  const currentInpur = input.value.length;
  if (currentInpur === dataLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
};

input.addEventListener('blur', whereToHengClass);
