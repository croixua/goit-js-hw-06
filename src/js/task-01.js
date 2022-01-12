const listOfCategories = document.querySelectorAll('ul#categories li.item');

listOfCategories.forEach(itemElements =>
  console.log(
    `Category: ${itemElements.firstElementChild.textContent}
Elements: ${itemElements.lastElementChild.children.length}
`,
  ),
);
