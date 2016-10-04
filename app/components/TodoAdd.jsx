var React = require('react');

var TodoAdd = React.createClass({

    onSubmit: function (e) {
        e.preventDefault();

        var newTodo = this.refs.newTodo.value;

        if (newTodo.length > 0) {
            this.refs.newTodo.value = '';
            this.props.onTodoAdd(newTodo);
        } else {
            this.refs.newTodo.focus();
        }
    },

    render: function() {
        return (
            <div className='container__footer'>
                <form onSubmit={this.onSubmit}>
                    <input type='text' ref='newTodo' placeholder='Enter new todo item'/>
                    <button className='button expanded'> Add Todo </button>
                </form>

            </div>
        );
    }

});

module.exports = TodoAdd;

// 
// onSubmit: function (e) {
//     e.preventDefault();
//
//     var todoText = this.refs.todoText.value;
//
//     if (todoText.length > 0) {
//         this.refs.todoText.value = '';
//         this.props.onAddTodo(todoText);
//     } else {
//         // put focus back to input field
//         this.refs.todoText.focus();
//     }
// },
//
// return (
//     <div className='container__footer'>
//         <form onSubmit={this.onSubmit}>
//             <input type='text' ref='todoText' placeholder='What do you need to do?'/>
//             <button className='button expanded'>Add Todo</button>
//         </form>
//
//     </div>
// );
