var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({

    render: function() {
        var {todos} = this.props;

        console.log(todos);
        console.log(...todos);

        var displayTodos = todos.map( (todo, index) => {
            return <Todo key={index} {...todo}/>;
        });

        return (
            <div>
                {displayTodos}
            </div>
        );
    }
});

module.exports = TodoList;
