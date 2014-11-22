var Reflux = require('reflux');
var MenuActions = require('../actions/menuActions');
var store = require('store');

var MenuStore = Reflux.createStore({

	init : function(){
		this.infoActive = false;
		this.favoritesListActive = false;

		this.listenTo(MenuActions.toggleInfo, this.toggleInfo);
		this.listenTo(MenuActions.hideInfo, this.hideInfo);

		this.listenTo(MenuActions.hideFavoritesList,this.hideFavoritesList);
    this.listenTo(MenuActions.toggleFavoritesList,this.toggleFavoritesList);

    this.listenTo(MenuActions.hideSharedList,this.hideSharedList);
	},

	toggleInfo: function() {
		this.infoActive = !this.infoActive;
		this.favoritesListActive = false;
    this.hideSharedList();

		this.trigger({
			infoActive: this.infoActive,
			favoritesListActive : this.favoritesListActive
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
    this.hideSharedList();

    this.trigger({ 
    	favoritesListActive : this.favoritesListActive,
    	infoActive: this.infoActive
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