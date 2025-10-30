const input = document.querySelector("input");
const add = document.querySelector(".add");
const tasklist = document.querySelector(".tasklist");

add.addEventListener("click", () => {
  if (input.value.trim() === "") return; // stop empty tasks

  rendertask(input.value);
  savelocalstorage(input.value);
  input.value = "";
//   document.querySelector(".notaskyet").classList.add("hidden");
});

function rendertask(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;
  li.classList.add("font-semibold", "flex", "justify-between", "items-center", "bg-gray-100", "p-2", "rounded-md", "mb-2");

  const del = document.createElement("button");
  del.textContent = "Delete";
  del.classList.add("px-3", "py-1", "text-white", "bg-red-600", "rounded-md", "hover:bg-red-700");

  del.addEventListener("click", () => {
    li.remove();
    removeFromLocalStorage(taskText);
    if (tasklist.children.length === 0) {
    //   document.querySelector(".notaskyet").classList.remove("hidden");
    }
  });

  li.appendChild(del);
  tasklist.appendChild(li);
}

function savelocalstorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeFromLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

window.addEventListener("load", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks.length > 0) {
    // document.querySelector(".notaskyet").classList.add("hidden");
  }
  tasks.forEach(task => rendertask(task));
});
