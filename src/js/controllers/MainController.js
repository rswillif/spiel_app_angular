var app = angular.module('spielapp')
app.controller('MainController', function($scope, $sce) {

    $scope.badInput = false;
  	$scope.isActive = false;

    $scope.activeForm = function(info) {
      $scope.isActive = !$scope.isActive;
      $scope.badInput = true;
    };

    $scope.doBlur = function(){
      document.getElementsByClassName('gameForm').attr('placeholder') == this.val();
    };



    $scope.numString = "Pizza was invented by a  7 chef. To make a pizza, you need to take a lump of 1 , and make a thin, round 3 1 . Then you cover it with 3 sauce, 3 cheese, and fresh chopped 4 . Next you have to bake it in a very hot 1 . When it is done, 2 it into 3 slices.";

    $scope.body = null;
    $scope.completedSpiel = null;


    $scope.textarea={
  field1:''
}

$scope.libMaker= function() {

    this.splitUp = $scope.numString.split(" ");
     for (var i = 0; i < this.splitUp.length; i++) {
       switch(this.splitUp[i]) {
         case "1":
         this.splitUp[i] = "<input type='text' class='gameForm' placeholder='NOUN'  required >";
         break;
         case "2":
         this.splitUp[i] = "<input type='text' class='gameForm' placeholder='VERB' required>";
         break;
         case "3":
         this.splitUp[i] = "<input type='text' class='gameForm' placeholder='ADJECTIVE' required>";
         break;
         case "4":
         this.splitUp[i] = "<input type='text' class='gameForm'  placeholder='PLURAL NOUN'>";
         break;
         case "5":
         this.splitUp[i] = "<input type='text' class='gameForm' placeholder='ANIMAL'>";
         break;
         case "6":
         this.splitUp[i] = "<input type='text' class='gameForm'  placeholder='PLURAL ANIMAL'>";
         break;
         case "7":
         this.splitUp[i] = "<input type='text' class='gameForm' placeholder='NATIONALITY'>";
         break;

       }
     }
      $scope.body = this.splitUp.join(' ');
   }

        $scope.getHtml = function(html){
        return $sce.trustAsHtml(html);
      };


  });


//   app.filter('html', function($sce) {
//     return function(val) {
//         return $sce.trustAsHtml(val);
//     };
// });

//
//  var string= "Waiter Thank you for dining at 1  . 1 grille. Tonights specials are To start we have 2. jam with toasted 4 stuff things people's 2. dlaf ofe, dfof 7.";
//


// $scope.when(spielForm.get()).then(function(response) {
//       spielForm.formString = response.data;
//     });
