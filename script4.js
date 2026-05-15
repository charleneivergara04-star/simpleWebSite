//filename:script4.js
function colorItems() {
    // Select all <li> elements
    let items = document.getElementsByTagName("li");
  
    // Loop through each <li> element and change the background color
    for (let i = 0; i < items.length; i++) {
      items[i].style.backgroundColor = "lightblue";  // Change background color for all items
    }
  }
  