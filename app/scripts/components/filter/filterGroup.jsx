var React = require('react');
var Select = require('react-select');

var Filter = require('./filter.jsx');

var FilterActions = require('../../actions/filterActions.js');

var cx = React.addons.classSet;

var FilterGroup = React.createClass({
  toggleExpand: function() {
    FilterActions.toggleExpand(this.props.data.name);
  },

  render: function() {
    var data = this.props.data;

    var filters = data.filters.map(function(filter,i) {
      var checked = this.props.selected === filter;
      return <Filter key={filter + i + Math.random()} text={filter} category={data.dbId} checked={checked}/>
    }.bind(this));

    var classes = cx({
      'expanded': this.props.isExpanded,
      'filter-group': true
    });

    return (
    	<div className={classes}>
        <div onClick={this.toggleExpand} className="filter-header">{data.name}<i className="arrow_carrot-down"></i></div>
        <div className="filter-content">
        <ul className="tag-list">{filters}</ul>
        </div>
      </div>
    )
  }
});

module.exports = FilterGroup;