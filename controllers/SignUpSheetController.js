let current = angular.module('ProjectControllers')
  current.controller('SignUpSheetController',['$scope','MainService',function($scope,MainService){
    $scope.pickles = MainService.getEvents()

  }])
