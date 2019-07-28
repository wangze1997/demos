var listStudent = document.getElementsByTagName("dd")[0];
var addStudent = document.getElementsByTagName("dd")[1];
var showList = document.getElementsByClassName("student-list")[0];
var showAdd = document.getElementsByClassName("add-student")[0];
var dl = document.getElementsByTagName("dl")[0];
var addform = document.getElementById("add-student-form"); // submit事件绑定在form表单身上
var editfrom = document.getElementById("edit-student-form");
var tbody = document.getElementById("student-table");
var tableData = []; //存储被渲染的数据
var modal = document.getElementsByClassName("modal")[0];
var modalMask = document.getElementsByClassName("modal-mask")[0];
var prevPage = document.getElementsByClassName("prevPage")[0];
var nextPage = document.getElementsByClassName("nextPage")[0];
var nowPage = 1;
var allPage = 1;
var pageSize = 10;
var input = document.getElementsByClassName("search-input")[0];
var button = document.getElementsByClassName("search-botton")[0];
// 初始化函数
function init(){
    bindEvent();
    // renderDom(getRenderData());
    showPage(nowPage,pageSize);
}
// 一系列点击事件
function bindEvent(){
    // 绑定右侧点击事件
    dl.addEventListener("click",function(e){
        if(e.target.nodeName != "DD"){
            return false;
        }
        changeMenu(e.target)
        changeContentStyle(e.target.getAttribute("data-id"));
    })
    // 为新增学生绑定点击事件
    addform.addEventListener("submit",function(e){
            e.preventDefault();
            var obj = getData(addform);
            if(!obj){
                window.alert("输入信息要全面！");
            }else{
                var res = sendData("http://api.duyiedu.com/api/student/addStudent",Object.assign({appkey:"wlz1997_1564064546855"},obj));
                if(res.msg == "添加成功"){
                    // renderDom(getRenderData());
                        showPage(nowPage,pageSize);
                    var flag = confirm("添加成功，是否跳转");
                    if(flag){
                        listStudent.click();
                    }
                }else if(res.msg == "邮箱格式不正确"){
                    alert("邮箱格式不正确");
                }else if(res.msg == "该学生已经存在"){
                    alert("该学生已经存在");
                }else if(res.msg == "请输入正确的11位手机号"){
                    alert("请输入正确的11位手机号");
                }
            }
    });
    // 删除与编辑功能
    tbody.addEventListener("click",function(e){
        if(e.target.nodeName != "SPAN"){
            return false;
        }
        var arr = [].slice.call(e.target.classList,0);
        if(arr.indexOf("del") != -1){
            var flag = confirm("确认删除吗？");
            if(flag){
                var res = sendData("http://api.duyiedu.com/api/student/delBySno",{sNo:tableData[e.target.getAttribute("data-index")].sNo,appkey:"wlz1997_1564064546855"});
                if(res.msg == "删除成功"){
                        // renderDom(getRenderData());
                        showPage(nowPage,pageSize);
                }
            }  
        }
        if(arr.indexOf("edit") != -1){
            modal.style.display = "block";
            readerEditFrom(tableData[e.target.getAttribute("data-index")]);
        }
    })  
    // 取消编辑功能
    modalMask.addEventListener("click",function(e){
        modal.style.display = "none";
    });
    // 编辑跳转
    editfrom.addEventListener("submit",function(e){
        e.preventDefault();
        var obj = getData(editfrom);
        if(!obj){
            window.alert("输入信息要全面！");
        }else{
            var res = sendData("http://api.duyiedu.com/api/student/updateStudent",Object.assign({appkey:"wlz1997_1564064546855"},obj));
            if(res.status == "success"){
                // renderDom(getRenderData());
                showPage(nowPage,pageSize);
                modal.style.display = "none";
            }else{
                alert("未找到该学生");
            }
        }
    }); 
    // 分页功能
    prevPage.onclick = function(){
        nowPage-- ;
        showPage(nowPage,pageSize);
    }
    nextPage.onclick = function(){
        nowPage++;
        showPage(nowPage,pageSize);
    }
    // 搜索点击事件
    button.onclick = function(e){
        serachData(input.value.trim());
    }
}
// 切换目录
function changeMenu(targetDom){
    var active = document.getElementsByClassName("active");
    for(var i = 0; i < active.length; i++){
        active[i].classList.remove("active");
    }
    targetDom.classList.add("active");
}
// 切换内容区
function changeContentStyle(id){
    var cont = document.getElementsByClassName("content-right")[0];
    for(var i = 0; i < cont.children.length; i++){
        cont.children[i].classList.remove("content-active");
    }
    var addActive = document.getElementsByClassName(id)[0];
    addActive.classList.add("content-active");
}
// 获取表单数据
function getData(form){
    var name = form.name.value;
    var address = form.address.value;
    var birth = form.birth.value;
    var sNo = form.sNo.value;
    var sex = form.sex.value;// 字符串的0或1
    var email = form.email.value;
    var phone = form.phone.value;
    if(!name || !address || !birth || !sNo || !sex || !email || !phone){
        return false;
    }
    var obj = {
        sNo:sNo,
        name:name,
        sex:sex,
        birth:birth,
        phone:phone,
        address:address,
        email:email
    }
    return obj
}
// 发送数据
function sendData(url,param){
    var str = "?";
    for(var prop in param){
        str += prop + "=" + param[prop] + "&";
    }
    var xhr = new XMLHttpRequest();
    xhr.open("get",url + str,false);
    // console.log(url+str)
    var reslute;
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            reslute = JSON.parse(xhr.response);
        }else{
            reslute = {msg:"未请求到数据"}
        }
    }
    xhr.send();
    return reslute;
}
// 获取渲染数据
function getRenderData(){
    var res = sendData("http://api.duyiedu.com/api/student/findAll",{appkey:"wlz1997_1564064546855"});
    return res.data;
}
// 渲染表格
function renderDom(data){
    var arr = data;
    var str = "";
    arr.forEach(function(item,index){
        str += "<tr>\
                <td class='sNo'> "+ item.sNo + "</td>\
                <td> "+ item.birth + "</td>\
                <td> "+ (item.sex == 0 ? '男':'女') + "</td>\
                <td> "+ item.name + "</td>\
                <td> "+ item.email + "</td>\
                <td> "+ item.phone + "</td>\
                <td> "+ item.address + "</td>\
                <td>\
                    <span class='btn del' data-index="+ index +">删除</span>\
                    <span class='btn edit' data-index="+ index +">编辑</span>\
                </td>"
    });
    var tbody = document.getElementById("student-table");
    tbody.innerHTML = str;
    tableData = arr;
    //上一页 下一页的隐藏
    if(allPage == 1){
        prevPage.style.display = "none";
        nextPage.style.display = "none";
    }
    if(nowPage == 1){
        prevPage.style.display = "none";
        nextPage.style.display = "inline-block";
    }else if(nowPage == allPage){
        prevPage.style.display = "inline-block";
        nextPage.style.display = "none"
    }else{
        prevPage.style.display = "inline-block";
        nextPage.style.display = "inline-block"
    }
}
// 数据回传
function readerEditFrom(data){
    for(var prop in data){
        if(editfrom[prop]){
            editfrom[prop].value = data[prop];            
        }
    }
}
// 显示当前页
function showPage(nowPage,pageSize){
    var res = sendData("http://api.duyiedu.com/api/student/findByPage",{appkey:"wlz1997_1564064546855",page:nowPage,size:pageSize})
    renderDom(res.data.findByPage);
    allPage = Math.ceil((res.data.cont)/pageSize);
}
// 搜索功能 ~ 随后做
function serachData(data){
    var res = sendData("http://api.duyiedu.com/api/student/searchStudent",{appkey:"wlz1997_1564064546855",page:nowPage,size:pageSize,sex:-1,search:data});
    if(res.msg == "查询成功" && res.data.searchList.length){
        console.log(res)
        renderDom(res.data.searchList);
    }else{
        alert("没该学生信息");
    }
}
init();