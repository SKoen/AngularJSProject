mainApp.factory('categoryData',['$http','mainUrl',function($http,mainUrl){
    return {
        getAllCategory:function(success){
            $http({method:'GET',url:mainUrl+'categories'})
                .success(function(data,status,headers,config){
                    success(data);
                })
                .error(function(data,status,headers,config){
                    $log.warn(data);
                })
        }
    }
}])