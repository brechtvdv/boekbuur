'use strict';

/**
 * @ngdoc function
 * @name boekbuurApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the boekbuurApp
 */
angular.module('boekbuurApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
