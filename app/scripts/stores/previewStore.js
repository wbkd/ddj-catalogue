var Reflux = require('reflux');

var previewActions = require('../actions/previewActions');

var PreviewStore = Reflux.createStore({

	init : function(){

		this.state = {
			previews : [],
			detail : {},
			loading : false,
			error : null
		};

		this.listenTo(previewActions.load,this.onLoadPreviews);
		this.listenTo(previewActions.success,this.onLoadPreviewsSuccess);
		this.listenTo(previewActions.error,this.onLoadPreviewsError);

		this.listenTo(previewActions.loadById,this.onLoadPreviewById);
		this.listenTo(previewActions.successLoadById,this.onLoadPreviewByIdSuccess);
	},

	/*******************
	
	preview list

	********************/

	onLoadPreviews : function(){
		this.state.loading = true;
		this.trigger(this.state);
	},

	onLoadPreviewsSuccess : function(data){

		this.state.loading = false;
		this.state.error = null;
		this.state.previews = data;

		this.trigger(this.state);
	},

	onLoadPreviewsError: function(data){
		this.state.loading = false;
		this.state.error = data.error;

		this.trigger(this.state);
	},

	/*******************
	
	preview detail

	********************/

	onLoadPreviewById : function(){
		this.state.loading = true;
		this.trigger(this.state);
	},

	onLoadPreviewByIdSuccess : function(data){

		this.state.loading = false;
		this.state.error = null;
		this.state.detail = data[0];

		this.trigger(this.state);
	},

	sortBy: function(type) {
		console.log(type);
	}

});

module.exports = PreviewStore;