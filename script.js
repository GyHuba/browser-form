const form = document.querySelector("form");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zipCode = document.querySelector("#zip-code");
const password = document.querySelector("#password");
const passwordRe = document.querySelector("#repassword");
const emailError = document.querySelector(".email-error");
const countryError = document.querySelector(".country-error");
const zipCodeError = document.querySelector(".zip-code-error");
const passwordError = document.querySelector(".password-error");
const passwordReError = document.querySelector(".repassword-error");

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
    email.className = "input valid";
  } else {
    email.className = "input invalid";
    showError(email, emailError);
  }
});

country.addEventListener("input", () => {
  if (country.validity.valid) {
    countryError.textContent = "";
    countryError.className = "error";
    country.className = "input valid";
  } else {
    country.className = "input invalid";
    showError(country, countryError);
  }
});

zipCode.addEventListener("input", () => {
  if (isValidUSZip(zipCode.value)) {
    zipCodeError.textContent = "";
    zipCodeError.className = "error";
    zipCode.className = "input valid";
  } else {
    zipCode.className = "input invalid";
    zipCodeError.textContent = "You need to enter a valid Zip-Code";
    zipCodeError.className = "error active";
  }
});

password.addEventListener("input", () => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
    password.className = "input valid";
    passwordValidation(passwordError);
  } else {
    password.className = "input invalid";
    showError(password, passwordError);
  }
});

passwordRe.addEventListener("input", () => {
  if (passwordRe.validity.valid) {
    passwordReError.textContent = "";
    passwordReError.className = "error";
    password.className = "input valid";
    passwordValidation(passwordReError);
  } else {
    passwordRe.className = "input invalid";
    showError(passwordRe, passwordReError);
  }
});

function passwordValidation(inputError) {
  if (password.value !== passwordRe.value) {
    inputError.textContent = "The two passwords dont match.";
    inputError.className = "error active";
  }
  else{
    passwordError.className = 'error'
    passwordReError.className = 'error'
  }
}

function showError(input, inputError) {
  if (input.validity.valueMissing) {
    inputError.textContent = `You need to enter a/an ${input.type}`;
  } else if (input.validity.typeMismatch) {
    inputError.textContent = `Entered value needs to be an ${input.type}.`;
  } else if (input.validity.tooShort) {
    inputError.textContent = `Value should be at least ${input.minLength} characters, you entered ${input.value.length}.`;
  }
  inputError.className = "error active";
}

function isValidUSZip(sZip) {
  return /^\d{5}(-\d{4})?$/.test(sZip);
}

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    console.log("invalid");
    event.preventDefault();
  }
});
