'use strict';

angular.module('wearscriptPlaygroundApp')
  .controller('GistsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.nameList = window['HACK_GISTS'] || [];

  });
