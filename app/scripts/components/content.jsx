var React = require('react');
var utils = require('../utils');

// components
var InfoArea = require('./areas/infoArea.jsx');
var PreviewList = require('./previews/previewList.jsx');
var FilterMenu = require('./filter/filterMenu.jsx');
var FavoritesArea = require('./favorites/favoritesArea.jsx');
var SubmitArea = require('./areas/submitArea.jsx');
var NewsletterArea = require('./areas/newsletterArea.jsx');

// stores
var MenuStore = require('../stores/menuStore.js');
var FilterStore = require('../stores/filterStore.js');
var FavoritesStore = require('../stores/favoritesStore.js');
var SubmitStore = require('../stores/submitStore.js');

// actions
var FavoritesActions = require('../actions/favoritesActions.js');

// third party
var store = require('store');

var Content = React.createClass({

  getInitialState: function() {
  	return {
  		shiftPx: 0,
      filterMenuActive : false,
      infoActive: typeof store.get('ddj-infobox') === 'undefined',
      submitAreaActive : false,
      submitAreaError : '',
      submitAreaSuccess : false,

      favorites : [],
      favoritesUrl : '',
      favoritesListActive : false,
      sharedFavorites : [],

      newsletterAreaActive : false,
      newsletterSuccess : false,
      newsletterError : ''
  	}
  },

  componentDidMount: function() {
  	this.unsubscribeMenuStore = MenuStore.listen(this.onStatusChange);
    this.unsubscribeFilterStore = FilterStore.listen(this.onStatusChange);
    this.unsubscribeMFavoritesStore = FavoritesStore.listen(this.onStatusChange);
    this.unsubscribeSubmitStore = SubmitStore.listen(this.onStatusChange);

    FavoritesActions.loadFavorites();

    if(!utils.isUndefined(this.props.sharedFavoriteIds)){
      var favoriteIdArray = this.props.sharedFavoriteIds.split('-');
      FavoritesActions.loadSharedFavorites(favoriteIdArray);
    }
    
  },

  componentWillUnmount: function(){
    this.unsubscribeMenuStore();
    this.unsubscribeFilterStore();
    this.unsubscribeMFavoritesStore();
    this.unsubscribeSubmitStore();
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

    if(!this.state.filterMenuActive) {
      this.setState({shiftPx: 0});
      return false;
    }

    this.setState({shiftPx: this.getMenuOffset()});
  },

  render: function() {
  	var divStyle = {
      transform: 'translateX(' + this.state.shiftPx + 'px)'
    },favoriteIds = this.state.favorites.map(function(el){
      return el.id;
    }),
    isSharedFavoriteList = this.state.sharedFavorites.length > 0,
    sharedFavoriteList = isSharedFavoriteList ? <FavoritesArea isShared={true} favorites={this.state.sharedFavorites} isActive={true} /> : '';
    favorites = isSharedFavoriteList ? this.state.sharedFavorites : this.state.favorites

    return (
      <div>
        <FilterMenu filterMenuActive={this.state.filterMenuActive}/>
        <div style={divStyle} className="content-wrapper">
  			  <FavoritesArea isShared={false} favoritesUrl={this.state.favoritesUrl} favorites={this.state.favorites} isActive={this.state.favoritesListActive} />
          {sharedFavoriteList} 
          <NewsletterArea isActive={this.state.newsletterAreaActive} isSuccess={this.state.newsletterSuccess} errorMessage={this.state.newsletterError} />    
          <SubmitArea isActive={this.state.submitAreaActive} isSuccess={this.state.submitAreaSuccess} errorMessage={this.state.submitAreaError} />
          <InfoArea isActive={this.state.infoActive} />
          <PreviewList favoriteIds={favoriteIds} />
  		  </div>
      </div>
    	);
  	}
});

module.exports = Content;

