<?php
    header("Content-Type: text/html; charset=UTF-8");
    $link = new MySQLi("localhost","root","","mydb");
    if(mysqli_connect_errno($link)){
        echo "错误描述：网站错误，请联系管理员";
    }
    mysqli_query($link,"set names utf8");
    $sql = "select * from student";
    $result = $link->query($sql);
    $attr = $result->fetch_all(); //fetch_all 函数从结果集中取得所有行作为关联数组，或数字数组，或二者兼有。
    // echo json_encode($attr);
    // echo 234;
    // header('HTTP/1.1 404 Not Found') //后台自定义http状态返回码
    echo 342342
?> 
<h3>423424</h3>