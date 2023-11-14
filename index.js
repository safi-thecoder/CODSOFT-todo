let input = document.getElementById("textInput");
let data = document.getElementById("data");

document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function addTask() {
    if (input.value === "") {
        alert("Write something!");
    } else {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${input.value} <i class="fas fa-xmark ml-10" onclick="removeTask(this.parentNode)"></i> <i class="fas fa-edit ml-10" onclick="editTask(this.parentNode)"></i>`;
        data.appendChild(listItem);
        input.value = "";

        saveTasks();
    }
}
a
function removeTask(taskElement) {
    taskElement.remove();
    saveTasks();
}

function editTask(taskElement) {
    let newText = prompt("Edit task:", taskElement.firstChild.textContent.trim());
    if (newText !== null) {
        taskElement.firstChild.textContent = newText;
        saveTasks();
    }
}

function saveTasks() {
    let tasks = [];

   
    data.childNodes.forEach(function (item) {
        tasks.push(item.firstChild.textContent.trim());
    });

   
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = localStorage.getItem("tasks");

    if (tasks) {
        tasks = JSON.parse(tasks);

        tasks.forEach(function (task) {
            let listItem = document.createElement("li");
            listItem.innerHTML = `${task} <i class="fas fa-xmark ml-10" onclick="removeTask(this.parentNode)"></i> <i class="fas fa-edit ml-10" onclick="editTask(this.parentNode)"></i>`;
            data.appendChild(listItem);
        });
    }
}
