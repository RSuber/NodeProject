(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let current = angular.module('ProjectControllers')
current.controller('LogInController',['$scope','MainService',function($scope,MainService){
$scope.username = ""
$scope.password = ""

$scope.login = function(){
console.log('balls')
}

}])//end of controller

},{}],2:[function(require,module,exports){
let current = angular.module('ProjectControllers')
  current.controller('SignUpSheetController',['$scope','MainService',function($scope,MainService){
    console.log('ballsack')
  }])

},{}],3:[function(require,module,exports){
  let current = angular.module('ProjectControllers')
    current.controller('VolunteerController',['$scope','MainService',function($scope,MainService){
    $scope.poop = `${Math.ceil(Math.random() * 10)}`
  }])

},{}],4:[function(require,module,exports){
let app = angular.module('NodeProject', ['ngRoute','ProjectControllers','ProjectServices']);

angular.module('ProjectControllers', []);
       // empty module
angular.module('ProjectServices', []);
      //empy module
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/login',
        })
        .when('/login', {
            controller: 'LogInController',
            templateUrl: 'templates/login.html',
        })
        .when('/signupsheet', {
            controller: 'SignUpSheetController',
            templateUrl:'templates/signupsheet.html',
        })
        .when('/volunteers', {
            controller: 'VolunteerController',
            templateUrl: 'templates/volunteers.html',
        })
}]);

require('./controllers/LogInController');
require('./controllers/SignUpSheetController');
require('./controllers/VolunteerController');
require('./services/MainService')

},{"./controllers/LogInController":1,"./controllers/SignUpSheetController":2,"./controllers/VolunteerController":3,"./services/MainService":5}],5:[function(require,module,exports){
let current = angular.module("ProjectServices")

current.factory('MainService',['$http',function($http){
return{
  
}

}])

},{}]},{},[4])