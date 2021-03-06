mainApp.controller("publishAdCtrl",['townData','$scope','$location','categoryData','adsData',function(townData,$scope,$location,categoryData,adsData){
        townData.getAllTowns(function(resp){
            $scope.townsData=resp;
        }),
        categoryData.getAllCategory(function(resp){
            $scope.categoryData=resp;
        }),
        $scope.publishAd=function(ad){
            adsData.createNewAd(ad);
        }
        $scope.cancel=function(){
            $location.path('/');
        }
}])