app.factory('UsuarioService', function($http){
    return {
        select: function(email){
            return $http({
                method: 'get',
                url: WS_URL +'usuario/select.php',
                params: {email: email}
            });
        },
        selectToken: function(token){
            return $http({
                method: 'get',
                url: WS_URL +'usuario/selectToken.php',
                params: {token: token}
            });
        },
        logar: function(email, senha){
          return $http({
              method: 'get',
              url: WS_URL +'usuario/logar.php',
              params: {email: email, senha: senha}
          });
        },
        cadastrar: function(nome, email, senha){
            return $http({
                method: 'post',
                url: WS_URL + 'usuario/insert.php',
                data: {nome: nome, email: email, senha: senha}
            });
        },
        existEmail: function(email){
            return $http({
                method: 'get',
                url: WS_URL + 'usuario/existEmail.php',
                params: {email: email}
            });
        },
        enviarEmailEsqueceuSenha: function(email, token){
            return $http({
                method: 'get',
                url: WS_URL + 'usuario/enviarEmailEsqueceuSenha.php',
                params: {email: email, token: token}
            });
        },
        enviarEmailAlterouSenha: function(email){
            return $http({
                method: 'get',
                url: WS_URL + 'usuario/enviarEmailAlterouSenha.php',
                params: {email: email}
            });
        },
        alterarSenha: function(email, senha){
            return $http({
                method: 'post',
                url: WS_URL + 'usuario/alterarSenha.php',
                data: {email: email, senha: senha}
            });
        },
    }
});
