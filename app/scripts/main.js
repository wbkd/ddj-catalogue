var utils = require('./utils');
var $ = require('../bower_components/jquery/dist/jquery');
var ractive = require('../bower_components/ractive/ractive');
var navigation = require('./navigation');
var content = require('./content');

//add helper classes to html element
utils.addHelperClasses();

//load sample data
$.getJSON('js/data/data.json').done(function(data) {
	renderView(data);
});

function renderView(data) {
	navigation.render(data);
	content.render(data);
}


