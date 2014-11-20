var reqwest = require('reqwest');
var config = require('./config');

var PreviewApi = {

	currentOffset : 0,

	load : function(){
		return reqwest({ 
			url : config.apiUrl, 
			type : 'json', 
			method: 'get', 
			crossOrigin: true
		});
	},

	loadById : function(id){
		return reqwest({ url : config.apiUrl + '/' + id, type : 'json', crossOrigin: true });
	}

}

module.exports = PreviewApi;