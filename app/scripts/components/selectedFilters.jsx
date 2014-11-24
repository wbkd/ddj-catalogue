var React = require('react');
var Filter = require('./filter.jsx');

var SelectedFilters = React.createClass({
	
	getFilters: function() {
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
		
    return filters.map(function(filter, i) {
      return <Filter key={filter + i} text={filter.text} category={filter.category} checked={filter.checked}/>
    });
	},

	render: function() {

		var filters = this.getFilters();

		return (
			<ul>
        {filters}
      </ul>
		);
	}
});

module.exports = SelectedFilters;