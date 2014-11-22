var Reflux = require('reflux');
var utils = require('../utils');
var filterActions = require('../actions/filterActions');
var previewActions = require('../actions/previewActions');

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
		this.updateFilter(this.selectedFilters);

		this.trigger({
			selectedFilters : this.selectedFilters
		});
		
	},

	filterUnselect: function(filter) {
		delete this.selectedFilters[filter.category];
		this.updateFilter(this.selectedFilters);

		this.trigger({
			selectedFilters : this.selectedFilters
		});
	},

	updateFilter: function(filter) {
		var isEmpty = utils.isEmptyObject(filter);
		if(isEmpty) {
			previewActions.load();
		}
		else {
			previewActions.filter(filter);
		}
	},

	//has to be removed, data should be formatted by backend
	convertData: function(data) {
		var res = [
			{
				name: 'Visuelle Form',
				dbId: 'visualform',
				filters: data.visualform
			},
			{
				name: 'Autoren',
				dbId: 'byline',
				filters: data.byline
			},
			{
				name: 'Kategorie',
				dbId: 'category',
				filters: data.category
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