mainApp.controller("HomeController",['townData','filterAds','$scope','adsData','categoryData',function(townData,filterAds,$scope,adsData,categoryData){
    $scope.hideCategories=true;
    $scope.ready=false;
    $scope.hideTowns=true;
    var clickedCategory="";
    var clickedTown="";
    $scope.clickCategory=function (catId){
        clickedCategory=catId;
     //   console.log(catId);
        filterAds.filterByCategoryAndTown(clickedCategory,clickedTown);
    }
    $scope.clickTown=function (townId){
        clickedTown=townId;
        //console.log(townId);
        filterAds.filterByCategoryAndTown(clickedCategory,clickedTown);
    }
    adsData.getAllAds(function(resp){
        $scope.adsData=resp;
        $scope.ready=true;
    }),
    townData.getAllTowns(function(resp){
        $scope.townsData=resp;
    }),
    categoryData.getAllCategory(function(resp){
        $scope.categoryData=resp;
    })
}])