mainApp.controller("HeaderCtrl",['$scope','authentication',function($scope,authentication){
    console.log(authentication.getUser());
    $scope.isLoggedIn=!!authentication.getUser();
}])