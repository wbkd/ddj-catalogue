var Reflux = require('reflux');

var favoritesActions = Reflux.createActions([
  'starPreview',
  'loadFavorites'
]);

module.exports = favoritesActions;