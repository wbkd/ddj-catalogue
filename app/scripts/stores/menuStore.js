var Reflux = require('reflux');
var MenuActions = require('../actions/menuActions');
var Cookies = require('../../bower_components/cookies-js/dist/cookies.min');


var MenuStore = Reflux.createStore({

	init : function(){
		this.menuActive = false;
		this.infoActive = false;

		this.listenTo(MenuActions.toggleMenu,this.toggleMenu);
		this.listenTo(MenuActions.toggleInfo, this.toggleInfo);
		this.listenTo(MenuActions.hideInfo, this.hideInfo);
	},

	toggleMenu : function(){
		this.menuActive = !this.menuActive;
		this.trigger({menuActive: this.menuActive});
	},

	toggleInfo: function() {
		this.infoActive = !this.infoActive;
		this.trigger({infoActive: this.infoActive});
	},

	hideInfo: function() {
		this.infoActive = false;
		Cookies.set('ddj-infobox', 1);
		this.trigger({infoActive: false});
	}
});

module.exports = MenuStore;