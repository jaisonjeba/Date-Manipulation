var parentdiv = document.createElement("div");
parentdiv.className = "main";

var dateElement = document.createElement("input");
dateElement.setAttribute("type", "date");
dateElement.id = "dob";

var button = document.createElement("button");
button.innerHTML = "Click Me";
button.className = "btn btn-primary";
button.addEventListener("click", date_manipulation);

parentdiv.append(dateElement, button);
document.body.append(parentdiv);
var display_date = document.createElement("div");
display_date.className = "main1";

function date_manipulation(){
    var input = document.getElementById("dob").value;
    var time_stamp = Date.parse(input);
    if(time_stamp){
        var input_date = new Date(time_stamp);
        var current_date = new Date();
        var millisecDiff = parseInt(current_date.getTime() - input_date.getTime());
        console.log(millisecDiff);
        var secondsDiff = mathfloor(millisecDiff, 1000);
        console.log(secondsDiff);
        var minutsDiff = mathfloor(secondsDiff, 60);
        console.log(minutsDiff);
        var hoursDiff = mathfloor(minutsDiff, 60);
        console.log(hoursDiff);
        var dayDiff = mathfloor(hoursDiff, 24);
        console.log(dayDiff);
        var yearDiff = year_Diff(input_date, current_date);
        console.log(yearDiff);
        var monthDiff = month_Diff(input_date, current_date);
        console.log(monthDiff);
        display_date.innerHTML = `Given date is
        ${input_date} <br>
        year ${yearDiff} <br>
        month ${monthDiff} <br>
        day ${dayDiff} <br>
        hour ${hoursDiff} <br>
        minutes ${minutsDiff} <br>
        seconds ${secondsDiff} <br>
        milliseconds ${millisecDiff} <br>`
    }
}

document.body.append(display_date);
function mathfloor(value1, value2){
    return Math.floor(value1/value2);
}

function year_Diff(value1, value2){
    var date1 = new Date(value1);
    var date2 = new Date(value2);
    return date2.getFullYear() - date1.getFullYear();
}

function month_Diff(value1, value2){
    var year = year_Diff(value1, value2);
    var month = (year*12)+(value2.getMonth() - value1.getMonth());
    return month;
}