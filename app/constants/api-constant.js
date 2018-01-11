(function() {
  "use strict";

  angular.module("api.constant", []).constant("APIConstant", {
    URI: "http://localhost:8000",
    METHODS: {
      GET: "GET",
      POST: "POST",
      DELETE: "DELETE",
      PUT: "PUT"
    }
  });
})();
