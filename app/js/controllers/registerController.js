mainApp.controller("RegisterCtrl",['$scope','townData','userData',function($scope,townData,userData){
        townData.getAllTowns(function(resp){
            $scope.townsData=resp;
        }),
        $scope.register=function(user){
            userData.register(user);
        }

}])