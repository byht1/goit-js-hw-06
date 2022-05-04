const list = document.querySelector('#categories');

const listItem = list.querySelectorAll('.item');
console.log('Number of categories:', listItem.length);

// firstElementChild
for (const el of listItem) {
  const title = el.firstElementChild;
  const titlrList = el.querySelectorAll('li');
  console.log('Category:', title.textContent);
  console.log('Elements:', titlrList.length);
}
