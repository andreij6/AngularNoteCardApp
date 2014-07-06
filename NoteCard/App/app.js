'use strict';

var App = angular.module('App', ['ngRoute']);

App.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl: "/Templates/Home.html",
            controller: "HomeCtrl"
        })
        .when('/Study/:subject',
        {
            templateUrl: "/Templates/study.html",
            controller: "StudyCtrl"
        }).otherwise(
            { redirectTo: '/' }
        );
});