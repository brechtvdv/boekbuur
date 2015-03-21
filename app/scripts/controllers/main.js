'use strict';

/**
 * @ngdoc function
 * @name boekbuurApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the boekbuurApp
 */


angular.module('boekbuurApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.naam = "brecht";

    $scope.zoek = function() {
    	$http.get("test.xml")
	    .success(function(response) {
	    	$scope.xml= response;
	    	var x2js = new X2JS();
			var json = x2js.xml_str2json( response );
			$scope.json = json;
	    });	    
    }
  });