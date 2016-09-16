<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $id = $data['id'];
    $ativo = $data['ativo'];

    $sql = "UPDATE cuca SET ativo = '$ativo' WHERE id = $id";
    if(mysqli_query($conexao, $sql)){
        print "success";
    }
    else {
        print "error";
    }
?>
