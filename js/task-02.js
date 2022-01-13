const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsEl = document.querySelector('#ingredients');

const nameIngredients = products => {
  return products.map(product => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = product;

    return itemEl;
  });
};

const itemIngredientsEl = nameIngredients(ingredients);

listIngredientsEl.append(...itemIngredientsEl);
