var React = require('react');

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
    render: function() {
        return (
            <div>
                <TodoList todos={this.state.todos}/>
                <TodoAdd />
            </div>
        );
    }

});

module.exports = Main;
