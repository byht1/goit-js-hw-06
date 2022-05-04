const form = document.querySelector('.login-form');
const email = form.firstElementChild.lastElementChild;
const buttonSubmit = form.lastElementChild;
const obj = {};
email.addEventListener('input', () => {
  obj.email = email.value;
  console.log(email.value);
});

buttonSubmit.addEventListener('submit', () => {
  obj.email = email.value;
});

console.log(obj);
