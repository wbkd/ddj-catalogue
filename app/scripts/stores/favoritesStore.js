var Reflux = require('reflux');
var config = require('../config');
var utils = require('../utils');

var favoritesActions = require('../actions/favoritesActions');
var menuActions = require('../actions/menuActions');

var store = require('store');


var FavoritesStore = Reflux.createStore({

  init : function(){
    this.favorites = this.storeGet('favorites');

    if(utils.isUndefined(this.favorites)){
      this.favorites = [];
      this.storeSet('favorites', this.favorites);
    }

    this.listenTo(favoritesActions.loadFavorites,this.loadFavorites);
    this.listenTo(favoritesActions.starPreview,this.toggleStar);

    this.listenTo(favoritesActions.loadSharedFavorites,this.loadSharedFavorites);
    this.listenTo(favoritesActions.loadSharedFavoritesSuccess,this.loadSharedFavoritesSuccess);
    this.listenTo(favoritesActions.loadSharedFavoritesError,this.loadSharedFavoritesError);

    this.listenTo(favoritesActions.resetFavorites,this.resetFavorites)
  },

  storeSet:function(key,values){
    if(store.enabled){
      store.set(key,values);
    }
  },

  storeGet:function(key){
    if(store.enabled){
      return store.get(key);
    }
  },

  resetFavorites: function(){
    this.favorites = [];
    this.storeSet('favorites', this.favorites);
    
    this.trigger({ 
     favorites : this.favorites
    });

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
      this.animateStar();
      this.favorites.push(this.getFavoritesData(preview));
    }else{
    // is already in the list -> remove preview
      this.favorites.splice(favoritesPreviewIndex, 1);
    }

    this.storeSet('favorites', this.favorites);

    this.trigger({ 
      favorites : this.favorites,
      favoritesUrl : this.createFavoritesUrl(),
      embedUrl: this.createEmbedUrl()
    });
  },

  loadFavorites: function(){
    this.trigger({ 
      favorites : this.favorites,
      favoritesUrl : this.createFavoritesUrl(),
      embedUrl: this.createEmbedUrl()
    });
  },

  animateStar: function(){
    var starElement = document.getElementById('favorites-star');

    Velocity(starElement,{ color: '#F7CA18', textShadowBlur: '4px' }, { duration: 400, easing: 'ease-in-out' })
      .then(function(){
        Velocity(starElement,{ color: '#555', textShadowBlur: '0'}, { duration: 300, easing: 'ease-in-out'  })
      });
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
    }).join('__');

    return location.origin + '/#/favoriten/' + favoritesUrl;
  },

  createEmbedUrl : function(){
    var embedUrl = this.favorites.map(function(el,i){
      return el.id;
    }).join('__');

    return location.origin + '/#/embed/' + embedUrl;
  },

  getFavoritesData: function(preview){
    return {
      id : preview._id,
      title : preview.title,
      url : preview.url,
      publisher: preview.publisher,
      date: utils.formatDate(preview.date),
      src : preview.serverImageurl ? config.imageUrl + preview.serverImageurl : config.defaultImage
    }
  }

});


module.exports = FavoritesStore;