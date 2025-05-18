const inputBox = document.getElementById("task-input");
const button = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

function createNewItem(content) {
  const listItem = document.createElement("list"); // Container for task
  const textBox = document.createElement("input"); // Actual task text
  const deleteBtn = document.createElement("button"); // Delete button

  // Style the input box
  textBox.type = "text";
  textBox.classList.add("textBox");
  textBox.value = content;
  textBox.placeholder = "Insert";

  // Style the delete button
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");

  // When the delete button is clicked
  deleteBtn.addEventListener("click", () => listItem.remove());

  // Build the task item
  listItem.appendChild(textBox);
  listItem.appendChild(deleteBtn);
  taskList.appendChild(listItem);
}

// When the "Add" button is clicked
button.addEventListener("click", () => {
  createNewItem(inputBox.value);
  inputBox.value = ""; // Clear the input box
});
