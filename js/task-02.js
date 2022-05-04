const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

const array = ingredients.map(x => {
  const elementLi = document.createElement('li');
  elementLi.textContent = x;
  elementLi.classList.add('item');
  return elementLi;
});

list.append(...array);
