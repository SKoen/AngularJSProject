mainApp.controller("MainController",function($scope,mainData){
    mainData.getAllAds(function(resp){
        $scope.data=resp;
    })
    mainData.getAllTowns(function(resp){
        $scope.towns=resp;
    })
})