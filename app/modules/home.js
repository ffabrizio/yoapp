define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var _ = require("underscore");
  var $ = require("jquery");
  var Backbone = require("backbone");
  var template = require("text!templates/home.html");

  module.exports = Backbone.View.extend({
    initialize: function(){
      this.model = {
        pageTitle: "Hallo hallo!..",
        copyrightMessage: "Fabs " + new Date().getFullYear()
      };
      this.render();
    },
    render: function(content){
      this.$el.html(_.template(template, this.model));
    }
  });
});