// 随机生成字符串 从大小写英文字母和数字中选取
// 填充到canvas区域
// 输入验证码验证
var refresh = document.getElementsByClassName("refresh")[0];
var submit = document.getElementsByClassName("submit")[0];
var input = document.getElementsByTagName("input")[0];
var otrue = document.getElementsByClassName("true")[0];
var ofalse = document.getElementsByClassName("false")[0];
var error = document.getElementsByClassName("error")[0];
var arr = [1,2,3,4,5,6,7,8,9,0];
var canvasStr = "";
for(var i = 65; i < 122; i++ ){
    if(i > 90 && i < 97){
        continue;
    }
    arr.push(String.fromCharCode(i))
}
function createCanvas(){
    canvasStr = "";
    var temp;
    for(var i = 0; i < 6; i++){
        temp = arr[Math.floor(Math.random() * arr.length)] + " ";
        canvasStr  +=  temp;
    }
    var myCanvas = document.getElementsByClassName("myCanvas")[0];
    var ctx = myCanvas.getContext("2d");
    ctx.clearRect(0,0,500,300);
    ctx.fillStyle = "#fff";
    ctx.font  = "46px Roboto Slab";
    ctx.setTransform(1,-0.12,0.3,1,.0,12);
    ctx.fillText(canvasStr,10,100);
}
function bindEvent(){
    refresh.onclick = function(){
        createCanvas();
    }
    submit.onclick = function(){
        canvasStr = canvasStr.replace(/\s/g,"");
        if(input.value.trim() == canvasStr){
            otrue.style.display = "block";
            ofalse.style.display = "none"
            error.innerText = ""
        }else{
            otrue.style.display = "none";
            ofalse.style.display = "block"
            error.innerText = "验证码输入错误，请重新输入"
        }
    }
}
createCanvas();
bindEvent();