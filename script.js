let isStarted = isPaused = done = false;
let minutes = 25,
    seconds = 0,
    countdown;

function startTimer() {
  isStarted = true;
  countdown = setInterval(function() {
    if (!isPaused) {
      seconds--;
      if (seconds < 0) { 
        seconds = 59;
        minutes--;
      }
      if (minutes < 0) {
        clearInterval(countdown);
        alert("Time's up!");
        if (!done) {
          done = true;
          minutes = 5;
          seconds = 0;
          let elem = document.getElementsByClassName('timer-part');
          for(let i = 0; i < elem.length; i++){
            elem[i].style.backgroundColor = 'green';
          }
          startTimer();
        } else {
          done = false;
          minutes = 25;
          seconds = 0;
          document.getElementById("timer").innerHTML = "25:00";
          document.getElementById("start-timer-btn").innerHTML = "START";
          document.getElementById("stop-timer-btn").innerHTML = "STOP";
        }
      } else {
        document.getElementById("timer").innerHTML = (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds);
      }
    }
  }, 1000);
  document.getElementById('start-timer-btn').innerHTML = 'PAUSE';
}

function pauseTimer() {
  isPaused = true;
  document.getElementById("start-timer-btn").innerHTML = "CONTI";
  document.getElementById("stop-timer-btn").innerHTML = "DONE";
}

function continueTimer() {
  isPaused = false;
  document.getElementById("start-timer-btn").innerHTML = "PAUSE";
  document.getElementById('stop-timer-btn').innerHTML = "STOP";
}

function doneTimer() {
  done = true;
  minutes = 5;
  seconds = 0;
  let elem = document.getElementsByClassName('timer-part');
  for(let i = 0; i < elem.length; i++){
    elem[i].style.backgroundColor = 'green';
  }
  startTimer();
}

function stopTimer() {
  clearInterval(countdown);
  isStarted = isPaused = done = false;
  minutes = 25;
  seconds = 0;
  document.getElementById("timer").innerHTML = "25:00";
  document.getElementById("start-timer-btn").innerHTML = "START";
  document.getElementById("stop-timer-btn").innerHTML = "STOP";
  doneTimer();
}

document.getElementById("start-timer-btn").addEventListener("click", function() {
  if (!isStarted) {
    startTimer();
  } else if (!isPaused) {
    pauseTimer();
  } else {
    continueTimer();
  }
});

document.getElementById("stop-timer-btn").addEventListener("click", function() {
  stopTimer();
});
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
const selectedCategory = document.getElementById('added');

addTask.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let category = document.createElement('p');
    category.innerText = selectedCategory.value;
    task.appendChild(category);

    let li = document.createElement('li');
    li.innerText= `${inputTask.value}`;
    task.appendChild(li);

    // Create a delete button ==============================================
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
