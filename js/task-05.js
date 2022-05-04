const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const nameAnonymous = event => {
  nameOutput.textContent = event.currentTarget.value;

  if (!nameInput.value) {
    nameOutput.textContent = 'Anonymous';
  }
};

nameInput.addEventListener('input', nameAnonymous);

// nameInput.addEventListener('input', event => {
//   nameOutput.textContent = event.currentTarget.value;

//   if (!nameInput.value) {
//     nameOutput.textContent = 'Anonymous';
//   }
// });
// console.log(name);
