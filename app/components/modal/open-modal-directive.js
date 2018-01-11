angular.module("component.modal").directive("openModal", function() {
  var openDialog = {
    link: function(scope, element, attrs) {
      function openDialog() {
        var element = angular.element("#exampleModal");
        var ctrl = element.controller();
        element.modal("show");
      }
      element.bind("click", openDialog);
    }
  };
  return openDialog;
});
