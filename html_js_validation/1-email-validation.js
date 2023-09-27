
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("emailForm");
  form.addEventListener("submit", validateForm);
});
// Define the validateForm function that will be called when the form is submitted. This function will handle the validation logic.
function validateForm(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  const emailInput = document.getElementById("email");
  const errorElement = document.getElementById("error");

  const email = emailInput.value.trim(); // Retrieve the value entered in the email input field

  if (validateEmail(email)) {
    // If the email format is valid, allow the form submission
    form.submit();
  } else {
    // If the email format is invalid, display the error message
    errorElement.textContent = "Please enter a valid email address.";
  }
}
//Define the validateEmail function that will check if the email follows the standard email format
function validateEmail(email) {
  // Regular expression to match the standard email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
}
