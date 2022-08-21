
const stopWatchView = document.querySelector('#stop-watch-view');
const toggleStopWatchButton = document.getElementById('toggle-stop-watch');
toggleStopWatchButton.addEventListener('click', toggleStopWatch);

let hundredth = 0;
let seconds = 0;
let minutes = 0;

function displayTime() {
    stopWatchView.innerHTML = `${minutes}:${seconds}:${hundredth}`;
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
let intervalid = null;
function toggleStopWatch() {
    if (intervalid == null) {

        intervalid = setInterval(handleTimeChange, 10);
        toggleStopWatchButton.innerHTML = 'Stop';
    } else {
        clearInterval(intervalid);
        toggleStopWatchButton.innerHTML = 'Start';
        intervalid = null;
    }

}


