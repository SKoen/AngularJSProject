mainApp.controller("HomeController",['townData','$scope','adsData','categoryData',function(townData,$scope,adsData,categoryData){
    $scope.hideCategories=true;
    $scope.hideTowns=true;
    var clickedCategory="";
    var clickedTown="";
    $scope.clickCategory=function (catId){
        clickedCategory=catId;
        console.log(catId);
    }
    $scope.clickTown=function (townId){
        clickedTown=townId;
        console.log(townId);
    }
    adsData.getAllAds(function(resp){
        $scope.adsData=resp;
    }),
    townData.getAllTowns(function(resp){
        $scope.townsData=resp;
    }),
    categoryData.getAllCategory(function(resp){
        $scope.categoryData=resp;
    })
}])