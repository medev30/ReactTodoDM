var React = require('react');

var TodoSearch = React.createClass({

    onChange: function() {
        var {onSearch} = this.props;

        var searchText = this.refs.search.value;
        var showAll = this.refs.showAll.checked; // TRUE or FALSE

        onSearch(searchText, showAll);
    },

    render: function() {

        return (
            <div>
                <div>
                    <input type='search' placeholder='Search Todos' ref='search' onChange={this.onChange}/>
                </div>
                <div>
                    <input type='checkbox' ref='showAll' onChange={this.onChange}/> Show All
                </div>
            </div>
        );
    }

});

module.exports = TodoSearch;
