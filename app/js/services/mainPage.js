var mainUrl="http://softuni-ads.azurewebsites.net/api/";

mainApp.factory('mainData',function($http){
    return {
        getAllAds:function(success){
            $http({method:'GET',url:mainUrl+'ads?Pagesize=10&startpage=1'})
                .success(function(data,status,headers,config){
                    success(data);
                })
                .error(function(data,status,headers,config){
                    $log.warn(data);
                })
        },
        getAllTowns:function(success){
            $http({method:'GET',url:mainUrl+'towns'})
                .success(function(data,status,headers,config){
                    success(data);
                })
                .error(function(data,status,headers,config){
                    $log.warn(data);
                })
        },
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
})