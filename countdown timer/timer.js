let timer;
let timeLeft = 60 * 12;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            
            if( timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else{
                clearInterval(timer);
                isRunning = false;
            }

        }, 1000);
         isRunning = true;
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}


function resetTimer() {
      clearInterval(timer);
      timeLeft = 60 * 10;
      updateTimerDisplay();
        isRunning = false;
}
   startButton.addEventListener('click', startTimer);
   stopButton.addEventListener('click', stopTimer);
   resetButton.addEventListener('click', resetTimer);

  updateTimerDisplay();