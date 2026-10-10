let birthYearInput = document.getElementById("birthYear");

let button = document.getElementById("calculatebtn");

let result = document.getElementById("result");

button.addEventListener("click", function() {

    let birthYearValue = Number(birthYearInput.value);
    
    let currentYear = new Date().getFullYear(2026);

    if (!birthYearInput.value || birthYearValue <= 0) {

        result.textContent = "Please Enter Your Birth Year correctly";

        return;

    }

    if (!Number.isInteger(birthYearValue)) {

        result.textContent = "Birth year must be a whole number, not a decimal.";

        return;

    }

    if (birthYearValue > currentYear) {

        result.textContent = "You can't be born in the future!";

        return;

    }

    let age = currentYear - birthYearValue;

    result.textContent = "Your Age is :-   " + age;

});
