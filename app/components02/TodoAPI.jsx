
module.exports = {
    getTodos: function() {
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
    }
};
