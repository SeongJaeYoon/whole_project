var Abnormality = new Array(120);

var rightab = new Array(60);
var leftab = new Array(60);

function checking(arr, num, now){

    var check = 1;
    for(var i = 0; i < now; i++){
        if(arr[i] == num) check = 0;    // 중복체크
    }

    //if(Abnormality[num] == null) check = 0; // null체크

    return check;  

}


function setGame(n){

    var test = document.getElementById("test");
    var rand = new Array(n);

    for(var i = 0; i < n; i++){     // 랜덤배열
        var num = Math.floor(Math.random() * 110);
        if(checking(rand, num, i)){
            rand[i] = num;
        }
        else{
            i--;
        }
    
    }

    rightab = rand.filter((x, index) => (index % 2))
    leftab = rand.filter((x, index) => !(index % 2))

    window.open("./css와js테스트용.html", "_self");

}
