const form = document.querySelector('.login-form');

const formValid = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    return alert('Всі елементи форми повині бути заповненими');
  }
  const obj = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(obj);

  event.currentTarget.reset();

  return;
};

form.addEventListener('submit', formValid);
