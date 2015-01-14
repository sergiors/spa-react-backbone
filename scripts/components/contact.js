var App = App || {};

(function() {
    'use strict';

    var Contact = React.createClass({
        getInitialState: function() {
            return {
                name: null
            };
        },
        
        handleSubmit: function(e) {
            e.preventDefault();
            var name = this.refs.name.getDOMNode();

            if (!name.value) {
                return;
            }
            
            this.setState({name: name.value});
            
            name.value = '';
        },
        
        renderName: function() {
            if (!this.state.name) return;
            
            return 'Your name is ' + this.state.name;
        },
        
        render: function() {
            var yourName = this.renderName();
        
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
                    {yourName}
                </div>
            );
        }
    });

    App.Contact = Contact;
})();
