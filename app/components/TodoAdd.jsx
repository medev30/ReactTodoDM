var React = require('react');

var TodoAdd = React.createClass({

    render: function() {
        return (
            <div>
                <form>
                    <input type='text'/>
                    <button>Button</button>
                </form>

            </div>
        );
    }

});

module.exports = TodoAdd;
