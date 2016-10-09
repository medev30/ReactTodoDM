
module.exports = {

    setTodos: function (todos) {
        if ($.isArray(todos)) {
            // save our todos array in the browser storage under the name 'todos'. Array is converted to string.
            localStorage.todos = JSON.stringify(todos);
            // localStorage.setItem('todos', JSON.stringify(todos));
            return todos;   // if todos is invalid - 'undefined' is returned
        }
    },

    getTodos: function () {
        // get all items saved in the browser under the name 'todos'
        var stringTodos = localStorage.todos;
        // var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            // convert string to array. If it fails then catch will run
            todos = JSON.parse(stringTodos);
        } catch (e) {
            // runs if error -> nothing to run here
        }
        // check if array
        return $.isArray(todos) ? todos : [];
    },

    getTodos_test: function () {
        var todos = [
            {
                id: 1,
                text: 'Todo 1',
                completed: false
            },
            {
                id: 2,
                text: 'Todo 2',
                completed: false
            },
            {
                id: 3,
                text: 'Todo 3',
                completed: true
            }
        ];

        return todos;
    },

    filterTodos: function(todos, showAll, searchText) {
        var filteredTodos;

        // Fileter by showCompleted
        filteredTodos = todos.filter(todo => {
            // show: not completed OR all
            return !todo.completed || showAll;
            // return todo.completed == showCompleted;
        });

        // Filter by searchText
        filteredTodos = filteredTodos.filter(todo => {
            var text = todo.text.toLowerCase();

            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

        return filteredTodos;

    }

};
