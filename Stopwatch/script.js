let timerDisplay = document.querySelector('.timeDisplay');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let stopBtn = document.getElementById('stopBtn');
let msec=00;
let secs=00;
let mins=00;

let timerId = null;

startBtn.addEventListener('click', function (){
    if (timerId != null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function (){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function (){
    clearInterval(timerId);
    timerDisplay.innerHTML = '00 : 00 : 00';
    msec=msec=mins=00;
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? '0${msec}' : msec;
    let secsString = secs < 10 ? '0${msec}' : secs;
    let minsString = mins < 10 ? '0${msec}' : mins;

    timerDisplay.innerHTML = '${msecString} : ${secsString} : ${minsString}';

}