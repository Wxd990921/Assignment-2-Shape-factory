'use strict';

const currentTime = document.querySelector("h1"),
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("button");

let alarmTime, isAlarmSet,
ringtone = new Audio("./assets/mp3/synths_and_drums.mp3");

for (let i = 23; i >= 0; i--) {
i = i < 10 ? `0${i}` : i;
let option = `<option value="${i}">${i}</option>`;
selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
i = i < 10 ? `0${i}` : i;
let option = `<option value="${i}">${i}</option>`;
selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
let date = new Date(),
h = date.getHours(),
m = date.getMinutes(),
s = date.getSeconds();

currentTime.innerText = `${h}:${m}:${s}`;

if (alarmTime === `${h}:${m}`) {
    ringtone.play();
    ringtone.loop = true;
}
});

function setAlarm() {
if (isAlarmSet) {
    alarmTime = "";
    ringtone.pause();
    content.classList.remove("disable");
    setAlarmBtn.innerText = "Set Alarm";
    return isAlarmSet = false;
}

let time = `${selectMenu[0].value}:${selectMenu[1].value}`;
if (time.includes("Hour") || time.includes("Minute")) {
    return alert("Please, select a valid time to set Alarm!");
}
alarmTime = time;
isAlarmSet = true;
content.classList.add("disable");
setAlarmBtn.innerText = "Clear Alarm";
}

setAlarmBtn.addEventListener("click", setAlarm);