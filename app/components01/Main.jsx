var React = require('react');
var uuid = require('node-uuid');

var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoAPI = require('TodoAPI');

var Main = React.createClass({
    getInitialState: function() {
        return {
            searchText: '',
            showAll: true,
            todos: TodoAPI.getTodos()
        };
    },

    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos);
    },

    onSearch: function (searchText, showAll) {
        this.setState({
            showAll,
            searchText: searchText.toLowerCase()
        });
    },

    onToggle: function(id) {
        // toggle completed status of Todos
        var updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({todos: updatedTodos });
    },

    onTodoAdd: function(newTodo) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: newTodo,
                    completed: false
                }
            ]
        });
    },

    render: function() {
        var {todos, showAll, searchText } = this.state;

        var filteredTodos = TodoAPI.filterTodos(todos, showAll, searchText)

        // filteredTodos= todos;
        return (
            <div>
                <h1 className='page-title'>Todo DM</h1>
                <div className='row'>
                    <div className='column small-centered small-11 medium-6 large-5'>
                        <div className='container'>
                            <TodoSearch onSearch={this.onSearch}/>
                            <TodoList todos={filteredTodos} onToggle={this.onToggle}/>
                            <TodoAdd onTodoAdd={this.onTodoAdd}/>
                        </div>
                    </div>
                </div>
            </div>


        );
    }

});

module.exports = Main;
