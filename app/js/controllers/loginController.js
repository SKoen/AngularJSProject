mainApp.controller("LoginCtrl",['$scope','$location','userData',function($scope,$location,userData){
        $scope.loggedIn=true;
        $scope.login=function(user){
            userData.login(user)
                .$promise
                .then(function(data){
                   showInfoMessage("Welcome "+data.username)
                    $location.path('/');
                },function(error){
                    //showErrorMessage(error)
                })
            }
    function showInfoMessage(msg) {
        noty({
                text: msg,
                type: 'info',
                layout: 'topCenter',
                timeout: 3000}
        );
    }

    function showErrorMessage(msg) {
        noty({
                text: msg,
                type: 'error',
                layout: 'topCenter',
                timeout: 3000}
        );
    }
}])