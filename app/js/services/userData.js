mainApp.factory('userData',['mainUrl','$resource','authentication',function(mainUrl,$resource,authentication){
    function registerUser(user){
        return $resource(mainUrl+'user/register')
            .save(user)
            .$promise
            .then(function(data){
                authentication.saveUser(data);
            })
    }
    function loginUser(user){
        var resource = $resource(mainUrl+'user/login')
            .save(user)
            resource.$promise
            .then(function(data){
                authentication.saveUser(data);
            },function(error){
                showErrorMessage(error);
            })
        return resource
    }
    return {
        register:registerUser,
        login:loginUser
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