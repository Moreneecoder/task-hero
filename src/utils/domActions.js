const meals = [
  {
    type: 'African Dish',
    name: 'Amala with Efo Riro and Assorted Meat',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum',
    price: '2,500',
  },
  {
    type: 'Beverage',
    name: 'Inui Protein Shake',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum',
    price: '1,400',
  },
  {
    type: 'African Dish',
    name: 'Pounded Yam with Egusi and Assorted Meat',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum',
    price: '3,000',
  },
  {
    type: 'Beverage',
    name: 'Oreo Latte',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum',
    price: '2,000',
  },
];

const removeChildWithinParent = (parent, childList) => {
  childList.forEach((child) => {
    const childNode = document.getElementById(child);
    if (parent.contains(childNode)) {
      parent.removeChild(childNode);
    }
  });
};

const addTabContent = (parent, child, component) => {
  const childNode = document.getElementById(child);
  if (!parent.contains(childNode)) {
    parent.appendChild(component);
  }
};

const loadMealsTo = (menuRow) => {
  meals.forEach((meal) => {
    const mealCol = document.createElement('div');
    mealCol.classList.add('meal', 'col-12', 'col-md-6', 'mb-5');

    mealCol.innerHTML = `
              <span class="theme-bg text-white p-1 rounded">${meal.type}</span>
              <div class="mt-1 meal-col-flex">
                  <div class="me-2">
                      <h5 class="mb-0">${meal.name}</h5>
                      <small class="text-muted">${meal.description}</small>
                  </div>
  
                  <h5 class="text-danger">&#8358; ${meal.price}</h5>
              </div>
          `;

    menuRow.appendChild(mealCol);
  });

  return menuRow;
};

export { removeChildWithinParent, addTabContent, loadMealsTo };