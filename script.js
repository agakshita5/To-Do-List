const inputTask = document.getElementById("input-task");
const addBtn = document.getElementById("add-btn");
const taskList = document.querySelector(".task-list-container");
const ol = document.querySelector("ol");
const body = document.body;

let taskIdCounter = 0;

addBtn.addEventListener("click", () => {
  let task = inputTask.value;

  addTask(task);
});

const addTask = (task) => {
  taskIdCounter++;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `task-checkbox-${taskIdCounter}`;
  checkbox.name = task;
  checkbox.value = task;

  const label = document.createElement("label");
  label.innerText = task;
  label.classList.add("task-label");
  label.setAttribute("for", checkbox.id);

  const listItem = document.createElement("li");
  listItem.append(checkbox);
  listItem.append(label);
  ol.append(listItem);

  inputTask.value = "";

  checkbox.addEventListener("change",()=>{
    label.classList.toggle("strikethrough",this.checked);
  })

};


