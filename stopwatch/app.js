var hours = 00;
var minutes = 00;
var seconds = 00;
var timerRef = document.querySelector('.timer');
var buttonStart = document.getElementById("start");
var buttonPause = document.getElementById("pause");
var buttonReset = document.getElementById("reset");
var time = null;

document.getElementById('start').addEventListener('click', () => {
  // console.log("start")
  if (time !== null) {
    clearInterval(time);
  }
  buttonStart.disabled = true;
  buttonPause.disabled = false;
  buttonReset.disabled = false;
  time = setInterval(displayTimer, 1000);

});

document.getElementById('pause').addEventListener('click', () => {
  // console.log("pause")
  buttonStart.innerHTML = "continue";
  clearInterval(time);
  buttonStart.disabled = false;
  buttonPause.disabled = true;
  buttonReset.disabled = false;
});

document.getElementById('reset').addEventListener('click', () => {
  // console.log("reset")
  buttonStart.innerHTML = "start";
  clearInterval(time);
  [seconds, minutes, hours] = [0, 0, 0];
  timerRef.innerHTML = '00 : 00 : 00  ';
  buttonStart.disabled = false;
  buttonPause.disabled = true;
  buttonReset.disabled = true;
});

function displayTimer() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let hr = hours < 10 ? "0" + hours : hours;
  let min = minutes < 10 ? "0" + minutes : minutes;
  let sec = seconds < 10 ? "0" + seconds : seconds;


  timerRef.innerHTML = ` ${hr} : ${min} : ${sec}`;
}