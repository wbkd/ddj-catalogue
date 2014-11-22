var Reflux = require('reflux');
var MenuActions = require('../actions/menuActions');
var Cookies = require('../../bower_components/cookies-js/dist/cookies.min');

var MenuStore = Reflux.createStore({

	init : function(){
		this.infoActive = false;
		this.favoritesListActive = false;

		this.listenTo(MenuActions.toggleInfo, this.toggleInfo);
		this.listenTo(MenuActions.hideInfo, this.hideInfo);

		this.listenTo(MenuActions.hideFavoritesList,this.hideFavoritesList);
    this.listenTo(MenuActions.toggleFavoritesList,this.toggleFavoritesList);
	},


	toggleInfo: function() {
		this.infoActive = !this.infoActive;
		this.favoritesListActive = false;
		this.trigger({
			infoActive: this.infoActive,
			favoritesListActive : this.favoritesListActive
		});
	},

	hideInfo: function() {
		this.infoActive = false;
		Cookies.set('ddj-infobox', 1);
		this.trigger({infoActive: false});
	},

  toggleFavoritesList: function(){
    this.favoritesListActive = !this.favoritesListActive;
    this.infoActive = false;
    this.trigger({ 
    	favoritesListActive : this.favoritesListActive,
    	infoActive: this.infoActive
   	});
  },

  hideFavoritesList : function(){
    this.favoritesListActive = false;
    this.trigger({ favoritesListActive : this.favoritesListActive });
  }

});

module.exports = MenuStore;