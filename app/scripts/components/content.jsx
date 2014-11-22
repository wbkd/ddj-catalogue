var React = require('react');

// components
var InfoBox = require('./infobox.jsx');
var PreviewList = require('./previewList.jsx');
var FilterMenu = require('./filterMenu.jsx');
var FavoritesList = require('./favoritesList.jsx');

// stores
var MenuStore = require('../stores/menuStore.js');
var FilterStore = require('../stores/filterStore.js');
var FavoritesStore = require('../stores/favoritesStore.js');

// actions
var FavoritesActions = require('../actions/favoritesActions.js');

// third party
var Cookies = require('../../bower_components/cookies-js/dist/cookies.min');

var Content = React.createClass({

  getInitialState: function() {
  	return {
  		shiftPx: 0,
      filterMenuActive : false,
      infoActive: typeof Cookies.get('ddj-infobox') === 'undefined',
      favorites : [],
      favoritesUrl : '',
      favoritesListActive : false
  	}
  },

  componentDidMount: function() {
  	MenuStore.listen(this.onStatusChange);
    FilterStore.listen(this.onStatusChange);
    FavoritesStore.listen(this.onStatusChange);

    FavoritesActions.loadFavorites();
  },

  onStatusChange: function(state){
    this.setState(state);
    this.shiftContent();
  },

  getMenuOffset: function() {
    // TODO: dont use hardcoded value here
    var menu = 295,
        container = 1280,
        win = window.innerWidth,
        result = 0;

    if(win <= container) {
      result = menu;
    }
    else {
      var offset = (win - container) / 2;
      result = offset > menu ? 0 : menu - offset;
    }
    return result;
  },

  shiftContent: function() {

    var menuOpen = this.state.filterMenuActive;

    if(!menuOpen) {
      this.setState({shiftPx: 0});
    }
    else {
      var menuOffset = this.getMenuOffset();
      this.setState({shiftPx: menuOffset});
    }
  },

  render: function() {
  	var divStyle = {
      transform: 'translateX(' + this.state.shiftPx + 'px)'
    },favoriteIds = this.state.favorites.map(function(el){
      return el.id;
    });

    return (
      <div>
        <FilterMenu filterMenuActive={this.state.filterMenuActive}/>
        <div style={divStyle} className="content-wrapper">
  			   <InfoBox infoActive={this.state.infoActive} />
           <FavoritesList favoritesUrl={this.state.favoritesUrl} favorites={this.state.favorites} favoritesListActive={this.state.favoritesListActive} />
  			   <PreviewList favoriteIds={favoriteIds}/>
  		  </div>
      </div>
    	);
  	}
});

module.exports = Content;

