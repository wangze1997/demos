(function($,root){
    var lastPercent;
    var curDuration;
    var frameId;
    var startTime;
    var timer;
    function formatTime(duration){
        var minute = Math.floor(duration/60);
        var second = parseInt(duration - minute * 60);
        return {
            minute,
            second
        }
    }
    function renderAllTime(duration){
        lastPercent = 0;
        curDuration = duration;
        var obj = formatTime(duration);
        var str = obj.minute + ":" + obj.second;
        $(".all-time").text(str);
    }
    function updata(precent){
        var curTime = precent * curDuration;
        var obj = formatTime(curTime);
        var str = obj.minute + ":" + obj.second;
        $(".cur-time").text(str);
        $(".pro-fill").css({
            width:precent * 100 + "%"
        })
        $(".pro-radius").css({
            left:precent * 100 + "%"
        })
    }
    function start(precentage){
        lastPercent = precentage === undefined ? lastPercent : precentage; 
        cancelAnimationFrame(frameId);
        startTime = Date.now();
        function frame(){
            var curTime = new Date().getTime();
            var precent = lastPercent + (curTime - startTime) / (curDuration * 1000); 
            if(precent < 1){
                frameId = requestAnimationFrame(frame);
                updata(precent);
            }
            else{
                cancelAnimationFrame(frameId);
            }
        }
        frame()
        // 使用定时器方案
        // lastPercent = precentage === undefined ? lastPercent : precentage; 
        // startTime = Date.now();
        // clearInterval(timer)
        // timer = setInterval(function(){
        //     var curTime = new Date().getTime();
        //     var precent = lastPercent + (curTime - startTime) / (curDuration * 1000); 
        //     if(precent < 1){
        //         updata(precent);
        //     }else{
        //         clearInterval(timer);
        //     }
        // },1000)
    }
    function stop(){
        var stopTime = new Date().getTime();
        lastPercent = lastPercent + (stopTime - startTime) / (curDuration * 1000);
        cancelAnimationFrame(frameId);
    }

    root.progress = {
        renderAllTime,
        updata,
        start,
        stop 
    }
})(window.$,window.player || (window.player = {}))