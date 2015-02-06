var React = require('react');
var Select = require('react-select');

var Filter = require('./filter.jsx');

var FilterActions = require('../../actions/filterActions.js');

var cx = React.addons.classSet;

var FilterGroup = React.createClass({
  toggleExpand() {
    FilterActions.toggleExpand(this.props.data.name);
  },

  render() {
    var data = this.props.data,
      filters = data.filters.map((filter,i) => <Filter key={ filter + i + Math.random() } text={ filter } category={ data.dbId } checked={ this.props.selected === filter }/>),
      classes = cx({
        'expanded': this.props.isExpanded,
        'filter-group': true
      });

    return (
      <div className={ classes }>
        <div onClick={ this.toggleExpand } className="filter-header">
          { data.name }<i className="arrow_carrot-down"></i>
        </div>
        <div className="filter-content">
          <ul className="tag-list">
            {filters}
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = FilterGroup;