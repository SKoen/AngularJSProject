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
            })
        return resource
    }
    function logoutUser(){
        localStorage.clear();
    }
    return {
        register:registerUser,
        login:loginUser,
        logout:logoutUser
    }
}])