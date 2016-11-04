
SpielApp.controller('MainController', function(spielForm, $scope) {
  var self = this;
  formString = {};

  $scope.when(spielForm.get()).then(function(response) {
        $scope.formString = response.data;
      });


function libMaker(string) {
    var split = string.split(" ");

     for (var i = 0; i < split.length; i++) {
       switch(split[i]) {
         case "1":
         split[i] = "<input type='text' class='form noun' placeholder='noun required >";
         break;
         case "2":
         split[i] = "<input type='text' class='form verb' placeholder='verb' required>";
         break;
         case "3":
         split[i] = "<input type='text' class='form adjective' placeholder='adjective' required>";
         break;
         case "4":
         split[i] = "<input type='text' class='form pluralnoun' placeholder='plural noun'>";
         break;
         case "5":
         split[i] = "<input type='text' class='form animal' placeholder='animal'>";
         break;
         case "6":
         split[i] = "<input type='text' class='form pluralanimal' placeholder='plural animal'>";
         break;
         case "7":
         split[i] = "<input type='text' class='form nationality' placeholder='nationality'>";
         break;

       }
     }
     console.log(split.join(' '));
   }



 var string= "Waiter Thank you for dining at 1  . 1 grille. Tonights specials are To start we have 2. jam with toasted 4 stuff things people's 2. dlaf ofe, dfof 7.";





  }]);
