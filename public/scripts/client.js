const loginApp = angular.module("loginApp", []);

loginApp.controller("LoginController", ['$scope', function($scope){

    console.log('hello in tharr');

    $scope.hello = "Hello World!";

}]);