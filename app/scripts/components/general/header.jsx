var React = require('react');
var config = require('../../config')
var utils = require('../../utils');

var FilterStore = require('../../stores/filterStore');
var PreviewStore = require('../../stores/previewStore');
var FavStore = require('../../stores/favoritesStore');
// var RouteParamStore = require('../../stores/routeParamStore');

var SubMenu = require('../menu/subMenu.jsx');
var Navigation = require('../menu/navigation.jsx');

var Header = React.createClass({

  getInitialState: function(a){
    //var routeParams = RouteParamStore.getRouteParams();
    return {
      selectedFilters : {},
      headerSpacing: 100,
      sortType : config.sortType,
      isSortOrderDesc : config.isSortOrderDesc,
      favoritesCount: 0,
      filterMenuActive: false
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
    };

    return (
    	<div>
        <header>
          <div className="clearfix header-content centered">
            <div className="header-title-wrapper">
              <img className="header-logo" src="images/datenkatalog-logo.png"/>
              <div className="header-title">
            	  <a href="/">{config.appName}</a>
              </div>
            </div>
            { this.props.isEmbedMode ? '' : <Navigation/> }
          </div>
          { this.props.hasSubmenu ? <SubMenu filters={this.state.selectedFilters} favoritesCount={this.state.favoritesCount} isSortOrderDesc={this.state.isSortOrderDesc} sortType={this.state.sortType} filterMenuActive={this.state.filterMenuActive}/> : '' }
      	</header>
        <div id="header-spacing" className="header-spacing" style={headerSpacing}></div>
      </div>
    );
  }
});

module.exports = Header;