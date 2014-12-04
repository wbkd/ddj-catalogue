var Reflux = require('reflux');
var StaticApi = require('../apis/staticApi');

var faqActions = Reflux.createActions([
  'loadFaqData',
  'loadFaqDataSuccess',
  'loadFaqDataError'
]);

faqActions.loadFaqData.preEmit = function(data){
  StaticApi
    .loadFaqs()
    .then(faqActions.loadFaqDataSuccess,faqActions.loadFaqDataError);
};

module.exports = faqActions;
