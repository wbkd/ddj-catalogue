var Reflux = require('reflux');

var routerActions = Reflux.createActions([
  'addQueryParam',
  'removeQueryParam',
  'setInitialQuery'
]);

module.exports = routerActions;