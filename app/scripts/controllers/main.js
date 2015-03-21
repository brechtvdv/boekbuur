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
    
   $scope.zoek = function() {
      var request = { isbn : "bla", 
      callback : setData }

      DataSource.get(request);
   };
});