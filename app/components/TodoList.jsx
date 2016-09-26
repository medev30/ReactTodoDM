var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({

    render: function() {
        var {todos} = this.props;


        var renderTodos = () => {
            if (todos.length === 0) {
                return <p>Nothing to do</p>;
            }

            return todos.map((todo, index) => {
                return (
                    <Todo key={index} {...todo} />
                );
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
});

module.exports = TodoList;

//
// var renderTodos = () => {
//     if (todos.length === 0) {
//         return (
//             <p className='container__message'>Nothing To Do</p>
//         );
//     }
//     return todos.map( (todo, index) => {
//         return <Todo key={index} {...todo} onToggle={this.props.onToggle}/>
//     });
// };

// Alternative
// var renderTodos = todos.map( (todo, index) => {
//     return <Todo key={index} index={index} {...todo} onToggle={this.props.onToggle}/>
// });
