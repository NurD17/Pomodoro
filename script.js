const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
// const classCategory = document.getElementById('added')

// Event listener for add button ------------------------------------------------> 
addTask.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText= `${inputTask.value}`;
    task.appendChild(li);

    // let catG = document.createElement('li');
    // catG.innerText = `${classCategory.value}`;
    // task.appendChild(li)

    if(inputTask.value === ""){
        alert("Please enter a task !")
    } else {
        taskContainer.appendChild(task);
    }
});
