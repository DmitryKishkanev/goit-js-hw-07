const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const formData = {
    email: formElements.email.value.trim(),
    password: formElements.password.value.trim(),
  };

  if (
    formElements.email.value.trim() === "" ||
    formElements.password.value.trim() === ""
  ) {
    window.alert("All form fields must be filled in");
  } else {
    console.log(formData);
    formEl.reset();
  }
}
