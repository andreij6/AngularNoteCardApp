'use strict';

App.controller('StudyCtrl', function ($scope, IRepo, $routeParams) {
    $scope.stack = $routeParams.subject;
});