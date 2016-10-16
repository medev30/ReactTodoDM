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
            <div className='container__header'>
                <div>
                    <input type='search' placeholder='Search Todos' ref='search' onChange={this.onChange}/>
                </div>
                <div>
                    <label>
                        <input type='checkbox' ref='showAll' onChange={this.onChange}/> Show All
                    </label>
                </div>
            </div>
        );
    }

});

module.exports = TodoSearch;
