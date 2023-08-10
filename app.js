const form = document.querySelector("form");

form.addEventListener("Submit", function (event) {
  event.preventDefault();
  const place = document.querySelector("input#place");
  const like_to_see = document.querySelector("input#like_to_see");
  const stay = document.querySelector("input#stay");
  const dob = document.querySelector("input#dob");
  const gender = document.querySelector("input#gender");
  const occupation = document.querySelector("input#occupation");
  const formButton = document.querySelector("button");
  formButton.textContent = console.log{
    place: place.value,
    like_to_see: like_to_see.value,
    stay: stay.value,
    dob: dob.value,
    gender: gender.value,
    occupation: occupation.value,
  };
})