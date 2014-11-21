var Reflux = require('reflux');
var FilterActions = require('./filterActions');

var menuActions = Reflux.createActions([
  'toggleInfo',
  'hideInfo'
]);

menuActions.toggleInfo.preEmit = function(){
  FilterActions.hideFilterMenu();
}

module.exports = menuActions;