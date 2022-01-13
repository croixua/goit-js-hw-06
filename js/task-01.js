const listOfCategories = document.querySelectorAll('ul#categories li.item');

console.log(`Number of categories: ${listOfCategories.length}`);
listOfCategories.forEach(itemElements => {
  console.log(`Category: ${itemElements.firstElementChild.textContent}`);
  console.log(`Elements: ${itemElements.lastElementChild.children.length}`);
});
