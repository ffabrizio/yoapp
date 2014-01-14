define(function(require, exports, module) {
  'use strict';

  var _ = require('underscore');
  var $ = require('jquery');
  var Backbone = require('backbone');
  var template = require('text!templates/home.html');
  
  var data = {
    viewModel : {
      pageTitle: 'Hallo hallo!..',
      copyrightMessage: 'Fabs ' + new Date().getFullYear()
    }
  };
  

  module.exports = Backbone.View.extend({
    initialize: function(){
      this.render();
    },
    render: function(){
      var markup = _.template(template, data.viewModel);
      this.$el.html(markup);
    }
  });
});