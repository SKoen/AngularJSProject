var mainApp=angular.module('MainModule',['ngRoute','ngResource','LocalStorageModule']);

mainApp.constant('mainUrl',"http://softuni-ads.azurewebsites.net/api/");

mainApp.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/register',{
        templateUrl:"templates/register.html",
        controller : 'RegisterCtrl'
    })
    $routeProvider.when('/ads',{
        templateUrl:"templates/all-ads.html",
        controller:'HomeController'
    })
    $routeProvider.when('/login',{
        templateUrl:"templates/login.html",
        controller:'LoginCtrl'

    })
    $routeProvider.otherwise({redirectTo:'/ads'});
}])