'use strict';

App.controller('HomeCtrl', function ($scope, IRepo) {
    $scope.stacks = IRepo.stacks;
});