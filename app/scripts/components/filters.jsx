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
    FilterActions.loadFilters();
  },

  componentWillUnmount: function() {
    this.unsubscribe();
  },

  render: function() {

    var filters = this.state.uiData.map(function(d,i) {
      var selected = this.state.selectedFilters[d.dbId];
      return <FilterGroup key={'fg_' + i} data={d} selected={selected} />
    }.bind(this));

    return (
    	<div className="filter-list">
        {filters}
      </div>
    );
  }
});

module.exports = Filters;