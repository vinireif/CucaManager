app.controller('minhaCucaCtrl', function($scope, CucaService, toastr, $timeout){

    //Barra progresso
    $scope.progress = true;

    //Cucas
    $scope.cucas = {};

    //Iniciar carregando as cucas
    $scope.selectCucas = function(){
        $scope.progress = true;
        CucaService.select('1').then(function(response){
            $scope.cucas = response.data;
            console.log($scope.cucas);
            $scope.progress = false;
        }, function(error){
            toastr.error('Erro de conexão com servidor', 'Erro');
            $scope.progress = false;
        });
    };
    $scope.selectCucas();

    $scope.desativar = function(id, ativo, index){
        $scope.progress = true;
        CucaService.desativar(id, ativo).then(function(response){
            toastr.success('Status de cuca alterado', 'Success');
            $scope.cucas[index].ativo = ativo;
            console.log($scope.cucas);
            $scope.progress = false;
        }, function(error){
            toastr.error('Erro ao desativar cuca', 'Erro');
            $scope.progress = false;
        });
    };

});
