var Reflux = require('reflux');
var previewActions = require('../actions/previewActions');

var EmbedStore = Reflux.createStore({

  init: function () {
      
    this.isLoading = true;
    this.previews = [];
    
    this.listenTo(previewActions.loadByIdList, this.onloadByIdList);
    this.listenTo(previewActions.successLoadByIdList, this.onLoadPreviewByIdSuccess);
    this.listenTo(previewActions.errorLoadByIdList, this.onLoadPreviewByIdError);
  },
  
  
  onloadByIdList: function(){
    this.isLoading = true;
    this.trigger({
      isLoading : this.isLoading
    });
  },
  
  onLoadPreviewByIdSuccess: function(data){
    this.isLoading = false;
    this.previews = data;
    
    this.trigger({
      isLoading : this.isLoading,
      previews : this.previews
    });  
  },
  
  onLoadPreviewByIdError: function(){
    this.isLoading = false;
    this.trigger({
      isLoading : this.isLoading
    });
  }
  
});

module.exports = EmbedStore;