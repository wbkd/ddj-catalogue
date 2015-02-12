var Reflux = require('reflux');
var MenuActions = require('../actions/menuActions');
var store = require('store');

var MenuStore = Reflux.createStore({

  init() {
    this.infoActive = false;
    this.favoritesListActive = false;
    this.submitAreaActive = false;
    this.faqAreaActive = false;
    this.newsletterAreaActive = false;

    this.listenTo(MenuActions.hideAllAreas, this.hideAllAreas);
    // info area
    this.listenTo(MenuActions.toggleInfo, this.toggleInfoArea);
    this.listenTo(MenuActions.hideInfo, this.hideInfoArea);

    // favorite area
    this.listenTo(MenuActions.hideFavoritesList, this.hideFavoritesList);
    this.listenTo(MenuActions.toggleFavoritesList, this.toggleFavoritesList);

    // shared favorite area
    this.listenTo(MenuActions.hideSharedList, this.hideSharedList);

    // submit area
    this.listenTo(MenuActions.toggleSubmitArea, this.toggleSubmitArea);

    // newsletter area
    this.listenTo(MenuActions.toggleNewsletterArea, this.toggleNewsletterArea);

    // faqArea
    this.listenTo(MenuActions.toggleFaqArea, this.toggleFaqArea)
  },

  toggleInfoArea() {
    this.toggleArea('infoActive');
  },

  hideInfoArea() {
    this.infoActive = false;
    store.set('ddj-infobox', 1);
    this.trigger({
      infoActive: this.infoActive
    });
  },

  toggleSubmitArea() {
    this.toggleArea('submitAreaActive');
  },

  toggleNewsletterArea() {
    this.toggleArea('newsletterAreaActive');
  },

  toggleFaqArea() {
    this.toggleArea('faqAreaActive');
  },

  toggleFavoritesList() {
    this.toggleArea('favoritesListActive');
  },

  hideFavoritesList() {
    this.favoritesListActive = false;
    this.trigger({
      favoritesListActive: this.favoritesListActive
    });
  },

  hideSharedList() {

    // TODO: don't do this!
    location.hash = '/';
    this.trigger({
      sharedFavorites: []
    });
  },

  /********************

  helper functions

  ********************/

  hideAllAreas() {
    this.setAllAreasHidden();
    this.triggerAreaToggle();
  },

  toggleArea(name) {

    //make area visible (tbd: animate scroll)
    window.scrollTo(0, 0);

    if (this[name]) {
      this.setAllAreasHidden();
    } else {
      this.setAllAreasHidden();
      this[name] = true;
    }
    this.triggerAreaToggle();
  },

  triggerAreaToggle() {
    this.trigger({
      favoritesListActive: this.favoritesListActive,
      infoActive: this.infoActive,
      submitAreaActive: this.submitAreaActive,
      newsletterAreaActive: this.newsletterAreaActive,
      faqAreaActive: this.faqAreaActive
    });
  },

  setAllAreasHidden() {
    this.infoActive = false;
    this.favoritesListActive = false;
    this.submitAreaActive = false;
    this.newsletterAreaActive = false;
    this.faqAreaActive = false;
    this.hideSharedList();
  }

});

module.exports = MenuStore;