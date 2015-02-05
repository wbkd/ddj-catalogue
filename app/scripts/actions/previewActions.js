var Reflux = require('reflux');

var PreviewApi = require('../apis/previewApi');

var previewActions = Reflux.createActions([
  'load',
  'success',
  'error',

  'loadById',
  'successLoadById',

  'toggleExpandedPreview',
  'shrinkPreviews',

  'reset',

  'sortBy',
  
  'loadByIdList',
  'successLoadByIdList',
  'errorLoadByIdList'
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

previewActions.loadByIdList.preEmit = function(ids){
	PreviewApi
		.loadPreviewsById(ids)
		.then(previewActions.successLoadByIdList,previewActions.errorLoadByIdList);
};

module.exports = previewActions;