var React = require('react');

var Todo = React.createClass({

    render: function() {
        var {text, ind} = this.props;

        return (
            <div>
                <input type='checkbox'/> {text}
                    in = {ind}
            </div>
        );
    }

});

module.exports = Todo;
