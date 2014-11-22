var Reflux = require('reflux');
var FilterActions = require('./filterActions');

var menuActions = Reflux.createActions([
  'toggleInfo',
  'hideInfo',
  'toggleFavoritesList',
  'hideFavoritesList'
]);

menuActions.toggleInfo.preEmit = function(){
  menuActions.hideFavoritesList();
  FilterActions.hideFilterMenu();
}

menuActions.toggleFavoritesList.preEmit = function(){
  menuActions.hideInfo();
  FilterActions.hideFilterMenu();
}

module.exports = menuActions;