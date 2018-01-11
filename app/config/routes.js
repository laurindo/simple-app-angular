(function() {
  "use strict";

  angular.module("myApp.routes", ["ngRoute"]).config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider.when("/home", {
        templateUrl: "screens/home/home.html",
        controller: "HomeCtrl"
      });
    }
  ]);
})();
