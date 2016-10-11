// Dima 3

var React = require('react');
var uuid = require('node-uuid');

var TodoAPI = require('TodoAPI');
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');

var Main = React.createClass({
    getInitialState: function() {
        return {
            searchText: '',
            todos: TodoAPI.getTodos()
        };
    },

    onSearch: function(searchText, showAll) {
        this.setState({
            showAll: showAll,
            searchText: searchText.toLowerCase()
        });
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
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    },

    filterTodos: function() {
        var {searchText, showAll, todos} = this.state;

        var filteredTodos = todos;

        // filter by showAll
        filteredTodos = filteredTodos.filter(todo => {
            return !todo.completed || showAll;
        });

        // filter by searchText
        filteredTodos = filteredTodos.filter(todo => {
            var todoText = todo.text.toLowerCase();
            return todoText.indexOf(searchText) > -1;
            // return searchText.length === 0 || todoText.indexOf(searchText) > -1;
        });

        return filteredTodos;
    },

    render: function() {
        // var {searchText, todos} = this.state;

        var filteredTodos = this.filterTodos();
        return (
            <div>
                <h3>Todo DM3 </h3>
                <TodoSearch onSearch={this.onSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.onToggle}/>
                <TodoAdd onTodoAdd={this.onTodoAdd}/>

            </div>
        );
    }

});

module.exports = Main;
