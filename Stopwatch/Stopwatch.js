let tens = 00
let seconds = 00
let minutes = 00
let hours = 00
let appendTens = document.getElementById('tens')
let appendSeconds = document.getElementById('seconds')
let appendMinutes = document.getElementById('minutes')
let appendHours = document.getElementById('hours')
let startBtn = document.getElementById('start-btn')
let pauseBtn = document.getElementById('pause-btn')
let resetBtn = document.getElementById('reset-btn') 
let interval;

function startTime() {
    tens++
    if (tens < 9) {
        appendTens.textContent = "0" + tens
    }
    if (tens > 9) {
        appendTens.textContent = tens
    }
    if (tens > 99) {
        seconds++
        appendSeconds.textContent = "0" + seconds
        tens = 0
        appendTens.textContent = "0" + 0
    }
    if (seconds > 9) {
        appendSeconds.textContent = seconds
    }
    if (seconds > 59) {
        minutes++
        appendMinutes.textContent = "0" + minutes
        seconds = 0
        appendSeconds.textContent = "0" + 0
    }
    if (minutes > 9) {
        appendMinutes.textContent = minutes
    }
    if (minutes > 59) {
        hours++
        appendHours.textContent = '0' + hours
        minutes = 0
        appendMinutes.textContent = "0" + 0
    }
    if (hours > 9) {
        appendHours.textContent = hours
    }
}

startBtn.addEventListener('click', function() {
    interval = setInterval(startTime, 10)
})

pauseBtn.addEventListener('click', function() {
    clearInterval(interval)
})

resetBtn.addEventListener('click', function() {
    clearInterval(interval)
    tens = "00"
    seconds = "00"
    minutes = "00"
    appendTens.textContent = tens
    appendSeconds.textContent = seconds
    appendMinutes.textContent = minutes
})