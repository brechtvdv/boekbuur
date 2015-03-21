'use strict';

/**
 * @ngdoc function
 * @name boekbuurApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the boekbuurApp
 */


angular.module('boekbuurApp')
  .controller('MainCtrl', function ($scope, DataSource) {
    //This is the callback function
    var setData = function(data) {
        $scope.json = data;
    }
    var request = { isbn : "bla", 
					obj : setData }
    $scope.naam = "brecht";

   DataSource.get(request);
  });