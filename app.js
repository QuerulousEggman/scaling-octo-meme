const form = document.querySelector("form");

form.addEventListener("Submit", function (event) {
  event.preventDefault();
  const dob = document.querySelector("input#dob");
  const formButton = document.querySelector("button");
  formButton.textContent = console.log(dob.value);
})