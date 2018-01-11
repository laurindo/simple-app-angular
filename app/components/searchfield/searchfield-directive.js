(function() {
  "use strict";

  const module = angular.module("component.searchfield");
  const SearchFieldDirective = function() {
    return {
      restrict: "E",
      templateUrl: "components/searchfield/searchfield.html",
      scope: {
        onChangeSearch: "&"
      },
      link: function($scope, $elem, $attrs) {
        $scope.test = function() {
          $scope.onChangeSearch($scope.searchFieldValue);
        };
      }
    };
  };

  module.directive("mySearchfield", SearchFieldDirective);
})();
