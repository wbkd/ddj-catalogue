var reqwest = require('reqwest');
var config = require('../config');
var utils = require('../utils');

var PreviewApi = {

	//initial load
	load : function(options){

		var SortOrder = options.isSortOrderDesc ? -1 : 1,
			sortObj = {};

		sortObj[options.sortType] = SortOrder; 

		return reqwest({ 
			url : config.apiUrl, 
			data: {
				filters: utils.isEmptyObject(options.filters) ? null : options.filters,
				items : config.itemCount || 50,
				offset : options.lazyIndex || 0,
				sortby : sortObj
			},
			type : 'json', 
			method: 'POST',
			crossOrigin: true
		});
	},

	loadById : function(id){
		return reqwest({ url : config.apiUrl + '/' + id, type : 'json', crossOrigin: true });
	},

	loadPreviewsById: function(previewIds){
		return reqwest({ 
			url : config.apiUrl + '/getbyids',
			data : {
				ids : previewIds
			},
			type : 'json', 
			method: 'post',
			crossOrigin: true 
		});
	},

	loadFilters: function(){
		return reqwest({ url: 'http://localhost:1337/ui-data', dataType: 'json', crossOrigin: true  });
	}

}

module.exports = PreviewApi;