mainApp.controller("HeaderCtrl",['$scope','authentication',function($scope,authentication){
    $scope.isLoggedIn=!!authentication.getUser();
    $scope.logout=function(){
        localStorage.clear();
    }
}])