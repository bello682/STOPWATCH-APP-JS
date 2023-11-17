const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");
//  download github copilot, it help for better suggestion.

let startTime = 0;
let elaspedTime = 0;
let timeInterval;

startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);

function startTimer() {
	startTime = Date.now() - elaspedTime;

	timeInterval = setInterval(() => {
		elaspedTime = Date.now() - startTime;
		timerEl.textContent = formatTime(elaspedTime);
	}, 10);

    startButtonEl.disabled = true;
    stopButtonEl.disabled = false;
}

function formatTime(elaspedTime) {
	const milliSeconds = Math.floor((elaspedTime % 1000) / 10);
	const seconds = Math.floor((elaspedTime % (1000 * 60)) / 1000);
	const minute = Math.floor((elaspedTime % (1000 * 60 * 60)) / (1000 * 60));
	const hours = Math.floor(elaspedTime / (1000 * 60 * 60));

	return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        ":" +
		(minute ? (minute > 9 ? minute : "0" + minute) : "00") +
        ":" +
		(seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
		"." +
		(milliSeconds > 9 ? milliSeconds : "0" + milliSeconds)
	);
}

function stopTimer() {
	clearInterval(timeInterval);

    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;

}

function resetTimer() {
	clearInterval(timeInterval);

    elaspedTime = 0;
    
    timerEl.textContent = "00:00:00";

    startButtonEl.disabled = false;
    stopButtonEl.disabled = false;
}
