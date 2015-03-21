'use strict';

/**
 * @ngdoc overview
 * @name boekbuurApp
 * @description
 * # boekbuurApp
 *
 * Main module of the application.
 */
angular
  .module('boekbuurApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/resultaat', {
        templateUrl: 'views/resultaat.html',
        controller: 'ResultaatCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
