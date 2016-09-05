app.controller('novaCucaCtrl', function($scope, $http, CucaService, UsuarioService, toastr, $location) {

    //Erros
    $scope.erro = "";

    //Inserir nova cuca
    $scope.submit = function(cuca){

        if(cuca == undefined)
        {
            toastr.error('Campos inválidos', 'Erro');
            return;
        }
        if(cuca.nome == '' || cuca.nome == undefined)
        {
            toastr.error('Campos inválidos', 'Erro');
            return;
        }
        if(cuca.descricao == '' || cuca.descricao == undefined)
        {
            toastr.error('Campos inválidos', 'Erro');
            return;
        }
        if(cuca.descricao == '' || cuca.descricao == undefined)
        {
            toastr.error('Campos inválidos', 'Erro');
            return;
        }
        if(cuca.preco == '' || cuca.preco == undefined)
        {
            toastr.error('Campos inválidos', 'Erro');
            return;
        }
        cuca.idUsuario = '1';

        CucaService.insert(cuca).then(function(response){
            toastr.success('Cuca cadastrada com sucesso!', 'Sucesso!');
            $scope.cuca = {};
            document.getElementById("nome1").focus();
        }, function(error){
            toastr.error('Erro de conexão com servidor', 'Erro');
        });
    };
});
