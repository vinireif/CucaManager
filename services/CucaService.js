app.factory('CucaService', function($http){
    return {
        select: function(idUsuario){
            return $http({
                method: 'get',
                url: WS_URL+'cuca/select.php',
                params: {id: idUsuario}
            });
        },
        selectAll: function(){
            return $http({
                method: 'get',
                url: WS_URL+'cuca/selectAll.php'
            });
        },
        insert: function(cuca){
            return $http({
                method: 'post',
                url: WS_URL+'cuca/insert.php',
                data: cuca
            });
        },
        update: function(cuca){

        },
        addParticipante: function(cuca){

        },
        desativar: function(id, ativo){
            return $http({
                method: 'post',
                url: WS_URL+'cuca/desativar.php',
                data: {'id': id,'ativo': ativo}
            });
        }
    }
});
