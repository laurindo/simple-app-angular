(function() {
  "use strict";

  const module = angular.module("myApp.button");
  const ButtonDirective = function() {
    return {
      restrict: "E",
      templateUrl: "components/button/button.html",
      scope: {},
      link: function($scope, $elem, $attrs) {
        console.log($scope);
        console.log($elem);
      }
    };
  };

  module.directive("myButton", ButtonDirective);
})();
