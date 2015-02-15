var Reflux = require('reflux');

var routerActions = Reflux.createActions([
  'addQueryParam',
  'removeQueryParam',
  'changeRoute',
  'clearQuery',
  'setToBase'
]);

module.exports = routerActions;