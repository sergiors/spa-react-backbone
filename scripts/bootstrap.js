var App = App || {};

(function() {
    'use strict';

    var Index = App.Index;

    var Bootstrap = React.createClass({
        getInitialState: function() {
            return {
                current: Index
            }
        },

        componentWillMount: function() {
            Backbone.Events.on('change:component', function(component) {
                this.setState({current: component});
            }.bind(this));
        },

        render: function() {
            return React.createElement(this.state.current, null);
        }
    });

    var mount = document.getElementById('bootstrap');
    
    new App.Router(function() {
        React.render(<Bootstrap />, mount);
        Backbone.history.start();
    });
})();
