<?php
    include '../conexao.php';

    $sql = "SELECT * FROM cuca";
    $rs = mysqli_query($conexao, $sql);
    $json = array();
    while($arr = mysqli_fetch_assoc($rs))
    {
        $json[] = $arr;
    }
    echo(json_encode($json));
?>
