var Reflux = require('reflux');

var routerActions = Reflux.createActions([
  'addQueryParam',
  'removeQueryParam',
  'setInitialQuery',
  'changeRoute'
]);

module.exports = routerActions;