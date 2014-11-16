var Reflux = require('reflux');

var PreviewApi = require('../previewApi');

var previewActions = Reflux.createActions([
  'load',
  'success',
  'error',

  'loadById',
  'successLoadById'
]);

previewActions.load.preEmit = function(){
	PreviewApi
		.load()
		.then(previewActions.success,previewActions.error);
};

previewActions.loadById.preEmit = function(id){
	PreviewApi
		.loadById(id)
		.then(previewActions.successLoadById,previewActions.errorDetail);
};

module.exports = previewActions;