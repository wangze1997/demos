var data;
var len;
var timer;
var time2;
var deg = 0;
var audio = player.AudioManager;
var progress = player.progress;
function getDate(url){
    $.ajax({
        type:"get",
        url:url,
        success:function(res){
            console.log(res)
            len = res.length;
            data = res;
            player.render(res[0]);
            audio.getAudio(res[0].audio);
            progress.renderAllTime(res[0].duration);
            progress.updata(audio.audio.currentTime);                       
        },
        error:function(){
            console.log("请求失败")
        }
    })
}
getDate("../mock/data.json")
function bindEvent(){
    $("body").on("play:change",function(e,index){
        clearInterval(timer);
        $(".img-box").css({
            "transform":"rotateZ(" + 0 + "deg)",
            "transition":"all 0s linear"
        })
        player.render(data[index]);
        audio.getAudio(data[index].audio);
        progress.renderAllTime(data[index].duration);
        progress.updata(0);
        progress.start();
        if(audio.status == "play"){
            audio.play();
            rotate(0);
        }else{
            window.deg = 0;
        }
    })
    $(".btn.prev").on("click",function(){
        var index = player.ContorlIndex.prev();
        $("body").trigger("play:change",index)
    })
    $(".btn.next").on("click",function(){
        var index = player.ContorlIndex.next();
        $("body").trigger("play:change",index)

    })
    $(".play").on("click",function(){
        if(audio.status == "pause"){
            audio.play();
            rotate(deg);
            progress.start();
        }else{
            audio.pause();
            progress.stop()
            clearInterval(timer)
        }
        $(".play").toggleClass("playing");
    })
    $(".btn.like").on("click",function(){
        var index = player.ContorlIndex.index
        if(data[index].isLike){
             data[index].isLike = false;
             $(".btn.like").removeClass("liking")
        }else{
             data[index].isLike = true;
             $(".btn.like").addClass("liking")
        }
    })
}
bindEvent() 
function rotate(deg){
    timer = setInterval(function(){
        deg += 1;
        window.deg = deg;
        $(".img-box").css({
            "transform":"rotateZ(" + deg + "deg)",
            "transition":"all .1s linear"
        })
    },100)
}
// 信息和图片的渲染 render
// 点击按钮
// 音频的播放与暂停 切歌
// 进度条拖拽
// 图片旋转
// 列表切歌 