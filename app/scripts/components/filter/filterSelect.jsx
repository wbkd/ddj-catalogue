var React = require('react');
var Select = require('react-select');
var utils = require('../../utils');

var FilterActions = require('../../actions/filterActions.js');

var cx = React.addons.classSet;

var FilterSelect = React.createClass({

  handleChange(selectedValue,selectedObject) {
    if(selectedValue.length === 0) {
      return FilterActions.filterUnselect({ category : this.props.category });
    }
    FilterActions.filterSelect({ category: this.props.category, text : selectedObject[0].label });
  },

  toggleExpand() {
    FilterActions.toggleExpand(this.props.data.name);
  },

  render: function() {
    var data = this.props.data,
      filters = data.filters.map(filter => ({ value: filter, label: filter }) ),
      classes = cx({
        'expanded': this.props.isExpanded,
        'filter-group': true
      }),
      SelectElement = utils.isUndefined(this.props.selected) ? 
        <Select placeholder={ this.props.placeholder } options={ filters } onChange={ this.handleChange }/> : 
        <Select value={ this.props.selected } placeholder={ this.props.placeholder } options={ filters } onChange={ this.handleChange }/>;

    return (
      <div className={ classes }>
        <div onClick={ this.toggleExpand } className="filter-header">
          { data.name }<i className="arrow_carrot-down"></i>
        </div>
        <div className="filter-content select">
          { SelectElement }
        </div>
      </div>
    );
  }
});

module.exports = FilterSelect;