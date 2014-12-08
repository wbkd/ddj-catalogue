var React = require('react');
var Select = require('react-select');
var utils = require('../../utils');

var FilterActions = require('../../actions/filterActions.js');

var cx = React.addons.classSet;

var FilterSelect = React.createClass({

  handleChange: function(selectedValue,selectedObject) {
    if(selectedValue.length === 0) {
      return FilterActions.filterUnselect({ category : this.props.category });
    }
    FilterActions.filterSelect({ category: this.props.category, text : selectedObject[0].label });
  },

  toggleExpand: function() {
    FilterActions.toggleExpand(this.props.data.name);
  },

  render: function() {
    var data = this.props.data;

    var filters = data.filters.map(function(filter,i) {
      return { value: filter, label: filter };
    }.bind(this));

    var classes = cx({
      'expanded': this.props.isExpanded,
      'filter-group': true
    });

    var SelectElement = utils.isUndefined(this.props.selected) ? 
      <Select placeholder={this.props.placeholder} options={filters} onChange={this.handleChange}/> : 
      <Select value={this.props.selected} placeholder={this.props.placeholder} options={filters} onChange={this.handleChange}/>;

    return (
      <div className={classes}>
        <div onClick={this.toggleExpand} className="filter-header">{data.name}<i className="arrow_carrot-down"></i></div>
        <div className="filter-content select">
        { SelectElement }
        </div>
      </div>
    );
  }
});

module.exports = FilterSelect;