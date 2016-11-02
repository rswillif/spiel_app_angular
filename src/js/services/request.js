angular.module('').service('PersonRequest', function($http) {
  function getSomething() {
    return $http({
      method: 'GET',
      url: ''
    }).then(function(response) {
      return
    });
  }

  return {
    get:
  };

});
