const loginApp = angular.module("loginApp", []);

loginApp.controller("LoginController", ['$scope', '$http', function($scope, $http){

    console.log('Hit LoginController');

    // $scope.hello = "Hello World!";

    $http.get('https://vt47xg89vj.execute-api.us-east-2.amazonaws.com/test/users/create')
        .then(function(res){
            console.log('inside GET request');
            console.log(res.data);
            $scope.hello = res.data;
        });
}]);