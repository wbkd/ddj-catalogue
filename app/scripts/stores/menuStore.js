var Reflux = require('reflux');
var filterActions = require('../actions/menuActions');

var MenuStore = Reflux.createStore({

	init : function(){
		this.state = {
			isActive : false
		};
		this.listenTo(filterActions.toggleMenu,this.toggleMenu);
	},

	toggleMenu : function(){
		console.log('toggle Menu');
		this.state.isActive = !this.state.isActive;
		this.trigger(this.state);
	}
});

module.exports = MenuStore;