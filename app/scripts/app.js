'use strict';

(function($) {

  window.Item = Backbone.Model.extend({});

  window.ItemView = Backbone.View.extend({
    initialize: function() {
      this.template = _.template($('#item-template').html());
    },

    render: function() {
      var renderedContent = this.template(this.model.toJSON());
      $(this.el).html(renderedContent);
      return this;
    }
  });

})(jQuery);