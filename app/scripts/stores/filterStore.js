var Reflux = require('reflux');
var filterActions = require('../actions/filterActions');
var $ = require('../../bower_components/jquery/dist/jquery');
var previewActions = require('../actions/previewActions');

var FilterStore = Reflux.createStore({

	init : function(){
		this.state = {
			selectedFilters : {},
			uiData: []
		};
		this.listenTo(filterActions.filterSelect,this.filterSelect);
		this.listenTo(filterActions.filterUnselect,this.filterUnselect);
		this.listenTo(filterActions.getFilters,this.getFilters);
	},

	filterSelect: function(filter) {
		this.state.selectedFilters[filter.category] = filter.text;
		this.trigger(this.state);
		this.updateFilter(this.state.selectedFilters);
	},

	filterUnselect: function(filter) {
		delete this.state.selectedFilters[filter.category];
		this.trigger(this.state);
		this.updateFilter(this.state.selectedFilters);
	},

	updateFilter: function(filter) {
		console.log(filter);
		var isEmpty = $.isEmptyObject(filter);
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

	getFilters: function(filter) {
		var self = this;
		$.ajax({
			url: 'http://localhost:1337/ui-data',
			dataType: 'json'
		}).done(function(data) {
			var data = self.convertData(data);
			self.state.uiData = data;
			self.trigger(self.state);
		});
	}



});

module.exports = FilterStore;