document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.querySelector("form")
  newTaskForm.addEventListener("submit", createNewTask);
});

function createNewTask() {
  const newTaskDescription = document.querySelector("input");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;
  document.querySelector("tasks").appendChild(task);
};
