function getJSON(type, url, data) {
    return new Promise((resolve, reject) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ObjectXActive("Mircosort.XMLHttp");
        }
        if (type == "get") {
            xhr.open(type, url + "?" + data, true);
            xhr.send();
        } else {
            xhr.open(type, url, true);
            xhr.setHttpRequest("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(data);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.response));
                    lock = true;
                } else {
                    reject(xhr.statusText);
                }
            }
        }
    })
}

var lock = true;
var page = 1;
let oLi = document.getElementsByTagName("li");
function randerDom(data) {
    data.forEach(item => {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var p = document.createElement("p");
        img.src = item.img;
        p.innerText = item.desc;
        img.onload = function () {
            div.appendChild(img);
            div.appendChild(p);
            var minLi = getMinLi();
            oLi[minLi.minIndex].appendChild(div);
        }
    });
}
function getMinLi() {
    var minIndex = 0;
    var minHeight = oLi[0].offsetHeight; //注意这里
    for (var i = 0; i < oLi.length; i++) {
        if (oLi[i].offsetHeight < minHeight) {
            minIndex = i;
            minHeight = oLi[i].offsetHeight;
        }
    }
    return {
        minIndex,
        minHeight
    }
}
getJSON("get", "http://127.0.0.1:3000/data", "size=10&page= +" + page + "+&user=caiwenji").then(function (res) {
    randerDom(res);
});
function fn() {
    var client = document.documentElement.clientHeight
    var scrollTop = document.documentElement.scrollTop
    var maxHeight = document.documentElement.offsetHeight;
    if (client + scrollTop > maxHeight - 50) {
        if(!lock){
            return false;
        }
        lock = false;
        page ++;
        getJSON("get", "http://127.0.0.1:3000/data", "size=10&page= +" + page + "+&user=caiwenji").then(function (res) {
            randerDom(res);
        });
    }
}
function throttle (fn,delay){
    var timer = null;
    return function (){
        if(timer) return false;
        timer = setTimeout(() => {
            fn.apply(this,arguments);
            timer = null;
        },delay)
    }
}
window.onscroll = throttle(fn,100);
