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

    var prev = false;
    var next = false;
    var prev_isbn = false;
    var next_isbn = false;

    var setDataPrev = function(data) {
      if (data.aquabrowser.meta.count == "1") {
        prev = data;
        console.log(prev);
      }
      else {
        prev_isbn--;
        var request = {
          isbn : prev_isbn,
          callback : setDataPrev
        }
        DataSource.get(request);
      }
    }

    var setDataNext = function(data) {
      if (data.aquabrowser.meta.count == "1") {
        next = data;
        console.log(next);
      }
      else {
        next_isbn++;
        var request = {
          isbn : next_isbn,
          callback : setDataNext
        }
        DataSource.get(request);
      }
    }

    $scope.zoek = function () {
      // prev = false;
      // next = false;
      // prev_isbn = $scope.isbnWaarde - 1;
      // next_isbn = 1 + parseInt($scope.isbnWaarde);

      // var array = ['a', 'b'];

      // while(array.indexOf(prev_isbn) = -1) {
      //   prev_isbn--;
      // }

      // var request = {
      //   isbn : prev_isbn,
      //   callback : setDataPrev
      // }
      // DataSource.get(request);

      // var request = {
      //   isbn : next_isbn,
      //   callback : setDataNext
      // }
      // DataSource.get(request);



    };
});
