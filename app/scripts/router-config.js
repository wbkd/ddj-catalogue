var React = require('react');
var Home = require('./pages/home.jsx');
var ErrorPage = require('./pages/404.jsx');

// var RouteParamStore = require('./stores/routeParamStore');

module.exports.routes = {
  
  /*'/projekte?\/([^\/]*)/?' : function(params){
    RouteParamStore.setRouteParams(params);
    React.render(<Home />, document.body);
  },*/

  '/projekte': function() {
  	React.render(<Home />, document.body);
  },
  '/favoriten/:ids' : function(ids){
    React.render(<Home sharedFavoriteIds={ids} />, document.body);
  }
};

module.exports.config = {
  'notfound' : function(){
   	React.render(<ErrorPage />, document.body);
  }
};