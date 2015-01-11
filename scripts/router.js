var App = App || {};

(function() {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'about': 'about',
            'contact': 'contact'
        },

        initialize: function(callback) { // keep an eye on callback
            callback();
        },

        index: function() {
            Backbone.Events.trigger('change:component', App.Index);
        },

        about: function() {
            Backbone.Events.trigger('change:component', App.About);
        },

        contact: function() {
            Backbone.Events.trigger('change:component', App.Contact);
        }
    });

    App.Router = Router;
})();
