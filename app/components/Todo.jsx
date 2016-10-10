var React = require('react');

var Todo = React.createClass({

    render: function() {
        var {id, text, completed, onToggle} = this.props;
        return (
            <div>
                <div>
                    <input type='checkbox' defaultChecked={completed} onChange={() => onToggle(id)}/>
                {text}
                </div>
            </div>
        );
    }

});

module.exports = Todo;
