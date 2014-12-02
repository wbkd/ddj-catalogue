var Reflux = require('reflux');
var utils = require('../utils');
var config = require('../config');

var RouteParamStore = Reflux.createStore({

	init : function() {
		this.filters = {};
		this.sortType = config.sortType;
		this.isSortOrderDesc = config.isSortOrderDesc;
	},

	getRouteParams: function() {
		return {
			filters: this.filters,
			sortType: this.sortType,
			isSortOrderDesc: this.isSortOrderDesc
		};
	},

	setRouteParams: function(paramString) {
		var params = paramString;
		if(params.sortby) {
			this.sortType = params.sortby;
			delete params.sortby;
		}
		if(params.order) {
			this.isSortOrderDesc = params.order === 'desc';
			delete params.order;
		}
		//set the params to use them in the views
		this.filters = params;
		console.log(this.isSortOrderDesc);
	},

	updateRoute: function() {
		window.location.hash = window.location.hash + utils.objToUrlParams(this.params);
		if(utils.isEmptyObject(data)) {
			window.location.hash = '/projekte';
		}
		else {
			urlParams = Object.keys(data).map(function(k) {
    			return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
			}).join('&');
			window.location.hash = '/projekte/filter/' + urlParams;
		}
	}

});

module.exports = RouteParamStore;