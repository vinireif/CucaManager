app.controller('alterarSenhaCtrl', function($scope, UsuarioService, toastr, $routeParams){

    UsuarioService.selectToken($routeParams.token).then(function(response){
        var email = response.data[0].email;
        $scope.email = email;
        document.getElementById('email').value = "";
    }, function(error){
        toastr.error('Erro ao conectar ao servidor','Erro');
    });

    $scope.alterarSenha = function(email,senha,alterarSenha){

        if(senha != alterarSenha){
            toastr.error('Senhas não conferem','Erro');
            return;
        }

        UsuarioService.alterarSenha(email,senha).then(function(response){

            var alterouSenha = response.data;

            if(alterouSenha == 'true'){
                toastr.success('Senha alterada com sucesso','Sucesso');
                $scope.novaSenha = '';
                $scope.confirmarSenha = '';

                UsuarioService.enviarEmailAlterouSenha(email).then(function(response){
                }, function(error){
                });

            } else {
                toastr.error('Erro ao alterar a senha','Erro');
                $scope.senha = '';
                $scope.confirmarSenha = '';
            }


        }, function(error){
            toastr.error('Erro ao conectar ao servidor','Erro');
        });

    }


});
