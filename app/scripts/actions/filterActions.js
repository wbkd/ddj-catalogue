var Reflux = require('reflux');
var StaticApi = require('../apis/staticApi');
var PreviewActions = require('./previewActions');

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

filterActions.filterSelect.preEmit = function() {
  window.scrollTo(0,0);
  PreviewActions.shrinkPreviews();
};

filterActions.toggleFilterMenu.preEmit = function(){
  PreviewActions.shrinkPreviews();
}

module.exports = filterActions;