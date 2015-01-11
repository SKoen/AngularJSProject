mainApp.factory('adsData',['$http','$q','mainUrl','authentication','filterAds',function($http,$q,mainUrl,authentication,filterAds){
    var headers=authentication.getHeaders();
    var deferred = $q.defer();
    return {
        getAllAds:function(success){
            $http({method:'GET',url:mainUrl+'ads'})
                .success(function(data,status,headers,config){
                    success(data);
                })
                .error(function(data,status,headers,config){
                    $log.warn(data);
                })
        },
        getAllAdsByTownAndCategory:function(success){
            $http({method:'GET',url:mainUrl+'ads?townid='+filterAds.filterByCategoryAndTown.townId+'&categoryid='+filterAds.filterByCategoryAndTown.categoryId})
                .success(function(data,status,headers,config){
                    success(data);
                })
                .error(function(data,status,headers,config){
                    $log.warn(data);
                })
        },
        createNewAd:function(ad){
            $http({method:'POST',url:mainUrl+'user/ads',headers:headers,data:ad})
                .success(function(data,status,headers,config){

                    deferred.resolve(data, status, headers, config);
                    return deferred.promise;
                })
                .error(function(data,status,headers,config){
                    console.log(data)
                    console.log(status)
                })
        }
    }
}])