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

	sortBy : function(sortType){

		var sortObj = {};
		sortObj[sortType] = -1; 

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

	loadFilters: function(){
		return reqwest({ url: 'http://localhost:1337/ui-data', dataType: 'json', crossOrigin: true  });
	}

}

module.exports = PreviewApi;