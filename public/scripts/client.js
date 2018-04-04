var loginApp = angular.module("LoginApp", []);

loginApp.controller("LoginController", ['$scope', function($scope){

    console.log('hello in tharr');

    $scope.hello = "Hello World!";

}]);