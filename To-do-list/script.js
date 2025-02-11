// let tdl = [];
// let currentEditIndex = null; // To keep track of the task being edited

// addlist();

// function addlist() {
//     let todohtml = '';
//     for (let i in tdl) {
//         const { task, duedate, status } = tdl[i];
//         todohtml += `
//             <div class="flex justify-between items-center mb-2 p-2 border-b">
//                 <div class="flex-grow ">
//                     <span class="${status === 'completed' ? 'line-through text-gray-500' : ''}">${task} - ${duedate}</span>
//                 </div>
//                 <div class="flex space-x-2">
//                     <button onclick="toggleStatus(${i})" class="bg-green-500 text-white rounded p-1 hover:bg-green-600">${status === 'completed' ? 'Undo' : 'Complete'}</button>
//                     <button onclick="editButton(${i})" class="bg-yellow-500 text-white rounded p-1 hover:bg-yellow-600">Edit</button>
//                     <button onclick="deleteButton(${i})" class="bg-red-500 text-white rounded p-1 hover:bg-red-600">Delete</button>
//                 </div>
//             </div>`;
//     }
//     document.querySelector('.section1').innerHTML = todohtml;
// }

// function deleteButton(index) {
//     tdl.splice(index, 1);
//     addlist();
// }

// function toggleStatus(index) {
//     tdl[index].status = tdl[index].status === 'completed' ? 'pending' : 'completed';
//     addlist();
// }

// function editButton(index) {
//     const taskInput = document.getElementById("input");
//     const dateInput = document.getElementById("date");
    
//     taskInput.value = tdl[index].task;
//     dateInput.value = tdl[index].duedate;

//     // Set the current edit index
//     currentEditIndex = index;

//     // Change the button text to "Update"
//     const addButton = document.querySelector('button[onclick="addButton()"]');
//     addButton.textContent = "Update";
//     addButton.setAttribute("onclick", "updateButton()");
// }

// function updateButton() {
//     const taskInput = document.getElementById("input");
//     const dateInput = document.getElementById("date");
    
//     // Validate input
//     if (taskInput.value.trim() === "" || dateInput.value === "") {
//         alert("Please enter both a task and a due date.");
//         return;
//     }

//     // Update the task in the tdl array
//     tdl[currentEditIndex].task = taskInput.value;
//     tdl[currentEditIndex].duedate = dateInput.value;

//     // Reset the input fields
//     taskInput.value = ""; 
//     dateInput.value = ""; 

//     // Reset the button back to "Add"
//     const addButton = document.querySelector('button[onclick="updateButton()"]');
//     addButton.textContent = "Add";
//     addButton.setAttribute("onclick", "addButton()");

//     addlist();
// }

// function addButton() {
//     const taskInput = document.getElementById("input");
//     const dateInput = document.getElementById("date");
    
//     // Validate input
//     if (taskInput.value.trim() === "" || dateInput.value === "") {
//         alert("Please enter both a task and a due date.");
//         return;
//     }
    
//     tdl.push({ task: taskInput.value, duedate: dateInput.value, status: 'pending' });
//     taskInput.value = ""; // Clear the task input
//     dateInput.value = ""; // Clear the date input
//     addlist();
// }

let tdl = [];
addlist();

function addlist() {
    let todohtml = '';
    for (let i in tdl) {
        const { task, duedate, status } = tdl[i];
        todohtml += `
            <div class="flex justify-between items-center mb-2 p-2 border-b">
                <div class="flex-grow ">
                    <span class="${status === 'completed' ? 'line-through text-gray-500' : ''}">${task} - ${duedate}</span>
                </div>
                <div class="flex space-x-2">
                    <button onclick="toggleStatus(${i})" class="bg-green-500 text-white rounded p-1 hover:bg-green-600">${status === 'completed' ? 'Undo' : 'Complete'}</button>
                    <button onclick="editButton(${i})" class="bg-yellow-500 text-white rounded p-1 hover:bg-yellow-600">Edit</button>
                    <button onclick="deleteButton(${i})" class="bg-red-500 text-white rounded p-1 hover:bg-red-600">Delete</button>
                </div>
            </div>`;
    }
    document.querySelector('.section1').innerHTML = todohtml;
}

function deleteButton(index) {
    tdl.splice(index, 1);
    addlist();
}

function toggleStatus(index) {
    tdl[index].status = tdl[index].status === 'completed' ? 'pending' : 'completed';
    addlist();
}

function editButton(index) {
    const task = tdl[index].task;
    const duedate = tdl[index].duedate;

    const newTask = prompt("Edit Task:", task);
    const newDueDate = prompt("Edit Due Date:", duedate);


    if (newTask !== null && newDueDate !== null) {
        if (newTask.trim() === "" || newDueDate.trim() === "") {
            alert("Please enter both a task and a due date.");
            return;
        }
        tdl[index].task = newTask;
        tdl[index].duedate = newDueDate;
        addlist();
    }
}

function addButton() {
    const taskInput = document.getElementById("input");
    const dateInput = document.getElementById("date");
    

    if (taskInput.value.trim() === "" || dateInput.value === "") {
        alert("Please enter both a task and a due date.");
        return;
    }
    
    tdl.push({ task: taskInput.value, duedate: dateInput.value, status: 'pending' });
    taskInput.value = ""; 
    dateInput.value = ""; 
    addlist();
}