//filename:script.js
function checkAge() {
  // Get the input value
  let age = document.getElementById("ageInput").value;
  
  // Get the message element to display the result
  let message = document.getElementById("message");
  
  // Conditional check
  if (age >= 18) {
    message.innerHTML = "You are an adult!";
    document.body.style.backgroundColor = "#4CAF50";  // Green for adults
  } else {
    message.innerHTML = "You are a minor!";
    document.body.style.backgroundColor = "#FF5733";  // Red for minors
  }
}
