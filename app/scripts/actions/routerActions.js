var Reflux = require('reflux');

var routerActions = Reflux.createActions([
  'removeQueryParam',
  'addQueryParam'
]);

module.exports = routerActions;