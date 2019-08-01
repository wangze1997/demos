// video.paused video.play video.pause  video.duration video.currentTime video.playbackRate
var video = document.getElementsByTagName("video")[0];
var menu = document.getElementsByClassName("menu")[0];
var video_wrap = document.getElementsByClassName("video-player")[0];
var play = document.getElementsByClassName("play")[0];
var time = document.getElementsByClassName("time")[0];
var progressBar = document.getElementsByClassName("progress_bar")[0];
var quick = document.getElementsByClassName("quick")[0];
var quickList = document.getElementsByClassName("quick-list")[0];
var oul = document.getElementsByTagName("ul")[0];
var oli = document.getElementsByTagName("li");
video_wrap.onmouseenter = function(){
    menu.style.display = "block" 
}
video_wrap.onmouseleave = function(){
    menu.style.display = "none" 
}
progressBar.onmouseenter = function(){
    progressBar.style.height = "8px";
    progressBar.style.top = "-3px"
    progressBar.getElementsByTagName("div")[0].style.height = "8px";
    progressBar.getElementsByTagName("i")[0].style.height = "12px";
    progressBar.getElementsByTagName("i")[0].style.width = "12px";

}
progressBar.onmouseleave = function(){
    progressBar.style.height = "2px";
    progressBar.style.top = "0px";
    progressBar.getElementsByTagName("div")[0].style.height = "2px";
    progressBar.getElementsByTagName("i")[0].style.height = "6px";
    progressBar.getElementsByTagName("i")[0].style.width = "6px";
    
}
progressBar.onclick = function(e){
    progressBar.getElementsByTagName("div")[0].style.width = e.layerX + "px";
    progressBar.getElementsByTagName("i")[0].style.left =  e.layerX + "px";
    video.currentTime = e.layerX / 500 * video.duration;
}
quick.onclick = function(){
    quickList.style.display = "block";
}
quick.onmouseleave = function(){
    quickList.style.display = "none";
}
quickList.onmouseleave = function(){
    quickList.style.display = "none";
}
quickList.onmouseenter = function(){
    quickList.style.display = "block";
}
play.onclick = function(e){
    if(video.paused){
        video.play();
        play.innerText = "暂停"
    }else{
        video.pause();
        play.innerText = "播放"
    }
}
for(var i = 0; i < oli.length; i++){
    oli[i].index = i;
    oli[i].onclick = function(){
        console.log(this.index)
        switch(this.index){
            case 0 : 
                video.playbackRate = 1;
                quick.innerText = "倍速"
                break;
            case 1 : 
                video.playbackRate = 1.25
                quick.innerText = "X1.25"
                break;
            case 2 : 
                video.playbackRate = 1.5;
                quick.innerText = "X1.5"
                break;
            case 3 : 
                video.playbackRate = 2;
                quick.innerText = "X2.0"
                break;
        }
    }
}
setInterval(function(){
   var total = video.duration; // 总时间
   var nowTime = video.currentTime; // 现在的秒数
   time.innerText = parseInt(nowTime / 60) + ":" + parseInt(nowTime % 60) + " / " + parseInt(total / 60) + ":" + parseInt(total % 60);
   var width = nowTime /total * 500; //progressBar的宽度我获取不到啊，奇葩
   progressBar.getElementsByTagName("div")[0].style.width = width + "px";
   progressBar.getElementsByTagName("i")[0].style.left =  width + "px";
},1000);