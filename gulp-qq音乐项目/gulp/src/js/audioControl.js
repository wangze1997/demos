(function($,player){
    function AudioManager(){
        this.audio = new Audio();
        this.status = "pause";
    }
    AudioManager.prototype = {
        play:function(){
            this.audio.play();
            this.status = "play"
        },
        pause:function(){
            this.audio.pause()
            this.status = "pause"
        },
        getAudio:function(src){
            src = ".." + src;
            this.audio.src = src;
            this.audio.load() // 仅进行加载
        },
        getCurTime:function(){
            return this.audio.currentTime
        }
    }
    player.AudioManager = new AudioManager();
})(window.$,window.player || (window.player = {}))