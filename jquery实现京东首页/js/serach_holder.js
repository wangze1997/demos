function callback(res){
    renderHolderDom(res)
}
function renderHolderDom(res){
    var serachBox = $(".x .main .form .serachbox");
    var ul = $("<ul></ul>")
    var str = ""
    res.result.forEach(item => {
        str += "<li><a href='#'><span class='name'>"+ item[0] +"</span><span class='num'>" + "约" +parseInt(item[1]) + "个商品" + "</span></a></li>"
    })
    serachBox.find(".wrapper").html(ul.html(str));
    $(".x .main .form .serachbox").css({
        display:"block"
    })
}
$(".x .main .form").on("mouseleave",function(){
    $(".x .main .form .serachbox").css({
        display:"none"
    })
})
function setAjax(str){
    $.ajax({
        url:"https://suggest.taobao.com/sug",
        type:"get",
        data:{
            q:str,
            code:"utf-8",
            callback:"callback"
        },
        dataType:"jsonp",
    })
}
function debounce(fn,delay,immediately){
    var timer = null;
    return function(){
        var self = this;
        var args= arguments;
        clearTimeout(timer);
        if(immediately){
            var timeout = !timer;
            timer = setTimeout(function(){
				timer = null
			},delay)
			if(timeout) fn.apply(_self,_args)
        }else{
            timer = setTimeout(function(){
                fn.apply(self,[...args]);
            },delay)
        }
    }
}
$(".x .main .form input").on("input",debounce(function(e){
    setAjax($(".x .main .form input").val());
},500,false))