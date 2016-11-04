angular.module('spielapp', [])
.directive('gameApp', function() {
  return {
    restrict: 'E',
    scope: { },
    link: function (scope, element, attrs) {
        scope.clicked = function () {
            element.siblings('.form').toggleClass('.active');
        }
    }
};
});
