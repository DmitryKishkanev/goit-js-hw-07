function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  spanColorEl: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
};

refs.changeColorBtn.addEventListener("click", onClick);

function onClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.spanColorEl.textContent = document.body.style.backgroundColor;
}
