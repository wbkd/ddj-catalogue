var React = require('react');
var utils = require('../utils');

// components
var InfoBox = require('./infobox.jsx');
var PreviewList = require('./previewList.jsx');
var FilterMenu = require('./filterMenu.jsx');
var FavoritesList = require('./favoritesList.jsx');
var SubmitArea = require('./submitArea.jsx');


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
      sharedFavorites : []
  	}
  },

  componentDidMount: function() {
  	MenuStore.listen(this.onStatusChange);
    FilterStore.listen(this.onStatusChange);
    FavoritesStore.listen(this.onStatusChange);
    SubmitStore.listen(this.onStatusChange);

    FavoritesActions.loadFavorites();

    if(!utils.isUndefined(this.props.sharedFavoriteIds)){
      var favoriteIdArray = this.props.sharedFavoriteIds.split('-');
      FavoritesActions.loadSharedFavorites(favoriteIdArray);
    }
    
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
    sharedFavoriteList = isSharedFavoriteList ? <FavoritesList isShared={true} favorites={this.state.sharedFavorites} favoritesListActive={true} /> : '';
    favorites = isSharedFavoriteList ? this.state.sharedFavorites : this.state.favorites

    return (
      <div>
        <FilterMenu filterMenuActive={this.state.filterMenuActive}/>
        <div style={divStyle} className="content-wrapper">
  			  <InfoBox infoActive={this.state.infoActive} />
            
          <SubmitArea errorMessage={this.state.submitAreaError} isSuccess={this.state.submitAreaSuccess} submitAreaActive={this.state.submitAreaActive}/>

          <FavoritesList isShared={false} favoritesUrl={this.state.favoritesUrl} favorites={this.state.favorites} favoritesListActive={this.state.favoritesListActive} />
  			  {sharedFavoriteList}

          <PreviewList favoriteIds={favoriteIds}/>
  		  </div>
      </div>
    	);
  	}
});

module.exports = Content;

