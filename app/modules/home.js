define(function(require, exports, module) {
  'use strict';

  var _ = require('underscore');
  var $ = require('jquery');
  var Backbone = require('backbone');
  var template = require('text!templates/home.html');
  var contentTemplates = {
    'Html' : require('text!templates/partial/htmlcontent.html'),
    'YouTube' : require('text!templates/partial/youtube.html'),
    'Image' : require('text!templates/partial/image.html')
  };
  
  var data = {
    getItems  : function(onsuccess){
      $.ajax({
        url: 'http://localhost:10000/en-gb/api/m3vs/feed/',
        data: 'page=0',
        contentType: false,
        processData: false,
        type: 'GET'
      }).complete(function (response) {
        var markup = "";
        for (var count in response.responseJSON.Items) {
          var item = response.responseJSON.Items[count];
          markup += _.template(contentTemplates[item.ContentType], item);
        }
        onsuccess(markup);
      });
    },
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
      var markup = _.template(template, data.viewModel),
        $markup = $(markup);
      
      data.getItems(function(d){
        $('#modules', $markup).append(d);
      });

      this.$el.html($markup);
    }
  });
});