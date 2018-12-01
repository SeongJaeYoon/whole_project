
var timerID = null;
var minute = 0;
var second = 0;

function startClock() {
    var clock = document.getElementById("clock");
    timeout(clock);
    timerID = setInterval("timeout(clock)", 1000);     
}

function timeout(obj){
        
    second++;

    if(second >= 60){
        minute++;  second -= 60;
    }

    if(minute<10) obj.innerHTML = "0"+minute+":";
    else obj.innerHTML = minute+":";
    if(second<10) obj.innerHTML = obj.innerHTML+"0"+second;
    else obj.innerHTML = obj.innerHTML+second;
}

function stopTimer(id){
    clearInterval(id);
    return minute*60+second;
}

