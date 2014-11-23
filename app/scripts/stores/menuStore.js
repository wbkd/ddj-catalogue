var Reflux = require('reflux');
var MenuActions = require('../actions/menuActions');
var store = require('store');

var MenuStore = Reflux.createStore({

	init : function(){
		this.infoActive = false;
		this.favoritesListActive = false;
    this.submitAreaActive = false;

    // info area
		this.listenTo(MenuActions.toggleInfo, this.toggleInfo);
		this.listenTo(MenuActions.hideInfo, this.hideInfo);

    // favorite area
		this.listenTo(MenuActions.hideFavoritesList,this.hideFavoritesList);
    this.listenTo(MenuActions.toggleFavoritesList,this.toggleFavoritesList);

    // shared favorite area
    this.listenTo(MenuActions.hideSharedList,this.hideSharedList);

    // submit area
    this.listenTo(MenuActions.toggleSubmitArea, this.toggleSubmitArea);
	},

  toggleSubmitArea: function(){
    this.submitAreaActive = !this.submitAreaActive;
    this.infoActive = false;
    this.favoritesListActive = false;
    this.trigger({
      submitAreaActive: this.submitAreaActive,
      infoActive : this.favoritesListActive,
      favoritesListActive : this.favoritesListActive
    });
  },

	toggleInfo: function() {
		this.infoActive = !this.infoActive;
		this.favoritesListActive = false;
    this.submitAreaActive = false;
    this.hideSharedList();

		this.trigger({
			infoActive: this.infoActive,
			favoritesListActive : this.favoritesListActive,
      submitAreaActive : this.submitAreaActive
		});
	},

	hideInfo: function() {
		this.infoActive = false;
		store.set('ddj-infobox', 1);
		this.trigger({infoActive: false});
	},

  toggleFavoritesList: function(){
    this.favoritesListActive = !this.favoritesListActive;
    this.infoActive = false;
    this.submitAreaActive = false;
    this.hideSharedList();

    this.trigger({ 
    	favoritesListActive : this.favoritesListActive,
    	infoActive: this.infoActive,
      submitAreaActive : this.submitAreaActive
   	});
  },

  hideFavoritesList : function(){
    this.favoritesListActive = false;
    this.trigger({ favoritesListActive : this.favoritesListActive });
  },

  hideSharedList: function(){

    // TODO: don't do this!
    location.hash = '#/projekte';
    this.trigger({ 
     sharedFavorites : []
    });
  }

});

module.exports = MenuStore;