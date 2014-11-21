var React = require('react');
var FilterGroup = require('./filterGroup.jsx');
var FilterStore = require('../stores/filterStore.js');
var FilterActions = require('../actions/filterActions.js');

var Filters = React.createClass({

	displayName: 'Filters',

  getInitialState: function() {
    return {
      selectedFilters: {},
      uiData: []
    }
  },

  onStatusChange: function(state) {
    this.setState(state);
  },

  componentDidMount: function() {
    this.unsubscribe = FilterStore.listen(this.onStatusChange);
    FilterActions.getFilters();
  },

  componentWillUnmount: function() {
    this.unsubscribe();
  },

  getFilters: function() {
    var self = this;
    return <div>
            {
              this.state.uiData.map(function(d) {
                var selected = self.state.selectedFilters[d.dbId];
                return <FilterGroup data={d} selected={selected} />
              })
            }
            </div>
  },

  render: function() {
    return (
    	<div className="filter-list">
        {this.getFilters()}
      </div>
    );
  }
});

module.exports = Filters;