angular.module('', ['ui.router', 'LocalStorageModule'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
