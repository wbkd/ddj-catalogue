var underscore = require('../bower_components/underscore/underscore');
var jquery = require('../bower_components/jquery/dist/jquery');
var utils = require('./utils');
var ractive = require('../bower_components/ractive/ractive');
var backbone = require('../bower_components/backbone/backbone');
var navigation = require('./navigation');
var content = require('./content');
var dataLoader = require('./dataloader');


//add helper classes to html element
utils.addHelperClasses();

//load initial data
dataLoader.init(renderView);

//render all parts of the application
function renderView(data) {
	console.log(data);
	navigation.render(data);
	content.render(data);
}


