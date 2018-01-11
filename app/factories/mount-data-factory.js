(function() {
  "use strict";

  function MountDataFactory(APIConstant, HTTPService) {
    const _mountDataToRenderTable = function(data, headerPositionItems) {
      return {
        header: headerPositionItems,
        content: data
      };
    };

    return {
      mountDataToRenderTable: _mountDataToRenderTable
    };
  }

  MountDataFactory.$inject = ["APIConstant"];

  angular
    .module("mount.data.factory", [])
    .factory("MountDataFactory", MountDataFactory);
})();
