(function() {
  "use strict";

  function HTTPService($http, APIConstant) {
    const BASE_URI = APIConstant.URI;
    const METHODS = APIConstant.METHODS;

    const basicResource = function(resource, headers) {
      if (!headers) {
        headers = {};
      }
      return {
        url: `${BASE_URI}/${resource}`,
        headers
      };
    };

    const basicParams = function(params) {
      return {
        params: typeof params !== "undefined" ? params : {}
      };
    };

    /**
     * @param { string } resource - Name of resource wished.
     * Example: "users", "vehicles"
     * @param { object } params - Object with params to execute some query in mongodb.
     */
    this.getResource = function(resource, params) {
      const composition = Object.assign(
        {
          method: METHODS.GET,
          data: {}
        },
        basicResource(resource, {}),
        basicParams(params)
      );

      return $http(composition);
    };

    /**
     * @param { string } resource - Name of resource wished.
     * Example: "users", "vehicles"
     */
    this.postResource = function(resource, params) {
      const composition = Object.assign(
        {
          method: METHODS.POST,
          data: {}
        },
        basicResource(resource, {}),
        basicParams(params)
      );

      return $http(composition);
    };
  }

  HTTPService.$inject = ["$http", "APIConstant"];

  angular.module("http.service", []).service("HTTPService", HTTPService);
})();
