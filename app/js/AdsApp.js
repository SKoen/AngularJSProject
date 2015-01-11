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
    $routeProvider.when('/user/ads/publish',{
        templateUrl:"templates/publishAd.html",
        controller:'publishAdCtrl'
    })
    $routeProvider.when('/user/editProfile',{
        templateUrl:"templates/editProfile.html",
        controller:'editProfileCtrl'
    })
    $routeProvider.when('/logout',{
        controller:'LogoutCtrl'
    })
    $routeProvider.otherwise({redirectTo:'/ads'});
}])