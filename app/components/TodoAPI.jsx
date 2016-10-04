
module.exports = {

    setTodos: function () {

    },

    getTodos: function () {

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

            console.log(text);
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

        return filteredTodos;

    }

};
