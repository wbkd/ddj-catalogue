var React = require('react');
var { Route, DefaultRoute, NotFoundRoute } = require('react-router'); 

var App = require('./pages/app.jsx');
var Home = require('./pages/home.jsx');
var Embed = require('./pages/embed.jsx');
var NotFound = require('./pages/404.jsx');

var routes = (
  <Route name="app" path="/" handler={ App }>
    <Route name="embed" path="embed/:ids" handler={ Embed } />
    <Route name="favoriten" path="favoriten/:sharedFavoriteIds" handler={ Home } />
    <DefaultRoute handler={ Home }/>
    <NotFoundRoute handler={ NotFound }/>
  </Route>
);

module.exports = routes;