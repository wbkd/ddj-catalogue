var Reflux = require('reflux');

var menuActions = Reflux.createActions([
  'toggleMenu',
  'toggleInfo',
  'hideInfo'
]);

module.exports = menuActions;