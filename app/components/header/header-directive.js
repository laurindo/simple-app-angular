(function() {
  "use strict";

  const module = angular.module("component.header");
  const HeaderDirective = function() {
    return {
      restrict: "E",
      templateUrl: "components/header/header.html",
      scope: {},
      link: function($scope, $elem, $attrs) {
        console.log($scope);
        console.log($elem);
      }
    };
  };

  module.directive("myHeader", HeaderDirective);
})();
