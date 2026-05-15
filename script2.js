//filename:script2.js
function colorItems() {
    // Select all elements with the class "fruit"
    let fruits = document.querySelectorAll(".fruit");
  
    // Select all elements with the class "vegetable"
    let vegetables = document.querySelectorAll(".vegetable");
  
    // Conditional check for fruit elements
    if (fruits.length > 0) {
      fruits[0].style.color = "green";  // Change the color of the first fruit item
    } else if (vegetables.length > 0) {
      vegetables[0].style.color = "orange";  // Change the color of the first vegetable item
    } else {
      document.body.style.backgroundColor = "lightgray";  // Change background color if no items are found
    }
  }
  