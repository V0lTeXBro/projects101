import Timer from './timers.js';

//const t1 = new Timer(50);
//console.log('timer 1', t1);

//const t2 = new Timer(40);
//console.log('timer 2', t2);

document.querySelector('#create-timer').addEventListener('click', addTimer);

const timerinput = document.querySelector('#time-input');

function addTimer() {
    console.log('add new timer');
    const initialTime = timerinput.value;
    const timer = new Timer(initialTime);
    timer.createTimer();
    console.log('timer', timer);
}