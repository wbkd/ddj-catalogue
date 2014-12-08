var Reflux = require('reflux');
var utils = require('../utils');
var config = require('../config');

var filterActions = require('../actions/filterActions');
var previewActions = require('../actions/previewActions');


var FilterStore = Reflux.createStore({

	init : function(){
		this.filterMenuActive = false;
		this.selectedFilters = {};
		this.uiData = [];
    this.expandedGroupIds = [];

		this.listenTo(filterActions.toggleFilterMenu,this.toggleFilterMenu);
		this.listenTo(filterActions.hideFilterMenu,this.hideFilterMenu);
    this.listenTo(filterActions.toggleExpand, this.toggleExpand);

		this.listenTo(filterActions.filterSelect,this.filterSelect);
		this.listenTo(filterActions.filterUnselect,this.filterUnselect);

		this.listenTo(filterActions.loadFilters,this.loadFilters);
		this.listenTo(filterActions.loadFiltersSuccess,this.loadFiltersSuccess);
		this.listenTo(filterActions.loadFiltersError,this.loadFiltersError);

		//this.listenTo(previewStore, this.updateUiData);

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
		var res = [{
				name: 'Visualisierung',
				dbId: 'visualform',
				filters: data.visualform,
				isFilterable: false
			},{
				name: 'Autoren',
				dbId: 'byline',
				filters: data.byline,
				isFilterable: true
			},{
				name: 'Medium',
				dbId: 'publisher',
				filters: data.publisher,
				isFilterable: false	
			},{
				name: 'Kategorie',
				dbId: 'category',
				filters: data.category,
				isFilterable: false	
			}];
		
		return res;
	},

  loadFilters: function(data) {
    //nothing
  },

  toggleExpand: function(groupId) {

    var groupIndex = this.expandedGroupIds.indexOf(groupId);
    //check if is already expanded:
    if(groupIndex > -1) {
      this.expandedGroupIds.splice(groupIndex, 1);
    }
    else {
      this.expandedGroupIds.push(groupId);
    }
    this.trigger({
      expandedGroupIds: this.expandedGroupIds
    });
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