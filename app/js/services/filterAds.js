mainApp.factory('filterAds',['mainUrl','$location',function(mainUrl,$location){
    function filterByCategoryAndTown(categoryId,townId){
        $location.path('/ads?townid='+townId+'&categoryid=8'+categoryId)
        return {categoryId:categoryId,townId:townId}
    }
    function filterByPaginator(numOfPage){

    }
    function filterByUserId(userId){

    }
    return {
        filterByCategoryAndTown:filterByCategoryAndTown,
        filterByPaginator:filterByPaginator,
        filterByUserId:filterByUserId
    }
}])