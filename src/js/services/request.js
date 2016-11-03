angular.module('spielApp').service('FormRequest', function($http) {
  function getForm() {
    return $http({
      method: 'GET',
      url: ''
    }).then(function(response) {
      console.log(repsonse);
    });
  }

  return {
    get:
  };

});
