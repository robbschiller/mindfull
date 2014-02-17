'use strict';

(function($) {

  window.Item = Backbone.Model.extend({});

  window.Items = Backbone.Collection.extend({
    model: Item,
    url: '/items'
  });

  window.ItemView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list',

    initialize: function() {
      _.bindAll(this, 'render');
      this.template = _.template($('#item-template').html());
    },

    render: function() {
      var renderedContent = this.template(this.model.toJSON());
      $(this.el).html(renderedContent);
      return this;
    }
  });

})(jQuery);