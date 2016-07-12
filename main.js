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
