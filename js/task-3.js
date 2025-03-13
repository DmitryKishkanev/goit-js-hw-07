const refs = {
  textInputFieldEl: document.querySelector("#name-input"),
  nameOutputEl: document.querySelector("#name-output"),
};

refs.textInputFieldEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.nameOutputEl.textContent = event.currentTarget.value;

  if (event.currentTarget.value.trim() === "") {
    refs.nameOutputEl.textContent = "Anonymous";
  }
}
