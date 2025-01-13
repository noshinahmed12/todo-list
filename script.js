function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task !== "") {
    const list = document.getElementById("todoList");
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editTask(span);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTask(listItem);

    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    list.appendChild(listItem);

    input.value = "";
        }
  else{
    alert("Enter a valid task");
  }
} 
    
function editTask(span) {
  const newTask = prompt("Edit your task: ", span.textContent);
  if (newTask !== null && newTask.trim() !== "") {
    span.textContent = newTask.trim(); 
  }
}

function deleteTask(task){
  const list = document.getElementById('todoList');
  list.removeChild(task);
}
