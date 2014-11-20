var Reflux = require('reflux');
var filterActions = require('../actions/filterActions');

var FilterStore = Reflux.createStore({

	init : function(){
		this.state = {
			isActive : window.innerWidth > 1280 + 500
		};
		this.listenTo(filterActions.toggleMenu,this.toggleMenu);
	},

	toggleMenu : function(){
		this.state.isActive = !this.state.isActive;
		this.trigger(this.state);
	}

});

module.exports = FilterStore;