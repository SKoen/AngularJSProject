mainApp.controller("editProfileCtrl",['$scope','$location','mainUrl','townData','userProfile',function($scope,$location,mainUrl,townData,userProfile){
    userProfile.getUserData(function(resp){
        $scope.currentUser=resp;
    }),
    townData.getAllTowns(function(resp){
        $scope.townsData=resp;
    }),
    $scope.updateProfile=function(user){
        userProfile.editUserData(user);
        showInfoMessage('You data are successful changed!')
        $location.path('/');
    },
    $scope.changePassword=function(user){
        userProfile.changePass(user);
        $location.path('/');
    }
    $scope.cancel=function(){
        $location.path('/');
    }
    function showInfoMessage(msg) {
        noty({
                text: msg,
                type: 'success',
                layout: 'topCenter',
                timeout: 3000}
        );
    }

    function showErrorMessage(msg) {
        noty({
                text: msg,
                type: 'error',
                layout: 'topCenter',
                timeout: 3000}
        );
    }
}])