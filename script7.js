
//studentName:LN, FN MI
//filename:script7.js
function updateToDoList() {
  // Get all the <li> elements in the list
  let items = document.getElementById("todoList").getElementsByTagName("li");

  // Loop through each list item
  for (let i = 0; i < items.length; i++) {
    let checkbox = items[i].getElementsByTagName("input")[0];

    // Check if the checkbox is checked
    if (checkbox.checked) {
      // If checked, add the "completed" class to the list item
      items[i].classList.add("completed");
    } else {
      // If not checked, remove the "completed" class
      items[i].classList.remove("completed");
    }
  }
}
