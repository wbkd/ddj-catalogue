var Reflux = require('reflux');
var utils = require('../utils');
var filterActions = require('../actions/filterActions');
var previewActions = require('../actions/previewActions');
var config = require('../config');

var FilterStore = Reflux.createStore({

	init : function(){
		this.filterMenuActive = false;
		this.selectedFilters = {};
		this.uiData = [];

		this.listenTo(filterActions.toggleFilterMenu,this.toggleFilterMenu);
		this.listenTo(filterActions.hideFilterMenu,this.hideFilterMenu);

		this.listenTo(filterActions.filterSelect,this.filterSelect);
		this.listenTo(filterActions.filterUnselect,this.filterUnselect);

		this.listenTo(filterActions.loadFilters,this.loadFilters);
		this.listenTo(filterActions.loadFiltersSuccess,this.loadFiltersSuccess);
		this.listenTo(filterActions.loadFiltersError,this.loadFiltersError);

	},

	toggleFilterMenu: function(){
		this.filterMenuActive = !this.filterMenuActive;
		this.trigger({
			filterMenuActive : this.filterMenuActive
		});
	},	

	hideFilterMenu: function(){
		this.filterMenuActive = false;
		this.trigger({
			filterMenuActive : this.filterMenuActive
		});
	},

	filterSelect: function(filter) {
		this.selectedFilters[filter.category] = filter.text;

		this.trigger({
			reset : true,
			loading: true,
			selectedFilters : this.selectedFilters
		});		
	},

	filterUnselect: function(filter) {
		delete this.selectedFilters[filter.category];

		this.trigger({
			reset : true,
			loading: true,
			selectedFilters : this.selectedFilters
		});

	},

	//has to be removed, data should be formatted by backend
	convertData: function(data) {
		var res = [
			{
				name: 'Visuelle Form',
				dbId: 'visualform',
				filters: data.visualform,
				isFilterable: false
			},
			{
				name: 'Autoren',
				dbId: 'byline',
				filters: data.byline,
				isFilterable: true
			},
			{
				name: 'Kategorie',
				dbId: 'category',
				filters: data.category,
				isFilterable: false	
			}
		]
		return res;
	},

	loadFilters: function(){
			//this.trigger({});
	},

	loadFiltersSuccess : function(data){
			var data = this.convertData(data);

			this.uiData = data;
			this.trigger({
				uiData : this.uiData
			});
	},

	loadFiltersError : function(error){
			this.trigger({});
	}

});

module.exports = FilterStore;