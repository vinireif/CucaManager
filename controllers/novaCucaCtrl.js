app.controller('novaCucaCtrl', function($scope, $http, CucaService, UsuarioService, toastr, $location) {

    //Selecionar elemento
    document.getElementById("nome1").focus();

    //Erros
    $scope.erro = "";

    //Inserir nova cuca
    $scope.submit = function(cuca){

        if($scope.form.preco.$invalid)
        {
            toastr.error('Campo preço inválido', 'Erro');
            return;
        }
        if($scope.form.$invalid)
        {
            toastr.error('Campos obrigatórios', 'Erro');
            return;
        }
        if(cuca.preco == '' || cuca.preco == undefined)
        {
            cuca.preco = '0';
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
