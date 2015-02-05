var React = require('react');
var Home = require('./pages/home.jsx');
var Embed = require('./pages/embed.jsx');
var ErrorPage = require('./pages/404.jsx');

React.initializeTouchEvents(true);
// var RouteParamStore = require('./stores/routeParamStore');

module.exports.routes = {
  
  /*'/projekte?\/([^\/]*)/?' : function(params){
    RouteParamStore.setRouteParams(params);
    React.render(<Home />, document.body);
  },*/

  '/': function() {
  	React.render(<Home />, document.body);
  },
  '/favoriten/:ids' : function(ids){
    React.render(<Home sharedFavoriteIds={ids} />, document.body);
  },
  'embed/:ids': function(ids){
    React.render(<Embed ids={ids}/>, document.body);
  }
};

module.exports.config = {
  'notfound' : function(){
   	React.render(<ErrorPage />, document.body);
  }
};