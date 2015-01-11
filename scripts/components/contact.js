var App = App || {};

(function() {
    'use strict';

    var Contact = React.createClass({
        render: function() {
            return (
                <div>
                    <h1>Contact</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Type your name&nbsp;
                            <input name="name" ref="name" />
                        </label>
                        <button type="submit">send</button>
                    </form>
                </div>
            );
        },

        handleSubmit: function(e) {
            e.preventDefault();
            var name = this.refs.name.getDOMNode();

            if (!name.value) {
                return;
            }
            console.log('your name is', name.value)
            name.value = '';
        }
    });

    App.Contact = Contact;
})();
