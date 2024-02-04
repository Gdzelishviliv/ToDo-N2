const themeToggler = document.querySelector(".daynight-btn");
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  const is_dark_mode = document.body.classList.contains("dark-theme-variables");
  window.localStorage.setItem("dark-mode", is_dark_mode);
});
const input = document.querySelector(".inp-card input");
const todoItemsContainer = document.querySelector(".todo-items");

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && input.value.trim() !== "") {
    addTodoItem(input.value.trim());
    input.value = "";
  }
});
function addTodoItem(todoText) {
  const todoItem = document.createElement("div");
  todoItem.classList.add("item");
  todoItem.innerHTML = `
  <input type="checkbox" name="checkbox">
  <span id="heading">${todoText}</span>
  <button id="remove-btn"></button>
  `;

  const checkbox = todoItem.querySelector("input");
  const removeButton = todoItem.querySelector("#remove-btn");
  checkbox.addEventListener("change", function () {
    todoItem.classList.toggle("completed");
    updateItemsLeftCount();
  });

  removeButton.addEventListener("click", function () {
    if (checkbox.checked) {
      todoItem.remove();
    } else {
      return 0;
    }
    updateItemsLeftCount();
  });
  todoItemsContainer.appendChild(todoItem);
  updateItemsLeftCount();
}
function updateItemsLeftCount() {
  const itemsLeftCount = document.querySelectorAll(
    ".item:not(.completed"
  ).length;
  document.querySelector(
    ".item-footer h5"
  ).textContent = `${itemsLeftCount} item${
    itemsLeftCount !== 1 ? "s" : ""
  } left`;
}
const clearCompletedLink = document.querySelector("#clear");
function updateClearCompletedVisibility() {
  const completedItemsCount =
    document.querySelectorAll(".item.completed").length;
  clearCompletedLink.style.display = completedItemsCount > 0 ? "block" : "none";
}

clearCompletedLink.addEventListener("click", function () {
  document
    .querySelectorAll(".item.completed")
    .forEach(function (completedItem) {
      completedItem.remove();
    });
  updateItemsLeftCount();
});
