/**
* the navigation module
*/

// dependencies
var utils = require('./utils');
var $ = require('../bower_components/jquery/dist/jquery');
var ractive = require('../bower_components/ractive/ractive');
require('imports?jQuery=../jquery/dist/jquery!../bower_components/select2/select2');


// module name (exports)
navigation = {};

/* public functions */
navigation.render = function(data) {
	data = formatData(data);
	console.log(data);
	var Navigation = new Ractive({
		el: '#navigation',
		template: '#navigation-template',
		data: data
	});

	Navigation.on('navToggle', function(el) {
		//display or hide filters
		$(el.node).next('.filter-list').toggleClass('hidden');
		//set button active or inactive
		$(el.node).toggleClass('active');
	});

	$('.select2').select2();
}

/* private functions */
function formatData(data) {
	var res = {
		'publisher': [],
		'category': [],
		'type': [],
		'authors': []
	};

	var authors = res.authors,
		categories = res.category,
		publisher = res.publisher,
		type = res.type;
	
	data.forEach(function(d,i) {
		d.byline.forEach(function(author) {
			if(authors.indexOf(author) < 0) authors.push(author);
		});
		d.category.split(',').forEach(function(category) {
			if(categories.indexOf(category) < 0) categories.push(category); 
		});
		if(publisher.indexOf(d.publisher) < 0) publisher.push(d.publisher); 
		d.visualform.split(',').forEach(function(visualform) {
			if(type.indexOf(visualform) < 0) type.push(visualform); 
		});
	});
	
	return res;
}

module.exports = navigation;