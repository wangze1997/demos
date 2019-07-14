// 思想逻辑可以在重写一遍。。。。

personArr = [
    {name:"杜甫",src:"img/1.png",des:"现实主义诗人代表",sex:"m"},
    {name:"李清照",src:"img/2.png",des:"千古第一女才子",sex:"f"},
    {name:"李耳",src:"img/3.png",des:"道教创始人",sex:"m"},
    {name:"蔡邕",src:"img/4.png",des:"东汉文学家、音乐家、书法家",sex:"m"},
    {name:"蔡文姬",src:"img/5.png",des:"历史上第一位女诗人",sex:"f"},
    {name:"陶渊明",src:"img/6.png",des:"田园诗人的代表",sex:"m"},
    {name:"李商隐",src:"img/7.png",des:"君问归期未有期",sex:"m"}
]
var oUl = document.getElementsByTagName("ul")[0],
    oInput = document.getElementsByTagName("input")[0],
    span = document.getElementsByTagName("span");
// 页面渲染
function readerPage(data){
    var str = ""
    data.forEach(function(item,index,arr){
        str += ` <li>
        <img src=${item.src} alt="">
        <p class="name">${item.name}</p>
        <p class="discription">${item.des}</p>
    </li> `
    })
    oUl.innerHTML = str;
}
readerPage(personArr)
// 防抖函数
function debounce(fn,delay){
    var timer = null;
    return function(){
        var _self = this,
            args = arguments;
        clearTimeout(timer);
        tiemr = setTimeout(function(){
            fn.apply(_self,args)
        },delay)
    }
}
// 绑定input事件
oInput.oninput = debounce(function(){
    state.filterText = this.value;
    readerPage(lastFilter(personArr))
},500)
// 根据文本来过滤
function filterText(data,value){
    let reg = /^\s*$/
    if(reg.test(value)) return data;
    value = value.trimStart();
    return data.filter(function(item,index,arr){
        return item.name.indexOf(value) !== -1;
    })
}
// 根据性别来过滤。
var lastActive = span[2];
var arr = [].slice.call(span,0);
arr.forEach(function(item,index,arr){
    item.onclick = function(){
        changeActive(this);
        state.filterSex = this.getAttribute("id")
        readerPage(lastFilter(personArr))
    }
})
function changeActive(currActive){
    currActive.className = "active";
    lastActive.className = "";
    lastActive = currActive;
}
function filterSex(data,value){
    if(value == "a") return data;
    return data.filter(function(item,index,arr){
        return item.sex == value
    })
} 
// 根据多条件筛选。
var config = {
    filterText : filterText,
    filterSex : filterSex
},
state = {
    filterText:"",
    filterSex:"a"
}
function combineFilter(config){
    return function(data){
        for(var prop in config){
            data = config[prop](data,state[prop])
        } 
        return data;
    }
}
var lastFilter = combineFilter(config)
