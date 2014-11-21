var Reflux = require('reflux');
var MenuActions = require('../actions/menuActions');
var Cookies = require('../../bower_components/cookies-js/dist/cookies.min');

var MenuStore = Reflux.createStore({

	init : function(){
		this.infoActive = false;

		this.listenTo(MenuActions.toggleInfo, this.toggleInfo);
		this.listenTo(MenuActions.hideInfo, this.hideInfo);
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