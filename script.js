// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask(){
//     if(inputBox.value === ''){
//         alert("Please enter a task");
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value = '';
//     saveData();
// }
// listContainer.addEventListener("click",function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//         saveData();
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         saveData();
//     }
// },false);

// function saveData(){
//     localStorage.setItem("data",listContainer.innerHTML);
// }

// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data")
// }
// showTask();

const inputBox = document.getElementById("input-box");
const datePicker = document.getElementById("date-picker");
const listContainer = document.getElementById("list-container");

// Set the date input to the current date
function setCurrentDate() {
    const today = new Date().toISOString().split('T')[0];
    datePicker.value = today;
}

function addTask() {
    if (inputBox.value === '') {
        alert("Please enter a task");
    } else {
        let li = document.createElement("li");
        const taskDate = datePicker.value;
        li.innerHTML = `${inputBox.value} (Due: ${taskDate})`;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // Reset input and date to current date
        inputBox.value = '';
        setCurrentDate();
    }
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// setCurrentDate();
// showTask();
document.addEventListener('DOMContentLoaded', function() {
    setCurrentDate();
    showTask();
});


