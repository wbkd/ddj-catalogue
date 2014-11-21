var React = require('react');
var Filter = require('./filter.jsx');

var FilterGroup = React.createClass({

  render: function() {
    var data = this.props.data;

    var filters = data.filters.map(function(filter,i) {
      var checked = this.props.selected === filter;
      return <Filter key={filter + i} text={filter} category={data.dbId} checked={checked}/>
    }.bind(this));

    return (
    	<div className="filter-group">
        <div className="filter-header">{data.name}</div>
        <ul className="tag-list">
          { filters }
        </ul>
      </div>
    )
  }
});

module.exports = FilterGroup;