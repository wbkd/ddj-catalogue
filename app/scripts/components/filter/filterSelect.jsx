var React = require('react');
var Select = require('react-select');
var utils = require('../../utils');

var FilterActions = require('../../actions/filterActions.js');

var FilterGroup = React.createClass({

  handleChange: function(selectedValue,selectedObject) {
    if(selectedValue.length === 0) {
      return FilterActions.filterUnselect({ category : this.props.category });
    }
    FilterActions.filterSelect({ category: this.props.category, text : selectedObject[0].label });
  },

  render: function() {
    var data = this.props.data;

    var filters = data.filters.map(function(filter,i) {
      return { value: filter, label: filter };
    }.bind(this));

    var SelectElement = utils.isUndefined(this.props.selected) ? 
      <Select placeholder={this.props.placeholder} options={filters} onChange={this.handleChange}/> : 
      <Select value={this.props.selected} placeholder={this.props.placeholder} options={filters} onChange={this.handleChange}/>;

    return (
      <div className="filter-group">
        <div className="filter-header">{data.name}</div>
        { SelectElement }
      </div>
    );
  }
});

module.exports = FilterGroup;