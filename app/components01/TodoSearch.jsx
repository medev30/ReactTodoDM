var React = require('react');

var TodoSearch = React.createClass({

    onChange: function() {
        var searchText = this.refs.searchText.value;
        var showAll = this.refs.showAll.checked;

        this.props.onSearch(searchText, showAll);
    },

    render: function() {
        return (
            <div className='container__header'>
                <div>
                    <input type='search' ref='searchText' onChange={this.onChange} placeholder='Search todos'/>
                </div>
                <div>
                    <label>
                        <input type='checkbox' ref='showAll' onChange={this.onChange}/>
                        Show All
                    </label>

                </div>
            </div>
        );
    }

});

module.exports = TodoSearch;


{/*<div className='container__header'>
    <div>
        <input type='search' ref='searchText' placeholder='Search todos' onChange={this.handleSearch}/>
    </div>
    <div>
        <label>
            <input type='checkbox' ref='showCompleted' onChange={this.handleSearch}/>
            Show completed todos
        </label>
    </div>
</div>*/}
