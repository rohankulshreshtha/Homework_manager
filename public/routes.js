
 var mainApp = angular.module("mainApp", ['ngRoute']);

 mainApp.config(['$routeProvider',
 function($routeProvider) {
 $routeProvider.
when('/intro', {
 templateUrl: 'intro',
 controller: 'introController'
 }).
 when('/about', {
 templateUrl: 'about',
 }).
when('/tech', {
 templateUrl: 'tech',
 }).
 when('/viewphw', {
 templateUrl: 'viewphw',
 controller: 'viewphwController'
 }).
when('/searchphw', {
 templateUrl: 'searchphw',
 controller: 'searchController'
 }).
 when('/viewdhw', {
 templateUrl: 'viewdhw',
 controller: 'viewdhwController'
 }).
 when('/form', {
 templateUrl: 'form',
 controller: 'formController'
 }).
 otherwise({
 redirectTo: '/intro'
 });
 }]);

