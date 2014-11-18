var React = require('react');
var director = require('director');

var PreviewDetail = require('./components/previewDetail.jsx');
var Home = require('./pages/home.jsx');

var routes = {
  '/projekte': function(){
    React.render(<Home />, document.body);
  },
  '/projekt/:id': function(previewId){
  	React.render(<PreviewDetail id={previewId}/>, document.body);
  }
};

var routerConfig = {
	notfound : function(){
		// TODO : load 404
		React.render(<Home />, document.body);
	}
}

var router = new director.Router(routes).configure(routerConfig).init('/projekte');