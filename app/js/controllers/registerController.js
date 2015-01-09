mainApp.controller("RegisterCtrl",function($scope,townData){
        townData.getAllTowns(function(resp){
            $scope.townsData=resp;
        }),
        $scope.register=function(user){
            console.log(user);
        }

})