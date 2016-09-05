app.controller('todosCtrl', function($scope, CucaService, toastr){

    //Iniciar carregando as cucas
    $scope.selectCucas = function(){
        $scope.cucas = {};
        CucaService.selectAll().then(function(response){
            $scope.cucas = response.data;
            console.log($scope.cucas);
        }, function(error){
            toastr.error('Erro de conexão com servidor', 'Erro');
        });
    };
    $scope.selectCucas();

});
