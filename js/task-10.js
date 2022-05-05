function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randoms() {
  return ('000000000' + Math.random().toString(36).substr(2, 9)).slice(-9);
}

const rest = {
  interface: document.querySelector('#controls'),
  startButton: document.querySelector('[data-create]'),
  deleteButton: document.querySelector('[data-destroy]'),
  conteinet: document.querySelector('#boxes'),
};
let array = [];

const construcror = event => {
  const a = document.getElementsByTagName('input')[0].value;

  for (let i = 1; i <= a; i += 1) {
    const element = document.createElement('div');
    element.id = `${randoms()}`;
    element.style.width = `${30 + i * 10}px`;
    element.style.height = `${30 + i * 10}px`;
    element.style.backgroundColor = `${getRandomHexColor()}`;

    array.push(element);
  }

  rest.conteinet.append(...array);
};

const construcrorDelete = () => {
  const a = rest.conteinet;
  while (a.firstChild) {
    a.removeChild(a.firstChild);
  }
  array = [];
};

rest.startButton.addEventListener('click', construcror);
rest.deleteButton.addEventListener('click', construcrorDelete);
