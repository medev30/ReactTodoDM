var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

    render: function() {
        var {id, text, completed, createdAt, completedAt, onToggle} = this.props;

        var renderDate = () => {
            var message = completed ? 'Completed at: ' : 'Created at: ';
            var time = completed ? completedAt : createdAt;

            var timestamp = moment.unix(time).format('ddd, MMM D YYYY, h:mm:ss a');

            return message += timestamp;
        };

        var todoClassName = completed ? 'todo todo-completed' : 'todo';

        return (
            <div className={todoClassName} onClick={() => onToggle(id)}>
                <div>
                    <input type='checkbox' checked={completed} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className='todo__subtext'>{renderDate()}</p>
                </div>
            </div>
        );
    }

});

module.exports = Todo;
