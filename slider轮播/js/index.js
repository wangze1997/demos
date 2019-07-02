var oContainer = document.getElementsByClassName("container")[0],
    oMain = document.getElementsByClassName("main")[0],
    oLi = document.getElementsByTagName("li"),
    oList = document.getElementsByClassName("list")[0],
    oPrev = document.getElementById("prev"),
    oNext =  document.getElementById("next");
var time,timer,Index = 0,flag = true;
    function moveImg(dis){
        var moveTime = 400,
            eachTime = 20,
            eachDis = dis/(moveTime/eachTime), //26
            newTime = dis + oMain.offsetLeft;
        function eachImg(){
            flag = false;
            if(dis < 0 && oMain.offsetLeft > newTime || dis > 0 && oMain.offsetLeft < newTime){
                    oMain.style.left = oMain.offsetLeft + eachDis + "px";
            }else{
                clearInterval(time)
                oMain.style.left = newTime + "px";
                if(newTime == 0){
                    oMain.style.left = -2600 + "px";
                }else if(newTime == -3120){
                    oMain.style.left = -520 + "px";
                }
                flag = true;
            }
        }
        time = setInterval(eachImg,eachTime);
    }
    oNext.onclick = function(){
        if(flag == false) return;
        if(Index == 4){
            Index = 0;
        }else{
            Index++;
        }
        changeStyle();    
        moveImg(-520)        
    }
    oPrev.onclick = function(){
        if(flag == false) return;
        moveImg(520)
        if(Index == 0){
            Index = 4;
        }else{
            Index--;
        }
        changeStyle();
    }
    function changeStyle(){
        document.getElementsByClassName("active")[0].className = "";
        oLi[Index].className = "active"
    }
    for(var i = 0; i < oLi.length; i++){
        oLi[i].onclick = (function(j){
            return function(){
                var offset = (j - Index) * -520;
                moveImg(offset);
                Index = j;
                changeStyle();
            }
        })(i)
    }
    timer = setInterval(oNext.onclick,4000);
    oContainer.onmouseout = function(){
        timer = setInterval(oNext.onclick,4000);
    }
    oContainer.onmouseover = function(){
        clearInterval(timer)
    }