"use strict";

describe("myApp.home module", function() {
  beforeEach(module("myApp.home"));

  describe("home controller", function() {
    it(
      "should be defined the ctrl HomeCtrl",
      inject(function($controller) {
        //spec body
        var HomeCtrl = $controller("HomeCtrl");
        expect(HomeCtrl).toBeDefined();
      })
    );
  });
});
