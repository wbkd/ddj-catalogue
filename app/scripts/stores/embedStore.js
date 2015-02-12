var Reflux = require('reflux');
var previewActions = require('../actions/previewActions');

var EmbedStore = Reflux.createStore({

  init() {
      
    this.isLoading = true;
    this.previews = [];
    
    this.listenTo(previewActions.loadByIdList, this.onloadByIdList);
    this.listenTo(previewActions.successLoadByIdList, this.onLoadPreviewByIdSuccess);
    this.listenTo(previewActions.errorLoadByIdList, this.onLoadPreviewByIdError);
  },
  
  onloadByIdList() {
    this.isLoading = true;
    this.trigger({
      isLoading : this.isLoading
    });
  },
  
  onLoadPreviewByIdSuccess(data) {
    this.previews = data;
    this.isLoading = false;
    
    this.trigger({
      isLoading : this.isLoading,
      previews : this.previews
    });  
  },
  
  onLoadPreviewByIdError() {
    this.isLoading = false;
    this.trigger({
      isLoading : this.isLoading
    });
  }
  
});

module.exports = EmbedStore;