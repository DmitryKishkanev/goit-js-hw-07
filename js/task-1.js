const categoriesItemsByTagNameEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItemsByTagNameEl.length}`);

categoriesItemsByTagNameEl.forEach((element) => {
  console.log(
    `Category: ${element.firstElementChild.textContent} 
Elements: ${element.lastElementChild.children.length}`
  );
});
