//script3.js
function changeColor() {
    // Get all <li> elements
    let items = document.getElementsByTagName("li");
  
    // Select the first <li> item (no looping, just the first one)
    let firstItem = items[0];
  
    // Use switch based on the text content of the first item
    switch (firstItem.textContent) {
      case "Apple":
        firstItem.style.color = "green";  // Green for Apple
        break;
      case "Carrot":
        firstItem.style.color = "orange";  // Orange for Carrot
        break;
      case "Banana":
        firstItem.style.color = "yellow";  // Yellow for Banana
        break;
      default:
        firstItem.style.color = "black";  // Default color if no match
    }
  }
  