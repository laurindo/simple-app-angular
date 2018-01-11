(function() {
  "use strict";

  const module = angular.module("component.modal");
  const ModalDirective = function() {
    return {
      restrict: "E",
      templateUrl: "components/modal/modal.html",
      scope: {
        data: "="
      },
      link: function($scope, $elem, $attrs) {
        $scope.test = function() {
          $scope.onChangeSearch($scope.searchFieldValue);
        };
      }
    };
  };

  module.directive("myModal", ModalDirective);
})();
