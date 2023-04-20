const form = document.querySelector("#form");

const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const postalCodeInput = document.getElementById("postalCode");

const nameRegex = /^[A-Za-z]+((\s)?([A-Za-z])+)*$/;
const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const postalCodeRegex = /^[^DFIOQWUZ\d][\d][^DFIOQU\d]\s?[\d][^DFIOQU\d][\d]$/;

// Event listener to validate input on keyup event
form.addEventListener("keyup", () => {
  const firstName = firstNameInput.value.trim();
  const inFirstName = firstNameInput.nextElementSibling;
  if (!nameRegex.test(firstName)) {
    inFirstName.innerHTML = "Please enter a valid first name.";
    firstNameInput.classList.add("is-invalid");
  } else {
    inFirstName.innerHTML = "";
    firstNameInput.classList.remove("is-invalid");
  }

  const lastName = lastNameInput.value.trim();
  const inLastName = lastNameInput.nextElementSibling;
  if (!nameRegex.test(lastName)) {
    inLastName.innerHTML = "Please enter a valid last name.";
    lastNameInput.classList.add("is-invalid");
  } else {
    inLastName.innerHTML = "";
    lastNameInput.classList.remove("is-invalid");
  }

  const email = emailInput.value.trim();
  const inEmail = emailInput.nextElementSibling;
  if (!emailRegex.test(email)) {
    inEmail.innerHTML = "Please enter a valid Email .";
    emailInput.classList.add("is-invalid");
  } else {
    inEmail.innerHTML = "";
    emailInput.classList.remove("is-invalid");
  }

  const postalCode = postalCodeInput.value.trim();
  const inPos = postalCodeInput.nextElementSibling;
  if (!postalCodeRegex.test(postalCode)) {
    inPos.innerHTML = "Please enter a valid postal code.";
    postalCodeInput.classList.add("is-invalid");
  } else {
    inPos.innerHTML = "";
    postalCodeInput.classList.remove("is-invalid");
  }
});

let questionRadio = document.getElementById("question");
let commentRadio = document.getElementById("comment");
let hiringRadio = document.getElementById("hiring");

let hourlyRateDiv = document.getElementById("hourly-rate");

hiringRadio.addEventListener("click", (e) => {
  hourlyRateDiv.style.display = "block";
});

questionRadio.addEventListener("click", (e) => {
  hourlyRateDiv.style.display = "none";
  hourlyRateInput.value = "";
});

commentRadio.addEventListener("click", (e) => {
  hourlyRateDiv.style.display = "none";
  hourlyRateInput.value = "";
});
