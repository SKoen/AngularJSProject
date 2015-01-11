mainApp.controller("HeaderCtrl",['$scope','userProfile','authentication',function($scope,userProfile,authentication){
    $scope.isLoggedIn=!!authentication.getUser();
    userProfile.getUserData(function(resp){
        $scope.user=resp;
    })
    $scope.logout=function(){
        showInfoMessage('You successful logged out. Have a nice day!')
        localStorage.clear();
    }
    function showInfoMessage(msg) {
        noty({
                text: msg,
                type: 'success',
                layout: 'topCenter',
                timeout: 3000}
        );
    }
}])