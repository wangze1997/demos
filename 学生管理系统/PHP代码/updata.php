 <?php
    $id = $_POST["id"];
    $age = $_POST["age"];
    $sex = $_POST["sex"];
    $name = $_POST["name"];
    $email = $_POST["eamil"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
    $link = new MySQLi("localhost","root","","mydb");
    if(mysqli_connect_errno($link)){
        echo "错误描述：网站错误，请联系管理员";
    }
    mysqli_query($link,"set names utf8");
    $sql = "update student set id = '{$id}',age = '{$age}',sex = '{$sex},name = '{$name},email = '{$email},phone = '${phone}',address = '${address}' where id = '{$id}'";
    $result = $link->query($sql);
    $sql2 = "select * from student";
    $result = $link->query($sql2);
    $attr = $result->fetch_all(); //fetch_all 函数从结果集中取得所有行作为关联数组，或数字数组，或二者兼有。
    echo json_encode($attr);
?> 
