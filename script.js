const addButton = document.querySelector(".button");
const input = document.querySelector(".input");
const todoList = document.querySelector(".todo-list");

addButton.addEventListener("click", () => {
  let inputValue = input.value;
  if (inputValue.length <= 5 || inputValue.length > 40) {
    alert("Invalid input. Try again");
  } else {
    let newTask = document.createElement("li");
    newTask.textContent = inputValue;
    newTask.classList.add("list-style");

    let button = document.createElement("button");
    button.textContent = "Remove";
    button.classList.add("remove-button");

    newTask.appendChild(button);
    todoList.appendChild(newTask);

    input.value = "";

    button.addEventListener("click", () => {
      newTask.remove();
      button.remove();
    });
  }
});
