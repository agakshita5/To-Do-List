const inputTask=document.getElementById("input-task");
const addBtn=document.getElementById("add-btn");
const taskList=document.querySelector(".task-list-container");
const form=document.querySelector("form");
const body=document.body;

let taskIdCounter = 0;

addBtn.addEventListener("click",()=>{
    let task=inputTask.value;

    addTask(task);
});

const addTask=(task)=>{
    taskIdCounter++;
    const checkbox = document.createElement("input");
    checkbox.type="checkbox";
    checkbox.id=`task-checkbox-${taskIdCounter}`;
    checkbox.name=task;
    checkbox.value=task;

    const label=document.createElement("label");
    label.innerText=task;
    label.classList.add("task-label");
    label.setAttribute("for",checkbox.id);

    form.appendChild(checkbox);
    form.appendChild(label);

    inputTask.value="";
}

const checkboxes=document.querySelectorAll("input[type='checkbox']");
const labels=document.querySelectorAll("label");
console.log(checkboxes[0]);

// checkboxes.forEach((checkbox)=>{
//     if(checkbox.checked){
//         console.log("y");
//     }
// });
