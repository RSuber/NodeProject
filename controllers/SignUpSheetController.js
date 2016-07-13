let current = angular.module('ProjectControllers')
  current.controller('SignUpSheetController',['$scope','MainService','$location',function($scope,MainService,$location){
    $scope.pickles = MainService.getEvents()
    $scope.name = MainService.getName()
    console.log(MainService.getName())
    $scope.mustard = function(){
      //  MainService.submitEvents($scope.eventz,$scope.info,$scope.date)
       $location.path('/volunteers')
     }
  }])
