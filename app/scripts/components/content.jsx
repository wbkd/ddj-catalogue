var React = require('react/addons');
var utils = require('../utils');

// components
var InfoArea = require('./areas/infoArea.jsx');
var PreviewList = require('./previews/previewList.jsx');
var FilterMenu = require('./filter/filterMenu.jsx');
var FavoritesArea = require('./favorites/favoritesArea.jsx');
var SubmitArea = require('./areas/submitArea.jsx');
var NewsletterArea = require('./areas/newsletterArea.jsx');
var FaqArea = require('./faqs/faqArea.jsx');
var SocialBar = require('./menu/socialBar.jsx');

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

  getInitialState() {
    return {
      // filter menu
      filterMenuActive : false,
      uiData: [],
      selectedFilters: {},
      expandedGroupIds: [],

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
      embedUrl: '',

      // newsletter area
      newsletterAreaActive : false,
      newsletterSuccess : false,
      newsletterError : '',

      // faq area
      faqAreaActive : false,
      faqData : []
  	}
  },

  componentDidMount() {
  	this.unsubscribeMenuStore = MenuStore.listen(this.onStatusChange);
    this.unsubscribeFilterStore = FilterStore.listen(this.onStatusChange);
    this.unsubscribeFavoritesStore = FavoritesStore.listen(this.onStatusChange);
    this.unsubscribeSubmitStore = SubmitStore.listen(this.onStatusChange);
    this.unsubscribeFaqStore = FaqStore.listen(this.onStatusChange);

    FavoritesActions.loadFavorites();
    FilterActions.loadFilters();

    if(!utils.isUndefined(this.props.sharedFavoriteIds)){
      var favoriteIdArray = this.props.sharedFavoriteIds.split('__');
      FavoritesActions.loadSharedFavorites(favoriteIdArray);
    }

    this.state.contentOffsetTop = document.getElementsByTagName('header')[0].clientHeight;
  },

  componentWillUnmount(){
    this.unsubscribeMenuStore();
    this.unsubscribeFilterStore();
    this.unsubscribeFavoritesStore();
    this.unsubscribeSubmitStore();
    this.unsubscribeFaqStore();
  },

  onStatusChange(state) {
    this.setState(state);
  },

  render() {
    var favoriteIds = this.state.favorites.map(el => el.id),
      isSharedFavoriteList = this.state.sharedFavorites.length > 0,
      sharedFavoriteList = isSharedFavoriteList ? <FavoritesArea isShared={ true } favorites={ this.state.sharedFavorites } isActive={ true } /> : '',
      favorites = isSharedFavoriteList ? this.state.sharedFavorites : this.state.favorites;

    return (
      <div>
        <FilterMenu { ...this.state } />
        <SocialBar/>
        <div className="content-wrapper">
          <FavoritesArea isShared={ false } favoritesUrl={ this.state.favoritesUrl } embedUrl={ this.state.embedUrl } favorites={ this.state.favorites } isActive={ this.state.favoritesListActive } />
          { sharedFavoriteList } 
          <NewsletterArea isActive={ this.state.newsletterAreaActive } isSuccess={ this.state.newsletterSuccess } errorMessage={ this.state.newsletterError } />    
          <SubmitArea isActive={ this.state.submitAreaActive } isSuccess={ this.state.submitAreaSuccess } errorMessage={ this.state.submitAreaError } />
          <InfoArea isActive={ this.state.infoActive } />
          <FaqArea isActive={ this.state.faqAreaActive } faqData={ this.state.faqData }/>

          <PreviewList showOverlay={ false } favoriteIds={ favoriteIds } />
  		</div>
      </div>
    );
  }
});

module.exports = Content;