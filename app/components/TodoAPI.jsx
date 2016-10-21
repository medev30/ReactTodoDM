
module.exports = {

    setTodos: (todos) => {
        // if array is valid
        if (Array,isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos))
            return todos;
        }
        // if array is invalid - 'undefined' is returned by default
    },

    getTodos: function () {
        var todos = [];
        var strTodos = localStorage.getItem('todos');

        try {
            todos = JSON.parse(strTodos);

        } catch (e) {
            // nothing is here
        }

        return Array.isArray(todos) ? todos : [];
    },

    getTodos2: () => {
        var todos = [
            {
                id: 1,
                text: 'Todo 1',
                completed: false,
                createdAt: 1,
                completedAt: null
            },
            {
                id: 2,
                text: 'Todo 2',
                completed: false,
                createdAt: 2,
                completedAt: null
            },
            {
                id: 3,
                text: 'Todo 3',
                completed: true,
                createdAt: 3,
                completedAt: null
            }
        ];

        return todos;
    }
};
