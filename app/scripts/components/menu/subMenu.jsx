var React = require('react');
var FilterActions = require('../../actions/filterActions');
var MenuActions = require('../../actions/menuActions');

var SelectedFilters = require('../filter/selectedFilters.jsx');
var Sorter = require('../sorter/sorter.jsx');

var SubMenu = React.createClass({

  toggleList: function(){
    MenuActions.toggleFavoritesList();
  },

  render: function() {

    var favoritesCounter = this.props.favoritesCount > 0 ? <span className="favorites-count">{this.props.favoritesCount}</span> : '';

    return (
    	<div className="sub-menu">
        <div className="header-content centered clearfix">
          <div onClick={FilterActions.toggleFilterMenu} className="btn btn-filter btn"><i className="icon_menu"></i> <div className="description">Filter</div></div>
          <SelectedFilters filters={this.props.filters} />

          <Sorter isSortOrderDesc={this.props.isSortOrderDesc} sortType={this.props.sortType} />

          <div className="favorites-nav-item" onClick={this.toggleList}>
            <span className="nav-item">
              <i className="icon_star_alt" id="favorites-star"></i>Favoriten</span>
            {favoritesCounter}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SubMenu;