// Array of tasks (with their completion status)
let tasks = [
  { task: "Buy groceries", completed: false },
  { task: "Finish homework", completed: false },
  { task: "Clean the house", completed: true },
  { task: "Call Mom", completed: false }
];

// Function to create and display the to-do list
function displayTasks() {
  // Get the <ul> element to add tasks to
  const todoList = document.getElementById("todoList");
  
  // Clear the current list before re-displaying tasks
  todoList.innerHTML = "";
  
  // Loop through the tasks array
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");

    // Check if the task is completed using a conditional statement
    if (tasks[i].completed) {
      li.classList.add("completed");
    }

    // Create the text node for the task
    let taskText = document.createElement("span");
    taskText.textContent = tasks[i].task;
    
    // Create a button to toggle task completion
    let toggleButton = document.createElement("button");
    toggleButton.textContent = tasks[i].completed ? "Undo" : "Complete";
    
    // Add event listener to the button to toggle the completion status
    toggleButton.addEventListener("click", function() {
      tasks[i].completed = !tasks[i].completed;  // Toggle the completion status
      displayTasks();  // Re-display the tasks after toggling
    });

    // Append task text and button to the <li> element
    li.appendChild(taskText);
    li.appendChild(toggleButton);

    // Append the <li> to the <ul>
    todoList.appendChild(li);
  }
}

// Function to add a new task when the "Add New Task" button is clicked
document.getElementById("addTaskBtn").addEventListener("click", function() {
  let newTask = prompt("Enter a new task: ");
  if (newTask) {
    tasks.push({ task: newTask, completed: false });
    displayTasks();  // Re-display the tasks with the new one added
  }
});

// Display the initial tasks
displayTasks();
