var Reflux = require('reflux');

var PreviewApi = require('../previewApi');

var previewActions = Reflux.createActions([
  'load',
  'success',
  'error',

  'loadById',
  'successLoadById',

  'toggleExpandedPreview',
  'shrinkPreviews',

  'reset',

  'sortBy'
]);

previewActions.load.preEmit = function(options){
	PreviewApi
		.load(options)
		.then(previewActions.success,previewActions.error);
};

previewActions.loadById.preEmit = function(id){
	PreviewApi
		.loadById(id)
		.then(previewActions.successLoadById,previewActions.errorDetail);
};

module.exports = previewActions;