const form = document.querySelector('.login-form');

const formValid = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    return alert('Всі елементи форми повині бути заповненими');
  }
  const formData = new FormData(event.currentTarget);

  event.currentTarget.reset();

  return formData;
};

form.addEventListener('submit', formValid);
