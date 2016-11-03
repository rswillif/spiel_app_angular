SpielApp.service('SpielForm', getFormService) {
  function getFormService($http) {
    function fetchForm() {
    return $http({
      method: 'GET',
      url: ''
    }).then(function(response) {
      console.log(repsonse);
    });
  };
  return {
    get: fetchForm
  };
}
