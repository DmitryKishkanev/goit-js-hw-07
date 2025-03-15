const refs = {
  spanEl: document.querySelector("#value"),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

refs.decrementBtn.addEventListener("click", onDecrementClick);
refs.incrementBtn.addEventListener("click", onincrementClick);

function onDecrementClick(event) {
  refs.spanEl.textContent = counterValue -= 1;
}

function onincrementClick(event) {
  refs.spanEl.textContent = counterValue += 1;
}
