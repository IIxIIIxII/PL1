function createCounter() {
    let seconds = 0;

    return {
        tick() {
            seconds++;
            return formatTime(seconds);
        },
        reset() {
            seconds = 0;
            return formatTime(seconds);
        }
    };
}

function formatTime(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
}

function setColors(bg, text) {
    document.body.style.backgroundColor = bg;
    counterElement.style.color = text;
}

const counter = createCounter();
const counterElement = document.getElementById("counter");

const btnPlus = document.getElementById("speedPlus");
const btnMinus = document.getElementById("speedMinus");
const btnReset = document.getElementById("reset");

let intervalId = null;
let speed = 1000;

function startTimer() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => {
        counterElement.textContent = counter.tick();
    }, speed);
}

function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
}

function onSpeedPlus() {
    speed = 500;
    setColors("lightgreen", "lightcoral");
    startTimer();
}

function onSpeedMinus() {
    speed = 1500;
    setColors("lightcoral", "lightgreen");
    startTimer();
}

function onReset() {
    stopTimer();
    counterElement.textContent = counter.reset();
    setColors("gray", "black");
}

btnPlus.addEventListener("click", onSpeedPlus);
btnMinus.addEventListener("click", onSpeedMinus);
btnReset.addEventListener("click", onReset);

counterElement.textContent = "00:00";
setColors("gray", "black");
