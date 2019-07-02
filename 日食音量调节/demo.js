var obj = {
    init:function(){
        this.moon = $(".moon");
        this.bindEvent();
    },
    bindEvent:function(){
        var moon = this.moon;
        var pos,
            flag;
        var that = this;
        moon.on("mousedown",function(e){
            pos = e.pageX - moon.offset().left;
            flag = true;
        })
        $("body").on("mousemove",function(e){
            if(flag){
                moon[0].style.left = e.pageX - pos - $(".wrapper").offset().left + "px";
                that.getPersent();                
            }
        })
        $("body").on("mouseup",function(){
            flag = false;
        })
    },
    getPersent: function(){
        var self = this;
        var sun = $('.sun'),
            moon = self.moon;
        var per,
            diameter = parseInt(moon.css('width')),    //月球直径
            moonL = moon.offset().left,
            moonR = moonL + diameter,
            sunL = sun.offset().left,
            sunR = sunL + diameter;
        if(sunR < moonL || sunL > moonR){
            per = 0;
        } else {
            if(sunL < moonL) {
                per = (sunR - moonL) / diameter;
            } else {
                per = (moonR - sunL) /diameter;
            }
        }
        self.change( per );
    },
    /**
     * 改变背景和月亮的颜色，改变音量大小
     */
    change: function(per){
        $('.per').html("Volume: " + (per*100).toFixed(2) + "%");
        this.moon.css({
            'background': "hsl(194, 56%, " + (1-per) * 60 + "%)"
        })
        $('body').css({
            'background': "hsl(" + (194 + Math.floor(166 * per)) + ", 66%, " + (1-per)*50 + "%)"
        })
    }
}

obj.init();


