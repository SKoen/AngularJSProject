mainApp.factory('authentication',function(){
    var key='user';
    function saveUser(data){
        localStorage.setItem(key,angular.toJson(data));

    }
    function getUser(data){
       return angular.fromJson(localStorage.getItem(key));
    }

    function getHeaders(){
        var headers={};
        var userData=getUser();
        if(userData){
            headers.Authorization='Bearer '+ userData.access_token;
        }
        return headers;
    }
    return{
        saveUser:saveUser,
        getUser:getUser,
        getHeaders:getHeaders
    }
})