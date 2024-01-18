let timer;
let isRunning = false;
let seconds = 0;
let laps = 1;

document.getElementById("startBtn").addEventListener("click", toggleStart);
document.getElementById("lapBtn").addEventListener("click", lap);
document.getElementById("resetBtn").addEventListener("click", reset);

function toggleStart() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startBtn").textContent = "Resume";
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startBtn").textContent = "Pause";
    }
    isRunning = !isRunning;
}

function updateDisplay() {
    seconds++;
    const display = document.getElementById("display");
    display.textContent = formatTime(seconds);
}

function lap() {
    const lapsList = document.getElementById("laps");
    const lapItem = document.createElement("li");
    lapItem.className = "lapItem";
    lapItem.textContent = `Lap ${laps}: ${formatTime(seconds)}`;
    lapsList.appendChild(lapItem);
    laps++;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    laps = 1;
    document.getElementById("startBtn").textContent = "Start";
    document.getElementById("display").textContent = formatTime(seconds);
    document.getElementById("laps").innerHTML = "";
}

function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(num) {
    return num < 10 ? `0${num}` : num;
}
