var Reflux = require('reflux');

var PreviewApi = require('../previewApi');

var previewActions = Reflux.createActions([
  'load',
  'success',
  'error',
  'loadById',
  'successLoadById',
  'filter'
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

previewActions.filter.preEmit = function(params) {
	console.log(params);
	PreviewApi
		.filter(params)
		.then(previewActions.success,previewActions.error);
}

module.exports = previewActions;