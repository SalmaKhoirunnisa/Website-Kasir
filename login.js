document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginButton = document.getElementById("loginButton");
  
    loginButton.addEventListener("click", function () {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Add your login logic here
      if (validateCredentials(username, password)) {
        // Successful login
        showDashboard();
      } else {
        alert("Invalid credentials. Please try again.");
      }
    });
  
    function validateCredentials(username, password) {
      // Add your validation logic here (e.g., check against a predefined username and password)
      return username === "exampleUser" && password === "examplePassword";
    }
  
    function showDashboard() {
      // Hide the login page and show the dashboard page
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("dashboardPage").style.display = "block";
    }
  });
  