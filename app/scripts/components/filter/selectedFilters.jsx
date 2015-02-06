var React = require('react');
var Filter = require('./filter.jsx');

var SelectedFilters = React.createClass({
	
  getFilters() {
    var filters = [];

    for(var key in this.props.filters) {
      if (this.props.filters.hasOwnProperty(key)) {
        filters.push({
          category: key,
          text: this.props.filters[key],
          checked: true
        });
      }
    }
    
    return filters.map( (filter, i) => (<Filter key={ filter + i } { ...filter } />) );
  },

  render() {
    return (
      <ul className="selected-filters">
        { this.getFilters() }
      </ul>
    );
  }
});

module.exports = SelectedFilters;