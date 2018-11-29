var timerID = null;
var minute = null;

function startClock() {
    var clock = document.getElementById("clock");
    timeout(clock);
    timerID = setInterval("timeout(clock)", 1000);     
}

function timeout(obj){
        
    timerID++;

    if(timerID >= 60){
        minute++;  timerID -= 60;
    }

    if(minute){
        obj.innerHTML = minute + "분 " + timerID + "초";
    }
    else{
        obj.innerHTML = timerID + "초";
    }
}

function gotonext(){
    var img_right = document.getElementById("right");
    var img_left = document.getElementById("left");
    
}



