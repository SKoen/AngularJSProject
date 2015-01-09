mainApp.factory('userData',['mainUrl','$resource',function(mainUrl,$resource){
    function registerUser(user){
        return $resource(mainUrl+'user/register')
            .save(user);
    }
    function loginUser(user){

    }
    function logoutUser(){

    }
    return {
        register:registerUser,
        login:loginUser,
        logout:logoutUser
    }
}])