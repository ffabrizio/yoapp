define(function(require, exports, module) {
  'use strict';

  // External dependencies.
  var Backbone = require('backbone');
  var Home = require('modules/home');

  // Defining the application router.
  module.exports = Backbone.Router.extend({
    routes: {
      '': 'index'
    },

    index: function() {
      console.log('Welcome to your / route.');

      var home = new Home({ el : '#main'});
    }
  });
});