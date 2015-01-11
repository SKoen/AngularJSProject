mainApp.factory('userProfile',['$http','mainUrl','authentication',function($http,mainUrl,authentication){
    var headers=authentication.getHeaders();
    return {
    getUserData:function(success) {
        $http({method: 'GET', url: mainUrl + 'user/profile', headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            })
            .error(function (data, status, headers, config) {
            })
    },
    editUserData:function(data) {
        $http({method: 'PUT', url: mainUrl + 'user/profile', headers: headers,data:data})
            .success(function (data, status, headers, config) {

            })
            .error(function (data, status, headers, config) {
            })
    },
    changePass:function(data) {
        $http({method: 'PUT', url: mainUrl + 'user/changepassword', headers: headers,data:data})
            .success(function (data, status, headers, config) {

            })
            .error(function (data, status, headers, config) {
            })
    }

}
}])