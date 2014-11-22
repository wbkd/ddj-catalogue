var Reflux = require('reflux');
var utils = require('../utils');
var favoritesActions = require('../actions/favoritesActions');
var menuActions = require('../actions/menuActions');

var store = require('store');

var FavoritesStore = Reflux.createStore({

  init : function(){
    this.favorites = store.get('favorites');

    if(utils.isUndefined(this.favorites)){
      store.set('favorites', []);
      this.favorites = [];
    }

    this.listenTo(favoritesActions.loadFavorites,this.loadFavorites);
    this.listenTo(favoritesActions.starPreview,this.toggleStar);
  },


  toggleStar: function(preview){

    var newPreviewId = preview._id,
      favoritesPreviewIndex = -1;

    // check if preview is already in the list  
    this.favorites.forEach(function(el,storeIndex){
      if(newPreviewId === el.id){
        favoritesPreviewIndex = storeIndex;
      }
    });

    // is not in the list -> push preview
    if(favoritesPreviewIndex === -1){
      this.favorites.push(this.getPreviewData(preview));
    }else{
    // is already in the list -> remove preview
      this.favorites.splice(favoritesPreviewIndex, 1);
    }

    store.set('favorites', this.favorites);

    this.trigger({ favorites : this.favorites });
  },

  loadFavorites: function(){
    this.trigger({ favorites : this.favorites });
  },

  getPreviewData: function(preview){
    return {
      id : preview._id,
      title : preview.title,
      url : preview.url,
      src : preview.imageurl || 'http://placehold.it/100x100'
    }
  }

});


module.exports = FavoritesStore;