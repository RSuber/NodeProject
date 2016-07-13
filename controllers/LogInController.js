let current = angular.module('ProjectControllers')
current.controller('LogInController',['$scope','MainService','$location',function($scope,MainService,$location){
$scope.password = ""
$scope.username=""
$scope.login = function(){
MainService.getUser($scope.username)
$location.path('/signupsheet')

}

}])//end of controller
