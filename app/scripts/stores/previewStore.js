var Reflux = require('reflux');

var previewActions = require('../actions/previewActions');

var PreviewStore = Reflux.createStore({

	init : function(){

		this.previews = [];
		this.detail = {};
		this.loading = false;
		this.error = null;
		this.expandedId = null;

		this.listenTo(previewActions.toggleExpandedPreview,this.toggleExpandedPreview);
		this.listenTo(previewActions.shrinkPreviews,this.shrinkPreviews);

		this.listenTo(previewActions.load,this.onLoadPreviews);
		this.listenTo(previewActions.success,this.onLoadPreviewsSuccess);
		this.listenTo(previewActions.error,this.onLoadPreviewsError);

		this.listenTo(previewActions.loadById,this.onLoadPreviewById);
		this.listenTo(previewActions.successLoadById,this.onLoadPreviewByIdSuccess);
	},


	toggleExpandedPreview : function(previewId){
		this.expandedId = previewId;
		this.trigger({
			expandedId : this.expandedId 
		});
	},

	shrinkPreviews: function(){
		this.toggleExpandedPreview(null);
	},

	/*******************
	
	preview list

	********************/

	onLoadPreviews : function(){
		this.loading = true;
		this.trigger({
			loading : this.loading
		});
	},

	onLoadPreviewsSuccess : function(data){

		this.loading = false;
		this.error = null;
		this.previews = data;

		this.trigger({
			loading : this.loading,
			error : this.error,
			previews : this.previews
		});
	},

	onLoadPreviewsError: function(data){
		this.loading = false;
		this.error = data.error;

		this.trigger({
			loading : this.loading,
			error : this.error
		});
	},

	/*******************
	
	preview detail

	********************/

	onLoadPreviewById : function(){
		this.loading = true;
		this.trigger({
			loading : this.loading
		});
	},

	onLoadPreviewByIdSuccess : function(data){

		this.loading = false;
		this.error = null;
		this.detail = data[0];

		this.trigger({
			loading : this.loading,
			error : this.error,
			detail : this.detail
		});
	},

	sortBy: function(type) {
		console.log(type);
	}

});

module.exports = PreviewStore;