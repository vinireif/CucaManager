app.controller('loginCtrl', function($scope, UsuarioService, toastr, $timeout, $location, $rootScope){

    $scope.usuario.nome = '';
    $scope.usuario.email = '';
    $scope.usuario.senha = '';
    $scope.usuario.confirmarSenha = '';

    //Usuarios
    $scope.usuarios = {};

    $scope.logar = function(usuario){

        UsuarioService.logar(usuario.email, usuario.senha).then(function(response){
            var logou = response.data;

            if (logou == 'true') {

                UsuarioService.select(usuario.email).then(function(response){
                    $rootScope.usuario = response.data[0];
                    $location.path('todos');
                },function(error){
                    toastr.error('Erro ao conectar ao servidor','Erro');
                });

            } else {
                toastr.error('Usuário ou senha incorretos','Erro');
                document.getElementById("email").value = '';
                document.getElementById("senha").value = '';
                document.getElementById("email").focus();
            }

        }, function(error){
            toastr.error('Erro ao conectar ao servidor','Erro');
        });
    };
});
