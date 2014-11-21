var React = require('react/addons');
var Filter = require('./filter.jsx');

var FilterGroup = React.createClass({

	displayName: 'FilterGroup',

  render: function() {
    var self = this;
    var data = this.props.data;
    return (
    	<div className="filter-group">
      <div className="filter-header">{data.name}</div>
      <ul className="tag-list">
        {
          data.filters.map(function(filter) {
            var checked = self.props.selected === filter;
            return <Filter text={filter} category={data.dbId} checked={checked}/>
          })
        }
      </ul>
      </div>
    )
  }
});
module.exports = FilterGroup;