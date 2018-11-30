var Abnormality = new Array(120);


function checking(arr, num, now){

    var check = 1;

    for(var i = 0; i < now; i++){
        if(arr[i] == num) check = 0;    // 중복체크
    }

    if(Abnormality[num] == null) check = 0; // null체크

    return check;  

}


function setgame(n){
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

    


    


}


function set32game(){

}
