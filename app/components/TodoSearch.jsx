var React = require('react');

var TodoSearch = React.createClass({

    render: function() {
        return (
            <div>
                <div>
                    <input type='search' placeholder='Search todos'/>
                </div>
                <div>
                    <label>
                        <input type='checkbox' /> Show completed
                    </label>

                </div>
            </div>
        );
    }

});

module.exports = TodoSearch;
