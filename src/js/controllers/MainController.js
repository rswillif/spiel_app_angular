
SpielApp.controller('MainController', function(spielForm, $scope) {
  var self = this;
  formString = {};

  $scope.when(spielForm.get()).then(function(response) {
        self.formString = response.data;
      });

      
  }]);
