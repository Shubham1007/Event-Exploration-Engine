var app=angular.module('eCube.controllers', ['infinite-scroll']);


app.controller('tempController', function($scope,  $http, eCubeAPIservice) {
	$scope.user = {"firstName":"John", "lastName":"Doe"};
    window.localStorage['token'] = angular.toJson($scope.user);
});

app.controller('keyPhraseController', function($scope,  $http, eCubeAPIservice) {
	$scope.accessData = window.localStorage['token'];
    console.log($scope.accessData);
});