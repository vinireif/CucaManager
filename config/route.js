app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/todos.html'
    })
    .when('/login', {
        templateUrl: 'views/login.html'
    })
    .when('/todos', {
        templateUrl: 'views/todos.html'
    })
    .when('/novaCuca', {
        templateUrl: 'views/novaCuca.html'
    })
    .when('/minhas', {
        templateUrl: 'views/minhas.html'
    })
    .when('/esqueceuSenha', {
        templateUrl: 'views/esqueceuSenha.html'
    })
    .when('/cadastro', {
        templateUrl: 'views/cadastro.html'
    })
    .when('/alterarSenha', {
        templateUrl: 'views/alterarSenha.html'
    })
    //More Here
});
