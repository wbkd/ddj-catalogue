var React = require('react');
var FilterActions = require('../../actions/filterActions');

var SelectedFilters = require('../filter/selectedFilters.jsx');
var Sorter = require('../sorter/sorter.jsx');

var SubMenu = React.createClass({

  render: function() {
    return (
    	<div className="sub-menu">
        <div className="header-content centered clearfix">
          <div onClick={FilterActions.toggleFilterMenu} className="btn btn-filter btn"><i className="icon_menu"></i> <div className="description">Filter</div></div>
          <SelectedFilters filters={this.props.filters} />
          <Sorter isSortOrderDesc={this.props.isSortOrderDesc} sortType={this.props.sortType} />
        </div>
      </div>
    );
  }
});

module.exports = SubMenu;