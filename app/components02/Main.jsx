var React = require('react');

var TodoAPI = require('TodoAPI');
var TodoList = require('TodoList');



var Main = React.createClass({


    getInitialState: function() {
        return {
            todos: TodoAPI.getTodos()
        };
    },

    render: function() {
        var {todos} = this.state;

        return (
            <div>
                <h1>Todo DM2</h1>
                <TodoList todos={todos}/>
            </div>
        );
    }

});

module.exports = Main;
