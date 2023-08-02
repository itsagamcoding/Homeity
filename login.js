// Get references to the form and message elements
var loginForm = document.getElementById("loginForm");
var messageDiv = document.getElementById("message");
var webPage = document.getElementById("website");
var loginDiv = document.getElementById("login")

// Define valid login credentials (for demonstration purposes)
const validUsername = "itsagam";
const validPassword = "itspass";

// Event listener for the form submission
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the entered username and password
  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  // Check if the entered credentials match the valid ones
  if (enteredUsername == validUsername && enteredPassword == validPassword) {
    // Successful login - display a success message
    alert("Login Successfull !")
    webPage.style.display = "block";
    loginDiv.style.display = "none";


  } else {
    // Failed login - display an error message
    messageDiv.textContent = "Invalid username or password. Please try again.";
  }

  // Clear the form fields after login attempt
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});
