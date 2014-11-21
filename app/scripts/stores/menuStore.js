var Reflux = require('reflux');
var MenuActions = require('../actions/menuActions');
var Cookies = require('../../bower_components/cookies-js/dist/cookies.min');


var MenuStore = Reflux.createStore({

	init : function(){
		this.state = {
			menuActive: false,
			infoActive: false
		};
		this.listenTo(MenuActions.toggleMenu,this.toggleMenu);
		this.listenTo(MenuActions.toggleInfo, this.toggleInfo);
		this.listenTo(MenuActions.hideInfo, this.hideInfo);
	},

	toggleMenu : function(){
		console.log('toggle Menu');
		this.state.menuActive = !this.state.menuActive;
		this.trigger({menuActive: this.state.menuActive});
	},

	toggleInfo: function() {
		this.state.infoActive = !this.state.infoActive;
		this.trigger({infoActive: this.state.infoActive});
	},

	hideInfo: function() {
		this.state.infoActive = false;
		Cookies.set('ddj-infobox', 1);
		this.trigger({infoActive: false});
	}
});

module.exports = MenuStore;