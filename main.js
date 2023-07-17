let form = document.getElementById("form");
let textInput = document.getElementById("textInput");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //stop refershing auto
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    console.log("BLANK FORM");
  } else {
    console.log("FORM SUBMITTED");
  }
};
