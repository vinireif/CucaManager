app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/login.html'
    })
    .when('/login', {
        templateUrl: 'views/login.html'
    })
    .when('/list', {
        templateUrl: 'views/list.html'
    })
    .when('/teste', {
        templateUrl: 'views/login.html'
    })
    //More Here
});
