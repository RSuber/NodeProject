(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let current = angular.module('ProjectControllers')
current.controller('LogInController',['$scope','MainService','$location',function($scope,MainService,$location){
$scope.password = ""
$scope.username=""
$scope.login = function(){
MainService.getUser($scope.username)
$location.path('/signupsheet')

}

}])//end of controller

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
  let current = angular.module('ProjectControllers')
    current.controller('VolunteerController',['$scope','MainService',function($scope,MainService){
    $scope.displayNames = MainService.viewEvents()
    $scope.JoinEvent = function(el){
    MainService.Participate(el)
    }
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
  let pusher= []
  let pushevent= []
  let eventlist = []
  let name = []
return{
  getUser: function(user){
    let guy = []
    pusher.length = 0
    $http({
      url:'/api/volunteers.json',
      method:'GET'
    }).then(function(response){
      let data = response.data
      data.forEach(function(el){
        if(user === el.host.name)
        guy.push({
          name:el.name,
          typeEvent:el.event,
          host:el.host.name,
          date:el.date,
          mainhost:el.host.name,
        })
      })
      angular.copy(guy,pusher)
    })
    return pusher
  },
getEvents: function(){
return pusher
},
getName: function(){
  pusher.forEach(function(el){
  name.push(el.mainhost)
  })
  return name
},
submitEvents: function(eventz,info,date){
  pushevent.push({
    eventz: eventz
  })
},
viewEvents: function(){
  eventlist.length = 0
  $http({
    url:'/api/volunteers.json',
    method:'GET'
  }).then(function(response){
    let data = response.data
    data.forEach(function(el){
        eventlist.push({
        name:el.name,
        typeEvent:el.event,
        host:el.host.name,
        date:el.date,
        participants:el.host.participants
      })
    })
  })
  return eventlist
},
Participate: function(item){
    pusher.push({
      host: item.host,
      name: item.name,
      typeEvent: item.typeEvent,
      date: item.date

    })
    console.log(pusher)

}
}
}])

},{}]},{},[4])