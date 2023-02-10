const allInputs = document.querySelectorAll("input");
const password = document.querySelector(".pwd");
const passwordConfirmation = document.querySelector(".pwd-conf");
const pwdSpan = document.querySelector(".pwd-span");
const submitBtn = document.querySelector("button");

// validates password confirmation
function validatePassword() {
    if (passwordConfirmation.value != password.value) {
        passwordConfirmation.classList.add("no-match");
        passwordConfirmation.setCustomValidity('Passwords do not match');
    } else if (passwordConfirmation.value == password.value) {
        passwordConfirmation.classList.remove("no-match");
        passwordConfirmation.setCustomValidity('');
    }
}

passwordConfirmation.addEventListener('keyup', validatePassword);
password.addEventListener('keyup', validatePassword);

// adds invalid styling to inputs only after text has been entered
allInputs.forEach((input) => input.addEventListener('keyup', () => {
    if (input.value.length > 0) {
        input.classList.add("text-present");
    }
}));


// keeps invalid styling on invalid inputs after submitting
submitBtn.addEventListener('click', () => {
    allInputs.forEach((input) => input.classList.add("submitted"));
});

