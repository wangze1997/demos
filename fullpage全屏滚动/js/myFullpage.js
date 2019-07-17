$.fn.extend({
    myFullpage:function(config){
        var colorsArray = config.colorsArray;
        var $w = $(this);
        var width = "100%", 
            height = "100%";
        var clientHeight = $(window).outerHeight(),
            clientWidth = $(window).outerWidth();
        $("html")
            .add("body")
                .css({width,height,position:"relative",overflow:"hidden",margin:"0px"})
                    .find(".wrapper")
                        .css({width,height,position:"absolute",top:0,left:0,background:"orange"})
                            .find(".section")
                                .each(function(index,ele){
                                    $(ele).css({width,height,position:"relative",background:colorsArray[index],backgroundSize:"100% 100%"})
                                        .find(".slider")
                                            .css({height,float:"left",width:clientWidth,height:clientHeight})
                                                .wrapAll("<div class='sliderWrapper'></div>")
                                })
                                    
        $(".sliderWrapper").each(function(index,ele){
            $(ele).css({width:$(ele).children() .length * $(window).outerWidth(),height})
        }).css({position:"absolute",left:0,top:0})
        $(".section").eq(0).addClass(".section");
        // 垂直移动
        var curIndexY = 0,
            curIndexX = 0,
            newLeft = $(".sliderWrapper").offset().left,
            newtop = $w.offset().top,
            flag = true;
        $(document).on("keydown",function(e){
             // which  left 37 top 38 right 39 bottom 40
             if(e.which == 38 || e.which == 40){
                   if(flag){
                        flag = false;
                        if(e.which == 38 && curIndexY != 0){
                            config.onLeave(curIndexY)
                            curIndexY--;
                            newtop += clientHeight;
                        }else if(e.which == 40 && curIndexY != $w.children().length - 1){
                            config.onLeave(curIndexY)                            
                            curIndexY++;
                            newtop -= clientHeight;
                        }
                        $w.animate({
                            top:newtop
                        },1000,function(){
                            flag = true
                            config.afterLode(curIndexY)
                        })
                        $(".section").removeClass("active").eq(curIndexY).addClass("active");
                   }
             } 
             if(e.which == 37 || e.which == 39){
                if($(".active").children().length > 0){
                    if(flag){
                        flag = false;
                        if(e.which == 37 && curIndexX != 0){
                            curIndexX--;
                            newLeft += clientWidth;
                        }else if(e.which == 39 && curIndexX != $(".active").find(".sliderWrapper").find(".slider").length - 1){
                            curIndexX++;
                            newLeft -= clientWidth;
                        }
                        $(".active")
                            .find(".sliderWrapper")
                                .animate({
                                    left:newLeft
                                },1000,
                                function(){
                                    flag = true
                                })
                    }
                }
             }
        })

    }
})
