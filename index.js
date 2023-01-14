// Initialize timer variables
let hh = 0;
let mm = 0;
let ss = 0;

// Get all elements related to timer
let hourElement = document.getElementById("hh");
let minElement = document.getElementById("mm");
let secElement = document.getElementById("ss");

let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let resetBtn = document.getElementById("reset-btn");

// Added event lisitners
startBtn.onclick = startTimer;
stopBtn.onclick = stopTimer;
resetBtn.onclick = resetTimer;

let timerInterval = null;
function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(incrementTimer, 1000);
  }
}

function incrementTimer() {
  // Increment sec for each second
  ss++;
  if (ss == 60) {
    ss = 0;
    mm++;
  }

  if (mm == 60) {
    mm = 0;
    hh++;
  }
  updateTimerInDOM();
}

// Update time in dom
function updateTimerInDOM() {
  let sec = "";
  // suffixing 0 for numbers less then 10
  if (ss < 10) {
    sec += "0";
  }
  sec += ss;

  let min = "";
  if (mm < 10) {
    min += "0";
  }
  min += mm;

  let hour = "";
  if (hh < 10) {
    hour += "0";
  }
  hour += hh;

  secElement.innerText = sec;
  minElement.innerText = min;
  hourElement.innerText = hour;
}

function stopTimer() {
  // Stop timer interval
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function resetTimer() {
  // Stop timer interval and reset time
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  hh = 0;
  mm = 0;
  ss = 0;
  updateTimerInDOM();
}
