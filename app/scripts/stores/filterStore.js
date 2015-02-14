var Reflux = require('reflux');
var utils = require('../utils');
var config = require('../config');

var filterActions = require('../actions/filterActions');
var previewActions = require('../actions/previewActions');

var routerActions = require('../actions/routerActions');

var FilterStore = Reflux.createStore({

  init() {
      
    this.filterMenuActive = false;
    this.selectedFilters = {};
    this.uiData = [];
    this.expandedGroupIds = [];

    this.listenTo(filterActions.toggleFilterMenu, this.toggleFilterMenu);
    this.listenTo(filterActions.hideFilterMenu, this.hideFilterMenu);
    this.listenTo(filterActions.toggleExpand, this.toggleExpand);

    this.listenTo(filterActions.filterSelect, this.filterSelect);
    this.listenTo(filterActions.filterUnselect, this.filterUnselect);

    this.listenTo(filterActions.loadFilters, this.loadFilters);
    this.listenTo(filterActions.loadFiltersSuccess, this.loadFiltersSuccess);
    this.listenTo(filterActions.loadFiltersError, this.loadFiltersError);

    //this.listenTo(previewStore, this.updateUiData);
    this.listenTo(routerActions.setInitialQuery, this.updateSelectedFilters);
  },
  
  updateSelectedFilters(query){
    this.selectedFilters = query;
    
    this.trigger({
      isLoading: true,
      selectedFilters: this.selectedFilters
    });
  },

  toggleFilterMenu() {
    this.filterMenuActive = !this.filterMenuActive;
    this.trigger({
      filterMenuActive: this.filterMenuActive
    });
  },

  hideFilterMenu() {
    this.filterMenuActive = false;
    this.trigger({
      filterMenuActive: this.filterMenuActive
    });
  },

  filterSelect(filter) {
    
    this.selectedFilters[filter.category] = filter.text;
    
    this.trigger({
      reset: true,
      isLoading: true,
      selectedFilters: this.selectedFilters
    });
  },

  filterUnselect(filter) {    
    
    delete this.selectedFilters[filter.category];
    
    this.trigger({
      reset: true,
      isLoading: true,
      selectedFilters: this.selectedFilters
    });

  },

  //has to be removed, data should be formatted by backend
  convertData(data) {
    var res = [{
      name: 'Visualisierung',
      dbId: 'visualform',
      filters: data.visualform,
      isFilterable: false
   }, {
      name: 'Autoren',
      dbId: 'byline',
      filters: data.byline,
      isFilterable: true
   }, {
      name: 'Herausgeber/Agentur',
      dbId: 'publisher',
      filters: data.publisher,
      isFilterable: false
   }, {
      name: 'Kategorie',
      dbId: 'category',
      filters: data.category,
      isFilterable: false
   }];

    return res;
  },

  loadFilters(data) {
    //nothing
  },

  toggleExpand(groupId) {

    var groupIndex = this.expandedGroupIds.indexOf(groupId);
    //check if is already expanded:
    if (groupIndex > -1) {
      this.expandedGroupIds.splice(groupIndex, 1);
    } else {
      this.expandedGroupIds.push(groupId);
    }
    this.trigger({
      expandedGroupIds: this.expandedGroupIds
    });
  },

  loadFiltersSuccess(data) {
    var data = this.convertData(data);

    this.uiData = data;
    this.trigger({
      uiData: this.uiData
    });
  },

  loadFiltersError(error) {
    
  }

});

module.exports = FilterStore;