var React = require('react');
var Home = require('./pages/home.jsx');
var ErrorPage = require('./pages/404.jsx');
var Utils = require('./utils');

module.exports.routes = {
  '/projekte' : function(){
    React.render(<Home />, document.body);
  },
  '/favoriten/:ids' : function(ids){
    React.render(<Home sharedFavoriteIds={ids} />, document.body);
  },
  '/projekte/filter?\/([^\/]*)/?': function(params) {
  	try {
  		var paramObj = Utils.urlParamsToObj(params);
  	}
  	catch(err) {
  		React.render(<Home />, document.body);
  		return true;
  	}
  	React.render(<Home activeFilters={paramObj} />, document.body);
  }
}

module.exports.config = {
  'notfound' : function(){
   	React.render(<ErrorPage />, document.body);
  }
}