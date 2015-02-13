var Reflux = require('reflux');
var StaticApi = require('../apis/staticApi');
var PreviewActions = require('./previewActions');
var router = require('../router');
var routerActions = require('./routerActions');

var { State } = require('react-router');
var merge = require('merge');

var filterActions = Reflux.createActions([
  'filterSelect',
  'filterUnselect',

  'loadFilters',
  'loadFiltersSuccess',
  'loadFiltersError',

  'toggleFilterMenu',
  'hideFilterMenu',

  'toggleExpand'
]);

filterActions.loadFilters.preEmit = function(){
  StaticApi
    .loadFilters()
    .then(filterActions.loadFiltersSuccess,filterActions.loadFiltersError);
};

filterActions.filterSelect.preEmit = function(params) {
  window.scrollTo(0,0);
  PreviewActions.shrinkPreviews();
  
  routerActions.updateQueryParam('add', params);
};

filterActions.filterUnselect.preEmit = function(params) {
  routerActions.updateQueryParam('remove', params);
};

filterActions.toggleFilterMenu.preEmit = function(){
  PreviewActions.shrinkPreviews();
};

module.exports = filterActions;