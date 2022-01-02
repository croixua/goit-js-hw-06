const categories = document.querySelectorAll('ul#categories li.item')
const listOfCategories = document.querySelectorAll('ul#categories li.item')

console.log(`Number of categories: ${categories.length}`);

listOfCategories.forEach(itemElements => console.log(
    `Category: ${itemElements.firstElementChild.textContent}
Elements: ${itemElements.lastElementChild.children.length}
`));

