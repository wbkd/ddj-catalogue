var Reflux = require('reflux');
var filterActions = require('../actions/filterActions');

var FilterStore = Reflux.createStore({

	init : function(){
		this.state = {
			isActive : false
		};
		this.listenTo(filterActions.toggleMenu,this.toggleMenu);
	},

	toggleMenu : function(){
		console.log(this.state.isActive);
		this.state.isActive = !this.state.isActive;
		this.trigger(this.state);
	}

});

module.exports = FilterStore;