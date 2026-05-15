
//filename:script6.js
function changeBackgroundColor() {
  // Select all <li> elements
  let items = document.getElementsByTagName("li");

  // Use a for...in loop to iterate through the items (HTMLCollection)
  for (let index in items) {
    // Only modify the items if the index is a number (avoid non-element properties)
    if (items.hasOwnProperty(index)) {
      items[index].style.backgroundColor = "lightgreen";  // Change the background color
    }
  }
}
