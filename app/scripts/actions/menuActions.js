var Reflux = require('reflux');
var FilterActions = require('./filterActions');

var menuActions = Reflux.createActions([
  'toggleInfo',
  'hideInfo',
  'toggleFavoritesList',
  'hideFavoritesList',
  'hideSharedList',
  'toggleSubmitArea',
  'toggleNewsletterArea',
  'hideAllAreas',
  'toggleFaqArea'
]);

menuActions.toggleInfo.preEmit = function(){
  FilterActions.hideFilterMenu();
}

menuActions.toggleFavoritesList.preEmit = function(){
  FilterActions.hideFilterMenu();
}

module.exports = menuActions;