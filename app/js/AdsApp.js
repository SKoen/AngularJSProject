var mainApp=angular.module('MainModule',['ngRoute'])
.config(function($routeProvider){
    $routeProvider.when('/register',{
        templateUrl:"templates/register.html"
    })
    $routeProvider.when('/login',{
        templateUrl:"templates/login.html"
    })
})