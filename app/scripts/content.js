/**
 * the content module
 */

// dependencies
var utils = require('./utils');
var $ = require('../bower_components/jquery/dist/jquery');
var ractive = require('../bower_components/ractive/ractive');

  // module name (exports)
  content = {};

  //private fields


/* public functions */

content.render = function(data) {
	var ractiveData = {
		items: data,
		count: data.length
	}

	console.log(data);

	var Sidebar = new Ractive({
		el: '#content',
		template: '#content-template',
		data: ractiveData
	});
}

module.exports = content;