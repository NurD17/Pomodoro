const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
const selectedCategory = document.getElementById('added');

addTask.addEventListener('click', function(){
    while (inputTask.value === "") {
        alert("Please enter a task !");
    }
    let task = document.createElement('div');
    task.classList.add('task');

    let category = document.createElement('p');
    category.innerText = selectedCategory.value;
    task.appendChild(category);

    let li = document.createElement('li');
    li.innerText= `${inputTask.value}`;
    task.appendChild(li);

    // Create a delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");
    task.appendChild(deleteBtn);

    // Add event listener to delete button
    deleteBtn.addEventListener('click', function(){
        task.remove();
    });
    taskContainer.appendChild(task);
    
});
