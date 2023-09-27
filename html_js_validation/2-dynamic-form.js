document.addEventListener("DOMContentLoaded", function() {
  const numFieldsDropdown = document.getElementById("numFields");
  numFieldsDropdown.addEventListener("change", generateInputFields);
});

function generateInputFields() {
  const numFieldsDropdown = document.getElementById("numFields");
  const numFields = parseInt(numFieldsDropdown.value); // Retrieve the selected value from the dropdown menu

  const inputContainer = document.getElementById("inputContainer");
  inputContainer.innerHTML = ""; // Clear any existing input fields

  for (let i = 1; i <= numFields; i++) {
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = "field" + i;
    inputContainer.appendChild(inputField);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("dynamicForm");
  form.addEventListener("submit", validateForm);
});


function validateForm(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  const inputFields = document.querySelectorAll("#inputContainer input");
  let allFieldsFilled = true;

  for (let i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value.trim() === "") {
      allFieldsFilled = false;
      break;
    }
  }

  if (allFieldsFilled) {
    // If all fields are filled, allow the form submission
    form.submit();
  } else {
    // If any field is empty, display the error message
    alert("Please fill in all fields.");
  }
}



