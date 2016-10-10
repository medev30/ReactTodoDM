var React = require('react');
var uuid = require('node-uuid');

var TodoAPI = require('TodoAPI');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');

var Main = React.createClass({
    getInitialState: function() {
        return {
            todos: TodoAPI.getTodos()
        };
    },

    onToggle: function (id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({todos: updatedTodos});
    },

    onTodoAdd: function(text) {
        console.log(this.state.todos);
        var updatedTodos = [
            ...this.state.todos,
            {
                id: uuid(),
                text: text,
                completed: false
            }
        ]
        this.setState({todos: updatedTodos});
    },

    render: function() {
        var {todos} = this.state;

        return (
            <div>
                <h3>Todo DM3 </h3>
                <TodoList todos={todos} onToggle={this.onToggle}/>
                <TodoAdd onTodoAdd={this.onTodoAdd}/>

            </div>
        );
    }

});

module.exports = Main;
