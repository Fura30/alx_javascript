
   function validatePassword(event) {
     event.preventDefault(); // Prevent form submission

     // Retrieve the value entered in the password input field
     var password = document.getElementById("password").value;

     // Regular expressions to check the password criteria
     var lengthRegex = /.{8,}/;
     var uppercaseRegex = /[A-Z]/;
     var lowercaseRegex = /[a-z]/;
     var numericRegex = /[0-9]/;
     var specialCharRegex = /[!@#$%^&*]/;

     // Check if the password meets all the criteria
     if (
       lengthRegex.test(password) &&
       uppercaseRegex.test(password) &&
       lowercaseRegex.test(password) &&
       numericRegex.test(password) &&
       specialCharRegex.test(password)
     ) {
       // Allow form submission
       document.getElementById("error").textContent = "";
       document.getElementById("passwordForm").submit();
     } else {
       // Display error message
       document.getElementById("error").textContent =
         "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.";
     }
   }
   