
// Function to handle form submission
function handleFormSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve form field values
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Check if name and email are filled
  if (name === "" || email === "") {
    // Display an error message for empty fields
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "Please fill in all required fields";
  } else {
    // Clear any previous error messages
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "";

    // Display a success message
    const successMessage = document.getElementById("success-message");
    successMessage.textContent = "Form submitted successfully!";
  }
}

// Add an event listener to the form element
const submitForm = document.getElementById("submitForm");
submitForm.addEventListener("submit", handleFormSubmit);
 




