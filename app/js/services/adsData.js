mainApp.factory('adsData',['$http','mainUrl',function($http,mainUrl){
    return {
        getAllAds:function(success){
            $http({method:'GET',url:mainUrl+'ads?Pagesize=10&startpage=1'})
                .success(function(data,status,headers,config){
                    success(data);
                })
                .error(function(data,status,headers,config){
                    $log.warn(data);
                })
        }
    }
}])