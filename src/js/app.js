
 angular.module('spielapp', ['ui.router', 'LocalStorageModule'])

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/index.html');

  $stateProvider.state('main', {
    url: '/index.html',
    abstract: true,
    template: '<ui-view></ui-view>'
  }).state('main.login', {
    url: 'login',
    templateUrl: './src/templates/login.html',
    controller: 'LoginController'
  }).state('main.game', {
    url: 'game',
    templateUrl: './src/templates/game.html',
    controller: 'MainController'
  }).state('main.favs', {
    url: 'favs',
    templateUrl: './src/templates/favs.html',
    controller: 'FavController'
  });
});
