var App = App || {};

(function() {
    'use strict';

    var About = React.createClass({
        render: function() {
            return (
                <div>
                    <h1>About</h1>
                    <ul>
                        <li>Github</li>
                        <li>Facabook</li>
                        <li>Twitter</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
            );
        }
    });

    App.About = About;
})();
