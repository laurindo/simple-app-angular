(function() {
  "use strict";

  function APIFactory(APIConstant, HTTPService) {
    const _getVehicles = function(params) {
      //simulate path to resource, this path resource correct would can be 'api/vehicles'
      return HTTPService.getResource("screens/home/veiculos.json", params);
    };

    return {
      getVehicles: _getVehicles
    };
  }

  APIFactory.$inject = ["APIConstant", "HTTPService"];

  angular.module("api.factory", []).factory("APIFactory", APIFactory);
})();
