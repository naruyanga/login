const addButton = document.getElementsByClassName("addButton")[0];
const container = document.getElementsByClassName("container")[0];
const input = document.getElementsByClassName("input")[0];
const tasks = document.getElementsByClassName("tasks")[0];

addButton.addEventListener("click", function () {
  if (input.value === "") {
    alert("taskaa bicnu");
    newTask.remove();
  }
  const newTask = document.createElement("div");
  newTask.className = "newTask";
  tasks.appendChild(newTask);

  const dateTask = document.createElement("div");
  newTask.appendChild(dateTask);

  const task = document.createElement("div");
  task.innerHTML = input.value;
  dateTask.appendChild(task);
  input.value = "";

  const dateDiv = document.createElement("div");
  dateDiv.className = "date";
  dateTask.appendChild(dateDiv);
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const formattedTime = formatter.format(date);
  dateDiv.innerHTML = formattedTime;

  const selection = document.createElement("div");
  selection.className = "selection";
  newTask.appendChild(selection);

  const deleteButton = document.createElement("button");
  deleteButton.className = "deleteButton";
  selection.appendChild(deleteButton);
  deleteButton.addEventListener("click", function () {
    newTask.remove();
  });

  const editButton = document.createElement("button");
  editButton.className = "editButton";
  selection.appendChild(editButton);

  editButton.addEventListener("click", function () {
    const editingDiv = document.createElement("div");
    newTask.appendChild(editingDiv);
    const editTask = document.createElement("input");
    editTask.value = task.innerHTML;
    editingDiv.appendChild(editTask);
    const doneButton = document.createElement("button");
    doneButton.innerHTML = "Done";
    editingDiv.appendChild(doneButton);

    doneButton.addEventListener("click", function () {
      task.innerText = editTask.value;
      editingDiv.remove();
    });
  });
  const done = document.createElement("button");
  done.className = "doneButton";
  selection.appendChild(done);

  done.addEventListener("click", function () {
    taskDone.appendChild(newTask);
  });
});
const taskDone = document.createElement("div");
taskDone.className = "taskDone";
taskDone.innerHTML = "Done";
container.appendChild(taskDone);

const email = localStorage.getItem("email");
const emailDiv = document.getElementById("email");
emailDiv.innerHTML = email;

const phoneNumber = localStorage.getItem("phoneNumber");
const phoneNumberDiv = document.getElementById("phoneNumber");
phoneNumberDiv.innerHTML = phoneNumber;

const ner = localStorage.getItem("ner");
const nerdiv = document.getElementById("ner");
nerdiv.innerHTML = ner;
