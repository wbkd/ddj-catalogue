var Reflux = require('reflux');
var SubmitApi = require('../submitApi');

var submitActions = Reflux.createActions([
  'submitProject',
  'submitProjectSuccess',
  'submitProjectError',

  'resetSubmitArea'
]);

submitActions.submitProject.preEmit = function(data){
  SubmitApi
    .submit(data)
    .then(submitActions.submitProjectSuccess,submitActions.submitProjectError);
};

module.exports = submitActions;
