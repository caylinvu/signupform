const allInputs = document.querySelectorAll("input");
const password = document.querySelector(".pwd");
const passwordConfirmation = document.querySelector(".pwd-conf");
const pwdSpan = document.querySelector(".pwd-span");
const submitBtn = document.querySelector("button");

// add "text-present" class to inputs after text has been entered (to only add invalidstyling after text has been entered)
allInputs.forEach((input) => input.addEventListener('keyup', () => {
    if (input.value.length > 0) {
        input.classList.add("text-present");
    }
}));

// add/remove "no-match" class when typing in password (to add/remove password confirmation text if passwords match or don't match)
passwordConfirmation.addEventListener('keyup', () => {
    if (passwordConfirmation.value != password.value) {
        passwordConfirmation.classList.add("no-match");
        passwordConfirmation.setCustomValidity('Passwords do not match');
    } else if (passwordConfirmation.value == password.value) {
        passwordConfirmation.classList.remove("no-match");
        passwordConfirmation.setCustomValidity('');
    }
});

password.addEventListener('keyup', () => {
    if (passwordConfirmation.value != password.value) {
        passwordConfirmation.classList.add("no-match");
        passwordConfirmation.setCustomValidity('Passwords do not match');
    } else if (passwordConfirmation.value == password.value) {
        passwordConfirmation.classList.remove("no-match");
        passwordConfirmation.setCustomValidity('');
    }
});

// add "submitted" class to inputs when press submit button (to show invalid styling if submit button is pressed)
submitBtn.addEventListener('click', () => {
    allInputs.forEach((input) => input.classList.add("submitted"));
});
