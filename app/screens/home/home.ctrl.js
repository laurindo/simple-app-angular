(function() {
  "use strict";

  const module = angular.module("myApp.home");

  const HomeCtrl = function($scope, APIFactory, MountDataFactory) {
    getVehicles();

    $scope.onSearch = function() {
      console.log("test search");
    };

    function getVehicles() {
      const successCB = function(response) {
        $scope.vehicles = response.data;
        let positionItemsHeaderTable = [
          "placa",
          "modelo",
          "marca",
          "foto",
          "combustivel",
          "valor"
        ];
        $scope.dataToRenderTable = MountDataFactory.mountDataToRenderTable(
          response.data,
          positionItemsHeaderTable
        );
      };
      const errorCB = function(error) {
        console.error(error);
      };
      APIFactory.getVehicles().then(successCB, errorCB);
    }
  };

  HomeCtrl.$inject = ["$scope", "APIFactory", "MountDataFactory"];
  module.controller("HomeCtrl", HomeCtrl);
})();
