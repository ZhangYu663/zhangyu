<?php
    header("Content-type:text/html;charset=utf-8");

    $_tel=$_REQUEST["usertel"];
    $_pwd=$_REQUEST["userpwd"];

    $conn=mysql_connect("localhost","root","root");
   
    mysql_select_db("2004");

    $result = mysql_query("select * from login where tel='$_tel' and pwd='$_pwd'" , $conn);

    if(mysql_num_rows($result)==1){
        echo "<script>setTimeout(\"window.location.href='index.html'\");</script>";
    }else{
        echo "登录失败";
    }


    mysql_close($conn);
?>