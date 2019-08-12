(function($,root){
    function readerImg(src){
        var src = ".." + src
        console.log(src)
        // var img = $(".img-box img")[0] 不能这样写。
        var img = new Image();
        img.src = src;
        console.log(img)
        img.onload = function(){
            root.blurImg(img,$("body"));
            $(".img-box img").attr("src",src)
        }
    }
    function readerInfo(data){
        $(".song-info .song-name").text(data.song);
        $(".song-info .singer-name").text(data.singer);
        $(".song-info .album-name").text(data.album);
    }
    function renderIsLike(data){
        if(data.isLike){
            $(".btn.like").addClass("liking")
        }else{
            $(".btn.like").removeClass("liking")
        }
    }
    root.render = function(data){
        readerImg(data.image);
        readerInfo(data);
        renderIsLike(data);
    }
})(window.$,window.player || (window.player = {}))