mainApp.factory('townData',['$http','mainUrl',function($http,mainUrl){
    return {
        getAllTowns:function(success){
            $http({method:'GET',url:mainUrl+'towns'})
                .success(function(data,status,headers,config){
                    success(data);
                })
                .error(function(data,status,headers,config){
                    $log.warn(data);
                })
        }
    }
}])