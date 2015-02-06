var Reflux = require('reflux');
var SubmitApi = require('../apis/submitApi');

var submitActions = Reflux.createActions([
  'submitProject',
  'submitProjectSuccess',
  'submitProjectError',
  'resetSubmitArea',

  'submitEmail',
  'submitEmailSuccess',
  'submitEmailError',
  'resetNewsletterArea'
]);

submitActions.submitProject.preEmit = function(data){
  SubmitApi
    .submit('project', data)
    .then(submitActions.submitProjectSuccess,submitActions.submitProjectError);
};

submitActions.submitEmail.preEmit = function(data){
  SubmitApi
    .submit('email', data)
    .then(submitActions.submitEmailSuccess,submitActions.submitEmailError);
};

module.exports = submitActions;