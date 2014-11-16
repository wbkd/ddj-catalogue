var React = require('react');
var director = require('director');

require('./components/header.jsx');
require('./components/footer.jsx');
require('./components/filterMenu.jsx');

var PreviewList = require('./components/previewList.jsx');
var PreviewDetail = require('./components/previewDetail.jsx');
var About = require('./components/about.jsx');

var contentNode = document.getElementById('content');

var routes = {
  '/projekte': function(){
  	React.render(<PreviewList />, contentNode);
  },
  '/projekt/:id': function(previewId){
  	React.render(<PreviewDetail id={previewId}/>, contentNode);
  },
  '/informationen': function(){
  	React.render(<About />, contentNode);
  }
};

var routerConfig = {
	notfound : function(){
		// TODO : load 404
		React.render(<PreviewList />, contentNode);
	}
}

var router = new director.Router(routes).configure(routerConfig).init('/projekte');