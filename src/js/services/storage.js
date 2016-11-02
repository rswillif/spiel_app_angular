angular.module('').service('StorageService', function(localStorageService) {
  function setRecords(prop, val) {
    localStorageService.set(prop, val);
  }

  function getRecords(prop) {
    return localStorageService.get(prop) || [];
  }

  return {
    set: setRecords,
    get: getRecords
  };

});
