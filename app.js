const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

//validate email
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

//show error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
// show success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
//getinputField
function getInput(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//check required
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getInput(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
//check length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getInput(input)} should be at least ${min} charecters long`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getInput(input)} should be maximum ${max} charecters long`
    );
  } else {
    showSuccess(input);
  }
}
//check password match
function checkPassword(pass1, pass2) {
  if (pass1.value !== pass2.value) {
    showError(pass2, `Password do not match`);
  }
}
//event listener

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, confirmPassword]);
  checkEmail(email);
  checkLength(username, 4, 8);
  checkLength(password, 6, 12);
  checkPassword(password, confirmPassword);
});
