mainApp.controller("LogoutCtrl",['$scope','userData',function($scope,userData){
    userData.logout();

}])