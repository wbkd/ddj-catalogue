var Reflux = require('reflux');
var previewActions = require('../actions/previewActions');
var FilterActions = require('../actions/filterActions');
var utils = require('../utils');
var config = require('../config');

var PreviewStore = Reflux.createStore({

  init() {
    this.previews = [];
    this.detail = {};
    this.isLoading = false;
    this.error = null;
    this.expandedId = null;
    this.count = 0;

    this.listenTo(previewActions.toggleExpandedPreview, this.toggleExpandedPreview);
    this.listenTo(previewActions.shrinkPreviews, this.shrinkPreviews);

    // preview list events
    this.listenTo(previewActions.load, this.onLoadPreviews);
    this.listenTo(previewActions.success, this.onLoadPreviewsSuccess);
    this.listenTo(previewActions.error, this.onLoadPreviewsError);

    // sortby events
    this.listenTo(previewActions.sortBy, this.sortBy);

    // We dont use these at the moment
    // preview detail events
    this.listenTo(previewActions.loadById, this.onLoadPreviewById);
    this.listenTo(previewActions.successLoadById, this.onLoadPreviewByIdSuccess);
  },

  toggleExpandedPreview(previewId) {
    this.expandedId = this.expandedId === previewId ? null : previewId;

    this.trigger({
      expandedId: this.expandedId
    });
  },

  shrinkPreviews() {
    this.toggleExpandedPreview(null);
  },

  sortBy(sortType, isSortOrderDesc) {
    this.trigger({
      reset: true,
      sortType: sortType,
      isSortOrderDesc: isSortOrderDesc
    })
  },

  /*******************
	
	preview list

	********************/

  onLoadPreviews() {
    this.isLoading = true;
    this.trigger({
      isLoading: this.isLoading
    });
  },

  onLoadPreviewsSuccess(data) {
    this.isLoading = false;
    this.error = null;
    this.previews = data.previews;

    // api only returns count and uidata if offset is 0
    this.count = data.count !== null ? data.count : this.count;

    this.trigger({
      isLoading: this.isLoading,
      error: this.error,
      previews: this.previews,
      count: this.count
    });
  },

  onLoadPreviewsError(data) {
    this.isLoading = false;
    this.error = data.error;

    this.trigger({
      isLoading: this.isLoading,
      error: this.error
    });
  },

  /*******************
	
	preview detail

	********************/

  onLoadPreviewById() {
    this.isLoading = true;
    this.trigger({
      isLoading: this.isLoading
    });
  },

  onLoadPreviewByIdSuccess(data) {

    this.isLoading = false;
    this.error = null;
    this.detail = data[0];

    this.trigger({
      isLoading: this.isLoading,
      error: this.error,
      detail: this.detail
    });
  }

});

module.exports = PreviewStore;