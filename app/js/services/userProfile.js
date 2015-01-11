mainApp.factory('userProfile',['$http','mainUrl','authentication',function($http,mainUrl,authentication){
    var headers=authentication.getHeaders();
    function getUserData(){
            $http({method:'GET',url:mainUrl+'user/profile',headers:headers})
                .success(function(data,status,headers,config){
                   
                    return data;
                })
    }
    return {getUserData:getUserData}
}])