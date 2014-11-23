var Reflux = require('reflux');
var SubmitApi = require('../submitApi');

var submitActions = Reflux.createActions([
  'submitProject',
  'submitProjectSuccess',
  'submitProjectError'
]);

submitActions.submitProject.preEmit = function(projectUrl){
  SubmitApi
    .submit(projectUrl)
    .then(submitActions.submitProjectSuccess,submitActions.submitProjectError);
};

module.exports = submitActions;
