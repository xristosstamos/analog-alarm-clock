setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
//just a comment

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds()/ 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/ 60
    const hoursRatio = (minutesRatio + currentDate.getHours())/ 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)

}

setClock()


const display = document.getElementById('clock');
const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
audio.loop = true;

let alarmTime = null;
let alarmTimeout = null;

/*function updateTime() {
    let time = new Date();
    let minutes = formatTime(time.getMinutes());
    let seconds = formatTime(time.getSeconds());
    let hour = formatTime(time.getHours());

    display.innerText=`${hour} : ${minutes} : ${seconds}`;
}*/

function formatTime(time) {
    if ( time < 10){
        return '0' + time ;
    }
    return time;
}

function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert(`Alarm set`);
        }
    }
}


function clearAlarm(){
    audio. pause();
    if(alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}

setInterval(updateTime, 1000);