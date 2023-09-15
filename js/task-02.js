const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.getElementById("ingredients");

const listIngredients = ingredients.map((ingredient) =>{ 
const listIngredient = document.createElement("li");
listIngredient.textContent = ingredient;
listIngredient.classList.add("item");
return listIngredient;
})

ulIngredients.append(...listIngredients);