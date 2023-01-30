let countdown;

let isStarted = false;
let minutes = 25;
let seconds = 0;

let done = true;
let timeToRest = 5;
let secondsOfRest = 0;

function startTimer() {
  document.getElementById("start-timer-btn").innerHTML = "PAUSE";
  isStarted = true;
  countdown = setInterval(function() {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes < 0) {
      clearInterval(countdown);
      alert("Time's up!");
    }
    document.getElementById("timer").innerHTML = (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds);
  }, 1000);
}

document.getElementById("start-timer-btn").addEventListener("click", function() {
  if (isStarted) {
    clearInterval(countdown);
    document.getElementById("start-timer-btn").innerHTML = "CONTINUE";
    isStarted = false;
    document.getElementById("stop-timer-btn").innerHTML = "DONE"
  } else {
    startTimer();
  }
});

document.getElementById("stop-timer-btn").addEventListener("click", function(){
  if(done){
      countdown = setInterval(function() {
      seconds--;
      if (seconds < 0) {
        seconds = 59;
        timeToRest--;
      }
      if (timeToRest < 0) {
        clearInterval(countdown);
        alert("Time's up!");
      }
      document.getElementById("timer").innerHTML = (timeToRest > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds);
    }, 1000);
  }
  }
)


document.getElementById("stop-timer-btn").addEventListener("click", function() {
  clearInterval(countdown);
  document.getElementById("start-timer-btn").innerHTML = "START";
  isStarted = false;
});

document.getElementById("continue-timer-btn").addEventListener("click", function() {
  if (!isStarted) {
    startTimer();
  }
});





const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
const selectedCategory = document.getElementById('added');

addTask.addEventListener('click', function(){
    if(inputTask.value === "") {
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
