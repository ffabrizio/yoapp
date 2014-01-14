define(function(require, exports, module) {
  'use strict';

  // External dependencies.
  var Backbone = require('backbone');

  // Modules.
  var HomeModule = require('modules/home');

  // Defining the application router.
  module.exports = Backbone.Router.extend({
    routes: {
      '': 'index'
    },

    index: function() {
      var home = new HomeModule({ el : '#main'});

      console.log('Welcome to your / route.');
    }
  });
});