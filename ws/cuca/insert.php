<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idUsuario = $data['idUsuario'];
    $nome = $data['nome'];
    $descricao = $data['descricao'];
    $preco = $data['preco'];
    $data = $data['data'];


    $ativo = 'S';

    $sql = "INSERT INTO cuca VALUES (0,'$idUsuario','$nome','$descricao',STR_TO_DATE('$data', '%d/%m/%Y'),$preco,'$ativo')";
    if(mysqli_query($conexao, $sql)){
        print "success";
    }
    else {
        print "error";
    }
?>
