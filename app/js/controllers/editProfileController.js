mainApp.controller("editProfileCtrl",['$scope','mainUrl','userProfile',function($scope,mainUrl,userProfile){
    userProfile.getUserData(function(resp){
        $scope.currentUser=resp;
    })
}])