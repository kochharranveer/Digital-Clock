var displayTime = document.createElement('h2');
displayTime.className = "displayTime";
var displayDay = document.createElement('h2');
displayDay.className = "displayDay";
var displayFullDate = document.createElement('h3');
displayFullDate.className = "displayFullDate";

var cDate; 
var cMonth;
var cYear;
var cDay;
var cSeconds;
var cMinutes;
var cHours;
var cTime;
var cHoursIn24Format;

var AlrmTime;
var AlarmTime;
var audio = new Audio('Music/AlarmSound.mp3');
var AlarmValue = "Play";

function Pause () {
    AlarmValue = "Pause";
}

function Submit () {

    AlarmTime = document.getElementById("AlarmTime").value;

    AlarmValue = "Play"

}

// function Snooze () {

//     AlarmValue = "Pause"

//     if (cTime == AlarmTime) {
//         setInterval( function () {
//             audio.play();
//         },300000)
//     }

// }

setInterval( function(){

let CurrentDate = new Date();

cDate = CurrentDate.getDate();
cMonth = CurrentDate.getMonth();
cYear = CurrentDate.getFullYear();

cDay = CurrentDate.getDay();

cSeconds = CurrentDate.getSeconds();
cMinutes = CurrentDate.getMinutes();
cHours = CurrentDate.getHours();
cHoursIn24Format = CurrentDate.getHours();

cTime = cHoursIn24Format+":"+cMinutes;

switch (cMonth) {
    case 1 :
        cMonth = "January";
        break;
    case 2 :
        cMonth = "Feburary";
        break;
    case 3 :
        cMonth = "March";
        break;
    case 4 :
        cMonth = "April";
        break;
    case 5 :
        cMonth = "May";
        break;
    case 6 :
        cMonth = "June";
        break;
    case 7 :
        cMonth = "July";
        break;
    case 8:
        cMonth = "August";
        break;
    case 9 :
        cMonth = "September";
        break;
    case 10 :
        cMonth = "October";
        break;
    case 11 :
        cMonth = "November";
        break;
    case 12 :
        cMonth = "December";
        break;
}

switch (cDay) {
    case 1:
        cDay = "Monday";
        break;
    case 2 :
        cDay = "Tuesday";
        break;
    case 3 :
        cDay = "Wednesday";
        break;
    case 4 :
        cDay = "Thursday";
        break;
    case 5 :
        cDay = "Friday";
        break;
    case 6 :
        cDay = "Saturday";
        break;
    case 7 :
        cDay = "Sunday";
        break;
}

if (cHours > 12) {
    cHours = cHours - 12;
}

displayTime.textContent = cHours+":"+cMinutes+":"+cSeconds
displayDay.textContent = cDay;
displayFullDate.textContent = cDate+" "+cMonth+", "+cYear;

document.body.append(displayTime);
document.body.append(displayDay);
document.body.append(displayFullDate);

if (cTime == AlarmTime && AlarmValue == "Play") {
    for (let i = 0; i < 5; i++) {
        audio.play();
    }
} if (cTime == AlarmTime && AlarmValue == "Pause") {
    audio.pause();
}

}, 1000);