var React = require('react');

var TodoAdd = React.createClass({

    onSubmit: function (e){
        e.preventDefault();

        var newTodo = this.refs.newTodo.value.trim();
        if (newTodo.length > 0) {
            this.refs.newTodo.value = '';
            this.props.onTodoAdd(newTodo);
        }
            this.refs.newTodo.focus();
    },

    render: function() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' ref='newTodo' placeholder='Add new todo'/>
                    <button> Add Todo </button>
                </form>
            </div>
        );
    }

});

module.exports = TodoAdd;
