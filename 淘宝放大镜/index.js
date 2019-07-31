var oMin = document.getElementsByClassName('min')[0],
    oCover = document.getElementsByClassName('cover')[0],
    oMax = document.getElementsByClassName('max')[0],
    oImg = oMax.getElementsByTagName('img')[0];
oMin.onmouseover = function(){
    oMax.style.display = 'inline-block';
    oCover.style.display = 'inline-block';
}
oMin.onmouseout = function(){
    oMax.style.display = 'none';
    oCover.style.display = 'none';
}
oMin.onmousemove = function(e){
    var x = e.clientX - this.offsetLeft - oCover.offsetWidth/2 - 1,  // 减掉边框宽度
        y = e.clientY - this.offsetTop - oCover.offsetHeight/2 - 1;
    var minX = 0,
        maxX = this.offsetWidth - oCover.offsetWidth - 2;
        minY = 0,
        maxY = this.offsetHeight - oCover.offsetHeight - 2;
    if(x <= 0){
        x = minX
    }else if(x >= maxX){
        x = maxX
    }
    if(y <= 0){
        y = minY
    }else if(y >= maxY){
        y = maxY
    }
    oCover.style.left = x + 'px'
    oCover.style.top = y + 'px'
    var imgX = x/maxX*(oImg.offsetWidth - oMax.offsetWidth + 2),
        imgY = y/maxY*(oImg.offsetWidth - oMax.offsetWidth + 2);
        oImg.style.left = - imgX + 'px'
        oImg.style.top = - imgY + 'px'
}