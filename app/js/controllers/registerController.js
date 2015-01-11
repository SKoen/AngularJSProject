mainApp.controller("RegisterCtrl",['$scope','$location','townData','userData',function($scope,$location,townData,userData){
        townData.getAllTowns(function(resp){
            $scope.townsData=resp;
        }),
        $scope.register=function(user){
            userData.register(user);
            showInfoMessage('Successful registered. Now you can logged in!')
            $location.path('/');
        }
    function showInfoMessage(msg) {
        noty({
                text: msg,
                type: 'success',
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