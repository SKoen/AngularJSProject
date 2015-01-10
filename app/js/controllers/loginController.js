mainApp.controller("LoginCtrl",['$scope','$location','userData',function($scope,$location,userData){
        $scope.loggedIn=true;
        $scope.login=function(user){
            userData.login(user)
                .$promise
                .then(function(data){
                    $location.path('/');
                })
        }

}])