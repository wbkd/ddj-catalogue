var Reflux = require('reflux');
var PreviewApi = require('../apis/previewApi');

var favoritesActions = Reflux.createActions([
  'starPreview',
  'loadFavorites',
  'loadSharedFavorites',
  'loadSharedFavoritesSuccess',
  'loadSharedFavoritesError',
  'resetFavorites'
]);

favoritesActions.loadSharedFavorites.preEmit = function(previewIds){
  PreviewApi
    .loadPreviewsById(previewIds)
    .then(favoritesActions.loadSharedFavoritesSuccess,favoritesActions.loadSharedFavoritesError);
};

module.exports = favoritesActions;