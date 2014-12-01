var React = require('react');
var config = require('../../config')

var FilterStore = require('../../stores/filterStore');
var PreviewStore = require('../../stores/previewStore');
var FavStore = require('../../stores/favoritesStore');

var SubMenu = require('../menu/subMenu.jsx');
var Navigation = require('../menu/navigation.jsx');

var Header = React.createClass({

  getInitialState: function(a){
    return {
      selectedFilters : this.props.activeFilters || {},
      headerSpacing: 100,
      sortType : config.sortType,
      isSortOrderDesc : config.isSortOrderDesc,
      favoritesCount: 0
    };
  },

  onStatusChange: function(newState){
    if(newState.favorites) {
      newState.favoritesCount = newState.favorites.length;
    }
    this.setState(newState);
  },

  componentDidMount: function() {
    this.unsubscribeFilterStore = FilterStore.listen(this.onStatusChange);
    this.unsubscribePreviewStore = PreviewStore.listen(this.onStatusChange);
    this.unsubscribeFavStore = FavStore.listen(this.onStatusChange);
    this.state.headerSpacing = document.getElementsByTagName('header')[0].clientHeight;
  },

  componentWillUnmount: function(){
    this.unsubscribeFilterStore();
    this.unsubscribePreviewStore();
    this.unsubscribeFavStore();
  },

  render: function() {

    var headerSpacing = {
      height: this.state.headerSpacing
    }

    return (
    	<div>
      <header>
        <div className="clearfix header-content centered">
          <img className="header-logo" src="images/datenkatalog-logo.png"/>
          <div className="header-title">
        	  <a href="/">{config.appName}</a>
          </div>
          <Navigation favoritesCount={this.state.favoritesCount} />
        </div>
        <SubMenu filters={this.state.selectedFilters} isSortOrderDesc={this.state.isSortOrderDesc} sortType={this.state.sortType} />
    	</header>
      <div id="header-spacing" className="header-spacing" style={headerSpacing}></div>
      </div>
    );
  }
});

module.exports = Header;

