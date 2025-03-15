const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const makeIngredientsElelements = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingredienEl = document.createElement("li");
    ingredienEl.classList.add("item");
    ingredienEl.textContent = ingredient;
    return ingredienEl;
  });
};

const ingredientsElelements = makeIngredientsElelements(ingredients);
ingredientsEl.append(...ingredientsElelements);
