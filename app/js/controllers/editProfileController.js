mainApp.controller("editProfileCtrl",['$scope','$http','mainUrl','authentication',function($scope,$http,mainUrl,authentication){
    var headers=authentication.getHeaders();
    $scope.user={};
    (function getUserData(){
        $http({method:'GET',url:mainUrl+'user/profile',headers:headers})
            .success(function(data,status,headers,config){
                $scope.user=data
            })
    })()
}])