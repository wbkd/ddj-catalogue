var Reflux = require('reflux');
var PreviewApi = require('../previewApi');
var PreviewActions = require('./previewActions');

var filterActions = Reflux.createActions([
  'filterSelect',
  'filterUnselect',

  'loadFilters',
  'loadFiltersSuccess',
  'loadFiltersError',

  'toggleFilterMenu',
  'hideFilterMenu',
]);

filterActions.loadFilters.preEmit = function(){
  PreviewApi
    .loadFilters()
    .then(filterActions.loadFiltersSuccess,filterActions.loadFiltersError);
};

filterActions.toggleFilterMenu.preEmit = function(){
  PreviewActions.shrinkPreviews();
}

module.exports = filterActions;