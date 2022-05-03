function nofunc(){
    alert('פונקציונליות זו אינה נתמכת כרגע.');
}

function back(){
    location.replace('worker start.html');
}

function backtologin(){
    location.replace('worker login.html');
}

function islogged(){
    if(logged == false){
        alert("תחילה יש להיכנס למשתמש.");
    }
}

function manageEmployees(){
    if(logged == false){
        alert("תחילה יש להיכנס למשתמש.");
    }
    else
        location.replace('employee manage.html')
}


// worker login file:
var logged = false;

function checkUser(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === 'admin' && password === 'admin'){
        // going to the employee page.
        location.replace("worker start.html");
        logged = true;
    }
}

function mainMenu(){
    // going back to the main menu.
    location.replace('main menu.html');
}



// worker timer file:

// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {

    let diffInHrs = time / 3600000;

    let hh = Math.floor(diffInHrs);



    let diffInMin = (diffInHrs - hh) * 60;

    let mm = Math.floor(diffInMin);



    let diffInSec = (diffInMin - mm) * 60;

    let ss = Math.floor(diffInSec);



    let diffInMs = (diffInSec - ss) * 100;

    let ms = Math.floor(diffInMs);



    let formattedMM = hh.toString().padStart(2, "0");

    let formattedSS = mm.toString().padStart(2, "0");

    let formattedMS = ss.toString().padStart(2, "0");



    return `${formattedMM}:${formattedSS}:${formattedMS}`;

}


// Declare variables to use in our functions below



let startTime;

let elapsedTime = 0;

let timerInterval;



// Create function to modify innerHTML



function print(txt) {

    document.getElementById("display").innerHTML = txt;

}

var counter = 1;

function startStop(){
    counter += 1;
    if(counter == 2){
        document.getElementById("display").innerHTML = "00:00:00";
    }
    if((counter % 2) === 0){
        start();
    }
    else{
        pause();
    }
}


// Create "start" function
function start() {

    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(function printTime() {

        elapsedTime = Date.now() - startTime;

        print(timeToString(elapsedTime));
    }, 10);

}

function pause() {
    clearInterval(timerInterval);

}


// Create function to display buttons

function showButton(buttonKey) {

    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;

    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;

    buttonToShow.style.display = "block";

    buttonToHide.style.display = "none";

}



// add employees file:

function addRow() {
    var errorMsg = "";

    var employeeName = document.getElementById("employeeName");
    var position = document.getElementById("position");
    var employeeNumber = document.getElementById("employeeNumber");
    var hourlyWage = document.getElementById("hourlyWage");

    if (employeeName.value == '')
        errorMsg += "נא הכנס שם עובד.\n";
    if (employeeNumber.value == '')
        errorMsg += "נא הכנס תפקיד עובד.\n";
    if (position.value == '')
        errorMsg += "נא הכנס מספר עובד.\n";
    if (hourlyWage.value == '')
        errorMsg += "נא הכנס שכר שעתי.\n";

    if(errorMsg!=""){
        alert(errorMsg);
        return;
    }

    var table = document.getElementById("emplist");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    var employeeNameElement = document.createElement("input");

    employeeNameElement.disabled = true;
    employeeNameElement.type = "text";
    employeeNameElement.name = "employeeName[]";
    employeeNameElement.value = employeeName.value;
    cell1.appendChild(employeeNameElement);

    var cell2 = row.insertCell(1);
    var positionElement = document.createElement("input");
    positionElement.disabled = true;
    positionElement.type = "text";
    positionElement.name = "position[]";
    positionElement.value = employeeNumber.value;
    cell2.appendChild(positionElement);

    var cell3 = row.insertCell(2);
    var employeeNumberElement = document.createElement("input");
    employeeNumberElement.disabled = true;
    employeeNumberElement.type = "text";
    employeeNumberElement.name = "employeeNumber[]";
    employeeNumberElement.value = position.value;
    cell3.appendChild(employeeNumberElement);



    var cell5 = row.insertCell(3);
    var hourlyWageElement = document.createElement("input");
    hourlyWageElement.type = "text";
    hourlyWageElement.name = "hourlyWage[]";
    hourlyWageElement.value = hourlyWage.value;
    hourlyWageElement.disabled = true;
    cell5.appendChild(hourlyWageElement);



    clearInputRow();

}

function clearInputRow() {
    var inputField = document.getElementById("employeeName");
    inputField.value = '';
    inputField = document.getElementById("position");
    inputField.value = '';
    inputField = document.getElementById("employeeNumber");
    inputField.value = '';
    inputField = document.getElementById("hourlyWage");
    inputField.value = '';
}

function deleteRow() {
    var table = document.getElementById("emplist");
    var rowCount = table.rows.length;
    if (rowCount > 1)
        table.deleteRow(rowCount-1);
}



