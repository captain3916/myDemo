<?php
    header("content-type:text/html;charset=utf-8");

    $name = $_POST["userName"];
    $psd = $_POST["userPsw"];

    $db = mysqli_connect("localhost","root","");

    mysqli_select_db($db,"studentssystem");

    mysqli_query($db,"set names utf8");

    $sql = "select * from user where uname='$name'";

    $result = mysqli_query($db,$sql);

    $row = mysqli_fetch_array($result);

    if($row){
        if($row["upwd"] == $psd){
            echo 1;//成功
        }else{
            echo 2;//密码错误
        }
    }else{
        echo 0;//用户名不存在
    }

?>