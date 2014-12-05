var React = require('react');
var utils = require('../utils');

// components
var InfoArea = require('./areas/infoArea.jsx');
var PreviewList = require('./previews/previewList.jsx');
var FilterMenu = require('./filter/filterMenu.jsx');
var FavoritesArea = require('./favorites/favoritesArea.jsx');
var SubmitArea = require('./areas/submitArea.jsx');
var NewsletterArea = require('./areas/newsletterArea.jsx');
var FaqArea = require('./faqs/faqArea.jsx');

// stores
var MenuStore = require('../stores/menuStore.js');
var FilterStore = require('../stores/filterStore.js');
var FavoritesStore = require('../stores/favoritesStore.js');
var SubmitStore = require('../stores/submitStore.js');
var FaqStore = require('../stores/faqStore.js');

// actions
var FavoritesActions = require('../actions/favoritesActions.js');
var FilterActions = require('../actions/filterActions.js');

// third party
var store = require('store');

var Content = React.createClass({

  getInitialState: function() {
    return {
      // filter menu
      filterMenuActive : false,
      uiData: [],
      selectedFilters: {},

      // submit area
      infoActive: store.enabled ? typeof store.get('ddj-infobox') === 'undefined' : false,
      submitAreaActive : false,
      submitAreaError : '',
      submitAreaSuccess : false,

      // favs
      favorites : [],
      favoritesUrl : '',
      favoritesListActive : false,
      sharedFavorites : [],

      // newsletter area
      newsletterAreaActive : false,
      newsletterSuccess : false,
      newsletterError : '',

      // faq area
      faqAreaActive : false,
      faqData : []
  	}
  },

  componentDidMount: function() {
  	this.unsubscribeMenuStore = MenuStore.listen(this.onStatusChange);
    this.unsubscribeFilterStore = FilterStore.listen(this.onStatusChange);
    this.unsubscribeMFavoritesStore = FavoritesStore.listen(this.onStatusChange);
    this.unsubscribeSubmitStore = SubmitStore.listen(this.onStatusChange);
    this.unsubscribeFaqStore = FaqStore.listen(this.onStatusChange);

    FavoritesActions.loadFavorites();
    FilterActions.loadFilters();

    if(!utils.isUndefined(this.props.sharedFavoriteIds)){
      var favoriteIdArray = this.props.sharedFavoriteIds.split('-');
      FavoritesActions.loadSharedFavorites(favoriteIdArray);
    }

    this.state.contentOffsetTop = document.getElementsByTagName('header')[0].clientHeight;
  },

  componentWillUnmount: function(){
    this.unsubscribeMenuStore();
    this.unsubscribeFilterStore();
    this.unsubscribeMFavoritesStore();
    this.unsubscribeSubmitStore();
    this.unsubscribeFaqStore();
  },

  onStatusChange: function(state){
    this.setState(state);
  },

  render: function() {
    var favoriteIds = this.state.favorites.map(function(el){
      return el.id;
    }),
    isSharedFavoriteList = this.state.sharedFavorites.length > 0,
    sharedFavoriteList = isSharedFavoriteList ? <FavoritesArea isShared={true} favorites={this.state.sharedFavorites} isActive={true} /> : '',
    favorites = isSharedFavoriteList ? this.state.sharedFavorites : this.state.favorites

    return (
      <div>
        <FilterMenu offsetTop={this.state.contentOffsetTop} filterMenuActive={this.state.filterMenuActive} selectedFilters={this.state.selectedFilters} uiData={this.state.uiData} />
        <div className="content-wrapper">
  			  <FavoritesArea isShared={false} favoritesUrl={this.state.favoritesUrl} favorites={this.state.favorites} isActive={this.state.favoritesListActive} />
          {sharedFavoriteList} 
          <NewsletterArea isActive={this.state.newsletterAreaActive} isSuccess={this.state.newsletterSuccess} errorMessage={this.state.newsletterError} />    
          <SubmitArea isActive={this.state.submitAreaActive} isSuccess={this.state.submitAreaSuccess} errorMessage={this.state.submitAreaError} />
          <InfoArea isActive={this.state.infoActive} />
          <FaqArea isActive={this.state.faqAreaActive} faqData={this.state.faqData}/>

          <PreviewList showOverlay={this.state.filterMenuActive} favoriteIds={favoriteIds} />
  		  </div>
      </div>
    	);
  	}
});

module.exports = Content;

