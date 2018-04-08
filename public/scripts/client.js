const loginApp = angular.module("loginApp", []);

loginApp.controller("LoginController", ['$scope', '$http', function($scope, $http){

    console.log('Hit LoginController');

    $scope.hello = "Hello World!";

    // $http.get('https://8cnrx3wjee.execute-api.us-east-2.amazonaws.com/test')
    //     .then(function(res){
    //         console.log(res.data);
    //         $scope.hello = res.data;
    //     });
}]);