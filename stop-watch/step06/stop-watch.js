
const stopWatchView = document.querySelector('#stop-watch-view');
const toggleStopWatchButton = document.getElementById('toggle-stop-watch');
toggleStopWatchButton.addEventListener('click', toggleStopWatch);
document.getElementById('reset-stop-watch').addEventListener('click', restetStopWatch);
const lapsButton = document.querySelector('#stop-watch-laps');
const lapsView = document.querySelector('#laps-view');
lapsButton.addEventListener('click', addLap);

let hundredth = 0;
let seconds = 0;
let minutes = 0;

function displayTime() {
    stopWatchView.innerHTML = `${minutes}:${seconds}:${hundredth}`;
}
function addLap() {
    lapsView.innerHTML += `<li>${minutes}:${seconds}:${hundredth}</li>`
}


function handleTimeChange() {
    console.log('handleTimeChange');
    hundredth++;
    if (hundredth > 99) {
        hundredth = 0;
        seconds++;
        if (seconds > 59) {
            seconds = 0;
            minutes++;
        }
    }
    displayTime();
}

function StartStopWatch() {
    intervalid = setInterval(handleTimeChange, 10);
    toggleStopWatchButton.innerHTML = 'Stop';
}
function StopStopWatch() {
    clearInterval(intervalid);
    toggleStopWatchButton.innerHTML = 'Start';
    intervalid = null;
}

let intervalid = null;
function toggleStopWatch() {
    if (intervalid == null) {
        StartStopWatch();

    } else {
        StopStopWatch();
    }
}


function restetStopWatch() {
    hundredth = 0;
    seconds = 0;
    minutes = 0;
    displayTime();
}


