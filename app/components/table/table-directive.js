(function() {
  "use strict";

  const module = angular.module("component.table");
  const TableDirective = function() {
    return {
      restrict: "E",
      templateUrl: "components/table/table.html",
      scope: {
        data: "="
      },
      link: function($scope, $elem, $attrs) {
        console.log($scope);
        console.log($elem);
      }
    };
  };

  module.directive("myTable", TableDirective);
})();
