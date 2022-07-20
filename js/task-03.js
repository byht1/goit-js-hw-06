const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery');

// const elementPhoto = ({ url, alt }) => {
//   const elementLi = document.createElement('li');
//   elementLi.classList.add('element');

//   const photo = document.createElement('img');
//   photo.src = url;
//   photo.alt = alt;
//   photo.classList.add('element__photo');

//   elementLi.append(photo);

//   return elementLi;
// };

// const array = images.map(elementPhoto);
// list.append(...array);

const elementPhoto = ({ url, alt }) =>
  `<li class='element'> <img class='element__photo' src='${url}' alt='${alt}'/></li>`;
const array = images.map(elementPhoto).join('');

list.insertAdjacentHTML('beforeend', array);
