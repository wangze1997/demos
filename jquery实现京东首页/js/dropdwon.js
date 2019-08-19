function Dropdown(options,self){
    this.self = self;
    this.width = options.width;
    this.ddWidth = options.ddWidth;
    this.list = options.list;
    this.row = options.row;
    this.col = options.col;
    this.direction = options.direction;
    this.createDom();
    this.initCSS();
    this.bindEvent();
}
Dropdown.prototype.createDom = function(){
    var dropdownDiv = $("<div class='dropdown'></div>");
    for(var i = 0; i < this.row; i++){
        var dl = $("<dl></dl>");
        if(this.list[i].title){
            $("<dt>" + this.list[i].title + "</dt>").appendTo(dl)
        }
        this.list[i].items.forEach(function(item,index,arr){
            $("<dd><a href=" + item.href + ">"+ item.name +"</a></dd>").appendTo(dl)
        })
        dropdownDiv.append(dl);
    }
    this.self.append(dropdownDiv)
}
Dropdown.prototype.initCSS = function(){
    $(".dropdown",this.self).css({
        width:this.width
    }).find("dd").css({
        width:this.ddWidth
    })
    if(this.direction == "direction"){
        $(".dropdown",this.self).css({
            padding:"12px",
            left:-1030,
        }).find("dl").css({
            width:255,
            float:"left",
            borderLeft:"1px solid #ccc",
            borderTop:"0px"
        }).eq(0).css({
            width:310,
            borderLeft:"0px"
        })
    }
}
Dropdown.prototype.bindEvent = function(){
    var that = this;
    that.self.hover(function(){
        $(that.self).find(".dropdown").css({
            display:"block"
        })
    },function(){
        $(that.self).find(".dropdown").css({
            display:"none"
        })
    })
}
$.fn.extend({
    dropDown:function(options){
        var drop = new Dropdown(options,this);
    }
})