const mockDatabase = JSON.parse(localStorage.getItem("mockDatabase")) || {};

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (mockDatabase[email] && mockDatabase[email] === password) {
    alert("Login successful!");
  } else {
    alert("Invalid email or password. Please try again.");
  }
});
