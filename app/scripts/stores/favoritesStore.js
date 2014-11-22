var Reflux = require('reflux');
var utils = require('../utils');
var favoritesActions = require('../actions/favoritesActions');
var menuActions = require('../actions/menuActions');

var store = require('store');

var FavoritesStore = Reflux.createStore({

  init : function(){
    this.favorites = store.get('favorites');

    if(utils.isUndefined(this.favorites)){
      this.favorites = [];
      store.set('favorites', this.favorites);
    }

    this.listenTo(favoritesActions.loadFavorites,this.loadFavorites);
    this.listenTo(favoritesActions.starPreview,this.toggleStar);

    this.listenTo(favoritesActions.loadSharedFavorites,this.loadSharedFavorites);
    this.listenTo(favoritesActions.loadSharedFavoritesSuccess,this.loadSharedFavoritesSuccess);
    this.listenTo(favoritesActions.loadSharedFavoritesError,this.loadSharedFavoritesError);
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
      this.favorites.push(this.getFavoritesData(preview));
    }else{
    // is already in the list -> remove preview
      this.favorites.splice(favoritesPreviewIndex, 1);
    }

    store.set('favorites', this.favorites);

    this.trigger({ 
      favorites : this.favorites,
      favoritesUrl : this.createFavoritesUrl()
    });
  },

  loadFavorites: function(){
    this.trigger({ 
      favorites : this.favorites,
      favoritesUrl : this.createFavoritesUrl()
    });
  },

  loadSharedFavorites: function(){

  },
  loadSharedFavoritesSuccess: function(previews){

    var sharedFavorites = previews.map(function(el){
      return this.getFavoritesData(el);
    }.bind(this));

    this.trigger({ 
     sharedFavorites : sharedFavorites
    });
  },
  loadSharedFavoritesError: function(){

  },


  /*****************

  helper functions

  ******************/

  createFavoritesUrl : function(){
    var favoritesUrl = this.favorites.map(function(el,i){
      return el.id;
    }).join('-');

    return location.origin + '/#/favoriten/' + favoritesUrl;
  },

  getFavoritesData: function(preview){
    return {
      id : preview._id,
      title : preview.title,
      url : preview.url,
      publisher: preview.publisher,
      date: utils.formatDate(preview.date),
      src : preview.imageurl || 'http://placehold.it/100x100'
    }
  }

});


module.exports = FavoritesStore;