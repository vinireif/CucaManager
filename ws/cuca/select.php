<?php
    include '../conexao.php';
    $idUsuario = $_GET["id"];
    $sql = "SELECT * FROM cuca WHERE id_usuario = $idUsuario";
    $rs = mysqli_query($conexao, $sql);
    $json = array();
    while($arr = mysqli_fetch_assoc($rs))
    {
        $json[] = $arr;
    }
    echo(json_encode($json));
?>
