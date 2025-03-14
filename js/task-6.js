function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  numberInput: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxEl: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  refs.boxEl.innerHTML = "";

  let baseSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const createdBoxEl = document.createElement("div");
    createdBoxEl.style.display = "inline-block";
    createdBoxEl.style.width = `${baseSize + i * 10}px`;
    createdBoxEl.style.height = `${baseSize + i * 10}px`;
    createdBoxEl.style.marginTop = "10px";
    createdBoxEl.style.marginRight = "10px";
    createdBoxEl.style.backgroundColor = getRandomHexColor();

    refs.boxEl.append(createdBoxEl);
  }
}

refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick(event) {
  const amount = refs.numberInput.value;

  createBoxes(amount);
}

function onDestroyBtnClick(event) {
  refs.boxEl.innerHTML = "";
  refs.numberInput.value = "";
}
