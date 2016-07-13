  let current = angular.module('ProjectControllers')
    current.controller('VolunteerController',['$scope','MainService',function($scope,MainService){
    $scope.displayNames = MainService.viewEvents()
    $scope.JoinEvent = function(el){
    MainService.Participate(el)
    }
  }])
