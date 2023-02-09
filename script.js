const allInputs = document.querySelectorAll("input");

// add "text-present" class to inputs after text has been entered
allInputs.forEach((input) => input.addEventListener('keyup', () => {
    if (input.value.length > 0) {
        input.classList.add("text-present");
        console.log(input.className);
    }
}));