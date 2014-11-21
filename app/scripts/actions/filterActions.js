var Reflux = require('reflux');
var PreviewApi = require('../previewApi');

var filterActions = Reflux.createActions([
  'filterSelect',
  'filterUnselect',

  'loadFilters',
  'loadFiltersSuccess',
  'loadFiltersError',
]);

filterActions.loadFilters.preEmit = function(){
  PreviewApi
    .loadFilters()
    .then(filterActions.loadFiltersSuccess,filterActions.loadFiltersError);
};

module.exports = filterActions;