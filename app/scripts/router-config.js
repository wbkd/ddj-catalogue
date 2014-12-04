var React = require('react');
var Home = require('./pages/home.jsx');
var ErrorPage = require('./pages/404.jsx');

var RouteParamStore = require('./stores/routeParamStore');

module.exports.routes = {
  '/projekte/?\/([^\/]*)/?' : function(params){
  	console.log(params);
  	//RouteParamStore.setRouteParams(params);
  	RouteParamStore.setRouteParams({
  		sortby: 'social.sum',
  		visualform: 'Chart',
  		order: 'asv'
  	});
    React.render(<Home />, document.body);
  },
  '/projekte': function() {
  	React.render(<Home />, document.body);
  },
  /*'/faqs' : function(){
    React.render(<Faqs />, document.body);
  },*/
  '/favoriten/:ids' : function(ids){
    React.render(<Home sharedFavoriteIds={ids} />, document.body);
  }
}

module.exports.config = {
  'notfound' : function(){
   	React.render(<ErrorPage />, document.body);
  }
}