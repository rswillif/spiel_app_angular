
 angular.module('spielapp', ['ui.router', 'LocalStorageModule'])

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('./src/templates/login.html');

  $stateProvider.state('main', {
    url: '/',
    abstract: true,
    template: '<ui-view></ui-view>'
  }).state('main.login', {
    url: '',
    templateUrl: './src/templates/login.html',
    controller: 'LoginController as LoginCtrl'
  }).state('main.game', {
    url: 'game',
    templateUrl: './src/templates/game.html',
    controller: 'MainController as MainCtrl'
  }).state('main.favs', {
    url: 'favs',
    templateUrl: './src/templates/favs.html',
    controller: 'FavController as FavCtrl'
  });
});
