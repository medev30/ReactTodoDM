var React = require('react');
var uuid = require('node-uuid');

var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');

var Main = React.createClass({
    getInitialState: function() {
        return {
            todos2: [],
            todos: [
                {
                    id: 1,
                    text: 'Todo 1'
                },
                {
                    id: 2,
                    text: 'Todo 2'
                },
                {
                    id: 3,
                    text: 'Todo 3'
                }
            ]
        };
    },

    onTodoAdd: function(newTodo) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    // id: uuid(),
                    text: newTodo
                }
            ]
        });
    },

    render: function() {
        return (
            <div>
                <TodoSearch />
                <TodoList todos={this.state.todos}/>
                <TodoAdd onTodoAdd={this.onTodoAdd}/>
            </div>
        );
    }

});

module.exports = Main;
