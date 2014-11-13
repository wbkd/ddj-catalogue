var config = require('./config');
var $ = require('../bower_components/jquery/dist/jquery');

loader = {}

loader.init = function(callback) {
	$.getJSON(config.apiUrl + '/api/v' + config.apiVersion + '/projects').done(callback);
}

module.exports = loader;

