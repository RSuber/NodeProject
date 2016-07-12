let current = angular.module('ProjectControllers')
current.controller('LogInController',['$scope','MainService',function($scope,MainService){
$scope.username = ""
$scope.password = ""

$scope.login = function(){
console.log('balls')
}

}])//end of controller
