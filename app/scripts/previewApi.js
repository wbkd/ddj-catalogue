var reqwest = require('reqwest');
var config = require('./config');

var PreviewApi = {

	currentOffset : 0,

	//initial load
	load : function(){
		return reqwest({ 
			url : config.apiUrl, 
			type : 'json', 
			method: 'get',
			crossOrigin: true
		});
	},

	filter: function(params) {
		return reqwest({ 
			url : config.apiUrl, 
			type : 'json', 
			method: 'post',
			data: {
				filters: params
			},
			crossOrigin: true
		});		
	},

	loadById : function(id){
		return reqwest({ url : config.apiUrl + '/' + id, type : 'json', crossOrigin: true });
	},

	sortBy : function(sortType,isSortOrderDesc){

		var SortOrder = isSortOrderDesc ? -1 : 1,
			sortObj = {};

		sortObj[sortType] = SortOrder; 

		return reqwest({ 
			url : config.apiUrl,
			data : {
				sortby : sortObj
			},
			type : 'json', 
			method: 'post',
			crossOrigin: true 
		});
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