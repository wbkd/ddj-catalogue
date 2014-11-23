var Reflux = require('reflux');

var PreviewApi = require('../previewApi');

var previewActions = Reflux.createActions([
  'load',
  'success',
  'error',

  'loadById',
  'successLoadById',
  'filter',

  'sortBy',
  'sortBySuccess',
  'sortByError',

  'toggleExpandedPreview',
  'shrinkPreviews'
]);

previewActions.load.preEmit = function(lazyIndex){
	PreviewApi
		.load(lazyIndex)
		.then(previewActions.success,previewActions.error);
};

previewActions.loadById.preEmit = function(id){
	PreviewApi
		.loadById(id)
		.then(previewActions.successLoadById,previewActions.errorDetail);
};

previewActions.filter.preEmit = function(params) {
	PreviewApi
		.filter(params)
		.then(previewActions.success,previewActions.error);
};

previewActions.sortBy.preEmit = function(sortType, isSortOrderDesc){
  PreviewApi
    .sortBy(sortType,isSortOrderDesc)
    .then(previewActions.sortBySuccess,previewActions.sortByError);
};

module.exports = previewActions;